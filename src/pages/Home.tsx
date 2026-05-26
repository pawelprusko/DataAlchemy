import { motion } from 'motion/react';
import Header from '../components/Header';
import { getLatestArticles } from '../lib/api';
import { useState } from 'react';

const CATEGORIES = [
  { id: 'data-arch', number: '01', title: 'Data Architecture Scrolls', desc: 'Structural patterns and data engineering chronicles.' },
  { id: 'vibe-proto', number: '02', title: 'Vibe Prototyping', desc: 'Experimental visualization and prototyping diaries.' },
  { id: 'ai-advocate', number: '03', title: 'Dataviz AI Advocate', desc: 'Working alongside AI to craft data narratives.' },
  { id: 'essays', number: '04', title: 'Personal Essays', desc: 'Thoughts on technology, art, and the future.' },
  { id: 'logs', number: '05', title: 'System Logs', desc: 'Raw notes and updates from recent experiments.' }
];

export default function Home() {
  const articles = getLatestArticles();
  const heroArticle = articles[0];
  const recentArticles = articles.slice(1, 9); // up to 8 articles
  
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const getMonthYear = () => {
    const d = new Date();
    const month = d.toLocaleString('pl-PL', { month: 'long' });
    const year = d.getFullYear();
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-text-main">
      <Header />

      <main className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        {/* Section 1: Current Focus Log */}
        <section className="mb-12">
          <h2 className="text-xs font-mono tracking-widest text-text-muted mb-4 uppercase">Projects Status</h2>
          <div className="text-sm text-text-main/80 font-mono leading-relaxed">
            <span className="font-bold text-secondary">[ {getMonthYear()} ]</span> — Obecnie pracuję nad ewaluacją nowych modeli generatywnych do analizy zbiorów danych oraz prototypuję interfejsy wizualizacji (Vibe Prototyping) dla branży energetycznej.
          </div>
        </section>

        {/* Section 2: AI Advocate Tip */}
        <section className="mb-16 py-4 px-6 border-l-2 border-primary bg-primary/5">
          <h2 className="text-xs font-mono tracking-widest text-primary mb-4 flex items-center gap-2 uppercase">
            <span className="text-lg leading-none">&gt;_</span>
            Dataviz AI Advocate Tip
          </h2>
          <p className="text-sm text-text-main font-mono leading-relaxed mb-4">
            Zawsze zaczynaj od zdefiniowania schematu JSON dla danych wyjściowych, gdy prosisz LLM o formatowanie. Zmniejsza to o 80% konieczność ręcznego czyszczenia kodu w komponentach D3 lub Recharts.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="group inline-flex items-center">
              <span className="text-sm font-semibold tracking-wide text-primary border-b border-primary/30 pb-0.5 group-hover:border-primary/80 group-hover:text-primary/80 transition-all">Check It</span>
            </a>
          </div>
        </section>

        {/* Section 3: The Hero Article */}
        {heroArticle && (
          <section className="mb-20 group cursor-pointer block">
            <div className="relative aspect-square w-full overflow-hidden bg-text-darker/20 mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent z-10" />
              {/* Artifact Effect overlay */}
              <div className="absolute inset-0 mix-blend-overlay opacity-30 z-10" style={{ backgroundImage: 'radial-gradient(circle, #F3EFE9 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <img
                src={heroArticle.heroImageUrl}
                alt={heroArticle.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main mb-6 leading-tight group-hover:text-secondary transition-colors duration-500">
              {heroArticle.title}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed font-serif mb-6 line-clamp-3">
              {heroArticle.excerpt}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-wide text-text-main border-b border-text-main/30 pb-0.5 group-hover:border-secondary group-hover:text-secondary transition-all">Czytaj dalej</span>
            </div>
          </section>
        )}

        {/* Section 4: Recent Archive */}
        {recentArticles.length > 0 && (
          <section className="mb-20">
            <h2 className="text-xs font-mono tracking-widest text-text-muted mb-6 uppercase">
              Last Articles
            </h2>
            <div className="flex flex-col gap-6">
              {recentArticles.map((article) => (
                <article key={article.id} className="group cursor-pointer flex flex-col md:flex-row gap-2 md:gap-8 items-baseline py-4 border-b border-text-darker/40 last:border-0 transition-colors">
                  <div className="w-32 flex-shrink-0 text-xs font-mono text-text-muted">
                    24 Maj 2026
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl text-text-main group-hover:text-secondary transition-colors mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono uppercase text-secondary group-hover:text-secondary/80 transition-colors">
                      {article.category}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: Categories as Accordions */}
        <section className="mb-20">
          <h2 className="text-xs font-mono tracking-widest text-text-muted mb-6 uppercase">
            Article Genres
          </h2>
          <div className="flex flex-col divide-y divide-text-darker/40 border-y border-text-darker/40">
            {CATEGORIES.map((cat) => {
              const isExpanded = expandedCategory === cat.id;
              return (
                <div key={cat.id} className="flex flex-col">
                  <button 
                    onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                    className="flex items-baseline md:items-center py-6 text-left group gap-4 md:gap-8"
                  >
                    <span className="font-heading text-4xl font-light text-text-muted/60 group-hover:text-text-muted/30 transition-colors w-16 flex-shrink-0 italic">
                      {cat.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-secondary group-hover:text-secondary/70 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm font-sans text-text-muted mt-1">
                        {cat.desc}
                      </p>
                    </div>
                    <span className="text-text-main/30 group-hover:text-text-main transition-colors text-2xl font-light font-sans">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>
                  {isExpanded && (
                    <div className="pb-8 pl-4 md:pl-24 pr-4">
                      <div className="flex flex-col gap-4 text-sm font-sans">
                        {articles.slice(0, 3).map((article, i) => (
                          <a key={i} href="#" className="flex flex-col gap-1 py-3 group/link">
                            <span className="font-heading text-lg text-text-main/90 group-hover/link:text-secondary transition-colors">{article.title}</span>
                            <span className="text-text-muted line-clamp-1">{article.excerpt}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: Services (Anti-Sales) */}
        <section className="mb-0">
          <div className="text-text-muted font-sans leading-relaxed text-[15px]">
            <p>
              Pomagam organizacjom lepiej rozumieć ich dane poprzez architekturę informacji oraz wizualne eksperymenty. 
              Moja kooperacja opiera się na audytach systemów analitycznych, konsultacjach infrastruktury, wewnętrznych warsztatach oraz 
              bezpośredniej pracy projektowej z zespołami inżynieryjnymi w modelu <span className="text-text-main font-medium">Vibe Prototyping</span>.
              Jeśli potrzebujesz kogoś, kto połączy twarde inżynierstwo danych z ludzką narracją wizualną, znajdziesz mnie w sieci.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-text-darker/30 py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-medium text-text-main/60">Data Alchemist © {new Date().getFullYear()}</div>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-sm text-text-muted hover:text-text-main transition-colors">LinkedIn</a>
            <a href="#" className="font-mono text-sm text-text-muted hover:text-text-main transition-colors">Twitter</a>
            <a href="#" className="font-mono text-sm text-text-muted hover:text-text-main transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
