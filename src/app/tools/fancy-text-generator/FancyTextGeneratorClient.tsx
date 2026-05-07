"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Fancy Text Generator",
  description:
    "Convert text to fancy Unicode styles for social media bios and posts.",
  keywords: [
    "fancy text generator",
    "unicode text generator",
    "cool text generator",
    "stylish text generator",
    "font generator for instagram",
    "bold text generator",
  ],
};

type StyleFn = (text: string) => string;

const styles: { name: string; fn: StyleFn }[] = [
  {
    name: "Bold",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d400 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d41a + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Italic",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d434 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d44e + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Bold Italic",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d468 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d482 + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Script (Cursive)",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d49c + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d4b6 + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Bold Script",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d4d0 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d4ea + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Double-Struck",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d538 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d552 + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Fraktur",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d504 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d51e + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Bold Fraktur",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d56c + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d586 + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Monospace",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d670 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d68a + code - 97);
          if (code >= 48 && code <= 57) return String.fromCodePoint(0x1d7f6 + code - 48);
          return c;
        })
        .join(""),
  },
  {
    name: "Sans-Serif",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d5a0 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d5ba + code - 97);
          if (code >= 48 && code <= 57) return String.fromCodePoint(0x1d7ec + code - 48);
          return c;
        })
        .join(""),
  },
  {
    name: "Sans-Serif Bold",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d5d4 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d5ee + code - 97);
          if (code >= 48 && code <= 57) return String.fromCodePoint(0x1d7f0 + code - 48);
          return c;
        })
        .join(""),
  },
  {
    name: "Circled",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x24b6 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x24d0 + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Squared",
    fn: (text) =>
      [...text]
        .map((c) => {
          const code = c.codePointAt(0) || 0;
          if (code >= 65 && code <= 90) return String.fromCodePoint(0x1f130 + code - 65);
          if (code >= 97 && code <= 122) return String.fromCodePoint(0x1f130 + code - 97);
          return c;
        })
        .join(""),
  },
  {
    name: "Upside Down",
    fn: (text) => {
      const flipMap: Record<string, string> = {
        a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
        i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d",
        q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
        y: "ʎ", z: "z",
        A: "∀", B: "q", C: "Ɔ", D: "p", E: "Ǝ", F: "Ⅎ", G: "פ", H: "H",
        I: "I", J: "ſ", K: "ʞ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ",
        Q: "Q", R: "ɹ", S: "S", T: "┴", U: "∩", V: "Λ", W: "M", X: "X",
        Y: "⅄", Z: "Z",
        "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9",
        "7": "ㄥ", "8": "8", "9": "6", "0": "0",
        ".": "˙", ",": "'", "'": ",", '"': "„", "!": "¡", "?": "¿",
        "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{",
        "<": ">", ">": "<", "&": "⅋", "_": "‾",
      };
      return [...text].reverse().map((c) => flipMap[c] || c).join("");
    },
  },
  {
    name: "Strikethrough",
    fn: (text) => [...text].map((c) => c + "̶").join(""),
  },
  {
    name: "Underline",
    fn: (text) => [...text].map((c) => c + "̲").join(""),
  },
];

export default function FancyTextGeneratorClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [text, setText] = useState("Hello World");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const ft = (dict as any)?.fancyTextGenerator || {};

  const styleNames: (keyof typeof ft)[] = [
    "style_bold", "style_italic", "style_boldItalic", "style_script",
    "style_boldScript", "style_doubleStruck", "style_fraktur", "style_boldFraktur",
    "style_monospace", "style_sansSerif", "style_sansSerifBold", "style_circled",
    "style_squared", "style_upsideDown", "style_strikethrough", "style_underline",
  ];

  const styleNamesFallback = [
    "Bold", "Italic", "Bold Italic", "Script (Cursive)",
    "Bold Script", "Double-Struck", "Fraktur", "Bold Fraktur",
    "Monospace", "Sans-Serif", "Sans-Serif Bold", "Circled",
    "Squared", "Upside Down", "Strikethrough", "Underline",
  ];

  const results = useMemo(() => {
    if (!text) return [];
    return styles.map((s) => ({ name: s.name, result: s.fn(text) }));
  }, [text]);

  function handleCopy(result: string, index: number) {
    navigator.clipboard.writeText(result);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  }

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {ft.enterText || "Enter Your Text"}
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={ft.placeholder || "Type something..."}
          rows={3}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>

      {results.length > 0 && (
        <div className="mt-4 space-y-2">
          {results.map((r, i) => (
            <div
              key={r.name}
              className="flex items-center justify-between gap-4 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="min-w-0 flex-1">
                <div className="text-xs text-zinc-400 dark:text-zinc-500">{ft[styleNames[i]] || styleNamesFallback[i]}</div>
                <div className="break-all text-lg text-zinc-900 dark:text-white">{r.result}</div>
              </div>
              <button
                onClick={() => handleCopy(r.result, i)}
                className={`shrink-0 rounded px-3 py-1 text-xs font-medium transition-colors ${
                  copiedIndex === i
                    ? "bg-green-500 text-white"
                    : "bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                }`}
              >
                {copiedIndex === i ? (ft.copied || "Copied!") : (ft.copy || "Copy")}
              </button>
            </div>
          ))}
        </div>
      )}
    </ToolLayout>
  );
}
