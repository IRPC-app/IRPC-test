const tx = (en, hi, ur, roman) => ({ en, hi, ur, roman });

export const brand = {
  name: tx(
    "Islamic Research & Propagation Centre",
    "इस्लामी शोध एवं प्रचार केंद्र",
    "اسلامی تحقیق و تبلیغ مرکز",
    "Islami Tehqeeq wa Tableegh Markaz"
  ),
  tagline: tx(
    "Know ISLAM, Know Peace.",
    "इस्लाम को जानें, शांति को जानें।",
    "اسلام کو جانیں، امن کو جانیں۔",
    "Islam ko jaanein, Aman ko jaanein."
  ),
  mission: "Dawah to Humanity bil Hikmah",
};

export const navLinks = [
  { href: "#learn", label: tx("Learn Islam", "इस्लाम सीखें", "اسلام سیکھیں", "Islam Seekhein") },
  { href: "#ai-daee", label: tx("AI Da'ee", "एआई दाई", "AI داعی", "AI Da'ee") },
  { href: "#research", label: tx("Research", "शोध", "تحقیق", "Tahqeeq") },
  { href: "#programs", label: tx("Programs", "कार्यक्रम", "پروگرامز", "Programs") },
  { href: "#events", label: tx("Events", "आयोजन", "تقریبات", "Taqreebat") },
  { href: "#publications", label: tx("Publications", "प्रकाशन", "مطبوعات", "Matbuaat") },
  { href: "#welfare", label: tx("Welfare", "कल्याण", "فلاح و بہبود", "Falah-o-Behbood") },
];

export const headerCopy = {
  aiDaee: tx("AI Da'ee", "एआई दाई", "AI داعی", "AI Da'ee"),
  donate: tx("Donate", "दान करें", "عطیہ کریں", "Atiya Karein"),
};

export const heroCopy = {
  eyebrow: brand.tagline,
  headline: tx(
    "Ask Anything About Islam.",
    "इस्लाम के बारे में कुछ भी पूछें।",
    "اسلام کے بارے میں کچھ بھی پوچھیں۔",
    "Islam ke baare mein kuch bhi poochein."
  ),
  subhead: tx(
    "Get calm, authentic, evidence-based answers from the Qur'an, Sunnah, and trusted Islamic scholarship through the IRPC AI Da'ee.",
    "IRPC एआई दाई के माध्यम से कुरान, सुन्नत और विश्वसनीय इस्लामी विद्वता से शांत, प्रामाणिक और प्रमाण-आधारित उत्तर प्राप्त करें।",
    "IRPC کے AI داعی کے ذریعے قرآن، سنت اور معتبر اسلامی علم سے پرسکون، مستند اور دلائل پر مبنی جوابات حاصل کریں۔",
    "IRPC ke AI Da'ee ke zariye Quran, Sunnat aur mustanad Islami ilm se pursukoon, mustanad aur daleel par mabni jawabaat hasil karein."
  ),
  placeholder: tx(
    "Ask any question about Islam...",
    "इस्लाम के बारे में कोई भी सवाल पूछें...",
    "اسلام کے بارے میں کوئی بھی سوال پوچھیں...",
    "Islam ke baare mein koi bhi sawal poochein..."
  ),
  askButton: tx("Ask AI Da'ee", "एआई दाई से पूछें", "AI داعی سے پوچھیں", "AI Da'ee se Poochein"),
  startAsking: tx("Start Asking", "पूछना शुरू करें", "پوچھنا شروع کریں", "Poochna Shuru Karein"),
  learnAbout: tx(
    "Learn About Islam",
    "इस्लाम के बारे में जानें",
    "اسلام کے بارے میں جانیں",
    "Islam ke Baare Mein Jaanein"
  ),
  panelTitle: brand.mission,
  panelBody: tx(
    "A premium Islamic research and Dawah institution from India, presenting Islam intellectually, compassionately, and professionally.",
    "भारत से एक प्रतिष्ठित इस्लामी शोध एवं दावा संस्था, जो इस्लाम को बौद्धिक, दयालु और व्यावसायिक ढंग से प्रस्तुत करती है।",
    "بھارت سے ایک ممتاز اسلامی تحقیقی و دعوتی ادارہ، جو اسلام کو عقلی، ہمدردانہ اور پیشہ ورانہ انداز میں پیش کرتا ہے۔",
    "Bharat se ek mumtaz Islami tahqeeqi wa dawati idara, jo Islam ko aqli, hamdardana aur professional andaz mein pesh karta hai."
  ),
};

