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

export default function BmiCalculatorClient({ locale = "en", dict, titleOverride, descriptionOverride }: {
  locale?: string; dict?: Record<string, unknown>;
  titleOverride?: string;
  descriptionOverride?: string;
} = {}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const bmi = (dict as any)?.bmiCalculator || {};

  const bmiVal = useMemo(() => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;
    let val: number;
    if (unit === "metric") {
      val = w / ((h / 100) ** 2);
    } else {
      val = (w / (h ** 2)) * 703;
    }
    return Math.round(val * 10) / 10;
  }, [weight, height, unit]);

  const hasError = weight !== "" && height !== "" && bmiVal === null;

  const getCategory = () => {
    if (!bmiVal) return null;
    if (bmiVal < 18.5) return { label: bmi.underweightLabel || "Underweight", color: "text-blue-600 dark:text-blue-400" };
    if (bmiVal < 25) return { label: bmi.normalLabel || "Normal", color: "text-green-600 dark:text-green-400" };
    if (bmiVal < 30) return { label: bmi.overweightLabel || "Overweight", color: "text-yellow-600 dark:text-yellow-400" };
    return { label: bmi.obeseLabel || "Obese", color: "text-red-600 dark:text-red-400" };
  };

  const category = getCategory();

  const bmiMin = 15;
  const bmiMax = 40;
  const markerPosition = bmiVal ? Math.min(Math.max(((bmiVal - bmiMin) / (bmiMax - bmiMin)) * 100, 0), 100) : 0;

  return (
    <ToolLayout {...metadata}
        title={titleOverride || metadata.title}
        description={descriptionOverride || metadata.description} locale={locale as any} dict={dict}>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => { setUnit("metric"); setWeight(""); setHeight(""); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              unit === "metric" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            }`}
          >
            {bmi.metric || "Metric (kg/cm)"}
          </button>
          <button
            onClick={() => { setUnit("imperial"); setWeight(""); setHeight(""); }}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              unit === "imperial" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            }`}
          >
            {bmi.imperial || "Imperial (lb/in)"}
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {bmi.weight || "Weight"} ({unit === "metric" ? "kg" : "lb"}):
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
            {bmi.height || "Height"} ({unit === "metric" ? "cm" : "in"}):
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
          {bmi.error || "Please enter valid positive numbers for weight and height."}
        </p>
      )}

      {bmiVal !== null && category && (
        <div className="mt-8 text-center">
          <div className="text-6xl font-bold">{bmiVal}</div>
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
            <span>{bmi.underweightLabel || "Underweight"}</span>
            <span>{bmi.normalLabel || "Normal"}</span>
            <span>{bmi.overweightLabel || "Overweight"}</span>
            <span>{bmi.obeseLabel || "Obese"}</span>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
