import type { Metadata } from "next";
import MortgageCalculatorClient from "./MortgageCalculatorClient";

export const metadata: Metadata = {
  title: "Mortgage Calculator | ToolBoxOnline",
  description: "Estimate your monthly mortgage payment with principal, interest, taxes, and insurance. Free mortgage calculator.",
  keywords: "mortgage calculator, home loan calculator, monthly mortgage payment, mortgage payment calculator, house payment calculator, amortization schedule",
  alternates: { canonical: "/tools/mortgage-calculator" },
};

export default function MortgageCalculatorPage() {
  return <MortgageCalculatorClient />;
}
