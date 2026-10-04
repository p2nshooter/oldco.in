import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "गोपनीयता नीति · Privacy Policy",
  description: "What information OldCo.in collects, how Google AdSense uses cookies, how long data is kept and your rights.",
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">गोपनीयता नीति</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>OldCo.in पढ़ने के लिए किसी खाते या निजी जानकारी की ज़रूरत नहीं है। हम पेज-व्यू की गिनती बिना कुकी और बिना आपकी पहचान के करते हैं। अगर आप हमें ईमेल करते हैं, तो आपके पते और संदेश का उपयोग केवल जवाब देने के लिए होता है।</p>
        <p>साइट पर Google AdSense के विज्ञापन दिखते हैं। Google और उसके साझेदार आपकी पिछली विज़िट के आधार पर विज्ञापन दिखाने के लिए कुकी का उपयोग कर सकते हैं। आप <a href="https://www.google.com/settings/ads" className="text-gold-600 underline" target="_blank" rel="noopener">Google विज्ञापन सेटिंग</a> में व्यक्तिगत विज्ञापन बंद कर सकते हैं। डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 के तहत अपने अधिकारों के लिए हमें लिखें।</p>
        <h2>Privacy Policy (English)</h2>
        <p>This policy explains what information is processed when you visit oldco.in, why, and the choices you have. We collect as little as possible.</p>
        <h2>Information we collect</h2>
        <ul>
          <li><strong>Reading without an account.</strong> You can read all of OldCo.in without registering or giving us any personal details.</li>
          <li><strong>Visit statistics.</strong> We count anonymous page views (which page and when) without setting our own cookies and without identifying you.</li>
          <li><strong>Messages.</strong> If you email us, we use your address and message only to reply, and keep them only as long as needed.</li>
          <li><strong>Server logs.</strong> Our hosting provider processes technical data such as IP addresses for a short period to deliver pages securely and prevent abuse.</li>
        </ul>
        <h2>Advertising: Google AdSense</h2>
        <p>This site shows ads served by Google AdSense. Google and its partners use cookies to serve ads based on your prior visits to this website and other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this and other sites on the internet.</p>
        <p>You can opt out of personalized advertising in <a href="https://www.google.com/settings/ads" className="text-gold-600 underline" target="_blank" rel="noopener">Google's Ads Settings</a>, learn <a href="https://policies.google.com/technologies/partner-sites" className="text-gold-600 underline" target="_blank" rel="noopener">how Google uses information from sites that use its services</a>, and opt out of some third-party vendors' cookies at <a href="https://www.aboutads.info" className="text-gold-600 underline" target="_blank" rel="noopener">www.aboutads.info</a>. Visitors from the European Economic Area, the United Kingdom and Switzerland are asked for consent before advertising cookies are used.</p>
        <h2>Children</h2>
        <p>OldCo.in is written for adults and does not knowingly collect personal information from children under 13.</p>
        <h2>Your rights</h2>
        <p>Depending on where you live, you may have the right to access, correct or delete personal information about you, to object to its processing and to withdraw consent. We do not sell personal information. To make a request, email <a href="mailto:hello@oldco.in" className="text-gold-600 underline">hello@oldco.in</a>.</p>
        <h2>Changes</h2>
        <p>If we change how we handle information, we will update this page and its review date. See also our <a href="/cookies" className="text-gold-600 underline">cookie policy</a>.</p>
      </div>
    </div>
  );
}
