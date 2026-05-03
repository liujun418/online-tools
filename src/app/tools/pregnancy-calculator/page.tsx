import type { Metadata } from "next";
import PregnancyCalculatorClient from "./PregnancyCalculatorClient";

export const metadata: Metadata = {
  title: "Pregnancy Due Date Calculator | ToolBoxOnline",
  description: "Estimate your due date based on last menstrual period. Free pregnancy calculator with trimester info and key milestones.",
  keywords: "pregnancy calculator, due date calculator, due date calculator pregnancy, pregnancy due date calculator, pregnancy week calculator, EDD calculator, conception date calculator",
  alternates: { canonical: "/tools/pregnancy-calculator" },
};

export default function PregnancyCalculatorPage() {
  return <PregnancyCalculatorClient />;
}
