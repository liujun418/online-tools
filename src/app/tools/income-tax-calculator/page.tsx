import type { Metadata } from "next";
import IncomeTaxCalculatorClient from "./IncomeTaxCalculatorClient";

export const metadata: Metadata = {
  title: "Income Tax Calculator | ToolBoxOnline",
  description: "Estimate your take-home pay after income tax deductions. Free online income tax calculator.",
  keywords: "income tax calculator, salary calculator, take home pay calculator, net income calculator, paycheck calculator, after tax calculator",
  alternates: { canonical: "/tools/income-tax-calculator" },
};

export default function IncomeTaxCalculatorPage() {
  return <IncomeTaxCalculatorClient />;
}
