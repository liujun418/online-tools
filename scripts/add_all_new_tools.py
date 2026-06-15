import json, os

BASE = "C:/Users/jun/online-tools"

# ===== 1. Add 6 tool registrations to tools.ts =====
# Insert before the last "];" (closing of tools array)

tools_path = os.path.join(BASE, "src/lib/tools.ts")
with open(tools_path, "r", encoding="utf-8") as f:
    ts = f.read()

new_tools = """
  // --- NEW TOOLS (2026-06-15) ---

  {
    id: "color-contrast-checker",
    name: "Color Contrast Checker",
    description: "Check WCAG 2.1 contrast ratios between two colors. Ensure your text meets AA and AAA accessibility standards with instant pass/fail results.",
    category: "developer",
    icon: "👁️",
    path: "/tools/color-contrast-checker",
    seoTitle: "Free Color Contrast Checker Online - WCAG Accessibility Tool 2026",
    seoDescription: "Check color contrast ratios for web accessibility compliance. WCAG 2.1 AA and AAA checker with live preview. Free online contrast checker tool.",
    seoKeywords: ["color contrast checker", "WCAG contrast checker", "accessibility checker", "color accessibility", "contrast ratio calculator", "AA AAA compliance"],
    relatedTools: ["color-converter", "css-minifier", "html-entities"],
    sceneIntro: "You picked a light gray text on a white background. It looks fine to you, but someone with low vision can't read it. Paste your colors and see instantly: Pass or Fail, with the exact contrast ratio.",
    howToUse: ["Pick a foreground (text) color and a background color using the color pickers or by typing hex codes.", "See the live preview of how your text looks on the background.", "Check the WCAG results: AA Normal (≥4.5:1), AA Large (≥3:1), AAA Normal (≥7:1), AAA Large (≥4.5:1).", "Adjust colors until all required levels pass."],
    faq: [
      { question: "What is WCAG contrast ratio?", answer: "WCAG (Web Content Accessibility Guidelines) defines minimum contrast ratios between text and background colors. AA Normal requires 4.5:1 for body text. AA Large requires 3:1 for text larger than 18px or bold 14px. AAA levels are stricter." },
      { question: "What is a good contrast ratio?", answer: "For normal body text, aim for at least 4.5:1 (AA). For large text or headings, 3:1 (AA Large) is acceptable. For the best accessibility, target 7:1 (AAA)." },
      { question: "Does this tool work with hex codes?", answer: "Yes. You can type any 6-digit hex code (like #3B82F6) or use the native color picker. Both inputs are synchronized." },
      { question: "Is my color data sent anywhere?", answer: "No. All calculations happen in your browser. No data is sent to any server." },
    ],
    nameTranslations: { es: "Comprobador de Contraste de Color", ar: "مدقق تباين الألوان" },
    descriptionTranslations: { es: "Verifica las relaciones de contraste WCAG 2.1 entre dos colores. Asegura que tu texto cumpla con los estándares de accesibilidad AA y AAA.", ar: "تحقق من نسب تباين WCAG 2.1 بين لونين. تأكد من أن نصك يفي بمعايير الوصول AA و AAA." },
    seoTitleTranslations: { es: "Comprobador de Contraste de Color Gratis Online - Herramienta WCAG 2026", ar: "مدقق تباين الألوان مجاني عبر الإنترنت - أداة WCAG 2026" },
    seoDescriptionTranslations: { es: "Verifica relaciones de contraste para cumplimiento de accesibilidad web. Comprobador WCAG 2.1 AA y AAA con vista previa en vivo.", ar: "تحقق من نسب التباين للامتثال لإمكانية الوصول على الويب. مدقق WCAG 2.1 AA و AAA مع معاينة مباشرة." },
    howToUseTranslations: {
      es: ["Elige un color de primer plano (texto) y un color de fondo usando los selectores de color o escribiendo códigos hexadecimales.", "Ve la vista previa en vivo de cómo se ve tu texto sobre el fondo.", "Revisa los resultados WCAG: AA Normal (≥4.5:1), AA Grande (≥3:1), AAA Normal (≥7:1), AAA Grande (≥4.5:1).", "Ajusta los colores hasta que todos los niveles requeridos pasen."],
      ar: ["اختر لون المقدمة (النص) ولون الخلفية باستخدام منتقي الألوان أو بكتابة رموز hex.", "شاهد المعاينة المباشرة لكيفية ظهور نصك على الخلفية.", "راجع نتائج WCAG: AA عادي (≥4.5:1)، AA كبير (≥3:1)، AAA عادي (≥7:1)، AAA كبير (≥4.5:1).", "اضبط الألوان حتى تجتاز جميع المستويات المطلوبة."],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es la relación de contraste WCAG?", answer: "WCAG define relaciones de contraste mínimas entre el texto y el fondo. AA Normal requiere 4.5:1 para texto normal. AA Grande requiere 3:1 para texto mayor de 18px o negrita de 14px. AAA es más estricto." },
        { question: "¿Qué es una buena relación de contraste?", answer: "Para texto normal, al menos 4.5:1 (AA). Para texto grande, 3:1 (AA Grande). Para mejor accesibilidad, apunta a 7:1 (AAA)." },
        { question: "¿Funciona con códigos hexadecimales?", answer: "Sí. Puedes escribir cualquier código hex de 6 dígitos (como #3B82F6) o usar el selector de color nativo." },
        { question: "¿Se envían mis datos de color a algún lugar?", answer: "No. Todos los cálculos ocurren en tu navegador. No se envía ningún dato a ningún servidor." },
      ],
      ar: [
        { question: "ما هي نسبة تباين WCAG؟", answer: "تحدد WCAG نسب تباين دنيا بين النص والخلفية. AA عادي يتطلب 4.5:1 للنص العادي. AA كبير يتطلب 3:1 للنص الأكبر من 18px أو الغامق 14px. AAA أكثر صرامة." },
        { question: "ما هي نسبة التباين الجيدة؟", answer: "للنص العادي، 4.5:1 على الأقل (AA). للنص الكبير، 3:1 (AA كبير). لأفضل وصول، استهدف 7:1 (AAA)." },
        { question: "هل تعمل مع رموز hex؟", answer: "نعم. يمكنك كتابة أي رمز hex من 6 أرقام (مثل #3B82F6) أو استخدام منتقي الألوان الأصلي." },
        { question: "هل تُرسل بيانات الألوان إلى أي مكان؟", answer: "لا. جميع الحسابات تتم في متصفحك. لا يُرسل أي بيانات إلى أي خادم." },
      ],
    },
    sceneIntroTranslations: { es: "Elegiste un texto gris claro sobre fondo blanco. Se ve bien para ti, pero alguien con baja visión no puede leerlo. Pega tus colores y ve al instante: Aprueba o Falla, con la relación de contraste exacta.", ar: "اخترت نصاً رمادياً فاتحاً على خلفية بيضاء. يبدو جيداً لك، لكن شخصاً ضعيف البصر لا يمكنه قراءته. الصق ألوانك وشاهد فوراً: نجاح أو فشل، مع نسبة التباين الدقيقة." },
  },

  {
    id: "base64-to-image",
    name: "Base64 to Image Converter",
    description: "Convert Base64 encoded strings back to image files. Preview and download PNG, JPEG, GIF, WebP, or SVG images instantly. Auto-detects image format.",
    category: "developer",
    icon: "🖼️",
    path: "/tools/base64-to-image",
    seoTitle: "Free Base64 to Image Converter Online - Decode Base64 2026",
    seoDescription: "Convert Base64 strings to image files instantly. Preview decoded images and download as PNG, JPEG, GIF, WebP, or SVG. Free online Base64 decoder.",
    seoKeywords: ["base64 to image", "convert base64 to image", "base64 decoder", "decode base64 image", "base64 to png", "base64 image converter"],
    relatedTools: ["image-to-base64", "base64-converter", "css-minifier"],
    sceneIntro: "Someone sent you a Base64 string and said 'here's the logo.' You paste it, and a preview appears — PNG, JPEG, or SVG, auto-detected. Download it as an image file in one click.",
    howToUse: ["Paste your Base64 string into the input area. It can be a raw Base64 string or a full data URI.", "The tool auto-detects the image format (PNG, JPEG, GIF, WebP, SVG).", "Preview the decoded image instantly.", "Click Download to save the image file to your device."],
    faq: [
      { question: "What Base64 formats does this support?", answer: "It supports raw Base64 strings and data URIs (data:image/png;base64,...). It auto-detects PNG, JPEG, GIF, WebP, and SVG formats from magic bytes." },
      { question: "Is there a file size limit?", answer: "The tool processes images in your browser, so it's limited by your device's memory. Most images under 50MB work fine." },
      { question: "Is my image data sent to a server?", answer: "No. All decoding happens locally in your browser. Your images never leave your device." },
    ],
    nameTranslations: { es: "Conversor de Base64 a Imagen", ar: "محول Base64 إلى صورة" },
    descriptionTranslations: { es: "Convierte cadenas Base64 de vuelta a archivos de imagen. Previsualiza y descarga imágenes PNG, JPEG, GIF, WebP o SVG al instante.", ar: "حول سلاسل Base64 مرة أخرى إلى ملفات صور. عاين ونزّل صور PNG أو JPEG أو GIF أو WebP أو SVG فوراً." },
    seoTitleTranslations: { es: "Conversor de Base64 a Imagen Gratis Online - Decodificar Base64 2026", ar: "محول Base64 إلى صورة مجاني عبر الإنترنت - فك تشفير Base64 2026" },
    seoDescriptionTranslations: { es: "Convierte cadenas Base64 a archivos de imagen al instante. Previsualiza imágenes decodificadas y descarga como PNG, JPEG, GIF, WebP o SVG.", ar: "حول سلاسل Base64 إلى ملفات صور فوراً. عاين الصور المفككة ونزلها بصيغة PNG أو JPEG أو GIF أو WebP أو SVG." },
    howToUseTranslations: {
      es: ["Pega tu cadena Base64 en el área de entrada. Puede ser una cadena Base64 cruda o un data URI completo.", "La herramienta detecta automáticamente el formato de imagen (PNG, JPEG, GIF, WebP, SVG).", "Previsualiza la imagen decodificada al instante.", "Haz clic en Descargar para guardar el archivo de imagen en tu dispositivo."],
      ar: ["الصق سلسلة Base64 في منطقة الإدخال. يمكن أن تكون سلسلة Base64 خام أو data URI كامل.", "تكتشف الأداة تلقائياً تنسيق الصورة (PNG، JPEG، GIF، WebP، SVG).", "عاين الصورة المفككة فوراً.", "انقر على تنزيل لحفظ ملف الصورة على جهازك."],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué formatos Base64 soporta?", answer: "Soporta cadenas Base64 crudas y data URIs. Detecta automáticamente formatos PNG, JPEG, GIF, WebP y SVG." },
        { question: "¿Hay un límite de tamaño de archivo?", answer: "La herramienta procesa imágenes en tu navegador, limitada por la memoria de tu dispositivo. La mayoría de imágenes bajo 50MB funcionan bien." },
        { question: "¿Se envían mis datos de imagen a un servidor?", answer: "No. Toda la decodificación ocurre localmente en tu navegador." },
      ],
      ar: [
        { question: "ما تنسيقات Base64 المدعومة؟", answer: "تدعم سلاسل Base64 الخام و data URIs. تكتشف تلقائياً تنسيقات PNG و JPEG و GIF و WebP و SVG." },
        { question: "هل هناك حد لحجم الملف؟", answer: "تعالج الأداة الصور في متصفحك، محدودة بذاكرة جهازك. معظم الصور تحت 50MB تعمل بشكل جيد." },
        { question: "هل تُرسل بيانات صوري إلى خادم؟", answer: "لا. جميع عمليات فك التشفير تتم محلياً في متصفحك." },
      ],
    },
    sceneIntroTranslations: { es: "Alguien te envió una cadena Base64 y dijo 'aquí está el logo'. La pegas, y aparece una vista previa — PNG, JPEG o SVG, auto-detectado. Descárgalo como archivo de imagen en un clic.", ar: "أرسل لك شخص ما سلسلة Base64 وقال 'هذا هو الشعار'. تلصقها، ويظهر معاينة — PNG أو JPEG أو SVG، مكتشف تلقائياً. نزله كملف صورة بنقرة واحدة." },
  },

  {
    id: "code-formatter",
    name: "Code Formatter",
    description: "Format and beautify JSON, JavaScript, CSS, and HTML code. Make minified or messy code readable with one click. Supports 4 languages.",
    category: "developer",
    icon: "{ }",
    path: "/tools/code-formatter",
    seoTitle: "Free Code Formatter Online - Beautify JSON, JS, CSS, HTML 2026",
    seoDescription: "Format and beautify JSON, JavaScript, CSS, and HTML code instantly. Make minified code readable. Free online code formatter for developers.",
    seoKeywords: ["code formatter", "json formatter", "javascript formatter", "css beautifier", "html formatter", "format code online", "beautify code"],
    relatedTools: ["json-formatter", "css-minifier", "html-entities", "regex-tester"],
    sceneIntro: "You opened a minified JavaScript file — one line, 8000 characters. You need to debug it. Paste it here, pick JavaScript, click Format. Now you can actually read the code.",
    howToUse: ["Select the language of your code: JSON, JavaScript, CSS, or HTML.", "Paste your code into the input area.", "Click Format to beautify and indent the code.", "Copy the formatted result to your clipboard."],
    faq: [
      { question: "Which languages does this support?", answer: "JSON, JavaScript, CSS, and HTML. JSON uses native parsing for perfect formatting. JS, CSS, and HTML use regex-based beautifiers for fast results." },
      { question: "Does this validate my code?", answer: "JSON mode validates syntax and shows errors. JS, CSS, and HTML modes format the code but don't validate syntax." },
      { question: "Is my code sent to a server?", answer: "No. All formatting happens in your browser. Your code never leaves your device." },
    ],
    nameTranslations: { es: "Formateador de Código", ar: "منسق الكود" },
    descriptionTranslations: { es: "Formatea y embellece código JSON, JavaScript, CSS y HTML. Haz que el código minimizado sea legible con un clic.", ar: "نسق وجمل كود JSON و JavaScript و CSS و HTML. اجعل الكود المضغوط قابلاً للقراءة بنقرة واحدة." },
    seoTitleTranslations: { es: "Formateador de Código Gratis Online - Embellecer JSON, JS, CSS, HTML 2026", ar: "منسق كود مجاني عبر الإنترنت - تجميل JSON و JS و CSS و HTML 2026" },
    seoDescriptionTranslations: { es: "Formatea y embellece código JSON, JavaScript, CSS y HTML al instante. Haz legible el código minimizado. Formateador online gratuito.", ar: "نسق وجمل كود JSON و JavaScript و CSS و HTML فوراً. اجعل الكود المضغوط قابلاً للقراءة. منسق مجاني عبر الإنترنت." },
    howToUseTranslations: {
      es: ["Selecciona el lenguaje de tu código: JSON, JavaScript, CSS o HTML.", "Pega tu código en el área de entrada.", "Haz clic en Formatear para embellecer e indentar el código.", "Copia el resultado formateado a tu portapapeles."],
      ar: ["اختر لغة الكود الخاص بك: JSON أو JavaScript أو CSS أو HTML.", "الصق الكود في منطقة الإدخال.", "انقر على تنسيق لتجميل وإزاحة الكود.", "انسخ النتيجة المنسقة إلى الحافظة."],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué lenguajes soporta?", answer: "JSON, JavaScript, CSS y HTML. JSON usa análisis nativo para formato perfecto. JS, CSS y HTML usan embellecedores basados en regex." },
        { question: "¿Esto valida mi código?", answer: "El modo JSON valida la sintaxis y muestra errores. Los modos JS, CSS y HTML formatean pero no validan sintaxis." },
        { question: "¿Se envía mi código a un servidor?", answer: "No. Todo el formateo ocurre en tu navegador." },
      ],
      ar: [
        { question: "ما اللغات المدعومة؟", answer: "JSON و JavaScript و CSS و HTML. يستخدم JSON التحليل الأصلي لتنسيق مثالي. JS و CSS و HTML تستخدم منسقات قائمة على regex." },
        { question: "هل يتحقق هذا من صحة الكود؟", answer: "يتحقق وضع JSON من الصحة ويعرض الأخطاء. أوضاع JS و CSS و HTML تنسق الكود لكنها لا تتحقق من الصحة." },
        { question: "هل يُرسل الكود إلى خادم؟", answer: "لا. جميع عمليات التنسيق تتم في متصفحك." },
      ],
    },
    sceneIntroTranslations: { es: "Abriste un archivo JavaScript minimizado — una línea, 8000 caracteres. Necesitas depurarlo. Pégalo aquí, elige JavaScript, haz clic en Formatear. Ahora puedes leer el código.", ar: "فتحت ملف JavaScript مضغوط — سطر واحد، 8000 حرف. تحتاج إلى تصحيحه. الصقه هنا، اختر JavaScript، انقر على تنسيق. الآن يمكنك قراءة الكود." },
  },

  {
    id: "svg-minifier",
    name: "SVG Minifier",
    description: "Minify SVG code by removing comments, whitespace, XML declarations, and unnecessary metadata. Reduce file size for faster-loading web pages.",
    category: "developer",
    icon: "📐",
    path: "/tools/svg-minifier",
    seoTitle: "Free SVG Minifier Online - Compress SVG Files 2026",
    seoDescription: "Minify SVG code to reduce file size. Remove comments, whitespace, and metadata. See compression stats instantly. Free online SVG optimizer.",
    seoKeywords: ["svg minifier", "compress svg", "optimize svg", "svg optimizer", "minify svg online", "svg compressor"],
    relatedTools: ["css-minifier", "image-to-base64", "color-converter"],
    sceneIntro: "Your SVG icon set is 12KB of readable code — and 9KB of it is whitespace and comments. Paste it here, click Minify, and ship the 3KB version to production.",
    howToUse: ["Paste your SVG code into the input area.", "Click Minify to remove comments, whitespace, and unnecessary metadata.", "See the compression stats: original size, minified size, and savings percentage.", "Copy the minified SVG to your clipboard."],
    faq: [
      { question: "What does SVG minification remove?", answer: "It removes HTML comments, XML declarations, DOCTYPE declarations, extra whitespace, and spaces between tags and attributes." },
      { question: "Will minification break my SVG?", answer: "No. The minifier preserves all SVG elements, attributes, and paths. It only removes non-functional content like comments and whitespace." },
      { question: "Is my SVG sent to a server?", answer: "No. All minification happens in your browser." },
    ],
    nameTranslations: { es: "Minificador de SVG", ar: "مصغر SVG" },
    descriptionTranslations: { es: "Minifica código SVG eliminando comentarios, espacios en blanco y metadatos innecesarios. Reduce el tamaño para páginas web más rápidas.", ar: "صغر كود SVG بإزالة التعليقات والمسافات البيضاء والبيانات الوصفية غير الضرورية. قلل الحجم لصفحات ويب أسرع." },
    seoTitleTranslations: { es: "Minificador de SVG Gratis Online - Comprimir Archivos SVG 2026", ar: "مصغر SVG مجاني عبر الإنترنت - ضغط ملفات SVG 2026" },
    seoDescriptionTranslations: { es: "Minifica código SVG para reducir el tamaño del archivo. Elimina comentarios, espacios en blanco y metadatos. Ve estadísticas de compresión al instante.", ar: "صغر كود SVG لتقليل حجم الملف. أزل التعليقات والمسافات البيضاء والبيانات الوصفية. شاهد إحصائيات الضغط فوراً." },
    howToUseTranslations: {
      es: ["Pega tu código SVG en el área de entrada.", "Haz clic en Minificar para eliminar comentarios, espacios y metadatos.", "Ve las estadísticas: tamaño original, tamaño minimizado y porcentaje de ahorro.", "Copia el SVG minimizado a tu portapapeles."],
      ar: ["الصق كود SVG في منطقة الإدخال.", "انقر على تصغير لإزالة التعليقات والمسافات والبيانات الوصفية.", "شاهد الإحصائيات: الحجم الأصلي، الحجم المصغر، ونسبة التوفير.", "انسخ SVG المصغر إلى الحافظة."],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué elimina la minificación SVG?", answer: "Elimina comentarios HTML, declaraciones XML, DOCTYPE, espacios en blanco extra, y espacios entre etiquetas y atributos." },
        { question: "¿La minificación romperá mi SVG?", answer: "No. El minificador preserva todos los elementos, atributos y rutas SVG." },
        { question: "¿Se envía mi SVG a un servidor?", answer: "No. Toda la minificación ocurre en tu navegador." },
      ],
      ar: [
        { question: "ماذا تزيل عملية تصغير SVG؟", answer: "تزيل تعليقات HTML وإعلانات XML وDOCTYPE والمسافات البيضاء الإضافية والمسافات بين الوسوم والسمات." },
        { question: "هل سيؤدي التصغير إلى كسر SVG الخاص بي؟", answer: "لا. يحافظ المصغر على جميع عناصر وسمات ومسارات SVG." },
        { question: "هل يُرسل SVG إلى خادم؟", answer: "لا. جميع عمليات التصغير تتم في متصفحك." },
      ],
    },
    sceneIntroTranslations: { es: "Tu conjunto de iconos SVG pesa 12KB de código legible — y 9KB son espacios y comentarios. Pégalo aquí, haz clic en Minificar, y envía la versión de 3KB a producción.", ar: "مجموعة أيقونات SVG الخاصة بك حجمها 12KB من الكود القابل للقراءة — و 9KB منها مسافات وتعليقات. الصقها هنا، انقر على تصغير، وأرسل نسخة 3KB إلى الإنتاج." },
  },

  {
    id: "html-to-markdown",
    name: "HTML to Markdown Converter",
    description: "Convert HTML code to clean Markdown format instantly. Tables, lists, links, and formatting all preserved. Perfect for migrating content to documentation.",
    category: "developer",
    icon: "📝",
    path: "/tools/html-to-markdown",
    seoTitle: "Free HTML to Markdown Converter Online - Convert HTML to MD 2026",
    seoDescription: "Convert HTML to clean Markdown instantly. Preserves tables, lists, links, headings, and formatting. Free online HTML to Markdown converter.",
    seoKeywords: ["html to markdown", "convert html to markdown", "html to md", "markdown converter", "html markdown converter", "turndown"],
    relatedTools: ["markdown-preview", "css-minifier", "json-formatter"],
    sceneIntro: "You copied a rich HTML table from a Confluence page and need it in Markdown for your README. Paste the HTML here — the table, links, and headings all convert to clean Markdown syntax instantly.",
    howToUse: ["Paste your HTML code into the left input area.", "The Markdown output appears instantly in the right panel.", "Review and copy the converted Markdown to your clipboard."],
    faq: [
      { question: "Does this support HTML tables?", answer: "Yes. HTML tables are converted to GitHub-flavored Markdown table syntax with proper alignment." },
      { question: "What HTML elements are supported?", answer: "Headings (h1-h6), paragraphs, bold/italic, links, images, ordered/unordered lists, code blocks, blockquotes, horizontal rules, and tables." },
      { question: "Is my HTML sent to a server?", answer: "No. All conversion happens in your browser using the Turndown library." },
    ],
    nameTranslations: { es: "Conversor de HTML a Markdown", ar: "محول HTML إلى Markdown" },
    descriptionTranslations: { es: "Convierte código HTML a formato Markdown limpio al instante. Tablas, listas, enlaces y formato preservados.", ar: "حول كود HTML إلى تنسيق Markdown نظيف فوراً. الجداول والقوائم والروابط والتنسيق محفوظة." },
    seoTitleTranslations: { es: "Conversor de HTML a Markdown Gratis Online - Convertir HTML a MD 2026", ar: "محول HTML إلى Markdown مجاني عبر الإنترنت - تحويل HTML إلى MD 2026" },
    seoDescriptionTranslations: { es: "Convierte HTML a Markdown limpio al instante. Conserva tablas, listas, enlaces, encabezados y formato. Conversor online gratuito.", ar: "حول HTML إلى Markdown نظيف فوراً. يحافظ على الجداول والقوائم والروابط والعناوين والتنسيق. محول مجاني عبر الإنترنت." },
    howToUseTranslations: {
      es: ["Pega tu código HTML en el área de entrada izquierda.", "La salida Markdown aparece instantáneamente en el panel derecho.", "Revisa y copia el Markdown convertido a tu portapapeles."],
      ar: ["الصق كود HTML في منطقة الإدخال اليسرى.", "يظهر مخرج Markdown فوراً في اللوحة اليمنى.", "راجع وانسخ Markdown المحول إلى الحافظة."],
    },
    faqTranslations: {
      es: [
        { question: "¿Soporta tablas HTML?", answer: "Sí. Las tablas HTML se convierten a sintaxis de tabla Markdown estilo GitHub." },
        { question: "¿Qué elementos HTML están soportados?", answer: "Encabezados, párrafos, negrita/cursiva, enlaces, imágenes, listas, bloques de código, citas, líneas horizontales y tablas." },
        { question: "¿Se envía mi HTML a un servidor?", answer: "No. Toda la conversión ocurre en tu navegador usando la biblioteca Turndown." },
      ],
      ar: [
        { question: "هل يدعم جداول HTML؟", answer: "نعم. تُحول جداول HTML إلى صيغة جدول Markdown بأسلوب GitHub." },
        { question: "ما عناصر HTML المدعومة؟", answer: "العناوين والفقرات والغامق/المائل والروابط والصور والقوائم وكتل الكود والاقتباسات والخطوط الأفقية والجداول." },
        { question: "هل يُرسل HTML إلى خادم؟", answer: "لا. جميع عمليات التحويل تتم في متصفحك باستخدام مكتبة Turndown." },
      ],
    },
    sceneIntroTranslations: { es: "Copiaste una tabla HTML de una página de Confluence y la necesitas en Markdown para tu README. Pega el HTML aquí — la tabla, enlaces y encabezados se convierten a Markdown limpio al instante.", ar: "نسخت جدول HTML من صفحة Confluence وتحتاجه بصيغة Markdown لـ README. الصق HTML هنا — يتحول الجدول والروابط والعناوين إلى Markdown نظيف فوراً." },
  },

  {
    id: "qr-code-scanner",
    name: "QR Code Scanner",
    description: "Scan QR codes using your device camera, or decode them from uploaded or pasted images. Fast, private, and works entirely in your browser.",
    category: "developer",
    icon: "📷",
    path: "/tools/qr-code-scanner",
    seoTitle: "Free QR Code Scanner Online - Scan with Camera 2026",
    seoDescription: "Scan QR codes with your camera or decode from images. Upload, paste, or use live camera. Free online QR scanner. No data uploaded.",
    seoKeywords: ["qr code scanner", "scan qr code online", "qr scanner camera", "decode qr code", "qr code reader", "scan qr from image"],
    relatedTools: ["qr-code-generator", "image-to-base64", "url-encoder"],
    sceneIntro: "Someone handed you a printed QR code on a flyer. You don't have a scanner app. Open this page, allow camera, point at the code — the decoded text or URL appears instantly.",
    howToUse: ["Allow camera access when prompted, or upload/paste a QR code image.", "Point your camera at a QR code — it decodes automatically.", "For images: upload a file or paste from clipboard (Ctrl+V).", "Copy the decoded result to your clipboard."],
    faq: [
      { question: "Does this work on mobile?", answer: "Yes. On mobile, use the camera button to scan QR codes directly. The rear camera is used by default." },
      { question: "Can I scan from a screenshot?", answer: "Yes. Upload an image file or paste a screenshot from your clipboard. The tool decodes any QR code in the image." },
      { question: "Is my camera data sent anywhere?", answer: "No. The camera feed is processed entirely in your browser. No video or images are uploaded to any server." },
      { question: "What happens to the decoded data?", answer: "It's displayed on screen for you to copy. Nothing is stored or sent anywhere." },
    ],
    nameTranslations: { es: "Escáner de Código QR", ar: "ماسح رمز QR" },
    descriptionTranslations: { es: "Escanea códigos QR con tu cámara o decodifícalos desde imágenes subidas o pegadas. Rápido, privado y funciona en tu navegador.", ar: "امسح رموز QR باستخدام كاميرا جهازك، أو فك تشفيرها من الصور المرفوعة أو الملصوقة. سريع وخاص ويعمل بالكامل في متصفحك." },
    seoTitleTranslations: { es: "Escáner de Código QR Gratis Online - Escanear con Cámara 2026", ar: "ماسح رمز QR مجاني عبر الإنترنت - امسح بالكاميرا 2026" },
    seoDescriptionTranslations: { es: "Escanea códigos QR con tu cámara o decodifica desde imágenes. Sube, pega o usa cámara en vivo. Escáner QR online gratuito.", ar: "امسح رموز QR بالكاميرا أو فك تشفيرها من الصور. ارفع أو الصق أو استخدم الكاميرا المباشرة. ماسح QR مجاني عبر الإنترنت." },
    howToUseTranslations: {
      es: ["Permite el acceso a la cámara cuando se solicite, o sube/pega una imagen de código QR.", "Apunta tu cámara a un código QR — se decodifica automáticamente.", "Para imágenes: sube un archivo o pega desde el portapapeles (Ctrl+V).", "Copia el resultado decodificado a tu portapapeles."],
      ar: ["اسمح بالوصول إلى الكاميرا عند الطلب، أو ارفع/الصق صورة رمز QR.", "وجه كاميراك نحو رمز QR — يتم فك التشفير تلقائياً.", "للصور: ارفع ملفاً أو الصق من الحافظة (Ctrl+V).", "انسخ النتيجة المفككة إلى الحافظة."],
    },
    faqTranslations: {
      es: [
        { question: "¿Funciona en móviles?", answer: "Sí. En móviles, usa el botón de cámara para escanear códigos QR directamente. Se usa la cámara trasera por defecto." },
        { question: "¿Puedo escanear desde una captura de pantalla?", answer: "Sí. Sube un archivo de imagen o pega una captura desde el portapapeles." },
        { question: "¿Se envían los datos de mi cámara a algún lugar?", answer: "No. La cámara se procesa completamente en tu navegador." },
        { question: "¿Qué pasa con los datos decodificados?", answer: "Se muestran en pantalla para que los copies. Nada se almacena ni se envía." },
      ],
      ar: [
        { question: "هل يعمل على الهاتف المحمول؟", answer: "نعم. على الهاتف، استخدم زر الكاميرا لمسح رموز QR مباشرة. تُستخدم الكاميرا الخلفية افتراضياً." },
        { question: "هل يمكنني المسح من لقطة شاشة؟", answer: "نعم. ارفع ملف صورة أو الصق لقطة شاشة من الحافظة." },
        { question: "هل تُرسل بيانات الكاميرا إلى أي مكان؟", answer: "لا. تتم معالجة الكاميرا بالكامل في متصفحك." },
        { question: "ماذا يحدث للبيانات المفككة؟", answer: "تُعرض على الشاشة لتنسخها. لا يتم تخزين أو إرسال أي شيء." },
      ],
    },
    sceneIntroTranslations: { es: "Alguien te entregó un código QR impreso en un volante. No tienes una app de escáner. Abre esta página, permite la cámara, apunta al código — el texto o URL decodificado aparece al instante.", ar: "أعطاك شخص ما رمز QR مطبوع على منشور. ليس لديك تطبيق ماسح. افتح هذه الصفحة، اسمح بالكاميرا، وجه نحو الرمز — يظهر النص أو الرابط المفكك فوراً." },
  },

"""

