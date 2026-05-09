import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/lib/i18n";

const LAST_UPDATED = "May 9, 2026";

type Section = { heading: string; text: string };

interface TermsContent {
  intro: string;
  sections: Section[];
}

const content: Record<string, TermsContent> = {
  en: {
    intro:
      'By accessing or using ToolBoxOnline ("the Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.',
    sections: [
      {
        heading: "Services",
        text: "ToolBoxOnline provides free online tools including text utilities, developer tools, calculators, and converters. All tool processing is performed client-side in your browser. We do not store, transmit, or process your data on any server.",
      },
      {
        heading: "User License",
        text: "We grant you a limited, non-exclusive, non-transferable license to use the tools on this Site for personal and non-commercial purposes. You may not copy, reproduce, or redistribute any content from this Site without prior written permission.",
      },
      {
        heading: "Prohibited Uses",
        text: "You may not use the Site to: distribute malware, spam, or harmful content; attempt to gain unauthorized access to any portion of the Site or its systems; use automated scraping, crawling, or data extraction tools; interfere with or disrupt the Site's infrastructure; or violate any applicable laws or regulations.",
      },
      {
        heading: "Intellectual Property",
        text: "All content on this Site, including text, graphics, logos, code, and tool functionality, is the property of ToolBoxOnline and is protected by intellectual property laws. The tools themselves are made available for your personal use but remain our intellectual property.",
      },
      {
        heading: "Disclaimer of Warranties",
        text: 'THE SITE AND ALL TOOLS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      },
      {
        heading: "Limitation of Liability",
        text: "IN NO EVENT SHALL ToolBoxOnline BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE SITE OR ANY TOOLS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      },
      {
        heading: "Third-Party Services",
        text: "This Site uses Google AdSense for advertising and Google Analytics for traffic analysis. These third-party services have their own terms and privacy policies. We are not responsible for the practices or content of these third-party services. Advertisements displayed are controlled by Google, not by us.",
      },
      {
        heading: "Advertising Disclosure",
        text: "This site is supported by advertising. Ads are served by Google AdSense and may use cookies to deliver relevant advertisements. We do not endorse any products or services displayed in advertisements. You should review ad content independently before making any purchases.",
      },
      {
        heading: "External Links",
        text: "The Site may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any linked websites. Links are provided for convenience and do not imply endorsement.",
      },
      {
        heading: "Changes to Terms",
        text: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Site after changes constitutes acceptance of the new Terms.",
      },
      {
        heading: "Governing Law",
        text: "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of Delaware.",
      },
      {
        heading: "Contact Information",
        text: "If you have questions about these Terms, please contact us at jzerov@live.com.",
      },
    ],
  },
  es: {
    intro:
      "Al acceder o utilizar ToolBoxOnline (\"el Sitio\"), aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo, por favor no utilices el Sitio.",
    sections: [
      {
        heading: "Servicios",
        text: "ToolBoxOnline proporciona herramientas online gratuitas que incluyen utilidades de texto, herramientas de desarrollo, calculadoras y conversores. Todo el procesamiento de herramientas se realiza del lado del cliente en tu navegador. No almacenamos, transmitimos ni procesamos tus datos en ningún servidor.",
      },
      {
        heading: "Licencia de Usuario",
        text: "Te otorgamos una licencia limitada, no exclusiva y no transferible para usar las herramientas de este Sitio con fines personales y no comerciales. No puedes copiar, reproducir ni redistribuir ningún contenido de este Sitio sin permiso previo por escrito.",
      },
      {
        heading: "Usos Prohibidos",
        text: "No puedes usar el Sitio para: distribuir malware, spam o contenido dañino; intentar obtener acceso no autorizado a cualquier parte del Sitio o sus sistemas; usar herramientas automáticas de extracción, rastreo o recolección de datos; interferir o alterar la infraestructura del Sitio; o violar leyes o regulaciones aplicables.",
      },
      {
        heading: "Propiedad Intelectual",
        text: "Todo el contenido de este Sitio, incluidos texto, gráficos, logotipos, código y funcionalidad de las herramientas, es propiedad de ToolBoxOnline y está protegido por leyes de propiedad intelectual. Las herramientas en sí están disponibles para tu uso personal pero siguen siendo nuestra propiedad intelectual.",
      },
      {
        heading: "Renuncia de Garantías",
        text: 'EL SITIO Y TODAS LAS HERRAMIENTAS SE PROPORCIONAN "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, INCLUYENDO, SIN LIMITACIÓN, GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN.',
      },
      {
        heading: "Limitación de Responsabilidad",
        text: "EN NINGÚN CASO ToolBoxOnline SERÁ RESPONSABLE DE NINGÚN DAÑO DIRECTO, INDIRECTO, INCIDENTAL, ESPECIAL O CONSECUENTE QUE SURJA DE O ESTÉ RELACIONADO CON TU USO DEL SITIO O CUALQUIER HERRAMIENTA, INCLUSO SI SE LE HA ADVERTIDO DE LA POSIBILIDAD DE DICHOS DAÑOS.",
      },
      {
        heading: "Servicios de Terceros",
        text: "Este Sitio utiliza Google AdSense para publicidad y Google Analytics para análisis de tráfico. Estos servicios de terceros tienen sus propios términos y políticas de privacidad. No somos responsables de las prácticas o el contenido de estos servicios de terceros. Los anuncios mostrados son controlados por Google, no por nosotros.",
      },
      {
        heading: "Aviso Publicitario",
        text: "Este sitio se mantiene mediante publicidad. Los anuncios son servidos por Google AdSense y pueden usar cookies para entregar anuncios relevantes. No respaldamos ningún producto o servicio mostrado en los anuncios. Debes revisar el contenido de los anuncios de forma independiente antes de realizar cualquier compra.",
      },
      {
        heading: "Enlaces Externos",
        text: "El Sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, la precisión o las prácticas de ningún sitio web enlazado. Los enlaces se proporcionan por conveniencia y no implican un respaldo.",
      },
      {
        heading: "Cambios en los Términos",
        text: "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en esta página. Tu uso continuado del Sitio después de los cambios constituye la aceptación de los nuevos Términos.",
      },
      {
        heading: "Ley Aplicable",
        text: "Estos Términos se regirán e interpretarán de acuerdo con las leyes del Estado de Delaware, Estados Unidos, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa derivada de estos Términos se resolverá en los tribunales de Delaware.",
      },
      {
        heading: "Información de Contacto",
        text: "Si tienes preguntas sobre estos Términos, contáctanos en jzerov@live.com.",
      },
    ],
  },
  ar: {
    intro:
      "من خلال الوصول إلى أو استخدام ToolBoxOnline (\"الموقع\")، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا لم توافق، يرجى عدم استخدام الموقع.",
    sections: [
      {
        heading: "الخدمات",
        text: "يقدم ToolBoxOnline أدوات مجانية عبر الإنترنت تشمل أدوات نصية وأدوات تطوير وحاسبات ومحولات. يتم جميع معالجة الأدوات على جانب العميل في متصفحك. لا نقوم بتخزين أو نقل أو معالجة بياناتك على أي خادم.",
      },
      {
        heading: "ترخيص المستخدم",
        text: "نمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل لاستخدام الأدوات على هذا الموقع لأغراض شخصية وغير تجارية. لا يجوز لك نسخ أو إعادة إنتاج أو إعادة توزيع أي محتوى من هذا الموقع بدون إذن خطي مسبق.",
      },
      {
        heading: "الاستخدامات المحظورة",
        text: "لا يجوز لك استخدام الموقع لـ: توزيع البرامج الضارة أو البريد العشوائي أو المحتوى الضار؛ محاولة الحصول على وصول غير مصرح به إلى أي جزء من الموقع أو أنظمته؛ استخدام أدوات الكشط أو الزحف أو استخراج البيانات تلقائيًا؛ التدخل في بنية الموقع الأساسية أو تعطيلها؛ أو انتهاك أي قوانين أو لوائح سارية.",
      },
      {
        heading: "الملكية الفكرية",
        text: "جميع المحتويات على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والأكواد ووظائف الأدوات، هي ملك لـ ToolBoxOnline ومحمية بقوانين الملكية الفكرية. الأدوات نفسها متاحة للاستخدام الشخصي لكنها تظل ملكيتنا الفكرية.",
      },
      {
        heading: "تنصل من الضمانات",
        text: "يتم توفير الموقع وجميع الأدوات \"كما هي\" و\"حسب التوفر\" بدون ضمانات من أي نوع، سواء صريحة أو ضمنية، بما في ذلك على سبيل المثال لا الحصر الضمانات الضمنية لقابلية التسويق والملاءمة لغرض معين وعدم التعدي.",
      },
      {
        heading: "تحديد المسؤولية",
        text: "في أي حال من الأحوال لا تكون ToolBoxOnline مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية تنشأ عن أو تتعلق باستخدامك للموقع أو أي أدوات، حتى لو تم إبلاغك بإمكانية حدوث مثل هذه الأضرار.",
      },
      {
        heading: "خدمات الطرف الثالث",
        text: "يستخدم هذا الموقع Google AdSense للإعلان و Google Analytics لتحليل حركة المرور. تتمتع خدمات الطرف الثالث هذه بشروطها وسياسات الخصوصية الخاصة بها. لسنا مسؤولين عن ممارسات أو محتوى هذه الخدمات التابعة لجهات خارجية. يتم التحكم في الإعلانات المعروضة بواسطة Google، وليس من قبلنا.",
      },
      {
        heading: "إفصاح إعلاني",
        text: "هذا الموقع مدعوم بالإعلانات. يتم عرض الإعلانات بواسطة Google AdSense وقد تستخدم ملفات تعريف الارتباط لتقديم إعلانات ذات صلة. لا نؤيد أي منتجات أو خدمات معروضة في الإعلانات. يجب عليك مراجعة محتوى الإعلانات بشكل مستقل قبل إجراء أي مشتريات.",
      },
      {
        heading: "روابط خارجية",
        text: "قد يحتوي الموقع على روابط لمواقع ويب تابعة لجهات خارجية. لسنا مسؤولين عن محتوى أو دقة أو ممارسات أي مواقع ويب مرتبطة. الروابط مقدمة للراحة ولا تعني المصادقة.",
      },
      {
        heading: "تغييرات في الشروط",
        text: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستكون التغييرات سارية المفعول فور نشرها على هذه الصفحة. استمرار استخدامك للموقع بعد التغييرات يشكل قبولًا للشروط الجديدة.",
      },
      {
        heading: "القانون الحاكم",
        text: "تخضع هذه الشروط وتفسر وفقًا لقوانين ولاية ديلاوير، الولايات المتحدة، دون مراعاة أحكام تضارب القوانين. سيتم حل أي نزاعات تنشأ عن هذه الشروط في محاكم ديلاوير.",
      },
      {
        heading: "معلومات الاتصال",
        text: "إذا كانت لديك أسئلة حول هذه الشروط، يرجى الاتصال بنا على jzerov@live.com.",
      },
    ],
  },
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const terms = (dict as any).terms || {};
  const c = content[locale] || content.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {terms.title || "Terms of Service"}
        </h1>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          {terms.lastUpdated || "Last updated"}: {LAST_UPDATED}
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
