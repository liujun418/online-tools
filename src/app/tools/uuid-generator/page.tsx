import type { Metadata } from "next";
import UuidGeneratorClient from "./UuidGeneratorClient";

export const metadata: Metadata = {
  title: "UUID Generator | ToolBoxOnline",
  description: "Generate random UUID v4 identifiers for development. Free online UUID generator tool.",
  keywords: "uuid generator, guid generator, uuid v4, generate uuid online, random uuid, unique identifier generator",
  alternates: { canonical: "/tools/uuid-generator" },
};

export default function UuidGeneratorPage() {
  return <UuidGeneratorClient />;
}
