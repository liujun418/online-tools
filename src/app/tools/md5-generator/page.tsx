import type { Metadata } from "next";
import MD5GeneratorClient from "./MD5GeneratorClient";

export const metadata: Metadata = {
  title: "MD5 Hash Generator | ToolBoxOnline",
  description: "Generate MD5 hash from any text input instantly. Free online MD5 hash generator for text, passwords, and strings.",
  keywords: "md5 hash generator, md5 encrypt, md5 online, text to md5, md5 calculator, md5 generator, string to md5 hash",
  alternates: { canonical: "/tools/md5-generator" },
};

export default function MD5GeneratorPage() {
  return <MD5GeneratorClient />;
}