export const quickQuestions = [
  tx("Who is Allah?", "अल्लाह कौन है?", "اللہ کون ہے؟", "Allah Kaun Hai?"),
  tx("Why Islam?", "इस्लाम ही क्यों?", "اسلام ہی کیوں؟", "Islam Hi Kyun?"),
  tx("Women in Islam", "इस्लाम में महिलाएं", "اسلام میں خواتین", "Islam Mein Khawateen"),
  tx("Qur'an & Science", "कुरान और विज्ञान", "قرآن اور سائنس", "Quran aur Science"),
];

export const heroStats = {
  value: "15,000+",
  label: tx(
    "Questions about Islam answered",
    "इस्लाम से जुड़े सवालों के जवाब दिए गए",
    "اسلام سے متعلق سوالات کے جوابات دیے گئے",
    "Islam se mutalliq sawalaat ke jawabaat diye gaye"
  ),
};

export const impactStrip = [
  { value: "13+", label: tx("Years of Dawah", "दावा के वर्ष", "دعوت کے سال", "Dawah ke Saal") },
  { value: "28Cr+", label: tx("Social Reach", "सामाजिक पहुंच", "سماجی رسائی", "Samaji Rasai") },
  { value: "70k+", label: tx("Books Distributed", "वितरित पुस्तकें", "تقسیم شدہ کتابیں", "Taqseem Shuda Kitabein") },
  { value: "6.5k+", label: tx("Qur'ans Distributed", "वितरित कुरान", "تقسیم شدہ قرآن", "Taqseem Shuda Quran") },
  { value: "700+", label: tx("Public Talks", "सार्वजनिक वार्ताएं", "عوامی خطابات", "Awami Khitabaat") },
  { value: "55+", label: tx("Dawah Courses", "दावा पाठ्यक्रम", "دعوتی کورسز", "Dawati Courses") },
];

export const learnCopy = {
  eyebrow: tx("Start Here", "यहां से शुरू करें", "یہاں سے شروع کریں", "Yahan Se Shuru Karein"),
  heading: tx(
    "Learn Islam with clarity, wisdom, and evidence.",
    "स्पष्टता, समझदारी और प्रमाण के साथ इस्लाम सीखें।",
    "وضاحت، حکمت اور دلائل کے ساتھ اسلام سیکھیں۔",
    "Wazahat, hikmat aur daleel ke saath Islam seekhein."
  ),
  body: tx(
    "Whether you are exploring Islam for the first time, strengthening your faith, or preparing for Dawah, IRPC guides you step by step.",
    "चाहे आप पहली बार इस्लाम को जान रहे हों, अपने विश्वास को मजबूत कर रहे हों, या दावा की तैयारी कर रहे हों, IRPC आपका हर कदम पर मार्गदर्शन करता है।",
    "چاہے آپ پہلی بار اسلام کو جان رہے ہوں، اپنے ایمان کو مضبوط کر رہے ہوں، یا دعوت کی تیاری کر رہے ہوں، IRPC ہر قدم پر آپ کی رہنمائی کرتا ہے۔",
    "Chahe aap pehli baar Islam ko jaan rahe hon, apne imaan ko mazboot kar rahe hon, ya Dawah ki tayyari kar rahe hon, IRPC har qadam par aapki rehnumai karta hai."
  ),
};

export const learnPathways = [
  {
    icon: "01",
    title: tx("New to Islam?", "इस्लाम में नए हैं?", "اسلام میں نئے ہیں؟", "Islam Mein Naye Hain?"),
    body: tx(
      "Begin with Allah, Qur'an, Prophethood, worship, peace, purpose, and the meaning of life.",
      "अल्लाह, कुरान, पैगंबरी, इबादत, शांति, उद्देश्य और जीवन के अर्थ से शुरुआत करें।",
      "اللہ، قرآن، نبوت، عبادت، امن، مقصد اور زندگی کے معنی سے آغاز کریں۔",
      "Allah, Quran, Nabuwwat, Ibadat, Aman, Maqsad aur zindagi ke maani se aaghaz karein."
    ),
    cta: tx("Explore basics", "बुनियादी बातें जानें", "بنیادی باتیں دیکھیں", "Bunyadi Baatein Dekhein"),
  },
  {
    icon: "02",
    title: tx("Misconceptions", "भ्रांतियां", "غلط فہمیاں", "Ghalat Fehmiyan"),
    body: tx(
      "Clear answers to common doubts about Islam, women, violence, science, history, and society.",
      "इस्लाम, महिलाओं, हिंसा, विज्ञान, इतिहास और समाज से जुड़े आम संदेहों के स्पष्ट उत्तर।",
      "اسلام، خواتین، تشدد، سائنس، تاریخ اور معاشرے سے متعلق عام شبہات کے واضح جوابات۔",
      "Islam, khawateen, tashaddud, science, tareekh aur muashray se mutalliq aam shubhaat ke wazeh jawabaat."
    ),
    cta: tx("Read answers", "उत्तर पढ़ें", "جوابات پڑھیں", "Jawabaat Parhein"),
  },
  {
    icon: "03",
    title: tx("For Reverts", "नवमुस्लिमों के लिए", "نو مسلموں کے لیے", "Nau Muslimon Ke Liye"),
    body: tx(
      "A compassionate journey for new Muslims: beliefs, prayer, family, community, and daily life.",
      "नए मुसलमानों के लिए एक सहानुभूतिपूर्ण यात्रा: विश्वास, नमाज़, परिवार, समुदाय और दैनिक जीवन।",
      "نئے مسلمانوں کے لیے ایک ہمدردانہ سفر: عقائد، نماز، خاندان، برادری اور روزمرہ زندگی۔",
      "Naye musalmanon ke liye ek hamdardana safar: aqaaid, namaz, khandaan, biradari aur rozmarra zindagi."
    ),
    cta: tx("Get support", "सहायता प्राप्त करें", "معاونت حاصل کریں", "Muawanat Hasil Karein"),
  },
];

