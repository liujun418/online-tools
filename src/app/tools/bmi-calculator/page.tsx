import type { Metadata } from "next";
import BmiCalculatorClient from "./BmiCalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator | ToolBoxOnline",
  description: "Calculate your Body Mass Index (BMI) and see your weight category. Free online BMI calculator.",
  keywords: "bmi calculator, body mass index calculator, calculate bmi online, bmi calculator metric, weight category, is my bmi healthy",
  alternates: { canonical: "/tools/bmi-calculator" },
};

export default function BmiCalculatorPage() {
  return <BmiCalculatorClient />;
}