# Find the last "];" before exports
idx = ts.rfind("];")
ts = ts[:idx] + "\n" + new_tools + "\n];"

# Ensure exports exist
if "export function getBlogPosts" not in ts:
    ts += "\nexport function getBlogPosts(): BlogPost[] { return blogPosts.sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime()); }\nexport function getBlogPost(slug:string): BlogPost|undefined { return blogPosts.find(p=>p.slug===slug); }\n"

with open(tools_path, "w", encoding="utf-8") as f:
    f.write(ts)
print(f"tools.ts updated: {len(ts)} chars")


# ===== 2. Add translations to 3 locale files =====

translations = {
    "colorContrastChecker": {
        "foreground": "Foreground Color",
        "background": "Background Color",
        "contrastRatio": "Contrast Ratio",
        "aaNormal": "AA Normal",
        "aaLarge": "AA Large",
        "aaaNormal": "AAA Normal",
        "aaaLarge": "AAA Large",
        "pass": "Pass",
        "fail": "Fail",
        "preview": "Preview",
        "previewText": "The quick brown fox jumps over the lazy dog."
    },
    "base64ToImage": {
        "placeholder": "Paste your Base64 string here...",
        "preview": "Preview",
        "download": "Download Image",
        "format": "Detected format",
        "copy": "Copy",
        "error": "Invalid Base64 string"
    },
    "codeFormatter": {
        "format": "Format",
        "language": "Language",
        "json": "JSON",
        "javascript": "JavaScript",
        "css": "CSS",
        "html": "HTML",
        "placeholder": "Paste your code here...",
        "copy": "Copy",
        "result": "Result",
        "invalid": "Invalid code",
        "error": "Error"
    },
    "svgMinifier": {
        "minify": "Minify",
        "placeholder": "Paste your SVG here...",
        "copy": "Copy",
        "result": "Result",
        "reduced": "Reduced from {{original}}B to {{minified}}B ({{savings}}% smaller)"
    },
    "htmlToMarkdown": {
        "placeholder": "Paste your HTML here...",
        "copy": "Copy",
        "result": "Markdown",
        "inputLabel": "HTML Input",
        "outputLabel": "Markdown Output"
    },
    "qrCodeScanner": {
        "startCamera": "Start Camera",
        "stopCamera": "Stop Camera",
        "uploadImage": "Upload Image",
        "result": "Result",
        "copy": "Copy",
        "error": "Error",
        "noCamera": "Camera not available or permission denied.",
        "noQrFound": "No QR code found in this image.",
        "instructions": "Paste an image from clipboard, upload a file, or use your camera to scan."
    }
}

