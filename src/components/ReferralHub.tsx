"use client";

import { useMemo } from "react";

interface ReferralLink {
  label: string;
  href: string;
  external?: boolean;
}

function getLinks(locale: string, dict?: Record<string, unknown>): ReferralLink[] {
  const r = (dict as any)?.referral || {};
  return [
    { label: `🤖 ${r.aiTools || "AI Tools"}`, href: `https://ai.toolboxonline.club/${locale}`, external: true },
    { label: `💬 ${r.randomQuote || "Random Quote"}`, href: `/${locale}/tools/random-quote` },
    { label: `🌤️ ${r.globalWeather || "Global Weather"}`, href: `/${locale}/tools/global-weather` },
    { label: `📊 ${r.cryptoPrice || "Crypto Price"}`, href: `/${locale}/tools/crypto-price` },
    { label: `🎞️ ${r.gifSearch || "GIF Search"}`, href: `/${locale}/tools/gif-search` },
    { label: `💡 ${r.lifeHacks || "Life Hacks"}`, href: `/${locale}/tools/life-hacks` },
  ];
}

function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function ReferralHub({
  locale = "en",
  dict,
  title,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  title?: string;
}) {
  const r = (dict as any)?.referral || {};
  const links = useMemo(() => pickRandom(getLinks(locale, dict), 3), [locale, dict]);

  return (
    <section className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
      <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
        {title || r.title || "Discover More Free Tools"}
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {links.map((link) =>
          link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noopener" className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition-colors">{link.label}</a>
          ) : (
            <a key={link.href} href={link.href} className="rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:bg-transparent dark:text-amber-300 dark:hover:bg-amber-900/20 transition-colors">{link.label}</a>
          )
        )}
      </div>
    </section>
  );
}
