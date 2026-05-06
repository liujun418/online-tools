import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/lib/i18n";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const contact = (dict as any).contact || {};

  const content: Record<string, { title: string; description: string; email: string; emailAddr: string }> = {
    en: { title: "Contact Us", description: "Have questions or feedback? Reach out to us.", email: "Email", emailAddr: "jzerov@live.com" },
    es: { title: "Contáctanos", description: "¿Tienes preguntas o comentarios? Escríbenos.", email: "Correo electrónico", emailAddr: "jzerov@live.com" },
    ar: { title: "اتصل بنا", description: "لديك أسئلة أو ملاحظات؟ تواصل معنا.", email: "البريد الإلكتروني", emailAddr: "jzerov@live.com" },
  };

  const c = content[locale] || content.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {contact.title || c.title}
      </h1>
      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        {contact.description || c.description}
      </p>
      <div className="mt-8 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          <span className="font-semibold text-zinc-900 dark:text-white">{contact.email || c.email}: </span>
          <a href={`mailto:${c.emailAddr}`} className="text-blue-600 hover:underline">
            {c.emailAddr}
          </a>
        </p>
      </div>
    </div>
  );
}
