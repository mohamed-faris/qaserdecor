import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { articles, services } from "./content.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://qaserdecor.com";
const phone = "+971507427070";
const phoneDisplay = "+971 50 742 7070";
const email = "qaseralshamali@gmail.com";
const publishedDate = "2026-10-06";
const lastModified = "2026-10-11";

const locations = [
  {
    slug: "abu-dhabi",
    image: "modern-cove-reception.webp",
    en: {
      city: "Abu Dhabi",
      title: "Gypsum Board Work in Abu Dhabi | Qasr Alshamali",
      description: "Gypsum-board ceiling and wall decoration and site execution for villas and majlis rooms in Abu Dhabi. Modern ceilings, coves, TV walls, niches and lighting-ready details.",
      intro: "Qasr Alshamali provides specialist gypsum-board ceiling and wall design detailing and execution for suitable villa and majlis projects in Abu Dhabi. We turn an agreed modern or classic reference into measured, buildable levels, openings and finishes.",
      sections: [
        ["Gypsum-board work planned for the actual Abu Dhabi room", ["A successful ceiling begins with the room’s clear height, beams, curtain pockets, air-conditioning points and intended lighting—not with a copied online image. We review those constraints before agreeing drops, coves, shadow gaps or wall composition.", "For a villa reception, majlis or private room, the setting-out is adjusted around entrances, windows and the main furniture axis. This gives the finished ceiling or wall a deliberate proportion from the positions where it will be seen."]],
        ["Specialist ceiling and wall scope", ["Our work is limited to gypsum-board decoration and execution for ceilings and walls. The scope can include the details that make a modern gypsum composition work as one system."], ["False ceilings, recessed trays, coves and shadow gaps", "Curtain pockets, spotlight openings and linear-light channels", "Gypsum-board TV walls, niches, arches and framed wall panels", "Metal framing, boards, jointing and finish preparation", "Coordination of access openings with the responsible services trades"]],
        ["A clear route from site survey to handover", ["Share the Abu Dhabi project area, room type, current condition and a few useful references. We use the survey to confirm levels, openings and any conditions that affect the buildable scope.", "Before boards are closed, framing geometry and service locations should be checked. At handover, surfaces, lighting effects and maintenance access are reviewed as one finished composition."]]
      ],
      faqs: [
        { q: "Do you work on gypsum-board ceilings in Abu Dhabi villas?", a: "Yes, for suitable Abu Dhabi villa and majlis projects. The final scope follows a site review, measured room conditions and the agreed gypsum-board detail." },
        { q: "Do you provide complete interior design in Abu Dhabi?", a: "No. Qasr Alshamali specialises in gypsum-board ceiling and wall decoration and execution, not furniture, joinery or complete interior design." },
        { q: "What should I send before requesting a visit?", a: "Send the location, room type, current photos, any useful reference and the preferred timing through WhatsApp. This helps define whether a site survey is the right next step." }
      ]
    },
    ar: {
      city: "أبوظبي",
      title: "تنفيذ جبس بورد في أبوظبي | قصر الشمالي",
      description: "تصميم وتنفيذ ديكورات الجبس بورد للأسقف والجدران للفلل والمجالس في أبوظبي: أسقف مودرن، كوفات، جدران تلفاز، نيشات وتجهيزات الإضاءة.",
      intro: "قصر الشمالي متخصص في تفصيل وتنفيذ أعمال الجبس بورد للأسقف والجدران للمشاريع المناسبة في أبوظبي، بما يشمل الفلل والمجالس. نحوّل المرجع المودرن أو الكلاسيكي المتفق عليه إلى مناسيب وفتحات وتشطيبات قابلة للتنفيذ بعد القياس.",
      sections: [
        ["أعمال جبس بورد مصممة لمكانك في أبوظبي", ["يبدأ السقف الناجح من الارتفاع الصافي والجوائز وبيت الستارة ومواقع التكييف والإضاءة، وليس من نسخ صورة من الإنترنت. نراجع هذه العناصر قبل اعتماد المناسيب أو الكوفات أو خطوط الظل أو تكوين الجدار.", "في الاستقبال أو المجلس أو الغرفة الخاصة نضبط المحاور حسب المداخل والنوافذ ومركز الأثاث، حتى تظهر نسب السقف أو الجدار متوازنة من أماكن الاستخدام الفعلية."]],
        ["نطاق متخصص للأسقف والجدران", ["نطاقنا محدد في ديكور وتنفيذ الجبس بورد للأسقف والجدران، مع التفاصيل التي تجعل التكوين المودرن متكاملاً."], ["أسقف مستعارة وصوانٍ وكوفات وخطوط ظل", "بيوت ستائر وفتحات سبوتات وقنوات إنارة خطية", "خلفيات تلفاز ونيشات وأقواس وفريمات جدارية بالجبس بورد", "هياكل معدنية وألواح ومعالجة فواصل وتجهيز للتشطيب", "تنسيق فتحات الصيانة مع الفنيين المختصين بالخدمات"]],
        ["من المعاينة إلى التسليم", ["أرسل موقع المشروع في أبوظبي ونوع الغرفة وصور الوضع الحالي وبعض المراجع المفيدة. نستخدم المعاينة لتثبيت المناسيب والفتحات والظروف التي تؤثر في نطاق التنفيذ.", "قبل إغلاق الألواح تُراجع استقامة الهيكل ومواقع الخدمات. وعند التسليم نفحص الأسطح وتأثير الإضاءة وفتحات الصيانة كتكوين واحد."]]
      ],
      faqs: [
        { q: "هل تنفذون أسقف جبس بورد للفلل في أبوظبي؟", a: "نعم للمشاريع المناسبة من الفلل والمجالس في أبوظبي. يتحدد النطاق النهائي بعد معاينة المكان وقياساته والاتفاق على تفاصيل الجبس بورد." },
        { q: "هل تقدمون ديكور داخلي كامل في أبوظبي؟", a: "لا. تخصص قصر الشمالي هو ديكور وتنفيذ الجبس بورد للأسقف والجدران، وليس الأثاث أو النجارة أو التصميم الداخلي الشامل." },
        { q: "ماذا أرسل قبل طلب المعاينة؟", a: "أرسل موقع المشروع ونوع الغرفة وصور الوضع الحالي وأي مرجع مفيد والوقت المفضل عبر واتساب، حتى نحدد إن كانت المعاينة هي الخطوة المناسبة." }
      ]
    }
  },
  {
    slug: "al-ain",
    image: "modern-gypsum-tv-wall.webp",
    en: {
      city: "Al Ain",
      title: "Gypsum Board Work in Al Ain | Qasr Alshamali",
      description: "Gypsum-board ceiling and wall decoration and execution in Al Ain for villas and majlis rooms. Measured false ceilings, coves, TV walls, niches and lighting-ready details.",
      intro: "Based in Al Ain, Qasr Alshamali specialises in the measured design detailing and site execution of gypsum-board ceilings and walls for villas, majlis rooms and selected projects.",
      sections: [
        ["Start with a measured Al Ain site survey", ["The ceiling level that suits one room may not suit another. We begin by reading the existing dimensions, beams, windows, curtain treatment, air-conditioning points and intended lighting before the gypsum layout is confirmed.", "That information guides the board levels, centre lines, openings and maintenance access. It also prevents a reference image from being forced into a room where its proportions do not work."]],
        ["Modern gypsum-board details for ceilings and walls", ["A restrained modern detail is built from accurate framing and controlled transitions. We focus on the gypsum-board parts of the composition and coordinate related service locations before closure."], ["Recessed and multi-level gypsum-board ceilings", "Concealed-light coves, curtain pockets and shadow-line details", "Television-wall backgrounds, niches, framed panels and arches", "Openings for downlights, linear profiles, chandeliers and access panels", "Jointing and surface preparation for the agreed finishing system"]],
        ["What makes execution dependable", ["The visible finish relies on decisions that disappear behind the boards: framing alignment, backing, service coordination and time for joint treatment. Those items are reviewed before the next stage covers them.", "For an Al Ain project, send current room photos and the preferred gypsum style. We can then arrange the appropriate next step and define a clear specialist scope."]]
      ],
      faqs: [
        { q: "Are you based in Al Ain?", a: "Yes. Al Ain is the business location, and the team serves suitable projects in Al Ain, Abu Dhabi and Dubai." },
        { q: "What gypsum-board work do you carry out in Al Ain?", a: "The specialist scope covers gypsum-board ceilings and walls: false ceilings, coves, curtain pockets, TV walls, niches, arches, framing, boards and finish preparation." },
        { q: "Can you price a gypsum ceiling from a photo?", a: "Photos are useful for an initial discussion, but a final price requires the room measurements, the agreed detail and any conditions that affect execution." }
      ]
    },
    ar: {
      city: "العين",
      title: "تنفيذ جبس بورد في العين | قصر الشمالي",
      description: "ديكور وتنفيذ الجبس بورد للأسقف والجدران في العين للفلل والمجالس: أسقف مستعارة وكوفات وجدران تلفاز ونيشات وتجهيزات الإضاءة.",
      intro: "يقع قصر الشمالي في العين ويتخصص في تفصيل وتنفيذ أعمال الجبس بورد للأسقف والجدران للفلل والمجالس والمشاريع المختارة، انطلاقاً من القياس الفعلي للمكان.",
      sections: [
        ["نبدأ بمعاينة وقياس المكان في العين", ["المستوى المناسب لسقف غرفة لا يلزم أن يناسب غرفة أخرى. نبدأ بقراءة الأبعاد والجوائز والنوافذ وبيت الستارة ومواقع التكييف والإضاءة قبل تثبيت توزيع الجبس بورد.", "هذه المعلومات تحدد المناسيب والمحاور والفتحات وفتحات الصيانة، وتمنع فرض صورة مرجعية على غرفة لا تناسبها نسب ذلك التصميم."]],
        ["تفاصيل جبس بورد مودرن للأسقف والجدران", ["التفصيل المودرن الهادئ يعتمد على هيكل دقيق وانتقالات منضبطة. نركز على عناصر الجبس بورد وننسق مواقع الخدمات المرتبطة قبل الإغلاق."], ["أسقف جبس بورد نازلة ومتعددة المستويات", "كوفات بإضاءة مخفية وبيوت ستائر وخطوط ظل", "خلفيات تلفاز ونيشات وفريمات وأقواس جدارية", "فتحات سبوتات وإنارة خطية وثريات وفتحات صيانة", "معالجة فواصل وتجهيز الأسطح لنظام التشطيب المتفق عليه"]],
        ["ما الذي يجعل التنفيذ موثوقاً؟", ["التشطيب الظاهر يعتمد على قرارات مخفية خلف الألواح: استقامة الهيكل والتدعيم وتنسيق الخدمات ووقت معالجة الفواصل. نراجع هذه النقاط قبل تغطيتها بالمرحلة التالية.", "للمشروع في العين أرسل صور الغرفة الحالية والستايل المطلوب، ثم نحدد الخطوة المناسبة ونطاق العمل المتخصص بوضوح."]]
      ],
      faqs: [
        { q: "هل مقر قصر الشمالي في العين؟", a: "نعم. مقر العمل في العين، ونخدم المشاريع المناسبة في العين وأبوظبي ودبي." },
        { q: "ما أعمال الجبس بورد التي تنفذونها في العين؟", a: "يشمل تخصصنا أسقف وجدران الجبس بورد: الأسقف المستعارة والكوفات وبيوت الستائر وخلفيات التلفاز والنيشات والأقواس والهياكل والألواح وتجهيز السطح." },
        { q: "هل يمكن تسعير سقف الجبس من صورة فقط؟", a: "تفيد الصور في النقاش الأولي، لكن السعر النهائي يحتاج إلى قياسات الغرفة والتفاصيل المتفق عليها والظروف التي تؤثر على التنفيذ." }
      ]
    }
  }
];

