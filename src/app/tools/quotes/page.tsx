import type { Metadata } from "next";
import QuotesClient from "./QuotesClient";

export const metadata: Metadata = {
  title: "Famous Quotes Directory | ToolBoxOnline",
  description: "Search and discover famous quotes from world-renowned figures. Filter by person name or quote keyword. Each quote includes source and date.",
  keywords: "famous quotes, inspirational quotes, motivational quotes, quote search, quote by author, famous sayings, wisdom quotes, life quotes",
  alternates: { canonical: "/tools/quotes" },
};

export default function QuotesPage() {
  return <QuotesClient />;
}
