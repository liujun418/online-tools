"use client";

import { useState, useCallback, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Free Online Translator — Translate Text Between 100+ Languages",
  description: "Instantly translate text between 100+ languages. Auto-detect source language, one-click copy results. Powered by Google Translate. Free, no signup, unlimited use.",
  keywords: [
    "free translator", "online translator", "language translator", "translate text",
    "google translate alternative", "free translation tool", "multi language translator",
    "text translator online", "instant translation", "100 languages translator",
  ],
  toolId: "translate",
};

const LANGUAGES: { code: string; name: string }[] = [
  { code: "auto", name: "Detect Language" },
  { code: "af", name: "Afrikaans" },
  { code: "sq", name: "Albanian" },
  { code: "am", name: "Amharic" },
  { code: "ar", name: "Arabic" },
  { code: "hy", name: "Armenian" },
  { code: "az", name: "Azerbaijani" },
  { code: "eu", name: "Basque" },
  { code: "be", name: "Belarusian" },
  { code: "bn", name: "Bengali" },
  { code: "bs", name: "Bosnian" },
  { code: "bg", name: "Bulgarian" },
  { code: "ca", name: "Catalan" },
  { code: "ceb", name: "Cebuano" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "zh-TW", name: "Chinese (Traditional)" },
  { code: "co", name: "Corsican" },
  { code: "hr", name: "Croatian" },
  { code: "cs", name: "Czech" },
  { code: "da", name: "Danish" },
  { code: "nl", name: "Dutch" },
  { code: "en", name: "English" },
  { code: "eo", name: "Esperanto" },
  { code: "et", name: "Estonian" },
  { code: "fi", name: "Finnish" },
  { code: "fr", name: "French" },
  { code: "fy", name: "Frisian" },
  { code: "gl", name: "Galician" },
  { code: "ka", name: "Georgian" },
  { code: "de", name: "German" },
  { code: "el", name: "Greek" },
  { code: "gu", name: "Gujarati" },
  { code: "ht", name: "Haitian Creole" },
  { code: "ha", name: "Hausa" },
  { code: "haw", name: "Hawaiian" },
  { code: "he", name: "Hebrew" },
  { code: "hi", name: "Hindi" },
  { code: "hmn", name: "Hmong" },
  { code: "hu", name: "Hungarian" },
  { code: "is", name: "Icelandic" },
  { code: "ig", name: "Igbo" },
  { code: "id", name: "Indonesian" },
  { code: "ga", name: "Irish" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "jv", name: "Javanese" },
  { code: "kn", name: "Kannada" },
  { code: "kk", name: "Kazakh" },
  { code: "km", name: "Khmer" },
  { code: "rw", name: "Kinyarwanda" },
  { code: "ko", name: "Korean" },
  { code: "ku", name: "Kurdish" },
  { code: "ky", name: "Kyrgyz" },
  { code: "lo", name: "Lao" },
  { code: "la", name: "Latin" },
  { code: "lv", name: "Latvian" },
  { code: "lt", name: "Lithuanian" },
  { code: "lb", name: "Luxembourgish" },
  { code: "mk", name: "Macedonian" },
  { code: "mg", name: "Malagasy" },
  { code: "ms", name: "Malay" },
  { code: "ml", name: "Malayalam" },
  { code: "mt", name: "Maltese" },
  { code: "mi", name: "Maori" },
  { code: "mr", name: "Marathi" },
  { code: "mn", name: "Mongolian" },
  { code: "my", name: "Myanmar (Burmese)" },
  { code: "ne", name: "Nepali" },
  { code: "no", name: "Norwegian" },
  { code: "ny", name: "Nyanja (Chichewa)" },
  { code: "or", name: "Odia (Oriya)" },
  { code: "ps", name: "Pashto" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "pt", name: "Portuguese" },
  { code: "pa", name: "Punjabi" },
  { code: "ro", name: "Romanian" },
  { code: "ru", name: "Russian" },
  { code: "sm", name: "Samoan" },
  { code: "gd", name: "Scots Gaelic" },
  { code: "sr", name: "Serbian" },
  { code: "st", name: "Sesotho" },
  { code: "sn", name: "Shona" },
  { code: "sd", name: "Sindhi" },
  { code: "si", name: "Sinhala (Sinhalese)" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "so", name: "Somali" },
  { code: "es", name: "Spanish" },
  { code: "su", name: "Sundanese" },
  { code: "sw", name: "Swahili" },
  { code: "sv", name: "Swedish" },
  { code: "tl", name: "Tagalog (Filipino)" },
  { code: "tg", name: "Tajik" },
  { code: "ta", name: "Tamil" },
  { code: "tt", name: "Tatar" },
  { code: "te", name: "Telugu" },
  { code: "th", name: "Thai" },
  { code: "tr", name: "Turkish" },
  { code: "tk", name: "Turkmen" },
  { code: "uk", name: "Ukrainian" },
  { code: "ur", name: "Urdu" },
  { code: "ug", name: "Uyghur" },
  { code: "uz", name: "Uzbek" },
  { code: "vi", name: "Vietnamese" },
  { code: "cy", name: "Welsh" },
  { code: "xh", name: "Xhosa" },
  { code: "yi", name: "Yiddish" },
  { code: "yo", name: "Yoruba" },
  { code: "zu", name: "Zulu" },
];

const TRANSLATE_API = "https://translate.googleapis.com/translate_a/single";

