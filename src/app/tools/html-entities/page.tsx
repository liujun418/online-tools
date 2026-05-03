import type { Metadata } from "next";
import HtmlEntitiesClient from "./HtmlEntitiesClient";

export const metadata: Metadata = {
  title: "HTML Entity Encoder | ToolBoxOnline",
  description: "Encode or decode HTML entities and special characters safely. Free online HTML entity encoder.",
  keywords: "html entity encoder, html entity decoder, encode html entities, decode html entities, escape html characters, unescape html, special characters encoder",
  alternates: { canonical: "/tools/html-entities" },
};

export default function HtmlEntitiesPage() {
  return <HtmlEntitiesClient />;
}
