"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

type Lang = "json" | "javascript" | "css" | "html";

function formatJson(code: string): string {
  const obj = JSON.parse(code);
  return JSON.stringify(obj, null, 2);
}

function beautifyCss(code: string): string {
  return code
    .replace(/\s*{\s*/g, " {\n  ")
    .replace(/\s*}\s*/g, "\n}\n")
    .replace(/;\s*/g, ";\n  ")
    .replace(/,\s*/g, ", ")
    .replace(/\n\s*\n/g, "\n")
    .replace(/\n\s*\n}/g, "\n}")
    .trim();
}

function formatHtml(code: string): string {
  let indent = 0;
  const indentStr = "  ";
  return code
    .replace(/>\s*</g, "><") // collapse whitespace between tags
    .replace(/<(\w+)([^>]*)>/g, (match, tag, attrs) => {
      const selfClosing = match.endsWith("/>");
      const closing = /^<br|<hr|<img|<input|<meta|<link|<area|<base|<col|<embed|<source|<track|<wbr/i.test(match);
      if (closing || selfClosing) return match;
      return `\n${indentStr.repeat(indent)}<${tag}${attrs}>${indent++,""}`;
    })
    .replace(/<\/\w+>/g, (match) => {
      indent = Math.max(0, indent - 1);
      return `\n${indentStr.repeat(indent)}${match}`;
    })
    .replace(/^\n/, "")
    .trim();
}

function formatJs(code: string): string {
  let indent = 0;
  const indentStr = "  ";
  const lines = code
    .replace(/\s*{\s*/g, " {")
    .replace(/\s*}\s*/g, "}")
    .replace(/;\s*/g, ";")
    .split(/([{};])/)
    .filter(Boolean);

  const result: string[] = [];
  for (const part of lines) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    if (trimmed === "}") indent = Math.max(0, indent - 1);
    if (trimmed === "{" || trimmed === "}") {
      if (trimmed === "}") {
        result.push(`${indentStr.repeat(indent)}${trimmed}`);
      } else {
        result.push(` ${trimmed}`);
        indent++;
      }
    } else {
      result.push(`${indentStr.repeat(indent)}${trimmed}`);
    }
  }
  return result.join("\n").trim();
}

export default function CodeFormatterClient({
  locale = "en",
  dict,
  titleOverride,
  descriptionOverride,
}: {
  locale?: string;
  dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const cf = (dict as any)?.codeFormatter || {};

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState<Lang>("json");
  const [error, setError] = useState<string | null>(null);

  const handleFormat = () => {
    setError(null);
    if (!input.trim()) return;

    try {
      let result = "";
      switch (lang) {
        case "json":
          result = formatJson(input);
          break;
        case "css":
          result = beautifyCss(input);
          break;
        case "html":
          result = formatHtml(input);
          break;
        case "javascript":
          result = formatJs(input);
          break;
      }
      setOutput(result);
    } catch (e: any) {
      setError(e.message || "Formatting error");
      setOutput("");
    }
  };

  const languages: { key: Lang; label: string }[] = [
    { key: "json", label: cf.json || "JSON" },
    { key: "javascript", label: cf.javascript || "JavaScript" },
    { key: "css", label: cf.css || "CSS" },
    { key: "html", label: cf.html || "HTML" },
  ];

  const metadata = {
    title: "Code Formatter — Beautify JSON, JS, CSS, HTML",
    description: "Format and beautify JSON, JavaScript, CSS, and HTML code. Make minified code readable with one click.",
    keywords: ["code formatter", "json formatter", "javascript formatter", "css beautifier", "html formatter", "format code online"],
    toolId: "code-formatter",
  };

  return (
    <ToolLayout
      title={titleOverride || metadata.title}
      description={descriptionOverride || metadata.description}
      keywords={metadata.keywords}
      toolId={metadata.toolId}
      locale={locale as any}
      dict={dict}
    >
      <div className="space-y-4">
        {/* Language Tabs */}
        <div className="flex flex-wrap gap-2">
          {languages.map((l) => (
            <button
              key={l.key}
              onClick={() => { setLang(l.key); setOutput(""); setError(null); }}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                lang === l.key
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={cf.placeholder || "Paste your code here..."}
          rows={12}
          className="w-full rounded-lg border border-zinc-300 bg-white p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />

        {/* Format Button */}
        <button
          onClick={handleFormat}
          disabled={!input.trim()}
          className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {cf.format || "Format"}
        </button>

        {/* Error */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
            {cf.invalid || "Invalid code"}: {error}
          </div>
        )}

        {/* Output */}
        {output && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {cf.result || "Result"}
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(output)}
                className="rounded bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                {cf.copy || "Copy"}
              </button>
            </div>
            <textarea
              readOnly
              value={output}
              rows={12}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
