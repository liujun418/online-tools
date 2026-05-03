import type { Metadata } from "next";
import CssMinifierClient from "./CssMinifierClient";

export const metadata: Metadata = {
  title: "CSS Minifier | ToolBoxOnline",
  description: "Minify and beautify CSS code. Remove whitespace and comments for production.",
  keywords: "css minifier, css compressor, minify css online, css beautifier, css formatter, remove css whitespace",
  alternates: { canonical: "/tools/css-minifier" },
};

export default function CssMinifierPage() {
  return <CssMinifierClient />;
}
