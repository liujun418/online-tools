"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Unit Converter",
  description:
    "Convert between length, weight, temperature, and other units. Free online unit converter.",
  keywords: [
    "unit converter",
    "length converter",
    "weight converter",
    "temperature converter",
    "metric to imperial",
    "unit conversion online",
    "km to miles",
    "kg to lbs",
  ],
};

const unitData: Record<string, { units: Record<string, number> }> = {
  Length: {
    units: { Meter: 1, Kilometer: 1000, Centimeter: 0.01, Millimeter: 0.001, Mile: 1609.344, Yard: 0.9144, Foot: 0.3048, Inch: 0.0254 },
  },
  Weight: {
    units: { Kilogram: 1, Gram: 0.001, Milligram: 0.000001, Pound: 0.453592, Ounce: 0.0283495, Ton: 1000 },
  },
  Speed: {
    units: { "m/s": 1, "km/h": 0.277778, "mph": 0.44704, Knot: 0.514444 },
  },
};

const tempUnits = ["Celsius", "Fahrenheit", "Kelvin"];

function convertTemp(value: number, from: string, to: string): number {
  const celsius = from === "Celsius" ? value : from === "Fahrenheit" ? (value - 32) * 5 / 9 : value - 273.15;
  return to === "Celsius" ? celsius : to === "Fahrenheit" ? celsius * 9 / 5 + 32 : celsius + 273.15;
}

const unitTranslations: Record<string, Record<string, string>> = {
  Length: { es: "Longitud", ar: "الطول" },
  Weight: { es: "Peso", ar: "الوزن" },
  Speed: { es: "Velocidad", ar: "السرعة" },
  Temperature: { es: "Temperatura", ar: "درجة الحرارة" },
  Meter: { es: "Metro", ar: "متر" },
  Kilometer: { es: "Kilómetro", ar: "كيلومتر" },
  Centimeter: { es: "Centímetro", ar: "سنتيمتر" },
  Millimeter: { es: "Milímetro", ar: "مليمتر" },
  Mile: { es: "Milla", ar: "ميل" },
  Yard: { es: "Yarda", ar: "ياردة" },
  Foot: { es: "Pie", ar: "قدم" },
  Inch: { es: "Pulgada", ar: "بوصة" },
  Kilogram: { es: "Kilogramo", ar: "كيلوغرام" },
  Gram: { es: "Gramo", ar: "غرام" },
  Milligram: { es: "Miligramo", ar: "ملليغرام" },
  Pound: { es: "Libra", ar: "رطل" },
  Ounce: { es: "Onza", ar: "أونصة" },
  Ton: { es: "Tonelada", ar: "طن" },
  Knot: { es: "Nudo", ar: "عقدة" },
  Celsius: { es: "Celsius", ar: "سيليزيوس" },
  Fahrenheit: { es: "Fahrenheit", ar: "فهرنهايت" },
  Kelvin: { es: "Kelvin", ar: "كلفن" },
};

function getLocalized(locale: string, key: string, fallback: string): string {
  return unitTranslations[key]?.[locale] || fallback;
}

export default function UnitConverterClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [cat, setCat] = useState("Length");
  const [fromUnit, setFromUnit] = useState("Meter");
  const [toUnit, setToUnit] = useState("Kilometer");
  const [value, setValue] = useState("1");
  const uc = (dict as any)?.unitConverter || {};

  const unitList = cat === "Temperature" ? tempUnits : Object.keys(unitData[cat]?.units || {});

  const result = useMemo(() => {
    const v = parseFloat(value);
    if (isNaN(v)) return null;
    if (cat === "Temperature") return convertTemp(v, fromUnit, toUnit);
    const units = unitData[cat]?.units;
    if (!units) return null;
    return (v * units[fromUnit]) / units[toUnit];
  }, [cat, fromUnit, toUnit, value]);

  function handleCatChange(newCat: string) {
    setCat(newCat);
    const units = newCat === "Temperature" ? tempUnits : Object.keys(unitData[newCat]?.units || {});
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
  }

  const catOptions = Object.keys(unitData).concat("Temperature");

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="flex flex-wrap items-center gap-4">
        <select
          value={cat}
          onChange={(e) => handleCatChange(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        >
          {catOptions.map((c) => (
            <option key={c}>{getLocalized(locale, c, uc[c.toLowerCase()] || c)}</option>
          ))}
        </select>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-32 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        >
          {unitList.map((u) => <option key={u}>{getLocalized(locale, u, u)}</option>)}
        </select>
        <span className="text-zinc-400">→</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        >
          {unitList.map((u) => <option key={u}>{getLocalized(locale, u, u)}</option>)}
        </select>
      </div>

      {result !== null && (
        <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            {result % 1 === 0 ? result : parseFloat(result.toFixed(6))}
          </div>
          <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {value} {getLocalized(locale, fromUnit, fromUnit)} = {parseFloat(result.toFixed(6))} {getLocalized(locale, toUnit, toUnit)}
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
