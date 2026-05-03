import type { Metadata } from "next";
import DiscountCalculatorClient from "./DiscountCalculatorClient";

export const metadata: Metadata = {
  title: "Discount Calculator | ToolBoxOnline",
  description: "Calculate discounted price, savings amount, and discount percentage. Free online discount and percentage-off calculator.",
  keywords: "discount calculator, percentage discount, sale price calculator, percent off calculator, savings calculator, price reduction",
  alternates: { canonical: "/tools/discount-calculator" },
};

export default function DiscountCalculatorPage() {
  return <DiscountCalculatorClient />;
}
