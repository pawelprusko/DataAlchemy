/// <reference types="vite/client" />

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  heroImageUrl: string;
}

export function getLatestArticles(): Article[] {
  // Read local JSON files using Vite's fast glob
  const files = import.meta.glob('/src/data/articles/*.json', { eager: true });
  const articles: Article[] = [];

  for (const path in files) {
    const file = files[path] as { default: Article } | Article;
    articles.push('default' in file ? file.default : file);
  }

  // Sort by date descending
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