const imageDimensions = {
  "classic-majlis-1024w.webp": [1024, 1536],
  "patterned-majlis-1024w.webp": [1024, 1536],
  "classic-cove-720w.webp": [720, 1280],
  "marble-majlis-676w.webp": [676, 1200],
  "before-renovation-774w.webp": [774, 1032],
  "octagonal-ceiling-1024w.webp": [1024, 1536],
  "coffered-ceiling-1024w.webp": [1024, 1536],
  "circular-ceiling-1024w.webp": [1024, 1024],
  "modern-ceiling-hero.webp": [1122, 1402],
  "modern-cove-reception.webp": [1536, 1024],
  "modern-gypsum-tv-wall.webp": [1122, 1402],
  "gypsum-ceiling-execution.webp": [1536, 1024]
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function image(name, alt, className, loading) {
  const size = imageDimensions[name] || [1024, 1024];
  return [
    '<img src="/assets/images/', escapeHtml(name), '"',
    ' width="', size[0], '" height="', size[1], '"',
    ' alt="', escapeHtml(alt), '"',
    className ? ' class="' + escapeHtml(className) + '"' : "",
    ' loading="', loading || "lazy", '" decoding="async"',
    loading === "eager" ? ' fetchpriority="high"' : "", ">"
  ].join("");
}

function pathFor(lang, path) {
  if (lang === "ar") return path === "/" ? "/ar/" : "/ar" + path;
  return path;
}

function pairFor(path) {
  return { en: path, ar: path === "/" ? "/ar/" : "/ar" + path };
}

function businessSchema() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": site + "/#business",
    name: "Al Qaser Al Shamali",
    alternateName: "قصر الشمالي",
    url: site + "/",
    image: site + "/assets/images/modern-ceiling-hero.webp",
    logo: site + "/assets/images/logo-500.webp",
    telephone: phone,
    email,
    description: "Specialist gypsum-board ceiling and wall decoration and execution for villas, majlis rooms and selected projects in the UAE.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al Ain",
      addressRegion: "Abu Dhabi",
      addressCountry: "AE"
    },
    areaServed: ["Abu Dhabi", "Al Ain", "Dubai"].map((name) => ({ "@type": "City", name })),
    knowsLanguage: ["en", "ar"],
    knowsAbout: [
      "Gypsum-board ceiling decoration",
      "Gypsum-board wall decoration",
      "False ceilings",
      "Concealed cove lighting details",
      "Television feature walls",
      "Gypsum-board site execution"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phone,
      email,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
      areaServed: ["Abu Dhabi", "Al Ain", "Dubai"]
    },
    sameAs: ["https://www.instagram.com/qaser.uae/"]
  };
}

function head(options) {
  const lang = options.lang;
  const locale = lang === "ar" ? "ar_AE" : "en_AE";
  const canonical = site + options.path;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [businessSchema(), ...(options.schema || [])]
  };
  const socialImage = options.image || "modern-ceiling-hero.webp";
  const socialSize = imageDimensions[socialImage] || [1200, 630];
  return [
    "<!doctype html>\n",
    '<html lang="', lang === "ar" ? "ar-AE" : "en-AE", '" dir="', lang === "ar" ? "rtl" : "ltr", '">\n<head>\n',
    '<meta charset="utf-8">\n',
    '<meta name="viewport" content="width=device-width,initial-scale=1">\n',
    "<title>", escapeHtml(options.title), "</title>\n",
    '<meta name="description" content="', escapeHtml(options.description), '">\n',
    '<meta name="author" content="Al Qaser Al Shamali">\n',
    '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">\n',
    '<meta name="theme-color" content="#171713">\n',
    '<link rel="canonical" href="', canonical, '">\n',
    '<link rel="alternate" hreflang="en-AE" href="', site + options.alternates.en, '">\n',
    '<link rel="alternate" hreflang="ar-AE" href="', site + options.alternates.ar, '">\n',
    '<link rel="alternate" hreflang="x-default" href="', site + options.alternates.en, '">\n',
    '<link rel="icon" href="/favicon.ico">\n',
    '<link rel="apple-touch-icon" href="/assets/images/icon-180.png">\n',
    '<link rel="manifest" href="/site.webmanifest">\n',
    '<link rel="stylesheet" href="/assets/css/styles.min.css">\n',
    '<meta property="og:type" content="', options.ogType || "website", '">\n',
    '<meta property="og:site_name" content="Al Qaser Al Shamali">\n',
    '<meta property="og:locale" content="', locale, '">\n',
    '<meta property="og:title" content="', escapeHtml(options.title), '">\n',
    '<meta property="og:description" content="', escapeHtml(options.description), '">\n',
    '<meta property="og:url" content="', canonical, '">\n',
    '<meta property="og:image" content="', site + "/assets/images/" + socialImage, '">\n',
    '<meta property="og:image:width" content="', socialSize[0], '">\n',
    '<meta property="og:image:height" content="', socialSize[1], '">\n',
    '<meta property="og:image:alt" content="', escapeHtml(options.imageAlt || options.title), '">\n',
    '<meta name="twitter:card" content="summary_large_image">\n',
    '<meta name="twitter:title" content="', escapeHtml(options.title), '">\n',
    '<meta name="twitter:description" content="', escapeHtml(options.description), '">\n',
    '<meta name="twitter:image" content="', site + "/assets/images/" + socialImage, '">\n',
    '<meta name="twitter:image:alt" content="', escapeHtml(options.imageAlt || options.title), '">\n',
    '<script type="application/ld+json">', JSON.stringify(schema).replaceAll("<", "\\u003c"), "</script>\n",
    '<script src="/assets/js/app.min.js" defer></script>\n',
    "</head>\n"
  ].join("");
}

