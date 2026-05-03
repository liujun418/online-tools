import type { Metadata } from "next";
import UnixTimestampClient from "./UnixTimestampClient";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter | ToolBoxOnline",
  description: "Convert Unix timestamps to human-readable dates and vice versa. Free online timestamp converter.",
  keywords: "unix timestamp converter, timestamp to date, epoch converter, unix time converter, convert timestamp, epoch to date, current unix timestamp",
  alternates: { canonical: "/tools/unix-timestamp" },
};

export default function UnixTimestampPage() {
  return <UnixTimestampClient />;
}
