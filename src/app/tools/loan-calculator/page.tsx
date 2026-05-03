import type { Metadata } from "next";
import LoanCalculatorClient from "./LoanCalculatorClient";

export const metadata: Metadata = {
  title: "Loan Calculator | ToolBoxOnline",
  description: "Calculate monthly payments, total interest, and amortization for any loan. Free online loan calculator.",
  keywords: "loan calculator, monthly payment calculator, loan payment calculator, amortization calculator, personal loan calculator, calculate loan interest",
  alternates: { canonical: "/tools/loan-calculator" },
};

export default function LoanCalculatorPage() {
  return <LoanCalculatorClient />;
}