export const aiFeatures = [
  tx(
    "AI Da'ee for Islamic Q&A",
    "इस्लामी प्रश्नोत्तर के लिए एआई दाई",
    "اسلامی سوال و جواب کے لیے AI داعی",
    "Islami Sawal o Jawab ke liye AI Da'ee"
  ),
  tx("Ask a Scholar triage", "विद्वान से पूछें", "عالم دین سے رہنمائی", "Aalim-e-Deen Se Rehnumai"),
  tx(
    "Website navigation assistant",
    "वेबसाइट नेविगेशन सहायक",
    "ویب سائٹ نیویگیشن اسسٹنٹ",
    "Website Navigation Assistant"
  ),
  tx(
    "English, Hindi, Urdu, Roman Urdu",
    "अंग्रेज़ी, हिंदी, उर्दू, रोमन उर्दू",
    "انگریزی، ہندی، اردو، رومن اردو",
    "English, Hindi, Urdu, Roman Urdu"
  ),
];

export const aiDaeeCopy = {
  eyebrow: tx(
    "Moonshot Vision",
    "महत्वाकांक्षी दृष्टिकोण",
    "بلند حوصلہ وژن",
    "Buland Hausla Vision"
  ),
  heading: tx(
    "Build the world's most advanced AI Da'ee.",
    "दुनिया का सबसे उन्नत एआई दाई बनाना।",
    "دنیا کا سب سے جدید AI داعی بنانا۔",
    "Duniya ka sabse jadeed AI Da'ee banana."
  ),
  body: tx(
    "Not just a chatbot — a 24/7 digital ambassador for Islam that answers with wisdom, references, multilingual support, and scholar escalation.",
    "यह सिर्फ एक चैटबॉट नहीं — इस्लाम के लिए 24/7 डिजिटल राजदूत है, जो समझदारी, संदर्भों, बहुभाषी सहायता और विद्वान तक पहुंच के साथ उत्तर देता है।",
    "یہ محض ایک چیٹ بوٹ نہیں — بلکہ اسلام کے لیے 24/7 ڈیجیٹل سفیر ہے، جو حکمت، حوالہ جات، کثیر لسانی معاونت اور عالم دین تک رسائی کے ساتھ جواب دیتا ہے۔",
    "Yeh mahez ek chatbot nahi — balke Islam ke liye 24/7 digital safeer hai, jo hikmat, hawala jaat, kaseer lisani muawanat aur aalim-e-deen tak rasai ke saath jawab deta hai."
  ),
  chatInputPlaceholder: tx(
    "Ask follow-up question...",
    "एक और सवाल पूछें...",
    "مزید سوال پوچھیں...",
    "Mazeed sawal poochein..."
  ),
  send: tx("Send", "भेजें", "بھیجیں", "Bhejein"),
  thinking: tx("Thinking...", "सोच रहे हैं...", "سوچ رہے ہیں...", "Soch Rahe Hain..."),
};

