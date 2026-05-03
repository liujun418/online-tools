"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Zodiac Sign Finder",
  description:
    "Find your zodiac sign by birth date with traits and compatibility.",
  keywords: [
    "zodiac sign finder",
    "what is my zodiac sign",
    "zodiac sign by date",
    "horoscope sign",
    "astrology sign",
  ],
};

const zodiacSigns = [
  {
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    quality: "Cardinal",
    ruler: "Saturn",
    dates: "Dec 22 - Jan 19",
    traits: "Ambitious, disciplined, patient, and responsible. Capricorns are natural leaders who value hard work and tradition.",
    strengths: "Disciplined, persistent, responsible, loyal",
    weaknesses: "Stubborn, pessimistic, overly serious",
    compatible: "Taurus, Virgo, Scorpio, Pisces",
  },
  {
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    quality: "Fixed",
    ruler: "Uranus",
    dates: "Jan 20 - Feb 18",
    traits: "Progressive, independent, and humanitarian. Aquarians are visionaries who value freedom and innovation.",
    strengths: "Creative, original, independent, humanitarian",
    weaknesses: "Detached, stubborn, unpredictable",
    compatible: "Gemini, Libra, Sagittarius, Aries",
  },
  {
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    quality: "Mutable",
    ruler: "Neptune",
    dates: "Feb 19 - Mar 20",
    traits: "Compassionate, artistic, and intuitive. Pisces are dreamers with deep empathy and creativity.",
    strengths: "Compassionate, artistic, intuitive, gentle",
    weaknesses: "Overly trusting, escapist, overly sensitive",
    compatible: "Cancer, Scorpio, Taurus, Capricorn",
  },
  {
    name: "Aries",
    symbol: "♈",
    element: "Fire",
    quality: "Cardinal",
    ruler: "Mars",
    dates: "Mar 21 - Apr 19",
    traits: "Bold, energetic, and adventurous. Aries are pioneers who lead with courage and enthusiasm.",
    strengths: "Courageous, energetic, confident, passionate",
    weaknesses: "Impulsive, impatient, short-tempered",
    compatible: "Leo, Sagittarius, Gemini, Aquarius",
  },
  {
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    quality: "Fixed",
    ruler: "Venus",
    dates: "Apr 20 - May 20",
    traits: "Reliable, sensual, and determined. Taurus values stability, comfort, and the finer things in life.",
    strengths: "Reliable, patient, practical, devoted",
    weaknesses: "Stubborn, possessive, resistant to change",
    compatible: "Virgo, Capricorn, Cancer, Pisces",
  },
  {
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    quality: "Mutable",
    ruler: "Mercury",
    dates: "May 21 - Jun 20",
    traits: "Curious, adaptable, and expressive. Geminis are communicators who thrive on variety and social connection.",
    strengths: "Adaptable, witty, curious, sociable",
    weaknesses: "Inconsistent, restless, indecisive",
    compatible: "Libra, Aquarius, Aries, Leo",
  },
  {
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    quality: "Cardinal",
    ruler: "Moon",
    dates: "Jun 21 - Jul 22",
    traits: "Nurturing, intuitive, and protective. Cancer is the caretaker of the zodiac, deeply connected to home and family.",
    strengths: "Loyal, empathetic, intuitive, tenacious",
    weaknesses: "Moody, clingy, oversensitive",
    compatible: "Scorpio, Pisces, Taurus, Virgo",
  },
  {
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    quality: "Fixed",
    ruler: "Sun",
    dates: "Jul 23 - Aug 22",
    traits: "Charismatic, confident, and generous. Leos are natural performers who love being in the spotlight.",
    strengths: "Creative, confident, generous, warm-hearted",
    weaknesses: "Arrogant, stubborn, attention-seeking",
    compatible: "Aries, Sagittarius, Gemini, Libra",
  },
  {
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    quality: "Mutable",
    ruler: "Mercury",
    dates: "Aug 23 - Sep 22",
    traits: "Analytical, hardworking, and meticulous. Virgos are perfectionists who pay attention to every detail.",
    strengths: "Analytical, practical, loyal, hardworking",
    weaknesses: "Overly critical, worrisome, perfectionist",
    compatible: "Taurus, Capricorn, Cancer, Scorpio",
  },
  {
    name: "Libra",
    symbol: "♎",
    element: "Air",
    quality: "Cardinal",
    ruler: "Venus",
    dates: "Sep 23 - Oct 22",
    traits: "Diplomatic, charming, and fair-minded. Libras seek harmony and balance in all areas of life.",
    strengths: "Diplomatic, social, idealistic, charming",
    weaknesses: "Indecisive, avoidant of conflict, people-pleasing",
    compatible: "Gemini, Aquarius, Leo, Sagittarius",
  },
  {
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    quality: "Fixed",
    ruler: "Pluto",
    dates: "Oct 23 - Nov 21",
    traits: "Passionate, resourceful, and determined. Scorpios are intense and deeply emotional, with powerful willpower.",
    strengths: "Resourceful, brave, passionate, loyal",
    weaknesses: "Jealous, secretive, controlling",
    compatible: "Cancer, Pisces, Virgo, Capricorn",
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    quality: "Mutable",
    ruler: "Jupiter",
    dates: "Nov 22 - Dec 21",
    traits: "Adventurous, optimistic, and philosophical. Sagittarians are free spirits who love exploration and learning.",
    strengths: "Generous, adventurous, optimistic, honest",
    weaknesses: "Restless, tactless, commitment-phobic",
    compatible: "Aries, Leo, Libra, Aquarius",
  },
];

