import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/lib/i18n";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const terms = (dict as any).terms || {};

  const content: Record<string, { title: string; text: string }> = {
    en: { title: "Terms of Service", text: "By using ToolBoxOnline, you agree to these terms. All tools process data locally in your browser. We do not store or transmit your data. The tools are provided 'as is' without warranty. We are not responsible for any errors or data loss. Use at your own risk." },
    es: { title: "Términos de Servicio", text: "Al usar ToolBoxOnline, aceptas estos términos. Todas las herramientas procesan datos localmente en tu navegador. No almacenamos ni transmitimos tus datos. Las herramientas se proporcionan 'tal cual' sin garantía. No somos responsables de errores o pérdida de datos. Úsalas bajo tu propio riesgo." },
    ar: { title: "شروط الخدمة", text: "باستخدام ToolBoxOnline، فإنك توافق على هذه الشروط. جميع الأدوات تعالج البيانات محلياً في متصفحك. لا نقوم بتخزين أو نقل بياناتك. الأدوات مقدمة 'كما هي' بدون ضمان. لسنا مسؤولين عن أي أخطاء أو فقدان للبيانات. الاستخدام على مسؤوليتك الخاصة." },
  };

  const c = content[locale] || content.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {terms.title || c.title}
      </h1>
      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        {terms.lastUpdated || "Last updated"}: May 3, 2026
      </p>
      <div className="mt-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>{c.text}</p>
      </div>
    </div>
  );
}