export const aiChatDemo = {
  question: tx(
    "What is the purpose of life in Islam?",
    "इस्लाम में जीवन का उद्देश्य क्या है?",
    "اسلام میں زندگی کا مقصد کیا ہے؟",
    "Islam mein zindagi ka maqsad kya hai?"
  ),
  answer: tx(
    "Islam teaches that life has meaning: to know, worship, and obey Allah with sincerity, while serving creation with justice and compassion.",
    "इस्लाम सिखाता है कि जीवन का एक अर्थ है: सच्चाई के साथ अल्लाह को जानना, उसकी इबादत करना और उसकी आज्ञा मानना, साथ ही न्याय और दया के साथ सृष्टि की सेवा करना।",
    "اسلام سکھاتا ہے کہ زندگی بامعنی ہے: خلوص کے ساتھ اللہ کو پہچاننا، اس کی عبادت کرنا اور اس کی اطاعت کرنا، ساتھ ہی انصاف اور رحمدلی کے ساتھ مخلوق کی خدمت کرنا۔",
    "Islam sikhata hai ke zindagi bamaani hai: ikhlas ke saath Allah ko pehchanna, uski ibadat karna aur uski itaat karna, saath hi insaaf aur rehamdili ke saath makhlooq ki khidmat karna."
  ),
};

export const researchTopics = [
  tx("Islamic Research", "इस्लामी शोध", "اسلامی تحقیق", "Islami Tahqeeq"),
  tx("Comparative Religion", "तुलनात्मक धर्म", "تقابلی مذہب", "Taqabuli Mazhab"),
  tx("Islamophobia Responses", "इस्लामोफोबिया के उत्तर", "اسلاموفوبیا کے جوابات", "Islamophobia ke Jawabaat"),
  tx("Publications", "प्रकाशन", "مطبوعات", "Matbuaat"),
  tx("Debate Resources", "बहस संसाधन", "مناظرہ کے وسائل", "Munazra ke Wasail"),
];

export const researchCopy = {
  hubTitle: tx("Research Hub", "शोध केंद्र", "تحقیقی مرکز", "Tahqeeqi Markaz"),
  eyebrow: tx(
    "Research & Thought Leadership",
    "शोध और विचार नेतृत्व",
    "تحقیق اور فکری قیادت",
    "Tahqeeq aur Fikri Qiyadat"
  ),
  heading: tx(
    "Presenting Islam intellectually.",
    "इस्लाम को बौद्धिक रूप से प्रस्तुत करना।",
    "اسلام کو عقلی انداز میں پیش کرنا۔",
    "Islam ko aqli andaz mein pesh karna."
  ),
  body: tx(
    "IRPC's research section should become India's trusted destination for authentic Islamic knowledge, comparative religion, and evidence-based responses to misconceptions.",
    "IRPC का शोध खंड प्रामाणिक इस्लामी ज्ञान, तुलनात्मक धर्म और भ्रांतियों के प्रमाण-आधारित उत्तरों के लिए भारत का विश्वसनीय ठिकाना बनना चाहिए।",
    "IRPC کا تحقیقی شعبہ مستند اسلامی علم، تقابلی مذہب اور غلط فہمیوں کے دلائل پر مبنی جوابات کے لیے بھارت کا معتبر ٹھکانہ بننا چاہیے۔",
    "IRPC ka tahqeeqi shobaa mustanad Islami ilm, taqabuli mazhab aur ghalat fehmiyon ke daleel par mabni jawabaat ke liye Bharat ka mustanad thikana banna chahiye."
  ),
  cta: tx("Explore Research", "शोध देखें", "تحقیق دیکھیں", "Tahqeeq Dekhein"),
};

export const programsCopy = {
  eyebrow: tx("Programs", "कार्यक्रम", "پروگرامز", "Programs"),
  heading: tx(
    "From learning to action.",
    "सीखने से कर्म की ओर।",
    "سیکھنے سے عمل کی طرف۔",
    "Seekhne se amal ki taraf."
  ),
  body: tx(
    "IRPC trains, educates, serves, and inspires through structured programs.",
    "IRPC संरचित कार्यक्रमों के माध्यम से प्रशिक्षण देता है, शिक्षित करता है, सेवा करता है और प्रेरित करता है।",
    "IRPC منظم پروگراموں کے ذریعے تربیت دیتا ہے، تعلیم دیتا ہے، خدمت کرتا ہے اور حوصلہ دیتا ہے۔",
    "IRPC munazzam programs ke zariye tarbiyat deta hai, taleem deta hai, khidmat karta hai aur hausla deta hai."
  ),
};

