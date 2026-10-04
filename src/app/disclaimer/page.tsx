import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "अस्वीकरण · Disclaimer",
  description: "The limits of the information published on OldCo.in about old Indian coins and numismatics, and when to consult a professional.",
  alternates: { canonical: '/disclaimer' }
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black">अस्वीकरण</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 4 October 2026</p>
      <div className="article-body mt-6">
        <p>क़ीमतें केवल सामान्य संकेत हैं; किसी सिक्के का असली मूल्य उसकी प्रामाणिकता, दुर्लभता और हालत पर निर्भर करता है। साधारण पुराने सिक्कों या नोटों के लिए लाखों रुपये के ऑफ़र लगभग हमेशा धोखा होते हैं, जो पहले "रजिस्ट्रेशन फ़ीस" या "टैक्स" माँगते हैं। भारतीय रिज़र्व बैंक ने सार्वजनिक रूप से चेतावनी दी है कि वह ऐसे लेन-देन नहीं करता।</p>
        <p>भारत में सौ साल से पुराने सिक्के पुरावशेष और बहुमूल्य कलाकृति अधिनियम, 1972 के तहत पुरावशेष हो सकते हैं। ऐसी वस्तुओं की ख़रीद, बिक्री या निर्यात से पहले भारतीय पुरातत्व सर्वेक्षण से मौजूदा नियम जाँच लें।</p>
        <h2>Disclaimer (English)</h2>
        <p>OldCo.in publishes general educational information about old Indian coins and numismatics. Please read it with the following limits in mind.</p>
        <h2>Values are indicative</h2>
        <p>Prices and values mentioned on OldCo.in are general indications based on published references and past auction results. The real value of a coin depends on its authenticity, rarity and condition and can only be established by examining it. Nothing on the site is a valuation or an offer to buy or sell.</p>
        <h2>Beware of scams</h2>
        <p>Offers to buy ordinary old coins or notes for lakhs of rupees are almost always frauds that ask for a "registration fee" or "tax" in advance. The Reserve Bank of India has publicly warned that it does not deal in such transactions and does not authorize anyone to do so on its behalf. OldCo.in never buys or sells coins and never asks for payment.</p>
        <h2>Antiquities law</h2>
        <p>In India, coins that are more than one hundred years old can be antiquities under the Antiquities and Art Treasures Act, 1972. Their export is prohibited without permission, and some may need to be registered. Check the current rules with the Archaeological Survey of India before buying, selling or moving such items.</p>
        <h2>Accuracy</h2>
        <p>We research carefully and review articles regularly, but information can become outdated. If you spot an error, please <a href="/contact" className="text-gold-600 underline">tell us</a>.</p>
        <h2>Advertising</h2>
        <p>Ads on the site are served by Google AdSense. We do not choose individual advertisers and are not responsible for their offers.</p>
      </div>
    </div>
  );
}
