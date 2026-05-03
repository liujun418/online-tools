import type { Metadata } from "next";
import Base64ConverterClient from "./Base64ConverterClient";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder | ToolBoxOnline",
  description: "Encode and decode text to and from Base64 format. Free online Base64 tool.",
  keywords: "base64 encoder, base64 decoder, base64 converter, encode base64 online, decode base64, base64 online tool",
  alternates: { canonical: "/tools/base64-converter" },
};

export default function Base64ConverterPage() {
  return <Base64ConverterClient />;
}
