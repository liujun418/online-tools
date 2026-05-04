import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";
import { ADSENSE_CONFIG } from "@/lib/adsense";
import { tools } from "@/lib/tools";

const SITE_URL = "https://www.toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";
const OG_IMAGE = `${SITE_URL}/og-default.png`;

const categoryMap: Record<string, { label: string; anchor: string }> = {
  text: { label: "Text Tools", anchor: "text-tools" },
  developer: { label: "Developer Tools", anchor: "developer-tools" },
  calculator: { label: "Calculators", anchor: "calculators" },
  converter: { label: "Converters", anchor: "converters" },
};

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string[];
  metadata?: Metadata;
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
      googleBot: {
        index: true,
        follow: true,
      },
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

export default function ToolLayout({
  children,
  title,
  description,
}: ToolLayoutProps) {
  const tool = tools.find((t) => t.name === title);
  const category = tool ? categoryMap[tool.category] : null;
  const adSlot = ADSENSE_CONFIG.slots.toolPage;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Breadcrumbs */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">
          Home
        </Link>
        <span className="text-zinc-300 dark:text-zinc-700">/</span>
        {category && (
          <>
            <Link href={`/#${category.anchor}`} className="hover:text-zinc-900 dark:hover:text-white">
              {category.label}
            </Link>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
          </>
        )}
        <span className="truncate font-medium text-zinc-900 dark:text-white">
          {title}
        </span>
      </nav>

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">{description}</p>
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: `${title} | ToolBoxOnline`,
              description,
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </header>

      {adSlot ? (
        <AdUnit className="mb-6 min-h-[90px] w-full" adSlot={adSlot} />
      ) : (
        <div className="mb-6 flex min-h-[90px] items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 text-xs text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-600">
          Advertisement
        </div>
      )}

      {children}

      {adSlot ? (
        <AdUnit className="mt-8 min-h-[90px] w-full" adSlot={adSlot} />
      ) : (
        <div className="mt-8 flex min-h-[90px] items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 text-xs text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-600">
          Advertisement
        </div>
      )}

      <section className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
          How to Use This Tool
        </h2>
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          Enter or paste your content in the input area above. Results update
          instantly in real-time. All processing happens locally in your browser
          — your data never leaves your device.
        </p>
      </section>
    </div>
  );
}