function header(lang, current, alternatePath) {
  const ar = lang === "ar";
  const home = pathFor(lang, "/");
  const nav = ar
    ? [
        [home, "الرئيسية", "home"],
        [home + "#work", "أعمالنا", "work"],
        [home + "#expertise", "تخصصنا", "services"],
        ["/ar/blog/", "المجلة", "blog"],
        ["/ar/about/", "من نحن", "about"]
      ]
    : [
        ["/", "Home", "home"],
        ["/#work", "Selected work", "work"],
        ["/#expertise", "Expertise", "services"],
        ["/blog/", "Journal", "blog"],
        ["/about/", "About", "about"]
      ];
  const navHtml = nav.map((item) => {
    const active = item[2] === current ? ' aria-current="page"' : "";
    return '<a href="' + item[0] + '"' + active + ">" + item[1] + "</a>";
  }).join("");
  return [
    "<body>\n",
    '<a class="skip-link" href="#main">', ar ? "انتقل إلى المحتوى" : "Skip to content", "</a>\n",
    '<div class="notice"><div class="container notice-inner"><span>',
    ar ? "متخصصون في ديكور وتنفيذ الجبس بورد — الإمارات" : "Gypsum-board decoration & execution — UAE",
    '</span><a href="tel:', phone, '" dir="ltr">', phoneDisplay, "</a></div></div>\n",
    '<header class="site-header"><div class="container header-inner">\n',
    '<a class="wordmark" href="', home, '"><strong>', ar ? "قصر الشمالي" : "QASR ALSHAMALI", "</strong><small>",
    ar ? "ديكور الجبس بورد" : "Gypsum board specialists", "</small></a>\n",
    '<nav class="main-nav" aria-label="', ar ? "التنقل الرئيسي" : "Main navigation", '" data-nav>', navHtml, "</nav>\n",
    '<div class="header-actions"><a class="language-link" href="', alternatePath, '" hreflang="', ar ? "en-AE" : "ar-AE", '">',
    ar ? "EN" : "العربية", '</a><a class="header-cta" href="', home, '#contact">',
    ar ? "اطلب معاينة" : "Request a visit", '</a><button class="menu-toggle" type="button" aria-expanded="false" aria-label="',
    ar ? "فتح القائمة" : "Open menu", '" data-menu>☰</button></div>\n',
    "</div></header>\n"
  ].join("");
}

function footer(lang) {
  const ar = lang === "ar";
  const home = pathFor(lang, "/");
  return [
    '<footer class="site-footer"><div class="container">\n',
    '<div class="footer-grid"><div><div class="footer-mark">', ar ? "قصر الشمالي" : "Qasr Alshamali", "</div><p class=\"footer-note\">",
    ar ? "تخصص واضح: تصميم وتنفيذ ديكورات الجبس بورد للأسقف والجدران في أبوظبي والعين ودبي." : "One clear specialism: gypsum-board ceiling and wall decoration, designed and executed in Abu Dhabi, Al Ain and Dubai.",
    "</p></div>\n",
    '<div><h2>', ar ? "التخصص" : "Expertise", '</h2><ul>',
    '<li><a href="', pathFor(lang, "/services/gypsum-ceilings/"), '">', ar ? "ديكور الأسقف" : "Ceiling decoration", "</a></li>",
    '<li><a href="', pathFor(lang, "/services/gypsum-walls/"), '">', ar ? "ديكور الجدران" : "Wall details", "</a></li>",
    '<li><a href="', pathFor(lang, "/services/led-lighting/"), '">', ar ? "دمج الإضاءة" : "Lighting details", "</a></li>",
    '<li><a href="', pathFor(lang, "/services/modern-classic-finishing/"), '">', ar ? "الستايلات والتنفيذ" : "Styles & execution", "</a></li>",
    "</ul></div>\n",
    '<div><h2>', ar ? "استكشف" : "Explore", '</h2><ul>',
    '<li><a href="', home, '#work">', ar ? "أعمال مختارة" : "Selected work", "</a></li>",
    '<li><a href="', pathFor(lang, "/locations/abu-dhabi/"), '">', ar ? "أعمال الجبس بورد في أبوظبي" : "Gypsum board work in Abu Dhabi", "</a></li>",
    '<li><a href="', pathFor(lang, "/locations/al-ain/"), '">', ar ? "أعمال الجبس بورد في العين" : "Gypsum board work in Al Ain", "</a></li>",
    '<li><a href="', pathFor(lang, "/blog/"), '">', ar ? "مجلة الجبس بورد" : "Gypsum journal", "</a></li>",
    '<li><a href="', pathFor(lang, "/about/"), '">', ar ? "من نحن" : "About us", "</a></li>",
    '<li><a href="', home, '#contact">', ar ? "التواصل" : "Contact", "</a></li>",
    "</ul></div>\n",
    '<div><h2>', ar ? "تواصل" : "Contact", '</h2><ul>',
    '<li><a href="tel:', phone, '" dir="ltr">', phoneDisplay, "</a></li>",
    '<li><a href="https://wa.me/971507427070" target="_blank" rel="noopener">WhatsApp</a></li>',
    '<li><a href="mailto:', email, '">', email, "</a></li>",
    '<li><a href="https://www.instagram.com/qaser.uae/" target="_blank" rel="noopener">Instagram</a></li>',
    "</ul></div></div>\n",
    '<div class="footer-bottom"><span>© <span data-year>2026</span> ', ar ? "قصر الشمالي. جميع الحقوق محفوظة." : "Al Qaser Al Shamali. All rights reserved.", "</span><span>",
    ar ? "أبوظبي • العين • دبي" : "Abu Dhabi • Al Ain • Dubai", "</span></div>\n",
    '</div></footer><a class="whatsapp" href="https://wa.me/971507427070" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>\n',
    "</body>\n</html>\n"
  ].join("");
}

function breadcrumbs(lang, items) {
  const ar = lang === "ar";
  const links = items.map((item, index) => {
    const content = item.href ? '<a href="' + item.href + '">' + escapeHtml(item.name) + "</a>" : escapeHtml(item.name);
    return "<li>" + content + "</li>";
  }).join("");
  return '<nav class="breadcrumbs" aria-label="' + (ar ? "مسار الصفحة" : "Breadcrumb") + '"><div class="container"><ol>' + links + "</ol></div></nav>\n";
}

function breadcrumbSchema(path, lang, items) {
  return {
    "@type": "BreadcrumbList",
    "@id": site + path + "#breadcrumb",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: site + item.path } : {})
    }))
  };
}

function faqSection(lang, entries) {
  const ar = lang === "ar";
  return [
    '<section class="section faq-section"><div class="container"><div class="section-head" data-reveal><div><span class="eyebrow">',
    ar ? "أسئلة واضحة" : "Straight answers", '</span><h2>', ar ? "قبل أن تبدأ المشروع." : "Before you start a project.",
    '</h2></div><p>', ar ? "إجابات مختصرة على الأسئلة التي تساعد في تحديد نطاق عمل الجبس بورد قبل المعاينة." : "Short, practical answers that help define a gypsum-board scope before the site survey.",
    '</p></div><div class="faq-list">',
    entries.map((entry, index) => '<details' + (index === 0 ? " open" : "") + ' data-reveal><summary>' + escapeHtml(entry.q) + '</summary><p>' + escapeHtml(entry.a) + "</p></details>").join(""),
    "</div></div></section>\n"
  ].join("");
}

