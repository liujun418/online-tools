import HomeClient from "./HomeClient";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { notFound } from "next/navigation";

const SITE_URL = "https://toolboxonline.club";
const SITE_NAME = "ToolBoxOnline";

const faqs = [
  {
    q: "Is ToolBoxOnline completely free?",
    a: "Yes, all 66+ tools on ToolBoxOnline are completely free to use. No registration required, no hidden fees. We sustain through non-intrusive advertising.",
  },
  {
    q: "What tools are available on ToolBoxOnline?",
    a: "We offer 66+ free online tools across 5 categories: text tools (word counter, case converter), developer tools (JSON formatter, Base64 encoder), calculators (BMI, age, loan), reference tools (IP lookup, color converter), and media tools (wallpapers, GIF search, NASA APOD).",
  },
  {
    q: "Do I need to create an account?",
    a: "No account needed. All our tools work directly in your browser. Just visit the tool page and start using it immediately — no signup, no email, no hassle.",
  },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      {/* Website + Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
            description: "66+ free online tools — text, developer, calculator, reference, and media utilities. No signup required.",
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/${locale}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            sameAs: ["https://ai.toolboxonline.club"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
      <HomeClient locale={locale} dict={dict} />
    </>
  );
}
