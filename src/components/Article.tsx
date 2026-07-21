'use client';

import Link from 'next/link';
import { useLang } from '@/lib/lang';
import { AdSlot } from '@/components/AdSlot';
import { CATEGORIES, type Article } from '@/content/articles';

/** Article tile for grids — premium framed card. */
export function ArticleCard({ article }: { article: Article }) {
  const { lang } = useLang();
  const cat = CATEGORIES.find((c) => c.slug === article.category);
  return (
    <Link href={`/articles/${article.slug}`} className="premium-card block p-5">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-600">
        {cat ? (lang === 'hi' ? cat.nameHi : cat.nameEn) : ''}
      </p>
      <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug text-ink-900">
        {lang === 'hi' ? article.titleHi : article.titleEn}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-800/70">
        {lang === 'hi' ? article.excerptHi : article.excerptEn}
      </p>
      <p className="mt-3 text-xs text-gold-600">
        {article.minutes} {lang === 'hi' ? 'मिनट की पढ़ाई' : 'min read'}
      </p>
    </Link>
  );
}

/** Full article body: sections in the current language, with tasteful ad
 * placement between (never inside) sections — one after the intro, one
 * mid-article. Density stays reader-first and AdSense-compliant. */
export function ArticleBody({ article }: { article: Article }) {
  const { lang } = useLang();

  return (
    <article className="mx-auto max-w-prose2 px-4">
      <h1 className="font-serif text-3xl font-black leading-tight text-ink-900 sm:text-4xl">
        {lang === 'hi' ? article.titleHi : article.titleEn}
      </h1>
      <p className="mt-3 text-sm text-gold-600">
        {new Date(article.date).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}{' '}
        · {article.minutes} {lang === 'hi' ? 'मिनट' : 'min'}
      </p>
      <div className="ornament-rule mt-5" />

      <div className={`article-body mt-6 ${lang === 'hi' ? 'dropcap-hi' : 'dropcap-en'}`}>
        {article.sections.map((s, i) => (
          <section key={i}>
            {/* Reader-friendly ad density: distinct in-content slots spaced ~2
                sections apart (each centrally controlled from the ulyah.com
                admin), so a normal article shows 3–4 tasteful ads with the
                footer unit — never inside a paragraph, never sticky. */}
            {i === 1 && <AdSlot placement="in_article" />}
            {i === 3 && <AdSlot placement="in_article_1" />}
            {i === 5 && <AdSlot placement="in_article_2" />}
            {(lang === 'hi' ? s.hHi : s.hEn) && <h2>{lang === 'hi' ? s.hHi : s.hEn}</h2>}
            {(lang === 'hi' ? s.pHi : s.pEn).map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </section>
        ))}
      </div>

      <AdSlot placement="footer" />

      <div className="ornament-rule mt-10" />
      <p className="mt-4 text-xs leading-relaxed text-ink-800/60">
        {lang === 'hi'
          ? 'यह लेख केवल शैक्षिक उद्देश्य से है। सिक्कों की क़ीमत दशा और प्रामाणिकता पर निर्भर करती है — बड़े सौदों से पहले प्रतिष्ठित विशेषज्ञ से परामर्श करें।'
          : 'This article is for educational purposes only. Coin values depend on condition and authenticity — consult a reputable expert before significant deals.'}
      </p>
    </article>
  );
}

export function RelatedArticles({ articles }: { articles: Article[] }) {
  const { lang } = useLang();
  if (articles.length === 0) return null;
  return (
    <div className="mx-auto mt-12 max-w-prose2 px-4">
      <h2 className="font-serif text-xl font-bold text-ink-900">
        {lang === 'hi' ? 'आगे पढ़िए' : 'Keep reading'}
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}

/** Home hero + category strip + article grid. */
export function HomeContent({ articles }: { articles: Article[] }) {
  const { lang } = useLang();
  return (
    <div>
      <section className="paper-motif border-b border-gold-400/30">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">
            {lang === 'hi' ? 'मुफ़्त · बिना रजिस्ट्रेशन · हिन्दी में' : 'Free · No registration · In Hindi & English'}
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-black leading-tight text-ink-900 sm:text-5xl">
            {lang === 'hi' ? (
              <>पैसे की समझ, <span className="gold-text">आपकी भाषा</span> में</>
            ) : (
              <>Money, understood — <span className="gold-text">in your language</span></>
            )}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-800/75">
            {lang === 'hi'
              ? 'निवेश, बचत, टैक्स, बीमा और डिजिटल पैसे पर गहरे, ईमानदार और आसान लेख — हर लेख हिन्दी और अंग्रेज़ी दोनों में।'
              : 'Deep, honest, plain-spoken guides to investing, saving, tax, insurance and digital money — every article in both Hindi and English.'}
          </p>
          <div className="ornament-rule mx-auto mt-8 max-w-md" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="premium-card p-4 text-center"
            >
              <span className="text-2xl">{c.icon}</span>
              <p className="mt-2 font-serif text-sm font-bold text-ink-900">{lang === 'hi' ? c.nameHi : c.nameEn}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          {lang === 'hi' ? 'ताज़ा लेख' : 'Latest articles'}
        </h2>
        <div className="ornament-rule mt-3 max-w-xs" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <AdSlot placement="footer" />
      </section>
    </div>
  );
}

/** Category page content. */
export function CategoryContent({ cat, articles }: { cat: (typeof CATEGORIES)[number]; articles: Article[] }) {
  const { lang } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-3xl">{cat.icon}</p>
      <h1 className="mt-2 font-serif text-3xl font-black text-ink-900">{lang === 'hi' ? cat.nameHi : cat.nameEn}</h1>
      <p className="mt-2 max-w-xl text-ink-800/70">{lang === 'hi' ? cat.taglineHi : cat.taglineEn}</p>
      <div className="ornament-rule mt-5 max-w-sm" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
