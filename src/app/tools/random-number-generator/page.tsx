import type { Metadata } from "next";
import RandomNumberClient from "./RandomNumberClient";

export const metadata: Metadata = {
  title: "Random Number Generator | ToolBoxOnline",
  description: "Generate random numbers within a specified range. Free online RNG with customizable min, max, and quantity.",
  keywords: "random number generator, random number picker, number generator, RNG, random integer, random decimal, lottery number generator",
  alternates: { canonical: "/tools/random-number-generator" },
};

export default function RandomNumberPage() {
  return <RandomNumberClient />;
}
