"use client";

import { useState, useMemo, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Perpetual Calendar",
  description:
    "Interactive calendar with world holidays, week numbers, and historical events.",
  keywords: [
    "perpetual calendar",
    "world holidays",
    "week number calculator",
    "historical events today",
    "calendar with holidays",
  ],
};

// --- Country definitions ---
const countries = [
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { code: "ca", name: "Canada", flag: "🇨🇦" },
  { code: "au", name: "Australia", flag: "🇦🇺" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "fr", name: "France", flag: "🇫🇷" },
  { code: "jp", name: "Japan", flag: "🇯🇵" },
  { code: "in", name: "India", flag: "🇮🇳" },
  { code: "br", name: "Brazil", flag: "🇧🇷" },
  { code: "mx", name: "Mexico", flag: "🇲🇽" },
  { code: "it", name: "Italy", flag: "🇮🇹" },
  { code: "es", name: "Spain", flag: "🇪🇸" },
  { code: "nl", name: "Netherlands", flag: "🇳🇱" },
  { code: "ie", name: "Ireland", flag: "🇮🇪" },
  { code: "kr", name: "South Korea", flag: "🇰🇷" },
];

// --- Easter calculation (Anonymous Gregorian algorithm) ---
function computeEaster(year: number): { month: number; day: number } {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

// --- Floating holiday helper ---
function nthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): number {
  // weekday: 0=Sun, 1=Mon, ... 6=Sat
  let count = 0;
  for (let day = 1; day <= 31; day++) {
    const d = new Date(year, month, day);
    if (d.getMonth() !== month) break;
    if (d.getDay() === weekday) {
      count++;
      if (count === n) return day;
    }
  }
  return -1;
}

function lastWeekdayOfMonth(year: number, month: number, weekday: number): number {
  for (let day = 31; day >= 1; day--) {
    const d = new Date(year, month, day);
    if (d.getMonth() === month && d.getDay() === weekday) return day;
  }
  return -1;
}

