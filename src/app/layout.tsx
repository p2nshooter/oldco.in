import type { Metadata } from 'next';
import { SiteBeacon } from "@/components/SiteBeacon";
import { Noto_Serif_Devanagari, Inter } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/lib/lang';
import { SiteHeader, SiteFooter } from '@/components/Site';
import { GlobalAds } from '@/components/Ads';

// Devanagari-first typography: Hindi is the native language of the site.
const deva = Noto_Serif_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-serif',
  display: 'swap'
});
const inter = Inter({ subsets: ['latin'], variable: '--font-deva', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://oldco.in'),
  title: {
    default: 'OldCo.in — पुराने सिक्कों की दुनिया, आपकी भाषा में',
    template: '%s · OldCo.in'
  },
  description:
    'पुराने भारतीय सिक्कों का इतिहास, असली क़ीमत, ग्रेडिंग और संग्रह की कला — हिन्दी और अंग्रेज़ी में, मुफ़्त, बिना रजिस्ट्रेशन। Honest guides to old Indian coins, their history and value, in Hindi and English.',
  alternates: { canonical: '/' },
  // Own brand favicon — overrides the leftover Sedo parking favicon that a
  // browser may still show for a freshly-migrated domain.
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'OldCo.in',
    type: 'website',
    locale: 'hi_IN'
  },
  other: { 'google-adsense-account': 'ca-pub-6371903555702163' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${deva.variable} ${inter.variable}`}>
      <head>
        {/* Google AdSense — the one loader + account meta, on every page. */}
        <meta name="google-adsense-account" content="ca-pub-6371903555702163" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6371903555702163"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                { '@type': 'Organization', '@id': 'https://oldco.in#org', name: 'OldCo.in', url: 'https://oldco.in', logo: 'https://oldco.in/icon.svg' },
                { '@type': 'WebSite', '@id': 'https://oldco.in#site', name: 'OldCo.in', url: 'https://oldco.in', publisher: { '@id': 'https://oldco.in#org' }, inLanguage: ['hi','en'] },
              ],
            }),
          }}
        />
      </head>
      <body className="font-serif">
        <SiteBeacon />
        <LangProvider>
          <SiteHeader />
          <main className="min-h-[60vh]">{children}</main>
          <SiteFooter />
          <GlobalAds />
        </LangProvider>
      </body>
    </html>
  );
}
