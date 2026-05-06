// Batch-generate Spanish and Arabic translations for all 50 tools in tools.ts
const fs = require("fs");
const path = require("path");

const TOOLS_FILE = path.join(__dirname, "..", "src", "lib", "tools.ts");
let content = fs.readFileSync(TOOLS_FILE, "utf-8");

// Translation data for all 50 tools
const translations = {
  "word-counter": {
    nameEs: "Contador de Palabras", nameAr: "عداد الكلمات",
    descEs: "Cuenta palabras, caracteres, oraciones y párrafos en tu texto en tiempo real.", descAr: "عد الكلمات والأحرف والجمل والفقرات في نصك في الوقت الفعلي.",
    seoTitleEs: "Contador de Palabras Gratis Online - Cuenta Palabras, Caracteres y Oraciones 2026", seoTitleAr: "عداد كلمات مجاني عبر الإنترنت - عد الكلمات والأحرف والجمل 2026",
    seoDescEs: "Contador de palabras gratuito y rápido. Sin registro. Tus datos permanecen en tu navegador.", seoDescAr: "عداد كلمات مجاني وسريع. بدون تسجيل. بياناتك تبقى في متصفحك."
  },
  "character-counter": {
    nameEs: "Contador de Caracteres", nameAr: "عداد الأحرف",
    descEs: "Cuenta caracteres con o sin espacios. Ideal para límites de texto en redes sociales y formularios.", descAr: "عد الأحرف مع أو بدون مسافات. مثالي لحدود النص على وسائل التواصل الاجتماعي والنماذج.",
    seoTitleEs: "Contador de Caracteres Gratis - Cuenta Letras y Espacios Online", seoTitleAr: "عداد أحرف مجاني - عد الحروف والمسافات عبر الإنترنت",
    seoDescEs: "Herramienta gratuita para contar caracteres. Perfecta para Twitter, SMS y más.", seoDescAr: "أداة مجانية لعد الأحرف. مثالية لتويتر ورسائل SMS والمزيد."
  },
  "case-converter": {
    nameEs: "Convertidor de Mayúsculas y Minúsculas", nameAr: "محول حالة الأحرف",
    descEs: "Convierte texto entre mayúsculas, minúsculas, título y oraciones al instante.", descAr: "حول النص بين الأحرف الكبيرة والصغيرة والعنوان والجمل فوراً.",
    seoTitleEs: "Convertidor de Mayúsculas y Minúsculas Gratis Online", seoTitleAr: "محول حالة الأحرف مجاني عبر الإنترنت",
    seoDescEs: "Cambia el caso de tu texto gratis. Mayúsculas, minúsculas, título y más.", seoDescAr: "غيّر حالة نصك مجاناً. أحرف كبيرة وصغيرة وعنوان والمزيد."
  },
  "lorem-ipsum": {
    nameEs: "Generador de Lorem Ipsum", nameAr: "مولد لوريم إيبسوم",
    descEs: "Genera texto de relleno Lorem Ipsum para tus diseños y maquetas web.", descAr: "أنشئ نص لوريم إيبسوم لت تصميماتك ونماذج الويب.",
    seoTitleEs: "Generador de Lorem Ipsum Gratis - Texto de Relleno Online", seoTitleAr: "مولد لوريم إيبسوم مجاني - نص نائب عبر الإنترنت",
    seoDescEs: "Genera párrafos, oraciones o palabras Lorem Ipsum al instante.", seoDescAr: "أنشئ فقرات أو جمل أو كلمات لوريم إيبسوم فوراً."
  },
  "text-repeater": {
    nameEs: "Repetidor de Texto", nameAr: "مكرر النص",
    descEs: "Repite cualquier texto o carácter tantas veces como necesites.", descAr: "كرر أي نص أو حرف عدة مرات حسب حاجتك.",
    seoTitleEs: "Repetidor de Texto Gratis - Duplica Texto Online", seoTitleAr: "مكرر نص مجاني - كرر النص عبر الإنترنت",
    seoDescEs: "Herramienta simple para repetir texto o caracteres múltiples veces.", seoDescAr: "أداة بسيطة لتكرار النص أو الأحرف عدة مرات."
  },
  "text-to-slug": {
    nameEs: "Convertidor de Texto a Slug", nameAr: "محول النص إلى سلاج",
    descEs: "Convierte cualquier texto en un slug URL-friendly, perfecto para URLs y nombres de archivo.", descAr: "حول أي نص إلى سلاج مناسب لعناوين URL، مثالي للروابط وأسماء الملفات.",
    seoTitleEs: "Generador de Slug Gratis - Convierte Texto a URL Amigable", seoTitleAr: "مولد سلاج مجاني - حول النص إلى عنوان URL صديق",
    seoDescEs: "Genera slugs limpios y seguros para URLs desde cualquier texto.", seoDescAr: "أنشئ سلاج نظيف وآمن لعناوين URL من أي نص."
  },
  "remove-duplicate-lines": {
    nameEs: "Eliminar Líneas Duplicadas", nameAr: "إزالة الأسطر المكررة",
    descEs: "Elimina líneas duplicadas de tu texto al instante. Mantén solo entradas únicas.", descAr: "أزل الأسطر المكررة من نصك فوراً. احتفظ بالمدخلات الفريدة فقط.",
    seoTitleEs: "Eliminar Líneas Duplicadas Gratis - Herramienta de Texto Única", seoTitleAr: "إزالة الأسطر المكررة مجاناً - أداة نص فريدة",
    seoDescEs: "Herramienta gratuita para eliminar duplicados de listas y datos de texto.", seoDescAr: "أداة مجانية لإزالة التكرارات من القوائم وبيانات النص."
  },
  "text-diff": {
    nameEs: "Comparador de Texto", nameAr: "مقارنة النصوص",
    descEs: "Compara dos textos y resalta las diferencias línea por línea.", descAr: "قارن نصين وأبرز الاختلافات سطراً بسطر.",
    seoTitleEs: "Comparador de Texto Gratis - Encuentra Diferencias en Texto", seoTitleAr: "مقارنة نص مجاني - ابحث عن اختلافات في النص",
    seoDescEs: "Compara textos lado a lado y encuentra diferencias al instante.", seoDescAr: "قارن النصوص جنباً إلى جنب واعثر على الاختلافات فوراً."
  },
  "fancy-text-generator": {
    nameEs: "Generador de Texto Estilizado", nameAr: "مولد نص مزخرف",
    descEs: "Genera texto estilizado y decorado para redes sociales, juegos y perfiles.", descAr: "أنشئ نص مزخرف ومزين لوسائل التواصل الاجتماعي والألعاب والملفات الشخصية.",
    seoTitleEs: "Generador de Texto Estilizado Gratis - Fuentes Bonitas Online", seoTitleAr: "مولد نص مزخرف مجاني - خطوط جميلة عبر الإنترنت",
    seoDescEs: "Crea texto bonito con estilos únicos para Instagram, TikTok y más.", seoDescAr: "أنشئ نص جميل بأنماط فريدة لإنستغرام وتيك توك والمزيد."
  },
  "hashtag-generator": {
    nameEs: "Generador de Hashtags", nameAr: "مولد الهاشتاج",
    descEs: "Genera hashtags populares para maximizar el alcance de tus publicaciones en redes sociales.", descAr: "أنشئ هاشتاجات شائعة لزيادة وصول منشوراتك على وسائل التواصل الاجتماعي.",
    seoTitleEs: "Generador de Hashtags Gratis - Etiquetas Populares para Redes", seoTitleAr: "مولد هاشتاج مجاني - علامات شائعة للشبكات الاجتماعية",
    seoDescEs: "Genera hashtags relevantes para Instagram, Twitter, TikTok y Facebook.", seoDescAr: "أنشئ هاشتاجات ذات صلة لإنستغرام وتويتر وتيك توك وفيسبوك."
  },
  "markdown-preview": {
    nameEs: "Editor y Vista Previa de Markdown", nameAr: "محرر ومعاينة Markdown",
    descEs: "Escribe Markdown y obtén vista previa en HTML al instante. Editor en vivo.", descAr: "اكتب Markdown واحصل على معاينة HTML فوراً. محرر مباشر.",
    seoTitleEs: "Editor de Markdown Gratis - Vista Previa HTML en Vivo", seoTitleAr: "محرر Markdown مجاني - معاينة HTML مباشرة",
    seoDescEs: "Editor de Markdown online con vista previa en tiempo real.", seoDescAr: "محرر Markdown عبر الإنترنت مع معاينة في الوقت الفعلي."
  },
  "quotes": {
    nameEs: "Generador de Citas Inspiradoras", nameAr: "مولد اقتباسات ملهمة",
    descEs: "Recibe citas aleatorias inspiradoras y motivadoras para reflexión diaria.", descAr: "احصل على اقتباسات ملهمة ومحفزة عشوائية للتأمل اليومي.",
    seoTitleEs: "Generador de Citas Gratis - Frases Inspiradoras Diarias", seoTitleAr: "مولد اقتباسات مجاني - عبارات ملهمة يومية",
    seoDescEs: "Descubre citas motivadoras e inspiradoras al azar cada día.", seoDescAr: "اكتشف اقتباسات محفزة وملهمة عشوائية كل يوم."
  },
  "random-name-generator": {
    nameEs: "Generador de Nombres Aleatorios", nameAr: "مولد أسماء عشوائية",
    descEs: "Genera nombres aleatorios para personajes, proyectos y más.", descAr: "أنشئ أسماء عشوائية للشخصيات والمشاريع والمزيد.",
    seoTitleEs: "Generador de Nombres Aleatorios Gratis - Nombres Únicos Online", seoTitleAr: "مولد أسماء عشوائية مجاني - أسماء فريدة عبر الإنترنت",
    seoDescEs: "Genera nombres creativos y únicos para cualquier propósito.", seoDescAr: "أنشئ أسماء إبداعية وفريدة لأي غرض."
  },
  "book-of-answers": {
    nameEs: "Libro de las Respuestas", nameAr: "كتاب الإجابات",
    descEs: "Un libro digital de respuestas para diversión en la toma de decisiones y orientación psicológica.", descAr: "كتاب رقمي للإجابات للمتعة في اتخاذ القرارات والتوجيه النفسي.",
    seoTitleEs: "Libro de las Respuestas Gratis - Recibe Respuestas Místicas Online", seoTitleAr: "كتاب الإجابات مجاني - احصل على إجابات صوفية عبر الإنترنت",
    seoDescEs: "Haz una pregunta y recibe una respuesta misteriosa del libro.", seoDescAr: "اطرح سؤالاً واحصل على إجابة غامضة من الكتاب."
  },
  "base64-converter": {
    nameEs: "Convertidor Base64", nameAr: "محول Base64",
    descEs: "Codifica y decodifica texto a Base64 al instante. Herramienta bidireccional.", descAr: "شفّر وفك تشفير النص إلى Base64 فوراً. أداة ثنائية الاتجاه.",
    seoTitleEs: "Convertidor Base64 Gratis - Codificar y Decodificar Online", seoTitleAr: "محول Base64 مجاني - تشفير وفك التشفير عبر الإنترنت",
    seoDescEs: "Codifica texto a Base64 o decodifica Base64 a texto gratis.", seoDescAr: "شفّر النص إلى Base64 أو فك تشفير Base64 إلى نص مجاناً."
  },
  "url-encoder": {
    nameEs: "Codificador y Decodificador de URL", nameAr: "مشفر وفك تشفير URL",
    descEs: "Codifica y decodifica cadenas URL-encoded al instante.", descAr: "شفّر وفك تشفير سلاسل URL-encoded فوراً.",
    seoTitleEs: "Codificador de URL Gratis - Encode/Decode URL Online", seoTitleAr: "مشفر URL مجاني - ترميز/فك تشفير URL عبر الإنترنت",
    seoDescEs: "Herramienta para codificar y decodificar URLs rápidamente.", seoDescAr: "أداة لترميز وفك تشفير عناوين URL بسرعة."
  },
  "html-entities": {
    nameEs: "Codificador de Entidades HTML", nameAr: "مشفر كيانات HTML",
    descEs: "Codifica y decodifica entidades HTML especiales como &amp; y &quot;.", descAr: "شفّر وفك تشفير كيانات HTML الخاصة مثل &amp; و &quot;.",
    seoTitleEs: "Codificador de Entidades HTML Gratis - Escape HTML Online", seoTitleAr: "مشفر كيانات HTML مجاني - حماية HTML عبر الإنترنت",
    seoDescEs: "Convierte caracteres especiales a entidades HTML y viceversa.", seoDescAr: "حول الأحرف الخاصة إلى كيانات HTML والعكس."
  },
  "json-formatter": {
    nameEs: "Formateador de JSON", nameAr: "منسق JSON",
    descEs: "Formatea, valida y embellece código JSON. Minificar y prettify.", descAr: "نسّق وتحقق وجمّل كود JSON. تصغير وتجميل.",
    seoTitleEs: "Formateador de JSON Gratis - Validar y Embellecer JSON Online", seoTitleAr: "منسق JSON مجاني - التحقق وتجميل JSON عبر الإنترنت",
    seoDescEs: "Herramienta profesional para formatear y validar JSON.", seoDescAr: "أداة احترافية لتنسيق والتحقق من JSON."
  },
  "csv-to-json": {
    nameEs: "Convertidor CSV a JSON", nameAr: "محول CSV إلى JSON",
    descEs: "Convierte datos CSV a formato JSON al instante.", descAr: "حول بيانات CSV إلى تنسيق JSON فوراً.",
    seoTitleEs: "Convertidor CSV a JSON Gratis - CSV to JSON Online", seoTitleAr: "محول CSV إلى JSON مجاني - CSV إلى JSON عبر الإنترنت",
    seoDescEs: "Transforma archivos CSV a objetos JSON de forma rápida.", seoDescAr: "حوّل ملفات CSV إلى كائنات JSON بسرعة."
  },
  "json-to-csv": {
    nameEs: "Convertidor JSON a CSV", nameAr: "محول JSON إلى CSV",
    descEs: "Convierte datos JSON a formato CSV para hojas de cálculo.", descAr: "حول بيانات JSON إلى تنسيق CSV لجداول البيانات.",
    seoTitleEs: "Convertidor JSON a CSV Gratis - JSON to CSV Online", seoTitleAr: "محول JSON إلى CSV مجاني - JSON إلى CSV عبر الإنترنت",
    seoDescEs: "Convierte JSON a CSV fácilmente para importar a Excel.", seoDescAr: "حوّل JSON إلى CSV بسهولة للاستيراد إلى Excel."
  },
  "regex-tester": {
    nameEs: "Probador de Expresiones Regulares", nameAr: "مختبر التعبيرات العادية",
    descEs: "Prueba y depura expresiones regulares con resaltado en tiempo real.", descAr: "اختبر وتصحيح التعبيرات العادية مع تمييز في الوقت الفعلي.",
    seoTitleEs: "Probador de Regex Gratis - Prueba Expresiones Regulares Online", seoTitleAr: "مختبر Regex مجاني - اختبر التعبيرات العادية عبر الإنترنت",
    seoDescEs: "Prueba patrones regex con coincidencias en tiempo real.", seoDescAr: "اختبر أنماط regex مع تطابقات في الوقت الفعلي."
  },
  "css-minifier": {
    nameEs: "Minificador de CSS", nameAr: "مصغر CSS",
    descEs: "Minifica y comprime código CSS para optimizar tu sitio web.", descAr: "صغّر واضغط كود CSS لتحسين موقعك الإلكتروني.",
    seoTitleEs: "Minificador de CSS Gratis - Comprimir CSS Online", seoTitleAr: "مصغر CSS مجاني - ضغط CSS عبر الإنترنت",
    seoDescEs: "Reduce el tamaño de tu CSS para mejor rendimiento web.", seoDescAr: "قلل حجم CSS لتحسين أداء الويب."
  },
  "password-generator": {
    nameEs: "Generador de Contraseñas", nameAr: "مولد كلمات المرور",
    descEs: "Genera contraseñas seguras y aleatorias con opciones personalizables.", descAr: "أنشئ كلمات مرور آمنة وعشوائية مع خيارات قابلة للتخصيص.",
    seoTitleEs: "Generador de Contraseñas Gratis - Crea Contraseñas Seguras", seoTitleAr: "مولد كلمات مرور مجاني - أنشئ كلمات مرور آمنة",
    seoDescEs: "Genera contraseñas fuertes con letras, números y símbolos.", seoDescAr: "أنشئ كلمات مرور قوية بأحرف وأرقام ورموز."
  },
  "uuid-generator": {
    nameEs: "Generador de UUID", nameAr: "مولد UUID",
    descEs: "Genera identificadores únicos universales (UUID v4) al instante.", descAr: "أنشئ معرفات فريدة عالمية (UUID v4) فوراً.",
    seoTitleEs: "Generador de UUID Gratis - UUID v4 Online", seoTitleAr: "مولد UUID مجاني - UUID v4 عبر الإنترنت",
    seoDescEs: "Genera UUIDs únicos para bases de datos, sesiones y más.", seoDescAr: "أنشئ UUIDs فريدة لقواعد البيانات والجلسات والمزيد."
  },
  "md5-generator": {
    nameEs: "Generador de MD5", nameAr: "مولد MD5",
    descEs: "Genera hash MD5 de cualquier texto al instante.", descAr: "أنشئ تجزئة MD5 من أي نص فوراً.",
    seoTitleEs: "Generador de MD5 Gratis - Hash MD5 Online", seoTitleAr: "مولد MD5 مجاني - تجزئة MD5 عبر الإنترنت",
    seoDescEs: "Calcula el hash MD5 de texto para verificación de integridad.", seoDescAr: "احسب تجزئة MD5 للنص للتحقق من السلامة."
  },
  "hash-generator": {
    nameEs: "Generador de Hash SHA-256", nameAr: "مولد تجزئة SHA-256",
    descEs: "Genera hashes SHA-256, SHA-384, SHA-512 de cualquier texto.", descAr: "أنشئ تجزئات SHA-256 و SHA-384 و SHA-512 من أي نص.",
    seoTitleEs: "Generador de Hash Gratis - SHA-256 Online", seoTitleAr: "مولد تجزئة مجاني - SHA-256 عبر الإنترنت",
    seoDescEs: "Genera hashes criptográficos SHA para seguridad.", seoDescAr: "أنشئ تجزئات تشفير SHA للأمان."
  },
  "qr-code-generator": {
    nameEs: "Generador de Código QR", nameAr: "مولد رمز QR",
    descEs: "Genera códigos QR para URLs, texto, emails y más.", descAr: "أنشئ رموز QR لعناوين URL والنص والبريد الإلكتروني والمزيد.",
    seoTitleEs: "Generador de QR Gratis - Crea Códigos QR Online", seoTitleAr: "مولد QR مجاني - أنشئ رموز QR عبر الإنترنت",
    seoDescEs: "Crea códigos QR personalizables para cualquier contenido.", seoDescAr: "أنشئ رموز QR قابلة للتخصيص لأي محتوى."
  },
  "ai-tools": {
    nameEs: "Directorio de Herramientas IA", nameAr: "دليل أدوات الذكاء الاصطناعي",
    descEs: "Explora y compara las mejores herramientas de inteligencia artificial.", descAr: "استكشف وقارن أفضل أدوات الذكاء الاصطناعي.",
    seoTitleEs: "Mejores Herramientas de IA 2026 - Directorio Completo", seoTitleAr: "أفضل أدوات الذكاء الاصطناعي 2026 - دليل شامل",
    seoDescEs: "Descubre herramientas de IA gratuitas para texto, imagen, código y más.", seoDescAr: "اكتشف أدوات ذكاء اصطناعي مجانية للنص والصورة والكود والمزيد."
  },
  "unix-timestamp": {
    nameEs: "Convertidor de Marca de Tiempo Unix", nameAr: "محول الطابع الزمني Unix",
    descEs: "Convierte marcas de tiempo Unix a fechas legibles y viceversa.", descAr: "حول طوابع زمنية Unix إلى تواريخ قابلة للقراءة والعكس.",
    seoTitleEs: "Convertidor Unix Timestamp Gratis - Unix Time Online", seoTitleAr: "محول Unix Timestamp مجاني - Unix Time عبر الإنترنت",
    seoDescEs: "Convierte timestamps Unix a fechas humanas fácilmente.", seoDescAr: "حوّل طوابع Unix إلى تواريخ بشرية بسهولة."
  },
  "perpetual-calendar": {
    nameEs: "Calendario Perpetuo", nameAr: "تقويم دائم",
    descEs: "Consulta cualquier fecha y día de la semana con este calendario perpetuo.", descAr: "اعرض أي تاريخ ويوم في الأسبوع مع هذا التقويم الدائم.",
    seoTitleEs: "Calendario Perpetuo Gratis - Consulta Cualquier Fecha", seoTitleAr: "تقويم دائم مجاني - اعرض أي تاريخ",
    seoDescEs: "Encuentra el día de la semana para cualquier fecha histórica.", seoDescAr: "اعثر على يوم الأسبوع لأي تاريخ تاريخي."
  },
  "color-converter": {
    nameEs: "Convertidor de Colores", nameAr: "محول الألوان",
    descEs: "Convierte entre HEX, RGB, HSL y nombres de colores.", descAr: "حول بين HEX و RGB و HSL وأسماء الألوان.",
    seoTitleEs: "Convertidor de Colores Gratis - HEX RGB HSL Online", seoTitleAr: "محول ألوان مجاني - HEX RGB HSL عبر الإنترنت",
    seoDescEs: "Herramienta de conversión de colores para diseñadores web.", seoDescAr: "أداة تحويل الألوان لمصممي الويب."
  },
  "unit-converter": {
    nameEs: "Convertidor de Unidades", nameAr: "محول الوحدات",
    descEs: "Convierte entre unidades de longitud, peso, temperatura y más.", descAr: "حول بين وحدات الطول والوزن ودرجة الحرارة والمزيد.",
    seoTitleEs: "Convertidor de Unidades Gratis - Longitud, Peso, Temperatura", seoTitleAr: "محول وحدات مجاني - الطول والوزن ودرجة الحرارة",
    seoDescEs: "Convertidor online de unidades métricas e imperiales.", seoDescAr: "محول وحدات ميتري وإمبراطوري عبر الإنترنت."
  },
  "base-converter": {
    nameEs: "Convertidor de Bases Numéricas", nameAr: "محول القواعد العددية",
    descEs: "Convierte entre binario, octal, decimal y hexadecimal.", descAr: "حول بين النظام الثنائي والثماني والعشري والسداسي عشري.",
    seoTitleEs: "Convertidor de Bases Gratis - Binario Decimal Hexadecimal", seoTitleAr: "محول القواعد مجاني - ثنائي عشري سداسي عشري",
    seoDescEs: "Convierte números entre diferentes bases numéricas.", seoDescAr: "حول الأرقام بين القواعد العددية المختلفة."
  },
  "image-to-base64": {
    nameEs: "Convertidor de Imagen a Base64", nameAr: "محول الصور إلى Base64",
    descEs: "Convierte imágenes a cadena Base64 para uso en código.", descAr: "حول الصور إلى سلسلة Base64 للاستخدام في الكود.",
    seoTitleEs: "Convertidor de Imagen a Base64 Gratis - Image to Base64", seoTitleAr: "محول الصور إلى Base64 مجاني - Image to Base64",
    seoDescEs: "Convierte PNG, JPG y otras imágenes a Base64 online.", seoDescAr: "حول صور PNG و JPG وغيرها إلى Base64 عبر الإنترنت."
  },
  "youtube-thumbnail": {
    nameEs: "Descargador de Miniaturas de YouTube", nameAr: "محمل صور YouTube المصغرة",
    descEs: "Descarga miniaturas de videos de YouTube en diferentes resoluciones.", descAr: "حمّل صور مصغرة من فيديوهات YouTube بدقة مختلفة.",
    seoTitleEs: "Descargar Miniaturas de YouTube Gratis - YouTube Thumbnail", seoTitleAr: "تحميل صور YouTube المصغرة مجاناً - YouTube Thumbnail",
    seoDescEs: "Obtén miniaturas de YouTube en HD, SD y resolución máxima.", seoDescAr: "احصل على صور مصغرة من YouTube بجودة HD و SD وأعلى دقة."
  },
  "bmi-calculator": {
    nameEs: "Calculadora de IMC", nameAr: "حاسبة مؤشر كتلة الجسم",
    descEs: "Calcula tu Índice de Masa Corporal (IMC) y conoce tu estado de salud.", descAr: "احسب مؤشر كتلة الجسم (BMI) وتعرف على حالتك الصحية.",
    seoTitleEs: "Calculadora de IMC Gratis - Calcula tu Índice de Masa Corporal", seoTitleAr: "حاسبة BMI مجانية - احسب مؤشر كتلة الجسم",
    seoDescEs: "Calcula tu IMC en kg/m² y conoce si tienes peso saludable.", seoDescAr: "احسب BMI بالكيلوغرام/م² وتعرف إذا كان وزنك صحياً."
  },
  "calorie-calculator": {
    nameEs: "Calculadora de Calorías", nameAr: "حاسبة السعرات الحرارية",
    descEs: "Calcula tus necesidades calóricas diarias según tu perfil.", descAr: "احسب احتياجك من السعرات الحرارية اليومية حسب ملفك الشخصي.",
    seoTitleEs: "Calculadora de Calorías Gratis - Necesidades Diarias", seoTitleAr: "حاسبة سعرات حرارية مجانية - الاحتياجات اليومية",
    seoDescEs: "Descubre cuántas calorías necesitas al día para tu objetivo.", seoDescAr: "اكتشف كم سعرة حرارية تحتاج يومياً لهدفك."
  },
  "age-calculator": {
    nameEs: "Calculadora de Edad", nameAr: "حاسبة العمر",
    descEs: "Calcula tu edad exacta en años, meses, días y más.", descAr: "احسب عمرك الدقيق بالسنوات والأشهر والأيام والمزيد.",
    seoTitleEs: "Calculadora de Edad Gratis - Calcula tu Edad Exacta", seoTitleAr: "حاسبة عمر مجانية - احسب عمرك الدقيق",
    seoDescEs: "Descubre tu edad precisa con años, meses, días y horas.", seoDescAr: "اكتشف عمرك الدقيق بالسنوات والأشهر والأيام والساعات."
  },
  "loan-calculator": {
    nameEs: "Calculadora de Préstamos", nameAr: "حاسبة القروض",
    descEs: "Calcula cuotas mensuales, intereses y costo total de tu préstamo.", descAr: "احسب الأقساط الشهرية والفوائد والتكلفة الإجمالية لقرضك.",
    seoTitleEs: "Calculadora de Préstamos Gratis - Cuotas y Intereses", seoTitleAr: "حاسبة قروض مجانية - أقساط وفوائد",
    seoDescEs: "Planifica tu préstamo con cálculos detallados de cuotas.", seoDescAr: "خطط لقرضك مع حسابات مفصلة للأقساط."
  },
  "mortgage-calculator": {
    nameEs: "Calculadora de Hipoteca", nameAr: "حاسبة الرهن العقاري",
    descEs: "Calcula tu cuota hipotecaria mensual con intereses y amortización.", descAr: "احسب قسط الرهن العقاري الشهري مع الفوائد والاستهلاك.",
    seoTitleEs: "Calculadora de Hipoteca Gratis - Cuota Mensual Online", seoTitleAr: "حاسبة رهن عقاري مجانية - قسط شهري عبر الإنترنت",
    seoDescEs: "Estima tu pago hipotecario mensual con detalles completos.", seoDescAr: "قدّر دفعتك الشهرية للرهن العقاري بتفاصيل كاملة."
  },
  "compound-interest": {
    nameEs: "Calculadora de Interés Compuesto", nameAr: "حاسبة الفائدة المركبة",
    descEs: "Calcula el crecimiento de tu inversión con interés compuesto.", descAr: "احسب نمو استثمارك مع الفائدة المركبة.",
    seoTitleEs: "Calculadora de Interés Compuesto Gratis - Inversiones Online", seoTitleAr: "حاسبة فائدة مركبة مجانية - استثمارات عبر الإنترنت",
    seoDescEs: "Visualiza cómo crece tu dinero con el poder del interés compuesto.", seoDescAr: "شاهد كيف ينمو مالك بقوة الفائدة المركبة."
  },
  "tip-calculator": {
    nameEs: "Calculadora de Propinas", nameAr: "حاسبة البقشيش",
    descEs: "Calcula la propina adecuada y el total a pagar en restaurantes.", descAr: "احسب البقشيش المناسب والمجموع الكلي للدفع في المطاعم.",
    seoTitleEs: "Calculadora de Propinas Gratis - Cuánto Dejar de Propina", seoTitleAr: "حاسبة بقشيش مجانية - كم تترك بقشيش",
    seoDescEs: "Divide la cuenta y calcula la propina fácilmente.", seoDescAr: "اقسم الحساب واحسب البقشيش بسهولة."
  },
  "percentage-calculator": {
    nameEs: "Calculadora de Porcentajes", nameAr: "حاسبة النسب المئوية",
    descEs: "Calcula porcentajes, aumentos y descuentos de forma rápida.", descAr: "احسب النسب المئوية والزيادات والخصومات بسرعة.",
    seoTitleEs: "Calculadora de Porcentajes Gratis - Calcula % Online", seoTitleAr: "حاسبة نسب مئوية مجانية - احسب ٪ عبر الإنترنت",
    seoDescEs: "Resuelve problemas de porcentajes al instante.", seoDescAr: "حل مشاكل النسب المئوية فوراً."
  },
  "discount-calculator": {
    nameEs: "Calculadora de Descuentos", nameAr: "حاسبة الخصومات",
    descEs: "Calcula el precio final después de aplicar un descuento.", descAr: "احسب السعر النهائي بعد تطبيق الخصم.",
    seoTitleEs: "Calculadora de Descuentos Gratis - Precio Final Online", seoTitleAr: "حاسبة خصومات مجانية - السعر النهائي عبر الإنترنت",
    seoDescEs: "Descubre cuánto ahorras con descuentos y ofertas.", seoDescAr: "اكتشف كم توفر مع الخصومات والعروض."
  },
  "income-tax-calculator": {
    nameEs: "Calculadora de Impuestos sobre la Renta", nameAr: "حاسبة ضريبة الدخل",
    descEs: "Estima tu impuesto sobre la renta y salario neto.", descAr: "قدّر ضريبة الدخل وصافي الراتب.",
    seoTitleEs: "Calculadora de Impuestos Gratis - Impuesto sobre la Renta", seoTitleAr: "حاسبة ضرائب مجانية - ضريبة الدخل",
    seoDescEs: "Calcula tu ingreso neto después de impuestos.", seoDescAr: "احسب دخلك الصافي بعد الضرائب."
  },
  "roi-calculator": {
    nameEs: "Calculadora de Retorno de Inversión (ROI)", nameAr: "حاسبة العائد على الاستثمار",
    descEs: "Calcula el retorno de inversión y porcentaje de ganancia.", descAr: "احسب العائد على الاستثمار ونسبة الربح.",
    seoTitleEs: "Calculadora de ROI Gratis - Retorno de Inversión Online", seoTitleAr: "حاسبة ROI مجانية - العائد على الاستثمار عبر الإنترنت",
    seoDescEs: "Mide la rentabilidad de tus inversiones fácilmente.", seoDescAr: "قس ربحية استثماراتك بسهولة."
  },
  "pregnancy-calculator": {
    nameEs: "Calculadora de Embarazo", nameAr: "حاسبة الحمل",
    descEs: "Calcula tu fecha probable de parto y semana de embarazo.", descAr: "احسب تاريخ الولادة المتوقع وأسبوع الحمل.",
    seoTitleEs: "Calculadora de Embarazo Gratis - Fecha de Parto Online", seoTitleAr: "حاسبة حمل مجانية - تاريخ الولادة عبر الإنترنت",
    seoDescEs: "Estima tu fecha de parto y sigue tu embarazo semana a semana.", seoDescAr: "قدّر تاريخ ولادتك وتابع حملك أسبوعاً بأسبوع."
  },
  "reaction-test": {
    nameEs: "Prueba de Tiempo de Reacción", nameAr: "اختبار وقت رد الفعل",
    descEs: "Mide tu tiempo de reacción en milisegundos con este test interactivo.", descAr: "قس وقت رد فعلك بالمللي ثانية مع هذا الاختبار التفاعلي.",
    seoTitleEs: "Test de Reacción Gratis - Mide tu Tiempo de Reacción", seoTitleAr: "اختبار رد فعل مجاني - قس وقت رد فعلك",
    seoDescEs: "Descubre qué tan rápido reaccionas. Compite con amigos.", seoDescAr: "اكتشف مدى سرعة رد فعلك. تنافس مع الأصدقاء."
  },
  "random-number-generator": {
    nameEs: "Generador de Números Aleatorios", nameAr: "مولد أرقام عشوائية",
    descEs: "Genera números aleatorios en un rango personalizado.", descAr: "أنشئ أرقاماً عشوائية في نطاق مخصص.",
    seoTitleEs: "Generador de Números Aleatorios Gratis - RNG Online", seoTitleAr: "مولد أرقام عشوائية مجاني - RNG عبر الإنترنت",
    seoDescEs: "Genera números aleatorios entre mínimo y máximo.", seoDescAr: "أنشئ أرقاماً عشوائية بين الحد الأدنى والأقصى."
  },
  "zodiac-sign": {
    nameEs: "Calculadora de Signo Zodiacal", nameAr: "حاسبة البرج الفلكي",
    descEs: "Descubre tu signo zodiacal según tu fecha de nacimiento.", descAr: "اكتشف برجك الفلكي حسب تاريخ ميلادك.",
    seoTitleEs: "¿Cuál es mi Signo Zodiacal? - Calculadora de Zodiaco Gratis", seoTitleAr: "ما هو برجي الفلكي؟ - حاسبة الأبراج مجانية",
    seoDescEs: "Encuentra tu signo del zodiaco y sus características.", seoDescAr: "اعثر على برجك الفلكي وخصائصه."
  }
};