function contactBand(lang) {
  const ar = lang === "ar";
  return [
    '<section class="section section-dark" id="contact"><div class="container contact-band" data-reveal>\n',
    '<div><span class="eyebrow">', ar ? "ابدأ من الموقع" : "Start on site", '</span><h2>',
    ar ? "لديك فكرة لسقف أو جدار؟" : "Have a ceiling or wall in mind?", '</h2><p class="lede">',
    ar ? "أرسل موقع المشروع ونوع الغرفة وصور الحالة الحالية. نرتب المعاينة ثم نحدد نطاق الجبس بورد القابل للتنفيذ." : "Send the project area, room type and photos of the current condition. We will arrange a survey and define a buildable gypsum-board scope.",
    '</p><div class="button-row"><a class="button solid" href="https://wa.me/971507427070" target="_blank" rel="noopener">',
    ar ? "تواصل عبر واتساب" : "Start on WhatsApp", "</a></div></div>\n",
    '<div class="contact-details"><div class="contact-detail"><span>', ar ? "الهاتف" : "Phone", '</span><a href="tel:', phone, '" dir="ltr">', phoneDisplay, '</a></div>',
    '<div class="contact-detail"><span>', ar ? "البريد" : "Email", '</span><a href="mailto:', email, '">', email, '</a></div>',
    '<div class="contact-detail"><span>', ar ? "مناطق الخدمة" : "Service areas", '</span><span>', ar ? "أبوظبي، العين، دبي" : "Abu Dhabi, Al Ain, Dubai", "</span></div></div>\n",
    "</div></section>\n"
  ].join("");
}

