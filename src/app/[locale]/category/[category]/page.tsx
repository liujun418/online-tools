import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CategoryPageClient from "@/app/category/CategoryPageClient";
import { isValidLocale, getDictionary, Locale, locales } from "@/lib/i18n";

const SITE_URL = "https://toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";
const OG_IMAGE = `${SITE_URL}/og-default.png`;
const LOCALE_OG: Record<string, string> = { en: "en_US", es: "es_ES", ar: "ar_SA" };

const VALID_CATEGORIES = ["text", "developer", "calculator", "reference", "media"];

const categoryMeta: Record<string, Record<string, { title: string; desc: string }>> = {
  text: {
    en: { title: "Free Text Tools — Word Counter, Case Converter & More 2026", desc: "Free online text processing tools. Count words, convert case, generate lorem ipsum, create URL slugs, compare text diffs, and more. No signup required." },
    es: { title: "Herramientas de Texto Gratis — Contador de Palabras y Más 2026", desc: "Herramientas gratuitas de procesamiento de texto. Cuenta palabras, convierte mayúsculas/minúsculas, genera lorem ipsum y más. Sin registro." },
    ar: { title: "أدوات نص مجانية — عداد كلمات وتحويل حالة الأحرف 2026", desc: "أدوات معالجة نصوص مجانية. عد الكلمات، حول حالة الأحرف، أنشئ لوريم إيبسوم والمزيد. بدون تسجيل." },
  },
  developer: {
    en: { title: "Free Developer Tools — JSON Formatter, Base64 Encoder & More 2026", desc: "Free online developer utilities. Format JSON, encode Base64, generate UUIDs, test regex, minify CSS, generate QR codes, and more. No signup required." },
    es: { title: "Herramientas de Desarrollador Gratis — Formateador JSON y Más 2026", desc: "Utilidades gratuitas para desarrolladores. Formatea JSON, codifica Base64, genera UUIDs, prueba regex, minifica CSS y más. Sin registro." },
    ar: { title: "أدوات مطور مجانية — منسق JSON ومشفر Base64 2026", desc: "أدوات مطور مجانية. نسق JSON، شفر Base64، أنشئ UUIDs، اختبر regex، قلص CSS والمزيد. بدون تسجيل." },
  },
  calculator: {
    en: { title: "Free Online Calculators — BMI, Loan, Age & Percentage 2026", desc: "Free online calculators for everyday use. Calculate BMI, loans, mortgages, age, percentages, tips, discounts, and more. No signup required." },
    es: { title: "Calculadoras Gratis — IMC, Préstamos, Edad y Porcentajes 2026", desc: "Calculadoras gratuitas para uso diario. Calcula IMC, préstamos, hipotecas, edad, porcentajes, propinas y más. Sin registro." },
    ar: { title: "حاسبات مجانية — مؤشر كتلة الجسم، قروض، عمر ونسب 2026", desc: "حاسبات مجانية للاستخدام اليومي. احسب مؤشر كتلة الجسم، القروض، الرهون العقارية، العمر والمزيد. بدون تسجيل." },
  },
  reference: {
    en: { title: "Free Reference Tools — Weather, Crypto Prices, IP Lookup 2026", desc: "Free online reference and lookup tools. Check global weather, track crypto prices, lookup IP addresses, explore world maps, and more. No signup required." },
    es: { title: "Herramientas de Referencia Gratis — Clima, Cripto, Búsqueda IP 2026", desc: "Herramientas gratuitas de referencia. Consulta el clima global, sigue precios de criptomonedas, busca direcciones IP y más. Sin registro." },
    ar: { title: "أدوات مرجعية مجانية — طقس، أسعار العملات الرقمية، بحث IP 2026", desc: "أدوات مرجعية مجانية. تحقق من الطقس العالمي، تابع أسعار العملات الرقمية، ابحث عن عناوين IP والمزيد. بدون تسجيل." },
  },
  media: {
    en: { title: "Free Fun & Media Tools — GIF Search, Wallpapers, Quotes 2026", desc: "Free online fun and media tools. Search and download GIFs, browse 4K wallpapers, explore NASA astronomy photos, get random quotes, and more. No signup required." },
    es: { title: "Herramientas de Diversión Gratis — GIFs, Fondos, Citas 2026", desc: "Herramientas gratuitas de diversión y medios. Busca y descarga GIFs, explora fondos 4K, fotos astronómicas de NASA y más. Sin registro." },
    ar: { title: "أدوات مرح ووسائط مجانية — بحث GIF، خلفيات، اقتباسات 2026", desc: "أدوات مرح ووسائط مجانية. ابحث ونزل GIFs، تصفح خلفيات 4K، استكشف صور NASA الفلكية والمزيد. بدون تسجيل." },
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
