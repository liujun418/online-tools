import type { Metadata } from "next";
import RandomNameGeneratorClient from "./RandomNameGeneratorClient";

export const metadata: Metadata = {
  title: "Random Name Generator | ToolBoxOnline",
  description: "Generate random names for characters, profiles, or testing. Free online name generator with multiple cultural origins.",
  keywords: "random name generator, name generator, fake name generator, character name generator, baby name generator, random names",
  alternates: { canonical: "/tools/random-name-generator" },
};

export default function RandomNamePage() {
  return <RandomNameGeneratorClient />;
}
