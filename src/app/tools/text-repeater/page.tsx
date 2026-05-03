import type { Metadata } from "next";
import TextRepeaterClient from "./TextRepeaterClient";

export const metadata: Metadata = {
  title: "Text Repeater | ToolBoxOnline",
  description: "Repeat any text or string a specified number of times. Free online text repeater tool.",
  keywords: "text repeater, repeat text online, string repeater, copy paste text multiple times, duplicate text online",
  alternates: { canonical: "/tools/text-repeater" },
};

export default function TextRepeaterPage() {
  return <TextRepeaterClient />;
}
