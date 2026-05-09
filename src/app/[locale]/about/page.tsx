import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const about = (dict as any).about || {};

  return (
    <>
      <Header locale={locale} dict={dict} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {about.title || "About ToolBoxOnline"}
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          {about.subtitle || "Your free, private online toolkit"}
        </p>

        {/* Mission */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {about.mission || "Our Mission"}
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {about.missionText}
          </p>
        </section>

        {/* Features */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {((dict as any).home as any)?.tools || "Tools"} & Features
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {(about.features || []).map((f: { title: string; text: string }, i: number) => (
              <div
                key={i}
                className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Project */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {about.aboutProject || "About This Project"}
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {about.projectText}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            {about.techStack || "Built With"}
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {about.techText}
          </p>
        </section>

        {/* Commitment */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Our Commitment
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
            {(about.commitment || []).map((c: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
