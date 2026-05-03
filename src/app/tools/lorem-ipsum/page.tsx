import type { Metadata } from "next";
import LoremIpsumClient from "./LoremIpsumClient";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator | ToolBoxOnline",
  description: "Generate placeholder Lorem Ipsum text for your designs and mockups. Choose number of paragraphs.",
  keywords: "lorem ipsum generator, placeholder text generator, lorem ipsum, dummy text generator, filler text, lipsum generator",
  alternates: { canonical: "/tools/lorem-ipsum" },
};

export default function LoremIpsumPage() {
  return <LoremIpsumClient />;
}
