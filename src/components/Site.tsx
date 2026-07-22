'use client';

import Link from 'next/link';
import { useLang } from '@/lib/lang';
import { CATEGORIES, ARTICLES } from '@/content/articles';

/**
 * Magazine-style chrome (v2 redesign), bilingual: breaking-news ticker,
 * bold masthead, sticky icon nav with the language toggle, rich footer
 * with a giant watermark. Motion comes from the CSS magazine kit in
 * globals.css and honours prefers-reduced-motion.
 */

function latest(n: number) {
  return [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, n);
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center overflow-hidden rounded-full border border-gold-400/60 text-xs font-semibold">
      <button
        onClick={() => setLang('hi')}
        className={`px-3 py-1.5 transition ${lang === 'hi' ? 'bg-gold-500 text-white' : 'text-ink-800 hover:bg-gold-300/20'}`}
        aria-pressed={lang === 'hi'}
      >
        हिन्दी
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 transition ${lang === 'en' ? 'bg-gold-500 text-white' : 'text-ink-800 hover:bg-gold-300/20'}`}
        aria-pressed={lang === 'en'}
      >
        English
      </button>
    </div>
  );
}

export function SiteHeader() {
  const { lang } = useLang();
  const ticker = latest(8);
  return (
    <header id="top">
      {/* Ticker bar */}
      <div className="bg-ink-950 text-ivory-50">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-1.5 text-[11px]">
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 font-bold uppercase tracking-widest">
            <span className="mk-live-dot" /> {lang === 'hi' ? 'ताज़ा' : 'Latest'}
          </span>
          <div className="mk-ticker relative flex-1">
            <div className="mk-ticker-track">
              {[...ticker, ...ticker].map((a, i) => (
                <Link key={i} href={`/articles/${a.slug}`} className="whitespace-nowrap opacity-80 transition hover:opacity-100">
                  <span className="mr-2 text-gold-300">◆</span>
                  {lang === 'hi' ? a.titleHi : a.titleEn}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="relative overflow-hidden border-b border-gold-400/30 bg-ivory-50">
        <div className="mk-orb" style={{ width: 280, height: 280, right: -90, top: -130, background: 'var(--gold)' }} />
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6">
          <Link href="/" className="flex flex-wrap items-baseline gap-3">
            <span className="font-serif text-4xl font-black tracking-tight text-ink-900 sm:text-5xl">
              OldCo<span className="gold-text">.in</span>
            </span>
            <span className="mk-chip hidden text-gold-600 sm:inline-flex">
              {lang === 'hi' ? 'पुराने सिक्कों की दुनिया' : 'The world of old coins'}
            </span>
          </Link>
          <LangToggle />
        </div>
      </div>

      {/* Sticky icon nav */}
      <nav className="sticky top-0 z-40 border-b border-gold-400/30 bg-ivory-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-4 py-3 text-sm font-semibold text-ink-800 [scrollbar-width:none]">
          <Link href="/" className="mk-underline shrink-0 whitespace-nowrap transition hover:text-gold-600">
            ⌂ {lang === 'hi' ? 'मुखपृष्ठ' : 'Home'}
          </Link>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="mk-underline shrink-0 whitespace-nowrap transition hover:text-gold-600">
              <span className="mr-1" aria-hidden>{c.icon}</span>
              {lang === 'hi' ? c.nameHi : c.nameEn}
            </Link>
          ))}
          <Link href="/about" className="mk-underline shrink-0 whitespace-nowrap opacity-70 transition hover:text-gold-600">
            {lang === 'hi' ? 'हमारे बारे में' : 'About'}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const { lang } = useLang();
  const fresh = latest(4);
  return (
    <footer className="relative mt-16 overflow-hidden bg-ink-900 text-ivory-100">
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      <div className="mk-watermark text-ivory-50">OldCo</div>
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-black">
              OldCo<span className="gold-text">.in</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-100/70">
              {lang === 'hi' ? 'पुराने सिक्कों का इतिहास, क़ीमत और संग्रह — सबकी भाषा में। मुफ़्त, बिना रजिस्ट्रेशन।' : 'The history, value and craft of old Indian coins — in your language. Free, no registration.'}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gold-300">{lang === 'hi' ? 'विषय' : 'Topics'}</p>
            <ul className="mt-3 space-y-2 text-sm text-ivory-100/70">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className="transition hover:text-gold-300">
                    <span className="mr-1.5" aria-hidden>{c.icon}</span>
                    {lang === 'hi' ? c.nameHi : c.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gold-300">{lang === 'hi' ? 'ताज़ा लेख' : 'Fresh off the desk'}</p>
            <ul className="mt-3 space-y-2.5 text-sm text-ivory-100/70">
              {fresh.map((a) => (
                <li key={a.slug}>
                  <Link href={`/articles/${a.slug}`} className="line-clamp-2 transition hover:text-gold-300">
                    {lang === 'hi' ? a.titleHi : a.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gold-300">{lang === 'hi' ? 'साइट' : 'Site'}</p>
            <ul className="mt-3 space-y-2 text-sm text-ivory-100/70">
              <li><Link href="/about" className="transition hover:text-gold-300">{lang === 'hi' ? 'हमारे बारे में' : 'About us'}</Link></li>
              <li><Link href="/contact" className="transition hover:text-gold-300">{lang === 'hi' ? 'संपर्क' : 'Contact'}</Link></li>
              <li><Link href="/privacy" className="transition hover:text-gold-300">{lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}</Link></li>
              <li><Link href="/terms" className="transition hover:text-gold-300">{lang === 'hi' ? 'नियम व शर्तें' : 'Terms'}</Link></li>
              <li><a href="#top" className="transition hover:text-gold-300">↑ {lang === 'hi' ? 'ऊपर जाएँ' : 'Back to top'}</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-ivory-100/10 pt-6 text-xs leading-relaxed text-ivory-100/50">
          {lang === 'hi'
            ? 'अस्वीकरण: OldCo.in केवल शैक्षिक जानकारी प्रकाशित करता है — हम सिक्के न ख़रीदते हैं, न बेचते हैं, न मूल्यांकन प्रमाणपत्र देते हैं। सिक्कों की क़ीमत दशा, प्रामाणिकता और बाज़ार पर निर्भर करती है; बड़े सौदों से पहले प्रतिष्ठित डीलर या ग्रेडिंग विशेषज्ञ से परामर्श करें। याद रखें: RBI पुराने सिक्के नहीं ख़रीदता — अग्रिम फ़ीस माँगने वाला हर “ख़रीदार” ठग है।'
            : 'Disclaimer: OldCo.in publishes educational information only — we do not buy or sell coins, and we issue no valuation certificates. Coin values depend on condition, authenticity and the market; consult a reputable dealer or grading expert before significant deals. Remember: the RBI does not buy old coins — any “buyer” demanding an advance fee is a fraud.'}
        </p>
        <p className="mt-4 text-xs text-ivory-100/40">© {new Date().getFullYear()} OldCo.in</p>
      </div>
    </footer>
  );
}
