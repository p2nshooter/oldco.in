import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES, CATEGORIES, getArticle, getArticlesByCategory } from '@/content/articles';
import { ArticleBody, RelatedArticles } from '@/components/Article';

const BASE = 'https://oldco.in';
const NAME = 'OldCo.in';

interface Props { params: Promise<{ slug: string }>; }
export function generateStaticParams() { return ARTICLES.map((a) => ({ slug: a.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `${BASE}/articles/${slug}`;
  return {
    title: article.titleHi,
    description: article.excerptHi,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: { title: article.titleHi, description: article.excerptHi, type: 'article', url, publishedTime: article.date, modifiedTime: article.date, section: article.category },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const cat = CATEGORIES.find((c) => c.slug === article.category);
  const catName = cat?.nameEn ?? article.category;
  const related = getArticlesByCategory(article.category).filter((a) => a.slug !== slug).slice(0, 2);
  const wordCount = article.sections.reduce((n, s) => n + s.pEn.join(' ').split(/\s+/).filter(Boolean).length, 0);
  const url = `${BASE}/articles/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', '@id': `${url}#article`,
        headline: article.titleHi, alternativeHeadline: article.titleEn,
        description: article.excerptHi, datePublished: article.date, dateModified: article.date,
        articleSection: catName, wordCount, inLanguage: ['hi', 'en'], isAccessibleForFree: true,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: { '@type': 'Organization', name: NAME, url: BASE },
        publisher: { '@type': 'Organization', name: NAME, url: BASE, logo: { '@type': 'ImageObject', url: `${BASE}/icon.svg` } },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: NAME, item: BASE },
          { '@type': 'ListItem', position: 2, name: catName, item: `${BASE}/category/${article.category}` },
          { '@type': 'ListItem', position: 3, name: article.titleEn, item: url },
        ],
      },
    ],
  };
  return (
    <div className="py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleBody article={article} />
      <RelatedArticles articles={related} />
    </div>
  );
}
