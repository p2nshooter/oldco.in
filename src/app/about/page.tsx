import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'हमारे बारे में · About',
  description: 'OldCo.in क्या है, कौन लिखता है, और हम किन उसूलों पर चलते हैं।',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black text-ink-900">हमारे बारे में</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <div className="article-body mt-6">
        <p>
          OldCo.in एक स्वतंत्र शैक्षिक प्रकाशन है, जो पुराने भारतीय सिक्कों की दुनिया को सबकी भाषा में
          खोलता है — उनका इतिहास, उनकी असली क़ीमत, ग्रेडिंग, रख-रखाव और संग्रह की कला। हर लेख हिन्दी और
          अंग्रेज़ी दोनों में, मुफ़्त, बिना किसी रजिस्ट्रेशन के।
        </p>
        <h2>हमारे उसूल</h2>
        <p>
          हम सिक्के न ख़रीदते हैं, न बेचते हैं, न किसी सौदे में बिचौलिए बनते हैं। हम “आपका सिक्का लाखों का
          है” जैसे दावों का व्यापार नहीं करते — बल्कि ऐसे दावों के पीछे की ठगी का पर्दाफ़ाश करना अपनी
          ज़िम्मेदारी मानते हैं। हर लेख मूल रूप से हमारी टीम लिखती है; क़ीमतों पर हम ईमानदार दायरे बताते
          हैं, झूठे वादे नहीं।
        </p>
        <h2>About OldCo.in (English)</h2>
        <p>
          OldCo.in is an independent educational publication that opens the world of old Indian coins in
          the reader’s own language — their history, honest value, grading, care and the craft of
          collecting. Every article is original, free, in both Hindi and English, with no registration. We
          buy nothing, sell nothing, and broker nothing; we explain, and we call out the “your coin is
          worth lakhs” scams by name.
        </p>
      </div>
    </div>
  );
}
