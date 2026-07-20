'use client';

import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Bilingual reading: Hindi is the site's NATIVE language (SSR default, SEO
 * language), English is a one-tap translation. The choice persists per
 * visitor. No registration, no server round-trip — both languages ship with
 * the page, so switching is instant.
 */
export type Lang = 'hi' | 'en';

const KEY = 'oldco_lang';

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'hi',
  setLang: () => {}
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('hi');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(KEY);
      if (saved === 'en' || saved === 'hi') setLangState(saved);
    } catch {
      /* storage blocked — stay Hindi */
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      /* best-effort */
    }
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
