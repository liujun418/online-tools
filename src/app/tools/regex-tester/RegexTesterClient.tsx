"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Regex Tester & Converter",
  description:
    "Test regular expressions with real-time match highlighting. Replace, extract matches, generate code snippets for JS, Python, PHP, Java, Go, and more.",
  keywords: [
    "regex tester",
    "regular expression tester",
    "regex converter",
    "regex code generator",
    "regex replace",
    "regex match extractor",
    "test regex online",
    "regex debugger",
  ],
  toolId: "regex-tester",
};

const CODE_SNIPPETS: Record<string, (pattern: string, flags: string) => string> = {
  javascript: (pattern, flags) =>
    `const regex = /${pattern || "your_pattern"}/${flags || "g"};
const text = "your text here";
const matches = text.matchAll(regex);
for (const match of matches) {
  console.log(match[0], "at index", match.index);
}`,
  python: (pattern, _flags) =>
    `import re

pattern = r"${pattern || "your_pattern"}"
text = "your text here"

# Find all matches
matches = re.findall(pattern, text)
print(matches)

# Or iterate with match objects
for m in re.finditer(pattern, text):
    print(m.group(), "at index", m.start())`,
  php: (pattern, _flags) =>
    `$pattern = "/${pattern || "your_pattern"}/";
$text = "your text here";

// Find all matches
preg_match_all($pattern, $text, $matches);
print_r($matches[0]);`,
  java: (pattern, _flags) =>
    `import java.util.regex.*;

Pattern pattern = Pattern.compile("${pattern || "your_pattern"}");
Matcher matcher = pattern.matcher("your text here");

while (matcher.find()) {
    System.out.println("Found: " + matcher.group());
}`,
  go: (pattern, _flags) =>
    `package main

import (
	"fmt"
	"regexp"
)

func main() {
	re := regexp.MustCompile(\`${pattern || "your_pattern"}\`)
	text := "your text here"
	matches := re.FindAllString(text, -1)
	fmt.Println(matches)
}`,
  rust: (pattern, _flags) =>
    `use regex::Regex;

fn main() {
    let re = Regex::new(r"${pattern || "your_pattern"}").unwrap();
    let text = "your text here";

    for cap in re.find_iter(text) {
        println!("Found: {}", cap.as_str());
    }
}`,
  csharp: (pattern, _flags) =>
    `using System;
using System.Text.RegularExpressions;

var pattern = @"${pattern || "your_pattern"}";
var text = "your text here";

foreach (Match match in Regex.Matches(text, pattern))
{
    Console.WriteLine($"Found: {match.Value} at {match.Index}");
}`,
  ruby: (pattern, _flags) =>
    `pattern = /${pattern || "your_pattern"}/
text = "your text here"

text.scan(pattern) do |match|
  puts match
end`,
  swift: (pattern, _flags) =>
    `import Foundation

let pattern = "${pattern || "your_pattern"}"
let text = "your text here"

if let regex = try? NSRegularExpression(pattern: pattern) {
    let matches = regex.matches(in: text, range: NSRange(text.startIndex..., in: text))
    for match in matches {
        print(text[Range(match.range, in: text)!])
    }
}`,
  typescript: (pattern, flags) =>
    `const regex = new RegExp("${pattern || "your_pattern"}", "${flags || "g"}");
const text = "your text here";
const matches = [...text.matchAll(regex)];
console.log(matches);`,
};

type TabKey = "test" | "replace" | "extract" | "code";

