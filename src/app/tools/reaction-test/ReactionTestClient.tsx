"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Reaction Time Test — Reflex Speed Game",
  description: "Test your reaction speed with two game modes. Click targets at random intervals and random positions. Measure reaction time in milliseconds with rating tiers. Track best and average scores. Free, no signup.",
  keywords: [
    "reaction time test", "reflex test", "reaction speed test",
    "how fast is my reaction", "reaction time game", "reflex game",
    "click speed test", "reaction test online", "reflex tester",
  ],
  toolId: "reaction-test",
};

type Mode = "static" | "random";
type Phase = "idle" | "waiting" | "ready" | "result" | "too-early";

const STORAGE_KEY = "tb_reaction_test";
const RATING_TIERS = [
  { max: 150, key: "lightning", emoji: "⚡", color: "text-yellow-400" },
  { max: 200, key: "superfast", emoji: "🔥", color: "text-orange-500" },
  { max: 250, key: "excellent", emoji: "💪", color: "text-emerald-500" },
  { max: 300, key: "good", emoji: "👍", color: "text-green-600" },
  { max: 400, key: "average", emoji: "👌", color: "text-blue-500" },
  { max: 500, key: "slow", emoji: "😴", color: "text-amber-600" },
  { max: Infinity, key: "sleepy", emoji: "🐢", color: "text-red-500" },
] as const;

interface StoredData {
  bestTime: number | null;
  attempts: number[];
}

function loadData(): StoredData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { bestTime: null, attempts: [] };
  } catch { return { bestTime: null, attempts: [] }; }
}

function saveData(data: StoredData) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

function getRating(ms: number): (typeof RATING_TIERS)[number] {
  return RATING_TIERS.find((t) => ms < t.max) ?? RATING_TIERS[RATING_TIERS.length - 1];
}

function getAvg(attempts: number[]): number | null {
  if (attempts.length === 0) return null;
  return Math.round(attempts.reduce((a, b) => a + b, 0) / attempts.length);
}