// --- Holiday data by country ---
// type: "public" = public holiday (red), "observance" = observance (orange)
function getHolidays(year: number, country: string): Record<string, { name: string; type: "public" | "observance" }> {
  const holidays: Record<string, { name: string; type: "public" | "observance" }> = {};
  const easter = computeEaster(year);
  const easterMonth = easter.month - 1; // 0-indexed
  const easterDay = easter.day;

  function addHoliday(month: number, day: number, name: string, type: "public" | "observance") {
    const key = `${month}-${day}`;
    holidays[key] = { name, type };
  }

  // Easter-related helpers
  function addEaster(offset: number, name: string, type: "public" | "observance") {
    const d = new Date(year, easterMonth, easterDay + offset);
    addHoliday(d.getMonth(), d.getDate(), name, type);
  }

  // === US Holidays ===
  if (country === "us") {
    addHoliday(0, 1, "New Year's Day", "public");
    const mlk = nthWeekdayOfMonth(year, 0, 1, 3);
    addHoliday(0, mlk, "Martin Luther King Jr. Day", "public");
    addEaster(-2, "Good Friday", "observance");
    addEaster(0, "Easter Sunday", "observance");
    const pres = nthWeekdayOfMonth(year, 1, 1, 3);
    addHoliday(1, pres, "Presidents' Day", "public");
    const mem = lastWeekdayOfMonth(year, 4, 1);
    addHoliday(4, mem, "Memorial Day", "public");
    addHoliday(5, 19, "Juneteenth", "public");
    addHoliday(6, 4, "Independence Day", "public");
    const lab = nthWeekdayOfMonth(year, 8, 1, 1);
    addHoliday(8, lab, "Labor Day", "public");
    const col = nthWeekdayOfMonth(year, 9, 1, 2);
    addHoliday(9, col, "Columbus Day", "observance");
    addHoliday(9, 31, "Halloween", "observance");
    addHoliday(10, 11, "Veterans Day", "public");
    const thank = nthWeekdayOfMonth(year, 10, 4, 4);
    addHoliday(10, thank, "Thanksgiving Day", "public");
    addHoliday(10, thank + 1, "Black Friday", "observance");
    addHoliday(11, 24, "Christmas Eve", "observance");
    addHoliday(11, 25, "Christmas Day", "public");
  }

  // === UK Holidays ===
  if (country === "uk") {
    addHoliday(0, 1, "New Year's Day", "public");
    addHoliday(0, 2, "2nd January", "public");
    addHoliday(2, 17, "St. Patrick's Day", "observance");
    addEaster(-2, "Good Friday", "public");
    addEaster(1, "Easter Monday", "public");
    const mayB = nthWeekdayOfMonth(year, 4, 1, 1);
    addHoliday(4, mayB, "Early May Bank Holiday", "public");
    const lateMayB = lastWeekdayOfMonth(year, 4, 1);
    addHoliday(4, lateMayB, "Spring Bank Holiday", "public");
    addHoliday(7, 12, "Battle of the Boyne", "observance");
    const augB = nthWeekdayOfMonth(year, 7, 1, 1);
    addHoliday(7, augB, "Summer Bank Holiday", "public");
    addHoliday(10, 31, "Halloween", "observance");
    addHoliday(10, 5, "Bonfire Night", "observance");
    addHoliday(11, 11, "Remembrance Day", "observance");
    addHoliday(11, 25, "Christmas Day", "public");
    addHoliday(11, 26, "Boxing Day", "public");
  }

  // === Canada ===
  if (country === "ca") {
    addHoliday(0, 1, "New Year's Day", "public");
    const fam = nthWeekdayOfMonth(year, 1, 1, 3);
    addHoliday(1, fam, "Family Day", "public");
    addEaster(-2, "Good Friday", "public");
    addEaster(1, "Easter Monday", "observance");
    const vic = nthWeekdayOfMonth(year, 4, 1, -1);
    addHoliday(4, 24, "Victoria Day", "public");
    addHoliday(6, 1, "Canada Day", "public");
    const civ = nthWeekdayOfMonth(year, 7, 1, 1);
    addHoliday(7, civ, "Civic Holiday", "public");
    const lab = nthWeekdayOfMonth(year, 8, 1, 1);
    addHoliday(8, lab, "Labour Day", "public");
    const thankg = nthWeekdayOfMonth(year, 9, 1, 2);
    addHoliday(9, thankg, "Thanksgiving", "public");
    addHoliday(10, 11, "Remembrance Day", "public");
    addHoliday(11, 25, "Christmas Day", "public");
    addHoliday(11, 26, "Boxing Day", "public");
  }

  // === Australia ===
  if (country === "au") {
    addHoliday(0, 1, "New Year's Day", "public");
    addHoliday(0, 26, "Australia Day", "public");
    const marchB = nthWeekdayOfMonth(year, 2, 1, 2);
    addHoliday(2, marchB, "Labour Day", "public");
    addEaster(-2, "Good Friday", "public");
    addEaster(-1, "Easter Saturday", "public");
    addEaster(0, "Easter Sunday", "observance");
    addEaster(1, "Easter Monday", "public");
    addHoliday(3, 25, "ANZAC Day", "public");
    const queenB = nthWeekdayOfMonth(year, 5, 1, 2);
    addHoliday(5, queenB, "King's Birthday", "public");
    const lab = nthWeekdayOfMonth(year, 9, 1, 1);
    addHoliday(9, lab, "Labour Day", "public");
    addHoliday(11, 25, "Christmas Day", "public");
    addHoliday(11, 26, "Boxing Day", "public");
  }

  // === Germany ===
  if (country === "de") {
    addHoliday(0, 1, "Neujahr", "public");
    addHoliday(0, 6, "Epiphany", "observance");
    addEaster(-2, "Karfreitag", "public");
    addEaster(0, "Ostersonntag", "observance");
    addEaster(1, "Ostermontag", "public");
    addHoliday(4, 1, "Tag der Arbeit", "public");
    addEaster(39, "Christi Himmelfahrt", "public");
    addEaster(50, "Pfingstmontag", "public");
    addHoliday(9, 3, "Deutsche Einheit", "public");
    addHoliday(9, 31, "Reformationstag", "observance");
    addHoliday(10, 31, "Halloween", "observance");
    addHoliday(10, 1, "Allerheiligen", "observance");
    addHoliday(11, 11, "St. Martin's Day", "observance");
    addHoliday(11, 25, "1. Weihnachtstag", "public");
    addHoliday(11, 26, "2. Weihnachtstag", "public");
  }

  // === France ===
  if (country === "fr") {
    addHoliday(0, 1, "Jour de l'an", "public");
    addEaster(1, "Lundi de Pâques", "public");
    addHoliday(4, 1, "Fête du Travail", "public");
    addHoliday(4, 8, "Victoire 1945", "public");
    addEaster(39, "Ascension", "public");
    addEaster(50, "Lundi de Pentecôte", "public");
    addHoliday(6, 14, "Fête nationale", "public");
    addHoliday(7, 15, "Assomption", "public");
    addHoliday(10, 1, "Toussaint", "public");
    addHoliday(10, 11, "Armistice", "public");
    addHoliday(11, 25, "Noël", "public");
  }

  // === Japan ===
  if (country === "jp") {
    addHoliday(0, 1, "元日", "public");
    addHoliday(0, 2, "年始休日", "public");
    addHoliday(0, 11, "建国記念の日", "public");
    addHoliday(1, 23, "天皇誕生日", "public");
    addHoliday(2, 20, "春分の日", "public");
    addHoliday(3, 29, "昭和の日", "public");
    addHoliday(4, 3, "憲法記念日", "public");
    addHoliday(4, 5, "みどりの日", "public");
    addHoliday(4, 29, "こどもの日", "public");
    addHoliday(6, 20, "海の日", "public");
    addHoliday(7, 11, "山の日", "public");
    addHoliday(8, 20, "敬老の日", "public");
    addHoliday(8, 23, "秋分の日", "public");
    addHoliday(9, 10, "スポーツの日", "public");
    addHoliday(10, 3, "文化の日", "public");
    addHoliday(10, 23, "勤労感謝の日", "public");
  }

  // === India ===
  if (country === "in") {
    addHoliday(0, 26, "Republic Day", "public");
    addHoliday(7, 15, "Independence Day", "public");
    addHoliday(9, 2, "Gandhi Jayanti", "public");
    addHoliday(2, 8, "Holi", "public");
    addHoliday(9, 2, "Diwali", "public");
    addHoliday(9, 1, "Diwali (Govardhan Puja)", "observance");
    addHoliday(1, 14, "Makar Sankranti", "observance");
    addHoliday(2, 17, "Maha Shivaratri", "observance");
    addHoliday(7, 15, "Raksha Bandhan", "observance");
    addHoliday(11, 25, "Christmas Day", "public");
    addHoliday(2, 26, "Buddha Purnima", "observance");
    addHoliday(11, 12, "Guru Nanak Jayanti", "observance");
  }

  // === Brazil ===
  if (country === "br") {
    addHoliday(0, 1, "Confraternização Universal", "public");
    addEaster(-47, "Carnaval", "public");
    addEaster(-46, "Carnaval (Terça)", "public");
    addEaster(-2, "Sexta-feira Santa", "public");
    addHoliday(3, 21, "Tiradentes", "public");
    addHoliday(4, 1, "Dia do Trabalho", "public");
    addHoliday(8, 7, "Independência", "public");
    addHoliday(9, 12, "N. Sra. Aparecida", "public");
    addHoliday(10, 2, "Finados", "public");
    addHoliday(10, 15, "Proclamação da República", "public");
    addHoliday(11, 20, "Consciência Negra", "public");
    addHoliday(11, 25, "Natal", "public");
  }

  // === Mexico ===
  if (country === "mx") {
    addHoliday(0, 1, "Año Nuevo", "public");
    addHoliday(1, 5, "Día de la Constitución", "public");
    addHoliday(2, 24, "Día de la Bandera", "observance");
    addHoliday(2, 17, "Benito Juárez's Birthday", "public");
    addHoliday(4, 1, "Día del Trabajo", "public");
    addHoliday(8, 16, "Día de la Independencia", "public");
    addHoliday(10, 12, "Día de la Raza", "observance");
    addHoliday(10, 31, "Día de los Muertos", "observance");
    addHoliday(10, 1, "Día de los Muertos", "observance");
    addHoliday(10, 17, "Revolución Mexicana", "public");
    addHoliday(11, 25, "Navidad", "public");
  }

  // === Italy ===
  if (country === "it") {
    addHoliday(0, 1, "Capodanno", "public");
    addHoliday(0, 6, "Epifania", "public");
    addEaster(0, "Pasqua", "public");
    addEaster(1, "Lunedì dell'Angelo", "public");
    addHoliday(3, 25, "Liberazione", "public");
    addHoliday(4, 1, "Festa dei Lavoratori", "public");
    addHoliday(5, 2, "Festa della Repubblica", "public");
    addHoliday(7, 15, "Assunzione", "public");
    addHoliday(10, 1, "Ognissanti", "public");
    addHoliday(11, 8, "Immacolata", "public");
    addHoliday(11, 25, "Natale", "public");
    addHoliday(11, 26, "Santo Stefano", "public");
  }

  // === Spain ===
  if (country === "es") {
    addHoliday(0, 1, "Año Nuevo", "public");
    addHoliday(0, 6, "Día de Reyes", "public");
    addHoliday(2, 19, "San José", "observance");
    addEaster(-2, "Viernes Santo", "public");
    addHoliday(4, 1, "Día del Trabajador", "public");
    addHoliday(7, 25, "Santiago Apóstol", "observance");
    addHoliday(8, 15, "Asunción", "public");
    addHoliday(9, 12, "Fiesta Nacional", "public");
    addHoliday(9, 31, "Todos los Santos", "observance");
    addHoliday(10, 1, "Día de Todos los Santos", "public");
    addHoliday(11, 6, "Día de la Constitución", "public");
    addHoliday(11, 8, "Inmaculada", "public");
    addHoliday(11, 25, "Navidad", "public");
  }

  // === Netherlands ===
  if (country === "nl") {
    addHoliday(0, 1, "Nieuwjaarsdag", "public");
    addEaster(0, "Eerste Paasdag", "public");
    addEaster(1, "Tweede Paasdag", "public");
    addHoliday(3, 27, "Koningsdag", "public");
    addHoliday(4, 5, "Bevrijdingsdag", "public");
    addEaster(39, "Hemelvaartsdag", "public");
    addEaster(50, "Tweede Pinksterdag", "public");
    addHoliday(11, 25, "Eerste Kerstdag", "public");
    addHoliday(11, 26, "Tweede Kerstdag", "public");
  }

  // === Ireland ===
  if (country === "ie") {
    addHoliday(0, 1, "New Year's Day", "public");
    addHoliday(2, 17, "St. Patrick's Day", "public");
    addEaster(-2, "Good Friday", "observance");
    addEaster(1, "Easter Monday", "public");
    const mayB = nthWeekdayOfMonth(year, 4, 1, 1);
    addHoliday(4, mayB, "May Day", "public");
    const junB = nthWeekdayOfMonth(year, 5, 1, 1);
    addHoliday(5, junB, "June Bank Holiday", "public");
    const augB = nthWeekdayOfMonth(year, 7, 1, 1);
    addHoliday(7, augB, "August Bank Holiday", "public");
    const octB = nthWeekdayOfMonth(year, 9, 1, -1);
    addHoliday(9, octB, "October Bank Holiday", "public");
    addHoliday(11, 25, "Christmas Day", "public");
    addHoliday(11, 26, "St. Stephen's Day", "public");
  }

  // === South Korea ===
  if (country === "kr") {
    addHoliday(0, 1, "신정", "public");
    addHoliday(1, 24, "삼일절", "public");
    addHoliday(4, 5, "식목일", "observance");
    addHoliday(4, 25, "부처님 오신 날", "public");
    addHoliday(5, 5, "어린이날", "public");
    addHoliday(5, 6, "현충일", "public");
    addHoliday(7, 17, "제헌절", "observance");
    addHoliday(7, 15, "광복절", "public");
    addHoliday(8, 15, "추석", "public");
    addHoliday(9, 3, "개천절", "public");
    addHoliday(9, 9, "한글날", "public");
    addHoliday(11, 25, "크리스마스", "public");
  }

  return holidays;
}

