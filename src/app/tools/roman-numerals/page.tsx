import type { Metadata } from "next";
import RomanNumeralsClient from "./RomanNumeralsClient";

export const metadata: Metadata = {
  title: "Roman Numeral Converter | ToolBoxOnline",
  description: "Convert between Roman numerals and Arabic numbers. Free online Roman numeral converter tool.",
  keywords: "roman numeral converter, roman numerals to numbers, convert to roman numerals, roman numeral translator, arabic to roman, roman numerals chart",
  alternates: { canonical: "/tools/roman-numerals" },
};

export default function RomanNumeralsPage() {
  return <RomanNumeralsClient />;
}