function homepage(lang) {
  const ar = lang === "ar";
  const path = ar ? "/ar/" : "/";
  const alternate = ar ? "/" : "/ar/";
  const title = ar ? "قصر الشمالي | ديكور وتنفيذ الجبس بورد في أبوظبي" : "Gypsum Board Decoration Abu Dhabi | Qasr Alshamali";
  const description = ar
    ? "قصر الشمالي متخصص في تصميم وتنفيذ ديكورات الجبس بورد للأسقف والجدران في أبوظبي والعين ودبي."
    : "Specialist gypsum-board ceiling and wall decoration, design coordination and execution for villas and majlis rooms in Abu Dhabi, Al Ain and Dubai.";
  const faqs = ar
    ? [
        { q: "هل تنفذون ديكور داخلي كامل؟", a: "لا. تركيزنا في تصميم وتنفيذ الجبس بورد للأسقف والجدران: الكوفات، بيوت الستائر، الإنارة المخفية، النيشات وخلفيات التلفاز والتفاصيل المرتبطة بها." },
        { q: "كيف أبدأ طلب تسعير؟", a: "أرسل المدينة ونوع الغرفة وصور الوضع الحالي وأي صورة مرجعية عبر واتساب. يتم تأكيد النطاق والسعر بعد القياس وتحديد التفاصيل القابلة للتنفيذ." },
        { q: "هل تنسقون مواقع الإضاءة والتكييف؟", a: "نحدد فتحات ومناسيب الجبس بورد ونتابع تنسيقها مع الفنيين المختصين بالكهرباء والتكييف قبل إغلاق الألواح." },
        { q: "ما المناطق التي تخدمونها؟", a: "نعمل في العين وأبوظبي ودبي للمشاريع المناسبة، مع تحديد المعاينة ونطاق العمل حسب الموقع." }
      ]
    : [
        { q: "Do you provide full interior decoration?", a: "No. Our focus is gypsum-board ceiling and wall design and execution: coves, curtain pockets, concealed-light details, niches, television walls and the details that belong to them." },
        { q: "How do I request a quotation?", a: "Send the city, room type, current photos and a useful reference through WhatsApp. Scope and pricing are confirmed after measurement and an agreed buildable detail." },
        { q: "Do you coordinate lighting and AC points?", a: "We define gypsum-board levels and openings, then coordinate their locations with the responsible electrical and air-conditioning trades before the boards are closed." },
        { q: "Which areas do you serve?", a: "We work in Al Ain, Abu Dhabi and Dubai for suitable projects, with the survey and scope agreed according to the location." }
      ];
  const pageSchema = {
    "@type": "WebPage",
    "@id": site + path + "#webpage",
    url: site + path,
    name: title,
    description,
    inLanguage: ar ? "ar-AE" : "en-AE",
    about: { "@id": site + "/#business" },
    primaryImageOfPage: site + "/assets/images/modern-ceiling-hero.webp"
  };
  const websiteSchema = {
    "@type": "WebSite",
    "@id": site + "/#website",
    url: site + "/",
    name: "Al Qaser Al Shamali",
    alternateName: "Qasr Alshamali",
    inLanguage: ["en-AE", "ar-AE"],
    publisher: { "@id": site + "/#business" }
  };
  const faqSchema = {
    "@type": "FAQPage",
    "@id": site + path + "#faq",
    mainEntity: faqs.map((entry) => ({ "@type": "Question", name: entry.q, acceptedAnswer: { "@type": "Answer", text: entry.a } }))
  };
  const serviceRows = services.map((service, index) => {
    const item = service[lang];
    return [
      '<a class="service-link" href="', pathFor(lang, "/services/" + service.slug + "/"), '" data-reveal>',
      "<span>", String(index + 1).padStart(2, "0"), "</span><h3>", escapeHtml(item.label), "</h3><p>",
      escapeHtml(item.description), '</p><span class="arrow">+</span></a>'
    ].join("");
  }).join("");
  const articleCards = articles.slice(0, 3).map((article, index) => {
    const item = article[lang];
    return [
      '<a class="journal-card" href="', pathFor(lang, "/blog/" + article.slug + "/"), '" data-reveal>',
      '<div class="journal-meta"><span>', escapeHtml(item.category), "</span><span>0", index + 1, "</span></div>",
      '<div class="card-image">', image(article.image, item.title), "</div><h3>", escapeHtml(item.title), "</h3><p>",
      escapeHtml(item.deck), "</p></a>"
    ].join("");
  }).join("");
  const locationCards = locations.map((location) => {
    const item = location[lang];
    return [
      '<a class="location-card" href="', pathFor(lang, "/locations/" + location.slug + "/"), '" data-reveal><span class="kicker">',
      ar ? "منطقة خدمة" : "Service area", '</span><h3>', escapeHtml(item.city), '</h3><p>', escapeHtml(item.description),
      '</p><span class="location-card-link">', ar ? "استكشف الخدمة" : "Explore the local service", "</span></a>"
    ].join("");
  }).join("");
  const body = [
    header(lang, "home", alternate),
    '<main id="main">\n',
    '<section class="hero"><div class="hero-copy"><div><span class="eyebrow">',
    ar ? "متخصصون في الجبس بورد" : "Gypsum board specialists", '</span><h1>',
    ar ? "نشكّل السقف والجدار." : "Ceilings and walls, shaped with purpose.", '</h1><p class="lede">',
    ar ? "نصمم تفاصيل الجبس بورد وننفذها في الأسقف والجدران للفلل والمجالس في أبوظبي والعين ودبي. هذا هو تخصصنا — لا نقدم الديكور الداخلي العام." : "We design and execute gypsum-board details for ceilings and walls in villas and majlis rooms across Abu Dhabi, Al Ain and Dubai. This is our specialism—not general interior décor.",
    '</p><div class="button-row"><a class="button solid" href="#contact">', ar ? "اطلب معاينة" : "Request a site visit", '</a><a class="button" href="#work">',
    ar ? "شاهد الأعمال" : "View selected work", '</a></div></div><div class="hero-note"><strong>01</strong><span>',
    ar ? "من الفكرة والقياس إلى الهيكل والمعالجة والتسليم." : "From measured idea to framing, finishing and handover.", "</span></div></div>",
    '<div class="hero-image">', image("modern-ceiling-hero.webp", ar ? "سقف جبس بورد مودرن بإضاءة مخفية في فيلا" : "Modern gypsum-board ceiling with concealed cove lighting in a UAE villa", "", "eager"),
    '<div class="image-label">', ar ? "سقف مودرن بإضاءة مخفية" : "Modern ceiling, concealed light", "<span>", ar ? "جبس بورد • تنفيذ" : "Gypsum board • execution", "</span></div></div></section>\n",
    '<section class="section section-dark"><div class="container manifesto" data-reveal><div class="manifesto-index">02</div><div class="manifesto-copy"><span class="eyebrow">',
    ar ? "تركيز واحد" : "A deliberate focus", '</span><h2>', ar ? "لسنا شركة ديكور عام." : "We are not a general décor company.", '</h2><p>',
    ar ? "نعمل في ديكور وتنفيذ الجبس بورد: أسقف وجدران وكوفات وفتحات وتفاصيل مودرن أو كلاسيك. التخصص يجعل القياس والاتفاق والتنفيذ أوضح." : "We work in gypsum-board decoration and execution: ceilings, walls, coves, openings, and modern or classic details. A focused scope makes design decisions and site responsibility clearer.",
    '</p><div class="scope-list"><div class="scope-row"><span>01</span><strong>', ar ? "أسقف" : "Ceilings", '</strong><p>',
    ar ? "صوانٍ وكوفات ومناسيب وحدود ومراكز زخرفية." : "Trays, coves, levels, borders and decorative centres.", '</p></div><div class="scope-row"><span>02</span><strong>',
    ar ? "جدران" : "Walls", '</strong><p>', ar ? "فريمات ونيشات وأقواس وخلفيات تلفاز." : "Frames, niches, arches and television-wall backgrounds.", '</p></div><div class="scope-row"><span>03</span><strong>',
    ar ? "تنفيذ" : "Execution", '</strong><p>', ar ? "تحديد وهيكل وألواح وفواصل وتجهيز للتشطيب." : "Setting-out, framing, boarding, jointing and finish preparation.", "</p></div></div></div></div></section>\n",
    '<section class="section" id="expertise"><div class="container"><div class="section-head" data-reveal><div><span class="eyebrow">',
    ar ? "تخصصنا" : "Our expertise", '</span><h2>', ar ? "تفاصيل قابلة للتنفيذ." : "Details made buildable.", '</h2></div><p>',
    ar ? "نضبط المرجع على قياسات المكان وننسق الفتحات ثم ننفذ أعمال الجبس بورد بوضوح من أول زيارة حتى الاستلام." : "We adapt the reference to the measured room, coordinate the openings and execute the gypsum-board work from first survey to handover.",
    '</p></div><div class="service-list">', serviceRows, "</div></div></section>\n",
    '<section class="section section-local" id="service-areas"><div class="container"><div class="section-head" data-reveal><div><span class="eyebrow">',
    ar ? "مناطق الخدمة" : "Service areas", '</span><h2>', ar ? "جبس بورد في أبوظبي والعين." : "Gypsum board work in Abu Dhabi and Al Ain.",
    '</h2></div><p>', ar ? "صفحات محلية توضح نطاق أعمال الأسقف والجدران، وكيف نبدأ المعاينة والتفصيل للمشروع حسب المدينة." : "Local guides to the ceiling and wall scope, and how a site survey and detail process begins in each city.",
    '</p></div><div class="location-grid">', locationCards, "</div></div></section>\n",
    '<section class="section" id="work"><div class="container"><div class="section-head" data-reveal><div><span class="eyebrow">',
    ar ? "اتجاهات مودرن" : "Modern gypsum direction", '</span><h2>', ar ? "السقف جزء من العمارة." : "The ceiling is part of the architecture.", '</h2></div><p>',
    ar ? "أمثلة بصرية لتفاصيل السقف والجدار التي يمكن تطويرها حسب القياس الحقيقي للموقع؛ نثبت المقاسات والفتحات قبل البدء في التنفيذ." : "Visual references for ceiling and wall details that are developed around the real site measurement; levels and openings are confirmed before execution begins.",
    '</p></div><div class="work-grid">',
    '<figure class="work-item" data-reveal>', image("gypsum-ceiling-execution.webp", ar ? "هيكل سقف جبس بورد مودرن أثناء التنفيذ" : "Modern gypsum-board ceiling framing during site execution"), '<figcaption><span>',
    ar ? "هيكل وتنفيذ" : "Framing + execution", '</span><span>01</span></figcaption></figure>',
    '<figure class="work-item" data-reveal>', image("modern-gypsum-tv-wall.webp", ar ? "جدار تلفاز جبس بورد مودرن بنيشات مضاءة" : "Modern gypsum-board television wall with illuminated niches"), '<figcaption><span>',
    ar ? "جدار تلفاز مودرن" : "Modern television wall", '</span><span>02</span></figcaption></figure>',
    '<figure class="work-item" data-reveal>', image("modern-ceiling-hero.webp", ar ? "سقف جبس بورد مودرن بإضاءة مخفية" : "Modern gypsum-board ceiling with concealed cove lighting"), '<figcaption><span>',
    ar ? "سقف مودرن" : "Modern ceiling", '</span><span>03</span></figcaption></figure>',
    '<figure class="work-item" data-reveal>', image("modern-cove-reception.webp", ar ? "استقبال في فيلا بسقف جبس بورد مودرن وخطوط ضوء" : "Villa reception with modern gypsum-board coves and light lines"), '<figcaption><span>',
    ar ? "كوفات وخطوط ظل" : "Coves + shadow lines", '</span><span>04</span></figcaption></figure>',
    "</div></div></section>\n",
    '<section class="section"><div class="container"><div class="section-head" data-reveal><div><span class="eyebrow">',
    ar ? "طريقة العمل" : "The process", '</span><h2>', ar ? "أربع مراحل. مسؤولية واضحة." : "Four stages. Clear responsibility.", '</h2></div><p>',
    ar ? "كل مرحلة تُراجع قبل أن تغطيها المرحلة التالية." : "Each stage is checked before the next one covers it.", '</p></div><div class="process-grid">',
    '<div class="process-step" data-reveal><span>01</span><div><h3>', ar ? "معاينة" : "Survey", '</h3><p>', ar ? "قياس المكان والخدمات والحالة الحالية." : "Measure the room, services and existing condition.", '</p></div></div>',
    '<div class="process-step" data-reveal><span>02</span><div><h3>', ar ? "تفصيل" : "Detail", '</h3><p>', ar ? "تثبيت المحاور والمناسيب والفتحات والمواد." : "Agree axes, levels, openings and materials.", '</p></div></div>',
    '<div class="process-step" data-reveal><span>03</span><div><h3>', ar ? "تنفيذ" : "Execute", '</h3><p>', ar ? "هيكل وتنسيق خدمات وألواح ومعالجة فواصل." : "Frame, coordinate, board and finish the joints.", '</p></div></div>',
    '<div class="process-step" data-reveal><span>04</span><div><h3>', ar ? "تسليم" : "Handover", '</h3><p>', ar ? "فحص السطح والإضاءة وفتحات الصيانة." : "Inspect surfaces, lighting and maintenance access.", '</p></div></div>',
    "</div></div></section>\n",
    '<section class="section"><div class="container"><div class="section-head" data-reveal><div><span class="eyebrow">',
    ar ? "مجلة الجبس بورد" : "The gypsum journal", '</span><h2>', ar ? "دليل قبل أن تبدأ." : "Read before you build.", '</h2></div><p>',
    ar ? "مقالات عملية بالعربية والإنجليزية عن التخطيط والمواد والتكلفة والتنفيذ في أبوظبي." : "Practical English and Arabic guides to planning, materials, cost and execution in Abu Dhabi.",
    '</p></div><div class="journal-grid">', articleCards, '</div><div class="button-row"><a class="button" href="', pathFor(lang, "/blog/"), '">',
    ar ? "جميع المقالات" : "All articles", "</a></div></div></section>\n",
    faqSection(lang, faqs),
    contactBand(lang),
    "</main>\n",
    footer(lang)
  ].join("");
  return head({ lang, path, alternates: pairFor("/"), title, description, image: "modern-ceiling-hero.webp", imageAlt: ar ? "سقف جبس بورد مودرن في فيلا إماراتية" : "Modern gypsum-board ceiling in a UAE villa", schema: [websiteSchema, pageSchema, faqSchema] }) + body;
}

