"use client";

import { useState, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const PRICE_API = "https://ai-toolbox-api-production.up.railway.app/api/crypto-price";

const metadata = {
  title: "Cryptocurrency Price Tracker",
  description:
    "Track real-time cryptocurrency prices. Bitcoin, Ethereum, Solana, and more — live USD prices, 24h change, and market cap. Free, no signup.",
  keywords: [
    "crypto price", "bitcoin price", "ethereum price", "crypto tracker",
    "cryptocurrency prices", "btc usd", "eth usd", "live crypto prices",
  ],
  toolId: "crypto-price",
};

const COINS: { id: string; name: string; symbol: string; icon: string }[] = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC", icon: "₿" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH", icon: "Ξ" },
  { id: "binancecoin", name: "BNB", symbol: "BNB", icon: "🟡" },
  { id: "solana", name: "Solana", symbol: "SOL", icon: "🟣" },
  { id: "ripple", name: "XRP", symbol: "XRP", icon: "🔵" },
  { id: "cardano", name: "Cardano", symbol: "ADA", icon: "🔷" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", icon: "🐕" },
  { id: "polkadot", name: "Polkadot", symbol: "DOT", icon: "⚫" },
];

interface CoinData {
  usd: number;
  usd_24h_change?: number;
  usd_market_cap?: number;
}

type PriceData = Record<string, CoinData>;

function formatPrice(n: number): string {
  if (n >= 1000) return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (n >= 1) return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
  return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 8 })}`;
}

function formatMarketCap(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  return `$${n.toLocaleString()}`;
}

export default function CryptoPriceClient({
  locale = "en",
  dict,
  titleOverride,
  descriptionOverride,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
}) {
  const t = (dict as any)?.cryptoPrice || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [prices, setPrices] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch(PRICE_API);
      if (!res.ok) throw new Error("API failed");
      const data: PriceData = await res.json();
      setPrices(data);
      setLastUpdate(new Date());
      setError("");
    } catch {
      if (!prices) setError("Unable to load prices. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  const timeStr = lastUpdate
    ? lastUpdate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "--:--:--";

  return (
    <ToolLayout
      title={title}
      description={description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header bar */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-zinc-500">
            {t.autoRefresh || "Auto-refresh every 30s"} · {t.lastUpdate || "Last update"}: {timeStr}
          </span>
          <button
            onClick={fetchPrices}
            className="rounded-lg border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            ↻ {t.refresh || "Refresh"}
          </button>
        </div>

        {/* Loading */}
        {loading && !prices && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
            <p className="mt-4 text-sm text-zinc-500">{t.loading || "Loading prices..."}</p>
          </div>
        )}

        {/* Error */}
        {error && !prices && (
          <div className="flex flex-col items-center py-20">
            <p className="text-sm text-red-500">{error}</p>
            <button onClick={fetchPrices} className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              {tp.tryAgain || "Try Again"}
            </button>
          </div>
        )}

        {/* Price grid */}
        {prices && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {COINS.map((coin) => {
              const data = prices[coin.id];
              if (!data) return null;
              const change = data.usd_24h_change ?? 0;
              const isUp = change >= 0;

              return (
                <div
                  key={coin.id}
                  className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{coin.icon}</span>
                      <div>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-white">{coin.name}</span>
                        <span className="ml-1.5 text-xs text-zinc-400">{coin.symbol}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold ${isUp ? "text-green-600" : "text-red-500"}`}>
                      {isUp ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
                    </span>
                  </div>
                  <p className="mt-2 text-xl font-bold text-zinc-900 dark:text-white">
                    {formatPrice(data.usd)}
                  </p>
                  {data.usd_market_cap && (
                    <p className="mt-1 text-xs text-zinc-400">
                      MCap: {formatMarketCap(data.usd_market_cap)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Attribution */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          {t.poweredBy || "Powered by CoinGecko"} —{" "}
          <a
            href="https://www.coingecko.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-600"
          >
            CoinGecko Cryptocurrency API
          </a>
        </p>
        <p className="mt-1 text-center text-xs text-zinc-400">
          {t.disclaimer || "Prices are for informational purposes only. Not financial advice."}
        </p>

        {/* AI Tools referral */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
            {t.referralText || "Need more free tools? Try our other free utilities below!"}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a
              href={`/${locale}/tools/bing-wallpaper`}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              🖼️ {t.tryBing || "Bing 4K Wallpaper"}
            </a>
            <a
              href={`/${locale}/tools/nasa-apod`}
              className="rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors dark:border-emerald-600 dark:bg-transparent dark:text-emerald-300 dark:hover:bg-emerald-900/20"
            >
              🔭 {t.tryNasa || "NASA APOD"}
            </a>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
