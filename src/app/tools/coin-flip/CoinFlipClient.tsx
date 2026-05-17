"use client";

import { useState, useCallback, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Free Virtual Coin Flip — Heads or Tails Simulator Online",
  description: "Flip a virtual coin online with realistic 3D animation. Track heads/tails statistics, customize coin labels. Perfect for making decisions, settling bets, or teaching probability. Free, no signup.",
  keywords: [
    "virtual coin flip", "coin flipper", "heads or tails", "coin toss online",
    "random coin flip", "digital coin toss", "decision maker coin", "free coin flip",
    "coin flip simulator", "flip a coin", "online coin toss", "random heads or tails",
  ],
  toolId: "coin-flip",
};

const COIN_SIDES = {
  heads: {
    face: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2006_Quarter_Proof.png/480px-2006_Quarter_Proof.png",
    label: "Heads",
  },
  tails: {
    face: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/2006_Quarter_Proof_Reverse.png/480px-2006_Quarter_Proof_Reverse.png",
    label: "Tails",
  },
};

const EMULATE_COINS = false;

export default function CoinFlipClient({
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
  const cf = (dict as any)?.coinFlip || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [stats, setStats] = useState({ heads: 0, tails: 0, total: 0 });
  const [headsLabel, setHeadsLabel] = useState(cf.headsLabel || "Heads");
  const [tailsLabel, setTailsLabel] = useState(cf.tailsLabel || "Tails");
  const [showSettings, setShowSettings] = useState(false);
  const flipTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const flip = useCallback(() => {
    if (flipping) return;
    setFlipping(true);
    setResult(null);

    const outcome = Math.random() < 0.5 ? "heads" : "tails";

    // Animation duration matches CSS (0.8s)
    flipTimeoutRef.current = setTimeout(() => {
      setResult(outcome);
      setFlipping(false);
      setStats((prev) => ({
        ...prev,
        [outcome]: prev[outcome] + 1,
        total: prev.total + 1,
      }));
    }, 800);
  }, [flipping]);

  const resetStats = () => {
    setStats({ heads: 0, tails: 0, total: 0 });
    setResult(null);
  };

  const statsPercent = (count: number) => {
    if (stats.total === 0) return "0%";
    return ((count / stats.total) * 100).toFixed(1) + "%";
  };

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      <div className="mx-auto max-w-md">
        {/* Coin display area */}
        <div className="flex flex-col items-center py-8">
          <div
            className={`relative w-40 h-40 sm:w-48 sm:h-48 cursor-pointer select-none ${flipping ? "animate-flip" : ""}`}
            onClick={flip}
            style={{ perspective: "600px" }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                animation: flipping ? "coinFlip 0.8s ease-out" : "none",
              }}
            >
              {/* Heads side */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-full border-4 border-amber-500 bg-gradient-to-b from-amber-300 to-amber-500 shadow-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                {EMULATE_COINS ? (
                  <img
                    src={COIN_SIDES.heads.face}
                    alt="Heads"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <>
                    <span className="text-3xl sm:text-4xl">🪙</span>
                    <span className="mt-1 text-sm font-bold text-amber-900">{headsLabel}</span>
                  </>
                )}
              </div>

              {/* Tails side (rotated 180deg) */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-full border-4 border-amber-500 bg-gradient-to-b from-amber-500 to-amber-600 shadow-xl"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                {EMULATE_COINS ? (
                  <img
                    src={COIN_SIDES.tails.face}
                    alt="Tails"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <>
                    <span className="text-3xl sm:text-4xl">🪙</span>
                    <span className="mt-1 text-sm font-bold text-amber-900">{tailsLabel}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Result display */}
          <p className="mt-4 text-lg font-semibold text-zinc-700 dark:text-zinc-200 min-h-[28px]">
            {flipping
              ? (cf.flipping || "Flipping...")
              : result === "heads"
              ? `🪙 ${headsLabel}!`
              : result === "tails"
              ? `🪙 ${tailsLabel}!`
              : (cf.tapToFlip || "Tap the coin to flip")}
          </p>

          <button
            onClick={flip}
            disabled={flipping}
            className="mt-4 rounded-xl bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-amber-600 active:scale-95 disabled:opacity-50 dark:bg-amber-600 dark:hover:bg-amber-500"
          >
            {cf.flipAgain || "Flip Again"}
          </button>
        </div>

        {/* Statistics */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
          <h3 className="mb-4 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
            📊 {cf.statistics || "Statistics"}
          </h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-amber-50 p-3 dark:bg-amber-950/30">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{headsLabel}</p>
              <p className="mt-1 text-2xl font-bold text-amber-600 dark:text-amber-400">{stats.heads}</p>
              <p className="text-xs text-zinc-400">{statsPercent(stats.heads)}</p>
            </div>
            <div className="rounded-xl bg-zinc-100 p-3 dark:bg-zinc-800">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{tailsLabel}</p>
              <p className="mt-1 text-2xl font-bold text-zinc-600 dark:text-zinc-300">{stats.tails}</p>
              <p className="text-xs text-zinc-400">{statsPercent(stats.tails)}</p>
            </div>
            <div className="rounded-xl bg-blue-50 p-3 dark:bg-blue-950/30">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{cf.total || "Total"}</p>
              <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</p>
              <p className="text-xs text-zinc-400">100%</p>
            </div>
          </div>
          {stats.total > 0 && (
            <button
              onClick={resetStats}
              className="mt-4 w-full rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400 dark:hover:bg-red-950/40"
            >
              🗑️ {cf.resetStats || "Reset Statistics"}
            </button>
          )}
        </div>

        {/* Customization */}
        <div className="mt-4 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex w-full items-center justify-between px-5 py-4 text-sm font-semibold text-zinc-700 dark:text-zinc-200"
          >
            <span>⚙️ {cf.settings || "Customize Labels"}</span>
            <svg className={`h-4 w-4 transition-transform ${showSettings ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showSettings && (
            <div className="border-t border-zinc-200 px-5 pb-5 pt-4 dark:border-zinc-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {cf.headsLabel || "Heads Label"}
                  </label>
                  <input
                    type="text"
                    value={headsLabel}
                    onChange={(e) => setHeadsLabel(e.target.value || "Heads")}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                    maxLength={20}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {cf.tailsLabel || "Tails Label"}
                  </label>
                  <input
                    type="text"
                    value={tailsLabel}
                    onChange={(e) => setTailsLabel(e.target.value || "Tails")}
                    className="mt-1 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                    maxLength={20}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          🎲 {cf.disclaimer || "This coin flipper uses pseudo-randomness for entertainment purposes. Not suitable for cryptographic or legally binding decisions."}
        </p>
      </div>

      <style jsx global>{`
        @keyframes coinFlip {
          0% { transform: rotateY(0deg); }
          30% { transform: rotateY(180deg); }
          60% { transform: rotateY(360deg); }
          80% { transform: rotateY(540deg); }
          100% { transform: rotateY(720deg); }
        }
      `}</style>
    </ToolLayout>
  );
}
