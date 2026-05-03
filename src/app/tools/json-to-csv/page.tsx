import type { Metadata } from "next";
import JsonToCsvClient from "./JsonToCsvClient";

export const metadata: Metadata = {
  title: "JSON to CSV Converter | ToolBoxOnline",
  description: "Convert JSON data to CSV format for spreadsheets and databases. Free online JSON to CSV converter.",
  keywords: "json to csv, convert json to csv, json csv converter, export json to csv, json to excel, json data to csv",
  alternates: { canonical: "/tools/json-to-csv" },
};

export default function JsonToCsvPage() {
  return <JsonToCsvClient />;
}
