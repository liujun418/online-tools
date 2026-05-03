import type { Metadata } from "next";
import JsonFormatterClient from "./JsonFormatterClient";

export const metadata: Metadata = {
  title: "JSON Formatter | ToolBoxOnline",
  description: "Format, minify, and validate JSON data with syntax highlighting. Free online JSON formatter tool.",
  keywords: "json formatter, json validator, json beautifier, json minifier, format json online, json pretty print, validate json",
  alternates: { canonical: "/tools/json-formatter" },
};

export default function JsonFormatterPage() {
  return <JsonFormatterClient />;
}
