"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Reaction Time Tester",
  description:
    "Test your reflexes! Click as fast as you can when the block turns green to measure your reaction time in milliseconds.",
  keywords: [
    "reaction time test",
    "reflex test",
    "reaction speed test",
    "how fast is my reaction",
    "reaction time game",
  ],
  toolId: "reaction-test",
};

type Phase = "idle" | "waiting" | "ready" | "clicked" | "too-early";

const stateConfig: Record<Phase, { bg: string; text: string; cursor: string }> = {
  idle: {
    bg: "bg-blue-500",
    text: "点击开始",
    cursor: "cursor-pointer",
  },
  waiting: {
    bg: "bg-red-500",
    text: "等待变绿…",
    cursor: "cursor-not-allowed",
  },
  ready: {
    bg: "bg-green-500",
    text: "点击！",
    cursor: "cursor-pointer",
  },
  clicked: {
    bg: "bg-amber-500",
    text: "",
    cursor: "cursor-pointer",
  },
  "too-early": {
    bg: "bg-orange-500",
    text: "太快了！别着急",
    cursor: "cursor-pointer",
  },
};

export default function ReactionTestClient() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number[]>([]);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [avgTime, setAvgTime] = useState<number | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = useCallback(() => {
    if (phase === "idle") {
      // Start waiting
      setPhase("waiting");
      setReactionTime(null);
      const delay = 2000 + Math.random() * 3000; // 2-5 seconds
      timerRef.current = setTimeout(() => {
        startTimeRef.current = performance.now();
        setPhase("ready");
      }, delay);
    } else if (phase === "waiting") {
      // Clicked too early
      if (timerRef.current) clearTimeout(timerRef.current);
      setPhase("too-early");
    } else if (phase === "ready") {
      // Record reaction time
      const elapsed = Math.round(performance.now() - startTimeRef.current);
      setReactionTime(elapsed);
      setPhase("clicked");
      setAttempts((prev) => [...prev, elapsed]);
      setBestTime((prev) => (prev === null ? elapsed : Math.min(prev, elapsed)));
      setAvgTime((prev) => {
        const newAttempts = [...(attempts || []), elapsed];
        const sum = newAttempts.reduce((a, b) => a + b, 0);
        return Math.round(sum / newAttempts.length);
      });
    } else if (phase === "too-early") {
      // Restart
      setPhase("waiting");
      setReactionTime(null);
      const delay = 2000 + Math.random() * 3000;
      timerRef.current = setTimeout(() => {
        startTimeRef.current = performance.now();
        setPhase("ready");
      }, delay);
    } else if (phase === "clicked") {
      // Reset for another round
      setPhase("idle");
    }
  }, [phase, attempts]);

  const getRating = (ms: number): string => {
    if (ms < 150) return "⚡ 闪电反应";
    if (ms < 200) return "🔥 极快";
    if (ms < 250) return "💪 优秀";
    if (ms < 300) return "👍 不错";
    if (ms < 400) return "👌 平均水平";
    if (ms < 500) return "😴 稍慢";
    return "🐢 需要提神";
  };

  return (
    <ToolLayout {...metadata}>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        色块变红后请等待，出现"点击！"字样后立刻点击。记录你的反应时间，挑战最快记录。
      </p>

      {/* Main clickable block */}
      <div
        className={`mt-6 flex w-full select-none items-center justify-center rounded-2xl py-24 text-center transition-colors duration-100 ${stateConfig[phase].bg} ${stateConfig[phase].cursor}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleClick();
        }}
      >
        {phase === "clicked" && reactionTime !== null ? (
          <div className="text-white">
            <div className="text-6xl font-bold">{reactionTime}ms</div>
            <div className="mt-3 text-xl font-medium">{getRating(reactionTime)}</div>
            <div className="mt-6 text-sm opacity-80">点击再试一次</div>
          </div>
        ) : (
          <div className="text-3xl font-bold text-white">{stateConfig[phase].text}</div>
        )}
      </div>

      {/* Stats */}
      {attempts.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">尝试次数</div>
            <div className="text-2xl font-bold">{attempts.length}</div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">最快反应</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {bestTime}ms
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">平均反应</div>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              {avgTime}ms
            </div>
          </div>
        </div>
      )}

      {/* Recent attempts list */}
      {attempts.length > 1 && (
        <div className="mt-6">
          <h3 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            历史记录
          </h3>
          <div className="flex flex-wrap gap-2">
            {attempts.map((t, i) => (
              <span
                key={i}
                className={`rounded-md px-3 py-1.5 font-mono text-sm text-white ${
                  t === bestTime
                    ? "bg-green-500"
                    : t < 250
                      ? "bg-green-400"
                      : t < 350
                        ? "bg-amber-400"
                        : "bg-orange-400"
                }`}
              >
                #{i + 1} {t}ms
              </span>
            ))}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
