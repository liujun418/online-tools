import type { Metadata } from "next";
import UrlEncoderClient from "./UrlEncoderClient";

export const metadata: Metadata = {
  title: "URL Encoder/Decoder | ToolBoxOnline",
  description: "Encode or decode URLs and URL components. Free online URL encoding tool.",
  keywords: "url encoder, url decoder, url encode online, url decode online, percent encoding, encodeURIComponent, url encoding tool",
  alternates: { canonical: "/tools/url-encoder" },
};

export default function UrlEncoderPage() {
  return <UrlEncoderClient />;
}