export const programs = [
  {
    title: tx(
      "Dawah Training Program",
      "दावा प्रशिक्षण कार्यक्रम",
      "دعوتی تربیتی پروگرام",
      "Dawati Tarbiyati Program"
    ),
    body: tx(
      "Train the next generation of Da'ees with structured, mentor-led courses.",
      "संरचित, मार्गदर्शक-नेतृत्व वाले पाठ्यक्रमों के साथ दाइयों की अगली पीढ़ी को प्रशिक्षित करें।",
      "منظم اور رہنما زیر قیادت کورسز کے ساتھ داعیوں کی اگلی نسل کو تربیت دیں۔",
      "Munazzam aur rehnuma zair-e-qiyadat courses ke saath Da'ees ki agli nasl ko tarbiyat dein."
    ),
  },
  {
    title: tx("AI & Dawah", "एआई और दावा", "AI اور دعوت", "AI aur Dawah"),
    body: tx(
      "Use technology with wisdom to scale Islamic outreach responsibly.",
      "इस्लामी पहुंच को जिम्मेदारी से बढ़ाने के लिए समझदारी के साथ तकनीक का उपयोग करें।",
      "اسلامی رسائی کو ذمہ داری سے بڑھانے کے لیے حکمت کے ساتھ ٹیکنالوجی کا استعمال کریں۔",
      "Islami rasai ko zimmedari se barhane ke liye hikmat ke saath technology ka istemal karein."
    ),
  },
  {
    title: tx(
      "Public Lectures & Khutbahs",
      "सार्वजनिक व्याख्यान और खुत्बे",
      "عوامی خطابات اور خطبے",
      "Awami Khitabaat aur Khutbay"
    ),
    body: tx(
      "Friday Khutbahs, talks, symposiums, debates, and public dialogues.",
      "जुमे के खुत्बे, वार्ताएं, संगोष्ठियां, बहसें और सार्वजनिक संवाद।",
      "جمعہ کے خطبے، خطابات، سیمینار، مناظرے اور عوامی مکالمے۔",
      "Jumma ke khutbay, khitabaat, seminar, munazray aur awami mukalmay."
    ),
  },
  {
    title: tx("Youth Programs", "युवा कार्यक्रम", "نوجوانوں کے پروگرام", "Nojawano ke Programs"),
    body: tx(
      "Faith, identity, and character-building programs for Muslim youth.",
      "मुस्लिम युवाओं के लिए विश्वास, पहचान और चरित्र-निर्माण कार्यक्रम।",
      "مسلم نوجوانوں کے لیے ایمان، شناخت اور کردار سازی کے پروگرام۔",
      "Muslim nojawano ke liye imaan, shanakht aur kirdar saazi ke programs."
    ),
  },
  {
    title: tx("Library & Book Store", "पुस्तकालय और बुक स्टोर", "لائبریری اور بک اسٹور", "Library aur Book Store"),
    body: tx(
      "A growing collection open to researchers, students, and the public.",
      "शोधकर्ताओं, छात्रों और जनता के लिए खुला एक बढ़ता हुआ संग्रह।",
      "محققین، طلبہ اور عوام کے لیے کھلا ایک بڑھتا ہوا ذخیرہ۔",
      "Muhaqqiqeen, talaba aur awam ke liye khula ek barhta hua zakheera."
    ),
  },
  {
    title: tx(
      "Welfare & Medical Camps",
      "कल्याण और चिकित्सा शिविर",
      "فلاحی اور طبی کیمپس",
      "Falahi aur Tibbi Camps"
    ),
    body: tx(
      "Food, medical care, and essentials for underserved communities.",
      "जरूरतमंद समुदायों के लिए भोजन, चिकित्सा देखभाल और आवश्यक वस्तुएं।",
      "پسماندہ برادریوں کے لیے خوراک، طبی امداد اور بنیادی ضروریات۔",
      "Pasmanda biradariyon ke liye khoraak, tibbi imdaad aur bunyadi zarooriyat."
    ),
  },
];

export const dashboardCopy = {
  eyebrow: tx("Our Impact", "हमारा प्रभाव", "ہمارا اثر", "Hamara Asar"),
  heading: tx(
    "13+ years of authentic Dawah, in numbers.",
    "13+ वर्षों की प्रामाणिक दावा, आंकड़ों में।",
    "13+ سالوں کی مستند دعوت، اعداد و شمار میں۔",
    "13+ saalon ki mustanad Dawah, aadad o shumaar mein."
  ),
};

