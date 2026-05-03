import type { Metadata } from "next";
import RegexTesterClient from "./RegexTesterClient";

export const metadata: Metadata = {
  title: "Regex Tester | ToolBoxOnline",
  description: "Test and debug regular expressions with real-time match highlighting. Free online regex tester.",
  keywords: "regex tester, regular expression tester, regex tester online, test regex online, regex debugger, regular expression tester online, match pattern online",
  alternates: { canonical: "/tools/regex-tester" },
};

export default function RegexTesterPage() {
  return <RegexTesterClient />;
}
