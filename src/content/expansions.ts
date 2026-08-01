import type { Article, Section } from './articles';

/**
 * Additive expansions for the OldCo.in bilingual library.
 *
 * Every entry here APPENDS sections to an existing article. Nothing is
 * removed, nothing is rewritten, and two articles are never merged into one
 * URL. Multiple entries may target the same slug — they apply in order, which
 * is how later top-off passes work.
 *
 * Both languages are written by hand. Hindi is the native language of the
 * site; the English is a genuine translation rather than a summary, so both
 * columns carry the same argument at the same depth.
 */
export interface Expansion {
  slug: string;
  sections: Section[];
}

export const EXPANSIONS: Expansion[] = [
  {
    slug: 'one-rupee-1947-value',
    sections: [
      {
        hHi: 'टकसाल चिह्न कैसे पढ़ें',
        hEn: 'How to read the mint mark',
        pHi: [
          'सिक्के को उलटिए और तारीख़ के ठीक नीचे देखिए। ब्रिटिश भारत के दौर में ज़्यादातर टकसालें अपना छोटा-सा चिह्न वहीं छोड़ती थीं, और वही चिह्न बताता है कि यह सिक्का कहाँ ढला। बंबई टकसाल एक छोटा हीरा (डायमंड) लगाती थी, लाहौर अंग्रेज़ी का “L”, और प्रिटोरिया एक बिंदु। कलकत्ता टकसाल अक्सर कोई चिह्न नहीं छोड़ती थी — यानी चिह्न का न होना भी अपने आप में एक जानकारी है।',
          'यह छोटी-सी बात मायने रखती है, क्योंकि एक ही साल के सिक्के अलग-अलग टकसालों में अलग-अलग संख्या में ढले। जिस टकसाल ने कम ढाले, उसका सिक्का संग्राहकों की सूची में ऊपर रहता है। यही वजह है कि दो देखने में एक जैसे सिक्कों के दाम में फ़र्क़ हो सकता है।',
          'चिह्न देखने के लिए तेज़ रोशनी और एक साधारण मैग्निफ़ाइंग ग्लास काफ़ी है। सिक्के को किनारों से पकड़िए, चेहरे पर उँगली मत रखिए — त्वचा का तेल धातु पर निशान छोड़ता है, और वह निशान समय के साथ गहरा होता जाता है।',
        ],
        pEn: [
          'Turn the coin over and look just below the date. Through the British India period most mints left a small mark there, and that mark tells you where the coin was struck. The Bombay mint used a small diamond, Lahore used the letter “L”, and Pretoria used a dot. The Calcutta mint often left no mark at all — meaning the absence of a mark is itself a piece of information.',
          'This small detail matters, because coins of the same year were struck in very different quantities at different mints. Whichever mint produced fewer sits higher on a collector’s list. That is why two apparently identical coins can carry different prices.',
          'A bright light and an ordinary magnifying glass are enough to find the mark. Hold the coin by its edges and keep your fingers off the faces — skin oils leave marks on metal, and those marks darken over time.',
        ],
      },
      {
        hHi: 'ग्रेडिंग की भाषा, आसान शब्दों में',
        hEn: 'The language of grading, in plain words',
        pHi: [
          'संग्राहक दशा को शब्दों में नहीं, एक तय सीढ़ी में नापते हैं। सबसे नीचे “पुअर” — जहाँ तारीख़ मुश्किल से पढ़ी जाए। उसके ऊपर “गुड”, “फ़ाइन”, “वेरी फ़ाइन” और “एक्स्ट्रीमली फ़ाइन”, जहाँ बारीक ब्योरे धीरे-धीरे साफ़ होते जाते हैं। सबसे ऊपर “अनसर्कुलेटेड” (UNC) — यानी वह सिक्का जो कभी चलन में गया ही नहीं।',
          '1947 के रुपये के मामले में यह सीढ़ी सीधे दाम में बदलती है। घिसा हुआ, चलन का सिक्का कुछ सौ रुपये का मामला है। वही सिक्का अगर तीखे ब्योरों और मूल चमक के साथ मिले, तो कई गुना ऊपर चला जाता है। यह अंतर उम्र का नहीं, दशा का है।',
          'ध्यान रहे — घर पर सिक्का साफ़ करके “अच्छी दशा” नहीं बनाई जा सकती। चमकाने से मूल लस्टर हमेशा के लिए चला जाता है, और अनुभवी ख़रीदार उसे पहली नज़र में पहचान लेता है। साफ़ किया हुआ सिक्का अपनी आधी से ज़्यादा क़ीमत खो देता है।',
        ],
        pEn: [
          'Collectors do not describe condition loosely; they place it on a fixed ladder. At the bottom sits “Poor”, where the date is barely legible. Above it come “Good”, “Fine”, “Very Fine” and “Extremely Fine”, as the fine detail gradually sharpens. At the top sits “Uncirculated” (UNC) — a coin that never entered circulation at all.',
          'For the 1947 rupee, that ladder translates directly into price. A worn circulated example is a matter of a few hundred rupees. The same coin with crisp detail and its original mint lustre climbs several multiples above that. The difference is not age; it is condition.',
          'One caution: you cannot manufacture “good condition” by cleaning a coin at home. Polishing destroys the original lustre permanently, and an experienced buyer recognises it at a glance. A cleaned coin loses more than half its value.',
        ],
      },
      {
        hHi: 'किन 1947 के सिक्कों की सचमुच माँग है',
        hEn: 'Which 1947 coins are genuinely in demand',
        pHi: [
          'सबसे पहले एक ग़लतफ़हमी दूर कर लें: 1947 का एक रुपया चाँदी का नहीं है। ब्रिटिश भारत में चाँदी 1940 के आसपास घटाई गई और 1946–47 तक रुपया निकल का हो चुका था। जिन विज्ञापनों में “1947 का चाँदी का रुपया” बेचा या ख़रीदा जा रहा हो, वे या तो अज्ञानता हैं या जाल।',
          'असली माँग तीन जगह है। पहली — बहुत ऊँची दशा के सिक्के, ख़ासकर वे जिन पर टकसाल की मूल चमक बची हो। दूसरी — असली ढलाई-दोष (एरर), जैसे दोहरी छपाई या केंद्र से हटी हुई डाई। तीसरी — कम ढले टकसाल-वर्ष का संयोजन, जो कैटलॉग में दर्ज होता है।',
          'इनके अलावा 1947 के छोटे मूल्यवर्ग — क्वार्टर रुपया, हाफ़ रुपया, आधा आना — भी अपनी अलग कहानी रखते हैं, और कई बार पूरे रुपये से ज़्यादा दिलचस्प निकलते हैं क्योंकि उन्हें लोगों ने सँभालकर नहीं रखा।',
        ],
        pEn: [
          'First, clear one misconception: the 1947 one rupee is not silver. Silver content in British India was reduced around 1940, and by 1946–47 the rupee was nickel. Any advertisement offering to buy or sell a “1947 silver rupee” is either ignorant or a trap.',
          'Genuine demand sits in three places. First, coins in very high grade, particularly those retaining original mint lustre. Second, authentic striking errors — doubled strikes, or a die struck off centre. Third, the low-mintage mint-and-year combinations that are recorded in the catalogues.',
          'Beyond those, the smaller 1947 denominations — quarter rupee, half rupee, half anna — carry their own story, and are often more interesting than the full rupee precisely because nobody thought to put them away carefully.',
        ],
      },
      {
        hHi: 'ठगी असल में कैसे काम करती है',
        hEn: 'How the scam actually works',
        pHi: [
          'जाल का ढाँचा हर बार एक जैसा होता है। एक विज्ञापन या वीडियो दावा करता है कि कोई कंपनी आपका पुराना सिक्का लाखों में ख़रीदने को तैयार है। आप संपर्क करते हैं, और सामने वाला उत्साह से हामी भरता है — दाम पर कोई मोल-भाव तक नहीं करता, जो अपने आप में पहला ख़तरे का संकेत है।',
          'फिर शुल्क की क़तार शुरू होती है। पहले “रजिस्ट्रेशन फ़ीस”, फिर “वेरिफ़िकेशन चार्ज”, फिर “जीएसटी”, फिर “कूरियर और बीमा”। हर बार रक़म छोटी रखी जाती है ताकि आप अगली किश्त भरते रहें, और हर बार कहा जाता है कि बस यही आख़िरी क़दम है।',
          'भुगतान कभी नहीं आता। असल सौदे में पैसा ख़रीदार से विक्रेता की तरफ़ बहता है — उल्टी दिशा में नहीं। अगर कोई आपसे सिक्का ख़रीदने से पहले पैसे माँग रहा है, तो सौदा वहीं ख़त्म कर दीजिए, चाहे कहानी कितनी भी भरोसेमंद लगे।',
        ],
        pEn: [
          'The structure of the trap is the same every time. An advertisement or a video claims some company is ready to buy your old coin for lakhs. You make contact, and the other side agrees enthusiastically — without negotiating the price at all, which is itself the first warning sign.',
          'Then the queue of fees begins. First a “registration fee”, then a “verification charge”, then “GST”, then “courier and insurance”. Each amount is kept small so that you keep paying the next one, and each time you are told this is the final step.',
          'The payment never arrives. In a real transaction money flows from the buyer to the seller — not the other way round. If somebody is asking you for money before buying your coin, end the conversation there, however convincing the story sounds.',
        ],
      },
      {
        hHi: 'बेचना ही हो तो सही रास्ता क्या है',
        hEn: 'If you do want to sell, the right route',
        pHi: [
          'पहला क़दम — अपेक्षा दुरुस्त कीजिए। एक आम, घिसा हुआ 1947 का रुपया कुछ सौ रुपये का सिक्का है। यह जानकर निराशा हो सकती है, पर यही वह सच्चाई है जो आपको ठगों से बचाती है।',
          'दूसरा — तुलना कीजिए। किसी प्रतिष्ठित नीलामी घर के बीते हुए नतीजे देखिए, जहाँ यह दर्ज होता है कि सिक्का असल में किस दाम पर बिका, न कि किस दाम पर माँगा गया। माँगी गई क़ीमत और बिकी हुई क़ीमत दो अलग चीज़ें हैं।',
          'तीसरा — तीन जगहें भरोसेमंद हैं: स्थापित नीलामी घर, लंबे समय से काम कर रहे डीलर, और संग्राहकों के अपने समूह व प्रदर्शनियाँ। तीनों में आपको मोल-भाव मिलेगा, कोई अग्रिम शुल्क नहीं।',
          'और चौथा — बेचने से पहले सोच लीजिए। दादाजी की संदूक़ से निकला सिक्का कुछ सौ रुपये में बेचकर मिलने वाली रक़म उस कहानी की भरपाई नहीं करती जो उसके साथ चली जाएगी। कई बार सबसे समझदारी भरा फ़ैसला उसे रख लेना होता है।',
        ],
        pEn: [
          'Step one — correct your expectations. A common, worn 1947 rupee is a coin worth a few hundred rupees. That is disappointing to hear, and it is exactly the fact that protects you from the fraudsters.',
          'Step two — compare. Look at past results from a reputable auction house, which record what a coin actually sold for rather than what somebody asked for it. Asking price and realised price are two different things.',
          'Step three — three routes are trustworthy: established auction houses, dealers who have been trading for years, and collectors’ own societies and fairs. All three will negotiate with you, and none will ask for a fee up front.',
          'And step four — think before selling. The few hundred rupees from a coin out of your grandfather’s trunk does not compensate for the story that leaves with it. Quite often the wisest decision is to keep it.',
        ],
      },
    ],
  },
  {
    slug: 'british-india-coins-guide',
    sections: [
      {
        hHi: 'शासकों का क्रम, जो हर संग्रह की रीढ़ है',
        hEn: 'The order of rulers, which is the backbone of any collection',
        pHi: [
          'ब्रिटिश भारत के सिक्कों को समझने का सबसे सरल रास्ता उन्हें शासकों के क्रम में रखना है। 1858 में ईस्ट इंडिया कंपनी का शासन ख़त्म हुआ और सिक्कों पर सीधे ब्रिटिश ताज का नाम आया। 1862 से विक्टोरिया “क्वीन” के रूप में दिखती हैं, और 1877 के बाद “एम्प्रेस” के रूप में — यह बदलाव सिक्के पर लिखा होता है और तुरंत पहचाना जा सकता है।',
          'उसके बाद एडवर्ड VII (1903–1910), फिर जॉर्ज V (1911–1936), और अंत में जॉर्ज VI (1938–1947)। बीच में एडवर्ड VIII का नाम आता है, पर उनके शासन के भारतीय सिक्के जारी नहीं हुए — वे राजगद्दी छोड़ चुके थे।',
          'यह क्रम इसलिए उपयोगी है कि एक नया संग्राहक बिना कैटलॉग के भी अपने सिक्कों को व्यवस्थित कर सकता है। हर शासक का चेहरा अलग है, और हर दौर का अपना स्वाद है।',
        ],
        pEn: [
          'The simplest way to make sense of British India coinage is to arrange it by ruler. In 1858 East India Company rule ended and the British Crown appeared directly on the coinage. From 1862 Victoria appears as “Queen”, and after 1877 as “Empress” — the change is written on the coin and is recognisable instantly.',
          'After her come Edward VII (1903–1910), then George V (1911–1936), and finally George VI (1938–1947). Edward VIII belongs in the sequence by name, but no Indian coins were issued for his reign — he had abdicated.',
          'This ordering is useful because a new collector can organise a holding without any catalogue at all. Each ruler’s portrait is distinct, and each era has its own character.',
        ],
      },
      {
        hHi: 'चाँदी से निकल तक: धातु की कहानी',
        hEn: 'From silver to nickel: the story of the metal',
        pHi: [
          'उन्नीसवीं सदी का रुपया असली चाँदी था — लगभग ग्यारह ग्राम, और चाँदी की मात्रा .917 के आसपास। यही वजह है कि पुराने रुपये हाथ में भारी लगते हैं और गिरने पर एक साफ़, लंबी आवाज़ करते हैं।',
          'पहला बड़ा झटका पहले विश्वयुद्ध के दौरान आया, जब चाँदी की क़ीमत तेज़ी से चढ़ी और सिक्के में मौजूद धातु उसके अंकित मूल्य से महँगी पड़ने लगी। दूसरा और निर्णायक झटका दूसरे विश्वयुद्ध के दौरान आया — 1940 के आसपास चाँदी घटाकर लगभग आधी कर दी गई।',
          '1946–47 तक चाँदी पूरी तरह हट गई और रुपया निकल का हो गया। इसीलिए आज़ादी के आसपास के सिक्के हल्के लगते हैं और उनकी आवाज़ भी अलग है। जो लोग “1947 का चाँदी का रुपया” खोजते हैं, वे असल में एक ऐसी चीज़ खोज रहे हैं जो कभी बनी ही नहीं।',
        ],
        pEn: [
          'The nineteenth-century rupee was genuine silver — around eleven grams, at roughly .917 fineness. That is why old rupees feel heavy in the hand and give a clear, long ring when dropped.',
          'The first shock came during the First World War, when silver prices rose sharply and the metal in the coin began to cost more than the coin’s face value. The second and decisive shock came during the Second World War — around 1940 the silver content was cut to roughly half.',
          'By 1946–47 silver had gone entirely and the rupee became nickel. That is why coins from around independence feel light and sound different. Anybody hunting for a “1947 silver rupee” is hunting for something that was never made.',
        ],
      },
      {
        hHi: 'मूल्यवर्ग की सीढ़ी: पाई, पैसा, आना, रुपया',
        hEn: 'The denomination ladder: pie, pice, anna, rupee',
        pHi: [
          'दशमलव प्रणाली से पहले भारत की गिनती अलग थी, और उसे समझे बिना पुराने सिक्के अटपटे लगते हैं। बारह पाई का एक पैसा, चार पैसे का एक आना, और सोलह आने का एक रुपया — यानी एक रुपये में 192 पाई।',
          '“सोलह आने सच” जैसा मुहावरा यहीं से आया है, और आज भी बोलचाल में ज़िंदा है। इसी तरह “फूटी कौड़ी” उस दौर की सबसे छोटी इकाई की याद है।',
          'व्यवहार में आपको जो सिक्के सबसे ज़्यादा मिलेंगे वे हैं क्वार्टर आना, आधा आना, एक आना, दो आना, क्वार्टर रुपया, आधा रुपया और रुपया। ताँबे के छोटे सिक्के भारी संख्या में ढले और भारी संख्या में बचे, इसलिए वे सस्ते भी हैं और शुरुआत के लिए आदर्श भी।',
        ],
        pEn: [
          'Before decimalisation India counted differently, and old coins look odd until you know the system. Twelve pie made one pice, four pice made one anna, and sixteen annas made one rupee — meaning 192 pie to a rupee.',
          'The phrase “sixteen annas true”, still alive in everyday Hindi, comes from exactly here. So does “phooti kaudi”, a memory of the smallest unit of that era.',
          'In practice the coins you will meet most often are the quarter anna, half anna, one anna, two annas, quarter rupee, half rupee and rupee. The small copper pieces were struck in vast numbers and survive in vast numbers, which makes them both cheap and ideal for a beginner.',
        ],
      },
      {
        hHi: 'किन तारीख़ों की सचमुच क़ीमत है',
        hEn: 'Which dates genuinely carry value',
        pHi: [
          'हर ब्रिटिश भारत का सिक्का महँगा नहीं है — बल्कि अधिकांश सस्ते हैं। क़ीमत उन “की डेट्स” में छिपी है जहाँ ढलाई कम हुई, या जहाँ किसी टकसाल ने उस साल बहुत थोड़े सिक्के बनाए।',
          'कुछ उदाहरण संग्राहकों के बीच जाने-पहचाने हैं, जैसे 1939 का चाँदी का रुपया, जो अगले ही साल धातु बदल जाने के कारण एक छोटी खिड़की का सिक्का बन गया। इसी तरह कुछ वर्षों के क्वार्टर और आधे रुपये अपनी कम ढलाई के कारण ऊपर रहते हैं।',
          'यहाँ एक चेतावनी ज़रूरी है: यही वे तारीख़ें हैं जिनकी नक़लें सबसे ज़्यादा बनती हैं। जितना दुर्लभ सिक्का, उतना ज़्यादा उसका जाली संस्करण बाज़ार में। ऐसी कोई भी ख़रीद बिना प्रामाणिकता जाँचे न करें।',
          'शुरुआत करने वाले के लिए सबसे अच्छी सलाह यह है कि पहले आम तारीख़ें जमा कीजिए, हाथ और आँख को सिक्कों की आदत लगने दीजिए, और महँगी की-डेट तब ख़रीदिए जब आप ख़ुद फ़र्क़ पहचान सकें।',
        ],
        pEn: [
          'Not every British India coin is expensive — most are cheap. The value hides in the “key dates”, where mintage was low, or where a particular mint produced very few pieces that year.',
          'Some examples are well known among collectors, such as the 1939 silver rupee, which became a narrow-window coin because the metal changed the following year. Similarly, quarter and half rupees of certain years sit higher because of low mintages.',
          'A warning belongs here: these are precisely the dates that get counterfeited most. The rarer the coin, the more forged versions circulate. Never make such a purchase without verifying authenticity.',
          'The best advice for a beginner is to collect the common dates first, let your hand and eye grow accustomed to real coins, and buy an expensive key date only once you can tell the difference yourself.',
        ],
      },
      {
        hHi: 'एक व्यवस्थित संग्रह कैसे शुरू करें',
        hEn: 'How to start an organised collection',
        pHi: [
          'सबसे आसान शुरुआत “एक शासक, एक मूल्यवर्ग” की है। मान लीजिए आप जॉर्ज V का एक आना चुनते हैं, और हर उपलब्ध वर्ष जुटाने की कोशिश करते हैं। यह लक्ष्य छोटा है, सस्ता है, और पूरा होने पर सचमुच कुछ बनता है।',
          'दूसरा तरीक़ा “एक साल, सारे मूल्यवर्ग” का है — जैसे 1943 के सारे सिक्के एक साथ। यह किसी एक क्षण का चित्र बनाता है और प्रदर्शित करने में सुंदर लगता है।',
          'जो भी चुनें, हर सिक्के के साथ एक छोटी पर्ची रखिए: कहाँ से मिला, कब, कितने में। यह सूचना बाद में सोने जैसी क़ीमती हो जाती है, और उसे बनाने में हर बार तीस सेकंड लगते हैं।',
        ],
        pEn: [
          'The easiest starting point is “one ruler, one denomination”. Say you choose the George V one anna and try to gather every available year. That goal is small, inexpensive, and amounts to something real once complete.',
          'A second approach is “one year, every denomination” — all the coins of 1943 together, for example. It creates a portrait of a single moment and displays beautifully.',
          'Whichever you choose, keep a small slip with each coin: where it came from, when, and for how much. That information becomes gold later, and it costs thirty seconds each time.',
        ],
      },
    ],
  },
  {
    slug: 'mughal-coins-history',
    sections: [
      {
        hHi: 'तीन धातुओं की व्यवस्था',
        hEn: 'The three-metal system',
        pHi: [
          'मुग़ल सिक्का-व्यवस्था तीन धातुओं पर टिकी थी, और तीनों की अपनी भूमिका थी। सोने की मोहर सबसे ऊपर — बड़े लेन-देन, ख़ज़ाने और उपहारों के लिए। चाँदी का रुपिया बीच में — व्यापार और वेतन की असली मुद्रा। और ताँबे का दाम सबसे नीचे — रोज़मर्रा के बाज़ार की मुद्रा।',
          'इनके बीच का अनुपात तय नहीं था, बल्कि धातुओं के बाज़ार-भाव के साथ बदलता रहता था। यही कारण है कि समकालीन दस्तावेज़ों में एक रुपये में दामों की संख्या अलग-अलग जगह अलग-अलग मिलती है।',
          'तीनों धातुओं का यह ढाँचा शेर शाह सूरी के सुधारों से निकला और अकबर के दौर में परिपक्व हुआ। इसके बाद यह इतना मज़बूत साबित हुआ कि उपनिवेशी दौर में भी इसकी बुनियाद बनी रही — “रुपिया” शब्द ही इसका जीवित प्रमाण है।',
        ],
        pEn: [
          'The Mughal coinage rested on three metals, each with its own role. The gold mohur at the top — for large transactions, treasuries and gifts. The silver rupiya in the middle — the real currency of trade and wages. And the copper dam at the bottom — the currency of the everyday market.',
          'The ratios between them were not fixed but shifted with the market prices of the metals themselves. This is why contemporary documents record different numbers of dams to the rupee in different places and periods.',
          'This three-metal structure emerged from Sher Shah Suri’s reforms and matured under Akbar. It then proved durable enough to remain the foundation into the colonial period — the very word “rupee” is the living proof of it.',
        ],
      },
      {
        hHi: 'टकसालें और उनके नाम',
        hEn: 'The mints and their names',
        pHi: [
          'मुग़ल साम्राज्य में सैकड़ों टकसालें काम करती थीं, और हर सिक्के पर उसकी टकसाल का नाम फ़ारसी में लिखा होता था। यह उन दिनों की एक असाधारण प्रशासनिक उपलब्धि थी — सिक्का ख़ुद बता देता था कि वह कहाँ और कब बना।',
          'बड़े नाम पहचाने-से लगेंगे: लाहौर, दिल्ली (शाहजहानाबाद), आगरा (अकबराबाद), अहमदाबाद, सूरत, पटना (अज़ीमाबाद), बुरहानपुर। कुछ टकसालें केवल कुछ वर्षों तक चलीं, और उनके सिक्के आज संग्राहकों के लिए ख़ास हैं।',
          'टकसाल का नाम पढ़ना सीखना इस क्षेत्र में प्रवेश का सबसे बड़ा दरवाज़ा है। यह फ़ारसी लिपि का काम है और शुरुआत में कठिन लगता है, पर नाम गिने-चुने हैं और उनका आकार दोहराया जाता है, इसलिए अभ्यास से पहचान जल्दी आ जाती है।',
        ],
        pEn: [
          'Hundreds of mints operated across the Mughal empire, and every coin carried its mint name in Persian. This was an extraordinary administrative achievement for the period — the coin itself declared where and when it was made.',
          'The major names will feel familiar: Lahore, Delhi (Shahjahanabad), Agra (Akbarabad), Ahmadabad, Surat, Patna (Azimabad), Burhanpur. Some mints operated for only a handful of years, and their coins are prized by collectors today.',
          'Learning to read the mint name is the largest single doorway into this field. It is Persian script and it looks difficult at first, but the names are finite and their shapes repeat, so recognition comes quickly with practice.',
        ],
      },
      {
        hHi: 'सिक्के पर लिखा क्या है',
        hEn: 'What is written on the coin',
        pHi: [
          'मुग़ल सिक्कों पर चित्र नहीं, लिखावट होती है — और वह लिखावट ही उनकी कला है। एक ओर आमतौर पर कलिमा या शासक का नाम और उपाधियाँ, दूसरी ओर टकसाल का नाम, हिजरी सन्, और शासन-वर्ष (जुलूस वर्ष)।',
          'दो तारीख़ों का यह जोड़ा बेहद उपयोगी है। हिजरी सन् चंद्र कैलेंडर का है, और जुलूस वर्ष बताता है कि शासक के तख़्त पर बैठने के बाद यह कौन-सा साल है। दोनों मिलकर सिक्के को समय की रेखा पर लगभग सटीक जगह देते हैं।',
          'कई सिक्कों पर छोटी-छोटी काव्य-पंक्तियाँ भी मिलती हैं, जो शासक की प्रशंसा में लिखी गई हैं। जहाँगीर के दौर के कुछ सिक्कों पर तो पूरे शेर उकेरे गए हैं — यह उस समय की सुलेख-कला का बेहतरीन नमूना है।',
          'शुरुआत करने वालों के लिए एक व्यावहारिक सुझाव: हिजरी अंकों की एक छोटी तालिका छापकर अपने संग्रह के डिब्बे में रख लीजिए। फ़ारसी अंक अरबी अंकों से थोड़े भिन्न हैं, और यही अंतर सबसे ज़्यादा भ्रम पैदा करता है।',
        ],
        pEn: [
          'Mughal coins carry no portraits but inscriptions — and the inscription is the art. One side typically holds the kalima or the ruler’s name and titles; the other holds the mint name, the Hijri year, and the regnal year (julus year).',
          'That pair of dates is extremely useful. The Hijri year follows the lunar calendar, and the julus year states which year of the ruler’s reign this is. Together they place the coin on the timeline with near precision.',
          'Many coins also carry short lines of poetry written in praise of the ruler. Some coins of Jahangir’s reign bear complete couplets — among the finest examples of the calligraphy of the period.',
          'A practical suggestion for beginners: print a small table of Hijri numerals and keep it in your coin box. Persian numerals differ slightly from Arabic ones, and that difference causes more confusion than anything else.',
        ],
      },
      {
        hHi: 'अकबर के प्रयोग',
        hEn: 'Akbar’s experiments',
        pHi: [
          'अकबर के सिक्के मुग़ल शृंखला में सबसे विविध हैं, क्योंकि उन्होंने मुद्रा को केवल अर्थव्यवस्था का नहीं, विचार का भी माध्यम माना। उन्होंने इलाही सन् चलाया — एक नया सौर कैलेंडर, जो उनके राज्यारोहण से गिना जाता था — और कुछ सिक्कों पर हिजरी की जगह वही दर्ज हुआ।',
          'सबसे चर्चित प्रयोग राशि-चक्र (ज़ोडिएक) के सिक्के हैं, जिन पर बारह राशियों के चिह्न बने। परंपरा में इन्हें अकबर से जोड़ा जाता है, पर जो नमूने आज सबसे ज़्यादा जाने-पहचाने हैं वे जहाँगीर के दौर के हैं। ये सिक्के इस्लामी मुद्रा-परंपरा में जीव-चित्रण का असाधारण अपवाद हैं।',
          'अकबर ने वज़न और शुद्धता के मानक भी कसे, और टकसालों की जवाबदेही बढ़ाई। यही अनुशासन वह कारण है कि मुग़ल रुपिया सदियों तक व्यापारियों के बीच भरोसे का सिक्का बना रहा — यहाँ तक कि साम्राज्य के बाहर भी।',
        ],
        pEn: [
          'Akbar’s coins are the most varied in the Mughal series, because he treated currency as a medium of ideas and not only of economy. He introduced the Ilahi era — a new solar calendar counted from his accession — and some coins record that in place of the Hijri year.',
          'The most discussed experiment is the zodiac series, bearing the signs of the twelve constellations. Tradition associates these with Akbar, though the best-known surviving examples belong to Jahangir’s reign. They are an extraordinary exception to the avoidance of living figures in Islamic coinage.',
          'Akbar also tightened standards of weight and purity and increased the accountability of the mints. That discipline is why the Mughal rupiya remained a coin merchants trusted for centuries — including well beyond the empire’s own borders.',
        ],
      },
      {
        hHi: 'पतन के दौर के सिक्के',
        hEn: 'Coins of the decline',
        pHi: [
          '1707 में औरंगज़ेब की मृत्यु के बाद साम्राज्य बिखरने लगा, पर सिक्कों पर मुग़ल नाम आश्चर्यजनक रूप से लंबे समय तक बना रहा। मराठा, अवध, हैदराबाद, बंगाल के नवाब — और ईस्ट इंडिया कंपनी तक — अपने सिक्कों पर दिल्ली के बादशाह का नाम लिखते रहे।',
          'इसका कारण व्यावहारिक था। बाज़ार जिस नाम को पहचानता था, उसी नाम वाला सिक्का बिना सवाल स्वीकार होता था। नई सत्ता के लिए अपना नाम डालने से ज़्यादा ज़रूरी था कि सिक्का चले।',
          'इसीलिए इस दौर के सिक्के अध्ययन के लिए सबसे दिलचस्प और वर्गीकरण के लिए सबसे कठिन हैं। एक ही बादशाह के नाम वाले सिक्के दर्जनों अलग-अलग सत्ताओं ने ढाले, और उन्हें टकसाल, शैली और वज़न से ही अलग किया जा सकता है।',
          'नए संग्राहक के लिए सलाह यही है कि इस दौर में सीधे न कूदें। पहले स्पष्ट, अच्छी तरह दर्ज मुग़ल सिक्कों से परिचय बनाइए, फिर इस उलझी हुई पर बेहद समृद्ध दुनिया में प्रवेश कीजिए।',
        ],
        pEn: [
          'After Aurangzeb’s death in 1707 the empire began to fragment, yet the Mughal name remained on the coinage for a remarkably long time. The Marathas, Awadh, Hyderabad, the Nawabs of Bengal — and even the East India Company — continued to place the Delhi emperor’s name on their coins.',
          'The reason was practical. A coin bearing the name the market recognised was accepted without question. For a new authority, having the coin circulate mattered more than having its own name on it.',
          'This makes coins of this period the most interesting to study and the most difficult to classify. Coins bearing one emperor’s name were struck by dozens of different powers, distinguishable only by mint, style and weight.',
          'The advice for a new collector is not to jump straight into this period. Get familiar with clear, well-documented Mughal issues first, then enter this tangled but extraordinarily rich world.',
        ],
      },
    ],
  },
  {
    slug: 'republic-india-commemorative-coins',
    sections: [
      {
        hHi: 'पहला स्मारक सिक्का और उसकी कहानी',
        hEn: 'The first commemorative, and its story',
        pHi: [
          'गणराज्य भारत का पहला स्मारक सिक्का 1964 में आया, जवाहरलाल नेहरू की मृत्यु के बाद उनकी स्मृति में। एक रुपये और पचास पैसे — दोनों पर उनका चित्र, और दोनों देवनागरी तथा अंग्रेज़ी में लिखे हुए।',
          'यह सिक्का इसलिए महत्वपूर्ण है कि इसने एक परंपरा शुरू की जो आज तक चल रही है: सिक्के को केवल विनिमय का साधन नहीं, स्मृति और संदेश का माध्यम भी मानना।',
          'नेहरू सिक्का करोड़ों की संख्या में ढला, इसलिए यह दुर्लभ नहीं है और आज भी सस्ते में मिल जाता है। पर पहली कड़ी होने के नाते हर भारतीय संग्रह में इसकी जगह है — और यही इसकी असली क़ीमत है।',
        ],
        pEn: [
          'Republic India’s first commemorative coin appeared in 1964, in memory of Jawaharlal Nehru after his death. One rupee and fifty paise — both bearing his portrait, and both inscribed in Devanagari and English.',
          'The coin matters because it began a tradition that continues today: treating a coin not merely as a medium of exchange but as a medium of memory and message.',
          'The Nehru coin was struck in crores, so it is not rare and remains inexpensive. But as the first link in the chain it earns a place in every Indian collection — and that is its real value.',
        ],
      },
      {
        hHi: 'ये जारी क्यों किए जाते हैं',
        hEn: 'Why they are issued at all',
        pHi: [
          'स्मारक सिक्कों के पीछे तीन मक़सद रहते हैं। पहला — किसी व्यक्ति, संस्था या घटना की सार्वजनिक स्मृति दर्ज करना। दूसरा — किसी अभियान का संदेश फैलाना, जैसे खाद्य सुरक्षा, साक्षरता, या परिवार नियोजन के दौर के सिक्के। तीसरा — किसी वर्षगाँठ को चिह्नित करना।',
          'भारत ने इन तीनों श्रेणियों में विस्तृत शृंखलाएँ जारी की हैं। महात्मा गांधी, इंदिरा गांधी, बी. आर. आंबेडकर, सरदार पटेल — व्यक्तियों की सूची लंबी है। “ग्रो मोर फ़ूड”, “सेव फ़ॉर डेवलपमेंट” जैसे नारे उस दौर की सरकारी प्राथमिकताएँ बताते हैं।',
          'इसी वजह से स्मारक सिक्कों की एक शृंखला असल में आधुनिक भारत का संक्षिप्त इतिहास बन जाती है। जो विषय सिक्के पर चढ़ा, वह उस दशक की सार्वजनिक चिंता था — यह अपने आप में पढ़ने लायक़ दस्तावेज़ है।',
        ],
        pEn: [
          'Three purposes sit behind commemorative coinage. First, to record the public memory of a person, institution or event. Second, to carry the message of a campaign — the coins of the food security, literacy and family planning eras. Third, to mark an anniversary.',
          'India has issued extensive series in all three categories. Mahatma Gandhi, Indira Gandhi, B. R. Ambedkar, Sardar Patel — the list of individuals is long. Slogans such as “Grow More Food” and “Save for Development” record the government priorities of their moment.',
          'For that reason a run of commemoratives becomes a compressed history of modern India. Whatever subject reached the coinage was the public concern of that decade — a document worth reading in itself.',
        ],
      },
      {
        hHi: 'प्रूफ़, यूएनसी और चलन के सिक्के',
        hEn: 'Proof, UNC and circulation issues',
        pHi: [
          'एक ही स्मारक सिक्का तीन अलग रूपों में मिल सकता है, और तीनों की क़ीमत अलग है। “सर्कुलेशन” संस्करण आम चलन के लिए, बड़ी संख्या में, सामान्य फ़िनिश में ढाला जाता है — यही वह सिक्का है जो जेब में मिलता है।',
          '“यूएनसी” (अनसर्कुलेटेड) संस्करण संग्राहकों के लिए विशेष रूप से बनाया जाता है, बेहतर फ़िनिश के साथ, और सीलबंद पैकिंग में बेचा जाता है। “प्रूफ़” संस्करण सबसे ऊपर है — विशेष रूप से पॉलिश की गई डाई से, बहुत कम संख्या में, दर्पण जैसी पृष्ठभूमि और मैट उभार के साथ।',
          'दाम में यह फ़र्क़ बड़ा होता है। एक ही सिक्के का प्रूफ़ संस्करण चलन के संस्करण से कई गुना महँगा हो सकता है, और यह अंतर धातु का नहीं, ढलाई की गुणवत्ता और संख्या का है।',
          'ख़रीदते समय यह ज़रूर पूछिए कि कौन-सा संस्करण है, और मूल पैकिंग व प्रमाणपत्र साथ है या नहीं। सीलबंद, मूल पैकिंग वाला सिक्का खुली हुई इकाई से हमेशा ऊपर रहता है।',
        ],
        pEn: [
          'The same commemorative can exist in three forms, each priced differently. The “circulation” version is struck in large numbers for ordinary use with a standard finish — this is the coin you find in your pocket.',
          'The “UNC” (uncirculated) version is made specifically for collectors, with a better finish, and sold in sealed packaging. The “proof” version sits at the top — struck from specially polished dies, in very small numbers, with a mirror field and frosted relief.',
          'The difference in price is substantial. A proof version of a given coin can cost several multiples of the circulation version, and the difference lies not in the metal but in the quality and quantity of striking.',
          'When buying, always ask which version it is, and whether the original packaging and certificate are present. A sealed coin in original packaging always sits above a loose one.',
        ],
      },
      {
        hHi: 'क़ीमत का सच',
        hEn: 'The truth about their value',
        pHi: [
          'यहाँ एक असहज सच्चाई है जो कम ही कही जाती है: अधिकांश आधुनिक स्मारक सिक्के निवेश के तौर पर अच्छे नहीं रहे। जारी करते समय जो प्रीमियम वसूला जाता है, वह अक्सर बाद के बाज़ार-भाव से ऊपर बैठ जाता है।',
          'कारण सीधा है — ढलाई की संख्या। जब कोई सिक्का लाखों की संख्या में बनता है और उसका बड़ा हिस्सा संग्राहकों के पास सीलबंद रखा रहता है, तो आपूर्ति कभी कम नहीं पड़ती। दुर्लभता ही क़ीमत बनाती है, और यहाँ दुर्लभता नहीं है।',
          'अपवाद हैं — बहुत कम संख्या में जारी हुए प्रूफ़ सेट, या वे विषय जिनके पीछे व्यापक भावनात्मक जुड़ाव है। पर अपवाद नियम नहीं बनते, और किसी भी विक्रेता का “यह भविष्य में बहुत बढ़ेगा” वाला दावा आश्वासन नहीं, बिक्री की भाषा है।',
          'इसलिए स्मारक सिक्के उस कारण से इकट्ठे कीजिए जो सचमुच टिकता है: विषय में रुचि, डिज़ाइन की सुंदरता, और इतिहास का वह टुकड़ा जो हथेली में रखा जा सकता है।',
        ],
        pEn: [
          'Here is an uncomfortable truth that is rarely stated: most modern commemoratives have not performed well as investments. The premium charged at issue frequently sits above the later market price.',
          'The reason is straightforward — mintage. When a coin is made in lakhs and much of it sits sealed in collectors’ cupboards, supply never becomes scarce. Rarity creates value, and rarity is absent here.',
          'There are exceptions — proof sets issued in very small numbers, or subjects carrying broad emotional attachment. But exceptions do not become the rule, and a seller’s claim that “this will appreciate greatly” is sales language rather than assurance.',
          'So collect commemoratives for the reason that actually holds: interest in the subject, the beauty of the design, and a piece of history that fits in your palm.',
        ],
      },
      {
        hHi: 'कहाँ से ख़रीदें, और किससे बचें',
        hEn: 'Where to buy, and what to avoid',
        pHi: [
          'सबसे सीधा और सुरक्षित रास्ता आधिकारिक है। भारत सरकार की टकसाल नए जारी सिक्कों की अग्रिम बुकिंग स्वीकार करती है, और यही एकमात्र जगह है जहाँ आपको मूल पैकिंग, प्रमाणपत्र और निश्चित प्रामाणिकता एक साथ मिलती है।',
          'पुराने सिक्कों के लिए स्थापित डीलर, प्रतिष्ठित नीलामी घर और संग्राहक-समितियों की प्रदर्शनियाँ भरोसेमंद हैं। प्रदर्शनी का अतिरिक्त लाभ यह है कि आप सिक्का हाथ में लेकर देख सकते हैं और अनुभवी लोगों से बात कर सकते हैं।',
          'जिनसे बचना है वे पहचानने में आसान हैं: वे विज्ञापन जो असाधारण मुनाफ़े का वादा करें, वे विक्रेता जो अग्रिम शुल्क माँगें, और वे “सीमित संस्करण” जिनकी सीमा कहीं दर्ज न हो।',
        ],
        pEn: [
          'The most direct and safest route is the official one. The India Government Mint accepts advance booking for newly issued coins, and it is the one place where original packaging, certificate and certain authenticity arrive together.',
          'For older issues, established dealers, reputable auction houses and the fairs run by collectors’ societies are dependable. A fair has the additional advantage that you can hold the coin and talk to experienced people.',
          'Those to avoid are easy to identify: advertisements promising extraordinary profit, sellers asking for fees up front, and “limited editions” whose limit is recorded nowhere.',
        ],
      },
    ],
  },
  {
    slug: 'british-india-coins-guide',
    sections: [
      {
        hHi: 'रख-रखाव की बुनियादी बातें',
        hEn: 'The basics of looking after them',
        pHi: [
          'ब्रिटिश भारत के सिक्के अक्सर पीढ़ियों से घर में पड़े रहते हैं, और उन्हें नुक़सान चलन से नहीं, भंडारण से पहुँचता है। सबसे बड़ा दुश्मन नमी है, उसके बाद पीवीसी वाली प्लास्टिक थैलियाँ, जो सालों में एक चिपचिपी हरी परत छोड़ देती हैं।',
          'सुरक्षित विकल्प सस्ते हैं: माइलर या पॉलीप्रोपिलीन के फ़्लिप, अम्ल-रहित काग़ज़ के लिफ़ाफ़े, या संग्राहकों के लिए बने एल्बम। डिब्बे में सिलिका जेल का एक पाउच डाल दीजिए और उसे साल में एक बार बदल दीजिए।',
          'और सबसे ज़रूरी नियम दोहराने लायक़ है — साफ़ मत कीजिए। धूल हटाने के लिए मुलायम ब्रश ठीक है, पर कोई रसायन, कोई पॉलिश, कोई टूथपेस्ट नहीं। जिस परत को आप गंदगी समझ रहे हैं, वह अक्सर वर्षों में बनी प्राकृतिक टोनिंग होती है, और संग्राहक उसी के पैसे देते हैं।',
        ],
        pEn: [
          'British India coins often sit in a household for generations, and the damage they suffer comes not from circulation but from storage. Moisture is the largest enemy, followed by PVC plastic sleeves, which leave a sticky green film over the years and eventually attack the metal itself.',
          'The safe alternatives are inexpensive: Mylar or polypropylene flips, acid-free paper envelopes, or albums made for collectors. Put a sachet of silica gel in the box and replace it once a year, and you have solved most of the problem for the cost of a cup of tea.',
          'And the most important rule bears repeating — do not clean them. A soft brush to lift dust is fine, but no chemicals, no polish, no toothpaste of any kind. What you are treating as dirt is very often natural toning built up over decades, and it is precisely what collectors are paying for.',
        ],
      },
    ],
  },
  {
    slug: 'mughal-coins-history',
    sections: [
      {
        hHi: 'नक़ली मुग़ल सिक्कों से बचाव',
        hEn: 'Guarding against forged Mughal coins',
        pHi: [
          'मुग़ल सिक्के जाली बनाने वालों का पसंदीदा क्षेत्र हैं, क्योंकि ख़रीदार अक्सर फ़ारसी नहीं पढ़ पाते और अनुमान पर भरोसा करते हैं। सबसे आम धोखा ढला हुआ (कास्ट) नक़ल है, जबकि असली सिक्के ठोंककर (स्ट्रक) बनाए जाते थे।',
          'फ़र्क़ पहचानना कठिन नहीं। ढले हुए सिक्के की सतह पर छोटे-छोटे बुलबुले जैसे गड्ढे मिलते हैं, किनारा नरम और गोल होता है, और अक्षरों के किनारे धुँधले लगते हैं। ठोंके हुए सिक्के में धातु का प्रवाह तीखा होता है और अक्षरों के किनारे साफ़।',
          'वज़न दूसरा परीक्षण है। मुग़ल रुपिया लगभग ग्यारह ग्राम के आसपास होना चाहिए और मोहर लगभग साढ़े दस से ग्यारह। एक सस्ता डिजिटल तराज़ू, जो कुछ सौ रुपये का आता है, अधिकांश नक़लों को पहली ही जाँच में पकड़ लेता है।',
        ],
        pEn: [
          'Mughal coins are a favourite territory for forgers, because buyers frequently cannot read Persian and end up trusting their guesswork. The most common deception is a cast copy, whereas genuine coins of the period were struck by hammer.',
          'Telling them apart is not difficult once you know what to look for. A cast coin shows small bubble-like pits across its surface, its edge is soft and rounded rather than sharp, and the edges of the letters look blurred. On a struck coin the metal flow is crisp and the letters have clean, defined edges.',
          'Weight is the second test and it is decisive surprisingly often. A Mughal rupiya should sit around eleven grams, and a mohur somewhere near ten and a half to eleven. A cheap digital scale, costing a few hundred rupees, will catch the majority of forgeries at the very first check.',
        ],
      },
    ],
  },
  {
    slug: 'republic-india-commemorative-coins',
    sections: [
      {
        hHi: 'शृंखला के हिसाब से इकट्ठा करना',
        hEn: 'Collecting by series rather than at random',
        pHi: [
          'स्मारक सिक्के बिखरे हुए ख़रीदने पर कभी संग्रह नहीं बनते — वे बस डिब्बे में पड़े सिक्के रह जाते हैं। जो चीज़ उन्हें संग्रह बनाती है वह है कोई एक स्पष्ट धागा, जिसे आप ख़ुद चुनते हैं।',
          'कुछ आज़माए हुए धागे: एक ही व्यक्ति पर जारी सारे सिक्के; किसी एक दशक के सारे स्मारक; कृषि या साक्षरता जैसे एक विषय की पूरी शृंखला; या केवल वे सिक्के जिन पर अंतरराष्ट्रीय संस्थाओं का उल्लेख है।',
          'इस तरह जमा करने के दो फ़ायदे हैं। पहला, लक्ष्य सीमित रहता है, इसलिए ख़र्च नियंत्रण में रहता है और पूरा होने का संतोष मिलता है। दूसरा, पूरी शृंखला अलग-अलग सिक्कों के योग से हमेशा ज़्यादा दिलचस्प होती है — क्योंकि तब वह एक कहानी सुनाती है।',
        ],
        pEn: [
          'Commemoratives bought at random never become a collection — they remain a handful of coins in a box. What turns them into a collection is a single clear thread that you choose for yourself and then follow.',
          'Some threads that work well: every coin issued for one individual; every commemorative of a single decade; a complete run on one theme such as agriculture or literacy; or only those coins that mention international institutions and treaties.',
          'Collecting this way has two advantages. First, the target stays bounded, which keeps the spending under control and delivers the genuine satisfaction of completing something. Second, a full series is always more interesting than the sum of its individual coins — because at that point it tells a story rather than simply existing.',
        ],
      },
    ],
  },
  {
    slug: 'republic-india-commemorative-coins',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'स्मारक सिक्के भारत का सबसे सुलभ संग्रह-क्षेत्र हैं — सस्ते, आसानी से उपलब्ध, और आधुनिक इतिहास से सीधे जुड़े हुए। शुरुआत करने वाले के लिए इससे बेहतर प्रवेश-द्वार कम ही है।',
          'तीन बातें याद रखिए। पहली, संस्करण पूछिए — प्रूफ़, यूएनसी और चलन के दाम बहुत अलग हैं। दूसरी, मूल पैकिंग और प्रमाणपत्र सँभालकर रखिए। तीसरी, निवेश की उम्मीद मत बाँधिए; इन्हें विषय और डिज़ाइन के लिए इकट्ठा कीजिए।',
        ],
        pEn: [
          'Commemoratives are the most accessible collecting field in India — inexpensive, easily available, and directly connected to modern history. For a beginner there are few better doorways into the subject than this one.',
          'Remember three things. First, ask which version it is, since proof, UNC and circulation issues are priced very differently from one another. Second, keep the original packaging and certificate carefully, because a sealed coin always sits above a loose one. Third, do not attach investment expectations to them; collect them for the subject and the design instead.',
        ],
      },
    ],
  },
  {
    slug: 'error-coins-value',
    sections: [
      {
        hHi: 'ढलाई की प्रक्रिया, जिससे हर एरर निकलता है',
        hEn: 'The minting process, from which every error comes',
        pHi: [
          'एरर समझने के लिए पहले यह जानना ज़रूरी है कि सिक्का बनता कैसे है। धातु की एक लंबी पट्टी से गोल टुकड़े (प्लांचेट) काटे जाते हैं, उनके किनारे उभारे जाते हैं, फिर उन्हें दो डाई के बीच रखकर भारी दबाव से ठोंका जाता है। एक झटके में दोनों तरफ़ की छाप एक साथ पड़ती है।',
          'इस पूरी क़तार में गड़बड़ी कहीं भी हो सकती है — प्लांचेट कटने में, डाई बैठने में, सिक्का ठीक जगह न आने में, या डाई के ख़ुद घिस जाने में। हर असली एरर इनमें से किसी एक चरण की विफलता है।',
          'यही कारण है कि असली एरर की एक तार्किक व्याख्या हमेशा मौजूद होती है। जब कोई विक्रेता एरर दिखाए, तो सवाल यह पूछिए कि यह मशीन के किस चरण में बना होगा। अगर उसका कोई जवाब नहीं बनता, तो वह एरर नहीं, नुक़सान है।',
        ],
        pEn: [
          'To understand errors you first need to know how a coin is made. Round blanks called planchets are punched from a long strip of metal, their edges are raised, and they are then placed between two dies and struck under enormous pressure. Both faces receive their impression in a single blow.',
          'Something can go wrong anywhere along that line — in the punching of the planchet, in the seating of the die, in the coin failing to arrive in the right position, or in the die itself wearing out. Every genuine error is a failure at one of those specific stages.',
          'This is why an authentic error always has a logical explanation behind it. When a seller shows you an error, the question to ask is which stage of the machinery would have produced it. If no answer fits, what you are looking at is not an error but damage.',
        ],
      },
      {
        hHi: 'असली एरर के मुख्य प्रकार',
        hEn: 'The main types of genuine error',
        pHi: [
          'ऑफ़-सेंटर स्ट्राइक — सिक्का डाई के नीचे ठीक बीच में नहीं बैठा, इसलिए छाप एक तरफ़ खिसकी हुई है और दूसरी तरफ़ ख़ाली धातु दिखती है। जितना ज़्यादा खिसकाव, पर तारीख़ फिर भी पढ़ने लायक़ — उतनी ज़्यादा माँग।',
          'डबल स्ट्राइक — सिक्का पहली ठोंक के बाद हिल गया और दोबारा ठोंका गया, जिससे अक्षर और आकृतियाँ दो जगह दिखती हैं। इसे डाई की घिसाई से पैदा हुई धुँधली दोहराव से अलग पहचानना ज़रूरी है।',
          'रोटेटेड डाई — दोनों तरफ़ की छाप आपस में सीधी नहीं। सामान्य सिक्के में एक तय कोण होता है; उससे बड़ा घुमाव एरर माना जाता है।',
          'ब्रॉकेज, क्लिप्ड प्लांचेट और लैमिनेशन — क्रमशः जब पिछला सिक्का डाई में फँस जाए, जब प्लांचेट किनारे से कटा-सा निकले, और जब धातु की परत उखड़ जाए। ये तीनों कम मिलते हैं और इसीलिए ज़्यादा चाहे जाते हैं।',
        ],
        pEn: [
          'Off-centre strike — the coin did not sit centrally under the die, so the impression is shifted to one side and bare metal shows on the other. The greater the shift while the date remains readable, the greater the demand.',
          'Double strike — the coin moved after the first blow and was struck again, so letters and devices appear in two places. This must be distinguished carefully from the blurred doubling produced by a worn die, which is common and worth little.',
          'Rotated die — the two faces are not aligned with each other. A normal coin has a fixed alignment; a rotation beyond that is treated as an error.',
          'Brockage, clipped planchet and lamination — respectively when a previous coin sticks in the die, when the planchet comes out cut at the edge, and when a layer of metal peels away. All three are scarce and therefore more sought after.',
        ],
      },
      {
        hHi: 'नक़ली एरर कैसे बनाए जाते हैं',
        hEn: 'How fake errors are manufactured',
        pHi: [
          'बाज़ार में घूमने वाले अधिकांश “एरर सिक्के” टकसाल से नहीं, किसी की कार्यशाला से निकले हैं। सबसे आम तरीक़ा है साधारण सिक्के को घिसकर या रगड़कर बदल देना, ताकि वह कुछ अलग दिखे।',
          'दूसरा तरीक़ा है सिक्के को गर्म करके या तेज़ाब में डुबोकर उसकी सतह बदल देना, जिससे धातु का रंग और बनावट असामान्य लगे। तीसरा है दो सिक्कों को काटकर जोड़ना, जो नज़दीक से देखने पर जोड़ की रेखा दिखा देता है।',
          'पहचान का सबसे बड़ा सूत्र यह है कि टकसाल की ग़लती हमेशा ठोंकने के समय होती है, इसलिए धातु का प्रवाह और चमक उसी दबाव के अनुरूप रहती है। बाद में की गई छेड़छाड़ में धातु खिंची, कटी या पिघली हुई दिखती है — दोनों में फ़र्क़ अनुभवी आँख तुरंत पकड़ लेती है।',
        ],
        pEn: [
          'Most of the “error coins” circulating in the market came not from a mint but from somebody’s workshop. The commonest method is to file or grind an ordinary coin so that it looks unusual in some way.',
          'A second method is to heat the coin or dip it in acid so that the surface changes, giving the metal an abnormal colour and texture. A third is to cut two coins and join them, which reveals a seam under close inspection.',
          'The single best clue is that a mint error always happens at the moment of striking, so the metal flow and lustre remain consistent with that pressure. Tampering done afterwards leaves metal that looks stretched, cut or melted — and an experienced eye separates the two immediately.',
        ],
      },
      {
        hHi: 'भारतीय एरर का बाज़ार कैसा है',
        hEn: 'What the Indian error market is actually like',
        pHi: [
          'ईमानदार बात यह है कि भारत में एरर सिक्कों का बाज़ार अमेरिका या यूरोप जितना संगठित नहीं है। वहाँ ग्रेडिंग कंपनियाँ एरर को श्रेणीबद्ध करती हैं और नीलामी के रिकॉर्ड सार्वजनिक रहते हैं; यहाँ अधिकांश सौदे व्यक्तिगत स्तर पर होते हैं।',
          'इसका एक नतीजा यह है कि दाम में बहुत बड़ा फैलाव मिलता है। एक ही तरह का एरर एक जगह कुछ सौ रुपये में और दूसरी जगह हज़ारों में माँगा जा सकता है, और दोनों में से कोई भी “सही” दाम नहीं होता।',
          'इसलिए दो नियम काम आते हैं। पहला — किसी भी बड़ी ख़रीद से पहले नीलामी के बीते नतीजे देखिए, माँगी गई क़ीमतें नहीं। दूसरा — अगर सिक्का महँगा है, तो प्रमाणन (ग्रेडिंग) का ख़र्च उठाइए; वह ख़र्च ग़लत ख़रीद से हमेशा सस्ता पड़ता है।',
        ],
        pEn: [
          'The honest position is that the error market in India is not as organised as in America or Europe. There, grading companies classify errors and auction records stay public; here most transactions happen privately between individuals.',
          'One consequence is an enormous spread in prices. The same type of error may be asked at a few hundred rupees in one place and at several thousand in another, and neither figure is the “correct” one.',
          'Two rules therefore help. First, before any significant purchase, look at past auction results rather than at asking prices. Second, if the coin is expensive, pay for certification; that cost is always cheaper than a wrong purchase.',
        ],
      },
      {
        hHi: 'वायरल दावों से बचाव',
        hEn: 'Guarding against viral claims',
        pHi: [
          'हर कुछ महीनों में सोशल मीडिया पर एक वीडियो घूमता है कि “अगर आपके पास यह एरर वाला सिक्का है तो आप करोड़पति हैं।” ढाँचा हमेशा एक जैसा होता है — एक आम सिक्का, एक असाधारण दावा, और नीचे एक फ़ोन नंबर।',
          'ऐसे दावों की जाँच सरल है। पूछिए कि यह किस नीलामी में, किस तारीख़ को, किस दाम पर बिका। असली रिकॉर्ड सार्वजनिक होते हैं और उन्हें दिखाया जा सकता है; कहानी नहीं दिखाई जा सकती।',
          'और वही बुनियादी नियम यहाँ भी लागू है जो हर सौदे में लागू होता है: पैसा ख़रीदार से विक्रेता की ओर बहता है। जो व्यक्ति आपका सिक्का ख़रीदने से पहले आपसे शुल्क माँग रहा है, वह ख़रीदार नहीं है।',
        ],
        pEn: [
          'Every few months a video circulates on social media claiming that if you own this particular error coin you are a crorepati. The structure is always the same — an ordinary coin, an extraordinary claim, and a phone number underneath.',
          'Checking such claims is simple. Ask at which auction, on what date, and at what price it sold. Genuine records are public and can be produced; a story cannot be produced.',
          'And the same basic rule applies here as in every transaction: money flows from the buyer to the seller. Anybody asking you for a fee before buying your coin is not a buyer.',
        ],
      },
    ],
  },
  {
    slug: 'coin-grading-basics',
    sections: [
      {
        hHi: 'घिसाव सबसे पहले कहाँ दिखता है',
        hEn: 'Where wear shows up first',
        pHi: [
          'सिक्के पर घिसाव समान रूप से नहीं फैलता। सबसे पहले वे जगहें घिसती हैं जो सबसे ऊँची उठी हुई हैं, क्योंकि जेब, हथेली और गल्ले में वही सबसे ज़्यादा रगड़ खाती हैं।',
          'व्यवहार में इसका अर्थ है कि चेहरे वाले सिक्कों में गाल की हड्डी, बालों की ऊपरी लट, और मुकुट या ताज का सबसे ऊँचा हिस्सा पहले चपटा होता है। दूसरी तरफ़ अक्षरों के ऊपरी किनारे और किसी भी उभरे चिह्न का शिखर।',
          'इसलिए ग्रेडिंग सीखने का सबसे अच्छा तरीक़ा है एक ही सिक्के के तीन-चार अलग-अलग नमूने पास-पास रखकर देखना। कुछ ही मिनटों में आँख यह पहचानने लगती है कि कौन-सा ब्योरा पहले जाता है और कौन-सा आख़िर तक टिकता है।',
        ],
        pEn: [
          'Wear does not spread evenly across a coin. The highest points go first, because those are the areas that rub against pockets, palms and cash drawers most of all.',
          'In practice this means that on portrait coins the cheekbone, the uppermost lock of hair, and the highest part of a crown or diadem flatten earliest. On the other side it is the upper edges of the lettering and the peak of any raised device.',
          'The best way to learn grading is therefore to place three or four different examples of the same coin side by side and look. Within a few minutes the eye begins to recognise which detail disappears first and which survives to the end.',
        ],
      },
      {
        hHi: 'लस्टर क्या है और उसे कैसे देखा जाता है',
        hEn: 'What lustre is, and how to see it',
        pHi: [
          'लस्टर वह चमक है जो सिक्के पर ढलाई के समय बनती है। ठोंकने के भारी दबाव में धातु डाई की सतह के साथ बहती है और सूक्ष्म रेखाएँ छोड़ती है, जो रोशनी को एक ख़ास तरीक़े से घुमाती हैं।',
          'इसे पहचानने के लिए सिक्के को एक ही रोशनी के नीचे धीरे-धीरे घुमाइए। असली लस्टर में चमक का एक चक्र सतह पर घूमता हुआ दिखता है, जैसे पानी पर तेल की लहर। पॉलिश की गई सतह पर चमक स्थिर और सपाट रहती है — वह पूरी सतह पर एक साथ चमकती है।',
          'यही फ़र्क़ अनुभवी ख़रीदार को दो सेकंड में बता देता है कि सिक्का साफ़ किया गया है या नहीं। और चूँकि लस्टर एक बार चला जाए तो लौटता नहीं, यह ग्रेडिंग का सबसे निर्णायक तत्व है।',
        ],
        pEn: [
          'Lustre is the shine created on a coin at the moment of striking. Under the pressure of the blow the metal flows across the surface of the die and leaves microscopic lines, which turn light in a particular way.',
          'To see it, rotate the coin slowly under a single light source. Genuine lustre shows a wheel of brightness travelling across the surface, like an oil slick moving on water. A polished surface shines flatly and steadily instead — the whole face lights up at once.',
          'That difference tells an experienced buyer within two seconds whether a coin has been cleaned. And because lustre never returns once lost, it is the single most decisive element in grading.',
        ],
      },
      {
        hHi: 'सीढ़ी के बीच के पायदान',
        hEn: 'The rungs in the middle of the ladder',
        pHi: [
          'फ़ाइन (F) — मुख्य आकृतियाँ साफ़ हैं, पर बारीक ब्योरे घिस चुके हैं। बालों की लटें एक-दूसरे में मिल गई हैं और सजावट के छोटे हिस्से ग़ायब हैं।',
          'वेरी फ़ाइन (VF) — अधिकांश ब्योरे मौजूद हैं, घिसाव केवल सबसे ऊँचे बिंदुओं पर। यह वह पायदान है जहाँ अधिकांश अच्छे संग्रह टिकते हैं, क्योंकि यहाँ दाम और दिखावट का संतुलन सबसे अच्छा बैठता है।',
          'एक्स्ट्रीमली फ़ाइन (EF/XF) — घिसाव बहुत हल्का, केवल ध्यान से देखने पर। कुछ जगह मूल लस्टर बचा हो सकता है।',
          'अनसर्कुलेटेड (UNC) — कोई घिसाव नहीं, पूरा लस्टर। ध्यान रहे, UNC का मतलब “बेदाग़” नहीं है; टकसाल की थैली में सिक्के आपस में टकराते हैं, इसलिए हल्के बैग-मार्क UNC में भी सामान्य हैं।',
        ],
        pEn: [
          'Fine (F) — the main devices are clear but the fine detail has worn away. Locks of hair have merged into one another and small ornamental elements are missing.',
          'Very Fine (VF) — most detail is present, with wear only on the highest points. This is the rung where most good collections settle, because the balance between price and appearance is best here.',
          'Extremely Fine (EF/XF) — wear is very light and visible only on close inspection. Some original lustre may survive in places.',
          'Uncirculated (UNC) — no wear at all and full lustre. Note that UNC does not mean flawless; coins knock against each other in the mint bag, so light bag marks are entirely normal even at this grade.',
        ],
      },
      {
        hHi: 'भारत में थर्ड-पार्टी ग्रेडिंग कब समझदारी है',
        hEn: 'When third-party grading makes sense in India',
        pHi: [
          'अंतरराष्ट्रीय ग्रेडिंग कंपनियाँ सिक्के की जाँच करके उसे एक सीलबंद, छेड़छाड़-रोधी डिब्बे में बंद कर देती हैं, जिस पर ग्रेड और प्रामाणिकता दर्ज होती है। इससे ख़रीदार को भरोसा मिलता है और सिक्का बेचना आसान हो जाता है।',
          'पर यह मुफ़्त नहीं है। शुल्क, भारत से भेजने का ख़र्च, बीमा और लौटने में लगने वाला समय — सब जोड़कर यह एक ठीक-ठाक रक़म बनती है। इसीलिए हर सिक्के के लिए यह उचित नहीं।',
          'सीधा नियम यह है: अगर ग्रेडिंग का कुल ख़र्च सिक्के की अनुमानित क़ीमत के एक चौथाई से ज़्यादा है, तो मत कीजिए। महँगे, दुर्लभ और विवादित सिक्कों के लिए यह निवेश सार्थक है; आम सिक्कों के लिए यह पैसा बर्बाद करना है।',
        ],
        pEn: [
          'International grading companies examine a coin and seal it in a tamper-evident holder marked with its grade and authenticity. This gives buyers confidence and makes the coin considerably easier to sell.',
          'But it is not free. The fee, shipping from India, insurance and the waiting time add up to a substantial amount. That is why it is not justified for every coin.',
          'The straightforward rule is this: if the total cost of grading exceeds about a quarter of the coin’s estimated value, do not do it. For expensive, rare or disputed pieces the investment is worthwhile; for ordinary coins it is money thrown away.',
        ],
      },
      {
        hHi: 'अभ्यास कैसे करें',
        hEn: 'How to practise',
        pHi: [
          'ग्रेडिंग किताब पढ़कर नहीं, हाथ में सिक्के लेकर सीखी जाती है। शुरुआत सस्ते, आम सिक्कों से कीजिए — जैसे ब्रिटिश भारत के ताँबे के छोटे सिक्के, जो कुछ रुपयों में मिल जाते हैं।',
          'एक ही प्रकार के दस सिक्के ख़रीदिए और उन्हें बिना कैटलॉग देखे अपनी समझ से सबसे घिसे से सबसे अच्छे तक क्रम में लगाइए। फिर एक-एक करके देखिए कि आपने किस ब्योरे के आधार पर फ़ैसला किया।',
          'यह अभ्यास दो-तीन बार करने के बाद आँख बदल जाती है। उसके बाद आप किसी भी सिक्के को देखकर उसका मोटा ग्रेड बता सकेंगे, और यही वह कौशल है जो आपको ज़्यादा दाम चुकाने से बचाता है।',
        ],
        pEn: [
          'Grading is not learned from a book but with coins in your hand. Begin with cheap, common pieces — the small copper coins of British India, which cost a few rupees each.',
          'Buy ten of the same type and arrange them, without consulting any catalogue, from most worn to best by your own judgement. Then go through them one at a time and work out which detail drove each decision.',
          'After doing this exercise two or three times the eye changes. From then on you can look at any coin and state its approximate grade, and that is precisely the skill that stops you from overpaying.',
        ],
      },
    ],
  },
  {
    slug: 'sell-old-coins-legally',
    sections: [
      {
        hHi: 'बेचने से पहले क्या तैयार रखें',
        hEn: 'What to prepare before selling',
        pHi: [
          'सबसे पहले एक सूची बनाइए। हर सिक्के का मूल्यवर्ग, वर्ष, धातु (जहाँ पता हो), और कोई दिखने वाली ख़ासियत। यह सूची आपको मोल-भाव में मज़बूत बनाती है, क्योंकि आप जानते हैं कि आपके पास क्या है।',
          'फिर तस्वीरें लीजिए — दोनों तरफ़ की, सीधी रोशनी में, बिना फ़्लैश के, सादे गहरे रंग की पृष्ठभूमि पर। धुँधली तस्वीर सबसे बड़ी वजह है कि गंभीर ख़रीदार जवाब नहीं देते।',
          'और सबसे ज़रूरी — बेचने से पहले साफ़ मत कीजिए। यह सलाह बार-बार दोहराने लायक़ है क्योंकि लोग यही ग़लती सबसे ज़्यादा करते हैं। चमकाया हुआ सिक्का अपनी क़ीमत का बड़ा हिस्सा उसी क्षण खो देता है।',
        ],
        pEn: [
          'Start by making a list. For every coin, note the denomination, the year, the metal where you know it, and any visible peculiarity. That list strengthens your position in a negotiation, because you know what you are holding.',
          'Then photograph them — both faces, in direct light, without flash, against a plain dark background. Blurred photographs are the single biggest reason serious buyers never reply.',
          'And most important — do not clean anything before selling. This advice bears repeating because it is the mistake people make most often. A polished coin loses a large part of its value at that very moment.',
        ],
      },
      {
        hHi: 'तीन असली रास्ते, और हर एक का हिसाब',
        hEn: 'The three real routes, and the arithmetic of each',
        pHi: [
          'डीलर — सबसे तेज़ रास्ता। आप सिक्के ले जाइए, वह देखकर दाम बताएगा, सौदा उसी दिन हो सकता है। बदले में दाम बाज़ार-भाव से कम रहेगा, क्योंकि उसे आगे बेचकर मुनाफ़ा कमाना है। जल्दी और निश्चितता चाहिए तो यही रास्ता है।',
          'नीलामी घर — सबसे ऊँचा संभावित दाम, पर सबसे धीमा। सिक्का सूचीबद्ध होगा, कैटलॉग बनेगा, नीलामी की तारीख़ आएगी। कमीशन कटेगा और पैसा मिलने में हफ़्ते-महीने लग सकते हैं। महँगे सिक्कों के लिए यह सबसे उचित है।',
          'संग्राहकों की समिति और प्रदर्शनी — बीच का रास्ता। यहाँ आप सीधे उस व्यक्ति से मिलते हैं जो सिक्का ख़ुद रखना चाहता है, इसलिए दाम डीलर से बेहतर मिल सकता है। बदले में समय और मेहनत आपकी लगती है।',
          'चौथा रास्ता — ऑनलाइन मंच — मौजूद तो है, पर वहाँ सतर्कता सबसे ज़्यादा चाहिए। सुरक्षित भुगतान, ट्रैकिंग वाली कूरियर, और लेन-देन का पूरा रिकॉर्ड — इन तीनों के बिना बड़ा सौदा मत कीजिए।',
        ],
        pEn: [
          'A dealer — the fastest route. You take the coins in, he examines them and quotes, and the transaction can close the same day. In exchange the price sits below market value, because he has to resell at a profit. If you want speed and certainty, this is the route.',
          'An auction house — the highest potential price but the slowest. The coin is catalogued, a sale date is set, a commission is deducted, and payment can take weeks or months. For expensive coins this is the most appropriate choice.',
          'A collectors’ society or fair — the middle path. Here you meet the person who actually wants to own the coin, so the price can beat a dealer’s. In exchange the time and effort are yours.',
          'A fourth route — online platforms — exists, but demands the most caution. Secure payment, a tracked courier, and a complete record of the transaction: do not make a large sale without all three.',
        ],
      },
      {
        hHi: 'क़ानूनी स्थिति साफ़-साफ़',
        hEn: 'The legal position, stated plainly',
        pHi: [
          'भारत में पुराने सिक्के इकट्ठा करना और उन्हें आपस में ख़रीदना-बेचना वैध है। संग्राहकों का बाज़ार, प्रदर्शनियाँ और नीलामियाँ सब सामान्य रूप से चलती हैं।',
          'एक अहम बात यह है कि रिज़र्व बैंक पुराने सिक्के या नोट नहीं ख़रीदता। जो भी विज्ञापन “आरबीआई अनुमोदित ख़रीदार” होने का दावा करे, वह झूठ बोल रहा है — यह जाँचने का सबसे तेज़ तरीक़ा है।',
          'दूसरी बात पुरातात्विक महत्व की वस्तुओं से जुड़ी है। बहुत पुरानी, ख़ासकर उत्खनन से निकली वस्तुओं पर अलग नियम लागू होते हैं। अगर आपके पास कुछ ऐसा है जो प्राचीन लगता है और जिसका स्रोत अस्पष्ट है, तो बेचने से पहले सलाह लेना ही समझदारी है।',
        ],
        pEn: [
          'In India, collecting old coins and buying and selling them among collectors is lawful. The collectors’ market, its fairs and its auctions all operate normally.',
          'One important point is that the Reserve Bank does not buy old coins or notes. Any advertisement claiming to be an “RBI approved buyer” is lying — and that is the fastest test you can apply.',
          'A second point concerns objects of archaeological importance. Very old items, particularly anything from an excavation, fall under separate rules. If you hold something that looks ancient and whose origin is unclear, taking advice before selling is simply the sensible course.',
        ],
      },
      {
        hHi: 'दाम का अंदाज़ा ख़ुद कैसे लगाएँ',
        hEn: 'How to estimate a price yourself',
        pHi: [
          'माँगी गई क़ीमत और बिकी हुई क़ीमत दो अलग चीज़ें हैं, और यही अंतर अधिकांश निराशा की जड़ है। किसी वेबसाइट पर कोई सिक्का पचास हज़ार में सूचीबद्ध होने का मतलब यह नहीं कि वह पचास हज़ार में बिका।',
          'भरोसेमंद स्रोत वे हैं जो बीते नतीजे दर्ज करते हैं — प्रतिष्ठित नीलामी घरों के पुराने कैटलॉग और परिणाम। वहाँ लिखा होता है कि सिक्का किस ग्रेड में था और किस दाम पर हथौड़ा गिरा।',
          'तुलना करते समय ग्रेड का मिलान ज़रूरी है। आपका VF सिक्का किसी UNC नमूने के दाम से नहीं तौला जा सकता; वह अंतर कई गुना का होता है, और यही वह जगह है जहाँ लोग सबसे ज़्यादा उम्मीद बाँध लेते हैं।',
        ],
        pEn: [
          'Asking price and realised price are two different things, and that gap is the root of most disappointment. A coin listed on a website at fifty thousand does not mean a coin that sold for fifty thousand.',
          'The reliable sources are those that record past results — the old catalogues and results of reputable auction houses. They state which grade the coin was in and at what price the hammer fell.',
          'When comparing, match the grade. Your VF coin cannot be weighed against the price of a UNC example; that difference runs to several multiples, and it is exactly where people build up the most unrealistic hope.',
        ],
      },
      {
        hHi: 'बेचना ही ज़रूरी नहीं है',
        hEn: 'Selling is not compulsory',
        pHi: [
          'एक बात जो सलाह देने वाले कम कहते हैं: विरासत में मिले सिक्कों को बेचना ही एकमात्र विकल्प नहीं है। अक्सर मिलने वाली रक़म इतनी नहीं होती कि उस चीज़ की भरपाई करे जो साथ चली जाती है।',
          'अगर संग्रह छोटा है और उसकी बाज़ारू क़ीमत कुछ हज़ार रुपये है, तो एक अच्छा एल्बम ख़रीदकर उसे व्यवस्थित कर देना अक्सर बेहतर फ़ैसला है। साथ में एक पर्ची लगा दीजिए कि ये सिक्के किसके थे और कहाँ से आए।',
          'और अगर बेचना ही है, तो पूरा संग्रह एक साथ बेचने के बजाय पहले एक-दो सिक्के बेचकर देखिए। इससे आपको बाज़ार का असली अंदाज़ा भी लगेगा और जल्दबाज़ी में पूरा संग्रह सस्ते में जाने का ख़तरा भी नहीं रहेगा।',
        ],
        pEn: [
          'One thing advisers rarely say: selling inherited coins is not the only option. Very often the amount received does not compensate for what leaves along with them.',
          'If the collection is small and its market value runs to a few thousand rupees, buying a good album and organising it properly is frequently the better decision. Add a slip recording whose coins these were and where they came from.',
          'And if you do intend to sell, try selling one or two pieces first rather than the whole collection at once. That gives you a genuine sense of the market and removes the risk of the entire holding going cheaply in a hurry.',
        ],
      },
    ],
  },
  {
    slug: 'start-coin-collection',
    sections: [
      {
        hHi: 'पहला महीना: क्या करें और क्या न करें',
        hEn: 'The first month: what to do and what not to',
        pHi: [
          'पहले महीने में कुछ भी महँगा मत ख़रीदिए। यह सबसे उपयोगी नियम है और सबसे कम माना जाने वाला भी। शुरुआत में आँख प्रशिक्षित नहीं होती, और अप्रशिक्षित आँख से की गई महँगी ख़रीद लगभग हमेशा ग़लत निकलती है।',
          'इसके बजाय घर में जो है उसी से शुरू कीजिए। लगभग हर भारतीय घर में कहीं न कहीं पुराने सिक्कों की एक मुट्ठी पड़ी होती है। उन्हें निकालिए, धोइए मत, और वर्ष के हिसाब से क्रम में लगाइए।',
          'फिर उन्हीं में से जो सबसे दिलचस्प लगे, उसके बारे में पढ़िए — वह किस दौर का है, किस टकसाल में बना, तब क्या चल रहा था। यह पढ़ाई ही असल में संग्रह की शुरुआत है; सिक्के तो बहाना हैं।',
        ],
        pEn: [
          'Buy nothing expensive in the first month. This is the most useful rule there is and the least often followed. At the start the eye is untrained, and an expensive purchase made with an untrained eye turns out wrong almost every time.',
          'Begin instead with what is already in the house. Nearly every Indian home has a handful of old coins lying somewhere. Take them out, do not wash them, and arrange them in order of year.',
          'Then read about whichever one interests you most — which period it belongs to, which mint made it, what was happening at the time. That reading is the actual beginning of a collection; the coins are only the excuse.',
        ],
      },
      {
        hHi: 'विषय चुनना, और भटकाव से बचना',
        hEn: 'Choosing a theme, and avoiding the drift',
        pHi: [
          'बिना विषय के इकट्ठा करना सबसे आम ग़लती है। नतीजा एक डिब्बा भर असंबंधित सिक्के होते हैं, जिनमें न कोई क्रम है न कोई पूर्णता का एहसास।',
          'अच्छा विषय तीन शर्तें पूरी करता है: वह सीमित हो, सस्ता हो, और आपको सचमुच दिलचस्प लगे। उदाहरण के लिए — “जॉर्ज V के सारे एक-आना”, या “1950 से 1970 तक के सारे चलन सिक्के”, या “मेरे राज्य की रियासत के सिक्के”।',
          'विषय का सबसे बड़ा फ़ायदा यह है कि वह आपको ना कहना सिखाता है। जब कोई डीलर कुछ आकर्षक दिखाए, तो सवाल सरल हो जाता है — क्या यह मेरे विषय में आता है? अधिकांश बार जवाब “नहीं” होता है, और वही जवाब आपका पैसा बचाता है।',
        ],
        pEn: [
          'Collecting without a theme is the commonest mistake. The result is a box of unrelated coins with neither order nor any sense of completion.',
          'A good theme meets three conditions: it is bounded, it is affordable, and it genuinely interests you. For example — “every one-anna of George V”, or “every circulation coin from 1950 to 1970”, or “the coins of my own state’s princely house”.',
          'The greatest advantage of a theme is that it teaches you to say no. When a dealer shows you something attractive, the question becomes simple — does this belong to my theme? Most of the time the answer is no, and that answer is what saves your money.',
        ],
      },
      {
        hHi: 'ज़रूरी औज़ार, जो सस्ते हैं',
        hEn: 'The tools you need, which are cheap',
        pHi: [
          'तीन चीज़ें काफ़ी हैं। पहली — एक अच्छा लूप (मैग्निफ़ायर), दस गुना आवर्धन वाला। यह टकसाल चिह्न पढ़ने, घिसाव देखने और नक़ल पहचानने के लिए ज़रूरी है।',
          'दूसरी — एक डिजिटल तराज़ू जो 0.01 ग्राम तक नापे। वज़न सबसे तेज़ प्रामाणिकता-परीक्षण है, और अधिकांश जाली सिक्के इसी एक जाँच में पकड़े जाते हैं।',
          'तीसरी — सही भंडारण: माइलर या पॉलीप्रोपिलीन के फ़्लिप, अम्ल-रहित लिफ़ाफ़े, या संग्राहकों वाला एल्बम। पीवीसी वाली पुरानी प्लास्टिक थैलियाँ हरगिज़ नहीं, वे सालों में धातु पर चिपचिपी हरी परत छोड़ देती हैं।',
          'इन तीनों का कुल ख़र्च एक अच्छे सिक्के से भी कम है, और ये तीनों जीवन भर काम आते हैं।',
        ],
        pEn: [
          'Three things are enough. First, a good loupe at ten times magnification. It is essential for reading mint marks, judging wear and spotting forgeries.',
          'Second, a digital scale accurate to 0.01 gram. Weight is the fastest authenticity test there is, and most counterfeits are caught by this single check.',
          'Third, proper storage: Mylar or polypropylene flips, acid-free envelopes, or a collectors’ album. Never the old PVC plastic sleeves, which leave a sticky green film on the metal over the years.',
          'All three together cost less than one decent coin, and all three last a lifetime.',
        ],
      },
      {
        hHi: 'संगत ढूँढ़िए',
        hEn: 'Find company',
        pHi: [
          'यह शौक़ अकेले भी चल सकता है, पर अकेले चलने वाला संग्राहक हमेशा ज़्यादा दाम चुकाता है और ज़्यादा नक़ल ख़रीदता है। जानकारी इस क्षेत्र में सबसे क़ीमती मुद्रा है, और वह लोगों के पास होती है, किताबों में नहीं।',
          'भारत के लगभग हर बड़े शहर में संग्राहकों की समिति है, और साल भर प्रदर्शनियाँ होती रहती हैं। वहाँ जाने का सबसे बड़ा फ़ायदा ख़रीदना नहीं, देखना है — सैकड़ों असली सिक्के एक साथ हाथ में लेकर देखने से आँख जितनी तेज़ होती है, उतनी किसी और तरीक़े से नहीं।',
          'ऑनलाइन समूह भी उपयोगी हैं, पर वहाँ सलाह की गुणवत्ता मिली-जुली रहती है। सबसे भरोसेमंद वे लोग होते हैं जो अपने संग्रह की तस्वीरें दिखाते हैं और अपनी ग़लतियों की भी बात करते हैं।',
        ],
        pEn: [
          'The hobby works alone, but the collector who works alone always overpays and always buys more forgeries. Knowledge is the most valuable currency in this field, and it lives with people rather than in books.',
          'Almost every major Indian city has a collectors’ society, and fairs run throughout the year. The greatest benefit of attending is not buying but looking — handling hundreds of genuine coins in one afternoon sharpens the eye faster than anything else can.',
          'Online groups are useful too, though the quality of advice there is mixed. The most reliable members are those who show photographs of their own collections and talk about their own mistakes as well.',
        ],
      },
      {
        hHi: 'रिकॉर्ड रखना, जो बाद में सबसे क़ीमती निकलता है',
        hEn: 'Keeping records, which turn out to be the most valuable part',
        pHi: [
          'हर सिक्के के साथ एक छोटी पर्ची रखिए: कब मिला, कहाँ से, कितने में, और अगर विरासत है तो किसका था। इसमें हर बार तीस सेकंड लगते हैं।',
          'यह जानकारी वर्षों बाद सोने जैसी क़ीमती हो जाती है। बेचते समय स्रोत का रिकॉर्ड दाम बढ़ाता है, और न बेचें तो भी अगली पीढ़ी को सिक्के के साथ उसकी कहानी मिलती है।',
          'एक साधारण स्प्रेडशीट भी काफ़ी है — मूल्यवर्ग, वर्ष, टकसाल, ग्रेड, ख़रीद का दाम और तारीख़। छह कॉलम, और संग्रह जितना बढ़ेगा, यह उतना ही उपयोगी होता जाएगा।',
        ],
        pEn: [
          'Keep a small slip with every coin: when you acquired it, from where, for how much, and if inherited, whose it was. Each entry takes thirty seconds.',
          'That information becomes gold years later. When selling, a record of provenance raises the price; and if you never sell, the next generation receives the coin together with its story.',
          'A simple spreadsheet is enough — denomination, year, mint, grade, purchase price and date. Six columns, and the larger the collection grows the more useful it becomes.',
        ],
      },
    ],
  },
  {
    slug: 'princely-states-coins',
    sections: [
      {
        hHi: 'रियासतों की मुद्रा-व्यवस्था कैसे चलती थी',
        hEn: 'How the princely coinage actually worked',
        pHi: [
          'ब्रिटिश भारत के नक़्शे में लगभग छह सौ रियासतें थीं, और उनमें से सैकड़ों को अपने सिक्के ढालने का अधिकार था। यह अधिकार समान नहीं था — कुछ राज्य पूरी तरह स्वतंत्र मुद्रा चलाते थे, कुछ केवल ताँबे के छोटे सिक्के, और कुछ ने ब्रिटिश सिक्का ही अपना लिया।',
          'सिक्का ढालने का अधिकार प्रतिष्ठा का प्रश्न था, केवल अर्थशास्त्र का नहीं। अपने नाम का सिक्का चलाना संप्रभुता का सबसे दृश्य प्रमाण था, और इसीलिए छोटी रियासतें भी इसे बनाए रखना चाहती थीं।',
          'बीसवीं सदी की शुरुआत तक ब्रिटिश प्रशासन ने धीरे-धीरे इन्हें समेटना शुरू किया, और आज़ादी के बाद 1950 तक यह पूरा तंत्र इतिहास बन गया। इसीलिए यह क्षेत्र समय की एक बंद खिड़की है — इसमें अब कुछ नया नहीं जुड़ेगा।',
        ],
        pEn: [
          'The map of British India held some six hundred princely states, and hundreds of them had the right to strike their own coins. That right was not uniform — some states ran a fully independent currency, some issued only small copper pieces, and some simply adopted British coinage.',
          'The right to strike coins was a question of prestige and not merely of economics. Issuing a coin in your own name was the most visible proof of sovereignty, which is why even small states wanted to keep it.',
          'By the early twentieth century the British administration had begun to wind these arrangements down, and after independence the whole system had become history by 1950. This makes the field a closed window in time — nothing new will ever be added to it.',
        ],
      },
      {
        hHi: 'बड़े नाम, बड़ी टकसालें',
        hEn: 'The big names, the big mints',
        pHi: [
          'हैदराबाद सबसे बड़ी और सबसे लंबे समय तक चलने वाली रियासती मुद्रा थी। निज़ाम का “हाली सिक्का” आज़ादी के बाद भी कुछ समय चलता रहा, और उसका ओस्मानिया विश्वविद्यालय वाला डिज़ाइन संग्राहकों में ख़ासा लोकप्रिय है।',
          'ग्वालियर, इंदौर, बड़ौदा, जयपुर, बीकानेर और मैसूर — इन सबकी अपनी विशिष्ट शैली और चिह्न हैं। मैसूर के सिक्कों पर हाथी, बड़ौदा के सिक्कों पर विशेष लिपि, और बीकानेर के कुछ सिक्कों पर ब्रिटिश राजा के साथ स्थानीय शासक का नाम — हर राज्य की अपनी पहचान।',
          'कश्मीर, त्रावणकोर और कच्छ अपनी अलग परंपराओं के कारण दिलचस्प हैं। त्रावणकोर के छोटे चाँदी के सिक्के और कच्छ की कोरी अपने-अपने क्षेत्र में गहरी जड़ें रखते हैं।',
        ],
        pEn: [
          'Hyderabad ran the largest and longest-lasting princely currency. The Nizam’s “Hali Sicca” continued to circulate for a period even after independence, and its Osmania University design is popular among collectors.',
          'Gwalior, Indore, Baroda, Jaipur, Bikaner and Mysore — each has its own distinct style and symbols. Elephants on the Mysore coins, a particular script on those of Baroda, and on some Bikaner issues the local ruler’s name alongside the British king — every state carries its own identity.',
          'Kashmir, Travancore and Kutch are interesting for their separate traditions. The small silver coins of Travancore and the kori of Kutch have deep roots in their own regions.',
        ],
      },
      {
        hHi: 'लिपियों की विविधता',
        hEn: 'The variety of scripts',
        pHi: [
          'यही वह चीज़ है जो इस क्षेत्र को सबसे रंगीन और सबसे चुनौतीपूर्ण बनाती है। रियासती सिक्कों पर फ़ारसी, देवनागरी, कन्नड़, तेलुगु, तमिल, मलयालम, गुजराती, बांग्ला और शारदा तक मिलती है — कई बार एक ही सिक्के पर दो लिपियाँ।',
          'शुरुआती संग्राहक के लिए यह डराने वाला लग सकता है, पर व्यवहार में मदद उपलब्ध है। हर बड़ी रियासत की सिक्का-सूची प्रकाशित है, और चित्रों से मिलान करके पहचान करना कुछ हफ़्तों में आ जाता है।',
          'और यही कठिनाई इस क्षेत्र का सबसे बड़ा आकर्षण भी है। जो सिक्के पढ़ने में मुश्किल हैं, उनकी माँग कम रहती है, और कम माँग का सीधा अर्थ है कम दाम। धैर्य रखने वाले संग्राहक के लिए यह वरदान है।',
        ],
        pEn: [
          'This is what makes the field the most colourful and the most demanding. Princely coins carry Persian, Devanagari, Kannada, Telugu, Tamil, Malayalam, Gujarati, Bengali and even Sharada — sometimes two scripts on a single coin.',
          'For a beginner this can look intimidating, but help exists in practice. Published listings cover every major state, and identification by matching against illustrations comes within a few weeks.',
          'And that very difficulty is the field’s greatest attraction. Coins that are hard to read attract less demand, and less demand means lower prices. For a patient collector this is a gift.',
        ],
      },
      {
        hHi: 'यह क्षेत्र सस्ता क्यों है',
        hEn: 'Why this field remains affordable',
        pHi: [
          'तीन कारण मिलकर काम करते हैं। पहला — विविधता इतनी ज़्यादा है कि कोई एक “पूरा सेट” संभव नहीं, इसलिए पूर्णता की वह होड़ नहीं बनती जो दाम चढ़ाती है।',
          'दूसरा — पहचान कठिन है, इसलिए आकस्मिक ख़रीदार इस ओर नहीं आते। बाज़ार में भीड़ कम है, और भीड़ ही दाम बनाती है।',
          'तीसरा — बहुत-सी रियासतों के ताँबे के सिक्के बड़ी संख्या में ढले और बचे हैं। ये आज भी कुछ सौ रुपये में मिल जाते हैं, जबकि उनकी कहानी किसी महँगे सिक्के से कम दिलचस्प नहीं।',
          'यानी सीमित बजट वाले संग्राहक के लिए यह शायद सबसे संतोषजनक क्षेत्र है — कम पैसे में असली इतिहास, और सीखने के लिए जीवन भर की सामग्री।',
        ],
        pEn: [
          'Three reasons work together. First, the variety is so vast that no single “complete set” is possible, so the race for completion that drives prices up never forms.',
          'Second, identification is difficult, so casual buyers stay away. There is little crowding in this market, and crowding is what creates price.',
          'Third, the copper coins of many states were struck and survive in large numbers. They still cost a few hundred rupees, and their stories are no less interesting than those of far more expensive coins.',
          'For a collector on a limited budget this is arguably the most satisfying field there is — genuine history for little money, and a lifetime of material to learn from.',
        ],
      },
      {
        hHi: 'शुरुआत कहाँ से करें',
        hEn: 'Where to begin',
        pHi: [
          'सबसे स्वाभाविक शुरुआत अपने ही क्षेत्र की रियासत से है। जिस राज्य में आप रहते हैं या जहाँ से आपका परिवार आता है, उसके सिक्के जुटाना विषय को व्यक्तिगत बना देता है, और स्थानीय जानकारी भी आसानी से मिल जाती है।',
          'दूसरा तरीक़ा एक धातु चुनना है — जैसे केवल ताँबे के रियासती सिक्के। यह सस्ता रहता है, विविधता भरपूर मिलती है, और आँख को अलग-अलग शैलियाँ पहचानने का अच्छा अभ्यास होता है।',
          'तीसरा तरीक़ा एक चिह्न या विषय चुनना है — जैसे वे सारे सिक्के जिन पर कोई पशु बना हो। यह विषय अपने आप में सुंदर है और प्रदर्शित करने पर लोगों को तुरंत आकर्षित करता है।',
        ],
        pEn: [
          'The most natural starting point is the princely state of your own region. Collecting the coins of the state you live in, or the one your family comes from, makes the subject personal and local knowledge easy to find.',
          'A second approach is to pick one metal — only the copper issues of the princely states, say. It stays inexpensive, the variety is plentiful, and it gives the eye good practice at recognising different regional styles.',
          'A third is to pick a symbol or motif — every coin bearing an animal, for instance. That theme is beautiful in itself and draws people in immediately when displayed.',
        ],
      },
    ],
  },
  {
    slug: 'error-coins-value',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'असली एरर टकसाल की मशीन में किसी एक चरण की विफलता से बनता है, और उसकी हमेशा एक तार्किक व्याख्या होती है। जो “एरर” किसी चरण से नहीं जुड़ता, वह नुक़सान है या जालसाज़ी।',
          'ऑफ़-सेंटर स्ट्राइक, डबल स्ट्राइक, रोटेटेड डाई, ब्रॉकेज और क्लिप्ड प्लांचेट — ये पाँच सबसे भरोसेमंद श्रेणियाँ हैं। महँगी ख़रीद से पहले प्रमाणन कराइए और बीते नीलामी-नतीजे देखिए, माँगी गई क़ीमतें नहीं।',
        ],
        pEn: [
          'A genuine error comes from the failure of one specific stage in the minting machinery, and it always has a logical explanation behind it. Any “error” that cannot be tied to a stage is either damage or deliberate fakery.',
          'Off-centre strikes, double strikes, rotated dies, brockages and clipped planchets are the five most dependable categories to work with. Before any expensive purchase, get the piece certified and look at past auction results rather than at the prices people are asking.',
        ],
      },
    ],
  },
  {
    slug: 'coin-grading-basics',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'दशा ही दाम है। घिसाव सबसे ऊँचे बिंदुओं पर पहले दिखता है, और लस्टर की मौजूदगी सबसे निर्णायक तत्व है — क्योंकि वह एक बार चला जाए तो लौटता नहीं।',
          'सीढ़ी याद रखिए: पुअर, गुड, फ़ाइन, वेरी फ़ाइन, एक्स्ट्रीमली फ़ाइन, अनसर्कुलेटेड। और वह एक नियम जो सबसे ज़्यादा पैसा बचाता है — सिक्का कभी साफ़ मत कीजिए।',
        ],
        pEn: [
          'Condition is price. Wear appears first on the highest points, and the presence of lustre is the single most decisive element — because once it is gone it never comes back.',
          'Remember the ladder: Poor, Good, Fine, Very Fine, Extremely Fine, Uncirculated. And remember the one rule that saves the most money of all — never clean a coin, whatever it looks like.',
        ],
      },
    ],
  },
  {
    slug: 'sell-old-coins-legally',
    sections: [
      {
        hHi: 'याद रखने लायक़ चार बातें',
        hEn: 'Four things worth remembering',
        pHi: [
          'पहली — रिज़र्व बैंक पुराने सिक्के नहीं ख़रीदता। “आरबीआई अनुमोदित ख़रीदार” का दावा करने वाला हर विज्ञापन झूठा है, और यह जाँचने का सबसे तेज़ तरीक़ा है।',
          'दूसरी — पैसा हमेशा ख़रीदार से विक्रेता की ओर बहता है। जो आपसे रजिस्ट्रेशन, वेरिफ़िकेशन, जीएसटी या कूरियर का शुल्क माँगे, वह ठग है, चाहे कहानी कितनी भी भरोसेमंद लगे।',
          'तीसरी — बेचने से पहले सिक्का साफ़ मत कीजिए, तस्वीरें साफ़ लीजिए, और एक सूची बनाइए। ये तीनों काम मिलकर आपको बेहतर दाम दिलाते हैं।',
          'चौथी — तीन असली रास्ते हैं: डीलर (तेज़, दाम कम), नीलामी घर (धीमा, दाम ऊँचा), और संग्राहकों की समिति (बीच का रास्ता)। तीनों में मोल-भाव होता है और किसी में अग्रिम शुल्क नहीं।',
        ],
        pEn: [
          'First — the Reserve Bank does not buy old coins. Every advertisement claiming to be an “RBI approved buyer” is false, and that is the fastest test you can apply to any offer.',
          'Second — money always flows from the buyer to the seller. Anybody asking you for a registration, verification, GST or courier fee is a fraud, however convincing the story sounds.',
          'Third — before selling, do not clean the coin, do photograph it clearly, and do make a list. Those three together get you a better price than any negotiation tactic will.',
          'Fourth — there are three real routes: a dealer (fast, lower price), an auction house (slow, higher price), and a collectors’ society (the middle path). All three negotiate, and none of them asks for money up front.',
        ],
      },
    ],
  },
  {
    slug: 'start-coin-collection',
    sections: [
      {
        hHi: 'पहली ख़रीद कैसी होनी चाहिए',
        hEn: 'What your first purchase should look like',
        pHi: [
          'जब आप ख़रीदने के लिए तैयार हों, तो पहली ख़रीद सस्ती और आम होनी चाहिए — कोई ऐसा सिक्का जिसकी क़ीमत इतनी हो कि ग़लती निकलने पर भी तकलीफ़ न हो।',
          'किसी प्रदर्शनी में जाकर, हाथ में लेकर ख़रीदिए। ऑनलाइन पहली ख़रीद इसलिए ठीक नहीं कि तस्वीर से घिसाव, लस्टर और वज़न का अंदाज़ा नहीं लगता, और यही तीनों सबसे ज़्यादा मायने रखते हैं।',
          'विक्रेता से पूछिए कि वह इसे किस ग्रेड का मानता है और क्यों। एक अच्छा डीलर जवाब देने में ख़ुशी महसूस करता है, और वह बातचीत आपको किसी किताब से ज़्यादा सिखाती है।',
        ],
        pEn: [
          'When you are ready to buy, the first purchase should be cheap and common — a coin priced low enough that a mistake would not hurt.',
          'Buy it at a fair, with the coin in your hand. A first purchase online is a poor idea because a photograph tells you nothing reliable about wear, lustre or weight, and those three matter more than anything else.',
          'Ask the seller what grade he considers it and why. A good dealer is happy to answer, and that one conversation teaches you more than any book will.',
        ],
      },
      {
        hHi: 'धैर्य ही असली औज़ार है',
        hEn: 'Patience is the real tool',
        pHi: [
          'यह शौक़ जमा करने का नहीं, धीरे-धीरे समझने का है। जो संग्राहक पहले साल में सबसे ज़्यादा सिक्के ख़रीदते हैं, वे अक्सर तीसरे साल तक आधे बेच देते हैं।',
          'बेहतर तरीक़ा उल्टा है — कम ख़रीदिए, ज़्यादा देखिए, और हर ख़रीद से पहले एक हफ़्ता रुकिए। जो सिक्का हफ़्ते भर बाद भी उतना ही ज़रूरी लगे, वही असल में चाहिए था।',
        ],
        pEn: [
          'This hobby is not about accumulating but about understanding, slowly. Collectors who buy the most coins in their first year very often sell half of them by their third.',
          'The better approach is the opposite — buy less, look more, and wait a week before every purchase. A coin that still feels necessary after that week is the one you actually wanted.',
        ],
      },
    ],
  },
  {
    slug: 'princely-states-coins',
    sections: [
      {
        hHi: 'नक़ल से बचाव',
        hEn: 'Guarding against forgeries',
        pHi: [
          'रियासती सिक्कों में भी नक़ल मौजूद है, पर उसका ढाँचा अलग है। चूँकि अधिकांश सिक्के सस्ते हैं, बड़े पैमाने पर जाली बनाना फ़ायदेमंद नहीं — इसलिए नक़ल मुख्यतः महँगी, दुर्लभ किस्मों में मिलती है।',
          'सबसे आम धोखा वही है जो मुग़ल सिक्कों में है — ढला हुआ (कास्ट) नक़ल, जिसकी सतह पर छोटे गड्ढे और किनारे पर गोलापन दिखता है, जबकि असली सिक्का ठोंककर बनाया गया था।',
          'वज़न फिर से सबसे तेज़ जाँच है, बशर्ते आपको उस राज्य का मानक वज़न मालूम हो। यही एक कारण है कि रियासती संग्रह में एक अच्छी संदर्भ-सूची रखना ज़रूरी है।',
        ],
        pEn: [
          'Forgeries exist among princely coins too, but the pattern differs. Because most of these coins are inexpensive, faking them at scale is not profitable — so counterfeits are found mainly among the expensive, scarce varieties.',
          'The commonest deception is the same one seen with Mughal coins — a cast copy, showing small pits across the surface and rounded edges, whereas the genuine piece was struck by hammer.',
          'Weight is again the fastest check, provided you know the standard for that particular state. This is one reason a good reference listing is essential for anybody collecting in this field.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'यह भारतीय संग्रह का सबसे विविध, सबसे सस्ता और सबसे कम भीड़ वाला क्षेत्र है। लिपियों की कठिनाई ही इसे सुलभ रखती है।',
          'अपने ही क्षेत्र की रियासत से शुरू कीजिए, एक अच्छी संदर्भ-सूची रखिए, और सस्ते ताँबे के सिक्कों से आँख बनाइए। कुछ महीनों में आप वह पढ़ने लगेंगे जो अधिकांश लोग देख भी नहीं पाते।',
        ],
        pEn: [
          'This is the most varied, the most affordable and the least crowded field in Indian collecting. The very difficulty of the scripts is what keeps it accessible.',
          'Begin with the princely state of your own region, keep a good reference listing beside you, and build your eye on the cheap copper issues. Within a few months you will be reading what most people cannot even see.',
        ],
      },
    ],
  },
  {
    slug: 'error-coins-value',
    sections: [
      {
        hHi: 'एक आख़िरी सलाह',
        hEn: 'One last piece of advice',
        pHi: [
          'एरर संग्रह में उतरने से पहले साधारण सिक्कों पर आँख बना लीजिए। जो व्यक्ति सामान्य ढलाई को ठीक से नहीं पहचानता, वह असामान्य को कैसे पहचानेगा।',
        ],
        pEn: [
          'Before entering error collecting, build your eye on ordinary coins first. Somebody who cannot recognise a normal strike properly has no reliable way of recognising an abnormal one, and that is where most expensive mistakes in this field begin.',
        ],
      },
    ],
  },
  {
    slug: 'coin-grading-basics',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last point',
        pHi: [
          'ग्रेड कोई कठोर विज्ञान नहीं है — दो अनुभवी लोग एक ही सिक्के पर एक पायदान का फ़र्क़ रख सकते हैं। इसीलिए मोल-भाव में ग्रेड पर बहस करने के बजाय सिक्के के ब्योरे पर बात कीजिए।',
        ],
        pEn: [
          'Grading is not an exact science — two experienced people can differ by one rung on the same coin. For that reason, when negotiating, discuss the specific details of the piece rather than arguing about the label, because details are checkable and labels are opinions.',
        ],
      },
    ],
  },
  {
    slug: 'sell-old-coins-legally',
    sections: [
      {
        hHi: 'और अंत में',
        hEn: 'And finally',
        pHi: [
          'बेचना ही एकमात्र विकल्प नहीं है। अगर संग्रह छोटा है और उसकी बाज़ारू क़ीमत मामूली है, तो उसे व्यवस्थित करके रख लेना अक्सर बेहतर फ़ैसला साबित होता है।',
        ],
        pEn: [
          'Selling is not the only option available to you. If the collection is small and its market value is modest, organising it properly and keeping it very often turns out to be the better decision in the end.',
        ],
      },
    ],
  },
  {
    slug: 'start-coin-collection',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'एक विषय चुनिए, एक लूप और एक तराज़ू ख़रीदिए, सही भंडारण का इंतज़ाम कीजिए, और घर में मौजूद सिक्कों से शुरुआत कीजिए। पहले महीने में कुछ महँगा मत ख़रीदिए।',
          'फिर किसी प्रदर्शनी में जाइए, लोगों से मिलिए, और हर सिक्के के साथ एक छोटी पर्ची रखने की आदत डालिए। यही चार-पाँच आदतें मिलकर एक ऐसा संग्रह बनाती हैं जो वर्षों बाद भी संतोष देता है।',
        ],
        pEn: [
          'Choose a theme, buy a loupe and a scale, arrange proper storage, and begin with the coins already in your house. Buy nothing expensive in the first month, however tempting it looks.',
          'Then visit a fair, meet other collectors, and build the habit of keeping a small slip with every coin. Those four or five habits together are what produce a collection that still gives satisfaction years later, rather than a box of things you once bought.',
        ],
      },
    ],
  },
  {
    slug: 'princely-states-coins',
    sections: [
      {
        hHi: 'एक व्यावहारिक सुझाव',
        hEn: 'A practical suggestion',
        pHi: [
          'एक अच्छी संदर्भ-पुस्तक इस क्षेत्र में सबसे अच्छा निवेश है — किसी भी एक सिक्के से ज़्यादा उपयोगी। रियासती सिक्कों की मानक सूचियाँ उपलब्ध हैं और उनमें वज़न, धातु और चित्र सब दर्ज रहते हैं।',
        ],
        pEn: [
          'A good reference book is the single best investment in this field — more useful than any one coin you could buy with the same money. Standard listings of the princely issues are available, and they record weights, metals and illustrations for each type, which is exactly what identification requires.',
        ],
      },
    ],
  },
];

export function applyExpansions(all: Article[]): void {
  const bySlug = new Map(all.map((a) => [a.slug, a]));
  for (const exp of EXPANSIONS) {
    const article = bySlug.get(exp.slug);
    if (!article) continue;
    article.sections.push(...exp.sections);
  }
}
