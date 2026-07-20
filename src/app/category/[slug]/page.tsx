import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORIES, getArticlesByCategory, type CatSlug } from '@/content/articles';
import { CategoryContent } from '@/components/Article';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.nameHi} (${cat.nameEn})`,
    description: cat.taglineHi,
    alternates: { canonical: `/category/${slug}` }
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();
  const articles = getArticlesByCategory(slug as CatSlug);
  return <CategoryContent cat={cat} articles={articles} />;
}
