import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "संपादकीय नीति · Editorial Policy",
  description: "How OldCo.in researches, writes, reviews and corrects its articles, the sources we rely on and the standards we hold ourselves to.",
  alternates: { canonical: '/editorial-policy' }
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">संपादकीय नीति</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>हर लेख हमारी टीम मानक सूचीपत्रों, संग्रहालयों और भारतीय रिज़र्व बैंक के प्रकाशनों और स्थापित नीलामी घरों के रिकॉर्ड के आधार पर लिखती और जाँचती है। जहाँ जानकारी अनिश्चित है, हम साफ़ बताते हैं। ग़लती मिलने पर हम उसे जल्दी सुधारते हैं। कोई भी विज्ञापनदाता या डीलर हमारी सामग्री को प्रभावित नहीं कर सकता।</p>
        <h2>Editorial Policy (English)</h2>
        <p>Readers trust OldCo.in to explain old Indian coins and numismatics accurately and honestly. This page sets out how we try to deserve that trust.</p>
        <h2>Our standards</h2>
        <ul>
          <li><strong>Useful first:</strong> every article answers a real question and leaves the reader with something practical.</li>
          <li><strong>Accurate and sourced:</strong> factual claims are checked against reliable sources before publication.</li>
          <li><strong>Honest about uncertainty:</strong> we say when evidence is limited, mixed or still developing.</li>
          <li><strong>Plain language:</strong> technical terms are explained the first time they appear.</li>
          <li><strong>Independent:</strong> no advertiser, brand or company can pay for coverage or influence what we write.</li>
        </ul>
        <h2>Sources we rely on</h2>
        <ul>
          <li>Standard numismatic catalogs and references.</li>
          <li>Publications of museums, the Reserve Bank of India and government mints.</li>
          <li>Auction records from established auction houses, read with care.</li>
          <li>Peer-reviewed historical and archaeological research.</li>
        </ul>
        <h2>How articles are made</h2>
        <p>Each article is researched and drafted by our editorial team, then edited for accuracy, clarity and usefulness. We remove claims we cannot support and avoid sensational headlines. We hold every article on the site to these standards and revise or remove those that fall short.</p>
        <h2>Updates and corrections</h2>
        <p>We review articles regularly and when rules, research or products change. When we find a mistake, we correct it promptly. You can report errors through our <a href="/contact" className="text-gold-600 underline">contact page</a>.</p>
        <h2>Advertising</h2>
        <p>The site is funded by advertising served by Google AdSense, clearly separated from editorial content.</p>
      </div>
    </div>
  );
}
