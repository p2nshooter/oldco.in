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
  {
    slug: 'punch-marked-coins-ancient-india',
    sections: [
      {
        hHi: 'ये सिक्के कब और क्यों बने',
        hEn: 'When these coins appeared, and why',
        pHi: [
          'आहत सिक्के (पंच-मार्क्ड) भारत की सबसे पुरानी मुद्रा हैं, और उनका समय लगभग छठी शताब्दी ईसा पूर्व से शुरू होता है। यह वही दौर है जब गंगा के मैदान में महाजनपद उभर रहे थे, नगर बस रहे थे, और व्यापार को वस्तु-विनिमय से आगे किसी चीज़ की ज़रूरत पड़ी।',
          'इनका जन्म किसी एक राजा के आदेश से नहीं, व्यापार की व्यावहारिक ज़रूरत से हुआ। शुरुआती सिक्के व्यापारी श्रेणियों और नगर-निगमों ने जारी किए, और बाद में मगध जैसे बड़े राज्यों ने इस व्यवस्था को अपने हाथ में लिया।',
          'मौर्य काल तक आते-आते ये सिक्के पूरे उपमहाद्वीप में फैल चुके थे। कौटिल्य के अर्थशास्त्र में सिक्कों की जाँच करने वाले अधिकारी का उल्लेख मिलता है — यानी उस समय भी नक़ली सिक्कों की समस्या मौजूद थी और उसके लिए सरकारी व्यवस्था बनी हुई थी।',
        ],
        pEn: [
          'Punch-marked coins are India’s oldest currency, and their story begins around the sixth century before the common era. This is the same period in which the mahajanapadas were rising across the Gangetic plain, cities were being founded, and trade needed something beyond barter to work with.',
          'They were born not from any single king’s decree but from the practical requirements of commerce. The earliest issues came from merchant guilds and city corporations, and only later did large states such as Magadha take the system into their own hands.',
          'By the Mauryan period these coins had spread across the subcontinent. The Arthashastra of Kautilya mentions an officer whose job was to examine coins — which tells us that counterfeiting was already a problem then, and that an official arrangement existed to deal with it.',
        ],
      },
      {
        hHi: 'बनाने की विधि, जो नाम में ही छिपी है',
        hEn: 'The method of manufacture, which is hidden in the name itself',
        pHi: [
          'नाम ही तरीक़ा बता देता है। चाँदी की एक चादर से टुकड़े काटे जाते थे, फिर हर टुकड़े को तय वज़न तक काट-छाँटकर लाया जाता था, और अंत में उस पर छोटे-छोटे ठप्पे (पंच) अलग-अलग ठोंके जाते थे।',
          'यही कारण है कि इन सिक्कों का आकार अनियमित है — कोई गोल, कोई चौकोर, कोई बेढंगा। आकार मायने नहीं रखता था; वज़न रखता था। मानक वज़न लगभग 3.4 ग्राम के आसपास बैठता है, जिसे प्राचीन ग्रंथों में कर्षापण कहा गया।',
          'हर सिक्के पर आमतौर पर पाँच ठप्पे मिलते हैं, और वे एक साथ नहीं, अलग-अलग ठोंके गए थे। इसीलिए कई बार एक ठप्पा दूसरे के ऊपर चढ़ा हुआ दिखता है — और यही असलियत का सबसे भरोसेमंद प्रमाण भी है, क्योंकि ढली हुई नक़ल में यह क्रम बन ही नहीं सकता।',
        ],
        pEn: [
          'The name itself describes the method. Pieces were cut from a sheet of silver, each piece was then trimmed until it reached the correct weight, and finally small stamps — punches — were struck onto it one at a time.',
          'This is why these coins are irregular in shape: some round, some square, some simply shapeless. The shape did not matter; the weight did. The standard sits at around 3.4 grams, the unit the ancient texts call a karshapana.',
          'Most coins carry five punches, and they were applied separately rather than together. That is why one punch is often seen overlapping another — and it happens to be the most dependable proof of authenticity, because a cast forgery cannot reproduce that sequence of overlaps.',
        ],
      },
      {
        hHi: 'प्रतीकों की दुनिया',
        hEn: 'The world of the symbols',
        pHi: [
          'इन सिक्कों पर लिखावट नहीं, प्रतीक हैं — और यही उन्हें सबसे रहस्यमय बनाता है। सूर्य लगभग हर सिक्के पर मिलता है, और उसके साथ एक छह-भुजाओं वाला चिह्न, जिसे विद्वान “षडर चक्र” कहते हैं।',
          'बाक़ी प्रतीकों में पहाड़ी (जिस पर अक्सर अर्धचंद्र बना होता है), वृक्ष जिसके चारों ओर रेलिंग हो, हाथी, बैल, मछली, और ज्यामितीय आकृतियाँ शामिल हैं। सैकड़ों अलग-अलग प्रतीक दर्ज किए जा चुके हैं।',
          'इनका अर्थ आज भी पूरी तरह तय नहीं है। कुछ विद्वान इन्हें जारी करने वाले अधिकारियों के चिह्न मानते हैं, कुछ राज्यों या टकसालों के, और कुछ धार्मिक प्रतीक। यही अनिश्चितता इस क्षेत्र को शोध के लिए जीवित बनाए रखती है।',
          'संग्राहक के लिए व्यावहारिक बात यह है कि प्रतीकों का संयोजन ही वर्गीकरण का आधार है। एक ही सिक्के पर कौन-से पाँच प्रतीक हैं, यह जानकर उसे एक विशेष शृंखला में रखा जा सकता है।',
        ],
        pEn: [
          'These coins carry symbols rather than inscriptions, and that is what makes them most mysterious. The sun appears on almost every one, accompanied by a six-armed device that scholars call the shadara chakra.',
          'Among the other symbols are a hill, often surmounted by a crescent; a tree enclosed by a railing; an elephant; a bull; a fish; and a range of geometric forms. Several hundred distinct symbols have been recorded.',
          'Their meaning is still not settled. Some scholars read them as the marks of the officials who issued the coin, some as marks of states or mints, and some as religious devices. That very uncertainty is what keeps the field alive for research.',
          'The practical point for a collector is that the combination of symbols is the basis of classification. Knowing which five appear on a given coin allows it to be placed within a particular series.',
        ],
      },
      {
        hHi: 'असली और नक़ली में फ़र्क़',
        hEn: 'Telling genuine from forged',
        pHi: [
          'सबसे पहला परीक्षण ठप्पों का है। असली सिक्के में हर ठप्पा अलग-अलग ठोंका गया, इसलिए उनकी गहराई और कोण अलग होते हैं, और कई बार वे एक-दूसरे को काटते हैं। ढले हुए नक़ल में सारे चिह्न एक ही तल पर, एक ही गहराई में बैठे मिलते हैं।',
          'दूसरा परीक्षण धातु का है। ये सिक्के चाँदी के हैं, अक्सर मिश्रित शुद्धता वाले, और सदियों में उन पर एक गहरी प्राकृतिक परत (पैटिना) बनी होती है। नई बनी नक़ल में यह परत या तो अनुपस्थित होती है या कृत्रिम रूप से बनाई गई और असमान होती है।',
          'तीसरा वज़न है। लगभग 3.4 ग्राम के मानक से बहुत दूर बैठने वाला सिक्का सवाल खड़ा करता है, हालाँकि घिसाव और क्षरण के कारण थोड़ी कमी सामान्य है।',
          'और चौथा — किनारा। असली सिक्का चादर से काटा गया था, इसलिए किनारे पर कटाई के निशान मिलते हैं। ढले हुए सिक्के का किनारा गोल और चिकना होता है, जो साँचे से निकलने का सबूत है।',
        ],
        pEn: [
          'The first test concerns the punches. On a genuine coin each punch was struck separately, so their depths and angles differ and they frequently cut across one another. On a cast forgery every mark sits on the same plane at the same depth.',
          'The second test is the metal. These coins are silver, often of variable purity, and centuries have laid down a deep natural patina. On a recent forgery that layer is either absent or has been created artificially and looks uneven.',
          'The third is weight. A coin sitting far from the standard of roughly 3.4 grams raises a question, though some loss through wear and corrosion is entirely normal.',
          'And the fourth is the edge. A genuine coin was cut from a sheet, so cutting marks appear along its edge. A cast coin has a rounded, smooth edge — the evidence of its release from a mould.',
        ],
      },
      {
        hHi: 'ये आज भी सुलभ क्यों हैं',
        hEn: 'Why they remain affordable today',
        pHi: [
          'यह सबसे सुखद आश्चर्य है: ढाई हज़ार साल पुराने सिक्के आज भी कुछ हज़ार रुपये में मिल जाते हैं। कारण सीधा है — इन्हें भारी संख्या में ढाला गया, ये चाँदी के होने के कारण गलाए नहीं गए, और ज़मीन में दबे भंडार आज भी मिलते रहते हैं।',
          'दाम मुख्यतः दो बातों से बनता है: सिक्के की दशा, और प्रतीकों का कितना हिस्सा स्पष्ट पढ़ा जा सकता है। जिस सिक्के पर पाँचों ठप्पे साफ़ हों, वह उसी वज़न के धुँधले सिक्के से कई गुना ऊपर बैठता है।',
          'इसलिए यह उन कम क्षेत्रों में से है जहाँ एक साधारण बजट वाला संग्राहक सचमुच प्राचीन वस्तु रख सकता है। हथेली पर वह चाँदी का टुकड़ा किसी संग्रहालय की वस्तु से कम नहीं, और वह आपका है।',
        ],
        pEn: [
          'This is the most pleasant surprise in the subject: coins two and a half thousand years old can still be had for a few thousand rupees. The reason is straightforward — they were struck in enormous numbers, being silver they were not melted down, and buried hoards continue to surface.',
          'Price is set mainly by two things: the condition of the piece, and how much of the symbolism can be read clearly. A coin showing all five punches sharply sits several multiples above a blurred example of the same weight.',
          'This makes it one of the few fields where a collector on an ordinary budget can genuinely own something ancient. That piece of silver in your palm is no lesser an object than one in a museum case, and it is yours.',
        ],
      },
      {
        hHi: 'ख़रीदते समय क्या पूछें',
        hEn: 'What to ask when buying',
        pHi: [
          'पहला सवाल स्रोत का है — यह सिक्का कहाँ से आया। प्राचीन वस्तुओं के मामले में स्रोत मायने रखता है, और ईमानदार विक्रेता इसका जवाब देने में हिचकता नहीं।',
          'दूसरा — वज़न कितना है, और क्या तराज़ू पर तौलकर दिखाया जा सकता है। यह सामान्य अनुरोध है और कोई भी गंभीर डीलर इसे मान लेता है।',
          'तीसरा — क्या इसे साफ़ किया गया है। बहुत-से आहत सिक्के बाज़ार में आने से पहले रगड़ दिए जाते हैं, जिससे पैटिना और सतह के ब्योरे दोनों चले जाते हैं। साफ़ किया हुआ सिक्का सस्ता होना चाहिए, और यह बात खुलकर कही जानी चाहिए।',
        ],
        pEn: [
          'The first question is provenance — where did this coin come from. With ancient objects the source matters, and an honest seller does not hesitate to answer it.',
          'The second is the weight, and whether it can be shown on a scale. This is an ordinary request and any serious dealer accepts it without complaint.',
          'The third is whether the piece has been cleaned. A great many punch-marked coins are scrubbed before reaching the market, which removes both the patina and the surface detail. A cleaned coin should cost less, and that fact ought to be stated openly.',
        ],
      },
    ],
  },
  {
    slug: 'small-coins-25-50-paise',
    sections: [
      {
        hHi: '2011 में क्या हुआ',
        hEn: 'What happened in 2011',
        pHi: [
          '30 जून 2011 से 25 पैसे और उससे छोटे सभी सिक्के वैध मुद्रा नहीं रहे। यह घोषणा रिज़र्व बैंक ने की, और उस तारीख़ के बाद इन सिक्कों से कुछ ख़रीदा नहीं जा सकता था।',
          'कारण आर्थिक था। महँगाई बढ़ने के साथ इन सिक्कों की क्रय-शक्ति लगभग शून्य हो चुकी थी, जबकि उन्हें ढालने, ढोने और गिनने की लागत उनके अंकित मूल्य से कहीं ऊपर जा चुकी थी। एक पैसे का सिक्का बनाने में एक पैसे से ज़्यादा ख़र्च होता था।',
          'उस दिन ये सिक्के मुद्रा से इतिहास बन गए — और यही वह क्षण है जिसने इन्हें संग्राहकों के लिए दिलचस्प बना दिया। जो चीज़ बननी बंद हो जाए, उसकी संख्या अब कभी नहीं बढ़ेगी।',
        ],
        pEn: [
          'From 30 June 2011 the 25 paise and every smaller coin ceased to be legal tender. The Reserve Bank made the announcement, and after that date nothing could be bought with them.',
          'The reason was economic. As inflation rose the purchasing power of these coins had fallen to almost nothing, while the cost of striking, transporting and counting them had climbed well above their face value. Making a one-paisa coin cost more than one paisa.',
          'On that day these pieces turned from currency into history — and that is precisely the moment that made them interesting to collectors. Once something stops being made, its number can never grow again.',
        ],
      },
      {
        hHi: 'धातुओं और डिज़ाइनों का जुलूस',
        hEn: 'A parade of metals and designs',
        pHi: [
          'छोटे सिक्कों की कहानी असल में धातु की कहानी है। 1957 में दशमलव प्रणाली आने पर एक, दो, पाँच, दस, पच्चीस और पचास नए पैसे जारी हुए — छोटे मूल्यवर्ग काँसे और निकल-पीतल में, बड़े कप्रो-निकल में।',
          '1960 के दशक में लागत के दबाव में एल्युमिनियम आया, और सिक्के अचानक बहुत हल्के हो गए। एक और दो पैसे के वे हल्के, तिकोने-से सिक्के आज भी लोगों को याद हैं — बच्चे उन्हें उछालकर देखते थे कि कितनी देर हवा में रहते हैं।',
          'बाद में स्टेनलेस स्टील आया, और उसके साथ सिक्कों का चरित्र फिर बदला — कठोर, चमकदार, और घिसने में मुश्किल। यही कारण है कि इस दौर के सिक्के आज भी अच्छी दशा में मिल जाते हैं।',
          'डिज़ाइन में भी विविधता है: गेहूँ की बालियाँ, कमल, गैंडा, घोड़ा, और अनेक स्मारक विषय। एक दराज़ भर छोटे सिक्के असल में आधी सदी का डिज़ाइन-इतिहास हैं।',
        ],
        pEn: [
          'The story of the small coins is really the story of metal. When decimalisation arrived in 1957, one, two, five, ten, twenty-five and fifty naye paise were issued — the smaller denominations in bronze and nickel-brass, the larger in cupro-nickel.',
          'Under cost pressure in the 1960s aluminium arrived, and the coins suddenly became very light. Those weightless one and two paise pieces with their scalloped edges are still remembered — children used to toss them to see how long they stayed in the air.',
          'Later came stainless steel, and with it the character of the coinage changed again — hard, bright, and difficult to wear down. That is why coins of this period still turn up in good condition.',
          'The designs vary as widely: ears of wheat, a lotus, a rhinoceros, a horse, and numerous commemorative subjects. A drawerful of small coins is in fact half a century of design history.',
        ],
      },
      {
        hHi: 'किन सिक्कों को सँभालकर रखें',
        hEn: 'Which of them to put away',
        pHi: [
          'पहले वे जो अच्छी दशा में हैं। छोटे सिक्के भारी संख्या में ढले थे, इसलिए आम घिसे हुए नमूने की माँग कम है — पर बिना घिसे, मूल चमक वाले सिक्के अपेक्षाकृत दुर्लभ हैं, क्योंकि किसी ने उन्हें सँभालने की सोची ही नहीं।',
          'दूसरे वे जो कम ढले वर्षों के हैं। हर वर्ष की ढलाई-संख्या अलग थी, और कुछ वर्ष-टकसाल संयोजन बहुत कम बने। यह जानकारी कैटलॉग में दर्ज है और उसे देखे बिना अंदाज़ा लगाना मुश्किल है।',
          'तीसरे वे जिन पर एरर है — ऑफ़-सेंटर छाप, दोहरी ठोंक, या धातु का दोष। छोटे सिक्कों में एरर अपेक्षाकृत ज़्यादा मिलते हैं क्योंकि उनकी ढलाई तेज़ रफ़्तार से होती थी।',
          'और चौथे — वे जिनसे आपकी अपनी याद जुड़ी है। संग्रह का सबसे टिकाऊ आधार भावना है, बाज़ार नहीं।',
        ],
        pEn: [
          'First, those in good condition. Small coins were struck in vast numbers, so ordinary worn examples attract little demand — but unworn pieces retaining their original lustre are comparatively scarce, precisely because nobody thought to save them.',
          'Second, those from low-mintage years. Production varied from year to year, and certain year-and-mint combinations were made in very small numbers. That information sits in the catalogues and is hard to guess at without them.',
          'Third, those carrying errors — an off-centre strike, a doubled blow, or a flaw in the metal. Errors are comparatively common among small coins because they were struck at high speed.',
          'And fourth, those attached to a memory of your own. The most durable basis for a collection is feeling rather than market value.',
        ],
      },
      {
        hHi: 'क़ीमत के बारे में ईमानदार बात',
        hEn: 'An honest word about their value',
        pHi: [
          'इंटरनेट पर छोटे सिक्कों को लेकर सबसे ज़्यादा झूठे दावे घूमते हैं — “यह 25 पैसे का सिक्का लाखों में बिकता है” जैसी बातें लगभग हर महीने वायरल होती हैं।',
          'सच्चाई यह है कि अधिकांश छोटे सिक्के आज भी बहुत सस्ते हैं, क्योंकि वे करोड़ों की संख्या में ढले और करोड़ों की संख्या में बचे हैं। अपवाद वही तीन श्रेणियाँ हैं जो ऊपर बताई गईं — ऊँची दशा, कम ढलाई, और असली एरर।',
          'जाल का ढाँचा हमेशा एक जैसा रहता है: एक फ़ोन नंबर, एक असाधारण दावा, और फिर रजिस्ट्रेशन या कूरियर के नाम पर अग्रिम शुल्क। पैसा हमेशा ख़रीदार से विक्रेता की ओर बहता है; उल्टी दिशा में बहे तो वह सौदा नहीं, ठगी है।',
        ],
        pEn: [
          'The small coins attract more false claims online than anything else — “this 25 paise piece sells for lakhs” goes viral almost every month.',
          'The truth is that most small coins remain very cheap, because they were struck in crores and survive in crores. The exceptions are the same three categories named above — high grade, low mintage, and genuine errors.',
          'The structure of the trap never changes: a phone number, an extraordinary claim, and then an advance fee for registration or courier. Money always flows from the buyer to the seller; when it flows the other way, that is not a transaction but a fraud.',
        ],
      },
      {
        hHi: 'एक पूरा सेट बनाना',
        hEn: 'Building a complete set',
        pHi: [
          'छोटे सिक्के उस दुर्लभ श्रेणी में आते हैं जहाँ एक “पूरा सेट” सचमुच संभव है, और वही इस क्षेत्र का सबसे बड़ा आकर्षण है।',
          'सबसे स्वाभाविक लक्ष्य है: 1957 से 2011 तक हर मूल्यवर्ग का कम से कम एक अच्छा नमूना। यह कुछ दर्जन सिक्कों का मामला है, अधिकांश सस्ते, और पूरा होने पर एक साफ़ कहानी बनती है — दशमलव प्रणाली का जन्म से अंत तक।',
          'अधिक महत्वाकांक्षी लक्ष्य है हर वर्ष का हर मूल्यवर्ग, टकसाल-चिह्न सहित। यह वर्षों का काम है, कुछ वर्ष कठिन मिलते हैं, और यही उसे दिलचस्प बनाता है।',
          'दोनों में साझा बात यह है कि ख़र्च नियंत्रण में रहता है। यह संभवतः इकलौता भारतीय संग्रह-क्षेत्र है जहाँ कुछ हज़ार रुपये में एक सचमुच पूर्ण संग्रह खड़ा किया जा सकता है।',
        ],
        pEn: [
          'The small coins fall into that rare category where a genuinely complete set is possible, and that is the field’s greatest attraction.',
          'The most natural target is one good example of every denomination from 1957 to 2011. That is a matter of a few dozen coins, most of them inexpensive, and once assembled it tells a clean story — the decimal system from birth to end.',
          'A more ambitious target is every denomination for every year, mint marks included. That is a project of years, some dates are difficult, and the difficulty is exactly what makes it interesting.',
          'What both share is that the cost stays controlled. This is possibly the only Indian collecting field in which a genuinely complete holding can be built for a few thousand rupees.',
        ],
      },
      {
        hHi: 'रख-रखाव, ख़ासकर एल्युमिनियम का',
        hEn: 'Care, particularly of the aluminium',
        pHi: [
          'एल्युमिनियम के सिक्के इस समूह में सबसे नाज़ुक हैं। वे नरम हैं, आसानी से मुड़ते और ख़रोंच खाते हैं, और नमी में उन पर सफ़ेद पाउडर जैसी परत जम जाती है जो सतह को स्थायी नुक़सान पहुँचाती है।',
          'इसलिए इन्हें अलग-अलग रखिए — एक ही लिफ़ाफ़े में कई सिक्के डालने से वे आपस में रगड़ खाते हैं। माइलर या पॉलीप्रोपिलीन के फ़्लिप सबसे उपयुक्त हैं, और पीवीसी वाली पुरानी थैलियाँ बिल्कुल नहीं।',
          'स्टेनलेस स्टील के सिक्के सबसे मज़बूत हैं और लगभग किसी देखभाल की माँग नहीं करते। कप्रो-निकल बीच में है — वह हवा में धीरे-धीरे टोन पकड़ता है, जो नुक़सान नहीं बल्कि स्वाभाविक है और उसे हटाना नहीं चाहिए।',
        ],
        pEn: [
          'Aluminium coins are the most fragile in this group. They are soft, bend and scratch easily, and in damp conditions develop a white powdery bloom that damages the surface permanently.',
          'So keep them separated — several coins in one envelope simply rub against each other. Mylar or polypropylene flips suit them best, and old PVC sleeves must be avoided entirely.',
          'The stainless steel issues are the toughest and ask for almost no care at all. Cupro-nickel sits in between: it tones slowly in the air, which is natural rather than damage and should be left alone.',
        ],
      },
    ],
  },
  {
    slug: 'coin-storage-album-guide',
    sections: [
      {
        hHi: 'पीवीसी असल में करता क्या है',
        hEn: 'What PVC actually does',
        pHi: [
          'पुरानी प्लास्टिक थैलियों को नरम और लचीला बनाने के लिए उनमें प्लास्टिसाइज़र मिलाए जाते हैं। समय के साथ ये रसायन प्लास्टिक से निकलकर बाहर आते हैं, और जो सतह उनके संपर्क में हो, उस पर जम जाते हैं।',
          'सिक्के पर यह एक हरी, चिपचिपी परत के रूप में दिखता है। यह केवल गंदगी नहीं है — यह धातु के साथ रासायनिक क्रिया करती है, और अगर वर्षों तक रहने दी जाए तो सतह पर स्थायी गड्ढे छोड़ जाती है।',
          'सबसे बुरी बात यह है कि यह धीमा है। नुक़सान महीनों-वर्षों में होता है, इसलिए तब तक पता नहीं चलता जब तक बहुत देर न हो जाए। जिन संग्रहों को “सुरक्षित रखा गया” माना जाता है, उनमें सबसे ज़्यादा नुक़सान इसी वजह से मिलता है।',
          'अगर आपके पास पुरानी थैलियों में रखा संग्रह है, तो उसे आज ही निकालिए। यह इस पूरे लेख की सबसे ज़रूरी सलाह है।',
        ],
        pEn: [
          'Plasticisers are added to old plastic sleeves to make them soft and flexible. Over time these chemicals migrate out of the plastic and settle on whatever surface they are in contact with.',
          'On a coin this appears as a green, sticky film. It is not merely dirt — it reacts chemically with the metal, and if left for years it leaves permanent pitting across the surface.',
          'The worst part is that it is slow. The damage unfolds over months and years, so it goes unnoticed until it is too late. Collections believed to have been “kept safe” are exactly where this damage is found most often.',
          'If you hold a collection stored in old sleeves, take it out today. This is the single most important piece of advice in this article.',
        ],
      },
      {
        hHi: 'सुरक्षित सामग्री कौन-सी है',
        hEn: 'Which materials are safe',
        pHi: [
          'माइलर — यह पॉलिएस्टर की एक स्थिर फ़िल्म है जिसमें कोई प्लास्टिसाइज़र नहीं होता। यह कड़ी होती है, मुड़ती नहीं, और अभिलेखागारों में इसी का उपयोग होता है। सिक्कों के लिए सबसे भरोसेमंद विकल्प।',
          'पॉलीप्रोपिलीन और पॉलीएथिलीन — ये भी सुरक्षित हैं और सस्ते हैं। थैली पर “PVC-free” या “archival safe” लिखा हो तो आमतौर पर यही होते हैं।',
          'अम्ल-रहित काग़ज़ के लिफ़ाफ़े (2×2 इंच वाले) — सस्ते, हल्के, और लिखने की जगह देते हैं। इनका नुक़सान यह है कि सिक्का देखने के लिए हर बार निकालना पड़ता है, और यही निकालना-रखना ख़रोंच का सबसे बड़ा कारण है।',
          'कार्डबोर्ड फ़्लिप जिनमें माइलर की खिड़की हो और जिन्हें स्टेपल किया जाता है — ये दोनों फ़ायदे जोड़ते हैं। स्टेपल करते समय ध्यान रखिए कि पिन सिक्के से दूर रहे।',
        ],
        pEn: [
          'Mylar — a stable polyester film containing no plasticiser. It is rigid rather than floppy, and it is what archives use. The most dependable choice for coins.',
          'Polypropylene and polyethylene — also safe, and inexpensive. A sleeve marked “PVC-free” or “archival safe” is generally one of these.',
          'Acid-free paper envelopes, the two-inch square kind — cheap, light, and they give you somewhere to write. Their drawback is that the coin must be taken out to be seen, and that handling is the commonest cause of scratches.',
          'Cardboard flips with a Mylar window, closed with a staple, combine both advantages. When stapling, take care that the pin stays well away from the coin itself.',
        ],
      },
      {
        hHi: 'नमी, हवा और जगह',
        hEn: 'Humidity, air and location',
        pHi: [
          'भारत की जलवायु में नमी सबसे बड़ा शत्रु है। ताँबे और काँसे के सिक्कों पर हरी परत, लोहे के सिक्कों पर ज़ंग, और चाँदी पर काली टोनिंग — तीनों की जड़ नमी है।',
          'समाधान सस्ता है: एक बंद डिब्बा और उसमें सिलिका जेल के पाउच। पाउच को साल में एक-दो बार बदलिए, या उन्हें धूप में सुखाकर दोबारा इस्तेमाल कीजिए। लक्ष्य लगभग 40 प्रतिशत सापेक्ष आर्द्रता है।',
          'जगह का चुनाव भी उतना ही मायने रखता है। रसोई और स्नानघर के पास मत रखिए — भाप वहाँ नियमित पहुँचती है। खिड़की के पास भी नहीं, क्योंकि तापमान का उतार-चढ़ाव संघनन पैदा करता है।',
          'सबसे अच्छी जगह घर के भीतर की कोई अलमारी है, ज़मीन से ऊपर, बाहरी दीवार से दूर। तहख़ाना और छत दोनों तापमान के चरम झेलते हैं और इसीलिए दोनों अनुपयुक्त हैं।',
        ],
        pEn: [
          'In the Indian climate humidity is the greatest enemy. Green film on copper and bronze, rust on iron issues, and black toning on silver all have moisture at their root.',
          'The remedy is cheap: a closed box with silica gel sachets inside. Replace the sachets once or twice a year, or dry them in the sun and reuse them. The target is around forty per cent relative humidity.',
          'The choice of location matters just as much. Do not store near a kitchen or a bathroom, where steam arrives regularly. Nor beside a window, because swings in temperature produce condensation.',
          'The best place is an interior cupboard, raised off the floor and away from an outside wall. A basement and a roof room both suffer extremes of temperature, and both are therefore unsuitable.',
        ],
      },
      {
        hHi: 'सिक्का पकड़ने का सही तरीक़ा',
        hEn: 'The right way to hold a coin',
        pHi: [
          'हमेशा किनारों से पकड़िए, अँगूठे और तर्जनी के बीच, और चेहरे पर उँगली मत रखिए। त्वचा का तेल और पसीना धातु पर निशान छोड़ते हैं जो महीनों बाद उभरकर दिखने लगते हैं।',
          'नरम कपड़े या मुलायम सतह के ऊपर काम कीजिए। गिरा हुआ सिक्का काँच या पत्थर पर गिरे तो किनारा दब जाता है, और वह चोट स्थायी है।',
          'गंभीर संग्राहक सूती दस्ताने पहनते हैं। यह अतिशयोक्ति नहीं है — बहुमूल्य सिक्कों के लिए यह मानक अभ्यास है और दस्ताने बहुत सस्ते होते हैं।',
          'और एक बात जो बार-बार कहनी पड़ती है: बात करते समय सिक्के के ऊपर मत झुकिए। साँस की नमी चाँदी पर धब्बे छोड़ती है, और यह सचमुच होता है।',
        ],
        pEn: [
          'Always hold a coin by its edges, between thumb and forefinger, and keep your fingers off the faces. Skin oils and perspiration leave marks on metal that surface visibly months later.',
          'Work over a soft cloth or padded surface. A coin dropped onto glass or stone takes a knock to the rim, and that injury is permanent.',
          'Serious collectors wear cotton gloves. This is not an affectation — for valuable pieces it is standard practice, and gloves cost very little.',
          'And one point that bears repeating: do not lean over a coin while talking. The moisture in your breath spots silver, and it genuinely happens.',
        ],
      },
      {
        hHi: 'एल्बम, ट्रे और प्रदर्शन',
        hEn: 'Albums, trays and display',
        pHi: [
          'संग्राहकों के लिए बने एल्बम सबसे व्यावहारिक विकल्प हैं — सिक्के क्रम में रहते हैं, दोनों तरफ़ देखे जा सकते हैं, और निकालने की ज़रूरत नहीं पड़ती। ख़रीदते समय पुष्टि कीजिए कि पॉकेट पीवीसी-रहित हैं।',
          'लकड़ी की ट्रे सुंदर लगती हैं और उनमें एक छिपा जोखिम है: कुछ लकड़ियाँ, ख़ासकर ओक, समय के साथ अम्लीय वाष्प छोड़ती हैं जो धातु पर असर डालती हैं। भीतर से अस्तर लगी ट्रे बेहतर हैं।',
          'प्रदर्शन के लिए फ़्रेम बनवाते समय दो बातें याद रखिए — सीधी धूप से दूर, और भीतर सिलिका जेल की जगह। धूप एल्बम के काग़ज़ को पीला करती है और कुछ धातुओं की टोनिंग बदल देती है।',
          'और सुरक्षा का एक व्यावहारिक पहलू: पूरा संग्रह एक ही जगह मत रखिए, ख़ासकर अगर उसमें कुछ महँगे सिक्के हैं।',
        ],
        pEn: [
          'Albums made for collectors are the most practical option — the coins stay in order, both faces can be seen, and nothing needs to be taken out. When buying, confirm that the pockets are PVC-free.',
          'Wooden trays look beautiful and carry a hidden risk: some timbers, oak in particular, release acidic vapours over time that act on metal. Trays lined on the inside are the better choice.',
          'If you frame part of a collection for display, remember two things — keep it out of direct sunlight, and leave room for a silica sachet inside. Sunlight yellows album paper and alters the toning of certain metals.',
          'And one practical point about security: do not keep an entire collection in one place, particularly if it contains a few expensive pieces.',
        ],
      },
      {
        hHi: 'रिकॉर्ड और उत्तराधिकार',
        hEn: 'Records and inheritance',
        pHi: [
          'एक साधारण सूची बनाइए — मूल्यवर्ग, वर्ष, टकसाल, दशा, ख़रीद का दाम और तारीख़, और स्रोत। छह कॉलम, और हर सिक्के पर तीस सेकंड।',
          'तस्वीरें भी लीजिए, दोनों तरफ़ की, सादे पृष्ठभूमि पर। चोरी या नुक़सान की स्थिति में यह अकेला दस्तावेज़ है जो काम आता है, और बीमा के लिए भी यही माँगा जाता है।',
          'सबसे उपेक्षित पहलू उत्तराधिकार है। परिवार में किसी को बताइए कि संग्रह कहाँ है, उसका मोटा मूल्य क्या है, और बेचना पड़े तो किससे संपर्क करना चाहिए।',
          'हर साल अनगिनत संग्रह इसीलिए कौड़ियों के मोल चले जाते हैं — क्योंकि जिनके हाथ आए उन्हें पता ही नहीं था कि वे क्या पकड़े हुए हैं। एक काग़ज़ इस पूरी समस्या को हल कर देता है।',
        ],
        pEn: [
          'Keep a simple list — denomination, year, mint, grade, purchase price and date, and source. Six columns, and thirty seconds per coin.',
          'Photograph them too, both faces, against a plain background. In the event of theft or damage this is the one document that helps, and it is what insurers ask for.',
          'The most neglected aspect is inheritance. Tell somebody in the family where the collection is, roughly what it is worth, and whom to approach if it ever has to be sold.',
          'Every year countless collections go for a pittance for exactly this reason — those who inherited them had no idea what they were holding. A single sheet of paper solves the whole problem.',
        ],
      },
    ],
  },
  {
    slug: 'fake-coins-detection',
    sections: [
      {
        hHi: 'नक़ल के तीन परिवार',
        hEn: 'The three families of fake',
        pHi: [
          'पहला परिवार — ढला हुआ (कास्ट) नक़ल। असली सिक्के से एक साँचा बनाकर उसमें पिघली धातु डाली जाती है। यह सबसे आम और सबसे आसानी से पकड़ा जाने वाला प्रकार है।',
          'दूसरा — ठोंका हुआ (स्ट्रक) नक़ल। जालसाज़ ख़ुद डाई बनाता है और असली प्रक्रिया की नक़ल करता है। यह कहीं ज़्यादा ख़तरनाक है, क्योंकि धातु का प्रवाह असली जैसा दिखता है; पकड़ने के लिए बारीक ब्योरों की तुलना करनी पड़ती है।',
          'तीसरा — बदला हुआ असली सिक्का। यहाँ सिक्का सचमुच असली है, पर उस पर तारीख़ या टकसाल-चिह्न बदल दिया गया है ताकि वह किसी दुर्लभ किस्म जैसा लगे। यह सबसे कठिन है, क्योंकि धातु, वज़न और पैटिना सब असली रहते हैं।',
          'तीनों के लिए अलग-अलग जाँच चाहिए, और यही कारण है कि कोई एक “जादुई परीक्षण” मौजूद नहीं है।',
        ],
        pEn: [
          'The first family is the cast fake. A mould is taken from a genuine coin and molten metal poured into it. This is the commonest type and the easiest to catch.',
          'The second is the struck fake. The forger cuts his own dies and imitates the real process. This is far more dangerous, because the metal flow looks authentic; catching it means comparing fine details.',
          'The third is the altered genuine coin. Here the piece really is genuine, but the date or mint mark has been changed so that it resembles a rare variety. This is the hardest of all, because the metal, the weight and the patina are all real.',
          'Each family requires a different check, which is why no single “magic test” exists.',
        ],
      },
      {
        hHi: 'वज़न — सबसे तेज़ जाँच',
        hEn: 'Weight — the fastest check',
        pHi: [
          'हर मानक सिक्के का एक निर्धारित वज़न होता है, और वह प्रकाशित है। ब्रिटिश भारत का चाँदी का रुपया लगभग 11.66 ग्राम, आधा रुपया उसका आधा, और इसी तरह आगे।',
          'जालसाज़ अक्सर सस्ती धातु का उपयोग करते हैं, जिसका घनत्व अलग होता है। नतीजा यह कि सही आकार का सिक्का बनाने पर वज़न ग़लत आता है, या सही वज़न रखने पर मोटाई अजीब हो जाती है।',
          'एक डिजिटल तराज़ू जो 0.01 ग्राम तक नापे, कुछ सौ रुपये का आता है और अधिकांश नक़लों को पहली ही जाँच में पकड़ लेता है। यह इस पूरे विषय का सबसे अच्छा निवेश है।',
          'ध्यान रहे कि घिसाव से वज़न कुछ कम हो सकता है — पर घिसा हुआ सिक्का देखने में भी घिसा दिखेगा। साफ़-सुथरा दिखने वाला हल्का सिक्का सीधा संदेह का विषय है।',
        ],
        pEn: [
          'Every standard coin has a defined weight, and that figure is published. The British India silver rupee sits at about 11.66 grams, the half rupee at half of that, and so on down the scale.',
          'Forgers frequently use cheaper metal of a different density. The result is that a coin of the correct size comes out at the wrong weight, or that keeping the correct weight makes the thickness odd.',
          'A digital scale reading to 0.01 gram costs a few hundred rupees and catches most forgeries at the very first check. It is the best investment in this entire subject.',
          'Bear in mind that wear reduces weight slightly — but a worn coin also looks worn. A crisp-looking coin that weighs light is straightforwardly suspicious.',
        ],
      },
      {
        hHi: 'किनारा और सतह',
        hEn: 'The edge and the surface',
        pHi: [
          'किनारा वह जगह है जहाँ ढली हुई नक़ल सबसे ज़्यादा ख़ुद को दिखाती है। साँचे से निकले सिक्के के किनारे पर एक बारीक सीवन (सीम) रह जाती है, जिसे घिसकर हटाया जाता है — और वही घिसाई असामान्य चिकनाई पैदा करती है।',
          'असली ठोंके हुए सिक्के का किनारा तीखा होता है, और अगर उस पर मिल्ड (धारीदार) डिज़ाइन है तो हर धारी समान गहराई और दूरी पर रहती है। नक़ल में ये धारियाँ अक्सर उथली या असमान होती हैं।',
          'सतह पर ढली हुई नक़ल छोटे-छोटे गड्ढे दिखाती है, जो पिघली धातु में फँसी हवा के बुलबुलों से बनते हैं। दस गुना आवर्धन के लूप से ये साफ़ नज़र आते हैं।',
          'और अक्षरों के किनारे देखिए। ठोंकने में धातु दबाव से बहती है, इसलिए अक्षर के किनारे तीखे और साफ़ होते हैं। ढलाई में वे नरम, गोल और थोड़े धुँधले लगते हैं।',
        ],
        pEn: [
          'The edge is where a cast fake gives itself away most readily. A coin released from a mould keeps a fine seam along its rim, which is then filed away — and that filing produces an unnatural smoothness.',
          'A genuine struck coin has a sharp edge, and where a milled design is present every reeding sits at the same depth and spacing. On a forgery these are frequently shallow or irregular.',
          'On the surface, a cast fake shows small pits formed by air bubbles trapped in the molten metal. Under a ten-times loupe they are plainly visible.',
          'And look at the edges of the lettering. Striking makes metal flow under pressure, so letters have sharp, clean edges. Casting leaves them soft, rounded and slightly blurred.',
        ],
      },
      {
        hHi: 'आवाज़ और चुंबक',
        hEn: 'Sound and the magnet',
        pHi: [
          'चाँदी के सिक्के को उँगली पर संतुलित करके हल्के से ठोकिए — वह एक लंबी, साफ़, ऊँची आवाज़ देता है जो कुछ सेकंड तक गूँजती है। सीसे या मिश्रित धातु की नक़ल एक छोटी, भोथरी “ठक” देती है।',
          'यह परीक्षण पुराना है और अनुभव माँगता है, इसलिए पहले कुछ असली सिक्कों पर अभ्यास कीजिए ताकि कान को अंतर मालूम हो जाए। और सिक्का किसी नरम सतह के ऊपर रखकर कीजिए, ताकि गिरने पर नुक़सान न हो।',
          'चुंबक का परीक्षण और भी सरल है। चाँदी, सोना, ताँबा, निकल और एल्युमिनियम — इनमें से कोई भी चुंबक से नहीं चिपकता। अगर कोई सिक्का जो चाँदी का होना चाहिए चुंबक से चिपक जाए, तो सवाल वहीं ख़त्म हो जाता है।',
          'उल्टी बात भी सच है: कुछ आधुनिक भारतीय सिक्के स्टेनलेस स्टील के हैं और उन्हें चुंबक खींचता है। इसलिए यह परीक्षण जानकारी के साथ ही उपयोगी है।',
        ],
        pEn: [
          'Balance a silver coin on a fingertip and tap it lightly — it gives a long, clear, high note that rings for a couple of seconds. A lead or alloy forgery gives a short, dull thud.',
          'This test is old and needs experience, so practise first on coins you know to be genuine until your ear learns the difference. And do it over a soft surface, so a slip costs nothing.',
          'The magnet test is simpler still. Silver, gold, copper, nickel and aluminium are all non-magnetic. If a coin that should be silver clings to a magnet, the question ends there.',
          'The reverse also holds: several modern Indian coins are stainless steel and a magnet does attract them. So the test is only useful alongside knowing what the coin should be.',
        ],
      },
      {
        hHi: 'तुलना ही सबसे बड़ा हथियार है',
        hEn: 'Comparison is the greatest weapon',
        pHi: [
          'सारे तकनीकी परीक्षणों से ऊपर एक सरल तरीक़ा है: संदिग्ध सिक्के की तुलना उसी किस्म के असली सिक्के से कीजिए, अच्छी रोशनी में, साथ-साथ रखकर।',
          'देखिए कि अक्षरों का आकार और दूरी मिलती है या नहीं, तारीख़ के अंक एक जैसे बने हैं या नहीं, और डिज़ाइन के छोटे ब्योरे — बालों की लटें, पत्तियों की नसें — कितने साफ़ हैं।',
          'जालसाज़ बड़ी तस्वीर सही बना लेते हैं; वे छोटे ब्योरों पर पकड़े जाते हैं। एक ही डाई से बने असली सिक्कों में ये ब्योरे हमेशा एक जैसे होते हैं।',
          'अगर तुलना के लिए असली सिक्का उपलब्ध न हो, तो अच्छे कैटलॉग की उच्च-गुणवत्ता तस्वीरें काम आती हैं। यह आदर्श नहीं है, पर कुछ न होने से कहीं बेहतर है।',
        ],
        pEn: [
          'Above all the technical tests sits one simple method: compare the suspect coin against a genuine example of the same type, in good light, placed side by side.',
          'Look at whether the shape and spacing of the letters match, whether the digits of the date are formed identically, and how crisp the small details are — locks of hair, the veins of a leaf.',
          'Forgers get the large picture right; they are caught on the small details. Genuine coins from the same die always agree on these.',
          'Where no genuine coin is available for comparison, high-quality photographs in a good catalogue serve. It is not ideal, and it is considerably better than nothing.',
        ],
      },
      {
        hHi: 'कब विशेषज्ञ के पास जाएँ',
        hEn: 'When to go to an expert',
        pHi: [
          'तीन स्थितियों में घर की जाँच पर मत रुकिए। पहली — जब सिक्का महँगा हो। दूसरी — जब वह किसी दुर्लभ किस्म का दावा करता हो, क्योंकि दुर्लभ किस्मों की ही सबसे ज़्यादा नक़ल बनती है।',
          'तीसरी — जब कुछ सही न लग रहा हो, पर आप बता न पा रहे हों कि क्या। यह अनुभवी संग्राहकों का सबसे भरोसेमंद संकेत होता है, और इसे नज़रअंदाज़ नहीं करना चाहिए।',
          'प्रतिष्ठित डीलर, संग्राहक समितियों के वरिष्ठ सदस्य, और अंतरराष्ट्रीय ग्रेडिंग सेवाएँ — तीनों विकल्प मौजूद हैं। ग्रेडिंग महँगी है, इसलिए उसे तब चुनिए जब सिक्के का मूल्य उसे उचित ठहराए।',
          'और सबसे सस्ता बचाव अंत में यही है: उससे ख़रीदिए जिसकी साख आपसे बड़ी है। एक भरोसेमंद विक्रेता का नाम हर परीक्षण से ज़्यादा सुरक्षा देता है।',
        ],
        pEn: [
          'In three situations do not stop at the checks you can do at home. The first is when the coin is expensive. The second is when it claims to be a rare variety, because rare varieties attract the most forgery.',
          'The third is when something feels wrong and you cannot say what. That instinct is the most reliable signal experienced collectors have, and it should not be dismissed.',
          'Reputable dealers, senior members of collectors’ societies, and international grading services are all available. Grading costs money, so choose it when the coin’s value justifies the fee.',
          'And the cheapest protection of all is this: buy from somebody whose reputation is larger than yours. The name of a trustworthy seller offers more security than any test.',
        ],
      },
    ],
  },
  {
    slug: 'rupiya-ka-janm-sher-shah',
    sections: [
      {
        hHi: 'शेर शाह का सुधार क्यों टिका',
        hEn: 'Why Sher Shah’s reform lasted',
        pHi: [
          'शेर शाह सूरी ने केवल पाँच वर्ष शासन किया, और उसी छोटी अवधि में उन्होंने एक ऐसी मुद्रा-व्यवस्था खड़ी की जो पाँच सौ साल चली। यह अपने आप में विचारणीय बात है।',
          'सफलता का कारण मानकीकरण था। उन्होंने चाँदी के सिक्के का वज़न लगभग 178 ग्रेन तय किया, शुद्धता निश्चित की, और ताँबे के दाम तथा सोने की मोहर के साथ उसका अनुपात स्पष्ट किया।',
          'उससे पहले की व्यवस्था में मूल्यवर्ग उलझे हुए थे और अलग-अलग क्षेत्रों में अलग-अलग मानक चलते थे। व्यापारी को हर सौदे में धातु तौलनी पड़ती थी। शेर शाह ने उस अनिश्चितता को हटाया, और यही वह चीज़ है जिसे बाज़ार ने अपनाया।',
          'यही कारण है कि मुग़लों ने इसे बदलने के बजाय अपनाया, और उनके बाद ब्रिटिश ने भी इसी नींव पर अपनी मुद्रा खड़ी की।',
        ],
        pEn: [
          'Sher Shah Suri ruled for only five years, and within that short span he built a monetary system that lasted five hundred. That fact alone deserves attention.',
          'The reason it succeeded was standardisation. He fixed the weight of the silver coin at roughly 178 grains, set its purity, and made its ratio to the copper dam and the gold mohur explicit.',
          'The arrangement before him had tangled denominations and different standards in different regions. A merchant had to weigh metal at every transaction. Sher Shah removed that uncertainty, and it is exactly what the market adopted.',
          'This is why the Mughals adopted the system rather than replacing it, and why the British after them built their own currency on the same foundation.',
        ],
      },
      {
        hHi: 'नाम की यात्रा',
        hEn: 'The journey of the name',
        pHi: [
          '“रुपिया” शब्द संस्कृत के “रूप्य” से आया है, जिसका अर्थ है चाँदी या गढ़ा हुआ चाँदी। नाम ही बताता है कि यह मूलतः एक चाँदी का सिक्का था।',
          'वहाँ से यह शब्द उपमहाद्वीप से बाहर निकला। इंडोनेशिया का “रुपिया”, मालदीव का “रुफ़िया”, श्रीलंका, नेपाल, पाकिस्तान, मॉरीशस और सेशेल्स की मुद्राएँ — सबकी जड़ इसी एक सिक्के में है।',
          'यह व्यापार का प्रमाण है। नाम वहीं फैलता है जहाँ सिक्का पहुँचता है, और रुपिया हिंद महासागर के व्यापारिक मार्गों पर सदियों तक चला।',
          'आज दुनिया में कई सौ करोड़ लोग जिस मुद्रा का नाम रोज़ बोलते हैं, वह सोलहवीं सदी के एक अफ़ग़ान सुल्तान के सुधार से निकला है — यह इतिहास की उन कड़ियों में से है जो सबसे लंबी टिकीं।',
        ],
        pEn: [
          'The word “rupiya” comes from the Sanskrit rupya, meaning silver or wrought silver. The name itself declares that this was originally a silver coin.',
          'From there the word travelled beyond the subcontinent. Indonesia’s rupiah, the Maldivian rufiyaa, and the currencies of Sri Lanka, Nepal, Pakistan, Mauritius and the Seychelles all trace back to this single coin.',
          'This is evidence of trade. A name spreads where the coin reaches, and the rupiya travelled the Indian Ocean routes for centuries.',
          'Several hundred crore people today speak the name of a currency that emerged from the reform of a sixteenth-century Afghan sultan — one of the longest-surviving links in history.',
        ],
      },
      {
        hHi: 'सड़क, डाक और बाक़ी सुधार',
        hEn: 'Roads, post, and the other reforms',
        pHi: [
          'मुद्रा शेर शाह के सुधारों में से एक थी, और उन्हें अलग से देखना पूरी तस्वीर नहीं देता। उन्होंने ग्रैंड ट्रंक रोड को पुनर्जीवित किया, जो बंगाल से काबुल तक फैली और आज भी उसी मार्ग पर चलती है।',
          'उन्होंने सड़क के किनारे सराय बनवाईं — यात्रियों के ठहरने की जगह, जो साथ ही डाक-चौकी का काम करती थीं। घोड़ों की व्यवस्था से संदेश उल्लेखनीय गति से एक छोर से दूसरे छोर पहुँचते थे।',
          'भूमि-राजस्व की व्यवस्था भी उन्हीं की देन है, जिसमें ज़मीन की माप के आधार पर कर तय होता था। अकबर के समय के प्रसिद्ध राजस्व सुधार इसी ढाँचे पर खड़े हुए।',
          'यह जुड़ाव महत्वपूर्ण है: सिक्का अकेले नहीं चलता। मानक मुद्रा, सुरक्षित सड़क और भरोसेमंद डाक — तीनों मिलकर व्यापार को वह ढाँचा देते हैं जिसमें वह बढ़ सके।',
        ],
        pEn: [
          'Currency was one of Sher Shah’s reforms, and looking at it alone gives an incomplete picture. He revived the Grand Trunk Road, which ran from Bengal to Kabul and still follows the same course today.',
          'He built sarais along it — resting places for travellers that doubled as postal stations. With relays of horses, messages crossed the country at a remarkable speed for the period.',
          'The land revenue system was his as well, with tax assessed on measured land. The famous revenue reforms of Akbar’s time were built on that framework.',
          'The connection matters: a coin does not work on its own. A standard currency, a safe road and a dependable post together give trade the structure it needs in order to grow.',
        ],
      },
      {
        hHi: 'ये सिक्के आज कैसे मिलते हैं',
        hEn: 'How these coins turn up today',
        pHi: [
          'शेर शाह के चाँदी के रुपये आज भी मिलते हैं, हालाँकि आम नहीं हैं। उनका शासन छोटा था, इसलिए ढलाई की कुल संख्या मुग़ल सिक्कों की तुलना में सीमित रही।',
          'पहचान के लिए मुख्य सूत्र लिखावट है — फ़ारसी और कुछ पर देवनागरी दोनों में, जिस पर उनका नाम और उपाधि दर्ज है। टकसाल का नाम भी आमतौर पर मौजूद रहता है।',
          'दाम दशा और टकसाल पर निर्भर करता है, और अच्छी दशा के नमूने ठीक-ठाक क़ीमत माँगते हैं। सूरी वंश के बाक़ी शासकों के सिक्के अपेक्षाकृत सस्ते मिलते हैं और उसी परंपरा का हिस्सा हैं।',
          'ख़रीदते समय वही सावधानियाँ लागू होती हैं जो हर पुराने सिक्के पर — वज़न जाँचिए, किनारा देखिए, और महँगे नमूने के लिए प्रमाणन कराइए।',
        ],
        pEn: [
          'Sher Shah’s silver rupees still turn up, though they are not common. His reign was short, so the total struck remained limited beside the Mughal output that followed.',
          'The main clue to identification is the inscription — in Persian, and on some issues in Devanagari as well, carrying his name and titles. The mint name is usually present too.',
          'Price depends on condition and mint, and examples in good grade command a fair sum. Coins of the other Suri rulers are comparatively affordable and belong to the same tradition.',
          'When buying, the usual cautions apply as with any old coin — check the weight, examine the edge, and have an expensive example certified.',
        ],
      },
      {
        hHi: 'एक सिक्का जो दस्तावेज़ है',
        hEn: 'A coin that is also a document',
        pHi: [
          'इस सिक्के का असली महत्व उसकी बाज़ारू क़ीमत नहीं है। यह एक भौतिक दस्तावेज़ है — यह बताता है कि पाँच सौ साल पहले इस उपमहाद्वीप में प्रशासन किस स्तर का था।',
          'एक मानक वज़न तय करना, उसे सैकड़ों टकसालों में लागू करवाना, और उसे इतना भरोसेमंद बनाना कि व्यापारी बिना तौले स्वीकार करें — यह आधुनिक अर्थ में एक संस्था खड़ी करना है।',
          'और यह संस्था अपने निर्माता से बहुत आगे तक चली। वंश गिरे, साम्राज्य बदले, उपनिवेश आया और गया — पर सिक्के का नाम और उसका बुनियादी ढाँचा टिका रहा।',
          'इसीलिए जब आप आज “रुपया” कहते हैं, तो आप एक ऐसे शब्द का उपयोग कर रहे हैं जो शेर शाह के पाँच वर्षों से निकलकर आपके पास पहुँचा है।',
        ],
        pEn: [
          'The real importance of this coin is not its market price. It is a physical document — it tells us what level of administration existed in this subcontinent five hundred years ago.',
          'To fix a standard weight, to enforce it across hundreds of mints, and to make it trusted enough that merchants accepted it without weighing, is to build an institution in the modern sense.',
          'And that institution outlived its maker by a very long way. Dynasties fell, empires changed, colonial rule came and went — and the name of the coin and its basic framework held.',
          'So when you say “rupee” today, you are using a word that has reached you out of Sher Shah’s five years.',
        ],
      },
    ],
  },
  {
    slug: 'punch-marked-coins-ancient-india',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'ढाई हज़ार साल पुरानी चाँदी, अनियमित आकार, पाँच अलग-अलग ठोंके गए प्रतीक, और लगभग 3.4 ग्राम का मानक वज़न — यही आहत सिक्के की पहचान है।',
        ],
        pEn: [
          'Silver two and a half thousand years old, irregular in shape, five symbols each punched separately, and a standard weight of roughly 3.4 grams — that is the signature of a punch-marked coin, and it is also the checklist you carry into any purchase.',
        ],
      },
    ],
  },
  {
    slug: 'small-coins-25-50-paise',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          '2011 में 25 पैसे और उससे छोटे सिक्के चलन से हटे, और उसी दिन वे मुद्रा से स्मृति बन गए। अब उनकी संख्या कभी नहीं बढ़ेगी।',
          'रखने लायक़ वे हैं जो अच्छी दशा में हों, कम ढलाई वाले वर्ष के हों, या जिन पर असली एरर हो। बाक़ी अधिकांश आज भी सस्ते हैं, और उनके बारे में किए गए “लाखों में बिकेगा” वाले दावे बिना अपवाद झूठे हैं।',
        ],
        pEn: [
          'In 2011 the 25 paise and everything below it left circulation, and on that day they turned from currency into memory. Their number can never grow again.',
          'The ones worth putting away are those in good condition, those from low-mintage years, and those carrying a genuine error. Most of the rest remain cheap, and the “this sells for lakhs” claims made about them are false without exception — the structure of that trap is always an advance fee.',
        ],
      },
    ],
  },
  {
    slug: 'rupiya-ka-janm-sher-shah',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'शेर शाह सूरी ने पाँच वर्षों में चाँदी के सिक्के का वज़न, शुद्धता और अनुपात तय किया, और वही मानक पाँच सौ साल चला।',
          'नाम संस्कृत “रूप्य” से आया, और व्यापार के साथ इंडोनेशिया, मालदीव, नेपाल, श्रीलंका और मॉरीशस तक पहुँचा। मुग़लों ने इसे बदला नहीं, अपनाया; ब्रिटिश ने भी इसी नींव पर अपनी मुद्रा खड़ी की।',
        ],
        pEn: [
          'In five years Sher Shah Suri fixed the weight, the purity and the ratios of the silver coin, and that standard then held for five hundred years.',
          'The name came from the Sanskrit rupya, and it travelled with trade as far as Indonesia, the Maldives, Nepal, Sri Lanka and Mauritius. The Mughals did not replace the system but adopted it, and the British in turn built their own currency on the same foundation.',
        ],
      },
    ],
  },
  {
    slug: 'gupta-swarn-mudra',
    sections: [
      {
        hHi: 'सोने का सिक्का किस परंपरा से निकला',
        hEn: 'Which tradition the gold coin came out of',
        pHi: [
          'गुप्त सम्राटों ने सोने का सिक्का शून्य से नहीं गढ़ा। उनसे पहले कुषाणों ने उत्तर भारत में सोने की मुद्रा चलाई थी, और कुषाणों ने वह विचार रोमन दीनार से लिया था, जो व्यापार के रास्ते भारत पहुँचता था।',
          'यही कारण है कि गुप्त सिक्के को भी “दीनार” कहा गया, हालाँकि उसका वज़न और शैली भारतीय हो गई। शुरुआती गुप्त सिक्कों का वज़न कुषाण मानक के आसपास रहा, और बाद में यह बढ़कर लगभग 9.2 ग्राम के भारतीय सुवर्ण मानक तक पहुँचा।',
          'पर जो चीज़ उधार नहीं ली गई, वह है विषय-वस्तु। रोमन सिक्के पर सम्राट का चेहरा होता था; गुप्त सिक्के पर सम्राट कुछ करता हुआ दिखता है — धनुष चलाते, वीणा बजाते, सिंह से लड़ते, अश्वमेध का घोड़ा छोड़ते।',
          'यह अंतर मामूली नहीं है। चित्र से दृश्य की ओर यह छलांग ही वह चीज़ है जिसके कारण गुप्त मुद्रा को भारतीय सिक्का-कला का शिखर कहा जाता है।',
        ],
        pEn: [
          'The Gupta emperors did not invent gold coinage from nothing. Before them the Kushans had circulated gold in northern India, and the Kushans had taken the idea from the Roman denarius, which reached India along the trade routes.',
          'This is why the Gupta coin was also called a dinara, although its weight and style became thoroughly Indian. The earliest Gupta issues sat near the Kushan standard, and later ones rose to roughly 9.2 grams, the Indian suvarna standard.',
          'What was not borrowed is the subject matter. A Roman coin showed the emperor’s face; a Gupta coin shows the emperor doing something — drawing a bow, playing a veena, fighting a lion, releasing the horse of the ashvamedha.',
          'That difference is not a small one. The leap from portrait to scene is precisely why Gupta coinage is called the summit of Indian coin art.',
        ],
      },
      {
        hHi: 'हर सिक्का एक दृश्य',
        hEn: 'Every coin a scene',
        pHi: [
          'समुद्रगुप्त की वीणा वाली मुद्रा सबसे प्रसिद्ध है — सम्राट एक ऊँची पीठ वाले आसन पर बैठा वीणा बजा रहा है। यह किसी विजय का चित्रण नहीं, बल्कि यह घोषणा है कि शासक कलाकार भी है।',
          'उसी शासक की व्याघ्रहंता मुद्रा में वह बाघ का शिकार कर रहा है, और अश्वमेध मुद्रा में यज्ञ का घोड़ा एक यूप-स्तंभ के सामने खड़ा है, पीछे रानी। हर प्रकार एक अलग सार्वजनिक संदेश देता है।',
          'चंद्रगुप्त द्वितीय की छत्र मुद्रा में एक सेवक सम्राट के सिर पर छत्र थामे है; सिंहनिहंता मुद्रा में वह सिंह से लड़ रहा है। कुमारगुप्त की मयूर मुद्रा में कार्तिकेय का मोर है।',
          'पिछली तरफ़ प्रायः लक्ष्मी या दुर्गा बैठी होती हैं, और किनारे पर संस्कृत में एक छोटी काव्य-पंक्ति चलती है, जो शासक की प्रशंसा करती है। सिक्का पढ़ने लायक़ भी है और देखने लायक़ भी।',
        ],
        pEn: [
          'Samudragupta’s veena type is the most celebrated — the emperor seated on a high-backed couch, playing the instrument. It depicts no victory; it announces that the ruler is also an artist.',
          'The same ruler’s tiger-slayer type shows him hunting, and the ashvamedha type shows the sacrificial horse standing before a yupa post, with the queen behind. Each type carries a different public message.',
          'Chandragupta II’s chhatra type has an attendant holding a parasol above the emperor; his lion-slayer type shows him in combat with a lion. Kumaragupta’s peacock type carries the bird of Kartikeya.',
          'The reverse usually seats Lakshmi or Durga, and a short Sanskrit line runs around the margin in praise of the ruler. The coin is meant to be read as well as looked at.',
        ],
      },
      {
        hHi: 'लिखावट और तारीख़ पढ़ना',
        hEn: 'Reading the legend and the date',
        pHi: [
          'गुप्त सिक्कों की लिपि ब्राह्मी है, और भाषा संस्कृत। किनारे पर चलने वाली पंक्ति अक्सर छंद में होती है — जैसे समुद्रगुप्त के लिए “अप्रतिरथः” अर्थात जिसका कोई प्रतिद्वंद्वी नहीं।',
          'पिछली तरफ़ आमतौर पर एक छोटा शब्द होता है जो सिक्के के प्रकार का नाम बताता है, जैसे “पराक्रमः”, “व्याघ्रपराक्रमः”, “कृतान्तपरशुः”। संग्राहक इन्हीं शब्दों से प्रकार पहचानते हैं।',
          'गुप्त सिक्कों पर तारीख़ आमतौर पर नहीं होती, जो मुग़ल सिक्कों से एक बड़ा अंतर है। कालक्रम शासक के नाम, शैली और वज़न के विकास से तय किया जाता है।',
          'शुरुआत करने वाले के लिए ब्राह्मी सीखना ज़रूरी नहीं। कुछ मुख्य शब्दों का आकार पहचान लेना काफ़ी है, और अच्छे कैटलॉग में हर प्रकार की तस्वीर के साथ पाठ दिया रहता है।',
        ],
        pEn: [
          'The script on Gupta coins is Brahmi and the language is Sanskrit. The line running around the margin is often metrical — for Samudragupta, apratirathah, meaning the one who has no rival.',
          'The reverse usually carries a single short word naming the type, such as parakramah, vyaghraparakramah or kritantaparashuh. Collectors identify types by these words.',
          'Gupta coins normally carry no date, which is a large difference from Mughal coinage. Their chronology is established from the ruler’s name, the style, and the development of the weight standard.',
          'A beginner does not need to learn Brahmi. Recognising the shape of a few key words is enough, and a good catalogue prints the reading alongside a photograph of every type.',
        ],
      },
      {
        hHi: 'सोने की शुद्धता और साम्राज्य का हाल',
        hEn: 'Gold purity, and the state of the empire',
        pHi: [
          'यहाँ एक दिलचस्प बात है जो सिक्कों को इतिहास का दस्तावेज़ बनाती है: गुप्त सोने के सिक्कों की शुद्धता समय के साथ गिरती गई।',
          'शुरुआती सिक्के बहुत उच्च शुद्धता के हैं। बाद के शासकों — विशेषकर स्कंदगुप्त के बाद के दौर — के सिक्कों में सोने के साथ चाँदी और ताँबे का अनुपात बढ़ता जाता है, जबकि वज़न बढ़ा दिया गया।',
          'यह आर्थिक दबाव का सीधा प्रमाण है। हूण आक्रमणों और आंतरिक विघटन के दौर में ख़ज़ाने पर बोझ बढ़ा, और सिक्का उसका सबसे ईमानदार गवाह बन गया।',
          'इसीलिए इतिहासकार गुप्त मुद्रा को केवल कला के लिए नहीं, अर्थव्यवस्था के मापक के रूप में भी पढ़ते हैं। धातु झूठ नहीं बोलती।',
        ],
        pEn: [
          'Here is a detail that turns these coins into historical documents: the purity of Gupta gold declined over time.',
          'The earliest issues are of very high fineness. Coins of the later rulers — particularly the period after Skandagupta — carry a rising proportion of silver and copper alongside the gold, even as the overall weight was increased.',
          'This is direct evidence of economic pressure. During the Huna invasions and the internal fragmentation that followed, the treasury came under strain, and the coinage became its most honest witness.',
          'This is why historians read Gupta coinage not only as art but as a measure of the economy. Metal does not lie.',
        ],
      },
      {
        hHi: 'आम संग्राहक के लिए रास्ता',
        hEn: 'A path for the ordinary collector',
        pHi: [
          'ईमानदार बात पहले: गुप्त सोने के सिक्के महँगे हैं। सोने का अपना मूल्य, ऐतिहासिक महत्व, और सीमित संख्या — तीनों मिलकर इन्हें अधिकांश बजट से बाहर रखते हैं।',
          'पर रास्ता बंद नहीं है। गुप्त काल के चाँदी के सिक्के मौजूद हैं, ख़ासकर पश्चिमी क्षत्रपों को हराने के बाद चंद्रगुप्त द्वितीय द्वारा जारी की गई चाँदी की मुद्रा, जो अपेक्षाकृत सुलभ है।',
          'ताँबे के गुप्त सिक्के भी हैं और वे सबसे सस्ते हैं। इनकी कला सोने जितनी परिष्कृत नहीं, पर वे उसी साम्राज्य की, उसी शताब्दी की वस्तु हैं।',
          'और एक और रास्ता: कुषाण सोने के सिक्के, जिनसे गुप्त परंपरा निकली, अक्सर गुप्त सिक्कों से कम दाम पर मिल जाते हैं और उसी कहानी का पहला अध्याय हैं।',
        ],
        pEn: [
          'The honest point first: Gupta gold is expensive. The value of the metal, the historical importance, and the limited number surviving together place these outside most budgets.',
          'But the door is not closed. Silver coinage of the Gupta period exists, particularly the silver issued by Chandragupta II after defeating the Western Kshatrapas, and it is comparatively accessible.',
          'Copper Gupta coins exist too and are the cheapest of all. Their art is not as refined as the gold, but they are objects of the same empire and the same century.',
          'And there is one more route: Kushan gold, from which the Gupta tradition emerged, often costs less than Gupta gold and is the opening chapter of the same story.',
        ],
      },
      {
        hHi: 'नक़ल की चेतावनी',
        hEn: 'A warning about forgeries',
        pHi: [
          'सोने के प्राचीन सिक्के दुनिया के सबसे ज़्यादा नक़ल किए जाने वाले संग्रह-वस्तुओं में हैं, और गुप्त मुद्रा इसका अपवाद नहीं।',
          'आधुनिक नक़लें अक्सर सही वज़न और सही सोने की शुद्धता के साथ बनाई जाती हैं, इसलिए साधारण परीक्षण उन्हें नहीं पकड़ते। पकड़ शैली में होती है — आकृतियों का अनुपात, ब्राह्मी अक्षरों का आकार, और धातु के बहाव की बारीकी।',
          'इसलिए इस क्षेत्र में एक नियम बिना अपवाद लागू होता है: बिना प्रमाणन के महँगा गुप्त सिक्का मत ख़रीदिए, और स्रोत के बारे में पूछिए।',
          'यह सलाह उबाऊ लगती है, और यही वह सलाह है जो इस क्षेत्र में सबसे ज़्यादा पैसा बचाती है।',
        ],
        pEn: [
          'Ancient gold coins are among the most forged collectables in the world, and Gupta coinage is no exception to that.',
          'Modern forgeries are frequently made at the correct weight and in gold of the correct fineness, so ordinary tests do not catch them. They are caught on style — the proportions of the figures, the shapes of the Brahmi letters, and the fine character of the metal flow.',
          'So one rule applies here without exception: do not buy an expensive Gupta coin without certification, and ask about its provenance.',
          'That advice sounds dull, and it is the advice that saves the most money in this particular field.',
        ],
      },
    ],
  },
  {
    slug: 'victoria-rupee-pehchan',
    sections: [
      {
        hHi: 'क्वीन से एम्प्रेस: सबसे तेज़ पहचान',
        hEn: 'Queen to Empress: the fastest identification',
        pHi: [
          'विक्टोरिया के सिक्कों को दो हिस्सों में बाँटने का सबसे तेज़ तरीक़ा उपाधि पढ़ना है। 1862 से 1876 तक सिक्के पर “VICTORIA QUEEN” लिखा मिलेगा; 1877 से 1901 तक “VICTORIA EMPRESS”।',
          'यह बदलाव 1876 के रॉयल टाइटल्स एक्ट से आया, जिसके बाद विक्टोरिया को भारत की सम्राज्ञी घोषित किया गया। सिक्का उस राजनीतिक निर्णय का सबसे सीधा भौतिक प्रमाण है।',
          'दोनों दौर के चित्र भी अलग हैं। क्वीन दौर का चित्र युवा है, और एम्प्रेस दौर में मुकुट और आवरण के साथ अधिक औपचारिक। एक बार दोनों देख लेने पर अंतर तुरंत पकड़ में आता है।',
          'संग्रह की दृष्टि से यह विभाजन उपयोगी है, क्योंकि “क्वीन” दौर छोटा है — केवल पंद्रह वर्ष — और इसीलिए उसके सिक्के अपेक्षाकृत कम मिलते हैं।',
        ],
        pEn: [
          'The fastest way to split Victoria’s coinage in two is to read the title. From 1862 to 1876 the coin says “VICTORIA QUEEN”; from 1877 to 1901 it says “VICTORIA EMPRESS”.',
          'The change came from the Royal Titles Act of 1876, after which Victoria was proclaimed Empress of India. The coin is the most direct physical evidence of that political decision.',
          'The portraits differ as well. The Queen period shows a younger head; the Empress period is more formal, with crown and veil. Once you have seen both, the difference registers instantly.',
          'For collecting purposes the split is useful, because the Queen period is short — only fifteen years — and its coins are correspondingly less common.',
        ],
      },
      {
        hHi: 'टकसाल चिह्न कहाँ और क्या',
        hEn: 'The mint marks: where, and which',
        pHi: [
          'तारीख़ के ठीक नीचे देखिए। बंबई टकसाल ने एक छोटा हीरा (डायमंड) छोड़ा, और कलकत्ता ने आमतौर पर कोई चिह्न नहीं — यानी चिह्न का न होना ही कलकत्ता की पहचान है।',
          'यह सुनने में उल्टा लगता है और यही इस क्षेत्र की पहली सीख है: अनुपस्थिति भी सूचना है। नए संग्राहक अक्सर बिना चिह्न वाले सिक्के को “अधूरा” मान लेते हैं, जबकि वह पूरी तरह सामान्य है।',
          'कुछ वर्षों में बंबई का चिह्न बिंदु के रूप में भी मिलता है, और कुछ किस्मों में उसका स्थान थोड़ा बदला हुआ है। ये छोटे अंतर ही कैटलॉग में अलग किस्में बनाते हैं।',
          'चिह्न देखने के लिए दस गुना आवर्धन का लूप और अच्छी रोशनी काफ़ी है। सिक्के को घुमाते हुए देखिए, क्योंकि चिह्न बहुत घिस चुका हो तो केवल एक कोण पर पकड़ में आता है।',
        ],
        pEn: [
          'Look immediately below the date. The Bombay mint left a small diamond, and Calcutta usually left no mark at all — meaning the absence of a mark is itself the Calcutta identifier.',
          'That sounds inverted, and it is the first lesson of this field: absence is also information. New collectors often treat an unmarked coin as incomplete, when it is entirely normal.',
          'In some years the Bombay mark appears as a dot instead, and in certain varieties its position shifts slightly. These small differences are what separate varieties in the catalogues.',
          'A ten-times loupe and good light are enough to find the mark. Rotate the coin while looking, because a heavily worn mark shows up at only one angle.',
        ],
      },
      {
        hHi: 'मूल्यवर्ग की पूरी सीढ़ी',
        hEn: 'The full ladder of denominations',
        pHi: [
          'विक्टोरिया दौर में चाँदी के मूल्यवर्ग थे: रुपया, आधा रुपया, चौथाई रुपया और दो आना। ताँबे में क्वार्टर आना, आधा पाइस, और बारहवाँ आना (एक पाई) मिलते हैं।',
          'चाँदी का रुपया लगभग 11.66 ग्राम का है और उसकी शुद्धता .917 — यही वह सिक्का है जिसे लोग सबसे ज़्यादा खोजते हैं और जिसकी सबसे ज़्यादा नक़ल बनती है।',
          'ताँबे के छोटे सिक्के अत्यंत सुलभ हैं और शुरुआत के लिए आदर्श। ये कुछ सौ रुपये में मिल जाते हैं, इनकी संख्या भरपूर है, और इन्हीं पर आँख बनाना सबसे सस्ता तरीक़ा है।',
          'एक व्यावहारिक सुझाव: “एक वर्ष, सारे मूल्यवर्ग” का लक्ष्य इस दौर के लिए बहुत अच्छा काम करता है। यह सीमित है, सस्ता है, और पूरा होने पर एक क्षण का चित्र बनाता है।',
        ],
        pEn: [
          'The silver denominations of the Victoria period were the rupee, half rupee, quarter rupee and two annas. In copper there are the quarter anna, half pice, and one twelfth of an anna, the pie.',
          'The silver rupee weighs about 11.66 grams at .917 fineness — the coin people search for most and the one most frequently forged.',
          'The small copper pieces are extremely accessible and ideal for a beginner. They cost a few hundred rupees, they survive in quantity, and building your eye on them is the cheapest route there is.',
          'A practical suggestion: the “one year, every denomination” target works very well for this period. It is bounded, it is affordable, and once complete it forms a portrait of a single moment.',
        ],
      },
      {
        hHi: 'दशा कैसे परखें',
        hEn: 'How to judge condition',
        pHi: [
          'विक्टोरिया के चित्र पर घिसाव सबसे पहले तीन जगह दिखता है: गाल की हड्डी, बालों की ऊपरी लट, और मुकुट या आवरण का सबसे ऊँचा हिस्सा।',
          'पिछली तरफ़ अक्षरों के ऊपरी किनारे और पुष्प-अलंकरण की नोकें पहले चपटी होती हैं। इन पाँच बिंदुओं को याद रखिए — यही ग्रेडिंग का व्यावहारिक नक़्शा है।',
          'लस्टर देखने के लिए सिक्के को एक ही रोशनी के नीचे धीरे-धीरे घुमाइए। असली लस्टर में चमक का एक चक्र सतह पर घूमता है; पॉलिश की गई सतह पूरी एक साथ चमकती है और सपाट लगती है।',
          'और वही नियम जो हर बार दोहराना पड़ता है: कभी साफ़ मत कीजिए। इस दौर के बहुत-से सिक्के इसी एक ग़लती से अपनी आधी से ज़्यादा क़ीमत खो चुके हैं।',
        ],
        pEn: [
          'On the Victoria portrait, wear shows first in three places: the cheekbone, the uppermost lock of hair, and the highest point of the crown or veil.',
          'On the reverse, the upper edges of the lettering and the tips of the floral ornament flatten earliest. Remember those five points — that is the practical map of grading for this series.',
          'To judge lustre, rotate the coin slowly under a single light. Genuine lustre shows a wheel of brightness travelling across the surface; a polished face lights up all at once and looks flat.',
          'And the rule that has to be repeated every time: never clean them. A great many coins of this period have lost more than half their value to that single mistake.',
        ],
      },
      {
        hHi: 'नक़ल और आम जाल',
        hEn: 'Forgeries and the common traps',
        pHi: [
          'विक्टोरिया का चाँदी का रुपया भारत में सबसे ज़्यादा नक़ल किया जाने वाला सिक्का है। बाज़ारों और ऑनलाइन दोनों जगह ढली हुई नक़लें आम हैं।',
          'सबसे तेज़ जाँच वज़न है — 11.66 ग्राम के मानक से स्पष्ट रूप से हटा हुआ सिक्का संदेह पैदा करता है। दूसरी जाँच किनारा है: असली सिक्के का किनारा धारीदार और तीखा है, ढली नक़ल का चिकना और गोल।',
          'तीसरी जाँच आवाज़ है। चाँदी उँगली पर संतुलित करके ठोंकने पर लंबी, साफ़ आवाज़ देती है; मिश्रित धातु भोथरी “ठक”।',
          'और एक विशेष जाल इस दौर में मिलता है: असली सिक्के की तारीख़ बदलकर उसे दुर्लभ वर्ष का बना देना। तारीख़ के अंकों को लूप से देखिए — बदले हुए अंक के चारों ओर धातु की सतह असामान्य लगती है।',
        ],
        pEn: [
          'The Victoria silver rupee is the most forged coin in India. Cast copies are common in bazaars and in online listings alike.',
          'The fastest check is weight — a coin clearly away from the 11.66 gram standard raises a question. The second is the edge: a genuine coin has a sharp reeded edge, a cast copy a smooth rounded one.',
          'The third is sound. Balanced on a fingertip and tapped, silver gives a long clear note; an alloy gives a dull thud.',
          'And one trap is peculiar to this period: altering the date on a genuine coin so that it becomes a rare year. Examine the digits under a loupe — the metal surface around a changed digit looks disturbed.',
        ],
      },
      {
        hHi: 'शुरुआत का व्यावहारिक क्रम',
        hEn: 'A practical order in which to begin',
        pHi: [
          'पहले ताँबे के छोटे सिक्के लीजिए — क्वार्टर आना, आधा पाइस। कुछ सौ रुपये में दस नमूने ख़रीदिए और उन्हें घिसाव के क्रम में लगाइए। यह अभ्यास आँख को वह चीज़ सिखाता है जो कोई किताब नहीं सिखा सकती।',
          'फिर दो आना और चौथाई रुपया — चाँदी, पर सस्ती चाँदी। यहाँ आप चाँदी की आवाज़, वज़न और लस्टर से परिचित होंगे।',
          'उसके बाद आधा रुपया, और सबसे अंत में पूरा रुपया — क्योंकि वही सबसे महँगा है और सबसे ज़्यादा नक़ली मिलता है। जब तक आप वहाँ पहुँचेंगे, आपकी आँख तैयार हो चुकी होगी।',
          'और पूरे रास्ते एक ही अनुशासन रखिए: हर सिक्के के साथ एक पर्ची — कहाँ से, कब, कितने में। यह जानकारी वर्षों बाद उस सिक्के से ज़्यादा क़ीमती निकलती है।',
        ],
        pEn: [
          'Start with the small copper — the quarter anna and half pice. Buy ten examples for a few hundred rupees and arrange them in order of wear. That exercise teaches the eye what no book can.',
          'Then the two annas and quarter rupee — silver, but inexpensive silver. Here you become familiar with the sound, the weight and the lustre of the metal.',
          'After that the half rupee, and last of all the full rupee — because it is the most expensive and the most forged. By the time you reach it, your eye will be ready.',
          'And keep one discipline the whole way: a slip with every coin recording where, when and for how much. Years later that information turns out to be worth more than the coin.',
        ],
      },
    ],
  },
  {
    slug: 'east-india-company-doubtful-coins',
    sections: [
      {
        hHi: 'ईस्ट इंडिया कंपनी ने असल में क्या ढाला',
        hEn: 'What the East India Company actually struck',
        pHi: [
          'सबसे पहले तथ्य साफ़ कर लें। ईस्ट इंडिया कंपनी ने भारत में सिक्के ढाले, और वे सिक्के आज भी बड़ी संख्या में मौजूद हैं — पर वे इन “देवी-देवता वाले सिक्कों” जैसे बिल्कुल नहीं दिखते।',
          'कंपनी के असली सिक्कों पर आमतौर पर कंपनी का द्विशीर्ष चिह्न या मुकुट, अंग्रेज़ी में मूल्यवर्ग, और फ़ारसी या नागरी में लिखावट मिलती है। अठारहवीं सदी के कई सिक्कों पर तो मुग़ल बादशाह का नाम दर्ज है, कंपनी का नहीं।',
          'यह इसलिए कि कंपनी शुरुआत में मुग़ल संप्रभुता के अधीन एक व्यापारिक इकाई थी, और अपने सिक्के को बाज़ार में चलाने के लिए उसे दिल्ली के नाम की ज़रूरत थी।',
          'यानी कंपनी के सिक्के प्रशासनिक दस्तावेज़ हैं — सूखे, व्यावहारिक, और बिल्कुल भी सजावटी नहीं। यह पहचानना ही अधिकांश ठगी को रोक देता है।',
        ],
        pEn: [
          'Let us settle the facts first. The East India Company did strike coins in India, and those coins survive in large numbers today — but they look nothing at all like these “coins with deities on them”.',
          'Genuine Company coins typically carry the bale mark or a crown, the denomination in English, and an inscription in Persian or Nagari. Many eighteenth-century issues bear the name of the Mughal emperor rather than the Company’s.',
          'This is because the Company began as a trading body under Mughal sovereignty, and needed the Delhi name on its coin for the market to accept it.',
          'Company coins are therefore administrative documents — dry, practical, and not decorative in the least. Recognising that alone stops most of the fraud.',
        ],
      },
      {
        hHi: 'तो ये देवी-देवता वाले सिक्के क्या हैं',
        hEn: 'So what are the coins with deities on them?',
        pHi: [
          'ये आधुनिक निर्माण हैं — पीतल या मिश्रित धातु के टोकन, जो पिछले कुछ दशकों में बड़ी संख्या में बनाए गए। इन पर अक्सर “ONE ANNA EAST INDIA COMPANY” और कोई पुरानी तारीख़ लिखी होती है, प्रायः 1616 या 1717।',
          '1616 की तारीख़ अपने आप में एक चूक है। उस समय कंपनी भारत में सिक्के ढाल ही नहीं रही थी; उसे सिक्का ढालने का अधिकार दशकों बाद मिला।',
          'ये टोकन मूलतः पूजा-सामग्री और स्मृति-चिह्न के रूप में बने — मंदिर के प्रसाद, तिजोरी में रखने के लिए “शुभ” वस्तु, इस तरह की चीज़ें। इस रूप में वे झूठ नहीं थे।',
          'झूठ तब शुरू हुआ जब इन्हें “दुर्लभ प्राचीन सिक्का” बताकर बेचा जाने लगा। वस्तु वही है; दावा बदल गया है।',
        ],
        pEn: [
          'They are modern manufactures — brass or alloy tokens produced in very large numbers over the past few decades. They usually read “ONE ANNA EAST INDIA COMPANY” with an old date, most often 1616 or 1717.',
          'The date 1616 is itself the giveaway. The Company was not striking coins in India at that time; the right to mint came to it decades later.',
          'These tokens were made originally as devotional and souvenir objects — temple offerings, an auspicious item to keep in a cash box, and so on. In that role they were not a lie at all.',
          'The lie began when they started being sold as rare ancient coins. The object is unchanged; the claim around it is what changed.',
        ],
      },
      {
        hHi: 'ठगी का पूरा तंत्र',
        hEn: 'The full machinery of the scam',
        pHi: [
          'यह भारत की सबसे संगठित सिक्का-ठगी है, और इसके चरण हमेशा एक जैसे रहते हैं। पहला चरण — एक वीडियो या विज्ञापन दावा करता है कि यह सिक्का करोड़ों में बिकता है।',
          'दूसरा — पीड़ित संपर्क करता है, और सामने वाला बिना मोल-भाव के भारी रक़म पर राज़ी हो जाता है। यह असल में सबसे बड़ा ख़तरे का संकेत है, क्योंकि कोई सच्चा ख़रीदार मोल-भाव किए बिना नहीं मानता।',
          'तीसरा — शुल्कों की क़तार। रजिस्ट्रेशन, वेरिफ़िकेशन, जीएसटी, कूरियर, बीमा, “आरबीआई क्लियरेंस”। हर बार छोटी रक़म, और हर बार यह आख़िरी क़दम बताया जाता है।',
          'चौथा — भुगतान कभी नहीं आता, नंबर बंद हो जाता है। इस बीच कई लोग हज़ारों रुपये गँवा चुके होते हैं, और कुछ मामलों में लाखों।',
        ],
        pEn: [
          'This is the most organised coin fraud in India, and its stages never change. Stage one — a video or advertisement claims the coin sells for crores.',
          'Stage two — the victim makes contact, and the other side agrees to an enormous sum without negotiating. That is in fact the largest warning sign, because no genuine buyer agrees without haggling.',
          'Stage three — the queue of fees. Registration, verification, GST, courier, insurance, “RBI clearance”. Each amount small, each described as the final step.',
          'Stage four — the payment never arrives and the number goes dead. By then people have lost thousands of rupees, and in some cases lakhs.',
        ],
      },
      {
        hHi: 'कुछ जाँचें जो आप ख़ुद कर सकते हैं',
        hEn: 'Checks you can run yourself',
        pHi: [
          'धातु देखिए। ये टोकन आमतौर पर पीतल के हैं — पीले, हल्के, और सतह पर आधुनिक चमक के साथ। कंपनी के असली ताँबे के सिक्के भूरे-लाल होते हैं और उन पर सदियों की प्राकृतिक परत होती है।',
          'किनारा देखिए। इन टोकनों का किनारा प्रायः चिकना और गोल है, जो ढलाई का प्रमाण है। असली सिक्के ठोंककर बने थे और उनका किनारा अलग व्यवहार करता है।',
          'तारीख़ और लिखावट का मेल जाँचिए। 1616 पर “ONE ANNA” लिखा होना अपने आप में असंगत है, क्योंकि आना-आधारित दशमलव-पूर्व प्रणाली उस रूप में बहुत बाद में मानकीकृत हुई।',
          'और सबसे सरल जाँच: कितने मिल रहे हैं। सचमुच दुर्लभ वस्तु हर दूसरी दुकान पर और हर ऑनलाइन सूची में नहीं मिलती। बहुतायत अपने आप में उत्तर है।',
        ],
        pEn: [
          'Look at the metal. These tokens are usually brass — yellow, light, with a modern brightness to the surface. Genuine Company copper is brown-red and carries a natural layer built up over centuries.',
          'Look at the edge. The edge of these tokens is typically smooth and rounded, which is the evidence of casting. Genuine coins were struck, and their edges behave differently.',
          'Check whether the date and the inscription agree. “ONE ANNA” alongside 1616 is internally inconsistent, because the anna-based pre-decimal system was standardised in that form considerably later.',
          'And the simplest check of all: how many are available. A genuinely rare object is not in every second shop and every online listing. The abundance is itself the answer.',
        ],
      },
      {
        hHi: 'हाथ में रखी वस्तु का क्या करें',
        hEn: 'What to do with the piece in your hand',
        pHi: [
          'अगर यह आपके परिवार में पीढ़ियों से है, तो उसे रख लीजिए। पचास-साठ साल पुराना पूजा का टोकन भी एक पारिवारिक वस्तु है, और उसकी क़ीमत भावनात्मक है — जो असली है, भले बाज़ारू न हो।',
          'अगर आपने इसे “निवेश” समझकर ख़रीदा है, तो यह जान लीजिए कि इसका बाज़ारू मूल्य कुछ दसियों रुपये है। यह असहज सच्चाई है और आगे और नुक़सान से बचाती है।',
          'किसी भी हालत में इसे बेचने के लिए अग्रिम शुल्क मत दीजिए। यही वह बिंदु है जहाँ असली नुक़सान होता है — सिक्के में नहीं, शुल्क में।',
          'और अगर कोई परिचित इस जाल की ओर बढ़ रहा हो, तो उसे यह एक बात बता दीजिए: पैसा हमेशा ख़रीदार से विक्रेता की ओर बहता है। यह वाक्य अकेला अधिकांश ठगी रोक देता है।',
        ],
        pEn: [
          'If it has been in your family for generations, keep it. A devotional token fifty or sixty years old is still a family object, and its value is emotional — which is real, even if it is not commercial.',
          'If you bought it as an “investment”, know that its market value is a few tens of rupees. That is an uncomfortable fact and it protects you from further loss.',
          'Under no circumstances pay a fee in order to sell it. That is the point at which the actual loss happens — not in the coin, but in the fees.',
          'And if somebody you know is walking into this trap, tell them one thing: money always flows from the buyer to the seller. That single sentence stops most of these frauds on its own.',
        ],
      },
      {
        hHi: 'असली कंपनी सिक्का कैसे ख़रीदें',
        hEn: 'How to buy a genuine Company coin',
        pHi: [
          'अच्छी ख़बर यह है कि असली कंपनी सिक्के सस्ते और आसानी से उपलब्ध हैं। ताँबे के क्वार्टर आना और आधा पाइस कुछ सौ रुपये में मिल जाते हैं।',
          'प्रेसीडेंसी दौर के सिक्के — बंगाल, मद्रास और बंबई प्रेसीडेंसी — इस क्षेत्र का सबसे दिलचस्प हिस्सा हैं, क्योंकि तीनों की अपनी शैली, अपनी लिपि और अपने मानक थे।',
          'ख़रीदिए किसी स्थापित डीलर से, या संग्राहकों की प्रदर्शनी से जहाँ आप वस्तु हाथ में लेकर देख सकें। वहाँ आपको वही रक़म देकर एक सचमुच पुरानी वस्तु मिलेगी, न कि एक आधुनिक टोकन।',
          'और यही इस पूरे लेख का सबसे संतोषजनक हिस्सा है: जो लोग नक़ली “1616” टोकन के पीछे भाग रहे हैं, वे उतने ही पैसे में असली इतिहास ख़रीद सकते थे।',
        ],
        pEn: [
          'The good news is that genuine Company coins are cheap and readily available. Copper quarter annas and half pice can be had for a few hundred rupees.',
          'The Presidency issues — Bengal, Madras and Bombay — are the most interesting part of this field, because each had its own style, its own script and its own standards.',
          'Buy from an established dealer, or at a collectors’ fair where you can hold the object. For the same money you will come away with something genuinely old rather than a modern token.',
          'And this is the most satisfying part of the whole subject: the people chasing fake “1616” tokens could have bought real history for the same amount.',
        ],
      },
    ],
  },
  {
    slug: 'mint-marks-kaise-pehchane',
    sections: [
      {
        hHi: 'चार भारतीय टकसालें और उनके चिह्न',
        hEn: 'The four Indian mints and their marks',
        pHi: [
          'भारत में चार सरकारी टकसालें सिक्के ढालती हैं, और हर एक अपना छोटा चिह्न तारीख़ के नीचे छोड़ती है। मुंबई एक हीरा (डायमंड) लगाती है। कोलकाता आमतौर पर कोई चिह्न नहीं छोड़ती।',
          'हैदराबाद के चिह्न कई रूपों में मिलते हैं — एक बिंदु, एक तारा, या एक हीरा जिसके भीतर बिंदु हो। नोएडा एक ठोस बिंदु लगाती है, जो सबसे नया चिह्न है क्योंकि यह टकसाल 1988 में शुरू हुई।',
          'कोलकाता का “कोई चिह्न नहीं” वाला नियम नए संग्राहकों को सबसे ज़्यादा उलझाता है। याद रखने का तरीक़ा यह है: अगर तारीख़ के नीचे कुछ भी नहीं है और सिक्का साफ़ है, तो वह कोलकाता का है।',
          'ध्यान रहे कि घिसे हुए सिक्के पर चिह्न मिट भी सकता है। इसलिए “चिह्न नहीं दिख रहा” और “चिह्न है ही नहीं” दो अलग बातें हैं, और अच्छी दशा का सिक्का ही निश्चित उत्तर देता है।',
        ],
        pEn: [
          'Four government mints strike coins in India, and each leaves a small mark below the date. Mumbai uses a diamond. Kolkata usually leaves no mark at all.',
          'The Hyderabad marks appear in several forms — a dot, a star, or a diamond with a dot inside it. Noida uses a solid dot, the newest of the marks, since that mint opened in 1988.',
          'The “no mark” rule for Kolkata confuses new collectors more than anything else. The way to remember it is this: if there is nothing below the date and the coin is clear, it is Kolkata.',
          'Bear in mind that a mark can wear away entirely. So “I cannot see a mark” and “there is no mark” are two different statements, and only a coin in good condition gives a definite answer.',
        ],
      },
      {
        hHi: 'चिह्न मायने क्यों रखता है',
        hEn: 'Why the mark matters',
        pHi: [
          'एक ही वर्ष का एक ही मूल्यवर्ग अलग-अलग टकसालों में अलग-अलग संख्या में ढला। जिस टकसाल ने उस वर्ष कम बनाए, उसका सिक्का संग्राहकों की सूची में ऊपर बैठता है।',
          'इसीलिए दो देखने में बिल्कुल एक जैसे सिक्कों के दाम में बड़ा अंतर हो सकता है, और वह अंतर पूरी तरह एक छोटे-से चिह्न पर टिका होता है।',
          'यह वर्गीकरण का आधार भी है। “हर वर्ष का हर टकसाल-चिह्न” एक ऐसा लक्ष्य है जो एक साधारण मूल्यवर्ग को भी वर्षों का दिलचस्प काम बना देता है।',
          'और इसी वजह से यह शौक़ इतना आदी बनाने वाला है — आप जेब के हर सिक्के को पलटकर देखने लगते हैं, और कभी-कभी कुछ ऐसा मिल जाता है जो आपके पास नहीं था।',
        ],
        pEn: [
          'The same denomination of the same year was struck in different quantities at different mints. Whichever mint produced fewer that year sits higher on a collector’s list.',
          'This is why two apparently identical coins can differ substantially in price, and that difference rests entirely on one small mark.',
          'It is also the basis of classification. “Every mint mark for every year” is a target that turns even an ordinary denomination into years of interesting work.',
          'And it is exactly why the pursuit is so addictive — you begin turning over every coin in your pocket, and now and then something turns up that you did not have.',
        ],
      },
      {
        hHi: 'विदेशी टकसालों का दिलचस्प अध्याय',
        hEn: 'The charming foreign chapter',
        pHi: [
          'कई बार भारत की माँग अपनी टकसालों की क्षमता से ऊपर चली गई, और तब सिक्के विदेश में ढलवाए गए। यह इतिहास का एक कम जाना हुआ पन्ना है और संग्राहकों के लिए बहुत आकर्षक।',
          'अलग-अलग दौर में सिक्के ब्रिटेन (रॉयल मिंट), कनाडा, दक्षिण कोरिया, मैक्सिको, रूस और कुछ अन्य देशों में ढाले गए। हर टकसाल ने अपना चिह्न छोड़ा — जैसे मैक्सिको सिटी का “Mo”, या कुछ पर तारा और अन्य आकृतियाँ।',
          'इन सिक्कों की पहचान संग्राहकों में एक अलग शौक़ है, क्योंकि ये सामान्य चलन में ही घूमते रहे और अधिकांश लोगों ने कभी ध्यान नहीं दिया।',
          'यानी आपकी जेब में इस समय एक ऐसा सिक्का हो सकता है जो किसी दूसरे महाद्वीप में बना और आपके पास पहुँचा — और यह जानकर उसे देखना बदल जाता है।',
        ],
        pEn: [
          'Several times India’s demand outran the capacity of its own mints, and coins were struck abroad. This is a little-known page of the history and a very attractive one for collectors.',
          'At various periods coins were made in Britain at the Royal Mint, and in Canada, South Korea, Mexico, Russia and a few other countries. Each mint left its own mark — Mexico City’s “Mo”, for instance, and stars or other devices on others.',
          'Identifying these has become a hobby within the hobby, because they circulated as ordinary money and most people never noticed them.',
          'Which means there may be a coin in your pocket right now that was made on another continent and travelled to you — and knowing that changes how you look at it.',
        ],
      },
      {
        hHi: 'चिह्न देखने का तरीक़ा',
        hEn: 'How to look for the mark',
        pHi: [
          'सिक्का दोनों हाथों से किनारों से पकड़िए, और एक तेज़ रोशनी के नीचे रखिए — खिड़की की दिन की रोशनी सबसे अच्छी है, या एक साधारण टेबल लैंप।',
          'दस गुना आवर्धन का लूप आँख के पास रखिए, सिक्के के पास नहीं। फिर सिक्के को धीरे-धीरे आगे-पीछे करके फ़ोकस पाइए। यह तरीक़ा शुरुआत में अटपटा लगता है और उसके बाद कभी बदला नहीं जाता।',
          'सिक्के को हल्का-सा झुकाइए और घुमाइए। बहुत घिसा हुआ चिह्न केवल एक विशेष कोण पर छाया बनाता है और तभी दिखता है।',
          'और धैर्य रखिए। कुछ चिह्न बहुत छोटे हैं, और शुरुआत में उन्हें ढूँढ़ने में एक मिनट लग सकता है। कुछ हफ़्तों के अभ्यास के बाद यह कुछ सेकंड का काम रह जाता है।',
        ],
        pEn: [
          'Hold the coin by its edges in both hands and place it under a strong light — daylight from a window is best, or an ordinary table lamp.',
          'Hold the ten-times loupe close to your eye rather than close to the coin, then move the coin slowly back and forth to find focus. The method feels awkward at first and is never abandoned afterwards.',
          'Tilt and rotate the coin slightly. A heavily worn mark casts a shadow at only one particular angle and appears only then.',
          'And be patient. Some marks are very small, and finding one can take a minute at the start. After a few weeks of practice it becomes a matter of seconds.',
        ],
      },
      {
        hHi: 'आज रात घर पर शुरू कीजिए',
        hEn: 'Start tonight, at home',
        pHi: [
          'इस शौक़ की सबसे अच्छी बात यह है कि इसमें कुछ ख़रीदना नहीं पड़ता। जेब, पर्स, गुल्लक और दराज़ — सब जगह से सिक्के इकट्ठा कीजिए और एक मेज़ पर फैला लीजिए।',
          'फिर उन्हें मूल्यवर्ग के हिसाब से ढेरियों में बाँटिए, और हर ढेरी को वर्ष के क्रम में लगाइए। अब हर सिक्के के नीचे चिह्न देखिए और चार टकसालों के हिसाब से अलग कीजिए।',
          'यह एक शाम का काम है और लगभग हमेशा कुछ न कुछ आश्चर्य देता है — कोई वर्ष जो आपके पास नहीं था, या कोई चिह्न जो आपने पहले कभी नहीं देखा।',
          'एक साधारण नोटबुक में दर्ज करते जाइए कि कौन-सा वर्ष और चिह्न मिल गया। वह सूची ही आपका पहला संग्रह-रिकॉर्ड है, और वह मुफ़्त में बना।',
        ],
        pEn: [
          'The best thing about this pursuit is that it requires buying nothing. Gather coins from pockets, purses, piggy banks and drawers, and spread them on a table.',
          'Then sort them into piles by denomination, and order each pile by year. Now look under each coin for the mark and separate them by the four mints.',
          'This is an evening’s work and it almost always produces a surprise — a year you did not have, or a mark you had never noticed before.',
          'Record in a simple notebook which year and mark you have found. That list is your first collection record, and it cost nothing to create.',
        ],
      },
      {
        hHi: 'एक चेतावनी',
        hEn: 'One caution',
        pHi: [
          'टकसाल-चिह्न के आधार पर “यह सिक्का दुर्लभ है” वाले दावे इंटरनेट पर बहुत घूमते हैं, और उनमें से अधिकांश ग़लत हैं।',
          'ढलाई-संख्या के असली आँकड़े प्रकाशित हैं और कैटलॉग में दर्ज हैं। किसी वीडियो के दावे पर भरोसा करने से पहले वह आँकड़ा देखिए।',
          'और वही अंतिम नियम, जो हर बार लागू होता है: कोई भी सौदा जिसमें आपसे पहले पैसे माँगे जाएँ, सौदा नहीं है।',
        ],
        pEn: [
          'Claims that “this coin is rare because of its mint mark” circulate widely online, and most of them are wrong.',
          'The real mintage figures are published and recorded in the catalogues. Look at the figure before trusting the claim in a video.',
          'And the same final rule that applies every time: any transaction in which somebody asks you for money first is not a transaction.',
        ],
      },
    ],
  },
  {
    slug: 'das-rupaye-ke-sikke-ki-afwah',
    sections: [
      {
        hHi: 'अफ़वाह की शुरुआत कहाँ से हुई',
        hEn: 'Where the rumour began',
        pHi: [
          'दस रुपये का सिक्का 2005 में जारी हुआ, और तब से रिज़र्व बैंक ने इसके चौदह अलग-अलग डिज़ाइन जारी किए हैं — अलग-अलग अवसरों पर, अलग-अलग विषयों के साथ।',
          'यही विविधता अफ़वाह की जड़ बनी। जब एक ही मूल्यवर्ग के सिक्के देखने में अलग-अलग हों, तो आम आदमी के मन में सवाल उठता है कि इनमें से कौन-सा असली है।',
          'सबसे ज़्यादा भ्रम दो डिज़ाइनों के बीच फैला — एक जिसमें बीच में दस धारियाँ हैं और एक जिसमें पंद्रह। किसी ने कहीं कह दिया कि “दस धारी वाला नक़ली है”, और बात फैल गई।',
          'यह पूरी तरह ग़लत है। दोनों डिज़ाइन रिज़र्व बैंक द्वारा जारी हैं, दोनों वैध मुद्रा हैं, और दोनों के बीच का अंतर केवल डिज़ाइन का है — प्रामाणिकता का नहीं।',
        ],
        pEn: [
          'The ten rupee coin was introduced in 2005, and since then the Reserve Bank has issued fourteen different designs of it — on different occasions and with different themes.',
          'That very variety became the root of the rumour. When coins of one denomination look different from one another, an ordinary person naturally asks which of them is real.',
          'The greatest confusion spread between two designs — one with ten stripes across the centre and one with fifteen. Somebody said somewhere that “the ten-stripe one is fake”, and it travelled.',
          'This is entirely wrong. Both designs are issued by the Reserve Bank, both are legal tender, and the difference between them is one of design alone — not of authenticity.',
        ],
      },
      {
        hHi: 'यह क्यों टिकी रही',
        hEn: 'Why it stuck',
        pHi: [
          'अफ़वाहें तब टिकती हैं जब उनके पीछे कोई व्यावहारिक तर्क दिखता हो, और यहाँ वह तर्क मौजूद था: सिक्के सचमुच अलग दिखते थे।',
          'दूसरा कारण ज़्यादा दिलचस्प है — यह एक स्वयंपूर्ति करने वाली अफ़वाह बन गई। एक दुकानदार ने लेने से मना किया, तो अगले दुकानदार के पास भी वह सिक्का वापस आया, और उसने भी मना किया।',
          'हर इनकार अगले इनकार का कारण बना। कुछ ही महीनों में कुछ इलाक़ों में यह सिक्का व्यवहार में अस्वीकार्य हो गया, हालाँकि क़ानूनी रूप से वह हमेशा वैध रहा।',
          'रिज़र्व बैंक ने बार-बार स्पष्टीकरण जारी किए, प्रेस विज्ञप्तियाँ दीं, और डिज़ाइनों की सूची प्रकाशित की। फिर भी अफ़वाह वर्षों तक चलती रही — जो दिखाता है कि तथ्य अकेले अफ़वाह नहीं रोकते।',
        ],
        pEn: [
          'Rumours survive when some practical reasoning appears to sit behind them, and here that reasoning existed: the coins really did look different.',
          'The second reason is more interesting — it became a self-fulfilling rumour. One shopkeeper refused the coin, so it came back to the next shopkeeper, who refused it too.',
          'Each refusal became the cause of the next. Within months the coin had become practically unusable in certain areas, even though it remained legally valid throughout.',
          'The Reserve Bank issued clarifications repeatedly, put out press releases, and published the list of designs. The rumour nevertheless ran for years — which shows that facts alone do not stop a rumour.',
        ],
      },
      {
        hHi: 'क़ानूनी स्थिति साफ़-साफ़',
        hEn: 'The legal position, stated plainly',
        pHi: [
          'दस रुपये के सारे चौदह डिज़ाइन वैध मुद्रा हैं। किसी भी डिज़ाइन को लेने से मना करना ग़लत है।',
          'भारत में जारी की गई मुद्रा को स्वीकार करना बाध्यकारी है, और इसे लेने से इनकार करना क़ानूनी दृष्टि से समस्याग्रस्त है। यह केवल असुविधा का मामला नहीं है।',
          'अगर कोई दुकानदार लेने से मना करे, तो सबसे व्यावहारिक क़दम है उसे शांति से बताना कि यह वैध है, और ज़रूरत पड़े तो रिज़र्व बैंक की सार्वजनिक सूचना दिखा देना — वह ऑनलाइन उपलब्ध है।',
          'बैंक की किसी भी शाखा में ये सिक्के जमा किए जा सकते हैं। यह वह विकल्प है जो सबसे कम लोगों को मालूम है और सबसे ज़्यादा काम आता है।',
        ],
        pEn: [
          'All fourteen designs of the ten rupee coin are legal tender. Refusing any of them is wrong.',
          'Currency issued in India is binding to accept, and refusing it is legally problematic. This is not merely a matter of inconvenience.',
          'If a shopkeeper refuses, the most practical step is to explain calmly that it is valid, and if necessary to show the Reserve Bank’s public notice — it is available online.',
          'These coins can be deposited at any bank branch. That is the option fewest people know about and the one that helps most.',
        ],
      },
      {
        hHi: 'संग्राहक की नज़र से',
        hEn: 'Through a collector’s eye',
        pHi: [
          'यहाँ एक विडंबना है जो बताने लायक़ है: जिस चीज़ को लोग “नक़ली” कहकर ठुकरा रहे थे, वह वास्तव में एक बेहद दिलचस्प संग्रह-श्रृंखला है।',
          'चौदह डिज़ाइन, अलग-अलग वर्ष, चार टकसालें — इनका पूरा सेट बनाना एक स्पष्ट, सीमित और सस्ता लक्ष्य है। हर सिक्का अंकित मूल्य पर मिलता है।',
          'और हर डिज़ाइन का अपना विषय है — कनेक्टिविटी, जैव विविधता, विभिन्न वर्षगाँठें। एक पूरा सेट असल में पिछले दो दशकों की सार्वजनिक प्राथमिकताओं का संक्षिप्त इतिहास बन जाता है।',
          'यह उन कम अवसरों में से है जहाँ आप अंकित मूल्य पर संग्रह खड़ा कर सकते हैं। जेब में आने वाला हर दस रुपये का सिक्का देखिए — कौन-सा डिज़ाइन है, कौन-सी टकसाल।',
        ],
        pEn: [
          'There is an irony here worth stating: the thing people were rejecting as “fake” is in fact a genuinely interesting collecting series.',
          'Fourteen designs, several years, four mints — assembling a complete set is a clear, bounded and inexpensive target. Every coin is obtainable at face value.',
          'And each design has its own theme — connectivity, biodiversity, various anniversaries. A complete set becomes a compressed history of the public priorities of the last two decades.',
          'This is one of the few chances to build a collection at face value. Look at every ten rupee coin that reaches your pocket — which design, and which mint.',
        ],
      },
      {
        hHi: 'असली नक़ली सिक्के भी मौजूद हैं',
        hEn: 'Genuinely counterfeit coins do exist',
        pHi: [
          'यह कहना ज़रूरी है कि नक़ली सिक्के अस्तित्व में हैं — पर वे उस तरह नहीं दिखते जैसा अफ़वाह बताती है। असली नक़ल की पहचान डिज़ाइन से नहीं, गुणवत्ता से होती है।',
          'नक़ली सिक्का आमतौर पर वज़न में हल्का होता है, धातु की चमक अलग होती है, किनारे की धारियाँ असमान या उथली होती हैं, और उभरे हुए हिस्सों के किनारे नरम लगते हैं।',
          'अक्षरों की बनावट भी अलग होती है — असली टकसाल में अक्षर तीखे और एक समान होते हैं, नक़ल में वे थोड़े मोटे या टेढ़े लगते हैं।',
          'यानी जाँच का सही आधार डिज़ाइन गिनना नहीं, गढ़न की गुणवत्ता देखना है। और संदेह हो तो सिक्का बैंक में जमा कर दीजिए — यह सबसे सीधा रास्ता है।',
        ],
        pEn: [
          'It should be said that counterfeit coins do exist — but they do not look the way the rumour describes. A real counterfeit is identified by quality, not by design.',
          'A counterfeit is usually light in weight, the metal has a different brightness, the edge reeding is uneven or shallow, and the edges of the raised elements feel soft.',
          'The lettering differs too — a genuine mint produces sharp, uniform letters, while a forgery leaves them slightly thick or misaligned.',
          'So the correct basis for a check is the quality of manufacture rather than counting design elements. And where there is doubt, deposit the coin at a bank — that is the most direct route available.',
        ],
      },
      {
        hHi: 'अफ़वाह से क्या सीखें',
        hEn: 'What the rumour teaches',
        pHi: [
          'यह प्रसंग मुद्रा से ज़्यादा सूचना के बारे में है। एक ग़लत बात, जो देखने में तार्किक लगती हो, करोड़ों लोगों तक पहुँच सकती है और वर्षों टिक सकती है।',
          'रोकने का तरीक़ा भी वही है जो सिक्कों की ठगी में काम आता है: दावे का स्रोत पूछिए। रिज़र्व बैंक की सूचना सार्वजनिक है और कुछ सेकंड में मिल जाती है।',
          'और जब कोई आपसे कहे कि कोई सिक्का या नोट अमान्य हो गया है, तो पहला सवाल यही होना चाहिए — यह किसने कहा, और कहाँ लिखा है।',
          'यह आदत इस एक अफ़वाह से कहीं आगे काम आती है, और यही शायद इस पूरे प्रसंग की सबसे उपयोगी सीख है।',
        ],
        pEn: [
          'This episode is about information more than about currency. A false statement that looks reasonable can reach crores of people and survive for years.',
          'The way to stop it is the same one that works against coin fraud: ask for the source of the claim. The Reserve Bank’s notice is public and takes seconds to find.',
          'And when somebody tells you a coin or a note has been invalidated, the first question should always be — who said so, and where is it written.',
          'That habit is useful well beyond this one rumour, and it is probably the most valuable lesson the whole episode offers.',
        ],
      },
    ],
  },
  {
    slug: 'gupta-swarn-mudra',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'गुप्त दीनार भारतीय सिक्का-कला का शिखर है — चित्र नहीं, दृश्य: वीणा बजाता सम्राट, सिंह से लड़ता राजा, अश्वमेध का घोड़ा।',
          'सोने के सिक्के महँगे हैं, पर उसी काल की चाँदी और ताँबे की मुद्रा सुलभ है, और कुषाण सोना अक्सर उससे भी सस्ता। महँगा नमूना बिना प्रमाणन कभी मत ख़रीदिए।',
        ],
        pEn: [
          'The Gupta dinara is the summit of Indian coin art — not a portrait but a scene: an emperor playing the veena, a king fighting a lion, the horse of the ashvamedha standing before its post.',
          'The gold is expensive, but silver and copper of the same period are accessible, and Kushan gold often costs less again. Never buy an expensive example without certification, because ancient gold is among the most forged collectables in the world.',
        ],
      },
    ],
  },
  {
    slug: 'mint-marks-kaise-pehchane',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'तारीख़ के नीचे देखिए: मुंबई हीरा, कोलकाता कोई चिह्न नहीं, हैदराबाद बिंदु या तारा या भीतर बिंदु वाला हीरा, नोएडा ठोस बिंदु।',
          'चिह्न मायने रखता है क्योंकि एक ही वर्ष का सिक्का हर टकसाल में अलग संख्या में ढला, और कम ढलाई वाला संग्राहकों की सूची में ऊपर बैठता है।',
          'यह शौक़ आज रात शुरू हो सकता है, बिना कुछ ख़रीदे — जेब और दराज़ के सिक्के मेज़ पर फैलाइए, वर्ष के क्रम में लगाइए, और हर एक के नीचे चिह्न देखिए।',
        ],
        pEn: [
          'Look below the date: Mumbai a diamond, Kolkata no mark at all, Hyderabad a dot or a star or a diamond with a dot inside, Noida a solid dot.',
          'The mark matters because the same year was struck in different quantities at each mint, and the lower-mintage one sits higher on a collector’s list.',
          'This pursuit can begin tonight without buying anything — spread the coins from your pockets and drawers on a table, order them by year, and look under each one for the mark.',
        ],
      },
    ],
  },
  {
    slug: 'das-rupaye-ke-sikke-ki-afwah',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'दस रुपये के सारे चौदह डिज़ाइन वैध मुद्रा हैं। धारियों की संख्या से असली-नक़ली तय नहीं होता — यह अफ़वाह पूरी तरह ग़लत है।',
          'किसी भी बैंक शाखा में ये सिक्के जमा किए जा सकते हैं। और संग्राहक के लिए यह अंकित मूल्य पर बनने वाला एक बेहतरीन सेट है।',
        ],
        pEn: [
          'All fourteen designs of the ten rupee coin are legal tender. The number of stripes does not decide whether a coin is genuine — that rumour is wholly false, and the Reserve Bank has said so repeatedly.',
          'These coins can be deposited at any bank branch. And for a collector the series is an excellent set that can be assembled entirely at face value, which is a rare opportunity in this hobby.',
        ],
      },
    ],
  },
  {
    slug: 'sikke-saaf-karne-ki-galti',
    sections: [
      {
        hHi: 'टोनिंग असल में क्या है',
        hEn: 'What toning actually is',
        pHi: [
          'जिस परत को अधिकांश लोग गंदगी समझकर हटाना चाहते हैं, वह असल में धातु की सतह पर वर्षों में बनी एक रासायनिक परत है। चाँदी पर यह हवा में मौजूद सल्फ़र से बनती है, और ताँबे पर ऑक्सीजन से।',
          'यह परत सतह को आगे के क्षरण से बचाती है — यानी वह ढाल है, बीमारी नहीं। इसे हटाने का अर्थ है सिक्के को नंगा करके फिर से ऑक्सीकरण के हवाले कर देना।',
          'संग्राहकों के लिए इसका सौंदर्य-मूल्य भी है। चाँदी पर बनी इंद्रधनुषी टोनिंग — नीले, बैंगनी, सुनहरे रंगों की परतें — बाज़ार में प्रीमियम पाती है, और वह प्रीमियम कभी-कभी काफ़ी बड़ा होता है।',
          'और सबसे व्यावहारिक बात: टोनिंग प्रामाणिकता का प्रमाण भी है। सदियों में स्वाभाविक रूप से बनी परत की नक़ल कठिन है, और उसका होना विशेषज्ञ को भरोसा देता है।',
        ],
        pEn: [
          'The layer most people want to scrub away as dirt is in fact a chemical film formed on the metal surface over many years. On silver it comes from sulphur in the air, and on copper from oxygen.',
          'That film protects the surface from further corrosion — it is a shield rather than a disease. Removing it means stripping the coin bare and handing it back to oxidation.',
          'For collectors it also carries aesthetic value. Rainbow toning on silver — layers of blue, violet and gold — commands a premium in the market, and that premium is sometimes considerable.',
          'And the most practical point of all: toning is evidence of authenticity. A film built up naturally over centuries is difficult to imitate, and its presence gives an expert confidence.',
        ],
      },
      {
        hHi: 'रसोई के हथियार, जो सबसे ज़्यादा नुक़सान करते हैं',
        hEn: 'The weapons in the kitchen, which do the most damage',
        pHi: [
          'नींबू और इमली — दोनों अम्लीय हैं और चाँदी तथा ताँबे की सतह को सचमुच घोल देते हैं। सिक्का चमक तो जाता है, पर वह चमक उसी धातु की है जो अभी-अभी काटी गई है, और उसके साथ ब्योरे भी चले जाते हैं।',
          'टूथपेस्ट और राख — दोनों घर्षक हैं। सूक्ष्मदर्शी के नीचे ये असंख्य बारीक ख़रोंचें छोड़ते हैं, जो लस्टर को स्थायी रूप से नष्ट कर देती हैं और सिक्के को एक अप्राकृतिक, सपाट चमक दे देती हैं।',
          'धातु पॉलिश और तार का ब्रश — ये सबसे विनाशकारी हैं। पॉलिश धातु की एक परत उतार देती है, और ब्रश खुली ख़रोंचें छोड़ता है जिन्हें कोई विशेषज्ञ चूकता नहीं।',
          'बेकिंग सोडा और एल्युमिनियम फ़ॉइल वाला “जादुई” तरीक़ा, जो इंटरनेट पर घूमता है, चाँदी पर एक रासायनिक क्रिया करता है जो टोनिंग को खींच लेती है और सतह को धुँधला, बेजान सफ़ेद बना देती है।',
        ],
        pEn: [
          'Lemon and tamarind — both are acidic and genuinely dissolve the surface of silver and copper. The coin does brighten, but that brightness belongs to metal just cut open, and the detail leaves with it.',
          'Toothpaste and ash — both are abrasives. Under a microscope they leave countless fine scratches that destroy lustre permanently and give the coin an unnatural, flat shine.',
          'Metal polish and a wire brush are the most destructive of all. Polish removes a layer of metal, and a brush leaves open scratches that no expert misses.',
          'The “magic” baking soda and aluminium foil method that circulates online sets off a chemical reaction on silver that pulls the toning away and leaves the surface dull and lifelessly white.',
        ],
      },
      {
        hHi: 'क्या कभी कुछ करना उचित है',
        hEn: 'Is anything ever acceptable?',
        pHi: [
          'एक चीज़ हमेशा सुरक्षित है: ढीली धूल हटाना। एक मुलायम ब्रश, जैसे चित्रकारी वाला, हल्के हाथ से — बस इतना।',
          'दूसरी चीज़ सीमित परिस्थिति में स्वीकार्य है: आसुत जल में डुबोना, अगर सिक्के पर मिट्टी या चिपचिपाहट हो। नल का पानी नहीं, क्योंकि उसमें क्लोरीन और खनिज होते हैं जो धातु से क्रिया करते हैं।',
          'तीसरी — पीवीसी की हरी परत हटाना। यह वह इकलौता मामला है जहाँ हस्तक्षेप ज़रूरी है, क्योंकि वह परत सक्रिय रूप से धातु को नुक़सान पहुँचा रही है। इसके लिए एसीटोन का उपयोग होता है, पर यह काम अनुभव माँगता है और महँगे सिक्के पर स्वयं नहीं करना चाहिए।',
          'बाक़ी सब कुछ — रगड़ना, चमकाना, अम्ल, घर्षक — कभी उचित नहीं। और यह नियम इतना दृढ़ है कि इसे याद रखने का सबसे अच्छा तरीक़ा है इसे अपवाद-रहित मान लेना।',
        ],
        pEn: [
          'One thing is always safe: removing loose dust. A soft brush, of the kind used for painting, with a light hand — that is all.',
          'A second is acceptable in limited circumstances: a soak in distilled water, if the coin carries soil or stickiness. Not tap water, which contains chlorine and minerals that react with metal.',
          'A third is removing the green PVC film. This is the one case where intervention is necessary, because that film is actively attacking the metal. Acetone is used for it, but the work requires experience and should not be attempted yourself on a valuable coin.',
          'Everything else — rubbing, polishing, acids, abrasives — is never appropriate. The rule is firm enough that the best way to remember it is to treat it as having no exceptions.',
        ],
      },
      {
        hHi: 'साफ़ किया हुआ सिक्का कैसे पहचाना जाता है',
        hEn: 'How a cleaned coin is recognised',
        pHi: [
          'अनुभवी ख़रीदार इसे कुछ सेकंड में पकड़ लेता है, और तरीक़ा सरल है। सिक्के को एक ही रोशनी के नीचे धीरे-धीरे घुमाइए।',
          'असली, अछूती सतह पर लस्टर का एक चक्र घूमता हुआ दिखता है — जैसे पानी पर तेल की लहर। साफ़ की गई सतह पूरी एक साथ चमकती है, सपाट और मृत।',
          'दूसरा संकेत ख़रोंचों की दिशा है। प्राकृतिक घिसाव हर दिशा में यादृच्छिक होता है; रगड़ने से बनी ख़रोंचें समानांतर रेखाओं में चलती हैं, और लूप के नीचे यह तुरंत दिखता है।',
          'तीसरा — दरारों और अक्षरों के कोनों में बची हुई गहरी परत। रगड़ने वाला ऊँची सतह साफ़ कर देता है पर कोनों तक नहीं पहुँचता, इसलिए वहाँ पुरानी टोनिंग बची रहती है और यह विरोधाभास ही सबूत बन जाता है।',
        ],
        pEn: [
          'An experienced buyer catches it within seconds, and the method is simple. Rotate the coin slowly under a single light.',
          'A genuine untouched surface shows a wheel of lustre travelling across it, like an oil slick moving on water. A cleaned surface lights up all at once, flat and dead.',
          'The second clue is the direction of the scratches. Natural wear is random in every direction; scratches from rubbing run in parallel lines, and under a loupe this is immediately visible.',
          'The third is the darker film surviving in the crevices and in the corners of the letters. Somebody rubbing a coin cleans the raised surface but cannot reach the corners, so the old toning remains there — and that contradiction becomes the proof.',
        ],
      },
      {
        hHi: 'क़ीमत पर असर, संख्या में',
        hEn: 'The effect on price, in numbers',
        pHi: [
          'यह वह हिस्सा है जो लोगों को सबसे ज़्यादा चौंकाता है। साफ़ किया हुआ सिक्का अपनी संभावित क़ीमत का बड़ा हिस्सा खो देता है — कई बार आधे से भी ज़्यादा।',
          'कारण यह है कि ग्रेडिंग की दुनिया में साफ़ किया गया सिक्का एक अलग श्रेणी में चला जाता है। अंतरराष्ट्रीय ग्रेडिंग सेवाएँ उसे संख्यात्मक ग्रेड देने के बजाय “cleaned” या “damaged” का लेबल लगाती हैं।',
          'यानी वह सिक्का उस बाज़ार से लगभग बाहर हो जाता है जहाँ गंभीर संग्राहक ख़रीदते हैं। जो बचता है वह उन ख़रीदारों का बाज़ार है जो केवल धातु या स्मृति के लिए ले रहे हैं।',
          'और यह नुक़सान अपरिवर्तनीय है। घिसा हुआ सिक्का ईमानदार है — उसने अपना जीवन जिया। साफ़ किया हुआ सिक्का क्षतिग्रस्त है, और वह अंतर स्थायी है।',
        ],
        pEn: [
          'This is the part that surprises people most. A cleaned coin loses a large share of its potential value — frequently more than half.',
          'The reason is that in the grading world a cleaned coin moves into a separate category. International grading services do not assign it a numerical grade at all; they label it “cleaned” or “damaged”.',
          'That effectively removes it from the market where serious collectors buy. What remains is the market of buyers taking it for the metal or for sentiment alone.',
          'And the loss is irreversible. A worn coin is honest — it lived its life. A cleaned coin is damaged, and that distinction is permanent.',
        ],
      },
      {
        hHi: 'तो करना क्या चाहिए',
        hEn: 'So what should you actually do',
        pHi: [
          'कुछ नहीं। यह उत्तर असंतोषजनक लगता है और यही सही है। सिक्के को जैसा मिला वैसा रहने दीजिए, और अपनी ऊर्जा उसे सही ढंग से रखने में लगाइए।',
          'सही भंडारण: माइलर या पॉलीप्रोपिलीन के फ़्लिप, या अम्ल-रहित काग़ज़ के लिफ़ाफ़े। पीवीसी वाली पुरानी थैलियाँ आज ही हटाइए।',
          'नमी नियंत्रण: एक बंद डिब्बा और उसमें सिलिका जेल का पाउच, साल में एक-दो बार बदला हुआ। रसोई और स्नानघर से दूर, खिड़की से दूर, घर के भीतर की अलमारी में।',
          'और पकड़ने का तरीक़ा: हमेशा किनारों से, चेहरे पर उँगली नहीं, नरम सतह के ऊपर। यह चार बातें मिलकर सिक्के को अगली सदी तक पहुँचा देती हैं, और चारों मुफ़्त हैं।',
        ],
        pEn: [
          'Nothing. That answer feels unsatisfying, and it is the correct one. Leave the coin as you found it and put your energy into storing it properly.',
          'Proper storage: Mylar or polypropylene flips, or acid-free paper envelopes. Get rid of old PVC sleeves today.',
          'Humidity control: a closed box with a silica gel sachet inside, replaced once or twice a year. Away from the kitchen and bathroom, away from windows, in an interior cupboard.',
          'And how to hold it: always by the edges, fingers off the faces, over a soft surface. Those four things together will carry a coin into the next century, and all four are free.',
        ],
      },
    ],
  },
  {
    slug: 'dadaji-ki-sandook-kahani',
    sections: [
      {
        hHi: 'चौथा सिक्का: एक नया पैसा',
        hEn: 'A fourth coin: one naya paisa',
        pHi: [
          'संदूक़ के कोने में एक और सिक्का था, इतना हल्का कि पहले हाथ में आया ही नहीं। एल्युमिनियम का, छोटा, और उस पर लिखा था “एक नया पैसा”।',
          '“नया” क्यों? — बच्चे ने पूछा। दादाजी ने कहा कि 1957 में पूरा हिसाब बदल गया था। उससे पहले रुपये में सोलह आने होते थे, और हर आने में चार पैसे। फिर एक दिन तय हुआ कि अब रुपये में सौ पैसे होंगे।',
          'लोग उलझन में थे, इसलिए कुछ वर्षों तक सिक्के पर “नया” लिखा गया — ताकि कोई पुराने पैसे से भ्रमित न हो। जब सब आदी हो गए, तो वह शब्द हटा दिया गया।',
          'बच्चे ने सिक्का हथेली पर रखा और कहा कि यह तो काग़ज़ जितना हल्का है। दादाजी हँसे — “हाँ, और इसी से मैं स्कूल के बाहर एक गोली ख़रीदता था।”',
        ],
        pEn: [
          'In a corner of the trunk lay one more coin, so light that it did not reach the hand at first. Aluminium, small, and stamped “one naya paisa”.',
          '“Why new?” asked the child. The grandfather explained that in 1957 the whole arithmetic changed. Before that a rupee held sixteen annas, and each anna four paise. Then one day it was decided that a rupee would hold a hundred paise.',
          'People were confused, so for some years the coins carried the word naya — new — so that nobody would mix them up with the old paise. Once everyone had grown used to it, the word was dropped.',
          'The child laid the coin on a palm and said it was as light as paper. The grandfather laughed — “Yes, and with this I used to buy a sweet outside the school.”',
        ],
      },
      {
        hHi: 'बच्चे के सवाल, जो सबसे अच्छे होते हैं',
        hEn: 'The child’s questions, which are the best ones',
        pHi: [
          '“इस पर औरत का चेहरा क्यों है?” — क्योंकि वह ब्रिटेन की रानी थी, और उस समय भारत पर उसका शासन था। यह एक वाक्य का उत्तर है और उसमें दो सौ साल का इतिहास बैठा है।',
          '“यह चाँदी का है और वह नहीं क्यों?” — क्योंकि युद्ध के दौरान चाँदी महँगी हो गई थी, और सरकार को सस्ती धातु पर जाना पड़ा। बच्चा यहीं पहली बार सीखता है कि पैसा और धातु दो अलग चीज़ें हैं।',
          '“यह क्यों टेढ़ा है?” — क्योंकि यह हज़ारों हाथों से गुज़रा है। हर ख़रोंच किसी के जेब की है, किसी की दुकान की, किसी के गुल्लक की।',
          'इन सवालों का सबसे अच्छा जवाब यह मान लेना है कि हर सिक्का यात्रा कर चुका है। बच्चा फिर पूछता है कि यह कहाँ-कहाँ गया होगा, और वही सवाल इतिहास की सबसे अच्छी कक्षा है।',
        ],
        pEn: [
          '“Why is there a woman’s face on this one?” — because she was the queen of Britain, and at that time she ruled India. That is a one-sentence answer with two hundred years of history sitting inside it.',
          '“Why is this one silver and that one not?” — because during the war silver became expensive and the government had to move to a cheaper metal. Here the child learns for the first time that money and metal are two different things.',
          '“Why is this one bent?” — because it has passed through thousands of hands. Every scratch belongs to somebody’s pocket, somebody’s shop, somebody’s money box.',
          'The best way to answer these is to accept that every coin has travelled. The child then asks where it might have gone, and that question is the finest history lesson there is.',
        ],
      },
      {
        hHi: 'संदूक़ खोलने का सही तरीक़ा',
        hEn: 'The right way to open the trunk',
        pHi: [
          'यह कहानी एक व्यावहारिक सलाह के साथ आती है, क्योंकि हर घर में ऐसी एक संदूक़ है और उसे खोलते समय दो ग़लतियाँ सबसे ज़्यादा होती हैं।',
          'पहली — सफ़ाई। कोई भी सिक्का जो निकले, उसे धोइए मत, रगड़िए मत, चमकाइए मत। यह वह क्षण है जहाँ सबसे ज़्यादा क़ीमत नष्ट होती है, और वह भी नेक इरादे से।',
          'दूसरी — बिखेरना। बच्चों में बाँट देना, अलग-अलग जगह रख देना, या जल्दबाज़ी में बेच देना। संग्रह की पूरी कहानी तभी बचती है जब वह एक साथ रहे।',
          'सही क़दम सरल है: सब कुछ एक साफ़ मेज़ पर फैलाइए, वर्ष के क्रम में लगाइए, तस्वीरें लीजिए, और एक सूची बनाइए। यह एक शाम का काम है और यह पीढ़ियों की संपत्ति सुरक्षित कर देता है।',
        ],
        pEn: [
          'This story comes with a piece of practical advice, because every household has such a trunk and two mistakes are made most often when it is opened.',
          'The first is cleaning. Whatever coin emerges, do not wash it, do not rub it, do not polish it. This is the moment at which the most value is destroyed, and always with good intentions.',
          'The second is scattering. Distributing them among children, storing them in different places, or selling in a hurry. The whole story of a collection survives only while it stays together.',
          'The right step is simple: spread everything on a clean table, arrange it by year, take photographs, and make a list. That is an evening’s work and it secures what generations put aside.',
        ],
      },
      {
        hHi: 'कहानी के भीतर का पाठ',
        hEn: 'The lesson inside the story',
        pHi: [
          'इस कहानी का असली विषय सिक्के नहीं हैं। असली विषय यह है कि इतिहास कोई दूर की चीज़ नहीं — वह हथेली पर रखा जा सकता है।',
          'एक बच्चा जिसने चौथाई आना छुआ है, उसके लिए “ब्रिटिश शासन” किताब का एक अध्याय नहीं रह जाता। वह एक धातु का टुकड़ा बन जाता है जिसका वज़न उसे याद है।',
          'और दूसरा पाठ मूल्य के बारे में है। इन सिक्कों की बाज़ारू क़ीमत कुछ सौ रुपये है। पर उनकी असली क़ीमत उस शाम में है जब दादाजी ने संदूक़ खोली और बताया कि यह किसका था।',
          'वह चीज़ बिकती नहीं। और यही समझ लेना शायद इस पूरी कहानी का सबसे उपयोगी हिस्सा है — दोनों तरह की क़ीमत असली हैं, पर वे एक ही चीज़ नहीं हैं।',
        ],
        pEn: [
          'The real subject of this story is not coins. The real subject is that history is not a distant thing — it can be held in a palm.',
          'For a child who has touched a quarter anna, “British rule” stops being a chapter in a book. It becomes a piece of metal whose weight is remembered.',
          'And the second lesson is about value. The market price of these coins is a few hundred rupees. Their real value lies in the evening when the grandfather opened the trunk and said whose these had been.',
          'That does not sell. Understanding it is perhaps the most useful part of the whole story — both kinds of value are real, and they are not the same thing.',
        ],
      },
      {
        hHi: 'घर पर यह कैसे दोहराएँ',
        hEn: 'How to repeat this at home',
        pHi: [
          'आपको दुर्लभ सिक्कों की ज़रूरत नहीं। रसोई के गल्ले में पड़े आज के सिक्के भी काम कर जाते हैं — बस उन्हें वर्ष के क्रम में लगा दीजिए।',
          'बच्चे से पूछिए कि सबसे पुराना कौन-सा है, और उस वर्ष क्या हुआ था। फिर पूछिए कि तब वह कहाँ था, या आप कहाँ थे। कहानी अपने आप शुरू हो जाती है।',
          'अगर घर में कोई पुराना सिक्का है — किसी का भी, किसी भी दौर का — तो उसे बच्चे के हाथ में दीजिए और बताइए कि यह किसका था। यह पंद्रह मिनट का काम है।',
          'और अंत में सबसे ज़रूरी बात: सिक्के के साथ एक पर्ची रखिए जिस पर लिखा हो कि यह किसका था। पचास साल बाद वह पर्ची सिक्के से ज़्यादा क़ीमती निकलेगी।',
        ],
        pEn: [
          'You do not need rare coins. Today’s coins from the kitchen change bowl work perfectly well — simply arrange them in order of year.',
          'Ask the child which is oldest, and what happened in that year. Then ask where they were then, or where you were. The story starts on its own.',
          'If there is an old coin in the house — anybody’s, from any period — put it in the child’s hand and say whose it was. That is fifteen minutes of work.',
          'And the most important thing at the end: keep a slip with the coin recording whose it was. Fifty years from now that slip will be worth more than the coin.',
        ],
      },
    ],
  },
  {
    slug: 'purane-note-ki-keemat',
    sections: [
      {
        hHi: 'नोट की दशा, जो सिक्के से भी ज़्यादा मायने रखती है',
        hEn: 'The condition of a note, which matters even more than a coin’s',
        pHi: [
          'काग़ज़ धातु से कहीं ज़्यादा नाज़ुक है, और यही कारण है कि नोटों में दशा का असर क़ीमत पर सिक्कों से भी तीखा होता है।',
          'संग्राहक नोट की दशा को इन शब्दों में नापते हैं: UNC (बिल्कुल अनछुआ, कोई मोड़ नहीं), AU (लगभग अनछुआ, एक हल्का मोड़), XF, VF, F, और अंत में Poor। हर पायदान पर दाम गिरता है।',
          'सबसे बड़ा फ़र्क़ UNC और उसके ठीक नीचे वाले पायदान के बीच है। एक भी मोड़ नोट को UNC से बाहर कर देता है, और वह अकेला मोड़ कई बार आधी क़ीमत ले जाता है।',
          'इसीलिए जिस नोट को आप रखना चाहते हैं, उसे मोड़िए मत, पिन मत लगाइए, और स्टेपल तो कभी नहीं। स्टेपल के छेद स्थायी हैं और वे दशा को कई पायदान नीचे गिरा देते हैं।',
        ],
        pEn: [
          'Paper is far more fragile than metal, which is why condition affects the price of a note even more sharply than it does a coin.',
          'Collectors describe the condition of a note as UNC (entirely untouched, no fold), AU (about uncirculated, one light fold), XF, VF, F, and finally Poor. The price falls at every step.',
          'The largest gap sits between UNC and the grade immediately below it. A single fold takes a note out of UNC, and that one fold frequently takes half the value with it.',
          'So a note you intend to keep should never be folded, never pinned, and certainly never stapled. Staple holes are permanent and drop the grade by several steps.',
        ],
      },
      {
        hHi: 'सचमुच माँग वाले नोट कौन-से हैं',
        hEn: 'Which notes are genuinely sought',
        pHi: [
          'पहले, ब्रिटिश भारत के नोट — जिन पर जॉर्ज V या जॉर्ज VI का चित्र है। ये स्वाभाविक रूप से कम बचे हैं और गंभीर माँग रखते हैं।',
          'दूसरे, हज नोट। ये विशेष रूप से हज यात्रियों के लिए जारी किए गए थे, उन पर “HAJ” अंकित है और उपसर्ग HA है, ताकि वे भारत में प्रचलित न हों। सीमित उद्देश्य का मतलब सीमित संख्या, और यही उन्हें ख़ास बनाता है।',
          'तीसरे, फ़ारसी खाड़ी के लिए जारी नोट, जिन पर “Z” उपसर्ग है — ये भी एक विशिष्ट प्रयोजन के लिए बने थे।',
          'चौथे, वे नोट जिन पर किसी गवर्नर के हस्ताक्षर बहुत कम समय के लिए रहे, और पहली शृंखलाएँ — जैसे स्वतंत्र भारत के शुरुआती जारी नोट, जिन पर अशोक स्तंभ पहली बार आया।',
        ],
        pEn: [
          'First, the notes of British India carrying the portrait of George V or George VI. Fewer of these naturally survive and they attract serious demand.',
          'Second, the Haj notes. These were issued specifically for pilgrims, marked “HAJ” with the HA prefix so that they would not circulate within India. A limited purpose meant limited numbers, and that is what makes them special.',
          'Third, the notes issued for the Persian Gulf carrying the “Z” prefix — these too were made for one particular purpose.',
          'Fourth, notes bearing the signature of a governor who served only briefly, and first series — such as the earliest issues of independent India, on which the Ashoka pillar appeared for the first time.',
        ],
      },
      {
        hHi: 'सीरियल नंबर का सच',
        hEn: 'The truth about serial numbers',
        pHi: [
          'यह वह क्षेत्र है जहाँ सबसे ज़्यादा अतिशयोक्ति फैली है। कुछ सीरियल नंबर सचमुच संग्राहकों को आकर्षित करते हैं — 000001 जैसा पहला नंबर, या 123456 जैसी सीढ़ी, या 777777 जैसा दोहराव।',
          'इनकी माँग असली है और दाम अंकित मूल्य से ऊपर जाता है। पर यह माँग एक सीमित समुदाय की है, और दाम उतने ही होते हैं जितने कोई देने को तैयार हो — कोई प्रकाशित दर नहीं है।',
          'जो झूठ है वह यह दावा है कि कोई साधारण नंबर आपको लखपति बना देगा। ऐसे वीडियो हर महीने वायरल होते हैं, और उनका ढाँचा वही होता है: असाधारण दावा, एक फ़ोन नंबर, फिर अग्रिम शुल्क।',
          'जाँच का तरीक़ा भी वही है — पूछिए कि यह किस नीलामी में, किस तारीख़ को, किस दाम पर बिका। असली रिकॉर्ड दिखाया जा सकता है; कहानी नहीं।',
        ],
        pEn: [
          'This is where the most exaggeration circulates. Some serial numbers genuinely attract collectors — a first number such as 000001, a ladder such as 123456, or a repeater such as 777777.',
          'That demand is real and prices do rise above face value. But it is the demand of a small community, and the price is whatever somebody is willing to pay — there is no published rate.',
          'What is false is the claim that some ordinary number will make you a lakhpati. Such videos go viral every month, and their structure never changes: an extraordinary claim, a phone number, then an advance fee.',
          'The test is the same as always — ask at which auction, on what date, and at what price it sold. A genuine record can be produced; a story cannot.',
        ],
      },
      {
        hHi: 'विमुद्रीकरण वाले नोट',
        hEn: 'The demonetised notes',
        pHi: [
          '2016 में पाँच सौ और एक हज़ार के पुराने नोट वैध मुद्रा नहीं रहे, और तब से सबसे ज़्यादा पूछा जाने वाला सवाल यही है कि उनकी क़ीमत क्या है।',
          'ईमानदार उत्तर: बहुत कम। ये नोट अरबों की संख्या में छपे थे और करोड़ों की संख्या में लोगों के पास बचे हुए हैं। जो चीज़ इतनी बहुतायत में हो, वह दुर्लभ नहीं हो सकती।',
          'संग्राहक की दृष्टि से इनका महत्व स्मृति का है, बाज़ार का नहीं। एक अच्छी दशा का नमूना रखना उचित है — यह एक ऐतिहासिक क्षण का दस्तावेज़ है — पर उसे निवेश समझना ग़लत है।',
          'यही बात 1978 के विमुद्रीकरण पर लागू नहीं होती। उस समय के बड़े मूल्यवर्ग के नोट — एक हज़ार, पाँच हज़ार, दस हज़ार — सचमुच दुर्लभ हैं, क्योंकि वे कम छपे और कम बचे।',
        ],
        pEn: [
          'In 2016 the old five hundred and one thousand rupee notes ceased to be legal tender, and the question asked most often since then is what they are worth.',
          'The honest answer: very little. These notes were printed in billions and remain with people in crores. Something that abundant cannot be rare.',
          'From a collector’s point of view their importance is one of memory rather than market. Keeping one good example is reasonable — it documents a historical moment — but treating it as an investment is a mistake.',
          'The same does not apply to the demonetisation of 1978. The large denominations of that period — one thousand, five thousand and ten thousand rupees — are genuinely scarce, because few were printed and fewer survive.',
        ],
      },
      {
        hHi: 'काग़ज़ को सँभालना',
        hEn: 'Preserving paper',
        pHi: [
          'नोट के तीन दुश्मन हैं: नमी, धूप और अम्ल। नमी फफूँद लाती है, धूप रंग उड़ाती है, और साधारण काग़ज़ या प्लास्टिक में मौजूद अम्ल काग़ज़ को भीतर से भूरा कर देता है।',
          'सुरक्षित भंडारण के लिए माइलर की स्लीव सबसे अच्छी है — वह कड़ी होती है, अम्ल-रहित है, और नोट को मुड़ने नहीं देती। पीवीसी वाली पुरानी थैलियाँ यहाँ भी वर्जित हैं।',
          'नोट को समतल रखिए, कभी मोड़कर नहीं। एक एल्बम में सीधा रखा नोट दशकों तक अपनी दशा बनाए रखता है; एक बटुए में मुड़ा नोट कुछ महीनों में गिर जाता है।',
          'और लेमिनेशन कभी मत कराइए। यह सुरक्षा जैसा लगता है और वास्तव में स्थायी क्षति है — लेमिनेट किया गया नोट संग्राहकों के बाज़ार से पूरी तरह बाहर हो जाता है।',
        ],
        pEn: [
          'A note has three enemies: moisture, sunlight and acid. Moisture brings mould, sunlight fades the colours, and the acid present in ordinary paper or plastic browns the paper from within.',
          'For safe storage a Mylar sleeve is best — rigid, acid-free, and it stops the note from folding. Old PVC sleeves are forbidden here as well.',
          'Keep notes flat, never folded. A note stored flat in an album holds its grade for decades; a note folded in a wallet loses it within months.',
          'And never have one laminated. It looks like protection and is in fact permanent damage — a laminated note is removed entirely from the collectors’ market.',
        ],
      },
      {
        hHi: 'बेचने से पहले',
        hEn: 'Before selling',
        pHi: [
          'वही चार क़दम जो सिक्कों पर लागू होते हैं, नोटों पर भी लागू हैं। एक सूची बनाइए — मूल्यवर्ग, वर्ष, गवर्नर के हस्ताक्षर, उपसर्ग, सीरियल नंबर, और दशा।',
          'तस्वीरें लीजिए, दोनों तरफ़ की, समतल रखकर, बिना फ़्लैश के। नोटों के मामले में तस्वीर की गुणवत्ता और भी ज़्यादा मायने रखती है क्योंकि दशा ही सब कुछ है।',
          'बीते नीलामी-नतीजे देखिए, माँगी गई क़ीमतें नहीं। और दशा का मिलान कीजिए — आपका मुड़ा हुआ नोट किसी UNC नमूने के दाम से नहीं तौला जा सकता।',
          'और वही अंतिम नियम: पैसा ख़रीदार से विक्रेता की ओर बहता है। जो आपसे रजिस्ट्रेशन, वेरिफ़िकेशन या कूरियर का शुल्क माँगे, वह ख़रीदार नहीं है।',
        ],
        pEn: [
          'The same four steps that apply to coins apply to notes. Make a list — denomination, year, governor’s signature, prefix, serial number, and condition.',
          'Photograph them, both sides, laid flat, without flash. With notes the quality of the photograph matters even more, because condition is everything.',
          'Look at past auction results rather than asking prices. And match the grade — your folded note cannot be weighed against the price of a UNC example.',
          'And the same final rule: money flows from the buyer to the seller. Anybody asking you for a registration, verification or courier fee is not a buyer.',
        ],
      },
    ],
  },
  {
    slug: 'sikkon-se-bacchon-ki-shiksha',
    sections: [
      {
        hHi: 'गतिविधि एक: समय की रेखा',
        hEn: 'Activity one: the timeline',
        pHi: [
          'घर के सारे सिक्के एक मेज़ पर फैलाइए और बच्चे से कहिए कि उन्हें वर्ष के क्रम में लगाए, सबसे पुराने से सबसे नए तक।',
          'यह सरल काम कई चीज़ें एक साथ सिखाता है: अंक पढ़ना, बड़े-छोटे की तुलना, और यह विचार कि समय एक रेखा है जिस पर चीज़ें क्रम से बैठती हैं।',
          'फिर पूछिए कि सबसे पुराना सिक्का कितने साल का है, और उस वर्ष कौन पैदा हुआ था — शायद आप, शायद उनके दादा। घटाव का अभ्यास अपने आप हो जाता है और वह उबाऊ नहीं लगता।',
          'बड़े बच्चों के लिए इसे आगे बढ़ाइए: हर दशक के लिए एक घटना लिखवाइए। तब वह रेखा केवल सिक्कों की नहीं, देश की भी बन जाती है।',
        ],
        pEn: [
          'Spread every coin in the house on a table and ask the child to arrange them by year, from oldest to newest.',
          'This simple task teaches several things at once: reading numerals, comparing larger and smaller, and the idea that time is a line along which things sit in order.',
          'Then ask how old the oldest coin is, and who was born in that year — perhaps you, perhaps their grandfather. Subtraction gets practised on its own and does not feel like a chore.',
          'For older children, extend it: have them write one event against each decade. The line then becomes not only a line of coins but a line of the country.',
        ],
      },
      {
        hHi: 'गतिविधि दो: टकसाल का नक़्शा',
        hEn: 'Activity two: the map of mints',
        pHi: [
          'भारत का एक नक़्शा दीवार पर लगाइए और उस पर चार बिंदु चिह्नित कीजिए: मुंबई, कोलकाता, हैदराबाद और नोएडा।',
          'अब बच्चे को लूप दीजिए और कहिए कि हर सिक्के के नीचे टकसाल-चिह्न ढूँढ़े — मुंबई का हीरा, हैदराबाद का बिंदु या तारा, नोएडा का ठोस बिंदु, और कोलकाता का “कोई चिह्न नहीं”।',
          'हर मिले हुए सिक्के को नक़्शे पर उसकी टकसाल के पास रख दीजिए। कुछ ही देर में मेज़ पर एक भौगोलिक चित्र बन जाता है।',
          'यह गतिविधि भूगोल पढ़ाती है बिना पढ़ाए। बच्चा शहरों के नाम याद नहीं करता — वह उन्हें अपने हाथ के सिक्कों से जोड़ लेता है, और वह जोड़ टिकता है।',
        ],
        pEn: [
          'Put a map of India on the wall and mark four points on it: Mumbai, Kolkata, Hyderabad and Noida.',
          'Now give the child a loupe and ask them to find the mint mark under each coin — the Mumbai diamond, the Hyderabad dot or star, the Noida solid dot, and Kolkata’s “no mark at all”.',
          'Place each identified coin on the map beside its mint. Within a short while a geographical picture forms on the table.',
          'This activity teaches geography without teaching. The child does not memorise city names — they attach them to coins held in their own hand, and that attachment lasts.',
        ],
      },
      {
        hHi: 'गतिविधि तीन: वज़न और घनत्व',
        hEn: 'Activity three: weight and density',
        pHi: [
          'एक सस्ता रसोई-तराज़ू लीजिए और बच्चे से हर सिक्के का वज़न लिखवाइए। फिर पूछिए: सबसे भारी कौन-सा है, सबसे हल्का कौन-सा।',
          'यहाँ एक बहुत अच्छा सवाल निकलता है — दो सिक्के एक ही आकार के हैं, फिर वज़न अलग क्यों? यह घनत्व की अवधारणा का सबसे स्वाभाविक परिचय है।',
          'एल्युमिनियम का एक पैसा और स्टेनलेस स्टील का एक रुपया साथ-साथ रखिए। आकार में अंतर कम, वज़न में बहुत। बच्चा ख़ुद निष्कर्ष निकाल लेता है कि धातुएँ अलग-अलग होती हैं।',
          'और यहीं से एक इतिहास की बात भी निकलती है: सरकारें धातु बदलती क्यों हैं? क्योंकि धातु महँगी हो जाती है। दसवीं कक्षा का अर्थशास्त्र, आठ साल की उम्र में।',
        ],
        pEn: [
          'Take a cheap kitchen scale and have the child record the weight of each coin. Then ask which is heaviest and which lightest.',
          'A very good question emerges here — two coins are the same size, so why do they weigh differently? That is the most natural introduction there is to the idea of density.',
          'Place an aluminium one paisa beside a stainless steel one rupee. Little difference in size, a great difference in weight. The child concludes on their own that metals are not the same as one another.',
          'And a piece of history follows from it: why do governments change the metal? Because the metal becomes expensive. Secondary-school economics, at the age of eight.',
        ],
      },
      {
        hHi: 'गतिविधि चार: बचत का असली गणित',
        hEn: 'Activity four: the real arithmetic of saving',
        pHi: [
          'बच्चे को एक पारदर्शी डिब्बा दीजिए और तय कीजिए कि हर हफ़्ते कुछ सिक्के उसमें जाएँगे। पारदर्शी इसलिए कि ढेर का बढ़ना दिखे।',
          'हर महीने के अंत में उसे गिनवाइए और एक नोटबुक में दर्ज करवाइए। कुछ महीनों बाद बच्चा ख़ुद अंदाज़ा लगाने लगता है कि किसी लक्ष्य तक पहुँचने में कितना समय लगेगा।',
          'यहाँ एक बात कहनी ज़रूरी है जो अक्सर छूट जाती है: बच्चे को पैसे ख़र्च करने भी दीजिए। बचत तभी अर्थ रखती है जब उसका एक उद्देश्य हो, और उद्देश्य पूरा होना दिखे।',
          'गिनने में समूह बनाना सिखाइए — दस-दस के ढेर, फिर सौ के। यह गुणा और स्थानीय मान का सबसे ठोस अभ्यास है, और इसमें कोई कार्यपुस्तिका नहीं लगती।',
        ],
        pEn: [
          'Give the child a transparent box and agree that some coins go into it every week. Transparent, so that the growing pile is visible.',
          'At the end of each month have them count it and record the figure in a notebook. After a few months the child begins estimating on their own how long a target will take to reach.',
          'One thing needs saying here that is often left out: let the child spend some of it too. Saving means something only when it has a purpose, and when that purpose is seen to arrive.',
          'Teach grouping while counting — piles of ten, then of a hundred. That is the most concrete practice in multiplication and place value there is, and it needs no workbook.',
        ],
      },
      {
        hHi: 'गतिविधि पाँच: सिक्के की कहानी लिखना',
        hEn: 'Activity five: writing the coin’s story',
        pHi: [
          'सबसे पुराना सिक्का चुनिए और बच्चे से कहिए कि उसकी यात्रा की कहानी लिखे — यह किन-किन हाथों से गुज़रा होगा, किस दुकान में गया होगा, किसने इससे क्या ख़रीदा होगा।',
          'यह कल्पना का अभ्यास है और साथ ही इतिहास का। कहानी लिखने के लिए बच्चे को यह जानना पड़ता है कि उस वर्ष चीज़ें कितने की मिलती थीं, लोग कैसे रहते थे।',
          'बड़े बच्चों के लिए इसे शोध बना दीजिए: उस वर्ष के बारे में तीन तथ्य ढूँढ़ो और कहानी में डालो। अब यह लेखन और शोध दोनों का काम है।',
          'और सबसे अच्छी बात — यह कहानी सँभालकर रखी जा सकती है। सिक्के के साथ एक पर्ची में, बच्चे की अपनी लिखावट में। पचास साल बाद वह पर्ची अपने आप में एक वस्तु होगी।',
        ],
        pEn: [
          'Pick the oldest coin and ask the child to write the story of its journey — through whose hands it passed, which shop it entered, what somebody bought with it.',
          'This is an exercise in imagination and equally in history. To write the story the child has to find out what things cost that year and how people lived.',
          'For older children, turn it into research: find three facts about that year and work them into the story. Now it is a piece of writing and a piece of research at once.',
          'And the best part — the story can be kept. On a slip beside the coin, in the child’s own handwriting. Fifty years from now that slip will be an object in its own right.',
        ],
      },
      {
        hHi: 'माता-पिता के लिए तीन नियम',
        hEn: 'Three rules for the parents',
        pHi: [
          'पहला — छोटे बच्चों की निगरानी कीजिए। सिक्के मुँह में जा सकते हैं, और यह एक वास्तविक ख़तरा है। तीन साल से छोटे बच्चों के साथ यह गतिविधि उपयुक्त नहीं है।',
          'दूसरा — साफ़ मत करने दीजिए। बच्चों की स्वाभाविक इच्छा सिक्के को चमकाने की होती है, और यहीं सबसे ज़्यादा नुक़सान होता है। समझा दीजिए कि पुराना दिखना अच्छी बात है।',
          'तीसरा — इसे पाठ मत बनाइए। जिस क्षण यह “पढ़ाई” बन जाएगी, रुचि ख़त्म हो जाएगी। सवाल पूछिए, जवाब मत दीजिए, और बच्चे को ख़ुद खोजने दीजिए।',
          'इस पूरी बात की सबसे अच्छी विशेषता यही है कि इसका ख़र्च लगभग शून्य है। एक लूप, एक तराज़ू, एक नक़्शा, और घर में पहले से मौजूद सिक्के — इतना ही चाहिए।',
        ],
        pEn: [
          'First — supervise small children. Coins can go into mouths, and that is a genuine hazard. This activity is not appropriate for children under three.',
          'Second — do not let them clean anything. A child’s natural instinct is to polish a coin, and that is where the most damage happens. Explain that looking old is a good thing here.',
          'Third — do not turn it into a lesson. The moment it becomes “study”, the interest ends. Ask questions, do not supply answers, and let the child find things out.',
          'The best feature of the whole exercise is that it costs almost nothing. A loupe, a scale, a map, and the coins already in the house — that is the entire requirement.',
        ],
      },
    ],
  },
  {
    slug: 'kushan-swarn-mudra',
    sections: [
      {
        hHi: 'कुषाण कौन थे',
        hEn: 'Who the Kushans were',
        pHi: [
          'कुषाण मध्य एशिया के यूएझी लोगों की एक शाखा से निकले, और पहली से तीसरी शताब्दी के बीच उन्होंने एक ऐसा साम्राज्य खड़ा किया जो आज के ताजिकिस्तान से लेकर उत्तरी भारत तक फैला था।',
          'उनकी सबसे बड़ी उपलब्धि भौगोलिक थी। वे रेशम मार्ग के उस हिस्से पर बैठे थे जहाँ चीन, ईरान, रोम और भारत का व्यापार मिलता था — और इसी स्थिति ने उनके सिक्कों को वह चरित्र दिया जो और कहीं नहीं मिलता।',
          'कनिष्क सबसे प्रसिद्ध शासक हैं, और उनके सिक्के इस पूरी शृंखला का केंद्र हैं। उनसे पहले विम कडफ़ाइसेस ने सोने की मुद्रा की नींव रखी, और उनके बाद हुविष्क और वासुदेव ने उसे आगे बढ़ाया।',
          'भारतीय इतिहास में कुषाणों का महत्व केवल राजनीतिक नहीं है। बौद्ध कला का गांधार और मथुरा रूप इसी दौर में विकसित हुआ, और सिक्के उसी सांस्कृतिक मिश्रण के सबसे छोटे दस्तावेज़ हैं।',
        ],
        pEn: [
          'The Kushans emerged from a branch of the Yuezhi people of Central Asia, and between the first and third centuries they built an empire stretching from present-day Tajikistan into northern India.',
          'Their greatest asset was geographical. They sat on the stretch of the Silk Road where the trade of China, Iran, Rome and India met — and that position gave their coinage a character found nowhere else.',
          'Kanishka is the best-known ruler, and his coins are the centre of the whole series. Before him Vima Kadphises laid the foundation of the gold coinage, and after him Huvishka and Vasudeva carried it forward.',
          'The importance of the Kushans in Indian history is not only political. The Gandhara and Mathura forms of Buddhist art developed in this period, and the coins are the smallest documents of that same cultural mixing.',
        ],
      },
      {
        hHi: 'सिक्कों पर देवताओं की भीड़',
        hEn: 'The crowd of deities on the coins',
        pHi: [
          'कुषाण सिक्कों की सबसे उल्लेखनीय बात यह है कि उन पर कितने अलग-अलग धर्मों के देवता एक साथ मिलते हैं। यह किसी और प्राचीन मुद्रा में इस पैमाने पर नहीं दिखता।',
          'एक ओर शिव नंदी के साथ, जिन्हें लेख में “ओएशो” कहा गया है। दूसरी ओर बुद्ध, जिन्हें “बोद्दो” लिखा गया — और यह बुद्ध के सबसे शुरुआती ज्ञात मुद्रा-चित्रणों में से है।',
          'इनके साथ ईरानी देवता — मिथ्र (सूर्य), नाना, अथ्शो (अग्नि) — और यूनानी परंपरा से हेलिओस तथा सेलेने। एक ही शासक के सिक्कों पर तीन-चार परंपराएँ साथ-साथ चलती हैं।',
          'इतिहासकार इसे व्यावहारिक शासन-कला के रूप में पढ़ते हैं। एक ऐसा साम्राज्य जिसमें कई धर्मों के लोग रहते हों, उसके सिक्के सबकी पहचान को जगह देते हैं — और यह निर्णय आज भी उल्लेखनीय लगता है।',
        ],
        pEn: [
          'The most remarkable feature of Kushan coinage is how many deities from different religions appear on it together. No other ancient coinage shows this on the same scale.',
          'On one side Shiva with Nandi, named in the legend as Oesho. On another the Buddha, written as Boddo — among the earliest known depictions of the Buddha on any coin.',
          'Alongside them the Iranian deities — Mithra the sun, Nana, Athsho the fire — and from the Greek tradition Helios and Selene. Three or four traditions run side by side on the coins of a single ruler.',
          'Historians read this as practical statecraft. An empire containing people of many religions issued coins that made room for each identity — a decision that still looks notable today.',
        ],
      },
      {
        hHi: 'लिखावट और भाषा',
        hEn: 'Script and language',
        pHi: [
          'कुषाण सिक्कों की लिपि यूनानी है, पर भाषा यूनानी नहीं — वह बैक्ट्रियन है, एक ईरानी भाषा जिसे यूनानी अक्षरों में लिखा गया।',
          'यह अपने आप में उस दौर के सांस्कृतिक मिश्रण का प्रमाण है। सिकंदर के बाद इस क्षेत्र में यूनानी लिपि टिकी रही, और स्थानीय भाषा ने उसे अपना लिया।',
          'शुरुआती कुषाण सिक्कों पर खरोष्ठी लिपि भी मिलती है, जो गांधार क्षेत्र की अपनी लिपि थी और दाएँ से बाएँ लिखी जाती थी।',
          'संग्राहक के लिए व्यावहारिक बात यह है कि शासक का नाम आमतौर पर पढ़ा जा सकता है — कनिष्क “ΚΑΝΗϷΚΙ” के रूप में, और यही पहचान का सबसे भरोसेमंद सूत्र है। नाम के अक्षरों का आकार पहचान लेना कुछ ही दिनों का काम है।',
        ],
        pEn: [
          'The script on Kushan coins is Greek, but the language is not Greek — it is Bactrian, an Iranian language written in Greek letters.',
          'That alone is evidence of the cultural mixing of the period. After Alexander, the Greek script survived in this region and the local language adopted it.',
          'Early Kushan coins also carry Kharoshthi, the script of the Gandhara region, written from right to left.',
          'The practical point for a collector is that the ruler’s name can usually be read — Kanishka as ΚΑΝΗϷΚΙ — and it is the most dependable clue to identification. Learning to recognise the shapes of that name takes only a few days.',
        ],
      },
      {
        hHi: 'सोने का मानक',
        hEn: 'The gold standard',
        pHi: [
          'कुषाण सोने के सिक्के का वज़न लगभग 8 ग्राम रहा, जो रोमन ऑरियस के मानक के क़रीब बैठता है — और यह संयोग नहीं था।',
          'रोम के साथ भारत का व्यापार उस दौर में बहुत बड़ा था, और रोमन सोने के सिक्के भारत में बड़ी मात्रा में पहुँचते थे। एक मिलता-जुलता मानक अपनाना व्यापार को आसान बनाता है।',
          'कुषाणों ने आधे और चौथाई मूल्यवर्ग भी जारी किए, और साथ में ताँबे की मुद्रा जो रोज़मर्रा के बाज़ार में चलती थी। ताँबे के कुषाण सिक्के आज भी बहुत सस्ते मिलते हैं।',
          'इस मानक की सबसे बड़ी विरासत यह है कि गुप्त सम्राटों ने इसे अपनाया। गुप्त दीनार का जन्म कुषाण मानक से हुआ, और वहीं से भारतीय सोने की मुद्रा की वह परंपरा शुरू हुई जो सदियों चली।',
        ],
        pEn: [
          'The Kushan gold coin weighed roughly 8 grams, close to the standard of the Roman aureus — and that was no coincidence.',
          'India’s trade with Rome was very large in this period, and Roman gold arrived in quantity. Adopting a comparable standard made trade simpler.',
          'The Kushans also issued half and quarter denominations, alongside a copper coinage that served the everyday market. Kushan copper remains very inexpensive today.',
          'The greatest legacy of this standard is that the Gupta emperors adopted it. The Gupta dinara was born from the Kushan standard, and from there began the tradition of Indian gold coinage that ran for centuries.',
        ],
      },
      {
        hHi: 'संग्राहक के लिए रास्ता',
        hEn: 'A route for the collector',
        pHi: [
          'सोने के कुषाण सिक्के महँगे हैं, पर एक अच्छी ख़बर है: वे गुप्त सोने से अक्सर सस्ते मिलते हैं, क्योंकि माँग तुलनात्मक रूप से कम है।',
          'ताँबे के कुषाण सिक्के इस क्षेत्र का असली प्रवेश-द्वार हैं। ये बड़ी संख्या में बचे हैं, कुछ हज़ार रुपये में मिल जाते हैं, और उन पर वही देवता और वही लिखावट मिलती है जो सोने पर।',
          'शुरुआत के लिए सबसे अच्छा लक्ष्य “एक शासक, कई प्रकार” है — जैसे कनिष्क के ताँबे के सिक्कों में अलग-अलग देवताओं वाले प्रकार जुटाना। यह सीमित है, सस्ता है, और उसमें कहानी है।',
          'चेतावनी वही जो हर प्राचीन सोने पर लागू होती है: बिना प्रमाणन के महँगा सिक्का मत ख़रीदिए, स्रोत पूछिए, और वज़न तौलकर देखिए।',
        ],
        pEn: [
          'Kushan gold is expensive, but there is good news: it often costs less than Gupta gold, because demand for it is comparatively lower.',
          'Kushan copper is the real doorway into this field. It survives in quantity, costs a few thousand rupees, and carries the same deities and the same script as the gold.',
          'The best target to begin with is “one ruler, many types” — assembling the copper coins of Kanishka showing different deities, for instance. It is bounded, affordable, and it contains a story.',
          'The caution is the one that applies to all ancient gold: do not buy an expensive coin without certification, ask about provenance, and check the weight on a scale.',
        ],
      },
      {
        hHi: 'ये सिक्के क्या बताते हैं',
        hEn: 'What these coins tell us',
        pHi: [
          'कुषाण मुद्रा का असली महत्व उसकी सुंदरता नहीं, उसकी गवाही है। ये सिक्के बताते हैं कि दो हज़ार साल पहले इस क्षेत्र में कितनी परंपराएँ एक साथ चल रही थीं।',
          'एक ही शासक ने शिव, बुद्ध, मिथ्र और हेलिओस को अपने सिक्कों पर जगह दी — और यह किसी उदारता की घोषणा नहीं थी, बल्कि उस समाज का सीधा प्रतिबिंब था जिस पर वह शासन कर रहा था।',
          'व्यापार का पक्ष भी उतना ही स्पष्ट है। रोमन मानक के क़रीब वज़न, यूनानी लिपि, ईरानी भाषा, भारतीय देवता — एक सिक्के पर चार दुनियाएँ।',
          'इसीलिए कुषाण सिक्का किसी भी भारतीय संग्रह में एक विशेष जगह रखता है। वह केवल पुराना नहीं है; वह उस क्षण का दस्तावेज़ है जब यह उपमहाद्वीप दुनिया के बीचोंबीच था।',
        ],
        pEn: [
          'The real importance of Kushan coinage is not its beauty but its testimony. These coins tell us how many traditions were running side by side in this region two thousand years ago.',
          'One ruler gave Shiva, the Buddha, Mithra and Helios a place on his coins — and that was not a declaration of tolerance but a direct reflection of the society he governed.',
          'The commercial side is equally clear. A weight close to the Roman standard, a Greek script, an Iranian language, Indian deities — four worlds on one coin.',
          'This is why a Kushan coin holds a particular place in any Indian collection. It is not merely old; it documents the moment when this subcontinent sat at the centre of the world.',
        ],
      },
    ],
  },
  {
    slug: 'dadaji-ki-sandook-kahani',
    sections: [
      {
        hHi: 'और एक आख़िरी बात',
        hEn: 'And one last thing',
        pHi: [
          'कहानी ख़त्म होने पर बच्चे ने पूछा कि ये सिक्के अब किसके हैं। दादाजी ने कहा — “अभी मेरे। फिर तुम्हारे। और उसके बाद जिसे तुम बताओगे कि ये किसके थे।”',
          'यही इस पूरी कहानी का सार है। वस्तु हस्तांतरित होती है, पर उसकी क़ीमत तभी हस्तांतरित होती है जब उसके साथ उसकी कहानी जाए।',
        ],
        pEn: [
          'When the story ended the child asked whose these coins were now. The grandfather said — “Mine for the moment. Then yours. And after that, whoever you tell whose they were.”',
          'That is the whole of it. The object passes down easily enough, but its value passes down only when the story travels with it, which is why the slip of paper beside each coin matters as much as the coin does.',
        ],
      },
    ],
  },
  {
    slug: 'kushan-swarn-mudra',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'कुषाणों ने पहली से तीसरी शताब्दी में भारत की पहली बड़ी मानक सोने की मुद्रा चलाई, लगभग 8 ग्राम के रोमन-निकट मानक पर।',
          'उनके सिक्कों पर शिव, बुद्ध, मिथ्र और हेलिओस एक साथ मिलते हैं — यूनानी लिपि में लिखी बैक्ट्रियन भाषा के साथ। एक सिक्के पर चार दुनियाएँ।',
          'सोना महँगा है, पर ताँबे के कुषाण सिक्के कुछ हज़ार में मिलते हैं और उन पर वही देवता, वही लिखावट होती है। यही इस क्षेत्र का असली प्रवेश-द्वार है।',
        ],
        pEn: [
          'The Kushans issued India’s first great standard gold coinage between the first and third centuries, on a weight of roughly 8 grams close to the Roman standard.',
          'Their coins carry Shiva, the Buddha, Mithra and Helios together, with Bactrian written in Greek letters. Four worlds on a single coin, and no other ancient coinage shows this on the same scale.',
          'The gold is expensive, but Kushan copper costs a few thousand rupees and carries the same deities and the same script. That is the real doorway into this field for anybody starting out.',
        ],
      },
    ],
  },
  {
    slug: 'delhi-sultanate-tanka',
    sections: [
      {
        hHi: 'इल्तुतमिश और मानक की स्थापना',
        hEn: 'Iltutmish, and the setting of a standard',
        pHi: [
          'दिल्ली सल्तनत की मुद्रा-व्यवस्था का असली संस्थापक इल्तुतमिश को माना जाता है। उन्होंने तेरहवीं शताब्दी के आरंभ में चाँदी का टंका चलाया, जिसका वज़न लगभग ग्यारह ग्राम रखा गया।',
          'इसके साथ ताँबे का जीतल चला, जो रोज़मर्रा के बाज़ार की मुद्रा थी। दोनों के बीच का अनुपात समय और क्षेत्र के साथ बदलता रहा, पर टंका का वज़न उल्लेखनीय रूप से स्थिर रहा।',
          'यह स्थिरता ही उसकी सबसे बड़ी उपलब्धि है। एक भरोसेमंद वज़न का अर्थ है कि व्यापारी को हर सौदे में धातु तौलनी नहीं पड़ती — और यही वह चीज़ है जो किसी मुद्रा को मुद्रा बनाती है।',
        ],
        pEn: [
          'Iltutmish is regarded as the real founder of the Delhi Sultanate’s monetary system. Early in the thirteenth century he introduced the silver tanka, set at a weight of roughly eleven grams.',
          'Alongside it ran the copper jital, the currency of the everyday market. The ratio between the two shifted with time and region, but the weight of the tanka stayed remarkably constant.',
          'That constancy is its greatest achievement. A dependable weight means a merchant need not weigh metal at every transaction — and that is precisely what turns a piece of silver into a currency.',
        ],
      },
      {
        hHi: 'पाँच वंश, एक शृंखला',
        hEn: 'Five dynasties, one series',
        pHi: [
          'सल्तनत की मुद्रा को समझने का सबसे सरल तरीक़ा उसे वंशों के क्रम में रखना है। मामलूक या ग़ुलाम वंश पहला, फिर ख़िलजी, फिर तुग़लक़, फिर सैयद, और अंत में लोदी।',
          'हर वंश की अपनी शैली है। ख़िलजी दौर के सिक्कों पर अलाउद्दीन की उपाधियाँ भव्य हैं; तुग़लक़ दौर प्रयोगों के लिए जाना जाता है; लोदी दौर के सिक्के अपेक्षाकृत सादे हैं।',
          'यह क्रम संग्राहक के लिए एक स्वाभाविक लक्ष्य बनाता है — हर वंश का कम से कम एक सिक्का। यह पाँच वस्तुओं का संग्रह है, सीमित और स्पष्ट, और उसमें तीन सौ वर्ष का इतिहास बैठ जाता है।',
        ],
        pEn: [
          'The simplest way to make sense of Sultanate coinage is to arrange it by dynasty. The Mamluk or Slave dynasty first, then the Khaljis, then the Tughlaqs, then the Sayyids, and finally the Lodis.',
          'Each dynasty has its own style. The coins of the Khalji period carry Alauddin’s titles in grand form; the Tughlaq period is known for its experiments; the Lodi issues are comparatively plain.',
          'For a collector this sequence makes a natural target — at least one coin from each dynasty. That is a set of five objects, bounded and clear, and three hundred years of history fit inside it.',
        ],
      },
      {
        hHi: 'सजावट के रूप में सुलेख',
        hEn: 'Calligraphy as decoration',
        pHi: [
          'इन सिक्कों पर कोई चित्र नहीं है — न शासक का चेहरा, न कोई पशु, न कोई प्रतीक। जो है वह केवल लिखावट है, और वही लिखावट इनकी पूरी कला है।',
          'लिपि अरबी है और भाषा प्रायः अरबी या फ़ारसी। अक्षरों की बनावट, उनका अनुपात, और गोल सतह पर उनका संयोजन — यह सब सोच-समझकर तय किया गया था।',
          'कुछ सिक्कों पर अक्षरों को एक वर्ग या षट्कोण के भीतर बिठाया गया है, और कुछ पर वे वृत्त के साथ बहते हैं। एक ही पाठ को अलग-अलग टकसालों ने अलग ढंग से सजाया, और यही अंतर संग्राहकों को आकर्षित करता है।',
          'शुरुआत करने वालों के लिए यह डराने वाला लग सकता है। पर व्यवहार में शासक का नाम और कुछ मुख्य उपाधियाँ गिनी-चुनी हैं, और उनके आकार पहचानना कुछ हफ़्तों का काम है।',
        ],
        pEn: [
          'There is no image on these coins — no ruler’s face, no animal, no emblem. What there is, is writing alone, and that writing is their entire art.',
          'The script is Arabic and the language usually Arabic or Persian. The form of the letters, their proportions, and their arrangement across a round surface were all deliberate decisions.',
          'On some coins the lettering sits inside a square or a hexagon; on others it flows with the circle. Different mints treated the same text differently, and that variation is what draws collectors.',
          'To a beginner this can look intimidating. In practice the ruler’s name and the main titles are a finite set, and learning to recognise their shapes is a matter of weeks.',
        ],
      },
      {
        hHi: 'तुग़लक़ का प्रसिद्ध प्रयोग',
        hEn: 'Tughlaq’s famous experiment',
        pHi: [
          'मुहम्मद बिन तुग़लक़ ने 1330 के दशक में एक ऐसा क़दम उठाया जो अपने समय से बहुत आगे था — उन्होंने ताँबे और पीतल के टोकन सिक्के चलाए जिनका अंकित मूल्य चाँदी के टंका के बराबर था।',
          'विचार आधुनिक है। मुद्रा का मूल्य उसकी धातु में नहीं, बल्कि राज्य की गारंटी में हो — यही आज की काग़ज़ी मुद्रा का सिद्धांत है।',
          'पर यह विफल रहा, और कारण व्यावहारिक था: टोकन बनाना आसान था और उस दौर में जालसाज़ी रोकने का कोई तरीक़ा नहीं था। लोगों ने घरों में सिक्के ढालना शुरू कर दिया।',
          'सुल्तान को अंततः सारे टोकन वापस लेकर चाँदी में बदलने पड़े, जिसका ख़ज़ाने पर भारी बोझ पड़ा। संग्राहक के लिए ये टोकन बेहद दिलचस्प हैं, क्योंकि वे एक असफल पर दूरदर्शी विचार का दस्तावेज़ हैं।',
        ],
        pEn: [
          'In the 1330s Muhammad bin Tughlaq took a step far ahead of its time — he issued token coins of copper and brass carrying the face value of a silver tanka.',
          'The idea is a modern one. The value of a currency should lie not in its metal but in the guarantee of the state — which is the principle behind all paper money today.',
          'It failed, and for a practical reason: the tokens were easy to make and there was no way in that period to prevent counterfeiting. People began striking coins in their own homes.',
          'The sultan eventually had to withdraw the tokens and redeem them in silver, at heavy cost to the treasury. For a collector these tokens are fascinating, because they document an idea that was visionary and unworkable at once.',
        ],
      },
      {
        hHi: 'पाठ और तारीख़ पढ़ना',
        hEn: 'Reading the text and the date',
        pHi: [
          'सल्तनत के सिक्के पर आमतौर पर एक ओर शासक का नाम और उपाधियाँ होती हैं, और दूसरी ओर ख़लीफ़ा का उल्लेख या कलिमा।',
          'तारीख़ हिजरी सन् में दर्ज होती है, अरबी अंकों में। ये अंक आधुनिक अरबी अंकों से थोड़े अलग दिख सकते हैं, और यही सबसे ज़्यादा भ्रम पैदा करता है।',
          'टकसाल का नाम भी अक्सर मौजूद रहता है — दिल्ली, देवगिरि, लखनौती, और अन्य। कुछ सिक्कों पर वह स्पष्ट है, कुछ पर घिसाव के कारण अनुमान लगाना पड़ता है।',
          'व्यावहारिक सुझाव: हिजरी अंकों की एक छोटी तालिका छापकर अपने संग्रह के डिब्बे में रख लीजिए। यह एक काग़ज़ इस पूरे क्षेत्र को कई गुना आसान बना देता है।',
        ],
        pEn: [
          'A Sultanate coin usually carries the ruler’s name and titles on one side, and a mention of the caliph or the kalima on the other.',
          'The date is recorded in the Hijri era in Arabic numerals. These can look slightly different from modern Arabic numerals, and that is what causes the most confusion.',
          'The mint name is often present too — Delhi, Deogir, Lakhnauti and others. On some coins it is clear; on others wear makes it a matter of inference.',
          'A practical suggestion: print a small table of Hijri numerals and keep it in your coin box. That single sheet makes the whole field several times easier.',
        ],
      },
      {
        hHi: 'ताँबे का जीतल — सस्ता प्रवेश-द्वार',
        hEn: 'The copper jital — an affordable doorway',
        pHi: [
          'चाँदी का टंका महँगा है और अच्छी दशा में मिलना कठिन। पर ताँबे का जीतल भारी संख्या में ढला और आज भी अपेक्षाकृत सुलभ है।',
          'इन पर वही लिपि, वही पाठ-शैली और वही टकसाल-नाम मिलते हैं जो चाँदी पर। यानी आँख बनाने के लिए वे उतने ही उपयोगी हैं, और दाम का दसवाँ हिस्सा।',
          'शुरुआत का सबसे अच्छा क्रम यही है: पहले कुछ जीतल लीजिए, अक्षरों के आकार से परिचित होइए, टकसाल-नाम पहचानना सीखिए। फिर चाँदी की ओर बढ़िए।',
          'जब तक आप वहाँ पहुँचेंगे, आप एक अच्छे नमूने और एक साधारण नमूने का अंतर ख़ुद बता सकेंगे — और यही वह क्षमता है जो आपको ज़्यादा दाम चुकाने से बचाती है।',
        ],
        pEn: [
          'The silver tanka is expensive and difficult to find in good condition. The copper jital, however, was struck in large numbers and remains comparatively accessible.',
          'It carries the same script, the same style of text and the same mint names as the silver. For building the eye it is therefore just as useful, at a tenth of the price.',
          'The best order to begin in is this: acquire a few jitals first, get familiar with the shapes of the letters, learn to identify the mint names. Then move towards the silver.',
          'By the time you reach it you will be able to tell a good example from an ordinary one yourself — and that is exactly the ability that stops you from overpaying.',
        ],
      },
      {
        hHi: 'सावधानी और ख़रीद',
        hEn: 'Caution, and buying',
        pHi: [
          'सल्तनत के चाँदी के सिक्कों की नक़ल मौजूद है, और सबसे आम प्रकार वही है जो हर पुराने सिक्के में मिलता है — ढला हुआ नक़ल, जिसकी सतह पर बुलबुलों के गड्ढे और किनारे पर अस्वाभाविक गोलापन होता है।',
          'वज़न सबसे तेज़ जाँच है: टंका लगभग ग्यारह ग्राम के आसपास होना चाहिए। घिसाव से थोड़ी कमी सामान्य है, पर बड़ा अंतर सवाल खड़ा करता है।',
          'और एक विशेष सावधानी इस क्षेत्र में लागू होती है: तारीख़ या टकसाल-नाम में छेड़छाड़। दुर्लभ टकसाल का नाम गढ़कर आम सिक्के को महँगा बनाया जा सकता है, इसलिए महँगी ख़रीद से पहले लूप से अक्षरों के चारों ओर की सतह देखिए।',
        ],
        pEn: [
          'Forgeries of Sultanate silver exist, and the commonest type is the one found with every old coin — a cast copy, with bubble pits across the surface and an unnatural roundness at the edge.',
          'Weight is the fastest check: a tanka should sit around eleven grams. Some loss through wear is normal, but a large discrepancy raises a question.',
          'And one caution is particular to this field: tampering with the date or the mint name. Fabricating a rare mint name can turn an ordinary coin into an expensive one, so before any significant purchase examine the surface around the lettering under a loupe.',
        ],
      },
    ],
  },
  {
    slug: 'akbar-ke-sikke',
    sections: [
      {
        hHi: 'तीन धातुओं की व्यवस्था अकबर के हाथ में',
        hEn: 'The three-metal system in Akbar’s hands',
        pHi: [
          'अकबर को विरासत में शेर शाह सूरी की व्यवस्था मिली — सोने की मोहर, चाँदी का रुपिया, ताँबे का दाम — और उन्होंने उसे बदला नहीं, बल्कि कसा।',
          'वज़न के मानक सख़्त किए गए, शुद्धता की जाँच नियमित हुई, और टकसालों की जवाबदेही बढ़ी। परिणाम यह हुआ कि मुग़ल रुपिया व्यापारियों के बीच भरोसे का सिक्का बन गया, साम्राज्य के बाहर भी।',
          'उन्होंने मूल्यवर्ग की सीढ़ी भी बढ़ाई। मोहर के कई गुणक जारी हुए, और चाँदी में भी आधे, चौथाई और छोटे मूल्यवर्ग। यह विविधता संग्राहक के लिए आज एक बड़ा मैदान बनाती है।',
        ],
        pEn: [
          'Akbar inherited Sher Shah Suri’s system — the gold mohur, the silver rupiya, the copper dam — and rather than replacing it he tightened it.',
          'Weight standards were enforced more strictly, purity was checked regularly, and the mints were made more accountable. The result was that the Mughal rupiya became a coin merchants trusted, including beyond the empire’s borders.',
          'He also extended the ladder of denominations. Multiples of the mohur were issued, and halves, quarters and smaller pieces in silver. That variety makes a large field for a collector today.',
        ],
      },
      {
        hHi: 'इलाही सन् और एक नया संदेश',
        hEn: 'The Ilahi era, and a new message',
        pHi: [
          'अकबर ने अपने राज्यारोहण से गिना जाने वाला एक नया सौर कैलेंडर चलाया, जिसे इलाही सन् कहा गया, और कुछ सिक्कों पर हिजरी की जगह वही दर्ज हुआ।',
          'यह केवल कैलेंडर का मामला नहीं था। हिजरी सन् इस्लामी परंपरा से जुड़ा है; उसकी जगह अपने शासन से गिना जाने वाला सन् रखना एक स्पष्ट राजनीतिक बयान था।',
          'इसी दौर में कुछ सिक्कों पर “अल्लाहु अकबर” अंकित हुआ — एक वाक्य जिसे दो तरह पढ़ा जा सकता है, और यही उसकी चतुराई है। समकालीनों ने इस पर बहस की, और इतिहासकार आज भी करते हैं।',
          'महीनों के फ़ारसी नाम भी सिक्कों पर आए — फ़रवर्दीन, ओर्दीबेहिश्त, और आगे। इससे तारीख़ पढ़ना आसान हो जाता है, बशर्ते नाम पहचान लिए जाएँ।',
        ],
        pEn: [
          'Akbar introduced a new solar calendar counted from his own accession, called the Ilahi era, and on some coins it replaced the Hijri date entirely.',
          'This was not merely a matter of calendars. The Hijri era is tied to Islamic tradition; replacing it with one counted from his own reign was a clear political statement.',
          'In the same period some coins carry the phrase Allahu Akbar — a sentence that can be read two ways, and that ambiguity is its cleverness. Contemporaries argued about it, and historians still do.',
          'The Persian month names appear on coins too — Farvardin, Ordibehesht, and onward. This makes the date easier to read, provided the names are recognised.',
        ],
      },
      {
        hHi: 'चौकोर सिक्के और असामान्य आकार',
        hEn: 'Square coins and unusual shapes',
        pHi: [
          'अकबर के दौर की एक विशिष्ट पहचान चौकोर सिक्के हैं, जिन्हें मिहराबी कहा जाता है। ये गोल सिक्कों के साथ-साथ चले और आज संग्राहकों में विशेष रूप से माँगे जाते हैं।',
          'चौकोर आकार व्यावहारिक कारणों से भी सुविधाजनक था — चादर से काटने पर धातु कम बर्बाद होती है — पर उसका सौंदर्य-प्रभाव भी स्पष्ट है, क्योंकि अरबी सुलेख वर्गाकार क्षेत्र में बेहतर बैठती है।',
          'इनके अलावा कुछ बहुत बड़े सोने के सिक्के भी जारी हुए, जो प्रचलन के लिए नहीं बल्कि उपहार और प्रदर्शन के लिए थे। ये अत्यंत दुर्लभ हैं और संग्रहालयों में ही अधिक मिलते हैं।',
        ],
        pEn: [
          'A distinctive feature of Akbar’s period is the square coin, known as mihrabi. These circulated alongside round issues and are particularly sought after by collectors today.',
          'The square shape was practical as well — less metal is wasted when cutting from a sheet — but its aesthetic effect is equally clear, since Arabic calligraphy sits better within a square field.',
          'Beyond these, some very large gold pieces were issued, made not for circulation but for presentation and display. They are extremely rare and are found mostly in museums.',
        ],
      },
      {
        hHi: 'टकसालों का जाल',
        hEn: 'The web of mints',
        pHi: [
          'अकबर के दौर में सौ से अधिक टकसालें काम करती थीं, और हर सिक्के पर उसकी टकसाल का नाम फ़ारसी में दर्ज होता था।',
          'बड़े नाम पहचाने-से लगते हैं: लाहौर, आगरा (अकबराबाद), दिल्ली, अहमदाबाद, इलाहाबाद, फ़तेहपुर सीकरी, काबुल, कश्मीर, बुरहानपुर।',
          'कुछ टकसालें केवल कुछ वर्षों तक चलीं — जैसे फ़तेहपुर सीकरी, जो राजधानी रहने के दौरान ही सक्रिय थी। ऐसी अल्पकालिक टकसालों के सिक्के आज विशेष रूप से माँगे जाते हैं।',
          'यही वह ब्योरा है जो संग्रह को गहराई देता है। एक ही वर्ष का एक ही मूल्यवर्ग, पर अलग टकसाल — और दोनों की कहानी अलग है।',
        ],
        pEn: [
          'More than a hundred mints operated in Akbar’s period, and every coin carried its mint name in Persian.',
          'The major names feel familiar: Lahore, Agra (Akbarabad), Delhi, Ahmadabad, Allahabad, Fatehpur Sikri, Kabul, Kashmir, Burhanpur.',
          'Some mints ran for only a few years — Fatehpur Sikri, for instance, was active only while it served as the capital. Coins from such short-lived mints are particularly sought after today.',
          'This is the detail that gives a collection depth. The same denomination of the same year, but a different mint — and the story of each is different.',
        ],
      },
      {
        hHi: 'पहचान का व्यावहारिक क्रम',
        hEn: 'A practical order of identification',
        pHi: [
          'पहले धातु और वज़न देखिए। मोहर लगभग साढ़े दस से ग्यारह ग्राम सोना, रुपिया लगभग ग्यारह ग्राम चाँदी, दाम लगभग बीस ग्राम ताँबा।',
          'फिर शासक का नाम ढूँढ़िए। अकबर के सिक्कों पर उनका नाम और उपाधियाँ एक निश्चित शैली में लिखी जाती हैं, और उस आकार को पहचान लेना पहला बड़ा क़दम है।',
          'फिर टकसाल का नाम, जो प्रायः एक अलग पंक्ति में या किनारे पर होता है। और अंत में तारीख़ — हिजरी या इलाही।',
          'यह चार-चरणीय क्रम हर मुग़ल सिक्के पर काम करता है, न केवल अकबर के। एक बार अभ्यास हो जाए तो पूरी प्रक्रिया एक मिनट से कम की रह जाती है।',
        ],
        pEn: [
          'Look at the metal and the weight first. A mohur is roughly ten and a half to eleven grams of gold, a rupiya about eleven grams of silver, a dam around twenty grams of copper.',
          'Then find the ruler’s name. On Akbar’s coins his name and titles are written in a settled style, and learning to recognise that shape is the first large step.',
          'Then the mint name, usually on a separate line or along the margin. And finally the date — Hijri or Ilahi.',
          'This four-step order works on every Mughal coin, not only Akbar’s. Once practised, the whole process takes under a minute.',
        ],
      },
      {
        hHi: 'संग्रह की शुरुआत कहाँ से',
        hEn: 'Where to begin collecting',
        pHi: [
          'सोने की मोहर अधिकांश बजट से बाहर है, और यह कहना ईमानदारी है। पर चाँदी का रुपिया अपेक्षाकृत सुलभ है, ख़ासकर आम टकसालों और आम वर्षों का।',
          'ताँबे का दाम सबसे सस्ता है और भारी संख्या में बचा है। उस पर वही लिपि और वही टकसाल-नाम मिलते हैं, इसलिए आँख बनाने के लिए वह आदर्श है।',
          'एक अच्छा शुरुआती लक्ष्य है “एक टकसाल, कई वर्ष” — किसी एक शहर के दाम या रुपिया जुटाना। यह सीमित है और उसमें एक स्थान की कहानी बनती है।',
          'दूसरा लक्ष्य “एक वर्ष, कई टकसालें” है, जो साम्राज्य के फैलाव का चित्र बनाता है। दोनों सस्ते हैं और दोनों पूरा होने पर सचमुच कुछ बनते हैं।',
        ],
        pEn: [
          'The gold mohur is beyond most budgets, and saying so is simply honest. The silver rupiya, however, is comparatively accessible, particularly from common mints and common years.',
          'The copper dam is the cheapest and survives in quantity. It carries the same script and the same mint names, which makes it ideal for building the eye.',
          'A good opening target is “one mint, many years” — gathering the dams or rupees of a single city. It is bounded, and it builds the story of one place.',
          'A second is “one year, many mints”, which forms a picture of the empire’s extent. Both are affordable, and both amount to something real once complete.',
        ],
      },
      {
        hHi: 'नक़ल की चेतावनी',
        hEn: 'A warning about forgeries',
        pHi: [
          'मुग़ल सिक्के जालसाज़ों का पसंदीदा क्षेत्र हैं, क्योंकि ख़रीदार अक्सर फ़ारसी नहीं पढ़ पाते और अनुमान पर भरोसा करते हैं।',
          'सबसे आम धोखा ढला हुआ नक़ल है — सतह पर छोटे गड्ढे, किनारे पर गोलापन, और अक्षरों के किनारे धुँधले। असली सिक्का ठोंककर बना था, इसलिए धातु का प्रवाह तीखा होता है।',
          'दूसरा धोखा टकसाल-नाम बदलना है, ताकि आम सिक्का किसी दुर्लभ टकसाल का लगे। लूप से अक्षरों के चारों ओर की सतह देखिए — छेड़छाड़ वहाँ दिखती है।',
          'महँगे सिक्के के लिए प्रमाणन कराइए। यह ख़र्च उबाऊ लगता है और ग़लत ख़रीद से हमेशा सस्ता पड़ता है।',
        ],
        pEn: [
          'Mughal coins are a favourite field for forgers, because buyers frequently cannot read Persian and end up trusting guesswork.',
          'The commonest deception is the cast copy — small pits on the surface, rounding at the edge, and blurred edges to the letters. A genuine coin was struck, so its metal flow is crisp.',
          'The second is altering the mint name so that an ordinary coin appears to come from a rare mint. Examine the surface around the lettering under a loupe — tampering shows there.',
          'For an expensive coin, pay for certification. That expense sounds dull and it is always cheaper than a wrong purchase.',
        ],
      },
    ],
  },
  {
    slug: 'maratha-shivrai',
    sections: [
      {
        hHi: 'शिवराई का जन्म',
        hEn: 'The birth of the shivrai',
        pHi: [
          '1674 में रायगढ़ में राज्याभिषेक के बाद शिवाजी ने अपने नाम का सिक्का जारी किया। यह केवल आर्थिक क़दम नहीं था — अपने नाम का सिक्का चलाना संप्रभुता की सबसे दृश्य घोषणा है।',
          'ताँबे का यह छोटा सिक्का शिवराई कहलाया, और साथ में सोने का होन भी जारी हुआ। शिवराई रोज़मर्रा के बाज़ार की मुद्रा बनी, और होन बड़े लेन-देन के लिए।',
          'सबसे उल्लेखनीय बात लिपि है। उस दौर में क्षेत्र की अधिकांश मुद्रा फ़ारसी में थी; शिवराई पर देवनागरी है। यह चयन अपने आप में एक बयान था।',
        ],
        pEn: [
          'After his coronation at Raigad in 1674, Shivaji issued coinage in his own name. This was not merely an economic step — striking a coin in your own name is the most visible declaration of sovereignty there is.',
          'The small copper piece was called the shivrai, and a gold hon was issued alongside it. The shivrai became the currency of the everyday market, and the hon served larger transactions.',
          'The most notable feature is the script. Most currency in the region at that time was in Persian; the shivrai carries Devanagari. That choice was itself a statement.',
        ],
      },
      {
        hHi: 'सिक्के पर क्या लिखा है',
        hEn: 'What the coin says',
        pHi: [
          'एक ओर देवनागरी में “श्री राजा शिव” लिखा होता है, और दूसरी ओर “छत्रपति”। पाठ छोटा है और अक्षर बड़े, जो इसे पढ़ने में अपेक्षाकृत आसान बनाता है।',
          'यह सादगी जानबूझकर थी। एक छोटे ताँबे के सिक्के पर लंबा पाठ पढ़ा नहीं जाता, ख़ासकर जब वह हज़ारों हाथों से गुज़रे। तीन-चार अक्षर पर्याप्त थे।',
          'पर व्यवहार में यही सिक्के सबसे ज़्यादा घिसे हुए मिलते हैं, क्योंकि वे सचमुच रोज़ चले। अच्छी दशा में मिलना कठिन है, और यही अच्छे नमूनों को क़ीमती बनाता है।',
          'शिवाजी के बाद उनके उत्तराधिकारियों ने भी शिवराई जारी करना जारी रखा, और कई मराठा सरदारों ने भी। इसीलिए “शिवराई” एक सिक्का नहीं, एक पूरी शृंखला है।',
        ],
        pEn: [
          'One side carries “Shri Raja Shiva” in Devanagari, and the other “Chhatrapati”. The text is short and the letters large, which makes it comparatively easy to read.',
          'That simplicity was deliberate. A long text on a small copper coin cannot be read, particularly once it has passed through thousands of hands. Three or four letters were enough.',
          'In practice these are the coins found most heavily worn, because they genuinely circulated every day. Good condition is difficult to find, and that is what makes good examples valuable.',
          'After Shivaji his successors continued issuing shivrais, and so did many Maratha chiefs. This is why “shivrai” names not one coin but an entire series.',
        ],
      },
      {
        hHi: 'इतनी किस्में क्यों हैं',
        hEn: 'Why there are so many varieties',
        pHi: [
          'मराठा शासन एक केंद्रीकृत साम्राज्य से ज़्यादा एक संघ था — पेशवा, सिंधिया, होल्कर, गायकवाड़, भोंसले, और अनेक छोटे सरदार।',
          'इनमें से कई ने अपनी टकसालें चलाईं और शिवराई जारी की, अक्सर शिवाजी के नाम के साथ ही। परिणाम यह है कि एक ही पाठ के सैकड़ों रूप मिलते हैं।',
          'अक्षरों का आकार, उनकी दूरी, सिक्के का वज़न और मोटाई — इन्हीं बारीक अंतरों से विशेषज्ञ यह तय करते हैं कि कोई विशेष शिवराई किस टकसाल की है।',
          'यह वर्गीकरण अभी भी पूरी तरह तय नहीं है, और यही इस क्षेत्र को शोध के लिए जीवित रखता है। एक नया संग्राहक भी यहाँ कुछ सार्थक जोड़ सकता है।',
        ],
        pEn: [
          'Maratha rule was a confederacy more than a centralised empire — the Peshwas, the Scindias, the Holkars, the Gaekwads, the Bhonsles, and many smaller chiefs.',
          'A number of these ran their own mints and issued shivrais, frequently keeping Shivaji’s name on them. The result is that hundreds of variations of the same text exist.',
          'The shape of the letters, their spacing, the weight and the thickness of the coin — these fine differences are what specialists use to assign a particular shivrai to a mint.',
          'That classification is still not settled, and it is what keeps the field alive for research. Even a new collector can add something meaningful here.',
        ],
      },
      {
        hHi: 'चाँदी और सोने की मराठा मुद्रा',
        hEn: 'Maratha silver and gold',
        pHi: [
          'शिवराई सबसे प्रसिद्ध है, पर मराठा मुद्रा उस तक सीमित नहीं। सोने का होन शिवाजी के दौर से चला, और बाद में चाँदी के रुपये भी जारी हुए।',
          'दिलचस्प बात यह है कि कई मराठा चाँदी के सिक्कों पर मुग़ल बादशाह का नाम फ़ारसी में दर्ज है, शिवराई के देवनागरी के विपरीत।',
          'कारण व्यावहारिक था। बड़े व्यापार में वह सिक्का चलता था जिसे बाज़ार पहचानता हो, और उत्तर तथा दक्कन के व्यापारिक जाल में वह नाम मुग़ल बादशाह का था।',
          'यानी एक ही सत्ता ने दो अलग दर्शकों के लिए दो अलग भाषाएँ चुनीं — स्थानीय बाज़ार के लिए देवनागरी, और व्यापक व्यापार के लिए फ़ारसी। यह अपने आप में एक पाठ है।',
        ],
        pEn: [
          'The shivrai is the best known, but Maratha coinage is not limited to it. The gold hon ran from Shivaji’s time, and silver rupees were issued later.',
          'What is interesting is that many Maratha silver coins carry the Mughal emperor’s name in Persian, in contrast to the Devanagari of the shivrai.',
          'The reason was practical. In large trade the coin that circulated was the one the market recognised, and across the trading networks of the north and the Deccan that name was the Mughal emperor’s.',
          'So one authority chose two different languages for two different audiences — Devanagari for the local market, Persian for the wider trade. That in itself is a lesson.',
        ],
      },
      {
        hHi: 'दशा और पठनीयता',
        hEn: 'Condition and legibility',
        pHi: [
          'शिवराई में दशा का महत्व सामान्य से भी ज़्यादा है, और कारण सरल है: यदि अक्षर नहीं पढ़े जा सकते, तो सिक्का पहचाना नहीं जा सकता।',
          'इसलिए ग्रेडिंग यहाँ केवल सौंदर्य का सवाल नहीं है। एक ऐसा नमूना जिस पर “श्री राजा शिव” स्पष्ट पढ़ा जाए, उसी वज़न के धुँधले नमूने से कई गुना ऊपर बैठता है।',
          'ख़रीदते समय यही देखिए। तस्वीर में यदि अक्षर धुँधले हैं तो हाथ में भी वैसे ही होंगे, और विक्रेता का “थोड़ा घिसा है” अक्सर कम आँकना होता है।',
          'और वही नियम: साफ़ मत कीजिए। ताँबे पर बनी प्राकृतिक परत हटाने से अक्षर और भी कम दिखते हैं, क्योंकि विरोधाभास ख़त्म हो जाता है।',
        ],
        pEn: [
          'Condition matters more than usual with the shivrai, for a simple reason: if the letters cannot be read, the coin cannot be identified.',
          'Grading here is therefore not only a question of appearance. An example on which “Shri Raja Shiva” reads clearly sits several multiples above a blurred piece of the same weight.',
          'Look for exactly this when buying. If the letters are unclear in the photograph they will be unclear in the hand, and a seller’s “slightly worn” is frequently an understatement.',
          'And the same rule applies: do not clean it. Removing the natural film on copper makes the letters harder to see rather than easier, because the contrast disappears.',
        ],
      },
      {
        hHi: 'यह क्षेत्र सस्ता क्यों है',
        hEn: 'Why this field is inexpensive',
        pHi: [
          'शिवराई भारी संख्या में ढली और भारी संख्या में बची है। ताँबा गलाया नहीं गया, और सिक्के दो सौ वर्षों तक चलते रहे।',
          'साथ ही पहचान कठिन है, इसलिए आकस्मिक ख़रीदार इस ओर नहीं आते। कम भीड़ का सीधा अर्थ है कम दाम।',
          'व्यवहार में एक साधारण शिवराई कुछ सौ रुपये में मिल जाती है, और अच्छी दशा का नमूना भी बहुत महँगा नहीं। यह उन कम क्षेत्रों में है जहाँ इतिहास सचमुच सुलभ है।',
          'महँगे वे हैं जिनकी टकसाल निश्चित रूप से पहचानी जा सके, या जो शिवाजी के अपने दौर के हों और अच्छी दशा में हों। बाक़ी सब शुरुआत के लिए आदर्श हैं।',
        ],
        pEn: [
          'Shivrais were struck in large numbers and survive in large numbers. The copper was not melted down, and the coins circulated for two hundred years.',
          'Identification is also difficult, so casual buyers stay away. Less crowding means directly lower prices.',
          'In practice an ordinary shivrai costs a few hundred rupees, and even a good example is not expensive. It is one of the few fields where history is genuinely affordable.',
          'The expensive ones are those whose mint can be identified with certainty, or which belong to Shivaji’s own period in good condition. The rest are ideal for a beginner.',
        ],
      },
      {
        hHi: 'शुरुआत कैसे करें',
        hEn: 'How to begin',
        pHi: [
          'दस-बारह साधारण शिवराई ख़रीदिए — कुल ख़र्च कुछ हज़ार रुपये। उन्हें एक मेज़ पर रखिए और अक्षरों की स्पष्टता के क्रम में लगाइए।',
          'फिर अक्षरों के आकार की तुलना कीजिए। कुछ ही देर में आप देखेंगे कि सब एक जैसे नहीं हैं — किसी में “श्री” चौड़ा है, किसी में सँकरा; किसी में अक्षर गहरे हैं, किसी में उथले।',
          'यही अंतर टकसाल-वर्गीकरण की बुनियाद हैं। एक अच्छी संदर्भ-सूची साथ रखिए और मिलान करते जाइए।',
          'और अपने ही क्षेत्र से शुरुआत कीजिए यदि आप महाराष्ट्र या दक्कन से हैं। स्थानीय जानकारी आसानी से मिलती है, और संग्रह व्यक्तिगत हो जाता है।',
        ],
        pEn: [
          'Buy ten or twelve ordinary shivrais — a few thousand rupees in total. Lay them on a table and arrange them in order of how clearly the letters read.',
          'Then compare the shapes of the letters. Within a short while you will see they are not all alike — the “Shri” is broad on one and narrow on another; the letters are deep on one and shallow on the next.',
          'These differences are the foundation of mint classification. Keep a good reference listing beside you and work through the matches.',
          'And begin with your own region if you are from Maharashtra or the Deccan. Local knowledge is easy to come by, and the collection becomes personal.',
        ],
      },
    ],
  },
  {
    slug: 'madras-presidency-sikke',
    sections: [
      {
        hHi: 'पगोडा, फ़नम और कैश की व्यवस्था',
        hEn: 'The pagoda, fanam and cash system',
        pHi: [
          'मद्रास प्रेसीडेंसी की मुद्रा उत्तर भारत से पूरी तरह अलग व्यवस्था पर चलती थी। वहाँ रुपया नहीं, पगोडा मुख्य इकाई थी।',
          'सोने का पगोडा सबसे ऊपर, उसके नीचे फ़नम — एक छोटा सिक्का जो सोने या चाँदी में आता था — और सबसे नीचे ताँबे का कैश, जो अत्यंत छोटे मूल्य का था।',
          'अनुपात आमतौर पर एक पगोडा बराबर बयालीस फ़नम, और एक फ़नम बराबर अस्सी कैश के आसपास रहा। ये संख्याएँ अजीब लगती हैं और वे स्थानीय परंपरा से निकली थीं, ब्रिटिश आविष्कार नहीं।',
          'यही इस क्षेत्र की सबसे बड़ी सीख है: कंपनी ने शुरुआत में अपनी व्यवस्था थोपी नहीं, बल्कि जो चल रही थी उसी में अपने सिक्के डाले।',
        ],
        pEn: [
          'The currency of the Madras Presidency ran on a system entirely different from northern India. There the main unit was not the rupee but the pagoda.',
          'The gold pagoda sat at the top, below it the fanam — a small coin issued in gold or silver — and at the bottom the copper cash, of very small value.',
          'The ratios were generally one pagoda to forty-two fanams, and one fanam to around eighty cash. Those figures look odd and they came from local tradition rather than British invention.',
          'That is the largest lesson of this field: the Company did not initially impose its own system but placed its coins inside the one already running.',
        ],
      },
      {
        hHi: 'लिपियों का मिश्रण',
        hEn: 'The mixture of scripts',
        pHi: [
          'मद्रास प्रेसीडेंसी के सिक्के अपनी लिपि-विविधता के लिए जाने जाते हैं। एक ही सिक्के पर अंग्रेज़ी, फ़ारसी, तमिल और तेलुगु — चारों मिल सकती हैं।',
          'कारण व्यावहारिक था। सिक्के को स्वीकार्य बनाने के लिए उसे उन सब भाषाओं में बोलना पड़ता था जिनमें उस क्षेत्र का बाज़ार चलता था।',
          'फ़ारसी इसलिए कि प्रशासनिक और व्यापारिक भाषा वही थी। तमिल और तेलुगु इसलिए कि स्थानीय व्यापारी उन्हीं में पढ़ते थे। और अंग्रेज़ी कंपनी की अपनी पहचान के लिए।',
          'संग्राहक के लिए यह चुनौती और आकर्षण दोनों है। चार लिपियों वाला एक छोटा-सा ताँबे का सिक्का अपने आप में उस दौर के दक्षिण भारत का चित्र है।',
        ],
        pEn: [
          'The coins of the Madras Presidency are known for their variety of scripts. English, Persian, Tamil and Telugu can all appear on a single coin.',
          'The reason was practical. To be accepted, the coin had to speak in every language in which the market of that region operated.',
          'Persian because it was the administrative and commercial language. Tamil and Telugu because local traders read in them. And English for the Company’s own identity.',
          'For a collector this is both the challenge and the attraction. A small copper coin carrying four scripts is in itself a portrait of southern India in that period.',
        ],
      },
      {
        hHi: 'स्टार पगोडा',
        hEn: 'The star pagoda',
        pHi: [
          'सबसे प्रसिद्ध मद्रास सिक्का स्टार पगोडा है — सोने का छोटा सिक्का, जिस पर एक ओर तारा और दूसरी ओर देवता की आकृति।',
          'इसे “तीन स्वामी पगोडा” भी कहा जाता है क्योंकि कुछ किस्मों पर तीन आकृतियाँ मिलती हैं, जिन्हें प्रायः वेंकटेश्वर और उनके साथ की मूर्तियों से जोड़ा जाता है।',
          'यह सिक्का यूरोपीय व्यापारियों के दस्तावेज़ों में बार-बार आता है, क्योंकि अठारहवीं सदी में दक्षिण भारत के व्यापार का बड़ा हिस्सा इसी में तय होता था।',
          'आज यह संग्राहकों के बीच महँगा है, पर उसका छोटा भाई — चाँदी और ताँबे के मूल्यवर्ग — कहीं अधिक सुलभ हैं और उसी व्यवस्था का हिस्सा हैं।',
        ],
        pEn: [
          'The best-known Madras coin is the star pagoda — a small gold piece with a star on one side and a deity on the other.',
          'It is also called the three-swami pagoda, because some varieties carry three figures, usually associated with Venkateswara and the images accompanying him.',
          'The coin appears repeatedly in European merchants’ records, because a large part of eighteenth-century trade in southern India was settled in it.',
          'It is expensive among collectors today, but its smaller relatives — the silver and copper denominations — are far more accessible and belong to the same system.',
        ],
      },
      {
        hHi: 'रुपये में परिवर्तन',
        hEn: 'The change to the rupee',
        pHi: [
          'उन्नीसवीं सदी की शुरुआत में यह पूरी व्यवस्था बदल गई। कंपनी ने तीनों प्रेसीडेंसियों की मुद्रा को एक करने का निर्णय लिया, और मद्रास में पगोडा की जगह रुपया आया।',
          'यह परिवर्तन 1818 के आसपास हुआ, और इसके साथ आना-पाई की व्यवस्था दक्षिण में भी लागू हुई।',
          'व्यावहारिक कारण स्पष्ट था: तीन अलग व्यवस्थाएँ चलाना प्रशासन के लिए महँगा और उलझा हुआ था, और बढ़ते व्यापार के लिए एक साझा इकाई ज़रूरी थी।',
          'संग्राहक के लिए यह एक साफ़ विभाजन-रेखा बनाती है। 1818 से पहले के मद्रास सिक्के एक अलग दुनिया के हैं; उसके बाद के वही ब्रिटिश भारत की मुख्यधारा में शामिल हो जाते हैं।',
        ],
        pEn: [
          'Early in the nineteenth century this whole system changed. The Company decided to unify the coinage of its three presidencies, and in Madras the rupee replaced the pagoda.',
          'The change came around 1818, and with it the anna-and-pie system was extended into the south.',
          'The practical reason was clear: running three separate systems was expensive and confusing to administer, and growing trade needed a common unit.',
          'For a collector this makes a clean dividing line. Madras coins before 1818 belong to a different world; those after it join the mainstream of British India.',
        ],
      },
      {
        hHi: 'ताँबे के सिक्के — प्रवेश-द्वार',
        hEn: 'The copper — the doorway',
        pHi: [
          'सोने का पगोडा महँगा है, पर मद्रास के ताँबे के सिक्के अत्यंत सुलभ हैं और शुरुआत के लिए आदर्श।',
          'इनमें कैश, दो कैश, चार कैश, बीस कैश और अन्य मूल्यवर्ग मिलते हैं। इनका आकार और डिज़ाइन विविध है, और कई पर वही लिपि-मिश्रण मिलता है जो बड़े सिक्कों पर।',
          'दाम कुछ सौ रुपये से शुरू होता है। एक अच्छा शुरुआती लक्ष्य है इन मूल्यवर्गों का एक-एक नमूना जुटाना — कुल ख़र्च मामूली, और परिणाम एक स्पष्ट सेट।',
          'इनकी एक और ख़ूबी है: ये अक्सर बड़े और मोटे होते हैं, इसलिए अक्षर बड़े और पढ़ने में आसान रहते हैं — जो लिपि सीखने के लिए बहुत मदद करता है।',
        ],
        pEn: [
          'The gold pagoda is expensive, but the copper coinage of Madras is very accessible and ideal for a beginner.',
          'It includes the cash, two cash, four cash, twenty cash and other denominations. Their shapes and designs vary, and many carry the same mixture of scripts as the larger coins.',
          'Prices start at a few hundred rupees. A good opening target is one example of each denomination — a modest total outlay, and a clearly defined set as the result.',
          'They have another advantage: they are often large and thick, so the lettering is big and easy to read — which helps a great deal when learning the scripts.',
        ],
      },
      {
        hHi: 'पहचान और दशा',
        hEn: 'Identification and condition',
        pHi: [
          'पहचान का पहला क़दम लिपि पहचानना है। तमिल और तेलुगु अक्षर गोल और घुमावदार होते हैं; फ़ारसी दाएँ से बाएँ बहती है; अंग्रेज़ी स्पष्ट है।',
          'फिर मूल्यवर्ग — जो अक्सर अंग्रेज़ी में लिखा होता है, और यही सबसे तेज़ सूत्र है। “XX CASH” या “II CASH” जैसे अंकन सीधे बता देते हैं।',
          'दशा के मामले में ताँबे पर वही नियम लागू होते हैं जो हर जगह — प्राकृतिक परत को रहने दीजिए, और चमकाने की कोशिश मत कीजिए।',
          'इस क्षेत्र की एक विशेष समस्या क्षरण है, क्योंकि दक्षिण की आर्द्र जलवायु में ताँबा तेज़ी से प्रभावित होता है। भंडारण में सिलिका जेल यहाँ सामान्य से भी ज़्यादा ज़रूरी है।',
        ],
        pEn: [
          'The first step in identification is recognising the script. Tamil and Telugu letters are round and curving; Persian flows from right to left; English is obvious.',
          'Then the denomination — usually written in English, which is the fastest clue. Markings such as “XX CASH” or “II CASH” state it directly.',
          'On condition, the same rules apply to this copper as everywhere else — leave the natural film alone and make no attempt to brighten it.',
          'One problem is particular to this field: corrosion, because copper is affected quickly in the humid climate of the south. Silica gel in storage matters here even more than usual.',
        ],
      },
      {
        hHi: 'सावधानी',
        hEn: 'A caution',
        pHi: [
          'स्टार पगोडा की नक़ल बाज़ार में मौजूद है, और सोने के सिक्कों की तरह वह अक्सर सही वज़न और सही शुद्धता के साथ बनाई जाती है।',
          'पकड़ शैली में होती है — आकृतियों का अनुपात और अक्षरों का आकार। इसलिए महँगे सोने के मद्रास सिक्के के लिए प्रमाणन आवश्यक है।',
          'ताँबे के सिक्कों में नक़ल कम मिलती है क्योंकि उसमें मुनाफ़ा नहीं, पर वहाँ एक और समस्या है — अत्यधिक क्षरित सिक्कों को “दुर्लभ किस्म” बताकर बेचना।',
          'यदि अक्षर पढ़े नहीं जा सकते, तो किस्म का दावा भी सत्यापित नहीं हो सकता। ऐसे सिक्के के लिए साधारण दाम ही उचित है, चाहे विक्रेता कुछ भी कहे।',
        ],
        pEn: [
          'Forgeries of the star pagoda exist in the market, and like other gold coins they are frequently made at the correct weight and fineness.',
          'They are caught on style — the proportions of the figures and the shapes of the letters. Certification is therefore necessary for any expensive Madras gold.',
          'Forgery is rarer among the copper because there is no profit in it, but another problem appears there — heavily corroded coins being sold as “rare varieties”.',
          'If the letters cannot be read, the claim about the variety cannot be verified either. For such a coin only an ordinary price is appropriate, whatever the seller says.',
        ],
      },
    ],
  },
  {
    slug: 'quarter-anna-tamba',
    sections: [
      {
        hHi: 'आना व्यवस्था में इसकी जगह',
        hEn: 'Its place in the anna system',
        pHi: [
          'दशमलव से पहले की व्यवस्था में एक रुपये में सोलह आने होते थे, और हर आने में चार पैसे। चौथाई आना यानी एक आने का चौथा हिस्सा — रुपये का चौंसठवाँ भाग।',
          'यह छोटी रक़म थी, पर उस दौर में बेकार नहीं। चौथाई आने से रोज़मर्रा की छोटी चीज़ें ख़रीदी जा सकती थीं, और यही कारण है कि यह सिक्का इतनी भारी संख्या में ढला।',
          'इसीलिए यह हर पुरानी संदूक़ में मिलता है। यह उस दौर का सबसे आम सिक्का था, और आम होना ही आज इसे सबसे अच्छा शुरुआती सिक्का बनाता है।',
        ],
        pEn: [
          'In the system before decimalisation a rupee held sixteen annas, and each anna four pice. A quarter anna is therefore a quarter of an anna — one sixty-fourth of a rupee.',
          'That was a small sum, and not a worthless one at the time. Everyday small purchases could be made with a quarter anna, which is why the coin was struck in such large numbers.',
          'This is why it appears in every old trunk. It was the commonest coin of its period, and being common is exactly what makes it the best beginner’s coin today.',
        ],
      },
      {
        hHi: 'भौतिक पहचान',
        hEn: 'Physical identification',
        pHi: [
          'यह एक बड़ा, भारी ताँबे का सिक्का है — व्यास लगभग पच्चीस मिलीमीटर और वज़न छह से सात ग्राम के बीच, दौर के अनुसार।',
          'हाथ में यह आधुनिक सिक्कों से स्पष्ट रूप से भारी लगता है, और यही पहली पहचान है। ताँबे का रंग भूरा-लाल होता है, और पुराने नमूनों पर एक गहरी प्राकृतिक परत बन जाती है।',
          'एक ओर शासक का चित्र होता है, और दूसरी ओर मूल्यवर्ग तथा वर्ष। कुछ दौर में मूल्यवर्ग अंग्रेज़ी के साथ नागरी और फ़ारसी में भी अंकित हुआ।',
          'बाद के दौर में आकार छोटा हुआ और कुछ किस्मों में बीच में छेद भी आया। ये परिवर्तन धातु की लागत बचाने के लिए थे, और वही कहानी हर मुद्रा में दोहराई जाती है।',
        ],
        pEn: [
          'This is a large, heavy copper coin — around twenty-five millimetres across and weighing between six and seven grams depending on the period.',
          'In the hand it feels distinctly heavier than modern coinage, and that is the first identification. The copper is brown-red, and older examples carry a deep natural film.',
          'One side bears the ruler’s portrait, the other the denomination and the year. In some periods the denomination appears in Nagari and Persian alongside the English.',
          'In later periods the size was reduced and some varieties acquired a hole in the centre. These changes were made to save on metal cost, and the same story repeats in every currency.',
        ],
      },
      {
        hHi: 'शासकों की पूरी शृंखला',
        hEn: 'The full run of rulers',
        pHi: [
          'चौथाई आना विक्टोरिया के दौर से लेकर जॉर्ज VI तक चलता रहा, यानी लगभग नब्बे वर्ष। यह एक ही मूल्यवर्ग में पूरे ब्रिटिश भारत का इतिहास समेट देता है।',
          'विक्टोरिया क्वीन (1862–1876), विक्टोरिया एम्प्रेस (1877–1901), एडवर्ड VII (1903–1910), जॉर्ज V (1911–1936), और जॉर्ज VI (1938–1947)।',
          'हर शासक का चित्र अलग है, और उपाधि भी। इसलिए बिना कैटलॉग के भी इन्हें क्रम में लगाया जा सकता है — केवल चेहरा और लिखावट देखकर।',
          'यही इसे सबसे अच्छा संग्रह-विषय बनाता है। “हर शासक का एक चौथाई आना” — पाँच सिक्कों का लक्ष्य, कुल ख़र्च कुछ हज़ार रुपये, और परिणाम एक पूरा ऐतिहासिक क्रम।',
        ],
        pEn: [
          'The quarter anna ran from Victoria’s period through to George VI — some ninety years. It compresses the whole history of British India into a single denomination.',
          'Victoria Queen (1862–1876), Victoria Empress (1877–1901), Edward VII (1903–1910), George V (1911–1936), and George VI (1938–1947).',
          'Each ruler’s portrait differs, and so does the title. They can therefore be arranged in order without any catalogue at all — by face and inscription alone.',
          'This is what makes it the best collecting subject there is. “One quarter anna per ruler” — a target of five coins, a few thousand rupees in total, and a complete historical sequence as the result.',
        ],
      },
      {
        hHi: 'क़ीमती किस्में',
        hEn: 'The varieties that carry value',
        pHi: [
          'अधिकांश चौथाई आने सस्ते हैं, और यह कहना ईमानदारी है। क़ीमत तीन जगह छिपी है।',
          'पहली — बहुत ऊँची दशा। चूँकि ये सिक्के रोज़ चले और किसी ने सँभालकर नहीं रखे, बिना घिसे नमूने अपेक्षाकृत दुर्लभ हैं और अच्छा दाम पाते हैं।',
          'दूसरी — कम ढलाई वाले वर्ष-टकसाल संयोजन। हर वर्ष की संख्या अलग थी, और कुछ संयोजन बहुत कम बने। यह जानकारी कैटलॉग में दर्ज है।',
          'तीसरी — असली ढलाई-दोष। ताँबे के छोटे सिक्के तेज़ रफ़्तार से ढाले जाते थे, इसलिए यहाँ एरर अपेक्षाकृत ज़्यादा मिलते हैं।',
        ],
        pEn: [
          'Most quarter annas are cheap, and saying so is simply honest. The value hides in three places.',
          'First, very high grade. Because these coins circulated daily and nobody put them away, unworn examples are comparatively scarce and command a good price.',
          'Second, low-mintage year and mint combinations. Production varied from year to year, and some combinations were made in very small numbers. That information is recorded in the catalogues.',
          'Third, genuine striking errors. Small copper coins were struck at high speed, so errors are comparatively common here.',
        ],
      },
      {
        hHi: 'घिसाव कैसे पढ़ें',
        hEn: 'How to read the wear',
        pHi: [
          'चौथाई आने पर घिसाव सबसे पहले तीन जगह दिखता है: शासक की गाल की हड्डी, बालों की ऊपरी लट, और मुकुट या आवरण का सबसे ऊँचा भाग।',
          'पिछली तरफ़ अक्षरों के ऊपरी किनारे और वर्ष के अंक पहले चपटे होते हैं। यदि वर्ष पढ़ा नहीं जा सकता, तो सिक्का ग्रेडिंग की निचली सीढ़ी पर है।',
          'ताँबे में एक और बात देखिए — क्षरण। हरे धब्बे या खुरदुरे गड्ढे घिसाव नहीं, नुक़सान हैं, और वे क़ीमत को घिसाव से भी ज़्यादा गिराते हैं।',
          'अभ्यास का सबसे अच्छा तरीक़ा यही है: दस चौथाई आने एक साथ रखिए और उन्हें सबसे घिसे से सबसे अच्छे तक क्रम में लगाइए। कुछ मिनटों में आँख बदल जाती है।',
        ],
        pEn: [
          'On a quarter anna, wear shows first in three places: the ruler’s cheekbone, the uppermost lock of hair, and the highest point of the crown or veil.',
          'On the reverse, the upper edges of the lettering and the digits of the year flatten earliest. If the year cannot be read, the coin sits on a lower rung of the grading ladder.',
          'With copper, look for one more thing — corrosion. Green spots or rough pitting are damage rather than wear, and they reduce value even more sharply than wear does.',
          'The best way to practise is this: put ten quarter annas together and arrange them from most worn to best. Within a few minutes the eye changes.',
        ],
      },
      {
        hHi: 'यह सबसे अच्छा पहला सिक्का क्यों है',
        hEn: 'Why this is the best first coin',
        pHi: [
          'चार कारण मिलकर काम करते हैं। पहला — यह सस्ता है, इसलिए ग़लती की क़ीमत कम है। एक नया संग्राहक बिना डर के प्रयोग कर सकता है।',
          'दूसरा — यह बड़ा है, इसलिए ब्योरे स्पष्ट दिखते हैं। छोटे सिक्के पर घिसाव पढ़ना कठिन है; यहाँ आसान।',
          'तीसरा — यह आसानी से मिलता है। हर डीलर के पास है, हर प्रदर्शनी में है, और शायद आपके अपने घर में भी।',
          'चौथा — इसकी शृंखला पूरी है। नब्बे वर्ष, पाँच शासक, कई टकसालें — एक ही सिक्के में पूरा पाठ्यक्रम मौजूद है, और उसे पूरा करना सचमुच संभव है।',
        ],
        pEn: [
          'Four reasons work together. First, it is cheap, so the cost of a mistake is low. A new collector can experiment without fear.',
          'Second, it is large, so the detail is clearly visible. Reading wear on a small coin is difficult; here it is straightforward.',
          'Third, it is easy to find. Every dealer has them, every fair has them, and quite possibly your own house has them.',
          'Fourth, the series is complete. Ninety years, five rulers, several mints — an entire syllabus inside one denomination, and finishing it is genuinely achievable.',
        ],
      },
      {
        hHi: 'क़ीमत के बारे में ईमानदार बात',
        hEn: 'An honest word about value',
        pHi: [
          'एक साधारण, घिसा हुआ चौथाई आना कुछ दसियों रुपये का सिक्का है। यह सुनकर निराशा हो सकती है, और यही वह सच्चाई है जो आपको ठगों से बचाती है।',
          'इंटरनेट पर इस सिक्के को लेकर “लाखों में बिकता है” वाले दावे नियमित रूप से घूमते हैं। ढाँचा हमेशा एक जैसा है: असाधारण दावा, एक फ़ोन नंबर, फिर अग्रिम शुल्क।',
          'और वही नियम जो हर सौदे पर लागू होता है — पैसा ख़रीदार से विक्रेता की ओर बहता है। जो आपसे सिक्का ख़रीदने से पहले शुल्क माँगे, वह ख़रीदार नहीं है।',
          'पर इसका मतलब यह नहीं कि सिक्का बेकार है। कुछ दसियों रुपये में आपको एक ऐसी वस्तु मिलती है जो सौ साल पुरानी है और जिस पर एक साम्राज्य का चेहरा बना है। यह सौदा बुरा नहीं है।',
        ],
        pEn: [
          'An ordinary worn quarter anna is a coin worth a few tens of rupees. That is disappointing to hear, and it is exactly the fact that protects you from the fraudsters.',
          'Claims that this coin “sells for lakhs” circulate online regularly. The structure never changes: an extraordinary claim, a phone number, then an advance fee.',
          'And the same rule applies as in every transaction — money flows from the buyer to the seller. Anybody asking you for a fee before buying your coin is not a buyer.',
          'But none of that makes the coin worthless. For a few tens of rupees you hold something a hundred years old with the face of an empire on it. That is not a bad bargain.',
        ],
      },
    ],
  },
  {
    slug: 'delhi-sultanate-tanka',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'इल्तुतमिश ने तेरहवीं सदी में लगभग ग्यारह ग्राम का चाँदी का टंका चलाया, और उसके साथ ताँबे का जीतल। यही व्यवस्था तीन सौ वर्ष चली।',
          'पाँच वंश — मामलूक, ख़िलजी, तुग़लक़, सैयद, लोदी — और हर एक की अपनी शैली। सिक्कों पर चित्र नहीं, केवल सुलेख, और वही उनकी कला है।',
          'शुरुआत ताँबे के जीतल से कीजिए: वही लिपि, वही टकसाल-नाम, दाम का दसवाँ हिस्सा। चाँदी की ओर तब बढ़िए जब अक्षरों के आकार परिचित हो जाएँ।',
        ],
        pEn: [
          'Iltutmish introduced the silver tanka of roughly eleven grams in the thirteenth century, and the copper jital alongside it. That system then ran for three hundred years.',
          'Five dynasties — Mamluk, Khalji, Tughlaq, Sayyid, Lodi — each with its own style. The coins carry no images at all, only calligraphy, and the calligraphy is the art.',
          'Begin with the copper jital: the same script, the same mint names, at a tenth of the price. Move towards the silver once the shapes of the letters have become familiar to you.',
        ],
      },
    ],
  },
  {
    slug: 'akbar-ke-sikke',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'अकबर ने शेर शाह की तीन-धातु व्यवस्था को बदला नहीं, कसा — और उसी अनुशासन ने मुग़ल रुपिया को भरोसे का सिक्का बनाया।',
          'इलाही सन्, चौकोर मिहराबी सिक्के, और सौ से अधिक टकसालें — यही इस दौर की पहचान हैं। पहचान का क्रम सरल है: धातु और वज़न, फिर शासक का नाम, फिर टकसाल, फिर तारीख़।',
          'शुरुआत ताँबे के दाम से कीजिए, जो सस्ता है और उसी लिपि में लिखा है। महँगे सिक्के के लिए प्रमाणन कराइए — यह ख़र्च ग़लत ख़रीद से हमेशा सस्ता पड़ता है।',
        ],
        pEn: [
          'Akbar did not replace Sher Shah’s three-metal system but tightened it — and that discipline is what made the Mughal rupiya a coin merchants trusted.',
          'The Ilahi era, the square mihrabi coins, and more than a hundred mints are the marks of this period. The order of identification is simple: metal and weight, then the ruler’s name, then the mint, then the date.',
          'Begin with the copper dam, which is inexpensive and written in the same script. For an expensive coin, pay for certification — that expense is always cheaper than a wrong purchase.',
        ],
      },
    ],
  },
  {
    slug: 'maratha-shivrai',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'शिवाजी ने 1674 में अपने नाम का सिक्का जारी किया, और देवनागरी चुनी जबकि क्षेत्र की अधिकांश मुद्रा फ़ारसी में थी। वह चयन अपने आप में एक बयान था।',
          'एक ओर “श्री राजा शिव”, दूसरी ओर “छत्रपति”। बाद में अनेक मराठा सरदारों ने भी शिवराई जारी की, इसलिए एक ही पाठ के सैकड़ों रूप मिलते हैं।',
          'यह सबसे सस्ते और सबसे कम भीड़ वाले क्षेत्रों में है। दस-बारह साधारण नमूने ख़रीदिए, अक्षरों की स्पष्टता के क्रम में लगाइए, और आकारों की तुलना कीजिए — वहीं से वर्गीकरण शुरू होता है।',
        ],
        pEn: [
          'Shivaji issued coinage in his own name in 1674, and chose Devanagari at a time when most currency in the region was in Persian. That choice was itself a statement.',
          '“Shri Raja Shiva” on one side, “Chhatrapati” on the other. Many Maratha chiefs later issued shivrais as well, so hundreds of variations of the same text exist.',
          'This is among the cheapest and least crowded fields there is. Buy ten or twelve ordinary examples, arrange them by how clearly the letters read, and compare the shapes — that is where classification begins.',
        ],
      },
    ],
  },
  {
    slug: 'madras-presidency-sikke',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'मद्रास प्रेसीडेंसी रुपये पर नहीं, पगोडा–फ़नम–कैश की व्यवस्था पर चलती थी, जो स्थानीय परंपरा से निकली थी न कि ब्रिटिश आविष्कार से।',
          'एक ही सिक्के पर अंग्रेज़ी, फ़ारसी, तमिल और तेलुगु — चारों मिल सकती हैं, क्योंकि सिक्के को उन सब भाषाओं में बोलना पड़ता था जिनमें बाज़ार चलता था।',
          '1818 के आसपास यह व्यवस्था रुपये में बदल गई, और वही तारीख़ इस क्षेत्र की साफ़ विभाजन-रेखा है। शुरुआत ताँबे के कैश से कीजिए — बड़े, मोटे, और अक्षर पढ़ने में आसान।',
        ],
        pEn: [
          'The Madras Presidency ran not on the rupee but on the pagoda–fanam–cash system, which came out of local tradition rather than British invention.',
          'English, Persian, Tamil and Telugu can all appear on a single coin, because the coin had to speak in every language the market operated in.',
          'Around 1818 the system changed to the rupee, and that date is the clean dividing line of this field. Begin with the copper cash — large, thick, and easy to read the lettering on.',
        ],
      },
    ],
  },
  {
    slug: 'quarter-anna-tamba',
    sections: [
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'चौथाई आना रुपये का चौंसठवाँ भाग था, और उस दौर का सबसे आम सिक्का — यही आज उसे सबसे अच्छा शुरुआती सिक्का बनाता है।',
          'नब्बे वर्ष, पाँच शासक: विक्टोरिया क्वीन, विक्टोरिया एम्प्रेस, एडवर्ड VII, जॉर्ज V, जॉर्ज VI। “हर शासक का एक” — पाँच सिक्कों का लक्ष्य, कुछ हज़ार रुपये का ख़र्च।',
          'क़ीमत तीन जगह है: बहुत ऊँची दशा, कम ढलाई वाले वर्ष, और असली एरर। बाक़ी सब सस्ते हैं, और उनके बारे में “लाखों में बिकेगा” वाला हर दावा झूठा है।',
        ],
        pEn: [
          'The quarter anna was one sixty-fourth of a rupee and the commonest coin of its period — which is exactly what makes it the best beginner’s coin today.',
          'Ninety years and five rulers: Victoria Queen, Victoria Empress, Edward VII, George V, George VI. “One per ruler” is a target of five coins for a few thousand rupees.',
          'Value sits in three places: very high grade, low-mintage years, and genuine errors. The rest are cheap, and every “this sells for lakhs” claim made about them is false.',
        ],
      },
    ],
  },
  {
    slug: 'akbar-ke-sikke',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'अकबर के सिक्के इसलिए महत्वपूर्ण हैं कि उन पर मुद्रा को विचार का माध्यम माना गया — केवल लेन-देन का साधन नहीं।',
        ],
        pEn: [
          'Akbar’s coins matter because on them currency was treated as a medium for ideas rather than merely an instrument of exchange, and that is a rare thing to find struck into metal at any period.',
        ],
      },
    ],
  },
  {
    slug: 'maratha-shivrai',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'शिवराई की सबसे बड़ी ख़ूबी यही है कि वह सस्ती रहते हुए भी असली है — कुछ सौ रुपये में तीन सौ साल पुराना इतिहास हथेली पर।',
        ],
        pEn: [
          'The great virtue of the shivrai is that it stays inexpensive while remaining entirely genuine — three hundred years of history in your palm for a few hundred rupees, which very few fields can offer.',
        ],
      },
    ],
  },
  {
    slug: 'madras-presidency-sikke',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'यह क्षेत्र इसलिए दिलचस्प है कि यहाँ सिक्का चार भाषाओं में बोलता है। एक छोटा ताँबे का टुकड़ा उस दौर के दक्षिण भारत का पूरा चित्र बन जाता है।',
        ],
        pEn: [
          'This field is interesting because here the coin speaks in four languages at once. A small piece of copper becomes a complete portrait of southern India in its period, which is a great deal to carry on twenty-five millimetres of metal.',
        ],
      },
    ],
  },
  {
    slug: 'quarter-anna-tamba',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'यदि किसी को इस शौक़ में लाना हो, तो उसके हाथ में एक चौथाई आना रख दीजिए। बड़ा, भारी, सस्ता, और सौ साल पुराना — इससे बेहतर पहला सिक्का नहीं है।',
        ],
        pEn: [
          'If you want to bring somebody into this hobby, put a quarter anna in their hand. Large, heavy, inexpensive and a hundred years old — there is no better first coin than this one, and it costs almost nothing to give away.',
        ],
      },
    ],
  },
  {
    slug: 'madras-presidency-sikke',
    sections: [
      {
        hHi: 'शुरुआत का सुझाव',
        hEn: 'A suggestion for starting',
        pHi: [
          'यदि आप दक्षिण भारत से हैं, तो इस क्षेत्र से शुरुआत करना स्वाभाविक है — स्थानीय जानकारी आसानी से मिलती है और संग्रह व्यक्तिगत हो जाता है।',
          'ताँबे के कैश के पाँच-छह अलग मूल्यवर्ग जुटाइए, और उन्हें आकार के क्रम में रखिए। लिपियाँ पहचानने का अभ्यास वहीं से शुरू होता है।',
        ],
        pEn: [
          'If you are from southern India, beginning here is the natural choice — local knowledge is easy to come by and the collection becomes personal to you.',
          'Gather five or six different denominations of the copper cash and lay them out in order of size. That is where the practice of recognising the scripts begins, and it costs very little to set up.',
        ],
      },
    ],
  },
  {
    slug: 'george-v-rupaya',
    sections: [
      {
        hHi: 'चाँदी की कहानी: .917 से .500 तक',
        hEn: 'The silver story: from .917 to .500',
        pHi: [
          'जॉर्ज V का रुपया दो अलग चाँदी-मानकों में मिलता है, और यह अंतर जानना इस सिक्के को समझने की कुंजी है।',
          '1911 से लगभग 1939 तक रुपया .917 शुद्धता का था — यानी लगभग साढ़े दस ग्राम शुद्ध चाँदी, कुल वज़न 11.66 ग्राम में। यह वही मानक था जो उन्नीसवीं सदी से चला आ रहा था।',
          'दूसरे विश्वयुद्ध के दबाव में 1940 के आसपास शुद्धता घटाकर .500 कर दी गई। सिक्का देखने में लगभग वैसा ही रहा, पर उसमें चाँदी आधी रह गई।',
          'यह परिवर्तन जॉर्ज VI के दौर में हुआ, पर उसे जानना जॉर्ज V के सिक्के के मूल्यांकन के लिए ज़रूरी है — क्योंकि जॉर्ज V का हर रुपया उच्च शुद्धता का है, और यही उसे धातु-मूल्य में ऊपर रखता है।',
        ],
        pEn: [
          'The George V rupee exists in two different silver standards, and knowing that difference is the key to understanding the coin.',
          'From 1911 to about 1939 the rupee was .917 fine — roughly ten and a half grams of pure silver within a total weight of 11.66 grams. That was the same standard that had run since the nineteenth century.',
          'Under the pressure of the Second World War the fineness was cut to .500 around 1940. The coin looked much the same, but it now held half the silver.',
          'That change came during George VI’s reign, but knowing it matters for valuing a George V coin — because every George V rupee is of the higher fineness, and that is what keeps it above the later issues in metal value.',
        ],
      },
      {
        hHi: 'धातु-मूल्य बनाम संग्राहक-मूल्य',
        hEn: 'Metal value versus collector value',
        pHi: [
          'यह वह जगह है जहाँ अधिकांश लोग उलझते हैं, और इसे साफ़ कर लेना बहुत उपयोगी है।',
          'धातु-मूल्य वह है जो सिक्के में मौजूद चाँदी की उस दिन की बाज़ार-क़ीमत से निकलता है। यह हर दिन बदलता है और उसका सिक्के के इतिहास से कोई संबंध नहीं।',
          'संग्राहक-मूल्य दशा, दुर्लभता और माँग से बनता है। एक अच्छी दशा का सामान्य वर्ष का रुपया अपने धातु-मूल्य से कुछ ऊपर बैठता है; एक बहुत ऊँची दशा का या दुर्लभ वर्ष का सिक्का कई गुना ऊपर।',
          'व्यावहारिक निष्कर्ष यह है: घिसे हुए, सामान्य वर्ष के रुपये का दाम मोटे तौर पर चाँदी की क़ीमत के आसपास रहेगा। यह जानना निराशा से बचाता है और साथ ही एक न्यूनतम सीमा भी देता है।',
        ],
        pEn: [
          'This is where most people get confused, and clearing it up is genuinely useful.',
          'Metal value is what comes out of the market price of the silver in the coin on any given day. It changes daily and has nothing to do with the coin’s history.',
          'Collector value is built from condition, rarity and demand. A common-date rupee in good condition sits somewhat above its metal value; a piece in very high grade or from a scarce year sits several multiples above.',
          'The practical conclusion is this: a worn, common-date rupee will fetch roughly the price of its silver. Knowing that prevents disappointment and also gives you a floor beneath which you should not sell.',
        ],
      },
      {
        hHi: 'टकसाल और वर्ष',
        hEn: 'Mints and years',
        pHi: [
          'जॉर्ज V के रुपये बंबई और कलकत्ता दोनों टकसालों में ढले। बंबई का चिह्न तारीख़ के नीचे एक छोटा बिंदु या हीरा है; कलकत्ता आमतौर पर कोई चिह्न नहीं छोड़ती।',
          'कुछ वर्षों में ढलाई-संख्या कम रही, और वही वर्ष संग्राहकों की सूची में ऊपर बैठते हैं। यह जानकारी कैटलॉग में दर्ज है और उसे देखे बिना अंदाज़ा लगाना कठिन है।',
          'एक और भेद देखने लायक़ है: चित्र की किस्में। जॉर्ज V के चित्र में समय के साथ छोटे परिवर्तन हुए, और विशेषज्ञ इन्हें अलग किस्मों के रूप में दर्ज करते हैं।',
          'नए संग्राहक के लिए सलाह यही है कि पहले आम वर्ष जुटाइए और आँख बनाइए। दुर्लभ वर्ष तब ख़रीदिए जब आप ख़ुद दशा का आकलन कर सकें।',
        ],
        pEn: [
          'George V rupees were struck at both the Bombay and Calcutta mints. The Bombay mark is a small dot or diamond below the date; Calcutta usually leaves no mark at all.',
          'Mintages were low in certain years, and those years sit higher on a collector’s list. That information is in the catalogues and is hard to guess at without them.',
          'One further distinction is worth watching: portrait varieties. The George V portrait changed in small ways over time, and specialists record these as separate types.',
          'The advice for a new collector is to gather the common years first and build the eye. Buy a scarce year once you can assess condition yourself.',
        ],
      },
      {
        hHi: 'नक़ल की पहचान',
        hEn: 'Identifying forgeries',
        pHi: [
          'यह भारत के सबसे ज़्यादा नक़ल किए जाने वाले सिक्कों में है, क्योंकि इसकी माँग बड़ी है और लोग इसे धातु के लिए भी ख़रीदते हैं।',
          'वज़न सबसे तेज़ जाँच है: 11.66 ग्राम के मानक से स्पष्ट अंतर संदेह पैदा करता है। एक सस्ता डिजिटल तराज़ू अधिकांश नक़लों को यहीं पकड़ लेता है।',
          'किनारा दूसरी जाँच है। असली सिक्के का किनारा धारीदार और तीखा है, और हर धारी समान गहराई तथा दूरी पर। ढली हुई नक़ल में किनारा चिकना, गोल या असमान होता है।',
          'तीसरी जाँच आवाज़ है — चाँदी उँगली पर संतुलित करके ठोंकने पर लंबी, साफ़ आवाज़ देती है। और चौथी: चुंबक। चाँदी चुंबक से नहीं चिपकती, इसलिए चिपकना ही उत्तर है।',
        ],
        pEn: [
          'This is among the most forged coins in India, because demand for it is large and people buy it for the metal as well.',
          'Weight is the fastest check: a clear discrepancy from the 11.66 gram standard raises a question. A cheap digital scale catches most forgeries right here.',
          'The edge is the second check. A genuine coin has sharp reeding, every groove at the same depth and spacing. A cast copy has an edge that is smooth, rounded or uneven.',
          'The third check is sound — balanced on a fingertip and tapped, silver gives a long clear note. And the fourth is a magnet. Silver is not magnetic, so any attraction is itself the answer.',
        ],
      },
      {
        hHi: 'दशा कैसे परखें',
        hEn: 'How to judge condition',
        pHi: [
          'जॉर्ज V के चित्र पर घिसाव सबसे पहले तीन जगह दिखता है: गाल की हड्डी, बालों की ऊपरी लट, और मुकुट का सबसे ऊँचा हिस्सा।',
          'पिछली तरफ़ अक्षरों के ऊपरी किनारे और पुष्प-अलंकरण की नोकें पहले चपटी होती हैं। इन पाँच बिंदुओं को याद रखना इस सिक्के की व्यावहारिक ग्रेडिंग है।',
          'लस्टर देखने के लिए सिक्के को एक ही रोशनी के नीचे धीरे-धीरे घुमाइए। असली लस्टर में चमक का चक्र सतह पर घूमता है; साफ़ की गई सतह पूरी एक साथ चमकती है और सपाट लगती है।',
          'और वही नियम, जो इस सिक्के पर सबसे ज़्यादा तोड़ा जाता है: कभी साफ़ मत कीजिए। चाँदी चमकाने की इच्छा सबसे तीव्र यहीं होती है, और नुक़सान भी सबसे बड़ा यहीं होता है।',
        ],
        pEn: [
          'On the George V portrait, wear shows first in three places: the cheekbone, the uppermost lock of hair, and the highest point of the crown.',
          'On the reverse, the upper edges of the lettering and the tips of the floral ornament flatten earliest. Remembering those five points is the practical grading of this coin.',
          'To see lustre, rotate the coin slowly under a single light. Genuine lustre shows a wheel of brightness moving across the surface; a cleaned surface lights up all at once and looks flat.',
          'And the rule most often broken on this particular coin: never clean it. The urge to brighten silver is strongest here, and the damage done is greatest here too.',
        ],
      },
      {
        hHi: 'बेचने से पहले',
        hEn: 'Before you sell',
        pHi: [
          'सबसे पहले वज़न तौलिए और वर्ष तथा टकसाल-चिह्न दर्ज कीजिए। यह तीन जानकारियाँ किसी भी मोल-भाव में आपकी स्थिति मज़बूत करती हैं।',
          'फिर उस दिन की चाँदी की क़ीमत देखिए और अनुमान लगाइए कि धातु-मूल्य क्या बनता है। यह आपकी न्यूनतम सीमा है और उससे नीचे बेचने का कोई कारण नहीं।',
          'फिर बीते नीलामी-नतीजे देखिए, माँगी गई क़ीमतें नहीं। और दशा का मिलान कीजिए — आपका घिसा हुआ सिक्का किसी UNC नमूने के दाम से नहीं तौला जा सकता।',
          'और वही अंतिम नियम: पैसा ख़रीदार से विक्रेता की ओर बहता है। जो आपसे रजिस्ट्रेशन या कूरियर का शुल्क माँगे, वह ख़रीदार नहीं है।',
        ],
        pEn: [
          'First weigh the coin and record the year and mint mark. Those three pieces of information strengthen your position in any negotiation.',
          'Then look up the silver price that day and work out the metal value. That is your floor, and there is no reason to sell below it.',
          'Then look at past auction results rather than asking prices. And match the grade — your worn coin cannot be weighed against the price of a UNC example.',
          'And the same final rule: money flows from the buyer to the seller. Anybody asking you for a registration or courier fee is not a buyer.',
        ],
      },
      {
        hHi: 'रखने का कारण',
        hEn: 'A reason to keep it',
        pHi: [
          'एक बात जो सलाह देने वाले कम कहते हैं: इस सिक्के को बेचना ही एकमात्र विकल्प नहीं है।',
          'यह उस दौर का सबसे बड़ा और सबसे भारी चाँदी का सिक्का है, और हाथ में उसका वज़न वह चीज़ है जिसे कोई तस्वीर नहीं बता सकती।',
          'यदि यह परिवार से आया है, तो उसके साथ एक पर्ची रख दीजिए जिस पर लिखा हो कि यह किसका था। पचास साल बाद वह पर्ची सिक्के जितनी ही क़ीमती होगी।',
          'और यदि बेचना ही है, तो पूरा संग्रह एक साथ बेचने के बजाय पहले एक सिक्का बेचकर बाज़ार का अंदाज़ा लगाइए।',
        ],
        pEn: [
          'One thing advisers rarely say: selling this coin is not the only option.',
          'It is the largest and heaviest silver coin of its period, and its weight in the hand is something no photograph conveys.',
          'If it came down through the family, keep a slip with it recording whose it was. Fifty years from now that slip will be worth as much as the coin.',
          'And if you do intend to sell, try one coin first rather than the whole holding, so that you learn what the market actually pays.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'जॉर्ज V का रुपया .917 चाँदी का है, वज़न 11.66 ग्राम, और वही उसे धातु-मूल्य में बाद के सिक्कों से ऊपर रखता है।',
          'दाम दो चीज़ों से बनता है: चाँदी की क़ीमत, जो आपकी न्यूनतम सीमा है, और दशा तथा दुर्लभता, जो उससे ऊपर की सब कुछ तय करती है। साफ़ करना दूसरी वाली को नष्ट कर देता है।',
        ],
        pEn: [
          'The George V rupee is .917 silver at 11.66 grams, and that is what keeps it above the later issues in metal value.',
          'Its price is built from two things: the silver price, which is your floor, and condition and rarity, which decide everything above it. Cleaning destroys the second of those entirely, which is why the single most valuable thing you can do with the coin is nothing at all.',
        ],
      },
    ],
  },
  {
    slug: 'anna-system-samjhe',
    sections: [
      {
        hHi: 'पूरी सीढ़ी, नीचे से ऊपर',
        hEn: 'The full ladder, from the bottom up',
        pHi: [
          'सबसे नीचे पाई थी। तीन पाई का एक पैसा, चार पैसे का एक आना, और सोलह आने का एक रुपया। यानी एक रुपये में 192 पाई।',
          'बीच में कुछ और इकाइयाँ भी चलीं। दो पैसे की एक धेली, आधे आने की एक अठन्नी नहीं बल्कि दुअन्नी — नामों में क्षेत्रीय भिन्नता थी और वही आज उलझन पैदा करती है।',
          'दशमलव व्यवस्था में अठन्नी का अर्थ पचास पैसे हो गया, और चवन्नी का पच्चीस। पर मूल रूप से अठन्नी आठ आने थी, यानी आधा रुपया — और चवन्नी चार आने, यानी चौथाई।',
          'यही निरंतरता दिलचस्प है: नाम बचे रहे, अर्थ बदल गया। आज भी लोग चवन्नी कहते हैं, बिना यह जाने कि वह शब्द एक ऐसी व्यवस्था से आया है जो साठ साल पहले ख़त्म हो गई।',
        ],
        pEn: [
          'At the bottom sat the pie. Three pie made one pice, four pice made one anna, and sixteen annas made one rupee — meaning 192 pie to a rupee.',
          'A few intermediate units ran alongside. Two pice made a dheli, and names varied by region, which is exactly what causes confusion today.',
          'Under decimalisation athanni came to mean fifty paise and chavanni twenty-five. But originally athanni was eight annas, meaning half a rupee — and chavanni four annas, a quarter.',
          'That continuity is the interesting part: the names survived while the meaning changed. People still say chavanni without knowing the word comes from a system that ended sixty years ago.',
        ],
      },
      {
        hHi: 'सोलह क्यों',
        hEn: 'Why sixteen',
        pHi: [
          'आज दस का गुणक स्वाभाविक लगता है, पर ऐतिहासिक रूप से बारह और सोलह कहीं अधिक व्यावहारिक थे — और कारण गणितीय है।',
          'सोलह को दो, चार और आठ से पूरा-पूरा बाँटा जा सकता है। बाज़ार में आधा, चौथाई और आठवाँ हिस्सा रोज़ चाहिए होता है, और सोलह इन तीनों को बिना अंश के देता है।',
          'दस के साथ यह सुविधा नहीं है। दस का चौथाई ढाई होता है, और सिक्कों की दुनिया में आधा सिक्का देना संभव नहीं।',
          'यही कारण है कि दुनिया भर की पुरानी मुद्रा-व्यवस्थाएँ बारह और बीस के गुणकों पर चलीं। दशमलव तब आया जब लिखित हिसाब-किताब मौखिक बाज़ार-गणित से ज़्यादा महत्वपूर्ण हो गया।',
        ],
        pEn: [
          'A multiple of ten feels natural today, but historically twelve and sixteen were far more practical — and the reason is mathematical.',
          'Sixteen divides cleanly by two, four and eight. A market needs halves, quarters and eighths every day, and sixteen gives all three without fractions.',
          'Ten offers no such convenience. A quarter of ten is two and a half, and in a world of coins you cannot hand over half a coin.',
          'This is why old currency systems across the world ran on multiples of twelve and twenty. Decimalisation arrived once written accounting mattered more than the spoken arithmetic of a marketplace.',
        ],
      },
      {
        hHi: 'भाषा में बची हुई व्यवस्था',
        hEn: 'The system that survives in the language',
        pHi: [
          '“सोलह आने सच” — यानी पूरी तरह सच, क्योंकि सोलह आने पूरा रुपया होते थे। यह मुहावरा आज भी बोलचाल में जीवित है।',
          '“फूटी कौड़ी नहीं” — कौड़ी उस दौर की सबसे छोटी इकाई थी, और फूटी यानी टूटी हुई। यानी इतना भी नहीं जितना एक टूटी हुई सबसे छोटी चीज़।',
          '“चवन्नी छाप” — एक व्यंग्य, जिसका अर्थ है सस्ता या घटिया। चवन्नी चार आने की थी, और उससे जो ख़रीदा जा सकता था वह मामूली था।',
          'ये मुहावरे बताते हैं कि मुद्रा-व्यवस्था केवल अर्थशास्त्र नहीं होती। वह भाषा में उतर जाती है और उस व्यवस्था के ख़त्म होने के बाद भी दशकों तक बोली जाती रहती है।',
        ],
        pEn: [
          '“Sixteen annas true” — meaning entirely true, because sixteen annas made a whole rupee. The phrase is still alive in everyday Hindi.',
          '“Not even a phooti kaudi” — the kaudi was the smallest unit of that period, and phooti means broken. Not even as much as a broken example of the smallest thing there is.',
          '“Chavanni chhaap” — a jibe meaning cheap or second-rate. A chavanni was four annas, and what it bought was modest.',
          'These phrases show that a monetary system is never only economics. It settles into the language and goes on being spoken for decades after the system itself has ended.',
        ],
      },
      {
        hHi: 'बाज़ार का गणित',
        hEn: 'The arithmetic of the marketplace',
        pHi: [
          'इस व्यवस्था में रोज़मर्रा का हिसाब आज से बहुत अलग दिखता था, और उसे समझना पुराने दस्तावेज़ पढ़ने के लिए ज़रूरी है।',
          'पुराने बहीखातों में रक़म अक्सर तीन खानों में लिखी मिलती है: रुपया, आना, पाई। जैसे “5-12-3” का अर्थ पाँच रुपये, बारह आने, तीन पाई।',
          'जोड़ने में सावधानी चाहिए थी, क्योंकि हर खाना अलग आधार पर चलता था — पाई तीन पर, आना सोलह पर। बारह पाई हुईं तो चार पैसे, और चार पैसे हुए तो एक आना।',
          'यही जटिलता दुकानदारों और मुनीमों का रोज़ का कौशल थी। जब 1957 में दशमलव आया, तो सबसे बड़ी राहत यही थी कि अब सब कुछ सौ के आधार पर चलेगा।',
        ],
        pEn: [
          'Everyday reckoning under this system looked very different from today, and understanding it is necessary for reading old documents.',
          'In old ledgers amounts appear in three columns: rupees, annas, pies. “5-12-3” means five rupees, twelve annas, three pies.',
          'Addition required care, because each column ran on a different base — pies on three, annas on sixteen. Twelve pies made four pice, and four pice made an anna.',
          'That complexity was the daily skill of shopkeepers and accountants. When decimalisation arrived in 1957, the greatest relief was simply that everything would now run on a base of a hundred.',
        ],
      },
      {
        hHi: 'सिक्कों को व्यवस्था में रखना',
        hEn: 'Placing the coins in the system',
        pHi: [
          'जब आप एक पुराना सिक्का उठाते हैं, तो पहला सवाल यही होना चाहिए कि वह इस सीढ़ी पर कहाँ बैठता है।',
          'सबसे आम सिक्के हैं: क्वार्टर आना (ताँबा, बड़ा), आधा आना, एक आना, दो आना, चौथाई रुपया, आधा रुपया, और रुपया।',
          'ताँबे के छोटे सिक्के भारी संख्या में ढले और भारी संख्या में बचे, इसलिए वे सस्ते हैं। चाँदी के बड़े सिक्के कम बचे और अधिक माँगे जाते हैं।',
          'एक अच्छा संग्रह-लक्ष्य यही है: पूरी सीढ़ी का एक-एक नमूना, एक ही शासक के दौर का। सात सिक्के, और वे मिलकर एक पूरी मुद्रा-व्यवस्था का चित्र बना देते हैं।',
        ],
        pEn: [
          'When you pick up an old coin, the first question should be where it sits on this ladder.',
          'The commonest are: the quarter anna (copper, large), the half anna, one anna, two annas, quarter rupee, half rupee, and rupee.',
          'The small copper pieces were struck and survive in quantity, so they are cheap. The larger silver coins survive in smaller numbers and attract more demand.',
          'A good collecting target follows from this: one example of each rung, all from a single ruler’s reign. Seven coins, and together they form a picture of an entire monetary system.',
        ],
      },
      {
        hHi: '1957 का परिवर्तन',
        hEn: 'The change of 1957',
        pHi: [
          '1 अप्रैल 1957 से भारत दशमलव व्यवस्था पर चला गया। रुपया वही रहा, पर उसके नीचे की पूरी सीढ़ी बदल गई — अब सौ पैसे का एक रुपया।',
          'भ्रम से बचने के लिए नए सिक्कों पर “नया पैसा” अंकित किया गया। यह शब्द 1964 तक चला, फिर हटा दिया गया जब लोग व्यवस्था के आदी हो गए।',
          'कुछ वर्षों तक दोनों व्यवस्थाएँ साथ चलीं, और लोगों को दोनों में हिसाब करना पड़ा। पुराने आना-सिक्के धीरे-धीरे वापस लिए गए।',
          'संग्राहक के लिए यह एक साफ़ विभाजन-रेखा है, और वही इसे इतना उपयोगी बनाती है। 1957 से पहले की हर चीज़ एक व्यवस्था की है; उसके बाद की दूसरी की।',
        ],
        pEn: [
          'From 1 April 1957 India moved to a decimal system. The rupee itself stayed, but the entire ladder beneath it changed — now a hundred paise to the rupee.',
          'To avoid confusion the new coins were inscribed “naya paisa”. The word ran until 1964, then was dropped once people had grown used to the system.',
          'For some years both systems ran together, and people had to reckon in each. The old anna coins were gradually withdrawn.',
          'For a collector this is a clean dividing line, and that is what makes it so useful. Everything before 1957 belongs to one system; everything after it to another.',
        ],
      },
      {
        hHi: 'यह जानना क्यों बुनियादी है',
        hEn: 'Why knowing this is foundational',
        pHi: [
          'इस व्यवस्था को समझे बिना पुराने भारतीय सिक्कों का संग्रह अधूरा रहता है, क्योंकि हर सिक्के का अर्थ उसी सीढ़ी पर उसकी जगह से निकलता है।',
          'यह पुराने दस्तावेज़ पढ़ने के लिए भी ज़रूरी है — पुराने पट्टे, बहीखाते, रसीदें, और साहित्य में आने वाली रक़में सब इसी भाषा में हैं।',
          'और यह पारिवारिक कहानियाँ समझने के लिए भी काम आता है। जब कोई बुज़ुर्ग कहता है कि उसने चार आने में क्या ख़रीदा था, तो उस वाक्य का अर्थ तभी खुलता है जब आप जानते हों कि चार आने कितने थे।',
          'इसलिए यह जानकारी उबाऊ नहीं, बुनियादी है। बाक़ी सब — पहचान, ग्रेडिंग, मूल्यांकन — इसी नींव पर खड़ा होता है।',
        ],
        pEn: [
          'Without understanding this system a collection of old Indian coins stays incomplete, because the meaning of every coin comes from its place on that ladder.',
          'It is necessary for reading old documents too — leases, ledgers, receipts, and the sums that appear in literature are all written in this language.',
          'It also helps in understanding family stories. When an elderly relative says what four annas bought, the sentence only opens up if you know how much four annas were.',
          'So this is not dull information but foundational. Everything else — identification, grading, valuation — is built on this footing.',
        ],
      },
      {
        hHi: 'याद रखने का आसान तरीक़ा',
        hEn: 'An easy way to remember it',
        pHi: [
          'तीन संख्याएँ याद रखिए: 3, 4, 16। तीन पाई का पैसा, चार पैसे का आना, सोलह आने का रुपया।',
          'और एक जाँच-संख्या: 192। एक रुपये में इतनी पाई होती थीं। यदि आपका गुणा 192 पर आकर बैठे, तो हिसाब सही है।',
        ],
        pEn: [
          'Remember three numbers: 3, 4, 16. Three pie to a pice, four pice to an anna, sixteen annas to a rupee.',
          'And one checking figure: 192. That is how many pie made a rupee. If your multiplication lands on 192, the arithmetic is right — and that single check will catch almost any mistake you make while reading an old ledger.',
        ],
      },
    ],
  },
  {
    slug: 'naya-paisa-1957',
    sections: [
      {
        hHi: 'सिक्के ख़ुद: धातु और आकार',
        hEn: 'The coins themselves: metal and size',
        pHi: [
          '1957 में जारी हुई शृंखला में छह मूल्यवर्ग थे: एक, दो, पाँच, दस, पच्चीस और पचास नए पैसे।',
          'एक और दो नए पैसे काँसे के थे — भूरे, छोटे, और अपेक्षाकृत भारी। पाँच और दस नए पैसे निकल-पीतल के, पीले रंग के और अष्टकोणीय या स्कैलप्ड किनारों के साथ।',
          'पच्चीस और पचास नए पैसे कप्रो-निकल के थे — चाँदी जैसे दिखने वाले, गोल, और सबसे बड़े। ये उस दौर के सबसे भारी चलन-सिक्के थे।',
          'आकार का यह अंतर जानबूझकर था। दशमलव व्यवस्था नई थी और लोगों को सिक्के छूकर पहचानने थे — इसलिए हर मूल्यवर्ग का अलग आकार, अलग किनारा और अलग धातु।',
        ],
        pEn: [
          'The series issued in 1957 had six denominations: one, two, five, ten, twenty-five and fifty naye paise.',
          'The one and two naye paise were bronze — brown, small and comparatively heavy. The five and ten were nickel-brass, yellow in colour, with octagonal or scalloped edges.',
          'The twenty-five and fifty were cupro-nickel — silvery in appearance, round, and the largest of the set. These were the heaviest circulating coins of the period.',
          'That variation in shape was deliberate. The decimal system was new and people had to recognise coins by touch — hence a different size, a different edge and a different metal for each denomination.',
        ],
      },
      {
        hHi: 'डिज़ाइन का चयन',
        hEn: 'The choice of design',
        pHi: [
          'हर सिक्के के एक ओर अशोक स्तंभ का सिंह-शीर्ष है, और नीचे “सत्यमेव जयते”। यह स्वतंत्र भारत की मुद्रा की स्थायी पहचान बनी।',
          'दूसरी ओर मूल्यवर्ग है — देवनागरी और अंग्रेज़ी दोनों में, और साथ में वर्ष। दो भाषाओं का यह चयन एक बहुभाषी देश की व्यावहारिक ज़रूरत थी।',
          'डिज़ाइन जानबूझकर सादा रखा गया। कोई व्यक्ति-चित्र नहीं, कोई अलंकरण नहीं — यह उपनिवेशी सिक्कों से एक स्पष्ट विच्छेद था, जिन पर हमेशा किसी शासक का चेहरा रहता था।',
          'यह निर्णय आज भी कायम है। भारतीय चलन-सिक्कों पर आज भी किसी व्यक्ति का चित्र नहीं होता, और उसकी जड़ इसी शृंखला में है।',
        ],
        pEn: [
          'Each coin carries the lion capital of Ashoka on one side, with “Satyameva Jayate” beneath it. This became the permanent identity of independent India’s coinage.',
          'The other side carries the denomination — in Devanagari and English both, with the year. That choice of two languages was the practical requirement of a multilingual country.',
          'The design was kept deliberately plain. No portrait, no ornament — a clear break from colonial coinage, which had always carried a ruler’s face.',
          'That decision still holds. Indian circulating coins carry no portrait of any person to this day, and the root of it lies in this series.',
        ],
      },
      {
        hHi: '“नया” कब हटा',
        hEn: 'When “naya” was dropped',
        pHi: [
          'शब्द “नया” का एक ही काम था: पुराने पैसे से भ्रम रोकना। पुरानी व्यवस्था में भी पैसा था, पर उसका मूल्य अलग था।',
          '1964 में यह शब्द हटा दिया गया। तब तक सात साल बीत चुके थे और लोग नई व्यवस्था के आदी हो चुके थे।',
          'इसका संग्राहक के लिए सीधा उपयोग है: जिस सिक्के पर “नया पैसा” लिखा है, वह 1957 से 1964 के बीच का है। जिस पर केवल “पैसा” है, वह उसके बाद का।',
          'यह एक बहुत साफ़ तारीख़-सूत्र है, और नए संग्राहक के लिए सबसे उपयोगी पहचान-नियमों में से एक।',
        ],
        pEn: [
          'The word naya had one job: to prevent confusion with the old paisa. The earlier system had a paisa too, but its value was different.',
          'The word was dropped in 1964. By then seven years had passed and people had grown used to the new system.',
          'This has a direct use for a collector: a coin reading “naya paisa” belongs to 1957–1964. One reading only “paisa” comes after that.',
          'It is a very clean dating clue, and one of the most useful identification rules a new collector can learn.',
        ],
      },
      {
        hHi: 'संक्रमण काल में जीवन',
        hEn: 'Life during the transition',
        pHi: [
          'कुछ वर्षों तक दोनों व्यवस्थाएँ साथ चलीं, और यह व्यवहार में उतना आसान नहीं था जितना काग़ज़ पर लगता है।',
          'दुकानदारों को दोनों में हिसाब करना पड़ता था, और रूपांतरण की दरें याद रखनी पड़ती थीं — एक आना लगभग छह नए पैसे के बराबर बैठता था, जो कोई गोल संख्या नहीं है।',
          'सरकारी विभागों ने रूपांतरण तालिकाएँ छापकर बाँटीं, और अख़बारों में समझाने वाले लेख छपे। रेडियो पर भी इसकी व्याख्या की गई।',
          'पुराने आना-सिक्के धीरे-धीरे वापस लिए गए, और वही कारण है कि आज भी वे मिलते हैं — वे एक ही दिन में ग़ायब नहीं हुए, बल्कि वर्षों में।',
        ],
        pEn: [
          'Both systems ran together for some years, and in practice that was not as simple as it looks on paper.',
          'Shopkeepers had to reckon in both and remember conversion rates — one anna came to roughly six naye paise, which is not a round number.',
          'Government departments printed and distributed conversion tables, and newspapers carried explanatory articles. It was explained on the radio as well.',
          'The old anna coins were withdrawn gradually, which is why they still turn up today — they did not vanish in a single day but over years.',
        ],
      },
      {
        hHi: 'एल्युमिनियम का दौर',
        hEn: 'The aluminium period',
        pHi: [
          '1960 के दशक में लागत का दबाव आया। धातु की क़ीमत बढ़ी और छोटे मूल्यवर्ग बनाने में उनके अंकित मूल्य से ज़्यादा ख़र्च होने लगा।',
          'समाधान एल्युमिनियम था। एक, दो, तीन, पाँच और दस पैसे के सिक्के एल्युमिनियम में ढाले गए — बेहद हल्के, और अक्सर तिकोने या स्कैलप्ड आकार में ताकि छूकर पहचाने जा सकें।',
          'तीन पैसे का सिक्का इस दौर की एक विशेष जिज्ञासा है। यह एक असामान्य मूल्यवर्ग है और अपेक्षाकृत कम समय तक चला, इसलिए संग्राहकों में उसकी अलग जगह है।',
          'ये हल्के सिक्के लोगों की स्मृति में गहरे बैठे हैं। बच्चे उन्हें उछालकर देखते थे कि कितनी देर हवा में रहते हैं — और यही उन्हें आज भावनात्मक रूप से क़ीमती बनाता है।',
        ],
        pEn: [
          'Cost pressure arrived in the 1960s. Metal prices rose and the smaller denominations began to cost more to make than their face value.',
          'The answer was aluminium. One, two, three, five and ten paise were struck in it — extremely light, and often in scalloped or triangular shapes so that they could be told apart by touch.',
          'The three paise coin is a particular curiosity of this period. It is an unusual denomination and ran for a comparatively short time, which gives it a place of its own among collectors.',
          'These light coins sit deep in people’s memory. Children used to toss them to see how long they stayed in the air — and that is what makes them emotionally valuable today.',
        ],
      },
      {
        hHi: 'संग्रह में इसकी जगह',
        hEn: 'Its place in a collection',
        pHi: [
          'यह शृंखला संग्रह के लिए असाधारण रूप से उपयुक्त है, और कारण सरल है: वह पूरी की जा सकती है।',
          '1957 की छह मूल्यवर्ग की शृंखला एक स्पष्ट, सीमित लक्ष्य है। सारे सिक्के सस्ते हैं, आसानी से मिलते हैं, और पूरा होने पर एक साफ़ कहानी बनती है।',
          'अगला स्तर “हर वर्ष का हर मूल्यवर्ग, टकसाल-चिह्न सहित” है। यह वर्षों का काम है और कुछ संयोजन कठिन मिलते हैं — पर यही उसे दिलचस्प बनाता है।',
          'और सबसे अच्छी बात: इसकी शुरुआत घर पर हो सकती है। दराज़ और गुल्लक में पड़े पुराने सिक्कों में से आधी शृंखला अक्सर पहले से मौजूद रहती है।',
        ],
        pEn: [
          'This series suits collecting unusually well, for one simple reason: it can actually be completed.',
          'The six denominations of 1957 are a clear, bounded target. All are cheap, easy to find, and once assembled they tell a clean story.',
          'The next level is “every denomination for every year, mint marks included”. That is a project of years and some combinations are hard to find — which is exactly what makes it interesting.',
          'And the best part: it can begin at home. Half the series is usually already sitting in a drawer or a piggy bank.',
        ],
      },
      {
        hHi: 'रख-रखाव की एक विशेष चेतावनी',
        hEn: 'One particular warning about care',
        pHi: [
          'एल्युमिनियम के सिक्के इस पूरी शृंखला में सबसे नाज़ुक हैं और उन्हें अलग व्यवहार चाहिए।',
          'वे नरम हैं, आसानी से मुड़ते और ख़रोंच खाते हैं, और नमी में उन पर सफ़ेद पाउडर जैसी परत जम जाती है जो सतह को स्थायी नुक़सान पहुँचाती है।',
          'इसलिए इन्हें अलग-अलग रखिए — एक ही लिफ़ाफ़े में कई डालने से वे आपस में रगड़ खाते हैं। और सिलिका जेल का पाउच डिब्बे में ज़रूर रखिए।',
          'काँसे और कप्रो-निकल के सिक्के अधिक मज़बूत हैं, पर उन पर भी वही नियम लागू है जो हर सिक्के पर — साफ़ मत कीजिए।',
        ],
        pEn: [
          'The aluminium coins are the most fragile in this whole series and need different handling.',
          'They are soft, bend and scratch easily, and in damp conditions develop a white powdery bloom that damages the surface permanently.',
          'So keep them separated — several in one envelope simply rub against each other. And always keep a silica gel sachet in the box.',
          'The bronze and cupro-nickel pieces are tougher, but the same rule applies to them as to every coin — do not clean them.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          '1957 की शृंखला में छह मूल्यवर्ग थे, हर एक का अलग आकार, किनारा और धातु — ताकि लोग नई व्यवस्था को छूकर पहचान सकें।',
          '“नया पैसा” 1957 से 1964 तक लिखा गया, और यही सबसे साफ़ तारीख़-सूत्र है। बाद में एल्युमिनियम आया, और उसके साथ तीन पैसे जैसा असामान्य मूल्यवर्ग भी।',
        ],
        pEn: [
          'The 1957 series had six denominations, each with its own size, edge and metal, so that people could recognise the new system by touch alone.',
          '“Naya paisa” was inscribed from 1957 to 1964, and that remains the cleanest dating clue in the series. Aluminium arrived later, and with it unusual denominations such as the three paise, which is a curiosity worth having in any collection.',
        ],
      },
    ],
  },
  {
    slug: 'mughal-coinage-basics',
    sections: [
      {
        hHi: 'रुपिया: वज़न, शुद्धता, और भरोसा',
        hEn: 'The rupiya: weight, purity, and trust',
        pHi: [
          'मुग़ल चाँदी का रुपिया लगभग ग्यारह ग्राम का था और उसकी शुद्धता बहुत ऊँची — प्रायः 96 प्रतिशत से ऊपर।',
          'यह शुद्धता संयोग नहीं थी। टकसालों में जाँच की व्यवस्था थी, और घटिया सिक्का पकड़े जाने पर दंड का प्रावधान था। मुद्रा की साख प्रशासन की प्राथमिकता थी।',
          'परिणाम यह हुआ कि मुग़ल रुपिया साम्राज्य की सीमाओं से बाहर भी स्वीकार होता था। मध्य एशिया, फ़ारस की खाड़ी और हिंद महासागर के व्यापारिक मार्गों पर वह एक भरोसेमंद इकाई था।',
          'यही किसी मुद्रा की असली सफलता है — जब उसे उन जगहों पर भी लिया जाए जहाँ जारी करने वाली सत्ता का कोई अधिकार नहीं।',
        ],
        pEn: [
          'The Mughal silver rupiya weighed around eleven grams and was of very high fineness — frequently above 96 per cent.',
          'That purity was not accidental. The mints had systems of assay, and penalties existed for producing debased coin. The credibility of the currency was an administrative priority.',
          'The result was that the Mughal rupiya was accepted well beyond the empire’s borders. Across Central Asia, the Persian Gulf and the trade routes of the Indian Ocean it served as a dependable unit.',
          'That is the real measure of a currency’s success — when it is taken in places where the issuing authority has no power at all.',
        ],
      },
      {
        hHi: 'मोहर और सोने की भूमिका',
        hEn: 'The mohur and the role of gold',
        pHi: [
          'सोने की मोहर का वज़न लगभग साढ़े दस से ग्यारह ग्राम रहा, यानी रुपिया के बराबर — पर मूल्य में कहीं ऊपर।',
          'मोहर रोज़मर्रा के बाज़ार का सिक्का नहीं थी। वह बड़े लेन-देन, ख़ज़ाने के भंडारण, और उपहार के लिए थी। दरबार में दी जाने वाली भेंट अक्सर मोहरों में गिनी जाती थी।',
          'रुपिया और मोहर के बीच का अनुपात तय नहीं था — वह धातुओं के बाज़ार-भाव के साथ बदलता रहा, आमतौर पर एक मोहर बराबर नौ से चौदह रुपये के बीच।',
          'यह लचीलापन आधुनिक दृष्टि से अजीब लगता है, पर उस दौर में सामान्य था। मुद्रा का मूल्य उसकी धातु में था, और धातु की क़ीमत बाज़ार तय करता था।',
        ],
        pEn: [
          'The gold mohur weighed roughly ten and a half to eleven grams — about the same as the rupiya, but far above it in value.',
          'The mohur was not a coin of the everyday market. It served large transactions, treasury storage and gifts. Offerings presented at court were frequently counted in mohurs.',
          'The ratio between rupiya and mohur was not fixed — it shifted with the market prices of the metals, generally somewhere between nine and fourteen rupees to the mohur.',
          'That flexibility looks strange from a modern viewpoint but was ordinary then. The value of currency lay in its metal, and the price of metal was set by the market.',
        ],
      },
      {
        hHi: 'ताँबे का दाम और रोज़मर्रा का बाज़ार',
        hEn: 'The copper dam and the everyday market',
        pHi: [
          'ताँबे का दाम सबसे नीचे था और सबसे ज़्यादा चला। आम आदमी का दैनिक लेन-देन इसी में होता था।',
          'इसका वज़न लगभग बीस ग्राम था — रुपिया से लगभग दोगुना भारी, पर मूल्य में उसका चालीसवाँ हिस्सा। यह अनुपात भी स्थिर नहीं था।',
          'दाम की प्रचुरता का एक सुखद परिणाम है: आज ये सिक्के सबसे सस्ते मुग़ल सिक्के हैं। कुछ सौ रुपये में मिल जाते हैं, और उन पर वही लिपि तथा वही टकसाल-नाम होते हैं जो चाँदी पर।',
          'इसलिए मुग़ल संग्रह की शुरुआत के लिए दाम सबसे उपयुक्त है। आँख बनाने के लिए वह आदर्श है, और ग़लती की क़ीमत मामूली।',
        ],
        pEn: [
          'The copper dam sat at the bottom and circulated most of all. The daily transactions of ordinary people were conducted in it.',
          'It weighed around twenty grams — roughly twice the rupiya — while being worth a fortieth of it. That ratio too was not fixed.',
          'The abundance of dams has a happy consequence: they are the cheapest Mughal coins today. A few hundred rupees buys one, and it carries the same script and the same mint names as the silver.',
          'The dam is therefore the right place to begin a Mughal collection. It is ideal for building the eye, and the cost of a mistake is trivial.',
        ],
      },
      {
        hHi: 'टकसाल का नाम पढ़ना',
        hEn: 'Reading the mint name',
        pHi: [
          'हर मुग़ल सिक्के पर उसकी टकसाल का नाम फ़ारसी में दर्ज होता था, और यह उस दौर की एक असाधारण प्रशासनिक उपलब्धि है।',
          'बड़े नाम बार-बार लौटते हैं: लाहौर, शाहजहानाबाद (दिल्ली), अकबराबाद (आगरा), अहमदाबाद, सूरत, पटना, बुरहानपुर, काबुल।',
          'नाम अक्सर एक तय जगह पर होता है और एक तय शैली में लिखा जाता है, इसलिए उसका आकार पहचान लेना कुछ हफ़्तों का काम है — पूरी फ़ारसी सीखने की ज़रूरत नहीं।',
          'यह पहचान क्यों ज़रूरी है? क्योंकि टकसाल ही सिक्के की कहानी तय करती है। एक ही शासक, एक ही वर्ष, पर दो अलग शहर — और दो अलग इतिहास।',
        ],
        pEn: [
          'Every Mughal coin carried its mint name in Persian, which is an extraordinary administrative achievement for the period.',
          'The major names recur: Lahore, Shahjahanabad (Delhi), Akbarabad (Agra), Ahmadabad, Surat, Patna, Burhanpur, Kabul.',
          'The name usually sits in a fixed position and is written in a settled style, so learning to recognise its shape is a matter of weeks — there is no need to learn Persian.',
          'Why does this identification matter? Because the mint decides the story of the coin. The same ruler, the same year, but two different cities — and two different histories.',
        ],
      },
      {
        hHi: 'दो तारीख़ें, एक सिक्का',
        hEn: 'Two dates, one coin',
        pHi: [
          'मुग़ल सिक्कों पर आमतौर पर दो तारीख़ें मिलती हैं, और यह जोड़ा बेहद उपयोगी है।',
          'पहली हिजरी सन् है, जो चंद्र कैलेंडर पर चलता है। दूसरी जुलूस वर्ष है — शासक के तख़्त पर बैठने से गिना गया साल।',
          'दोनों मिलकर सिक्के को समय की रेखा पर लगभग सटीक जगह देते हैं। और यदि एक धुँधली हो, तो दूसरी से अनुमान लगाया जा सकता है।',
          'व्यावहारिक सुझाव: हिजरी अंकों की एक छोटी तालिका छापकर डिब्बे में रख लीजिए। फ़ारसी अंक आधुनिक अरबी अंकों से थोड़े अलग हैं, और यही अंतर सबसे ज़्यादा भ्रम पैदा करता है।',
        ],
        pEn: [
          'Mughal coins usually carry two dates, and that pairing is extremely useful.',
          'The first is the Hijri year, which runs on the lunar calendar. The second is the julus year — counted from the ruler’s accession to the throne.',
          'Together they place the coin on the timeline with near precision. And if one is worn away, the other allows an estimate.',
          'A practical suggestion: print a small table of Hijri numerals and keep it in the box. Persian numerals differ slightly from modern Arabic ones, and that difference causes more confusion than anything else.',
        ],
      },
      {
        hHi: 'आधुनिक रुपये पर छाया',
        hEn: 'The shadow on the modern rupee',
        pHi: [
          'इस पूरी व्यवस्था की सबसे बड़ी विरासत नाम है। “रुपया” शब्द आज भी वही है, और वह मुग़ल-पूर्व शेर शाह के सुधार से होते हुए यहाँ तक पहुँचा।',
          'ब्रिटिश ने इस व्यवस्था को बदला नहीं, अपनाया। उनका रुपया भी लगभग ग्यारह ग्राम चाँदी का रहा, और आना-पाई की सीढ़ी भी उसी परंपरा से निकली।',
          'यानी 1957 की दशमलव व्यवस्था तक, भारत की मुद्रा की बुनियाद वही थी जो सोलहवीं सदी में रखी गई थी। यह चार सौ वर्षों की निरंतरता है।',
          'यही कारण है कि मुग़ल सिक्का किसी भारतीय संग्रह में केवल एक पुरानी वस्तु नहीं है। वह उस व्यवस्था का पूर्वज है जिसका नाम आप आज भी रोज़ बोलते हैं।',
        ],
        pEn: [
          'The greatest legacy of this whole system is the name. The word rupee is still the same, and it reached here by way of Sher Shah’s pre-Mughal reform.',
          'The British did not replace the system but adopted it. Their rupee too was roughly eleven grams of silver, and the anna-and-pie ladder came out of the same tradition.',
          'So until decimalisation in 1957, the foundation of India’s currency was the one laid in the sixteenth century. That is four hundred years of continuity.',
          'This is why a Mughal coin is not merely an old object in an Indian collection. It is the ancestor of the system whose name you still speak every day.',
        ],
      },
      {
        hHi: 'आज का बाज़ार',
        hEn: 'The market today',
        pHi: [
          'ईमानदार तस्वीर यह है: मुग़ल सोने की मोहर महँगी है और अधिकांश बजट से बाहर। चाँदी का रुपिया मध्यम श्रेणी में है — आम टकसालों और आम शासकों का सुलभ, दुर्लभ संयोजन महँगा।',
          'ताँबे का दाम सबसे सस्ता है और भरपूर मिलता है। यहीं से शुरुआत करना समझदारी है।',
          'दाम मुख्यतः तीन बातों से बनता है: शासक, टकसाल, और दशा। औरंगज़ेब के सिक्के सबसे ज़्यादा मिलते हैं क्योंकि उनका शासन सबसे लंबा था; इसलिए वे अपेक्षाकृत सस्ते हैं।',
          'और वही चेतावनी जो हर मुग़ल सिक्के पर लागू होती है: नक़ल आम है, ढली हुई नक़ल सबसे आम, और महँगी ख़रीद से पहले प्रमाणन ज़रूरी।',
        ],
        pEn: [
          'The honest picture is this: the Mughal gold mohur is expensive and beyond most budgets. The silver rupiya sits in the middle — accessible from common mints and common rulers, expensive in scarce combinations.',
          'The copper dam is the cheapest and is plentiful. Beginning here is the sensible course.',
          'Price is built mainly from three things: the ruler, the mint, and the condition. Aurangzeb’s coins are the most plentiful because his reign was the longest, so they are comparatively cheap.',
          'And the same warning that applies to every Mughal coin: forgeries are common, cast forgeries commonest of all, and certification is necessary before any expensive purchase.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'तीन धातुएँ, तीन भूमिकाएँ: सोने की मोहर ख़ज़ाने और उपहार के लिए, चाँदी का रुपिया व्यापार और वेतन के लिए, ताँबे का दाम रोज़मर्रा के बाज़ार के लिए।',
          'हर सिक्के पर टकसाल का नाम, हिजरी सन् और जुलूस वर्ष — यानी वह ख़ुद बता देता है कि कहाँ और कब बना। ताँबे के दाम से शुरुआत कीजिए और वहीं आँख बनाइए।',
        ],
        pEn: [
          'Three metals, three roles: the gold mohur for treasuries and gifts, the silver rupiya for trade and wages, the copper dam for the everyday market.',
          'Every coin carries its mint name, the Hijri year and the julus year — meaning it declares for itself where and when it was made. Begin with the copper dam and build your eye there, because it costs a few hundred rupees and teaches everything the expensive coins would.',
        ],
      },
    ],
  },
  {
    slug: 'the-birth-of-decimal-coinage',
    sections: [
      {
        hHi: 'क़ानून और तैयारी',
        hEn: 'The law, and the preparation',
        pHi: [
          'दशमलव व्यवस्था अचानक नहीं आई। इसके पीछे वर्षों की चर्चा, एक संसदीय क़ानून, और एक विस्तृत प्रशासनिक तैयारी थी।',
          'भारतीय सिक्का अधिनियम में संशोधन के ज़रिए यह परिवर्तन किया गया, और लागू होने की तारीख़ 1 अप्रैल 1957 तय हुई — वित्तीय वर्ष की शुरुआत, ताकि लेखा-व्यवस्था में गड़बड़ी कम हो।',
          'तैयारी में सबसे बड़ी चुनौती जनता को समझाना थी। करोड़ों लोग एक ऐसी व्यवस्था में जी रहे थे जिसे वे बचपन से जानते थे, और उसे बदलना केवल क़ानून का मामला नहीं था।',
          'इसीलिए रूपांतरण तालिकाएँ छापी गईं, अख़बारों में लेख आए, और रेडियो पर समझाया गया। यह एक शिक्षा-अभियान था जितना कि एक प्रशासनिक क़दम।',
        ],
        pEn: [
          'Decimalisation did not arrive suddenly. Behind it lay years of discussion, an Act of Parliament, and detailed administrative preparation.',
          'The change was made through amendment to the Indian Coinage Act, and the date set for it was 1 April 1957 — the start of the financial year, so that accounting would be disrupted as little as possible.',
          'The greatest challenge in the preparation was explaining it to the public. Crores of people were living inside a system they had known since childhood, and changing it was not merely a matter of law.',
          'So conversion tables were printed, newspapers carried articles, and it was explained on the radio. It was an education campaign as much as an administrative step.',
        ],
      },
      {
        hHi: 'पुरानी व्यवस्था क्यों बदली',
        hEn: 'Why the old system changed',
        pHi: [
          'तीन कारण मिलकर काम कर रहे थे। पहला, लेखांकन। रुपया-आना-पाई के तीन अलग आधारों पर हिसाब करना धीमा और त्रुटि-प्रवण था।',
          'दूसरा, मशीनीकरण। बीसवीं सदी के मध्य तक गणना-मशीनें और बाद में कंप्यूटर आ रहे थे, और वे दशमलव पर चलते हैं। ग़ैर-दशमलव व्यवस्था उनके साथ बैठती ही नहीं।',
          'तीसरा, अंतरराष्ट्रीय व्यापार। दुनिया की अधिकांश मुद्राएँ दशमलव पर जा चुकी थीं, और हर लेन-देन में रूपांतरण एक अतिरिक्त बोझ था।',
          'चौथा कारण प्रतीकात्मक था और उसे कम नहीं आँकना चाहिए। आना-पाई व्यवस्था उपनिवेशी दौर से जुड़ी थी, और एक नए गणराज्य के लिए अपनी मुद्रा को आधुनिक आधार पर रखना एक बयान भी था।',
        ],
        pEn: [
          'Three reasons worked together. The first was accounting. Reckoning across the three different bases of rupee, anna and pie was slow and error-prone.',
          'The second was mechanisation. By the middle of the twentieth century calculating machines and then computers were arriving, and they run on decimals. A non-decimal system simply does not fit them.',
          'The third was international trade. Most of the world’s currencies had already moved to decimals, and conversion at every transaction was an additional burden.',
          'A fourth reason was symbolic and should not be underestimated. The anna-and-pie system was tied to the colonial period, and for a new republic putting its currency on a modern footing was a statement as well.',
        ],
      },
      {
        hHi: '“नया पैसा” नाम की कहानी',
        hEn: 'The story of the name “naya paisa”',
        pHi: [
          'नाम एक व्यावहारिक समस्या का समाधान था। पुरानी व्यवस्था में भी “पैसा” मौजूद था — चार पैसे का एक आना। नई व्यवस्था में भी पैसा था, पर सौ का एक रुपया।',
          'यदि दोनों को केवल “पैसा” कहा जाता, तो बाज़ार में हर सौदे में यह पूछना पड़ता कि कौन-सा पैसा। इसलिए नए सिक्कों पर “नया पैसा” अंकित किया गया।',
          'यह एक अस्थायी उपाय था, और उसे अस्थायी ही माना गया। 1964 में, जब पुराने सिक्के लगभग वापस लिए जा चुके थे और लोग नई व्यवस्था के आदी हो चुके थे, यह शब्द हटा दिया गया।',
          'भाषा में यह उपाय अपनी छाप छोड़ गया। कुछ क्षेत्रों में वर्षों तक “नया पैसा” कहने की आदत बनी रही, तब भी जब सिक्के पर वह शब्द नहीं रह गया था।',
        ],
        pEn: [
          'The name solved a practical problem. The old system had a paisa too — four pice to an anna. The new system had a paisa as well, but a hundred to the rupee.',
          'If both had simply been called paisa, every transaction in the market would have required asking which paisa was meant. So the new coins were inscribed naya paisa — new paisa.',
          'It was a temporary measure and was treated as one. In 1964, once the old coins had largely been withdrawn and people had grown used to the system, the word was dropped.',
          'The measure left its mark on the language. In some regions the habit of saying naya paisa persisted for years, even after the word had left the coin.',
        ],
      },
      {
        hHi: 'संक्रमण कैसे चला',
        hEn: 'How the transition ran',
        pHi: [
          'दोनों व्यवस्थाएँ कुछ वर्षों तक साथ चलीं, और यह जानबूझकर था। पुराने सिक्कों को एक ही दिन में अमान्य करना करोड़ों लोगों के लिए कठिनाई पैदा करता।',
          'रूपांतरण दर याद रखनी पड़ती थी, और वह गोल नहीं थी: एक आना लगभग छह नए पैसे, एक पाई लगभग आधा नया पैसा।',
          'दुकानदार अक्सर दोनों में क़ीमत लिखते थे, और कुछ जगह दोहरी क़ीमत-सूचियाँ लगीं। बहीखातों में भी कुछ समय दोनों प्रणालियाँ साथ चलीं।',
          'पुराने सिक्के धीरे-धीरे वापस लिए गए, और अंतिम रूप से 1960 के दशक में चलन से बाहर हुए। यह क्रमिक विदाई ही कारण है कि आज भी वे सिक्के आसानी से मिल जाते हैं।',
        ],
        pEn: [
          'Both systems ran together for some years, and that was deliberate. Invalidating the old coins in a single day would have created hardship for crores of people.',
          'Conversion rates had to be remembered, and they were not round: one anna to roughly six naye paise, one pie to about half a naya paisa.',
          'Shopkeepers frequently marked prices in both, and in some places dual price lists went up. Ledgers too ran both systems side by side for a period.',
          'The old coins were withdrawn gradually and finally left circulation during the 1960s. That gradual departure is why they are still easy to find today.',
        ],
      },
      {
        hHi: 'दुनिया में यही कहानी',
        hEn: 'The same story elsewhere in the world',
        pHi: [
          'भारत अकेला नहीं था। बीसवीं सदी के मध्य में कई देश इसी परिवर्तन से गुज़रे, और उनकी कहानियों की तुलना दिलचस्प है।',
          'ब्रिटेन ने यही क़दम 1971 में उठाया — भारत से चौदह वर्ष बाद। वहाँ भी पाउंड-शिलिंग-पेंस की तीन-स्तरीय व्यवस्था थी, और वहाँ भी संक्रमण में जनता को समझाना सबसे बड़ी चुनौती रही।',
          'ऑस्ट्रेलिया 1966 में, न्यूज़ीलैंड 1967 में, दक्षिण अफ़्रीका 1961 में। यह एक वैश्विक लहर थी, जिसे मशीनीकरण और अंतरराष्ट्रीय व्यापार दोनों धकेल रहे थे।',
          'भारत का संक्रमण इनमें से कई से पहले हुआ, और यह उल्लेखनीय है — एक ऐसे देश के लिए जहाँ साक्षरता दर तब बहुत कम थी, यह एक बड़ी प्रशासनिक उपलब्धि थी।',
        ],
        pEn: [
          'India was not alone. Several countries went through the same change in the middle of the twentieth century, and comparing their stories is interesting.',
          'Britain took the step in 1971 — fourteen years after India. It too had a three-tier system of pounds, shillings and pence, and there too explaining it to the public was the greatest challenge of the transition.',
          'Australia in 1966, New Zealand in 1967, South Africa in 1961. It was a global wave, pushed by mechanisation and international trade together.',
          'India’s transition came before many of these, which is notable — for a country where literacy was then very low, it was a considerable administrative achievement.',
        ],
      },
      {
        hHi: 'संग्राहक के लिए महत्व',
        hEn: 'Significance for the collector',
        pHi: [
          'संग्राहक के लिए 1957 एक साफ़ विभाजन-रेखा है, और यही उसे इतना उपयोगी बनाती है।',
          'उससे पहले की हर चीज़ आना-पाई व्यवस्था की है — क्वार्टर आना, आधा आना, दो आना, चौथाई रुपया। उसके बाद की हर चीज़ दशमलव की।',
          'इसीलिए “संक्रमण काल का संग्रह” एक बहुत अच्छा विषय है: 1950 से 1965 तक के सारे सिक्के, दोनों व्यवस्थाओं के, एक साथ। यह पंद्रह वर्षों में एक देश की मुद्रा को बदलते हुए दिखाता है।',
          'और यह लक्ष्य सस्ता है। इस दौर के अधिकांश सिक्के आम हैं और कुछ सौ रुपये में मिल जाते हैं, इसलिए एक पूरा संग्रह कुछ हज़ार में खड़ा हो सकता है।',
        ],
        pEn: [
          'For a collector 1957 is a clean dividing line, and that is what makes it so useful.',
          'Everything before it belongs to the anna-and-pie system — the quarter anna, half anna, two annas, quarter rupee. Everything after it is decimal.',
          'This makes “a collection of the transition” an excellent subject: every coin from 1950 to 1965, from both systems, together. It shows a country changing its currency across fifteen years.',
          'And the target is affordable. Most coins of this period are common and cost a few hundred rupees, so a complete holding can be built for a few thousand.',
        ],
      },
      {
        hHi: 'क्या रह गया, क्या चला गया',
        hEn: 'What stayed, and what went',
        pHi: [
          'दिलचस्प बात यह है कि परिवर्तन में सब कुछ नहीं बदला। रुपया बना रहा — नाम भी, और मूल्य भी।',
          'जो गया वह उसके नीचे की सीढ़ी थी: आना, पाई, पैसा अपने पुराने अर्थ में। और उनके साथ वह बाज़ार-गणित भी गया जो पीढ़ियों का कौशल था।',
          'पर भाषा में वे बचे रहे। “चवन्नी”, “अठन्नी”, “सोलह आने सच” — ये शब्द व्यवस्था के जाने के बाद भी दशकों तक बोले जाते रहे, और कुछ आज भी बोले जाते हैं।',
          'यही शायद इस पूरी कहानी की सबसे मानवीय बात है: सरकार सिक्के बदल सकती है, पर भाषा अपनी गति से बदलती है, और वह बहुत धीमी होती है।',
        ],
        pEn: [
          'What is interesting is that the change did not alter everything. The rupee stayed — both the name and the value.',
          'What went was the ladder beneath it: the anna, the pie, and the paisa in its old meaning. And with them went the marketplace arithmetic that had been a generational skill.',
          'But they survived in the language. Chavanni, athanni, “sixteen annas true” — these words went on being spoken for decades after the system left, and some are spoken still.',
          'That is perhaps the most human part of the whole story: a government can change the coins, but language changes at its own pace, and that pace is very slow.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          '1 अप्रैल 1957 को भारत दशमलव पर गया — वित्तीय वर्ष की शुरुआत पर, ताकि लेखांकन में गड़बड़ी कम हो। रुपया बचा रहा, उसके नीचे की पूरी सीढ़ी बदल गई।',
          '“नया पैसा” 1964 तक अंकित रहा, और दोनों व्यवस्थाएँ कुछ वर्षों तक साथ चलीं। संग्राहक के लिए 1957 एक साफ़ रेखा है, और उसके आसपास के पंद्रह वर्ष एक बेहतरीन संग्रह-विषय।',
        ],
        pEn: [
          'On 1 April 1957 India went decimal — at the start of the financial year, so that accounting would be disrupted as little as possible. The rupee survived; the whole ladder beneath it changed.',
          '“Naya paisa” was inscribed until 1964, and both systems ran together for some years. For a collector 1957 is a clean line, and the fifteen years around it make an excellent and inexpensive subject to collect.',
        ],
      },
    ],
  },
  {
    slug: 'anna-system-samjhe',
    sections: [
      {
        hHi: 'एक अभ्यास',
        hEn: 'An exercise',
        pHi: [
          'इसे पक्का करने का सबसे अच्छा तरीक़ा एक छोटा अभ्यास है। कल्पना कीजिए कि आपके पास तीन रुपये, नौ आने और सात पाई हैं।',
          'पाई को पैसों में बदलिए: सात पाई यानी दो पैसे और एक पाई बची। अब वे दो पैसे आने के आधे भी नहीं, इसलिए वे वहीं रहेंगे।',
          'यानी कुल रक़म तीन रुपये, नौ आने, दो पैसे और एक पाई। बहीखाते में यह “3-9-7” लिखी जाती, क्योंकि पाई का खाना कुल पाई गिनता था।',
          'दो-तीन बार यह अभ्यास करने पर व्यवस्था अपने आप बैठ जाती है, और उसके बाद कोई भी पुराना दस्तावेज़ पढ़ना कठिन नहीं रहता।',
        ],
        pEn: [
          'The best way to fix this in the mind is a small exercise. Imagine you hold three rupees, nine annas and seven pies.',
          'Convert the pies into pice: seven pies make two pice with one pie left over. Those two pice are less than half an anna, so they stay where they are.',
          'The total is therefore three rupees, nine annas, two pice and one pie. In a ledger this would be written “3-9-7”, because the third column counted total pies.',
          'Do this two or three times and the system settles into place on its own, and after that no old document is difficult to read.',
        ],
      },
    ],
  },
  {
    slug: 'naya-paisa-1957',
    sections: [
      {
        hHi: 'घर से शुरुआत',
        hEn: 'Starting from home',
        pHi: [
          'इस शृंखला की सबसे अच्छी बात यह है कि उसकी शुरुआत के लिए कुछ ख़रीदना नहीं पड़ता।',
          'पुराने गुल्लक, दराज़ों के कोने, और घर के बुज़ुर्गों के पास रखे डिब्बे — इन तीनों जगहों से अक्सर आधी शृंखला निकल आती है, और वह मुफ़्त में मिलती है।',
          'जो निकले उसे धोइए मत। उन्हें वर्ष के क्रम में लगाइए, मूल्यवर्ग के हिसाब से ढेरियाँ बनाइए, और देखिए कि क्या-क्या कमी है।',
          'बाक़ी सिक्के किसी प्रदर्शनी या डीलर से कुछ सौ रुपये में मिल जाएँगे। यह संभवतः सबसे सस्ता पूर्ण संग्रह है जो भारत में बनाया जा सकता है।',
        ],
        pEn: [
          'The best thing about this series is that beginning it requires buying nothing at all.',
          'Old piggy banks, the corners of drawers, and the tins kept by older relatives — those three places usually yield half the series, and yield it free.',
          'Whatever emerges, do not wash it. Arrange the coins by year, make piles by denomination, and see what is missing.',
          'The rest can be found at a fair or from a dealer for a few hundred rupees. This is possibly the cheapest complete collection that can be assembled anywhere in India.',
        ],
      },
    ],
  },
  {
    slug: 'mughal-coinage-basics',
    sections: [
      {
        hHi: 'पहचान का चार-चरणीय क्रम',
        hEn: 'The four-step order of identification',
        pHi: [
          'हर मुग़ल सिक्के पर यही क्रम काम करता है, और एक बार अभ्यास हो जाए तो पूरी प्रक्रिया एक मिनट से कम की रह जाती है।',
          'पहला — धातु और वज़न। सोना, चाँदी या ताँबा, और तराज़ू पर उसका वज़न। यह मूल्यवर्ग तुरंत तय कर देता है।',
          'दूसरा — शासक का नाम, जो एक तय शैली में लिखा जाता है। तीसरा — टकसाल का नाम, प्रायः अलग पंक्ति में या किनारे पर।',
          'चौथा — तारीख़ें, हिजरी और जुलूस दोनों। इन चार में से तीन भी मिल जाएँ तो सिक्का लगभग निश्चित रूप से पहचाना जा सकता है।',
        ],
        pEn: [
          'This order works on every Mughal coin, and once practised the whole process takes under a minute.',
          'First, metal and weight. Gold, silver or copper, and its weight on a scale. That settles the denomination immediately.',
          'Second, the ruler’s name, which is written in a settled style. Third, the mint name, usually on a separate line or along the margin.',
          'Fourth, the dates, both Hijri and julus. If even three of these four can be read, the coin can be identified with near certainty.',
        ],
      },
    ],
  },
  {
    slug: 'the-birth-of-decimal-coinage',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'इस परिवर्तन की सबसे बड़ी उपलब्धि यह थी कि वह लगभग बिना अव्यवस्था के हुआ।',
          'करोड़ों लोग, जिनमें से बहुतों ने कभी स्कूल नहीं देखा था, कुछ ही वर्षों में एक नई गणना-व्यवस्था में चले गए। यह क़ानून की नहीं, धैर्य और स्पष्ट संचार की उपलब्धि थी।',
        ],
        pEn: [
          'The greatest achievement of this change was that it happened with almost no disorder.',
          'Crores of people, many of whom had never seen a schoolroom, moved into a new system of reckoning within a few years. That was an achievement of patience and clear communication rather than of law, and it is worth remembering whenever a transition of this kind is described as impossible.',
        ],
      },
    ],
  },
  {
    slug: 'naya-paisa-1957',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'यह शृंखला उन कम अवसरों में से है जहाँ एक पूरा संग्रह सचमुच संभव है, और वही उसका सबसे बड़ा आकर्षण है।',
        ],
        pEn: [
          'This series is one of the few opportunities where a genuinely complete collection is possible, and that is its greatest attraction — most fields in this hobby never allow you the satisfaction of finishing anything at all.',
        ],
      },
    ],
  },
  {
    slug: 'east-india-company-coins',
    sections: [
      {
        hHi: 'एक कंपनी को सिक्का ढालने का अधिकार कैसे मिला',
        hEn: 'How a trading company came to mint money',
        pHi: [
          'ईस्ट इंडिया कंपनी 1600 में एक व्यापारिक संस्था के रूप में बनी, और उसका मूल उद्देश्य मसाले और कपड़े का व्यापार था — मुद्रा जारी करना नहीं।',
          'पर व्यापार के लिए मुद्रा चाहिए थी, और स्थानीय सिक्कों पर निर्भर रहना असुविधाजनक था। कंपनी ने धीरे-धीरे स्थानीय शासकों से सिक्का ढालने की अनुमति ली।',
          'सूरत में मुग़ल अनुमति से, मद्रास में स्थानीय शासकों की सहमति से, और बंबई में पुर्तगालियों से मिले क्षेत्र पर अपने अधिकार से — हर जगह आधार अलग था।',
          'यह क्रमिक विस्तार ही इस पूरे विषय की कुंजी है। कंपनी ने एक दिन में मुद्रा-अधिकार नहीं पाया; उसने डेढ़ सौ वर्षों में टुकड़े-टुकड़े जोड़े।',
        ],
        pEn: [
          'The East India Company was formed in 1600 as a trading body, and its original purpose was commerce in spices and cloth — not the issuing of currency.',
          'But trade required money, and depending on local coinage was inconvenient. The Company gradually obtained permission to strike coins from local rulers.',
          'At Surat by Mughal permission, at Madras with the consent of local rulers, and at Bombay by its own authority over territory received from the Portuguese — the basis was different in each place.',
          'That gradual accumulation is the key to the whole subject. The Company did not acquire minting rights in a single step; it assembled them piece by piece over a century and a half.',
        ],
      },
      {
        hHi: 'तीन प्रेसीडेंसी, तीन व्यवस्थाएँ',
        hEn: 'Three presidencies, three systems',
        pHi: [
          'कंपनी की तीन प्रेसीडेंसियाँ थीं — बंगाल, मद्रास और बंबई — और उन्नीसवीं सदी के आरंभ तक तीनों की अपनी अलग मुद्रा-व्यवस्था चलती रही।',
          'बंगाल में रुपया चलता था, मुग़ल परंपरा के अनुसार। मद्रास में पगोडा, फ़नम और कैश की दक्षिणी व्यवस्था। बंबई में रुपया और साथ में स्थानीय इकाइयाँ।',
          'इसका अर्थ यह था कि एक ही कंपनी के तीन क्षेत्रों के बीच व्यापार करने पर रूपांतरण करना पड़ता था — अपनी ही मुद्राओं के बीच।',
          'यह असुविधा अंततः 1835 के एकसमान सिक्का अधिनियम तक ले गई, जिसने पूरे कंपनी-शासित भारत के लिए एक ही रुपया तय किया।',
        ],
        pEn: [
          'The Company had three presidencies — Bengal, Madras and Bombay — and until the early nineteenth century each ran its own separate monetary system.',
          'Bengal used the rupee, following Mughal practice. Madras used the southern system of pagodas, fanams and cash. Bombay used the rupee alongside local units.',
          'This meant that trading between three territories of the same company required conversion — between its own currencies.',
          'That inconvenience eventually led to the Uniform Coinage Act of 1835, which established a single rupee for all Company-ruled India.',
        ],
      },
      {
        hHi: 'मुग़ल बादशाह का नाम क्यों',
        hEn: 'Why the Mughal emperor’s name',
        pHi: [
          'अठारहवीं सदी के कई कंपनी सिक्कों पर दिल्ली के मुग़ल बादशाह का नाम फ़ारसी में दर्ज है, कंपनी का नहीं। यह पहली नज़र में उलटा लगता है।',
          'कारण व्यावहारिक था। बाज़ार जिस नाम को पहचानता था, उसी नाम वाला सिक्का बिना सवाल स्वीकार होता था। कंपनी को अपनी पहचान से ज़्यादा अपने सिक्के के चलने की चिंता थी।',
          'एक क़ानूनी पक्ष भी था: कंपनी औपचारिक रूप से मुग़ल संप्रभुता के अधीन एक इकाई थी, और उसे सिक्का ढालने का अधिकार उसी संप्रभुता से मिला था।',
          'दिलचस्प बात यह है कि कई सिक्कों पर शाह आलम द्वितीय का नाम उनकी मृत्यु के दशकों बाद तक चलता रहा — जब वह नाम एक व्यक्ति नहीं, एक मानक बन चुका था।',
        ],
        pEn: [
          'Many eighteenth-century Company coins carry the name of the Mughal emperor at Delhi in Persian, not the Company’s. At first sight that seems inverted.',
          'The reason was practical. A coin bearing the name the market recognised was accepted without question. The Company cared more that its coin should circulate than that it should carry its own identity.',
          'There was a legal dimension too: the Company was formally a body under Mughal sovereignty, and its right to mint derived from that sovereignty.',
          'What is interesting is that the name of Shah Alam II continued on coins for decades after his death — by which point the name had become a standard rather than a person.',
        ],
      },
      {
        hHi: 'कंपनी के सिक्के कैसे दिखते हैं',
        hEn: 'What Company coins look like',
        pHi: [
          'असली कंपनी सिक्कों की पहचान सीधी है, और यह जानना बाज़ार में घूमने वाले नक़ली टोकनों से बचाता है।',
          'शुरुआती सिक्कों पर कंपनी का द्विशीर्ष चिह्न या उसका बेल-मार्क मिलता है, और फ़ारसी में लिखावट। कोई देवी-देवता नहीं, कोई अलंकरण नहीं।',
          'उन्नीसवीं सदी के सिक्कों पर अंग्रेज़ी में “EAST INDIA COMPANY”, मूल्यवर्ग, और वर्ष स्पष्ट रूप से अंकित है। कुछ पर शेर और ताड़ का पेड़ का प्रतीक भी।',
          'चरित्र में ये सिक्के प्रशासनिक हैं — सूखे, व्यावहारिक, और सजावट से रहित। यही उन्हें बाज़ार में बिकने वाले “1616 वाले” पीतल के टोकनों से तुरंत अलग कर देता है।',
        ],
        pEn: [
          'Identifying genuine Company coins is straightforward, and knowing this protects you from the fake tokens circulating in bazaars.',
          'Early issues carry the Company’s bale mark and an inscription in Persian. No deities, no ornament.',
          'Nineteenth-century coins carry “EAST INDIA COMPANY” in English, with the denomination and year clearly marked. Some also bear the lion and palm tree device.',
          'In character these coins are administrative — dry, practical, and free of decoration. That alone separates them immediately from the brass “1616” tokens sold in the markets.',
        ],
      },
      {
        hHi: '1835 का एकसमान सिक्का',
        hEn: 'The uniform coinage of 1835',
        pHi: [
          '1835 का अधिनियम इस पूरी कहानी का मोड़ है। उसने तीनों प्रेसीडेंसियों की अलग व्यवस्थाएँ समाप्त कीं और एक ही रुपया तय किया — 180 ग्रेन वज़न, 11/12 शुद्धता।',
          'इन सिक्कों पर पहली बार विलियम IV का चित्र आया, और उसके बाद विक्टोरिया का — यानी सिक्के पर अब एक ब्रिटिश शासक का चेहरा था, मुग़ल बादशाह का नाम नहीं।',
          'यह परिवर्तन प्रतीकात्मक रूप से बड़ा है। मुग़ल नाम हटाना यह घोषित करना था कि अब संप्रभुता का स्रोत दिल्ली नहीं रहा।',
          'संग्राहक के लिए यह एक साफ़ विभाजन-रेखा बनाती है: 1835 से पहले के सिक्के एक दुनिया के हैं, उसके बाद के दूसरी के।',
        ],
        pEn: [
          'The Act of 1835 is the turning point of this whole story. It ended the separate systems of the three presidencies and fixed a single rupee — 180 grains in weight, eleven-twelfths fine.',
          'These coins carried a portrait of William IV for the first time, and then of Victoria — meaning the coin now bore the face of a British monarch rather than the name of a Mughal emperor.',
          'That change is symbolically large. Removing the Mughal name was a declaration that the source of sovereignty was no longer Delhi.',
          'For a collector it makes a clean dividing line: coins before 1835 belong to one world, those after it to another.',
        ],
      },
      {
        hHi: 'ताज को हस्तांतरण',
        hEn: 'The transition to the Crown',
        pHi: [
          '1857 के विद्रोह के बाद ब्रिटिश संसद ने कंपनी का शासन समाप्त कर दिया, और 1858 में भारत सीधे ब्रिटिश ताज के अधीन आया।',
          'सिक्कों पर यह परिवर्तन तुरंत नहीं दिखा। कंपनी के नाम वाले सिक्के कुछ वर्षों तक ढलते रहे, और 1862 से “VICTORIA QUEEN” वाली नई शृंखला शुरू हुई।',
          'यही कारण है कि 1858 और 1862 के बीच का दौर संग्राहकों के लिए दिलचस्प है — वह एक संक्रमण-काल है जिसमें दोनों तरह के सिक्के मिलते हैं।',
          'और 1877 में एक और शब्द बदला: “QUEEN” की जगह “EMPRESS” आया, जब विक्टोरिया को भारत की सम्राज्ञी घोषित किया गया।',
        ],
        pEn: [
          'After the revolt of 1857 the British Parliament ended Company rule, and in 1858 India came directly under the British Crown.',
          'The change did not appear on the coinage immediately. Coins bearing the Company’s name continued to be struck for some years, and the new “VICTORIA QUEEN” series began in 1862.',
          'This is why the period between 1858 and 1862 is interesting to collectors — it is a transition in which both kinds of coin are found.',
          'And in 1877 one more word changed: “QUEEN” became “EMPRESS”, when Victoria was proclaimed Empress of India.',
        ],
      },
      {
        hHi: 'ख़रीदते समय सावधानी',
        hEn: 'Caution when buying',
        pHi: [
          'इस क्षेत्र की सबसे बड़ी समस्या असली सिक्कों की नक़ल नहीं, बल्कि आधुनिक टोकनों को असली बताकर बेचना है।',
          'बाज़ार में और ऑनलाइन “ONE ANNA EAST INDIA COMPANY 1616” जैसे पीतल के टोकन भारी संख्या में मिलते हैं। वे पूजा-सामग्री और स्मृति-चिह्न के रूप में बने, और उनका ऐतिहासिक मूल्य शून्य है।',
          'पहचान सरल है: तारीख़ की असंगति, पीतल की आधुनिक चमक, देवी-देवताओं की आकृतियाँ, और चिकना-गोल किनारा जो ढलाई का प्रमाण है।',
          'अच्छी ख़बर यह है कि असली कंपनी सिक्के सस्ते और सुलभ हैं। ताँबे के क्वार्टर आना और आधा पाइस कुछ सौ रुपये में मिल जाते हैं — यानी उतने ही पैसे में असली इतिहास।',
        ],
        pEn: [
          'The largest problem in this field is not forgery of genuine coins but the sale of modern tokens as authentic ones.',
          'Brass tokens reading “ONE ANNA EAST INDIA COMPANY 1616” are found in quantity in markets and online. They were made as devotional and souvenir objects, and their historical value is nil.',
          'Identification is simple: the inconsistent date, the modern brightness of the brass, the figures of deities, and the smooth rounded edge that betrays casting.',
          'The good news is that genuine Company coins are cheap and available. Copper quarter annas and half pice cost a few hundred rupees — real history for the same money.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'एक व्यापारिक कंपनी ने डेढ़ सौ वर्षों में टुकड़े-टुकड़े मुद्रा-अधिकार जोड़े, तीन अलग व्यवस्थाएँ चलाईं, और 1835 में उन्हें एक किया।',
          'अठारहवीं सदी के सिक्कों पर मुग़ल बादशाह का नाम है, उन्नीसवीं सदी के सिक्कों पर ब्रिटिश शासक का चेहरा — और वह परिवर्तन ही पूरी राजनीतिक कहानी बता देता है।',
        ],
        pEn: [
          'A trading company assembled minting rights piece by piece across a century and a half, ran three separate systems, and unified them in 1835.',
          'Eighteenth-century coins carry the Mughal emperor’s name; nineteenth-century coins carry a British monarch’s face — and that single change tells the entire political story of the period.',
        ],
      },
    ],
  },
  {
    slug: 'victoria-portrait-coins',
    sections: [
      {
        hHi: 'चित्र किसने बनाया',
        hEn: 'Who made the portrait',
        pHi: [
          'सिक्के का चित्र एक मूर्तिकार का काम होता है, और विक्टोरिया के भारतीय सिक्कों के पीछे वायन परिवार का नाम है — रॉयल मिंट के प्रमुख उत्कीर्णक।',
          'विलियम वायन ने विक्टोरिया के आरंभिक ब्रिटिश सिक्कों का चित्र बनाया, और उनके पुत्र लियोनार्ड वायन ने बाद के दौर का काम सँभाला, जिसमें भारतीय शृंखला भी आती है।',
          'चित्र बनाना केवल कला नहीं थी। सिक्के पर उभार सीमित होता है, और चेहरे को इतना सपाट रखना पड़ता है कि वह चलन में जल्दी न घिसे, फिर भी पहचाना जा सके।',
          'यही तकनीकी बाध्यता वह कारण है कि सिक्कों के चित्र चित्रकला से अलग दिखते हैं — वे एक ऐसी सतह के लिए बने हैं जो हज़ारों हाथों से गुज़रेगी।',
        ],
        pEn: [
          'A coin portrait is the work of a sculptor, and behind Victoria’s Indian coinage stands the Wyon family — chief engravers at the Royal Mint.',
          'William Wyon made the portrait for Victoria’s early British coinage, and his son Leonard Wyon handled the later period, which includes the Indian series.',
          'Making the portrait was not only an artistic task. Relief on a coin is limited, and the face has to be kept flat enough not to wear away quickly in circulation while remaining recognisable.',
          'That technical constraint is why coin portraits look different from painting — they are made for a surface that will pass through thousands of hands.',
        ],
      },
      {
        hHi: '“क्वीन” और “एम्प्रेस” का अंतर',
        hEn: 'The difference between “Queen” and “Empress”',
        pHi: [
          '1862 से 1876 तक के सिक्कों पर “VICTORIA QUEEN” लिखा है; 1877 से 1901 तक “VICTORIA EMPRESS”। एक शब्द का यह अंतर एक बड़ी ऐतिहासिक घटना बताता है।',
          '1876 के रॉयल टाइटल्स एक्ट के बाद विक्टोरिया को भारत की सम्राज्ञी घोषित किया गया, और 1877 की दिल्ली दरबार में यह औपचारिक रूप से घोषित हुआ।',
          'सिक्का इस राजनीतिक निर्णय का सबसे सीधा भौतिक प्रमाण है। किसी दस्तावेज़ को खोजने की ज़रूरत नहीं — शब्द वहीं धातु पर लिखा है।',
          'संग्राहक के लिए यह सबसे तेज़ पहचान-सूत्र भी है। एक नज़र में सिक्का दो युगों में से किसी एक में चला जाता है।',
        ],
        pEn: [
          'Coins from 1862 to 1876 read “VICTORIA QUEEN”; those from 1877 to 1901 read “VICTORIA EMPRESS”. That one word tells of a large historical event.',
          'After the Royal Titles Act of 1876 Victoria was proclaimed Empress of India, formally announced at the Delhi Durbar of 1877.',
          'The coin is the most direct physical evidence of that political decision. No document needs to be found — the word is written on the metal.',
          'For a collector it is also the fastest identification clue. A single glance places the coin in one of two eras.',
        ],
      },
      {
        hHi: 'चित्र का विकास',
        hEn: 'How the portrait evolved',
        pHi: [
          'क्वीन दौर का चित्र युवा है — बाल पीछे बँधे, सिर पर कोई मुकुट नहीं, और अभिव्यक्ति सरल। यह उस समय की विक्टोरिया है जो चालीस के आसपास थीं।',
          'एम्प्रेस दौर में चित्र बदला। अब मुकुट है, आवरण है, और समग्र प्रभाव औपचारिक तथा साम्राज्यिक। यह एक शासक का चित्र है, न कि केवल एक व्यक्ति का।',
          'यह परिवर्तन जानबूझकर था। जब उपाधि बदली, तो चित्र भी उसी संदेश को दोहराने के लिए बदला गया।',
          'दोनों चित्रों को एक बार साथ देख लेने पर अंतर स्थायी रूप से याद रह जाता है, और उसके बाद किसी कैटलॉग की ज़रूरत नहीं पड़ती।',
        ],
        pEn: [
          'The Queen-period portrait is young — hair drawn back, no crown, and a plain expression. This is Victoria in her forties.',
          'In the Empress period the portrait changed. Now there is a crown, a veil, and an overall effect that is formal and imperial. This is the portrait of a sovereign rather than simply of a person.',
          'The change was deliberate. When the title changed, the portrait was altered to repeat the same message.',
          'Once you have seen the two side by side the difference stays in the memory permanently, and no catalogue is needed afterwards.',
        ],
      },
      {
        hHi: 'पिछली तरफ़ का डिज़ाइन',
        hEn: 'The design on the reverse',
        pHi: [
          'पिछली तरफ़ का डिज़ाइन कम चर्चित है और उतना ही सोचा-समझा। बीच में मूल्यवर्ग, चारों ओर पुष्प-अलंकरण, और किनारे पर वर्ष।',
          'मूल्यवर्ग अंग्रेज़ी के साथ नागरी और फ़ारसी में भी अंकित होता था। यह चयन व्यावहारिक था — सिक्के को उन सब भाषाओं में बोलना पड़ता था जिनमें बाज़ार चलता था।',
          'पुष्प-अलंकरण में कमल और अन्य भारतीय रूपांकन शामिल किए गए, जो एक सचेत निर्णय था: सिक्का ब्रिटिश शासक का था, पर उसे भारतीय दिखना भी था।',
          'यही द्वैत इन सिक्कों को दिलचस्प बनाता है। एक ओर ब्रिटिश चेहरा, दूसरी ओर भारतीय लिपियाँ और रूपांकन — एक ही धातु के टुकड़े पर दो दुनियाएँ।',
        ],
        pEn: [
          'The reverse design is less discussed and just as considered. The denomination at the centre, floral ornament around it, and the year along the edge.',
          'The denomination appeared in Nagari and Persian alongside the English. That choice was practical — the coin had to speak in every language the market used.',
          'Lotus and other Indian motifs were worked into the ornament, which was a conscious decision: the coin belonged to a British sovereign but had to look Indian as well.',
          'That duality is what makes these coins interesting. A British face on one side, Indian scripts and motifs on the other — two worlds on one piece of metal.',
        ],
      },
      {
        hHi: 'आम और दुर्लभ',
        hEn: 'Common versus rare',
        pHi: [
          'अधिकांश विक्टोरिया सिक्के आम हैं, और यह कहना ईमानदारी है। साठ वर्षों में करोड़ों ढले, और बड़ी संख्या में बचे।',
          'क़ीमत तीन जगह छिपी है। पहली — बहुत ऊँची दशा, ख़ासकर मूल लस्टर वाले नमूने। दूसरी — कम ढलाई वाले वर्ष-टकसाल संयोजन। तीसरी — असली ढलाई-दोष।',
          'क्वीन दौर आम तौर पर कम मिलता है क्योंकि वह केवल पंद्रह वर्ष चला, जबकि एम्प्रेस दौर पच्चीस वर्ष का है। यह अंतर दाम में दिखता है।',
          'नए संग्राहक के लिए सलाह वही है: पहले आम तारीख़ें जुटाइए, आँख बनाइए, और दुर्लभ किस्म तब ख़रीदिए जब आप ख़ुद दशा परख सकें।',
        ],
        pEn: [
          'Most Victoria coins are common, and saying so is honest. Crores were struck across sixty years, and large numbers survive.',
          'The value hides in three places. First, very high grade, particularly examples retaining original lustre. Second, low-mintage year and mint combinations. Third, genuine striking errors.',
          'The Queen period is generally scarcer because it ran only fifteen years, against twenty-five for the Empress period. That difference shows in the price.',
          'The advice for a new collector is the same: gather common dates first, build the eye, and buy a scarce variety only once you can judge condition yourself.',
        ],
      },
      {
        hHi: 'साम्राज्य भर का चेहरा',
        hEn: 'A face across an empire',
        pHi: [
          'एक बात जो कम कही जाती है: यही चित्र उस दौर में दुनिया के कई हिस्सों में एक साथ चल रहा था।',
          'कनाडा, ऑस्ट्रेलिया, न्यूज़ीलैंड, दक्षिण अफ़्रीका, हांगकांग, सीलोन, ईस्ट अफ़्रीका — सब जगह विक्टोरिया का चेहरा सिक्कों पर था, हालाँकि शैली और विवरण अलग थे।',
          'यही एक साम्राज्य की सबसे मूर्त अभिव्यक्ति है। एक ही चेहरा, दर्जनों भाषाओं में, दर्जनों बाज़ारों में, एक साथ चलता हुआ।',
          'संग्राहकों में इसका एक अलग शौक़ है — विभिन्न उपनिवेशों के विक्टोरिया सिक्के एक साथ जुटाना, ताकि वही चेहरा अलग-अलग रूपों में दिखे।',
        ],
        pEn: [
          'One thing said less often: this same portrait was circulating simultaneously across much of the world.',
          'Canada, Australia, New Zealand, South Africa, Hong Kong, Ceylon, East Africa — Victoria’s face appeared on coins everywhere, though the style and details differed.',
          'That is the most tangible expression of an empire. One face, in dozens of languages, in dozens of markets, circulating at once.',
          'There is a hobby within the hobby here — gathering Victoria coins from different colonies so that the same face appears in its many forms.',
        ],
      },
      {
        hHi: 'क्या देखें, क्या न करें',
        hEn: 'What to look at, and what not to do',
        pHi: [
          'घिसाव सबसे पहले तीन जगह दिखता है: गाल की हड्डी, बालों की ऊपरी लट, और मुकुट या आवरण का सबसे ऊँचा भाग। पिछली तरफ़ अक्षरों के ऊपरी किनारे।',
          'तारीख़ के नीचे टकसाल-चिह्न देखिए — बंबई का हीरा या बिंदु, और कलकत्ता का कोई चिह्न नहीं। इसके लिए दस गुना आवर्धन का लूप चाहिए।',
          'और वही नियम जो सबसे ज़्यादा तोड़ा जाता है: साफ़ मत कीजिए। चाँदी चमकाने की इच्छा प्रबल होती है, और साफ़ किया हुआ सिक्का आधे से ज़्यादा क़ीमत खो देता है।',
          'भंडारण में माइलर या पॉलीप्रोपिलीन के फ़्लिप का उपयोग कीजिए, पीवीसी वाली पुरानी थैलियों का नहीं — वे वर्षों में हरी चिपचिपी परत छोड़ती हैं।',
        ],
        pEn: [
          'Wear shows first in three places: the cheekbone, the uppermost lock of hair, and the highest point of the crown or veil. On the reverse, the upper edges of the lettering.',
          'Look below the date for the mint mark — the Bombay diamond or dot, and Calcutta’s absence of one. A ten-times loupe is needed for this.',
          'And the rule most often broken: do not clean them. The urge to brighten silver is strong, and a cleaned coin loses more than half its value.',
          'For storage use Mylar or polypropylene flips rather than old PVC sleeves, which leave a green sticky film over the years.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'एक शब्द — क्वीन या एम्प्रेस — सिक्के को दो युगों में से एक में रख देता है, और वह शब्द 1876 के एक क़ानून का सीधा परिणाम है।',
          'चित्र भी उसी के साथ बदला: युवा और सादा से मुकुटधारी और औपचारिक। दोनों को एक बार साथ देख लीजिए, और उसके बाद पहचान के लिए कैटलॉग की ज़रूरत नहीं रहेगी।',
        ],
        pEn: [
          'One word — Queen or Empress — places the coin in one of two eras, and that word is the direct result of an Act passed in 1876.',
          'The portrait changed with it: from young and plain to crowned and formal. Look at the two side by side once, and after that you will never need a catalogue to tell them apart.',
        ],
      },
    ],
  },
  {
    slug: 'republic-india-first-coins',
    sections: [
      {
        hHi: '1950: एक चेहरा हटा, एक प्रतीक आया',
        hEn: '1950: a face left, a symbol arrived',
        pHi: [
          'भारत 15 अगस्त 1947 को स्वतंत्र हुआ, पर सिक्के तुरंत नहीं बदले। जॉर्ज VI के चित्र वाले सिक्के 1950 तक ढलते रहे।',
          'कारण व्यावहारिक था। नए सिक्कों का डिज़ाइन तय करना, डाई बनाना और उत्पादन शुरू करना समय माँगता है, और संविधान लागू होने तक गणराज्य औपचारिक रूप से अस्तित्व में नहीं आया था।',
          '26 जनवरी 1950 को भारत गणराज्य बना, और उसी वर्ष नए सिक्के जारी हुए। ब्रिटिश शासक का चेहरा हटा, और उसकी जगह अशोक स्तंभ का सिंह-शीर्ष आया।',
          'यह प्रतिस्थापन सोचा-समझा था। किसी व्यक्ति की जगह एक प्रतीक — और वह प्रतीक भी किसी आधुनिक व्यक्ति का नहीं, बल्कि ढाई हज़ार साल पुराना।',
        ],
        pEn: [
          'India became independent on 15 August 1947, but the coinage did not change immediately. Coins bearing the portrait of George VI continued to be struck until 1950.',
          'The reason was practical. Settling a new design, cutting dies and beginning production takes time, and until the Constitution came into force the Republic did not formally exist.',
          'On 26 January 1950 India became a Republic, and new coins were issued that same year. The face of a British monarch left, and the lion capital of Ashoka took its place.',
          'That substitution was considered. A symbol in place of a person — and a symbol not of any modern figure but one two and a half thousand years old.',
        ],
      },
      {
        hHi: 'अशोक स्तंभ के सिंह',
        hEn: 'The lions of the Ashoka capital',
        pHi: [
          'यह प्रतीक सारनाथ के अशोक स्तंभ के शीर्ष से लिया गया है, जो तीसरी शताब्दी ईसा पूर्व का है और आज सारनाथ संग्रहालय में रखा है।',
          'मूल शीर्ष में चार सिंह हैं, पीठ से पीठ जोड़े हुए, चारों दिशाओं में देखते। सिक्के पर तीन दिखते हैं और चौथा पीछे छिपा रहता है — यह द्वि-आयामी सतह की बाध्यता है।',
          'नीचे देवनागरी में “सत्यमेव जयते” अंकित है, जो मुंडक उपनिषद से लिया गया वाक्य है — सत्य की ही जीत होती है।',
          'चयन का अर्थ स्पष्ट था। एक ऐसा प्रतीक जो किसी एक धर्म, क्षेत्र या भाषा का नहीं, और जो भारत के अपने इतिहास से आता है, न कि किसी बाहरी सत्ता से।',
        ],
        pEn: [
          'The emblem is taken from the top of the Ashoka pillar at Sarnath, dating from the third century before the common era and now kept in the Sarnath museum.',
          'The original capital has four lions set back to back, facing the four directions. Three are visible on a coin and the fourth stays hidden behind — a constraint of a two-dimensional surface.',
          'Beneath it is inscribed “Satyameva Jayate” in Devanagari, a phrase from the Mundaka Upanishad — truth alone triumphs.',
          'The meaning of the choice was clear. An emblem belonging to no single religion, region or language, and one that comes from India’s own history rather than from any external authority.',
        ],
      },
      {
        hHi: 'शुरुआती मूल्यवर्ग',
        hEn: 'The early denominations',
        pHi: [
          '1950 की शृंखला अभी भी आना-पाई व्यवस्था पर चली, क्योंकि दशमलव व्यवस्था सात साल बाद आनी थी।',
          'मूल्यवर्ग थे: एक पाई, आधा पैसा, एक पैसा, आधा आना, एक आना, दो आना, चौथाई रुपया, आधा रुपया और रुपया।',
          'चाँदी अब नहीं थी। स्वतंत्र भारत के सिक्के निकल और काँसे के थे — यह युद्ध के बाद की धातु-अर्थव्यवस्था का सीधा परिणाम था, न कि कोई प्रतीकात्मक चयन।',
          'पिछली तरफ़ के डिज़ाइन में भारतीय विषय आए — गेहूँ की बालियाँ, बैल, और घोड़ा। ये सब कृषि और श्रम के प्रतीक थे, जो उस दौर की राष्ट्रीय प्राथमिकता को दर्शाते हैं।',
        ],
        pEn: [
          'The 1950 series still ran on the anna-and-pie system, because decimalisation was seven years away.',
          'The denominations were: one pie, half pice, one pice, half anna, one anna, two annas, quarter rupee, half rupee and rupee.',
          'Silver was gone. The coins of independent India were nickel and bronze — a direct consequence of the post-war metal economy rather than any symbolic choice.',
          'Indian subjects appeared on the reverse — ears of wheat, a bull, a horse. All were emblems of agriculture and labour, reflecting the national priorities of the period.',
        ],
      },
      {
        hHi: 'व्यक्ति-चित्र न रखने का निर्णय',
        hEn: 'The decision to carry no portrait',
        pHi: [
          'एक निर्णय जो तब लिया गया और आज तक क़ायम है: भारतीय चलन-सिक्कों पर किसी जीवित या मृत व्यक्ति का चित्र नहीं होता।',
          'यह दुनिया में सार्वभौमिक नहीं है। कई गणराज्य अपने संस्थापकों या राष्ट्रपतियों के चित्र सिक्कों पर रखते हैं।',
          'भारत ने प्रतीक चुना, और उसका निहितार्थ यह था कि गणराज्य किसी व्यक्ति पर नहीं, एक विचार पर खड़ा है।',
          'अपवाद केवल स्मारक सिक्कों में हैं — नेहरू, गांधी, आंबेडकर और अन्य के चित्र वहाँ मिलते हैं। पर वे विशेष जारी हैं, रोज़मर्रा की मुद्रा नहीं।',
        ],
        pEn: [
          'One decision taken then still holds: Indian circulating coins carry no portrait of any person, living or dead.',
          'This is not universal. Many republics place their founders or presidents on their coinage.',
          'India chose an emblem, and the implication was that the Republic rests on an idea rather than on any individual.',
          'The exceptions are commemoratives — Nehru, Gandhi, Ambedkar and others do appear there. But those are special issues, not everyday currency.',
        ],
      },
      {
        hHi: 'संक्रमण के सिक्के',
        hEn: 'The coins of the transition',
        pHi: [
          'संग्राहक के लिए सबसे दिलचस्प वे सिक्के हैं जो 1947 और 1950 के बीच के हैं — जब देश स्वतंत्र था पर सिक्कों पर अभी भी जॉर्ज VI थे।',
          'ये सिक्के एक विचित्र स्थिति का दस्तावेज़ हैं: एक स्वतंत्र देश, जिसकी मुद्रा पर अभी भी विदेशी शासक का चेहरा है, केवल इसलिए कि नई डाई तैयार नहीं थी।',
          'इसी दौर में पाकिस्तान के लिए भी सिक्के ढले, और कुछ पर “PAKISTAN” अंकित किया गया — विभाजन का एक और भौतिक निशान।',
          'यह तीन साल का दौर एक बहुत अच्छा संग्रह-विषय है। सीमित, स्पष्ट, और वह एक ऐसे क्षण को पकड़ता है जो दोबारा नहीं आएगा।',
        ],
        pEn: [
          'The most interesting coins for a collector are those between 1947 and 1950 — when the country was independent but the coinage still carried George VI.',
          'These document a peculiar situation: an independent country whose currency still bore a foreign monarch’s face, simply because new dies were not ready.',
          'Coins for Pakistan were struck in the same period, some inscribed “PAKISTAN” — another physical mark of Partition.',
          'That three-year window makes an excellent collecting subject. Bounded, clear, and it captures a moment that will not come again.',
        ],
      },
      {
        hHi: '1957 का दूसरा परिवर्तन',
        hEn: 'The second change, in 1957',
        pHi: [
          '1950 की शृंखला केवल सात वर्ष चली, क्योंकि 1957 में भारत दशमलव व्यवस्था पर चला गया।',
          'इसका अर्थ यह है कि गणराज्य के शुरुआती सिक्के अपेक्षाकृत कम समय तक ढले, और यही उन्हें संग्राहकों के लिए दिलचस्प बनाता है।',
          'अशोक स्तंभ का प्रतीक दोनों शृंखलाओं में बना रहा — यही निरंतरता है जो 1950 से आज तक चली आ रही है।',
          'बदला केवल उसके नीचे का हिसाब: आना-पाई से नया पैसा। प्रतीक वही रहा, गणित बदल गया।',
        ],
        pEn: [
          'The 1950 series ran only seven years, because India went decimal in 1957.',
          'This means the earliest Republic coins were struck for a comparatively short period, which is what makes them interesting to collectors.',
          'The Ashoka capital carried across both series — that is the continuity running from 1950 to today.',
          'What changed was only the reckoning beneath it: from annas and pies to the naya paisa. The emblem stayed; the arithmetic changed.',
        ],
      },
      {
        hHi: 'संग्राहक के लिए',
        hEn: 'For the collector',
        pHi: [
          '1950 की पूरी शृंखला एक बहुत अच्छा शुरुआती लक्ष्य है। नौ मूल्यवर्ग, सब सस्ते, और पूरा होने पर एक स्पष्ट कहानी — गणराज्य का पहला रूप।',
          'इनमें से अधिकांश आज भी कुछ सौ रुपये में मिल जाते हैं, क्योंकि वे भारी संख्या में ढले। ऊँची दशा के नमूने अपेक्षाकृत कम मिलते हैं।',
          'एक और अच्छा विषय: “तीन युग एक साथ” — जॉर्ज VI का एक सिक्का, 1950 शृंखला का एक, और 1957 दशमलव का एक। तीन सिक्के, और उनमें तीन अलग भारत।',
          'रख-रखाव में वही नियम: निकल और काँसे के सिक्के अपेक्षाकृत मज़बूत हैं, पर नमी से बचाइए और साफ़ मत कीजिए।',
        ],
        pEn: [
          'The complete 1950 series is an excellent opening target. Nine denominations, all inexpensive, and once assembled it tells a clear story — the first form of the Republic.',
          'Most can still be had for a few hundred rupees, because they were struck in quantity. Examples in high grade are comparatively scarce.',
          'Another good subject: “three eras together” — one George VI coin, one from the 1950 series, and one decimal coin from 1957. Three coins, and three different Indias inside them.',
          'For care the same rules apply: nickel and bronze are comparatively tough, but keep them from damp and do not clean them.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          '1950 में ब्रिटिश शासक का चेहरा हटा और अशोक स्तंभ का सिंह-शीर्ष आया — एक व्यक्ति की जगह एक प्रतीक, और वह प्रतीक भारत के अपने इतिहास से।',
          'शृंखला अभी भी आना-पाई पर चली और केवल सात वर्ष तक। 1947–1950 के संक्रमण-सिक्के, जिन पर स्वतंत्र भारत में भी जॉर्ज VI हैं, इस पूरे विषय के सबसे दिलचस्प दस्तावेज़ हैं।',
        ],
        pEn: [
          'In 1950 the face of a British monarch left and the lion capital of Ashoka arrived — a symbol in place of a person, and a symbol drawn from India’s own history.',
          'The series still ran on annas and pies and lasted only seven years. The transition coins of 1947–1950, carrying George VI in an independent India, are the most interesting documents in this whole subject.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-start-collecting-coins',
    sections: [
      {
        hHi: 'सबसे महँगी शुरुआती ग़लतियाँ',
        hEn: 'The most expensive beginner mistakes',
        pHi: [
          'पहली और सबसे महँगी: पहले महीने में कोई महँगा सिक्का ख़रीदना। अप्रशिक्षित आँख से की गई महँगी ख़रीद लगभग हमेशा ग़लत निकलती है, और वह ग़लती वर्षों याद रहती है।',
          'दूसरी: सफ़ाई। नए संग्राहक की सबसे स्वाभाविक इच्छा सिक्के को चमकाने की होती है, और यही सबसे ज़्यादा क़ीमत नष्ट करती है। साफ़ किया हुआ सिक्का आधे से ज़्यादा मूल्य खो देता है।',
          'तीसरी: बिना विषय के इकट्ठा करना। नतीजा एक डिब्बा भर असंबंधित सिक्के, जिनमें न कोई क्रम है न पूर्णता का एहसास।',
          'चौथी: जल्दबाज़ी। यह शौक़ जमा करने का नहीं, धीरे-धीरे समझने का है। जो पहले साल में सबसे ज़्यादा ख़रीदते हैं, वे अक्सर तीसरे साल तक आधा बेच देते हैं।',
        ],
        pEn: [
          'The first and most expensive: buying something costly in the first month. An expensive purchase made with an untrained eye turns out wrong almost every time, and the mistake is remembered for years.',
          'The second: cleaning. A new collector’s most natural instinct is to brighten a coin, and that is what destroys the most value. A cleaned coin loses more than half its worth.',
          'The third: collecting without a theme. The result is a box of unrelated coins with neither order nor any sense of completion.',
          'The fourth: hurry. This hobby is about understanding slowly rather than accumulating. Those who buy the most in their first year very often sell half of it by their third.',
        ],
      },
      {
        hHi: 'पहले सीखिए, बाद में ख़रीदिए',
        hEn: 'Learn first, buy later',
        pHi: [
          'इस क्षेत्र में जानकारी ही असली मुद्रा है। जो जानता है वह कम में बेहतर ख़रीदता है; जो नहीं जानता वह ज़्यादा में ग़लत ख़रीदता है।',
          'सीखने के तीन स्रोत हैं, और तीनों सस्ते हैं। पहला — एक अच्छी संदर्भ-पुस्तक, जो किसी भी एक सिक्के से ज़्यादा उपयोगी है।',
          'दूसरा — संग्राहकों की समिति। लगभग हर बड़े शहर में एक है, और वहाँ जाने का सबसे बड़ा लाभ ख़रीदना नहीं, सैकड़ों असली सिक्के हाथ में लेकर देखना है।',
          'तीसरा — प्रदर्शनियाँ। एक दोपहर में जितनी असली धातु आप देखते हैं, उतनी किसी और तरीक़े से नहीं, और यही आँख बनाने का सबसे तेज़ रास्ता है।',
        ],
        pEn: [
          'In this field knowledge is the real currency. Somebody who knows buys better for less; somebody who does not buys wrongly for more.',
          'There are three sources of learning and all three are cheap. The first is a good reference book, which is more useful than any single coin you could buy with the same money.',
          'The second is a collectors’ society. Almost every major city has one, and the greatest benefit of attending is not buying but handling hundreds of genuine coins.',
          'The third is fairs. You see more real metal in one afternoon than by any other route, and that is the fastest way there is to build the eye.',
        ],
      },
      {
        hHi: 'विषय चुनना',
        hEn: 'Choosing a theme',
        pHi: [
          'एक अच्छा विषय तीन शर्तें पूरी करता है: वह सीमित हो, सस्ता हो, और आपको सचमुच दिलचस्प लगे। तीनों में से कोई एक भी छूट जाए तो संग्रह रुक जाता है।',
          'कुछ आज़माए हुए विषय: “हर शासक का एक चौथाई आना”, “1957 की पूरी दशमलव शृंखला”, “मेरे राज्य की रियासत के सिक्के”, “एक टकसाल, कई वर्ष”।',
          'विषय का सबसे बड़ा लाभ यह है कि वह आपको ना कहना सिखाता है। जब कोई डीलर कुछ आकर्षक दिखाए, सवाल सरल हो जाता है — क्या यह मेरे विषय में आता है?',
          'अधिकांश बार जवाब “नहीं” होता है, और वही जवाब आपका पैसा बचाता है और आपके संग्रह को संग्रह बनाए रखता है।',
        ],
        pEn: [
          'A good theme meets three conditions: bounded, affordable, and genuinely interesting to you. If any one is missing the collection stalls.',
          'Some that work well: “one quarter anna per ruler”, “the complete 1957 decimal series”, “the coins of my own princely state”, “one mint across many years”.',
          'The greatest advantage of a theme is that it teaches you to say no. When a dealer shows you something attractive, the question becomes simple — does this belong to my theme?',
          'Most of the time the answer is no, and that answer both saves your money and keeps your collection a collection.',
        ],
      },
      {
        hHi: 'पहली ख़रीद',
        hEn: 'The first purchase',
        pHi: [
          'पहली ख़रीद सस्ती और आम होनी चाहिए — कोई ऐसा सिक्का जिसकी क़ीमत इतनी हो कि ग़लती निकलने पर भी तकलीफ़ न हो।',
          'ब्रिटिश भारत का ताँबे का चौथाई आना इसके लिए आदर्श है: बड़ा, इसलिए ब्योरे साफ़ दिखते हैं; सस्ता, इसलिए जोखिम कम; और हर जगह उपलब्ध।',
          'किसी प्रदर्शनी में जाकर, हाथ में लेकर ख़रीदिए। ऑनलाइन पहली ख़रीद इसलिए ठीक नहीं कि तस्वीर से घिसाव, लस्टर और वज़न का अंदाज़ा नहीं लगता।',
          'विक्रेता से पूछिए कि वह इसे किस ग्रेड का मानता है और क्यों। एक अच्छा डीलर जवाब देने में ख़ुशी महसूस करता है, और वह बातचीत किसी किताब से ज़्यादा सिखाती है।',
        ],
        pEn: [
          'The first purchase should be cheap and common — a coin priced low enough that a mistake would not hurt.',
          'A British India copper quarter anna is ideal: large, so the detail shows clearly; cheap, so the risk is low; and available everywhere.',
          'Buy it at a fair, with the coin in your hand. A first purchase online is a poor idea because a photograph tells you nothing reliable about wear, lustre or weight.',
          'Ask the seller what grade he considers it and why. A good dealer is glad to answer, and that conversation teaches more than any book.',
        ],
      },
      {
        hHi: 'ज़रूरी औज़ार',
        hEn: 'The necessary tools',
        pHi: [
          'तीन चीज़ें काफ़ी हैं और तीनों सस्ती हैं। पहली — दस गुना आवर्धन का लूप, जो टकसाल-चिह्न पढ़ने और नक़ल पहचानने के लिए ज़रूरी है।',
          'दूसरी — एक डिजिटल तराज़ू जो 0.01 ग्राम तक नापे। वज़न सबसे तेज़ प्रामाणिकता-परीक्षण है और अधिकांश जाली सिक्के इसी एक जाँच में पकड़े जाते हैं।',
          'तीसरी — सही भंडारण: माइलर या पॉलीप्रोपिलीन के फ़्लिप, या अम्ल-रहित लिफ़ाफ़े। पीवीसी वाली पुरानी थैलियाँ हरगिज़ नहीं।',
          'इन तीनों का कुल ख़र्च एक अच्छे सिक्के से भी कम है, और ये जीवन भर काम आते हैं। इन्हें पहले ख़रीदिए, सिक्के बाद में।',
        ],
        pEn: [
          'Three things are enough and all three are cheap. First, a ten-times loupe, needed for reading mint marks and spotting forgeries.',
          'Second, a digital scale reading to 0.01 gram. Weight is the fastest authenticity test there is, and most counterfeits are caught by that single check.',
          'Third, proper storage: Mylar or polypropylene flips, or acid-free envelopes. Never old PVC sleeves.',
          'All three together cost less than one decent coin, and all three last a lifetime. Buy these first and the coins afterwards.',
        ],
      },
      {
        hHi: 'सुरक्षित रखना और दर्ज करना',
        hEn: 'Keeping them safe, and recording them',
        pHi: [
          'नमी सबसे बड़ा शत्रु है। एक बंद डिब्बा और उसमें सिलिका जेल का पाउच — साल में एक-दो बार बदला हुआ — अधिकांश समस्या हल कर देता है।',
          'जगह भी मायने रखती है: रसोई और स्नानघर से दूर, खिड़की से दूर, घर के भीतर की अलमारी में। तहख़ाना और छत दोनों तापमान के चरम झेलते हैं।',
          'हर सिक्के के साथ एक पर्ची रखिए — कहाँ से, कब, कितने में, और विरासत हो तो किसका था। हर बार तीस सेकंड लगते हैं।',
          'यह जानकारी वर्षों बाद सोने जैसी क़ीमती हो जाती है। बेचते समय स्रोत का रिकॉर्ड दाम बढ़ाता है, और न बेचें तो अगली पीढ़ी को सिक्के के साथ उसकी कहानी मिलती है।',
        ],
        pEn: [
          'Humidity is the greatest enemy. A closed box with a silica gel sachet inside — replaced once or twice a year — solves most of the problem.',
          'Location matters too: away from the kitchen and bathroom, away from windows, in an interior cupboard. A basement and a roof room both suffer extremes of temperature.',
          'Keep a slip with every coin — where, when, for how much, and if inherited, whose it was. Thirty seconds each time.',
          'That information becomes gold years later. When selling, a record of provenance raises the price; and if you never sell, the next generation receives the coin with its story.',
        ],
      },
      {
        hHi: 'ईमानदारी का सवाल',
        hEn: 'A question of honesty',
        pHi: [
          'एक बात जो कम कही जाती है: इस शौक़ में साख सबसे बड़ी संपत्ति है, और वह धीरे बनती है तथा जल्दी टूटती है।',
          'यदि आपका कोई सिक्का साफ़ किया गया है या मरम्मत किया गया है, तो बेचते समय यह बता दीजिए। छिपाना अल्पकालिक लाभ देता है और दीर्घकालिक नुक़सान।',
          'यही बात ख़रीदते समय भी लागू होती है। यदि विक्रेता को नहीं पता कि उसके पास क्या है, तो उसे बताना और उचित दाम देना सही व्यवहार है।',
          'यह क्षेत्र छोटा है और लोग एक-दूसरे को जानते हैं। जो साख बनाता है, उसे बेहतर सिक्के पहले दिखाए जाते हैं — और यह किसी भी छूट से बड़ा लाभ है।',
        ],
        pEn: [
          'One thing said less often: reputation is the largest asset in this hobby, and it builds slowly and breaks quickly.',
          'If a coin of yours has been cleaned or repaired, say so when selling. Concealing it brings a short-term gain and a long-term loss.',
          'The same applies when buying. If a seller does not know what he has, telling him and paying a fair price is the right conduct.',
          'This field is small and people know one another. Somebody who builds a reputation is shown the better coins first — and that is worth more than any discount.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'पहले महीने कुछ महँगा मत ख़रीदिए, कभी साफ़ मत कीजिए, एक विषय चुनिए, और तीन सस्ते औज़ार पहले ले लीजिए।',
          'फिर किसी प्रदर्शनी या समिति में जाइए और असली सिक्के हाथ में लेकर देखिए। जानकारी इस क्षेत्र की असली मुद्रा है, और वह लोगों के पास है — किताबों में उतनी नहीं।',
        ],
        pEn: [
          'Buy nothing expensive in the first month, never clean anything, choose a theme, and get the three cheap tools before you get the coins.',
          'Then go to a fair or a society and handle genuine coins. Knowledge is the real currency in this field, and it lives with people rather than in books — which is why an afternoon among collectors is worth more than a month of reading.',
        ],
      },
    ],
  },
  {
    slug: 'grading-coins-basics',
    sections: [
      {
        hHi: 'दशा और घिसाव दो अलग चीज़ें हैं',
        hEn: 'Condition and wear are two different things',
        pHi: [
          'यह भेद सबसे पहले समझ लेना चाहिए, क्योंकि इसी पर पूरा मूल्यांकन टिका है।',
          'घिसाव वह है जो सिक्के के चलन में होने से आया — हज़ारों हाथों की रगड़, जेब, गल्ला। यह स्वाभाविक है और सिक्के की उम्र का ईमानदार निशान है।',
          'क्षति वह है जो बाद में की गई — ख़रोंच, छेद, मोड़, सफ़ाई, या रासायनिक क्षरण। यह स्वाभाविक नहीं और मूल्य को कहीं तेज़ी से गिराती है।',
          'एक भारी घिसा हुआ सिक्का ईमानदार है — उसने अपना जीवन जिया। एक साफ़ किया हुआ सिक्का, चाहे कम घिसा हो, क्षतिग्रस्त है, और वह अंतर स्थायी है।',
        ],
        pEn: [
          'This distinction should be understood before anything else, because the whole of valuation rests on it.',
          'Wear is what came from circulation — the rubbing of thousands of hands, pockets, cash drawers. It is natural and an honest mark of the coin’s age.',
          'Damage is what was done afterwards — scratches, holes, bends, cleaning, or chemical corrosion. It is not natural and it reduces value far more sharply.',
          'A heavily worn coin is honest; it lived its life. A cleaned coin, however little worn, is damaged — and that distinction is permanent.',
        ],
      },
      {
        hHi: 'दशा को क्या-क्या गिराता है',
        hEn: 'What lowers a coin’s condition',
        pHi: [
          'ख़रोंचें — विशेषकर वे जो चेहरे के खुले हिस्सों पर हों। किनारे की छोटी ख़रोंच उतनी नहीं खटकती जितनी गाल पर पड़ी एक रेखा।',
          'किनारे की चोट — गिरने से किनारा दब जाता है, और वह चोट कभी नहीं जाती। इसीलिए काम हमेशा नरम सतह के ऊपर करना चाहिए।',
          'छेद — कभी-कभी सिक्कों में गहना बनाने के लिए छेद किया गया। यह मूल्य को नाटकीय रूप से गिराता है, चाहे बाक़ी सिक्का बेहतरीन हो।',
          'क्षरण — ताँबे पर हरे धब्बे, लोहे पर ज़ंग, एल्युमिनियम पर सफ़ेद पाउडर। यह घिसाव नहीं, धातु का नुक़सान है और वह वापस नहीं आता।',
        ],
        pEn: [
          'Scratches — particularly across the open fields of the portrait. A small nick on the rim matters far less than a line drawn across a cheek.',
          'Rim knocks — a fall flattens part of the edge, and that injury never leaves. This is why work should always be done over a soft surface.',
          'Holes — coins were sometimes pierced to be worn as jewellery. This reduces value dramatically, however fine the rest of the coin.',
          'Corrosion — green spots on copper, rust on iron, white powder on aluminium. That is not wear but loss of metal, and it does not come back.',
        ],
      },
      {
        hHi: 'ताँबे और चाँदी की ग्रेडिंग अलग है',
        hEn: 'Grading copper is not grading silver',
        pHi: [
          'यह बात कम कही जाती है और व्यवहार में बहुत उपयोगी है। दोनों धातुएँ अलग तरह से पुरानी होती हैं, इसलिए उन्हें अलग नज़र से देखना पड़ता है।',
          'चाँदी पर टोनिंग आमतौर पर आकर्षक मानी जाती है — नीले, बैंगनी और सुनहरे रंगों की इंद्रधनुषी परत प्रीमियम पाती है।',
          'ताँबे पर रंग ही ग्रेड का बड़ा हिस्सा है। संग्राहक इसे तीन श्रेणियों में बाँटते हैं: लाल (मूल टकसाल-रंग), लाल-भूरा, और भूरा। लाल सबसे ऊपर और सबसे दुर्लभ।',
          'इसका व्यावहारिक अर्थ यह है कि ताँबे के सिक्के का रंग बदलना उसकी ग्रेड बदल देता है — और यही एक और कारण है कि उसे कभी साफ़ नहीं करना चाहिए।',
        ],
        pEn: [
          'This is said less often and is very useful in practice. The two metals age differently, so they have to be looked at differently.',
          'On silver, toning is generally considered attractive — a rainbow film of blue, violet and gold commands a premium.',
          'On copper, colour is a large part of the grade itself. Collectors divide it into three categories: red (original mint colour), red-brown, and brown. Red is highest and scarcest.',
          'The practical consequence is that changing the colour of a copper coin changes its grade — one more reason it should never be cleaned.',
        ],
      },
      {
        hHi: 'सीढ़ी, संक्षेप में',
        hEn: 'The ladder, briefly',
        pHi: [
          'सबसे नीचे पुअर — जहाँ तारीख़ मुश्किल से पढ़ी जाए और मुख्य आकृतियाँ भी अस्पष्ट हों।',
          'उसके ऊपर गुड, फ़ाइन, वेरी फ़ाइन और एक्स्ट्रीमली फ़ाइन। इस बीच बारीक ब्योरे धीरे-धीरे लौटते हैं — बालों की लटें अलग होती जाती हैं, अलंकरण के हिस्से दिखने लगते हैं।',
          'सबसे ऊपर अनसर्कुलेटेड — कोई घिसाव नहीं, पूरा लस्टर। ध्यान रहे कि UNC का अर्थ बेदाग़ नहीं है; टकसाल की थैली में सिक्के टकराते हैं, इसलिए हल्के बैग-मार्क सामान्य हैं।',
          'अधिकांश अच्छे संग्रह वेरी फ़ाइन के आसपास टिकते हैं, क्योंकि वहीं दाम और दिखावट का संतुलन सबसे अच्छा बैठता है।',
        ],
        pEn: [
          'At the bottom sits Poor — where the date is barely legible and even the main devices are indistinct.',
          'Above it Good, Fine, Very Fine and Extremely Fine. Across that range the fine detail gradually returns — locks of hair separate, elements of the ornament reappear.',
          'At the top, Uncirculated — no wear, full lustre. Note that UNC does not mean flawless; coins knock together in the mint bag, so light bag marks are normal.',
          'Most good collections settle around Very Fine, because that is where the balance between price and appearance sits best.',
        ],
      },
      {
        hHi: 'सफ़ाई की चेतावनी',
        hEn: 'A warning about cleaning',
        pHi: [
          'यह वह ग़लती है जो सबसे ज़्यादा की जाती है और जिसका नुक़सान सबसे बड़ा होता है, इसलिए इसे दोहराना उचित है।',
          'साफ़ किया हुआ सिक्का ग्रेडिंग की दुनिया में एक अलग श्रेणी में चला जाता है। अंतरराष्ट्रीय सेवाएँ उसे संख्यात्मक ग्रेड देने के बजाय “cleaned” का लेबल लगाती हैं।',
          'पहचान का तरीक़ा सरल है: प्राकृतिक घिसाव की ख़रोंचें हर दिशा में यादृच्छिक होती हैं; रगड़ने से बनी ख़रोंचें समानांतर रेखाओं में चलती हैं, और लूप के नीचे यह तुरंत दिखता है।',
          'दूसरा संकेत दरारों में बची गहरी परत है। रगड़ने वाला ऊँची सतह साफ़ कर देता है पर कोनों तक नहीं पहुँचता — और वह विरोधाभास ही सबूत बन जाता है।',
        ],
        pEn: [
          'This is the mistake made most often and with the greatest cost, so it bears repeating.',
          'A cleaned coin moves into a separate category in the grading world. International services do not assign it a numerical grade but label it “cleaned”.',
          'Recognising it is simple: scratches from natural wear run randomly in every direction; scratches from rubbing run in parallel lines, and under a loupe this is immediately visible.',
          'The second clue is the darker film surviving in the crevices. Somebody rubbing a coin cleans the raised surface but cannot reach the corners — and that contradiction becomes the proof.',
        ],
      },
      {
        hHi: 'ग्रेडिंग को समझदारी से देखिए',
        hEn: 'View grading sensibly',
        pHi: [
          'एक बात जो अक्सर छूट जाती है: ग्रेडिंग कोई कठोर विज्ञान नहीं है। दो अनुभवी लोग एक ही सिक्के पर एक पायदान का फ़र्क़ रख सकते हैं, और दोनों ठीक हो सकते हैं।',
          'इसीलिए मोल-भाव में ग्रेड के लेबल पर बहस करने के बजाय सिक्के के ब्योरे पर बात कीजिए। ब्योरे जाँचे जा सकते हैं; लेबल राय है।',
          'यह भी याद रखिए कि ग्रेड बाज़ार की एक भाषा है, सिक्के का गुण नहीं। एक VF सिक्का जो आपको पसंद है, वह किसी XF से बेहतर संग्रह-वस्तु हो सकती है।',
          'और सबसे व्यावहारिक बात: अपनी आँख पर भरोसा बनाइए। दस समान सिक्के लेकर उन्हें क्रम में लगाने का अभ्यास किसी भी लेबल से ज़्यादा सिखाता है।',
        ],
        pEn: [
          'One point often missed: grading is not an exact science. Two experienced people can differ by one rung on the same coin, and both can be right.',
          'So in a negotiation, discuss the specific details of the coin rather than arguing about the label. Details are checkable; labels are opinions.',
          'Remember too that a grade is a language of the market rather than a property of the coin. A VF piece you like can be a better collection object than an XF one you do not.',
          'And the most practical point: build confidence in your own eye. Taking ten similar coins and arranging them in order teaches more than any label.',
        ],
      },
      {
        hHi: 'अभ्यास का तरीक़ा',
        hEn: 'How to practise',
        pHi: [
          'सस्ते, आम सिक्कों से शुरुआत कीजिए — ब्रिटिश भारत के ताँबे के छोटे सिक्के आदर्श हैं क्योंकि वे बड़े हैं और कुछ रुपयों में मिल जाते हैं।',
          'एक ही प्रकार के दस नमूने ख़रीदिए और उन्हें बिना कैटलॉग देखे अपनी समझ से सबसे घिसे से सबसे अच्छे तक क्रम में लगाइए।',
          'फिर एक-एक करके देखिए कि आपने किस ब्योरे के आधार पर फ़ैसला किया — गाल, बाल, अक्षरों के किनारे, या कुछ और। यही सचेत विश्लेषण आँख को प्रशिक्षित करता है।',
          'यह अभ्यास दो-तीन बार करने के बाद आप किसी भी सिक्के का मोटा ग्रेड बता सकेंगे, और यही वह कौशल है जो आपको ज़्यादा दाम चुकाने से बचाता है।',
        ],
        pEn: [
          'Start with cheap, common coins — the small copper of British India is ideal, being large and costing a few rupees.',
          'Buy ten examples of one type and arrange them, without consulting any catalogue, from most worn to best by your own judgement.',
          'Then work through them one at a time and identify which detail drove each decision — the cheek, the hair, the edges of the letters, or something else. That conscious analysis is what trains the eye.',
          'After doing this two or three times you will be able to state the approximate grade of any coin, and that is precisely the skill that stops you from overpaying.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'घिसाव ईमानदार है, क्षति नहीं — और सफ़ाई क्षति है। ताँबे में रंग ग्रेड का हिस्सा है, चाँदी में लस्टर सबसे निर्णायक तत्व।',
          'ग्रेडिंग कोई सटीक विज्ञान नहीं, इसलिए लेबल पर नहीं ब्योरों पर बात कीजिए। और अभ्यास किताब से नहीं, दस सस्ते सिक्कों को क्रम में लगाकर होता है।',
        ],
        pEn: [
          'Wear is honest, damage is not — and cleaning is damage. On copper the colour is part of the grade; on silver, lustre is the most decisive element of all.',
          'Grading is not an exact science, so discuss details rather than labels. And practice comes not from a book but from taking ten cheap coins and putting them in order.',
        ],
      },
    ],
  },
  {
    slug: 'east-india-company-coins',
    sections: [
      {
        hHi: 'शुरुआत कहाँ से करें',
        hEn: 'Where to begin',
        pHi: [
          'ताँबे के छोटे सिक्के इस क्षेत्र का प्रवेश-द्वार हैं — क्वार्टर आना, आधा पाइस, और मद्रास के कैश। ये कुछ सौ रुपये में मिलते हैं और भरपूर उपलब्ध हैं।',
          'एक अच्छा शुरुआती लक्ष्य है “तीनों प्रेसीडेंसी से एक-एक” — बंगाल, मद्रास और बंबई का एक-एक सिक्का। तीन वस्तुएँ, और उनमें तीन अलग व्यवस्थाएँ बैठ जाती हैं।',
          'उसके बाद 1835 के एकसमान सिक्के की ओर बढ़िए, जो उस पूरी विविधता के अंत का दस्तावेज़ है।',
        ],
        pEn: [
          'The small copper is the doorway into this field — quarter annas, half pice, and the Madras cash. They cost a few hundred rupees and are plentiful.',
          'A good opening target is “one from each presidency” — a single coin from Bengal, Madras and Bombay. Three objects, and three separate monetary systems sit inside them.',
          'After that move towards the uniform coinage of 1835, which documents the end of all that variety and the beginning of a single Indian rupee.',
        ],
      },
    ],
  },
  {
    slug: 'victoria-portrait-coins',
    sections: [
      {
        hHi: 'संग्रह का एक अच्छा लक्ष्य',
        hEn: 'A good collecting target',
        pHi: [
          '“दो उपाधियाँ, एक मूल्यवर्ग” इस क्षेत्र का सबसे साफ़ लक्ष्य है — एक क्वीन दौर का सिक्का और एक एम्प्रेस दौर का, दोनों एक ही मूल्यवर्ग में।',
          'दो सिक्के, कुल ख़र्च कुछ सौ रुपये, और वे साथ रखे जाने पर एक ऐतिहासिक घटना को दिखा देते हैं जो 1876 में घटी।',
          'इसके बाद इसे बढ़ाना आसान है: हर मूल्यवर्ग के लिए वही जोड़ा। यह लक्ष्य सीमित रहता है और पूरा होने पर सचमुच कुछ बनता है।',
        ],
        pEn: [
          '“Two titles, one denomination” is the cleanest target in this field — one Queen-period coin and one Empress-period coin, both of the same denomination.',
          'Two coins, a few hundred rupees in total, and placed side by side they display a historical event that took place in 1876.',
          'Extending it afterwards is easy: the same pair for every denomination. The target stays bounded, and once complete it genuinely amounts to something.',
        ],
      },
    ],
  },
  {
    slug: 'republic-india-first-coins',
    sections: [
      {
        hHi: 'प्रतीक का चयन क्यों मायने रखता है',
        hEn: 'Why the choice of emblem matters',
        pHi: [
          'एक नए गणराज्य के लिए मुद्रा का डिज़ाइन केवल सौंदर्य का प्रश्न नहीं होता। सिक्का हर दिन हर हाथ में जाता है, और उस पर जो अंकित है वही दोहराया जाता है।',
          'भारत ने किसी व्यक्ति के बजाय एक प्रतीक चुना, और वह प्रतीक भी ऐसा जो किसी एक धर्म, क्षेत्र या भाषा का नहीं।',
          'अशोक स्तंभ ढाई हज़ार साल पुराना है, यानी वह किसी हालिया राजनीति से नहीं जुड़ा। और “सत्यमेव जयते” एक उपनिषद से आया वाक्य है, जो एक नैतिक दावा करता है, राजनीतिक नहीं।',
          'यही चयन आज तक क़ायम है, और वह अपने आप में एक निरंतरता है जो 1950 से आज तक हर भारतीय सिक्के पर चली आ रही है।',
        ],
        pEn: [
          'For a new republic, the design of its currency is not merely a question of appearance. A coin passes through every hand every day, and whatever is stamped on it is what gets repeated.',
          'India chose an emblem rather than a person, and an emblem belonging to no single religion, region or language.',
          'The Ashoka capital is two and a half thousand years old, meaning it is attached to no recent politics. And “Satyameva Jayate” comes from an Upanishad and makes a moral claim rather than a political one.',
          'That choice still holds, and it is a continuity of its own — running across every Indian coin from 1950 to today.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-start-collecting-coins',
    sections: [
      {
        hHi: 'धैर्य ही असली औज़ार है',
        hEn: 'Patience is the real tool',
        pHi: [
          'हर ख़रीद से पहले एक हफ़्ता रुकिए। जो सिक्का हफ़्ते भर बाद भी उतना ही ज़रूरी लगे, वही असल में चाहिए था।',
          'यह नियम सरल लगता है और वह अधिकांश अनावश्यक ख़रीद रोक देता है, क्योंकि इस शौक़ में सबसे ज़्यादा पैसा उत्साह के क्षणों में ख़र्च होता है।',
        ],
        pEn: [
          'Wait a week before every purchase. A coin that still feels necessary after that week is the one you actually wanted.',
          'The rule sounds simple and it prevents most unnecessary buying, because in this hobby the greatest amount of money is spent in moments of enthusiasm rather than after consideration.',
        ],
      },
    ],
  },
  {
    slug: 'grading-coins-basics',
    sections: [
      {
        hHi: 'थर्ड-पार्टी ग्रेडिंग कब उचित है',
        hEn: 'When third-party grading is worth it',
        pHi: [
          'अंतरराष्ट्रीय ग्रेडिंग कंपनियाँ सिक्के को जाँचकर एक सीलबंद डिब्बे में बंद कर देती हैं, जिस पर ग्रेड और प्रामाणिकता दर्ज होती है।',
          'इससे ख़रीदार को भरोसा मिलता है और सिक्का बेचना आसान हो जाता है। पर शुल्क, विदेश भेजने का ख़र्च, बीमा और समय — सब जोड़कर यह ठीक-ठाक रक़म बनती है।',
          'सीधा नियम यह है: यदि कुल ख़र्च सिक्के के अनुमानित मूल्य के एक चौथाई से ज़्यादा है, तो मत कीजिए।',
          'महँगे, दुर्लभ और विवादित सिक्कों के लिए यह निवेश सार्थक है; आम सिक्कों के लिए यह पैसा बर्बाद करना है।',
        ],
        pEn: [
          'International grading companies examine a coin and seal it in a holder marked with its grade and authenticity.',
          'This gives buyers confidence and makes the coin easier to sell. But the fee, shipping abroad, insurance and time together add up to a substantial amount.',
          'The straightforward rule is this: if the total cost exceeds about a quarter of the coin’s estimated value, do not do it.',
          'For expensive, rare or disputed pieces the investment is worthwhile; for ordinary coins it is money thrown away.',
        ],
      },
    ],
  },
  {
    slug: 'east-india-company-coins',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'इन सिक्कों का सबसे बड़ा मूल्य यही है कि वे एक असामान्य ऐतिहासिक स्थिति का दस्तावेज़ हैं।',
        ],
        pEn: [
          'The greatest value of these coins is that they document an unusual historical situation: a private trading company issuing currency across a subcontinent, in the name of an emperor it formally answered to, until the day it became a government in all but name and then stopped being anything at all.',
        ],
      },
    ],
  },
  {
    slug: 'victoria-portrait-coins',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'इन सिक्कों को देखते समय याद रखिए कि वे एक तकनीकी बाध्यता के भीतर बनी कला हैं।',
        ],
        pEn: [
          'When looking at these coins, remember that they are art made inside a technical constraint: a face that had to survive thousands of hands without wearing away, cut into a surface a couple of millimetres deep, by somebody who would never see the person and never see most of the places the coin would travel to.',
        ],
      },
    ],
  },
  {
    slug: 'republic-india-first-coins',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'गणराज्य के पहले सिक्के किसी उत्सव की घोषणा नहीं थे। वे सादे, व्यावहारिक और निकल के थे — और यही उन्हें ईमानदार बनाता है।',
        ],
        pEn: [
          'The first coins of the Republic were not a celebration announced in metal. They were plain, practical and made of nickel, because the country could not afford silver and did not pretend otherwise — and that unadorned honesty is precisely what makes them worth having in a collection today.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-start-collecting-coins',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'इस शौक़ में सबसे अच्छा निवेश कोई सिक्का नहीं, बल्कि एक अच्छी संदर्भ-पुस्तक और कुछ अच्छे लोगों से जान-पहचान है।',
        ],
        pEn: [
          'The best investment in this hobby is not a coin at all but a good reference book and the acquaintance of a few knowledgeable people — because a book costs less than one decent purchase and prevents a dozen bad ones, and the people will show you things you would never have found in any catalogue.',
        ],
      },
    ],
  },
  {
    slug: 'grading-coins-basics',
    sections: [
      {
        hHi: 'एक आख़िरी बात',
        hEn: 'One last thing',
        pHi: [
          'ग्रेडिंग सीखने का असली लाभ यह नहीं कि आप बेहतर बेच सकेंगे, बल्कि यह कि आप ग़लत ख़रीद से बच जाएँगे।',
        ],
        pEn: [
          'The real benefit of learning to grade is not that you will sell better but that you will avoid buying badly — and over a collecting lifetime the money saved by recognising a cleaned coin at a glance comfortably exceeds anything you would ever make by selling well.',
        ],
      },
    ],
  },
  {
    slug: 'cleaning-coins-warning',
    sections: [
      {
        hHi: 'लोग साफ़ क्यों करना चाहते हैं',
        hEn: 'Why people want to clean',
        pHi: [
          'यह इच्छा समझने लायक़ है, क्योंकि उसे समझे बिना यह सलाह केवल एक निषेध लगती है।',
          'हमें बचपन से सिखाया जाता है कि साफ़ चीज़ अच्छी होती है और गंदी चीज़ ख़राब। धातु पर जमी गहरी परत सहज रूप से “गंदगी” दिखती है, और उसे हटाना देखभाल लगता है।',
          'दूसरा कारण यह है कि चमकीला सिक्का तस्वीर में बेहतर दिखता है, और बेचने वाले को लगता है कि वह ज़्यादा दाम पाएगा।',
          'दोनों धारणाएँ इस एक क्षेत्र में उलटी हैं। यहाँ पुराना दिखना गुण है, और चमक अक्सर क्षति का प्रमाण। यही वह मानसिक पलटाव है जो हर नए संग्राहक को करना पड़ता है।',
        ],
        pEn: [
          'The impulse is worth understanding, because without understanding it this advice reads as a bare prohibition.',
          'We are taught from childhood that a clean object is good and a dirty one bad. A dark film on metal instinctively looks like dirt, and removing it feels like care.',
          'The second reason is that a bright coin photographs better, and a seller assumes it will fetch more.',
          'Both assumptions are inverted in this one field. Here looking old is a virtue, and brightness is frequently evidence of damage. That is the mental reversal every new collector has to make.',
        ],
      },
      {
        hHi: 'संरक्षण और सफ़ाई दो अलग चीज़ें हैं',
        hEn: 'Conservation and cleaning are two different things',
        pHi: [
          'संग्रहालय के संरक्षक कभी-कभी सिक्कों पर काम करते हैं, और उसे देखकर कुछ लोग सोचते हैं कि सफ़ाई स्वीकार्य है। यह ग़लतफ़हमी है और भेद जानना ज़रूरी है।',
          'संरक्षण का उद्देश्य क्षति रोकना है, दिखावट सुधारना नहीं। जब कोई सक्रिय रासायनिक प्रक्रिया धातु को खा रही हो — जैसे ताँबे पर सक्रिय क्षरण या पीवीसी की परत — तब हस्तक्षेप ज़रूरी होता है।',
          'यह काम नियंत्रित परिस्थितियों में, विशिष्ट रसायनों से, और उस व्यक्ति द्वारा किया जाता है जो जानता है कि किस धातु पर क्या प्रतिक्रिया होगी। और वह दर्ज भी किया जाता है।',
          'घर पर टूथपेस्ट से रगड़ना इसका उलटा है: उद्देश्य दिखावट है, विधि घर्षक है, और परिणाम अपरिवर्तनीय। एक चिकित्सा है, दूसरा नुक़सान।',
        ],
        pEn: [
          'Museum conservators do sometimes work on coins, and seeing that leads some people to conclude cleaning is acceptable. That is a misunderstanding and the distinction matters.',
          'The purpose of conservation is to stop damage, not to improve appearance. When an active chemical process is eating the metal — active corrosion on copper, or a PVC film — intervention is necessary.',
          'That work is done under controlled conditions, with specific reagents, by somebody who knows how each metal will react. And it is documented.',
          'Rubbing with toothpaste at home is the opposite on every count: the purpose is appearance, the method is abrasive, and the result is irreversible. One is treatment; the other is harm.',
        ],
      },
      {
        hHi: 'ज़मीन से निकले सिक्कों का विशेष मामला',
        hEn: 'The special case of coins from the ground',
        pHi: [
          'यहाँ एक अपवाद है जिसे स्पष्ट कर देना चाहिए, क्योंकि सामान्य नियम इस पर सीधे लागू नहीं होता।',
          'ज़मीन में दबे रहे सिक्कों पर अक्सर सख़्त मिट्टी की परत जमी होती है, और कभी-कभी उसके नीचे सक्रिय क्षरण चलता रहता है जो धातु को धीरे-धीरे नष्ट करता है।',
          'ऐसे मामलों में कुछ करना पड़ता है, पर वह “सफ़ाई” नहीं बल्कि स्थिरीकरण है — और वह विशेषज्ञ का काम है। ग़लत तरीक़ा सिक्के को कुछ ही मिनटों में नष्ट कर सकता है।',
          'यदि आपके पास ऐसा सिक्का है, तो उसे सूखा रखिए, अलग रखिए, और किसी अनुभवी व्यक्ति को दिखाइए। जो नहीं करना है वह है उसे पानी में भिगोकर ब्रश से रगड़ना।',
        ],
        pEn: [
          'There is an exception here that should be stated plainly, because the general rule does not apply directly to it.',
          'Coins that have been buried often carry a hard crust of soil, and beneath it an active corrosion can continue eating the metal.',
          'Something has to be done in such cases, but that something is stabilisation rather than cleaning — and it is specialist work. The wrong method can destroy the coin within minutes.',
          'If you hold such a coin, keep it dry, keep it separate, and show it to somebody experienced. What must not be done is soaking it in water and scrubbing with a brush.',
        ],
      },
      {
        hHi: 'नुक़सान संख्या में',
        hEn: 'The damage, in numbers',
        pHi: [
          'यह हिस्सा लोगों को सबसे ज़्यादा चौंकाता है, और इसीलिए इसे स्पष्ट रूप से कहना उपयोगी है।',
          'एक ही सिक्का, एक ही दशा — पर एक अछूता और दूसरा साफ़ किया हुआ। दूसरे का दाम अक्सर पहले के आधे से भी कम बैठता है, और कभी-कभी उससे भी नीचे।',
          'कारण यह है कि अंतरराष्ट्रीय ग्रेडिंग सेवाएँ साफ़ किए गए सिक्के को संख्यात्मक ग्रेड ही नहीं देतीं। वे उस पर “cleaned” का लेबल लगाती हैं, और वह लेबल स्थायी है।',
          'इसका व्यावहारिक अर्थ यह है कि सिक्का उस बाज़ार से लगभग बाहर हो जाता है जहाँ गंभीर संग्राहक ख़रीदते हैं। जो बचता है वह केवल धातु या भावना के लिए ख़रीदने वालों का बाज़ार है।',
        ],
        pEn: [
          'This is the part that surprises people most, which is why stating it clearly is useful.',
          'The same coin in the same grade — one untouched and one cleaned. The second frequently fetches less than half of the first, and sometimes considerably less.',
          'The reason is that international grading services do not assign a numerical grade to a cleaned coin at all. They label it “cleaned”, and that label is permanent.',
          'The practical consequence is that the coin leaves the market where serious collectors buy. What remains is the market of those buying for metal or for sentiment alone.',
        ],
      },
      {
        hHi: 'सिक्का पहले ही साफ़ हो चुका हो तो',
        hEn: 'If the coin has already been cleaned',
        pHi: [
          'यह स्थिति आम है, ख़ासकर विरासत में मिले संग्रहों में, जहाँ किसी पिछली पीढ़ी ने नेक इरादे से सब कुछ चमका दिया।',
          'पहली बात: नुक़सान की भरपाई नहीं हो सकती। कोई तरीक़ा नहीं है जिससे लस्टर लौटे या मूल परत वापस बने। यह जान लेना ही आगे बढ़ने का पहला क़दम है।',
          'दूसरी बात: सिक्का बेकार नहीं हुआ। उसका ऐतिहासिक महत्व वही है, उसकी कहानी वही है, और यदि वह परिवार से आया है तो उसकी भावनात्मक क़ीमत अछूती है।',
          'तीसरी: बेचते समय यह बता दीजिए। छिपाना अल्पकालिक लाभ देता है और साख का दीर्घकालिक नुक़सान — और यह क्षेत्र छोटा है, जहाँ लोग एक-दूसरे को जानते हैं।',
          'और चौथी: समय के साथ ताँबे और चाँदी पर एक नई प्राकृतिक परत धीरे-धीरे बनने लगती है। वह मूल जैसी नहीं होगी, पर दशकों में सिक्का फिर स्वाभाविक दिखने लगता है।',
        ],
        pEn: [
          'This situation is common, particularly in inherited collections where some earlier generation polished everything with the best of intentions.',
          'First: the damage cannot be undone. There is no method that restores lustre or rebuilds the original surface. Accepting that is the first step forward.',
          'Second: the coin is not worthless. Its historical importance is unchanged, its story is unchanged, and if it came from the family its emotional value is untouched.',
          'Third: say so when selling. Concealment brings a short-term gain and a long-term loss of reputation — and this is a small field where people know one another.',
          'And fourth: over time a new natural film begins to form on copper and silver. It will not be the original, but across decades the coin starts to look natural again.',
        ],
      },
      {
        hHi: 'परिवार को यह कैसे बताएँ',
        hEn: 'How to tell the family',
        pHi: [
          'सबसे ज़्यादा सिक्के परिवार के भीतर नष्ट होते हैं, और वह भी मदद करने की नीयत से। इसलिए इसे कहने का तरीक़ा मायने रखता है।',
          '“मत छुओ” कहना काम नहीं करता। इसके बजाय कारण बताइए: यह परत वर्षों में बनी है, यही उसे बचाती है, और उसे हटाने से दाम आधा रह जाता है।',
          'यदि घर में पुराने सिक्कों की संदूक़ है, तो एक छोटी पर्ची उसमें रख दीजिए — “कृपया इन्हें साफ़ न करें, इससे मूल्य नष्ट होता है।” यह वाक्य बहुत कुछ बचा लेता है।',
          'और बच्चों को यह बताना विशेष रूप से उपयोगी है, क्योंकि सिक्के चमकाने की इच्छा उनमें सबसे प्रबल होती है और वे कारण जल्दी समझ लेते हैं।',
        ],
        pEn: [
          'More coins are destroyed within families than anywhere else, and always with the intention of helping. So how this is said matters.',
          '“Don’t touch them” does not work. Give the reason instead: this film took years to form, it is what protects the surface, and removing it halves the value.',
          'If there is a trunk of old coins in the house, put a small slip inside it — “Please do not clean these; it destroys their value.” That one sentence saves a great deal.',
          'Telling children is particularly useful, because the urge to polish is strongest in them and they grasp the reason quickly.',
        ],
      },
      {
        hHi: 'जो करना चाहिए',
        hEn: 'What you should do instead',
        pHi: [
          'ढीली धूल हटाना सुरक्षित है — एक मुलायम ब्रश, हल्के हाथ से, और बस इतना।',
          'बाक़ी सारी ऊर्जा भंडारण में लगाइए: माइलर या पॉलीप्रोपिलीन के फ़्लिप, अम्ल-रहित लिफ़ाफ़े, और एक बंद डिब्बे में सिलिका जेल का पाउच।',
          'पीवीसी वाली पुरानी थैलियाँ आज ही हटाइए। यह एकमात्र स्थिति है जहाँ तुरंत कार्रवाई ज़रूरी है, क्योंकि वह परत सक्रिय रूप से धातु को नुक़सान पहुँचा रही है।',
          'और पकड़ने का तरीक़ा: हमेशा किनारों से, चेहरे पर उँगली नहीं, नरम सतह के ऊपर। ये चार आदतें मिलकर सिक्के को अगली सदी तक पहुँचा देती हैं।',
        ],
        pEn: [
          'Removing loose dust is safe — a soft brush, a light hand, and nothing more.',
          'Put all the remaining energy into storage: Mylar or polypropylene flips, acid-free envelopes, and a silica gel sachet in a closed box.',
          'Get rid of old PVC sleeves today. That is the one situation requiring immediate action, because the film is actively damaging the metal.',
          'And how to hold them: always by the edges, fingers off the faces, over a soft surface. Those four habits together carry a coin into the next century.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'चमक क्षति का प्रमाण है, गुण का नहीं। साफ़ किया हुआ सिक्का अपनी क़ीमत का आधे से ज़्यादा खो देता है और वह नुक़सान अपरिवर्तनीय है।',
          'संरक्षण अलग चीज़ है — वह क्षति रोकने के लिए, विशेषज्ञ द्वारा, नियंत्रित परिस्थितियों में किया जाता है। घर पर करने लायक़ केवल एक काम है: ढीली धूल हटाना, और फिर सिक्के को अकेला छोड़ देना।',
        ],
        pEn: [
          'Brightness is evidence of damage rather than of quality. A cleaned coin loses more than half its value, and that loss is irreversible.',
          'Conservation is a different thing — done to stop damage, by a specialist, under controlled conditions. The only job worth doing at home is lifting loose dust, and then leaving the coin alone.',
        ],
      },
    ],
  },
  {
    slug: 'spotting-fake-coins',
    sections: [
      {
        hHi: 'नक़ल सबसे ज़्यादा कहाँ मिलती है',
        hEn: 'Where fakes are most often found',
        pHi: [
          'यह जानना उतना ही उपयोगी है जितना यह जानना कि नक़ल कैसी दिखती है, क्योंकि अधिकांश ग़लत ख़रीद कुछ ही जगहों पर होती है।',
          'पहली — पर्यटन स्थलों की दुकानें। किले, स्मारक और बाज़ार जहाँ यात्री आते हैं, वहाँ “प्राचीन सिक्के” लगभग हमेशा आधुनिक टोकन होते हैं।',
          'दूसरी — ऑनलाइन मंच जहाँ विक्रेता गुमनाम हो। तस्वीर सुंदर, विवरण अस्पष्ट, दाम आकर्षक — यही तीनों मिलकर सबसे बड़ा ख़तरा हैं।',
          'तीसरी — “किसी परिचित का पुराना संग्रह”। यह सबसे कठिन है, क्योंकि विश्वास सतर्कता को कम कर देता है, और बेचने वाला अक्सर स्वयं भी नहीं जानता कि वस्तु नक़ली है।',
        ],
        pEn: [
          'Knowing this is as useful as knowing what a fake looks like, because most wrong purchases happen in only a few places.',
          'First, shops at tourist sites. At forts, monuments and markets where travellers come, “ancient coins” are almost always modern tokens.',
          'Second, online platforms where the seller is anonymous. A beautiful photograph, a vague description and an attractive price — those three together are the greatest danger.',
          'Third, “an old collection belonging to somebody I know”. This is the hardest, because trust lowers vigilance, and the seller frequently does not know it is fake either.',
        ],
      },
      {
        hHi: 'विवरण में छिपे संकेत',
        hEn: 'The warning signs hidden in a description',
        pHi: [
          'नक़ली सिक्कों की सूचियाँ अक्सर भाषा से ही पहचानी जा सकती हैं, इससे पहले कि आप तस्वीर देखें।',
          '“दुर्लभ”, “अत्यंत दुर्लभ”, “संग्रहालय गुणवत्ता” — ये शब्द बिना किसी संदर्भ के इस्तेमाल होते हैं और कुछ भी सिद्ध नहीं करते।',
          'स्रोत की अनुपस्थिति एक बड़ा संकेत है। ईमानदार विक्रेता बताता है कि सिक्का कहाँ से आया; “पुश्तैनी संग्रह” बिना किसी ब्योरे के एक टाल-मटोल है।',
          'और सबसे स्पष्ट: उसी विक्रेता के पास वही “दुर्लभ” सिक्का कई नग हों। सचमुच दुर्लभ वस्तु एक होती है, दस नहीं।',
        ],
        pEn: [
          'Listings of fake coins can often be identified from the language alone, before you even look at the photograph.',
          '“Rare”, “extremely rare”, “museum quality” — these words are used without any reference and prove nothing at all.',
          'The absence of provenance is a large signal. An honest seller says where the coin came from; “ancestral collection” without any detail is an evasion.',
          'And the clearest of all: the same seller holding several examples of the same “rare” coin. A genuinely rare object exists once, not ten times.',
        ],
      },
      {
        hHi: 'प्रतिकृति जो हाथ बदलते-बदलते “असली” हो जाती है',
        hEn: 'The replica that becomes “genuine” as it changes hands',
        pHi: [
          'यह एक ऐसी समस्या है जिसकी शुरुआत में कोई बेईमानी नहीं होती, और इसीलिए वह इतनी व्यापक है।',
          'संग्रहालय और शैक्षिक संस्थाएँ प्रतिकृतियाँ बनाती हैं, और वे प्रायः “COPY” अंकित करके बेची जाती हैं। कुछ सजावटी प्रतिकृतियाँ भी बनती हैं।',
          'समस्या तब शुरू होती है जब वह वस्तु दूसरे, तीसरे हाथ में जाती है। हर हस्तांतरण में संदर्भ खोता है, और अंततः कोई उसे “दादाजी का पुराना सिक्का” समझकर बेच देता है।',
          'इसीलिए किनारे और सतह की जाँच ज़रूरी है, चाहे बेचने वाला कितना भी ईमानदार लगे। सवाल उसकी नीयत का नहीं, वस्तु के इतिहास का है।',
        ],
        pEn: [
          'This is a problem that begins with no dishonesty at all, which is exactly why it is so widespread.',
          'Museums and educational bodies make replicas, usually sold marked “COPY”. Decorative reproductions are made as well.',
          'The trouble begins when the object passes to a second and third owner. Context is lost at every transfer, and eventually somebody sells it believing it to be grandfather’s old coin.',
          'This is why checking the edge and surface matters however honest the seller seems. The question is not about their intentions but about the object’s history.',
        ],
      },
      {
        hHi: 'चार जाँचें, क्रम में',
        hEn: 'Four checks, in order',
        pHi: [
          'पहली — वज़न। हर मानक सिक्के का वज़न प्रकाशित है, और एक सस्ता डिजिटल तराज़ू अधिकांश नक़लों को यहीं पकड़ लेता है।',
          'दूसरी — किनारा। ढली हुई नक़ल का किनारा चिकना और गोल होता है, और धारीदार किनारे पर धारियाँ उथली या असमान। असली ठोंका हुआ सिक्का यहाँ तीखा होता है।',
          'तीसरी — सतह, दस गुना आवर्धन के लूप से। ढलाई छोटे बुलबुले जैसे गड्ढे छोड़ती है, और अक्षरों के किनारे धुँधले लगते हैं।',
          'चौथी — तुलना। संदिग्ध सिक्के को उसी किस्म के असली सिक्के के साथ रखिए। जालसाज़ बड़ी तस्वीर सही बना लेते हैं और छोटे ब्योरों पर पकड़े जाते हैं।',
        ],
        pEn: [
          'First, weight. The standard weight of every coin is published, and a cheap digital scale catches most forgeries right here.',
          'Second, the edge. A cast copy has a smooth rounded edge, and where the edge is reeded the grooves are shallow or uneven. A genuine struck coin is sharp here.',
          'Third, the surface under a ten-times loupe. Casting leaves small bubble-like pits, and the edges of the letters look blurred.',
          'Fourth, comparison. Place the suspect coin beside a genuine example of the same type. Forgers get the large picture right and are caught on the small details.',
        ],
      },
      {
        hHi: 'ग़लत ख़रीद हो चुकी हो तो',
        hEn: 'If you have already bought a fake',
        pHi: [
          'सबसे पहले, इसे व्यक्तिगत असफलता मत मानिए। लगभग हर अनुभवी संग्राहक ने शुरुआत में कम से कम एक नक़ली सिक्का ख़रीदा है।',
          'यदि ख़रीद हाल की है और विक्रेता प्रतिष्ठित है, तो उससे संपर्क कीजिए। एक अच्छा डीलर वापसी स्वीकार करता है, क्योंकि उसकी साख उस एक सौदे से बड़ी है।',
          'यदि वापसी संभव न हो, तो सिक्के को फेंकिए मत। उस पर “COPY” लिखकर या अलग रखकर उसे संदर्भ-नमूने के रूप में रखिए — असली से तुलना करने के लिए वह उपयोगी है।',
          'और जो कभी नहीं करना है: उसे आगे किसी को असली बताकर बेचना। यह आपका नुक़सान किसी और पर डालना है, और यही वह व्यवहार है जिससे यह पूरी समस्या बनी रहती है।',
        ],
        pEn: [
          'First, do not treat it as a personal failure. Nearly every experienced collector bought at least one fake early on.',
          'If the purchase is recent and the seller reputable, contact them. A good dealer accepts a return, because their reputation is larger than any single sale.',
          'If a return is not possible, do not throw the coin away. Mark it “COPY” or keep it separately as a reference piece — it is useful for comparison against genuine examples.',
          'And what must never be done: selling it on as genuine. That is passing your loss to somebody else, and it is exactly the behaviour that keeps the whole problem alive.',
        ],
      },
      {
        hHi: 'सबसे बड़ी सुरक्षा: स्रोत',
        hEn: 'The greatest protection: the source',
        pHi: [
          'सारी तकनीकी जाँचों से ऊपर एक चीज़ है, और वह है उससे ख़रीदना जिसकी साख आपसे बड़ी है।',
          'एक स्थापित डीलर की साख वर्षों में बनी है और एक नक़ली सिक्के से कहीं ज़्यादा क़ीमती है। उसे जोखिम में डालना उसके लिए घाटे का सौदा है।',
          'संग्राहक-समितियाँ इसी कारण उपयोगी हैं। वहाँ लोग एक-दूसरे को जानते हैं, और जो बेईमानी करता है वह जल्दी पहचाना जाता है।',
          'यह सुरक्षा मुफ़्त नहीं है — प्रतिष्ठित विक्रेता का दाम अक्सर थोड़ा ऊपर रहता है। पर वह अंतर एक ग़लत ख़रीद की तुलना में कुछ भी नहीं।',
        ],
        pEn: [
          'Above all the technical checks sits one thing: buying from somebody whose reputation is larger than yours.',
          'An established dealer’s standing was built over years and is worth far more than any single fake. Risking it is a bad trade for them.',
          'Collectors’ societies are useful for the same reason. People there know one another, and anybody dishonest is identified quickly.',
          'This protection is not free — a reputable seller’s price is usually somewhat higher. But that difference is nothing beside the cost of one wrong purchase.',
        ],
      },
      {
        hHi: 'कब विशेषज्ञ के पास जाएँ',
        hEn: 'When to go to an expert',
        pHi: [
          'तीन स्थितियों में घर की जाँच पर मत रुकिए। पहली — जब सिक्का महँगा हो। दूसरी — जब वह किसी दुर्लभ किस्म का दावा करता हो, क्योंकि दुर्लभ किस्मों की ही सबसे ज़्यादा नक़ल बनती है।',
          'तीसरी — जब कुछ सही न लग रहा हो पर आप बता न पा रहे हों कि क्या। यह अनुभवी लोगों का सबसे भरोसेमंद संकेत है और इसे नज़रअंदाज़ नहीं करना चाहिए।',
          'ग्रेडिंग सेवा का शुल्क तभी उचित है जब वह सिक्के के अनुमानित मूल्य के एक चौथाई से कम हो। उससे ऊपर हो तो वह ख़र्च समझदारी नहीं।',
          'और सबसे सस्ता विशेषज्ञ अक्सर पास ही होता है: किसी संग्राहक-समिति का वरिष्ठ सदस्य, जो अक्सर मुफ़्त में देख देता है और बदले में केवल आपकी दिलचस्पी चाहता है।',
        ],
        pEn: [
          'In three situations do not stop at home checks. First, when the coin is expensive. Second, when it claims to be a rare variety, because rare varieties attract the most forgery.',
          'Third, when something feels wrong and you cannot say what. That instinct is the most reliable signal experienced people have, and it should not be dismissed.',
          'A grading fee is justified only when it comes to less than about a quarter of the coin’s estimated value. Above that it is not a sensible expense.',
          'And the cheapest expert is often nearby: a senior member of a collectors’ society, who will usually look for free and asks nothing in return but your interest.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'नक़ल सबसे ज़्यादा पर्यटन स्थलों, गुमनाम ऑनलाइन विक्रेताओं, और “परिचित के पुराने संग्रह” में मिलती है — यानी वहाँ जहाँ सतर्कता सबसे कम होती है।',
          'चार जाँचें क्रम से कीजिए: वज़न, किनारा, लूप से सतह, और असली नमूने से तुलना। और सबसे बड़ी सुरक्षा तकनीकी नहीं — वह उससे ख़रीदना है जिसकी साख आपसे बड़ी है।',
        ],
        pEn: [
          'Fakes are found most often at tourist sites, from anonymous online sellers, and in “an old collection belonging to somebody I know” — that is, wherever vigilance is lowest.',
          'Run four checks in order: weight, edge, surface under a loupe, and comparison against a genuine example. And the greatest protection is not technical at all — it is buying from somebody whose reputation is larger than yours.',
        ],
      },
    ],
  },
  {
    slug: 'storing-coins-properly',
    sections: [
      {
        hHi: 'भारत की जलवायु का विशेष मामला',
        hEn: 'The particular problem of the Indian climate',
        pHi: [
          'भंडारण की अधिकांश सलाह ठंडे, सूखे देशों के लिए लिखी गई है, और वह यहाँ सीधे लागू नहीं होती।',
          'भारत की समस्या नमी है, और वह मौसम के साथ नाटकीय रूप से बदलती है। मानसून के महीनों में सापेक्ष आर्द्रता अस्सी प्रतिशत से ऊपर चली जाती है — यानी वह स्तर जिस पर धातु पर सक्रिय क्षरण शुरू हो सकता है।',
          'पेशेवर लक्ष्य लगभग चालीस प्रतिशत है, और यह अंतर मामूली नहीं। एक बंद डिब्बे में सिलिका जेल के दो-तीन पाउच इस अंतर को पाट देते हैं।',
          'पाउच को हर मानसून से पहले बदलिए या धूप में सुखाकर दोबारा इस्तेमाल कीजिए। यह साल में एक बार का काम है और वह पूरे संग्रह की रक्षा करता है।',
        ],
        pEn: [
          'Most storage advice was written for cold, dry countries and does not apply directly here.',
          'India’s problem is humidity, and it varies dramatically with the season. Through the monsoon months relative humidity climbs above eighty per cent — the level at which active corrosion can begin on metal.',
          'The professional target is around forty per cent, and that difference is not small. Two or three silica gel sachets in a closed box bridge it.',
          'Replace the sachets before each monsoon, or dry them in the sun and reuse them. It is a once-a-year job and it protects the entire collection.',
        ],
      },
      {
        hHi: 'तटीय और भीतरी इलाक़े',
        hEn: 'Coastal and inland',
        pHi: [
          'एक भेद जो शायद ही कभी बताया जाता है: समुद्र के पास रहने वाले संग्राहक की समस्या अलग है।',
          'तटीय हवा में नमक के कण होते हैं, और नमक धातु पर क्षरण को कई गुना तेज़ करता है। मुंबई, चेन्नई, कोच्चि या विशाखापत्तनम में रखा संग्रह भीतरी इलाक़े की तुलना में ज़्यादा जोखिम में है।',
          'वहाँ दो अतिरिक्त उपाय उचित हैं: वायुरोधी डिब्बा — केवल ढक्कन वाला नहीं, बल्कि गैस्केट वाला — और सिलिका जेल की अधिक मात्रा।',
          'खिड़की के पास या समुद्र की ओर की दीवार से लगी अलमारी में संग्रह मत रखिए। घर के भीतरी हिस्से की अलमारी हमेशा बेहतर है।',
        ],
        pEn: [
          'One distinction that is rarely mentioned: the collector living near the sea has a different problem.',
          'Coastal air carries salt particles, and salt accelerates corrosion on metal several times over. A collection kept in Mumbai, Chennai, Kochi or Visakhapatnam is at greater risk than one inland.',
          'Two additional measures are appropriate there: an airtight box — one with a gasket, not merely a lid — and a larger quantity of silica gel.',
          'Do not keep the collection near a window or in a cupboard against a seaward wall. An interior cupboard is always better.',
        ],
      },
      {
        hHi: 'तीन बजट, तीन समाधान',
        hEn: 'Three budgets, three solutions',
        pHi: [
          'भंडारण की सलाह अक्सर महँगी लगती है, इसलिए इसे तीन स्तरों में रखना उपयोगी है।',
          'शून्य बजट: पुरानी पीवीसी थैलियाँ हटाइए और सिक्कों को साधारण काग़ज़ में अलग-अलग लपेटकर एक टिन के डिब्बे में रखिए, साथ में चावल की एक पोटली नमी सोखने के लिए। यह आदर्श नहीं, पर पीवीसी से बहुत बेहतर है।',
          'कम बजट: अम्ल-रहित 2×2 काग़ज़ के लिफ़ाफ़े, एक प्लास्टिक का वायुरोधी डिब्बा, और सिलिका जेल के पाउच। कुछ सौ रुपये में पूरा संग्रह सुरक्षित।',
          'आदर्श: माइलर के फ़्लिप या संग्राहकों वाला एल्बम, गैस्केट वाला डिब्बा, आर्द्रता-मापक, और एक अलग सूची। यह कुछ हज़ार का मामला है और दशकों चलता है।',
        ],
        pEn: [
          'Storage advice often sounds expensive, so it helps to set it out at three levels.',
          'Zero budget: remove old PVC sleeves and wrap the coins individually in plain paper inside a tin, with a pouch of rice to absorb moisture. Not ideal, and far better than PVC.',
          'Low budget: acid-free two-inch paper envelopes, an airtight plastic box, and silica gel sachets. The whole collection protected for a few hundred rupees.',
          'Ideal: Mylar flips or a collectors’ album, a gasketed box, a hygrometer, and a separate inventory. A few thousand rupees, and it lasts for decades.',
        ],
      },
      {
        hHi: 'वे ग़लतियाँ जो सुरक्षित दिखती हैं',
        hEn: 'The mistakes that look safe',
        pHi: [
          'कुछ भंडारण-विधियाँ देखभाल जैसी लगती हैं और असल में नुक़सान करती हैं। यही सबसे ख़तरनाक श्रेणी है।',
          'रुई में लपेटना — रुई नमी सोखती है और उसे धातु के पास रोके रखती है। यह ठीक उलटा काम करता है।',
          'कसकर बंद प्लास्टिक की थैली बिना सिलिका जेल के — भीतर की नमी बाहर नहीं निकल पाती, और वह एक छोटा नम कक्ष बन जाता है।',
          'सिक्कों को एक साथ ढेर में रखना, चाहे डिब्बा कितना भी अच्छा हो। धातु धातु से रगड़ती है, और हर हलचल नई ख़रोंच छोड़ती है। हर सिक्का अलग रहना चाहिए।',
          'और लकड़ी की ट्रे बिना अस्तर के — कुछ लकड़ियाँ, ख़ासकर ओक, समय के साथ अम्लीय वाष्प छोड़ती हैं जो धातु पर असर डालती हैं।',
        ],
        pEn: [
          'Some storage methods look like care and in fact do harm. This is the most dangerous category.',
          'Wrapping in cotton wool — cotton absorbs moisture and holds it against the metal. It does exactly the opposite of what is wanted.',
          'A tightly sealed plastic bag with no silica gel — the moisture inside cannot escape, and it becomes a small damp chamber.',
          'Keeping coins heaped together, however good the box. Metal rubs against metal, and every movement leaves a new scratch. Each coin should sit separately.',
          'And an unlined wooden tray — some timbers, oak in particular, release acidic vapours over time that act on metal.',
        ],
      },
      {
        hHi: 'विरासत में मिला संग्रह: पहले क्या करें',
        hEn: 'An inherited collection: what to do first',
        pHi: [
          'यह स्थिति आम है और उसमें क्रम मायने रखता है, क्योंकि पहली कुछ घंटों में की गई ग़लतियाँ स्थायी होती हैं।',
          'पहला क़दम — कुछ मत धोइए, कुछ मत रगड़िए। यह सबसे ज़रूरी बात है और वही सबसे ज़्यादा तोड़ी जाती है।',
          'दूसरा — पीवीसी की पुरानी थैलियाँ तुरंत हटाइए। यदि किसी सिक्के पर हरी चिपचिपी परत है, तो उसे अलग रखिए और विशेषज्ञ को दिखाइए।',
          'तीसरा — सब कुछ एक साफ़ मेज़ पर फैलाकर तस्वीरें लीजिए और एक सूची बनाइए। यह एक शाम का काम है और वह पूरे संग्रह का बीमा है।',
          'चौथा — अस्थायी रूप से भी सही भंडारण में डाल दीजिए। अम्ल-रहित लिफ़ाफ़े और एक सिलिका पाउच वाला डिब्बा उसी दिन तैयार किया जा सकता है।',
        ],
        pEn: [
          'This situation is common and the order matters, because mistakes made in the first few hours are permanent.',
          'Step one — wash nothing, rub nothing. That is the most important point and the one most often broken.',
          'Step two — remove old PVC sleeves immediately. If any coin carries a green sticky film, set it aside and show it to a specialist.',
          'Step three — spread everything on a clean table, photograph it, and make a list. That is an evening’s work and it is insurance for the whole collection.',
          'Step four — get it into proper storage even temporarily. Acid-free envelopes and a box with a silica sachet can be assembled the same day.',
        ],
      },
      {
        hHi: 'सुरक्षा और बीमा',
        hEn: 'Security and insurance',
        pHi: [
          'यह पहलू अक्सर छूट जाता है, और महँगे संग्रह के लिए वह भंडारण जितना ही ज़रूरी है।',
          'पहला नियम: पूरा संग्रह एक ही जगह मत रखिए, ख़ासकर यदि उसमें कुछ मूल्यवान सिक्के हों। बैंक लॉकर उन कुछ के लिए उपयुक्त है — पर याद रखिए कि लॉकर में नमी नियंत्रित नहीं होती, इसलिए वहाँ भी सिलिका जेल चाहिए।',
          'दूसरा: संग्रह के बारे में सार्वजनिक रूप से चर्चा मत कीजिए, और सोशल मीडिया पर तस्वीरें डालते समय स्थान की जानकारी हटा दीजिए।',
          'तीसरा: बीमा के लिए सूची और तस्वीरें अनिवार्य हैं। बिना दस्तावेज़ के किसी भी दावे का आधार नहीं बनता, और यही वह जगह है जहाँ अधिकांश लोग तैयार नहीं होते।',
        ],
        pEn: [
          'This aspect is often overlooked, and for a valuable collection it matters as much as storage.',
          'The first rule: do not keep the whole collection in one place, particularly if it contains valuable pieces. A bank locker suits those few — but remember that humidity is not controlled in a locker, so silica gel is needed there too.',
          'Second: do not discuss the collection publicly, and strip location data from photographs before posting them.',
          'Third: an inventory and photographs are mandatory for insurance. Without documentation no claim has a basis, and this is exactly where most people are unprepared.',
        ],
      },
      {
        hHi: 'यात्रा और स्थानांतरण',
        hEn: 'Travel and moving house',
        pHi: [
          'संग्रह को हिलाना उन कुछ क्षणों में से है जब सबसे ज़्यादा नुक़सान होता है, और थोड़ी तैयारी उसे रोक देती है।',
          'हर सिक्का अपने फ़्लिप या लिफ़ाफ़े में रहे, और डिब्बे में कोई ख़ाली जगह न बचे — हिलने की जगह ही ख़रोंच का कारण है।',
          'डिब्बे को कभी सामान के साथ मत भेजिए। हवाई यात्रा में उसे हाथ के सामान में रखिए, और सड़क यात्रा में गोद या सीट पर, डिक्की में नहीं जहाँ तापमान चरम पर जाता है।',
          'और स्थानांतरण से पहले सूची अद्यतन कर लीजिए। यदि कुछ खो जाए, तो वही एक काग़ज़ है जो बताएगा कि क्या खोया।',
        ],
        pEn: [
          'Moving a collection is one of the few moments when most damage occurs, and a little preparation prevents it.',
          'Keep every coin in its flip or envelope, and leave no empty space in the box — room to move is what causes the scratches.',
          'Never send the box with the luggage. On a flight keep it in hand baggage, and on a road journey on your lap or the seat rather than in the boot, where temperatures reach extremes.',
          'And update the inventory before moving. If something goes missing, that sheet of paper is the only thing that will tell you what.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'भारत में नमी सबसे बड़ा शत्रु है, और मानसून में वह सक्रिय क्षरण की सीमा पार कर जाती है। एक बंद डिब्बा और सिलिका जेल इस पूरी समस्या का नब्बे प्रतिशत हल कर देते हैं।',
          'हर सिक्का अलग रहे, पीवीसी कभी नहीं, रुई कभी नहीं, और डिब्बा घर के भीतरी हिस्से में। शून्य बजट में भी यह सब संभव है — काग़ज़, टिन का डिब्बा, और चावल की एक पोटली।',
        ],
        pEn: [
          'In India humidity is the greatest enemy, and through the monsoon it crosses the threshold at which active corrosion begins. A closed box and silica gel solve ninety per cent of the whole problem.',
          'Keep every coin separate, never PVC, never cotton wool, and keep the box in an interior part of the house. All of this is possible even on no budget at all — paper, a tin, and a pouch of rice.',
        ],
      },
    ],
  },
  {
    slug: 'how-coins-are-valued',
    sections: [
      {
        hHi: 'ढलाई-संख्या और बची हुई संख्या',
        hEn: 'Mintage and survival',
        pHi: [
          'दुर्लभता को समझने के लिए दो अलग संख्याएँ जाननी पड़ती हैं, और उन्हें आपस में गड्डमड्ड करना सबसे आम ग़लती है।',
          'पहली है ढलाई-संख्या — उस वर्ष कितने सिक्के बने। यह आँकड़ा प्रकाशित है और कैटलॉग में दर्ज।',
          'दूसरी है बची हुई संख्या — आज कितने मौजूद हैं। यह कहीं दर्ज नहीं और केवल अनुमान लगाया जा सकता है, पर असल में वही दाम तय करती है।',
          'दोनों में बड़ा अंतर हो सकता है। चाँदी के सिक्के गलाए गए जब धातु का दाम चढ़ा; ताँबे के सिक्के फेंक दिए गए जब वे बेकार हो गए। इसीलिए भारी ढलाई वाला सिक्का भी दुर्लभ हो सकता है।',
        ],
        pEn: [
          'Understanding rarity requires knowing two separate numbers, and confusing them is the commonest mistake there is.',
          'The first is mintage — how many coins were struck that year. That figure is published and recorded in the catalogues.',
          'The second is survival — how many exist today. This is recorded nowhere and can only be estimated, and yet it is what actually sets the price.',
          'The gap between them can be large. Silver coins were melted when the metal price rose; copper coins were discarded once they became worthless. A heavily minted coin can therefore still be scarce.',
        ],
      },
      {
        hHi: 'दशा: सबसे बड़ा अकेला कारक',
        hEn: 'Condition: the single largest factor',
        pHi: [
          'यदि केवल एक कारक चुनना हो, तो वह दशा है। एक ही सिक्का, एक ही वर्ष, एक ही टकसाल — पर दो अलग दशाओं में दाम कई गुना अलग हो सकते हैं।',
          'कारण आपूर्ति में है। किसी वर्ष के लाखों सिक्के बचे हो सकते हैं, पर उनमें से अनछुई दशा वाले कुछ सौ ही होंगे, क्योंकि किसी ने उन्हें सँभालकर नहीं रखा।',
          'इसीलिए ऊँची दशा में दुर्लभता अलग तरीक़े से काम करती है: सिक्का आम है, पर उस दशा में वही सिक्का दुर्लभ है।',
          'और यही कारण है कि सफ़ाई इतना बड़ा नुक़सान करती है — वह सिक्के को दुर्लभ श्रेणी से निकालकर आम श्रेणी में डाल देती है, एक ही क्षण में।',
        ],
        pEn: [
          'If only one factor could be chosen, it is condition. The same coin, the same year, the same mint — yet prices in two different grades can differ several times over.',
          'The reason lies in supply. Lakhs of coins from a given year may survive, but only a few hundred of them in untouched condition, because nobody put them away.',
          'This is why rarity works differently at high grade: the coin is common, but that coin in that condition is rare.',
          'And it is why cleaning does such damage — it moves a coin out of the scarce category and into the common one, in a single moment.',
        ],
      },
      {
        hHi: 'माँग: वह कारक जो बदलता रहता है',
        hEn: 'Demand: the factor that keeps changing',
        pHi: [
          'दुर्लभता और दशा वस्तु के गुण हैं; माँग बाहर की चीज़ है, और वही सबसे अप्रत्याशित है।',
          'कोई सिक्का बेहद दुर्लभ हो सकता है और फिर भी सस्ता, यदि उसे इकट्ठा करने वाले लोग कम हैं। इसके उलट एक आम सिक्का महँगा हो सकता है क्योंकि हज़ारों लोग उसे चाहते हैं।',
          'माँग कई चीज़ों से बनती है: ऐतिहासिक महत्व, कहानी की अपील, सौंदर्य, और कभी-कभी केवल फ़ैशन। किसी फ़िल्म या समाचार से भी किसी विषय की माँग अचानक बढ़ सकती है।',
          'इसका व्यावहारिक अर्थ यह है कि दाम स्थिर नहीं हैं। पाँच साल पुराना कैटलॉग दिशा बता सकता है, संख्या नहीं — और यही कारण है कि बीते नीलामी-नतीजे देखना ज़रूरी है।',
        ],
        pEn: [
          'Rarity and condition are properties of the object; demand comes from outside, and it is the least predictable of the four.',
          'A coin can be extremely rare and still cheap, if few people collect it. Conversely a common coin can be expensive because thousands of people want it.',
          'Demand is built from several things: historical importance, the appeal of the story, beauty, and sometimes simply fashion. A film or a news item can raise demand for a subject overnight.',
          'The practical consequence is that prices are not fixed. A five-year-old catalogue tells you the direction but not the number — which is why looking at recent auction results matters.',
        ],
      },
      {
        hHi: 'प्रामाणिकता: वह द्वार जिससे बाक़ी सब गुज़रता है',
        hEn: 'Authenticity: the gate everything else passes through',
        pHi: [
          'यह चौथा कारक बाक़ी तीनों से अलग है, क्योंकि यह गुणा नहीं करता — यह शून्य से गुणा करता है।',
          'एक नक़ली सिक्का चाहे कितना भी दुर्लभ प्रकार दिखाए और कितनी भी अच्छी दशा में हो, उसका संग्रह-मूल्य शून्य है। यह घटाव नहीं, समाप्ति है।',
          'इसीलिए महँगे सिक्कों में प्रमाणन का मूल्य है। वह अनिश्चितता हटाता है, और अनिश्चितता ही वह चीज़ है जो दाम को नीचे खींचती है।',
          'और इसीलिए स्रोत मायने रखता है। एक ज्ञात संग्रह से आया सिक्का, जिसका इतिहास दर्ज हो, उसी सिक्के से ऊपर बैठता है जो कहीं से आया।',
        ],
        pEn: [
          'The fourth factor differs from the other three, because it does not multiply — it multiplies by zero.',
          'A fake coin, however rare the type it imitates and however fine its condition, has a collecting value of nil. That is not a reduction but an extinction.',
          'This is why certification has value on expensive coins. It removes uncertainty, and uncertainty is exactly what drags a price down.',
          'And it is why provenance matters. A coin from a known collection with a recorded history sits above the same coin that came from nowhere in particular.',
        ],
      },
      {
        hHi: '“पुराना इसलिए महँगा” क्यों ग़लत है',
        hEn: 'Why “old therefore expensive” is wrong',
        pHi: [
          'यह इस पूरे विषय की सबसे व्यापक ग़लतफ़हमी है, और उसे एक तुलना से तोड़ा जा सकता है।',
          'ढाई हज़ार साल पुराना आहत सिक्का कुछ हज़ार रुपये में मिल जाता है, क्योंकि वे भारी संख्या में ढले, चाँदी के होने के कारण गलाए नहीं गए, और आज भी भंडार मिलते रहते हैं।',
          'वहीं तीस साल पुराना एक असली ढलाई-दोष वाला सिक्का उससे ज़्यादा दाम पा सकता है, क्योंकि वैसा दोष शायद कुछ ही सिक्कों में हुआ।',
          'उम्र दुर्लभता का पर्याय नहीं है। यह वाक्य याद रखने लायक़ है, क्योंकि हर धोखाधड़ी की शुरुआत इसी ग़लतफ़हमी से होती है।',
        ],
        pEn: [
          'This is the most widespread misconception in the whole subject, and one comparison breaks it.',
          'A punch-marked coin two and a half thousand years old costs a few thousand rupees, because they were struck in enormous numbers, being silver were not melted, and hoards continue to surface.',
          'Meanwhile a thirty-year-old coin carrying a genuine striking error can fetch more, because that error perhaps occurred on only a handful of pieces.',
          'Age is not a synonym for rarity. That sentence is worth remembering, because every fraud in this field begins with the opposite assumption.',
        ],
      },
      {
        hHi: 'माँगी गई क़ीमत और बिकी हुई क़ीमत',
        hEn: 'Asking price and realised price',
        pHi: [
          'यह भेद अधिकांश निराशा की जड़ है, और उसे समझ लेना सबसे उपयोगी व्यावहारिक कौशल है।',
          'किसी वेबसाइट पर कोई सिक्का पचास हज़ार में सूचीबद्ध होने का अर्थ यह नहीं कि वह पचास हज़ार का है। इसका अर्थ केवल यह है कि किसी ने उतना माँगा।',
          'भरोसेमंद स्रोत वे हैं जो बीते नतीजे दर्ज करते हैं — प्रतिष्ठित नीलामी घरों के पुराने कैटलॉग और परिणाम, जहाँ लिखा होता है कि हथौड़ा किस दाम पर गिरा।',
          'और तुलना करते समय ग्रेड का मिलान अनिवार्य है। आपका VF सिक्का किसी UNC नमूने के दाम से नहीं तौला जा सकता; वह अंतर कई गुना का होता है।',
        ],
        pEn: [
          'This distinction is the root of most disappointment, and grasping it is the single most useful practical skill.',
          'A coin listed at fifty thousand on a website does not mean a coin worth fifty thousand. It means only that somebody asked for that.',
          'The reliable sources are those recording past results — the old catalogues and results of reputable auction houses, which state the price at which the hammer fell.',
          'And when comparing, matching the grade is mandatory. Your VF coin cannot be weighed against the price of a UNC example; that difference runs to several multiples.',
        ],
      },
      {
        hHi: 'भ्रामक दावों से बचाव',
        hEn: 'Guarding against misleading claims',
        pHi: [
          'चारों कारकों को जान लेने के बाद अधिकांश झूठे दावे अपने आप गिर जाते हैं, क्योंकि वे किसी न किसी कारक की अनदेखी करते हैं।',
          '“यह सिक्का सौ साल पुराना है इसलिए लाखों का है” — उम्र को दुर्लभता समझने की ग़लती। “यह चमकदार है इसलिए क़ीमती है” — सफ़ाई को दशा समझने की ग़लती।',
          '“सीमित संस्करण” जिसकी सीमा कहीं दर्ज न हो — दुर्लभता का दावा बिना संख्या के। और “गारंटीड रिटर्न” — माँग का वादा, जो कोई नहीं कर सकता।',
          'और वह नियम जो हर सौदे पर लागू होता है: पैसा ख़रीदार से विक्रेता की ओर बहता है। जो आपसे सिक्का ख़रीदने से पहले शुल्क माँगे, वह ख़रीदार नहीं है।',
        ],
        pEn: [
          'Once the four factors are understood, most false claims collapse on their own, because each ignores one of them.',
          '“This coin is a hundred years old so it is worth lakhs” — mistaking age for rarity. “It is shiny so it is valuable” — mistaking cleaning for condition.',
          '“Limited edition” with the limit recorded nowhere — a claim of rarity without a number. And “guaranteed returns” — a promise about demand, which nobody can make.',
          'And the rule that applies to every transaction: money flows from the buyer to the seller. Anybody asking you for a fee before buying your coin is not a buyer.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'चार कारक: दुर्लभता (ढलाई नहीं, बची हुई संख्या), दशा (सबसे बड़ा अकेला कारक), माँग (सबसे अप्रत्याशित), और प्रामाणिकता (जो बाक़ी सबको शून्य कर सकती है)।',
          'उम्र इनमें नहीं है। और दाम जानने का एकमात्र भरोसेमंद तरीक़ा बीते नीलामी-नतीजे देखना है, वह भी अपनी दशा से मिलान करके।',
        ],
        pEn: [
          'Four factors: rarity (not mintage but survival), condition (the largest single factor), demand (the least predictable), and authenticity (which can reduce all the others to zero).',
          'Age is not among them. And the only dependable way to learn a price is to look at past auction results, matched against the grade you actually hold.',
        ],
      },
    ],
  },
  {
    slug: 'selling-old-coins-safely',
    sections: [
      {
        hHi: 'बेचने से पहले तीन प्रश्न',
        hEn: 'Three questions before selling',
        pHi: [
          'पहला — क्या आपको सचमुच बेचना है? यदि संग्रह छोटा है और उसकी बाज़ारू क़ीमत कुछ हज़ार रुपये है, तो उसे व्यवस्थित करके रख लेना अक्सर बेहतर फ़ैसला है।',
          'दूसरा — क्या आप जानते हैं कि आपके पास क्या है? बिना जाने बेचना उस स्थिति की जड़ है जिसमें अच्छे सिक्के कौड़ियों के मोल चले जाते हैं।',
          'तीसरा — क्या जल्दी है? जल्दी ही वह चीज़ है जिसका फ़ायदा हर ख़रीदार उठाता है, और वही सबसे कम दाम दिलाती है।',
          'इन तीनों का ईमानदार उत्तर तय कर देता है कि आपको कौन-सा रास्ता चुनना चाहिए और किस दाम की उम्मीद रखनी चाहिए।',
        ],
        pEn: [
          'First — do you actually need to sell? If the collection is small and its market value runs to a few thousand rupees, organising it and keeping it is often the better decision.',
          'Second — do you know what you hold? Selling without knowing is the root of every situation in which good coins go for a pittance.',
          'Third — are you in a hurry? Hurry is the thing every buyer takes advantage of, and it produces the lowest price.',
          'Honest answers to those three determine which route you should choose and what price you should expect.',
        ],
      },
      {
        hHi: 'तैयारी: सूची और तस्वीरें',
        hEn: 'Preparation: the list and the photographs',
        pHi: [
          'एक सूची बनाइए जिसमें हर सिक्के का मूल्यवर्ग, वर्ष, टकसाल-चिह्न, धातु और मोटी दशा दर्ज हो। यह मोल-भाव में आपकी सबसे बड़ी ताक़त है।',
          'तस्वीरें लीजिए — दोनों तरफ़ की, दिन की रोशनी में, बिना फ़्लैश, सादे गहरे रंग की पृष्ठभूमि पर, और सिक्का फ़्रेम में भरा हुआ।',
          'धुँधली तस्वीर सबसे बड़ी वजह है कि गंभीर ख़रीदार जवाब नहीं देते। एक अच्छी तस्वीर लेना पाँच मिनट का काम है और वह सीधे दाम पर असर डालता है।',
          'और सबसे ज़रूरी: साफ़ मत कीजिए। यह सलाह यहाँ इसलिए दोहरानी पड़ती है क्योंकि बेचने से ठीक पहले यह ग़लती सबसे ज़्यादा की जाती है।',
        ],
        pEn: [
          'Make a list recording each coin’s denomination, year, mint mark, metal and approximate condition. That list is your greatest strength in a negotiation.',
          'Take photographs — both faces, in daylight, without flash, against a plain dark background, with the coin filling the frame.',
          'Blurred photographs are the single biggest reason serious buyers never reply. Taking a good one is five minutes of work and it affects the price directly.',
          'And most important: do not clean anything. This advice has to be repeated here because the mistake is made most often in the days just before selling.',
        ],
      },
      {
        hHi: 'मोल-भाव कैसे करें',
        hEn: 'How to negotiate',
        pHi: [
          'पहला नियम: पहले दाम मत बताइए। पूछिए कि वे क्या दे सकते हैं। जो पहले संख्या बोलता है वह अक्सर पूरे सौदे का दायरा तय कर देता है — अपने नुक़सान में।',
          'दूसरा: कम तवज्जो वाला जवाब सीखिए। यदि प्रस्ताव कम है, तो नाराज़ मत होइए — बस पूछिए कि यह दाम किस आधार पर बना। एक अच्छा डीलर कारण बता देगा, और वह जानकारी अपने आप में मूल्यवान है।',
          'तीसरा: चलने के लिए तैयार रहिए। यही अकेली चीज़ है जो मोल-भाव में सचमुच शक्ति देती है, और वह तभी संभव है जब आपको जल्दी न हो।',
          'चौथा: एक साथ सब मत बेचिए। पहले एक या दो सिक्के बेचकर बाज़ार का अंदाज़ा लगाइए। यह जानकारी बाक़ी संग्रह के लिए बेहतर दाम दिला देती है।',
        ],
        pEn: [
          'First rule: do not name a price first. Ask what they can offer. Whoever states a number first frequently sets the range for the whole negotiation — to their own disadvantage.',
          'Second: learn a low-key response. If an offer is low, do not take offence — simply ask what the price is based on. A good dealer will explain, and that information is valuable in itself.',
          'Third: be willing to walk away. That is the only thing that gives real power in a negotiation, and it is only possible if you are not in a hurry.',
          'Fourth: do not sell everything at once. Sell one or two coins first and learn what the market pays. That knowledge earns a better price for the rest.',
        ],
      },
      {
        hHi: 'ऑनलाइन बेचते समय',
        hEn: 'When selling online',
        pHi: [
          'ऑनलाइन बाज़ार असली अवसर देता है और असली जोखिम भी, और तीन एहतियात अधिकांश समस्या हल कर देते हैं।',
          'पहला — भुगतान पहले, भेजना बाद में, और भुगतान किसी ऐसे माध्यम से जिसका रिकॉर्ड रहे। नक़द-ऑन-डिलीवरी में विवाद का कोई सहारा नहीं बचता।',
          'दूसरा — ट्रैकिंग वाली कूरियर और बीमा, चाहे वस्तु छोटी हो। और भेजने से पहले पैकिंग की तस्वीर तथा वीडियो बना लीजिए।',
          'तीसरा — “मैं ज़्यादा दे रहा हूँ, बस आप पहले यह शुल्क भर दीजिए” वाला हर प्रस्ताव ठुकरा दीजिए। पैसा ख़रीदार से विक्रेता की ओर बहता है, कभी उल्टा नहीं।',
        ],
        pEn: [
          'The online market offers real opportunity and real risk, and three precautions resolve most of the problem.',
          'First — payment before dispatch, through a channel that leaves a record. Cash on delivery leaves you no recourse in a dispute.',
          'Second — a tracked courier and insurance, however small the item. And photograph or film the packing before it goes.',
          'Third — refuse every offer of the form “I will pay more, you just cover this fee first”. Money flows from the buyer to the seller, never the other way.',
        ],
      },
      {
        hHi: 'विरासत का संग्रह बेचना',
        hEn: 'Selling an inherited collection',
        pHi: [
          'यह अलग स्थिति है और उसमें दो अतिरिक्त सावधानियाँ लागू होती हैं।',
          'पहली — परिवार में सहमति। संग्रह अक्सर कई लोगों की भावनात्मक संपत्ति होता है, और बेचने से पहले बात कर लेना बाद के विवाद से कहीं सस्ता है।',
          'दूसरी — जल्दी न करना। विरासत के संग्रह अक्सर किसी की मृत्यु के तुरंत बाद बेचे जाते हैं, जब कोई सोचने की स्थिति में नहीं होता, और यही वह क्षण है जब सबसे कम दाम मिलता है।',
          'व्यावहारिक सुझाव: संग्रह को छह महीने रख लीजिए। इस बीच सूची बनाइए, तस्वीरें लीजिए, और थोड़ा पढ़ लीजिए। छह महीने की देरी अक्सर दाम को दोगुना कर देती है।',
        ],
        pEn: [
          'This is a different situation and two additional cautions apply.',
          'First — agreement within the family. A collection is frequently the emotional property of several people, and talking before selling is far cheaper than the dispute afterwards.',
          'Second — not rushing. Inherited collections are often sold immediately after a death, when nobody is in a state to think, and that is precisely when the lowest prices are obtained.',
          'A practical suggestion: hold the collection for six months. During that time make the list, take the photographs, and read a little. A six-month delay frequently doubles the price.',
        ],
      },
      {
        hHi: 'दस्तावेज़ रखना',
        hEn: 'Keeping documentation',
        pHi: [
          'यह पहलू अक्सर छूट जाता है और बड़े सौदों में महत्वपूर्ण हो जाता है।',
          'हर बिक्री का रिकॉर्ड रखिए — क्या बेचा, किसे, कब, किस दाम पर, और भुगतान कैसे आया। यह आपकी अपनी सुरक्षा है यदि बाद में कोई प्रश्न उठे।',
          'ख़रीदार से भी एक साधारण रसीद माँगना उचित है। प्रतिष्ठित डीलर इसे सामान्य मानते हैं और देने में हिचकते नहीं।',
          'और यदि रक़म बड़ी है, तो अपने कर-सलाहकार से पूछ लीजिए कि क्या घोषित करना है। यह लेख कर-सलाह नहीं दे सकता, और यह सवाल पूछना ही सही क़दम है।',
        ],
        pEn: [
          'This aspect is often overlooked and becomes important in larger transactions.',
          'Keep a record of every sale — what was sold, to whom, when, at what price, and how payment arrived. That is your own protection if a question arises later.',
          'It is also reasonable to ask the buyer for a simple receipt. Reputable dealers treat this as normal and do not hesitate.',
          'And if the amount is substantial, ask your tax adviser what needs declaring. This article cannot give tax advice, and asking the question is itself the right step.',
        ],
      },
      {
        hHi: 'कब बेचना सबसे अच्छा है',
        hEn: 'When it is best to sell',
        pHi: [
          'कोई जादुई समय नहीं है, और जो कोई ऐसा दावा करे उससे सावधान रहिए। पर कुछ व्यावहारिक बातें मायने रखती हैं।',
          'नीलामी घर की तारीख़ें तय होती हैं, और अच्छी नीलामी में सूचीबद्ध होने के लिए महीनों पहले सामग्री देनी पड़ती है। यदि यह रास्ता चुनना है तो योजना पहले बनानी होगी।',
          'चाँदी और सोने के सिक्कों के लिए धातु की क़ीमत मायने रखती है, क्योंकि वह न्यूनतम सीमा तय करती है। धातु महँगी हो तो वह सीमा ऊपर चली जाती है।',
          'और सबसे बड़ी बात: तब बेचिए जब आपको जल्दी न हो। यह कोई बाज़ार-भविष्यवाणी नहीं, बल्कि मोल-भाव का सीधा गणित है।',
        ],
        pEn: [
          'There is no magic moment, and be wary of anybody who claims otherwise. But a few practical points matter.',
          'Auction houses have fixed dates, and material has to be consigned months in advance to be catalogued for a good sale. If that is the route, it needs planning ahead.',
          'For silver and gold coins the metal price matters, because it sets the floor. When metal is dear the floor rises.',
          'And the largest point: sell when you are not in a hurry. That is not a market prediction but the plain arithmetic of negotiation.',
        ],
      },
      {
        hHi: 'संक्षेप में',
        hEn: 'In short',
        pHi: [
          'पहले जानिए कि आपके पास क्या है, फिर सूची और तस्वीरें बनाइए, और कभी साफ़ मत कीजिए। तीन असली रास्ते हैं: डीलर, नीलामी घर, और संग्राहक-समिति।',
          'मोल-भाव में पहले दाम मत बताइए और चलने के लिए तैयार रहिए। और वह अंतिम नियम जो कभी नहीं बदलता — पैसा ख़रीदार से विक्रेता की ओर बहता है।',
        ],
        pEn: [
          'Know what you hold first, then make the list and the photographs, and never clean anything. Three real routes exist: a dealer, an auction house, and a collectors’ society.',
          'In a negotiation do not name a price first and be willing to walk away. And the final rule that never changes — money flows from the buyer to the seller.',
        ],
      },
    ],
  },
  {
    slug: 'cleaning-coins-warning',
    sections: [
      {
        hHi: 'एक तुलना जो याद रह जाती है',
        hEn: 'A comparison that stays in the mind',
        pHi: [
          'पुराने फ़र्नीचर के बारे में सोचिए। सागौन की एक सदी पुरानी अलमारी पर जो गहरी चमक होती है, उसे कोई सैंडपेपर से नहीं उतारता — वही परत उसका मूल्य है।',
          'सिक्के के साथ यही बात है, और अंतर केवल यह है कि लोग फ़र्नीचर के बारे में यह जानते हैं और सिक्कों के बारे में नहीं।',
        ],
        pEn: [
          'Think of old furniture. Nobody takes sandpaper to the deep patina on a century-old teak cabinet — that surface is precisely where its value lives, and stripping it would turn an antique into a piece of secondhand wood.',
          'The same holds for a coin, and the only difference is that people already understand this about furniture and have not yet been told it about metal. Once the comparison lands, the instinct to polish usually disappears for good.',
        ],
      },
    ],
  },
  {
    slug: 'spotting-fake-coins',
    sections: [
      {
        hHi: 'सबसे अच्छा अभ्यास',
        hEn: 'The best practice there is',
        pHi: [
          'नक़ल पहचानने का सबसे तेज़ तरीक़ा असली सिक्के देखना है, न कि नक़ली सिक्कों की सूची पढ़ना।',
          'दस सस्ते, निश्चित रूप से असली सिक्के ख़रीदिए और उन्हें बार-बार देखिए — वज़न, आवाज़, किनारा, धातु का बहाव। आँख इन्हीं से मानक बनाती है।',
          'उसके बाद जब कोई नक़ली सामने आएगा, तो वह ग़लत लगेगा — भले आप पहले क्षण में बता न पाएँ कि क्यों। यही वह अनुभूति है जिस पर अनुभवी संग्राहक भरोसा करते हैं।',
        ],
        pEn: [
          'The fastest way to learn to spot a fake is to look at genuine coins, not to read lists of what fakes look like.',
          'Buy ten cheap, certainly genuine coins and handle them repeatedly — the weight, the sound, the edge, the flow of the metal. The eye builds its standard from these and from nothing else.',
          'After that, when a fake appears it will simply feel wrong, even if you cannot say why in the first moment. That instinct is what experienced collectors actually rely on, and it can only be built by handling the real thing.',
        ],
      },
    ],
  },
  {
    slug: 'storing-coins-properly',
    sections: [
      {
        hHi: 'सरल और निरंतर',
        hEn: 'Simple and consistent',
        pHi: [
          'सबसे अच्छी भंडारण-व्यवस्था वह नहीं जो सबसे महँगी हो, बल्कि वह जिसे आप सचमुच निभाएँगे।',
          'एक जटिल व्यवस्था जिसे छह महीने बाद छोड़ दिया जाए, उस साधारण व्यवस्था से बुरी है जो वर्षों चलती रहे। यही बात लगभग हर संग्रह-सलाह पर लागू होती है।',
          'इसलिए वही चुनिए जो आपके घर, आपके बजट और आपकी आदत में बैठे — और फिर उसे बदलिए मत।',
        ],
        pEn: [
          'The best storage system is not the most expensive one but the one you will actually keep up.',
          'An elaborate arrangement abandoned after six months is worse than a simple one maintained for years, and that principle applies to almost every piece of advice in this hobby.',
          'So choose what fits your house, your budget and your habits — and then leave it alone. A box, envelopes and a silica sachet checked once a year will outlast any system that demands attention every week, because the second kind quietly stops happening and nobody notices until the damage is already done.',
        ],
      },
    ],
  },
  {
    slug: 'how-coins-are-valued',
    sections: [
      {
        hHi: 'एक व्यावहारिक जाँच',
        hEn: 'A practical test',
        pHi: [
          'जब कोई आपको किसी सिक्के का दाम बताए, तो चार सवाल पूछिए — एक हर कारक के लिए।',
          'कितने बचे हैं? किस दशा का यह नमूना है? इसे कौन इकट्ठा करता है? और यह असली है, इसका क्या प्रमाण है?',
          'जो व्यक्ति चारों का उत्तर दे सके, वह जानता है कि वह क्या बेच रहा है। जो न दे सके, उसका दाम एक अनुमान है — या उससे भी कम।',
        ],
        pEn: [
          'When somebody quotes you a price for a coin, ask four questions — one for each factor.',
          'How many survive? What grade is this particular example? Who collects this? And what is the evidence that it is genuine?',
          'Anybody who can answer all four knows what they are selling. Anybody who cannot is quoting a guess, or something worse than a guess, and the price should be treated accordingly rather than accepted because it was stated with confidence.',
        ],
      },
    ],
  },
  {
    slug: 'selling-old-coins-safely',
    sections: [
      {
        hHi: 'और अंत में',
        hEn: 'And finally',
        pHi: [
          'बिक्री का सबसे बड़ा जोखिम धोखाधड़ी नहीं है — वह जल्दबाज़ी है, और जल्दबाज़ी से बचना पूरी तरह आपके हाथ में है।',
          'सूची बनाने, तस्वीरें लेने और थोड़ा पढ़ने में एक शाम लगती है। उस एक शाम के बाद आप उसी सिक्के के लिए कहीं बेहतर दाम पा सकेंगे।',
          'और यदि अंततः आप न बेचने का फ़ैसला करें, तो वह भी एक वैध परिणाम है — शायद सबसे अच्छा।',
        ],
        pEn: [
          'The greatest risk in selling is not fraud but haste, and avoiding haste is entirely within your control.',
          'Making the list, taking the photographs and reading a little takes one evening. After that single evening you will obtain a considerably better price for the same coin, from the same buyer, in the same market.',
          'And if you eventually decide not to sell at all, that is a legitimate outcome too — quite possibly the best one, because the money from a small collection rarely compensates for the story that leaves with it.',
        ],
      },
    ],
  },
  {
    slug: 'storing-coins-properly',
    sections: [
      {
        hHi: 'एक साल का कैलेंडर',
        hEn: 'A calendar for the year',
        pHi: [
          'भंडारण को एक बार का काम मत समझिए — साल में दो बार दस मिनट देना काफ़ी है।',
          'मानसून से पहले: सिलिका जेल बदलिए और डिब्बा जाँचिए। मानसून के बाद: सिक्कों पर नज़र डालिए कि कहीं कोई नया धब्बा तो नहीं।',
        ],
        pEn: [
          'Do not treat storage as a one-off task — ten minutes twice a year is enough to keep a collection safe indefinitely.',
          'Before the monsoon: replace the silica gel and check the box seals. After the monsoon: look over the coins for any new spotting, particularly on copper, because that is when active corrosion would have started if it started at all. Catching it in the first month is the difference between a mark and a hole.',
        ],
      },
    ],
  },
  {
    slug: 'how-coins-are-valued',
    sections: [
      {
        hHi: 'और एक बात',
        hEn: 'And one more thing',
        pHi: [
          'इन चारों कारकों के बाहर एक पाँचवाँ है जिसे बाज़ार नहीं मापता: वह अर्थ जो सिक्का आपके लिए रखता है।',
          'वह किसी कैटलॉग में दर्ज नहीं होता और किसी नीलामी में नहीं बिकता, और अक्सर वही सबसे टिकाऊ कारण होता है किसी चीज़ को रखने का।',
        ],
        pEn: [
          'Beyond these four factors sits a fifth that the market does not measure: what the coin means to you.',
          'It appears in no catalogue and sells at no auction, and it is very often the most durable reason there is for keeping something. A collection assembled only on the first four factors becomes a portfolio; a collection that includes the fifth stays interesting for a lifetime.',
        ],
      },
    ],
  },
  {
    slug: 'selling-old-coins-safely',
    sections: [
      {
        hHi: 'एक अंतिम जाँच-सूची',
        hEn: 'A final checklist',
        pHi: [
          'साफ़ नहीं किया — सूची बनाई — तस्वीरें लीं — बीते नीलामी-नतीजे देखे — तीन में से एक भरोसेमंद रास्ता चुना।',
          'कोई अग्रिम शुल्क नहीं दिया — भुगतान का रिकॉर्ड रखा — और जल्दबाज़ी नहीं की। इन सात बिंदुओं पर हाँ हो, तो बिक्री सुरक्षित है।',
        ],
        pEn: [
          'Nothing cleaned — a list made — photographs taken — past auction results consulted — one of the three trustworthy routes chosen.',
          'No advance fee paid — a record of the payment kept — and no hurry anywhere in the process. If the answer to all seven is yes, the sale is a safe one, and you will have obtained close to what the coins are genuinely worth rather than what somebody hoped you would accept.',
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
