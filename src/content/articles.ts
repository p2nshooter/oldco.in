import { ARTICLES_BATCH2 } from './articles-batch2';
import { ARTICLES_BATCH3 } from './articles-batch3';
import AUTO_ARTICLES from "./auto-articles.json";
/**
 * OldCo.in — original bilingual library on India's old coins and numismatics.
 * Hindi (Devanagari) is the native language; every article carries its full
 * English translation, switched instantly on the client.
 *
 * Editorial rules (what keeps this AdSense-healthy):
 *  - 100% original writing — no scraping, no copied catalogue text.
 *  - Honest about value: prices depend on condition/authenticity; we never
 *    promise "this coin will make you rich" — we debunk those scams instead.
 *  - Quality core first, steady growth after — never a mass dump.
 */

export type CatSlug = 'itihas' | 'british-india' | 'republic-india' | 'collecting' | 'market';

export const CATEGORIES: Array<{ slug: CatSlug; nameHi: string; nameEn: string; taglineHi: string; taglineEn: string; icon: string }> = [
  { slug: 'itihas', nameHi: 'सिक्कों का इतिहास', nameEn: 'Coin History', taglineHi: 'रुपिया के जन्म से मुग़ल टकसालों तक', taglineEn: 'From the birth of the rupiya to the Mughal mints', icon: '🏛️' },
  { slug: 'british-india', nameHi: 'ब्रिटिश भारत', nameEn: 'British India', taglineHi: 'विक्टोरिया से जॉर्ज VI तक के सिक्के', taglineEn: 'Coins from Victoria to George VI', icon: '👑' },
  { slug: 'republic-india', nameHi: 'गणराज्य भारत', nameEn: 'Republic India', taglineHi: 'स्मारक सिक्के, टकसाल चिह्न और एरर', taglineEn: 'Commemoratives, mint marks and errors', icon: '🇮🇳' },
  { slug: 'collecting', nameHi: 'संग्रह की कला', nameEn: 'The Collector’s Craft', taglineHi: 'ग्रेडिंग, रख-रखाव और शुरुआत', taglineEn: 'Grading, care and getting started', icon: '🔍' },
  { slug: 'market', nameHi: 'क़ीमत और बिक्री', nameEn: 'Value & Selling', taglineHi: 'असली क़ीमत, सही ख़रीदार, और ठगों से बचाव', taglineEn: 'Real value, right buyers, and avoiding scams', icon: '⚖️' },
];

export interface Section {
  hHi: string;
  hEn: string;
  pHi: string[];
  pEn: string[];
}