function getZodiacSign(month: number, day: number) {
  // month is 1-indexed
  const signRanges = [
    { name: "Capricorn", start: [12, 22], end: [1, 19] },
    { name: "Aquarius", start: [1, 20], end: [2, 18] },
    { name: "Pisces", start: [2, 19], end: [3, 20] },
    { name: "Aries", start: [3, 21], end: [4, 19] },
    { name: "Taurus", start: [4, 20], end: [5, 20] },
    { name: "Gemini", start: [5, 21], end: [6, 20] },
    { name: "Cancer", start: [6, 21], end: [7, 22] },
    { name: "Leo", start: [7, 23], end: [8, 22] },
    { name: "Virgo", start: [8, 23], end: [9, 22] },
    { name: "Libra", start: [9, 23], end: [10, 22] },
    { name: "Scorpio", start: [10, 23], end: [11, 21] },
    { name: "Sagittarius", start: [11, 22], end: [12, 21] },
  ];

  for (const sign of signRanges) {
    const [sMonth, sDay] = sign.start;
    const [eMonth, eDay] = sign.end;
    if (
      (month === sMonth && day >= sDay) ||
      (month === eMonth && day <= eDay)
    ) {
      return sign.name;
    }
    // Handle跨年 Capricorn
    if (sign.name === "Capricorn") {
      if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return sign.name;
      }
    }
  }
  return null;
}

export default function ZodiacSignClient() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const sign = useMemo(() => {
    const m = parseInt(month);
    const d = parseInt(day);
    if (isNaN(m) || isNaN(d) || m < 1 || m > 12 || d < 1 || d > 31) return null;
    const name = getZodiacSign(m, d);
    if (!name) return null;
    return zodiacSigns.find((z) => z.name === name) || null;
  }, [month, day]);

  return (
    <ToolLayout {...metadata}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Birth Month
          </label>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="">Select</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(2024, i).toLocaleString("en-US", { month: "long" })}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Birth Day
          </label>
          <input
            type="number"
            min={1}
            max={31}
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      {sign && (
        <>
          <div className="mt-6 rounded-lg bg-purple-600 p-6 text-center text-white">
            <div className="text-5xl">{sign.symbol}</div>
            <div className="mt-2 text-3xl font-bold">{sign.name}</div>
            <div className="text-sm opacity-80">{sign.dates}</div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Element</div>
              <div className="text-sm font-bold">{sign.element}</div>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-center dark:border-blue-800 dark:bg-blue-950">
              <div className="text-xs text-blue-500 dark:text-blue-400">Quality</div>
              <div className="text-sm font-bold">{sign.quality}</div>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-center dark:border-green-800 dark:bg-green-950">
              <div className="text-xs text-green-500 dark:text-green-400">Ruler</div>
              <div className="text-sm font-bold">{sign.ruler}</div>
            </div>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-3 text-center dark:border-purple-800 dark:bg-purple-950">
              <div className="text-xs text-purple-500 dark:text-purple-400">Compatible With</div>
              <div className="text-xs font-bold">{sign.compatible}</div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-white">Personality</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{sign.traits}</p>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <h3 className="mb-2 font-semibold text-green-700 dark:text-green-300">Strengths</h3>
              <p className="text-sm text-green-600 dark:text-green-400">{sign.strengths}</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h3 className="mb-2 font-semibold text-red-700 dark:text-red-300">Weaknesses</h3>
              <p className="text-sm text-red-600 dark:text-red-400">{sign.weaknesses}</p>
            </div>
          </div>
        </>
      )}
    </ToolLayout>
  );
}
