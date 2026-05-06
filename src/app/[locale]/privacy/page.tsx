import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/lib/i18n";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const privacy = (dict as any).privacy || {};
  const t = (dict as any).toolPage || {};

  const content: Record<string, { title: string; sections: Array<{ heading: string; text: string }> }> = {
    en: {
      title: "Privacy Policy",
      sections: [
        { heading: "Data Processing", text: "All text processing, encoding, formatting, and other tool functions are performed client-side using JavaScript in your browser. Your data never leaves your device." },
        { heading: "Advertising", text: "We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits. You can opt out of personalized advertising at Google Ads Settings." },
        { heading: "Contact", text: "If you have questions about this privacy policy, please contact us at the address listed on our Contact page." },
      ],
    },
    es: {
      title: "Política de Privacidad",
      sections: [
        { heading: "Procesamiento de Datos", text: "Todo el procesamiento de texto, codificación, formato y otras funciones se realizan del lado del cliente usando JavaScript en tu navegador. Tus datos nunca salen de tu dispositivo." },
        { heading: "Publicidad", text: "Usamos Google AdSense para mostrar anuncios. Google puede usar cookies para mostrar anuncios basados en tus visitas previas. Puedes optar por no recibir publicidad personalizada en Google Ads Settings." },
        { heading: "Contacto", text: "Si tienes preguntas sobre esta política de privacidad, contáctanos en la dirección listada en nuestra página de Contacto." },
      ],
    },
    ar: {
      title: "سياسة الخصوصية",
      sections: [
        { heading: "معالجة البيانات", text: "يتم تنفيذ جميع وظائف معالجة النص والترميز والتنسيق وغيرها من جانب العميل باستخدام JavaScript في متصفحك. بياناتك لا تغادر جهازك أبداً." },
        { heading: "الإعلانات", text: "نستخدم Google AdSense لعرض الإعلانات. قد تستخدم Google ملفات تعريف الارتباط لعرض الإعلانات بناءً على زياراتك السابقة. يمكنك إلغاء الإعلان المخصص في إعدادات إعلانات Google." },
        { heading: "اتصل بنا", text: "إذا كانت لديك أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على العنوان المذكور في صفحة الاتصال الخاصة بنا." },
      ],
    },
  };

  const c = content[locale] || content.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        {privacy.title || c.title}
      </h1>
      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        {privacy.lastUpdated || "Last updated"}: May 3, 2026
      </p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          ToolBoxOnline (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
          operates this website. All tools on this site process data locally in
          your browser. We do not collect, store, or transmit any personal data
          or content you enter into our tools.
        </p>
        {c.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {section.heading}
            </h2>
            <p className="mt-2">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
