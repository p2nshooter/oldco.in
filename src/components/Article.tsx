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

export function HomeContent({ articles }: { articles: Article[] }) {
  const { lang } = useLang();
  const latest = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = latest[0];
  const featuredCat = featured ? CATEGORIES.find((c) => c.slug === featured.category) : undefined;
  return (
    <div>
      {/* Hero — animated orbs + grid ornament + the newest piece as the splash. */}
      <section className="relative overflow-hidden border-b border-gold-400/30">
        <div className="mk-grid-bg absolute inset-0" aria-hidden />
        <div className="mk-orb" style={{ width: 360, height: 360, left: -130, top: -90, background: 'var(--gold)' }} aria-hidden />
        <div className="mk-orb mk-orb-2" style={{ width: 300, height: 300, right: -70, bottom: -130, background: 'var(--gold)' }} aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-20">
          <div className="mk-fade-up">
            <span className="mk-chip text-gold-600">
              {lang === 'hi' ? 'मुफ़्त · बिना रजिस्ट्रेशन · हिन्दी + English' : 'Free · No registration · Hindi + English'}
            </span>
            <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-ink-900 sm:text-6xl">
              {lang === 'hi' ? (
                <>पुराने सिक्कों की दुनिया, <span className="gold-text">आपकी भाषा</span> में</>
              ) : (
                <>Old Indian coins, <span className="gold-text">finally explained</span></>
              )}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-800/75 sm:text-lg">
              {lang === 'hi'
                ? 'सिक्कों का इतिहास, असली क़ीमत, संग्रह की कला और ठगों से बचाव — गहरे, ईमानदार लेख, हर एक हिन्दी और अंग्रेज़ी दोनों में।'
                : 'The history, honest values, collecting craft and scam-proofing of old Indian coins — deep, candid articles, every one in both Hindi and English.'}
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-serif text-3xl font-black text-gold-600">{articles.length}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-800/60">{lang === 'hi' ? 'मौलिक लेख' : 'Original articles'}</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-black text-gold-600">{CATEGORIES.length}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-800/60">{lang === 'hi' ? 'विषय' : 'Topic desks'}</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-black text-gold-600">2</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-800/60">{lang === 'hi' ? 'भाषाएँ — हिन्दी + English' : 'Languages — Hindi + English'}</p>
              </div>
            </div>
          </div>
          {featured && (
            <div className="relative self-center">
              <div className="mk-ring" style={{ width: 340, height: 340, right: -40, top: -40 }} aria-hidden />
              <Link href={`/articles/${featured.slug}`} className="premium-card mk-fade-up mk-d2 relative block p-7">
                <span className="mk-chip text-gold-600">
                  ★ {lang === 'hi' ? 'विशेष' : 'Featured'} · {lang === 'hi' ? featuredCat?.nameHi : featuredCat?.nameEn}
                </span>
                <h2 className="mt-4 font-serif text-2xl font-black leading-snug text-ink-900">
                  {lang === 'hi' ? featured.titleHi : featured.titleEn}
                </h2>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-800/70">
                  {lang === 'hi' ? featured.excerptHi : featured.excerptEn}
                </p>
                <p className="mt-4 text-sm font-bold text-gold-600">{lang === 'hi' ? 'पूरा लेख पढ़िए →' : 'Read the full story →'}</p>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Topic desks */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-bold text-ink-900">{lang === 'hi' ? 'विषय चुनिए' : 'Explore by topic'}</h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">{CATEGORIES.length} {lang === 'hi' ? 'विषय' : 'desks'}</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {CATEGORIES.map((c, i) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className={`premium-card mk-lift mk-fade-up mk-d${Math.min(i + 1, 6)} p-5`}>
              <span className="mk-icon-bubble" aria-hidden>{c.icon}</span>
              <p className="mt-3 font-serif text-base font-bold text-ink-900">{lang === 'hi' ? c.nameHi : c.nameEn}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-800/60">{lang === 'hi' ? c.taglineHi : c.taglineEn}</p>
              <p className="mt-2 text-[11px] font-semibold text-gold-600">
                {articles.filter((a) => a.category === c.slug).length} {lang === 'hi' ? 'लेख →' : 'articles →'}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-bold text-ink-900">{lang === 'hi' ? 'ताज़ा लेख' : 'Latest articles'}</h2>
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold-600">
            <span className="mk-live-dot" /> {lang === 'hi' ? 'नियमित अपडेट' : 'Updated often'}
          </span>
        </div>
        <div className="ornament-rule mt-3 max-w-xs" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => (
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
