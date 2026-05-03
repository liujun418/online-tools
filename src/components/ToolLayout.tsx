import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";
import { ADSENSE_CONFIG } from "@/lib/adsense";

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  metadata?: Metadata;
}

export function generateMetadata({
  title,
  description,
  metadata,
}: ToolLayoutProps): Metadata {
  return {
    title: `${title} | ToolBoxOnline`,
    description,
    openGraph: {
      title: `${title} | ToolBoxOnline`,
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
  const adSlot = ADSENSE_CONFIG.slots.toolPage;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">{description}</p>
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