// Build the replacement map for each tool
let modifiedCount = 0;

for (const [toolId, t] of Object.entries(translations)) {
  // Find each tool block and add translations before closing }
  // Pattern: look for the tool by id and find the closing of its block

  // Find the position of this tool's block
  const idPattern = `id: "${toolId}"`;
  const idIndex = content.indexOf(idPattern);
  if (idIndex === -1) {
    console.warn(`Tool not found: ${toolId}`);
    continue;
  }

  // Find the end of this tool's block (next tool or end of array)
  // Look for the next occurrence of "  {\n    id:" or "];"
  const nextToolStart = content.indexOf("\n  {\n    id:", idIndex + 1);
  const arrayEnd = content.indexOf("\n];", idIndex);
  const blockEnd = nextToolStart !== -1 ? nextToolStart : (arrayEnd !== -1 ? arrayEnd : content.length);

  // Get the block content
  const blockContent = content.substring(idIndex, blockEnd);

  // Check if already has translations
  if (blockContent.includes("nameTranslations")) {
    console.log(`Already has translations: ${toolId}`);
    continue;
  }

  // Find the last closing brace of this tool object
  // We need to insert before the final },
  // Find where faq?: closes or the last property
  const lastPropEnd = blockContent.lastIndexOf("},");
  if (lastPropEnd === -1) continue;

  // Build translations string
  const transBlock = `,\n    nameTranslations: {\n      en: "${t.nameEs.split('"').join('\\"')}",\n      es: "${t.nameEs}",\n      ar: "${t.nameAr}",\n    },\n    descriptionTranslations: {\n      en: "",\n      es: "${t.descEs}",\n      ar: "${t.descAr}",\n    },\n    seoTitleTranslations: {\n      en: "",\n      es: "${t.seoTitleEs}",\n      ar: "${t.seoTitleAr}",\n    },\n    seoDescriptionTranslations: {\n      en: "",\n      es: "${t.seoDescEs}",\n      ar: "${t.seoDescAr}",\n    },\n    howToUseTranslations: {},\n    faqTranslations: {},\n  }`;

  // Replace the last }, with our translations + }
  const insertPos = idIndex + lastPropEnd;
  content = content.substring(0, insertPos) + transBlock + content.substring(insertPos + 2);

  modifiedCount++;
  console.log(`Added translations: ${toolId}`);
}

fs.writeFileSync(TOOLS_FILE, content, "utf-8");
console.log(`\nDone! Updated ${modifiedCount} tools with translations.`);