export const impactDashboard = [
  { value: "13+", label: tx("Years", "वर्ष", "سال", "Saal") },
  { value: "6,500+", label: tx("Qur'ans Distributed", "वितरित कुरान", "تقسیم شدہ قرآن", "Taqseem Shuda Quran") },
  { value: "70,000+", label: tx("Books Distributed", "वितरित पुस्तकें", "تقسیم شدہ کتابیں", "Taqseem Shuda Kitabein") },
  {
    value: "6,000+",
    label: tx("Welfare Beneficiaries", "कल्याण लाभार्थी", "فلاحی مستفیدین", "Falahi Mustafideen"),
  },
  { value: "6,000+", label: tx("Videos Produced", "निर्मित वीडियो", "تیار کردہ ویڈیوز", "Tayyar Karda Videos") },
  { value: "28+ Cr", label: tx("Social Reach", "सामाजिक पहुंच", "سماجی رسائی", "Samaji Rasai") },
  {
    value: "15,000+",
    label: tx("Questions Answered", "जवाब दिए गए सवाल", "جواب دیے گئے سوالات", "Jawab Diye Gaye Sawalaat"),
  },
  {
    value: "27,000+",
    label: tx("Library Visitors", "पुस्तकालय आगंतुक", "لائبریری کے آنے والے", "Library ke Aane Wale"),
  },
  { value: "700+", label: tx("Public Talks", "सार्वजनिक वार्ताएं", "عوامی خطابات", "Awami Khitabaat") },
  { value: "400+", label: tx("Live Discussions", "लाइव चर्चाएं", "لائیو مباحثے", "Live Mubahisay") },
  { value: "55+", label: tx("Courses", "पाठ्यक्रम", "کورسز", "Courses") },
];

export const eventsCopy = {
  eyebrow: tx("Upcoming Events", "आगामी आयोजन", "آئندہ تقریبات", "Aainda Taqreebat"),
  heading: tx(
    "Join a talk, symposium, or dialogue near you.",
    "अपने पास किसी वार्ता, संगोष्ठी या संवाद में शामिल हों।",
    "اپنے قریب کسی خطاب، سیمینار یا مکالمے میں شامل ہوں۔",
    "Apne qareeb kisi khitab, seminar ya mukalme mein shamil hon."
  ),
};

export const upcomingEvents = [
  {
    date: "12 Jul",
    type: tx("Symposium", "संगोष्ठी", "سیمینار", "Seminar"),
    title: tx(
      "Comparative Religion Symposium",
      "तुलनात्मक धर्म संगोष्ठी",
      "تقابلی مذہب سیمینار",
      "Taqabuli Mazhab Seminar"
    ),
    location: tx(
      "IRPC Dawah Centre, Giridih",
      "IRPC दावा केंद्र, गिरिडीह",
      "IRPC دعوہ سینٹر، گریڈیہ",
      "IRPC Dawah Centre, Giridih"
    ),
  },
  {
    date: "26 Jul",
    type: tx("Public Lecture", "सार्वजनिक व्याख्यान", "عوامی خطاب", "Awami Khitab"),
    title: tx(
      "Friday Khutbah: Mercy in Islam",
      "जुमे का खुत्बा: इस्लाम में दया",
      "خطبہ جمعہ: اسلام میں رحمت",
      "Khutba Jumma: Islam Mein Rehmat"
    ),
    location: tx("Central Jama Masjid", "केंद्रीय जामा मस्जिद", "مرکزی جامع مسجد", "Markazi Jama Masjid"),
  },
  {
    date: "9 Aug",
    type: tx("Youth Program", "युवा कार्यक्रम", "نوجوانوں کا پروگرام", "Nojawano ka Program"),
    title: tx(
      "Youth Dialogue: Faith & Identity",
      "युवा संवाद: विश्वास और पहचान",
      "نوجوانوں کا مکالمہ: ایمان اور شناخت",
      "Nojawano ka Mukalma: Imaan aur Shanakht"
    ),
    location: tx("IRPC Youth Hall", "IRPC युवा हॉल", "IRPC یوتھ ہال", "IRPC Youth Hall"),
  },
];

export const publicationsCopy = {
  eyebrow: tx("Publications", "प्रकाशन", "مطبوعات", "Matbuaat"),
  heading: tx(
    "Authentic knowledge, written down.",
    "प्रामाणिक ज्ञान, लिखित रूप में।",
    "مستند علم، تحریری شکل میں۔",
    "Mustanad ilm, tehreeri shakal mein."
  ),
};

