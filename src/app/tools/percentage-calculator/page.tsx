import type { Metadata } from "next";
import PercentageCalculatorClient from "./PercentageCalculatorClient";

export const metadata: Metadata = {
  title: "Percentage Calculator | ToolBoxOnline",
  description: "Calculate percentages, percentage change, and percentage of a number. Free online percentage calculator.",
  keywords: "percentage calculator, calculate percentage, percent change calculator, percentage of a number, what percent calculator, percentage formula",
  alternates: { canonical: "/tools/percentage-calculator" },
};

export default function PercentageCalculatorPage() {
  return <PercentageCalculatorClient />;
}