# Spanish
es_translations = {
    "colorContrastChecker": {
        "foreground": "Color de Primer Plano",
        "background": "Color de Fondo",
        "contrastRatio": "Relación de Contraste",
        "aaNormal": "AA Normal",
        "aaLarge": "AA Grande",
        "aaaNormal": "AAA Normal",
        "aaaLarge": "AAA Grande",
        "pass": "Aprueba",
        "fail": "Falla",
        "preview": "Vista Previa",
        "previewText": "El rápido zorro marrón salta sobre el perro perezoso."
    },
    "base64ToImage": {
        "placeholder": "Pega tu cadena Base64 aquí...",
        "preview": "Vista Previa",
        "download": "Descargar Imagen",
        "format": "Formato detectado",
        "copy": "Copiar",
        "error": "Cadena Base64 inválida"
    },
    "codeFormatter": {
        "format": "Formatear",
        "language": "Lenguaje",
        "json": "JSON",
        "javascript": "JavaScript",
        "css": "CSS",
        "html": "HTML",
        "placeholder": "Pega tu código aquí...",
        "copy": "Copiar",
        "result": "Resultado",
        "invalid": "Código inválido",
        "error": "Error"
    },
    "svgMinifier": {
        "minify": "Minificar",
        "placeholder": "Pega tu SVG aquí...",
        "copy": "Copiar",
        "result": "Resultado",
        "reduced": "Reducido de {{original}}B a {{minified}}B ({{savings}}% más pequeño)"
    },
    "htmlToMarkdown": {
        "placeholder": "Pega tu HTML aquí...",
        "copy": "Copiar",
        "result": "Markdown",
        "inputLabel": "Entrada HTML",
        "outputLabel": "Salida Markdown"
    },
    "qrCodeScanner": {
        "startCamera": "Iniciar Cámara",
        "stopCamera": "Detener Cámara",
        "uploadImage": "Subir Imagen",
        "result": "Resultado",
        "copy": "Copiar",
        "error": "Error",
        "noCamera": "Cámara no disponible o permiso denegado.",
        "noQrFound": "No se encontró código QR en esta imagen.",
        "instructions": "Pega una imagen del portapapeles, sube un archivo o usa tu cámara para escanear."
    }
}

