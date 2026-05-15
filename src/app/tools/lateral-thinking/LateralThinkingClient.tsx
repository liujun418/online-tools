"use client";

import { useState, useEffect, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";
import { getRandomPuzzle, type Puzzle } from "@/data/lateral-thinking/questions";

const metadata = {
  title: "Lateral Thinking Puzzle",
  description:
    "Test your reasoning with AI-generated lateral thinking puzzles. Free online brain teasers — no signup required.",
  keywords: [
    "lateral thinking puzzle", "brain teaser", "sea turtle soup",
    "mystery puzzle", "riddle game", "logic puzzle",
    "mind bender", "critical thinking game",
  ],
  toolId: "lateral-thinking",
};

const API_BASE = "https://ai-toolbox-api-production.up.railway.app";

type Category = "classic" | "horror" | "brain-hole";
type Lang = "en" | "es" | "ar";

interface ApiPuzzle {
  scenario: string;
  answer: string;
  twist: string;
  hint?: string;
  status?: string;
  feedback?: string;
  reveal?: string;
}

const CATEGORIES: { id: Category; gradient: string; icon: string }[] = [
  { id: "classic", gradient: "from-indigo-900 via-slate-800 to-slate-900", icon: "🔍" },
  { id: "horror", gradient: "from-red-950 via-zinc-900 to-black", icon: "🕯️" },
  { id: "brain-hole", gradient: "from-purple-900 via-fuchsia-900 to-indigo-900", icon: "🌀" },
];

const CATEGORY_GRADIENTS: Record<Category, string> = {
  "classic": "from-indigo-900/90 via-slate-800/95 to-slate-900/90",
  "horror": "from-red-950/90 via-zinc-900/95 to-black/90",
  "brain-hole": "from-purple-900/90 via-fuchsia-900/90 to-indigo-900/90",
};

const CATEGORY_BORDERS: Record<Category, string> = {
  "classic": "border-amber-500/30",
  "horror": "border-red-500/30",
  "brain-hole": "border-green-400/30",
};

export default function LateralThinkingClient({
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
  const lang = (locale || "en") as Lang;
  const t = (dict as any)?.lateralThinking || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [category, setCategory] = useState<Category>("classic");
  const [puzzle, setPuzzle] = useState<ApiPuzzle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [hintText, setHintText] = useState("");
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [usingFallback, setUsingFallback] = useState(false);
  const [localPuzzle, setLocalPuzzle] = useState<Puzzle | null>(null);

  const fetchPuzzle = useCallback(async (cat: Category) => {
    setLoading(true);
    setError("");
    setRevealed(false);
    setHintText("");
    setGuess("");
    setFeedback("");

    try {
      const res = await fetch(`${API_BASE}/api/lateral-thinking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate",
          category: cat,
          difficulty: "medium",
          language: lang,
        }),
      });

      if (!res.ok) throw new Error("API failed");
      const data: ApiPuzzle = await res.json();
      setPuzzle(data);
      setUsingFallback(false);
    } catch {
      // Fallback to local questions
      const local = getRandomPuzzle(cat);
      setLocalPuzzle(local);
      setPuzzle({
        scenario: local.scenario,
        answer: local.answer,
        twist: local.twist,
      });
      setUsingFallback(true);
    } finally {
      setLoading(false);
    }
  }, [lang]);

  useEffect(() => {
    fetchPuzzle(category);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    fetchPuzzle(cat);
  };

  const handleHint = async () => {
    if (!puzzle) return;
    if (usingFallback && localPuzzle) {
      setHintText(localPuzzle.hint);
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/lateral-thinking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "hint",
          scenario: puzzle.scenario,
          answer: puzzle.answer,
          language: lang,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setHintText(data.hint || "");
      }
    } catch { /* ignore */ }
  };

  const handleVerify = async () => {
    if (!guess.trim() || !puzzle) return;
    if (usingFallback && localPuzzle) {
      const g = guess.trim().toLowerCase();
      const a = localPuzzle.answer.toLowerCase();
      if (g.includes(a.substring(0, 20))) {
        setFeedback("correct");
      } else if (a.includes(g)) {
        setFeedback("close");
      } else {
        setFeedback("wrong");
      }
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/api/lateral-thinking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "verify",
          scenario: puzzle.scenario,
          answer: puzzle.answer,
          guess: guess.trim(),
          language: lang,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setFeedback(data.feedback || "");
      }
    } catch { /* ignore */ }
  };

  const handleReveal = () => setRevealed(true);

  const gradient = CATEGORY_GRADIENTS[category];
  const borderColor = CATEGORY_BORDERS[category];
  const catInfo = CATEGORIES.find((c) => c.id === category);

  return (
    <ToolLayout
      title={title}
      description={description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
    <div className="mx-auto max-w-2xl">
      {/* Category tabs */}
      <div className="mb-6 flex gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => handleCategoryChange(c.id)}
            disabled={loading}
            className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all disabled:opacity-50 ${
              category === c.id
                ? "border-zinc-400 bg-zinc-100 text-zinc-900 shadow-sm dark:border-zinc-500 dark:bg-zinc-800 dark:text-white"
                : "border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200"
            }`}
          >
            <span className="mr-1">{c.icon}</span>
            <span className="hidden sm:inline">{(t.categories as any)?.[c.id] || c.id}</span>
          </button>
        ))}
      </div>

      {/* Scenario card */}
      <div className={`relative overflow-hidden rounded-2xl border ${borderColor} bg-gradient-to-br ${gradient}`}>
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center px-6 py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            <p className="mt-4 text-sm text-white/60">{t.loading || "Generating puzzle..."}</p>
          </div>
        )}

        {/* Puzzle content */}
        {!loading && puzzle && (
          <div className="px-6 py-8 sm:px-8 sm:py-10">
            {catInfo && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70 backdrop-blur-sm">
                {catInfo.icon} {(t.categories as any)?.[category] || category}
              </span>
            )}

            <p className="mt-4 text-lg leading-relaxed text-white sm:text-xl">
              {puzzle.scenario}
            </p>

            {usingFallback && (
              <p className="mt-2 text-xs text-white/40">
                {t.offlineMode || "Offline mode — pre-loaded puzzle"}
              </p>
            )}

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              {!revealed && (
                <>
                  <button
                    onClick={handleReveal}
                    className="rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/25 transition-colors"
                  >
                    {t.reveal || "Reveal Truth"}
                  </button>
                  <button
                    onClick={handleHint}
                    disabled={!!hintText}
                    className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm hover:bg-white/20 transition-colors disabled:opacity-40"
                  >
                    {hintText ? (t.hinted || "Hint given ✓") : (t.hint || "Get Hint")}
                  </button>
                </>
              )}
              <button
                onClick={() => fetchPuzzle(category)}
                className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                {t.nextStory || "Next Story →"}
              </button>
            </div>

            {/* Hint display */}
            {hintText && (
              <div className="mt-4 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-amber-300">💡 {(t.hint || "Hint")}:</span> {hintText}
                </p>
              </div>
            )}

            {/* Reveal section */}
            {revealed && (
              <div className="mt-6 rounded-xl bg-white/10 p-5 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-amber-300">
                  {t.theAnswer || "The Answer"}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-white">
                  {puzzle.answer}
                </p>
                {puzzle.twist && (
                  <div className="mt-3 rounded-lg bg-black/20 p-3">
                    <span className="text-xs font-semibold text-white/50">{t.theTwist || "The Twist"}:</span>
                    <p className="mt-1 text-sm text-white/80">{puzzle.twist}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Guess area */}
      {!loading && puzzle && !revealed && (
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleVerify()}
            placeholder={t.guessPlaceholder || "Type your guess..."}
            className="flex-1 rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500"
          />
          <button
            onClick={handleVerify}
            disabled={!guess.trim()}
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700 disabled:opacity-40 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {t.check || "Check"}
          </button>
        </div>
      )}

      {/* Feedback toast */}
      {feedback && (
        <div className={`mt-3 rounded-lg p-3 text-sm ${
          feedback === "correct" || feedback.toLowerCase().includes("correct")
            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
            : feedback === "close" || feedback.toLowerCase().includes("close")
            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
            : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
        }`}>
          {feedback}
        </div>
      )}

      {/* AI Tools referral */}
      <div className="mt-8 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/20">
        <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
          🎨 {t.referralText || "Want to create your own images? Try our AI Image Generator — turn text into stunning visuals!"}
        </p>
        <a
          href="https://ai.toolboxonline.club/tools/ai-image-generator"
          className="mt-2 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          {t.tryAi || "Try AI Image Generator →"}
        </a>
      </div>
    </div>
    </ToolLayout>
  );
}
