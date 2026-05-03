"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index (BMI) and see your weight category. Free online BMI calculator.",
};

export default function BmiCalculatorClient() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const bmi = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;

    let bmiVal: number;
    if (unit === "metric") {
      bmiVal = w / ((h / 100) ** 2);
    } else {
      bmiVal = (w / (h ** 2)) * 703;
    }
    return Math.round(bmiVal * 10) / 10;
  }, [weight, height, unit]);

  const category = bmi
    ? bmi < 18.5
      ? { label: "Underweight", color: "text-blue-600 dark:text-blue-400" }
      : bmi < 25
        ? { label: "Normal weight", color: "text-green-600 dark:text-green-400" }
        : bmi < 30
          ? { label: "Overweight", color: "text-yellow-600 dark:text-yellow-400" }
          : { label: "Obese", color: "text-red-600 dark:text-red-400" }
    : null;

  return (
    <ToolLayout {...metadata}>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => { setUnit("metric"); setWeight(""); setHeight(""); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              unit === "metric" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            }`}
          >
            Metric (kg/cm)
          </button>
          <button
            onClick={() => { setUnit("imperial"); setWeight(""); setHeight(""); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              unit === "imperial" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            }`}
          >
            Imperial (lb/in)
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Weight ({unit === "metric" ? "kg" : "lb"}):
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Height ({unit === "metric" ? "cm" : "in"}):
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-24 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
      </div>

      {bmi !== null && category && (
        <div className="mt-8 text-center">
          <div className="text-6xl font-bold">{bmi}</div>
          <div className={`mt-2 text-xl font-medium ${category.color}`}>
            {category.label}
          </div>
          <div className="mx-auto mt-6 h-3 max-w-md overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <div className="flex h-full">
              <div className="w-[18.5%] bg-blue-400" />
              <div className="w-[11.5%] bg-green-400" />
              <div className="w-[10%] bg-yellow-400" />
              <div className="flex-1 bg-red-400" />
            </div>
          </div>
          <div className="mx-auto mt-1 flex max-w-md justify-between text-xs text-zinc-400">
            <span>Underweight</span>
            <span>Normal</span>
            <span>Overweight</span>
            <span>Obese</span>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
