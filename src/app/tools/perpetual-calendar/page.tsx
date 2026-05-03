import type { Metadata } from "next";
import PerpetualCalendarClient from "./PerpetualCalendarClient";

export const metadata: Metadata = {
  title: "Perpetual Calendar | ToolBoxOnline",
  description: "Interactive perpetual calendar with holidays for multiple countries, week numbers, and historical events. Click any date to discover what happened on this day in history.",
  keywords: "perpetual calendar, online calendar, world holidays, week number calculator, historical events today, calendar with holidays, public holidays by country, on this day in history",
  alternates: { canonical: "/tools/perpetual-calendar" },
};

export default function PerpetualCalendarPage() {
  return <PerpetualCalendarClient />;
}
