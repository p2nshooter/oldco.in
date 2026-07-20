import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'गोपनीयता नीति · Privacy Policy',
  description: 'OldCo.in की गोपनीयता नीति — कुकीज़, विज्ञापन और आपका डेटा।',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black text-ink-900">गोपनीयता नीति · Privacy Policy</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <div className="article-body mt-6">
        <p>
          OldCo.in पढ़ने के लिए किसी खाते, लॉगिन या व्यक्तिगत जानकारी की ज़रूरत नहीं है। हम अपनी ओर से
          आपका नाम, फ़ोन नंबर या ईमेल एकत्र नहीं करते। आपकी भाषा-पसंद (हिन्दी/English) आपके ही ब्राउज़र में
          सहेजी जाती है, हमारे सर्वर पर नहीं।
        </p>
        <h2>Cookies और विज्ञापन</h2>
        <p>
          यह साइट Google AdSense के माध्यम से विज्ञापन दिखा सकती है। Google और उसके पार्टनर विज्ञापनों को
          प्रासंगिक बनाने के लिए कुकीज़ का उपयोग कर सकते हैं — जिनमें Google की विज्ञापन कुकीज़ शामिल हैं,
          जो आपकी इस और अन्य साइटों की विज़िट पर आधारित हो सकती हैं। आप{' '}
          <a href="https://www.google.com/settings/ads" className="text-gold-600 underline">
            Google Ads Settings
          </a>{' '}
          पर जाकर वैयक्तिकृत विज्ञापन बंद कर सकते हैं। अधिक जानकारी:{' '}
          <a href="https://policies.google.com/technologies/ads" className="text-gold-600 underline">
            How Google uses cookies in advertising
          </a>
          .
        </p>
        <h2>English summary</h2>
        <p>
          Reading OldCo.in requires no account and no personal data; your language preference is stored
          only in your own browser. The site may display ads via Google AdSense; Google and its partners
          may use advertising cookies (including for personalised ads based on your visits to this and
          other sites). You can opt out at Google Ads Settings. Questions:{' '}
          <a href="mailto:hello@oldco.in" className="text-gold-600 underline">
            hello@oldco.in
          </a>
          .
        </p>
      </div>
    </div>
  );
}
