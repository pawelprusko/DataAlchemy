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
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-white">
      <Header />

      <main className="max-w-3xl mx-auto px-6 pt-16 pb-32">
        {/* Section 1: Current Focus Log */}
        <section className="mb-12">
          <h2 className="text-xs font-mono tracking-widest text-text-muted mb-3 uppercase">Status</h2>
          <div className="text-sm text-text-main/80 font-mono leading-relaxed">
            <span className="font-bold text-white">[ {getMonthYear()} ]</span> — Obecnie pracuję nad ewaluacją nowych modeli generatywnych do analizy zbiorów danych oraz prototypuję interfejsy wizualizacji (Vibe Prototyping) dla branży energetycznej.
          </div>
        </section>

        {/* Section 2: AI Advocate Tip */}
        <section className="mb-20 py-5 px-6 border-l-2 border-tertiary">
          <h2 className="text-xs font-mono tracking-widest text-tertiary mb-3 flex items-center gap-2 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(189,255,234,0.6)]"></span>
            AI Advocate Tip
          </h2>
          <p className="text-sm text-text-main/90 font-mono leading-relaxed">
            <span className="text-tertiary mr-2">&gt;_</span> Zawsze zaczynaj od zdefiniowania schematu JSON dla danych wyjściowych, gdy prosisz LLM o formatowanie. Zmniejsza to o 80% konieczność ręcznego czyszczenia kodu w komponentach D3 lub Recharts.
          </p>
        </section>

        {/* Section 3: The Hero Article */}
        {heroArticle && (
          <section className="mb-24 group cursor-pointer block">
            <div className="relative aspect-square w-full overflow-hidden bg-white/5 mb-8">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent z-10" />
              {/* Artifact Effect overlay */}
              <div className="absolute inset-0 mix-blend-overlay opacity-30 z-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <img
                src={heroArticle.heroImageUrl}
                alt={heroArticle.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight group-hover:text-primary transition-colors duration-500">
              {heroArticle.title}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed font-serif mb-6 line-clamp-3">
              {heroArticle.excerpt}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-wide text-white border-b border-white/30 pb-0.5 group-hover:border-primary group-hover:text-primary transition-all">Czytaj dalej</span>
            </div>
          </section>
        )}

        {/* Section 4: Recent Archive */}
        {recentArticles.length > 0 && (
          <section className="mb-24">
            <h2 className="text-xs font-mono tracking-widest text-text-muted mb-8 uppercase flex items-center gap-4">
              Ostatnie Archiwum
              <div className="flex-1 h-[1px] bg-white/10" />
            </h2>
            <div className="flex flex-col gap-6">
              {recentArticles.map((article) => (
                <article key={article.id} className="group cursor-pointer flex flex-col md:flex-row gap-2 md:gap-8 items-baseline py-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] -mx-4 px-4 transition-colors">
                  <div className="w-32 flex-shrink-0 text-xs font-mono text-text-muted/60">
                    24 Maj 2026
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl text-white/90 group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono uppercase text-secondary">
                      {article.category}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: Categories as Accordions */}
        <section className="mb-32">
          <h2 className="text-xs font-mono tracking-widest text-text-muted mb-8 uppercase flex items-center gap-4">
            Wolumeny
            <div className="flex-1 h-[1px] bg-white/10" />
          </h2>
          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {CATEGORIES.map((cat) => {
              const isExpanded = expandedCategory === cat.id;
              return (
                <div key={cat.id} className="flex flex-col">
                  <button 
                    onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                    className="flex items-baseline md:items-center py-6 text-left group gap-4 md:gap-8"
                  >
                    <span className="font-heading text-4xl font-light text-white/10 group-hover:text-white/30 transition-colors w-16 flex-shrink-0 italic">
                      {cat.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-white/90 group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm font-sans text-text-muted mt-1 opacity-60">
                        {cat.desc}
                      </p>
                    </div>
                    <span className="text-white/30 group-hover:text-white transition-colors text-2xl font-light font-sans">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>
                  {isExpanded && (
                    <div className="pb-8 pl-4 md:pl-24 pr-4">
                      <div className="flex flex-col gap-4 text-sm font-sans">
                        {articles.slice(0, 3).map((article, i) => (
                          <a key={i} href="#" className="flex flex-col gap-1 py-3 group/link">
                            <span className="font-heading text-lg text-white/80 group-hover/link:text-secondary transition-colors">{article.title}</span>
                            <span className="text-text-muted/60 line-clamp-1">{article.excerpt}</span>
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
        <section className="mb-16">
          <div className="text-text-muted font-sans leading-relaxed text-[15px]">
            <p>
              Pomagam organizacjom lepiej rozumieć ich dane poprzez architekturę informacji oraz wizualne eksperymenty. 
              Moja kooperacja opiera się na audytach systemów analitycznych, konsultacjach infrastruktury, wewnętrznych warsztatach oraz 
              bezpośredniej pracy projektowej z zespołami inżynieryjnymi w modelu <span className="text-white font-medium">Vibe Prototyping</span>.
              Jeśli potrzebujesz kogoś, kto połączy twarde inżynierstwo danych z ludzką narracją wizualną, znajdziesz mnie w sieci.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-medium text-white/60">Data Alchemist © {new Date().getFullYear()}</div>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-sm text-text-muted hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="font-mono text-sm text-text-muted hover:text-white transition-colors">Twitter</a>
            <a href="#" className="font-mono text-sm text-text-muted hover:text-white transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
