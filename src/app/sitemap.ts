import type { MetadataRoute } from 'next';
import { ARTICLES, CATEGORIES } from '@/content/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://oldco.in';
  return [
    { url: base, changeFrequency: 'daily', priority: 1 },
    ...CATEGORIES.map((c) => ({ url: `${base}/category/${c.slug}`, changeFrequency: 'weekly' as const, priority: 0.7 })),
    ...ARTICLES.map((a) => ({
      url: `${base}/articles/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    })),
    { url: `${base}/about`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: 'yearly', priority: 0.2 }
  ];
}