// --- Historical events data (month index 0-11, day 1-31) ---
const historicalEvents: Record<string, Array<{ year: number; event: string }>> = {
  "0-1": [
    { year: 1863, event: "The Emancipation Proclamation took effect, freeing slaves in Confederate states." },
    { year: 1959, event: "Alaska became the 49th U.S. state." },
    { year: 1993, event: "Czechoslovakia peacefully split into the Czech Republic and Slovakia." },
    { year: 1999, event: "The Euro was introduced as the single currency of 11 EU nations." },
    { year: 2004, event: "Cassini-Huygens spacecraft arrived at Saturn." },
  ],
  "0-2": [
    { year: 1492, event: "Spain's conquest of Granada ended Muslim rule in Iberia." },
    { year: 1905, event: "Port Arthur surrendered, ending the Russo-Japanese War siege." },
    { year: 1974, event: "Richard Nixon signed the Federal Election Campaign Act." },
  ],
  "0-3": [
    { year: 1777, event: "Continental forces defeated the British at the Battle of Princeton." },
    { year: 1868, event: "Alfred Nobel patented dynamite." },
    { year: 1961, event: "The U.S. severed diplomatic relations with Cuba." },
  ],
  "0-4": [
    { year: 1643, event: "The English Long Parliament first convened." },
    { year: 1951, event: "Korean War: UN forces recaptured Seoul." },
    { year: 2004, event: "SpaceShipOne completed its first flight." },
  ],
  "0-5": [
    { year: 1895, event: "Wilhelm Röntgen discovered X-rays." },
    { year: 1933, event: "The first concentration camp at Dachau opened in Germany." },
    { year: 1970, event: "The Boeing 747, the first jumbo jet, made its maiden flight." },
  ],
  "0-6": [
    { year: 1838, event: "Samuel Morse first publicly demonstrated the telegraph." },
    { year: 1912, event: "New Mexico became the 47th U.S. state." },
    { year: 1994, event: "Nancy Kerrigan was attacked in Detroit, Michigan." },
  ],
  "0-7": [
    { year: 1782, event: "The first American commercial bank, the Bank of North America, opened." },
    { year: 1785, event: "Jean-Pierre Blanchard made the first balloon flight in the US." },
    { year: 1984, event: "Brunei became a member of ASEAN." },
  ],
  "0-8": [
    { year: 1889, event: "Herman Hollerith received a patent for his tabulating machine." },
    { year: 1918, event: "U.S. President Wilson announced the Fourteen Points." },
    { year: 1982, event: "AT&T agreed to break up into regional companies." },
  ],
  "0-9": [
    { year: 1788, event: "Connecticut became the 5th U.S. state." },
    { year: 1878, event: "Umberto I became King of Italy." },
    { year: 2007, event: "Apple Inc. launched the original iPhone." },
  ],
  "0-10": [
    { year: 1861, event: "Florida seceded from the Union." },
    { year: 1920, event: "The League of Nations held its first meeting in Paris." },
    { year: 1984, event: "The U.S. and the Vatican established full diplomatic relations." },
  ],
  "0-11": [
    { year: 1787, event: "William Herschel discovered two moons of Uranus." },
    { year: 1923, event: "The first insulin was used to treat diabetes." },
    { year: 1935, event: "Amelia Earhart became the first person to fly solo from Hawaii to California." },
  ],
  "0-12": [
    { year: 1908, event: "The Eiffel Tower surpassed the Washington Monument as the tallest structure." },
    { year: 1945, event: "The London Conference proposed a permanent United Nations headquarters." },
    { year: 2010, event: "A massive earthquake struck Haiti, killing over 200,000 people." },
  ],
  "0-13": [
    { year: 1898, event: "Franklin D. Roosevelt married Eleanor Roosevelt." },
    { year: 1953, event: "The first Chevrolet Corvette was introduced." },
    { year: 2012, event: "Costa Concordia capsized off the coast of Italy." },
  ],
  "0-14": [
    { year: 1784, event: "The Treaty of Paris was ratified by the Continental Congress." },
    { year: 1907, event: "A massive earthquake in Kingston, Jamaica, killed over 1,000." },
    { year: 1943, event: "The Pentagon building was completed in Arlington, Virginia." },
  ],
  "0-15": [
    { year: 1759, event: "The British Museum opened to the public for the first time." },
    { year: 1892, event: "James Naismith published the rules of basketball." },
    { year: 2001, event: "Wikipedia, the free encyclopedia, launched." },
  ],
  "0-16": [
    { year: 1547, event: "Ivan IV (the Terrible) became the first Tsar of Russia." },
    { year: 1909, event: "The Anglo-Japanese Expedition reached the North Magnetic Pole." },
    { year: 1969, event: "The USSR launched Soyuz 4, the first Soviet crewed space flight." },
  ],
  "0-17": [
    { year: 1773, event: "Captain James Cook's Resolution became the first ship to cross the Antarctic Circle." },
    { year: 1912, event: "The Royal Anthropological Society was founded in London." },
    { year: 1961, event: "Patrice Lumumba, the first Prime Minister of Congo, was assassinated." },
  ],
  "0-18": [
    { year: 1871, event: "William I was proclaimed German Emperor in the Hall of Mirrors at Versailles." },
    { year: 1919, event: "The Paris Peace Conference began to negotiate peace terms after WWI." },
    { year: 2009, event: "US Airways Flight 1549 made an emergency landing on the Hudson River." },
  ],
  "0-19": [
    { year: 1736, event: "James Watt, Scottish inventor of the steam engine, was born." },
    { year: 1807, event: "The first steamboat service began in New York." },
    { year: 1966, event: "Indira Gandhi became the Prime Minister of India." },
  ],
  "0-20": [
    { year: 1265, event: "The first English Parliament convened at Westminster." },
    { year: 1936, event: "King Edward VIII abdicated the British throne." },
    { year: 1981, event: "The IBM PC was announced." },
  ],
  "0-21": [
    { year: 1793, event: "King Louis XVI of France was executed by guillotine." },
    { year: 1899, event: "Opel produced its first automobile in Germany." },
    { year: 1976, event: "The first commercial Concorde flight took place." },
  ],
  "0-22": [
    { year: 1901, event: "Edward VII became King of the United Kingdom after Queen Victoria's death." },
    { year: 1973, event: "Roe v. Wade was decided by the U.S. Supreme Court." },
    { year: 2008, event: "Hezbollah forces took control of West Beirut in Lebanon." },
  ],
  "0-23": [
    { year: 1556, event: "The deadliest earthquake in recorded history struck Shaanxi, China, killing ~830,000." },
    { year: 1997, event: "Madeleine Albright became the first female U.S. Secretary of State." },
    { year: 2020, event: "The WHO declared the coronavirus outbreak a global health emergency." },
  ],
  "0-24": [
    { year: 41, event: "Roman Emperor Caligula was assassinated by the Praetorian Guard." },
    { year: 1848, event: "Gold was discovered at Sutter's Mill, triggering the California Gold Rush." },
    { year: 1984, event: "The Apple Macintosh computer was introduced." },
  ],
  "0-25": [
    { year: 1533, event: "Henry VIII of England secretly married Anne Boleyn." },
    { year: 1881, event: "Thomas Edison and Alexander Graham Bell formed the Oriental Telephone Company." },
    { year: 2019, event: "Global climate strikes were held in over 100 countries." },
  ],
  "0-26": [
    { year: 1500, event: "Vicente Yáñez Pinzón became the first European to reach present-day Brazil." },
    { year: 1837, event: "Michigan became the 26th U.S. state." },
    { year: 1950, event: "India became a republic, with Rajendra Prasad as its first president." },
  ],
  "0-27": [
    { year: 1888, event: "The National Geographic Society was founded in Washington, D.C." },
    { year: 1944, event: "The siege of Leningrad was lifted after 900 days." },
    { year: 1967, event: "The first prototype of the Apollo 1 spacecraft was completed." },
  ],
  "0-28": [
    { year: 1871, event: "France surrendered to Germany in the Franco-Prussian War." },
    { year: 1986, event: "Space Shuttle Challenger exploded 73 seconds after launch, killing all seven crew." },
    { year: 2003, event: "The Human Genome Project announced the sequencing of the human genome." },
  ],
  "0-29": [
    { year: 1845, event: "Edgar Allan Poe's poem 'The Raven' was first published." },
    { year: 1886, event: "Karl Benz patented the first successful gasoline-powered automobile." },
    { year: 1964, event: "The Beatles recorded their first hit, 'I Want to Hold Your Hand'." },
  ],
  "0-30": [
    { year: 1649, event: "King Charles I of England was executed for high treason." },
    { year: 1889, event: "The first issue of the magazine 'National Geographic' was published." },
    { year: 1948, event: "Mahatma Gandhi was assassinated by Nathuram Godse in New Delhi." },
  ],
  "0-31": [
    { year: 1865, event: "The U.S. Congress passed the 13th Amendment, abolishing slavery." },
    { year: 1958, event: "The Explorer 1 satellite was launched, America's first." },
    { year: 1971, event: "Apollo 14 astronauts became the third to land on the Moon." },
  ],
  "1-1": [
    { year: 1790, event: "The first session of the U.S. Supreme Court convened in New York." },
    { year: 1865, event: "The 13th Amendment was signed by President Lincoln." },
    { year: 1960, event: "The sit-in movement began in Greensboro, North Carolina." },
  ],
  "1-2": [
    { year: 1876, event: "The National League of Professional Baseball Clubs was formed." },
    { year: 1901, event: "Australia's first federal parliament opened in Melbourne." },
    { year: 1971, event: "The People's Republic of China and the U.S. began ping-pong diplomacy." },
  ],
  "1-4": [
    { year: 1789, event: "George Washington was unanimously elected the first U.S. President." },
    { year: 1945, event: "The Yalta Conference began with Roosevelt, Churchill, and Stalin." },
    { year: 2004, event: "Facebook was launched by Mark Zuckerberg from his Harvard dorm room." },
  ],
  "1-14": [
    { year: 1779, event: "Captain James Cook arrived in Hawaii." },
    { year: 1859, event: "Oregon became the 33rd U.S. state." },
    { year: 1989, event: "Ayatollah Khomeini issued a fatwa against Salman Rushdie." },
  ],
  "1-17": [
    { year: 1867, event: "The first ship passed through the Suez Canal." },
    { year: 1933, event: "The 20th Amendment moved Inauguration Day to January 20." },
    { year: 1991, event: "Operation Desert Storm began with air strikes on Iraq." },
  ],
  "1-20": [
    { year: 1937, event: "Franklin D. Roosevelt was inaugurated for his second term." },
    { year: 1961, event: "John F. Kennedy was inaugurated as the 35th U.S. President." },
    { year: 2009, event: "Barack Obama was inaugurated as the 44th U.S. President." },
  ],
  "2-8": [
    { year: 1587, event: "Mary, Queen of Scots, was executed at Fotheringhay Castle." },
    { year: 1867, event: "The first cargo of beef was shipped from the US to England on a refrigerated ship." },
    { year: 1910, event: "The Boy Scouts of America was incorporated." },
  ],
  "2-14": [
    { year: 1876, event: "Alexander Graham Bell applied for a patent for the telephone." },
    { year: 1879, event: "The Battle of Isandlwana took place during the Anglo-Zulu War." },
    { year: 1946, event: "ENIAC, the first general-purpose electronic computer, was unveiled." },
  ],
  "2-22": [
    { year: 1732, event: "George Washington was born at Popes Creek, Virginia." },
    { year: 1819, event: "The Adams-Onís Treaty was signed, giving Florida to the U.S." },
    { year: 1980, event: "The U.S. Olympic hockey team defeated the USSR in the 'Miracle on Ice'." },
  ],
  "2-28": [
    { year: 1854, event: "The Republican Party was founded in Ripon, Wisconsin." },
    { year: 1953, event: "Francis Crick and James Watson announced the discovery of the DNA double helix." },
    { year: 2013, event: "Pope Benedict XVI resigned, the first pope to do so in 600 years." },
  ],
  "3-1": [
    { year: 1803, event: "Ohio became the 17th U.S. state." },
    { year: 1872, event: "Yellowstone became the world's first national park." },
    { year: 1961, event: "President Kennedy established the Peace Corps." },
  ],
  "3-8": [
    { year: 1862, event: "The CSS Virginia (Merrimack) fought the USS Monitor in the first ironclad battle." },
    { year: 1917, event: "Women in Russia were granted the right to vote." },
    { year: 1983, event: "Ronald Reagan called the Soviet Union an 'evil empire'." },
  ],
  "3-14": [
    { year: 1879, event: "Albert Einstein was born in Ulm, Germany." },
    { year: 1883, event: "Karl Marx died in London." },
    { year: 2018, event: "Stephen Hawking died at age 76 in Cambridge, England." },
  ],
  "3-15": [
    { year: 44, event: "Julius Caesar was assassinated on the Ides of March in Rome." },
    { year: 1493, event: "Christopher Columbus returned to Spain after his first voyage to the Americas." },
    { year: 1917, event: "Tsar Nicholas II of Russia abdicated the throne." },
  ],
  "3-25": [
    { year: 1655, event: "Christiaan Huygens discovered Titan, the largest moon of Saturn." },
    { year: 1957, event: "The Treaty of Rome was signed, creating the European Economic Community." },
    { year: 2015, event: "The Iran nuclear deal framework was announced." },
  ],
  "4-1": [
    { year: 1789, event: "The U.S. House of Representatives achieved its first quorum." },
    { year: 1867, event: "Singapore became a British Crown Colony." },
    { year: 1976, event: "Apple Inc. was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne." },
  ],
  "4-12": [
    { year: 1861, event: "The American Civil War began at Fort Sumter." },
    { year: 1961, event: "Yuri Gagarin became the first human in space aboard Vostok 1." },
    { year: 1981, event: "The first Space Shuttle launch (Columbia) took place." },
  ],
  "4-15": [
    { year: 1865, event: "Abraham Lincoln died after being shot the previous evening." },
    { year: 1912, event: "The RMS Titanic sank in the North Atlantic, killing over 1,500." },
    { year: 2013, event: "Two bombs exploded near the finish line of the Boston Marathon." },
  ],
  "4-18": [
    { year: 1906, event: "A massive earthquake struck San Francisco, destroying much of the city." },
    { year: 1942, event: "The Doolittle Raid, the first Allied air raid on Japan, took place." },
    { year: 1983, event: "The first suicide bombing attacked the U.S. Embassy in Beirut." },
  ],
  "4-22": [
    { year: 1970, event: "The first Earth Day was celebrated in the United States." },
    { year: 1994, event: "The North American Free Trade Agreement (NAFTA) went into effect." },
    { year: 2016, event: "The Paris Climate Agreement was signed by 175 nations." },
  ],
  "4-26": [
    { year: 1889, event: "The Eiffel Tower was officially opened to the public." },
    { year: 1986, event: "The Chernobyl nuclear disaster occurred in Ukraine." },
    { year: 1994, event: "Nelson Mandela was elected the first black president of South Africa." },
  ],
  "5-6": [
    { year: 1882, event: "The U.S. passed the Chinese Exclusion Act." },
    { year: 1937, event: "The Hindenburg airship caught fire and was destroyed in Lakehurst, NJ." },
    { year: 1994, event: "The Channel Tunnel connecting England and France officially opened." },
  ],
  "5-14": [
    { year: 1948, event: "Israel declared independence as a nation." },
    { year: 1955, event: "The Warsaw Pact was signed in Poland." },
    { year: 1998, event: "The first building was demolished for the World Trade Center memorial." },
  ],
  "5-25": [
    { year: 1977, event: "Star Wars: Episode IV – A New Hope premiered in cinemas." },
    { year: 1961, event: "President Kennedy announced the goal of landing a man on the Moon." },
    { year: 2001, event: "The first Wikipedia Mirror was created." },
  ],
  "5-29": [
    { year: 1453, event: "Constantinople fell to the Ottoman Empire, ending the Byzantine Empire." },
    { year: 1953, event: "Edmund Hillary and Tenzing Norgay became the first to reach Mount Everest's summit." },
    { year: 1985, event: "The Heysel Stadium disaster occurred before the European Cup final." },
  ],
  "6-4": [
    { year: 1783, event: "The first hot air balloon demonstration took place in Lyon, France." },
    { year: 1942, event: "The Battle of Midway began, a turning point in the Pacific War." },
    { year: 1989, event: "The Solidarity movement won Poland's first free election." },
  ],
  "6-6": [
    { year: 1944, event: "D-Day: Allied forces landed on the beaches of Normandy in France." },
    { year: 1984, event: "Tetris, one of the most popular video games, was first released." },
    { year: 2002, event: "The Large Hadron Collider project was approved by CERN." },
  ],
  "6-12": [
    { year: 1898, event: "The Philippines declared independence from Spain." },
    { year: 1964, event: "Nelson Mandela was sentenced to life imprisonment in South Africa." },
    { year: 1987, event: "President Reagan challenged Gorbachev to 'tear down this wall' in Berlin." },
  ],
  "6-17": [
    { year: 1885, event: "The Statue of Liberty arrived in New York Harbor from France." },
    { year: 1972, event: "The Watergate break-in occurred, eventually leading to Nixon's resignation." },
    { year: 2017, event: "The first FIFA Women's World Cup took place in France." },
  ],
  "6-28": [
    { year: 1914, event: "Archduke Franz Ferdinand was assassinated in Sarajevo, triggering WWI." },
    { year: 1969, event: "The Stonewall Riots began in New York City, a landmark for LGBTQ rights." },
    { year: 2016, event: "The UK voted to leave the European Union (Brexit)." },
  ],
  "7-4": [
    { year: 1776, event: "The Declaration of Independence was adopted by the Continental Congress." },
    { year: 1826, event: "Both Thomas Jefferson and John Adams died on the 50th anniversary of independence." },
    { year: 1946, event: "The Philippines gained independence from the United States." },
  ],
  "7-14": [
    { year: 1789, event: "The storming of the Bastille marked the beginning of the French Revolution." },
    { year: 1965, event: "NASA's Mariner 4 flew past Mars, sending back the first close-up photos." },
    { year: 2015, event: "NASA's New Horizons flew past Pluto." },
  ],
  "7-16": [
    { year: 1945, event: "The first atomic bomb was tested in New Mexico (Trinity test)." },
    { year: 1969, event: "Apollo 11 launched, carrying the first astronauts to the Moon." },
    { year: 1994, event: "Comet Shoemaker-Levy 9 collided with Jupiter." },
  ],
  "7-20": [
    { year: 1969, event: "Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon." },
    { year: 1976, event: "The Viking 1 spacecraft landed on Mars." },
    { year: 2015, event: "Cuba and the U.S. restored full diplomatic relations." },
  ],
  "7-28": [
    { year: 1914, event: "World War I began when Austria-Hungary declared war on Serbia." },
    { year: 1976, event: "A massive earthquake struck Tangshan, China, killing ~242,000." },
    { year: 1984, event: "The Summer Olympics opened in Los Angeles." },
  ],
  "8-5": [
    { year: 1962, event: "Nelson Mandela was arrested in South Africa." },
    { year: 1981, event: "IBM launched its first personal computer." },
    { year: 2004, event: "The Rosetta spacecraft was launched by the European Space Agency." },
  ],
  "8-9": [
    { year: 48, event: "The Battle of Pharsalus took place, a decisive victory for Julius Caesar." },
    { year: 1945, event: "The U.S. dropped an atomic bomb on Nagasaki, Japan." },
    { year: 1974, event: "Richard Nixon resigned as U.S. President, the only one to do so." },
  ],
  "8-15": [
    { year: 1947, event: "India gained independence from the British Empire." },
    { year: 1969, event: "The Woodstock Music Festival began in New York." },
    { year: 1971, event: "President Nixon ended the gold standard (Bretton Woods system)." },
  ],
  "8-28": [
    { year: 1963, event: "Martin Luther King Jr. delivered his 'I Have a Dream' speech in Washington." },
    { year: 1990, event: "The Hubble Space Telescope sent its first images to Earth." },
    { year: 2005, event: "Hurricane Katrina made landfall, devastating New Orleans." },
  ],
  "8-31": [
    { year: 1888, event: "Jack the Ripper's first confirmed victim, Mary Nichols, was found in London." },
    { year: 1997, event: "Diana, Princess of Wales, was killed in a car crash in Paris." },
    { year: 2014, event: "Scotland voted 55-45 to remain in the United Kingdom." },
  ],
  "9-1": [
    { year: 1939, event: "Germany invaded Poland, beginning World War II in Europe." },
    { year: 1969, event: "The first ATM in the U.S. was installed in Rockville Centre, New York." },
    { year: 2004, event: "The Beslan school siege began in Russia." },
  ],
  "9-5": [
    { year: 1666, event: "The Great Fire of London began, destroying much of the city." },
    { year: 1972, event: "The Munich Olympics terrorist attack took place." },
    { year: 1977, event: "NASA launched the Voyager 1 spacecraft." },
  ],
  "9-11": [
    { year: 1697, event: "The Battle of Zenta ended Ottoman expansion in Europe." },
    { year: 1922, event: "The British Mandate of Palestine began." },
    { year: 2001, event: "Terrorist attacks destroyed the World Trade Center and damaged the Pentagon." },
  ],
  "9-15": [
    { year: 1821, event: "Costa Rica, El Salvador, Guatemala, Honduras, and Nicaragua gained independence." },
    { year: 1935, event: "The Nuremberg Laws stripped Jews of citizenship in Nazi Germany." },
    { year: 1963, event: "A bomb killed four girls at a Baptist church in Birmingham, Alabama." },
  ],
  "9-27": [
    { year: 1821, event: "Mexico gained independence from Spain." },
    { year: 1905, event: "Albert Einstein published his paper on special relativity." },
    { year: 1962, event: "Rachel Carson's 'Silent Spring' was published, launching the environmental movement." },
  ],
  "10-4": [
    { year: 1582, event: "The Gregorian calendar was introduced, skipping 10 days." },
    { year: 1957, event: "The Soviet Union launched Sputnik 1, the first artificial satellite." },
    { year: 2004, event: "SpaceShipOne won the Ansari X Prize for private spaceflight." },
  ],
  "10-9": [
    { year: 1874, event: "The Universal Postal Union was established in Bern, Switzerland." },
    { year: 1967, event: "Che Guevara was captured and executed in Bolivia." },
    { year: 2006, event: "North Korea conducted its first nuclear weapons test." },
  ],
  "10-14": [
    { year: 1066, event: "The Battle of Hastings: William the Conqueror defeated King Harold." },
    { year: 1947, event: "Chuck Yeager broke the sound barrier in the Bell X-1." },
    { year: 2017, event: "The #MeToo movement went viral on social media." },
  ],
  "10-24": [
    { year: 1648, event: "The Peace of Westphalia was signed, ending the Thirty Years' War." },
    { year: 1929, event: "Black Thursday: Wall Street crashed, triggering the Great Depression." },
    { year: 1945, event: "The United Nations officially came into existence." },
  ],
  "10-31": [
    { year: 1517, event: "Martin Luther posted his 95 Theses, beginning the Protestant Reformation." },
    { year: 1926, event: "Harry Houdini, the famous magician, died in Detroit." },
    { year: 2011, event: "The global population was estimated to reach 7 billion." },
  ],
  "11-5": [
    { year: 1605, event: "The Gunpowder Plot to blow up the English Parliament was foiled." },
    { year: 1854, event: "The Battle of Inkerman took place during the Crimean War." },
    { year: 1955, event: "The first McDonald's franchise opened in Des Plaines, Illinois." },
  ],
  "11-9": [
    { year: 1799, event: "Napoleon Bonaparte overthrew the French Directory in a coup." },
    { year: 1989, event: "The Berlin Wall fell, marking the end of the Cold War division." },
    { year: 2005, event: "The first YouTube video with over 1 million views was uploaded." },
  ],
  "11-19": [
    { year: 1863, event: "Abraham Lincoln delivered the Gettysburg Address." },
    { year: 1969, event: "Pelé scored his 1,000th career goal." },
    { year: 2013, event: "The first bitcoin ATM was installed in Vancouver, Canada." },
  ],
  "11-22": [
    { year: 1963, event: "President John F. Kennedy was assassinated in Dallas, Texas." },
    { year: 1975, event: "Juan Carlos I became King of Spain after Francisco Franco's death." },
    { year: 2005, event: "Angela Merkel became the first female Chancellor of Germany." },
  ],
  "11-30": [
    { year: 1782, event: "British and American negotiators signed preliminary peace articles in Paris." },
    { year: 1936, event: "The world's first regularly scheduled television broadcast aired in London." },
    { year: 1966, event: "Barbados gained independence from the United Kingdom." },
  ],
  "12-1": [
    { year: 1913, event: "The Ford Motor Company introduced the first moving assembly line." },
    { year: 1955, event: "Rosa Parks refused to give up her seat on a Montgomery bus." },
    { year: 1990, event: "The Channel Tunnel between England and France was completed." },
  ],
  "12-10": [
    { year: 1868, event: "The first traffic light was installed outside the Houses of Parliament in London." },
    { year: 1901, event: "The first Nobel Prizes were awarded." },
    { year: 1948, event: "The Universal Declaration of Human Rights was adopted by the UN." },
  ],
  "12-14": [
    { year: 1900, event: "Max Planck presented his quantum theory to the German Physical Society." },
    { year: 1911, event: "Roald Amundsen became the first person to reach the South Pole." },
    { year: 2012, event: "A mass shooting occurred at Sandy Hook Elementary School in Connecticut." },
  ],
  "12-17": [
    { year: 1903, event: "The Wright brothers achieved the first powered flight at Kitty Hawk." },
    { year: 1969, event: "Project Blue Book, the UFO investigation, was terminated." },
    { year: 2010, event: "The Arab Spring began with protests in Tunisia." },
  ],
  "12-21": [
    { year: 1620, event: "The Pilgrims landed at Plymouth Rock in Massachusetts." },
    { year: 1898, event: "Marie and Pierre Curie discovered radium." },
    { year: 1988, event: "Pan Am Flight 103 was bombed over Lockerbie, Scotland, killing 270." },
  ],
  "12-25": [
    { year: 800, event: "Charlemagne was crowned Emperor of the Romans by Pope Leo III." },
    { year: 1776, event: "George Washington crossed the Delaware River in a surprise attack." },
    { year: 1991, event: "The Soviet Union was officially dissolved." },
  ],
  "12-31": [
    { year: 1879, event: "Thomas Edison demonstrated the first practical incandescent light bulb." },
    { year: 1999, event: "Y2K concerns led to worldwide preparations as the millennium turned." },
    { year: 2004, event: "Taipei 101 became the tallest building in the world." },
  ],
};