function servicePage(service, lang) {
  const ar = lang === "ar";
  const item = service[lang];
  const basePath = "/services/" + service.slug + "/";
  const path = pathFor(lang, basePath);
  const alternate = pathFor(ar ? "en" : "ar", basePath);
  const title = item.title + (ar ? " | قصر الشمالي" : " | Al Qaser Al Shamali");
  const sections = item.sections.map((section) => {
    const paragraphs = section[1].map((p) => "<p>" + escapeHtml(p) + "</p>").join("");
    const bullets = section[2] ? "<ul>" + section[2].map((p) => "<li>" + escapeHtml(p) + "</li>").join("") + "</ul>" : "";
    return "<section><h2>" + escapeHtml(section[0]) + "</h2>" + paragraphs + bullets + "</section>";
  }).join("");
  const serviceSchema = {
    "@type": "Service",
    "@id": site + path + "#service",
    name: item.title,
    description: item.description,
    url: site + path,
    provider: { "@id": site + "/#business" },
    areaServed: ["Abu Dhabi", "Al Ain", "Dubai"]
  };
  const serviceBreadcrumb = breadcrumbSchema(path, lang, [
    { name: ar ? "الرئيسية" : "Home", path: pathFor(lang, "/") },
    { name: ar ? "التخصص" : "Expertise", path: pathFor(lang, "/") + "#expertise" },
    { name: item.label }
  ]);
  const body = [
    header(lang, "services", alternate),
    '<main id="main">',
    breadcrumbs(lang, [
      { name: ar ? "الرئيسية" : "Home", href: pathFor(lang, "/") },
      { name: ar ? "التخصص" : "Expertise", href: pathFor(lang, "/") + "#expertise" },
      { name: item.label }
    ]),
    '<section class="page-hero"><div class="container page-hero-grid"><div><span class="eyebrow">', escapeHtml(item.label), '</span><h1>', escapeHtml(item.title),
    '</h1><p class="lede">', escapeHtml(item.intro), '</p><div class="button-row"><a class="button solid" href="', pathFor(lang, "/"), '#contact">',
    ar ? "اطلب معاينة" : "Request a site visit", '</a></div></div><aside class="page-aside"><span class="kicker">',
    ar ? "نطاق متخصص" : "Specialist scope", '</span><p>', ar ? "تصميم وتنفيذ الجبس بورد للأسقف والجدران فقط، مع تنسيق التفاصيل المرتبطة." : "Gypsum-board ceiling and wall design and execution only, with coordination of related details.", "</p></aside></div></section>",
    '<section class="section"><div class="container service-intro"><div class="service-intro-image">', image(service.image, item.title, "", "eager"), '</div><article class="prose">', sections,
    '<div class="prose-note"><strong>', ar ? "قبل طلب السعر" : "Before requesting a price", '</strong><p>',
    ar ? "أرسل نوع الغرفة وموقع المشروع وصور الوضع الحالي وأي صورة مرجعية. نعتمد السعر النهائي بعد القياس وتحديد التفاصيل." : "Send the room type, project area, current photos and any useful reference. Final pricing follows measurement and an agreed detail.",
    "</p></div></article></div></section>",
    contactBand(lang),
    "</main>",
    footer(lang)
  ].join("");
  return head({
    lang,
    path,
    alternates: pairFor(basePath),
    title,
    description: item.description,
    image: service.image,
    imageAlt: item.title,
    schema: [serviceSchema, serviceBreadcrumb]
  }) + body;
}

function locationPage(location, lang) {
  const ar = lang === "ar";
  const item = location[lang];
  const basePath = "/locations/" + location.slug + "/";
  const path = pathFor(lang, basePath);
  const alternate = pathFor(ar ? "en" : "ar", basePath);
  const sections = item.sections.map((section) => {
    const paragraphs = section[1].map((paragraph) => "<p>" + escapeHtml(paragraph) + "</p>").join("");
    const bullets = section[2] ? "<ul>" + section[2].map((bullet) => "<li>" + escapeHtml(bullet) + "</li>").join("") + "</ul>" : "";
    return "<section><h2>" + escapeHtml(section[0]) + "</h2>" + paragraphs + bullets + "</section>";
  }).join("");
  const citySchema = {
    "@type": "Service",
    "@id": site + path + "#local-service",
    name: ar ? "أعمال الجبس بورد في " + item.city : "Gypsum board work in " + item.city,
    serviceType: ar ? "تصميم وتنفيذ ديكور الجبس بورد للأسقف والجدران" : "Gypsum-board ceiling and wall decoration and execution",
    description: item.description,
    url: site + path,
    image: site + "/assets/images/" + location.image,
    provider: { "@id": site + "/#business" },
    areaServed: { "@type": "City", name: item.city, address: { "@type": "PostalAddress", addressCountry: "AE" } }
  };
  const pageSchema = {
    "@type": "WebPage",
    "@id": site + path + "#webpage",
    url: site + path,
    name: item.title,
    description: item.description,
    inLanguage: ar ? "ar-AE" : "en-AE",
    about: { "@id": site + path + "#local-service" },
    primaryImageOfPage: site + "/assets/images/" + location.image
  };
  const faqSchema = {
    "@type": "FAQPage",
    "@id": site + path + "#faq",
    mainEntity: item.faqs.map((entry) => ({ "@type": "Question", name: entry.q, acceptedAnswer: { "@type": "Answer", text: entry.a } }))
  };
  const cityBreadcrumb = breadcrumbSchema(path, lang, [
    { name: ar ? "الرئيسية" : "Home", path: pathFor(lang, "/") },
    { name: ar ? "مناطق الخدمة" : "Service areas", path: pathFor(lang, "/") + "#service-areas" },
    { name: item.city }
  ]);
  const body = [
    header(lang, "", alternate),
    '<main id="main">',
    breadcrumbs(lang, [
      { name: ar ? "الرئيسية" : "Home", href: pathFor(lang, "/") },
      { name: ar ? "مناطق الخدمة" : "Service areas", href: pathFor(lang, "/") + "#service-areas" },
      { name: item.city }
    ]),
    '<section class="page-hero"><div class="container page-hero-grid"><div><span class="eyebrow">', ar ? "منطقة خدمة" : "Service area", '</span><h1>',
    escapeHtml(ar ? "تنفيذ جبس بورد في " + item.city : "Gypsum board work in " + item.city), '</h1><p class="lede">', escapeHtml(item.intro),
    '</p><div class="button-row"><a class="button solid" href="https://wa.me/971507427070" target="_blank" rel="noopener">', ar ? "اطلب معاينة" : "Request a site visit", '</a></div></div><aside class="page-aside"><span class="kicker">',
    ar ? "التخصص" : "Specialist scope", '</span><p>', ar ? "ديكور وتنفيذ الجبس بورد للأسقف والجدران. لا نقدم الديكور الداخلي العام أو الأثاث أو النجارة." : "Gypsum-board ceiling and wall decoration and execution. We do not provide general interior decoration, furniture or joinery.",
    '</p></aside></div></section>',
    '<section class="section"><div class="container service-intro"><div class="service-intro-image">', image(location.image, item.title, "", "eager"), '</div><article class="prose">', sections,
    '<div class="prose-note"><strong>', ar ? "قبل طلب السعر" : "Before requesting a quotation", '</strong><p>', ar ? "أرسل المدينة ونوع الغرفة وصور الوضع الحالي وأي مرجع مفيد. نعتمد تفاصيل العمل والسعر بعد القياس وتحديد النطاق القابل للتنفيذ." : "Send the city, room type, current photos and a useful reference. The work detail and final price follow measurement and an agreed buildable scope.",
    '</p></div></article></div></section>',
    faqSection(lang, item.faqs),
    contactBand(lang),
    '</main>',
    footer(lang)
  ].join("");
  return head({
    lang,
    path,
    alternates: pairFor(basePath),
    title: item.title,
    description: item.description,
    image: location.image,
    imageAlt: item.title,
    schema: [citySchema, pageSchema, faqSchema, cityBreadcrumb]
  }) + body;
}

