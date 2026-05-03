import type { Metadata } from "next";
import ColorConverterClient from "./ColorConverterClient";

export const metadata: Metadata = {
  title: "Color Converter | ToolBoxOnline",
  description: "Convert colors between HEX, RGB, and HSL formats with live preview. Free online color converter.",
  keywords: "color converter, hex to rgb, rgb to hsl, color format converter, hex color converter, rgb color picker, hsl color converter",
  alternates: { canonical: "/tools/color-converter" },
};

export default function ColorConverterPage() {
  return <ColorConverterClient />;
}
