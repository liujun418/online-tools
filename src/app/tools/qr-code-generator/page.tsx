import type { Metadata } from "next";
import QRCodeGeneratorClient from "./QRCodeGeneratorClient";

export const metadata: Metadata = {
  title: "QR Code Generator | ToolBoxOnline",
  description: "Generate QR codes from text, URLs, emails, or any string. Free online QR code generator with download as PNG. No signup required.",
  keywords: "qr code generator, qr code maker, text to qr code, url qr code generator, free qr code, online qr code creator, download qr code",
  alternates: { canonical: "/tools/qr-code-generator" },
};

export default function QRCodeGeneratorPage() {
  return <QRCodeGeneratorClient />;
}
