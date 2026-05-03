import type { Metadata } from "next";
import RoiCalculatorClient from "./RoiCalculatorClient";

export const metadata: Metadata = {
  title: "ROI Calculator | ToolBoxOnline",
  description: "Calculate return on investment (ROI) percentage and profit. Free online ROI calculator.",
  keywords: "roi calculator, return on investment calculator, roi percentage, investment return calculator, profit calculator, roi formula",
  alternates: { canonical: "/tools/roi-calculator" },
};

export default function RoiCalculatorPage() {
  return <RoiCalculatorClient />;
}
