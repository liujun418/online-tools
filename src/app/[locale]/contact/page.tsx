import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const CONTACT_EMAIL = "jzerov@live.com";

interface ContactContent {
  intro: string;
  responseTime: string;
  categories: { label: string; icon: string; desc: string }[];
  suggestTitle: string;
  suggestText: string;
  suggestLabel: string;
}

const content: Record<string, ContactContent> = {
  en: {
    intro: "Have questions, feedback, or found a bug? We'd love to hear from you. Reach out using the email below and we'll get back to you as soon as possible.",
    responseTime: "We typically respond within 24-48 hours on business days.",
    categories: [
      { label: "Advertising Inquiries", icon: "📢", desc: "Interested in advertising on ToolBoxOnline? Reach out for rate cards and availability." },
      { label: "Feature Requests", icon: "💡", desc: "Have an idea for a new tool? We welcome suggestions and add popular requests regularly." },
      { label: "Bug Reports", icon: "🐛", desc: "Found something that's not working? Tell us what happened and we'll investigate." },
      { label: "Other", icon: "💬", desc: "Any other questions or feedback — we're here to help." },
    ],
    suggestTitle: "Suggest a Tool",
    suggestText: "Have a specific tool in mind? Use our quick suggestion form to send us your idea directly.",
    suggestLabel: "Open Suggestion Form",
  },
  es: {
    intro: "¿Tienes preguntas, comentarios o encontraste un error? Nos encantaría saber de ti. Envíanos un correo a la dirección siguiente y te responderemos lo antes posible.",
    responseTime: "Normalmente respondemos en 24-48 horas en días laborables.",
    categories: [
      { label: "Consultas Publicitarias", icon: "📢", desc: "¿Interesado en anunciarte en ToolBoxOnline? Contáctanos para tarifas y disponibilidad." },
      { label: "Solicitudes de Funciones", icon: "💡", desc: "¿Tienes una idea para una nueva herramienta? Aceptamos sugerencias y añadimos las más populares regularmente." },
      { label: "Reportes de Errores", icon: "🐛", desc: "¿Encontraste algo que no funciona? Cuéntanos qué pasó y lo investigaremos." },
      { label: "Otros", icon: "💬", desc: "Cualquier otra pregunta o comentario — estamos aquí para ayudar." },
    ],
    suggestTitle: "Sugerir una Herramienta",
    suggestText: "¿Tienes una herramienta específica en mente? Usa nuestro formulario de sugerencia para enviarnos tu idea directamente.",
    suggestLabel: "Abrir Formulario de Sugerencia",
  },
  ar: {
    intro: "لديك أسئلة أو ملاحظات أو وجدت خطأً؟ يسعدنا أن نسمع منك. راسلنا على البريد الإلكتروني أدناه وسنرد عليك في أقرب وقت ممكن.",
    responseTime: "نرد عادةً خلال 24-48 ساعة في أيام العمل.",
    categories: [
      { label: "استفسارات الإعلان", icon: "📢", desc: "مهتم بالإعلان على ToolBoxOnline؟ تواصل معنا للحصول على الأسعار والتوفر." },
      { label: "طلبات الميزات", icon: "💡", desc: "لديك فكرة لأداة جديدة؟ نرحب بالاقتراحات ونضيف الطلبات الشائعة بانتظام." },
      { label: "تقارير الأخطاء", icon: "🐛", desc: "وجدت شيئًا لا يعمل؟ أخبرنا بما حدث وسنحقق فيه." },
      { label: "أخرى", icon: "💬", desc: "أي أسئلة أو ملاحظات أخرى — نحن هنا للمساعدة." },
    ],
    suggestTitle: "اقترح أداة",
    suggestText: "لديك أداة محددة في ذهنك؟ استخدم نموذج الاقتراح السريع لإرسال فكرتك مباشرة.",
    suggestLabel: "فتح نموذج الاقتراح",
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const contact = (dict as any).contact || {};
  const c = content[locale] || content.en;

  return (
    <>
      <Header locale={locale} dict={dict} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {contact.title || "Contact Us"}
        </h1>
        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
          {contact.description || c.intro}
        </p>

        {/* Email */}
        <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {contact.email || "Email"}
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 inline-block text-blue-600 hover:underline dark:text-blue-400"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            {c.responseTime}
          </p>
        </div>

        {/* Categories */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            How Can We Help?
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {c.categories.map((cat, i) => (
              <div
                key={i}
                className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-lg">{cat.icon}</span>
                <h3 className="mt-1 font-medium text-zinc-900 dark:text-white">
                  {cat.label}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggest Tool CTA */}
        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950">
          <h2 className="text-lg font-semibold text-amber-900 dark:text-amber-200">
            {c.suggestTitle}
          </h2>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            {c.suggestText}
          </p>
          <Link
            href={`/${locale}`}
            className="mt-3 inline-block text-sm font-medium text-amber-800 underline hover:text-amber-600 dark:text-amber-200 dark:hover:text-amber-400"
          >
            {c.suggestLabel}
          </Link>
        </div>
      </div>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
