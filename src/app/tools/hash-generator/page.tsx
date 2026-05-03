import type { Metadata } from "next";
import HashGeneratorClient from "./HashGeneratorClient";

export const metadata: Metadata = {
  title: "Hash Generator | ToolBoxOnline",
  description: "Generate SHA-1, SHA-256, and SHA-512 hashes from text input. Free online hash generator tool.",
  keywords: "hash generator, sha256 generator, sha1 hash, sha512 hash, hash calculator online, text to hash, sha256 online",
  alternates: { canonical: "/tools/hash-generator" },
};

export default function HashGeneratorPage() {
  return <HashGeneratorClient />;
}
