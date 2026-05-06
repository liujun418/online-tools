"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { answers } from "@/lib/answers";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Book of Answers",
  description:
    "A digital Book of Answers for fun decision-making and psychological guidance. Focus on your question and receive a random, thoughtfully curated response.",
  keywords: [
    "book of answers",
    "random answer generator",
    "decision maker",
    "oracle",
    "guidance tool",
    "fortune teller",
  ],
  toolId: "book-of-answers",
};

function playFlipSound() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch {}
}

export default function BookOfAnswersClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const getRandomAnswer = useCallback(() => {
    const idx = Math.floor(Math.random() * answers.length);
    return answers[idx];
  }, []);

  const handleReveal = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const ans = getRandomAnswer();
    setSelectedAnswer(ans);
    setDisplayText("");
    setIsTyping(true);
    playFlipSound();

    setIsFlipped(true);

    setTimeout(() => {
      setIsTyping(false);
    }, 800 + ans.length * 65);
  }, [getRandomAnswer]);

  useEffect(() => {
    if (!isFlipped || !selectedAnswer) return;

    timerRef.current = setTimeout(() => {
      let idx = 0;

      const typeNext = () => {
        if (idx < selectedAnswer.length) {
          setDisplayText(selectedAnswer.slice(0, idx + 1));
          idx++;
          timerRef.current = setTimeout(typeNext, 50 + Math.random() * 30);
        }
      };

      typeNext();
    }, 800);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isFlipped, selectedAnswer]);

  const handleAskAgain = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsFlipped(false);
    setSelectedAnswer("");
    setDisplayText("");
    setIsTyping(false);
  }, []);

  const isTypingComplete = displayText === selectedAnswer && selectedAnswer.length > 0;

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        Close your eyes, think of your question for 3–5 seconds, then open the book to receive your answer.
      </p>

      <div className="flex min-h-[40vh] flex-col items-center justify-center px-4 py-12">
        {/* Book container */}
        <div className="relative w-full max-w-md" style={{ perspective: "1200px" }}>
          {/* Book */}
          <div
            style={{
              width: "280px",
              height: "380px",
              margin: "0 auto",
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: !isFlipped ? "pointer" : "default",
            }}
            onClick={!isFlipped ? handleReveal : undefined}
          >
            {/* Front cover */}
            <div
              className="absolute inset-0 rounded-xl shadow-2xl"
              style={{
                backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 overflow-hidden rounded-xl"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
                  animation: !isFlipped ? "ba-shimmer 3s infinite" : "none",
                }}
              />
              {/* Title */}
              <div className="relative z-10 text-center">
                <div className="mb-4 text-6xl">📖</div>
                <h2 className="text-2xl font-bold tracking-wide text-amber-100">
                  Book of Answers
                </h2>
                <p className="mt-3 text-sm text-zinc-400">
                  Focus on your question, click to reveal your answer
                </p>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-3 rounded-lg border border-amber-900/30" />
            </div>

            {/* Back (answer side) */}
            <div
              className="absolute inset-0 rounded-xl shadow-2xl"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "linear-gradient(135deg, #fefce8 0%, #fef9c3 50%, #fef08a 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              {isFlipped && (
                <div className="relative z-10 text-center px-4">
                  <p
                    className="text-xl font-semibold leading-relaxed text-zinc-800"
                    style={{
                      animation: isTypingComplete ? "ba-breathe 3s ease-in-out infinite" : "none",
                    }}
                  >
                    {displayText}
                    {displayText.length < selectedAnswer.length && (
                      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-zinc-800" />
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Glow effect */}
          {isTypingComplete && (
            <div
              className="pointer-events-none absolute inset-0 rounded-xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(251,191,36,0.15) 0%, transparent 70%)",
                animation: "ba-glow 2s ease-in-out infinite",
              }}
            />
          )}
        </div>

        {/* Buttons */}
        {!isFlipped && (
          <button
            onClick={handleReveal}
            className="mt-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Reveal Answer
          </button>
        )}

        {isTypingComplete && (
          <button
            onClick={handleAskAgain}
            className="mt-8 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-800 px-8 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 dark:from-zinc-600 dark:to-zinc-700"
          >
            Ask Again
          </button>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes ba-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes ba-breathe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.02); }
        }
        @keyframes ba-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </ToolLayout>
  );
}
