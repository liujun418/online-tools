import type { Metadata } from "next";
import CompoundInterestClient from "./CompoundInterestClient";

export const metadata: Metadata = {
  title: "Compound Interest Calculator | ToolBoxOnline",
  description: "See how your money grows over time with compound interest calculations. Free compound interest calculator.",
  keywords: "compound interest calculator, compound interest formula, investment growth calculator, savings calculator, compound interest calculator with monthly contributions",
  alternates: { canonical: "/tools/compound-interest" },
};

export default function CompoundInterestPage() {
  return <CompoundInterestClient />;
}