export interface Article {
  slug: string;
  category: CatSlug;
  titleHi: string;
  titleEn: string;
  excerptHi: string;
  excerptEn: string;
  date: string;
  minutes: number;
  sections: Section[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'one-rupee-1947-value',
    category: 'market',
    titleHi: '1947 का एक रुपया: असली क़ीमत क्या है, और “लाखों में बिकेगा” का सच',
    titleEn: 'The 1947 One Rupee: What It’s Really Worth, and the Truth Behind “Lakhs” Claims',
    excerptHi: 'आज़ादी के साल का सिक्का हर दूसरे घर में मिलता है — और इंटरनेट पर उसकी “करोड़ों की क़ीमत” के किस्से भी। सच्ची क़ीमत किन बातों से तय होती है, और ठगी कहाँ छिपी है।',
    excerptEn: 'The coin of independence year sits in every other Indian home — alongside internet tales of it selling for crores. What actually decides its value, and where the scam hides.',
    date: '2026-07-02',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारत के पुराने सिक्कों में शायद ही किसी के बारे में इतने सवाल पूछे जाते हों जितने 1947 के एक रुपये के बारे में। वजह समझ में आती है — यह आज़ादी के साल का सिक्का है, किंग जॉर्ज VI की तस्वीर वाला आख़िरी दौर का रुपया, और लाखों घरों की पुरानी संदूक़ों में आज भी पड़ा है। भावनात्मक क़ीमत इसकी असीम है; बाज़ारू क़ीमत की कहानी ज़्यादा ठंडी है।',
          'पहला तथ्य: 1947 का रुपया दुर्लभ नहीं है। उस दौर में ये सिक्के करोड़ों की संख्या में ढाले गए थे, और बचे भी बहुत बड़ी संख्या में हैं। संग्रह की दुनिया का पहला नियम यहीं लागू होता है — क़ीमत उम्र से नहीं, दुर्लभता और दशा (कंडीशन) से बनती है। सौ साल पुराना आम सिक्का सस्ता हो सकता है, और तीस साल पुराना दुर्लभ एरर महँगा।',
        ],
        pEn: [
          'Few old Indian coins attract as many questions as the 1947 one rupee. Understandably so — it is the coin of independence year, the last era of rupee bearing King George VI, and it still sits in old trunks in lakhs of homes. Its sentimental value is boundless; the market’s story is colder.',
          'Fact one: the 1947 rupee is not rare. These coins were struck in the crores, and enormous numbers survive. The first law of collecting applies here — value comes from rarity and condition, not from age. A common hundred-year-old coin can be cheap, while a rare thirty-year-old error can be dear.',
        ],
      },
      {
        hHi: 'क़ीमत किन बातों से बनती है',
        hEn: 'What actually builds the price',
        pHi: [
          'तीन चीज़ें देखी जाती हैं। पहली — दशा: क्या सिक्का घिसा हुआ है या उस पर टकसाल की मूल चमक (लस्टर) बाक़ी है? चलन में घिसे आम सिक्के मामूली दाम पाते हैं, जबकि बिल्कुल अनछुई (UNC) दशा का वही सिक्का कई गुना ज़्यादा। दूसरी — टकसाल: 1947 के रुपये बंबई, कलकत्ता और लाहौर टकसालों में ढले थे; संग्राहक चिह्नों के अंतर पर ध्यान देते हैं। तीसरी — प्रामाणिकता: बाज़ार में नक़लें भी घूमती हैं, इसलिए गंभीर सौदे प्रतिष्ठित डीलर या ग्रेडिंग के साथ होते हैं।',
          'मोटे तौर पर समझें तो घिसे हुए आम 1947 रुपये का बाज़ार भाव कुछ सौ रुपये के दायरे में रहता आया है, जबकि शानदार अनछुई दशा के टुकड़े हज़ारों में जा सकते हैं। ठीक-ठीक अंक देना ईमानदारी नहीं होगी — भाव नीलामी-दर-नीलामी बदलते हैं। पर एक बात पक्की है: “हर 1947 का सिक्का लाखों का” — यह दावा बाज़ार का नहीं, ठगों का है।',
        ],
        pEn: [
          'Three things are examined. First — condition: is the coin worn, or does it keep its original mint lustre? Circulated common pieces fetch modest sums, while the same coin in truly uncirculated (UNC) state brings several times more. Second — the mint: 1947 rupees were struck at Bombay, Calcutta and Lahore, and collectors care about the differences. Third — authenticity: fakes circulate, so serious deals happen through reputable dealers or third-party grading.',
          'As a rough honest range, an ordinary worn 1947 rupee has traded in the few-hundred-rupee zone, while superb uncirculated pieces can reach the thousands. Precise figures would be dishonest — prices move auction by auction. One thing is certain though: “every 1947 coin is worth lakhs” is not the market talking. It is the scam talking.',
        ],
      },
      {
        hHi: '“लाखों में बेचिए” वाली ठगी की मशीन',
        hEn: 'The “sell it for lakhs” scam machine',
        pHi: [
          'तरीक़ा हर बार वही है: कोई वेबसाइट या सोशल-मीडिया पेज दावा करता है कि आपका पुराना सिक्का लाखों में बिकेगा — बस पहले “रजिस्ट्रेशन फ़ीस”, “वेरिफ़िकेशन चार्ज” या “GST” भर दीजिए। पैसा जाते ही ख़रीदार ग़ायब। याद रखिए: असली ख़रीदार आपसे पहले पैसा नहीं माँगता, और भारतीय रिज़र्व बैंक बार-बार सार्वजनिक चेतावनी दे चुका है कि RBI पुराने सिक्के-नोट न ख़रीदता है, न बेचता है, न किसी को इसका एजेंट बनाता है।',
          'सुरक्षित रास्ते वही पुराने हैं — प्रतिष्ठित सिक्का-डीलर, स्थापित नीलामी घर, और शहरों की न्यूमिस्मैटिक सोसाइटियों की प्रदर्शनियाँ। वहाँ दाम शायद “वायरल वीडियो” जितने रोमांचक न हों, पर वे असली होते हैं — और आपका सिक्का भी आपके पास तब तक रहता है जब तक भुगतान न मिल जाए।',
        ],
        pEn: [
          'The method never changes: a website or social-media page claims your old coin will sell for lakhs — you just pay a “registration fee”, “verification charge” or “GST” first. The money leaves, the buyer vanishes. Remember: a genuine buyer never asks you for money first, and the Reserve Bank of India has repeatedly issued public warnings that the RBI neither buys nor sells old coins and notes, nor appoints agents to do so.',
          'The safe routes are the old ones — reputable coin dealers, established auction houses, and the exhibitions of city numismatic societies. The prices there may be less thrilling than the viral videos, but they are real — and your coin stays with you until the payment arrives.',
        ],
      },
      {
        hHi: 'तो संदूक़ का सिक्का क्या करें?',
        hEn: 'So what should you do with the trunk coin?',
        pHi: [
          'सबसे पहले — साफ़ मत कीजिए। रगड़ाई या केमिकल से चमकाया गया सिक्का संग्राहकों की नज़र में मूल्य खो देता है; पुरानी परत (टोनिंग) इतिहास का हिस्सा है। किनारों से पकड़िए, किसी मुलायम पाउच या ऐसिड-फ्री होल्डर में रखिए, और दो-तीन प्रतिष्ठित जगहों से भाव पुछवाइए।',
          'और अगर दाम मामूली निकले, तो निराश मत होइए। 1947 का रुपया उस साल की धड़कन है जब देश आज़ाद हुआ — अपने पोते-पोती की हथेली पर रखकर उसकी कहानी सुनाइए। कुछ सिक्कों की सबसे ऊँची क़ीमत बाज़ार में नहीं, स्मृति में होती है।',
        ],
        pEn: [
          'First of all — do not clean it. A scrubbed or chemically shined coin loses value in collectors’ eyes; the old toning is part of its history. Hold it by the edges, keep it in a soft pouch or acid-free holder, and get quotes from two or three reputable places.',
          'And if the quote turns out modest, don’t be disheartened. The 1947 rupee is the heartbeat of the year the country became free — place it on a grandchild’s palm and tell its story. Some coins carry their highest value not in the market, but in memory.',
        ],
      },
    ],
  },
  {
    slug: 'british-india-coins-guide',
    category: 'british-india',
    titleHi: 'ब्रिटिश भारत के सिक्के: 1835 से 1947 तक की पूरी कहानी',
    titleEn: 'The Coins of British India: The Full Story from 1835 to 1947',
    excerptHi: 'ईस्ट इंडिया कंपनी के एकरूप सिक्कों से लेकर “एम्प्रेस विक्टोरिया” और जॉर्ज VI के आख़िरी रुपये तक — संग्राहकों के सबसे चहेते दौर की सैर।',
    excerptEn: 'From the East India Company’s uniform coinage to Empress Victoria and the last rupees of George VI — a tour of the collector’s favourite era.',
    date: '2026-07-04',
    minutes: 9,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारतीय सिक्का-संग्रह की दुनिया में जो लोकप्रियता ब्रिटिश भारत (1835–1947) के दौर को मिली है, वैसी किसी और को नहीं। कारण साफ़ हैं: सिक्के सुंदर हैं, तारीख़ें और टकसालें साफ़ पढ़ी जाती हैं, इतिहास से सीधा रिश्ता है, और शुरुआती संग्राहक के लिए भी सुलभ हैं — आम तारीख़ें आज भी किफ़ायती मिल जाती हैं।',
          'कहानी 1835 से शुरू होती है, जब ईस्ट इंडिया कंपनी ने पूरे भारत के लिए एक जैसा सिक्का चलाया — “यूनिफ़ॉर्म कॉइनेज”। इससे पहले हर प्रेसीडेंसी अपने-अपने सिक्के ढालती थी। 1835 के रुपये पर विलियम IV का चेहरा आया, और भारत के आर्थिक इतिहास का एक नया अध्याय खुला।',
        ],
        pEn: [
          'No era of Indian coin collecting rivals the popularity of British India (1835–1947). The reasons are plain: the coins are handsome, dates and mints read clearly, the connection to history is direct, and the period is accessible — common dates remain affordable for a beginner even today.',
          'The story begins in 1835, when the East India Company introduced a single coinage for all of India — the “uniform coinage”. Before that, each Presidency struck its own. The 1835 rupee carried the head of William IV, opening a new chapter of India’s economic history.',
        ],
      },
      {
        hHi: 'विक्टोरिया: क्वीन से एम्प्रेस तक',
        hEn: 'Victoria: from Queen to Empress',
        pHi: [
          '1858 में शासन कंपनी से ब्रिटिश क्राउन के पास गया, और 1862 से विक्टोरिया के नाम के सिक्के बड़े पैमाने पर ढलने लगे — शुरुआत में “VICTORIA QUEEN” लिखा मिलता है। 1877 में विक्टोरिया ने “भारत की साम्राज्ञी” की उपाधि ली, और सिक्कों की इबारत बदलकर “VICTORIA EMPRESS” हो गई। यही एक शब्द का अंतर संग्राहकों के लिए दौर पहचानने की कुंजी है।',
          'विक्टोरिया के चाँदी के रुपये अपनी बनावट के लिए आज भी सराहे जाते हैं — महारानी के ब्रोच और हार तक की बारीकियों में कई “डाई वैरायटी” छिपी हैं, जिन पर विशेषज्ञ संग्राहक पूरी-पूरी सूचियाँ बनाते हैं। यही वह दौर भी है जहाँ नक़लें सबसे ज़्यादा मिलती हैं, इसलिए महँगे टुकड़े हमेशा परख कर ख़रीदें।',
        ],
        pEn: [
          'In 1858 rule passed from the Company to the British Crown, and from 1862 coins in Victoria’s name were struck at scale — the early legend reads “VICTORIA QUEEN”. In 1877 Victoria took the title Empress of India, and the legend changed to “VICTORIA EMPRESS”. That one-word difference is the collector’s key to dating the era.',
          'Victoria’s silver rupees are still admired for their engraving — tiny differences in the Empress’s brooch and necklace hide numerous die varieties that specialist collectors catalogue exhaustively. It is also the most-faked stretch of the series, so buy expensive pieces only after authentication.',
        ],
      },
      {
        hHi: 'एडवर्ड, जॉर्ज पंचम और युद्ध की धातुएँ',
        hEn: 'Edward, George V, and the metals of war',
        pHi: [
          'एडवर्ड VII (1903–1910) का छोटा दौर आया, फिर जॉर्ज पंचम (1911–1936) का लंबा। 1911 के सिक्के “हाथी वाले” उपनाम से मशहूर हैं — राजा के लबादे पर बने हाथी जैसी आकृति विवाद का विषय बनी और डिज़ाइन बदला गया; इसी कारण 1911 की कुछ क़िस्में ख़ास मानी जाती हैं। जॉर्ज VI (1938–1947) का दौर विश्वयुद्ध की छाया में बीता।',
          'युद्ध ने धातु बदल दी: चाँदी महँगी हुई तो रुपये की शुद्धता घटाई गई और अंत में चाँदी की जगह निकल ने ले ली; बीच छेद वाला पैसा भी इसी दौर की पहचान है। धातुओं का यह बदलाव अपने-आप में इतिहास की किताब है — सिक्का हाथ में लीजिए, और युद्धकालीन अर्थव्यवस्था की पूरी कहानी हथेली पर है।',
        ],
        pEn: [
          'Edward VII’s short reign (1903–1910) was followed by George V’s long one (1911–1936). The 1911 issues are famous as the “elephant” coins — the animal-like figure on the king’s robe drew controversy and the design was changed, which is why certain 1911 varieties are prized. George VI’s era (1938–1947) passed under the shadow of the World War.',
          'War changed the metal: as silver grew dear, the rupee’s fineness was reduced and finally nickel replaced silver altogether; the holed pice is another signature of the period. That march of metals is a history book in itself — hold the coin, and the entire wartime economy sits in your palm.',
        ],
      },
      {
        hHi: 'संग्राहक के लिए: कहाँ से शुरू करें',
        hEn: 'For the collector: where to begin',
        pHi: [
          'सबसे आज़माया हुआ रास्ता “टाइप सेट” है: हर शासक का एक-एक प्रतिनिधि सिक्का — विलियम IV, विक्टोरिया (क्वीन और एम्प्रेस दोनों), एडवर्ड VII, जॉर्ज V, जॉर्ज VI। आम तारीख़ों में यह सेट किफ़ायती बजट में बन जाता है और पूरे दौर की कहानी कह देता है। इसके बाद रुचि ख़ुद रास्ता चुन लेती है — कोई टकसाल चिह्नों के पीछे जाता है, कोई डाई वैरायटी के।',
          'ख़रीद के तीन नियम: पहचानी हुई जगह से ख़रीदिए, दशा को दाम से पहले देखिए, और हर सिक्के का छोटा-सा रिकॉर्ड रखिए — कब, कहाँ से, कितने में। दस साल बाद यही रिकॉर्ड आपके संग्रह की दूसरी सबसे क़ीमती चीज़ होगा।',
        ],
        pEn: [
          'The best-proven path is a type set: one representative coin of each ruler — William IV, Victoria (both Queen and Empress), Edward VII, George V, George VI. In common dates it fits a modest budget and tells the whole era’s story. After that, interest chooses its own road — some chase mint marks, others die varieties.',
          'Three buying rules: buy from recognised sources, judge condition before price, and keep a small record of every coin — when, from where, for how much. Ten years on, that record will be the second most valuable thing in your collection.',
        ],
      },
    ],
  },
  {
    slug: 'mughal-coins-history',
    category: 'itihas',
    titleHi: 'रुपिया का जन्म: शेरशाह सूरी से मुग़ल टकसालों तक',
    titleEn: 'The Birth of the Rupiya: From Sher Shah Suri to the Mughal Mints',
    excerptHi: 'दुनिया की सबसे पुरानी जीवित मुद्रा-परंपराओं में से एक हमारे “रुपये” की है। उसकी जड़ें सूरी सल्तनत की चाँदी में हैं और शिखर मुग़ल कारीगरी में।',
    excerptEn: 'The “rupee” belongs to one of the oldest living currency traditions on earth — rooted in Suri silver, crowned by Mughal artistry.',
    date: '2026-07-06',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'आज जेब में रखे रुपये का नाम लगभग पाँच सौ साल पुराना है। 1540 के दशक में शेरशाह सूरी ने मुद्रा-व्यवस्था का ऐसा सुधार किया जिसकी गूँज आज तक सुनाई देती है: लगभग 11.5 ग्राम की शुद्ध चाँदी का सिक्का, जिसे “रुपिया” कहा गया। साथ में ताँबे का दाम और सोने की मोहर — तीन धातुओं की साफ़-सुथरी सीढ़ी।',
          'यह केवल नाम का क़िस्सा नहीं है। वज़न और शुद्धता का वह मानक इतना खरा था कि मुग़लों ने उसे अपनाया, ब्रिटिश दौर उसी की छाया में चला, और “रुपया” नाम भारत से लेकर पाकिस्तान, नेपाल, श्रीलंका और इंडोनेशिया (रुपिया) तक फैल गया। एक सिक्का-सुधार ने आधे एशिया की भाषा में जगह बना ली।',
        ],
        pEn: [
          'The name of the rupee in your pocket is nearly five hundred years old. In the 1540s, Sher Shah Suri carried out a currency reform whose echo is still audible: a coin of nearly pure silver at about 11.5 grams, called the rupiya. Beside it stood the copper dam and the gold mohur — a clean three-metal ladder.',
          'This is more than a naming story. The weight-and-purity standard was so sound that the Mughals adopted it, the British era ran in its shadow, and the name “rupee” spread from India to Pakistan, Nepal, Sri Lanka and Indonesia’s rupiah. One coinage reform earned a place in the languages of half of Asia.',
        ],
      },
      {
        hHi: 'मुग़ल टकसालें: सिक्का बतौर कला',
        hEn: 'The Mughal mints: coin as art',
        pHi: [
          'अकबर के दौर में टकसालों का जाल पूरे साम्राज्य में फैला और सिक्कों पर सुलेख (कैलिग्राफ़ी) अपने शिखर पर पहुँचा। मुग़ल सिक्कों पर चित्र नहीं, शब्द राज करते हैं — शासक का नाम, उपाधियाँ, टकसाल का नाम और हिजरी वर्ष, सब कुछ ऐसी नफ़ासत से गूँथा हुआ कि सिक्का ख़ुद एक छोटा शिलालेख बन जाता है। संग्राहक के लिए यही पढ़ाई सबसे बड़ा रोमांच है: टकसाल और सन पढ़ना आते ही हर सिक्का बोलने लगता है।',
          'जहाँगीर के दौर की राशि-चिह्नों (zodiac) वाली मोहरें मुग़ल सिक्का-कला का सबसे प्रसिद्ध अपवाद हैं — तस्वीर वाले सिक्के, जो अपनी दुर्लभता और सुंदरता के कारण दुनिया भर की नीलामियों के सितारे हैं। ऐसे टुकड़े आम संग्रह की चीज़ नहीं, पर उनकी कहानी हर संग्राहक की विरासत है।',
        ],
        pEn: [
          'Under Akbar the network of mints spread across the empire, and calligraphy on coins reached its peak. Words, not portraits, rule Mughal coins — the ruler’s name and titles, the mint town, the Hijri year, woven with such finesse that the coin becomes a miniature inscription. For the collector, learning to read mint and date is the great thrill: once you can, every coin starts speaking.',
          'The zodiac mohurs of Jahangir’s reign are the most famous exception in Mughal coin art — pictorial coins whose rarity and beauty make them stars of auctions worldwide. Such pieces are not for the ordinary collection, but their story is every collector’s inheritance.',
        ],
      },
      {
        hHi: 'आज का संग्राहक इस दौर से कैसे जुड़े',
        hEn: 'How today’s collector can touch this era',
        pHi: [
          'अच्छी ख़बर: मुग़ल दौर विशाल था, और उसके ताँबे व चाँदी के आम सिक्के आज भी अपेक्षाकृत सुलभ हैं — शुरुआती संग्राहक अकबर या औरंगज़ेब के दौर का असली सिक्का किफ़ायती दाम में पा सकता है। शुरुआत ताँबे से करना समझदारी है: नक़ल का जोखिम कम, सीखने का मौक़ा ज़्यादा।',
          'दो सावधानियाँ: पहली, चाँदी के दुर्लभ टुकड़ों में नक़लें बहुत हैं — प्रामाणिकता जाँच अनिवार्य है। दूसरी, सौ वर्ष से पुरानी वस्तुएँ भारत में “प्राचीन वस्तु” की क़ानूनी श्रेणी में आ सकती हैं, जिनके निर्यात पर रोक और लेन-देन के नियम हैं — संग्रह देश के भीतर, दस्तावेज़ों के साथ रखिए, और बड़े सौदों में विशेषज्ञ की सलाह लीजिए।',
        ],
        pEn: [
          'Good news: the Mughal era was vast, and its common copper and silver coins remain relatively accessible — a beginner can own a genuine coin of Akbar’s or Aurangzeb’s time at a modest price. Starting with copper is wise: the fake risk is lower, the learning richer.',
          'Two cautions. First, rare silver attracts many forgeries — authentication is non-negotiable. Second, objects older than a hundred years can fall under India’s legal category of antiquities, with export prohibitions and transaction rules — keep the collection within the country, keep paperwork, and take expert advice on large deals.',
        ],
      },
    ],
  },
  {
    slug: 'republic-india-commemorative-coins',
    category: 'republic-india',
    titleHi: 'गणराज्य भारत के स्मारक सिक्के: नेहरू से लेकर आज तक',
    titleEn: 'Republic India’s Commemorative Coins: From Nehru to Today',
    excerptHi: '1964 के नेहरू सिक्के से शुरू हुई परंपरा अब सैकड़ों डिज़ाइनों की गैलरी बन चुकी है। टकसाल चिह्न पढ़ना, UNC/प्रूफ़ सेट समझना और समझदारी से जमा करना।',
    excerptEn: 'A tradition that began with the 1964 Nehru coin is now a gallery of hundreds of designs. Reading mint marks, understanding UNC/proof sets, and collecting wisely.',
    date: '2026-07-09',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'आज़ाद भारत ने 1950 में अपने सिक्के ढालने शुरू किए, पर “स्मारक सिक्कों” की परंपरा 1964 में शुरू हुई — पंडित नेहरू के निधन पर जारी सिक्के से। तब से गणतंत्र ने अपने नायकों, संस्थाओं और पड़ावों को सिक्कों पर उकेरा है: गांधी, आंबेडकर, हरित क्रांति, संसद, बैंक, खेल — सैकड़ों डिज़ाइन, जो मिलकर तांबे-निकल में लिखी देश की डायरी बन जाते हैं।',
          'संग्राहक के लिए यह क्षेत्र दोहरा वरदान है: विषय अनंत हैं और प्रवेश सस्ता है — बहुत से स्मारक सिक्के चलन में भी आए हैं और छुट्टे में मिल जाते हैं। यही इसे बच्चों और नए संग्राहकों की सबसे अच्छी शुरुआत बनाता है।',
        ],
        pEn: [
          'Free India began striking its own coins in 1950, but the commemorative tradition started in 1964, with the coin issued on Pandit Nehru’s passing. Since then the Republic has engraved its heroes, institutions and milestones onto coins: Gandhi, Ambedkar, the Green Revolution, Parliament, banks, sport — hundreds of designs that together form the nation’s diary written in cupro-nickel.',
          'For a collector this field is a double blessing: the themes are endless and the entry is cheap — many commemoratives circulated and still turn up in change. That makes it the best possible starting point for children and new collectors.',
        ],
      },
      {
        hHi: 'टकसाल चिह्न पढ़ना सीखिए',
        hEn: 'Learn to read the mint marks',
        pHi: [
          'तारीख़ के ठीक नीचे का छोटा-सा चिह्न बताता है कि सिक्का कहाँ ढला: मुंबई का हीरा (◆), हैदराबाद का सितारा (★), नोएडा की बिंदी (●), और कलकत्ता का कोई चिह्न नहीं। यही छोटा निशान एक ही साल-डिज़ाइन के सिक्के की कई क़िस्में बना देता है — और कभी-कभी उनमें से कोई एक टकसाल की ढलाई दूसरों से दुर्लभ निकलती है।',
          'यहीं से “वैरायटी हंटिंग” का खेल शुरू होता है, जो इस क्षेत्र का असली नशा है: छुट्टे में आए सिक्के को पलटकर देखना कि तारीख़ के नीचे क्या है। ख़र्च कुछ नहीं, सीख पूरी न्यूमिस्मैटिक्स की।',
        ],
        pEn: [
          'The tiny mark just below the date tells you where the coin was struck: Mumbai’s diamond (◆), Hyderabad’s star (★), Noida’s dot (●), and Calcutta’s absence of any mark. That small sign multiplies a single year-design into several varieties — and occasionally one mint’s striking turns out scarcer than the rest.',
          'This is where the game of variety hunting begins — the genuine addiction of the field: flipping every coin in your change to see what sits under the date. It costs nothing, and it teaches the whole of numismatics.',
        ],
      },
      {
        hHi: 'UNC और प्रूफ़ सेट: चमक की क़ीमत',
        hEn: 'UNC and proof sets: the price of shine',
        pHi: [
          'टकसालें संग्राहकों के लिए विशेष सेट भी जारी करती हैं: UNC सेट (अनछुए चमकदार सिक्के) और प्रूफ़ सेट (दर्पण जैसी पृष्ठभूमि पर उभरी आकृति — दो बार ठप्पा लगाकर ढाले गए विशेष टुकड़े)। इनकी क़ीमत अंकित मूल्य से कहीं ऊपर होती है, और यही असल संग्रह-बाज़ार है, जिसमें डिब्बे-प्रमाणपत्र समेत सुरक्षित रखे सेट सबसे अच्छा दाम पाते हैं।',
          'सावधानी वही पुरानी: सेट का मूल पैकिंग-प्रमाणपत्र फेंकिए मत — बिना डिब्बे का प्रूफ़ आधे मन से बिकता है। और स्मारक सिक्कों को “निवेश” समझने की जल्दबाज़ी से बचिए; ज़्यादातर सेट भावुक क़ीमत पर बिकते हैं, बढ़त धीमी होती है। यह प्रेम का बाज़ार है, लालच का नहीं।',
        ],
        pEn: [
          'The mints also issue special collector sets: UNC sets (untouched brilliant coins) and proof sets (frosted designs on mirror fields — struck twice as special pieces). These sell well above face value, and this is the real collector market, where sets preserved with box and certificate command the best prices.',
          'The old caution applies: never discard the original packaging and certificate — a proof without its box sells half-heartedly. And resist calling commemoratives an “investment”; most sets appreciate slowly and trade on affection. This is a market of love, not leverage.',
        ],
      },
    ],
  },
  {
    slug: 'error-coins-value',
    category: 'republic-india',
    titleHi: 'एरर सिक्के: टकसाल की ग़लतियाँ जो ख़ज़ाना बन जाती हैं',
    titleEn: 'Error Coins: When the Mint’s Mistakes Become Treasure',
    excerptHi: 'दो बार ठप्पा, खिसकी हुई छपाई, उल्टा पल्टा — असली टकसाल एरर दुर्लभ भी होते हैं और क़ीमती भी। पर बाज़ार में “नक़ली एरर” की भरमार है। फ़र्क़ पहचानना सीखिए।',
    excerptEn: 'Double strikes, off-centre strikes, rotated dies — genuine mint errors are rare and prized. But the market is flooded with fake “errors”. Learn to tell them apart.',
    date: '2026-07-11',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'टकसाल परिशुद्धता की फ़ैक्ट्री है — करोड़ों सिक्के, एक जैसे। इसीलिए जब कोई सिक्का ग़लत ढलकर बाहर निकल आता है, तो वह सांख्यिकीय चमत्कार बन जाता है। संग्राहक एरर सिक्कों के दीवाने इसी कारण हैं: हर असली एरर एक ऐसी कहानी है जो दोहराई नहीं जा सकती।',
          'पर इसी दीवानगी ने एक छायादार बाज़ार भी खड़ा किया है — घर पर हथौड़ी-रेती से “बनाए गए” एरर, जो नौसिखियों को ऊँचे दामों पर थमाए जाते हैं। इसलिए इस क्षेत्र का पहला पाठ है: एरर की क़िस्में और बनने का तरीक़ा समझना, ताकि नक़ल पहली नज़र में पकड़ी जाए।',
        ],
        pEn: [
          'A mint is a factory of precision — crores of coins, all identical. So when a wrongly struck coin escapes, it becomes a statistical miracle. That is why collectors adore error coins: every genuine error is a story that cannot be repeated.',
          'But the same passion has raised a shadow market — “errors” manufactured at home with hammer and file, sold to novices at fancy prices. So the first lesson of the field is understanding the types of errors and how they occur, so a fake is caught at first glance.',
        ],
      },
      {
        hHi: 'असली एरर की प्रमुख क़िस्में',
        hEn: 'The main genuine error types',
        pHi: [
          'ऑफ़-सेंटर स्ट्राइक: ठप्पा लगाते समय सिक्के की चकती खिसक जाए तो डिज़ाइन एक ओर छपता है और चाँद-सा ख़ाली हिस्सा बचता है — जितना ज़्यादा खिसकाव (पर तारीख़ पढ़ने लायक़), दाम उतना बेहतर। डबल स्ट्राइक: एक ही चकती पर दो बार ठप्पा। ब्रॉकेज: पिछला सिक्का डाई से चिपका रह जाए तो अगले पर उसका उल्टा (दर्पण) चित्र छप जाता है — नाटकीय और क़ीमती। रोटेटेड डाई: आगे-पीछे के चित्रों की दिशा घूमी हुई। क्लिप्ड प्लांचेट: चकती काटते समय किनारे से चंद्राकार टुकड़ा कट जाए।',
          'ध्यान दीजिए कि हर क़िस्म ढलाई की प्रक्रिया से पैदा होती है — इसीलिए असली एरर के लक्षण भौतिक रूप से “सही जगह” होते हैं: धातु का बहाव, दबाव के निशान, किनारे की बनावट सब प्रक्रिया से मेल खाते हैं। घर की बनाई खरोंच, पिसाई या जोड़-तोड़ इन कसौटियों पर तुरंत बिखर जाती है।',
        ],
        pEn: [
          'Off-centre strike: the blank shifts during striking, printing the design to one side and leaving a moon of blank metal — the greater the shift (with the date still readable), the better the price. Double strike: two impressions on one blank. Brockage: the previous coin sticks to the die and prints its mirror image onto the next — dramatic and valuable. Rotated die: obverse and reverse out of alignment. Clipped planchet: a crescent sheared off when the blank was cut.',
          'Note that every type is born of the minting process — which is why a genuine error’s features sit physically “in the right places”: metal flow, pressure marks and edge structure all match the process. Home-made scratches, grinding and tampering collapse instantly against these tests.',
        ],
      },
      {
        hHi: 'परख, क़ीमत और ख़रीद-फ़रोख़्त',
        hEn: 'Authentication, value, and trading',
        pHi: [
          'एरर की क़ीमत तीन चीज़ों से बनती है: एरर कितना नाटकीय है, सिक्का किस दशा में है, और किस मूल्यवर्ग/दौर का है। पर यह बाज़ार परख पर टिका है — गंभीर ख़रीदार बिना जाँच या ग्रेडिंग के बड़े दाम नहीं देते, और यह अच्छा ही है। बेचने से पहले प्रतिष्ठित डीलर या ग्रेडिंग सेवा से राय लीजिए; “वायरल वीडियो वाले दाम” असली नीलामी में नहीं मिलते।',
          'नए संग्राहक के लिए मज़ेदार सच: एरर की तलाश मुफ़्त है। रोज़ के छुट्टे में, बैंक के रोल में, गुल्लक में — नज़र भर चाहिए। दस लाख सामान्य सिक्कों में एक चमत्कार छिपा हो सकता है, और उसे पहचानने वाली आँख ही इस खेल की असली पूँजी है।',
        ],
        pEn: [
          'An error’s price rests on three things: how dramatic the error is, the coin’s condition, and its denomination and era. But the market runs on authentication — serious buyers do not pay serious money without inspection or grading, and rightly so. Get a reputable dealer’s or grading service’s opinion before selling; viral-video prices do not appear at real auctions.',
          'A cheerful truth for the new collector: hunting errors is free. In daily change, in bank rolls, in the piggy bank — all it takes is an eye. One miracle may hide in a million ordinary coins, and the eye that can recognise it is the true capital of this game.',
        ],
      },
    ],
  },
  {
    slug: 'coin-grading-basics',
    category: 'collecting',
    titleHi: 'सिक्कों की ग्रेडिंग: दशा ही दाम है — Good से UNC तक की सीढ़ी',
    titleEn: 'Coin Grading: Condition Is Price — the Ladder from Good to UNC',
    excerptHi: 'एक ही सिक्का सौ रुपये का भी हो सकता है और दस हज़ार का भी — फ़र्क़ सिर्फ़ दशा का है। घिसाव पढ़ना, लस्टर परखना और सफ़ाई की सबसे बड़ी ग़लती से बचना।',
    excerptEn: 'The same coin can be worth a hundred rupees or ten thousand — the difference is condition alone. Reading wear, judging lustre, and avoiding the cleaning mistake.',
    date: '2026-07-13',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'सिक्का-संग्रह में नए व्यक्ति को सबसे पहले जो पाठ बदलता है, वह यही है: क़ीमत सिक्के की नहीं, उसकी दशा की होती है। एक ही साल, एक ही टकसाल का रुपया — घिसा हुआ हो तो मामूली दाम, और टकसाल-सी ताज़ा चमक में हो तो कई गुना। इस अंतर को नापने की भाषा का नाम है ग्रेडिंग।',
          'दुनिया भर के संग्राहक मोटे तौर पर एक साझा सीढ़ी बोलते हैं: Good (बहुत घिसा, आकृति भर पहचान में), Fine (मुख्य रेखाएँ साफ़), Very Fine (बारीकियाँ अच्छी बची हैं), Extremely Fine (हल्का-सा ही घिसाव), About UNC (लगभग अनछुआ) और UNC — Uncirculated, यानी चलन में गया ही नहीं। ऊपर के ग्रेड में हर पायदान पर दाम की छलाँग सबसे बड़ी होती है।',
        ],
        pEn: [
          'The first lesson that transforms a newcomer is this: the price belongs not to the coin but to its condition. The same year, same mint rupee — worn, it fetches little; in mint-fresh brilliance, several times more. The language for measuring that difference is called grading.',
          'Collectors worldwide speak a broadly shared ladder: Good (heavily worn, design just identifiable), Fine (main lines clear), Very Fine (details well preserved), Extremely Fine (only a whisper of wear), About UNC (almost untouched) and UNC — Uncirculated, never in circulation at all. At the top of the ladder, each rung brings the largest leap in price.',
        ],
      },
      {
        hHi: 'घिसाव कहाँ देखें, लस्टर क्या है',
        hEn: 'Where to look for wear, and what lustre is',
        pHi: [
          'घिसाव सबसे पहले सबसे ऊँचे उभारों पर आता है — चेहरे की गाल, मुकुट की धार, बालों की लटें। सिक्के को हल्का घुमाकर तिरछी रोशनी में देखिए: जहाँ धातु चपटी और फीकी दिखे, वहीं घिसाव है। 10x का लूप शुरुआती के लिए काफ़ी है — इससे ज़्यादा ताक़त धोखा देती है।',
          'दूसरी कसौटी लस्टर है — ढलाई के समय धातु के बहाव से बनी वह महीन चमक जो रोशनी घुमाने पर पहिये की तीलियों-सी घूमती दिखती है। लस्टर UNC का हस्ताक्षर है, और यही वह चीज़ है जो किसी भी पॉलिश से वापस नहीं आती। इसीलिए पॉलिश किया सिक्का चमकने पर भी संग्राहक की नज़र में “मरा हुआ” होता है।',
        ],
        pEn: [
          'Wear arrives first on the highest points — the cheek of a portrait, the crown’s edge, strands of hair. Tilt the coin in angled light: wherever the metal looks flat and dull, that is wear. A 10x loupe is enough for a beginner — more magnification misleads.',
          'The second test is lustre — the fine sheen created by metal flow at striking, which spins like wheel-spokes as you rotate the coin in light. Lustre is the signature of UNC, and it is the one thing no polish can restore. A polished coin may shine, but to a collector’s eye it is dead.',
        ],
      },
      {
        hHi: 'सबसे महँगी ग़लती: सफ़ाई',
        hEn: 'The costliest mistake: cleaning',
        pHi: [
          'हर हफ़्ते कोई नया संग्राहक यही भूल करता है: दादी की संदूक़ से निकला “गंदा” सिक्का ब्रश, नींबू या सिल्वर-पॉलिश से रगड़कर “सुंदर” बना देना। नतीजा — सतह पर असंख्य महीन खरोंचें, लस्टर की मृत्यु, और क़ीमत का धड़ाम। पुरानी परत (टोनिंग) गंदगी नहीं, सिक्के का जीवन-वृत्त है; संग्राहक उसे सम्मान से देखते हैं।',
          'नियम एक पंक्ति का है: सिक्के कभी साफ़ नहीं किए जाते। ज़्यादा से ज़्यादा, ढीली धूल के लिए बहते पानी से धोकर मुलायम कपड़े पर थपथपाकर सुखा लें — रगड़े बिना। और सँभालने का शिष्टाचार: किनारों से पकड़िए, चित्र-सतह पर उँगली नहीं; ऐसिड-फ्री होल्डर या पाउच में रखिए, PVC वाली जेबों से दूर।',
        ],
        pEn: [
          'Every week some new collector makes the same error: scrubbing the “dirty” coin from grandmother’s trunk with a brush, lemon or silver polish to make it “pretty”. The result — countless micro-scratches, the death of lustre, and a collapsed price. Old toning is not dirt; it is the coin’s biography, and collectors regard it with respect.',
          'The rule is one line long: coins are never cleaned. At most, rinse loose dust under running water and pat dry on a soft cloth — without rubbing. And the etiquette of handling: hold by the edges, never a finger on the design; store in acid-free holders or pouches, far from PVC sleeves.',
        ],
      },
      {
        hHi: 'तीसरे पक्ष की ग्रेडिंग कब कराएँ',
        hEn: 'When to use third-party grading',
        pHi: [
          'महँगे सिक्कों की दुनिया में स्वतंत्र ग्रेडिंग सेवाएँ सिक्के को परखकर, अंक देकर सीलबंद कैप्सूल (स्लैब) में बंद कर देती हैं। इससे ख़रीदार का भरोसा और दाम दोनों बढ़ते हैं। पर हर सिक्के के लिए यह ज़रूरी नहीं — फ़ीस ही आम सिक्के की क़ीमत से ऊपर निकल जाती है।',
          'व्यावहारिक नियम: ग्रेडिंग वहीं कराइए जहाँ सिक्के का संभावित मूल्य फ़ीस से कई गुना हो, या प्रामाणिकता पर ही सौदा टिका हो। बाक़ी संग्रह के लिए आपकी अपनी प्रशिक्षित आँख — और यह लेख जैसी पढ़ाई — ही सबसे सस्ती और सबसे वफ़ादार ग्रेडिंग सेवा है।',
        ],
        pEn: [
          'In the world of expensive coins, independent grading services examine a coin, assign a grade, and seal it in a capsule (slab). Buyer confidence and price both rise. But it is not for every coin — the fee alone exceeds the value of a common piece.',
          'The practical rule: grade only where the coin’s potential value is several multiples of the fee, or where the deal hangs on authenticity itself. For the rest of the collection, your own trained eye — and reading like this — is the cheapest, most loyal grading service there is.',
        ],
      },
    ],
  },
  {
    slug: 'sell-old-coins-legally',
    category: 'market',
    titleHi: 'पुराने सिक्के कहाँ और कैसे बेचें: सही रास्ते, सही दाम, ठगों से दूरी',
    titleEn: 'Where and How to Sell Old Coins: Right Channels, Fair Prices, Zero Scams',
    excerptHi: 'RBI सिक्के नहीं ख़रीदता, और “रजिस्ट्रेशन फ़ीस” माँगने वाला हर ख़रीदार ठग है। डीलर, नीलामी और सोसाइटी — तीन असली रास्तों की पूरी गाइड।',
    excerptEn: 'The RBI does not buy coins, and every buyer who asks for a “registration fee” is a fraud. Dealers, auctions and societies — the full guide to the three real routes.',
    date: '2026-07-16',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'घर में पुराने सिक्के मिलते ही दो सवाल उठते हैं — “क़ीमत क्या होगी?” और “बेचें कहाँ?” इंटरनेट दोनों के ग़लत जवाबों से भरा है। इस लेख में हम पहले ग़लत रास्तों की पहचान करेंगे, फिर तीन असली रास्तों पर चलेंगे जिन पर देश के गंभीर संग्राहक दशकों से चल रहे हैं।',
          'शुरुआत सबसे ज़रूरी वाक्य से: भारतीय रिज़र्व बैंक पुराने सिक्के-नोट न ख़रीदता है, न बेचता है, न किसी वेबसाइट/एजेंट को इसकी अनुमति देता है — RBI ख़ुद बार-बार यह सार्वजनिक चेतावनी जारी कर चुका है। जो भी “RBI अधिकृत” बनकर आपसे फ़ीस माँगे, वह उसी क्षण बेनक़ाब है।',
        ],
        pEn: [
          'The moment old coins surface at home, two questions follow — “what are they worth?” and “where do we sell?” The internet brims with wrong answers to both. Here we will first identify the wrong roads, then walk the three real ones India’s serious collectors have used for decades.',
          'Begin with the most important sentence: the Reserve Bank of India neither buys nor sells old coins and notes, nor authorises any website or agent to do so — the RBI itself has repeatedly issued public warnings on this. Anyone claiming to be “RBI authorised” while asking you for a fee stands exposed in that instant.',
        ],
      },
      {
        hHi: 'ठगी का पैटर्न: पैसा पहले माँगा तो ठग',
        hEn: 'The scam pattern: money asked first = fraud',
        pHi: [
          'ऑनलाइन “सिक्का ख़रीदार” ठगी का ढाँचा हमेशा एक-सा है: शानदार क़ीमत का लालच (“आपका ₹5 का सिक्का ₹5 लाख का है!”), फिर आगे बढ़ने के लिए कोई न कोई अग्रिम भुगतान — रजिस्ट्रेशन, वैल्यूएशन, बीमा, GST, डिलीवरी। हर नाम अलग, चाल एक: पैसा पहले। असली दुनिया में ख़रीदार विक्रेता को पैसा देता है, उससे लेता नहीं।',
          'दूसरा लाल झंडा है अनदेखे सौदे: जो ख़रीदार सिक्का देखे बिना दाम पक्का कर दे, वह दाम देने नहीं, दाम लेने आया है। तीसरा — जल्दबाज़ी: “ऑफ़र सिर्फ़ आज रात तक” असली नीलामी की भाषा नहीं है। इन तीनों में से कोई एक दिखे, बातचीत वहीं समाप्त कीजिए।',
        ],
        pEn: [
          'The online “coin buyer” scam has one skeleton: the lure of a spectacular price (“your ₹5 coin is worth ₹5 lakh!”), then some advance payment to proceed — registration, valuation, insurance, GST, delivery. The names differ, the trick is one: money first. In the real world, buyers pay sellers — they do not collect from them.',
          'The second red flag is the sight-unseen deal: a buyer who fixes a price without examining the coin has come to take money, not give it. The third — urgency: “offer valid tonight only” is not the language of any real auction. See any one of the three, and end the conversation there.',
        ],
      },
      {
        hHi: 'तीन असली रास्ते',
        hEn: 'The three real routes',
        pHi: [
          'पहला — प्रतिष्ठित सिक्का-डीलर: पुराने शहरों के स्थापित डीलर तुरंत नक़द सौदे के लिए सबसे व्यावहारिक हैं; दो-तीन जगह भाव पुछवाकर बेचिए। डीलर मार्जिन रखेगा — यही उसका व्यवसाय है — पर सौदा हाथों-हाथ और पारदर्शी होता है। दूसरा — नीलामी घर: दुर्लभ और ऊँचे दर्जे के सिक्कों के लिए स्थापित नीलामी सबसे अच्छा दाम दिलाती हैं; समय ज़्यादा लगता है और कमीशन कटता है, पर बाज़ार की असली क़ीमत वहीं खुलती है।',
          'तीसरा — न्यूमिस्मैटिक सोसाइटियाँ और सिक्का-मेले: यहाँ ख़रीदार-विक्रेता आमने-सामने मिलते हैं, और नए व्यक्ति को सबसे ज़रूरी चीज़ मुफ़्त मिलती है — जानकार लोगों की संगत। एक अंतिम क़ानूनी नोट: सौ वर्ष से पुरानी वस्तुएँ प्राचीन-वस्तु क़ानूनों के दायरे में आ सकती हैं, जिनका निर्यात प्रतिबंधित है — ऐसे सिक्कों का लेन-देन देश के भीतर, दस्तावेज़ के साथ कीजिए।',
        ],
        pEn: [
          'First — reputable coin dealers: the established dealers of old city markets are the most practical for immediate cash deals; take quotes from two or three before selling. The dealer keeps a margin — that is the trade — but the deal is instant and transparent. Second — auction houses: for rare and high-grade coins, established auctions realise the best prices; they take longer and charge commission, but true market value is discovered there.',
          'Third — numismatic societies and coin fairs: buyers and sellers meet face to face, and a newcomer receives the most valuable thing free — the company of people who know. A final legal note: objects older than a hundred years can fall under antiquities law, whose export is restricted — transact such coins within the country, with paperwork.',
        ],
      },
    ],
  },
  {
    slug: 'start-coin-collection',
    category: 'collecting',
    titleHi: 'सिक्का-संग्रह कैसे शुरू करें: गुल्लक से गैलरी तक की पहली सीढ़ियाँ',
    titleEn: 'How to Start a Coin Collection: First Steps from Piggy Bank to Gallery',
    excerptHi: 'न बड़े बजट की ज़रूरत, न किसी डिग्री की — बस एक थीम, एक लूप और सही रख-रखाव। दुनिया की सबसे पुरानी हॉबी में दाख़िले की पूरी गाइड।',
    excerptEn: 'No big budget needed, no degree — just a theme, a loupe and proper storage. The complete admission guide to the world’s oldest hobby.',
    date: '2026-07-18',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'सिक्का-संग्रह को “राजाओं की हॉबी” कहा जाता रहा है, पर उसका दरवाज़ा हमेशा से आम आदमी के लिए खुला है — शुरुआत आपके ही घर के छुट्टे से हो सकती है। इस हॉबी की असली पूँजी पैसा नहीं, ध्यान है: तारीख़ पढ़ने, टकसाल पहचानने और कहानी खोजने की आदत।',
          'और कहानियाँ यहाँ हर सिक्के में हैं — आपकी हथेली का सिक्का किन-किन हाथों से गुज़रा होगा, किस दौर की महँगाई, किस युद्ध की धातु-किल्लत, किस गणतंत्र के जश्न का गवाह है। इतिहास की किताब पढ़ी जाती है; सिक्का इतिहास छुआ जाता है।',
        ],
        pEn: [
          'Coin collecting has been called the hobby of kings, yet its door has always stood open to everyone — the start can come from the change in your own home. The real capital of this hobby is not money but attention: the habit of reading dates, spotting mints, and hunting stories.',
          'And the stories are in every coin — how many hands your coin passed through, which era’s inflation it survived, which war’s metal shortage shaped it, which republic’s celebration it witnessed. History in books is read; history in coins is touched.',
        ],
      },
      {
        hHi: 'थीम चुनिए, भटकाव से बचिए',
        hEn: 'Choose a theme, avoid the drift',
        pHi: [
          'नए संग्राहक की सबसे आम भूल है “सब कुछ” जमा करना — जल्दी ही डिब्बा भर जाता है और दिशा खो जाती है। इलाज है थीम: कोई एक धागा जो संग्रह को कहानी बना दे। आसान शुरुआती थीम — गणराज्य भारत का हर साल का एक रुपया; सारे स्मारक सिक्के; चारों टकसाल चिह्नों का एक-एक सेट; या ब्रिटिश भारत का शासक-वार टाइप सेट।',
          'थीम छोटी हो तो पूरी होने का सुख मिलता है, और पूरा हुआ संग्रह अगली थीम की भूख जगाता है। दस साल बाद आपके पास डिब्बे नहीं, अध्याय होंगे।',
        ],
        pEn: [
          'The commonest beginner’s error is collecting “everything” — the box fills fast and the direction disappears. The cure is a theme: one thread that turns a pile into a story. Easy starting themes — a one-rupee coin of every Republic India year; all the commemoratives; one set of all four mint marks; or a ruler-wise British India type set.',
          'A small theme brings the joy of completion, and a completed set awakens the appetite for the next. Ten years on, you will own not boxes but chapters.',
        ],
      },
      {
        hHi: 'औज़ार, रख-रखाव और संगत',
        hEn: 'Tools, storage and company',
        pHi: [
          'ज़रूरी सामान की सूची छोटी है: 10x लूप, ऐसिड-फ्री होल्डर/एल्बम (PVC से सख़्त परहेज़ — वह धातु पर हरी चिपचिपी परत छोड़ता है), मुलायम सूती दस्ताने या किनारों से पकड़ने की आदत, और एक रजिस्टर जिसमें हर सिक्के का ब्योरा हो — कब, कहाँ से, कितने में, क्या ख़ास। सफ़ाई कभी नहीं — यह नियम पत्थर की लकीर है।',
          'और सबसे बढ़कर — संगत खोजिए: अपने शहर की न्यूमिस्मैटिक सोसाइटी, सिक्का-प्रदर्शनियाँ, पुस्तकालय के कैटलॉग। अकेले संग्राहक के पास सिक्के होते हैं; संगत वाले संग्राहक के पास ज्ञान, दोस्त और असली सौदे भी। इस हॉबी में सबसे क़ीमती सिक्का वही है जो आपने समझकर ख़रीदा — भाव नहीं, भाव-ताव समझकर।',
        ],
        pEn: [
          'The kit list is short: a 10x loupe, acid-free holders or albums (a hard no to PVC — it leaves a sticky green film on metal), soft cotton gloves or the edge-holding habit, and a register recording each coin — when, from where, for how much, what is special. Never cleaning — that rule is carved in stone.',
          'Above all — find company: your city’s numismatic society, coin exhibitions, the library’s catalogues. A lone collector owns coins; a connected collector owns knowledge, friendships and honest deals too. The most valuable coin in this hobby is the one you bought with understanding — of not just the price, but the why.',
        ],
      },
    ],
  },
  {
    slug: 'princely-states-coins',
    category: 'itihas',
    titleHi: 'रियासतों के सिक्के: हैदराबाद से ग्वालियर तक, संग्रह का सबसे रंगीन अध्याय',
    titleEn: 'Coins of the Princely States: From Hyderabad to Gwalior, Collecting’s Most Colourful Chapter',
    excerptHi: 'आज़ादी से पहले सैकड़ों रियासतें अपने सिक्के ढालती थीं — हर एक की अपनी लिपि, अपना प्रतीक, अपनी कहानी। इस विशाल, किफ़ायती और कम भीड़ वाले क्षेत्र की सैर।',
    excerptEn: 'Before independence, hundreds of princely states struck their own coins — each with its own script, symbol and story. A tour of this vast, affordable, under-crowded field.',
    date: '2026-07-19',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'ब्रिटिश भारत के नक़्शे में सीधी रेखाओं के बीच सैकड़ों रियासतें बिखरी थीं — हैदराबाद, ग्वालियर, बड़ौदा, जयपुर, त्रावणकोर, कच्छ — और उनमें से बहुतों को अपने सिक्के ढालने का अधिकार था। नतीजा: भारतीय न्यूमिस्मैटिक्स का सबसे रंगीन अध्याय, जिसमें फ़ारसी, देवनागरी, गुजराती और तमिल लिपियाँ, सूर्य-चंद्र और कटार जैसे राजचिह्न, सब एक साथ मिलते हैं।',
          'संग्राहक के लिए इस क्षेत्र की दो ख़ूबियाँ हैं: विशालता — विषय जीवन भर ख़त्म नहीं होता — और किफ़ायत: ब्रिटिश भारत की तुलना में यहाँ भीड़ कम है, इसलिए अच्छे सिक्के अब भी उचित दाम पर मिल जाते हैं।',
        ],
        pEn: [
          'Scattered between the straight lines of the British India map lay hundreds of princely states — Hyderabad, Gwalior, Baroda, Jaipur, Travancore, Kutch — and many held the right to strike their own coins. The result: the most colourful chapter of Indian numismatics, where Persian, Devanagari, Gujarati and Tamil scripts meet suns, moons and daggers of royal heraldry.',
          'For the collector this field has two virtues: vastness — the subject never ends in a lifetime — and affordability: with less crowding than British India, good coins still surface at fair prices.',
        ],
      },
      {
        hHi: 'बड़े नाम, बड़ी टकसालें',
        hEn: 'The big names, the big mints',
        pHi: [
          'हैदराबाद रियासतों में सबसे बड़ी थी और उसकी टकसाल सबसे सक्रिय — निज़ाम के “हाली सिक्का” रुपये चारमीनार के चित्र के साथ बीसवीं सदी में भी ढलते रहे। ग्वालियर, इंदौर और बड़ौदा की मराठा रियासतों के सिक्के अपने राजवंशीय प्रतीकों के लिए जाने जाते हैं, तो जयपुर की टकसाल अपनी झाड़ू-निशान (झाड़) वाली परंपरा के लिए।',
          'दक्षिण में त्रावणकोर के छोटे-छोटे “चुक्रम” और “फ़नम” अपने आकार के लिए मशहूर हैं — कुछ इतने छोटे कि उँगली पर दस आ जाएँ। और कच्छ की कोरी अपनी बढ़िया ढलाई के कारण संग्राहकों की प्रिय है। हर रियासत असल में एक छोटी न्यूमिस्मैटिक दुनिया है — अपनी मुद्रा-इकाई, अपना पंचांग, अपनी भाषा।',
        ],
        pEn: [
          'Hyderabad was the largest state and its mint the busiest — the Nizam’s “Halli Sicca” rupees, bearing the Charminar, were struck well into the twentieth century. The Maratha states of Gwalior, Indore and Baroda are known for their dynastic emblems, while Jaipur’s mint is famed for its jhar (branch) mark tradition.',
          'In the south, Travancore’s tiny chuckrams and fanams are famous for their size — some so small that ten sit on a fingertip. Kutch’s kori is a collector favourite for the quality of its striking. Each state is really a miniature numismatic world — its own currency unit, its own calendar, its own language.',
        ],
      },
      {
        hHi: 'इस क्षेत्र में कैसे उतरें',
        hEn: 'How to enter the field',
        pHi: [
          'सलाह वही पुरानी, पर यहाँ और भी ज़रूरी: एक रियासत चुनकर शुरू कीजिए — अधिकतर संग्राहक हैदराबाद या ग्वालियर से शुरू करते हैं, क्योंकि सामग्री सुलभ और साहित्य समृद्ध है। रियासत की लिपि और पंचांग (हिजरी/विक्रम संवत) पढ़ना सीखिए — यहीं इस क्षेत्र का असली आनंद है।',
          'सावधानी: रियासती सिक्कों की दुनिया में जानकारी ही सुरक्षा है, क्योंकि कैटलॉग-मूल्य और असली बाज़ार-भाव में अंतर हो सकता है। सोसाइटियों से जुड़िए, नीलामी-परिणाम देखिए, और सौ वर्ष से पुरानी वस्तुओं पर प्राचीन-वस्तु नियमों का ध्यान रखिए। धीरे चलिए — यह क्षेत्र भागने वालों का नहीं, रमने वालों का है।',
        ],
        pEn: [
          'The old advice matters even more here: begin with one state — most collectors start with Hyderabad or Gwalior, where material is accessible and literature rich. Learn to read the state’s script and calendar (Hijri or Vikram Samvat) — that is where the field’s real joy lives.',
          'A caution: in princely coins, knowledge is safety, for catalogue values and real market prices can diverge. Join societies, follow auction results, and mind antiquities rules for pieces over a hundred years old. Go slowly — this field rewards those who settle in, not those who sprint.',
        ],
      },
    ],
  },
  {
    slug: 'punch-marked-coins-ancient-india',
    category: 'itihas',
    titleHi: 'पंच-मार्क सिक्के: ढाई हज़ार साल पहले का भारतीय पैसा',
    titleEn: 'Punch-Marked Coins: Indian Money from 2,500 Years Ago',
    excerptHi: 'बुद्ध के समय के चाँदी के टुकड़े, जिन पर ठप्पों से सूर्य, पहाड़ और पशु अंकित हैं — भारत के सबसे पुराने सिक्के आज भी संग्राहकों की पहुँच में हैं।',
    excerptEn: 'Silver pieces from the Buddha’s own era, stamped with suns, hills and animals — India’s oldest coins remain within a collector’s reach even today.',
    date: '2026-07-20',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'भारत में सिक्कों की कहानी लगभग ढाई हज़ार साल पहले शुरू होती है — महाजनपदों के दौर में, बुद्ध और महावीर के समकालीन। ये “पंच-मार्क” सिक्के थे: चाँदी के कटे-नपे टुकड़े, जिन पर अलग-अलग ठप्पों (पंच) से चिह्न अंकित किए जाते थे — सूर्य, छह भुजाओं वाला चक्र, पहाड़, वृक्ष, हाथी, बैल।',
          'इन पर किसी राजा का नाम नहीं मिलता — सिर्फ़ चिह्नों की भाषा, जिसे विद्वान आज भी पढ़ने की कोशिश कर रहे हैं। यही रहस्य इन्हें रोमांचक बनाता है: आपकी हथेली का सिक्का मौर्य साम्राज्य के किसी बाज़ार से गुज़रा हो सकता है, और उसके चिह्नों का पूरा अर्थ आज तक कोई नहीं जानता।',
        ],
        pEn: [
          'India’s coin story begins about 2,500 years ago — in the age of the mahajanapadas, contemporary with the Buddha and Mahavira. These were the punch-marked coins: cut and weighed pieces of silver, stamped with separate punches — a sun, a six-armed wheel, hills, trees, elephants, bulls.',
          'No king’s name appears on them — only a language of symbols that scholars are still trying to read. That mystery is their thrill: the coin in your palm may have passed through a Mauryan bazaar, and no one alive knows the full meaning of its marks.',
        ],
      },
      {
        hHi: 'कैसे बने, कैसे पहचानें',
        hEn: 'How they were made, how to identify them',
        pHi: [
          'चाँदी की चादर से टुकड़े काटे जाते, वज़न मानक (लगभग 3.4 ग्राम का “कार्षापण”) तक तराशे जाते, फिर उन पर अधिकारियों के ठप्पे लगते। इसीलिए आकार अनगढ़ है — गोल नहीं, कटा-छँटा — और यही अनगढ़पन असलियत की पहचान है। पीछे की ओर छोटे “बैंकर्स मार्क” भी मिलते हैं — प्राचीन साहूकारों की जाँच के निशान।',
          'पहचान के सूत्र: सतह पर ठप्पों का ओवरलैप, चाँदी की पुरानी परत, सही वज़न-सीमा, और चिह्नों का ज्ञात समूहों से मिलान। नक़लें यहाँ भी हैं — बहुत साफ़, बहुत गोल, बहुत चमकदार टुकड़ा शक की पहली वजह है।',
        ],
        pEn: [
          'Pieces were cut from silver sheet, trimmed to a weight standard (the karshapana of roughly 3.4 grams), then stamped by officials. Hence the rough shape — not round but clipped — and that roughness is the mark of authenticity. Small “banker’s marks” on the reverse are the test-punches of ancient money-changers.',
          'Identification clues: overlapping punches, old silver patina, the correct weight range, and symbols matching known groups. Fakes exist here too — a piece too neat, too round, too shiny is the first reason for doubt.',
        ],
      },
      {
        hHi: 'संग्रह में प्राचीन भारत',
        hEn: 'Ancient India in your collection',
        pHi: [
          'आश्चर्य की बात: इतने प्राचीन होकर भी पंच-मार्क सिक्के दुर्गम नहीं हैं — ये बड़ी संख्या में ढले और मिले हैं, इसलिए सामान्य दशा के टुकड़े मध्यम बजट में आ जाते हैं। शुरुआत के लिए मौर्यकालीन आम प्रकार सबसे उपयुक्त हैं।',
          'याद रखने की बातें वही: प्रतिष्ठित स्रोत से ख़रीद, सफ़ाई नहीं, और क़ानून का ध्यान — ये टुकड़े परिभाषा से ही प्राचीन वस्तुएँ हैं, इनका निर्यात प्रतिबंधित है और भारत के भीतर भी दस्तावेज़ी सावधानी समझदारी है। ढाई हज़ार साल का इतिहास हथेली पर रखना एक ज़िम्मेदारी भी है — उसे वैसे ही निभाइए।',
        ],
        pEn: [
          'The surprise: despite their age, punch-marked coins are not out of reach — they were struck and found in large numbers, so pieces in ordinary condition fit a middling budget. Common Mauryan-period types are the best entry point.',
          'The usual rules hold: buy from reputable sources, never clean, and mind the law — these pieces are antiquities by definition, their export is prohibited, and documentary care within India is wise. Holding 2,500 years of history in your palm is also a responsibility — carry it accordingly.',
        ],
      },
    ],
  },
  {
    slug: 'small-coins-25-50-paise',
    category: 'republic-india',
    titleHi: '25 और 50 पैसे: चलन से हटे छोटे सिक्कों की दूसरी ज़िंदगी',
    titleEn: 'The 25 and 50 Paise: A Second Life for India’s Withdrawn Small Coins',
    excerptHi: '2011 में 25 पैसे और उससे छोटे सिक्के चलन से हट गए — और उसी दिन वे मुद्रा से स्मृति बन गए। किन छोटे सिक्कों को सँभालकर रखें, और क्यों।',
    excerptEn: 'In 2011 the 25 paise and below were withdrawn from circulation — and that day they turned from money into memory. Which small coins to keep, and why.',
    date: '2026-07-21',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'एक पीढ़ी के लिए चवन्नी-अठन्नी रोज़ की ज़िंदगी थी — बस का टिकट, चूरन की पुड़िया, गुल्लक की खनक। 30 जून 2011 को 25 पैसे और उससे छोटे मूल्यवर्ग विमुद्रीकृत हुए, और चवन्नी क़ानूनी मुद्रा से इतिहास बन गई। संग्रह की दुनिया में यही वह क्षण होता है जब आम चीज़ ख़ास बनने की यात्रा शुरू करती है।',
          'साफ़ बात पहले: विमुद्रीकृत होते ही हर छोटा सिक्का क़ीमती नहीं हो जाता — अरबों की संख्या में ढले सिक्के दशकों तक आम ही रहेंगे। पर इस क्षेत्र का आकर्षण क़ीमत से ज़्यादा कहानी में है, और कुछ कोनों में असली दुर्लभता भी छिपी है।',
        ],
        pEn: [
          'For a generation, the chavanni and athanni were daily life — the bus ticket, the paper cone of churan, the rattle of the piggy bank. On 30 June 2011, the 25 paise and smaller denominations were demonetised, and the chavanni passed from legal tender into history. In collecting, that is the moment an ordinary thing begins its journey to special.',
          'Plain speech first: demonetisation does not make every small coin valuable — coins struck in the billions will stay common for decades. The charm of this field lies more in story than in price, though real rarity does hide in some corners.',
        ],
      },
      {
        hHi: 'धातुओं और डिज़ाइनों की परेड',
        hEn: 'A parade of metals and designs',
        pHi: [
          'छोटे सिक्कों का इतिहास धातुओं की कहानी है: शुरुआती दशकों का निकल और ताँबा-निकल, फिर 1960 के दशक से एल्युमिनियम के हल्के चौकोर-गोल सिक्के, और अंत में स्टील। डिज़ाइन भी बदलते रहे — बैल जोड़ी वाले पैसे, हाथ की मुद्रा वाली शृंखला, अन्न की बालियाँ। एक ही मूल्यवर्ग के भीतर यह विविधता “थीम संग्रह” के लिए आदर्श है।',
          'ख़ास तौर पर देखने लायक़: 1, 2, 3 (हाँ, तीन!), 5, 10, 20, 25 और 50 पैसे — बीस पैसे और तीन पैसे जैसे असामान्य मूल्यवर्ग अपने-आप में बातचीत का विषय हैं। कम ढलाई वाले कुछ वर्ष-टकसाल संयोजन और UNC दशा के टुकड़े ही इस क्षेत्र की असल “तलाश” हैं।',
        ],
        pEn: [
          'The small coins’ history is a story of metals: nickel and cupro-nickel in the early decades, the light aluminium squares and scallops from the 1960s, and finally steel. Designs marched too — the oxen pair paise, the hand-mudra series, the ears of grain. Such variety within single denominations is ideal for theme collecting.',
          'Worth special attention: the 1, 2, 3 (yes, three!), 5, 10, 20, 25 and 50 paise — unusual denominations like the twenty and three paise are conversation pieces in themselves. Low-mintage year-mint combinations and UNC survivors are the field’s true hunt.',
        ],
      },
      {
        hHi: 'क्या रखें, कैसे रखें',
        hEn: 'What to keep, and how',
        pHi: [
          'व्यावहारिक तरीक़ा: हर मूल्यवर्ग-डिज़ाइन का एक-एक सबसे अच्छा नमूना अलग कीजिए — यही “टाइप सेट” है; बाक़ी ढेर को भावनात्मक धरोहर मानकर रखिए या रहने दीजिए। जो नमूने रखें, उन्हें ऐसिड-फ्री होल्डर में, बिना सफ़ाई के — एल्युमिनियम विशेष रूप से खरोंच-प्रवण है।',
          'और बच्चों के लिए इससे अच्छा प्रवेश-द्वार कोई नहीं: दादा-दादी की चवन्नी से शुरू हुआ संग्रह इतिहास, अर्थशास्त्र और धैर्य — तीनों एक साथ सिखा देता है। छोटे सिक्के छोटा सबक़ नहीं देते।',
        ],
        pEn: [
          'The practical method: set aside one best specimen of every denomination-design — that is the type set; treat the rest of the pile as sentimental heritage, kept or released. Store the keepers in acid-free holders, uncleaned — aluminium scratches especially easily.',
          'And there is no better gateway for children: a collection begun from a grandparent’s chavanni teaches history, economics and patience all at once. Small coins do not teach small lessons.',
        ],
      },
    ],
  },
  {
    slug: 'coin-storage-album-guide',
    category: 'collecting',
    titleHi: 'संग्रह की हिफ़ाज़त: एल्बम, होल्डर और वे ग़लतियाँ जो सिक्कों को धीरे-धीरे मारती हैं',
    titleEn: 'Protecting the Collection: Albums, Holders, and the Mistakes That Kill Coins Slowly',
    excerptHi: 'PVC की हरी परत, नमी का ज़ंग, रगड़ की खरोंचें — सिक्कों के असली दुश्मन चोर नहीं, ग़लत रख-रखाव है। सही भंडारण की पूरी गाइड।',
    excerptEn: 'The green PVC film, the rust of humidity, the scratches of friction — a coin’s real enemies are not thieves but bad storage. The complete guide to keeping coins safe.',
    date: '2026-07-22',
    minutes: 7,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'संग्राहक बरसों लगाकर सिक्के जुटाता है, और फिर उन्हें उस डिब्बे में रख देता है जो उन्हें चुपचाप बर्बाद कर रहा है। सिक्कों के तीन सबसे बड़े दुश्मन हैं: ग़लत प्लास्टिक, नमी और रगड़। तीनों धीमे हत्यारे हैं — नुक़सान दिखने में साल लगते हैं, और तब तक वह अपरिवर्तनीय हो चुका होता है।',
          'अच्छी ख़बर: बचाव सस्ता और सरल है। सही सामग्री चुनने और चार आदतें अपनाने भर से संग्रह पीढ़ियों तक सुरक्षित रहता है।',
        ],
        pEn: [
          'A collector spends years gathering coins, then puts them in the very box that quietly destroys them. Coins have three great enemies: the wrong plastic, humidity, and friction. All three are slow killers — the damage takes years to show, and by then it is irreversible.',
          'The good news: protection is cheap and simple. Choosing the right materials and adopting four habits keeps a collection safe for generations.',
        ],
      },
      {
        hHi: 'दुश्मन नंबर एक: PVC',
        hEn: 'Enemy number one: PVC',
        pHi: [
          'सस्ती चमकदार जेबों वाले कई एल्बम PVC के बने होते हैं, और PVC समय के साथ ऐसे रसायन छोड़ता है जो धातु पर हरी-चिपचिपी परत जमा देते हैं — संग्राहक इसे “PVC डैमेज” कहते हैं और यह सिक्के की सतह को स्थायी रूप से खा जाता है। नियम सीधा है: जिस प्लास्टिक की पहचान न हो, उसमें सिक्का नहीं।',
          'सुरक्षित विकल्प बाज़ार में सहज उपलब्ध हैं: मायलर/पॉलिएस्टर फ्लिप, पॉलीप्रोपाइलीन जेबों वाले एल्बम, कार्डबोर्ड “2x2” होल्डर (स्टेपल किनारे दबाकर), और महँगे टुकड़ों के लिए एयरटाइट कैप्सूल। पुराने PVC एल्बम से सिक्के आज ही निकाल लीजिए — यही इस लेख की सबसे ज़रूरी पंक्ति है।',
        ],
        pEn: [
          'Many albums with cheap glossy pockets are made of PVC, and PVC leaches chemicals over time that deposit a sticky green film on metal — collectors call it PVC damage, and it permanently eats the coin’s surface. The rule is simple: no coin goes into a plastic you cannot identify.',
          'Safe options are readily available: Mylar/polyester flips, albums with polypropylene pockets, cardboard 2x2 holders (with staples pressed flat), and airtight capsules for the better pieces. Move coins out of old PVC albums today — that is the most important sentence in this article.',
        ],
      },
      {
        hHi: 'नमी, हवा और जगह',
        hEn: 'Humidity, air and location',
        pHi: [
          'भारतीय जलवायु की नमी ताँबे और चाँदी दोनों की दुश्मन है — हरा ज़ंग (वर्डीग्रिस) और काले धब्बे उसी की देन हैं। भंडारण सूखी, ठंडी जगह पर हो; डिब्बे में सिलिका जेल की पुड़ियाँ रखिए और उन्हें समय-समय पर बदलिए। रसोई-स्नानघर से लगी दीवारें और ज़मीन से सटी अलमारियाँ सबसे ख़राब जगहें हैं।',
          'रगड़ से बचाव का नियम: एक जेब, एक सिक्का। सिक्कों का ढेर एक ही थैली में रखना उन्हें रोज़ थोड़ा-थोड़ा घिसना है। और साल में एक बार संग्रह का निरीक्षण कीजिए — शुरुआती हरे निशान पकड़ में आ जाएँ तो प्रभावित सिक्के को तुरंत बेहतर होल्डर में ले जाइए।',
        ],
        pEn: [
          'Indian humidity is the enemy of copper and silver alike — green verdigris and black spotting are its gifts. Store in a dry, cool place; keep silica-gel sachets in the box and refresh them periodically. Walls adjoining kitchens and bathrooms, and floor-level cupboards, are the worst locations.',
          'The anti-friction rule: one pocket, one coin. A heap of coins in a single pouch grinds itself a little every day. And inspect the collection once a year — catch early green spots and move the affected coin to a better holder at once.',
        ],
      },
      {
        hHi: 'रिकॉर्ड और विरासत',
        hEn: 'Records and inheritance',
        pHi: [
          'हर सिक्के का रिकॉर्ड रखिए — पहचान, स्रोत, तारीख़, दाम, और तस्वीर। यह सूची तीन काम करती है: बीमा/नुक़सान की स्थिति में सबूत, बेचते समय भरोसा, और सबसे बढ़कर — परिवार के लिए नक्शा। बहुत से संग्रह इसलिए औने-पौने बिके क्योंकि उत्तराधिकारियों को पता ही नहीं था कि डिब्बे में क्या है।',
          'संग्रह के साथ एक पत्र रखिए: क्या-क्या है, क्या ख़ास है, बेचना पड़े तो किन रास्तों से (डीलर/नीलामी/सोसाइटी) और किनसे सावधान रहें (अग्रिम-फ़ीस ठग)। यही चिट्ठी आपके संग्रह की आख़िरी और सबसे बड़ी हिफ़ाज़त है।',
        ],
        pEn: [
          'Keep a record of every coin — identification, source, date, price, and a photograph. The list does three jobs: proof for insurance or loss, confidence at sale time, and above all — a map for the family. Many collections have sold for a pittance because the heirs never knew what the box held.',
          'Keep a letter with the collection: what it contains, what is special, which routes to sell through if needed (dealer/auction/society) and whom to beware of (advance-fee fraudsters). That letter is your collection’s final and greatest protection.',
        ],
      },
    ],
  },
  {
    slug: 'fake-coins-detection',
    category: 'market',
    titleHi: 'नक़ली सिक्के कैसे पहचानें: वज़न, आवाज़, किनारा और शक की कला',
    titleEn: 'Detecting Fake Coins: Weight, Sound, Edge, and the Art of Suspicion',
    excerptHi: 'जहाँ क़ीमत है, वहाँ नक़ल है। ढलाई-निशान से लेकर चुंबक-परीक्षण तक — घर बैठे जाँच के तरीक़े, और वे हालात जिनमें सीधे विशेषज्ञ के पास जाना चाहिए।',
    excerptEn: 'Wherever there is value, there are fakes. From casting marks to the magnet test — checks you can do at home, and the situations that call for an expert.',
    date: '2026-07-23',
    minutes: 8,
    sections: [
      {
        hHi: '',
        hEn: '',
        pHi: [
          'नक़ली सिक्के उतने ही पुराने हैं जितने असली — प्राचीन टकसालों के दौर से ही जालसाज़ सक्रिय थे, और आज के दौर में ऊँचे दामों ने उन्हें नई ऊर्जा दे दी है। संग्राहक के लिए यह डरने की नहीं, सीखने की बात है: अधिकांश नक़लें कुछ बुनियादी जाँचों में ही पकड़ी जाती हैं।',
          'पहला सिद्धांत याद रखिए: नक़ल सस्ते में “दुर्लभ” बेचने के लिए बनाई जाती है। इसलिए शक की पहली घंटी सौदे में बजती है, सिक्के में नहीं — बाज़ार-भाव से बहुत सस्ता दुर्लभ सिक्का ख़ुद चिल्लाकर कह रहा है कि कुछ ग़लत है।',
        ],
        pEn: [
          'Fake coins are as old as real ones — forgers were active in the age of ancient mints, and today’s high prices have given them fresh energy. For the collector this is a matter for learning, not fear: most fakes fall to a few basic checks.',
          'Hold on to the first principle: a fake exists to sell “rarity” cheaply. So the first alarm rings in the deal, not the coin — a rare coin far below market price is itself shouting that something is wrong.',
        ],
      },
      {
        hHi: 'घर की चार जाँचें',
        hEn: 'Four checks at home',
        pHi: [
          'एक — वज़न: हर असली सिक्के का मानक वज़न ज्ञात है; 0.1 ग्राम तक नापने वाला छोटा तराज़ू संग्राहक का सबसे सस्ता हथियार है। मानक से स्पष्ट दूर वज़न लगभग हमेशा बुरी ख़बर है। दो — चुंबक: चाँदी और ताँबा चुंबक से नहीं चिपकते; “चाँदी का रुपया” चुंबक पर चिपका तो बात ख़त्म। तीन — आवाज़: चाँदी का सिक्का उँगली पर हल्के से बजाने पर देर तक मीठी खनक देता है; ढला हुआ नक़ली टुकड़ा बुझी-सी ठक। चार — किनारा: असली मशीनी सिक्कों की रीडिंग (दाँतेदार किनारा) एकसार होती है; ढाले गए नक़लों में किनारे पर जोड़ की महीन रेखा या दानेदार सतह दिख जाती है।',
          'लूप से सतह देखिए: ढलाई (कास्टिंग) से बनी नक़लों में सतह पर महीन दाने और गोल गड्ढे (पिटिंग) होते हैं, जबकि असली ठप्पे की सतह में धातु का बहाव दिखता है। अक्षरों की धार भी बोलती है — असली में चोखी, नक़ल में गोल-मटोल।',
        ],
        pEn: [
          'One — weight: every genuine coin has a known standard weight; a small 0.1-gram scale is the collector’s cheapest weapon. A clear deviation is almost always bad news. Two — the magnet: silver and copper do not stick; a “silver rupee” that clings to a magnet ends the conversation. Three — sound: a silver coin balanced on a fingertip and tapped rings long and sweet; a cast fake gives a dead thud. Four — the edge: genuine milled coins have even reeding; cast fakes often show a fine seam line or grainy edge.',
          'Examine the surface under a loupe: cast fakes carry fine granularity and rounded pits, while a genuinely struck surface shows metal flow. Letter edges speak too — crisp on the real, mushy on the fake.',
        ],
      },
      {
        hHi: 'कब सीधे विशेषज्ञ के पास जाएँ',
        hEn: 'When to go straight to an expert',
        pHi: [
          'तीन स्थितियों में घर की जाँच काफ़ी नहीं: दाम बड़ा हो, सिक्का दुर्लभ श्रेणी का हो, या विक्रेता अनजान हो। आधुनिक नक़लें बेहतर होती जा रही हैं, और कुछ इतनी अच्छी हैं कि केवल अनुभवी आँख या ग्रेडिंग-प्रयोगशाला ही पकड़ती है। ऐसे हर सौदे को “जाँच के बाद भुगतान” की शर्त पर कीजिए — जो विक्रेता जाँच से घबराए, वही जवाब है।',
          'और एक क़ानूनी स्पष्टता: संग्रह की दुनिया में “रेप्लिका” शब्द के पीछे भी धंधा चलता है। स्मारिका के रूप में साफ़-साफ़ घोषित प्रतिकृति एक बात है; असली बताकर बेची गई प्रतिकृति ठगी है। ख़रीदते समय रसीद पर सिक्के का विवरण लिखवाइए — ईमानदार विक्रेता कभी मना नहीं करता।',
        ],
        pEn: [
          'In three situations home checks are not enough: when the price is large, the coin is in a rare class, or the seller is unknown. Modern fakes keep improving, and some are good enough that only a seasoned eye or a grading laboratory catches them. Make every such deal conditional on inspection before payment — a seller who fears inspection is the answer itself.',
          'And one legal clarity: a trade also runs behind the word “replica”. A souvenir clearly declared as a replica is one thing; a replica sold as genuine is fraud. Have the coin’s details written on the receipt — an honest seller never refuses.',
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(cat: CatSlug): Article[] {
  return ARTICLES.filter((a) => a.category === cat).sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Batch 2 merges into the same library; all lists sort by date.
ARTICLES.push(...ARTICLES_BATCH2);

// Batch 3 — bilingual numismatics deep-dives (Kushan to naya paisa).
ARTICLES.push(...ARTICLES_BATCH3);

// Autonomous content bot output (committed by the ulyah.com Orchestra).
ARTICLES.push(...(AUTO_ARTICLES as unknown as Article[]));
