import type { Metadata } from "next";
import BaseConverterClient from "./BaseConverterClient";

export const metadata: Metadata = {
  title: "Number Base Converter | ToolBoxOnline",
  description: "Convert numbers between binary, octal, decimal, and hexadecimal systems. Free online base converter.",
  keywords: "number base converter, binary to decimal, hex to decimal, binary converter, hexadecimal converter, octal to decimal, base converter online",
  alternates: { canonical: "/tools/base-converter" },
};

export default function BaseConverterPage() {
  return <BaseConverterClient />;
}
