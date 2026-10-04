import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "कुकी नीति · Cookie Policy",
  description: "Which cookies may be used on oldco.in, why OldCo.in sets none of its own and how to control advertising cookies.",
  alternates: { canonical: '/cookies' }
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">कुकी नीति</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>OldCo.in ख़ुद आपको ट्रैक करने के लिए कोई कुकी नहीं लगाता। विज्ञापन दिखाने के लिए Google और उसके साझेदार कुकी लगा सकते हैं। आप अपने ब्राउज़र की सेटिंग में कुकी देख, रोक या मिटा सकते हैं, और Google विज्ञापन सेटिंग में व्यक्तिगत विज्ञापन बंद कर सकते हैं।</p>
        <h2>Cookie Policy (English)</h2>
        <p>Cookies are small text files a website stores in your browser. This page explains which cookies may be used on this site and how to control them.</p>
        <h2>Cookies set by OldCo.in</h2>
        <p>OldCo.in does not set its own cookies to track you. Our visit statistics are counted without cookies and without identifying individual readers.</p>
        <h2>Advertising cookies from Google</h2>
        <p>The site shows ads served by Google AdSense. Google and its partners may set or read cookies to show ads, limit how often you see the same ad, measure ad performance, personalize ads where you have allowed it and prevent fraud. Visitors in the European Economic Area, the United Kingdom and Switzerland are asked for consent first; if you decline, you will see non-personalized ads.</p>
        <p>You can manage personalized ads in <a href="https://www.google.com/settings/ads" className="text-gold-600 underline" target="_blank" rel="noopener">Google's Ads Settings</a> and read <a href="https://policies.google.com/technologies/ads" className="text-gold-600 underline" target="_blank" rel="noopener">how Google uses cookies in advertising</a>.</p>
        <h2>Controlling cookies in your browser</h2>
        <ul>
          <li><strong>Chrome:</strong> Settings → Privacy and security → Third-party cookies.</li>
          <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data.</li>
          <li><strong>Safari:</strong> Settings → Privacy → Manage Website Data.</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions.</li>
        </ul>
        <p>Blocking cookies will not stop you from reading OldCo.in. Questions: <a href="mailto:hello@oldco.in" className="text-gold-600 underline">hello@oldco.in</a>.</p>
      </div>
    </div>
  );
}
