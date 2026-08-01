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
];

export function applyExpansions(all: Article[]): void {
  const bySlug = new Map(all.map((a) => [a.slug, a]));
  for (const exp of EXPANSIONS) {
    const article = bySlug.get(exp.slug);
    if (!article) continue;
    article.sections.push(...exp.sections);
  }
}