export default function TranslateClient({
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
  const tr = (dict as any)?.translate || {};
  const tp = (dict as any)?.toolPage || {};
  const title = titleOverride || metadata.title;
  const description = descriptionOverride || metadata.description;

  const [sourceText, setSourceText] = useState("");
  const [resultText, setResultText] = useState("");
  const [sourceLang, setSourceLang] = useState("auto");
  const [targetLang, setTargetLang] = useState("es");
  const [translating, setTranslating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [detectedLang, setDetectedLang] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const translate = useCallback(async (text: string, sl: string, tl: string) => {
    if (!text.trim()) {
      setResultText("");
      setError("");
      return;
    }
    setTranslating(true);
    setError("");
    try {
      const params = new URLSearchParams({ client: "gtx", sl, tl, dt: "t", q: text });
      const res = await fetch(`${TRANSLATE_API}?${params}`);
      if (!res.ok) throw new Error("Translation failed");
      const data = await res.json();
      // Parse Google Translate response format: [[["translated", "source", ...]], ...]
      const translated = data[0]?.map((segment: [string]) => segment[0]).join("") || "";
      const detected = data[2] || sl;
      setResultText(translated);
      if (sl === "auto" && detected) {
        const lang = LANGUAGES.find((l) => l.code === detected);
        setDetectedLang(lang ? `${lang.name} (${detected})` : detected);
      } else {
        setDetectedLang("");
      }
    } catch {
      setError(tr.error || "Translation failed. Please try again.");
    } finally {
      setTranslating(false);
    }
  }, [tr]);

  const handleSourceChange = (val: string) => {
    setSourceText(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!val.trim()) {
      setResultText("");
      setError("");
      return;
    }
    debounceRef.current = setTimeout(() => translate(val, sourceLang, targetLang), 600);
  };

  const handleLangChange = (type: "source" | "target", val: string) => {
    if (type === "source") {
      setSourceLang(val);
      if (sourceText.trim()) translate(sourceText, val, targetLang);
    } else {
      setTargetLang(val);
      if (sourceText.trim()) translate(sourceText, sourceLang, val);
    }
  };

  const swapLanguages = () => {
    if (sourceLang === "auto") return;
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(resultText);
    setResultText(sourceText);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(resultText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const clearAll = () => {
    setSourceText("");
    setResultText("");
    setError("");
    setDetectedLang("");
  };

  const langOptions = LANGUAGES.filter((l) => l.code !== "auto");

  return (
    <ToolLayout title={title} description={description} keywords={metadata.keywords} toolId={metadata.toolId} locale={locale as any} dict={dict}>
      <div className="mx-auto max-w-3xl">
        {/* Language selectors */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {tr.sourceLanguage || "Source Language"}
            </label>
            <select
              value={sourceLang}
              onChange={(e) => handleLangChange("source", e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>{l.name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={swapLanguages}
            disabled={sourceLang === "auto"}
            className="shrink-0 self-end rounded-lg border border-zinc-300 p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 disabled:opacity-30 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
            title={tr.swap || "Swap languages"}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>

          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {tr.targetLanguage || "Target Language"}
            </label>
            <select
              value={targetLang}
              onChange={(e) => handleLangChange("target", e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            >
              {langOptions.map((l) => (
                <option key={l.code} value={l.code}>{l.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Translation boxes */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Source text */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                {tr.input || "Input"}
              </span>
              <button
                onClick={clearAll}
                className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-400 hover:text-red-500 dark:text-zinc-500 dark:hover:text-red-400"
              >
                {tr.clear || "Clear"}
              </button>
            </div>
            <textarea
              value={sourceText}
              onChange={(e) => handleSourceChange(e.target.value)}
              placeholder={tr.inputPlaceholder || "Type or paste text to translate..."}
              className="w-full resize-y rounded-xl border-0 bg-transparent text-base leading-relaxed text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-zinc-100 dark:placeholder:text-zinc-500 min-h-[180px]"
              dir="auto"
            />
          </div>

          {/* Target text */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                {tr.output || "Translation"}
              </span>
              <div className="flex items-center gap-2">
                {detectedLang && (
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">{detectedLang}</span>
                )}
                {resultText && (
                  <button
                    onClick={copyResult}
                    className="rounded-lg border border-zinc-300 px-2.5 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  >
                    {copied ? "✓ " + (tp.copied || "Copied!") : "📋 " + (tr.copy || "Copy")}
                  </button>
                )}
              </div>
            </div>
            <div className="min-h-[180px]">
              {translating ? (
                <p className="animate-pulse text-base text-zinc-400 dark:text-zinc-500">
                  {tr.translating || "Translating..."}
                </p>
              ) : error ? (
                <p className="text-base text-red-500">{error}</p>
              ) : resultText ? (
                <p className="text-base leading-relaxed text-zinc-900 dark:text-zinc-100" dir="auto">
                  {resultText}
                </p>
              ) : (
                <p className="text-base text-zinc-400 dark:text-zinc-500">
                  {tr.outputPlaceholder || "Translation will appear here..."}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Character count */}
        <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
          <span>{sourceText.length} / 5000 {tr.characters || "characters"}</span>
          {sourceLang === "auto" && sourceText.trim() && (
            <span>{tr.autoDetect || "Auto-detecting source language"}</span>
          )}
        </div>

        {/* Attribution */}
        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">
            {tr.poweredBy || "Powered by Google Translate — This tool uses Google's free translation service for personal, non-commercial use only."}
            {" "}{tr.attribution || "Google Translate is a trademark of Google LLC. This site is not affiliated with or endorsed by Google."}
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-center text-xs text-zinc-400">
          ⚠️ {tr.disclaimer || "Machine translation is for reference only. Accuracy is not guaranteed. Do not use for critical legal, medical, or financial documents. Not for commercial use."}
        </p>
      </div>
    </ToolLayout>
  );
}
