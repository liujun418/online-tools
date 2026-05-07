import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import ShareButton from "@/components/ShareButton";
import VisitorCounter from "@/components/VisitorCounter";
import RelatedTools from "@/components/RelatedTools";
import { ADSENSE_CONFIG } from "@/lib/adsense";
import { tools } from "@/lib/tools";
import { Locale, localeDir } from "@/lib/i18n";

const SITE_URL = "https://www.toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";
const OG_IMAGE = `${SITE_URL}/og-default.png`;

const categoryAnchors: Record<string, string> = {
  text: "text-tools",
  developer: "developer-tools",
  calculator: "calculators",
  converter: "converters",
};

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string[];
  toolId?: string;
  metadata?: Metadata;
  locale?: Locale;
  dict?: Record<string, unknown>;
}

export function generateMetadata({
  title,
  description,
  keywords,
  metadata,
}: ToolLayoutProps): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(", ") ?? "",
    authors: [{ name: SITE_NAME }],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: { canonical: `${SITE_URL}${metadata?.alternates?.canonical ?? ""}` },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${SITE_URL}${metadata?.alternates?.canonical ?? ""}`,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    ...(metadata ?? {}),
  };
}

function getTranslation(dict: Record<string, unknown> | undefined, path: string): string {
  if (!dict) return "";
  const keys = path.split(".");
  let current: unknown = dict;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return "";
    }
  }
  return typeof current === "string" ? current : "";
}

export default function ToolLayout({
  children,
  title,
  description,
  toolId,
  locale = "en",
  dict,
}: ToolLayoutProps) {
  const tool = toolId
    ? tools.find((t) => t.id === toolId)
    : tools.find((t) => t.name === title);
  const category = tool ? { label: tool.category, anchor: categoryAnchors[tool.category] } : null;
  const adSlot = ADSENSE_CONFIG.slots.toolPage;
  const dir = localeDir[locale];

  const t = {
    home: getTranslation(dict, "toolPage.home") || "Home",
    howToUse: getTranslation(dict, "toolPage.howToUse") || "How to Use This Tool",
    faq: getTranslation(dict, "toolPage.faq") || "Frequently Asked Questions",
    advertisement: getTranslation(dict, "toolPage.advertisement") || "Advertisement",
  };

  const catLabel = category
    ? getTranslation(dict, `categories.${category.label}`) ||
      { text: "Text Tools", developer: "Developer Tools", calculator: "Calculators", converter: "Converters" }[category.label] ||
      category.label
    : "";

  // Get localized howToUse and faq from tool translations
  const howToUse = tool
    ? ((tool as any).howToUseTranslations?.[locale] ?? tool.howToUse)
    : undefined;
  const faq = tool
    ? ((tool as any).faqTranslations?.[locale] ?? tool.faq)
    : undefined;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6" dir={dir}>
      {/* Breadcrumbs */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400" aria-label="Breadcrumb">
        <Link href={`/${locale}`} className="hover:text-zinc-900 dark:hover:text-white">
          {t.home}
        </Link>
        <span className="text-zinc-300 dark:text-zinc-700">/</span>
        {category && (
          <>
            <Link href={`/${locale}/#${category.anchor}`} className="hover:text-zinc-900 dark:hover:text-white">
              {catLabel}
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
          </>
        )}
        <span className="truncate font-medium text-zinc-900 dark:text-white">
          {title}
        </span>
      </nav>

      <header className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">{description}</p>
          </div>
          <ShareButton locale={locale} dict={dict} />
        </div>
        {tool && <VisitorCounter toolId={tool.id} locale={locale} dict={dict} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: `${title} | ${SITE_NAME}`,
              description,
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </header>

      {adSlot ? (
        <AdUnit className="mb-6 w-full" adSlot={adSlot} />
      ) : (
        <div className="mb-6 flex min-h-[90px] items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 text-xs text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-600">
          {t.advertisement}
        </div>
      )}

      {children}

      {adSlot ? (
        <AdUnit className="mt-8 w-full" adSlot={adSlot} />
      ) : (
        <div className="mt-8 flex min-h-[90px] items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 text-xs text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-600">
          {t.advertisement}
        </div>
      )}

      {tool && <RelatedTools toolId={tool.id} locale={locale} dict={dict} />}

      {howToUse && howToUse.length > 0 ? (
        <section className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
            {t.howToUse}
          </h2>
          <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400" dir="auto">
            {howToUse.map((step: string, i: number) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      ) : (
        <section className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
            {t.howToUse}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400" dir="auto">
            Enter or paste your content in the input area above. Results update
            instantly in real-time. All processing happens locally in your browser
            — your data never leaves your device.
          </p>
        </section>
      )}

      {faq && faq.length > 0 && (
        <section className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
            {t.faq}
          </h2>
          <div className="space-y-4">
            {faq.map((item: { question: string; answer: string }, i: number) => (
              <details key={i} className="group rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                <summary className="cursor-pointer list-none text-sm font-medium text-zinc-900 dark:text-white">
                  {item.question}
                  <span className="ms-auto inline-block transition-transform group-open:rotate-180">
                    <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400" dir="auto">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {faq && faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((item: { question: string; answer: string }) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}
