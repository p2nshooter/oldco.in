import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "हमारे बारे में · About OldCo.in",
  description: "Who we are, what OldCo.in covers, how we research every guide on old Indian coins and numismatics and why we stay independent.",
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">हमारे बारे में</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>OldCo.in एक स्वतंत्र शैक्षिक प्रकाशन है जो पुराने भारतीय सिक्कों की दुनिया को आपकी अपनी भाषा में खोलता है — उनका इतिहास, पहचान, ग्रेडिंग, रख-रखाव और उनकी ईमानदार क़ीमत। सब कुछ हिंदी और अंग्रेज़ी में, मुफ़्त और बिना किसी रजिस्ट्रेशन के।</p>
        <h2>हम क्या लिखते हैं</h2>
        <ul>
          <li>प्राचीन भारत, सल्तनत, मुग़ल, रियासतों, ब्रिटिश भारत और गणतंत्र के सिक्कों का इतिहास।</li>
          <li>सिक्कों की पहचान और ग्रेडिंग: लेख, टकसाल के निशान और हालत।</li>
          <li>संग्रह की देखभाल: सिक्कों को कैसे पकड़ें, सफ़ाई की आम ग़लतियाँ और सुरक्षित भंडारण।</li>
          <li>क़ीमत: किसी सिक्के का मूल्य किन बातों पर निर्भर करता है।</li>
          <li>ठगी से बचाव: साधारण सिक्कों के लिए लाखों रुपये के झूठे ऑफ़र कैसे पहचानें।</li>
        </ul>
        <h2>हमारी स्वतंत्रता</h2>
        <p>हम सिक्के न ख़रीदते हैं, न बेचते हैं और न किसी सौदे में बिचौलिए बनते हैं। साइट का ख़र्च Google AdSense के विज्ञापनों से चलता है, जो हमारी सामग्री से साफ़ अलग रहते हैं।</p>
        <h2>About OldCo.in (English)</h2>
        <p>OldCo.in is an independent educational publication about old Indian coins: their history, how to identify and grade them, how to care for a collection and what they are honestly worth. We write in Hindi and English, free of charge and without registration.</p>
        <h2>What we cover</h2>
        <ul>
          <li>History: coins from ancient India, the Sultanates, the Mughals, the princely states, British India and the Republic.</li>
          <li>Identification and grading: reading inscriptions, mint marks and condition.</li>
          <li>Care and storage: handling, cleaning mistakes to avoid and safe storage.</li>
          <li>Value: what drives the price of a coin and how to get an honest opinion.</li>
          <li>Scams: fake offers of huge sums for ordinary coins and how to recognize them.</li>
        </ul>
        <h2>How we work</h2>
        <p>Every article is researched and written by our editorial team and checked against reliable sources before it is published. We explain technical terms in plain language, say clearly when evidence is limited or mixed, and update articles when the facts change. Our full standards are set out in our <a href="/editorial-policy" className="text-gold-600 underline">editorial policy</a>.</p>
        <h2>Independence</h2>
        <p>OldCo.in is free to read and supported by advertising served by Google AdSense, which is kept clearly separate from our articles. We do not accept payment for coverage, and advertisers have no say in what we publish.</p>
        <h2>What we are not</h2>
        <p>Our articles are general information, not a professional valuation or appraisal. For decisions about your own situation, speak with a reputable numismatist, registered dealer or a recognized museum expert.</p>
        <h2>Contact</h2>
        <p>Corrections, questions and topic ideas are welcome. See our <a href="/contact" className="text-gold-600 underline">contact page</a> or email <a href="mailto:hello@oldco.in" className="text-gold-600 underline">hello@oldco.in</a>.</p>
      </div>
    </div>
  );
}
