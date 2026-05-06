// Robust approach: split by tool blocks and inject translations
const fs = require("fs");
const path = require("path");

const TOOLS_FILE = path.join(__dirname, "..", "src", "lib", "tools.ts");
let content = fs.readFileSync(TOOLS_FILE, "utf-8");

// Translation map - key is tool ID
const T = {
  "word-counter": { ne:"Contador de Palabras",na:"عداد الكلمات", de:"Cuenta palabras, caracteres, oraciones y párrafos en tiempo real.",da:"عد الكلمات والأحرف والجمل والفقرات في نصك فوراً.", se:"Contador de Palabras Gratis Online 2026",sa:"عداد كلمات مجاني عبر الإنترنت 2026", sde:"Herramienta gratuita para contar palabras sin registro.",sda:"أداة مجانية لعد الكلمات بدون تسجيل." },
  "case-converter": { ne:"Convertidor de Mayúsculas y Minúsculas",na:"محول حالة الأحرف", de:"Convierte texto entre mayúsculas, minúsculas, título y oraciones.",da:"حول النص بين الأحرف الكبيرة والصغيرة والعنوان والجمل.", se:"Convertidor de Mayúsculas Gratis Online",sa:"محول حالة الأحرف مجاني عبر الإنترنت", sde:"Cambia el caso de tu texto gratis al instante.",sda:"غيّر حالة نصك مجاناً فوراً." },
  "lorem-ipsum": { ne:"Generador de Lorem Ipsum",na:"مولد لوريم إيبسوم", de:"Genera texto de relleno Lorem Ipsum para diseños y maquetas.",da:"أنشئ نص لوريم إيبسوم لتصاميمك ونماذجك.", se:"Generador de Lorem Ipsum Gratis",sa:"مولد لوريم إيبسوم مجاني", sde:"Genera párrafos Lorem Ipsum para tus diseños.",sda:"أنشئ فقرات لوريم إيبسوم لتصاميمك." },
  "text-repeater": { ne:"Repetidor de Texto",na:"مكرر النص", de:"Repite cualquier texto o carácter tantas veces como necesites.",da:"كرر أي نص أو حرف عدة مرات حسب حاجتك.", se:"Repetidor de Texto Gratis Online",sa:"مكرر نص مجاني عبر الإنترنت", sde:"Herramienta simple para repetir texto múltiples veces.",sda:"أداة بسيطة لتكرار النص عدة مرات." },
  "text-to-slug": { ne:"Convertidor de Texto a Slug",na:"محول النص إلى سلاج", de:"Convierte texto en slug URL-friendly para URLs y archivos.",da:"حول النص إلى سلاج مناسب لعناوين URL والملفات.", se:"Generador de Slug Gratis - Texto a URL",sa:"مولد سلاج مجاني - نص إلى URL", sde:"Genera slugs limpios y seguros para URLs.",sda:"أنشئ سلاج نظيف وآمن لعناوين URL." },
  "remove-duplicate-lines": { ne:"Eliminar Líneas Duplicadas",na:"إزالة الأسطر المكررة", de:"Elimina líneas duplicadas de tu texto al instante.",da:"أزل الأسطر المكررة من نصك فوراً.", se:"Eliminar Duplicados Gratis Online",sa:"إزالة التكرارات مجاناً عبر الإنترنت", sde:"Elimina duplicados de listas y datos de texto.",sda:"أزل التكرارات من القوائم وبيانات النص." },
  "text-diff": { ne:"Comparador de Texto",na:"مقارنة النصوص", de:"Compara dos textos y resalta las diferencias.",da:"قارن نصين وأبرز الاختلافات بينهما.", se:"Comparador de Texto Gratis Online",sa:"مقارنة نصوص مجانية عبر الإنترنت", sde:"Compara textos lado a lado y encuentra diferencias.",sda:"قارن النصوص جنباً إلى جنب واعثر على الاختلافات." },
  "fancy-text-generator": { ne:"Generador de Texto Estilizado",na:"مولد نص مزخرف", de:"Genera texto estilizado para redes sociales y perfiles.",da:"أنشئ نص مزخرف لوسائل التواصل الاجتماعي والملفات.", se:"Generador de Texto Estilizado Gratis",sa:"مولد نص مزخرف مجاني", sde:"Crea texto bonito con estilos únicos para Instagram.",sda:"أنشئ نص جميل بأنماط فريدة لإنستغرام." },
  "hashtag-generator": { ne:"Generador de Hashtags",na:"مولد الهاشتاج", de:"Genera hashtags populares para redes sociales.",da:"أنشئ هاشتاجات شائعة لوسائل التواصل الاجتماعي.", se:"Generador de Hashtags Gratis Online",sa:"مولد هاشتاج مجاني عبر الإنترنت", sde:"Genera hashtags relevantes para Instagram y Twitter.",sda:"أنشئ هاشتاجات ذات صلة لإنستغرام وتويتر." },
  "markdown-preview": { ne:"Editor y Vista Previa de Markdown",na:"محرر ومعاينة Markdown", de:"Escribe Markdown y obtén vista previa HTML al instante.",da:"اكتب Markdown واحصل على معاينة HTML فوراً.", se:"Editor de Markdown Gratis con Vista Previa",sa:"محرر Markdown مجاني مع معاينة", sde:"Editor online con vista previa en tiempo real.",sda:"محرر عبر الإنترنت مع معاينة في الوقت الفعلي." },
  "quotes": { ne:"Generador de Citas Inspiradoras",na:"مولد اقتباسات ملهمة", de:"Recibe citas aleatorias inspiradoras y motivadoras.",da:"احصل على اقتباسات ملهمة ومحفزة عشوائية.", se:"Generador de Citas Gratis Online",sa:"مولد اقتباسات مجاني عبر الإنترنت", sde:"Descubre citas motivadoras e inspiradoras cada día.",sda:"اكتشف اقتباسات محفزة وملهمة كل يوم." },
  "random-name-generator": { ne:"Generador de Nombres Aleatorios",na:"مولد أسماء عشوائية", de:"Genera nombres aleatorios para personajes y proyectos.",da:"أنشئ أسماء عشوائية للشخصيات والمشاريع.", se:"Generador de Nombres Aleatorios Gratis",sa:"مولد أسماء عشوائية مجاني", sde:"Genera nombres creativos y únicos.",sda:"أنشئ أسماء إبداعية وفريدة." },
  "book-of-answers": { ne:"Libro de las Respuestas",na:"كتاب الإجابات", de:"Un libro digital de respuestas para toma de decisiones.",da:"كتاب رقمي للإجابات لاتخاذ القرارات.", se:"Libro de las Respuestas Gratis Online",sa:"كتاب الإجابات مجاني عبر الإنترنت", sde:"Haz una pregunta y recibe una respuesta misteriosa.",sda:"اطرح سؤالاً واحصل على إجابة غامضة." },
  "base64-converter": { ne:"Convertidor Base64",na:"محول Base64", de:"Codifica y decodifica texto a Base64 al instante.",da:"شفّر وفك تشفير النص إلى Base64 فوراً.", se:"Convertidor Base64 Gratis Online",sa:"محول Base64 مجاني عبر الإنترنت", sde:"Codifica o decodifica Base64 gratis.",sda:"شفّر أو فك تشفير Base64 مجاناً." },
  "url-encoder": { ne:"Codificador y Decodificador de URL",na:"مشفر وفك تشفير URL", de:"Codifica y decodifica cadenas URL-encoded.",da:"شفّر وفك تشفير سلاسل URL-encoded.", se:"Codificador de URL Gratis Online",sa:"مشفر URL مجاني عبر الإنترنت", sde:"Codifica y decodifica URLs rápidamente.",sda:"شفّر وفك تشفير عناوين URL بسرعة." },
  "html-entities": { ne:"Codificador de Entidades HTML",na:"مشفر كيانات HTML", de:"Codifica y decodifica entidades HTML especiales.",da:"شفّر وفك تشفير كيانات HTML الخاصة.", se:"Codificador HTML Entities Gratis",sa:"مشفر كيانات HTML مجاني", sde:"Convierte caracteres especiales a entidades HTML.",sda:"حوّل الأحرف الخاصة إلى كيانات HTML." },
  "json-formatter": { ne:"Formateador de JSON",na:"منسق JSON", de:"Formatea, valida y embellece código JSON.",da:"نسّق وتحقق وجمّل كود JSON.", se:"Formateador de JSON Gratis Online",sa:"منسق JSON مجاني عبر الإنترنت", sde:"Formatea y valida JSON profesionalmente.",sda:"نسّق وتحقق من JSON باحترافية." },
  "csv-to-json": { ne:"Convertidor CSV a JSON",na:"محول CSV إلى JSON", de:"Convierte datos CSV a formato JSON al instante.",da:"حوّل بيانات CSV إلى تنسيق JSON فوراً.", se:"Convertidor CSV a JSON Gratis",sa:"محول CSV إلى JSON مجاني", sde:"Transforma archivos CSV a JSON rápidamente.",sda:"حوّل ملفات CSV إلى JSON بسرعة." },
  "json-to-csv": { ne:"Convertidor JSON a CSV",na:"محول JSON إلى CSV", de:"Convierte datos JSON a formato CSV para hojas de cálculo.",da:"حوّل بيانات JSON إلى تنسيق CSV لجداول البيانات.", se:"Convertidor JSON a CSV Gratis",sa:"محول JSON إلى CSV مجاني", sde:"Convierte JSON a CSV para importar a Excel.",sda:"حوّل JSON إلى CSV للاستيراد إلى Excel." },
  "regex-tester": { ne:"Probador de Expresiones Regulares",na:"مختبر التعبيرات العادية", de:"Prueba y depura expresiones regulares en tiempo real.",da:"اختبر وصحّح التعبيرات العادية في الوقت الفعلي.", se:"Probador de Regex Gratis Online",sa:"مختبر Regex مجاني عبر الإنترنت", sde:"Prueba patrones regex con coincidencias en vivo.",sda:"اختبر أنماط regex مع تطابقات مباشرة." },
  "css-minifier": { ne:"Minificador de CSS",na:"مصغر CSS", de:"Minifica y comprime código CSS para tu sitio web.",da:"صغّر واضغط كود CSS لموقعك الإلكتروني.", se:"Minificador de CSS Gratis Online",sa:"مصغر CSS مجاني عبر الإنترنت", sde:"Reduce el tamaño de tu CSS para mejor rendimiento.",sda:"قلل حجم CSS لتحسين الأداء." },
  "password-generator": { ne:"Generador de Contraseñas",na:"مولد كلمات المرور", de:"Genera contraseñas seguras y aleatorias personalizables.",da:"أنشئ كلمات مرور آمنة وعشوائية قابلة للتخصيص.", se:"Generador de Contraseñas Gratis",sa:"مولد كلمات مرور مجانية", sde:"Genera contraseñas fuertes con letras, números y símbolos.",sda:"أنشئ كلمات مرور قوية بأحرف وأرقام ورموز." },
  "uuid-generator": { ne:"Generador de UUID",na:"مولد UUID", de:"Genera UUIDs v4 al instante.",da:"أنشئ UUIDs v4 فوراً.", se:"Generador de UUID Gratis Online",sa:"مولد UUID مجاني عبر الإنترنت", sde:"Genera UUIDs únicos para bases de datos.",sda:"أنشئ UUIDs فريدة لقواعد البيانات." },
  "md5-generator": { ne:"Generador de MD5",na:"مولد MD5", de:"Genera hash MD5 de cualquier texto.",da:"أنشئ تجزئة MD5 من أي نص.", se:"Generador de MD5 Gratis Online",sa:"مولد MD5 مجاني عبر الإنترنت", sde:"Calcula hash MD5 para verificación.",sda:"احسب تجزئة MD5 للتحقق." },
  "hash-generator": { ne:"Generador de Hash SHA-256",na:"مولد تجزئة SHA-256", de:"Genera hashes SHA-256, SHA-384, SHA-512.",da:"أنشئ تجزئات SHA-256 و SHA-384 و SHA-512.", se:"Generador de Hash SHA Gratis",sa:"مولد تجزئة SHA مجاني", sde:"Genera hashes criptográficos SHA.",sda:"أنشئ تجزئات SHA التشفيرية." },
  "qr-code-generator": { ne:"Generador de Código QR",na:"مولد رمز QR", de:"Genera códigos QR para URLs, texto y emails.",da:"أنشئ رموز QR لعناوين URL والنص والبريد.", se:"Generador de QR Gratis Online",sa:"مولد QR مجاني عبر الإنترنت", sde:"Crea códigos QR personalizables.",sda:"أنشئ رموز QR قابلة للتخصيص." },
  "ai-tools": { ne:"Directorio de Herramientas IA",na:"دليل أدوات الذكاء الاصطناعي", de:"Explora las mejores herramientas de inteligencia artificial.",da:"استكشف أفضل أدوات الذكاء الاصطناعي.", se:"Mejores Herramientas de IA 2026",sa:"أفضل أدوات الذكاء الاصطناعي 2026", sde:"Herramientas de IA gratuitas para texto e imagen.",sda:"أدوات ذكاء اصطناعي مجانية للنص والصورة." },
  "unix-timestamp": { ne:"Convertidor de Timestamp Unix",na:"محول الطابع الزمني Unix", de:"Convierte timestamps Unix a fechas legibles.",da:"حوّل طوابع Unix إلى تواريخ قابلة للقراءة.", se:"Convertidor Unix Timestamp Gratis",sa:"محول Unix Timestamp مجاني", sde:"Convierte timestamps Unix a fechas humanas.",sda:"حوّل طوابع Unix إلى تواريخ بشرية." },
  "perpetual-calendar": { ne:"Calendario Perpetuo",na:"تقويم دائم", de:"Consulta cualquier fecha y día de la semana.",da:"اعرض أي تاريخ ويوم في الأسبوع.", se:"Calendario Perpetuo Gratis",sa:"تقويم دائم مجاني", sde:"Encuentra el día para cualquier fecha.",sda:"اعثر على يوم أي تاريخ." },
  "color-converter": { ne:"Convertidor de Colores",na:"محول الألوان", de:"Convierte entre HEX, RGB, HSL y nombres de colores.",da:"حول بين HEX و RGB و HSL وأسماء الألوان.", se:"Convertidor de Colores Gratis",sa:"محول ألوان مجاني", sde:"Herramienta de conversión de colores para diseño.",sda:"أداة تحويل الألوان للتصميم." },
  "unit-converter": { ne:"Convertidor de Unidades",na:"محول الوحدات", de:"Convierte entre unidades de longitud, peso y temperatura.",da:"حول بين وحدات الطول والوزن ودرجة الحرارة.", se:"Convertidor de Unidades Gratis",sa:"محول وحدات مجاني", sde:"Convertidor online de unidades métricas.",sda:"محول وحدات ميتري عبر الإنترنت." },
  "base-converter": { ne:"Convertidor de Bases Numéricas",na:"محول القواعد العددية", de:"Convierte entre binario, octal, decimal y hexadecimal.",da:"حول بين الثنائي والثماني والعشري والسادس عشر.", se:"Convertidor de Bases Numéricas Gratis",sa:"محول القواعد العددية مجاني", sde:"Convierte entre bases numéricas.",sda:"حوّل بين القواعد العددية." },
  "image-to-base64": { ne:"Convertidor de Imagen a Base64",na:"محول الصور إلى Base64", de:"Convierte imágenes a cadena Base64.",da:"حوّل الصور إلى سلسلة Base64.", se:"Convertidor de Imagen a Base64 Gratis",sa:"محول الصور إلى Base64 مجاني", sde:"Convierte PNG y JPG a Base64.",sda:"حوّل PNG و JPG إلى Base64." },
  "youtube-thumbnail": { ne:"Descargador de Miniaturas de YouTube",na:"محمل صور YouTube المصغرة", de:"Descarga miniaturas de YouTube en varias resoluciones.",da:"حمّل صور YouTube المصغرة بدقة مختلفة.", se:"Descargar Miniaturas de YouTube Gratis",sa:"تحميل صور YouTube المصغرة مجاناً", sde:"Obtén miniaturas en HD y SD.",sda:"احصل على صور مصغرة بجودة HD و SD." },
  "bmi-calculator": { ne:"Calculadora de IMC",na:"حاسبة مؤشر كتلة الجسم", de:"Calcula tu Índice de Masa Corporal y estado de salud.",da:"احسب مؤشر كتلة الجسم وحالتك الصحية.", se:"Calculadora de IMC Gratis Online",sa:"حاسبة BMI مجانية عبر الإنترنت", sde:"Calcula tu IMC y conoce tu peso saludable.",sda:"احسب BMI وتعرف على وزنك الصحي." },
  "calorie-calculator": { ne:"Calculadora de Calorías",na:"حاسبة السعرات الحرارية", de:"Calcula tus necesidades calóricas diarias.",da:"احسب احتياجك من السعرات الحرارية اليومية.", se:"Calculadora de Calorías Gratis",sa:"حاسبة سعرات حرارية مجانية", sde:"Descubre cuántas calorías necesitas al día.",sda:"اكتشف كم سعرة حرارية تحتاج يومياً." },
  "age-calculator": { ne:"Calculadora de Edad",na:"حاسبة العمر", de:"Calcula tu edad exacta en años, meses y días.",da:"احسب عمرك الدقيق بالسنوات والأشهر والأيام.", se:"Calculadora de Edad Gratis Online",sa:"حاسبة عمر مجانية عبر الإنترنت", sde:"Descubre tu edad precisa con detalle.",sda:"اكتشف عمرك الدقيق بالتفصيل." },
  "loan-calculator": { ne:"Calculadora de Préstamos",na:"حاسبة القروض", de:"Calcula cuotas mensuales e intereses de tu préstamo.",da:"احسب الأقساط الشهرية وفوائد قرضك.", se:"Calculadora de Préstamos Gratis",sa:"حاسبة قروض مجانية", sde:"Planifica tu préstamo con cuotas detalladas.",sda:"خطط لقرضك مع أقساط مفصلة." },
  "mortgage-calculator": { ne:"Calculadora de Hipoteca",na:"حاسبة الرهن العقاري", de:"Calcula tu cuota hipotecaria mensual con intereses.",da:"احسب قسط الرهن العقاري الشهري مع الفوائد.", se:"Calculadora de Hipoteca Gratis",sa:"حاسبة رهن عقاري مجانية", sde:"Estima tu pago hipotecario mensual.",sda:"قدّر دفعتك الشهرية للرهن العقاري." },
  "compound-interest": { ne:"Calculadora de Interés Compuesto",na:"حاسبة الفائدة المركبة", de:"Calcula el crecimiento de tu inversión con interés compuesto.",da:"احسب نمو استثمارك مع الفائدة المركبة.", se:"Calculadora de Interés Compuesto Gratis",sa:"حاسبة فائدة مركبة مجانية", sde:"Visualiza cómo crece tu dinero.",sda:"شاهد كيف ينمو مالك." },
  "tip-calculator": { ne:"Calculadora de Propinas",na:"حاسبة البقشيش", de:"Calcula la propina y el total en restaurantes.",da:"احسب البقشيش والمجموع الكلي في المطاعم.", se:"Calculadora de Propinas Gratis",sa:"حاسبة بقشيش مجانية", sde:"Divide la cuenta y calcula la propina.",sda:"اقسم الحساب واحسب البقشيش." },
  "percentage-calculator": { ne:"Calculadora de Porcentajes",na:"حاسبة النسب المئوية", de:"Calcula porcentajes, aumentos y descuentos.",da:"احسب النسب المئوية والزيادات والخصومات.", se:"Calculadora de Porcentajes Gratis",sa:"حاسبة نسب مئوية مجانية", sde:"Resuelve problemas de porcentajes.",sda:"حل مشاكل النسب المئوية." },
  "discount-calculator": { ne:"Calculadora de Descuentos",na:"حاسبة الخصومات", de:"Calcula el precio final después de un descuento.",da:"احسب السعر النهائي بعد الخصم.", se:"Calculadora de Descuentos Gratis",sa:"حاسبة خصومات مجانية", sde:"Descubre cuánto ahorras con descuentos.",sda:"اكتشف كم توفر مع الخصومات." },
  "income-tax-calculator": { ne:"Calculadora de Impuestos",na:"حاسبة الضرائب", de:"Estima tu impuesto sobre la renta y salario neto.",da:"قدّر ضريبة الدخل وصافي الراتب.", se:"Calculadora de Impuestos Gratis",sa:"حاسبة ضرائب مجانية", sde:"Calcula tu ingreso neto después de impuestos.",sda:"احسب دخلك الصافي بعد الضرائب." },
  "roi-calculator": { ne:"Calculadora de ROI",na:"حاسبة العائد على الاستثمار", de:"Calcula el retorno de inversión y ganancia.",da:"احسب العائد على الاستثمار والربح.", se:"Calculadora de ROI Gratis Online",sa:"حاسبة ROI مجانية عبر الإنترنت", sde:"Mide la rentabilidad de tus inversiones.",sda:"قس ربحية استثماراتك." },
  "pregnancy-calculator": { ne:"Calculadora de Embarazo",na:"حاسبة الحمل", de:"Calcula tu fecha probable de parto.",da:"احسب تاريخ الولادة المتوقع.", se:"Calculadora de Embarazo Gratis",sa:"حاسبة حمل مجانية", sde:"Estima tu fecha de parto semana a semana.",sda:"قدّر تاريخ ولادتك أسبوعاً بأسبوع." },
  "reaction-test": { ne:"Prueba de Tiempo de Reacción",na:"اختبار وقت رد الفعل", de:"Mide tu tiempo de reacción en milisegundos.",da:"قس وقت رد فعلك بالمللي ثانية.", se:"Test de Reacción Gratis Online",sa:"اختبار رد فعل مجاني عبر الإنترنت", sde:"Descubre qué tan rápido reaccionas.",sda:"اكتشف مدى سرعة رد فعلك." },
  "random-number-generator": { ne:"Generador de Números Aleatorios",na:"مولد أرقام عشوائية", de:"Genera números aleatorios en un rango personalizado.",da:"أنشئ أرقاماً عشوائية في نطاق مخصص.", se:"Generador de Números Aleatorios Gratis",sa:"مولد أرقام عشوائية مجاني", sde:"Genera números entre mínimo y máximo.",sda:"أنشئ أرقاماً بين الحد الأدنى والأقصى." },
  "zodiac-sign": { ne:"Calculadora de Signo Zodiacal",na:"حاسبة البرج الفلكي", de:"Descubre tu signo zodiacal según tu fecha de nacimiento.",da:"اكتشف برجك الفلكي حسب تاريخ ميلادك.", se:"¿Cuál es mi Signo Zodiacal? Gratis",sa:"ما هو برجي الفلكي؟ مجاني", sde:"Encuentra tu signo y sus características.",sda:"اعثر على برجك وخصائصه." },
};

