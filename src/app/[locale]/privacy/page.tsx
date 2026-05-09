import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/lib/i18n";

const LAST_UPDATED = "May 9, 2026";

type Section = { heading: string; text: string };

interface PrivacyContent {
  intro: string;
  sections: Section[];
}

const content: Record<string, PrivacyContent> = {
  en: {
    intro:
      'ToolBoxOnline ("we", "our", or "us") operates this website. We are committed to protecting your privacy. This Privacy Policy explains how we handle data when you use our services.',
    sections: [
      {
        heading: "Information We Collect",
        text: "We do not collect personal information. Our tools process all data locally in your browser — nothing is uploaded to our servers. We use Google Analytics 4 (GA4) to collect anonymous usage statistics (page views, session duration, general geographic region). This data is aggregated and cannot identify you individually. If you contact us via email, we retain your message for correspondence purposes only.",
      },
      {
        heading: "How We Use Information",
        text: "Anonymous analytics data helps us understand which tools are most popular and improve the site. We do not sell, trade, or share your data with third parties for marketing purposes.",
      },
      {
        heading: "Cookies",
        text: "We use a minimal cookie to remember your language preference (expires after 1 year). Google AdSense may set third-party cookies to serve ads and measure ad performance. These cookies are controlled by Google and subject to their privacy policy. You can manage cookie preferences through your browser settings.",
      },
      {
        heading: "Advertising",
        text: "We use Google AdSense to display advertisements on this site. Google and its partners may use cookies to serve ads based on your prior visits to this or other websites. Google uses a DART cookie to serve ads based on your browsing activity. You can opt out of personalized advertising by visiting Google Ads Settings or by visiting the Network Advertising Initiative opt-out page at www.aboutads.info.",
      },
      {
        heading: "Third-Party Services",
        text: "This site uses Google Analytics (GA4) for anonymous traffic analysis and Google AdSense for advertising. These services may collect information in accordance with their own privacy policies. We have no control over third-party cookies or tracking technologies used by these services.",
      },
      {
        heading: "Your Rights (GDPR)",
        text: "If you are in the European Economic Area (EEA), you have the right to: access your personal data; request correction or deletion of your data; object to or restrict processing; and data portability. You also have the right to opt out of personalized advertising through Google Ads Settings. For any data-related requests, contact us at jzerov@live.com.",
      },
      {
        heading: "Children's Privacy (COPPA)",
        text: "This website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected information from a child under 13, we will take steps to delete it.",
      },
      {
        heading: "Data Security",
        text: "All tool processing happens client-side in your browser. Your text, files, and other inputs never leave your device. We use HTTPS encryption for all connections to this site.",
      },
      {
        heading: "Changes to This Policy",
        text: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this policy periodically.",
      },
      {
        heading: "Contact Us",
        text: "If you have questions about this Privacy Policy or your data, please contact us at jzerov@live.com.",
      },
    ],
  },
  es: {
    intro:
      'ToolBoxOnline ("nosotros") opera este sitio web. Estamos comprometidos a proteger tu privacidad. Esta Política de Privacidad explica cómo manejamos los datos cuando usas nuestros servicios.',
    sections: [
      {
        heading: "Información que Recopilamos",
        text: "No recopilamos información personal. Todas nuestras herramientas procesan los datos localmente en tu navegador — nada se sube a nuestros servidores. Usamos Google Analytics 4 (GA4) para recopilar estadísticas de uso anónimas (páginas vistas, duración de sesión, región geográfica general). Estos datos son agregados y no pueden identificarte individualmente. Si nos contactas por correo electrónico, conservamos tu mensaje solo para fines de correspondencia.",
      },
      {
        heading: "Cómo Usamos la Información",
        text: "Los datos analíticos anónimos nos ayudan a entender qué herramientas son más populares y mejorar el sitio. No vendemos, comercializamos ni compartimos tus datos con terceros para fines de marketing.",
      },
      {
        heading: "Cookies",
        text: "Usamos una cookie mínima para recordar tu preferencia de idioma (expira después de 1 año). Google AdSense puede establecer cookies de terceros para mostrar anuncios y medir el rendimiento de los anuncios. Estas cookies son controladas por Google y están sujetas a su política de privacidad. Puedes gestionar las preferencias de cookies a través de la configuración de tu navegador.",
      },
      {
        heading: "Publicidad",
        text: "Usamos Google AdSense para mostrar anuncios en este sitio. Google y sus socios pueden usar cookies para mostrar anuncios basados en tus visitas previas a este u otros sitios web. Google usa una cookie DART para mostrar anuncios basados en tu actividad de navegación. Puedes optar por no recibir publicidad personalizada visitando Google Ads Settings o la página de exclusión de la Network Advertising Initiative en www.aboutads.info.",
      },
      {
        heading: "Servicios de Terceros",
        text: "Este sitio utiliza Google Analytics (GA4) para análisis de tráfico anónimo y Google AdSense para publicidad. Estos servicios pueden recopilar información de acuerdo con sus propias políticas de privacidad. No tenemos control sobre las cookies de terceros ni las tecnologías de seguimiento utilizadas por estos servicios.",
      },
      {
        heading: "Tus Derechos (GDPR)",
        text: "Si te encuentras en el Espacio Económico Europeo (EEE), tienes derecho a: acceder a tus datos personales; solicitar la corrección o eliminación de tus datos; oponerte o restringir el procesamiento; y la portabilidad de datos. También tienes derecho a optar por no recibir publicidad personalizada a través de Google Ads Settings. Para cualquier solicitud relacionada con datos, contáctanos en jzerov@live.com.",
      },
      {
        heading: "Privacidad de Menores (COPPA)",
        text: "Este sitio web no está dirigido a menores de 13 años. No recopilamos a sabiendas información personal de menores de 13 años. Si descubrimos que hemos recopilado información de un menor de 13 años, tomaremos medidas para eliminarla.",
      },
      {
        heading: "Seguridad de Datos",
        text: "Todo el procesamiento de herramientas ocurre del lado del cliente en tu navegador. Tu texto, archivos y otras entradas nunca salen de tu dispositivo. Usamos cifrado HTTPS para todas las conexiones a este sitio.",
      },
      {
        heading: "Cambios en Esta Política",
        text: "Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha actualizada. Te recomendamos revisar esta política periódicamente.",
      },
      {
        heading: "Contáctanos",
        text: "Si tienes preguntas sobre esta Política de Privacidad o tus datos, contáctanos en jzerov@live.com.",
      },
    ],
  },
  ar: {
    intro:
      'ToolBoxOnline ("نحن") يشغل هذا الموقع. نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية تعاملنا مع البيانات عند استخدام خدماتنا.',
    sections: [
      {
        heading: "المعلومات التي نجمعها",
        text: "لا نجمع معلومات شخصية. جميع أدواتنا تعالج البيانات محليًا في متصفحك — لا يتم تحميل أي شيء إلى خوادمنا. نستخدم Google Analytics 4 (GA4) لجمع إحصائيات استخدام مجهولة (مشاهدات الصفحات، مدة الجلسة، المنطقة الجغرافية العامة). هذه البيانات مجمعة ولا يمكنها تعريفك بشكل فردي. إذا اتصلت بنا عبر البريد الإلكتروني، نحتفظ برسالتك لأغراض المراسلة فقط.",
      },
      {
        heading: "كيف نستخدم المعلومات",
        text: "بيانات التحليلات المجهولة تساعدنا على فهم الأدوات الأكثر شعبية وتحسين الموقع. لا نبيع أو نتاجر أو نشارك بياناتك مع أطراف ثالثة لأغراض تسويقية.",
      },
      {
        heading: "ملفات تعريف الارتباط",
        text: "نستخدم ملف تعريف ارتباط بسيط لتذكر تفضيل اللغة الخاص بك (ينتهي بعد سنة واحدة). قد يضع Google AdSense ملفات تعريف ارتباط تابعة لجهات خارجية لعرض الإعلانات وقياس أدائها. يتم التحكم في ملفات تعريف الارتباط هذه بواسطة Google وتخضع لسياسة الخصوصية الخاصة بها. يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات متصفحك.",
      },
      {
        heading: "الإعلانات",
        text: "نستخدم Google AdSense لعرض الإعلانات على هذا الموقع. قد تستخدم Google وشركاؤها ملفات تعريف الارتباط لعرض الإعلانات بناءً على زياراتك السابقة لهذا الموقع أو مواقع أخرى. تستخدم Google ملف تعريف ارتباط DART لعرض الإعلانات بناءً على نشاط التصفح الخاص بك. يمكنك إلغاء الاشتراك من الإعلانات المخصصة عن طريق زيارة Google Ads Settings أو زيارة صفحة إلغاء الاشتراك من Network Advertising Initiative على www.aboutads.info.",
      },
      {
        heading: "خدمات الطرف الثالث",
        text: "يستخدم هذا الموقع Google Analytics (GA4) لتحليل حركة المرور المجهولة و Google AdSense للإعلان. قد تجمع هذه الخدمات المعلومات وفقًا لسياسات الخصوصية الخاصة بها. ليس لدينا سيطرة على ملفات تعريف الارتباط أو تقنيات التتبع التابعة لجهات خارجية المستخدمة من قبل هذه الخدمات.",
      },
      {
        heading: "حقوقك (GDPR)",
        text: "إذا كنت في المنطقة الاقتصادية الأوروبية (EEE)، فلديك الحق في: الوصول إلى بياناتك الشخصية؛ طلب تصحيح أو حذف بياناتك؛ الاعتراض على المعالجة أو تقييدها؛ ونقل البيانات. لديك أيضًا الحق في إلغاء الاشتراك من الإعلانات المخصصة من خلال Google Ads Settings. لأي طلبات متعلقة بالبيانات، اتصل بنا على jzerov@live.com.",
      },
      {
        heading: "خصوصية الأطفال (COPPA)",
        text: "هذا الموقع غير موجه للأطفال دون سن 13 عامًا. لا نجمع عمدًا معلومات شخصية من أطفال دون سن 13 عامًا. إذا علمنا أننا جمعنا معلومات من طفل دون سن 13 عامًا، سنتخذ خطوات لحذفها.",
      },
      {
        heading: "أمان البيانات",
        text: "يتم جميع معالجة الأدوات على جانب العميل في متصفحك. النص والملفات والمدخلات الأخرى لا تغادر جهازك أبدًا. نستخدم تشفير HTTPS لجميع الاتصالات بهذا الموقع.",
      },
      {
        heading: "تغييرات في هذه السياسة",
        text: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر التغييرات على هذه الصفحة بتاريخ محدث. نشجعك على مراجعة هذه السياسة بشكل دوري.",
      },
      {
        heading: "اتصل بنا",
        text: "إذا كانت لديك أسئلة حول سياسة الخصوصية هذه أو بياناتك، يرجى الاتصال بنا على jzerov@live.com.",
      },
    ],
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const privacy = (dict as any).privacy || {};
  const c = content[locale] || content.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {privacy.title || "Privacy Policy"}
        </h1>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          {privacy.lastUpdated || "Last updated"}: {LAST_UPDATED}
        </p>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>{c.intro}</p>
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
