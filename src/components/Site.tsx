'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/lib/lang';
import { CATEGORIES } from '@/content/articles';

/** Header + footer + language toggle — one client bundle, both languages inline. */

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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold-400/30 bg-ivory-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="font-serif text-2xl font-black tracking-tight text-ink-900">
            OldCo<span className="gold-text">.in</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-gold-600 sm:inline">
            {lang === 'hi' ? 'पुराने सिक्कों की दुनिया' : 'The world of old coins'}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="text-sm font-medium text-ink-800 transition hover:text-gold-600"
            >
              {lang === 'hi' ? c.nameHi : c.nameEn}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-gold-400/50 p-2 lg:hidden"
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gold-400/25 bg-ivory-50 px-4 py-3 lg:hidden">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm font-medium text-ink-800 hover:bg-gold-300/15"
            >
              {c.icon} {lang === 'hi' ? c.nameHi : c.nameEn}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { lang } = useLang();
  return (
    <footer className="mt-16 border-t border-gold-400/30 bg-ink-900 text-ivory-100">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-black">
              OldCo<span className="gold-text">.in</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-100/70">
              {lang === 'hi'
                ? 'पुराने सिक्कों का इतिहास, क़ीमत और संग्रह — सबकी भाषा में। मुफ़्त, बिना रजिस्ट्रेशन।'
                : 'The history, value and craft of old Indian coins — in your language. Free, no registration.'}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gold-300">{lang === 'hi' ? 'विषय' : 'Topics'}</p>
            <ul className="mt-3 space-y-2 text-sm text-ivory-100/70">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className="hover:text-gold-300">
                    {lang === 'hi' ? c.nameHi : c.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gold-300">{lang === 'hi' ? 'साइट' : 'Site'}</p>
            <ul className="mt-3 space-y-2 text-sm text-ivory-100/70">
              <li><Link href="/about" className="hover:text-gold-300">{lang === 'hi' ? 'हमारे बारे में' : 'About us'}</Link></li>
              <li><Link href="/contact" className="hover:text-gold-300">{lang === 'hi' ? 'संपर्क' : 'Contact'}</Link></li>
              <li><Link href="/privacy" className="hover:text-gold-300">{lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}</Link></li>
              <li><Link href="/terms" className="hover:text-gold-300">{lang === 'hi' ? 'नियम व शर्तें' : 'Terms'}</Link></li>
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
