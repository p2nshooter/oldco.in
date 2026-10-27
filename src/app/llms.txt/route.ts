import { ARTICLES, CATEGORIES } from '@/content/articles';

// /llms.txt (llmstxt.org) — what OldCo.in is and where its articles are, for AI search engines and
// assistants: the same pages as the sitemap, with their summaries, in Hindi and English.
export const dynamic = 'force-static';

const BASE = 'https://oldco.in';

export function GET() {
  const text = [
    '# OldCo.in',
    '',
    `> Old Indian coins — history, real value, grading and collecting — in Hindi and English. पुराने भारतीय सिक्कों का इतिहास, असली क़ीमत और संग्रह की कला।`,
    '',
    ...CATEGORIES.flatMap((c) => [
      `## ${c.nameEn} · ${c.nameHi}`,
      '',
      ...ARTICLES.filter((a) => a.category === c.slug).map((a) => `- [${a.titleEn}](${BASE}/articles/${a.slug}): ${a.excerptEn}`),
      '',
    ]),
    '## Optional',
    '',
    ...['about', 'contact', 'editorial-policy', 'privacy', 'terms', 'disclaimer'].map((p) => `- [${p}](${BASE}/${p})`),
    '',
  ].join('\n');
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
