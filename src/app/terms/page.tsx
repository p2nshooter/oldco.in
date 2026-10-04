import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "नियम व शर्तें · Terms of Use",
  description: "The conditions for using oldco.in: personal use of our articles, information not advice, links, advertising and changes.",
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">नियम व शर्तें</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>OldCo.in की सारी सामग्री सामान्य शैक्षिक जानकारी है। आप लेख पढ़ सकते हैं, प्रिंट कर सकते हैं और स्रोत के लिंक के साथ छोटे अंश उद्धृत कर सकते हैं, लेकिन पूरे लेख कहीं और प्रकाशित करना या व्यावसायिक उपयोग करना बिना लिखित अनुमति के मना है।</p>
        <p>साइट पर बताई गई क़ीमतें केवल संकेत हैं, मूल्यांकन नहीं। किसी भी ख़रीद-बिक्री का निर्णय आपकी अपनी ज़िम्मेदारी है।</p>
        <h2>Terms of Use (English)</h2>
        <p>By using oldco.in you agree to these terms. If you do not agree, please do not use the site.</p>
        <h2>Using our articles</h2>
        <p>You may read, print and share links to our articles for personal use, and quote short excerpts with credit and a link. You may not republish complete articles or use them commercially without our written permission.</p>
        <h2>Information, not advice</h2>
        <p>All content is general educational information about old Indian coins and numismatics. It is not a professional valuation or appraisal. Decisions you make based on it are your own responsibility; consult a reputable numismatist, registered dealer or a recognized museum expert for your situation. See our <a href="/disclaimer" className="text-gold-600 underline">disclaimer</a>.</p>
        <h2>Links</h2>
        <p>We link to official sources and other useful sites. We do not control them and are not responsible for their content.</p>
        <h2>Advertising</h2>
        <p>The site is supported by ads served by Google AdSense. Ads are separate from our editorial content, and their appearance is not an endorsement.</p>
        <h2>Acceptable use</h2>
        <p>Do not use the site unlawfully, attempt to access non-public systems or copy content in bulk with automated tools.</p>
        <h2>Liability</h2>
        <p>We work to keep OldCo.in accurate, but we provide it as-is and cannot guarantee that every detail is complete or current. To the extent permitted by law, we are not liable for losses arising from use of the site.</p>
        <h2>Changes</h2>
        <p>We may update the site and these terms at any time; the review date above shows the latest version.</p>
      </div>
    </div>
  );
}
