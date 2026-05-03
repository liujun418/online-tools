import type { Metadata } from "next";
import UnitConverterClient from "./UnitConverterClient";

export const metadata: Metadata = {
  title: "Unit Converter | ToolBoxOnline",
  description: "Convert between length, weight, temperature, and other units. Free online unit converter.",
  keywords: "unit converter, length converter, weight converter, temperature converter, metric to imperial, unit conversion online, km to miles, kg to lbs",
  alternates: { canonical: "/tools/unit-converter" },
};

export default function UnitConverterPage() {
  return <UnitConverterClient />;
}
