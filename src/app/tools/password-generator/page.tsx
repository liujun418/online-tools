import type { Metadata } from "next";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export const metadata: Metadata = {
  title: "Password Generator | ToolBoxOnline",
  description: "Generate strong, secure passwords with customizable length and character options. Free online password generator.",
  keywords: "password generator, strong password generator, random password generator, secure password creator, generate password online, password maker",
  alternates: { canonical: "/tools/password-generator" },
};

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorClient />;
}
