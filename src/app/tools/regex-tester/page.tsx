import type { Metadata } from "next";
import RegexTesterClient from "./RegexTesterClient";

export const metadata: Metadata = {
  title: "Regex Tester & Converter - Test, Replace, Extract & Generate Code | ToolBoxOnline",
  description: "Test and debug regular expressions with real-time highlighting. Replace text with regex, extract matches as JSON/CSV, and generate code snippets for JavaScript, Python, PHP, Java, Go, Rust, C#, Ruby, Swift, and TypeScript.",
  keywords: "regex tester, regular expression tester, regex converter, regex code generator, regex replace, regex match extractor, test regex online, regex debugger, regex to code",
  alternates: { canonical: "/tools/regex-tester" },
};

export default function RegexTesterPage() {
  return <RegexTesterClient />;
}