export const publications = [
  {
    title: tx("Research Papers", "शोध पत्र", "تحقیقی مقالے", "Tahqeeqi Maqalay"),
    body: tx(
      "Peer-reviewed and scholarly work on Islamic theology and comparative religion.",
      "इस्लामी धर्मशास्त्र और तुलनात्मक धर्म पर समकक्ष-समीक्षित और विद्वतापूर्ण कार्य।",
      "اسلامی علمِ کلام اور تقابلی مذہب پر ماہرین کی جانچ شدہ علمی تحریریں۔",
      "Islami ilm-e-kalam aur taqabuli mazhab par mahireen ki jaanch shuda ilmi tehreerein."
    ),
  },
  {
    title: tx("Da'wah Booklets", "दावा पुस्तिकाएं", "دعوتی کتابچے", "Dawati Kitabchay"),
    body: tx(
      "Short, evidence-based guides answering common questions about Islam.",
      "इस्लाम के बारे में आम सवालों के उत्तर देने वाली संक्षिप्त, प्रमाण-आधारित मार्गदर्शिकाएं।",
      "اسلام کے بارے میں عام سوالات کے جواب دینے والے مختصر اور دلائل پر مبنی رہنما کتابچے۔",
      "Islam ke baare mein aam sawalaat ke jawab dene wale mukhtasar aur daleel par mabni rehnuma kitabchay."
    ),
  },
  {
    title: tx(
      "Comparative Religion Studies",
      "तुलनात्मक धर्म अध्ययन",
      "تقابلی مذہب کے مطالعے",
      "Taqabuli Mazhab ke Mutalaay"
    ),
    body: tx(
      "In-depth studies comparing Islamic teachings with other faith traditions.",
      "इस्लामी शिक्षाओं की अन्य धार्मिक परंपराओं से तुलना करने वाले गहन अध्ययन।",
      "اسلامی تعلیمات کا دیگر مذہبی روایات سے موازنہ کرنے والے تفصیلی مطالعے۔",
      "Islami taleemat ka deegar mazhabi riwayaat se muwazna karne wale tafseeli mutalay."
    ),
  },
];

export const welfareCopy = {
  eyebrow: tx("Welfare", "कल्याण", "فلاح و بہبود", "Falah-o-Behbood"),
  heading: tx(
    "Serving humanity alongside Dawah.",
    "दावा के साथ-साथ मानवता की सेवा।",
    "دعوت کے ساتھ ساتھ انسانیت کی خدمت۔",
    "Dawah ke saath saath insaniyat ki khidmat."
  ),
  body: tx(
    "IRPC's welfare arm supports underserved communities regardless of faith.",
    "IRPC की कल्याण शाखा धर्म की परवाह किए बिना जरूरतमंद समुदायों का समर्थन करती है।",
    "IRPC کا فلاحی شعبہ مذہب سے قطع نظر پسماندہ برادریوں کی مدد کرتا ہے۔",
    "IRPC ka falahi shobaa mazhab se qata-e-nazar pasmanda biradariyon ki madad karta hai."
  ),
};

export const welfareProjects = [
  {
    title: tx("Medical Camps", "चिकित्सा शिविर", "طبی کیمپس", "Tibbi Camps"),
    body: tx(
      "Free health check-ups and treatment for underserved communities.",
      "जरूरतमंद समुदायों के लिए मुफ्त स्वास्थ्य जांच और उपचार।",
      "پسماندہ برادریوں کے لیے مفت طبی معائنہ اور علاج۔",
      "Pasmanda biradariyon ke liye muft tibbi muaina aur ilaj."
    ),
  },
  {
    title: tx("Food Distribution", "भोजन वितरण", "خوراک کی تقسیم", "Khoraak ki Taqseem"),
    body: tx(
      "Regular meals and ration kits for families in need.",
      "जरूरतमंद परिवारों के लिए नियमित भोजन और राशन किट।",
      "ضرورت مند خاندانوں کے لیے باقاعدہ کھانا اور راشن کٹس۔",
      "Zaroorat mand khandano ke liye baqaida khana aur ration kits."
    ),
  },
  {
    title: tx(
      "Qur'an & Book Distribution",
      "कुरान और पुस्तक वितरण",
      "قرآن اور کتب کی تقسیم",
      "Quran aur Kutub ki Taqseem"
    ),
    body: tx(
      "Free Qur'ans and Islamic literature distributed nationwide.",
      "देशभर में मुफ्त कुरान और इस्लामी साहित्य वितरित किया गया।",
      "ملک بھر میں مفت قرآن اور اسلامی لٹریچر تقسیم کیا جاتا ہے۔",
      "Mulk bhar mein muft Quran aur Islami literature taqseem kiya jata hai."
    ),
  },
  {
    title: tx("Orphan Support", "अनाथ सहायता", "یتیموں کی مدد", "Yateemon ki Madad"),
    body: tx(
      "Sponsorship and care for orphans' education and wellbeing.",
      "अनाथों की शिक्षा और कल्याण के लिए प्रायोजन और देखभाल।",
      "یتیموں کی تعلیم اور بہبود کے لیے کفالت اور نگہداشت۔",
      "Yateemon ki taleem aur behbood ke liye kafalat aur nigehdasht."
    ),
  },
];

