import type { Metadata } from "next";
import CaseConverterClient from "./CaseConverterClient";

export const metadata: Metadata = {
  title: "Case Converter | ToolBoxOnline",
  description: "Convert text to uppercase, lowercase, title case, or sentence case instantly. Free online case converter tool.",
  keywords: "case converter, uppercase converter, lowercase converter, title case converter, sentence case, text case changer, convert case online",
  alternates: { canonical: "/tools/case-converter" },
};

export default function CaseConverterPage() {
  return <CaseConverterClient />;
}
