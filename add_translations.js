const fs = require('fs');
const file = 'C:\\Users\\jun\\online-tools\\src\\lib\\tools.ts';
let content = fs.readFileSync(file, 'utf-8').replace(/\r\n/g, '\n');

const insertions = [
  // Tool 20: bmi-calculator
  {
    marker: '"bmi calculator for students", "best bmi calculator 2026", "free body mass index checker online"',
    howTo: '    howToUse: [\n      "Enter your height in either centimeters/meters or feet/inches.",\n      "Enter your weight in kilograms or pounds.",\n      "Click \'Calculate\' to see your BMI result instantly.",\n      "View your BMI value and corresponding weight category (underweight, normal, overweight, or obese).",\n      "Check the ideal weight range for your height to understand your target."\n    ],',
    blocks: `    nameTranslations: {
      es: "Calculadora de IMC",
      ar: "حاسبة مؤشر كتلة الجسم",
    },
    descriptionTranslations: {
      es: "Calcula tu Índice de Masa Corporal (IMC) y conoce tu categoría de peso.",
      ar: "احسب مؤشر كتلة الجسم (BMI) واعرف فئة وزنك.",
    },
    seoTitleTranslations: {
      es: "Calculadora de IMC Gratis Online - Verificador de Masa Corporal 2026",
      ar: "حاسبة مؤشر كتلة الجسم المجانية عبر الإنترنت - تحقق من وزنك 2026",
    },
    seoDescriptionTranslations: {
      es: "Calcula tu IMC al instante con unidades métricas o imperiales. Conoce tu categoría de peso, rango de peso ideal y consejos de salud. Calculadora de IMC gratuita para adultos.",
      ar: "احسب مؤشر كتلة جسمك فوراً بالوحدات المترية أو الإمبراطورية. اعرف فئة وزنك ونطاق الوزن المثالي ونصائح صحية. حاسبة مؤشر كتلة جسم مجانية للبالغين.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu altura en centímetros/metros o pies/pulgadas.",
        "Ingresa tu peso en kilogramos o libras.",
        "Haz clic en 'Calcular' para ver tu resultado de IMC al instante.",
        "Visualiza tu valor de IMC y la categoría de peso correspondiente (bajo peso, normal, sobrepeso u obesidad).",
        "Revisa el rango de peso ideal para tu altura para conocer tu objetivo.",
      ],
      ar: [
        "أدخل طولك بالسنتيمتر/المتر أو بالقدم/البوصة.",
        "أدخل وزنك بالكيلوجرام أو بالرطل.",
        "انقر على 'احسب' لرؤية نتيجة مؤشر كتلة جسمك فوراً.",
        "شاهد قيمة مؤشر كتلة الجسم وفئة الوزن المقابلة (نحافة، طبيعي، زيادة وزن، أو سمنة).",
        "تحقق من نطاق الوزن المثالي لطولك لمعرفة هدفك.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es el IMC?", answer: "El IMC (Índice de Masa Corporal) es un valor numérico calculado a partir de tu peso y altura. Se utiliza como herramienta de detección para categorizar si una persona tiene bajo peso, peso normal, sobrepeso u obesidad según los rangos estándar establecidos por la Organización Mundial de la Salud (OMS)." },
        { question: "¿Cómo se calcula el IMC?", answer: "El IMC se calcula dividiendo tu peso en kilogramos por tu altura en metros al cuadrado (kg/m²). Para unidades imperiales, la fórmula es (peso en libras / (altura en pulgadas)²) × 703." },
        { question: "¿Cuál es un rango de IMC saludable?", answer: "Según las directrices de la OMS, un rango de IMC saludable para adultos es de 18.5 a 24.9. Por debajo de 18.5 se considera bajo peso, 25.0-29.9 sobrepeso y 30.0 o más obesidad." },
        { question: "¿Es el IMC preciso para todos?", answer: "El IMC es un indicador general útil pero tiene limitaciones. No tiene en cuenta la masa muscular, la densidad ósea o la distribución de grasa. Los atletas con alta masa muscular pueden tener un IMC alto a pesar de estar sanos. Es mejor usarlo como uno de varios indicadores de salud." },
        { question: "¿Cuál es un rango de IMC saludable?", answer: "Según las directrices de la OMS, un rango de IMC saludable para adultos es de 18.5 a 24.9. Por debajo de 18.5 se considera bajo peso, 25-29.9 sobrepeso y 30 o más obesidad. El IMC es un indicador general y no tiene en cuenta la masa muscular." },
      ],
      ar: [
        { question: "ما هو مؤشر كتلة الجسم؟", answer: "مؤشر كتلة الجسم (BMI) هو قيمة رقمية تُحسب من وزنك وطولك. يُستخدم كأداة فحص لتصنيف ما إذا كان الشخص يعاني من نقص الوزن أو الوزن الطبيعي أو زيادة الوزن أو السمنة وفقاً للنطاقات القياسية التي وضعتها منظمة الصحة العالمية." },
        { question: "كيف يُحسب مؤشر كتلة الجسم؟", answer: "يُحسب مؤشر كتلة الجسم بقسمة وزنك بالكيلوجرام على طولك بالمتر مربع (كجم/م²). للوحدات الإمبراطورية، المعادلة هي (الوزن بالرطل / (الطول بالبوصة)²) × 703." },
        { question: "ما هو نطاق مؤشر كتلة الجسم الصحي؟", answer: "وفقاً لإرشادات منظمة الصحة العالمية، يتراوح نطاق مؤشر كتلة الجسم الصحي للبالغين بين 18.5 و 24.9. أقل من 18.5 يُعتبر نقصاً في الوزن، و25.0-29.9 زيادة في الوزن، و30.0 فأكثر سمنة." },
        { question: "هل مؤشر كتلة الجسم دقيق للجميع؟", answer: "مؤشر كتلة الجسم مؤشر عام مفيد لكنه له قيود. لا يأخذ في الاعتبار الكتلة العضلية أو كثافة العظام أو توزيع الدهون. قد يكون لدى الرياضيين ذوي الكتلة العضلية العالية مؤشر مرتفع رغم كونهم أصحاء. من الأفضل استخدامه كأحد عدة مؤشرات صحية." },
        { question: "ما هو نطاق مؤشر كتلة الجسم الصحي؟", answer: "وفقاً لإرشادات منظمة الصحة العالمية، يتراوح النطاق الصحي لمؤشر كتلة الجسم للبالغين بين 18.5 و 24.9. أقل من 18.5 نقص وزن، 25-29.9 زيادة وزن، و30 فأكثر سمنة. المؤشر عام ولا يراعي الكتلة العضلية." },
      ],
    },
    howToUse: [
      "Enter your height in either centimeters/meters or feet/inches.",
      "Enter your weight in kilograms or pounds.",
      "Click 'Calculate' to see your BMI result instantly.",
      "View your BMI value and corresponding weight category (underweight, normal, overweight, or obese).",
      "Check the ideal weight range for your height to understand your target."
    ],
`
  },
  // Tool 21: unit-converter
  {
    marker: '"unit converter for students", "best unit converter 2026", "free metric to imperial converter online"',
    howTo: '    howToUse: [\n      "Select the unit category you want to convert (length, weight, temperature, volume, or speed).",\n      "Choose the input and output units from the dropdown menus.",\n      "Enter your value and view the converted result instantly.",\n      "Use the swap button to quickly reverse the conversion direction."\n    ],',
    blocks: `    nameTranslations: {
      es: "Convertidor de Unidades",
      ar: "محول الوحدات",
    },
    descriptionTranslations: {
      es: "Convierte entre unidades de longitud, peso, temperatura y otras fácilmente.",
      ar: "حوّل بين وحدات الطول والوزن والحرارة وغيرها بسهولة.",
    },
    seoTitleTranslations: {
      es: "Convertidor de Unidades Gratis Online - Conversión Métrica 2026",
      ar: "محول الوحدات المجاني عبر الإنترنت - تحويل متري وإمبراطوري 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte entre unidades métricas e imperiales para longitud, peso, temperatura, volumen y velocidad. Convertidor de unidades gratuito. Sin registro.",
      ar: "حوّل بين الوحدات المترية والإمبراطورية للطول والوزن والحرارة والحجم والسرعة. محول وحدات مجاني. بدون تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Selecciona la categoría de unidades que deseas convertir (longitud, peso, temperatura, volumen o velocidad).",
        "Elige las unidades de entrada y salida de los menús desplegables.",
        "Ingresa tu valor y visualiza el resultado convertido al instante.",
        "Usa el botón de intercambio para invertir rápidamente la dirección de conversión.",
      ],
      ar: [
        "اختر فئة الوحدات التي تريد تحويلها (الطول، الوزن، الحرارة، الحجم، أو السرعة).",
        "اختر وحدات الإدخال والإخراج من القوائم المنسدلة.",
        "أدخل قيمتك وشاهد النتيجة المحولة فوراً.",
        "استخدم زر التبديل لعكس اتجاه التحويل بسرعة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué categorías de unidades son compatibles?", answer: "Este convertidor admite longitud (metros, pies, pulgadas, etc.), peso (kilogramos, libras, onzas, etc.), temperatura (Celsius, Fahrenheit, Kelvin), volumen (litros, galones, tazas, etc.) y velocidad (mph, km/h, m/s)." },
        { question: "¿Qué tan precisas son las conversiones?", answer: "Todas las conversiones utilizan factores de conversión precisos y son exactas hasta muchas cifras decimales. Los resultados se redondean para facilitar la lectura, pero puedes ver la precisión completa." },
        { question: "¿Puedo convertir entre cualesquiera dos unidades?", answer: "Puedes convertir entre cualesquiera dos unidades dentro de la misma categoría. Por ejemplo, puedes convertir metros a pies o kilogramos a libras, pero no metros a kilogramos." },
        { question: "¿Es esta herramienta adecuada para medidas de cocina?", answer: "Sí. El convertidor de volumen incluye medidas comunes de cocina como tazas, cucharadas, cucharaditas y mililitros, lo que lo hace útil para convertir recetas." },
        { question: "¿Qué unidades admite este convertidor?", answer: "Nuestro convertidor de unidades admite longitud (km, mi, m, ft, cm, in), peso (kg, lb, g, oz), temperatura (C, F, K), volumen (L, gal, mL, fl oz) y velocidad (km/h, mph, m/s, nudos)." },
      ],
      ar: [
        { question: "ما هي فئات الوحدات المدعومة؟", answer: "يدعم هذا المحول الطول (أمتار، أقدام، بوصات، إلخ)، الوزن (كيلوجرام، رطل، أونصة، إلخ)، الحرارة (سلسيوس، فهرنهايت، كلفن)، الحجم (لتر، جالون، كوب، إلخ) والسرعة (ميل/ساعة، كم/ساعة، م/ث)." },
        { question: "ما مدى دقة التحويلات؟", answer: "تستخدم جميع التحويلات عوامل تحويل دقيقة وهي صحيحة حتى منازل عشرية كثيرة. يتم تقريب النتائج لسهولة القراءة لكن يمكنك رؤية الدقة الكاملة." },
        { question: "هل يمكنني التحويل بين أي وحدتين؟", answer: "يمكنك التحويل بين أي وحدتين ضمن نفس الفئة. مثلاً يمكنك تحويل الأمتار إلى أقدام أو الكيلوجرام إلى رطل، لكن ليس الأمتار إلى كيلوجرام." },
        { question: "هل هذه الأداة مناسبة لمقاييس الطبخ؟", answer: "نعم. يتضمن محول الحجم مقاييس طبخ شائعة مثل الأكواب والملاعق الكبيرة والصغيرة والميليلتر، مما يجعله مفيداً لتحويل الوصفات." },
        { question: "ما الوحدات التي يدعمها هذا المحول؟", answer: "يدعم محول الوحدات لدينا الطول (كم، ميل، م، قدم، سم، بوصة)، الوزن (كجم، رطل، جم، أونصة)، الحرارة (س، ف، ك)، الحجم (لتر، جالون، مل، أونصة سائلة) والسرعة (كم/ساعة، ميل/ساعة، م/ث، عقدة)." },
      ],
    },
    howToUse: [
      "Select the unit category you want to convert (length, weight, temperature, volume, or speed).",
      "Choose the input and output units from the dropdown menus.",
      "Enter your value and view the converted result instantly.",
      "Use the swap button to quickly reverse the conversion direction."
    ],
`
  },
  // Tool 22: base-converter
  {
    marker: '"number base converter for students", "best binary converter 2026", "free hex to decimal converter online"',
    howTo: '    howToUse: [\n      "Select the input number base (binary, octal, decimal, or hexadecimal).",\n      "Enter your number in the input field.",\n      "View the number converted to all other bases instantly.",\n      "Use the tool for programming, networking, or computer science studies."\n    ],',
    blocks: `    nameTranslations: {
      es: "Convertidor de Bases Numéricas",
      ar: "محول الأنظمة العددية",
    },
    descriptionTranslations: {
      es: "Convierte números entre los sistemas binario, octal, decimal y hexadecimal.",
      ar: "حوّل الأرقام بين الأنظمة الثنائية والثمانية والعشرية والست عشرية.",
    },
    seoTitleTranslations: {
      es: "Convertidor de Bases Gratis Online - Binario, Hex, Decimal 2026",
      ar: "محول الأنظمة العددية المجاني عبر الإنترنت - ثنائي وسداسي عشري 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte números entre los sistemas binario, octal, decimal y hexadecimal al instante. Convertidor de bases numéricas gratuito para desarrolladores y estudiantes.",
      ar: "حوّل الأرقام بين الأنظمة الثنائية والثمانية والعشرية والست عشرية فوراً. محول أنظمة عددية مجاني للمطورين والطلاب.",
    },
    howToUseTranslations: {
      es: [
        "Selecciona la base numérica de entrada (binaria, octal, decimal o hexadecimal).",
        "Ingresa tu número en el campo de entrada.",
        "Visualiza el número convertido a todas las demás bases al instante.",
        "Usa la herramienta para programación, redes o estudios de informática.",
      ],
      ar: [
        "اختر النظام العددي للإدخال (ثنائي، ثماني، عشري، أو سداسي عشري).",
        "أدخل رقمك في حقل الإدخال.",
        "شاهد الرقم محولاً إلى جميع الأنظمة الأخرى فوراً.",
        "استخدم الأداة للبرمجة أو الشبكات أو دراسات علوم الحاسوب.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué son las bases numéricas?", answer: "Las bases numéricas son diferentes sistemas para representar números. El binario (base 2) usa dígitos 0-1, el octal (base 8) usa 0-7, el decimal (base 10) usa 0-9 y el hexadecimal (base 16) usa 0-9 y A-F." },
        { question: "¿Por qué necesito convertir entre bases numéricas?", answer: "La conversión de bases es esencial en informática y programación. El binario se usa para operaciones de bajo nivel, el hexadecimal para direcciones de memoria y colores, y el decimal para cálculos cotidianos." },
        { question: "¿Puedo ingresar números negativos?", answer: "Sí. Puedes ingresar números negativos en cualquier base y la herramienta los convertirá correctamente a todas las demás bases." },
        { question: "¿Cuál es el tamaño máximo de número?", answer: "La herramienta puede manejar números muy grandes, hasta el límite de enteros seguros de JavaScript (aproximadamente 9 × 10^15). Esto es suficiente para la mayoría de los casos de uso educativos y de programación." },
        { question: "¿Qué bases numéricas admite este convertidor?", answer: "Nuestro convertidor admite binario (base 2), octal (base 8), decimal (base 10) y hexadecimal (base 16). Ingresa un número en cualquier base y ve el equivalente en todas las demás bases al instante." },
      ],
      ar: [
        { question: "ما هي الأنظمة العددية؟", answer: "الأنظمة العددية هي طرق مختلفة لتمثيل الأرقام. النظام الثنائي (الأساس 2) يستخدم الأرقام 0-1، والثماني (الأساس 8) يستخدم 0-7، والعشري (الأساس 10) يستخدم 0-9، والست عشري (الأساس 16) يستخدم 0-9 و A-F." },
        { question: "لماذا أحتاج للتحويل بين الأنظمة العددية؟", answer: "تحويل الأنظمة العددية أساسي في علوم الحاسوب والبرمجة. يُستخدم الثنائي للعمليات منخفضة المستوى، والست عشري لعناوين الذاكرة والألوان، والعشري للحسابات اليومية." },
        { question: "هل يمكنني إدخال أرقام سالبة؟", answer: "نعم. يمكنك إدخال أرقام سالبة بأي نظام وستقوم الأداة بتحويلها بشكل صحيح إلى جميع الأنظمة الأخرى." },
        { question: "ما هو أقصى حجم للرقم؟", answer: "يمكن للأداة التعامل مع أرقام كبيرة جداً حتى حد الأعداد الآمنة في جافاسكريبت (تقريباً 9 × 10^15). هذا يكفي لمعظم حالات الاستخدام البرمجية والتعليمية." },
        { question: "ما الأنظمة العددية التي يدعمها هذا المحول؟", answer: "يدعم محولنا النظام الثنائي (الأساس 2) والثماني (الأساس 8) والعشري (الأساس 10) والست عشري (الأساس 16). أدخل رقماً بأي نظام وشاهد المكافئ في جميع الأنظمة الأخرى فوراً." },
      ],
    },
    howToUse: [
      "Select the input number base (binary, octal, decimal, or hexadecimal).",
      "Enter your number in the input field.",
      "View the number converted to all other bases instantly.",
      "Use the tool for programming, networking, or computer science studies."
    ],
`
  },
  // Tool 23: roman-numerals
  {
    marker: '"roman numerals for students", "best roman numeral converter 2026", "free roman to number converter online"',
    howTo: '    howToUse: [\n      "Enter a Roman numeral (like XIV) to convert it to an Arabic number.",\n      "Or enter an Arabic number (like 2024) to convert it to Roman numerals.",\n      "View the conversion result instantly.",\n      "Use it for dates, clock faces, outline numbering, or historical research."\n    ],',
    blocks: `    nameTranslations: {
      es: "Convertidor de Números Romanos",
      ar: "محول الأرقام الرومانية",
    },
    descriptionTranslations: {
      es: "Convierte entre números romanos y arábigos en ambas direcciones.",
      ar: "حوّل بين الأرقام الرومانية والعربية في كلا الاتجاهين.",
    },
    seoTitleTranslations: {
      es: "Convertidor de Números Romanos Gratis Online - Romano a Número 2026",
      ar: "محول الأرقام الرومانية المجاني عبر الإنترنت - روماني إلى رقم 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte números romanos a arábigos y viceversa al instante. Convertidor de números romanos gratuito. Admite números del 1 al 3.999.999.",
      ar: "حوّل الأرقام الرومانية إلى عربية والعكس فوراً. محول أرقام رومانية مجاني. يدعم الأرقام من 1 إلى 3,999,999.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa un número romano (como XIV) para convertirlo a un número arábigo.",
        "O ingresa un número arábigo (como 2024) para convertirlo a números romanos.",
        "Visualiza el resultado de la conversión al instante.",
        "Úsalo para fechas, esferas de reloj, numeración de esquemas o investigación histórica.",
      ],
      ar: [
        "أدخل رقماً رومانياً (مثل XIV) لتحويله إلى رقم عربي.",
        "أو أدخل رقماً عربياً (مثل 2024) لتحويله إلى أرقام رومانية.",
        "شاهد نتيجة التحويل فوراً.",
        "استخدمه للتواريخ أو وجوه الساعات أو ترقيم المخططات أو البحث التاريخي.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué son los números romanos?", answer: "Los números romanos son un sistema numérico originario de la antigua Roma, que usa combinaciones de letras: I (1), V (5), X (10), L (50), C (100), D (500) y M (1000)." },
        { question: "¿Cuál es el número más grande que maneja este convertidor?", answer: "Este convertidor admite números del 1 al 3.999.999. Los números romanos estándar llegan hasta 3.999, y esta herramienta lo extiende con notación de barra superior para números más grandes." },
        { question: "¿Cómo funcionan los números romanos?", answer: "Los números romanos se leen de izquierda a derecha, sumando los valores. Cuando un numeral menor aparece antes de uno mayor, se resta (por ejemplo, IV = 4, IX = 9, XL = 40)." },
        { question: "¿Dónde se usan los números romanos hoy?", answer: "Los números romanos aún se usan para esferas de reloj, fechas de derechos de autor de películas, capítulos de libros, numeración de monarcas (Reina Isabel II), numeración del Super Bowl y estructuras de esquemas formales." },
        { question: "¿Cuál es el número romano más grande que esta herramienta puede convertir?", answer: "Nuestro convertidor de números romanos maneja números del 1 al 3.999 (MMMCMXCIX), que cubre el rango estándar de los números romanos. Para números más grandes, la notación de números romanos se vuelve no estándar." },
      ],
      ar: [
        { question: "ما هي الأرقام الرومانية؟", answer: "الأرقام الرومانية هي نظام عددي نشأ في روما القديمة، يستخدم مجموعات من الحروف: I (1)، V (5)، X (10)، L (50)، C (100)، D (500)، و M (1000)." },
        { question: "ما أكبر رقم يتعامل معه هذا المحول؟", answer: "يدعم هذا المحول الأرقام من 1 إلى 3,999,999. الأرقام الرومانية القياسية تصل إلى 3,999، وهذه الأداة توسع ذلك بترميز الخط العلوي للأرقام الأكبر." },
        { question: "كيف تعمل الأرقام الرومانية؟", answer: "تُقرأ الأرقام الرومانية من اليسار إلى اليمين مع جمع القيم. عندما يظهر رقم أصغر قبل رقم أكبر، يتم طرحه (مثلاً IV = 4، IX = 9، XL = 40)." },
        { question: "أين تُستخدم الأرقام الرومانية اليوم؟", answer: "لا تزال الأرقام الرومانية تُستخدم لوجوه الساعات وتواريخ حقوق النشر للأفلام وفصول الكتب وترقيم الملوك (الملكة إليزابيث الثانية) وترقيم السوبر بول وهياكل المخططات الرسمية." },
        { question: "ما أكبر رقم روماني يمكن لهذه الأداة تحويله؟", answer: "يُعامِل محول الأرقام الرومانية لدينا الأرقام من 1 إلى 3,999 (MMMCMXCIX)، وهو يغطي النطاق القياسي للأرقام الرومانية. للأرقام الأكبر، تصبح كتابة الأرقام الرومانية غير قياسية." },
      ],
    },
    howToUse: [
      "Enter a Roman numeral (like XIV) to convert it to an Arabic number.",
      "Or enter an Arabic number (like 2024) to convert it to Roman numerals.",
      "View the conversion result instantly.",
      "Use it for dates, clock faces, outline numbering, or historical research."
    ],
`
  },
  // Tool 24: color-converter
  {
    marker: '"color converter for students", "best color converter 2026", "free hex to rgb converter online"',
    howTo: '    howToUse: [\n      "Enter a color value in any format: HEX (#FF5733), RGB (rgb(255,87,51)), or HSL (hsl(11,100%,60%)).",\n      "View the converted values in all formats displayed side by side.",\n      "See the live color preview update in real-time as you type.",\n      "Click any value to copy it to your clipboard.",\n      "Use the color picker to select a color visually and get all format values."\n    ],',
    blocks: `    nameTranslations: {
      es: "Convertidor de Colores",
      ar: "محول الألوان",
    },
    descriptionTranslations: {
      es: "Convierte colores entre formatos HEX, RGB y HSL con vista previa en vivo.",
      ar: "حوّل الألوان بين صيغ HEX و RGB و HSL مع معاينة مباشرة.",
    },
    seoTitleTranslations: {
      es: "Convertidor de Colores Gratis Online - HEX, RGB, HSL 2026",
      ar: "محول الألوان المجاني عبر الإنترنت - HEX و RGB و HSL 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte colores entre formatos HEX, RGB y HSL al instante. Vista previa en vivo con valores para copiar y pegar. Convertidor de colores gratuito para diseñadores y desarrolladores.",
      ar: "حوّل الألوان بين صيغ HEX و RGB و HSL فوراً. معاينة مباشرة مع قيم للنسخ واللصق. محول ألوان مجاني للمصممين والمطورين.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa un valor de color en cualquier formato: HEX (#FF5733), RGB (rgb(255,87,51)) o HSL (hsl(11,100%,60%)).",
        "Visualiza los valores convertidos en todos los formatos mostrados lado a lado.",
        "Ve la vista previa del color actualizarse en tiempo real mientras escribes.",
        "Haz clic en cualquier valor para copiarlo al portapapeles.",
        "Usa el selector de color para elegir un color visualmente y obtener todos los valores de formato.",
      ],
      ar: [
        "أدخل قيمة لون بأي صيغة: HEX (#FF5733) أو RGB (rgb(255,87,51)) أو HSL (hsl(11,100%,60%)).",
        "شاهد القيم المحوّلة في جميع الصيغ معروضة جنباً إلى جنب.",
        "شاهد معاينة اللون المباشرة تتحدث في الوقت الفعلي أثناء الكتابة.",
        "انقر على أي قيمة لنسخها إلى الحافظة.",
        "استخدم منتقي الألوان لاختيار لون بصرياً والحصول على جميع قيم الصيغ.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué son los formatos de color HEX, RGB y HSL?", answer: "HEX representa los colores como un código hexadecimal de 6 dígitos (por ejemplo, #FF5733). RGB usa valores de rojo, verde y azul de 0-255. HSL representa los colores como matiz (0-360°), saturación (0-100%) y luminosidad (0-100%), lo cual es más intuitivo para los humanos." },
        { question: "¿Cómo convierto HEX a RGB?", answer: "Ingresa tu código de color HEX (con o sin el símbolo #) y la herramienta muestra al instante los valores RGB equivalentes. Por ejemplo, #FF5733 se convierte a RGB(255, 87, 51)." },
        { question: "¿Por qué debería usar HSL en lugar de RGB?", answer: "HSL es preferido por los diseñadores porque es más intuitivo. Puedes ajustar el matiz para cambiar el color, la saturación para la viveza y la luminosidad para el brillo, todo de forma independiente. También es el formato usado en CSS moderno." },
        { question: "¿Puedo usar este convertidor de colores para diseño web?", answer: "Sí. Esta herramienta admite todos los formatos de color web estándar. Puedes convertir entre cualquier formato y copiar directamente los valores para usar en CSS, HTML, JavaScript o software de diseño como Figma y Photoshop." },
        { question: "¿Qué formatos de color admite este convertidor?", answer: "Nuestro convertidor de colores admite HEX (#RRGGBB), RGB (rgb(r, g, b)), HSL (hsl(h, s%, l%)) y colores con nombre. Ingresa cualquier valor y obtén conversiones instantáneas a todos los demás formatos." },
      ],
      ar: [
        { question: "ما هي صيغ الألوان HEX و RGB و HSL؟", answer: "يمثل HEX الألوان كرمز سداسي عشري من 6 أرقام (مثل #FF5733). يستخدم RGB قيم الأحمر والأخضر والأزرق من 0-255. يمثل HSL الألوان بالتدرج (0-360°) والتشبع (0-100%) والإضاءة (0-100%)، وهو أكثر سهولة للفهم البشري." },
        { question: "كيف أحول HEX إلى RGB؟", answer: "أدخل رمز لون HEX (مع أو بدون رمز #) وتعرض الأداة فوراً قيم RGB المكافئة. مثلاً #FF5733 يتحول إلى RGB(255, 87, 51)." },
        { question: "لماذا يجب استخدام HSL بدلاً من RGB؟", answer: "يفضل المصممون HSL لأنه أكثر سهولة. يمكنك ضبط التدرج لتغيير اللون والتشبع للحيوية والإضاءة للسطوع، كل ذلك بشكل مستقل. وهو أيضاً الصيغة المستخدمة في CSS الحديث." },
        { question: "هل يمكنني استخدام محول الألوان هذا لتصميم الويب؟", answer: "نعم. تدعم هذه الأداة جميع صيغ ألوان الويب القياسية. يمكنك التحويل بين أي صيغة ونسخ القيم مباشرة للاستخدام في CSS أو HTML أو JavaScript أو برامج التصميم مثل Figma و Photoshop." },
        { question: "ما صيغ الألوان التي يدعمها هذا المحول؟", answer: "يدعم محول الألوان لدينا HEX (#RRGGBB) و RGB (rgb(r, g, b)) و HSL (hsl(h, s%, l%)) والألوان المسماة. أدخل أي قيمة واحصل على تحويلات فورية لجميع الصيغ الأخرى." },
      ],
    },
    howToUse: [
      "Enter a color value in any format: HEX (#FF5733), RGB (rgb(255,87,51)), or HSL (hsl(11,100%,60%)).",
      "View the converted values in all formats displayed side by side.",
      "See the live color preview update in real-time as you type.",
      "Click any value to copy it to your clipboard.",
      "Use the color picker to select a color visually and get all format values."
    ],
`
  },
  // Tool 25: html-entities
  {
    marker: '"html entity encoder for students", "best html encoder 2026", "free html special character converter online"',
    howTo: '    howToUse: [\n      "Paste your text with special characters or HTML entities into the input field.",\n      "Click \'Encode\' to convert special characters to HTML entities.",\n      "Click \'Decode\' to convert HTML entities back to readable characters.",\n      "Copy the result for use in your HTML, templates, or web content."\n    ],',
    blocks: `    nameTranslations: {
      es: "Codificador de Entidades HTML",
      ar: "مشفّر كيانات HTML",
    },
    descriptionTranslations: {
      es: "Codifica o decodifica entidades HTML y caracteres especiales de forma segura.",
      ar: "شفّر أو فك تشفير كيانات HTML والأحرف الخاصة بأمان.",
    },
    seoTitleTranslations: {
      es: "Codificador de Entidades HTML Gratis Online - Codificar y Decodificar 2026",
      ar: "مشفّر كيانات HTML المجاني عبر الإنترنت - تشفير وفك الكيانات 2026",
    },
    seoDescriptionTranslations: {
      es: "Codifica texto a entidades HTML o decodifica entidades HTML de vuelta a texto legible. Codificador/decodificador de entidades HTML gratuito para desarrolladores web.",
      ar: "شفّر النص إلى كيانات HTML أو فك تشفير كيانات HTML إلى نص مقروء. مشفر/فك تشفير كيانات HTML مجاني لمطوري الويب.",
    },
    howToUseTranslations: {
      es: [
        "Pega tu texto con caracteres especiales o entidades HTML en el campo de entrada.",
        "Haz clic en 'Codificar' para convertir caracteres especiales a entidades HTML.",
        "Haz clic en 'Decodificar' para convertir entidades HTML de vuelta a caracteres legibles.",
        "Copia el resultado para usarlo en tu HTML, plantillas o contenido web.",
      ],
      ar: [
        "الصق نصك ذي الأحرف الخاصة أو كيانات HTML في حقل الإدخال.",
        "انقر على 'تشفير' لتحويل الأحرف الخاصة إلى كيانات HTML.",
        "انقر على 'فك التشفير' لتحويل كيانات HTML إلى أحرف مقروءة.",
        "انسخ النتيجة لاستخدامها في HTML أو القوالب أو محتوى الويب.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué son las entidades HTML?", answer: "Las entidades HTML son códigos especiales usados para mostrar caracteres reservados en HTML. Por ejemplo, < es &lt;, > es &gt;, y & es &amp;. Evitan que el navegador interprete estos caracteres como etiquetas HTML." },
        { question: "¿Cuándo debo codificar entidades HTML?", answer: "Debes codificar entidades HTML siempre que necesites mostrar caracteres especiales en páginas web sin que el navegador los interprete como marcado. Esto es esencial para mostrar fragmentos de código, símbolos matemáticos o texto que contenga ángulos." },
        { question: "¿Qué caracteres se codifican?", answer: "La herramienta codifica caracteres HTML reservados: menor que, mayor que, ampersand, comillas dobles y comillas simples. También maneja símbolos comunes como copyright, marca registrada, euro y libra." },
        { question: "¿La codificación afecta cómo se ve la página?", answer: "No. Las entidades codificadas se renderizan exactamente igual que los caracteres originales en el navegador. La codificación solo afecta el código fuente, no la salida visual." },
        { question: "¿Por qué necesito codificar entidades HTML?", answer: "La codificación de entidades HTML convierte caracteres especiales como ángulos y ampersands en equivalentes seguros para evitar que se interpreten como etiquetas HTML. Esto es esencial para la seguridad y mostrar código en páginas web." },
      ],
      ar: [
        { question: "ما هي كيانات HTML؟", answer: "كيانات HTML هي رموز خاصة تُستخدم لعرض الأحرف المحجوزة في HTML. مثلاً < هي &lt; و > هي &gt; و & هي &amp;. تمنع المتصفح من تفسير هذه الأحرف كوسوم HTML." },
        { question: "متى يجب تشفير كيانات HTML؟", answer: "يجب تشفير كيانات HTML كلما احتجت لعرض أحرف خاصة في صفحات الويب دون أن يفسرها المتصفح كترميز. هذا أساسي لعرض مقتطفات الكود أو الرموز الرياضية أو النص الذي يحتوي على زوايا." },
        { question: "ما الأحرف التي يتم تشفيرها؟", answer: "تشفّر الأداة أحرف HTML المحجوزة: أقل من، أكبر من، علامة العطف، علامتي التنصيص المزدوجة والمفردة. كما تتعامل مع رموز شائعة مثل حقوق النشر والعلامة التجارية المسجلة واليورو والجنيه." },
        { question: "هل يؤثر التشفير على مظهر الصفحة؟", answer: "لا. تظهر الكيانات المشفرة تماماً مثل الأحرف الأصلية في المتصفح. يؤثر التشفير فقط على الكود المصدري وليس المظهر المرئي." },
        { question: "لماذا أحتاج لتشفير كيانات HTML؟", answer: "يحول تشفير كيانات HTML الأحرف الخاصة مثل الزوايا وعلامة العطف إلى بدائل آمنة لمنع تفسيرها كوسوم HTML. هذا أساسي للأمان وعرض الكود على صفحات الويب." },
      ],
    },
    howToUse: [
      "Paste your text with special characters or HTML entities into the input field.",
      "Click 'Encode' to convert special characters to HTML entities.",
      "Click 'Decode' to convert HTML entities back to readable characters.",
      "Copy the result for use in your HTML, templates, or web content."
    ],
`
  },
  // Tool 26: json-to-csv
  {
    marker: '"json to csv for students", "best json to csv converter 2026", "free json to excel converter online"',
    howTo: '    howToUse: [\n      "Paste your JSON array data into the input field.",\n      "Click \'Convert\' to transform the JSON into CSV format.",\n      "Preview the CSV output and verify the column alignment.",\n      "Copy the CSV data to paste into Excel, Google Sheets, or save as a .csv file."\n    ],',
    blocks: `    nameTranslations: {
      es: "Convertidor de JSON a CSV",
      ar: "محول JSON إلى CSV",
    },
    descriptionTranslations: {
      es: "Convierte datos JSON a formato CSV para hojas de cálculo y bases de datos.",
      ar: "حوّل بيانات JSON إلى صيغة CSV للجداول وقواعد البيانات.",
    },
    seoTitleTranslations: {
      es: "Convertidor de JSON a CSV Gratis Online - Exportar Datos JSON 2026",
      ar: "محول JSON إلى CSV المجاني عبر الإنترنت - تصدير بيانات JSON 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte arrays JSON a formato CSV para importar fácilmente en Excel, Google Sheets o bases de datos. Convertidor de JSON a CSV gratuito. Sin registro.",
      ar: "حوّل مصفوفات JSON إلى صيغة CSV للاستيراد السهل في Excel أو Google Sheets أو قواعد البيانات. محول JSON إلى CSV مجاني. بدون تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Pega tus datos de array JSON en el campo de entrada.",
        "Haz clic en 'Convertir' para transformar el JSON a formato CSV.",
        "Previsualiza la salida CSV y verifica la alineación de columnas.",
        "Copia los datos CSV para pegarlos en Excel, Google Sheets o guardarlos como archivo .csv.",
      ],
      ar: [
        "الصق بيانات مصفوفة JSON في حقل الإدخال.",
        "انقر على 'تحويل' لتحويل JSON إلى صيغة CSV.",
        "عاين مخرجات CSV وتحقق من محاذاة الأعمدة.",
        "انسخ بيانات CSV للصقها في Excel أو Google Sheets أو حفظها كملف .csv.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿En qué formato debe estar mi JSON?", answer: "Tu JSON debe ser un array de objetos donde cada objeto representa una fila. Por ejemplo: [{\"name\":\"John\",\"age\":30},{\"name\":\"Jane\",\"age\":25}]. Los objetos anidados se aplanan en columnas." },
        { question: "¿Puedo convertir JSON anidado a CSV?", answer: "Sí. Los objetos y arrays anidados se aplanan automáticamente. Las claves anidadas se unen con puntos (por ejemplo, 'address.city' se convierte en un nombre de columna) para crear una estructura CSV plana." },
        { question: "¿Qué delimitador usa el CSV?", answer: "El convertidor usa comas como delimitadores por defecto. Si tus datos contienen comas, los valores se citan correctamente para evitar problemas de formato." },
        { question: "¿Puedo usar esto con datos de API?", answer: "Sí. Si tu API devuelve datos de array JSON, simplemente copia la respuesta y pégala en el convertidor. Esto se usa comúnmente para exportar resultados de API a hojas de cálculo para análisis." },
        { question: "¿Esta herramienta maneja objetos JSON anidados?", answer: "Nuestro convertidor de JSON a CSV aplana los objetos anidados usando notación de puntos (por ejemplo, user.name). Los arrays dentro de objetos se convierten a cadenas separadas por comas. Cada objeto de nivel superior se convierte en una fila CSV." },
      ],
      ar: [
        { question: "ما الصيغة التي يجب أن يكون عليها JSON؟", answer: "يجب أن يكون JSON مصفوفة من الكائنات حيث يمثل كل كائناً صفاً. مثلاً: [{\"name\":\"John\",\"age\":30},{\"name\":\"Jane\",\"age\":25}]. الكائنات المتداخلة تُسطح إلى أعمدة." },
        { question: "هل يمكنني تحويل JSON المتداخل إلى CSV؟", answer: "نعم. الكائنات والمصفوفات المتداخلة تُسطح تلقائياً. المفاتيح المتداخلة تُربط بنقاط (مثلاً 'address.city' يصبح اسم عمود) لإنشاء بنية CSV مسطحة." },
        { question: "ما الفاصل الذي يستخدمه CSV؟", answer: "يستخدم المحول الفواصل كفواصل افتراضياً. إذا كانت بياناتك تحتوي على فواصل، تُوضع القيم بين علامتي تنصيص لمنع مشاكل التنسيق." },
        { question: "هل يمكنني استخدام هذا مع بيانات API؟", answer: "نعم. إذا أرجعت API بيانات مصفوفة JSON، ببساطة انسخ الرد والصقه في المحول. يُستخدم هذا عادةً لتصدير نتائج API إلى جداول البيانات للتحليل." },
        { question: "هل تتعامل هذه الأداة مع كائنات JSON المتداخلة؟", answer: "يُسطّح محول JSON إلى CSV لدينا الكائنات المتداخلة باستخدام ترقيم النقاط (مثلاً user.name). المصفوفات داخل الكائنات تُحوّل إلى سلاسل مفصولة بفواصل. كل كائن من المستوى الأعلى يصبح صفاً في CSV." },
      ],
    },
    howToUse: [
      "Paste your JSON array data into the input field.",
      "Click 'Convert' to transform the JSON into CSV format.",
      "Preview the CSV output and verify the column alignment.",
      "Copy the CSV data to paste into Excel, Google Sheets, or save as a .csv file."
    ],
`
  },
  // Tool 27: csv-to-json
  {
    marker: '"csv to json for students", "best csv to json converter 2026", "free spreadsheet to json converter online"',
    howTo: '    howToUse: [\n      "Paste your CSV data into the input field (with or without headers).",\n      "Click \'Convert\' to transform the CSV into JSON format.",\n      "View the formatted JSON output with proper structure.",\n      "Copy the JSON data for use in your API, application, or database."\n    ],',
    blocks: `    nameTranslations: {
      es: "Convertidor de CSV a JSON",
      ar: "محول CSV إلى JSON",
    },
    descriptionTranslations: {
      es: "Convierte datos CSV a formato JSON para APIs y aplicaciones web.",
      ar: "حوّل بيانات CSV إلى صيغة JSON للبرمجة وتطبيقات الويب.",
    },
    seoTitleTranslations: {
      es: "Convertidor de CSV a JSON Gratis Online - Convertir CSV a JSON 2026",
      ar: "محول CSV إلى JSON المجاني عبر الإنترنت - تحويل CSV إلى JSON 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte datos CSV a formato JSON para APIs, aplicaciones web y bases de datos. Convertidor de CSV a JSON gratuito con salida formateada. Sin registro.",
      ar: "حوّل بيانات CSV إلى صيغة JSON للبرمجة وتطبيقات الويب وقواعد البيانات. محول CSV إلى JSON مجاني مع إخراج منسق. بدون تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Pega tus datos CSV en el campo de entrada (con o sin encabezados).",
        "Haz clic en 'Convertir' para transformar el CSV a formato JSON.",
        "Visualiza la salida JSON formateada con estructura adecuada.",
        "Copia los datos JSON para usarlos en tu API, aplicación o base de datos.",
      ],
      ar: [
        "الصق بيانات CSV في حقل الإدخال (مع أو بدون رؤوس).",
        "انقر على 'تحويل' لتحويل CSV إلى صيغة JSON.",
        "شاهد إخراج JSON المنسق بالبنية المناسبة.",
        "انسخ بيانات JSON لاستخدامها في API أو تطبيقك أو قاعدة البيانات.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿La primera fila necesita ser encabezados?", answer: "El convertidor puede funcionar con o sin encabezados. Si la primera fila parece nombres de columnas, se usará como claves JSON. De lo contrario, se generan claves numéricas (0, 1, 2...)." },
        { question: "¿Qué formatos CSV son compatibles?", answer: "La herramienta admite CSV estándar con delimitadores de coma, así como valores delimitados por punto y coma y separados por tabulaciones. Maneja campos entre comillas que contienen comas y caracteres escapados." },
        { question: "¿Puedo convertir archivos CSV grandes?", answer: "Sí. El convertidor maneja archivos CSV grandes de manera eficiente. Para archivos muy grandes (millones de filas), considera procesar en lotes más pequeños para evitar límites de memoria del navegador." },
        { question: "¿Qué tipo de salida JSON obtengo?", answer: "La salida es un array JSON de objetos, donde cada objeto representa una fila y cada par clave-valor representa una columna. Este formato es directamente utilizable con la mayoría de las APIs y aplicaciones JavaScript." },
        { question: "¿Qué formato CSV espera este convertidor?", answer: "El convertidor espera formato CSV estándar con una fila de encabezados como primera línea. Los campos que contienen comas deben estar entre comillas dobles. Maneja delimitadores comunes y detecta el formato automáticamente." },
      ],
      ar: [
        { question: "هل يجب أن يكون الصف الأول عناوين؟", answer: "يمكن للمحول العمل مع أو بدون عناوين. إذا بدا الصف الأول كأسماء أعمدة، فسيُستخدم كمفاتيح JSON. خلاف ذلك، تُولد مفاتيح رقمية (0، 1، 2...)." },
        { question: "ما صيغ CSV المدعومة؟", answer: "تدعم الأداة CSV القياسي بفاصلات، بالإضافة إلى القيم المفصولة بفاصلة منقوطة وبعلامات تبويب. تتعامل مع الحقول المقتبسة التي تحتوي على فواصل والأحرف المُفلتة." },
        { question: "هل يمكنني تحويل ملفات CSV الكبيرة؟", answer: "نعم. يتعامل المحول مع ملفات CSV الكبيرة بكفاءة. للملفات الكبيرة جداً (ملايين الصفوف)، فكر في المعالجة على دفعات أصغر لتجنب حدود ذاكرة المتصفح." },
        { question: "ما نوع إخراج JSON الذي أحصل عليه؟", answer: "الإخراج هو مصفوفة JSON من الكائنات، حيث يمثل كل كائناً صفاً وكل زوج مفتاح-قيمة يمثل عموداً. هذا الصيغة قابلة للاستخدام مباشرة مع معظم APIs وتطبيقات JavaScript." },
        { question: "ما صيغة CSV التي يتوقعها هذا المحول؟", answer: "يتوقع المحول صيغة CSV قياسية مع صف عناوين كسطر أول. الحقول التي تحتوي على فواصل يجب أن تكون بين علامتي تنصيص مزدوجتين. يتعامل مع الفواصل الشائعة ويكتشف الصيغة تلقائياً." },
      ],
    },
    howToUse: [
      "Paste your CSV data into the input field (with or without headers).",
      "Click 'Convert' to transform the CSV into JSON format.",
      "View the formatted JSON output with proper structure.",
      "Copy the JSON data for use in your API, application, or database."
    ],
`
  },
  // Tool 28: image-to-base64
  {
    marker: '"image to base64 for students", "best image encoder 2026", "free image to data uri converter online"',
    howTo: '    howToUse: [\n      "Upload an image file (PNG, JPG, GIF, SVG, WebP) or drag and drop it into the upload area.",\n      "View the Base64 encoded string generated instantly.",\n      "Copy the full data URI (including prefix) for embedding in HTML or CSS.",\n      "Copy just the Base64 string if you need to construct the data URI manually."\n    ],',
    blocks: `    nameTranslations: {
      es: "Imagen a Base64",
      ar: "تحويل الصورة إلى Base64",
    },
    descriptionTranslations: {
      es: "Convierte imágenes a cadenas codificadas en Base64 para incrustar en código.",
      ar: "حوّل الصور إلى سلاسل مشفرة بـ Base64 للتضمين في الكود.",
    },
    seoTitleTranslations: {
      es: "Convertidor de Imagen a Base64 Gratis Online - Codificar Imágenes 2026",
      ar: "محول الصورة إلى Base64 المجاني عبر الإنترنت - تشفير الصور 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte imágenes (PNG, JPG, GIF, SVG) a cadenas codificadas en Base64 para incrustar en CSS, HTML o código. Convertidor de imagen a Base64 gratuito.",
      ar: "حوّل الصور (PNG، JPG، GIF، SVG) إلى سلاسل مشفرة بـ Base64 للتضمين في CSS أو HTML أو كود. محول صورة إلى Base64 مجاني.",
    },
    howToUseTranslations: {
      es: [
        "Sube un archivo de imagen (PNG, JPG, GIF, SVG, WebP) o arrástralo y suéltalo en el área de carga.",
        "Visualiza la cadena codificada en Base64 generada al instante.",
        "Copia el URI de datos completo (incluyendo prefijo) para incrustar en HTML o CSS.",
        "Copia solo la cadena Base64 si necesitas construir el URI de datos manualmente.",
      ],
      ar: [
        "ارفع ملف صورة (PNG، JPG، GIF، SVG، WebP) أو اسحبه وأفلته في منطقة الرفع.",
        "شاهد السلسلة المشفرة بـ Base64 المولدة فوراً.",
        "انسخ URI البيانات الكامل (بما في ذلك البادئة) للتضمين في HTML أو CSS.",
        "انسخ سلسلة Base64 فقط إذا كنت تحتاج لبناء URI البيانات يدوياً.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es la codificación de imágenes en Base64?", answer: "La codificación de imágenes en Base64 convierte un archivo de imagen en una cadena de texto que se puede incrustar directamente en HTML, CSS o JavaScript. Esto elimina la necesidad de archivos de imagen separados y solicitudes HTTP." },
        { question: "¿Qué formatos de imagen son compatibles?", answer: "Esta herramienta admite formatos PNG, JPG/JPEG, GIF, SVG y WebP. La salida conserva el tipo MIME original en el prefijo del URI de datos." },
        { question: "¿Cuándo debo incrustar imágenes como Base64?", answer: "La incrustación en Base64 es ideal para imágenes pequeñas como iconos, logotipos y elementos de interfaz. Reduce las solicitudes HTTP y acelera la carga de la página. Sin embargo, las imágenes grandes deben permanecer como archivos separados para un mejor almacenamiento en caché." },
        { question: "¿Cómo afecta Base64 al tamaño del archivo?", answer: "La codificación Base64 aumenta el tamaño del archivo aproximadamente un 33% en comparación con el binario original. Esta compensación suele valer la pena para imágenes pequeñas ya que elimina una solicitud HTTP separada." },
        { question: "¿Qué formatos de imagen son compatibles?", answer: "Nuestro convertidor de Imagen a Base64 admite formatos PNG, JPEG, GIF, SVG, WebP y BMP. Sube cualquier archivo de imagen o pega un URI de datos para obtener la cadena codificada en Base64 al instante." },
      ],
      ar: [
        { question: "ما هو تشفير الصور بـ Base64؟", answer: "تشفير الصور بـ Base64 يحوّل ملف صورة إلى سلسلة نصية يمكن تضمينها مباشرة في HTML أو CSS أو JavaScript. هذا يلغي الحاجة لملفات صور منفصلة وطلبات HTTP." },
        { question: "ما صيغ الصور المدعومة؟", answer: "تدعم هذه الأداة صيغ PNG و JPG/JPEG و GIF و SVG و WebP. المخرجات تحافظ على نوع MIME الأصلي في بادئة URI البيانات." },
        { question: "متى يجب تضمين الصور كـ Base64؟", answer: "التضمين بـ Base64 مثالي للصور الصغيرة مثل الأيقونات والشعارات وعناصر الواجهة. يقلل طلبات HTTP ويسرع تحميل الصفحة. ومع ذلك، يجب أن تبقى الصور الكبيرة كملفات منفصلة لتحسين التخزين المؤقت." },
        { question: "كيف يؤثر Base64 على حجم الملف؟", answer: "يزيد تشفير Base64 حجم الملف بنحو 33% مقارنة بالثنائي الأصلي. هذه المقايضة عادة ما تستحق ذلك للصور الصغيرة لأنها تلغي طلب HTTP منفصل." },
        { question: "ما صيغ الصور المدعومة؟", answer: "يدعم محول الصورة إلى Base64 لدينا صيغ PNG و JPEG و GIF و SVG و WebP و BMP. ارفع أي ملف صورة أو الصق URI بيانات للحصول على السلسلة المشفرة بـ Base64 فوراً." },
      ],
    },
    howToUse: [
      "Upload an image file (PNG, JPG, GIF, SVG, WebP) or drag and drop it into the upload area.",
      "View the Base64 encoded string generated instantly.",
      "Copy the full data URI (including prefix) for embedding in HTML or CSS.",
      "Copy just the Base64 string if you need to construct the data URI manually."
    ],
`
  },
  // Tool 29: loan-calculator
  {
    marker: '"loan calculator for students", "best loan payment calculator 2026", "free monthly payment estimator online"',
    howTo: '    howToUse: [\n      "Enter the loan amount (principal) you want to borrow.",\n      "Enter the annual interest rate and loan term in years.",\n      "Click \'Calculate\' to see your monthly payment, total interest, and total cost.",\n      "Review the amortization schedule to see how each payment is split between principal and interest."\n    ],',
    blocks: `    nameTranslations: {
      es: "Calculadora de Préstamos",
      ar: "حاسبة القروض",
    },
    descriptionTranslations: {
      es: "Calcula pagos mensuales, interés total y amortización para préstamos.",
      ar: "احسب الدفعات الشهرية وإجمالي الفائدة وجدول السداد للقروض.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Préstamos Gratis Online - Estimador de Pagos 2026",
      ar: "حاسبة القروض المجانية عبر الإنترنت - تقدير الدفعات الشهرية 2026",
    },
    seoDescriptionTranslations: {
      es: "Calcula pagos mensuales de préstamos, interés total y programa de amortización. Calculadora de préstamos gratuita para préstamos personales, automotrices y más.",
      ar: "احسب الدفعات الشهرية للقروض وإجمالي الفائدة وجدول السداد. حاسبة قروض مجانية للقروض الشخصية وقروض السيارات والمزيد.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa el monto del préstamo (capital) que deseas solicitar.",
        "Ingresa la tasa de interés anual y el plazo del préstamo en años.",
        "Haz clic en 'Calcular' para ver tu pago mensual, interés total y costo total.",
        "Revisa el programa de amortización para ver cómo se divide cada pago entre capital e interés.",
      ],
      ar: [
        "أدخل مبلغ القرض (الرأسمال) الذي تريد اقتراضه.",
        "أدخل معدل الفائدة السنوية ومدة القرض بالسنوات.",
        "انقر على 'احسب' لرؤية دفعتك الشهرية وإجمالي الفائدة والتكلفة الإجمالية.",
        "راجع جدول السداد لمعرفة كيفية تقسيم كل دفعة بين الرأسمال والفائدة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo se calcula el pago mensual del préstamo?", answer: "Pago mensual = P × (r(1+r)^n) / ((1+r)^n - 1), donde P es el capital, r es la tasa de interés mensual y n es el número de pagos. Esta es la fórmula estándar de amortización utilizada por los bancos." },
        { question: "¿Qué es un programa de amortización?", answer: "Un programa de amortización es una tabla que muestra cada pago durante el plazo del préstamo, dividido en porciones de capital e interés. Los pagos iniciales son principalmente interés; los pagos posteriores son principalmente capital." },
        { question: "¿Esta calculadora incluye impuestos y seguros?", answer: "Esta calculadora se enfoca en pagos de capital e interés. Para hipotecas, necesitarías agregar impuestos sobre la propiedad y seguros por separado para obtener tu pago mensual completo." },
        { question: "¿Puedo usar esto para cualquier tipo de préstamo?", answer: "Sí. Esta calculadora funciona para cualquier préstamo a tasa fija, incluyendo préstamos personales, automotrices, estudiantiles y comerciales. Solo ingresa los términos específicos de tu préstamo." },
        { question: "¿Esta calculadora incluye tasas de interés?", answer: "Sí, nuestra calculadora de préstamos computa los pagos mensuales basándose en el monto del préstamo, la tasa de interés y el plazo. Muestra el monto total del pago y el interés total pagado durante la vida del préstamo." },
      ],
      ar: [
        { question: "كيف تُحسب الدفعة الشهرية للقرض؟", answer: "الدفعة الشهرية = P × (r(1+r)^n) / ((1+r)^n - 1)، حيث P هو الرأسمال، r هو معدل الفائدة الشهري، و n هو عدد الدفعات. هذه هي معادلة السداد القياسية المستخدمة من البنوك." },
        { question: "ما هو جدول السداد؟", answer: "جدول السداد هو جدول يُظهر كل دفعة خلال مدة القرض، مقسمة إلى أجزاء رأسمال وفائدة. الدفعات الأولى تكون معظمها فائدة؛ والدفعات اللاحقة تكون معظمها رأسمال." },
        { question: "هل تتضمن هذه الحاسبة الضرائب والتأمين؟", answer: "تركز هذه الحاسبة على دفعات الرأسمال والفائدة. للرهون العقارية، ستحتاج لإضافة ضرائب العقار والتأمين بشكل منفصل للحصول على دفعتك الشهرية الكاملة." },
        { question: "هل يمكنني استخدام هذا لأي نوع من القروض؟", answer: "نعم. تعمل هذه الحاسبة لأي قرض بمعدل فائدة ثابت بما في ذلك القروض الشخصية وقروض السيارات والقروض الطلابية وقروض الأعمال. فقط أدخل شروط قرضك المحددة." },
        { question: "هل تتضمن هذه الحاسبة معدلات الفائدة؟", answer: "نعم، تحسب حاسبة القروض لدينا الدفعات الشهرية بناءً على مبلغ القرض ومعدل الفائدة ومدة القرض. تُظهر إجمالي مبلغ الدفع وإجمالي الفائدة المدفوعة خلال عمر القرض." },
      ],
    },
    howToUse: [
      "Enter the loan amount (principal) you want to borrow.",
      "Enter the annual interest rate and loan term in years.",
      "Click 'Calculate' to see your monthly payment, total interest, and total cost.",
      "Review the amortization schedule to see how each payment is split between principal and interest."
    ],
`
  },
  // Tool 30: mortgage-calculator
  {
    marker: '"mortgage calculator for students", "best mortgage calculator 2026", "free house payment calculator online"',
    howTo: '    howToUse: [\n      "Enter the home price and your down payment amount or percentage.",\n      "Enter the interest rate and loan term (typically 15 or 30 years).",\n      "Add property tax and homeowners insurance estimates for a complete picture.",\n      "View your total monthly mortgage payment broken down by component."\n    ],',
    blocks: `    nameTranslations: {
      es: "Calculadora de Hipoteca",
      ar: "حاسبة الرهن العقاري",
    },
    descriptionTranslations: {
      es: "Estima tu pago mensual de hipoteca con impuestos y seguros.",
      ar: "قدّر دفعتك الشهرية للرهان العقاري مع الضرائب والتأمين.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Hipoteca Gratis Online - Estimador de Pago 2026",
      ar: "حاسبة الرهن العقاري المجانية عبر الإنترنت - تقدير الدفعات 2026",
    },
    seoDescriptionTranslations: {
      es: "Estima tu pago mensual de hipoteca incluyendo capital, interés, impuestos sobre la propiedad y seguros. Calculadora de hipoteca gratuita para compradores de vivienda.",
      ar: "قدّر دفعتك الشهرية للرهان العقاري شاملة الرأسمال والفائدة وضرائب العقار والتأمين. حاسبة رهان عقاري مجانية لمشتري المنازل.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa el precio de la vivienda y tu monto o porcentaje de pago inicial.",
        "Ingresa la tasa de interés y el plazo del préstamo (típicamente 15 o 30 años).",
        "Agrega estimaciones de impuestos sobre la propiedad y seguro de hogar para una imagen completa.",
        "Visualiza tu pago mensual total de hipoteca desglosado por componente.",
      ],
      ar: [
        "أدخل سعر المنزل ومبلغ أو نسبة الدفعة الأولى.",
        "أدخل معدل الفائدة ومدة القرض (عادة 15 أو 30 سنة).",
        "أضف تقديرات ضرائب العقار وتأمين homeowners للصورة الكاملة.",
        "شاهد دفعتك الشهرية الإجمالية للرهان العقاري مفصلة حسب المكون.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué se incluye en un pago de hipoteca?", answer: "Un pago completo de hipoteca (PITI) incluye Principal (pago del préstamo), Interés (costo del préstamo), Impuestos (impuestos sobre la propiedad) y Seguro (seguro de hogar). Algunas hipotecas también incluyen PMI (seguro hipotecario privado)." },
        { question: "¿Cuánto pago inicial necesito?", answer: "Los préstamos convencionales típicamente requieren 20% de pago inicial para evitar PMI. Los préstamos FHA permiten tan solo 3.5% de pago inicial. Los préstamos VA y USDA pueden permitir 0% de pago inicial para prestatarios elegibles." },
        { question: "¿Qué es PMI y cuándo se requiere?", answer: "PMI (Seguro Hipotecario Privado) se requiere cuando tu pago inicial es menor al 20% del precio de la vivienda. Protege al prestamista y típicamente cuesta entre 0.3-1.5% del monto del préstamo anualmente." },
        { question: "¿Qué tan precisa es esta estimación de hipoteca?", answer: "Esta calculadora proporciona una buena estimación basada en la información que proporcionas. Los pagos reales pueden variar según tu puntaje crediticio, tarifas del prestamista, costos específicos de seguro y tasas locales de impuestos sobre la propiedad." },
        { question: "¿Qué factores considera la calculadora de hipoteca?", answer: "Nuestra calculadora de hipoteca considera el precio de la vivienda, el pago inicial, el plazo del préstamo y la tasa de interés para estimar tu pago mensual. También muestra el interés total pagado y un desglose de amortización." },
      ],
      ar: [
        { question: "ما الذي يتضمنه دفع الرهن العقاري؟", answer: "الدفعة الكاملة للرهان العقاري (PITI) تتضمن الرأسمال (سداد القرض) والفائدة (تكلفة الاقتراض) والضرائب (ضرائب العقار) والتأمين (تأمين المنازل). بعض الرهانات تتضمن أيضاً PMI (تأمين الرهن العقاري الخاص)." },
        { question: "كم دفعة أولى أحتاج؟", answer: "القروض التقليدية تتطلب عادة 20% دفعة أولى لتجنب PMI. قروض FHA تسمح بأقل من 3.5% دفعة أولى. قروض VA و USDA قد تسمح بـ 0% دفعة أولى للمقترضين المؤهلين." },
        { question: "ما هو PMI ومتى يُطلب؟", answer: "PMI (تأمين الرهن العقاري الخاص) يُطلب عندما تكون دفعتك الأولى أقل من 20% من سعر المنزل. يحمي المقرض وعادة يكلف 0.3-1.5% من مبلغ القرض سنوياً." },
        { question: "ما مدى دقة تقدير الرهن العقاري هذا؟", answer: "توفر هذه الحاسبة تقديراً جيداً بناءً على المعلومات التي تقدمها. قد تختلف الدفعات الفعلية بناءً على درجة الائتمان ورسوم المقرض وتكاليف التأمين المحددة ومعدلات الضرائب المحلية." },
        { question: "ما العوامل التي تراعيها حاسبة الرهن العقاري؟", answer: "تراعي حاسبة الرهن العقاري لدينا سعر المنزل والدفعة الأولى ومدة القرض ومعدل الفائدة لتقدير دفعتك الشهرية. تُظهر أيضاً إجمالي الفائدة المدفوعة وتقسيم السداد." },
      ],
    },
    howToUse: [
      "Enter the home price and your down payment amount or percentage.",
      "Enter the interest rate and loan term (typically 15 or 30 years).",
      "Add property tax and homeowners insurance estimates for a complete picture.",
      "View your total monthly mortgage payment broken down by component."
    ],
`
  },
  // Tool 31: calorie-calculator
  {
    marker: '"calorie calculator for students", "best tdee calculator 2026", "free daily calorie needs estimator online"',
    howTo: '    howToUse: [\n      "Enter your age, gender, weight, and height.",\n      "Select your activity level from sedentary to very active.",\n      "Choose your goal: lose weight, maintain, or gain weight.",\n      "View your recommended daily calorie intake and macronutrient breakdown."\n    ],',
    blocks: `    nameTranslations: {
      es: "Calculadora de Calorías",
      ar: "حاسبة السعرات الحرارية",
    },
    descriptionTranslations: {
      es: "Estima tus necesidades calóricas diarias según edad, peso, altura y actividad.",
      ar: "قدّر احتياجاتك اليومية من السعرات بناءً على العمر والوزن والطول والنشاط.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Calorías Gratis Online - Estimador Calórico Diario 2026",
      ar: "حاسبة السعرات الحرارية المجانية عبر الإنترنت - تقدير السعرات اليومية 2026",
    },
    seoDescriptionTranslations: {
      es: "Calcula tus necesidades calóricas diarias según edad, peso, altura, género y nivel de actividad. Calculadora TDEE gratuita para objetivos de pérdida, mantenimiento o ganancia de peso.",
      ar: "احسب احتياجاتك اليومية من السعرات بناءً على العمر والوزن والطول والجنس ومستوى النشاط. حاسبة TDEE مجانية لأهداف خسارة أو الحفاظ أو زيادة الوزن.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu edad, género, peso y altura.",
        "Selecciona tu nivel de actividad de sedentario a muy activo.",
        "Elige tu objetivo: perder peso, mantener o ganar peso.",
        "Visualiza tu ingesta calórica diaria recomendada y desglose de macronutrientes.",
      ],
      ar: [
        "أدخل عمرك وجنسك ووزنك وطولك.",
        "اختر مستوى نشاطك من خامل إلى نشط جداً.",
        "اختر هدفك: خسارة الوزن أو الحفاظ أو زيادة الوزن.",
        "شاهد استهلاكك اليومي الموصى به من السعرات وتقسيم المغذيات الكبرى.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es el TDEE?", answer: "TDEE (Gasto Energético Diario Total) es el número total de calorías que tu cuerpo quema en un día, incluyendo tu tasa metabólica basal (BMR) y la actividad física. Es la base para determinar tus necesidades calóricas." },
        { question: "¿Cuántas calorías debo comer para perder peso?", answer: "Una tasa segura de pérdida de peso es de 0.5-1 libra por semana, lo que requiere un déficit diario de 250-500 calorías de tu TDEE. Nunca bajes de 1,200 calorías diarias para mujeres o 1,500 para hombres sin supervisión médica." },
        { question: "¿Qué tan precisa es esta calculadora?", answer: "Esta calculadora usa la ecuación de Mifflin-St Jeor, que se considera una de las fórmulas de BMR más precisas. Sin embargo, el metabolismo individual varía, así que úsala como punto de partida y ajusta según tus resultados." },
        { question: "¿Esta calculadora tiene en cuenta la masa muscular?", answer: "Esta calculadora usa fórmulas estándar que estiman el BMR según peso, altura, edad y género. Para resultados más precisos que tengan en cuenta la composición corporal, se recomienda un escaneo DEXA o evaluación profesional." },
        { question: "¿Cómo se calculan las necesidades calóricas diarias?", answer: "Nuestra calculadora de calorías usa la ecuación de Mifflin-St Jeor, que considera tu edad, género, peso, altura y nivel de actividad para estimar tu Gasto Energético Diario Total (TDEE)." },
      ],
      ar: [
        { question: "ما هو TDEE؟", answer: "TDEE (إجمالي الإنفاق اليومي من الطاقة) هو العدد الإجمالي للسعرات التي يحرقها جسمك في يوم واحد، بما في ذلك معدل الأيض الأساسي (BMR) والنشاط البدني. هو الأساس لتحديد احتياجاتك من السعرات." },
        { question: "كم سعرة يجب أن أتناول لخسارة الوزن؟", answer: "معدل خسارة الوزن الآمن هو 0.5-1 رطل أسبوعياً، مما يتطلب عجزاً يومياً من 250-500 سعرة من TDEE. لا تنزل أبداً عن 1200 سعرة يومياً للنساء أو 1500 للرجال بدون إشراف طبي." },
        { question: "ما مدى دقة هذه الحاسبة؟", answer: "تستخدم هذه الحاسبة معادلة Mifflin-St Jeor، التي تُعتبر من أدق معادلات BMR. ومع ذلك، يختلف الأيض الفردي، لذا استخدمها كنقطة انطلاق وعدّل بناءً على نتائجك." },
        { question: "هل تأخذ هذه الحاسبة في الاعتبار الكتلة العضلية؟", answer: "تستخدم هذه الحاسبة معادلات قياسية تقدر BMR بناءً على الوزن والطول والعمر والجنس. لنتائج أدق تراعي تكوين الجسم، يُنصح بفحص DEXA أو تقييم احترافي." },
        { question: "كيف تُحسب الاحتياجات اليومية من السعرات؟", answer: "تستخدم حاسبة السعرات لدينا معادلة Mifflin-St Jeor التي تراعي عمرك وجنسك ووزنك وطولك ومستوى نشاطك لتقدير إجمالي إنفاقك اليومي من الطاقة (TDEE)." },
      ],
    },
    howToUse: [
      "Enter your age, gender, weight, and height.",
      "Select your activity level from sedentary to very active.",
      "Choose your goal: lose weight, maintain, or gain weight.",
      "View your recommended daily calorie intake and macronutrient breakdown."
    ],
`
  },
  // Tool 32: roi-calculator
  {
    marker: '"roi calculator for students", "best roi calculator 2026", "free investment return calculator online"',
    howTo: '    howToUse: [\n      "Enter your initial investment amount (cost).",\n      "Enter the final value or return amount.",\n      "Click \'Calculate\' to see your ROI percentage and net profit.",\n      "Use the result to compare investment opportunities or evaluate business decisions."\n    ],',
    blocks: `    nameTranslations: {
      es: "Calculadora de ROI",
      ar: "حاسبة العائد على الاستثمار",
    },
    descriptionTranslations: {
      es: "Calcula el porcentaje de retorno de inversión (ROI) y la ganancia.",
      ar: "احسب نسبة العائد على الاستثمار (ROI) ومبلغ الربح.",
    },
    seoTitleTranslations: {
      es: "Calculadora de ROI Gratis Online - Retorno de Inversión 2026",
      ar: "حاسبة العائد على الاستثمار المجانية عبر الإنترنت - ROI 2026",
    },
    seoDescriptionTranslations: {
      es: "Calcula tu porcentaje de retorno de inversión (ROI) y ganancia. Compara opciones de inversión y analiza la rentabilidad del negocio. Calculadora de ROI gratuita.",
      ar: "احسب نسبة العائد على الاستثمار (ROI) والربح. قارن خيارات الاستثمار وحلل ربحية الأعمال. حاسبة ROI مجانية.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu monto de inversión inicial (costo).",
        "Ingresa el valor final o monto de retorno.",
        "Haz clic en 'Calcular' para ver tu porcentaje de ROI y ganancia neta.",
        "Usa el resultado para comparar oportunidades de inversión o evaluar decisiones empresariales.",
      ],
      ar: [
        "أدخل مبلغ استثمارك الأولي (التكلفة).",
        "أدخل القيمة النهائية أو مبلغ العائد.",
        "انقر على 'احسب' لرؤية نسبة ROI وصافي الربح.",
        "استخدم النتيجة لمقارنة فرص الاستثمار أو تقييم قرارات الأعمال.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es el ROI?", answer: "ROI (Retorno de Inversión) mide la rentabilidad de una inversión. Se calcula como ((valor final - costo inicial) ÷ costo inicial) × 100, expresado como porcentaje." },
        { question: "¿Cuál es un buen ROI?", answer: "Un 'buen' ROI depende del tipo de inversión y el nivel de riesgo. Las inversiones en el mercado de valores históricamente promedian 7-10% anual. Bienes raíces típicamente apuntan a 8-12%. Para proyectos empresariales, las empresas a menudo requieren un ROI mínimo de 15-20%." },
        { question: "¿Puede el ROI ser negativo?", answer: "Sí. Un ROI negativo significa que perdiste dinero en la inversión. Por ejemplo, si invertiste $1,000 y recuperaste $800, tu ROI es -20%." },
        { question: "¿Esta calculadora tiene en cuenta el tiempo?", answer: "Esta calculadora muestra ROI simple. Para comparar inversiones en diferentes períodos de tiempo, también debes considerar el ROI anualizado, que tiene en cuenta la duración de la inversión." },
        { question: "¿Cómo se calcula el ROI?", answer: "ROI (Retorno de Inversión) se calcula como: ((Ganancia de la Inversión - Costo de la Inversión) / Costo de la Inversión) x 100. Un ROI positivo significa ganancia, mientras que un ROI negativo indica pérdida." },
      ],
      ar: [
        { question: "ما هو ROI؟", answer: "ROI (العائد على الاستثمار) يقيس ربحية الاستثمار. يُحسب كالتالي: ((القيمة النهائية - التكلفة الأولية) ÷ التكلفة الأولية) × 100، ويُعبّر عنه كنسبة مئوية." },
        { question: "ما هو ROI الجيد؟", answer: "يعتمد ROI 'الجيد' على نوع الاستثمار ومستوى المخاطرة. استثمارات سوق الأسهم تتراوح تاريخياً بين 7-10% سنوياً. العقارات عادة تستهدف 8-12%. لمشاريع الأعمال، غالباً ما تتطلب الشركات ROI أدنى من 15-20%." },
        { question: "هل يمكن أن يكون ROI سالباً؟", answer: "نعم. ROI السلبي يعني أنك خسرت مالاً في الاستثمار. مثلاً، إذا استثمرت 1000 دولار واستعدت 800 دولار، فإن ROI هو -20%." },
        { question: "هل تأخذ هذه الحاسبة في الاعتبار الوقت؟", answer: "تعرض هذه الحاسبة ROI بسيط. لمقارنة الاستثمارات عبر فترات زمنية مختلفة، يجب أيضاً النظر في ROI السنوي الذي يراعي مدة الاستثمار." },
        { question: "كيف يُحسب ROI؟", answer: "يُحسب ROI (العائد على الاستثمار) كالتالي: ((العائد من الاستثمار - تكلفة الاستثمار) / تكلفة الاستثمار) × 100. ROI الإيجابي يعني ربحاً، بينما ROI السلبي يشير إلى خسارة." },
      ],
    },
    howToUse: [
      "Enter your initial investment amount (cost).",
      "Enter the final value or return amount.",
      "Click 'Calculate' to see your ROI percentage and net profit.",
      "Use the result to compare investment opportunities or evaluate business decisions."
    ],
`
  },
  // Tool 33: compound-interest
  {
    marker: '"compound interest for students", "best compound interest calculator 2026", "free savings growth calculator online"',
    howTo: '    howToUse: [\n      "Enter your initial principal (starting investment amount).",\n      "Enter the annual interest rate and investment duration in years.",\n      "Choose the compounding frequency (daily, monthly, quarterly, or annually).",\n      "Add regular contributions to see how they accelerate your growth."\n    ],',
    blocks: `    nameTranslations: {
      es: "Calculadora de Interés Compuesto",
      ar: "حاسبة الفائدة المركبة",
    },
    descriptionTranslations: {
      es: "Mira cómo crece tu dinero con el tiempo con cálculos de interés compuesto.",
      ar: "شاهد كيف ينمو أموالك مع مرور الوقت بحسابات الفائدة المركبة.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Interés Compuesto Gratis Online - Crecimiento 2026",
      ar: "حاسبة الفائدة المركبة المجانية عبر الإنترنت - نمو المدخرات 2026",
    },
    seoDescriptionTranslations: {
      es: "Calcula el interés compuesto con principal, tasa, tiempo y frecuencia de capitalización personalizables. Calculadora de interés compuesto gratuita con visualización de crecimiento.",
      ar: "احسب الفائدة المركبة مع رأس مال ومدة ومعدل وتكرار تركيب مخصص. حاسبة فائدة مركبة مجانية مع عرض مرئي للنمو.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu capital inicial (monto de inversión inicial).",
        "Ingresa la tasa de interés anual y la duración de la inversión en años.",
        "Elige la frecuencia de capitalización (diaria, mensual, trimestral o anual).",
        "Agrega contribuciones regulares para ver cómo aceleran tu crecimiento.",
      ],
      ar: [
        "أدخل رأس مالك الأولي (مبلغ الاستثمار المبدئي).",
        "أدخل معدل الفائدة السنوية ومدة الاستثمار بالسنوات.",
        "اختر تكرار التركيب (يومي، شهري، ربع سنوي، أو سنوي).",
        "أضف مساهمات منتظمة لترى كيف تسرع نموك.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es el interés compuesto?", answer: "El interés compuesto es el interés calculado tanto sobre el capital inicial como sobre el interés acumulado de períodos anteriores. A menudo se le llama 'interés sobre interés' y es la fuerza más poderosa para hacer crecer la riqueza con el tiempo." },
        { question: "¿Con qué frecuencia debería componerse el interés?", answer: "Una composición más frecuente produce mayores rendimientos. La composición diaria produce ligeramente más que la mensual, que produce más que la trimestral o anual. La diferencia es pequeña para períodos cortos pero significativa a lo largo de décadas." },
        { question: "¿Qué es la Regla de 72?", answer: "La Regla de 72 es una forma rápida de estimar cuánto tiempo tarda una inversión en duplicarse. Divide 72 entre tu tasa de interés anual. Por ejemplo, con un interés del 8%, tu dinero se duplica en aproximadamente 9 años (72÷8=9)." },
        { question: "¿Cómo afectan las contribuciones regulares al interés compuesto?", answer: "Las contribuciones regulares aumentan dramáticamente tu crecimiento total. Agregar incluso pequeñas cantidades mensualmente puede multiplicar tu saldo final. Este es el principio fundamental detrás de los planes de ahorro para la jubilación como los 401(k)." },
        { question: "¿Qué es el interés compuesto y por qué es importante?", answer: "El interés compuesto es el interés calculado tanto sobre el capital inicial como sobre el interés acumulado de períodos anteriores. Tiene un efecto poderoso en el crecimiento de la riqueza con el tiempo debido al crecimiento exponencial." },
      ],
      ar: [
        { question: "ما هي الفائدة المركبة؟", answer: "الفائدة المركبة هي الفائدة المحتسبة على كل من رأس المال الأولي والفائدة المتراكمة من الفترات السابقة. غالباً ما تُسمى 'فائدة على فائدة' وهي أقوى قوة لتنمية الثروة مع مرور الوقت." },
        { question: "كم مرة يجب أن تُركب الفائدة؟", answer: "التركيب الأكثر تكراراً ينتج عوائد أعلى. التركيب اليومي ينتج أكثر قليلاً من الشهري، الذي ينتج أكثر من الربع سنوي أو السنوي. الفرق صغير للفترات القصيرة لكنه كبير على مدى عقود." },
        { question: "ما هي قاعدة 72؟", answer: "قاعدة 72 هي طريقة سريعة لتقدير المدة التي يستغرقها الاستثمار ليتضاعف. اقسم 72 على معدل فائدتك السنوية. مثلاً، بفائدة 8%، يتضاعف أموالك في حوالي 9 سنوات (72÷8=9)." },
        { question: "كيف تؤثر المساهمات المنتظمة على الفائدة المركبة؟", answer: "تزيد المساهمات المنتظمة نموك الإجمالي بشكل كبير. إضافة مبالغ صغيرة شهرياً يمكن أن تضاعف رصيدك النهائي. هذا هو المبدأ الأساسي وراء خطط التقاعد مثل 401(k)." },
        { question: "ما هي الفائدة المركبة ولماذا هي مهمة؟", answer: "الفائدة المركبة هي الفائدة المحتسبة على كل من رأس المال الأولي والفائدة المتراكمة من الفترات السابقة. لها تأثير قوي على تنمية الثروة مع مرور الوقت بسبب النمو الأسي." },
      ],
    },
    howToUse: [
      "Enter your initial principal (starting investment amount).",
      "Enter the annual interest rate and investment duration in years.",
      "Choose the compounding frequency (daily, monthly, quarterly, or annually).",
      "Add regular contributions to see how they accelerate your growth."
    ],
`
  },
  // Tool 34: income-tax-calculator
  {
    marker: '"income tax calculator for students", "best salary calculator 2026", "free take home pay estimator online"',
    howTo: '    howToUse: [\n      "Enter your gross annual salary or hourly wage.",\n      "Select your filing status and state.",\n      "Add any deductions or additional income sources.",\n      "View your estimated take-home pay with a detailed tax breakdown."\n    ],',
    blocks: `    nameTranslations: {
      es: "Calculadora de Impuesto sobre la Renta",
      ar: "حاسبة ضريبة الدخل",
    },
    descriptionTranslations: {
      es: "Estima tu salario neto después de deducciones de impuestos sobre la renta.",
      ar: "قدّر صافي راتبك بعد خصومات ضريبة الدخل.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Impuesto Gratis Online - Estimador de Salario Neto 2026",
      ar: "حاسبة ضريبة الدخل المجانية عبر الإنترنت - تقدير صافي الراتب 2026",
    },
    seoDescriptionTranslations: {
      es: "Estima tu salario neto después de impuestos federales y estatales. Calculadora de impuestos gratuita con desglose detallado de deducciones.",
      ar: "قدّر صافي راتبك بعد الضرائب الفيدرالية وحالة. حاسبة ضريبة دخل مجانية مع تفصيل مفصل للخصومات.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu salario anual bruto o pago por hora.",
        "Selecciona tu estado civil y estado.",
        "Agrega cualquier deducción o fuente de ingresos adicional.",
        "Visualiza tu salario neto estimado con un desglose detallado de impuestos.",
      ],
      ar: [
        "أدخل إجمالي راتبك السنوي أو أجرك بالساعة.",
        "اختر حالتك الضريبية والولاية.",
        "أضف أي خصومات أو مصادر دخل إضافية.",
        "شاهد صافي راتبك المقدر مع تفصيل مفصل للضرائب.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué tan precisa es esta estimación de impuestos?", answer: "Esta calculadora proporciona una estimación general basada en las actuales tablas impositivas y deducciones estándar. Los impuestos reales pueden variar según deducciones específicas, créditos e impuestos locales no incluidos en este cálculo." },
        { question: "¿Qué deducciones se incluyen?", answer: "La calculadora incluye deducciones estándar de impuesto federal sobre la renta según tu estado civil. No incluye deducciones específicas del estado, impuestos locales ni deducciones detalladas." },
        { question: "¿Esta calculadora maneja ingresos por cuenta propia?", answer: "Esta calculadora está diseñada para empleados W-2. Los trabajadores por cuenta propia deben tener en cuenta el impuesto adicional por trabajo por cuenta propia (Seguro Social y Medicare) que es aproximadamente 15.3%." },
        { question: "¿Con qué frecuencia se actualizan las tasas impositivas?", answer: "Las tablas y tasas impositivas se actualizan anualmente según las directrices del IRS. Esta calculadora utiliza los datos del año fiscal más reciente disponible." },
        { question: "¿Esta calculadora muestra el salario neto?", answer: "Sí, nuestra calculadora de impuestos sobre la renta estima tu salario neto después de impuestos. Ingresa tu salario bruto y calculará tu salario neto estimado basado en tasas impositivas estándar." },
      ],
      ar: [
        { question: "ما مدى دقة تقدير ضريبة الدخل هذا؟", answer: "توفر هذه الحاسبة تقديراً عاماً بناءً على شرائح الضرائب الحالية والخصومات القياسية. قد تختلف الضرائب الفعلية بناءً على خصومات وائتمانات محددة وضرائب محلية غير مشمولة في هذا الحساب." },
        { question: "ما الخصومات المشمولة؟", answer: "تتضمن الحاسبة الخصومات القياسية لضريبة الدخل الفيدرالية بناءً على حالتك الضريبية. لا تشمل خصومات محددة للولاية أو الضرائب المحلية أو الخصومات المفصلة." },
        { question: "هل تتعامل هذه الحاسبة مع الدخل الذاتي؟", answer: "هذه الحاسبة مصممة لموظفي W-2. العاملون لحسابهم الخاص يجب أن يحسبوا ضريبة العمل الذاتي الإضافية (الضمان الاجتماعي والرعاية الصحية) وهي حوالي 15.3%." },
        { question: "كم مرة يتم تحديث معدلات الضرائب؟", answer: "يتم تحديث شرائح ومعدلات الضرائب سنوياً بناءً على إرشادات IRS. تستخدم هذه الحاسبة أحدث بيانات السنة الضريبية المتاحة." },
        { question: "هل تُظهر هذه الحاسبة صافي الراتب؟", answer: "نعم، تُقدّر حاسبة ضريبة الدخل لدينا صافي راتبك بعد الضرائب. أدخل إجمالي راتبك وستحسب صافي راتبك المقدر بناءً على معدلات الضرائب القياسية." },
      ],
    },
    howToUse: [
      "Enter your gross annual salary or hourly wage.",
      "Select your filing status and state.",
      "Add any deductions or additional income sources.",
      "View your estimated take-home pay with a detailed tax breakdown."
    ],
`
  },
];

let count = 0;
for (const item of insertions) {
  const markerIdx = content.indexOf(item.marker);
  if (markerIdx === -1) {
    console.error(`Marker not found: ${item.marker.substring(0, 50)}...`);
    continue;
  }
  // Find the howToUse block that follows the marker
  const afterMarker = content.indexOf('],', markerIdx) + 2;
  const howToIdx = content.indexOf(item.howTo, afterMarker);
  if (howToIdx === -1) {
    console.error(`howToUse not found after marker: ${item.marker.substring(0, 50)}...`);
    continue;
  }
  content = content.slice(0, howToIdx) + item.blocks + content.slice(howToIdx);
  count++;
}

fs.writeFileSync(file, content.replace(/\n/g, '\r\n'), 'utf-8');
console.log(`Applied translations for ${count} tools.`);
