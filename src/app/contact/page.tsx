import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'संपर्क · Contact',
  description: 'OldCo.in से संपर्क करें — सुझाव, सुधार या सहयोग के लिए।',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black text-ink-900">संपर्क करें</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <div className="article-body mt-6">
        <p>
          किसी लेख में सुधार सुझाना हो, कोई विषय पढ़ना चाहते हों, या विज्ञापन/सहयोग की बात करनी हो — हमें
          लिखिए। हम हर संदेश पढ़ते हैं और आमतौर पर कुछ ही दिनों में जवाब देते हैं।
        </p>
        <p>
          कृपया ध्यान दें: हम सिक्कों का मूल्यांकन या ख़रीद-बिक्री <strong>नहीं</strong> करते, इसलिए
          “मेरा सिक्का कितने का है?” वाले संदेशों का उत्तर हम लेखों के माध्यम से ही दे पाते हैं।
        </p>
        <p>
          <strong>ईमेल / Email:</strong>{' '}
          <a href="mailto:hello@oldco.in" className="text-gold-600 underline">
            hello@oldco.in
          </a>
        </p>
        <p>
          For corrections, topic requests or partnership queries, write to us at the address above. Note
          that we do not value, buy or sell coins — our answers live in the articles.
        </p>
      </div>
    </div>
  );
}