export default function RegexTesterClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [activeTab, setActiveTab] = useState<TabKey>("test");
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("gi");
  const [text, setText] = useState("");
  const [replacePattern, setReplacePattern] = useState("");
  const [codeLang, setCodeLang] = useState("javascript");
  const [exportFormat, setExportFormat] = useState<"json" | "csv" | "plain">("json");

  const { matches, error, replacedText } = useMemo(() => {
    if (!pattern) return { matches: [] as { match: string; index: number; groups: string[] }[], error: null, replacedText: "" };
    try {
      const regex = new RegExp(pattern, flags);
      const results: { match: string; index: number; groups: string[] }[] = [];
      let match;
      let i = 0;
      while ((match = regex.exec(text)) !== null && i < 5000) {
        results.push({ match: match[0], index: match.index, groups: match.slice(1) });
        if (!regex.global) break;
        i++;
      }
      let rep = "";
      if (activeTab === "replace") {
        try {
          rep = text.replace(new RegExp(pattern, flags), replacePattern);
        } catch {}
      }
      return { matches: results, error: null, replacedText: rep };
    } catch (e) {
      return { matches: [], error: (e as Error).message, replacedText: "" };
    }
  }, [pattern, flags, text, replacePattern, activeTab]);

  const exportedText = useMemo(() => {
    if (matches.length === 0) return "";
    if (exportFormat === "json") {
      return JSON.stringify(matches.map((m) => ({ match: m.match, index: m.index })), null, 2);
    }
    if (exportFormat === "csv") {
      return "match,index\n" + matches.map((m) => `"${m.match.replace(/"/g, '""')}",${m.index}`).join("\n");
    }
    return matches.map((m) => m.match).join("\n");
  }, [matches, exportFormat]);

  const codeSnippet = useMemo(() => {
    const fn = CODE_SNIPPETS[codeLang];
    return fn ? fn(pattern, flags) : "";
  }, [codeLang, pattern, flags]);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "test", label: "Test" },
    { key: "replace", label: "Replace" },
    { key: "extract", label: "Extract" },
    { key: "code", label: "Code" },
  ];

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content).catch(() => {});
  };

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      {/* Pattern & flags input */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-1 items-center gap-1">
          <span className="text-zinc-400">/</span>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Enter regex pattern..."
            className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
          />
          <span className="text-zinc-400">/</span>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="flags"
            className="w-16 rounded-lg border border-zinc-300 bg-white px-2 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      {/* Error display */}
      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Tabs */}
      <div className="mt-4 flex gap-1 border-b border-zinc-200 dark:border-zinc-700">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "border-b-2 border-amber-500 text-amber-600 dark:text-amber-400"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab: Test */}
      {activeTab === "test" && (
        <div className="mt-4">
          {matches.length > 0 && (
            <div className="mb-3">
              <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                {matches.length} match{matches.length !== 1 ? "es" : ""} found
              </p>
              <div className="flex flex-wrap gap-1.5">
                {matches.slice(0, 100).map((m, i) => (
                  <span
                    key={i}
                    className="rounded bg-blue-100 px-2 py-1 font-mono text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {m.match}
                    <span className="ml-1 text-[10px] opacity-60">#{m.index}</span>
                  </span>
                ))}
                {matches.length > 100 && (
                  <span className="rounded bg-zinc-100 px-2 py-1 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    +{matches.length - 100} more
                  </span>
                )}
              </div>
            </div>
          )}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to test against..."
            className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
            rows={14}
          />
        </div>
      )}

      {/* Tab: Replace */}
      {activeTab === "replace" && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Replacement pattern
            </label>
            <input
              type="text"
              value={replacePattern}
              onChange={(e) => setReplacePattern(e.target.value)}
              placeholder="$1, $2, $&, etc."
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Original text
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
                className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
                rows={10}
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Result
                </label>
                {replacedText && (
                  <button
                    onClick={() => copyToClipboard(replacedText)}
                    className="text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400"
                  >
                    Copy
                  </button>
                )}
              </div>
              <textarea
                readOnly
                value={replacedText}
                placeholder="Result will appear here..."
                className="w-full rounded-lg border border-zinc-300 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
                rows={10}
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab: Extract */}
      {activeTab === "extract" && (
        <div className="mt-4 space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to extract matches from..."
            className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:placeholder:text-zinc-600"
            rows={6}
          />

          {matches.length > 0 && (
            <>
              {/* Export format selector */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-zinc-600 dark:text-zinc-400">Export as:</span>
                {(["json", "csv", "plain"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setExportFormat(fmt)}
                    className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                      exportFormat === fmt
                        ? "bg-amber-500 text-white"
                        : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {fmt.toUpperCase()}
                  </button>
                ))}
                <button
                  onClick={() => copyToClipboard(exportedText)}
                  className="ml-auto text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400"
                >
                  Copy to clipboard
                </button>
              </div>

              {/* Export output */}
              <pre className="max-h-64 overflow-auto rounded-lg bg-zinc-900 p-4 font-mono text-xs text-zinc-100">
                {exportedText}
              </pre>
            </>
          )}
        </div>
      )}

      {/* Tab: Code Generation */}
      {activeTab === "code" && (
        <div className="mt-4 space-y-4">
          {/* Language selector */}
          <div className="flex flex-wrap gap-2">
            {Object.keys(CODE_SNIPPETS).map((lang) => (
              <button
                key={lang}
                onClick={() => setCodeLang(lang)}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors capitalize ${
                  codeLang === lang
                    ? "bg-amber-500 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {pattern ? (
            <div className="relative">
              <button
                onClick={() => copyToClipboard(codeSnippet)}
                className="absolute right-3 top-3 text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400"
              >
                Copy
              </button>
              <pre className="max-h-64 overflow-auto rounded-lg bg-zinc-900 p-4 font-mono text-xs text-zinc-100">
                {codeSnippet}
              </pre>
            </div>
          ) : (
            <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              Enter a regex pattern above to generate code snippets
            </p>
          )}
        </div>
      )}
    </ToolLayout>
  );
}
