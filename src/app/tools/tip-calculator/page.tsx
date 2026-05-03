import type { Metadata } from "next";
import TipCalculatorClient from "./TipCalculatorClient";

export const metadata: Metadata = {
  title: "Tip Calculator | ToolBoxOnline",
  description: "Calculate tip amount, split the bill, and figure out per-person cost. Free online tip calculator for restaurants and dining.",
  keywords: "tip calculator, gratuity calculator, split bill calculator, restaurant tip calculator, tip percentage calculator, bill splitter",
  alternates: { canonical: "/tools/tip-calculator" },
};

export default function TipCalculatorPage() {
  return <TipCalculatorClient />;
}
