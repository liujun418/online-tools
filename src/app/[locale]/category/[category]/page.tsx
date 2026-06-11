import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CategoryPageClient from "@/app/category/CategoryPageClient";
import { isValidLocale, getDictionary, Locale, locales } from "@/lib/i18n";

const SITE_URL = "https://toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";
const OG_IMAGE = `${SITE_URL}/og-default.png`;
const LOCALE_OG: Record<string, string> = { en: "en_US", es: "es_ES", ar: "ar_SA" };

const VALID_CATEGORIES = ["text", "developer", "calculator", "reference", "media"];

const categoryMeta: Record<string, Record<string, { title: string; desc: string; intro?: string }>> = {
  text: {
    en: { title: "Free Text Tools — Word Counter, Case Converter & More 2026", desc: "Free online text processing tools. Count words, convert case, generate lorem ipsum, create URL slugs, compare text diffs, and more. No signup required.",
      intro: "Working with text is a daily task for writers, students, developers, and anyone who communicates online. These tools handle the repetitive formatting, counting, and converting so you can focus on what you are actually writing. Everything runs in your browser — paste your text and get results instantly." },
    es: { title: "Herramientas de Texto Gratis — Contador de Palabras y Más 2026", desc: "Herramientas gratuitas de procesamiento de texto. Cuenta palabras, convierte mayúsculas/minúsculas, genera lorem ipsum y más. Sin registro.",
      intro: "Trabajar con texto es una tarea diaria para escritores, estudiantes y desarrolladores. Estas herramientas manejan el formato, conteo y conversión repetitivos para que puedas concentrarte en lo que estás escribiendo. Todo funciona en tu navegador." },
    ar: { title: "أدوات نص مجانية — عداد كلمات وتحويل حالة الأحرف 2026", desc: "أدوات معالجة نصوص مجانية. عد الكلمات، حول حالة الأحرف، أنشئ لوريم إيبسوم والمزيد. بدون تسجيل.",
      intro: "العمل مع النص مهمة يومية للكتاب والطلاب والمطورين. تتعامل هذه الأدوات مع التنسيق والعد والتحويل المتكرر حتى تتمكن من التركيز على ما تكتبه. كل شيء يعمل في متصفحك." },
  },
  developer: {
    en: { title: "Free Developer Tools — JSON Formatter, Base64 Encoder & More 2026", desc: "Free online developer utilities. Format JSON, encode Base64, generate UUIDs, test regex, minify CSS, generate QR codes, and more. No signup required.",
      intro: "When you need to format, encode, hash, or convert data — and you do not want to open an IDE or write a script — these tools are one browser tab away. Each does one thing well. No install, no build step, no config. Just the utility you need in 2 seconds." },
    es: { title: "Herramientas de Desarrollador Gratis — Formateador JSON y Más 2026", desc: "Utilidades gratuitas para desarrolladores. Formatea JSON, codifica Base64, genera UUIDs, prueba regex, minifica CSS y más. Sin registro.",
      intro: "Cuando necesitas formatear, codificar, generar hashes o convertir datos — y no quieres abrir un IDE ni escribir un script — estas herramientas están a una pestaña de distancia. Sin instalación, sin configuración." },
    ar: { title: "أدوات مطور مجانية — منسق JSON ومشفر Base64 2026", desc: "أدوات مطور مجانية. نسق JSON، شفر Base64، أنشئ UUIDs، اختبر regex، قلص CSS والمزيد. بدون تسجيل.",
      intro: "عندما تحتاج إلى تنسيق أو تشفير أو تجزئة أو تحويل البيانات — ولا تريد فتح IDE أو كتابة سكريبت — فهذه الأدوات على بعد علامة تبويب واحدة. بدون تثبيت، بدون إعداد." },
  },
  calculator: {
    en: { title: "Free Online Calculators — BMI, Loan, Age & Percentage 2026", desc: "Free online calculators for everyday use. Calculate BMI, loans, mortgages, age, percentages, tips, discounts, and more. No signup required.",
      intro: "These calculators handle the everyday math you do not want to do in your head or in a spreadsheet. Whether you are comparing loan offers, splitting a bill, or checking your BMI, each calculator gives you instant results with clear breakdowns." },
    es: { title: "Calculadoras Gratis — IMC, Préstamos, Edad y Porcentajes 2026", desc: "Calculadoras gratuitas para uso diario. Calcula IMC, préstamos, hipotecas, edad, porcentajes, propinas y más. Sin registro.",
      intro: "Estas calculadoras manejan las matemáticas cotidianas que no quieres hacer mentalmente o en una hoja de cálculo. Ya sea comparando préstamos, dividiendo una cuenta o verificando tu IMC, cada calculadora te da resultados instantáneos." },
    ar: { title: "حاسبات مجانية — مؤشر كتلة الجسم، قروض، عمر ونسب 2026", desc: "حاسبات مجانية للاستخدام اليومي. احسب مؤشر كتلة الجسم، القروض، الرهون العقارية، العمر والمزيد. بدون تسجيل.",
      intro: "تتعامل هذه الحاسبات مع الرياضيات اليومية التي لا تريد القيام بها ذهنيا أو في جدول بيانات. سواء كنت تقارن عروض القروض أو تقسم فاتورة أو تتحقق من مؤشر كتلة جسمك، تمنحك كل حاسبة نتائج فورية." },
  },
  reference: {
    en: { title: "Free Reference Tools — Weather, Crypto Prices, IP Lookup 2026", desc: "Free online reference and lookup tools. Check global weather, track crypto prices, lookup IP addresses, explore world maps, and more. No signup required.",
      intro: "Quick lookups that would otherwise take a search engine query and scrolling through results. Check the weather in any city. Look up an IP address. See live crypto prices. Browse a world map. All in one place, no searching required." },
    es: { title: "Herramientas de Referencia Gratis — Clima, Cripto, Búsqueda IP 2026", desc: "Herramientas gratuitas de referencia. Consulta el clima global, sigue precios de criptomonedas, busca direcciones IP y más. Sin registro.",
      intro: "Consultas rápidas que de otro modo requerirían buscar en Google y desplazarse por resultados. Mira el clima en cualquier ciudad. Busca una dirección IP. Ve precios de criptomonedas en vivo. Todo en un solo lugar." },
    ar: { title: "أدوات مرجعية مجانية — طقس، أسعار العملات الرقمية، بحث IP 2026", desc: "أدوات مرجعية مجانية. تحقق من الطقس العالمي، تابع أسعار العملات الرقمية، ابحث عن عناوين IP والمزيد. بدون تسجيل.",
      intro: "استعلامات سريعة كانت ستتطلب بحثا في محرك بحث والتمرير عبر النتائج. تحقق من الطقس في أي مدينة. ابحث عن عنوان IP. شاهد أسعار العملات الرقمية مباشرة. كل ذلك في مكان واحد." },
  },
  media: {
    en: { title: "Free Fun & Media Tools — GIF Search, Wallpapers, Quotes 2026", desc: "Free online fun and media tools. Search and download GIFs, browse 4K wallpapers, explore NASA astronomy photos, get random quotes, and more. No signup required.",
      intro: "Entertainment has practical value. A coin flip teaches probability. A Book of Answers sparks creative thinking. NASA astronomy photos inspire curiosity. These tools bring a moment of fun, discovery, or creative spark to your day — no login, no cost." },
    es: { title: "Herramientas de Diversión Gratis — GIFs, Fondos, Citas 2026", desc: "Herramientas gratuitas de diversión y medios. Busca y descarga GIFs, explora fondos 4K, fotos astronómicas de NASA y más. Sin registro.",
      intro: "El entretenimiento tiene valor práctico. Un lanzamiento de moneda enseña probabilidad. Un Libro de Respuestas despierta el pensamiento creativo. Las fotos astronómicas de NASA inspiran curiosidad. Diversión, descubrimiento o chispa creativa — sin costo." },
    ar: { title: "أدوات مرح ووسائط مجانية — بحث GIF، خلفيات، اقتباسات 2026", desc: "أدوات مرح ووسائط مجانية. ابحث ونزل GIFs، تصفح خلفيات 4K، استكشف صور NASA الفلكية والمزيد. بدون تسجيل.",
      intro: "الترفيه له قيمة عملية. رمي العملة يعلم الاحتمالات. كتاب الإجابات يثير التفكير الإبداعي. صور NASA الفلكية تلهم الفضول. متعة أو اكتشاف أو شرارة إبداعية — بدون تسجيل، بدون تكلفة." },
  },
};

