import type { Metadata } from 'next';

/**
 * Our own promotion (owner, 18 Oct 2026): AXTO and XAA, written for
 * OldCo.in's collectors in Hindi and English — labelled openly, no valuation
 * or authenticity claims, no ad slot.
 */
export const metadata: Metadata = {
  title: 'संग्राहकों के डिजिटल साथी — AXTO & XAA',
  description:
    'प्रकाशक की ओर से विज्ञापन: सिक्कों के नोट्स और वीडियो के लिए AXTO, और डीलरों व संग्राहक समितियों की वेबसाइट के लिए XAA. Our own promotion, clearly labelled.',
  alternates: { canonical: '/collector-tools' }
};

const link = (base: string) => `${base}/?utm_source=oldco.in&utm_medium=referral&utm_campaign=ecosystem`;

export default function CollectorToolsPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">✦ प्रकाशक की ओर से · From our publisher</p>
      <h1 className="mt-2 font-serif text-3xl font-black">संग्राहकों के डिजिटल साथी</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <p className="mt-4 text-sm opacity-60">Last reviewed: 19 October 2026</p>
      <div className="article-body mt-6">
        <p>
          OldCo.in पर हम पुराने भारतीय सिक्कों का इतिहास, पहचान, देखभाल और ठगी से बचाव समझाते हैं। इस पेज पर हम उन दो परियोजनाओं से मिलवा रहे हैं जो OldCo.in के ही
          प्रकाशक की हैं — यानी यह साफ़ तौर पर हमारा अपना विज्ञापन है।
        </p>

        <h2>AXTO — संग्रह की डायरी और वीडियो, आपके अपने डिवाइस पर</h2>
        <ul>
          <li>
            <a href={link('https://axto.io')} className="text-gold-600 underline" rel="noopener">AXTO</a> के <strong>AI Studio</strong> में आप अपने संग्रह के नोट्स, सिक्के की तस्वीर या
            किसी पुरानी किताब का पन्ना डालकर सारांश बनवा सकते हैं, या उस पर लिखी पंक्ति का अर्थ पूछ सकते हैं — और कई AI मॉडलों के जवाब आमने-सामने देख सकते हैं।
          </li>
          <li>
            <strong>Clipper</strong> किसी लंबे वीडियो से छोटी, सबटाइटल वाली क्लिप आपके अपने डिवाइस पर बनाता है — प्रदर्शनी या संग्रह दिखाने के लिए उपयोगी।
          </li>
          <li>
            AI का ख़र्च सीधे उस सेवा को जाता है जिसकी कुंजी आप जोड़ते हैं — AXTO बीच में सिर्फ़ संदेशवाहक है। मेनू और बटन हिंदी में देखे जा सकते हैं।
          </li>
        </ul>
        <p>
          एक ज़रूरी चेतावनी: कोई भी AI किसी सिक्के को असली या नकली साबित नहीं कर सकता, न ही उसकी सही क़ीमत बता सकता है। प्रमाणिकता और मूल्य के लिए किसी मान्य विशेषज्ञ
          या ग्रेडिंग सेवा से जाँच करवाएँ।
        </p>

        <h2>XAA — डीलरों और संग्राहक समितियों के लिए वेबसाइट</h2>
        <p>
          <a href={link('https://xaa.es')} className="text-gold-600 underline" rel="noopener">XAA</a> यूरोप का वेब डेवलपमेंट स्टूडियो है। सिक्कों की दुनिया के लिए वह बना सकता है:
          संग्राहक समिति की वेबसाइट और सदस्यता, डीलर की ऑनलाइन दुकान, या कई विक्रेताओं वाला मार्केटप्लेस। पूरा काम पड़ावों में बँटा रहता है और हर पड़ाव देख लेने के बाद ही उसका भुगतान होता है — PayPal, USDT या बैंक के ज़रिए।
          छोटे बजट वाले तैयार ढाँचे से शुरू कर सकते हैं; स्टूडियो की अपनी साइट अंग्रेज़ी, स्पेनिश और इंडोनेशियाई भाषा में पढ़ी जा सकती है।
        </p>

        <h2>For English-speaking collectors</h2>
        <p>
          <a href={link('https://axto.io')} className="text-gold-600 underline" rel="noopener">AXTO</a> keeps your collecting notes and coin videos manageable: AI Studio
          summarises catalogue pages and explains legends, with several models side by side, and Clipper cuts long videos into short captioned clips on your own
          device. <a href={link('https://xaa.es')} className="text-gold-600 underline" rel="noopener">XAA</a> builds society websites, dealer shops and multi-seller
          marketplaces, paid milestone by milestone. Neither replaces an expert: authenticity and value need a recognised specialist or grading service.
        </p>

        <h2>हमारी स्वतंत्रता · Our independence</h2>
        <p>
          हमारे लेख पहले की तरह स्वतंत्र हैं — किसी भी लेख में इन दोनों का ज़िक्र सलाह के तौर पर नहीं आता। Our guides stay independent and none was written because of them.
        </p>
      </div>
    </div>
  );
}
