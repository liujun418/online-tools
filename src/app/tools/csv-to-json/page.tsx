import type { Metadata } from "next";
import CsvToJsonClient from "./CsvToJsonClient";

export const metadata: Metadata = {
  title: "CSV to JSON Converter | ToolBoxOnline",
  description: "Convert CSV data to JSON format for APIs and web applications. Free online CSV to JSON converter.",
  keywords: "csv to json, convert csv to json, csv json converter, csv to json online, import csv to json, csv data to json",
  alternates: { canonical: "/tools/csv-to-json" },
};

export default function CsvToJsonPage() {
  return <CsvToJsonClient />;
}
