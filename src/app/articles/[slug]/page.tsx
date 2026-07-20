import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES, getArticle, getArticlesByCategory } from '@/content/articles';
import { ArticleBody, RelatedArticles } from '@/components/Article';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.titleHi,
    description: article.excerptHi,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: { title: article.titleHi, description: article.excerptHi, type: 'article' }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.titleHi,
    alternativeHeadline: article.titleEn,
    description: article.excerptHi,
    datePublished: article.date,
    inLanguage: ['hi', 'en'],
    isAccessibleForFree: true,
    author: { '@type': 'Organization', name: 'OldCo.in' },
    publisher: { '@type': 'Organization', name: 'OldCo.in' }
  };

  return (
    <div className="py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleBody article={article} />
      <RelatedArticles articles={related} />
    </div>
  );
}