// For days not in the DB, show a generic message or nearby events
function getHistoricalEvents(month: number, day: number): Array<{ year: number; event: string }> {
  const key = `${month}-${day}`;
  if (historicalEvents[key]) return historicalEvents[key];
  // Fallback: show events from nearby days
  for (let d = day - 1; d >= Math.max(1, day - 3); d--) {
    const fallback = historicalEvents[`${month}-${d}`];
    if (fallback) return fallback.slice(0, 2);
  }
  for (let d = day + 1; d <= Math.min(31, day + 3); d++) {
    const fallback = historicalEvents[`${month}-${d}`];
    if (fallback) return fallback.slice(0, 2);
  }
  return [];
}

// --- Utility functions ---
function getISOWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function PerpetualCalendarClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
const pc = (dict as any)?.perpetualCalendar || {};
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [country, setCountry] = useState("us");
  const [selectedDate, setSelectedDate] = useState<{ year: number; month: number; day: number } | null>(null);

  const holidays = useMemo(() => getHolidays(year, country), [year, country]);

  // Build calendar grid
  const calendar = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    let startDay = firstDay.getDay() - 1; // Monday=0
    if (startDay < 0) startDay = 6;

    const daysInPrevMonth = getDaysInMonth(year, month - 1);
    const daysInMonth = getDaysInMonth(year, month);

    const weeks: Array<{
      days: Array<{
        day: number;
        month: number;
        year: number;
        isCurrentMonth: boolean;
        isWeekend: boolean;
        isToday: boolean;
        holiday?: { name: string; type: "public" | "observance" };
      }>;
      weekNumber: number;
    }> = [];

    let dayCount = 1;
    let nextMonthDay = 1;
    let prevMonthDay = daysInPrevMonth - startDay + 1;

    const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalCells; i += 7) {
      const weekDays: typeof weeks[0]["days"] = [];
      let weekNumDate: Date | null = null;

      for (let j = 0; j < 7; j++) {
        const cellIndex = i + j;
        let cellDay: number, cellMonth: number, cellYear: number, isCurrentMonth: boolean;

        if (cellIndex < startDay) {
          cellDay = prevMonthDay + cellIndex;
          cellMonth = month - 1;
          cellYear = month === 0 ? year - 1 : year;
          isCurrentMonth = false;
        } else if (cellIndex < startDay + daysInMonth) {
          cellDay = dayCount++;
          cellMonth = month;
          cellYear = year;
          isCurrentMonth = true;
        } else {
          cellDay = nextMonthDay++;
          cellMonth = month + 1;
          cellYear = month === 11 ? year + 1 : year;
          isCurrentMonth = false;
        }

        const date = new Date(cellYear, cellMonth, cellDay);
        const dow = date.getDay();
        const isWeekend = dow === 0 || dow === 6;
        const isToday =
          cellYear === now.getFullYear() &&
          cellMonth === now.getMonth() &&
          cellDay === now.getDate();

        const holidayKey = `${cellMonth}-${cellDay}`;
        const holiday = holidays[holidayKey];

        if (j === 0 || !weekNumDate) weekNumDate = date;

        weekDays.push({
          day: cellDay,
          month: cellMonth,
          year: cellYear,
          isCurrentMonth,
          isWeekend,
          isToday,
          holiday,
        });
      }

      weeks.push({
        days: weekDays,
        weekNumber: weekNumDate ? getISOWeekNumber(weekNumDate) : 0,
      });
    }

    return weeks;
  }, [year, month, holidays]);

  const yearOptions = useMemo(() => {
    const years: number[] = [];
    for (let y = 1900; y <= 2100; y++) years.push(y);
    return years;
  }, []);

  const selectedDateInfo = useMemo(() => {
    if (!selectedDate) return null;
    const d = new Date(selectedDate.year, selectedDate.month, selectedDate.day);
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const holidayKey = `${selectedDate.month}-${selectedDate.day}`;
    const holiday = holidays[holidayKey];
    const events = getHistoricalEvents(selectedDate.month, selectedDate.day);
    const weekNum = getISOWeekNumber(d);

    // Calculate day of year
    const startOfYear = new Date(selectedDate.year, 0, 1);
    const dayOfYear = Math.floor((d.getTime() - startOfYear.getTime()) / 86400000) + 1;

    return {
      date: d,
      dayName: dayNames[d.getDay()],
      weekNumber: weekNum,
      dayOfYear,
      holiday,
      events,
    };
  }, [selectedDate, holidays]);

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      {/* Controls */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {pc.year || "Year"}
          </label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            {yearOptions.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {pc.month || "Month"}
          </label>
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            {MONTH_NAMES.map((name, i) => (
              <option key={i} value={i}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {pc.country || "Country"}
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick nav buttons */}
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => { setMonth(0); }}
          className="rounded-lg bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
        >
          Jan
        </button>
        <button
          onClick={() => { setMonth(3); }}
          className="rounded-lg bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
        >
          Apr
        </button>
        <button
          onClick={() => { setMonth(6); }}
          className="rounded-lg bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
        >
          Jul
        </button>
        <button
          onClick={() => { setMonth(9); }}
          className="rounded-lg bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
        >
          Oct
        </button>
        <button
          onClick={() => { setYear(now.getFullYear()); setMonth(now.getMonth()); }}
          className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700"
        >
          {pc.today || "Today"}
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Header */}
          <div className="mb-2 flex items-center justify-between">
            <button
              onClick={() => {
                if (month === 0) { setYear(year - 1); setMonth(11); }
                else setMonth(month - 1);
              }}
              className="rounded-lg bg-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              ← {pc.prev || "Prev"}
            </button>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              {MONTH_NAMES[month]} {year}
            </h2>
            <button
              onClick={() => {
                if (month === 11) { setYear(year + 1); setMonth(0); }
                else setMonth(month + 1);
              }}
              className="rounded-lg bg-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              {pc.next || "Next"} →
            </button>
          </div>

          <div className="w-full">
            {/* Day headers */}
            <div className="grid grid-cols-8 gap-0 border-b border-zinc-200 dark:border-zinc-700">
              <div className="p-2 text-center text-xs font-medium text-zinc-400">{pc.week || "Wk"}</div>
              {DAY_NAMES.map((d) => (
                <div key={d} className="p-2 text-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {d}
                </div>
              ))}
            </div>

            {/* Week rows */}
            {calendar.map((week, wi) => (
              <div key={wi} className="grid grid-cols-8 gap-0 border-b border-zinc-100 dark:border-zinc-800">
                {/* Week number */}
                <div className="flex items-center justify-center p-2 text-xs font-medium text-zinc-400">
                  {week.weekNumber}
                </div>
                {week.days.map((d, di) => {
                  const isSelected =
                    selectedDate &&
                    selectedDate.year === d.year &&
                    selectedDate.month === d.month &&
                    selectedDate.day === d.day;

                  return (
                    <button
                      key={di}
                      onClick={() => setSelectedDate({ year: d.year, month: d.month, day: d.day })}
                      className={`relative flex min-h-[56px] flex-col items-start justify-start p-1.5 text-left transition-colors ${
                        isSelected
                          ? "bg-blue-100 dark:bg-blue-900/50"
                          : d.isWeekend && d.isCurrentMonth
                          ? "bg-amber-50 dark:bg-amber-900/20"
                          : ""
                      } hover:bg-zinc-100 dark:hover:bg-zinc-800`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          d.isToday
                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white"
                            : d.isCurrentMonth
                            ? d.isWeekend
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-zinc-800 dark:text-zinc-200"
                            : "text-zinc-300 dark:text-zinc-600"
                        }`}
                      >
                        {d.day}
                      </span>
                      {d.holiday && d.isCurrentMonth && (
                        <span
                          className={`mt-0.5 line-clamp-1 max-w-full truncate text-[10px] font-medium ${
                            d.holiday.type === "public"
                              ? "text-red-600 dark:text-red-400"
                              : "text-orange-500 dark:text-orange-400"
                          }`}
                        >
                          {d.holiday.name}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-red-500" /> {pc.publicHoliday || "Public Holiday"}
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-orange-400" /> {pc.observance || "Observance"}
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-600" /> {pc.todayLegend || "Today"}
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-amber-200 dark:bg-amber-800" /> {pc.weekend || "Weekend"}
        </span>
      </div>

      {/* Selected Date Panel */}
      {selectedDateInfo && (
        <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {selectedDateInfo.date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h3>
              <div className="mt-1 flex gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                <span>{pc.weekPrefix || "Week"} {selectedDateInfo.weekNumber}</span>
                <span>{pc.dayOfYear || "Day"} {selectedDateInfo.dayOfYear} {pc.of || "of"} {year}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedDate(null)}
              className="rounded-lg bg-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            >
              ✕
            </button>
          </div>

          {selectedDateInfo.holiday && (
            <div
              className={`mb-4 rounded-lg p-3 ${
                selectedDateInfo.holiday.type === "public"
                  ? "bg-red-50 dark:bg-red-950"
                  : "bg-orange-50 dark:bg-orange-950"
              }`}
            >
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                {selectedDateInfo.holiday.type === "public" ? `🔴 ${pc.publicHoliday || "Public Holiday"}` : `🟠 ${pc.observance || "Observance"}`}
              </div>
              <div className="text-lg font-bold text-zinc-900 dark:text-white">
                {selectedDateInfo.holiday.name}
              </div>
            </div>
          )}

          <div>
            <h4 className="mb-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              {pc.onThisDay || "On This Day in History"}
            </h4>
            {selectedDateInfo.events.length > 0 ? (
              <ul className="space-y-2">
                {selectedDateInfo.events.map((ev, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 rounded bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {ev.year}
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-400">{ev.event}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-zinc-400">{pc.noEvents || "No recorded events for this date."}</p>
            )}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
