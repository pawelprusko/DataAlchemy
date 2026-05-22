import { motion } from 'motion/react';
import TopBanner from '../components/TopBanner';
import Header from '../components/Header';
import DesktopBlocker from '../components/DesktopBlocker';
import CategoryFilter from '../components/CategoryFilter';
import ArticleHero from '../components/ArticleHero';
import ArticleList from '../components/ArticleList';
import Newsletter from '../components/Newsletter';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { getLatestArticles } from '../lib/api';

export default function Home() {
  const articles = getLatestArticles();
  const heroArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      <DesktopBlocker />
      <Header />
      <TopBanner />

      <main className="pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-5 mt-4 space-y-16">
            {heroArticle && <ArticleHero article={heroArticle} />}

            {remainingArticles.length > 0 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-xs font-heading font-medium tracking-[0.2em] text-[#EFC88B] uppercase">ARTICLES AND TUTORIALS</h2>
                  <div className="h-[1px] flex-grow bg-white/5" />
                </div>
                <ArticleList articles={remainingArticles} />
              </section>
            )}
          </div>
          
          <CategoryFilter />
        </motion.div>

        <Newsletter />
        <Services />
      </main>
      
      <Footer />
    </div>
  );
}
