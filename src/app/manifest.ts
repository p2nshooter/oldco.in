import type { MetadataRoute } from 'next';

// The web app manifest (owner, 27 Oct 2026: SEO "file2 lain yg d butuhkan"): the icons Android, Chrome
// and search show for the site. A plain "browser" display — this is a reading site, not an app.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OldCo.in',
    short_name: 'OldCo.in',
    description: 'Old Indian coins — history, real value, grading and collecting — in Hindi and English. पुराने भारतीय सिक्कों का इतिहास, असली क़ीमत और संग्रह की कला।',
    lang: 'hi',
    start_url: '/',
    scope: '/',
    display: 'browser',
    background_color: '#f8f3e7',
    theme_color: '#26120b',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
