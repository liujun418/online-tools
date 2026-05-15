"use client";

import { useState, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const API_URL = "https://ipapi.co/json/";

const metadata = {
  title: "IP Geolocation Lookup",
  description: "Find your IP address, country, city, ISP, timezone, and coordinates instantly. Free IP lookup tool — no signup required.",
  keywords: ["ip lookup", "ip geolocation", "what is my ip", "ip address lookup", "geo ip", "ip location finder", "my ip address"],
  toolId: "ip-lookup",
};

interface IpData {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  country_code: string;
  latitude: number;
  longitude: number;
  timezone: string;
  org: string;
}

const LABELS: { key: keyof IpData; label: string; icon: string }[] = [
  { key: "ip", label: "IP Address", icon: "🌐" },
  { key: "country_name", label: "Country", icon: "🏳️" },
  { key: "city", label: "City", icon: "🏙️" },
  { key: "region", label: "Region", icon: "📍" },
  { key: "latitude", label: "Latitude", icon: "📐" },
  { key: "longitude", label: "Longitude", icon: "📏" },
  { key: "org", label: "ISP / Org", icon: "📡" },
  { key: "timezone", label: "Timezone", icon: "🕐" },
];

export default function IpLookupClient({
  locale = "en", dict, titleOverride, descriptionOverride,
}: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string; descriptionOverride?: string;
}) {
  const t = (dict as any)?.ipLookup || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [data, setData] = useState<IpData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true); setError(""); setCopied(false);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("API error");
      const json = await res.json();
      if (json.error) throw new Error(json.reason || "API error");
      setData(json);
    } catch {
      setError("Unable to fetch IP information. Please try again.");
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const copyAll = () => {
    if (!data) return;
    const text = LABELS.map((l) => `${l.label}: ${data[l.key] ?? "N/A"}`).join("\n");
    navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      <div className="mx-auto max-w-2xl">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
            <p className="mt-4 text-sm text-zinc-500">{t.loading || "Looking up your IP..."}</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center py-20">
            <p className="text-sm text-red-500">{error}</p>
            <button onClick={fetchData} className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{tp.tryAgain || "Try Again"}</button>
          </div>
        )}

        {!loading && data && (
          <>
            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {LABELS.map((l) => {
                const val = data[l.key];
                const display = l.key === "country_name" && data.country_code
                  ? `${val} ${getFlag(data.country_code)}`
                  : val ?? "—";
                return (
                  <div key={l.key} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
                    <p className="text-xs text-zinc-400">{l.icon} {l.label}</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900 break-all dark:text-white">{display}</p>
                  </div>
                );
              })}
            </div>

            {/* Copy + Refresh */}
            <div className="mt-4 flex gap-2">
              <button onClick={copyAll} className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
                {copied ? "✓ " + (t.copied || "Copied!") : "📋 " + (t.copyAll || "Copy All Info")}
              </button>
              <button onClick={fetchData} className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800">
                ↻ {t.refresh || "Refresh"}
              </button>
            </div>
          </>
        )}

        {/* Attribution */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          {t.poweredBy || "Powered by ipapi.co"} —{" "}
          <a href="https://ipapi.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-600">IP Geolocation API</a>
        </p>
        <p className="mt-1 text-center text-xs text-zinc-400">
          {t.compliance || "IP data is provided for informational purposes only. No personal data is stored."}
        </p>

        {/* Referral */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300">{t.referralText || "Explore more free tools!"}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <a href={`/${locale}/tools/world-map`} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">🗺️ {t.tryMap || "World Map"}</a>
            <a href={`/${locale}/tools/crypto-price`} className="rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:bg-transparent dark:text-blue-300 dark:hover:bg-blue-900/20">📈 {t.tryCrypto || "Crypto Prices"}</a>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}

const FLAGS: Record<string, string> = { US: "🇺🇸", GB: "🇬🇧", CN: "🇨🇳", JP: "🇯🇵", DE: "🇩🇪", FR: "🇫🇷", BR: "🇧🇷", IN: "🇮🇳", CA: "🇨🇦", AU: "🇦🇺", KR: "🇰🇷", IT: "🇮🇹", ES: "🇪🇸", MX: "🇲🇽", NL: "🇳🇱", SE: "🇸🇪", CH: "🇨🇭", SG: "🇸🇬", AE: "🇦🇪", SA: "🇸🇦", EG: "🇪🇬", TR: "🇹🇷" };
function getFlag(code: string): string { return FLAGS[code] || ""; }
