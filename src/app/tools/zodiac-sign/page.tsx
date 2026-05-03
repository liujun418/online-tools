import type { Metadata } from "next";
import ZodiacSignClient from "./ZodiacSignClient";

export const metadata: Metadata = {
  title: "Zodiac Sign Finder | ToolBoxOnline",
  description: "Find your zodiac sign by birth date. Free horoscope sign lookup with personality traits, element, and compatibility info.",
  keywords: "zodiac sign finder, what is my zodiac sign, zodiac sign by date, horoscope sign, astrology sign, star sign calculator",
  alternates: { canonical: "/tools/zodiac-sign" },
};

export default function ZodiacSignPage() {
  return <ZodiacSignClient />;
}
