import { notFound } from "next/navigation";
import { isValidLocale, getDictionary } from "@/lib/i18n";

const LAST_UPDATED = "May 17, 2026";

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
        text: "We do not collect personal information. Most of our tools process all data locally in your browser — nothing is uploaded to our servers. We use Google Analytics 4 (GA4) to collect anonymous usage statistics (page views, session duration, general geographic region). This data is aggregated and cannot identify you individually. If you contact us via email, we retain your message for correspondence purposes only. Certain tools (detailed below) make client-side API calls to third-party services to provide their functionality — these calls go directly from your browser to the third party and do not pass through our servers.",
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
        heading: "Third-Party Services & APIs Used by Our Tools",
        text: "To provide specific tool functionality, your browser may make direct requests to the following third-party services. Please review their respective privacy policies for details on how they handle data:",
      },
      {
        heading: "IP Geolocation (ipapi.co)",
        text: "Used by: IP Lookup, Global Weather, Food Picker. Your browser sends a request to ipapi.co/json/ to retrieve approximate geographic region based on your IP address. This is used for region detection (Food Picker), weather location auto-detection (Global Weather), and network information display (IP Lookup). Privacy Policy: https://ipapi.co/privacy/",
      },
      {
        heading: "GIPHY API",
        text: "Used by: GIF Search. Search queries are sent to api.giphy.com to retrieve matching GIFs. Trending GIFs are fetched for the default browse view. Privacy Policy: https://support.giphy.com/hc/en-us/articles/360032872931-GIPHY-Privacy-Policy",
      },
      {
        heading: "NASA APOD API",
        text: "Used by: NASA Astronomy Picture of the Day. Requests are sent to api.nasa.gov to fetch the daily astronomy image and description. No user data is transmitted — only date parameters. Privacy Policy: https://www.nasa.gov/about/NASA_Web_Privacy_Policy.html",
      },
      {
        heading: "Open-Meteo Weather API",
        text: "Used by: Global Weather. Location coordinates or city search queries are sent to api.open-meteo.com and geocoding-api.open-meteo.com to retrieve weather forecasts. Open-Meteo is a free, open-source weather API that does not collect personal data. Privacy Policy: https://open-meteo.com/en/privacy",
      },
      {
        heading: "OpenStreetMap / Nominatim",
        text: "Used by: World Map. Search queries are sent to nominatim.openstreetmap.org for geocoding (converting place names to map coordinates). Map tiles are loaded from OpenStreetMap CDN. Privacy Policy: https://wiki.osmfoundation.org/wiki/Privacy_Policy",
      },
      {
        heading: "Bing Wallpaper (via Railway Proxy)",
        text: "Used by: Bing Daily Wallpaper. Requests are sent to our backend proxy (ai-toolbox-api-production.up.railway.app) which fetches wallpaper metadata from Bing.com. No personal data is transmitted. Railway infrastructure may collect standard server logs.",
      },
      {
        heading: "Crypto Price (via Railway Proxy)",
        text: "Used by: Cryptocurrency Prices. Requests are sent to our backend proxy which fetches live price data from CoinGecko API. No personal data is transmitted. Railway infrastructure may collect standard server logs.",
      },
      {
        heading: "Lateral Thinking Puzzles (via Railway Proxy)",
        text: "Used by: Lateral Thinking Puzzles. Puzzle data requests are sent to our backend proxy which uses AI services to generate or retrieve puzzles. No personal data is transmitted. Railway infrastructure may collect standard server logs.",
      },
      {
        heading: "Random Quote (via Railway Proxy)",
        text: "Used by: Random Quote Generator. Quote requests are sent to our backend proxy which serves from a curated quotes database. No personal data is transmitted. Railway infrastructure may collect standard server logs.",
      },
      {
        heading: "Pet Wallpaper APIs",
        text: "Used by: Pet Wallpaper. Your browser makes direct requests to thecatapi.com, Cataas (cataas.com), Dog CEO API (dog.ceo), Random Fox (randomfox.ca), and Shibe Online (shibe.online) to fetch animal images. These are public APIs that do not require authentication. No personal data is transmitted beyond standard HTTP request headers. Privacy policies: refer to each individual service.",
      },
      {
        heading: "Railway Backend Infrastructure",
        text: "Several tools (Bing Wallpaper, Crypto Price, Lateral Thinking, Random Quote) route requests through our backend hosted on Railway (railway.app). Railway may collect standard server access logs including IP address, request time, and user agent. These logs are used for operational purposes only and are subject to Railway's privacy policy: https://railway.app/privacy",
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
        text: "No recopilamos información personal. La mayoría de nuestras herramientas procesan los datos localmente en tu navegador — nada se sube a nuestros servidores. Usamos Google Analytics 4 (GA4) para recopilar estadísticas de uso anónimas (páginas vistas, duración de sesión, región geográfica general). Estos datos son agregados y no pueden identificarte individualmente. Si nos contactas por correo electrónico, conservamos tu mensaje solo para fines de correspondencia. Ciertas herramientas (detalladas abajo) realizan llamadas API del lado del cliente a servicios de terceros para proporcionar su funcionalidad — estas llamadas van directamente desde tu navegador al tercero y no pasan por nuestros servidores.",
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
        heading: "Servicios de Terceros y APIs Usadas por Nuestras Herramientas",
        text: "Para proporcionar la funcionalidad de herramientas específicas, tu navegador puede realizar solicitudes directas a los siguientes servicios de terceros. Por favor, revisa sus respectivas políticas de privacidad para detalles sobre cómo manejan los datos:",
      },
      {
        heading: "Geolocalización IP (ipapi.co)",
        text: "Usado por: Consulta de IP, Clima Global, Selector de Comida. Tu navegador envía una solicitud a ipapi.co/json/ para recuperar la región geográfica aproximada basada en tu dirección IP. Esto se usa para detección de región (Selector de Comida), ubicación meteorológica automática (Clima Global) y visualización de información de red (Consulta de IP). Política de Privacidad: https://ipapi.co/privacy/",
      },
      {
        heading: "API de GIPHY",
        text: "Usado por: Búsqueda de GIFs. Las consultas de búsqueda se envían a api.giphy.com para recuperar GIFs coincidentes. Los GIFs populares se cargan para la vista de exploración predeterminada. Política de Privacidad: https://support.giphy.com/hc/en-us/articles/360032872931-GIPHY-Privacy-Policy",
      },
      {
        heading: "API APOD de NASA",
        text: "Usado por: Imagen Astronómica del Día de NASA. Las solicitudes se envían a api.nasa.gov para obtener la imagen astronómica diaria y su descripción. No se transmiten datos del usuario — solo parámetros de fecha. Política de Privacidad: https://www.nasa.gov/about/NASA_Web_Privacy_Policy.html",
      },
      {
        heading: "API Meteorológica Open-Meteo",
        text: "Usado por: Clima Global. Las coordenadas de ubicación o consultas de búsqueda de ciudades se envían a api.open-meteo.com y geocoding-api.open-meteo.com para obtener pronósticos meteorológicos. Open-Meteo es una API meteorológica gratuita y de código abierto que no recopila datos personales. Política de Privacidad: https://open-meteo.com/en/privacy",
      },
      {
        heading: "OpenStreetMap / Nominatim",
        text: "Usado por: Mapa Mundial. Las consultas de búsqueda se envían a nominatim.openstreetmap.org para geocodificación (convertir nombres de lugares en coordenadas de mapa). Los mosaicos del mapa se cargan desde el CDN de OpenStreetMap. Política de Privacidad: https://wiki.osmfoundation.org/wiki/Privacy_Policy",
      },
      {
        heading: "Bing Wallpaper (a través de Proxy Railway)",
        text: "Usado por: Fondo de Pantalla Diario de Bing. Las solicitudes se envían a nuestro proxy backend (ai-toolbox-api-production.up.railway.app) que obtiene metadatos de fondos de pantalla de Bing.com. No se transmiten datos personales. La infraestructura de Railway puede recopilar registros de servidor estándar.",
      },
      {
        heading: "Precios de Criptomonedas (a través de Proxy Railway)",
        text: "Usado por: Precios de Criptomonedas. Las solicitudes se envían a nuestro proxy backend que obtiene datos de precios en vivo de la API de CoinGecko. No se transmiten datos personales. La infraestructura de Railway puede recopilar registros de servidor estándar.",
      },
      {
        heading: "Acertijos de Pensamiento Lateral (a través de Proxy Railway)",
        text: "Usado por: Acertijos de Pensamiento Lateral. Las solicitudes de acertijos se envían a nuestro proxy backend que utiliza servicios de IA para generar o recuperar acertijos. No se transmiten datos personales. La infraestructura de Railway puede recopilar registros de servidor estándar.",
      },
      {
        heading: "Citas Aleatorias (a través de Proxy Railway)",
        text: "Usado por: Generador de Citas Aleatorias. Las solicitudes de citas se envían a nuestro proxy backend que sirve desde una base de datos de citas curada. No se transmiten datos personales. La infraestructura de Railway puede recopilar registros de servidor estándar.",
      },
      {
        heading: "APIs de Fondos de Mascotas",
        text: "Usado por: Fondos de Pantalla de Mascotas. Tu navegador realiza solicitudes directas a thecatapi.com, Cataas (cataas.com), Dog CEO API (dog.ceo), Random Fox (randomfox.ca) y Shibe Online (shibe.online) para obtener imágenes de animales. Estas son APIs públicas que no requieren autenticación. No se transmiten datos personales más allá de los encabezados HTTP estándar. Políticas de privacidad: consulta cada servicio individual.",
      },
      {
        heading: "Infraestructura Backend de Railway",
        text: "Varias herramientas (Bing Wallpaper, Precios de Cripto, Pensamiento Lateral, Citas Aleatorias) enrutan solicitudes a través de nuestro backend alojado en Railway (railway.app). Railway puede recopilar registros de acceso al servidor estándar que incluyen dirección IP, hora de solicitud y agente de usuario. Estos registros se utilizan solo con fines operativos y están sujetos a la política de privacidad de Railway: https://railway.app/privacy",
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
        text: "لا نجمع معلومات شخصية. معظم أدواتنا تعالج البيانات محليًا في متصفحك — لا يتم تحميل أي شيء إلى خوادمنا. نستخدم Google Analytics 4 (GA4) لجمع إحصائيات استخدام مجهولة (مشاهدات الصفحات، مدة الجلسة، المنطقة الجغرافية العامة). هذه البيانات مجمعة ولا يمكنها تعريفك بشكل فردي. إذا اتصلت بنا عبر البريد الإلكتروني، نحتفظ برسالتك لأغراض المراسلة فقط. أدوات معينة (مفصلة أدناه) تقوم بإجراء استدعاءات API من جانب العميل إلى خدمات الطرف الثالث لتوفير وظائفها — تذهب هذه الاستدعاءات مباشرة من متصفحك إلى الطرف الثالث ولا تمر عبر خوادمنا.",
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
        heading: "خدمات الطرف الثالث وواجهات API المستخدمة في أدواتنا",
        text: "لتوفير وظائف أدوات محددة، قد يقوم متصفحك بإجراء طلبات مباشرة إلى خدمات الطرف الثالث التالية. يرجى مراجعة سياسات الخصوصية الخاصة بكل منها للحصول على تفاصيل حول كيفية تعاملها مع البيانات:",
      },
      {
        heading: "تحديد الموقع الجغرافي عبر IP (ipapi.co)",
        text: "تستخدمه: أداة فحص IP، الطقس العالمي، منتقي الطعام. يرسل متصفحك طلبًا إلى ipapi.co/json/ لاسترداد المنطقة الجغرافية التقريبية بناءً على عنوان IP الخاص بك. يُستخدم هذا لاكتشاف المنطقة (منتقي الطعام)، وتحديد موقع الطقس تلقائيًا (الطقس العالمي)، وعرض معلومات الشبكة (فحص IP). سياسة الخصوصية: https://ipapi.co/privacy/",
      },
      {
        heading: "واجهة GIPHY API",
        text: "تستخدمه: أداة بحث GIF. يتم إرسال استعلامات البحث إلى api.giphy.com لاسترداد صور GIF المطابقة. يتم جلب صور GIF الرائجة للعرض الافتراضي. سياسة الخصوصية: https://support.giphy.com/hc/en-us/articles/360032872931-GIPHY-Privacy-Policy",
      },
      {
        heading: "واجهة NASA APOD API",
        text: "تستخدمه: الصورة الفلكية اليومية من ناسا. يتم إرسال الطلبات إلى api.nasa.gov للحصول على الصورة الفلكية اليومية ووصفها. لا يتم نقل أي بيانات مستخدم — فقط معلمات التاريخ. سياسة الخصوصية: https://www.nasa.gov/about/NASA_Web_Privacy_Policy.html",
      },
      {
        heading: "واجهة الطقس Open-Meteo",
        text: "تستخدمه: أداة الطقس العالمي. يتم إرسال إحداثيات الموقع أو استعلامات البحث عن المدن إلى api.open-meteo.com و geocoding-api.open-meteo.com لاسترداد توقعات الطقس. Open-Meteo هي واجهة طقس مجانية ومفتوحة المصدر لا تجمع بيانات شخصية. سياسة الخصوصية: https://open-meteo.com/en/privacy",
      },
      {
        heading: "OpenStreetMap / Nominatim",
        text: "تستخدمه: أداة خريطة العالم. يتم إرسال استعلامات البحث إلى nominatim.openstreetmap.org للترميز الجغرافي (تحويل أسماء الأماكن إلى إحداثيات). يتم تحميل بلاط الخريطة من CDN الخاص بـ OpenStreetMap. سياسة الخصوصية: https://wiki.osmfoundation.org/wiki/Privacy_Policy",
      },
      {
        heading: "Bing Wallpaper (عبر وسيط Railway)",
        text: "تستخدمه: خلفية Bing اليومية. يتم إرسال الطلبات إلى وسيط الخلفية لدينا (ai-toolbox-api-production.up.railway.app) الذي يجلب بيانات تعريف الخلفيات من Bing.com. لا يتم نقل أي بيانات شخصية. قد تجمع بنية Railway سجلات خادم قياسية.",
      },
      {
        heading: "أسعار العملات الرقمية (عبر وسيط Railway)",
        text: "تستخدمه: أداة أسعار العملات الرقمية. يتم إرسال الطلبات إلى وسيط الخلفية لدينا الذي يجلب بيانات الأسعار المباشرة من CoinGecko API. لا يتم نقل أي بيانات شخصية. قد تجمع بنية Railway سجلات خادم قياسية.",
      },
      {
        heading: "ألغاز التفكير الجانبي (عبر وسيط Railway)",
        text: "تستخدمه: أداة ألغاز التفكير الجانبي. يتم إرسال طلبات الألغاز إلى وسيط الخلفية لدينا الذي يستخدم خدمات الذكاء الاصطناعي لتوليد أو استرداد الألغاز. لا يتم نقل أي بيانات شخصية. قد تجمع بنية Railway سجلات خادم قياسية.",
      },
      {
        heading: "اقتباسات عشوائية (عبر وسيط Railway)",
        text: "تستخدمه: مولد الاقتباسات العشوائية. يتم إرسال طلبات الاقتباسات إلى وسيط الخلفية لدينا الذي يخدم من قاعدة بيانات اقتباسات منسقة. لا يتم نقل أي بيانات شخصية. قد تجمع بنية Railway سجلات خادم قياسية.",
      },
      {
        heading: "واجهات خلفيات الحيوانات الأليفة",
        text: "تستخدمه: خلفيات الحيوانات الأليفة. يقوم متصفحك بإجراء طلبات مباشرة إلى thecatapi.com و Cataas (cataas.com) و Dog CEO API (dog.ceo) و Random Fox (randomfox.ca) و Shibe Online (shibe.online) للحصول على صور الحيوانات. هذه واجهات عامة لا تتطلب مصادقة. لا يتم نقل أي بيانات شخصية تتجاوز رؤوس HTTP القياسية. سياسات الخصوصية: راجع كل خدمة على حدة.",
      },
      {
        heading: "البنية التحتية للخادم الخلفي Railway",
        text: "تقوم عدة أدوات (Bing Wallpaper، أسعار العملات الرقمية، التفكير الجانبي، الاقتباسات العشوائية) بتوجيه الطلبات عبر خادمنا الخلفي المستضاف على Railway (railway.app). قد تجمع Railway سجلات وصول قياسية للخادم بما في ذلك عنوان IP ووقت الطلب ووكيل المستخدم. تُستخدم هذه السجلات لأغراض تشغيلية فقط وتخضع لسياسة خصوصية Railway: https://railway.app/privacy",
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