function blogIndex(lang) {
  const ar = lang === "ar";
  const basePath = "/blog/";
  const path = pathFor(lang, basePath);
  const alternate = pathFor(ar ? "en" : "ar", basePath);
  const title = ar ? "مجلة الجبس بورد | أدلة التصميم والتنفيذ في أبوظبي" : "Gypsum Board Journal | Design & Execution Guides";
  const description = ar
    ? "أدلة عملية بالعربية عن أسقف وجدران الجبس بورد والمواد والإضاءة والتكلفة والتنفيذ في أبوظبي."
    : "Practical guides to gypsum-board ceilings, walls, materials, lighting, cost and execution for Abu Dhabi homes and projects.";
  const rows = articles.map((article, index) => {
    const item = article[lang];
    return [
      '<a class="blog-row" href="', pathFor(lang, "/blog/" + article.slug + "/"), '"><span>', String(index + 1).padStart(2, "0"), '</span>',
      '<span class="blog-row-image">', image(article.image, item.title), '</span><span><span class="kicker">', escapeHtml(item.category), '</span><h2>',
      escapeHtml(item.title), '</h2><p>', escapeHtml(item.deck), '</p></span><span>+</span></a>'
    ].join("");
  }).join("");
  const body = [
    header(lang, "blog", alternate),
    '<main id="main"><section class="page-hero"><div class="container blog-index-intro"><span class="eyebrow">',
    ar ? "المجلة" : "Journal", '</span><h1>', ar ? "المعرفة قبل التنفيذ." : "Know before you build.", '</h1><p class="lede">',
    ar ? "أحد عشر دليلاً عملياً بالعربية والإنجليزية، كتبناها لمساعدة مالك الفيلا أو المسؤول عن المشروع على اتخاذ قرارات أوضح في الجبس بورد." : "Eleven practical guides in English and Arabic, written to help villa owners and project teams make clearer gypsum-board decisions.",
    '</p></div></section><section class="section"><div class="container blog-list">', rows, "</div></section>",
    contactBand(lang),
    "</main>",
    footer(lang)
  ].join("");
  return head({
    lang,
    path,
    alternates: pairFor(basePath),
    title,
    description,
    schema: [{
      "@type": "CollectionPage",
      "@id": site + path + "#collection",
      name: title,
      description,
      url: site + path,
      inLanguage: ar ? "ar-AE" : "en-AE",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: site + pathFor(lang, "/blog/" + article.slug + "/"),
          name: article[lang].title
        }))
      }
    }, breadcrumbSchema(path, lang, [
      { name: ar ? "الرئيسية" : "Home", path: pathFor(lang, "/") },
      { name: ar ? "المجلة" : "Journal" }
    ])]
  }) + body;
}

function articlePage(article, lang, index) {
  const ar = lang === "ar";
  const item = article[lang];
  const basePath = "/blog/" + article.slug + "/";
  const path = pathFor(lang, basePath);
  const alternate = pathFor(ar ? "en" : "ar", basePath);
  const titleWithBrand = item.title + (ar ? " | قصر الشمالي" : " | Qasr Alshamali");
  const title = titleWithBrand.length > 65 ? item.title : titleWithBrand;
  const sections = item.sections.map((section) => {
    return '<section><h2>' + escapeHtml(section[0]) + "</h2>" + section[1].map((p) => "<p>" + escapeHtml(p) + "</p>").join("") + "</section>";
  }).join("");
  const relatedItems = [articles[(index + 1) % articles.length], articles[(index + 2) % articles.length]];
  const related = relatedItems.map((relatedArticle) => {
    const relatedContent = relatedArticle[lang];
    return [
      '<a class="journal-card" href="', pathFor(lang, "/blog/" + relatedArticle.slug + "/"), '"><div class="journal-meta"><span>',
      escapeHtml(relatedContent.category), '</span><span>+</span></div><div class="card-image">', image(relatedArticle.image, relatedContent.title),
      '</div><h3>', escapeHtml(relatedContent.title), "</h3></a>"
    ].join("");
  }).join("");
  const articleSchema = {
    "@type": "BlogPosting",
    "@id": site + path + "#article",
    headline: item.title,
    description: item.description,
    image: site + "/assets/images/" + article.image,
    datePublished: publishedDate,
    dateModified: lastModified,
    inLanguage: ar ? "ar-AE" : "en-AE",
    mainEntityOfPage: { "@type": "WebPage", "@id": site + path },
    author: { "@id": site + "/#business" },
    publisher: { "@id": site + "/#business" },
    isPartOf: { "@id": site + pathFor(lang, "/blog/") + "#collection" },
    wordCount: item.sections.flatMap((section) => section[1]).join(" ").trim().split(/\s+/).length
  };
  const articleBreadcrumb = breadcrumbSchema(path, lang, [
    { name: ar ? "الرئيسية" : "Home", path: pathFor(lang, "/") },
    { name: ar ? "المجلة" : "Journal", path: pathFor(lang, "/blog/") },
    { name: item.title }
  ]);
  const body = [
    header(lang, "blog", alternate),
    '<main id="main">',
    breadcrumbs(lang, [
      { name: ar ? "الرئيسية" : "Home", href: pathFor(lang, "/") },
      { name: ar ? "المجلة" : "Journal", href: pathFor(lang, "/blog/") },
      { name: item.title }
    ]),
    '<article><header class="page-hero"><div class="container page-hero-grid"><div><span class="eyebrow">', escapeHtml(item.category),
    '</span><h1>', escapeHtml(item.title), '</h1><p class="lede">', escapeHtml(item.deck), '</p><div class="article-meta"><span>',
    ar ? "نشر في 6 أكتوبر 2026" : "Published 6 October 2026", '</span><span>', ar ? "قراءة 6 دقائق" : "6 minute read", '</span></div></div><aside class="page-aside"><span class="kicker">',
    ar ? "ملاحظة تحريرية" : "Editorial note", '</span><p>',
    ar ? "هذا دليل عام للتخطيط. تعتمد المواصفة النهائية على قياس الموقع ومتطلبات المشروع والنظام المعتمد." : "This is general planning guidance. The final specification depends on site measurement, project requirements and the approved system.",
    "</p></aside></div></header>",
    '<section class="section"><div class="container article-layout"><div><figure class="article-figure">', image(article.image, item.title, "", "eager"), '<figcaption>',
    ar ? "مرجع بصري لتفاصيل الجبس بورد؛ يتم تعديل كل تصميم حسب قياسات الموقع." : "A visual reference for gypsum-board detail; every design is adapted to site dimensions.",
    '</figcaption></figure><div class="prose">', sections, '</div><div class="related"><h2>', ar ? "اقرأ أيضاً" : "Continue reading", '</h2><div class="journal-grid">', related,
    '</div></div></div><aside class="article-side"><div class="article-side-block"><strong>', ar ? "الموضوع" : "Topic", '</strong><p>', escapeHtml(item.category),
    '</p></div><div class="article-side-block"><strong>', ar ? "الخدمة" : "Service area", '</strong><p>', ar ? "أبوظبي، العين، دبي" : "Abu Dhabi, Al Ain, Dubai",
    '</p></div><div class="article-side-block"><strong>', ar ? "لديك مشروع؟" : "Planning a project?", '</strong><a href="https://wa.me/971507427070" target="_blank" rel="noopener">',
    ar ? "أرسل صور المكان عبر واتساب +" : "Share site photos on WhatsApp +", "</a></div></aside></div></section></article>",
    contactBand(lang),
    "</main>",
    footer(lang)
  ].join("");
  return head({
    lang,
    path,
    alternates: pairFor(basePath),
    title,
    description: item.description,
    image: article.image,
    ogType: "article",
    imageAlt: item.title,
    schema: [articleSchema, articleBreadcrumb]
  }) + body;
}

