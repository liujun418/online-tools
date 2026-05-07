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

export default function ReactionTestClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
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

  const rt = (dict as any)?.reactionTest || {};
  const startText = rt.start || "Click to Start";
  const waitingText = rt.waiting || "Wait for green…";
  const goText = rt.go || "Click!";
  const tooEarlyText = rt.tooEarly || "Too early! Be patient.";
  const tryAgainText = rt.tryAgain || "Click to try again";
  const instructionText = rt.instruction || "Wait for the red block to turn green, then click as fast as you can. Record your reaction time and challenge your best time.";
  const attemptsLabel = rt.attempts || "Attempts";
  const bestTimeLabel = rt.bestTime || "Best Time";
  const avgTimeLabel = rt.avgTime || "Average Time";
  const historyLabel = rt.history || "History";

  const ratingMap: Record<string, string> = {
    lightning: rt.rating_lightning || "Lightning fast",
    superfast: rt.rating_superfast || "Super fast",
    excellent: rt.rating_excellent || "Excellent",
    good: rt.rating_good || "Good",
    average: rt.rating_average || "Average",
    slow: rt.rating_slow || "A bit slow",
    sleepy: rt.rating_sleepy || "Need more coffee",
  };

  const getRating = (ms: number): string => {
    if (ms < 150) return `⚡ ${ratingMap.lightning}`;
    if (ms < 200) return `🔥 ${ratingMap.superfast}`;
    if (ms < 250) return `💪 ${ratingMap.excellent}`;
    if (ms < 300) return `👍 ${ratingMap.good}`;
    if (ms < 400) return `👌 ${ratingMap.average}`;
    if (ms < 500) return `😴 ${ratingMap.slow}`;
    return `🐢 ${ratingMap.sleepy}`;
  };

  const stateConfig: Record<Phase, { bg: string; text: string; cursor: string }> = {
    idle: {
      bg: "bg-blue-500",
      text: startText,
      cursor: "cursor-pointer",
    },
    waiting: {
      bg: "bg-red-500",
      text: waitingText,
      cursor: "cursor-not-allowed",
    },
    ready: {
      bg: "bg-green-500",
      text: goText,
      cursor: "cursor-pointer",
    },
    clicked: {
      bg: "bg-amber-500",
      text: "",
      cursor: "cursor-pointer",
    },
    "too-early": {
      bg: "bg-orange-500",
      text: tooEarlyText,
      cursor: "cursor-pointer",
    },
  };

  const handleClick = useCallback(() => {
    if (phase === "idle") {
      setPhase("waiting");
      setReactionTime(null);
      const delay = 2000 + Math.random() * 3000;
      timerRef.current = setTimeout(() => {
        startTimeRef.current = performance.now();
        setPhase("ready");
      }, delay);
    } else if (phase === "waiting") {
      if (timerRef.current) clearTimeout(timerRef.current);
      setPhase("too-early");
    } else if (phase === "ready") {
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
      setPhase("waiting");
      setReactionTime(null);
      const delay = 2000 + Math.random() * 3000;
      timerRef.current = setTimeout(() => {
        startTimeRef.current = performance.now();
        setPhase("ready");
      }, delay);
    } else if (phase === "clicked") {
      setPhase("idle");
    }
  }, [phase, attempts]);

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {instructionText}
      </p>

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
            <div className="mt-6 text-sm opacity-80">{tryAgainText}</div>
          </div>
        ) : (
          <div className="text-3xl font-bold text-white">{stateConfig[phase].text}</div>
        )}
      </div>

      {attempts.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">{attemptsLabel}</div>
            <div className="text-2xl font-bold">{attempts.length}</div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">{bestTimeLabel}</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {bestTime}ms
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-700 dark:bg-zinc-900">
            <div className="text-sm text-zinc-500 dark:text-zinc-400">{avgTimeLabel}</div>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              {avgTime}ms
            </div>
          </div>
        </div>
      )}

      {attempts.length > 1 && (
        <div className="mt-6">
          <h3 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {historyLabel}
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
