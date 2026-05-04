"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index (BMI) and see your weight category. Free online BMI calculator.",
  keywords: [
    "bmi calculator",
    "body mass index calculator",
    "calculate bmi online",
    "bmi calculator metric",
    "weight category",
    "is my bmi healthy",
  ],
  toolId: "bmi-calculator",
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

  const hasError = (weight !== "" && height !== "" && bmi === null);

  const category = bmi
    ? bmi < 18.5
      ? { label: "Underweight", color: "text-blue-600 dark:text-blue-400" }
      : bmi < 25
        ? { label: "Normal weight", color: "text-green-600 dark:text-green-400" }
        : bmi < 30
          ? { label: "Overweight", color: "text-yellow-600 dark:text-yellow-400" }
          : { label: "Obese", color: "text-red-600 dark:text-red-400" }
    : null;

  // BMI scale: 15 to 40 (range of 25)
  const bmiMin = 15;
  const bmiMax = 40;
  const markerPosition = bmi ? Math.min(Math.max(((bmi - bmiMin) / (bmiMax - bmiMin)) * 100, 0), 100) : 0;

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
            className={`w-24 rounded-lg border bg-white px-3 py-2 text-sm transition-colors dark:bg-zinc-900 ${
              hasError ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 dark:border-red-700" : "border-zinc-300 dark:border-zinc-700"
            } focus:outline-none focus:ring-2`}
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
            className={`w-24 rounded-lg border bg-white px-3 py-2 text-sm transition-colors dark:bg-zinc-900 ${
              hasError ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 dark:border-red-700" : "border-zinc-300 dark:border-zinc-700"
            } focus:outline-none focus:ring-2`}
          />
        </div>
      </div>

      {hasError && (
        <p className="mt-4 text-sm text-red-500 dark:text-red-400">
          Please enter valid positive numbers for weight and height.
        </p>
      )}

      {bmi !== null && category && (
        <div className="mt-8 text-center">
          <div className="text-6xl font-bold">{bmi}</div>
          <div className={`mt-2 text-xl font-medium ${category.color}`}>
            {category.label}
          </div>
          <div className="relative mx-auto mt-6 max-w-md">
            <div className="flex h-3 overflow-hidden rounded-full">
              <div className="bg-blue-400" style={{ width: `${((18.5 - bmiMin) / (bmiMax - bmiMin)) * 100}%` }} />
              <div className="bg-green-400" style={{ width: `${((25 - 18.5) / (bmiMax - bmiMin)) * 100}%` }} />
              <div className="bg-yellow-400" style={{ width: `${((30 - 25) / (bmiMax - bmiMin)) * 100}%` }} />
              <div className="bg-red-400" style={{ width: `${((bmiMax - 30) / (bmiMax - bmiMin)) * 100}%` }} />
            </div>
            <div
              className="absolute -top-1 h-5 w-0.5 bg-zinc-800 dark:bg-white"
              style={{ left: `${markerPosition}%`, transform: "translateX(-50%)" }}
            />
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