export const donateCopy = {
  eyebrow: tx("Support the Mission", "मिशन का समर्थन करें", "مشن کی حمایت کریں", "Mission ki Himayat Karein"),
  heading: tx(
    "Help spread authentic Islamic knowledge.",
    "प्रामाणिक इस्लामी ज्ञान फैलाने में मदद करें।",
    "مستند اسلامی علم پھیلانے میں مدد کریں۔",
    "Mustanad Islami ilm phailane mein madad karein."
  ),
  body: tx(
    "Your support powers Dawah, research, education, welfare, Qur'an distribution, books, and the future AI Da'ee.",
    "आपका समर्थन दावा, शोध, शिक्षा, कल्याण, कुरान वितरण, पुस्तकों और भविष्य के एआई दाई को शक्ति देता है।",
    "آپ کی حمایت دعوت، تحقیق، تعلیم، فلاح، قرآن کی تقسیم، کتابوں اور مستقبل کے AI داعی کو طاقت دیتی ہے۔",
    "Aapki himayat Dawah, tahqeeq, taleem, falah, Quran ki taqseem, kitabon aur mustaqbil ke AI Da'ee ko taqat deti hai."
  ),
};

export const donationCategories = [
  tx("General Donation", "सामान्य दान", "عام عطیہ", "Aam Atiya"),
  tx("Zakat", "ज़कात", "زکوٰۃ", "Zakat"),
  tx("Sadaqah", "सदका", "صدقہ", "Sadaqah"),
  tx("Monthly Giving", "मासिक दान", "ماہانہ عطیہ", "Mahana Atiya"),
  tx("Sponsor a Student", "एक छात्र को प्रायोजित करें", "ایک طالب علم کو سپانسر کریں", "Ek Talib-e-ilm ko Sponsor Karein"),
  tx("Sponsor a Da'ee", "एक दाई को प्रायोजित करें", "ایک داعی کو سپانسر کریں", "Ek Da'ee ko Sponsor Karein"),
  tx("Qur'an Distribution", "कुरान वितरण", "قرآن کی تقسیم", "Quran ki Taqseem"),
  tx("Islamic School", "इस्लामी स्कूल", "اسلامی اسکول", "Islami School"),
];

export const footerCopy = {
  tagline: brand.tagline,
  mission: brand.mission,
  explore: tx("Explore", "एक्सप्लोर करें", "دریافت کریں", "Explore Karein"),
  more: tx("More", "अधिक", "مزید", "Mazeed"),
  legal: tx("Legal", "कानूनी", "قانونی", "Qanooni"),
  copyright: tx(
    "All rights reserved.",
    "सर्वाधिकार सुरक्षित।",
    "جملہ حقوق محفوظ ہیں۔",
    "Jamla Huqooq Mahfooz Hain."
  ),
};

export const footerLinks = {
  explore: [
    { href: "#learn", label: tx("Learn Islam", "इस्लाम सीखें", "اسلام سیکھیں", "Islam Seekhein") },
    { href: "#ai-daee", label: tx("AI Da'ee", "एआई दाई", "AI داعی", "AI Da'ee") },
    { href: "#research", label: tx("Research", "शोध", "تحقیق", "Tahqeeq") },
    { href: "#programs", label: tx("Programs", "कार्यक्रम", "پروگرامز", "Programs") },
  ],
  more: [
    { href: "#events", label: tx("Events", "आयोजन", "تقریبات", "Taqreebat") },
    { href: "#publications", label: tx("Publications", "प्रकाशन", "مطبوعات", "Matbuaat") },
    { href: "#welfare", label: tx("Welfare", "कल्याण", "فلاح و بہبود", "Falah-o-Behbood") },
    { href: "#donate", label: tx("Donate", "दान करें", "عطیہ کریں", "Atiya Karein") },
  ],
  legal: [
    tx("Privacy Policy", "गोपनीयता नीति", "پرائیویسی پالیسی", "Privacy Policy"),
    tx("Terms", "शर्तें", "شرائط", "Shara'it"),
    tx("Donation Policy", "दान नीति", "عطیہ پالیسی", "Atiya Policy"),
    tx("Zakat Policy", "ज़कात नीति", "زکوٰۃ پالیسی", "Zakat Policy"),
    tx("FAQs", "सामान्य प्रश्न", "اکثر پوچھے گئے سوالات", "Aksar Poochay Gaye Sawalaat"),
  ],
};