export async function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];
  for (const locale of locales) {
    for (const category of VALID_CATEGORIES) {
      params.push({ locale, category });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; category: string }> }): Promise<Metadata> {
  const { locale, category } = await params;
  if (!isValidLocale(locale) || !VALID_CATEGORIES.includes(category)) return {};
  const meta = categoryMeta[category]?.[locale] || categoryMeta[category]?.en;
  if (!meta) return {};
  return {
    title: `${meta.title} | ${SITE_NAME}`,
    description: meta.desc,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${SITE_URL}/${locale}/category/${category}`,
      languages: {
        "x-default": `${SITE_URL}/en/category/${category}`,
        en: `${SITE_URL}/en/category/${category}`,
        es: `${SITE_URL}/es/category/${category}`,
        ar: `${SITE_URL}/ar/category/${category}`,
      },
    },
    openGraph: {
      type: "website",
      locale: LOCALE_OG[locale] || "en_US",
      url: `${SITE_URL}/${locale}/category/${category}`,
      siteName: SITE_NAME,
      title: `${meta.title} | ${SITE_NAME}`,
      description: meta.desc,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: "summary_large_image", title: `${meta.title} | ${SITE_NAME}`, description: meta.desc },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale, category } = await params;
  if (!isValidLocale(locale) || !VALID_CATEGORIES.includes(category)) notFound();
  const dict = await getDictionary(locale);
  return <CategoryPageClient category={category} locale={locale as Locale} dict={dict} />;
}
