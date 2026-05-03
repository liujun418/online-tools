import type { Metadata } from "next";
import CalorieCalculatorClient from "./CalorieCalculatorClient";

export const metadata: Metadata = {
  title: "Calorie Calculator | ToolBoxOnline",
  description: "Estimate daily calorie needs based on age, weight, height, and activity level. Free calorie calculator.",
  keywords: "calorie calculator, daily calorie needs, BMR calculator, TDEE calculator, how many calories do I need, calorie intake calculator",
  alternates: { canonical: "/tools/calorie-calculator" },
};

export default function CalorieCalculatorPage() {
  return <CalorieCalculatorClient />;
}
