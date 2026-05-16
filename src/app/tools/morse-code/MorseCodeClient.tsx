"use client";

import { useState, useCallback, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Free Morse Code Translator — Text to Morse & Morse to Text Converter",
  description: "Convert text to Morse code and decode Morse code back to text. Supports A-Z, 0-9, and common symbols. Includes audio playback of Morse code tones. Free, no signup.",
  keywords: [
    "morse code translator", "morse code converter", "text to morse",
    "morse to text", "morse code decoder", "morse code encoder",
    "morse code audio", "learn morse code", "free morse translator",
  ],
  toolId: "morse-code",
};

// Standard International Morse Code
const TEXT_TO_MORSE: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.",
  "!": "-.-.--", "/": "-..-.", "(": "-.--.", ")": "-.--.-",
  "&": ".-...", ":": "---...", ";": "-.-.-.", "=": "-...-",
  "+": ".-.-.", "-": "-....-", "_": "..--.-", "\"": ".-..-.",
  "@": ".--.-.", " ": "/",
};

// Reverse map
const MORSE_TO_TEXT: Record<string, string> = {};
for (const [char, code] of Object.entries(TEXT_TO_MORSE)) {
  if (char !== " ") MORSE_TO_TEXT[code] = char;
}

const DIT_MS = 80;
const DAH_MS = DIT_MS * 3;
const FREQ = 700;

function playTone(ctx: AudioContext, ms: number, startTime: number) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = FREQ;
  gain.gain.setValueAtTime(0.3, startTime);
  gain.gain.setValueAtTime(0, startTime + ms * 0.001);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + ms * 0.001 + 0.01);
}

export default function MorseCodeClient({
  locale = "en", dict, titleOverride, descriptionOverride,
}: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string; descriptionOverride?: string;
}) {
  const mc = (dict as any)?.morseCode || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const [copied, setCopied] = useState<"text" | "morse" | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timeoutIds = useRef<number[]>([]);

  const textToMorse = useCallback((input: string) => {
    return input
      .toUpperCase()
      .split("")
      .map((c) => TEXT_TO_MORSE[c] ?? c)
      .join(" ");
  }, []);

  const morseToText = useCallback((input: string) => {
    return input
      .trim()
      .split(/\s+/)
      .map((code) => {
        if (code === "/") return " ";
        return MORSE_TO_TEXT[code] ?? code;
      })
      .join("");
  }, []);

  const handleTextChange = (val: string) => {
    setText(val);
    setMorse(val ? textToMorse(val) : "");
  };

  const handleMorseChange = (val: string) => {
    // Allow only dots, dashes, spaces, slashes
    const cleaned = val.replace(/[^.\- /]/g, "");
    setMorse(cleaned);
    setText(cleaned ? morseToText(cleaned) : "");
  };

  const clearAll = () => { setText(""); setMorse(""); stopAudio(); };

  const copyText = (content: string, which: "text" | "morse") => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(which);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const stopAudio = () => {
    timeoutIds.current.forEach(clearTimeout);
    timeoutIds.current = [];
    setPlaying(false);
  };

  const playMorseAudio = () => {
    if (!morse.trim()) return;
    stopAudio();
    const ctx = audioCtxRef.current || new AudioContext();
    audioCtxRef.current = ctx;
    setPlaying(true);

    const chars = morse.trim().split("");
    let t = ctx.currentTime + 0.05; // slight delay

    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      if (c === ".") {
        timeoutIds.current.push(window.setTimeout(() => playTone(ctx, DIT_MS, ctx.currentTime), (t - ctx.currentTime) * 1000));
        t += DIT_MS / 1000 + DIT_MS / 1000; // dit + intra-char gap
      } else if (c === "-") {
        timeoutIds.current.push(window.setTimeout(() => playTone(ctx, DAH_MS, ctx.currentTime), (t - ctx.currentTime) * 1000));
        t += DAH_MS / 1000 + DIT_MS / 1000;
      } else if (c === " ") {
        t += DAH_MS / 1000; // letter gap (3 units - 1 already from intra = 2 extra)
      } else if (c === "/") {
        t += (DAH_MS * 2) / 1000; // word gap (7 units)
      }
    }

    timeoutIds.current.push(window.setTimeout(() => setPlaying(false), (t - ctx.currentTime) * 1000 + 200));
  };

  const isRtl = locale === "ar";

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      <div className="mx-auto max-w-2xl">
        {/* Text → Morse */}
        <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 dark:border-zinc-700 dark:bg-zinc-900">
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
              🔤 {mc.textInput || "Text"}
            </label>
            <div className="flex gap-2">
              <button onClick={() => copyText(text, "text")}
                className="rounded-lg border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800">
                {copied === "text" ? "✓ " + (tp.copied || "Copied!") : "📋 " + (mc.copy || "Copy")}
              </button>
              <button onClick={clearAll}
                className="rounded-lg border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800">
                🗑️ {mc.clear || "Clear"}
              </button>
            </div>
          </div>
          <textarea
            value={text}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={mc.textPlaceholder || "Type your message here... (A-Z, 0-9, punctuation)"}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-lg leading-relaxed text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 min-h-[100px] resize-y"
            dir="auto"
          />
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center gap-2 my-2">
          <span className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">⇅ {mc.bidirectional || "Bidirectional"}</span>
        </div>

        {/* Morse → Text */}
        <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 dark:border-zinc-700 dark:bg-zinc-900">
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
              📡 {mc.morseInput || "Morse Code"}
            </label>
            <div className="flex gap-2">
              {morse.trim() && (
                <button onClick={playMorseAudio} disabled={playing}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
                    playing
                      ? "border-green-300 bg-green-50 text-green-700 dark:border-green-700 dark:bg-green-950/30 dark:text-green-400"
                      : "border-zinc-300 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  }`}>
                  {playing ? "🔊 " + (mc.playing || "Playing...") : "🔈 " + (mc.play || "Play Audio")}
                </button>
              )}
              <button onClick={() => copyText(morse, "morse")}
                className="rounded-lg border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800">
                {copied === "morse" ? "✓ " + (tp.copied || "Copied!") : "📋 " + (mc.copy || "Copy")}
              </button>
            </div>
          </div>
          <textarea
            value={morse}
            onChange={(e) => handleMorseChange(e.target.value)}
            placeholder={mc.morsePlaceholder || "Or paste Morse code here... (use . and - with spaces between letters, / for new word)"}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-lg leading-relaxed font-mono tracking-wider text-zinc-900 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 min-h-[100px] resize-y"
            dir="ltr"
          />
        </div>

        {/* Reference table */}
        <details className="group rounded-2xl border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900">
          <summary className="cursor-pointer px-4 py-3 sm:px-6 text-sm font-semibold text-zinc-700 dark:text-zinc-200 select-none">
            📖 {mc.reference || "Morse Code Reference"}
          </summary>
          <div className="px-4 pb-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-1 text-sm">
            {Object.entries(TEXT_TO_MORSE).filter(([k]) => k !== " " && k !== "/").map(([char, code]) => (
              <div key={char} className="flex items-center gap-2 py-0.5">
                <span className="w-7 text-right font-bold text-amber-600 dark:text-amber-400">{char}</span>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{code}</span>
              </div>
            ))}
          </div>
        </details>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-zinc-400">
          🎮 {mc.disclaimer || "Standard International Morse Code. Audio playback uses Web Audio API — enable sound on your device. For entertainment and educational use."}
        </p>
      </div>
    </ToolLayout>
  );
}
