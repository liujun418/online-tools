import type { Metadata } from "next";
import AgeCalculatorClient from "./AgeCalculatorClient";

export const metadata: Metadata = {
  title: "Age Calculator | ToolBoxOnline",
  description: "Calculate exact age in years, months, days, hours and more from any birth date. Free online age calculator.",
  keywords: "age calculator, calculate age from date of birth, birthday calculator, age in years months days, how old am I, date of birth calculator",
  alternates: { canonical: "/tools/age-calculator" },
};

export default function AgeCalculatorPage() {
  return <AgeCalculatorClient />;
}
