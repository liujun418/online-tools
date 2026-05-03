import type { Metadata } from "next";
import FancyTextGeneratorClient from "./FancyTextGeneratorClient";

export const metadata: Metadata = {
  title: "Fancy Text Generator | ToolBoxOnline",
  description: "Convert text to fancy Unicode fonts for social media bios, posts, and profiles. Free fancy text generator with bold, italic, script styles.",
  keywords: "fancy text generator, unicode text generator, cool text generator, stylish text generator, font generator for instagram, bold text generator, italic text generator",
  alternates: { canonical: "/tools/fancy-text-generator" },
};

export default function FancyTextPage() {
  return <FancyTextGeneratorClient />;
}
