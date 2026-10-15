/* =====================================================================
   بيانات الموقع - سديم لأنظمة الأمن والسلامة
   -------------------------------------------------------------------
   هذا هو الملف الوحيد الذي تحتاج تعديله لتحديث محتوى الموقع.
   المصدر: الملف التعريفي للشركة (نسخة الموقع التعريفي بتاريخ 2026-10-15).
   - اترك أي حقل فارغًا ("") إذا لم تكن بياناته متوفرة؛ سيُخفى تلقائيًا.
   - الأقسام التي تكون مصفوفتها فارغة ([]) تُخفى من الصفحة ومن القائمة.
   - المسارات نسبية من جذر المشروع (مثال: "assets/img/clients/x.jpg").
   ===================================================================== */

window.SITE_DATA = {

  company: {
    name: "سديم لأنظمة الأمن والسلامة",          // الاسم التجاري كما في الشعار
    legalName: "شركة سديم للأمن والسلامة",        // الاسم في السجل التجاري
    nameEn: "Sadeem Safety & Security Systems",
    country: "المملكة العربية السعودية",
    tagline: "توريد، تركيب وصيانة أنظمة الحريق والسلامة",
    description: "نصمم أنظمة الحماية، ننفذها، ونتابع جاهزيتها. حلول متكاملة للمستودعات والمراكز التجارية ومختلف المنشآت في المملكة.",
    logo: "assets/logo/sadeem-logo.png",
    profileFile: "",   // الملف التعريفي PDF: ضعه في assets/docs ثم اكتب مساره هنا
    catalogFile: "",   // كتالوج المنتجات PDF (23 صفحة): ضعه في assets/docs ثم اكتب مساره هنا
    siteUrl: "https://mostafa-gamal-png.github.io/sadeem/"
  },

  /* بيانات التواصل المعتمدة من الملف التعريفي */
  contact: {
    phone: "+966138147277",     // الهاتف
    mobile: "+966567477784",    // الجوال
    whatsapp: "966567477784",   // رقم الواتساب بالصيغة الدولية بدون + (رقم الجوال)
    email: "info@sadeemco.net",
    address: "جدة، حي الهنداوية — 2773 شارع شجرة الزيتون · الرمز البريدي 22321",
    city: "جدة",
    mapUrl: "",                 // رابط خرائط جوجل (اختياري)
    mapEmbedUrl: "",            // رابط التضمين من خرائط جوجل (اختياري)
    workingHours: ""            // مثال: "السبت - الخميس: 8 ص - 5 م"
  },

  /* نصوص رسائل الواتساب الجاهزة لكل نوع طلب */
  whatsappMessages: {
    quote: "السلام عليكم، أرغب في طلب عرض سعر من سديم لأنظمة الأمن والسلامة.\nنوع الطلب: توريد / تركيب / تصميم مخططات\nنوع المنشأة: \nالمدينة: \nتفاصيل إضافية: ",
    maintenance: "السلام عليكم، أرغب في طلب صيانة (متابعة دورية أو صيانة أنظمة قائمة).\nاسم المنشأة: \nالمدينة: \nوصف الحالة: ",
    service: "السلام عليكم، أرغب في الاستفسار عن خدمة: {service}\nاسم المنشأة: \nالمدينة: ",
    product: "السلام عليكم، أرغب في الاستفسار عن منتجات: {product}\nالكمية التقريبية: \nالمدينة: ",
    general: "السلام عليكم، أرغب في التواصل مع سديم لأنظمة الأمن والسلامة."
  },

  /* الشاشة الأولى */
  hero: {
    image: "assets/img/hero/fire-pump-room.jpg",
    imageAlt: "غرفة مضخات وشبكات مكافحة الحريق من أعمال سديم",
    caption: "شبكات وأنظمة مكافحة الحريق",
    captionSub: "توريد، تركيب وصيانة",
    steps: ["تصميم", "توريد", "تركيب", "صيانة"]
  },

  /* شعارات "من عملائنا" (شريط أسفل الشاشة الأولى) */
  clientLogos: [
    { name: "تمر اللوجستية", image: "assets/img/logos/tamer.png" },
    { name: "تمكين", image: "assets/img/logos/tamkeen.png" },
    { name: "سفكو", image: "assets/img/logos/safco.png" },
    { name: "نزيه", image: "assets/img/logos/nazih.png" },
    { name: "عالم الجوهرة", image: "assets/img/logos/jewel-world.png" },
    { name: "يوم بيوم", image: "assets/img/logos/day-by-day.png" }
  ],

  about: {
    paragraphs: [
      "سديم شركة متخصصة في أنظمة الأمن والسلامة والإنذار المبكر والوقاية من الحرائق. نقدم خدمات التوريد والتركيب والصيانة للمنشآت والأفراد والمشاريع في مختلف مناطق المملكة العربية السعودية.",
      "يجمع فريقنا بين المعرفة الفنية والعناية باحتياجات كل مشروع، لتقديم حلول تشمل أنظمة مكافحة الحريق والمراقبة الأمنية ومعدات السلامة."
    ],
    checks: ["جودة التنفيذ", "حلول تناسب مشروعك", "متابعة وصيانة"],
    image: "assets/img/about/tamer-warehouse.jpg",
    imageAlt: "مستودعات تمر من الداخل بعد تركيب أنظمة الحريق والإنذار",
    captionLabel: "من مشروعاتنا",
    caption: "مستودعات تمر",
    captionSub: "أنظمة حريق وإنذار وصيانة"
  },

  /* الخدمات: enabled:false تُخفي الخدمة دون حذفها */
  services: [
    { title: "أنظمة مكافحة الحريق", icon: "flame", note: "حماية متكاملة",
      desc: "توريد وتركيب أنظمة إطفاء الحريق، شبكات الرش الآلي، ومضخات ومعدات مكافحة الحريق." },
    { title: "الإنذار المبكر", icon: "bell", note: "استجابة تبدأ بالاكتشاف",
      desc: "توريد وتركيب أنظمة إنذار الحريق والكشف المبكر، بما يلائم طبيعة المنشأة واحتياجاتها." },
    { title: "مخططات السلامة", icon: "blueprint", note: "تصميم مدروس",
      desc: "تصميم مخططات الرش الآلي والإنذار المبكر، وتنظيم مخططات سلامة الأرواح." },
    { title: "الصيانة والدعم الفني", icon: "wrench", note: "جاهزية مستمرة",
      desc: "صيانة أنظمة مكافحة الحريق والإنذار ومعدات السلامة، للحفاظ على جاهزيتها وكفاءة تشغيلها." },
    { title: "المراقبة الأمنية", icon: "camera", note: "رؤية أوضح. تحكم أفضل.",
      desc: "أنظمة المراقبة الأمنية والتحكم، وحلول ومعدات الأمن التي تناسب مختلف المنشآت." },
    { title: "الشهادات والتقارير الفنية", icon: "certificate", note: "توثيق فني",
      desc: "خدمات شهادات تركيب أدوات السلامة وإعداد التقارير الفنية للمنشآت والمشاريع." }
  ],

  /* مجموعات المنتجات (كتالوج المنتجات) */
  products: {
    intro: "تعرّف على مجموعات منتجات سديم، واستعرض الأنواع والملحقات في كتالوج المنتجات.",
    items: [
      { title: "مضخات الحريق والمحركات", image: "assets/img/products/pumps.png",
        desc: "مجموعات مضخات الحريق، محركات كهربائية وديزل، ومضخات الجوكي وقطع المضخات." },
      { title: "طفايات الحريق وملحقاتها", image: "assets/img/products/extinguishers.png",
        desc: "طفايات البودرة وثاني أكسيد الكربون والرغوة، مع ملحقاتها." },
      { title: "أجهزة إنذار الحريق", image: "assets/img/products/alarm-panels.png",
        desc: "لوحات تحكم، كواشف دخان وحرارة، كواسر زجاج وأجراس وسبرينات." },
      { title: "المواسير والمحابس والوصلات", image: "assets/img/products/pipes-valves.png",
        desc: "محابس شبكات الحريق، وصلات HDPE، ووصلات الجروف والحديد ومحابس النحاس." },
      { title: "صناديق وخراطيم الحريق", image: "assets/img/products/hose-cabinets.png",
        desc: "صناديق الحريق، خراطيم المياه، القواذف ومفاتيح الصناديق." },
      { title: "معدات السلامة", image: "assets/img/products/safety-equipment.png",
        desc: "خوذ وسترات، بطانيات الحريق، صناديق الإسعافات وحواجز السلامة." },
      { title: "اللوحات الإرشادية", image: "assets/img/products/signs.png",
        desc: "لوحات مخارج الطوارئ، منع التدخين، ولوحات معدات الإطفاء." },
      { title: "أبواب الطوارئ وملحقاتها", image: "assets/img/products/emergency-doors.png",
        desc: "أبواب طوارئ مفردة ومزدوجة، مع الكوالين والدفّاشات ورجّاعات الأبواب." },
      { title: "مستلزمات التركيب والكهرباء", image: "assets/img/products/installation-electrical.png",
        desc: "قواطع ومكونات كهربائية، مواسير وعلب تمديدات الإنذار، وأدوات التركيب." }
    ]
  },

  /* المشروعات الموثقة بصورها */
  projects: [
    { name: "السيف بلازا", nameEn: "ALSAIF PLAZA", type: "المراكز التجارية",
      desc: "توريد وتركيب أنظمة مكافحة الحريق والإنذار، مع الصيانة الدورية.",
      scope: ["شبكة الرش الآلي", "الإنذار المبكر", "مضخات الحريق"],
      image: "assets/img/projects/alsaif-plaza.jpg", alt: "واجهة مبنى السيف بلازا" },
    { name: "مستودعات تمر", nameEn: "TAMER WAREHOUSES", type: "القطاع اللوجستي",
      desc: "توريد وتركيب أنظمة مكافحة الحريق والإنذار، مع الصيانة الدورية.",
      scope: ["شبكة الرش الآلي", "الإنذار المبكر", "مضخات الحريق"],
      image: "assets/img/projects/tamer-warehouses.jpg", alt: "مدخل مستودعات تمر" },
    { name: "جولد مور مول", nameEn: "GOLD MORE MALL", type: "التجزئة والترفيه",
      desc: "توريد وتركيب أنظمة مكافحة الحريق والإنذار، مع الصيانة الدورية.",
      scope: ["شبكة الرش الآلي", "الإنذار المبكر", "مضخات الحريق"],
      image: "assets/img/projects/gold-more-mall.jpg", alt: "واجهة جولد مور مول" }
  ],

  /* المواقع التي قدّمنا لها خدمات الأمن والسلامة (حسب القطاع) */
  sectors: {
    title: "مشروعات في قطاعات متنوعة",
    subtitle: "المواقع التي قدّمنا لها خدمات الأمن والسلامة.",
    groups: [
      { title: "المصانع والإنتاج", items: [
        "مصنع درة الأمل للمفروشات 1", "مصنع عطاء جدة 1", "مصنع عصر البركة",
        "مصنع العبوات الصحية", "مصنع وفرة للصناعات الغذائية", "مصنع يورست للصناعات — الدمام" ] },
      { title: "المراكز التجارية", items: [
        "مركز السيف 2", "مركز المجد التجاري", "مركز الصفوة",
        "مركز بن شيهون التجاري", "مركز هدايا مول (بن شيهون)", "مركز ميرا مارت" ] },
      { title: "المستودعات والخدمات اللوجستية", items: [
        "مستودع ربوع الإمارات", "مستودع نماء جدة (بن شيهون)",
        "مستودع شركة العناية الفائقة 1", "مجموعة محمد حسن علي حلوى للخدمات اللوجستية" ] },
      { title: "الحج والمخيمات", items: [
        "شركة مطوفي الحجاج", "شركة انتجرال — مشروع مخيمات منى" ] }
    ],
    extra: "ومن سجل أعمالنا أيضًا: معارض شركة تمكين · معرض عالم الجوهرة · مستودعات شركة نزيه لمواد التجميل"
  },

  /* عملاء قدمنا لهم خدمات الأمن والسلامة (14 صورة) */
  clients: [
    { name: "قمة 10", image: "assets/img/clients/qimma-10.jpg", thumb: "assets/img/clients/thumbs/qimma-10.jpg", alt: "واجهة قمة 10" },
    { name: "ميرا مارت", image: "assets/img/clients/mira-mart.jpg", thumb: "assets/img/clients/thumbs/mira-mart.jpg", alt: "واجهة ميرا مارت" },
    { name: "مركز السنابل", image: "assets/img/clients/al-sanabel-center.jpg", thumb: "assets/img/clients/thumbs/al-sanabel-center.jpg", alt: "واجهة مركز السنابل" },
    { name: "مركز السفينة التجاري", image: "assets/img/clients/al-safina-center.jpg", thumb: "assets/img/clients/thumbs/al-safina-center.jpg", alt: "واجهة مركز السفينة التجاري" },
    { name: "عالم الجوهرة", image: "assets/img/clients/jewel-world.jpg", thumb: "assets/img/clients/thumbs/jewel-world.jpg", alt: "واجهة معرض عالم الجوهرة" },
    { name: "عابر المحركات لخدمات السيارات", image: "assets/img/clients/aber-motors.jpg", thumb: "assets/img/clients/thumbs/aber-motors.jpg", alt: "واجهة عابر المحركات" },
    { name: "الهدايا الرومانية", image: "assets/img/clients/roman-gifts.jpg", thumb: "assets/img/clients/thumbs/roman-gifts.jpg", alt: "واجهة الهدايا الرومانية" },
    { name: "شركة السيف للتوكيلات التجارية", image: "assets/img/clients/alsaif-agencies.jpg", thumb: "assets/img/clients/thumbs/alsaif-agencies.jpg", alt: "لافتة شركة السيف للتوكيلات التجارية" },
    { name: "شركة سدو العرب للتجارة", image: "assets/img/clients/sadu-al-arab.jpg", thumb: "assets/img/clients/thumbs/sadu-al-arab.jpg", alt: "مستودع شركة سدو العرب للتجارة" },
    { name: "الشركة المتحدة للسكر", image: "assets/img/clients/united-sugar.jpg", thumb: "assets/img/clients/thumbs/united-sugar.jpg", alt: "مستودع الشركة المتحدة للسكر" },
    { name: "تمر اللوجستية", image: "assets/img/clients/tamer-logistics.jpg", thumb: "assets/img/clients/thumbs/tamer-logistics.jpg", alt: "مدخل تمر اللوجستية" },
    { name: "شركة التوريدات العالمية للاستثمار", image: "assets/img/clients/global-supplies.jpg", thumb: "assets/img/clients/thumbs/global-supplies.jpg", alt: "مستودع شركة التوريدات العالمية للاستثمار" },
    { name: "مصنع حلول مورا العالمي للصناعة", image: "assets/img/clients/mora-solutions-factory.jpg", thumb: "assets/img/clients/thumbs/mora-solutions-factory.jpg", alt: "واجهة مصنع حلول مورا العالمي للصناعة" },
    { name: "بقشة", image: "assets/img/clients/bagsha.jpg", thumb: "assets/img/clients/thumbs/bagsha.jpg", alt: "واجهة بقشة" }
  ],

  /* شركاء النجاح (لم يُذكر شركاء في الملف التعريفي) */
  partners: [],

  /* التراخيص ووثائق الشركة - بمسمياتها كما في الملف التعريفي */
  documents: [
    { title: "ترخيص نشاط السلامة", issuer: "الدفاع المدني · منصة سلامة",
      details: [["رقم الترخيص", "100000305"], ["تاريخ الانتهاء", "28 ديسمبر 2027"]],
      expires: "2027-12-28",
      preview: "assets/img/documents/safety-license.jpg", file: "assets/img/documents/safety-license.jpg" },
    { title: "تركيب وصيانة الأجهزة الأمنية", issuer: "الهيئة العليا للأمن الصناعي",
      details: [["منطقة النشاط", "جدة"], ["تاريخ الانتهاء", "23 / 03 / 1449 هـ"]],
      expires: "2027-08-24",   // التاريخ الميلادي التقريبي الموافق لـ 23 ربيع الأول 1449هـ (لحساب حالة الصلاحية)
      preview: "assets/img/documents/industrial-security-license.jpg", file: "assets/img/documents/industrial-security-license.jpg" },
    { title: "السجل التجاري", issuer: "وزارة التجارة",
      details: [["المنشأة", "شركة سديم للأمن والسلامة"], ["الرقم الموحد للمنشأة", "7016409638"]],
      expires: "",
      preview: "assets/img/documents/commercial-register.jpg", file: "assets/img/documents/commercial-register.jpg" }
  ],

  /* روابط التواصل الاجتماعي (اختياري) */
  social: { linkedin: "", twitter: "", instagram: "" }
};
