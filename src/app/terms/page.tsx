import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'नियम व शर्तें · Terms',
  description: 'OldCo.in के उपयोग के नियम और सामग्री-अस्वीकरण।',
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-prose2 px-4 py-12">
      <h1 className="font-serif text-3xl font-black text-ink-900">नियम व शर्तें · Terms of Use</h1>
      <div className="ornament-rule mt-4 max-w-sm" />
      <div className="article-body mt-6">
        <p>
          OldCo.in की समस्त सामग्री केवल सामान्य शैक्षिक जानकारी है। सिक्कों के मूल्य के जो भी दायरे लेखों
          में दिए गए हैं, वे सांकेतिक हैं — असली क़ीमत दशा, प्रामाणिकता, माँग और नीलामी-दर-नीलामी बदलती
          है। हम कोई मूल्यांकन, ख़रीद, बिक्री या मध्यस्थता नहीं करते। कोई भी बड़ा सौदा करने से पहले
          प्रतिष्ठित डीलर या ग्रेडिंग विशेषज्ञ से परामर्श करें, और सौ वर्ष से पुरानी वस्तुओं पर
          प्राचीन-वस्तु क़ानूनों का ध्यान रखें।
        </p>
        <p>
          साइट की सामग्री का कॉपीराइट OldCo.in के पास है; बिना लिखित अनुमति के पुनर्प्रकाशन न करें। उचित
          उद्धरण (लिंक सहित) का स्वागत है।
        </p>
        <h2>English summary</h2>
        <p>
          All content on OldCo.in is general educational information. Any value ranges mentioned are
          indicative — real prices vary with condition, authenticity, demand and from auction to auction.
          We provide no valuations, purchases, sales or brokerage. Consult a reputable dealer or grading
          expert before significant deals, and mind antiquities law for objects over a hundred years old.
          Content is copyright OldCo.in; quotation with attribution and a link is welcome, wholesale
          republication is not.
        </p>
      </div>
    </div>
  );
}