export default function ReactionTestClient({
  locale = "en", dict, titleOverride, descriptionOverride,
}: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string; descriptionOverride?: string;
}) {
  const rt = (dict as any)?.reactionTest || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [mode, setMode] = useState<Mode>("static");
  const [phase, setPhase] = useState<Phase>("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [attempts, setAttempts] = useState<number[]>([]);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [avgTime, setAvgTime] = useState<number | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = loadData();
    setAttempts(data.attempts);
    setBestTime(data.bestTime);
    setAvgTime(getAvg(data.attempts));
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const persist = useCallback((newAttempts: number[], newBest: number | null) => {
    setAttempts(newAttempts);
    setBestTime(newBest);
    setAvgTime(getAvg(newAttempts));
    saveData({ bestTime: newBest, attempts: newAttempts.slice(-100) });
  }, []);

  const clearData = useCallback(() => {
    persist([], null);
    setPhase("idle");
    setReactionTime(null);
  }, [persist]);

  const startRound = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPhase("waiting");
    setReactionTime(null);
    const delay = 1500 + Math.random() * 3500;
    timerRef.current = setTimeout(() => {
      if (mode === "random") {
        const m = 10; // margin %
        setTargetPos({ x: m + Math.random() * (100 - m * 2), y: m + Math.random() * (100 - m * 2) });
      }
      startRef.current = performance.now();
      setPhase("ready");
    }, delay);
  }, [mode]);

  const handleClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (phase === "idle" || phase === "result") {
      startRound();
    } else if (phase === "waiting") {
      if (timerRef.current) clearTimeout(timerRef.current);
      setPhase("too-early");
      setTimeout(() => { setPhase("idle"); }, 1200);
    } else if (phase === "ready") {
      const elapsed = Math.round(performance.now() - startRef.current);
      setReactionTime(elapsed);
      setPhase("result");
      const newAttempts = [...attempts, elapsed].slice(-100);
      const newBest = bestTime === null ? elapsed : Math.min(bestTime, elapsed);
      persist(newAttempts, newBest);
    }
  }, [phase, attempts, bestTime, startRound, persist]);

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        if (phase === "idle" || phase === "result") startRound();
        else if (phase === "waiting") {
          if (timerRef.current) clearTimeout(timerRef.current);
          setPhase("too-early");
          setTimeout(() => { setPhase("idle"); }, 1200);
        } else if (phase === "ready") {
          const elapsed = Math.round(performance.now() - startRef.current);
          setReactionTime(elapsed);
          setPhase("result");
          const newAttempts = [...attempts, elapsed].slice(-100);
          const newBest = bestTime === null ? elapsed : Math.min(bestTime, elapsed);
          persist(newAttempts, newBest);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, attempts, bestTime, startRound, persist]);

  const rating = reactionTime !== null ? getRating(reactionTime) : null;
  const phaseBg: Record<Phase, string> = {
    idle: "bg-zinc-100 dark:bg-zinc-800",
    waiting: "bg-red-100 dark:bg-red-950/40",
    ready: "bg-green-100 dark:bg-green-950/40",
    result: "bg-blue-50 dark:bg-blue-950/30",
    "too-early": "bg-orange-100 dark:bg-orange-950/40",
  };
  const phaseBorder: Record<Phase, string> = {
    idle: "border-zinc-300 dark:border-zinc-600",
    waiting: "border-red-400 dark:border-red-600",
    ready: "border-green-500 dark:border-green-400",
    result: "border-blue-300 dark:border-blue-600",
    "too-early": "border-orange-400 dark:border-orange-600",
  };

  const targetSize = mode === "random" ? "w-16 h-16 sm:w-20 sm:h-20" : "w-24 h-24 sm:w-32 sm:h-32";
  const tooEarly = phase === "too-early";

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      <div className="mx-auto max-w-lg">
        {/* Mode selector */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {rt.mode || "Mode"}:
          </span>
          <button
            onClick={() => { setMode("static"); setPhase("idle"); setReactionTime(null); }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all ${
              mode === "static"
                ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700"
            }`}
          >
            🎯 {rt.staticMode || "Static Flash"}
          </button>
          <button
            onClick={() => { setMode("random"); setPhase("idle"); setReactionTime(null); }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all ${
              mode === "random"
                ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 dark:bg-zinc-800/50 dark:text-zinc-400 dark:border-zinc-700"
            }`}
          >
            🌀 {rt.randomMode || "Random Position"}
          </button>
        </div>

        {/* Instruction */}
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          {rt.instruction || "When the red box turns green, click as fast as you can! Don't click too early — patience is part of the test."}
        </p>

        {/* Game area */}
        <div
          ref={containerRef}
          className={`relative overflow-hidden rounded-2xl border-2 ${phaseBorder[phase]} ${phaseBg[phase]} transition-all duration-200`}
          style={{ height: mode === "random" ? "360px" : "300px", touchAction: "none" }}
          onMouseDown={handleClick}
          onTouchStart={handleClick}
          role="button"
          tabIndex={0}
        >
          {/* Waiting / target area */}
          {phase === "waiting" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="text-5xl animate-pulse">👀</div>
              <p className="text-lg font-bold text-red-600 dark:text-red-400">
                {rt.waiting || "Wait for green..."}
              </p>
            </div>
          )}

          {/* Ready target */}
          {phase === "ready" && (
            <div
              className={`absolute rounded-full bg-green-500 shadow-lg shadow-green-500/40 cursor-pointer transition-transform hover:scale-110 active:scale-95 ${targetSize}`}
              style={{
                left: mode === "random" ? `${targetPos.x}%` : "50%",
                top: mode === "random" ? `${targetPos.y}%` : "50%",
                transform: mode === "random"
                  ? `translate(-50%, -50%)`
                  : "translate(-50%, -50%)",
              }}
            />
          )}

          {/* Too early */}
          {tooEarly && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="text-5xl">⏰</div>
              <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                {rt.tooEarly || "Too early! Wait for green."}
              </p>
              <p className="text-sm text-orange-500">
                {rt.tooEarlyHint || "Resetting..."}
              </p>
            </div>
          )}

          {/* Idle */}
          {phase === "idle" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer">
              <div className="text-5xl">🎯</div>
              <p className="text-lg font-bold text-zinc-700 dark:text-zinc-200">
                {rt.clickToStart || "Click or tap to start"}
              </p>
              <p className="text-xs text-zinc-400">
                {rt.hint || "Space / Enter also works"}
              </p>
            </div>
          )}

          {/* Result */}
          {phase === "result" && reactionTime !== null && rating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 cursor-pointer">
              <div className={`text-6xl font-bold tracking-tight ${rating.color}`}>
                {reactionTime}<span className="text-2xl">ms</span>
              </div>
              <div className="text-xl font-semibold">
                {rating.emoji} {(rt as any)[`rating_${rating.key}`] || rating.key}
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                {rt.tapToRetry || "Tap to try again"}
              </p>
            </div>
          )}
        </div>

        {/* Stats panel */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-xs text-zinc-400">{rt.attempts || "Attempts"}</div>
            <div className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{attempts.length}</div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-xs text-zinc-400">{rt.bestTime || "Best"}</div>
            <div className="text-xl font-bold text-green-600 dark:text-green-400">
              {bestTime !== null ? `${bestTime}ms` : "--"}
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-xs text-zinc-400">{rt.avgTime || "Average"}</div>
            <div className="text-xl font-bold text-amber-600 dark:text-amber-400">
              {avgTime !== null ? `${avgTime}ms` : "--"}
            </div>
          </div>
        </div>

        {/* Rating table */}
        <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
          <h3 className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            {rt.ratingTitle || "Reaction Speed Tiers"}
          </h3>
          <div className="space-y-1">
            {RATING_TIERS.map((tier) => (
              <div key={tier.key} className="flex items-center gap-2 text-xs">
                <span className="w-6 text-center">{tier.emoji}</span>
                <span className="flex-1 text-zinc-600 dark:text-zinc-400">
                  {(rt as any)[`rating_${tier.key}`] || tier.key}
                </span>
                <span className="font-mono text-zinc-400">
                  {tier.max === Infinity ? "500ms+" : `< ${tier.max}ms`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Clear + history */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-zinc-400">
            {rt.scoresSaved || "Scores saved locally"}
          </span>
          {attempts.length > 0 && (
            <button
              onClick={clearData}
              className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/30 transition-colors"
            >
              🗑️ {rt.clearData || "Clear All Data"}
            </button>
          )}
        </div>

        {attempts.length > 1 && (
          <div className="mt-3">
            <h4 className="mb-2 text-xs font-medium text-zinc-500">{rt.recentHistory || "Recent History"}</h4>
            <div className="flex flex-wrap gap-1.5">
              {attempts.slice(-15).reverse().map((t, i) => {
                const r = getRating(t);
                const isBest = t === bestTime;
                return (
                  <span key={i} className={`inline-flex items-center gap-0.5 rounded-md px-2 py-1 text-xs font-mono text-white ${
                    isBest ? "bg-green-500" : t < 250 ? "bg-green-400" : t < 350 ? "bg-amber-400" : "bg-orange-400"
                  }`}>
                    {isBest ? "🏆" : r.emoji} {t}ms
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          🎮 {rt.disclaimer || "For entertainment only. Reaction times may vary based on device, browser, and network conditions."}
        </p>
      </div>
    </ToolLayout>
  );
}
