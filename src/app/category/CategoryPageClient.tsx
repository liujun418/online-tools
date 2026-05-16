"use client";

import Link from "next/link";
import { tools, type Tool } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import { Locale } from "@/lib/i18n";

const SITE_URL = "https://toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";

const categoryMeta: Record<string, { en: { title: string; desc: string }; es: { title: string; desc: string }; ar: { title: string; desc: string } }> = {
  text: {
    en: { title: "Free Text Tools — Word Counter, Case Converter & More 2026", desc: "Free online text processing tools. Count words, convert case, generate lorem ipsum, create URL slugs, compare text diffs, and more. All tools run in your browser — no signup required." },
    es: { title: "Herramientas de Texto Gratis — Contador de Palabras y Más 2026", desc: "Herramientas gratuitas de procesamiento de texto. Cuenta palabras, convierte mayúsculas/minúsculas, genera lorem ipsum, crea slugs URL y más. Sin registro." },
    ar: { title: "أدوات نص مجانية — عداد كلمات وتحويل حالة الأحرف 2026", desc: "أدوات معالجة نصوص مجانية. عد الكلمات، حول حالة الأحرف، أنشئ لوريم إيبسوم، روابط URL، والمزيد. بدون تسجيل." },
  },
  developer: {
    en: { title: "Free Developer Tools — JSON Formatter, Base64 Encoder & More 2026", desc: "Free online developer utilities. Format JSON, encode Base64, generate UUIDs, test regex, minify CSS, generate QR codes, and more. All tools run in your browser — no signup required." },
    es: { title: "Herramientas de Desarrollador Gratis — Formateador JSON y Más 2026", desc: "Utilidades gratuitas para desarrolladores. Formatea JSON, codifica Base64, genera UUIDs, prueba regex, minifica CSS, genera códigos QR y más. Sin registro." },
    ar: { title: "أدوات مطور مجانية — منسق JSON ومشفر Base64 2026", desc: "أدوات مطور مجانية. نسق JSON، شفر Base64، أنشئ UUIDs، اختبر regex، قلص CSS، أنشئ رموز QR، والمزيد. بدون تسجيل." },
  },
  calculator: {
    en: { title: "Free Online Calculators — BMI, Loan, Age & Percentage 2026", desc: "Free online calculators for everyday use. Calculate BMI, loans, mortgages, age, percentages, tips, discounts, and more. Instant results — no signup required." },
    es: { title: "Calculadoras Gratis — IMC, Préstamos, Edad y Porcentajes 2026", desc: "Calculadoras gratuitas para uso diario. Calcula IMC, préstamos, hipotecas, edad, porcentajes, propinas, descuentos y más. Resultados instantáneos — sin registro." },
    ar: { title: "حاسبات مجانية — مؤشر كتلة الجسم، قروض، عمر ونسب 2026", desc: "حاسبات مجانية للاستخدام اليومي. احسب مؤشر كتلة الجسم، القروض، الرهون العقارية، العمر، النسب، الإكراميات، الخصومات والمزيد. بدون تسجيل." },
  },
  reference: {
    en: { title: "Free Reference Tools — Weather, Crypto Prices, IP Lookup 2026", desc: "Free online reference and lookup tools. Check global weather, track crypto prices, lookup IP addresses, explore world maps, and more. No signup required." },
    es: { title: "Herramientas de Referencia Gratis — Clima, Cripto, Búsqueda IP 2026", desc: "Herramientas gratuitas de referencia. Consulta el clima global, sigue precios de criptomonedas, busca direcciones IP, explora mapas mundiales y más. Sin registro." },
    ar: { title: "أدوات مرجعية مجانية — طقس، أسعار العملات الرقمية، بحث IP 2026", desc: "أدوات مرجعية مجانية. تحقق من الطقس العالمي، تابع أسعار العملات الرقمية، ابحث عن عناوين IP، استكشف خرائط العالم والمزيد. بدون تسجيل." },
  },
  media: {
    en: { title: "Free Fun & Media Tools — GIF Search, Wallpapers, Quotes 2026", desc: "Free online fun and media tools. Search and download GIFs, browse 4K wallpapers, explore NASA astronomy photos, get random quotes, solve puzzles, and more. No signup required." },
    es: { title: "Herramientas de Diversión Gratis — GIFs, Fondos, Citas 2026", desc: "Herramientas gratuitas de diversión y medios. Busca y descarga GIFs, explora fondos 4K, fotos astronómicas de NASA, citas aleatorias, resuelve acertijos y más. Sin registro." },
    ar: { title: "أدوات مرح ووسائط مجانية — بحث GIF، خلفيات، اقتباسات 2026", desc: "أدوات مرح ووسائط مجانية. ابحث ونزل GIFs، تصفح خلفيات 4K، استكشف صور NASA الفلكية، اقتباسات عشوائية، حل الألغاز والمزيد. بدون تسجيل." },
  },
};

const categoryIcons: Record<string, string> = {
  text: "📝", developer: "💻", calculator: "🔢", reference: "🌐", media: "🎮",
};

export default function CategoryPageClient({
  category,
  locale = "en",
  dict,
}: {
  category: string;
  locale?: string;
  dict?: Record<string, unknown>;
}) {
  const cats = (dict as any)?.categories || {};
  const catLabel = (cats as any)[category] || category;
  const meta = categoryMeta[category]?.[locale as keyof typeof categoryMeta.text] || categoryMeta[category]?.en;
  const catTools = tools.filter((t) => t.category === category);
  const icon = categoryIcons[category] || "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400" aria-label="Breadcrumb">
        <Link href={`/${locale}`} className="hover:text-zinc-900 dark:hover:text-white">
          {(dict as any)?.toolPage?.home || "Home"}
        </Link>
        <span className="text-zinc-300 dark:text-zinc-700">/</span>
        <span className="font-medium text-zinc-900 dark:text-white">
          {icon} {catLabel}
        </span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {icon} {meta?.title?.replace(" 2026", "") || catLabel}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
          {meta?.desc || `Free online ${catLabel.toLowerCase()} tools.`}
        </p>
        <p className="mt-1 text-xs text-zinc-400">
          {catTools.length} tools
        </p>
      </header>

      {/* Tools Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {catTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} locale={locale as Locale} />
        ))}
      </div>

      {/* Cross-category links */}
      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
          {(dict as any)?.categoryPage?.exploreOther || "Explore Other Categories"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {["text", "developer", "calculator", "reference", "media"].filter((c) => c !== category).map((c) => (
            <Link
              key={c}
              href={`/${locale}/category/${c}`}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:border-zinc-600 transition-all"
            >
              {categoryIcons[c]} {(cats as any)[c] || c}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