function aboutPage(lang) {
  const ar = lang === "ar";
  const basePath = "/about/";
  const path = pathFor(lang, basePath);
  const alternate = pathFor(ar ? "en" : "ar", basePath);
  const title = ar ? "من نحن | قصر الشمالي للجبس بورد" : "About Qasr Alshamali | Gypsum Board Specialists";
  const description = ar
    ? "تعرف إلى تخصص قصر الشمالي في تصميم وتنفيذ ديكورات أسقف وجدران الجبس بورد في أبوظبي والعين ودبي."
    : "Meet Qasr Alshamali, a focused gypsum-board ceiling and wall decoration and execution team serving Abu Dhabi, Al Ain and Dubai.";
  const body = [
    header(lang, "about", alternate),
    '<main id="main">',
    breadcrumbs(lang, [{ name: ar ? "الرئيسية" : "Home", href: pathFor(lang, "/") }, { name: ar ? "من نحن" : "About" }]),
    '<section class="page-hero"><div class="container page-hero-grid"><div><span class="eyebrow">', ar ? "من نحن" : "About the studio", '</span><h1>',
    ar ? "تخصص صغير يصنع فرقاً واضحاً." : "A narrow specialism, deliberately chosen.", '</h1><p class="lede">',
    ar ? "قصر الشمالي فريق متخصص في تصميم تفاصيل الجبس بورد وتنفيذها للأسقف والجدران. لا نعرض أنفسنا كشركة أثاث أو نجارة أو ديكور شامل." : "Qasr Alshamali focuses on the design detailing and site execution of gypsum-board ceilings and walls. We do not present ourselves as a furniture, joinery or complete interior-design company.",
    '</p></div><aside class="page-aside"><span class="kicker">', ar ? "مقر الخدمة" : "Based in", '</span><p>',
    ar ? "العين، إمارة أبوظبي<br>ومشاريع مختارة في أبوظبي ودبي." : "Al Ain, Abu Dhabi Emirate<br>with selected projects in Abu Dhabi and Dubai.",
    "</p></aside></div></section>",
    '<section class="section"><div class="container service-intro"><div class="service-intro-image">', image("gypsum-ceiling-execution.webp", ar ? "تنفيذ سقف جبس بورد مودرن في الموقع" : "Modern gypsum-board ceiling execution on site", "", "eager"),
    '</div><article class="prose"><h2>', ar ? "ما الذي نفعله؟" : "What we actually do", '</h2><p>',
    ar ? "نبدأ بالقياس وفهم الشكل المطلوب، ثم نضبط المحاور والمناسيب وفتحات الإضاءة والخدمات. بعد اعتماد النطاق ننفذ الهيكل والألواح ومعالجة الفواصل وتجهيز السطح حسب الاتفاق." : "We begin with measurement and the desired style, then resolve axes, levels, lighting openings and related services. Once the scope is agreed, we execute the framing, board installation, jointing and surface preparation.",
    '</p><p>', ar ? "يشمل عملنا الأسقف المستوية والمتعددة المستويات والكوفات وبيوت الستائر والزخارف والمراكز، إضافة إلى فريمات الجدران والنيشات والأقواس وخلفيات التلفاز المصنوعة بالجبس بورد." : "Our work includes flat and multi-level ceilings, coves, curtain pockets, borders and centres, together with gypsum-board wall frames, niches, arches and television backgrounds.",
    '</p><h2>', ar ? "ما الذي لا ندّعيه؟" : "What we do not claim", '</h2><p>',
    ar ? "لا نقدم الأثاث أو النجارة أو توريد الرخام أو التصميم الداخلي الشامل. عند ارتباط عمل الجبس بالكهرباء أو التكييف ننسق المواقع والفتحات مع المختصين، ويبقى نطاق كل طرف واضحاً." : "We do not provide furniture, joinery, marble supply or full interior design. Where gypsum meets electrical or air-conditioning work, we coordinate locations and openings with the responsible specialists while keeping each scope clear.",
    '</p><h2>', ar ? "لماذا هذا التركيز؟" : "Why the focus matters", '</h2><p>',
    ar ? "الجبس بورد يبدو بسيطاً بعد الدهان، لكنه يعتمد على قرارات كثيرة مخفية: التدعيم والمسافات والوصول للصيانة وتجفيف الفواصل وتناسق الخطوط. التركيز يساعدنا على مناقشة هذه القرارات بوضوح قبل أن تُغطى." : "Finished gypsum looks simple, but depends on many concealed decisions: support, spacing, maintenance access, joint drying and consistent lines. Focus lets us discuss those decisions clearly before they are covered.",
    '</p><div class="prose-note"><strong>', ar ? "الخطوة الأولى" : "The first step", '</strong><p>',
    ar ? "شارك صور المكان والمدينة ونوع الغرفة والستايل المطلوب. نرتب المعاينة عندما يحتاج النطاق إلى قياس مباشر." : "Share the city, room type, current photos and preferred style. We arrange a survey when the scope needs direct measurement.",
    "</p></div></article></div></section>",
    contactBand(lang),
    "</main>",
    footer(lang)
  ].join("");
  return head({
    lang,
    path,
    alternates: pairFor(basePath),
    title,
    description,
    image: "gypsum-ceiling-execution.webp",
    imageAlt: ar ? "تنفيذ سقف جبس بورد مودرن في الموقع" : "Modern gypsum-board ceiling execution on site",
    schema: [{
      "@type": "AboutPage",
      "@id": site + path + "#about",
      name: title,
      description,
      url: site + path,
      about: { "@id": site + "/#business" },
      inLanguage: ar ? "ar-AE" : "en-AE"
    }, breadcrumbSchema(path, lang, [
      { name: ar ? "الرئيسية" : "Home", path: pathFor(lang, "/") },
      { name: ar ? "من نحن" : "About" }
    ])]
  }) + body;
}

async function output(path, html) {
  const file = resolve(root, path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
}

function sitemapEntry(enPath, arPath, priority) {
  const entry = (locPath) => [
    "  <url>",
    "    <loc>" + site + locPath + "</loc>",
    '    <xhtml:link rel="alternate" hreflang="en-AE" href="' + site + enPath + '"/>',
    '    <xhtml:link rel="alternate" hreflang="ar-AE" href="' + site + arPath + '"/>',
    '    <xhtml:link rel="alternate" hreflang="x-default" href="' + site + enPath + '"/>',
    "    <lastmod>" + lastModified + "</lastmod>",
    "    <changefreq>monthly</changefreq>",
    "    <priority>" + priority + "</priority>",
    "  </url>"
  ].join("\n");
  return entry(enPath) + "\n" + entry(arPath);
}

async function build() {
  await output("index.html", homepage("en"));
  await output("ar/index.html", homepage("ar"));
  await output("about/index.html", aboutPage("en"));
  await output("ar/about/index.html", aboutPage("ar"));
  await output("blog/index.html", blogIndex("en"));
  await output("ar/blog/index.html", blogIndex("ar"));

  for (const service of services) {
    await output("services/" + service.slug + "/index.html", servicePage(service, "en"));
    await output("ar/services/" + service.slug + "/index.html", servicePage(service, "ar"));
  }

  for (const location of locations) {
    await output("locations/" + location.slug + "/index.html", locationPage(location, "en"));
    await output("ar/locations/" + location.slug + "/index.html", locationPage(location, "ar"));
  }

  for (const [index, article] of articles.entries()) {
    await output("blog/" + article.slug + "/index.html", articlePage(article, "en", index));
    await output("ar/blog/" + article.slug + "/index.html", articlePage(article, "ar", index));
  }

  const sitemapPairs = [
    ["/", "/ar/", "1.0"],
    ["/about/", "/ar/about/", "0.7"],
    ["/blog/", "/ar/blog/", "0.9"],
    ...services.map((service) => ["/services/" + service.slug + "/", "/ar/services/" + service.slug + "/", "0.9"]),
    ...locations.map((location) => ["/locations/" + location.slug + "/", "/ar/locations/" + location.slug + "/", "0.9"]),
    ...articles.map((article) => ["/blog/" + article.slug + "/", "/ar/blog/" + article.slug + "/", "0.8"])
  ];
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    sitemapPairs.map((pair) => sitemapEntry(pair[0], pair[1], pair[2])).join("\n"),
    "</urlset>",
    ""
  ].join("\n");
  await output("sitemap.xml", sitemap);

  const redirectPaths = sitemapPairs.flatMap((pair) => [pair[0], pair[1]]).filter((path) => path !== "/");
  const redirects = [
    "/index.html / 301",
    ...redirectPaths.map((path) => path + "index.html " + path + " 301"),
    ""
  ].join("\n");
  await output("_redirects", redirects);

  console.log("Built " + (6 + services.length * 2 + locations.length * 2 + articles.length * 2) + " HTML pages, sitemap.xml and _redirects");
}

await build();
