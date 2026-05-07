"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

const metadata = {
  title: "Calorie Calculator",
  description:
    "Estimate daily calorie needs based on age, weight, height, and activity level.",
  keywords: [
    "calorie calculator",
    "daily calorie needs",
    "BMR calculator",
    "TDEE calculator",
    "how many calories do I need",
    "calorie intake calculator",
  ],
};

export default function CalorieCalculatorClient({ locale = "en", dict }: { locale?: string; dict?: Record<string, unknown> } = {}) {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("30");
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [activity, setActivity] = useState("1.55");
  const cc = (dict as any)?.calorieCalculator || {};

  const result = useMemo(() => {
    const a = parseFloat(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (isNaN(a) || isNaN(w) || isNaN(h)) return null;
    // Mifflin-St Jeor equation
    let bmr = 10 * w + 6.25 * h - 5 * a;
    bmr += gender === "male" ? 5 : -161;
    const tdee = Math.round(bmr * parseFloat(activity));
    bmr = Math.round(bmr);
    return {
      bmr,
      tdee,
      loseWeight: tdee - 500,
      maintain: tdee,
      gainWeight: tdee + 500,
    };
  }, [gender, age, weight, height, activity]);

  return (
    <ToolLayout {...metadata} locale={locale as any} dict={dict}>
      <div className="flex flex-wrap gap-4">
        <div className="flex gap-2">
          <button onClick={() => setGender("male")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${gender === "male" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>{cc.male || "Male"}</button>
          <button onClick={() => setGender("female")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${gender === "female" ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>{cc.female || "Female"}</button>
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-4">
        {[
          [cc.age || "Age", cc.years || "years"] as const,
          [cc.weight || "Weight", cc.kg || "kg"] as const,
          [cc.height || "Height", cc.cm || "cm"] as const,
        ].map(([label, unit], idx) => {
          const values = [age, weight, height];
          const setters = [setAge, setWeight, setHeight];
          return (
          <div key={label}>
            <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {label} ({unit})
            </label>
            <input
              type="number"
              value={values[idx] as string}
              onChange={(e) => (setters[idx] as (v: string) => void)(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
            />
          </div>
          );
        })}
        <div>
          <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {cc.activityLevel || "Activity Level"}
          </label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <option value="1.2">{cc.act_sedentary || "Sedentary (little/no exercise)"}</option>
            <option value="1.375">{cc.act_light || "Light (1-3 days/week)"}</option>
            <option value="1.55">{cc.act_moderate || "Moderate (3-5 days/week)"}</option>
            <option value="1.725">{cc.act_active || "Active (6-7 days/week)"}</option>
            <option value="1.9">{cc.act_very || "Very Active (intense daily)"}</option>
          </select>
        </div>
      </div>

      {result && (
        <>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">{cc.bmr || "BMR"}</div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">{result.bmr} {cc.cal || "cal"}</div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">{cc.tdee || "TDEE (Maintenance)"}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{result.tdee} {cc.cal || "cal"}</div>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center dark:border-green-800 dark:bg-green-950">
              <div className="text-xs text-green-600 dark:text-green-400">{cc.weightLoss || "Weight Loss"}</div>
              <div className="text-xl font-bold text-green-700 dark:text-green-300">{result.loseWeight} {cc.cal || "cal"}</div>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center dark:border-blue-800 dark:bg-blue-950">
              <div className="text-xs text-blue-600 dark:text-blue-400">{cc.maintainWeight || "Maintain Weight"}</div>
              <div className="text-xl font-bold text-blue-700 dark:text-blue-300">{result.maintain} {cc.cal || "cal"}</div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center dark:border-red-800 dark:bg-red-950">
              <div className="text-xs text-red-600 dark:text-red-400">{cc.weightGain || "Weight Gain"}</div>
              <div className="text-xl font-bold text-red-700 dark:text-red-300">{result.gainWeight} {cc.cal || "cal"}</div>
            </div>
          </div>
        </>
      )}
    </ToolLayout>
  );
}
