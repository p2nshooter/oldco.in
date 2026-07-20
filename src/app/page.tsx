import { ARTICLES } from '@/content/articles';
import { HomeContent } from '@/components/Article';

// Fully static home — prerendered at build, served from the CDN.
export default function HomePage() {
  const latest = [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
  return <HomeContent articles={latest} />;
}