# Arabic
ar_translations = {
    "colorContrastChecker": {
        "foreground": "لون المقدمة",
        "background": "لون الخلفية",
        "contrastRatio": "نسبة التباين",
        "aaNormal": "AA عادي",
        "aaLarge": "AA كبير",
        "aaaNormal": "AAA عادي",
        "aaaLarge": "AAA كبير",
        "pass": "نجاح",
        "fail": "فشل",
        "preview": "معاينة",
        "previewText": "الثعلب البني السريع يقفز فوق الكلب الكسول."
    },
    "base64ToImage": {
        "placeholder": "الصق سلسلة Base64 هنا...",
        "preview": "معاينة",
        "download": "تنزيل الصورة",
        "format": "التنسيق المكتشف",
        "copy": "نسخ",
        "error": "سلسلة Base64 غير صالحة"
    },
    "codeFormatter": {
        "format": "تنسيق",
        "language": "اللغة",
        "json": "JSON",
        "javascript": "JavaScript",
        "css": "CSS",
        "html": "HTML",
        "placeholder": "الصق الكود هنا...",
        "copy": "نسخ",
        "result": "النتيجة",
        "invalid": "كود غير صالح",
        "error": "خطأ"
    },
    "svgMinifier": {
        "minify": "تصغير",
        "placeholder": "الصق SVG هنا...",
        "copy": "نسخ",
        "result": "النتيجة",
        "reduced": "تم التصغير من {{original}}B إلى {{minified}}B ({{savings}}% أصغر)"
    },
    "htmlToMarkdown": {
        "placeholder": "الصق HTML هنا...",
        "copy": "نسخ",
        "result": "Markdown",
        "inputLabel": "إدخال HTML",
        "outputLabel": "إخراج Markdown"
    },
    "qrCodeScanner": {
        "startCamera": "تشغيل الكاميرا",
        "stopCamera": "إيقاف الكاميرا",
        "uploadImage": "رفع صورة",
        "result": "النتيجة",
        "copy": "نسخ",
        "error": "خطأ",
        "noCamera": "الكاميرا غير متاحة أو تم رفض الإذن.",
        "noQrFound": "لم يتم العثور على رمز QR في هذه الصورة.",
        "instructions": "الصق صورة من الحافظة، أو ارفع ملفاً، أو استخدم الكاميرا للمسح."
    }
}

for lang, trans in [("en", translations), ("es", es_translations), ("ar", ar_translations)]:
    locale_path = os.path.join(BASE, f"src/locales/{lang}/common.json")
    with open(locale_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    data.update(trans)
    with open(locale_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent="\t")
    print(f"{lang}/common.json updated: {len(data)} keys")

print("DONE")