// For each tool in T, find its block and inject translations
// Strategy: find `id: "TOOL_ID"` then find the closing `},` of that object
let count = 0;

for (const [id, t] of Object.entries(T)) {
  const marker = `id: "${id}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) { console.log(`SKIP: ${id} not found`); continue; }

  // Find the end of this tool's block: look for the pattern that ends this tool
  // Each tool block ends with `  },\n` or `  }\n];`
  // We need to find the closing `}` that matches the opening `{` of this tool

  // Search from the end of the block backwards
  // The tool block starts after `  {\n` following the id line's context
  // Let's find the last property before the closing },

  // Simple approach: find the next tool's start or the array end
  const nextToolIdx = content.indexOf("\n  {\n    id:", idx + marker.length);
  const arrayEndIdx = content.indexOf("\n];", idx);
  const endIdx = nextToolIdx !== -1 ? nextToolIdx : (arrayEndIdx !== -1 ? arrayEndIdx : content.length);

  const blockEnd = content.lastIndexOf("}", endIdx);
  if (blockEnd === -1) { console.log(`SKIP: ${id} no closing brace`); continue; }

  // Check if already has translations
  const blockPreview = content.substring(idx, blockEnd + 1);
  if (blockPreview.includes("nameTranslations")) { console.log(`SKIP: ${id} already translated`); continue; }

  // Inject translations before the closing }
  const injection = `,\n    nameTranslations: {\n      en: "",\n      es: "${t.ne}",\n      ar: "${t.na}",\n    },\n    descriptionTranslations: {\n      en: "",\n      es: "${t.de}",\n      ar: "${t.da}",\n    },\n    seoTitleTranslations: {\n      en: "",\n      es: "${t.se}",\n      ar: "${t.sa}",\n    },\n    seoDescriptionTranslations: {\n      en: "",\n      es: "${t.sde}",\n      ar: "${t.sda}",\n    },\n    howToUseTranslations: {},\n    faqTranslations: {},\n`;

  content = content.substring(0, blockEnd) + injection + content.substring(blockEnd);
  count++;
  console.log(`OK: ${id}`);
}

fs.writeFileSync(TOOLS_FILE, content);
console.log(`\nInjected translations for ${count} tools.`);
