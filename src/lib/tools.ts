export interface FAQItem {
  question: string;
  answer: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "text" | "developer" | "calculator" | "converter";
  icon: string;
  path: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  howToUse?: string[];
  faq?: FAQItem[];
  nameTranslations?: Record<string, string>;
  descriptionTranslations?: Record<string, string>;
  seoTitleTranslations?: Record<string, string>;
  seoDescriptionTranslations?: Record<string, string>;
  howToUseTranslations?: Record<string, string[]>;
  faqTranslations?: Record<string, FAQItem[]>;
}

export const tools: Tool[] = [
  // Text Tools
  {
    id: "word-counter",
    name: "Word Counter",
    description:
      "Count words, characters, sentences, and paragraphs in your text in real-time.",
    category: "text",
    icon: "📝",
    path: "/tools/word-counter",
    seoTitle: "Free Word Counter Online - Count Words, Characters & Sentences 2026",
    seoDescription: "Count words, characters, sentences, and paragraphs in real-time. Free online word counter with reading time and speaking time estimates. Perfect for essays, blog posts, and social media. No signup required.",
    seoKeywords: [
      "word counter", "character counter", "word count online",
      "count words in text", "sentence counter", "paragraph counter",
      "reading time calculator", "free word counter tool",
      "how many words in my text", "online text counter",
      "character count with spaces", "word counter for essays"
,      "word counter for students", "best word counter 2026", "free essay word counter online"        ],
    howToUse: [
      "Paste or type your text into the input field above.",
      "View your word count, character count, sentence count, and paragraph count instantly.",
      "Check the estimated reading time and speaking time for your content.",
      "Use the statistics to ensure your text meets word limits for essays, articles, or social media posts.",
      "Copy or export your text once you're satisfied with the count."
    ],
    faq: [
      { question: "How does this word counter work?", answer: "The word counter analyzes your text in real-time as you type or paste it. It counts words by detecting spaces between words, characters including or excluding spaces, sentences by identifying punctuation marks, and paragraphs by detecting line breaks. All processing happens instantly in your browser." },
      { question: "Does this word counter count spaces and punctuation?", answer: "Yes. The character count includes both spaces and punctuation. You can also see the character count without spaces, which is useful for platforms that have specific character limits." },
      { question: "Is my text data stored or sent anywhere?", answer: "No. All text processing happens locally in your browser. Your text is never sent to any server or stored anywhere. Your privacy is fully protected." },
      { question: "Can I use this word counter for academic essays?", answer: "Absolutely. This tool is perfect for academic writing. It provides accurate word counts that match what most word processors like Microsoft Word and Google Docs report. It's ideal for checking essay word limits, abstract lengths, and dissertation chapter counts." },
      { question: "What is the average reading speed this tool uses?", answer: "The reading time estimate is based on an average reading speed of 200-250 words per minute for English text. The speaking time estimate uses approximately 130 words per minute, which is the average speaking pace." }
,      { question: "How accurate is this word counter?", answer: "Our word counter provides real-time accurate counts. It handles special characters, hyphenated words, and multiple spaces correctly. The count updates instantly as you type or paste text." }
    ],
    nameTranslations: {
      es: "Contador de Palabras",
      ar: "عداد الكلمات",
    },
    descriptionTranslations: {
      es: "Cuenta palabras, caracteres, oraciones y párrafos en tu texto en tiempo real.",
      ar: "عد الكلمات والأحرف والجمل والفقرات في نصك في الوقت الفعلي.",
    },
    seoTitleTranslations: {
      es: "Contador de Palabras Gratis Online - Cuenta Palabras, Caracteres y Oraciones 2026",
      ar: "عداد كلمات مجاني عبر الإنترنت - عد الكلمات والأحرف والجمل 2026",
    },
    seoDescriptionTranslations: {
      es: "Cuenta palabras, caracteres, oraciones y párrafos en tiempo real. Contador de palabras online gratuito con estimaciones de tiempo de lectura y habla. Perfecto para ensayos, publicaciones de blog y redes sociales. Sin registro.",
      ar: "عد الكلمات والأحرف والجمل والفقرات في الوقت الفعلي. عداد كلمات مجاني عبر الإنترنت مع تقديرات وقت القراءة والكلام. مثالي للمقالات ومنشورات المدونات ووسائل التواصل الاجتماعي. لا يتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Pega o escribe tu texto en el campo de entrada.",
        "Visualiza al instante el conteo de palabras, caracteres, oraciones y párrafos.",
        "Consulta el tiempo estimado de lectura y habla para tu contenido.",
        "Usa las estadísticas para asegurar que tu texto cumple con los límites de palabras para ensayos, artículos o publicaciones en redes sociales.",
        "Copia o exporta tu texto cuando estés satisfecho con el conteo.",
      ],
      ar: [
        "الصق أو اكتب نصك في حقل الإدخال أعلاه.",
        "اعرض عدد الكلمات والأحرف والجمل والفقرات فوراً.",
        "تحقق من وقت القراءة ووقت الكلام التقديري لمحتواك.",
        "استخدم الإحصائيات للتأكد من أن نصك يحدود الكلمات للمقالات أو المنشورات أو وسائل التواصل الاجتماعي.",
        "انسخ أو صدر نصك عندما تكون راضياً عن العدد.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo funciona este contador de palabras?", answer: "El contador de palabras analiza tu texto en tiempo real mientras escribes o pegas. Cuenta palabras detectando espacios entre palabras, caracteres incluyendo o excluyendo espacios, oraciones identificando signos de puntuación y párrafos detectando saltos de línea. Todo el procesamiento ocurre instantáneamente en tu navegador." },
        { question: "¿Este contador de palabras cuenta espacios y puntuación?", answer: "Sí. El conteo de caracteres incluye tanto espacios como puntuación. También puedes ver el conteo de caracteres sin espacios, lo cual es útil para plataformas con límites específicos de caracteres." },
        { question: "¿Mis datos de texto se almacenan o envían a algún lugar?", answer: "No. Todo el procesamiento de texto ocurre localmente en tu navegador. Tu texto nunca se envía a ningún servidor ni se almacena en ningún lugar. Tu privacidad está completamente protegida." },
        { question: "¿Puedo usar este contador de palabras para ensayos académicos?", answer: "Absolutamente. Esta herramienta es perfecta para escritura académica. Proporciona conteos de palabras precisos que coinciden con lo que reportan procesadores de texto como Microsoft Word y Google Docs. Es ideal para verificar límites de palabras de ensayos, resúmenes y conteos de capítulos de tesis." },
        { question: "¿Cuál es la velocidad promedio de lectura que usa esta herramienta?", answer: "La estimación de tiempo de lectura se basa en una velocidad promedio de lectura de 200-250 palabras por minuto para texto en inglés. La estimación de tiempo de habla usa aproximadamente 130 palabras por minuto, que es el ritmo promedio de habla." },
        { question: "¿Qué tan preciso es este contador de palabras?", answer: "Nuestro contador de palabras proporciona conteos precisos en tiempo real. Maneja correctamente caracteres especiales, palabras con guiones y múltiples espacios. El conteo se actualiza instantáneamente mientras escribes o pegas texto." },
      ],
      ar: [
        { question: "كيف يعمل عداد الكلمات هذا؟", answer: "يحلل عداد الكلمات نصك في الوقت الفعلي أثناء الكتابة أو اللصق. يعد الكلمات عن طريق اكتشاف المسافات بينها، والأحرف بما في ذلك أو باستثناء المسافات، والجمل عن طريق تحديد علامات الترقيم، والفقرات عن طريق اكتشاف فواصل الأسطر. تتم جميع العمليات فوراً في متصفحك." },
        { question: "هل يعد عداد الكلمات هذا المسافات وعلامات الترقيم؟", answer: "نعم. يشمل عدد الأحرف كلاً من المسافات وعلامات الترقيم. يمكنك أيضاً رؤية عدد الأحرف بدون مسافات، وهو مفيد للمنصات التي لديها حدود محددة للأحرف." },
        { question: "هل يتم تخزين بيانات نصي أو إرسالها إلى أي مكان؟", answer: "لا. تتم جميع عمليات معالجة النص محلياً في متصفحك. لا يتم إرسال نصك أبداً إلى أي خادم أو تخزينه في أي مكان. خصوصيتك محمية بالكامل." },
        { question: "هل يمكنني استخدام عداد الكلمات هذا للمقالات الأكاديمية؟", answer: "بالتأكيد. هذه الأداة مثالية للكتابة الأكاديمية. توفر أعداد كلمات دقيقة تطابق ما تبلغ عنه معالجات النصوص مثل Microsoft Word وGoogle Docs. مثالية للتحقق من حدود كلمات المقالات والملخصات وأعداد فصول الأطروحات." },
        { question: "ما هي سرعة القراءة المتوسطة التي تستخدمها هذه الأداة؟", answer: "يستند تقدير وقت القراءة إلى سرعة قراءة متوسطة تبلغ 200-250 كلمة في الدقيقة للنص الإنجليزي. يستخدم تقدير وقت الكلام حوالي 130 كلمة في الدقيقة، وهو متوسط سرعة الكلام." },
        { question: "ما مدى دقة عداد الكلمات هذا؟", answer: "يوفر عداد الكلمات لدينا أعداداً دقيقة في الوقت الفعلي. يتعامل بشكل صحيح مع الأحرف الخاصة والكلمات ذات الشرطات والمسافات المتعددة. يتحدث العدد فوراً أثناء الكتابة أو لصق النص." },
      ],
    },
  },
  {
    id: "case-converter",
    name: "Case Converter",
    description:
      "Convert text to uppercase, lowercase, title case, or sentence case instantly.",
    category: "text",
    icon: "🔤",
    path: "/tools/case-converter",
    seoTitle: "Free Case Converter Online - Uppercase, Lowercase, Title Case 2026",
    seoDescription: "Convert text to uppercase, lowercase, title case, sentence case, or alternating case instantly. Free online text case converter. No signup required.",
    seoKeywords: [
      "case converter", "text case converter", "uppercase converter",
      "lowercase converter", "title case converter", "sentence case converter",
      "change text case online", "convert uppercase to lowercase",
      "text case changer free", "online case converter tool"
,      "case converter for students", "best case changer 2026", "free text case converter online"        ],
    howToUse: [
      "Paste or type your text into the input field above.",
      "Click the desired case button: UPPERCASE, lowercase, Title Case, or Sentence case.",
      "View the converted text appear instantly in the output panel.",
      "Copy the result to your clipboard with one click."
    ],
    faq: [
      { question: "What is title case?", answer: "Title case capitalizes the first letter of each major word in a text. It's commonly used for headlines, book titles, and article headings. Minor words like 'a', 'an', 'the', 'in', 'on' are typically left lowercase." },
      { question: "What is sentence case?", answer: "Sentence case capitalizes only the first letter of each sentence, leaving the rest lowercase. This is the standard format for body text, paragraphs, and most writing." },
      { question: "Does this tool work with multiple paragraphs?", answer: "Yes. You can paste text with multiple paragraphs, and each case conversion mode will properly handle all paragraphs in your text." },
      { question: "Is my text sent to any server?", answer: "No. All text conversion happens locally in your browser. Your text never leaves your device." }
,      { question: "What is the difference between title case and sentence case?", answer: "Title case capitalizes the first letter of each major word (e.g., 'The Quick Brown Fox'), while sentence case only capitalizes the first letter of the sentence and proper nouns (e.g., 'The quick brown fox')." }
    ],
    nameTranslations: {
      es: "Conversor de Mayúsculas y Minúsculas",
      ar: "محول حالة النص",
    },
    descriptionTranslations: {
      es: "Convierte texto a mayúsculas, minúsculas, tipo título o tipo oración al instante.",
      ar: "حول النص إلى أحرف كبيرة أو صغيرة أو حالة العنوان أو حالة الجملة فوراً.",
    },
    seoTitleTranslations: {
      es: "Conversor de Mayúsculas y Minúsculas Gratis Online - Mayúsculas, Minúsculas, Título 2026",
      ar: "محول حالة النص مجاني عبر الإنترنت - أحرف كبيرة وصغيرة وعنوان 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte texto a mayúsculas, minúsculas, tipo título, tipo oración o tipo alternante al instante. Conversor de texto online gratuito. Sin registro.",
      ar: "حول النص إلى أحرف كبيرة أو صغيرة أو حالة العنوان أو حالة الجملة أو حالة متبادلة فوراً. محول نص مجاني عبر الإنترنت. لا يتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Pega o escribe tu texto en el campo de entrada.",
        "Haz clic en el botón deseado: MAYÚSCULAS, minúsculas, Tipo Título o Tipo oración.",
        "Visualiza el texto convertido aparecer instantáneamente en el panel de salida.",
        "Copia el resultado a tu portapapeles con un clic.",
      ],
      ar: [
        "الصق أو اكتب نصك في حقل الإدخال أعلاه.",
        "انقر على زر الحالة المطلوب: أحرف كبيرة، صغيرة، حالة العنوان، أو حالة الجملة.",
        "اعرض النص المحول يظهر فوراً في لوحة الإخراج.",
        "انسخ النتيجة إلى الحافظة بنقرة واحدة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es el tipo título?", answer: "El tipo título capitaliza la primera letra de cada palabra importante en un texto. Se usa comúnmente para titulares, títulos de libros y encabezados de artículos. Las palabras menores como 'un', 'una', 'el', 'en', 'de' normalmente se dejan en minúsculas." },
        { question: "¿Qué es el tipo oración?", answer: "El tipo oración capitaliza solo la primera letra de cada oración, dejando el resto en minúsculas. Este es el formato estándar para texto corporal, párrafos y la mayoría de la escritura." },
        { question: "¿Esta herramienta funciona con múltiples párrafos?", answer: "Sí. Puedes pegar texto con múltiples párrafos y cada modo de conversión manejará correctamente todos los párrafos en tu texto." },
        { question: "¿Mi texto se envía a algún servidor?", answer: "No. Toda la conversión de texto ocurre localmente en tu navegador. Tu texto nunca sale de tu dispositivo." },
        { question: "¿Cuál es la diferencia entre tipo título y tipo oración?", answer: "El tipo título capitaliza la primera letra de cada palabra importante (por ejemplo, 'El Rápido Zorro Marrón'), mientras que el tipo oración solo capitaliza la primera letra de la oración y los nombres propios (por ejemplo, 'El rápido zorro marrón')." },
      ],
      ar: [
        { question: "ما هي حالة العنوان؟", answer: "حالة العنوان تجعل الحرف الأول من كل كلمة رئيسية كبيراً في النص. تُستخدم عادةً للعناوين الرئيسية وعناوين الكتب ورؤوس المقالات. الكلمات الصغيرة مثل أدوات التعريف والتنكير تُترك عادةً بأحرف صغيرة." },
        { question: "ما هي حالة الجملة؟", answer: "حالة الجملة تجعل الحرف الأول من كل جملة كبيراً فقط، وتبقي الباقي بأحرف صغيرة. هذا هو التنسيق القياسي للنص الأساسي والفقرات ومعظم أنواع الكتابة." },
        { question: "هل تعمل هذه الأداة مع فقرات متعددة؟", answer: "نعم. يمكنك لصق نص يحتوي على فقرات متعددة، وسيتم التعامل مع جميع الفقرات بشكل صحيح في كل وضع تحويل." },
        { question: "هل يتم إرسال نصي إلى أي خادم؟", answer: "لا. يتم كل تحويل النص محلياً في متصفحك. نصك لا يغادر جهازك أبداً." },
        { question: "ما الفرق بين حالة العنوان وحالة الجملة؟", answer: "حالة العنوان تجعل الحرف الأول من كل كلمة رئيسية كبيراً (مثال: 'الثعلب البني السريع')، بينما حالة الجملة تجعل الحرف الأول من الجملة والأسماء العلمية فقط كبيرة (مثال: 'الثعلب البني السريع')." },
      ],
    },
  },
  {
    id: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    description:
      "Generate placeholder text for your designs, mockups, and wireframes.",
    category: "text",
    icon: "📄",
    path: "/tools/lorem-ipsum",
    seoTitle: "Free Lorem Ipsum Generator Online - Placeholder Text 2026",
    seoDescription: "Generate customizable Lorem Ipsum placeholder text for your designs, mockups, and wireframes. Choose paragraphs, sentences, or words. Free online Lorem Ipsum generator.",
    seoKeywords: [
      "lorem ipsum generator", "placeholder text generator",
      "lorem ipsum text online", "dummy text generator",
      "generate lorem ipsum", "placeholder text for design",
      "free lorem ipsum tool", "lorem ipsum paragraphs",
      "lorem ipsum generator online", "mockup text generator"
,      "lorem ipsum for students", "best lorem ipsum generator 2026", "free dummy text generator online"        ],
    howToUse: [
      "Select the type of content you need: paragraphs, sentences, or words.",
      "Choose the number of units you want to generate.",
      "Click 'Generate' to create your Lorem Ipsum placeholder text.",
      "Copy the generated text and paste it into your design, mockup, or wireframe."
    ],
    faq: [
      { question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is standard placeholder text used in the design and publishing industries. It's derived from a Latin text by Cicero from 45 BC. It's used to fill layouts so clients can focus on design rather than content." },
      { question: "Can I choose how many paragraphs to generate?", answer: "Yes. You can specify the exact number of paragraphs, sentences, or words you need. This lets you generate precisely the amount of placeholder text your design requires." },
      { question: "Is Lorem Ipsum text free to use?", answer: "Yes. Lorem Ipsum is in the public domain and completely free to use for any purpose, including commercial projects." },
      { question: "Why not just use real text as a placeholder?", answer: "Real text can distract viewers from evaluating the design itself. Lorem Ipsum provides realistic-looking text without meaningful content, keeping the focus on layout, typography, and visual design." }
,      { question: "What is Lorem Ipsum and why do designers use it?", answer: "Lorem Ipsum is scrambled Latin text used as placeholder content in design mockups, wireframes, and layouts. Designers use it because it has a normal distribution of letters, making it look like real text without distracting from the visual design." }
    ],
    nameTranslations: {
      es: "Generador de Lorem Ipsum",
      ar: "مولد لوريم إيبسوم",
    },
    descriptionTranslations: {
      es: "Genera texto de marcador de posición para tus diseños, maquetas y wireframes.",
      ar: "أنشئ نصاً نائباً لتصاميمك ونماذجك الأولية وإطاراتك السلكية.",
    },
    seoTitleTranslations: {
      es: "Generador de Lorem Ipsum Gratis Online - Texto de Marcador de Posición 2026",
      ar: "مولد لوريم إيبسوم مجاني عبر الإنترنت - نص نائب 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera texto de marcador de posición Lorem Ipsum personalizable para tus diseños, maquetas y wireframes. Elige párrafos, oraciones o palabras. Generador Lorem Ipsum online gratuito.",
      ar: "أنشئ نص لوريم إيبسوم نائب قابل للتخصيص لتصاميمك ونماذجك الأولية وإطاراتك السلكية. اختر فقرات أو جمل أو كلمات. مولد لوريم إيبسوم مجاني عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Selecciona el tipo de contenido que necesitas: párrafos, oraciones o palabras.",
        "Elige la cantidad de unidades que deseas generar.",
        "Haz clic en 'Generar' para crear tu texto de marcador de posición Lorem Ipsum.",
        "Copia el texto generado y pégalo en tu diseño, maqueta o wireframe.",
      ],
      ar: [
        "اختر نوع المحتوى الذي تحتاجه: فقرات أو جمل أو كلمات.",
        "اختر عدد الوحدات التي تريد إنشاؤها.",
        "انقر على 'إنشاء' لتوليد نص لوريم إيبسوم النائب.",
        "انسخ النص المنشأ والصقه في تصميمك أو نموذجك الأولي أو إطارك السلكي.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es Lorem Ipsum?", answer: "Lorem Ipsum es texto de marcador de posición estándar utilizado en las industrias de diseño y publicación. Deriva de un texto latino de Cicerón del año 45 a.C. Se utiliza para rellenar diseños para que los clientes puedan enfocarse en el diseño en lugar del contenido." },
        { question: "¿Puedo elegir cuántos párrafos generar?", answer: "Sí. Puedes especificar el número exacto de párrafos, oraciones o palabras que necesitas. Esto te permite generar exactamente la cantidad de texto de marcador de posición que tu diseño requiere." },
        { question: "¿El texto Lorem Ipsum es de uso gratuito?", answer: "Sí. Lorem Ipsum es de dominio público y completamente gratuito para usar en cualquier propósito, incluyendo proyectos comerciales." },
        { question: "¿Por qué no usar simplemente texto real como marcador de posición?", answer: "El texto real puede distraer a los espectadores de evaluar el diseño en sí mismo. Lorem Ipsum proporciona texto con apariencia realista sin contenido significativo, manteniendo el enfoque en el diseño, la tipografía y el aspecto visual." },
        { question: "¿Qué es Lorem Ipsum y por qué los diseñadores lo usan?", answer: "Lorem Ipsum es texto latino reorganizado utilizado como contenido de marcador de posición en maquetas de diseño, wireframes y diseños. Los diseñadores lo usan porque tiene una distribución normal de letras, lo que hace que parezca texto real sin distraer del diseño visual." },
      ],
      ar: [
        { question: "ما هو لوريم إيبسوم؟", answer: "لوريم إيبسوم هو نص نائب قياسي يُستخدم في صناعات التصميم والنشر. مشتق من نص لاتيني لشيشرون من عام 45 قبل الميلاد. يُستخدم لملء التصاميم حتى يتمكن العملاء من التركيز على التصميم بدلاً من المحتوى." },
        { question: "هل يمكنني اختيار عدد الفقرات التي سيتم إنشاؤها؟", answer: "نعم. يمكنك تحديد العدد الدقيق من الفقرات أو الجمل أو الكلمات التي تحتاجها. يتيح لك ذلك إنشاء الكمية الدقيقة من النص النائب الذي يحتاجه تصميمك." },
        { question: "هل نص لوريم إيبسوم مجاني الاستخدام؟", answer: "نعم. لوريم إيبسوم في المجال العام ومجاني بالكامل للاستخدام لأي غرض، بما في ذلك المشاريع التجارية." },
        { question: "لماذا لا نستخدم نصاً حقيقياً كنص نائب؟", answer: "النص الحقيقي يمكن أن يشتت انتباه المشاهدين عن تقييم التصميم نفسه. يوفر لوريم إيبسوم نصاً يبدو واقعياً بدون محتوى ذي معنى، مما يبقي التركيز على التخطيط والخطوط والتصميم البصري." },
        { question: "ما هو لوريم إيبسوم ولماذا يستخدمه المصممون؟", answer: "لوريم إيبسوم هو نص لاتيني مُعاد ترتيبه يُستخدم كمحتوى نائب في نماذج التصميم الأولية والإطارات السلكية والتخطيطات. يستخدمه المصممون لأنه يحتوي على توزيع طبيعي للحروف مما يجعله يبدو كنص حقيقي دون تشتيت الانتباه عن التصميم البصري." },
      ],
    },
  },
  {
    id: "text-to-slug",
    name: "Text to Slug",
    description:
      "Convert any text into a URL-friendly slug string for clean URLs.",
    category: "text",
    icon: "🔗",
    path: "/tools/text-to-slug",
    seoTitle: "Free Text to Slug Converter Online - URL Slug Generator 2026",
    seoDescription: "Convert any text or title into a clean, URL-friendly slug string. Remove special characters, lowercase, and hyphenate automatically. Free online slug generator.",
    seoKeywords: [
      "text to slug converter", "slug generator", "url slug generator",
      "generate slug from title", "url-friendly slug", "slug creator",
      "convert text to url slug", "seo slug generator",
      "online slug generator free", "slugify text online"
,      "slug generator for students", "best url slug generator 2026", "free slugifier online"        ],
    howToUse: [
      "Enter your text, title, or heading in the input field.",
      "View the URL-friendly slug generated instantly below.",
      "Copy the slug to use in your CMS, blog URL, or routing configuration.",
      "The tool automatically removes special characters, lowercases letters, and replaces spaces with hyphens."
    ],
    faq: [
      { question: "What is a URL slug?", answer: "A URL slug is the part of a URL that identifies a specific page in a human-readable format. For example, in 'example.com/blog/my-first-post', 'my-first-post' is the slug." },
      { question: "Why are slugs important for SEO?", answer: "Clean, descriptive slugs help search engines understand what your page is about. They also make URLs more readable and clickable for users, which can improve click-through rates." },
      { question: "What characters are removed from slugs?", answer: "Special characters, punctuation marks, and non-alphanumeric symbols are stripped out. Spaces are replaced with hyphens, and all letters are converted to lowercase for URL compatibility." },
      { question: "Can I customize the slug separator?", answer: "This tool uses hyphens as the standard separator, which is the most common convention. If you need underscores or another separator, you can do a find-and-replace after generating the slug." }
,      { question: "What characters does this slugifier remove?", answer: "This tool removes all special characters, converts spaces to hyphens, lowercases everything, and strips leading/trailing hyphens. It supports Unicode characters and can transliterate accented letters to their ASCII equivalents." }
    ],
    nameTranslations: {
      es: "Texto a Slug",
      ar: "تحويل النص إلى سلاغ",
    },
    descriptionTranslations: {
      es: "Convierte cualquier texto en una cadena slug amigable para URLs limpias.",
      ar: "حول أي نص إلى سلسلة سلاغ صديقة لعناوين URLs نظيفة.",
    },
    seoTitleTranslations: {
      es: "Conversor de Texto a Slug Gratis Online - Generador de Slug URL 2026",
      ar: "محول النص إلى سلاغ مجاني عبر الإنترنت - مولد سلاغ عنوان URL 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte cualquier texto o título en una cadena slug limpia y amigable para URLs. Elimina caracteres especiales, convierte a minúsculas y separa con guiones automáticamente. Generador de slug online gratuito.",
      ar: "حول أي نص أو عنوان إلى سلسلة سلاغ نظيفة وصديقة لعناوين URLs. أزل الأحرف الخاصة وحول إلى أحرف صغيرة واستبدل بشرطات تلقائياً. مولد سلاغ مجاني عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu texto, título o encabezado en el campo de entrada.",
        "Visualiza el slug amigable para URL generado instantáneamente abajo.",
        "Copia el slug para usarlo en tu CMS, URL de blog o configuración de enrutamiento.",
        "La herramienta elimina automáticamente caracteres especiales, convierte letras a minúsculas y reemplaza espacios con guiones.",
      ],
      ar: [
        "أدخل نصك أو عنوانك أو رأسك في حقل الإدخال.",
        "اعرض السلاغ الصديق لعناوين URL المُنشأ فوراً أدناه.",
        "انسخ السلاغ لاستخدامه في نظام إدارة المحتوى أو عنوان المدونة أو إعدادات التوجيه.",
        "تزيل الأداة تلقائياً الأحرف الخاصة وتحول الأحرف إلى صغيرة وتستبدل المسافات بشرطات.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es un slug de URL?", answer: "Un slug de URL es la parte de una URL que identifica una página específica de forma legible para humanos. Por ejemplo, en 'ejemplo.com/blog/mi-primera-publicacion', 'mi-primera-publicacion' es el slug." },
        { question: "¿Por qué son importantes los slugs para SEO?", answer: "Los slugs limpios y descriptivos ayudan a los motores de búsqueda a entender de qué trata tu página. También hacen que las URLs sean más legibles y clicables para los usuarios, lo que puede mejorar las tasas de clics." },
        { question: "¿Qué caracteres se eliminan de los slugs?", answer: "Se eliminan caracteres especiales, signos de puntuación y símbolos no alfanuméricos. Los espacios se reemplazan con guiones y todas las letras se convierten a minúsculas para compatibilidad con URLs." },
        { question: "¿Puedo personalizar el separador del slug?", answer: "Esta herramienta usa guiones como separador estándar, que es la convención más común. Si necesitas guiones bajos u otro separador, puedes hacer un buscar y reemplazar después de generar el slug." },
        { question: "¿Qué caracteres elimina este generador de slugs?", answer: "Esta herramienta elimina todos los caracteres especiales, convierte espacios en guiones, pasa todo a minúsculas y elimina guiones iniciales y finales. Soporta caracteres Unicode y puede transliterar letras acentuadas a sus equivalentes ASCII." },
      ],
      ar: [
        { question: "ما هو سلاغ عنوان URL؟", answer: "سلاغ عنوان URL هو الجزء من عنوان URL الذي يحدد صفحة معينة بشكل قابل للقراءة البشرية. على سبيل المثال، في 'example.com/blog/my-first-post'، 'my-first-post' هو السلاغ." },
        { question: "لماذا السلاغ مهمة لتحسين محركات البحث؟", answer: "تساعد السلاغ النظيفة والوصفية محركات البحث على فهم محتوى صفحتك. كما تجعل عناوين URLs أكثر قابلية للقراءة والنقر للمستخدمين مما يمكن أن يحسن معدلات النقر." },
        { question: "ما الأحرف التي تُزال من السلاغ؟", answer: "تُزال الأحرف الخاصة وعلامات الترقيم والرموز غير الأبجدية الرقمية. تُستبدل المسافات بشرطات وتُحول جميع الأحرف إلى صغيرة لتوافق URLs." },
        { question: "هل يمكنني تخصيص فاصل السلاغ؟", answer: "تستخدم هذه الأداة الشرطات كفاصل قياسي وهو الاتفاقية الأكثر شيوعاً. إذا كنت تحتاج إلى شرطات سفلية أو فاصل آخر يمكنك إجراء بحث واستبدال بعد إنشاء السلاغ." },
        { question: "ما الأحرف التي تزيلها أداة إنشاء السلاغ هذه؟", answer: "تزيل هذه الأداة جميع الأحرف الخاصة وتحول المسافات إلى شرطات وتجعل كل شيء بأحرف صغيرة وتزيل الشرطات البادئة واللاحقة. تدعم أحرف Unicode ويمكنها تحويل الحروف المشكولة إلى مكافئاتها ASCII." },
      ],
    },
  },
  {
    id: "text-diff",
    name: "Text Diff Checker",
    description:
      "Compare two texts and highlight the differences side by side.",
    category: "text",
    icon: "📋",
    path: "/tools/text-diff",
    seoTitle: "Free Text Diff Checker Online - Compare Two Texts 2026",
    seoDescription: "Compare two texts side by side and highlight differences instantly. Find added, removed, or changed lines. Free online text diff tool. No signup required.",
    seoKeywords: [
      "text diff checker", "compare two texts", "text comparison tool",
      "find text differences", "text difference checker", "compare text online",
      "text diff tool free", "difference finder text",
      "online text comparison", "text diff checker online"
,      "text diff for students", "best text comparison tool 2026", "free text diff checker online"        ],
    howToUse: [
      "Paste your original text in the first input field.",
      "Paste the modified or second text in the second input field.",
      "Click 'Compare' to see a side-by-side comparison.",
      "Added lines are highlighted in green, removed lines in red, and unchanged lines remain neutral."
    ],
    faq: [
      { question: "How does the text diff tool work?", answer: "The tool compares both texts line by line and character by character. It uses a diffing algorithm to identify additions, deletions, and modifications between the two versions." },
      { question: "Is there a limit to how much text I can compare?", answer: "There's no strict limit. You can compare texts of any length. Very large texts may take a moment to process, but the tool handles documents, code files, and articles efficiently." },
      { question: "Can I use this to compare code files?", answer: "Yes. This tool works great for comparing source code, configuration files, or any text-based content. It highlights exactly what changed between versions." },
      { question: "Is my text data stored anywhere?", answer: "No. All text comparison happens locally in your browser. Neither text is sent to any server or stored." }
,      { question: "Can this tool compare large texts?", answer: "Yes, our text diff tool can compare large documents. It performs a line-by-line comparison and highlights added, removed, and unchanged lines so you can quickly spot the differences." }
    ],
    nameTranslations: {
      es: "Comparador de Textos",
      ar: "أداة مقارنة النصوص",
    },
    descriptionTranslations: {
      es: "Compara dos textos y resalta las diferencias lado a lado.",
      ar: "قارن بين نصين وأبرز الاختلافات جنباً إلى جنب.",
    },
    seoTitleTranslations: {
      es: "Comparador de Textos Gratis Online - Compara Dos Textos 2026",
      ar: "أداة مقارنة النصوص مجانية عبر الإنترنت - قارن نصين 2026",
    },
    seoDescriptionTranslations: {
      es: "Compara dos textos lado a lado y resalta las diferencias al instante. Encuentra líneas añadidas, eliminadas o modificadas. Herramienta de comparación de textos online gratuita. Sin registro.",
      ar: "قارن بين نصين جنباً إلى جنب وأبرز الاختلافات فوراً. اعثر على الأسطر المضافة أو المحذوفة أو المعدّلة. أداة مقارنة نصوص مجانية عبر الإنترنت. لا تتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Pega tu texto original en el primer campo de entrada.",
        "Pega el texto modificado o segundo texto en el segundo campo de entrada.",
        "Haz clic en 'Comparar' para ver una comparación lado a lado.",
        "Las líneas añadidas se resaltan en verde, las eliminadas en rojo y las sin cambios permanecen neutrales.",
      ],
      ar: [
        "الصق نصك الأصلي في حقل الإدخال الأول.",
        "الصق النص المعدّل أو النص الثاني في حقل الإدخال الثاني.",
        "انقر على 'مقارنة' لرؤية مقارنة جنباً إلى جنب.",
        "تُبرز الأسطر المضافة باللون الأخضر والمحذوفة بالأحمر وغير المتغيرة تبقى محايدة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo funciona la herramienta de comparación de textos?", answer: "La herramienta compara ambos textos línea por línea y carácter por carácter. Usa un algoritmo de diff para identificar adiciones, eliminaciones y modificaciones entre las dos versiones." },
        { question: "¿Hay un límite en la cantidad de texto que puedo comparar?", answer: "No hay límite estricto. Puedes comparar textos de cualquier longitud. Los textos muy grandes pueden tardar un momento en procesarse, pero la herramienta maneja documentos, archivos de código y artículos de manera eficiente." },
        { question: "¿Puedo usar esto para comparar archivos de código?", answer: "Sí. Esta herramienta funciona muy bien para comparar código fuente, archivos de configuración o cualquier contenido basado en texto. Resalta exactamente lo que cambió entre versiones." },
        { question: "¿Se almacenan mis datos de texto en algún lugar?", answer: "No. Toda la comparación de textos ocurre localmente en tu navegador. Ningún texto se envía a ningún servidor ni se almacena." },
        { question: "¿Puede esta herramienta comparar textos grandes?", answer: "Sí, nuestra herramienta de comparación de textos puede comparar documentos grandes. Realiza una comparación línea por línea y resalta las líneas añadidas, eliminadas y sin cambios para que puedas identificar rápidamente las diferencias." },
      ],
      ar: [
        { question: "كيف تعمل أداة مقارنة النصوص؟", answer: "تقارن الأداة كلا النصين سطراً بسطر وحرفاً بحرف. تستخدم خوارزمية فرق لتحديد الإضافات والحذف والتعديلات بين النسختين." },
        { question: "هل هناك حد لكمية النص التي يمكنني مقارنتها؟", answer: "لا يوجد حد صارم. يمكنك مقارنة نصوص بأي طول. النصوص الكبيرة جداً قد تستغرق لحظة للمعالجة لكن الأداة تتعامل مع المستندات وملفات الكود والمقالات بكفاءة." },
        { question: "هل يمكنني استخدام هذا لمقارنة ملفات الكود؟", answer: "نعم. تعمل هذه الأداة بشكل ممتاز لمقارنة الكود المصدري أو ملفات الإعدادات أو أي محتوى نصي. تبرز بالضبط ما تغيّر بين النسخ." },
        { question: "هل يتم تخزين بيانات نصي في أي مكان؟", answer: "لا. تتم جميع عمليات مقارنة النصوص محلياً في متصفحك. لا يُرسل أي نص إلى أي خادم أو يُخزّن." },
        { question: "هل يمكن لهذه الأداة مقارنة النصوص الكبيرة؟", answer: "نعم يمكن لأداة مقارنة النصوص لدينا مقارنة المستندات الكبيرة. تجري مقارنة سطراً بسطر وتُبرز الأسطر المضافة والمحذوفة وغير المتغيرة حتى تتمكن من spotting الاختلافات بسرعة." },
      ],
    },
  },
  {
    id: "remove-duplicate-lines",
    name: "Remove Duplicate Lines",
    description:
      "Remove duplicate lines from text while preserving order. Clean up your lists instantly.",
    category: "text",
    icon: "🧹",
    path: "/tools/remove-duplicate-lines",
    seoTitle: "Free Duplicate Line Remover Online - Deduplicate Text 2026",
    seoDescription: "Remove duplicate lines from any text while preserving the original order. Clean up email lists, keywords, and data. Free online duplicate line remover.",
    seoKeywords: [
      "remove duplicate lines", "deduplicate text", "remove duplicates online",
      "delete duplicate lines", "clean up duplicate text", "dedup text tool",
      "remove repeated lines", "duplicate line remover free",
      "clean duplicate lines from list", "text deduplicator"
,      "deduplicate for students", "best duplicate remover 2026", "free remove duplicates online"        ],
    howToUse: [
      "Paste your text with duplicate lines into the input field.",
      "Click 'Remove Duplicates' to process the text.",
      "View the cleaned text with all duplicate lines removed while keeping original order.",
      "Copy the result and use it in your application, spreadsheet, or document."
    ],
    faq: [
      { question: "Does this tool preserve the original line order?", answer: "Yes. Duplicate lines are removed while keeping the first occurrence of each line in its original position. This preserves the logical order of your list or text." },
      { question: "What counts as a duplicate line?", answer: "A duplicate line is an exact match — including the same text, spacing, and capitalization. Lines that differ even by a single character or space are treated as unique." },
      { question: "Can I use this to clean up email lists?", answer: "Yes. This is one of the most common use cases. Paste your email list, remove duplicates, and get a clean list ready for your mailing campaign." },
      { question: "Is there a limit to how many lines I can process?", answer: "There's no strict limit. The tool can handle thousands of lines efficiently. Very large files may take a few seconds to process." }
,      { question: "Does this tool preserve the original order of lines?", answer: "Yes, the deduplication process preserves the original order. It keeps the first occurrence of each line and removes subsequent duplicates, maintaining the sequence of your data." }
    ],
    nameTranslations: {
      es: "Eliminar Líneas Duplicadas",
      ar: "إزالة الأسطر المكررة",
    },
    descriptionTranslations: {
      es: "Elimina líneas duplicadas del texto manteniendo el orden. Limpia tus listas al instante.",
      ar: "أزل الأسطر المكررة من النص مع الحفاظ على الترتيب. نظّم قوائمك فوراً.",
    },
    seoTitleTranslations: {
      es: "Eliminador de Líneas Duplicadas Gratis Online - Desduplicar Texto 2026",
      ar: "إزالة الأسطر المكررة مجاناً عبر الإنترنت - إزالة تكرار النص 2026",
    },
    seoDescriptionTranslations: {
      es: "Elimina líneas duplicadas de cualquier texto manteniendo el orden original. Limpia listas de correos, palabras clave y datos. Eliminador de duplicados online gratuito.",
      ar: "أزل الأسطر المكررة من أي نص مع الحفاظ على الترتيب الأصلي. نظّم قوائم البريد الإلكتروني والكلمات الرئيسية والبيانات. أداة إزالة تكرار مجانية عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Pega tu texto con líneas duplicadas en el campo de entrada.",
        "Haz clic en 'Eliminar Duplicados' para procesar el texto.",
        "Visualiza el texto limpio con todas las líneas duplicadas eliminadas manteniendo el orden original.",
        "Copia el resultado y úsalo en tu aplicación, hoja de cálculo o documento.",
      ],
      ar: [
        "الصق نصك الذي يحتوي على أسطر مكررة في حقل الإدخال.",
        "انقر على 'إزالة التكرار' لمعالجة النص.",
        "اعرض النص المنظّف مع إزالة جميع الأسطر المكررة مع الحفاظ على الترتيب الأصلي.",
        "انسخ النتيجة واستخدمها في تطبيقك أو جدول البيانات أو المستند.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Esta herramienta preserva el orden original de las líneas?", answer: "Sí. Las líneas duplicadas se eliminan manteniendo la primera aparición de cada línea en su posición original. Esto preserva el orden lógico de tu lista o texto." },
        { question: "¿Qué cuenta como una línea duplicada?", answer: "Una línea duplicada es una coincidencia exacta — incluyendo el mismo texto, espaciado y capitalización. Las líneas que difieren aunque sea por un solo carácter o espacio se tratan como únicas." },
        { question: "¿Puedo usar esto para limpiar listas de correo?", answer: "Sí. Este es uno de los usos más comunes. Pega tu lista de correos, elimina duplicados y obtén una lista limpia lista para tu campaña de correo." },
        { question: "¿Hay un límite en cuántas líneas puedo procesar?", answer: "No hay límite estricto. La herramienta puede manejar miles de líneas de manera eficiente. Los archivos muy grandes pueden tardar unos segundos en procesarse." }
      ],
      ar: [
        { question: "هل تحافظ هذه الأداة على الترتيب الأصلي للأسطر؟", answer: "نعم. تُزال الأسطر المكررة مع الحفاظ على التكرار الأول لكل سطر في موقعه الأصلي. هذا يحافظ على الترتيب المنطقي لقائمتك أو نصك." },
        { question: "ما الذي يُعتبر سطراً مكرراً؟", answer: "السطر المكرر هو تطابق تام -- بما في ذلك نفس النص والمسافات والأحرف الكبيرة والصغيرة. الأسطر التي تختلف ولو بحرف واحد أو مسافة تُعامل على أنها فريدة." },
        { question: "هل يمكنني استخدام هذا لتنظيف قوائم البريد الإلكتروني؟", answer: "نعم. هذا من أكثر الاستخدامات شيوعاً. الصق قائمة بريدك الإلكتروني وأزل التكرار واحصل على قائمة نظيفة جاهزة لحملتك البريدية." },
        { question: "هل هناك حد لعدد الأسطر التي يمكنني معالجتها؟", answer: "لا يوجد حد صارم. يمكن للأداة التعامل مع آلاف الأسطر بكفاءة. الملفات الكبيرة جداً قد تستغرق بضع ثوانٍ للمعالجة." }
      ],
    },
  },
  {
    id: "text-repeater",
    name: "Text Repeater",
    description:
      "Repeat any text or string a specified number of times instantly.",
    category: "text",
    icon: "🔁",
    path: "/tools/text-repeater",
    seoTitle: "Free Text Repeater Online - Repeat Text & Strings 2026",
    seoDescription: "Repeat any text, word, or string a specified number of times. Add separators between repetitions. Free online text repeater tool. No signup required.",
    seoKeywords: [
      "text repeater", "repeat text online", "string repeater",
      "repeat string n times", "text duplicator", "repeat text tool",
      "copy paste repeater", "repeat words online",
      "text repeater online free", "how to repeat text"
,      "text repeater for students", "best string repeater 2026", "free text repeat tool online"        ],
    howToUse: [
      "Enter the text or string you want to repeat in the input field.",
      "Set the number of times you want it repeated.",
      "Optionally add a separator between repetitions (like a comma, space, or newline).",
      "Click 'Repeat' to generate the output and copy it to your clipboard."
    ],
    faq: [
      { question: "Why would I need a text repeater?", answer: "Text repeaters are useful for generating test data, creating patterned text, filling forms, or repeating characters for visual separators (like dashed lines in comments)." },
      { question: "Can I add a separator between repeated text?", answer: "Yes. You can specify any separator — space, comma, newline, or any custom character — to appear between each repetition." },
      { question: "Is there a maximum number of repetitions?", answer: "You can repeat text as many times as you need. Very large numbers of repetitions will produce correspondingly large output." },
      { question: "Does this tool work offline?", answer: "Yes. All text repetition happens locally in your browser. No internet connection is needed after the page loads." }
,      { question: "How many times can I repeat text?", answer: "You can repeat text up to 10,000 times. You can also add a separator (space, newline, comma, or custom) between repetitions for flexible formatting." }
    ],
    nameTranslations: {
      es: "Repetidor de Texto",
      ar: "مكرر النص",
    },
    descriptionTranslations: {
      es: "Repite cualquier texto o cadena un número determinado de veces al instante.",
      ar: "كرر أي نص أو سلسلة عدداً محدداً من المرات فوراً.",
    },
    seoTitleTranslations: {
      es: "Repetidor de Texto Gratis Online - Repetir Texto y Cadenas 2026",
      ar: "مكرر النص مجاني عبر الإنترنت - تكرار النصوص والسلاسل 2026",
    },
    seoDescriptionTranslations: {
      es: "Repite cualquier texto, palabra o cadena un número determinado de veces. Añade separadores entre repeticiones. Repetidor de texto online gratuito. Sin registro.",
      ar: "كرر أي نص أو كلمة أو سلسلة عدداً محدداً من المرات. أضف فواصل بين التكرارات. مكرر نص مجاني عبر الإنترنت. لا يتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa el texto o cadena que deseas repetir en el campo de entrada.",
        "Establece el número de veces que deseas repetirlo.",
        "Opcionalmente añade un separador entre repeticiones (como una coma, espacio o salto de línea).",
        "Haz clic en 'Repetir' para generar la salida y copiarla a tu portapapeles.",
      ],
      ar: [
        "أدخل النص أو السلسلة التي تريد تكرارها في حقل الإدخال.",
        "حدد عدد المرات التي تريد تكرارها.",
        "يمكنك اختيارياً إضافة فاصل بين التكرارات (مثل فاصلة أو مسافة أو سطر جديد).",
        "انقر على 'تكرار' لإنشاء الإخراج ونسخه إلى الحافظة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Por qué necesitaría un repetidor de texto?", answer: "Los repetidores de texto son útiles para generar datos de prueba, crear texto con patrones, rellenar formularios o repetir caracteres para separadores visuales (como líneas punteadas en comentarios)." },
        { question: "¿Puedo añadir un separador entre texto repetido?", answer: "Sí. Puedes especificar cualquier separador — espacio, coma, salto de línea o cualquier carácter personalizado — para aparecer entre cada repetición." },
        { question: "¿Hay un número máximo de repeticiones?", answer: "Puedes repetir texto tantas veces como necesites. Números muy grandes de repeticiones producirán una salida proporcionalmente grande." },
        { question: "¿Esta herramienta funciona sin conexión?", answer: "Sí. Toda la repetición de texto ocurre localmente en tu navegador. No se necesita conexión a internet después de cargar la página." },
        { question: "¿Cuántas veces puedo repetir texto?", answer: "Puedes repetir texto hasta 10,000 veces. También puedes añadir un separador (espacio, salto de línea, coma o personalizado) entre repeticiones para un formato flexible." },
      ],
      ar: [
        { question: "لماذا أحتاج إلى مكرر نص؟", answer: "مكررات النص مفيدة لإنشاء بيانات الاختبار أو إنشاء نص بنمط معين أو ملء النماذج أو تكرار الأحرف للفواصل البصرية (مثل الخطوط المتقطعة في التعليقات)." },
        { question: "هل يمكنني إضافة فاصل بين النص المكرر؟", answer: "نعم. يمكنك تحديد أي فاصل -- مسافة أو فاصلة أو سطر جديد أو أي حرف مخصص -- ليظهر بين كل تكرار." },
        { question: "هل هناك حد أقصى لعدد التكرارات؟", answer: "يمكنك تكرار النص بعدد المرات التي تحتاجها. الأعداد الكبيرة جداً من التكرارات ستنتج إخراجاً كبيراً بشكل متناسب." },
        { question: "هل تعمل هذه الأداة بدون اتصال؟", answer: "نعم. يتم كل تكرار النص محلياً في متصفحك. لا تحتاج إلى اتصال بالإنترنت بعد تحميل الصفحة." },
        { question: "كم مرة يمكنني تكرار النص؟", answer: "يمكنك تكرار النص حتى 10000 مرة. يمكنك أيضاً إضافة فاصل (مسافة أو سطر جديد أو فاصلة أو مخصص) بين التكرارات لتنسيق مرن." },
      ],
    },
  },
  // Developer Tools
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description:
      "Format, minify, and validate JSON data with syntax highlighting.",
    category: "developer",
    icon: "{ }",
    path: "/tools/json-formatter",
    seoTitle: "Free JSON Formatter Online - Beautify & Validate JSON 2026",
    seoDescription: "Format and beautify JSON with syntax highlighting. Validate, minify, and prettify JSON data instantly. Free online JSON formatter for developers. No signup required.",
    seoKeywords: [
      "json formatter", "json beautifier", "json validator",
      "prettify json online", "minify json", "json pretty print",
      "format json online", "json syntax checker", "json format tool",
      "how to format json", "free json formatter"
,      "json formatter for students", "best json formatter 2026", "free json validator online"        ],
    howToUse: [
      "Paste your raw or minified JSON data into the input field.",
      "Click 'Format' to beautify the JSON with proper indentation, or 'Minify' to compress it.",
      "View the formatted output with syntax highlighting in the result panel.",
      "Copy the formatted JSON to your clipboard or download it as a file.",
      "If your JSON is invalid, the tool will highlight the error so you can fix it."
    ],
    faq: [
      { question: "What is JSON formatting?", answer: "JSON formatting (also called beautifying or pretty printing) is the process of converting minified or compact JSON into a human-readable structure with proper indentation and line breaks. This makes it much easier to read, debug, and understand complex JSON data." },
      { question: "Is this JSON formatter free to use?", answer: "Yes, this JSON formatter is completely free with no signup required. You can format, minify, and validate unlimited JSON data directly in your browser." },
      { question: "Does this tool validate my JSON?", answer: "Yes. When you paste JSON and click format, the tool will validate the syntax. If there are errors like missing commas, unclosed brackets, or invalid characters, it will alert you to the specific issue." },
      { question: "Is my JSON data sent to any server?", answer: "No. All JSON processing happens locally in your browser. Your data never leaves your device, making it safe to use with sensitive or private JSON data." }
,      { question: "Can I paste minified JSON from an API response?", answer: "Absolutely. Paste any minified or messy JSON from API responses and it will be instantly formatted with proper indentation and syntax highlighting." }
    ],
    nameTranslations: {
      es: "Formateador de JSON",
      ar: "منسق JSON",
    },
    descriptionTranslations: {
      es: "Formatea, minifica y valida datos JSON con resaltado de sintaxis.",
      ar: "نسّق وصغّر وتحقق من بيانات JSON مع تمييز الصيغة.",
    },
    seoTitleTranslations: {
      es: "Formateador de JSON Gratis Online - Embellecer y Validar JSON 2026",
      ar: "منسق JSON مجاني عبر الإنترنت - تجميل والتحقق من JSON 2026",
    },
    seoDescriptionTranslations: {
      es: "Formatea y embellece JSON con resaltado de sintaxis. Valida, minifica y embellece datos JSON al instante. Formateador JSON online gratuito para desarrolladores. Sin registro.",
      ar: "نسّق وجمّل JSON مع تمييز الصيغة. تحقق وصغّر وجمّل بيانات JSON فوراً. منسق JSON مجاني عبر الإنترنت للمطورين. لا يتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Pega tus datos JSON sin formato o minificados en el campo de entrada.",
        "Haz clic en 'Formatear' para embellecer el JSON con indentación adecuada, o 'Minificar' para comprimirlo.",
        "Visualiza la salida formateada con resaltado de sintaxis en el panel de resultados.",
        "Copia el JSON formateado a tu portapapeles o descárgalo como archivo.",
        "Si tu JSON es inválido, la herramienta resaltará el error para que puedas corregirlo.",
      ],
      ar: [
        "الصق بيانات JSON الخام أو المصغّرة في حقل الإدخال.",
        "انقر على 'تنسيق' لتجميل JSON بمسافات بادئة مناسبة أو 'تصغير' لضغطه.",
        "اعرض الإخراج المنسّق مع تمييز الصيغة في لوحة النتائج.",
        "انسخ JSON المنسّق إلى الحافظة أو حمّله كملف.",
        "إذا كان JSON غير صالح ستبرز الأداة الخطأ حتى تتمكن من إصلاحه.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es el formateo de JSON?", answer: "El formateo de JSON (también llamado embellecimiento o pretty printing) es el proceso de convertir JSON minificado o compacto en una estructura legible con indentación y saltos de línea adecuados. Esto facilita mucho la lectura, depuración y comprensión de datos JSON complejos." },
        { question: "¿Este formateador de JSON es gratuito?", answer: "Sí, este formateador de JSON es completamente gratuito sin registro requerido. Puedes formatear, minificar y validar datos JSON ilimitados directamente en tu navegador." },
        { question: "¿Esta herramienta valida mi JSON?", answer: "Sí. Cuando pegas JSON y haces clic en formatear, la herramienta valida la sintaxis. Si hay errores como comas faltantes, corchetes sin cerrar o caracteres inválidos, te alertará sobre el problema específico." },
        { question: "¿Mis datos JSON se envían a algún servidor?", answer: "No. Todo el procesamiento de JSON ocurre localmente en tu navegador. Tus datos nunca salen de tu dispositivo, lo que lo hace seguro para usar con datos JSON sensibles o privados." },
        { question: "¿Puedo pegar JSON minificado de una respuesta de API?", answer: "Absolutamente. Pega cualquier JSON minificado o desordenado de respuestas de API y se formateará instantáneamente con indentación adecuada y resaltado de sintaxis." },
      ],
      ar: [
        { question: "ما هو تنسيق JSON؟", answer: "تنسيق JSON (يُسمى أيضاً التجميل أو الطباعة الجميلة) هو عملية تحويل JSON المصغّر أو المضغوط إلى بنية قابلة للقراءة مع مسافات بادئة وفواصل أسطر مناسبة. هذا يسهل بشكل كبير القراءة وتصحيح الأخطاء وفهم بيانات JSON المعقدة." },
        { question: "هل منسق JSON هذا مجاني الاستخدام؟", answer: "نعم منسق JSON هذا مجاني بالكامل ولا يتطلب تسجيل. يمكنك تنسيق وتصغير والتحقق من بيانات JSON غير محدودة مباشرة في متصفحك." },
        { question: "هل تتحقق هذه الأداة من JSON الخاص بي؟", answer: "نعم. عند لصق JSON والنقر على تنسيق تتحقق الأداة من الصيغة. إذا كانت هناك أخطاء مثل فواصل مفقودة أو أقواس غير مغلقة أو أحرف غير صالحة فستنبهك إلى المشكلة المحددة." },
        { question: "هل يتم إرسال بيانات JSON الخاصة بي إلى أي خادم؟", answer: "لا. تتم جميع عمليات معالجة JSON محلياً في متصفحك. بياناتك لا تغادر جهازك أبداً مما يجعله آمناً للاستخدام مع بيانات JSON الحساسة أو الخاصة." },
        { question: "هل يمكنني لصق JSON مصغّر من استجابة API؟", answer: "بالتأكيد. الصق أي JSON مصغّر أو فوضوي من استجابات API وسيتم تنسيقه فوراً مع مسافات بادئة مناسبة وتمييز الصيغة." },
      ],
    },
  },
  {
    id: "base64-converter",
    name: "Base64 Encoder/Decoder",
    description: "Encode and decode text to and from Base64 format instantly.",
    category: "developer",
    icon: "🔄",
    path: "/tools/base64-converter",
    seoTitle: "Free Base64 Converter Online - Encode & Decode Base64 2026",
    seoDescription: "Encode text to Base64 or decode Base64 strings back to readable text. Fast, free online Base64 converter with no length limits. No signup required.",
    seoKeywords: [
      "base64 encoder", "base64 decoder", "base64 converter",
      "encode to base64 online", "decode base64 online", "base64 tool",
      "base64 encode decode free", "online base64 converter",
      "how to decode base64", "base64 text encoder"
,      "base64 for students", "best base64 converter 2026", "free base64 encoder online"        ],
    howToUse: [
      "Select 'Encode' to convert text to Base64, or 'Decode' to convert Base64 back to text.",
      "Paste your text or Base64 string into the input field.",
      "View the converted result instantly in the output panel.",
      "Copy the result to your clipboard with one click."
    ],
    faq: [
      { question: "What is Base64 encoding?", answer: "Base64 is a method of encoding binary data into ASCII text characters. It's commonly used to embed images in HTML/CSS, encode email attachments, and safely transmit binary data over text-based protocols like HTTP and JSON." },
      { question: "How do I decode a Base64 string?", answer: "Simply select the 'Decode' mode, paste your Base64 string into the input field, and the decoded text will appear instantly in the output panel. The tool handles multi-line Base64 strings automatically." },
      { question: "Is there a limit to how much text I can encode?", answer: "There is no practical limit. You can encode or decode text of any length directly in your browser. Processing speed depends on your device's capabilities." },
      { question: "Is my data secure when using this tool?", answer: "Yes. All encoding and decoding happens locally in your browser. No data is sent to any server, ensuring your information remains private." }
,      { question: "What is Base64 encoding used for?", answer: "Base64 encoding converts binary data into ASCII text format. It is commonly used in data URLs, email attachments (MIME), encoding images in CSS/HTML, and safely transmitting binary data in text-based protocols." }
    ],
    nameTranslations: {
      es: "Codificador/Decodificador Base64",
      ar: "مشفر/فك تشفير Base64",
    },
    descriptionTranslations: {
      es: "Codifica y decodifica texto desde y hacia formato Base64 al instante.",
      ar: "شفّر وفك تشفير النص من وإلى تنسيق Base64 فوراً.",
    },
    seoTitleTranslations: {
      es: "Conversor Base64 Gratis Online - Codificar y Decodificar Base64 2026",
      ar: "محول Base64 مجاني عبر الإنترنت - تشفير وفك Base64 2026",
    },
    seoDescriptionTranslations: {
      es: "Codifica texto a Base64 o decodifica cadenas Base64 de vuelta a texto legible. Conversor Base64 online rápido y gratuito sin límites de longitud. Sin registro.",
      ar: "شفّر النص إلى Base64 أو فك تشفير سلاسل Base64 إلى نص مقروء. محول Base64 سريع ومجاني عبر الإنترنت بدون حدود للطول. لا يتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Selecciona 'Codificar' para convertir texto a Base64, o 'Decodificar' para convertir Base64 de vuelta a texto.",
        "Pega tu texto o cadena Base64 en el campo de entrada.",
        "Visualiza el resultado convertido instantáneamente en el panel de salida.",
        "Copia el resultado a tu portapapeles con un clic.",
      ],
      ar: [
        "اختر 'تشفير' لتحويل النص إلى Base64 أو 'فك التشفير' لتحويل Base64 إلى نص.",
        "الصق نصك أو سلسلة Base64 في حقل الإدخال.",
        "اعرض النتيجة المحوّلة فوراً في لوحة الإخراج.",
        "انسخ النتيجة إلى الحافظة بنقرة واحدة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es la codificación Base64?", answer: "Base64 es un método para codificar datos binarios en caracteres de texto ASCII. Se usa comúnmente para incrustar imágenes en HTML/CSS, codificar adjuntos de correo electrónico y transmitir de forma segura datos binarios sobre protocolos basados en texto como HTTP y JSON." },
        { question: "¿Cómo decodifico una cadena Base64?", answer: "Simplemente selecciona el modo 'Decodificar', pega tu cadena Base64 en el campo de entrada y el texto decodificado aparecerá instantáneamente en el panel de salida. La herramienta maneja cadenas Base64 de múltiples líneas automáticamente." },
        { question: "¿Hay un límite en la cantidad de texto que puedo codificar?", answer: "No hay límite práctico. Puedes codificar o decodificar texto de cualquier longitud directamente en tu navegador. La velocidad de procesamiento depende de las capacidades de tu dispositivo." },
        { question: "¿Mis datos son seguros al usar esta herramienta?", answer: "Sí. Toda la codificación y decodificación ocurre localmente en tu navegador. No se envían datos a ningún servidor, asegurando que tu información permanezca privada." },
        { question: "¿Para qué se usa la codificación Base64?", answer: "La codificación Base64 convierte datos binarios en formato de texto ASCII. Se usa comúnmente en URLs de datos, adjuntos de correo electrónico (MIME), codificación de imágenes en CSS/HTML y transmisión segura de datos binarios en protocolos basados en texto." },
      ],
      ar: [
        { question: "ما هو تشفير Base64؟", answer: "Base64 هو طريقة لتشفير البيانات الثنائية إلى أحرف نص ASCII. يُستخدم عادةً لتضمين الصور في HTML/CSS وتشفير مرفقات البريد الإلكتروني ونقل البيانات الثنائية بأمان عبر بروتوكولات نصية مثل HTTP وJSON." },
        { question: "كيف أفك تشفير سلسلة Base64؟", answer: "ببساطة اختر وضع 'فك التشفير' والصق سلسلة Base64 في حقل الإدخال وسيظهر النص المفكك فوراً في لوحة الإخراج. تتعامل الأداة تلقائياً مع سلاسل Base64 متعددة الأسطر." },
        { question: "هل هناك حد لكمية النص التي يمكنني تشفيرها؟", answer: "لا يوجد حد عملي. يمكنك تشفير أو فك تشفير نص بأي طول مباشرة في متصفحك. تعتمد سرعة المعالجة على إمكانيات جهازك." },
        { question: "هل بياناتي آمنة عند استخدام هذه الأداة؟", answer: "نعم. يتم كل التشفير وفك التشفير محلياً في متصفحك. لا تُرسل أي بيانات إلى أي خادم مما يضمن بقاء معلوماتك خاصة." },
        { question: "ما الاستخدامات الشائعة لتشفير Base64؟", answer: "يحوّل تشفير Base64 البيانات الثنائية إلى تنسيق نص ASCII. يُستخدم عادةً في عناوين URLs ومرفقات البريد الإلكتروني (MIME) وتشفير الصور في CSS/HTML ونقل البيانات الثنائية بأمان في البروتوكولات النصية." },
      ],
    },
  },
  {
    id: "url-encoder",
    name: "URL Encoder/Decoder",
    description:
      "Encode or decode URLs and URL components for web development.",
    category: "developer",
    icon: "🌐",
    path: "/tools/url-encoder",
    seoTitle: "Free URL Encoder Online - Encode & Decode URLs 2026",
    seoDescription: "Encode URLs with percent-encoding or decode percent-encoded URLs back to readable text. Free online URL encoder/decoder for web developers. No signup required.",
    seoKeywords: [
      "url encoder", "url decoder", "percent encoding",
      "encode url online", "decode url online", "url encode decode",
      "url encoding tool", "percent encode url",
      "free url encoder", "url encoder decoder online"
,      "url encoder for students", "best url encoder 2026", "free percent encoding tool online"        ],
    howToUse: [
      "Select 'Encode' to convert a URL to percent-encoded format, or 'Decode' to decode it back.",
      "Paste your URL or encoded string into the input field.",
      "View the result instantly in the output panel.",
      "Copy the encoded or decoded URL to your clipboard."
    ],
    faq: [
      { question: "What is URL encoding?", answer: "URL encoding (also called percent-encoding) converts special characters in URLs into a format that can be safely transmitted over the internet. Characters like spaces, ampersands, and equals signs are converted to %XX format." },
      { question: "When should I use URL encoding?", answer: "URL encoding is needed when passing special characters in query strings, form data, or API requests. It ensures that characters like &, =, ?, and spaces don't break the URL structure." },
      { question: "What characters get encoded?", answer: "Reserved characters (? & = # +), unsafe characters (spaces, angle brackets, quotes, curly braces, pipes, backslashes, carets, tildes, square brackets), and non-ASCII characters (like accented letters or Chinese characters) are all encoded." },
      { question: "Does this tool handle full URLs with query strings?", answer: "Yes. You can encode or decode complete URLs including query parameters and fragments. The tool properly handles all special characters throughout the entire URL." }
,      { question: "Why do I need to URL encode my text?", answer: "URL encoding converts special characters into a format that can be safely transmitted in URLs. Characters like spaces, ampersands, and question marks have special meanings in URLs and must be encoded to prevent errors." }
    ],
    nameTranslations: {
      es: "Codificador/Decodificador de URLs",
      ar: "مشفر/فك تشفير عناوين URLs",
    },
    descriptionTranslations: {
      es: "Codifica o decodifica URLs y componentes de URL para desarrollo web.",
      ar: "شفّر أو فك تشفير عناوين URLs ومكوناتها لتطوير الويب.",
    },
    seoTitleTranslations: {
      es: "Codificador de URLs Gratis Online - Codificar y Decodificar URLs 2026",
      ar: "مشفر عناوين URLs مجاني عبر الإنترنت - تشفير وفك عناوين URLs 2026",
    },
    seoDescriptionTranslations: {
      es: "Codifica URLs con codificación porcentual o decodifica URLs con codificación porcentual de vuelta a texto legible. Codificador/decodificador de URLs online gratuito para desarrolladores web. Sin registro.",
      ar: "شفّر عناوين URLs بالتشفير النسبي أو فك تشفير عناوين URLs المشفرة نسبياً إلى نص مقروء. مشفر/فك تشفير عناوين URLs مجاني عبر الإنترنت لمطوري الويب. لا يتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Selecciona 'Codificar' para convertir una URL a formato con codificación porcentual, o 'Decodificar' para decodificarla.",
        "Pega tu URL o cadena codificada en el campo de entrada.",
        "Visualiza el resultado instantáneamente en el panel de salida.",
        "Copia la URL codificada o decodificada a tu portapapeles.",
      ],
      ar: [
        "اختر 'تشفير' لتحويل عنوان URL إلى تنسيق مشفر نسبياً أو 'فك التشفير' لفكه.",
        "الصق عنوان URL أو السلسلة المشفرة في حقل الإدخال.",
        "اعرض النتيجة فوراً في لوحة الإخراج.",
        "انسخ عنوان URL المشفر أو المفكك إلى الحافظة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es la codificación de URLs?", answer: "La codificación de URLs (también llamada codificación porcentual) convierte caracteres especiales en URLs a un formato que puede transmitirse de forma segura por internet. Caracteres como espacios, ampersands y signos de igualdad se convierten a formato %XX." },
        { question: "¿Cuándo debo usar codificación de URLs?", answer: "La codificación de URLs es necesaria cuando se pasan caracteres especiales en cadenas de consulta, datos de formularios o solicitudes de API. Asegura que caracteres como &, =, ? y espacios no rompan la estructura de la URL." },
        { question: "¿Qué caracteres se codifican?", answer: "Se codifican caracteres reservados (? & = # +), caracteres inseguros (espacios, ángulos, comillas, llaves, tuberías, barras invertidas, circunflejos, tildes, corchetes) y caracteres no ASCII (como letras acentuadas o caracteres chinos)." },
        { question: "¿Esta herramienta maneja URLs completas con cadenas de consulta?", answer: "Sí. Puedes codificar o decodificar URLs completas incluyendo parámetros de consulta y fragmentos. La herramienta maneja correctamente todos los caracteres especiales en toda la URL." },
        { question: "¿Por qué necesito codificar mi texto en URL?", answer: "La codificación de URLs convierte caracteres especiales a un formato que puede transmitirse de forma segura en URLs. Caracteres como espacios, ampersands y signos de interrogación tienen significados especiales en URLs y deben codificarse para prevenir errores." },
      ],
      ar: [
        { question: "ما هو تشفير عناوين URLs؟", answer: "تشفير عناوين URLs (يُسمى أيضاً التشفير النسبي) يحوّل الأحرف الخاصة في عناوين URLs إلى تنسيق يمكن نقله بأمان عبر الإنترنت. تُحوّل أحرف مثل المسافات وعلامات العطف وعلامات التساوي إلى تنسيق %XX." },
        { question: "متى يجب علي استخدام تشفير عناوين URLs؟", answer: "يلزم تشفير عناوين URLs عند تمرير أحرف خاصة في سلاسل الاستعلام أو بيانات النماذج أو طلبات API. يضمن أن أحرف مثل & و = و ؟ والمسافات لا تُعطّل بنية عنوان URL." },
        { question: "ما الأحرف التي يتم تشفيرها؟", answer: "تُشفّر الأحرف المحجوزة (? & = # +) والأحرف غير الآمنة (المسافات وزوايا الأقواس وعلامات الاقتباس والأقواس المعقوفة وأنابيب وشرطات مائلة علوية وأقواس مربعة) والأحرف غير ASCII (مثل الحروف المشكولة أو الأحرف الصينية)." },
        { question: "هل تتعامل هذه الأداة مع عناوين URLs الكاملة مع سلاسل الاستعلام؟", answer: "نعم. يمكنك تشفير أو فك تشفير عناوين URLs كاملة بما في ذلك معاملات الاستعلام والقطع. تتعامل الأداة بشكل صحيح مع جميع الأحرف الخاصة في كامل عنوان URL." },
        { question: "لماذا أحتاج إلى تشفير نصي في عنوان URL؟", answer: "يُحوّل تشفير عناوين URLs الأحرف الخاصة إلى تنسيق يمكن نقله بأمان في عناوين URLs. أحرف مثل المسافات وعلامات العطف وعلامات الاستفهام لها معانٍ خاصة في عناوين URLs ويجب تشفيرها لمنع الأخطاء." },
      ],
    },
  },
  {
    id: "hash-generator",
    name: "Hash Generator",
    description:
      "Generate SHA-1, SHA-256, and SHA-512 hashes from any text input.",
    category: "developer",
    icon: "#️⃣",
    path: "/tools/hash-generator",
    seoTitle: "Free Hash Generator Online - SHA256, SHA1, SHA512 Calculator 2026",
    seoDescription: "Generate SHA-1, SHA-256, and SHA-512 hash digests from any text input. Fast, free online hash generator for developers. No signup required.",
    seoKeywords: [
      "hash generator", "sha256 generator", "sha512 generator",
      "sha1 generator", "hash calculator online", "generate sha hash",
      "sha256 hash online", "text to hash converter",
      "free hash generator", "sha hash generator online"
,      "hash generator for students", "best sha generator 2026", "free hash calculator online"        ],
    howToUse: [
      "Enter the text you want to hash in the input field.",
      "View SHA-1, SHA-256, and SHA-512 hash digests generated instantly.",
      "Click any hash value to copy it to your clipboard.",
      "Use the hashes for file verification, data integrity checks, or cryptographic purposes."
    ],
    faq: [
      { question: "What is a cryptographic hash?", answer: "A cryptographic hash is a fixed-length string of characters generated from input data using a one-way mathematical function. Even a tiny change in the input produces a completely different hash, making it useful for verifying data integrity." },
      { question: "What is the difference between SHA-1, SHA-256, and SHA-512?", answer: "They produce different length outputs: SHA-1 generates 160-bit hashes, SHA-256 generates 256-bit hashes, and SHA-512 generates 512-bit hashes. SHA-256 and SHA-512 are considered more secure than SHA-1, which has known vulnerabilities." },
      { question: "Can I hash files with this tool?", answer: "This tool hashes text input. For file hashing, you can copy the file's text content into the input field. For binary files, you may need a dedicated file hashing tool." },
      { question: "Is my input data sent to any server?", answer: "No. All hash generation happens locally in your browser using the Web Crypto API. Your text is never transmitted or stored." }
,      { question: "Which hash algorithms does this tool support?", answer: "This tool supports SHA-1, SHA-256, SHA-384, and SHA-512. SHA-256 is the most commonly used and recommended for general purposes. SHA-512 provides the strongest security for sensitive data." }
    ],
    nameTranslations: {
      es: "Generador de Hash",
      ar: "مولد التجزئة",
    },
    descriptionTranslations: {
      es: "Genera hashes SHA-1, SHA-256 y SHA-512 desde cualquier texto de entrada.",
      ar: "أنشئ تجزئات SHA-1 وSHA-256 وSHA-512 من أي نص إدخال.",
    },
    seoTitleTranslations: {
      es: "Generador de Hash Gratis Online - Calculadora SHA256, SHA1, SHA512 2026",
      ar: "مولد تجزئة مجاني عبر الإنترنت - حاسبة SHA256 وSHA1 وSHA512 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera resúmenes hash SHA-1, SHA-256 y SHA-512 desde cualquier texto. Generador de hash online rápido y gratuito para desarrolladores. Sin registro.",
      ar: "أنشئ تجزئات SHA-1 وSHA-256 وSHA-512 من أي نص إدخال. مولد تجزئة سريع ومجاني عبر الإنترنت للمطورين. لا يتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa el texto que deseas hashear en el campo de entrada.",
        "Visualiza los resúmenes hash SHA-1, SHA-256 y SHA-512 generados instantáneamente.",
        "Haz clic en cualquier valor hash para copiarlo a tu portapapeles.",
        "Usa los hashes para verificación de archivos, comprobaciones de integridad de datos o propósitos criptográficos.",
      ],
      ar: [
        "أدخل النص الذي تريد تجزئته في حقل الإدخال.",
        "اعرض تجزئات SHA-1 وSHA-256 وSHA-512 المُنشأة فوراً.",
        "انقر على أي قيمة تجزئة لنسخها إلى الحافظة.",
        "استخدم التجزئات للتحقق من الملفات أو فحوصات سلامة البيانات أو الأغراض التشفيرية.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es un hash criptográfico?", answer: "Un hash criptográfico es una cadena de caracteres de longitud fija generada a partir de datos de entrada usando una función matemática unidireccional. Incluso un cambio mínimo en la entrada produce un hash completamente diferente, haciéndolo útil para verificar la integridad de los datos." },
        { question: "¿Cuál es la diferencia entre SHA-1, SHA-256 y SHA-512?", answer: "Producen salidas de diferente longitud: SHA-1 genera hashes de 160 bits, SHA-256 genera hashes de 256 bits y SHA-512 genera hashes de 512 bits. SHA-256 y SHA-512 se consideran más seguros que SHA-1, que tiene vulnerabilidades conocidas." },
        { question: "¿Puedo hashear archivos con esta herramienta?", answer: "Esta herramienta hashea texto de entrada. Para hashear archivos, puedes copiar el contenido de texto del archivo en el campo de entrada. Para archivos binarios, puede que necesites una herramienta dedicada de hashing de archivos." },
        { question: "¿Mis datos de entrada se envían a algún servidor?", answer: "No. Toda la generación de hash ocurre localmente en tu navegador usando la Web Crypto API. Tu texto nunca se transmite ni se almacena." },
        { question: "¿Qué algoritmos de hash soporta esta herramienta?", answer: "Esta herramienta soporta SHA-1, SHA-256, SHA-384 y SHA-512. SHA-256 es el más utilizado y recomendado para propósitos generales. SHA-512 proporciona la mayor seguridad para datos sensibles." },
      ],
      ar: [
        { question: "ما هي التجزئة التشفيرية؟", answer: "التجزئة التشفيرية هي سلسلة أحرف ذات طول ثابت تُولّد من بيانات الإدخال باستخدام دالة رياضية أحادية الاتجاه. حتى تغيير بسيط في الإدخال يُنتج تجزئة مختلفة تماماً مما يجعلها مفيدة للتحقق من سلامة البيانات." },
        { question: "ما الفرق بين SHA-1 وSHA-256 وSHA-512؟", answer: "تُنتج مخرجات بأطوال مختلفة: SHA-1 يُولّد تجزئات 160 بت وSHA-256 يُولّد تجزئات 256 بت وSHA-512 يُولّد تجزئات 512 بت. يُعتبر SHA-256 وSHA-512 أكثر أماناً من SHA-1 الذي له ثغرات معروفة." },
        { question: "هل يمكنني تجزئة الملفات بهذه الأداة؟", answer: "تجزئ هذه الأداة نص الإدخال. لتجزئة الملفات يمكنك نسخ محتوى النص للملف في حقل الإدخال. للملفات الثنائية قد تحتاج أداة مخصصة لتجزئة الملفات." },
        { question: "هل تُرسل بيانات الإدخال إلى أي خادم؟", answer: "لا. يتم كل إنشاء التجزئة محلياً في متصفحك باستخدام Web Crypto API. لا يُرسل نصك أبداً أو يُخزّن." },
        { question: "ما خوارزميات التجزئة التي تدعمها هذه الأداة؟", answer: "تدعم هذه الأداة SHA-1 وSHA-256 وSHA-384 وSHA-512. SHA-256 هو الأكثر استخداماً والموصى به للأغراض العامة. SHA-512 يوفر أقوى أمان للبيانات الحساسة." },
      ],
    },
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    description: "Generate random UUID v4 identifiers for development.",
    category: "developer",
    icon: "🔑",
    path: "/tools/uuid-generator",
    seoTitle: "Free UUID Generator Online - Generate GUID & UUID v4 2026",
    seoDescription: "Generate random UUID v4 identifiers instantly. Generate single or multiple UUIDs with copy-to-clipboard support. Free online UUID generator for developers.",
    seoKeywords: [
      "uuid generator", "uuid v4 generator", "generate uuid online",
      "random uuid generator", "uuid creator", "guid generator",
      "uuid generator free", "generate multiple uuids",
      "uuid v4 online", "universal unique identifier generator"
,      "uuid generator for students", "best uuid generator 2026", "free guid generator online"        ],
    howToUse: [
      "Click 'Generate' to create a random UUID v4 identifier.",
      "Set the number of UUIDs to generate multiple at once.",
      "Click any UUID to copy it to your clipboard.",
      "Use UUIDs as unique identifiers for database records, API keys, or session tokens."
    ],
    faq: [
      { question: "What is a UUID?", answer: "A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information in computer systems. UUID v4, the most common version, uses random numbers to generate identifiers with an extremely low collision probability." },
      { question: "How unique are UUID v4 identifiers?", answer: "The chance of generating two identical UUID v4 values is approximately 1 in 5.3 × 10^36. You would need to generate billions of UUIDs per second for billions of years to have even a small chance of collision." },
      { question: "Are these UUIDs cryptographically secure?", answer: "Yes. This tool uses the Web Crypto API's cryptographically secure random number generator (crypto.getRandomValues) to produce UUIDs that are not predictable." },
      { question: "Can I generate UUIDs offline?", answer: "Yes. All UUID generation happens locally in your browser. No internet connection is needed after the page loads." }
,      { question: "What version of UUID does this tool generate?", answer: "This tool generates UUID version 4 (random), which uses random or pseudo-random numbers. A v4 UUID has the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, where the probability of duplicates is practically zero." }
    ],
    nameTranslations: {
      es: "Generador de UUID",
      ar: "مولد UUID",
    },
    descriptionTranslations: {
      es: "Genera identificadores UUID v4 aleatorios para desarrollo.",
      ar: "أنشئ معرفات UUID v4 عشوائية للتطوير.",
    },
    seoTitleTranslations: {
      es: "Generador de UUID Gratis Online - Generar GUID y UUID v4 2026",
      ar: "مولد UUID مجاني عبر الإنترنت - إنشاء GUID وUUID v4 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera identificadores UUID v4 aleatorios al instante. Genera UUIDs simples o múltiples con soporte de copiar al portapapeles. Generador de UUID online gratuito para desarrolladores.",
      ar: "أنشئ معرفات UUID v4 عشوائية فوراً. أنشئ UUID واحد أو متعدد مع دعم النسخ إلى الحافظة. مولد UUID مجاني عبر الإنترنت للمطورين.",
    },
    howToUseTranslations: {
      es: [
        "Haz clic en 'Generar' para crear un identificador UUID v4 aleatorio.",
        "Establece el número de UUIDs para generar varios a la vez.",
        "Haz clic en cualquier UUID para copiarlo a tu portapapeles.",
        "Usa UUIDs como identificadores únicos para registros de bases de datos, claves de API o tokens de sesión.",
      ],
      ar: [
        "انقر على 'إنشاء' لإنشاء معرف UUID v4 عشوائي.",
        "حدد عدد UUIDs لإنشاء عدة معرفات مرة واحدة.",
        "انقر على أي UUID لنسخه إلى الحافظة.",
        "استخدم UUIDs كمعرفات فريدة لسجلات قواعد البيانات أو مفاتيح API أو رموز الجلسة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es un UUID?", answer: "Un UUID (Identificador Universalmente Único) es un número de 128 bits usado para identificar información de forma única en sistemas informáticos. UUID v4, la versión más común, usa números aleatorios para generar identificadores con una probabilidad de colisión extremadamente baja." },
        { question: "¿Qué tan únicos son los identificadores UUID v4?", answer: "La probabilidad de generar dos valores UUID v4 idénticos es aproximadamente 1 en 5.3 × 10^36. Tendrías que generar billones de UUIDs por segundo durante billones de años para tener incluso una pequeña probabilidad de colisión." },
        { question: "¿Estos UUIDs son criptográficamente seguros?", answer: "Sí. Esta herramienta usa el generador de números aleatorios criptográficamente seguro de la Web Crypto API (crypto.getRandomValues) para producir UUIDs que no son predecibles." },
        { question: "¿Puedo generar UUIDs sin conexión?", answer: "Sí. Toda la generación de UUID ocurre localmente en tu navegador. No se necesita conexión a internet después de cargar la página." },
        { question: "¿Qué versión de UUID genera esta herramienta?", answer: "Esta herramienta genera UUID versión 4 (aleatorio), que usa números aleatorios o pseudoaleatorios. Un UUID v4 tiene la forma xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx, donde la probabilidad de duplicados es prácticamente cero." },
      ],
      ar: [
        { question: "ما هو UUID؟", answer: "UUID (المعرّف الفريد عالمياً) هو رقم 128 بت يُستخدم لتحديد المعلومات بشكل فريد في أنظمة الكمبيوتر. UUID v4 وهو الإصدار الأكثر شيوعاً يستخدم أرقاماً عشوائية لإنشاء معرفات باحتمال تصادم منخفض للغاية." },
        { question: "ما مدى تفرد معرفات UUID v4؟", answer: "احتمال إنشاء قيمتين UUID v4 متماثلتين هو تقريباً 1 في 5.3 × 10^36. ستحتاج إلى إنشاء مليارات المعرفات في الثانية لمليارات السنين للحصول على فرصة صغيرة حتى للتصادم." },
        { question: "هل معرفات UUID هذه آمنة تشفيرياً؟", answer: "نعم. تستخدم هذه الأداة مولد الأرقام العشوائية الآمن تشفيرياً من Web Crypto API (crypto.getRandomValues) لإنتاج UUIDs غير قابلة للتنبؤ." },
        { question: "هل يمكنني إنشاء UUIDs بدون اتصال؟", answer: "نعم. يتم كل إنشاء UUID محلياً في متصفحك. لا تحتاج إلى اتصال بالإنترنت بعد تحميل الصفحة." },
        { question: "ما إصدار UUID الذي تُولّده هذه الأداة؟", answer: "تُولّد هذه الأداة الإصدار 4 من UUID (عشوائي) الذي يستخدم أرقاماً عشوائية أو شبه عشوائية. UUID v4 له الشكل xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx حيث احتمال التكرار صفر عملياً." },
      ],
    },
  },
  {
    id: "regex-tester",
    name: "Regex Tester & Converter",
    description:
      "Test regular expressions, replace with regex, extract matches, and generate code snippets for 10 programming languages.",
    category: "developer",
    icon: "🔍",
    path: "/tools/regex-tester",
    seoTitle: "Free Regex Tester Online - Test & Replace Regular Expressions 2026",
    seoDescription: "Test and debug regular expressions with real-time highlighting. Replace text with regex patterns, extract matches to JSON/CSV, and generate code snippets for JavaScript, Python, PHP, Java, Go, Rust, C#, Ruby, Swift, and TypeScript.",
    seoKeywords: [
      "regex tester", "regular expression tester", "regex converter",
      "regex code generator", "regex replace tool", "regex match extractor",
      "test regex online", "regex debugger", "regex to code",
      "generate regex code", "online regex replace tool"
,      "regex tester for students", "best regex tester 2026", "free regex code generator online"        ],
    howToUse: [
      "Enter your regular expression pattern in the pattern field (between the slashes).",
      "Set regex flags (g=global, i=case-insensitive, m=multiline, s=dotAll, u=unicode).",
      "Switch between tabs: Test (highlight matches), Replace (search & replace), Extract (export matches as JSON/CSV/plain), and Code (generate snippets).",
      "In the Test tab, paste your text and see all matching results with positions.",
      "In the Replace tab, enter a replacement pattern and preview the result in real-time.",
      "In the Extract tab, export all matched text as JSON, CSV, or plain text format.",
      "In the Code tab, select your programming language to get ready-to-use regex code snippets."
    ],
    faq: [
      { question: "What regex flavor does this tool use?", answer: "This tool uses JavaScript's RegExp engine, which is compatible with most modern programming languages. Code snippets are generated for 10 languages including JavaScript, Python, PHP, Java, Go, Rust, C#, Ruby, Swift, and TypeScript." },
      { question: "How do I use capture groups?", answer: "Wrap the parts of your pattern you want to capture in parentheses, like (\\w+)@(\\w+).com. The Extract tab will show you all captured groups, and in the Replace tab you can reference them with $1, $2, etc." },
      { question: "What export formats are supported?", answer: "The Extract tab supports three formats: JSON (structured data with match and index fields), CSV (spreadsheet-compatible), and plain text (one match per line)." },
      { question: "Can I use this tool to learn regex?", answer: "Absolutely. The Test tab shows real-time results as you type, making it easy to experiment. The Code tab also provides working examples in your target language." },
      { question: "Is my data stored anywhere?", answer: "No. All processing happens entirely in your browser. Your text, patterns, and results are never sent to any server." }
,      { question: "Does this tool support all regular expression features?", answer: "Our regex tester supports JavaScript regular expression syntax, including character classes, quantifiers, groups, lookaheads, lookbehinds, and flags like g, i, and m. It works in real-time as you type." }
    ],
    nameTranslations: {
      es: "Probador y Conversor de Regex",
      ar: "أداة اختبار وتحويل التعبيرات المنتظمة",
    },
    descriptionTranslations: {
      es: "Prueba expresiones regulares, reemplaza con regex, extrae coincidencias y genera fragmentos de código para 10 lenguajes de programación.",
      ar: "اختبر التعبيرات المنتظمة واستبدل بنمط regex واستخرج التطابقات وأنشئ مقتطفات كود لعشر لغات برمجة.",
    },
    seoTitleTranslations: {
      es: "Probador de Regex Gratis Online - Probar y Reemplazar Expresiones Regulares 2026",
      ar: "أداة اختبار التعبيرات المنتظمة مجانية عبر الإنترنت - اختبار واستبدال التعبيرات المنتظمة 2026",
    },
    seoDescriptionTranslations: {
      es: "Prueba y depura expresiones regulares con resaltado en tiempo real. Reemplaza texto con patrones regex, extrae coincidencias a JSON/CSV y genera fragmentos de código para JavaScript, Python, PHP, Java, Go, Rust, C#, Ruby, Swift y TypeScript.",
      ar: "اختبر وتصحيح التعبيرات المنتظمة مع تمييز في الوقت الفعلي. استبدل النص بأنماط regex واستخرج التطابقات إلى JSON/CSV وأنشئ مقتطفات كود لـ JavaScript وPython وPHP وJava وGo وRust وC# وRuby وSwift وTypeScript.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu patrón de expresión regular en el campo de patrón (entre las barras).",
        "Establece las banderas regex (g=global, i=insensible a mayúsculas, m=multilínea, s=puntoTodo, u=unicode).",
        "Cambia entre pestañas: Test (resalta coincidencias), Replace (buscar y reemplazar), Extract (exporta coincidencias como JSON/CSV/texto) y Code (genera fragmentos).",
        "En la pestaña Test, pega tu texto y observa todos los resultados coincidentes con posiciones.",
        "En la pestaña Replace, ingresa un patrón de reemplazo y previsualiza el resultado en tiempo real.",
        "En la pestaña Extract, exporta todo el texto coincidente como JSON, CSV o texto plano.",
        "En la pestaña Code, selecciona tu lenguaje de programación para obtener fragmentos de código regex listos para usar.",
      ],
      ar: [
        "أدخل نمط التعبير المنتظم في حقل النمط (بين الشرطات المائلة).",
        "عيّن رايات regex (g=عام i=غير حساس لحالة الأحرف m=متعدد الأسطر s=النقطة تطابق الكل u=يونيكود).",
        "بدّل بين علامات التبويب: Test (إبراز التطابقات) وReplace (بحث واستبدال) وExtract (تصدير التطابقات كـ JSON/CSV/نص) وCode (إنشاء مقتطفات).",
        "في علامة تبويب Test الصق نصك وشاهد جميع نتائج التطابق مع المواقع.",
        "في علامة تبويب Replace أدخل نمط الاستبدال ومعاينة النتيجة في الوقت الفعلي.",
        "في علامة تبويب Extract صدّر كل النص المتطابق كـ JSON أو CSV أو نص عادي.",
        "في علامة تبويب Code اختر لغة البرمجة للحصول على مقتطفات كود regex جاهزة للاستخدام.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué sabor de regex usa esta herramienta?", answer: "Esta herramienta usa el motor RegExp de JavaScript, compatible con la mayoría de lenguajes de programación modernos. Los fragmentos de código se generan para 10 lenguajes incluyendo JavaScript, Python, PHP, Java, Go, Rust, C#, Ruby, Swift y TypeScript." },
        { question: "¿Cómo uso grupos de captura?", answer: "Envuelve las partes de tu patrón que deseas capturar entre paréntesis, como (\\w+)@(\\w+).com. La pestaña Extract te mostrará todos los grupos capturados, y en la pestaña Replace puedes referenciarlos con $1, $2, etc." },
        { question: "¿Qué formatos de exportación se soportan?", answer: "La pestaña Extract soporta tres formatos: JSON (datos estructurados con campos de coincidencia e índice), CSV (compatible con hojas de cálculo) y texto plano (una coincidencia por línea)." },
        { question: "¿Puedo usar esta herramienta para aprender regex?", answer: "Absolutamente. La pestaña Test muestra resultados en tiempo real mientras escribes, facilitando la experimentación. La pestaña Code también proporciona ejemplos funcionales en tu lenguaje objetivo." },
        { question: "¿Se almacenan mis datos en algún lugar?", answer: "No. Todo el procesamiento ocurre completamente en tu navegador. Tu texto, patrones y resultados nunca se envían a ningún servidor." },
        { question: "¿Esta herramienta soporta todas las características de expresiones regulares?", answer: "Nuestro probador de regex soporta la sintaxis de expresiones regulares de JavaScript, incluyendo clases de caracteres, cuantificadores, grupos, lookaheads, lookbehinds y banderas como g, i y m. Funciona en tiempo real mientras escribes." },
      ],
      ar: [
        { question: "ما نوع regex الذي تستخدمه هذه الأداة؟", answer: "تستخدم هذه الأداة محرك RegExp الخاص بـ JavaScript المتوافق مع معظم لغات البرمجة الحديثة. تُولّد مقتطفات الكود لـ 10 لغات بما فيها JavaScript وPython وPHP وJava وGo وRust وC# وRuby وSwift وTypeScript." },
        { question: "كيف أستخدم مجموعات الالتقاط؟", answer: "لفّ الأجزاء من نمطك التي تريد التقاطها بأقواس مثل (\\w+)@(\\w+).com. ستُظهر لك علامة تبويب Extract جميع المجموعات الملتقطة وفي علامة تبويب Replace يمكنك الرجوع إليها بـ $1 و$2 الخ." },
        { question: "ما صيغ التصدير المدعومة؟", answer: "تدعم علامة تبويب Extract ثلاثة صيغ: JSON (بيانات مهيكلة مع حقلي التطابق والفهرس) وCSV (متوافق مع جداول البيانات) ونص عادي (تطابق واحد في كل سطر)." },
        { question: "هل يمكنني استخدام هذه الأداة لتعلم regex؟", answer: "بالتأكيد. تُظهر علامة تبويب Test نتائج في الوقت الفعلي أثناء الكتابة مما يسهل التجربة. توفر علامة تبويب Code أيضاً أمثلة عملية في لغتك المستهدفة." },
        { question: "هل يتم تخزين بياناتي في أي مكان؟", answer: "لا. تتم جميع العمليات بالكامل في متصفحك. لا يُرسل نصك أو أنماطك أو نتائجك إلى أي خادم أبداً." },
        { question: "هل تدعم هذه الأداة جميع ميزات التعبيرات المنتظمة؟", answer: "يدعم مختبر regex لدينا صيغة التعبيرات المنتظمة في JavaScript بما فيها فئات الأحرف والمقدّرات والمجموعات والنظرات الأمامية والخلفية والرايات مثل g وi وm. يعمل في الوقت الفعلي أثناء الكتابة." },
      ],
    },
  },
  {
    id: "markdown-preview",
    name: "Markdown Preview",
    description:
      "Write Markdown and see a live HTML preview as you type. Free Markdown editor.",
    category: "developer",
    icon: "📑",
    path: "/tools/markdown-preview",
    seoTitle: "Free Markdown Preview Online - MD to HTML Converter 2026",
    seoDescription: "Write Markdown and see a live HTML preview in real-time. Free online Markdown editor with syntax highlighting. Perfect for README files, documentation, and blog posts.",
    seoKeywords: [
      "markdown preview", "markdown editor online", "live markdown preview",
      "markdown to html converter", "write markdown online",
      "markdown editor free", "online markdown viewer",
      "markdown previewer", "md to html online",
      "markdown live editor"
,      "markdown preview for students", "best markdown editor 2026", "free md to html converter online"        ],
    howToUse: [
      "Start typing Markdown in the left editor panel.",
      "View the rendered HTML preview update in real-time on the right.",
      "Use standard Markdown syntax: headers, lists, bold, italic, links, images, code blocks, and tables.",
      "Copy the rendered HTML or export your Markdown file when done."
    ],
    faq: [
      { question: "What Markdown features are supported?", answer: "This editor supports all standard Markdown features: headings (H1-H6), bold and italic text, lists (ordered and unordered), links, images, code blocks (inline and fenced), blockquotes, horizontal rules, and tables." },
      { question: "Can I use GitHub Flavored Markdown?", answer: "Yes. This editor supports GitHub Flavored Markdown (GFM) extensions including task lists, strikethrough text, and fenced code blocks with syntax highlighting." },
      { question: "Is my Markdown saved anywhere?", answer: "No. Your Markdown is processed entirely in your browser. Nothing is sent to or stored on any server." },
      { question: "Can I use this to write README files?", answer: "Absolutely. This is perfect for drafting and previewing README.md files for GitHub repositories, documentation, or blog posts before publishing." }
,      { question: "Does this markdown preview support tables and code blocks?", answer: "Yes, our markdown preview supports all standard Markdown features including headers, bold, italic, links, images, tables, code blocks with syntax hints, blockquotes, and horizontal rules." }
    ],
    nameTranslations: {
      es: "Vista Previa de Markdown",
      ar: "معاينة Markdown",
    },
    descriptionTranslations: {
      es: "Escribe Markdown y ve una vista previa HTML en vivo mientras escribes. Editor Markdown gratuito.",
      ar: "اكتب Markdown وشاهد معاينة HTML مباشرة أثناء الكتابة. محرر Markdown مجاني.",
    },
    seoTitleTranslations: {
      es: "Vista Previa de Markdown Gratis Online - Convertidor MD a HTML 2026",
      ar: "معاينة Markdown مجانية عبر الإنترنت - محوّل MD إلى HTML 2026",
    },
    seoDescriptionTranslations: {
      es: "Escribe Markdown y ve una vista previa HTML en vivo en tiempo real. Editor Markdown online gratuito con resaltado de sintaxis. Perfecto para archivos README, documentación y publicaciones de blog.",
      ar: "اكتب Markdown وشاهد معاينة HTML مباشرة في الوقت الفعلي. محرر Markdown مجاني عبر الإنترنت مع تمييز الصيغة. مثالي لملفات README والوثائق ومنشورات المدونات.",
    },
    howToUseTranslations: {
      es: [
        "Comienza a escribir Markdown en el panel del editor izquierdo.",
        "Visualiza la vista previa HTML renderizada actualizarse en tiempo real a la derecha.",
        "Usa sintaxis Markdown estándar: encabezados, listas, negrita, cursiva, enlaces, imágenes, bloques de código y tablas.",
        "Copia el HTML renderizado o exporta tu archivo Markdown cuando termines.",
      ],
      ar: [
        "ابدأ بكتابة Markdown في لوحة المحرر اليسرى.",
        "شاهد معاينة HTML المُقدّمة تتحدث في الوقت الفعلي على اليمين.",
        "استخدم صيغة Markdown القياسية: العناوين والقوائم والخط العريض والمائل والروابط والصور وكتل الكود والجداول.",
        "انسخ HTML المُقدّم أو صدّر ملف Markdown عند الانتهاء.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué características de Markdown se soportan?", answer: "Este editor soporta todas las características estándar de Markdown: encabezados (H1-H6), texto en negrita y cursiva, listas (ordenadas y desordenadas), enlaces, imágenes, bloques de código (en línea y delimitados), citas, reglas horizontales y tablas." },
        { question: "¿Puedo usar GitHub Flavored Markdown?", answer: "Sí. Este editor soporta las extensiones GitHub Flavored Markdown (GFM) incluyendo listas de tareas, texto tachado y bloques de código delimitados con resaltado de sintaxis." },
        { question: "¿Se guarda mi Markdown en algún lugar?", answer: "No. Tu Markdown se procesa completamente en tu navegador. Nada se envía ni se almacena en ningún servidor." },
        { question: "¿Puedo usar esto para escribir archivos README?", answer: "Absolutamente. Esto es perfecto para redactar y previsualizar archivos README.md para repositorios de GitHub, documentación o publicaciones de blog antes de publicar." },
        { question: "¿Esta vista previa de Markdown soporta tablas y bloques de código?", answer: "Sí, nuestra vista previa de Markdown soporta todas las características estándar de Markdown incluyendo encabezados, negrita, cursiva, enlaces, imágenes, tablas, bloques de código con indicaciones de sintaxis, citas y reglas horizontales." },
      ],
      ar: [
        { question: "ما ميزات Markdown المدعومة؟", answer: "يدعم هذا المحرر جميع ميزات Markdown القياسية: العناوين (H1-H6) والنص العريض والمائل والقوائم (مرتبة وغير مرتبة) والروابط والصور وكتل الكود (مضمنة ومحددة) والاقتباسات والقواعد الأفقية والجداول." },
        { question: "هل يمكنني استخدام GitHub Flavored Markdown؟", answer: "نعم. يدعم هذا المحرر امتدادات GitHub Flavored Markdown (GFM) بما فيها قوائم المهام والنص المشطوب وكتل الكود المحددة مع تمييز الصيغة." },
        { question: "هل يتم حفظ Markdown الخاص بي في أي مكان؟", answer: "لا. تتم معالجة Markdown بالكامل في متصفحك. لا يُرسل أو يُخزّن أي شيء على أي خادم." },
        { question: "هل يمكنني استخدام هذا لكتابة ملفات README؟", answer: "بالتأكيد. هذا مثالي لصياغة ومعاينة ملفات README.md لمستودعات GitHub أو الوثائق أو منشورات المدونات قبل النشر." },
        { question: "هل تدعم معاينة markdown هذه الجداول وكتل الكود؟", answer: "نعم تدعم معاينة markdown لدينا جميع ميزات Markdown القياسية بما فيها العناوين والخط العريض والمائل والروابط والصور والجداول وكتل الكود مع تلميحات الصيغة والاقتباسات والقواعد الأفقية." },
      ],
    },
  },
  {
    id: "css-minifier",
    name: "CSS Minifier",
    description:
      "Minify and beautify CSS code. Remove whitespace and comments for production.",
    category: "developer",
    icon: "🎨",
    path: "/tools/css-minifier",
    seoTitle: "Free CSS Minifier Online - Compress & Optimize CSS 2026",
    seoDescription: "Minify CSS to reduce file size and improve page load speed. Also beautify compressed CSS for readability. Free online CSS minifier tool. No signup required.",
    seoKeywords: [
      "css minifier", "minify css online", "css compressor",
      "css beautifier", "compress css", "css minify tool",
      "free css minifier", "css optimizer online",
      "minify css free", "css compression tool"
,      "css minifier for students", "best css compressor 2026", "free css optimizer online"        ],
    howToUse: [
      "Paste your CSS code into the input field.",
      "Click 'Minify' to compress the CSS by removing whitespace, comments, and unnecessary characters.",
      "Click 'Beautify' to format minified CSS back into readable structure.",
      "Copy the result to use in your production stylesheet."
    ],
    faq: [
      { question: "What does CSS minification do?", answer: "CSS minification removes unnecessary whitespace, comments, line breaks, and redundant code to reduce file size. This speeds up page load times and reduces bandwidth usage." },
      { question: "How much can minification reduce CSS file size?", answer: "Typically, minification reduces CSS file size by 10-20%. The exact reduction depends on how well-formatted the original CSS is — heavily commented and formatted CSS sees bigger reductions." },
      { question: "Is minified CSS safe for production?", answer: "Yes. Minified CSS is functionally identical to the original — only whitespace and comments are removed. It's the standard practice for production websites." },
      { question: "Can I beautify minified CSS back to readable format?", answer: "Yes. The beautify feature reformats compressed CSS with proper indentation and line breaks, making it easy to read and edit again." }
,      { question: "How much can CSS minification reduce file size?", answer: "CSS minification typically reduces file size by 20-40% by removing whitespace, comments, and unnecessary characters. This improves page load times and can positively impact your website's SEO ranking." }
    ],
    nameTranslations: {
      es: "Minificador de CSS",
      ar: "أداة تصغير CSS",
    },
    descriptionTranslations: {
      es: "Minifica y embellece código CSS. Elimina espacios en blanco y comentarios para producción.",
      ar: "صغّر وجمّل كود CSS. أزل المسافات البيضاء والتعليقات للإنتاج.",
    },
    seoTitleTranslations: {
      es: "Minificador de CSS Gratis Online - Comprimir y Optimizar CSS 2026",
      ar: "أداة تصغير CSS مجانية عبر الإنترنت - ضغط وتحسين CSS 2026",
    },
    seoDescriptionTranslations: {
      es: "Minifica CSS para reducir el tamaño del archivo y mejorar la velocidad de carga de la página. También embellece CSS comprimido para legibilidad. Herramienta de minificación CSS online gratuita. Sin registro.",
      ar: "صغّر CSS لتقليل حجم الملف وتحسين سرعة تحميل الصفحة. كما يمكنك تجميل CSS المضغوط للقراءة. أداة تصغير CSS مجانية عبر الإنترنت. لا يتطلب تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Pega tu código CSS en el campo de entrada.",
        "Haz clic en 'Minificar' para comprimir el CSS eliminando espacios en blanco, comentarios y caracteres innecesarios.",
        "Haz clic en 'Embellecer' para formatear CSS minificado de vuelta a estructura legible.",
        "Copia el resultado para usar en tu hoja de estilos de producción.",
      ],
      ar: [
        "الصق كود CSS في حقل الإدخال.",
        "انقر على 'تصغير' لضغط CSS بإزالة المسافات البيضاء والتعليقات والأحرف غير الضرورية.",
        "انقر على 'تجميل' لإعادة تنسيق CSS المصغّر إلى بنية قابلة للقراءة.",
        "انسخ النتيجة لاستخدامها في ورقة الأنماط الخاصة بالإنتاج.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué hace la minificación de CSS?", answer: "La minificación de CSS elimina espacios en blanco innecesarios, comentarios, saltos de línea y código redundante para reducir el tamaño del archivo. Esto acelera los tiempos de carga de la página y reduce el uso de ancho de banda." },
        { question: "¿Cuánto puede reducir la minificación el tamaño del archivo CSS?", answer: "Típicamente, la minificación reduce el tamaño del archivo CSS entre un 10-20%. La reducción exacta depende de qué tan bien formateado está el CSS original — el CSS muy comentado y formateado ve mayores reducciones." },
        { question: "¿El CSS minificado es seguro para producción?", answer: "Sí. El CSS minificado es funcionalmente idéntico al original — solo se eliminan espacios en blanco y comentarios. Es la práctica estándar para sitios web de producción." },
        { question: "¿Puedo embellecer CSS minificado de vuelta a formato legible?", answer: "Sí. La función de embellecer reformattea CSS comprimido con indentación adecuada y saltos de línea, facilitando su lectura y edición." },
        { question: "¿Cuánto puede reducir la minificación de CSS el tamaño del archivo?", answer: "La minificación de CSS típicamente reduce el tamaño del archivo en un 20-40% eliminando espacios en blanco, comentarios y caracteres innecesarios. Esto mejora los tiempos de carga de la página y puede impactar positivamente el ranking SEO de tu sitio web." },
      ],
      ar: [
        { question: "ماذا يفعل تصغير CSS؟", answer: "يزيل تصغير CSS المسافات البيضاء غير الضرورية والتعليقات وفواصل الأسطر والكود الزائد لتقليل حجم الملف. هذا يسرّع أوقات تحميل الصفحة ويقلل استخدام عرض النطاق." },
        { question: "بكم يمكن أن يقلل التصغير حجم ملف CSS؟", answer: "عادةً يقلل التصغير حجم ملف CSS بنسبة 10-20%. يعتمد التقليل الدقيق على مدى جودة تنسيق CSS الأصلي -- CSS الذي يحتوي على تعليقات وتنسيق كثير يشاهد تقليل أكبر." },
        { question: "هل CSS المصغّر آمن للإنتاج؟", answer: "نعم. CSS المصغّر مطابق وظيفياً للأصلي -- تُزال فقط المسافات البيضاء والتعليقات. هذه هي الممارسة القياسية لمواقع الويب الإنتاجية." },
        { question: "هل يمكنني تجميل CSS المصغّر إلى تنسيق قابل للقراءة؟", answer: "نعم. تعيد ميزة التجميل تنسيق CSS المضغوط بمسافات بادئة مناسبة وفواصل أسطر مما يسهل قراءته وتعديله مجدداً." },
        { question: "بكم يمكن أن يقلل تصغير CSS حجم الملف؟", answer: "يقلل تصغير CSS عادةً حجم الملف بنسبة 20-40% بإزالة المسافات البيضاء والتعليقات والأحرف غير الضرورية. هذا يحسّن أوقات تحميل الصفحة ويمكن أن يؤثر إيجابياً على تصنيف SEO لموقعك." },
      ],
    },
  },
  {
    id: "unix-timestamp",
    name: "Unix Timestamp Converter",
    description:
      "Convert Unix timestamps to human-readable dates and vice versa.",
    category: "developer",
    icon: "⏱️",
    path: "/tools/unix-timestamp",
    seoTitle: "Free Unix Timestamp Converter Online - Epoch to Date 2026",
    seoDescription: "Convert Unix timestamps (epoch time) to human-readable dates and vice versa. View current Unix time. Free online timestamp converter for developers.",
    seoKeywords: [
      "unix timestamp converter", "epoch time converter", "convert unix timestamp",
      "unix time to date", "date to unix timestamp", "epoch converter",
      "current unix time", "unix timestamp online",
      "epoch time converter online", "timestamp converter free"
,      "unix timestamp for students", "best epoch converter 2026", "free timestamp converter online"        ],
    howToUse: [
      "View the current Unix timestamp displayed at the top of the page.",
      "Enter a Unix timestamp to convert it to a human-readable date and time.",
      "Enter a date and time to convert it to a Unix timestamp.",
      "Choose your timezone to see timestamps in your local time."
    ],
    faq: [
      { question: "What is a Unix timestamp?", answer: "A Unix timestamp (also called epoch time or POSIX time) is the number of seconds that have elapsed since January 1, 1970 (UTC). It's the standard time representation used by most operating systems and programming languages." },
      { question: "Why do developers use Unix timestamps?", answer: "Unix timestamps provide a universal, timezone-independent way to represent time. They're easy to store in databases, compare mathematically, and are supported by virtually every programming language." },
      { question: "What is the Year 2038 problem?", answer: "The Year 2038 problem occurs when 32-bit signed integers storing Unix timestamps overflow on January 19, 2038. Modern 64-bit systems don't have this issue and can represent timestamps for billions of years." },
      { question: "Does this tool handle timezones?", answer: "Yes. You can convert timestamps to any timezone. The tool shows both UTC and your local time equivalents for clarity." }
    ],
    nameTranslations: {
      es: "Convertidor de Marca de Tiempo Unix",
      ar: "محول طابع Unix الزمني",
    },
    descriptionTranslations: {
      es: "Convierte marcas de tiempo Unix a fechas legibles y viceversa.",
      ar: "حوّل طوابع Unix الزمنية إلى تواريخ قابلة للقراءة والعكس.",
    },
    seoTitleTranslations: {
      es: "Convertidor de Marca de Tiempo Unix Gratis Online - Epoch a Fecha 2026",
      ar: "محول طابع Unix الزمني مجاني عبر الإنترنت - Epoch إلى تاريخ 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte marcas de tiempo Unix (tiempo epoch) a fechas legibles y viceversa. Visualiza la hora Unix actual. Convertidor de marcas de tiempo online gratuito para desarrolladores.",
      ar: "حوّل طوابع Unix الزمنية (وقت epoch) إلى تواريخ قابلة للقراءة والعكس. اعرض وقت Unix الحالي. محول طوابع زمنية مجاني عبر الإنترنت للمطورين.",
    },
    howToUseTranslations: {
      es: [
        "Visualiza la marca de tiempo Unix actual mostrada en la parte superior de la página.",
        "Ingresa una marca de tiempo Unix para convertirla a fecha y hora legible.",
        "Ingresa una fecha y hora para convertirla a marca de tiempo Unix.",
        "Elige tu zona horaria para ver marcas de tiempo en tu hora local.",
      ],
      ar: [
        "اعرض طابع Unix الزمني الحالي المعروض في أعلى الصفحة.",
        "أدخل طابع Unix الزمني لتحويله إلى تاريخ ووقت مقروء.",
        "أدخل تاريخاً ووقتاً لتحويله إلى طابع Unix الزمني.",
        "اختر منطقتك الزمنية لرؤية الطوابع الزمنية بتوقيتك المحلي.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es una marca de tiempo Unix?", answer: "Una marca de tiempo Unix (también llamada tiempo epoch o tiempo POSIX) es el número de segundos que han transcurrido desde el 1 de enero de 1970 (UTC). Es la representación de tiempo estándar utilizada por la mayoría de sistemas operativos y lenguajes de programación." },
        { question: "¿Por qué usan los desarrolladores marcas de tiempo Unix?", answer: "Las marcas de tiempo Unix proporcionan una forma universal e independiente de zona horaria de representar el tiempo. Son fáciles de almacenar en bases de datos, comparar matemáticamente y son soportadas por prácticamente todos los lenguajes de programación." },
        { question: "¿Qué es el problema del año 2038?", answer: "El problema del año 2038 ocurre cuando los enteros con signo de 32 bits que almacenan marcas de tiempo Unix se desbordan el 19 de enero de 2038. Los sistemas modernos de 64 bits no tienen este problema y pueden representar marcas de tiempo durante miles de millones de años." },
        { question: "¿Esta herramienta maneja zonas horarias?", answer: "Sí. Puedes convertir marcas de tiempo a cualquier zona horaria. La herramienta muestra equivalentes tanto en UTC como en tu hora local para mayor claridad." }
      ],
      ar: [
        { question: "ما هو طابع Unix الزمني؟", answer: "طابع Unix الزمني (يُسمى أيضاً وقت epoch أو وقت POSIX) هو عدد الثواني التي انقضت منذ 1 يناير 1970 (UTC). وهو تمثيل الوقت القياسي المستخدم من قبل معظم أنظمة التشغيل ولغات البرمجة." },
        { question: "لماذا يستخدم المطورون طوابع Unix الزمنية؟", answer: "توفر طوابع Unix الزمنية طريقة عالمية ومستقلة عن المنطقة الزمنية لتمثيل الوقت. من السهل تخزينها في قواعد البيانات ومقارنتها رياضياً وتدعمها几乎所有 لغات البرمجة." },
        { question: "ما هي مشكلة عام 2038؟", answer: "تحدث مشكلة عام 2038 عندما تتجاوز الأعداد الصحيحة ذات الإشارة 32 بت التي تخزّن طوابع Unix الزمنية الحد الأقصى في 19 يناير 2038. الأنظمة الحديثة 64 بت لا تعاني من هذه المشكلة ويمكنها تمثيل الطوابع الزمنية لمليارات السنين." },
        { question: "هل تتعامل هذه الأداة مع المناطق الزمنية؟", answer: "نعم. يمكنك تحويل الطوابع الزمنية إلى أي منطقة زمنية. تُظهر الأداة مكافئات UTC ووقتك المحلي للوضوح." }
      ],
    },
  },
  // Calculators
  {
    id: "password-generator",
    name: "Password Generator",
    description:
      "Generate strong, secure passwords with customizable length and character options.",
    category: "calculator",
    icon: "🔐",
    path: "/tools/password-generator",
    seoTitle: "Free Password Generator Online - Strong Random Passwords 2026",
    seoDescription: "Generate strong, random passwords with customizable length, characters, and symbols. Free online password generator for maximum security. No data stored.",
    seoKeywords: [
      "password generator", "random password generator", "strong password creator",
      "secure password generator online", "generate random password", "password maker",
      "free password generator tool", "how to create a strong password",
      "random password generator with symbols", "long password generator"
,      "password generator for students", "best password generator 2026", "free secure password creator online"        ],
    howToUse: [
      "Choose your desired password length (8-128 characters recommended).",
      "Select which character types to include: uppercase, lowercase, numbers, and symbols.",
      "Click 'Generate' to create a random secure password instantly.",
      "Copy the password to your clipboard using the copy button.",
      "Use the strength indicator to verify your password meets security requirements."
    ],
    faq: [
      { question: "How does this password generator work?", answer: "This tool uses cryptographically secure random number generation (crypto.getRandomValues) built into your browser. This produces truly random passwords that are not predictable, unlike pseudo-random generators used by less secure tools." },
      { question: "Is it safe to use an online password generator?", answer: "Yes, because all password generation happens locally in your browser. The generated password is never sent over the internet or stored on any server. You can verify this by using the tool with your network disconnected — it works perfectly offline." },
      { question: "How long should my password be?", answer: "Security experts recommend at least 12 characters for general use, and 16+ characters for sensitive accounts like banking or email. Longer passwords with mixed character types are exponentially harder to crack." },
      { question: "Should I include symbols in my password?", answer: "Including uppercase letters, lowercase letters, numbers, and symbols maximizes password entropy, making it significantly harder to crack through brute force attacks. We recommend enabling all character types for the strongest passwords." }
,      { question: "How secure are the passwords generated by this tool?", answer: "Passwords generated by this tool use cryptographically secure random number generation. With options for 12-64 characters including uppercase, lowercase, numbers, and symbols, the generated passwords are extremely difficult to crack." }
    ],
    nameTranslations: {
      es: "Generador de Contraseñas",
      ar: "مولد كلمات المرور",
    },
    descriptionTranslations: {
      es: "Genera contraseñas fuertes y seguras con longitud y opciones de caracteres personalizables.",
      ar: "أنشئ كلمات مرور قوية وآمنة مع خيارات طول وأحرف قابلة للتخصيص.",
    },
    seoTitleTranslations: {
      es: "Generador de Contraseñas Gratis Online - Contraseñas Fuertes y Aleatorias 2026",
      ar: "مولد كلمات مرور مجاني عبر الإنترنت - كلمات مرور قوية وعشوائية 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera contraseñas fuertes y aleatorias con longitud, caracteres y símbolos personalizables. Generador de contraseñas online gratuito para máxima seguridad. No se almacenan datos.",
      ar: "أنشئ كلمات مرور قوية وعشوائية مع طول وأحرف ورموز قابلة للتخصيص. مولد كلمات مرور مجاني عبر الإنترنت لأقصى أمان. لا يتم تخزين أي بيانات.",
    },
    howToUseTranslations: {
      es: [
        "Elige la longitud deseada de tu contraseña (8-128 caracteres recomendados).",
        "Selecciona qué tipos de caracteres incluir: mayúsculas, minúsculas, números y símbolos.",
        "Haz clic en 'Generar' para crear una contraseña segura aleatoria al instante.",
        "Copia la contraseña a tu portapapeles usando el botón de copiar.",
        "Usa el indicador de fuerza para verificar que tu contraseña cumple con los requisitos de seguridad.",
      ],
      ar: [
        "اختر الطول المطلوب لكلمة المرور (يُنصح بـ 8-128 حرفاً).",
        "اختر أنواع الأحرف التي تريد تضمينها: أحرف كبيرة وصغيرة وأرقام ورموز.",
        "انقر على 'إنشاء' لإنشاء كلمة مرور آمنة عشوائية فوراً.",
        "انسخ كلمة المرور إلى الحافظة باستخدام زر النسخ.",
        "استخدم مؤشر القوة للتحقق من أن كلمة المرور تفي بمتطلبات الأمان.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo funciona este generador de contraseñas?", answer: "Esta herramienta usa generación de números aleatorios criptográficamente segura (crypto.getRandomValues) integrada en tu navegador. Esto produce contraseñas verdaderamente aleatorias que no son predecibles, a diferencia de los generadores pseudoaleatorios usados por herramientas menos seguras." },
        { question: "¿Es seguro usar un generador de contraseñas online?", answer: "Sí, porque toda la generación de contraseñas ocurre localmente en tu navegador. La contraseña generada nunca se envía por internet ni se almacena en ningún servidor. Puedes verificar esto usando la herramienta con tu red desconectada — funciona perfectamente sin conexión." },
        { question: "¿Qué tan larga debería ser mi contraseña?", answer: "Los expertos en seguridad recomiendan al menos 12 caracteres para uso general y 16+ caracteres para cuentas sensibles como banca o correo electrónico. Las contraseñas más largas con tipos de caracteres mixtos son exponencialmente más difíciles de descifrar." },
        { question: "¿Debo incluir símbolos en mi contraseña?", answer: "Incluir letras mayúsculas, minúsculas, números y símbolos maximiza la entropía de la contraseña, haciéndola significativamente más difícil de descifrar mediante ataques de fuerza bruta. Recomendamos habilitar todos los tipos de caracteres para las contraseñas más fuertes." },
        { question: "¿Qué tan seguras son las contraseñas generadas por esta herramienta?", answer: "Las contraseñas generadas por esta herramienta usan generación de números aleatorios criptográficamente segura. Con opciones de 12-64 caracteres incluyendo mayúsculas, minúsculas, números y símbolos, las contraseñas generadas son extremadamente difíciles de descifrar." },
      ],
      ar: [
        { question: "كيف يعمل مولد كلمات المرور هذا؟", answer: "تستخدم هذه الأداة توليد أرقام عشوائية آمن تشفيرياً (crypto.getRandomValues) مدمج في متصفحك. يُنتج كلمات مرور عشوائية حقاً وغير قابلة للتنبؤ على عكس المولدات شبه العشوائية المستخدمة من قبل أدوات أقل أماناً." },
        { question: "هل من الآمن استخدام مولد كلمات مرور عبر الإنترنت؟", answer: "نعم لأن كل إنشاء كلمات المرور يحدث محلياً في متصفحك. لا تُرسل كلمة المرور المُنشأة أبداً عبر الإنترنت أو تُخزّن على أي خادم. يمكنك التحقق من ذلك باستخدام الأداة مع فصل الشبكة -- تعمل بشكل مثالي بدون اتصال." },
        { question: "كم يجب أن يكون طول كلمة المرور؟", answer: "يوصي خبراء الأمان بـ 12 حرفاً على الأقل للاستخدام العام و16+ حرفاً للحسابات الحساسة مثل البنوك أو البريد الإلكتروني. كلمات المرور الأطول مع أنواع أحرف مختلطة أصعب بكثير في الكسر." },
        { question: "هل يجب علي تضمين رموز في كلمة المرور؟", answer: "تضمين الأحرف الكبيرة والصغيرة والأرقام والرموز يزيد إنتروبيا كلمة المرور إلى أقصى حد مما يجعلها أصعب بكثير في الكسر عبر هجمات القوة الغاشمة. نوصي بتمكين جميع أنواع الأحرف لأقوى كلمات المرور." },
        { question: "ما مدى أمان كلمات المرور المُنشأة بهذه الأداة؟", answer: "تستخدم كلمات المرور المُنشأة بهذه الأداة توليد أرقام عشوائية آمن تشفيرياً. مع خيارات من 12-64 حرفاً بما فيها الأحرف الكبيرة والصغيرة والأرقام والرموز فإن كلمات المرور المُنشأة صعبة الكسر للغاية." },
      ],
    },
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    description:
      "Calculate exact age in years, months, and days from any birth date.",
    category: "calculator",
    icon: "🎂",
    path: "/tools/age-calculator",
    seoTitle: "Free Age Calculator Online - Calculate Exact Age from Date of Birth 2026",
    seoDescription: "Calculate your exact age in years, months, weeks, and days. Free online age calculator from any birth date. See next birthday countdown too. No signup required.",
    seoKeywords: [
      "age calculator", "calculate my age", "how old am i",
      "age calculator by date of birth", "exact age calculator",
      "calculate age in years months and days", "birthday calculator",
      "age calculator online free", "how many days until my birthday",
      "date of birth age calculator"
,      "age calculator for students", "best age calculator 2026", "how old am i calculator free"        ],
    nameTranslations: {
      es: "Calculadora de Edad",
      ar: "حاسبة العمر",
    },
    descriptionTranslations: {
      es: "Calcula la edad exacta en años, meses y días desde cualquier fecha de nacimiento.",
      ar: "احسب العمر بالسنوات والأشهر والأيام بدقة من أي تاريخ ميلاد.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Edad Gratis Online - Calcula Edad Exacta 2026",
      ar: "حاسبة العمر المجانية عبر الإنترنت - احسب عمرك بدقة 2026",
    },
    seoDescriptionTranslations: {
      es: "Calcula tu edad exacta en años, meses, semanas y días. Calculadora de edad gratuita desde cualquier fecha de nacimiento. Sin registro.",
      ar: "احسب عمرك بالسنوات والأشهر والأسابيع والأيام بدقة. حاسبة عمر مجانية من أي تاريخ ميلاد. شاهد العد التنازلي لعيد ميلادك القادم.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu fecha de nacimiento usando el selector de fechas o escríbela manualmente (formato AAAA-MM-DD).",
        "Haz clic en 'Calcular' o presiona Enter para ver los resultados al instante.",
        "Visualiza tu edad exacta en años, meses, semanas y días.",
        "Revisa la cuenta regresiva para tu próximo cumpleaños y descubre en qué día de la semana naciste.",
        "Calcula la edad para cualquier otra fecha cambiando la fecha de referencia.",
      ],
      ar: [
        "أدخل تاريخ ميلادك باستخدام محدد التاريخ أو اكتبه يدوياً (بصيغة YYYY-MM-DD).",
        "انقر على 'احسب' أو اضغط Enter لرؤية النتائج فوراً.",
        "شاهد عمرك الدقيق معروضاً بالسنوات والأشهر والأسابيع والأيام.",
        "تحقق من العد التنازلي لعيد ميلادك القادم واعرف في أي يوم من الأسبوع وُلدت.",
        "احسب العمر لأي تاريخ آخر بتغيير تاريخ المرجع.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo se calcula la edad?", answer: "La calculadora de edad determina la diferencia entre tu fecha de nacimiento y la fecha actual (o una fecha de referencia personalizada). Calcula el número exacto de años, meses y días, teniendo en cuenta las longitudes variables de los meses y los años bisiestos." },
        { question: "¿Puedo calcular la edad para una fecha pasada o futura?", answer: "Sí. Puedes cambiar la fecha de referencia de hoy a cualquier otra fecha en el pasado o futuro. Esto es útil para calcular la edad en un momento específico, como para documentos legales o planificación." },
        { question: "¿Esta calculadora tiene en cuenta los años bisiestos?", answer: "Sí. La calculadora de edad tiene en cuenta correctamente los años bisiestos (años de 366 días que ocurren cada 4 años) y el número variable de días en cada mes al calcular tu edad exacta." },
        { question: "¿Cuántos días faltan para mi próximo cumpleaños?", answer: "Después de ingresar tu fecha de nacimiento, la herramienta calcula y muestra automáticamente el número de días restantes hasta tu próximo cumpleaños, junto con el día de la semana en que cae." },
        { question: "¿Cómo maneja la calculadora de edad los años bisiestos?", answer: "Nuestra calculadora de edad maneja con precisión los años bisiestos utilizando un algoritmo de diferencia de fechas exacto. Tiene en cuenta las longitudes variables de los meses y los años bisiestos para darte la edad exacta en años, meses y días." },
      ],
      ar: [
        { question: "كيف يتم حساب العمر؟", answer: "تحسب حاسبة العمر الفرق بين تاريخ ميلادك وتاريخ اليوم (أو تاريخ مرجعي مخصص). تحسب العدد الدقيق من السنوات والأشهر والأيام، مع مراعاة أطوال الأشهر المتفاوتة والسنوات الكبيسة." },
        { question: "هل يمكنني حساب العمر لتاريخ سابق أو مستقبلي؟", answer: "نعم. يمكنك تغيير تاريخ المرجع من اليوم إلى أي تاريخ آخر في الماضي أو المستقبل. هذا مفيد لحساب العمر في نقطة زمنية محددة، مثل الوثائق القانونية أو التخطيط." },
        { question: "هل تأخذ هذه الحاسبة في الاعتبار السنوات الكبيسة؟", answer: "نعم. تأخذ حاسبة العمر في الاعتبار بشكل صحيح السنوات الكبيسة (366 يوماً التي تحدث كل 4 سنوات) والعدد المتفاوت من الأيام في كل شهر عند حساب عمرك الدقيق." },
        { question: "كم يوماً متبقي حتى عيد ميلادي القادم؟", answer: "بعد إدخال تاريخ ميلادك، تحسب الأداة تلقائياً وتعرض عدد الأيام المتبقية حتى عيد ميلادك القادم، بالإضافة إلى اليوم من الأسبوع الذي يصادفه." },
        { question: "كيف تتعامل حاسبة العمر مع السنوات الكبيسة؟", answer: "تتعامل حاسبة العمر بدقة مع السنوات الكبيسة باستخدام خوارزمية فرق التواريخ الدقيقة. تراعي أطوال الأشهر المتفاوتة والسنوات الكبيسة لتعطيك العمر الدقيق بالسنوات والأشهر والأيام." },
      ],
    },
    howToUse: [
      "Enter your date of birth using the date picker or type it manually (YYYY-MM-DD format).",
      "Click 'Calculate' or press Enter to see your results instantly.",
      "View your exact age displayed in years, months, weeks, and days.",
      "Check the countdown to your next birthday and see what day of the week you were born on.",
      "Calculate the age for any other date by changing the reference date."
    ],
    faq: [
      { question: "How is age calculated?", answer: "The age calculator determines the difference between your birth date and today's date (or a custom reference date). It calculates the exact number of years, months, and days, accounting for varying month lengths and leap years." },
      { question: "Can I calculate age for a past or future date?", answer: "Yes. You can change the reference date from today to any other date in the past or future. This is useful for calculating age at a specific point in time, such as for legal documents or planning purposes." },
      { question: "Does this calculator account for leap years?", answer: "Yes. The age calculator properly accounts for leap years (366-day years that occur every 4 years) and the varying number of days in each month when calculating your exact age." },
      { question: "How many days until my next birthday?", answer: "After entering your birth date, the tool automatically calculates and displays the number of days remaining until your next birthday, along with the day of the week it falls on." }
,      { question: "How does the age calculator handle leap years?", answer: "Our age calculator accurately handles leap years by using the precise date difference algorithm. It accounts for varying month lengths and leap years to give you the exact age in years, months, and days." }     ]
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description:
      "Calculate percentages, percentage change, and percentage of a number instantly.",
    category: "calculator",
    icon: "📊",
    path: "/tools/percentage-calculator",
    seoTitle: "Free Percentage Calculator Online - Calculate Percentages 2026",
    seoDescription: "Calculate percentages, percentage change between two numbers, and what percentage one number is of another. Free online percentage calculator. No signup required.",
    seoKeywords: [
      "percentage calculator", "calculate percentage", "percentage change calculator",
      "what is x percent of y", "percentage difference calculator",
      "calculate percentage online", "percent calculator free",
      "how to calculate percentage", "percentage increase calculator",
      "online percentage calculator"
,      "percentage calculator for students", "best percent calculator 2026", "free percentage tool for homework"        ],
    nameTranslations: {
      es: "Calculadora de Porcentaje",
      ar: "حاسبة النسبة المئوية",
    },
    descriptionTranslations: {
      es: "Calcula porcentajes, cambio porcentual y porcentaje de un número al instante.",
      ar: "احسب النسب المئوية والتغير النسبي ونسبة رقم من آخر فوراً.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Porcentaje Gratis Online - Calcula Porcentajes 2026",
      ar: "حاسبة النسبة المئوية المجانية عبر الإنترنت - احسب النسب 2026",
    },
    seoDescriptionTranslations: {
      es: "Calcula porcentajes, cambio porcentual entre dos números y qué porcentaje representa un número de otro. Calculadora de porcentaje gratuita. Sin registro.",
      ar: "احسب النسب المئوية والتغير بين رقمين والنسبة التي يمثلها رقم من آخر. حاسبة نسبة مئوية مجانية. بدون تسجيل.",
    },
    howToUseTranslations: {
      es: [
        "Elige el tipo de cálculo porcentual que necesitas: porcentaje de un número, cambio porcentual o qué porcentaje representa un número de otro.",
        "Ingresa tus valores en los campos de entrada correspondientes.",
        "Visualiza el resultado del porcentaje calculado al instante.",
        "Usa el resultado para cálculos financieros, cómputo de calificaciones o análisis de datos.",
      ],
      ar: [
        "اختر نوع حساب النسبة المئوية الذي تحتاجه: نسبة من رقم، تغير نسبي، أو النسبة التي يمثلها رقم من آخر.",
        "أدخل قيمك في حقول الإدخال المناسبة.",
        "شاهد نتيجة النسبة المئوية المحسوبة فوراً.",
        "استخدم النتيجة للحسابات المالية أو حساب الدرجات أو تحليل البيانات.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo calculo el porcentaje de un número?", answer: "Para encontrar X% de un número, multiplica el número por X y divide por 100. Por ejemplo, 25% de 200 = (200 × 25) ÷ 100 = 50." },
        { question: "¿Cómo se calcula el cambio porcentual?", answer: "Cambio porcentual = ((nuevo valor - valor original) ÷ valor original) × 100. Un resultado positivo significa un aumento; un resultado negativo significa una disminución." },
        { question: "¿Esta calculadora maneja números negativos?", answer: "Sí. Puedes calcular porcentajes con números negativos, lo cual es útil para escenarios financieros como pérdidas, cambios de temperatura o movimientos de precios de acciones." },
        { question: "¿Es esta calculadora precisa para cálculos financieros?", answer: "Sí. Los cálculos usan aritmética precisa. Sin embargo, para informes financieros oficiales, debes redondear los resultados según las normas contables de tu localidad." },
        { question: "¿Cómo calculo el aumento o disminución porcentual?", answer: "Para calcular el cambio porcentual: resta el valor antiguo del nuevo, divide por el valor antiguo y multiplica por 100. Nuestra calculadora de porcentaje hace esto automáticamente, solo ingresa tus dos valores." },
      ],
      ar: [
        { question: "كيف أحسب النسبة المئوية لرقم؟", answer: "لإيجاد X% من رقم، اضرب الرقم في X واقسم على 100. مثلاً: 25% من 200 = (200 × 25) ÷ 100 = 50." },
        { question: "كيف يُحسب التغير النسبي؟", answer: "التغير النسبي = ((القيمة الجديدة - القيمة الأصلية) ÷ القيمة الأصلية) × 100. النتيجة الإيجابية تعني زيادة؛ والسلبية تعني نقصاناً." },
        { question: "هل تتعامل هذه الحاسبة مع الأرقام السالبة؟", answer: "نعم. يمكنك حساب النسب المئوية بأرقام سالبة، وهو مفيد للسيناريوهات المالية مثل الخسائر أو تغيرات درجات الحرارة أو تحركات أسعار الأسهم." },
        { question: "هل هذه الحاسبة دقيقة للحسابات المالية؟", answer: "نعم. تستخدم الحسابات حساباً دقيقاً. ومع ذلك، للتقارير المالية الرسمية، يجب تقريب النتائج وفقاً للمعايير المحاسبية المحلية." },
        { question: "كيف أحسب الزيادة أو النقصان النسبي؟", answer: "لحساب التغير النسبي: اطرح القيمة القديمة من الجديدة، اقسم على القيمة القديمة، ثم اضرب في 100. حاسبة النسبة المئوية تفعل ذلك تلقائياً -- فقط أدخل قيمتيك." },
      ],
    },
    howToUse: [
      "Choose the type of percentage calculation you need: percentage of a number, percentage change, or what percentage one number is of another.",
      "Enter your values in the appropriate input fields.",
      "View the calculated percentage result instantly.",
      "Use the result for financial calculations, grade computations, or data analysis."
    ],
    faq: [
      { question: "How do I calculate the percentage of a number?", answer: "To find X% of a number, multiply the number by X and divide by 100. For example, 25% of 200 = (200 × 25) ÷ 100 = 50." },
      { question: "How is percentage change calculated?", answer: "Percentage change = ((new value - original value) ÷ original value) × 100. A positive result means an increase; a negative result means a decrease." },
      { question: "Can this calculator handle negative numbers?", answer: "Yes. You can calculate percentages with negative numbers, which is useful for financial scenarios like losses, temperature changes, or stock price movements." },
      { question: "Is this calculator accurate for financial calculations?", answer: "Yes. The calculations use precise arithmetic. However, for official financial reporting, you should round results according to your local accounting standards." }
,      { question: "How do I calculate percentage increase or decrease?", answer: "To calculate percentage change: subtract the old value from the new value, divide by the old value, then multiply by 100. Our percentage calculator does this automatically -- just enter your two values." }     ]
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    description:
      "Calculate your Body Mass Index (BMI) and see your weight category.",
    category: "calculator",
    icon: "⚖️",
    path: "/tools/bmi-calculator",
    seoTitle: "Free BMI Calculator Online - Body Mass Index Checker 2026",
    seoDescription: "Calculate your BMI instantly with metric or imperial units. See your weight category, ideal weight range, and health tips. Free online BMI calculator for adults.",
    seoKeywords: [
      "bmi calculator", "body mass index calculator", "calculate bmi online",
      "bmi calculator metric", "bmi calculator imperial", "what is my bmi",
      "bmi chart", "healthy weight calculator", "bmi calculator free",
      "body mass index checker online"
,      "bmi calculator for students", "best bmi calculator 2026", "free body mass index checker online"        ],
    nameTranslations: {
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
        { question: "¿Es el IMC preciso para todos?", answer: "El IMC es un indicador general útil pero tiene limitaciones. No tiene en cuenta la masa muscular, la densidad ósea o la distribución de grasa. Los atletas con alta masa muscular pueden tener un IMC alto a pesar de estar sanos. Es mejor usarlo como uno de varios indicadores de salud." }
      ],
      ar: [
        { question: "ما هو مؤشر كتلة الجسم؟", answer: "مؤشر كتلة الجسم (BMI) هو قيمة رقمية تُحسب من وزنك وطولك. يُستخدم كأداة فحص لتصنيف ما إذا كان الشخص يعاني من نقص الوزن أو الوزن الطبيعي أو زيادة الوزن أو السمنة وفقاً للنطاقات القياسية التي وضعتها منظمة الصحة العالمية." },
        { question: "كيف يُحسب مؤشر كتلة الجسم؟", answer: "يُحسب مؤشر كتلة الجسم بقسمة وزنك بالكيلوجرام على طولك بالمتر مربع (كجم/م²). للوحدات الإمبراطورية، المعادلة هي (الوزن بالرطل / (الطول بالبوصة)²) × 703." },
        { question: "ما هو نطاق مؤشر كتلة الجسم الصحي؟", answer: "وفقاً لإرشادات منظمة الصحة العالمية، يتراوح نطاق مؤشر كتلة الجسم الصحي للبالغين بين 18.5 و 24.9. أقل من 18.5 يُعتبر نقصاً في الوزن، و25.0-29.9 زيادة في الوزن، و30.0 فأكثر سمنة." },
        { question: "هل مؤشر كتلة الجسم دقيق للجميع؟", answer: "مؤشر كتلة الجسم مؤشر عام مفيد لكنه له قيود. لا يأخذ في الاعتبار الكتلة العضلية أو كثافة العظام أو توزيع الدهون. قد يكون لدى الرياضيين ذوي الكتلة العضلية العالية مؤشر مرتفع رغم كونهم أصحاء. من الأفضل استخدامه كأحد عدة مؤشرات صحية." }
      ],
    },
  },
  {
    id: "unit-converter",
    name: "Unit Converter",
    description:
      "Convert between length, weight, temperature, and other units easily.",
    category: "calculator",
    icon: "📐",
    path: "/tools/unit-converter",
    seoTitle: "Free Unit Converter Online - Metric to Imperial Conversion 2026",
    seoDescription: "Convert between metric and imperial units for length, weight, temperature, volume, and speed. Free online unit converter. No signup required.",
    seoKeywords: [
      "unit converter", "metric to imperial converter", "length converter",
      "weight converter", "temperature converter", "volume converter",
      "unit conversion online", "free unit converter tool",
      "cm to inches converter", "kg to lbs converter"
,      "unit converter for students", "best unit converter 2026", "free metric to imperial converter online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What unit categories are supported?", answer: "This converter supports length (meters, feet, inches, etc.), weight (kilograms, pounds, ounces, etc.), temperature (Celsius, Fahrenheit, Kelvin), volume (liters, gallons, cups, etc.), and speed (mph, km/h, m/s)." },
      { question: "How accurate are the conversions?", answer: "All conversions use precise conversion factors and are accurate to many decimal places. Results are rounded for readability but you can see the full precision." },
      { question: "Can I convert between any two units?", answer: "You can convert between any two units within the same category. For example, you can convert meters to feet, or kilograms to pounds, but not meters to kilograms." },
      { question: "Is this tool suitable for cooking measurements?", answer: "Yes. The volume converter includes common cooking measurements like cups, tablespoons, teaspoons, and milliliters, making it useful for recipe conversions." }
,      { question: "What units does this converter support?", answer: "Our unit converter supports length (km, mi, m, ft, cm, in), weight (kg, lb, g, oz), temperature (C, F, K), volume (L, gal, mL, fl oz), and speed (km/h, mph, m/s, knots)." }     ],
  },
  // Converters
  {
    id: "base-converter",
    name: "Number Base Converter",
    description:
      "Convert numbers between binary, octal, decimal, and hexadecimal systems.",
    category: "converter",
    icon: "🔢",
    path: "/tools/base-converter",
    seoTitle: "Free Base Converter Online - Binary, Hex, Decimal, Octal 2026",
    seoDescription: "Convert numbers between binary, octal, decimal, and hexadecimal systems instantly. Free online number base converter for developers and students.",
    seoKeywords: [
      "number base converter", "binary to decimal converter", "hex to decimal",
      "decimal to binary converter", "octal converter", "base converter online",
      "binary octal decimal hex converter", "convert number bases",
      "free base converter", "number system converter"
,      "number base converter for students", "best binary converter 2026", "free hex to decimal converter online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What are number bases?", answer: "Number bases are different systems for representing numbers. Binary (base 2) uses digits 0-1, octal (base 8) uses 0-7, decimal (base 10) uses 0-9, and hexadecimal (base 16) uses 0-9 and A-F." },
      { question: "Why do I need to convert between number bases?", answer: "Number base conversion is essential in computer science and programming. Binary is used for low-level operations, hexadecimal for memory addresses and colors, and decimal for everyday calculations." },
      { question: "Can I enter negative numbers?", answer: "Yes. You can enter negative numbers in any base, and the tool will convert them correctly to all other bases." },
      { question: "What's the maximum number size?", answer: "The tool can handle very large numbers — up to the safe integer limit of JavaScript (approximately 9 × 10^15). This is sufficient for most programming and educational use cases." }
,      { question: "What number bases does this converter support?", answer: "Our converter supports binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16). Enter a number in any base and instantly see the equivalent in all other bases." }     ],
  },
  {
    id: "roman-numerals",
    name: "Roman Numeral Converter",
    description:
      "Convert between Roman numerals and Arabic numbers in both directions.",
    category: "converter",
    icon: "🏛️",
    path: "/tools/roman-numerals",
    seoTitle: "Free Roman Numerals Converter Online - Roman to Number 2026",
    seoDescription: "Convert Roman numerals to Arabic numbers and vice versa instantly. Free online Roman numeral converter. Supports numbers 1-3,999,999.",
    seoKeywords: [
      "roman numeral converter", "roman to arabic converter",
      "arabic to roman numeral converter", "roman numeral calculator",
      "convert roman numerals", "roman numeral to number",
      "roman numeral converter online", "free roman numeral tool",
      "roman numbers converter", "what is this roman numeral"
,      "roman numerals for students", "best roman numeral converter 2026", "free roman to number converter online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What are Roman numerals?", answer: "Roman numerals are a numeral system originating in ancient Rome, using combinations of letters: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000)." },
      { question: "What is the largest number this converter handles?", answer: "This converter supports numbers from 1 to 3,999,999. Standard Roman numerals go up to 3,999, and this tool extends that with overline notation for larger numbers." },
      { question: "How do Roman numerals work?", answer: "Roman numerals are read left to right, with values added together. When a smaller numeral appears before a larger one, it's subtracted (e.g., IV = 4, IX = 9, XL = 40)." },
      { question: "Where are Roman numerals used today?", answer: "Roman numerals are still used for clock faces, movie copyright dates, book chapters, monarch numbering (Queen Elizabeth II), Super Bowl numbering, and formal outline structures." }
,      { question: "What is the largest Roman numeral this tool can convert?", answer: "Our Roman numeral converter handles numbers from 1 to 3,999 (MMMCMXCIX), which covers the standard range of Roman numerals. For larger numbers, Roman numeral notation becomes non-standard." }     ]
  },
  {
    id: "color-converter",
    name: "Color Converter",
    description:
      "Convert colors between HEX, RGB, and HSL formats with live preview.",
    category: "converter",
    icon: "🎨",
    path: "/tools/color-converter",
    seoTitle: "Free Color Converter Online - HEX, RGB, HSL Converter 2026",
    seoDescription: "Convert colors between HEX, RGB, and HSL formats instantly. Live color preview with copy-paste values. Free online color converter for designers and developers.",
    seoKeywords: [
      "color converter", "hex to rgb converter", "rgb to hsl converter",
      "hex to hsl converter", "color format converter", "rgb hex converter",
      "online color converter", "color converter tool free",
      "convert hex color code", "hsl to rgb converter"
,      "color converter for students", "best color converter 2026", "free hex to rgb converter online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What are HEX, RGB, and HSL color formats?", answer: "HEX represents colors as a 6-digit hexadecimal code (e.g., #FF5733). RGB uses red, green, and blue values from 0-255. HSL represents colors as hue (0-360°), saturation (0-100%), and lightness (0-100%), which is more intuitive for humans to understand." },
      { question: "How do I convert HEX to RGB?", answer: "Enter your HEX color code (with or without the # symbol) and the tool instantly displays the equivalent RGB values. For example, #FF5733 converts to RGB(255, 87, 51)." },
      { question: "Why should I use HSL instead of RGB?", answer: "HSL is often preferred by designers because it's more intuitive. You can adjust the hue to change the color, saturation for vividness, and lightness for brightness — all independently. It's also the format used in modern CSS." },
      { question: "Can I use this color converter for web design?", answer: "Yes. This tool supports all standard web color formats. You can convert between any format and directly copy the values for use in CSS, HTML, JavaScript, or design software like Figma and Photoshop." }
,      { question: "What color formats does this converter support?", answer: "Our color converter supports HEX (#RRGGBB), RGB (rgb(r, g, b)), HSL (hsl(h, s%, l%)), and named colors. Enter any value and get instant conversions to all other formats." }     ]
  },
  {
    id: "html-entities",
    name: "HTML Entity Encoder",
    description:
      "Encode or decode HTML entities and special characters safely.",
    category: "converter",
    icon: "<>",
    path: "/tools/html-entities",
    seoTitle: "Free HTML Entities Encoder Online - Encode & Decode HTML Entities 2026",
    seoDescription: "Encode text to HTML entities or decode HTML entities back to readable text. Free online HTML entity encoder/decoder for web developers.",
    seoKeywords: [
      "html entity encoder", "html entity decoder", "encode html entities",
      "decode html entities", "html special characters", "html encoding",
      "html entity converter", "escape html online",
      "free html entity encoder", "html encode decode online"
,      "html entity encoder for students", "best html encoder 2026", "free html special character converter online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What are HTML entities?", answer: "HTML entities are special codes used to display reserved characters in HTML. For example, < is &lt;, > is &gt;, and & is &amp;. They prevent the browser from interpreting these characters as HTML tags." },
      { question: "When should I encode HTML entities?", answer: "You should encode HTML entities whenever you need to display special characters in web pages without the browser interpreting them as markup. This is essential for displaying code snippets, mathematical symbols, or text containing angle brackets." },
      { question: "What characters are encoded?", answer: "The tool encodes reserved HTML characters: less-than, greater-than, ampersand, double quote, and single quote. It also handles common symbols like copyright, registered trademark, euro, and pound signs." },
      { question: "Does encoding affect how the page looks?", answer: "No. Encoded entities render exactly the same as the original characters in the browser. The encoding only affects the source code, not the visual output." }
,      { question: "Why do I need to encode HTML entities?", answer: "HTML entity encoding converts special characters like angle brackets and ampersands into safe equivalents to prevent them from being interpreted as HTML tags. This is essential for security and displaying code on web pages." }     ]
  },
  {
    id: "json-to-csv",
    name: "JSON to CSV Converter",
    description:
      "Convert JSON data to CSV format for spreadsheets and databases.",
    category: "converter",
    icon: "📊",
    path: "/tools/json-to-csv",
    seoTitle: "Free JSON to CSV Converter Online - Export JSON Data 2026",
    seoDescription: "Convert JSON arrays to CSV format for easy import into Excel, Google Sheets, or databases. Free online JSON to CSV converter. No signup required.",
    seoKeywords: [
      "json to csv converter", "convert json to csv", "json to csv online",
      "json to excel converter", "json to spreadsheet", "export json to csv",
      "json to csv free", "online json csv converter",
      "json to csv tool", "convert api data to csv"
,      "json to csv for students", "best json to csv converter 2026", "free json to excel converter online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What format should my JSON be in?", answer: "Your JSON should be an array of objects where each object represents a row. For example: [{\"name\":\"John\",\"age\":30},{\"name\":\"Jane\",\"age\":25}]. Nested objects are flattened into columns." },
      { question: "Can I convert nested JSON to CSV?", answer: "Yes. Nested objects and arrays are automatically flattened. Nested keys are joined with dots (e.g., 'address.city' becomes a column name) to create a flat CSV structure." },
      { question: "What delimiter does the CSV use?", answer: "The converter uses commas as delimiters by default. If your data contains commas, values are properly quoted to prevent formatting issues." },
      { question: "Can I use this with API data?", answer: "Yes. If your API returns JSON array data, simply copy the response and paste it into the converter. This is commonly used to export API results to spreadsheets for analysis." }
,      { question: "Does this tool handle nested JSON objects?", answer: "Our JSON to CSV converter flattens nested objects using dot notation (e.g., user.name). Arrays within objects are converted to comma-separated strings. Each top-level object becomes a CSV row." }     ]
  },
  {
    id: "csv-to-json",
    name: "CSV to JSON Converter",
    description:
      "Convert CSV data to JSON format for APIs and web applications.",
    category: "converter",
    icon: "📋",
    path: "/tools/csv-to-json",
    seoTitle: "Free CSV to JSON Converter Online - Convert CSV to JSON 2026",
    seoDescription: "Convert CSV data to JSON format for APIs, web apps, and databases. Free online CSV to JSON converter with formatted output. No signup required.",
    seoKeywords: [
      "csv to json converter", "convert csv to json", "csv to json online",
      "csv to json api", "import csv to json", "csv json converter",
      "csv to json free", "online csv json tool",
      "convert spreadsheet to json", "csv to json array"
,      "csv to json for students", "best csv to json converter 2026", "free spreadsheet to json converter online"        ],
    nameTranslations: {
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
    faq: [
      { question: "Does the first row need to be headers?", answer: "The converter can work with or without headers. If the first row looks like column names, it will be used as JSON keys. Otherwise, numeric keys (0, 1, 2...) are generated." },
      { question: "What CSV formats are supported?", answer: "The tool supports standard CSV with comma delimiters, as well as semicolon-delimited and tab-separated values. It handles quoted fields containing commas and escaped characters." },
      { question: "Can I convert large CSV files?", answer: "Yes. The converter handles large CSV files efficiently. For very large files (millions of rows), consider processing in smaller batches to avoid browser memory limits." },
      { question: "What type of JSON output do I get?", answer: "The output is a JSON array of objects, where each object represents a row and each key-value pair represents a column. This format is directly usable with most APIs and JavaScript applications." }
,      { question: "What CSV format does this converter expect?", answer: "The converter expects standard CSV format with a header row as the first line. Fields containing commas should be enclosed in double quotes. It handles common delimiters and automatically detects the format." }     ]
  },
  {
    id: "image-to-base64",
    name: "Image to Base64",
    description:
      "Convert images to Base64 encoded strings for embedding in code.",
    category: "converter",
    icon: "🖼️",
    path: "/tools/image-to-base64",
    seoTitle: "Free Image to Base64 Converter Online - Encode Images 2026",
    seoDescription: "Convert images (PNG, JPG, GIF, SVG) to Base64 encoded strings for embedding in CSS, HTML, or code. Free online image to Base64 converter.",
    seoKeywords: [
      "image to base64 converter", "image to base64 online",
      "encode image to base64", "image to data uri",
      "base64 image encoder", "convert image to base64 string",
      "free image base64 converter", "image to base64 tool",
      "svg to base64", "png to base64 converter"
,      "image to base64 for students", "best image encoder 2026", "free image to data uri converter online"        ],
    nameTranslations: {
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
        { question: "¿Cómo afecta Base64 al tamaño del archivo?", answer: "La codificación Base64 aumenta el tamaño del archivo aproximadamente un 33% en comparación con el binario original. Esta compensación suele valer la pena para imágenes pequeñas ya que elimina una solicitud HTTP separada." }
      ],
      ar: [
        { question: "ما هو تشفير الصور بـ Base64؟", answer: "تشفير الصور بـ Base64 يحوّل ملف صورة إلى سلسلة نصية يمكن تضمينها مباشرة في HTML أو CSS أو JavaScript. هذا يلغي الحاجة لملفات صور منفصلة وطلبات HTTP." },
        { question: "ما صيغ الصور المدعومة؟", answer: "تدعم هذه الأداة صيغ PNG و JPG/JPEG و GIF و SVG و WebP. المخرجات تحافظ على نوع MIME الأصلي في بادئة URI البيانات." },
        { question: "متى يجب تضمين الصور كـ Base64؟", answer: "التضمين بـ Base64 مثالي للصور الصغيرة مثل الأيقونات والشعارات وعناصر الواجهة. يقلل طلبات HTTP ويسرع تحميل الصفحة. ومع ذلك، يجب أن تبقى الصور الكبيرة كملفات منفصلة لتحسين التخزين المؤقت." },
        { question: "كيف يؤثر Base64 على حجم الملف؟", answer: "يزيد تشفير Base64 حجم الملف بنحو 33% مقارنة بالثنائي الأصلي. هذه المقايضة عادة ما تستحق ذلك للصور الصغيرة لأنها تلغي طلب HTTP منفصل." }
      ],
    },
    howToUse: [
      "Upload an image file (PNG, JPG, GIF, SVG, WebP) or drag and drop it into the upload area.",
      "View the Base64 encoded string generated instantly.",
      "Copy the full data URI (including prefix) for embedding in HTML or CSS.",
      "Copy just the Base64 string if you need to construct the data URI manually."
    ],
    faq: [
      { question: "What is Base64 image encoding?", answer: "Base64 image encoding converts an image file into a text string that can be embedded directly in HTML, CSS, or JavaScript. This eliminates the need for separate image files and HTTP requests." },
      { question: "What image formats are supported?", answer: "This tool supports PNG, JPG/JPEG, GIF, SVG, and WebP formats. The output preserves the original MIME type in the data URI prefix." },
      { question: "When should I embed images as Base64?", answer: "Base64 embedding is ideal for small images like icons, logos, and UI elements. It reduces HTTP requests and speeds up page loading. However, large images should remain as separate files for better caching." },
      { question: "How does Base64 affect file size?", answer: "Base64 encoding increases file size by approximately 33% compared to the original binary. This trade-off is usually worth it for small images since it eliminates a separate HTTP request." }
    ],
  },
  {
    id: "loan-calculator",
    name: "Loan Calculator",
    description:
      "Calculate monthly payments, total interest, and amortization for loans.",
    category: "calculator",
    icon: "🏦",
    path: "/tools/loan-calculator",
    seoTitle: "Free Loan Calculator Online - Loan Payment Estimator 2026",
    seoDescription: "Calculate monthly loan payments, total interest, and amortization schedule. Free online loan calculator for personal loans, auto loans, and more.",
    seoKeywords: [
      "loan calculator", "monthly payment calculator", "loan payment calculator",
      "calculate loan payments", "loan amortization calculator",
      "personal loan calculator", "auto loan calculator",
      "loan interest calculator", "free loan calculator online",
      "how much is my monthly loan payment"
,      "loan calculator for students", "best loan payment calculator 2026", "free monthly payment estimator online"        ],
    nameTranslations: {
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
    faq: [
      { question: "How is the monthly loan payment calculated?", answer: "Monthly payment = P × (r(1+r)^n) / ((1+r)^n - 1), where P is the principal, r is the monthly interest rate, and n is the number of payments. This is the standard amortization formula used by banks." },
      { question: "What is an amortization schedule?", answer: "An amortization schedule is a table showing each payment over the loan term, broken down into principal and interest portions. Early payments are mostly interest; later payments are mostly principal." },
      { question: "Does this calculator include taxes and insurance?", answer: "This calculator focuses on principal and interest payments. For mortgages, you would need to add property taxes and insurance separately to get your full monthly payment." },
      { question: "Can I use this for any type of loan?", answer: "Yes. This calculator works for any fixed-rate loan including personal loans, auto loans, student loans, and business loans. Just enter your specific loan terms." }
,      { question: "Does this calculator include interest rates?", answer: "Yes, our loan calculator computes monthly payments based on the loan amount, interest rate, and loan term. It shows the total payment amount and total interest paid over the life of the loan." }     ]
  },
  {
    id: "mortgage-calculator",
    name: "Mortgage Calculator",
    description:
      "Estimate your monthly mortgage payment with taxes and insurance.",
    category: "calculator",
    icon: "🏠",
    path: "/tools/mortgage-calculator",
    seoTitle: "Free Mortgage Calculator Online - House Payment Estimator 2026",
    seoDescription: "Estimate your monthly mortgage payment including principal, interest, property taxes, and insurance. Free online mortgage calculator for home buyers.",
    seoKeywords: [
      "mortgage calculator", "monthly mortgage payment calculator",
      "mortgage payment estimator", "home loan calculator",
      "mortgage calculator with taxes", "mortgage calculator with insurance",
      "free mortgage calculator", "house payment calculator",
      "mortgage payment calculator online", "how much house can i afford"
,      "mortgage calculator for students", "best mortgage calculator 2026", "free house payment calculator online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What is included in a mortgage payment?", answer: "A full mortgage payment (PITI) includes Principal (loan repayment), Interest (cost of borrowing), Taxes (property taxes), and Insurance (homeowners insurance). Some mortgages also include PMI (private mortgage insurance)." },
      { question: "How much down payment do I need?", answer: "Conventional loans typically require 20% down to avoid PMI. FHA loans allow as low as 3.5% down. VA loans and USDA loans may allow 0% down for eligible borrowers." },
      { question: "What is PMI and when is it required?", answer: "PMI (Private Mortgage Insurance) is required when your down payment is less than 20% of the home price. It protects the lender and typically costs 0.3-1.5% of the loan amount annually." },
      { question: "How accurate is this mortgage estimate?", answer: "This calculator provides a good estimate based on the information you provide. Actual payments may vary based on your credit score, lender fees, specific insurance costs, and local property tax rates." }
,      { question: "What factors does the mortgage calculator consider?", answer: "Our mortgage calculator considers the home price, down payment, loan term, and interest rate to estimate your monthly payment. It also shows the total interest paid and an amortization breakdown." }     ]
  },
  {
    id: "calorie-calculator",
    name: "Calorie Calculator",
    description:
      "Estimate daily calorie needs based on age, weight, height, and activity.",
    category: "calculator",
    icon: "🔥",
    path: "/tools/calorie-calculator",
    seoTitle: "Free Calorie Calculator Online - Daily Calorie Needs Estimator 2026",
    seoDescription: "Calculate your daily calorie needs based on age, weight, height, gender, and activity level. Free TDEE calculator for weight loss, maintenance, or gain goals.",
    seoKeywords: [
      "calorie calculator", "daily calorie needs calculator",
      "tdee calculator", "calorie intake calculator",
      "calculate daily calories", "calorie needs estimator",
      "how many calories should i eat", "calorie calculator for weight loss",
      "free calorie calculator", "daily calorie intake calculator"
,      "calorie calculator for students", "best tdee calculator 2026", "free daily calorie needs estimator online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What is TDEE?", answer: "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day, including your basal metabolic rate (BMR) and physical activity. It's the foundation for determining your calorie needs." },
      { question: "How many calories should I eat to lose weight?", answer: "A safe weight loss rate is 0.5-1 pound per week, which requires a daily deficit of 250-500 calories from your TDEE. Never go below 1,200 calories per day for women or 1,500 for men without medical supervision." },
      { question: "How accurate is this calculator?", answer: "This calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate BMR formulas. However, individual metabolism varies, so use this as a starting point and adjust based on your results." },
      { question: "Does this calculator account for muscle mass?", answer: "This calculator uses standard formulas that estimate BMR based on weight, height, age, and gender. For more precise results that account for body composition, a DEXA scan or professional assessment is recommended." }
,      { question: "How are daily calorie needs calculated?", answer: "Our calorie calculator uses the Mifflin-St Jeor equation, which considers your age, gender, weight, height, and activity level to estimate your Total Daily Energy Expenditure (TDEE)." }     ]
  },
  {
    id: "roi-calculator",
    name: "ROI Calculator",
    description:
      "Calculate return on investment (ROI) percentage and profit amount.",
    category: "calculator",
    icon: "📈",
    path: "/tools/roi-calculator",
    seoTitle: "Free ROI Calculator Online - Return on Investment Calculator 2026",
    seoDescription: "Calculate your return on investment (ROI) percentage and profit. Compare investment options and analyze business profitability. Free online ROI calculator.",
    seoKeywords: [
      "roi calculator", "return on investment calculator",
      "calculate roi percentage", "investment return calculator",
      "profit calculator", "business roi calculator",
      "free roi calculator", "roi percentage calculator",
      "return on investment tool", "calculate investment returns"
,      "roi calculator for students", "best roi calculator 2026", "free investment return calculator online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What is ROI?", answer: "ROI (Return on Investment) measures the profitability of an investment. It's calculated as ((final value - initial cost) ÷ initial cost) × 100, expressed as a percentage." },
      { question: "What is a good ROI?", answer: "A 'good' ROI depends on the investment type and risk level. Stock market investments historically average 7-10% annually. Real estate typically targets 8-12%. For business projects, companies often require 15-20% minimum ROI." },
      { question: "Can ROI be negative?", answer: "Yes. A negative ROI means you lost money on the investment. For example, if you invested $1,000 and got back $800, your ROI is -20%." },
      { question: "Does this calculator account for time?", answer: "This calculator shows simple ROI. For comparing investments over different time periods, you should also consider annualized ROI, which accounts for the duration of the investment." }
,      { question: "How is ROI calculated?", answer: "ROI (Return on Investment) is calculated as: ((Gain from Investment - Cost of Investment) / Cost of Investment) x 100. A positive ROI means profit, while a negative ROI indicates a loss." }     ]
  },
  {
    id: "compound-interest",
    name: "Compound Interest Calculator",
    description:
      "See how your money grows over time with compound interest calculations.",
    category: "calculator",
    icon: "💰",
    path: "/tools/compound-interest",
    seoTitle: "Free Compound Interest Calculator Online - Savings Growth 2026",
    seoDescription: "Calculate compound interest with customizable principal, rate, time, and compounding frequency. Free online compound interest calculator with growth visualization.",
    seoKeywords: [
      "compound interest calculator", "calculate compound interest",
      "compound interest growth calculator", "savings calculator",
      "investment growth calculator", "compound interest formula",
      "free compound interest calculator", "compound interest online",
      "how much will my savings grow", "compound interest estimator"
,      "compound interest for students", "best compound interest calculator 2026", "free savings growth calculator online"        ],
    nameTranslations: {
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
    faq: [
      { question: "What is compound interest?", answer: "Compound interest is interest calculated on both the initial principal and accumulated interest from previous periods. It's often called 'interest on interest' and is the most powerful force in growing wealth over time." },
      { question: "How often should interest compound?", answer: "More frequent compounding produces higher returns. Daily compounding yields slightly more than monthly, which yields more than quarterly or annually. The difference is small for short periods but significant over decades." },
      { question: "What is the Rule of 72?", answer: "The Rule of 72 is a quick way to estimate how long it takes for an investment to double. Divide 72 by your annual interest rate. For example, at 8% interest, your money doubles in approximately 9 years (72÷8=9)." },
      { question: "How do regular contributions affect compound interest?", answer: "Regular contributions dramatically increase your total growth. Adding even small amounts monthly can multiply your final balance. This is the core principle behind retirement savings plans like 401(k)s." }
,      { question: "What is compound interest and why is it important?", answer: "Compound interest is interest calculated on both the initial principal and the accumulated interest from previous periods. It has a powerful effect on growing wealth over time due to exponential growth." }     ]
  },
  {
    id: "income-tax-calculator",
    name: "Income Tax Calculator",
    description:
      "Estimate your take-home pay after income tax deductions.",
    category: "calculator",
    icon: "💵",
    path: "/tools/income-tax-calculator",
    seoTitle: "Free Income Tax Calculator Online - Take Home Pay Estimator 2026",
    seoDescription: "Estimate your take-home pay after federal and state income tax. Free online income tax calculator with detailed breakdown of deductions.",
    seoKeywords: [
      "income tax calculator", "take home pay calculator",
      "salary after tax calculator", "net pay calculator",
      "income tax estimator", "calculate income tax online",
      "free income tax calculator", "paycheck calculator",
      "salary calculator after tax", "how much tax will i pay"
,      "income tax calculator for students", "best salary calculator 2026", "free take home pay estimator online"        ],
    nameTranslations: {
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
    faq: [
      { question: "How accurate is this income tax estimate?", answer: "This calculator provides a general estimate based on current tax brackets and standard deductions. Actual taxes may vary based on specific deductions, credits, and local taxes not included in this calculation." },
      { question: "What deductions are included?", answer: "The calculator includes standard federal income tax deductions based on your filing status. It does not include state-specific deductions, local taxes, or itemized deductions." },
      { question: "Does this calculator handle self-employment income?", answer: "This calculator is designed for W-2 employees. Self-employed individuals should account for additional self-employment tax (Social Security and Medicare) which is approximately 15.3%." },
      { question: "How often are tax rates updated?", answer: "Tax brackets and rates are updated annually based on IRS guidelines. This calculator uses the most current tax year data available." }
,      { question: "Does this calculator show take-home pay?", answer: "Yes, our income tax calculator estimates your take-home pay after taxes. Enter your gross salary and it will calculate your estimated net pay based on standard tax rates." }     ]
  },
  {
    id: "tip-calculator",
    name: "Tip Calculator",
    description:
      "Calculate tip amount, split the bill, and figure out per-person cost.",
    category: "calculator",
    icon: "💳",
    path: "/tools/tip-calculator",
    seoTitle: "Free Tip Calculator Online - Bill Splitter & Tip Calculator 2026",
    seoDescription: "Calculate tip amount, split the bill among friends, and see per-person cost. Free online tip calculator for restaurants and services.",
    seoKeywords: [
      "tip calculator", "gratuity calculator", "calculate tip",
      "split the bill calculator", "restaurant tip calculator",
      "tip percentage calculator", "how much to tip",
      "free tip calculator", "tip and split calculator",
      "bill splitter with tip", "tip calculator online"
,      "tip calculator for students", "best tip calculator 2026", "free bill splitter online"        ],
    howToUse: [
      "Enter the total bill amount.",
      "Select your desired tip percentage (15%, 18%, 20%, or custom).",
      "Enter the number of people splitting the bill.",
      "View the tip amount, total with tip, and per-person cost instantly."
    ],
    faq: [
      { question: "What is the standard tip percentage?", answer: "In the United States, the standard tip at restaurants is 15-20% for good service. 18-20% is common for sit-down restaurants, 15% for casual dining, and 10% or less for poor service." },
      { question: "Should I tip on the pre-tax or post-tax amount?", answer: "It's customary to tip on the pre-tax amount (the subtotal before sales tax is added). However, many people tip on the total including tax for simplicity." },
      { question: "How do I split a tip among a group?", answer: "Calculate the total tip amount based on your chosen percentage, then divide by the number of people. This calculator does both steps automatically." },
      { question: "When should I not leave a tip?", answer: "Tips are generally expected for sit-down restaurant service, bars, taxis, and personal services. You typically don't need to tip at fast-food restaurants, self-service establishments, or when a mandatory service charge is already included." }
,      { question: "Can this tip calculator split the bill?", answer: "Yes, our tip calculator can split the total bill (including tip) among any number of people. Just enter the bill amount, tip percentage, and number of people to see how much each person owes." }     ]
  },
  {
    id: "discount-calculator",
    name: "Discount Calculator",
    description:
      "Calculate discounted price, savings amount, and discount percentage.",
    category: "calculator",
    icon: "🏷️",
    path: "/tools/discount-calculator",
    seoTitle: "Free Discount Calculator Online - Sale Price Calculator 2026",
    seoDescription: "Calculate discounted price, savings amount, and discount percentage. Free online discount calculator for sales, coupons, and promotions.",
    seoKeywords: [
      "discount calculator", "sale price calculator", "calculate discount",
      "discount percentage calculator", "savings calculator",
      "price after discount", "discount calculator online",
      "free discount calculator", "how much will i save",
      "calculate percentage off"
,      "discount calculator for students", "best sale price calculator 2026", "free savings calculator online"        ],
    howToUse: [
      "Enter the original price of the item.",
      "Enter the discount percentage or the discount amount.",
      "View the final sale price and your total savings instantly.",
      "Use it to compare deals and determine the best value."
    ],
    faq: [
      { question: "How do I calculate a discount?", answer: "Discounted price = Original price × (1 - Discount percentage ÷ 100). For example, a $100 item with 25% off costs $100 × (1 - 0.25) = $75." },
      { question: "How do I find the discount percentage?", answer: "Discount percentage = ((Original price - Sale price)  Original price) × 100. For example, if an item goes from $80 to $60, the discount is ((80-60)/80) × 100 = 25%." },
      { question: "Can I stack multiple discounts?", answer: "Multiple percentage discounts are applied sequentially, not added together. For example, 20% off followed by 10% off means: first reduce by 20%, then reduce the new price by 10%. The total discount is 28%, not 30%." },
      { question: "Does this calculator work with tax?", answer: "This calculator focuses on the discount amount. To get the final price with tax, multiply the discounted price by (1 + tax rate ÷ 100)." }
,      { question: "How do I calculate the final price after a discount?", answer: "Enter the original price and discount percentage. Our calculator shows the final sale price and the amount saved. Formula: Final Price = Original Price - (Original Price x Discount% / 100)." }     ]
  },
  {
    id: "pregnancy-calculator",
    name: "Pregnancy Due Date Calculator",
    description:
      "Estimate your due date based on last menstrual period with trimester info.",
    category: "calculator",
    icon: "👶",
    path: "/tools/pregnancy-calculator",
    seoTitle: "Free Pregnancy Calculator Online - Due Date Estimator 2026",
    seoDescription: "Calculate your estimated due date based on your last menstrual period. See trimester breakdown and key pregnancy milestones. Free online pregnancy calculator.",
    seoKeywords: [
      "pregnancy calculator", "due date calculator", "baby due date",
      "pregnancy due date estimator", "when is my baby due",
      "pregnancy week calculator", "trimester calculator",
      "free pregnancy calculator", "due date by lmp",
      "pregnancy timeline calculator"
,      "pregnancy calculator for students", "best due date calculator 2026", "free baby due date estimator online"        ],
    howToUse: [
      "Enter the first day of your last menstrual period (LMP).",
      "Click 'Calculate' to see your estimated due date.",
      "View your current week of pregnancy and trimester information.",
      "See key milestones and important dates throughout your pregnancy."
    ],
    faq: [
      { question: "How is the due date calculated?", answer: "The due date is calculated using Naegele's rule: add 280 days (40 weeks) to the first day of your last menstrual period. This is the standard method used by healthcare providers worldwide." },
      { question: "How accurate is the due date?", answer: "Only about 5% of babies are born on their exact due date. Most deliveries occur between 38-42 weeks. The due date is an estimate that helps track pregnancy progress and plan care." },
      { question: "What are the three trimesters?", answer: "First trimester: weeks 1-12 (organ development). Second trimester: weeks 13-26 (growth and movement). Third trimester: weeks 27-40 (final growth and preparation for birth)." },
      { question: "Can I use this if I know my conception date instead?", answer: "Yes. If you know your conception date, add 266 days (38 weeks) instead of 280 days. The LMP method is more commonly used because conception dates are harder to pinpoint." }
    ],
    nameTranslations: {
      es: "Calculadora de Fecha de Embarazo",
      ar: "حاسبة موعد الحمل",
    },
    descriptionTranslations: {
      es: "Estima tu fecha de parto según el último período menstrual con información de trimestres.",
      ar: "قدّري موعد ولادتك بناءً على آخر دورة شهرية مع معلومات الأشهر.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Embarazo Gratis Online - Estimador de Fecha de Parto 2026",
      ar: "حاسبة الحمل مجانية عبر الإنترنت - مقدّر موعد الولادة 2026",
    },
    seoDescriptionTranslations: {
      es: "Calcula tu fecha de parto estimada según tu último período menstrual. Consulta el desglose por trimestre y hitos clave del embarazo. Calculadora de embarazo online gratuita.",
      ar: "احسبي موعد ولادتك التقديري بناءً على آخر دورة شهرية. شاهدي تفصيل الأشهر والمحطات المهمة في الحمل. حاسبة حمل مجانية عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa el primer día de tu último período menstrual (LMP).",
        "Haz clic en 'Calcular' para ver tu fecha de parto estimada.",
        "Visualiza tu semana actual de embarazo e información del trimestre.",
        "Consulta hitos clave y fechas importantes durante tu embarazo.",
      ],
      ar: [
        "أدخلي اليوم الأول من آخر دورة شهرية.",
        "انقر على 'احسب' لرؤية موعد ولادتك التقديري.",
        "اعرضي أسبوعك الحالي من الحمل ومعلومات الأشهر.",
        "شاهدي المحطات المهمة والتواريخ الهامة خلال حملك.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo se calcula la fecha de parto?", answer: "La fecha de parto se calcula usando la regla de Naegele: suma 280 días (40 semanas) al primer día de tu último período menstrual. Este es el método estándar utilizado por profesionales de salud en todo el mundo." },
        { question: "¿Qué tan precisa es la fecha de parto?", answer: "Solo alrededor del 5% de los bebés nacen en su fecha de parto exacta. La mayoría de partos ocurren entre las 38-42 semanas. La fecha de parto es una estimación que ayuda a seguir el progreso del embarazo y planificar la atención." },
        { question: "¿Cuáles son los tres trimestres?", answer: "Primer trimestre: semanas 1-12 (desarrollo de órganos). Segundo trimestre: semanas 13-26 (crecimiento y movimiento). Tercer trimestre: semanas 27-40 (crecimiento final y preparación para el parto)." },
        { question: "¿Puedo usar esto si conozco mi fecha de concepción?", answer: "Sí. Si conoces tu fecha de concepción, suma 266 días (38 semanas) en lugar de 280 días. El método LMP se usa más comúnmente porque las fechas de concepción son más difíciles de precisar." }
      ],
      ar: [
        { question: "كيف يُحسب موعد الولادة؟", answer: "يُحسب موعد الولادة باستخدام قاعدة Naegele: إضافة 280 يوماً (40 أسبوعاً) إلى اليوم الأول من آخر دورة شهرية. هذه هي الطريقة القياسية المستخدمة من قبل مقدمي الرعاية الصحية حول العالم." },
        { question: "ما مدى دقة موعد الولادة؟", answer: "حوالي 5٪ فقط من الأطفال يولدون في موعد ولادتهم بالضبط. تحدث معظم الولادات بين الأسبوعين 38-42. موعد الولادة تقدير يساعد في تتبع تقدم الحمل وتخطيط الرعاية." },
        { question: "ما هي الأشهر الثلاثة؟", answer: "الأول: الأسابيع 1-12 (تطور الأعضاء). الثاني: الأسابيع 13-26 (النمو والحركة). الثالث: الأسابيع 27-40 (النمو النهائي والاستعداد للولادة)." },
        { question: "هل يمكنني استخدام هذا إذا كنت أعرف تاريخ الحمل؟", answer: "نعم. إذا كنتِ تعرفين تاريخ الحمل فأضيفي 266 يوماً (38 أسبوعاً) بدلاً من 280 يوماً. تُستخدم طريقة آخر دورة شهرية بشكل أكثر شيوعاً لأن تواريخ الحمل أصعب في التحديد." }
      ],
    },
  },
  {
    id: "random-number-generator",
    name: "Random Number Generator",
    description:
      "Generate random numbers within a specified range with customizable options.",
    category: "calculator",
    icon: "🎲",
    path: "/tools/random-number-generator",
    seoTitle: "Free Random Number Generator Online - Pick Random Numbers 2026",
    seoDescription: "Generate random numbers within any range. Choose quantity, allow duplicates, and sort results. Free online random number generator.",
    seoKeywords: [
      "random number generator", "generate random numbers",
      "random number picker", "random number between",
      "free random number generator", "rng online",
      "random number tool", "generate random integer",
      "random number generator online free", "pick a random number"
,      "random number generator for students", "best rng tool 2026", "free random number picker online"        ],
    howToUse: [
      "Set the minimum and maximum range for your random numbers.",
      "Choose how many numbers you want to generate.",
      "Optionally allow or disallow duplicate numbers.",
      "Click 'Generate' and copy the results."
    ],
    faq: [
      { question: "How are random numbers generated?", answer: "This tool uses the browser's cryptographically secure random number generator (crypto.getRandomValues) for true randomness, not predictable pseudo-random algorithms." },
      { question: "What is the difference between true random and pseudo-random?", answer: "True random numbers are generated from physical phenomena (like electronic noise) and are completely unpredictable. Pseudo-random numbers use mathematical formulas that can theoretically be predicted if you know the seed value." },
      { question: "Can I generate unique random numbers without duplicates?", answer: "Yes. Enable the 'no duplicates' option and the tool will ensure each generated number is unique within your specified range." },
      { question: "What is the maximum range I can use?", answer: "You can generate random numbers within any reasonable range. Very large ranges with 'no duplicates' enabled may be limited by the number of unique values available in that range." }
,      { question: "Is this random number generator truly random?", answer: "Our random number generator uses the browser's cryptographic random number API (Crypto.getRandomValues), which provides cryptographically secure random numbers suitable for most practical purposes." }     ],
    nameTranslations: {
      es: "Generador de Números Aleatorios",
      ar: "مولد الأرقام العشوائية",
    },
    descriptionTranslations: {
      es: "Genera números aleatorios dentro de un rango especificado con opciones personalizables.",
      ar: "أنشئ أرقاماً عشوائية ضمن نطاق محدد مع خيارات قابلة للتخصيص.",
    },
    seoTitleTranslations: {
      es: "Generador de Números Aleatorios Gratis Online - Elegir Números al Azar 2026",
      ar: "مولد الأرقام العشوائية مجاني عبر الإنترنت - اختيار أرقام عشوائية 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera números aleatorios dentro de cualquier rango. Elige cantidad, permite duplicados y ordena resultados. Generador de números aleatorios online gratuito.",
      ar: "أنشئ أرقاماً عشوائية ضمن أي نطاق. اختر الكمية واسمح بالتكرارات ورتّب النتائج. مولد أرقام عشوائية مجاني عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Establece el rango mínimo y máximo para tus números aleatorios.",
        "Elige cuántos números deseas generar.",
        "Opcionalmente permite o no permite números duplicados.",
        "Haz clic en 'Generar' y copia los resultados.",
      ],
      ar: [
        "حدد النطاق الأدنى والأقصى لأرقامك العشوائية.",
        "اختر عدد الأرقام التي تريد إنشاؤها.",
        "اختر السماح أو عدم السماح بالأرقام المكررة.",
        "انقر على 'إنشاء' وانسخ النتائج.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo se generan los números aleatorios?", answer: "Esta herramienta usa el generador de números aleatorios criptográficamente seguro del navegador (crypto.getRandomValues) para verdadera aleatoriedad, no algoritmos pseudoaleatorios predecibles." },
        { question: "¿Cuál es la diferencia entre verdadero aleatorio y pseudoaleatorio?", answer: "Los números verdaderamente aleatorios se generan a partir de fenómenos físicos (como ruido electrónico) y son completamente impredecibles. Los números pseudoaleatorios usan fórmulas matemáticas que teóricamente pueden predecirse si conoces el valor semilla." },
        { question: "¿Puedo generar números aleatorios únicos sin duplicados?", answer: "Sí. Habilita la opción 'sin duplicados' y la herramienta asegurará que cada número generado sea único dentro de tu rango especificado." },
        { question: "¿Cuál es el rango máximo que puedo usar?", answer: "Puedes generar números aleatorios dentro de cualquier rango razonable. Rangos muy grandes con 'sin duplicados' habilitado pueden estar limitados por el número de valores únicos disponibles en ese rango." },
        { question: "¿Es este generador de números aleatorios verdaderamente aleatorio?", answer: "Nuestro generador de números aleatorios usa la API de números aleatorios criptográficos del navegador (Crypto.getRandomValues), que proporciona números aleatorios criptográficamente seguros adecuados para la mayoría de propósitos prácticos." },
      ],
      ar: [
        { question: "كيف يتم إنشاء الأرقام العشوائية؟", answer: "تستخدم هذه الأداة مولد الأرقام العشوائية الآمن تشفيرياً في المتصفح (crypto.getRandomValues) لعشوائية حقيقية وليس خوارزميات عشوائية زائفة قابلة للتنبؤ." },
        { question: "ما الفرق بين العشوائي الحقيقي والعشوائي الزائف؟", answer: "تُولّد الأرقام العشوائية الحقيقية من ظواهر فيزيائية (مثل الضوضاء الإلكترونية) وهي غير قابلة للتنبؤ تماماً. تستخدم الأرقام العشوائية الزائفة صيغاً رياضية يمكن نظرياً التنبؤ بها إذا عرفت القيمة الأولية." },
        { question: "هل يمكنني إنشاء أرقام عشوائية فريدة بدون تكرارات؟", answer: "نعم. فعّل خيار 'بدون تكرارات' وستضمن الأداة أن كل رقم مُنشأ فريد ضمن النطاق المحدد." },
        { question: "ما هو النطاق الأقصى الذي يمكنني استخدامه؟", answer: "يمكنك إنشاء أرقام عشوائية ضمن أي نطاق معقول. النطاقات الكبيرة جداً مع تفعيل 'بدون تكرارات' قد تكون محدودة بعدد القيم الفريدة المتاحة في ذلك النطاق." },
        { question: "هل مولد الأرقام العشوائية هذا عشوائي حقاً؟", answer: "يستخدم مولد الأرقام العشوائية لدينا واجهة الأرقام العشوائية التشفيرية للمتصفح (Crypto.getRandomValues) التي توفر أرقاماً عشوائية آمنة تشفيرياً مناسبة لمعظم الأغراض العملية." },
      ],
    },
  },
  {
    id: "zodiac-sign",
    name: "Zodiac Sign Finder",
    description:
      "Find your zodiac sign by birth date with traits and compatibility info.",
    category: "text",
    icon: "⭐",
    path: "/tools/zodiac-sign",
    seoTitle: "Free Zodiac Sign Calculator Online - Star Sign Finder 2026",
    seoDescription: "Find your zodiac sign by entering your birth date. Learn about your star sign traits, strengths, weaknesses, and compatibility with other signs.",
    seoKeywords: [
      "zodiac sign finder", "what is my zodiac sign", "star sign calculator",
      "find my zodiac sign", "zodiac sign by birthday", "astrology sign finder",
      "zodiac traits", "sun sign calculator",
      "free zodiac sign finder", "what star sign am i"
,      "zodiac sign for students", "best star sign calculator 2026", "free what is my zodiac sign tool"        ],
    howToUse: [
      "Enter your birth date using the date picker.",
      "View your zodiac sign with its symbol and date range.",
      "Read about your sign's personality traits, strengths, and weaknesses.",
      "Check compatibility with other zodiac signs."
    ],
    faq: [
      { question: "What are the 12 zodiac signs?", answer: "The 12 zodiac signs are: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces. Each sign covers approximately one month of the year." },
      { question: "How do I know which zodiac sign I am?", answer: "Your zodiac sign (sun sign) is determined by your birth date. Enter your birthday in this tool and it will instantly tell you your sign along with detailed information." },
      { question: "What if my birthday is on a cusp?", answer: "If your birthday falls on the transition date between two signs, the exact time and location of your birth determine your sign. This tool uses the standard date ranges; for precise determination, consult an astrological chart." },
      { question: "Are zodiac signs based on science?", answer: "Zodiac signs are part of astrology, which is considered a pseudoscience. While many people find meaning and entertainment in zodiac traits, there is no scientific evidence supporting astrological predictions." }
,      { question: "How do I find my zodiac sign?", answer: "Enter your birth date into our zodiac calculator and it will instantly tell you your sun sign. Each zodiac sign corresponds to a specific date range -- for example, Aries is March 21 to April 19." }     ],
    nameTranslations: {
      es: "Buscador de Signo Zodiacal",
      ar: "مكتشف الأبراج",
    },
    descriptionTranslations: {
      es: "Encuentra tu signo zodiacal por fecha de nacimiento con rasgos e información de compatibilidad.",
      ar: "اعرف برجك حسب تاريخ الميلاد مع الصفات ومعلومات التوافق.",
    },
    seoTitleTranslations: {
      es: "Calculadora de Signo Zodiacal Gratis Online - Buscador de Signo Estelar 2026",
      ar: "حاسبة البرج مجانية عبر الإنترنت - مكتشف الأبراج 2026",
    },
    seoDescriptionTranslations: {
      es: "Encuentra tu signo zodiacal ingresando tu fecha de nacimiento. Aprende sobre los rasgos de tu signo, fortalezas, debilidades y compatibilidad con otros signos.",
      ar: "اعرف برجك بإدخال تاريخ ميلادك. تعرّف على صفات برجك ونقاط القوة والضعف والتوافق مع الأبراج الأخرى.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu fecha de nacimiento usando el selector de fechas.",
        "Visualiza tu signo zodiacal con su símbolo y rango de fechas.",
        "Lee sobre los rasgos de personalidad, fortalezas y debilidades de tu signo.",
        "Consulta la compatibilidad con otros signos zodiacales.",
      ],
      ar: [
        "أدخل تاريخ ميلادك باستخدام منتقي التاريخ.",
        "اعرض برجك مع رمزه والفترة الزمنية الخاصة به.",
        "اقرأ عن صفات شخصيتك ونقاط قوتك وضعفك الخاصة ببرجك.",
        "تحقق من التوافق مع الأبراج الأخرى.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cuáles son los 12 signos zodiacales?", answer: "Los 12 signos zodiacales son: Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario y Piscis. Cada signo cubre aproximadamente un mes del año." },
        { question: "¿Cómo sé qué signo zodiacal soy?", answer: "Tu signo zodiacal (signo solar) está determinado por tu fecha de nacimiento. Ingresa tu cumpleaños en esta herramienta y te dirá instantáneamente tu signo junto con información detallada." },
        { question: "¿Qué pasa si mi cumpleaños está en una cúspide?", answer: "Si tu cumpleaños cae en la fecha de transición entre dos signos, la hora y ubicación exactas de tu nacimiento determinan tu signo. Esta herramienta usa rangos de fechas estándar; para una determinación precisa, consulta una carta astrológica." },
        { question: "¿Los signos zodiacales se basan en la ciencia?", answer: "Los signos zodiacales son parte de la astrología, que se considera una pseudociencia. Aunque muchas personas encuentran significado y entretenimiento en los rasgos zodiacales, no hay evidencia científica que respalde las predicciones astrológicas." },
        { question: "¿Cómo encuentro mi signo zodiacal?", answer: "Ingresa tu fecha de nacimiento en nuestra calculadora zodiacal y te dirá instantáneamente tu signo solar. Cada signo zodiacal corresponde a un rango de fechas específico — por ejemplo, Aries es del 21 de marzo al 19 de abril." },
      ],
      ar: [
        { question: "ما هي الأبراج الـ 12؟", answer: "الأبراج الـ 12 هي: الحمل والثور والجواب والسرطان والأسد والعذراء والميزان والعقرب والقوس والجدي والدلو والحوت. كل برج يغطي حوالي شهر من السنة." },
        { question: "كيف أعرف ما هو برجي؟", answer: "يتم تحديد برجك (البرج الشمسي) حسب تاريخ ميلادك. أدخل تاريخ ميلادك في هذه الأداة وستخبرك فوراً ببرجك مع معلومات مفصلة." },
        { question: "ماذا لو كان تاريخ ميلادي على الحدود بين برجين؟", answer: "إذا وقع تاريخ ميلادك على تاريخ الانتقال بين برجين فإن الوقت والمكان الدقيقين لميلادك يحددان برجك. تستخدم هذه الأداة النطاقات الزمنية القياسية؛ للتحديد الدقيق استشر خريطة فلكية." },
        { question: "هل الأبراج مبنية على العلم؟", answer: "الأبراج جزء من علم التنجيم الذي يُعتبر علماً زائفاً. بينما يجد الكثير من الناس معنى وترفيه في صفات الأبراج لا يوجد دليل علمي يدعم التنبؤات الفلكية." },
        { question: "كيف أجد برجي؟", answer: "أدخل تاريخ ميلادك في حاسبة الأبراج لدينا وستخبرك فوراً ببرجك الشمسي. كل برج يتوافق مع نطاق تاريخي محدد -- على سبيل المثال الحمل من 21 مارس إلى 19 أبريل." },
      ],
    },
  },
  {
    id: "random-name-generator",
    name: "Random Name Generator",
    description:
      "Generate random names for characters, profiles, or testing.",
    category: "text",
    icon: "👤",
    path: "/tools/random-name-generator",
    seoTitle: "Free Random Name Generator Online - Character Name Creator 2026",
    seoDescription: "Generate random first and last names for characters, game profiles, testing, or brainstorming. Choose gender and quantity. Free online name generator.",
    seoKeywords: [
      "random name generator", "generate random names",
      "random first name generator", "random last name generator",
      "character name generator", "fake name generator",
      "free name generator", "random names online",
      "name generator tool", "random person name generator"
,      "random name generator for students", "best name generator 2026", "free character name generator online"        ],
    howToUse: [
      "Choose the gender: male, female, or both.",
      "Set the number of names you want to generate.",
      "Click 'Generate' to create random names instantly.",
      "Copy any name for use in your project, story, or testing data."
    ],
    faq: [
      { question: "Where do the names come from?", answer: "The names are drawn from a curated database of common first names and surnames from various cultures and backgrounds. Combinations are generated randomly to create unique name pairings." },
      { question: "Can I generate names for specific cultures?", answer: "This tool generates a diverse mix of names from various cultural backgrounds. For culture-specific names, you may want to use a specialized name generator." },
      { question: "Are these real people's names?", answer: "The first names and last names are real names, but the combinations are generated randomly. They do not correspond to specific real individuals." },
      { question: "What can I use these random names for?", answer: "Common uses include: character names for writing, test data for software development, placeholder names for designs, game character names, pen names, and brainstorming inspiration." }
,      { question: "Can I generate names for characters in my story?", answer: "Absolutely! Our random name generator creates realistic first and last names suitable for characters in stories, games, D&D campaigns, or any creative project. Click to generate a new name instantly." }     ],
    nameTranslations: {
      es: "Generador de Nombres Aleatorios",
      ar: "مولد الأسماء العشوائية",
    },
    descriptionTranslations: {
      es: "Genera nombres aleatorios para personajes, perfiles o pruebas.",
      ar: "أنشئ أسماء عشوائية للشخصيات أو الملفات الشخصية أو الاختبار.",
    },
    seoTitleTranslations: {
      es: "Generador de Nombres Aleatorios Gratis Online - Creador de Nombres de Personajes 2026",
      ar: "مولد الأسماء العشوائية مجاني عبر الإنترنت - مبتكر أسماء الشخصيات 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera nombres y apellidos aleatorios para personajes, perfiles de juegos, pruebas o lluvia de ideas. Elige género y cantidad. Generador de nombres online gratuito.",
      ar: "أنشئ أسماء أولية وعائلية عشوائية للشخصيات وملفات الألعاب والاختبار أو العصف الذهني. اختر الجنس والكمية. مولد أسماء مجاني عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Elige el género: masculino, femenino o ambos.",
        "Establece la cantidad de nombres que deseas generar.",
        "Haz clic en 'Generar' para crear nombres aleatorios al instante.",
        "Copia cualquier nombre para usarlo en tu proyecto, historia o datos de prueba.",
      ],
      ar: [
        "اختر الجنس: ذكر أو أنثى أو كلاهما.",
        "حدد عدد الأسماء التي تريد إنشاؤها.",
        "انقر على 'إنشاء' لتوليد أسماء عشوائية فوراً.",
        "انسخ أي اسم لاستخدامه في مشروعك أو قصتك أو بيانات الاختبار.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿De dónde vienen los nombres?", answer: "Los nombres provienen de una base de datos curada de nombres comunes y apellidos de diversas culturas y orígenes. Las combinaciones se generan aleatoriamente para crear parejas de nombres únicas." },
        { question: "¿Puedo generar nombres para culturas específicas?", answer: "Esta herramienta genera una mezcla diversa de nombres de diversos orígenes culturales. Para nombres específicos de una cultura, es posible que desees usar un generador de nombres especializado." },
        { question: "¿Son nombres de personas reales?", answer: "Los nombres y apellidos son nombres reales, pero las combinaciones se generan aleatoriamente. No corresponden a individuos reales específicos." },
        { question: "¿Para qué puedo usar estos nombres aleatorios?", answer: "Los usos comunes incluyen: nombres de personajes para escritura, datos de prueba para desarrollo de software, nombres de marcador de posición para diseños, nombres de personajes de juegos, seudónimos e inspiración para lluvia de ideas." },
        { question: "¿Puedo generar nombres para personajes en mi historia?", answer: "¡Absolutamente! Nuestro generador de nombres aleatorios crea nombres realistas adecuados para personajes en historias, juegos, campañas de D&D o cualquier proyecto creativo. Haz clic para generar un nuevo nombre al instante." },
      ],
      ar: [
        { question: "من أين تأتي الأسماء؟", answer: "الأسماء مستمدة من قاعدة بيانات منتقاة من الأسماء الأولى الشائعة وألقاب العائلة من ثقافات وخلفيات متنوعة. يتم إنشاء التركيبات عشوائياً لإنشاء اقترانات أسماء فريدة." },
        { question: "هل يمكنني إنشاء أسماء لثقافات محددة؟", answer: "تنشئ هذه الأداة مزيجاً متنوعاً من الأسماء من خلفيات ثقافية متنوعة. للحصول على أسماء محددة الثقافة قد ترغب في استخدام مولد أسماء متخصص." },
        { question: "هل هذه أسماء أشخاص حقيقيين؟", answer: "الأسماء الأولى وألقاب العائلة أسماء حقيقية لكن التركيبات يتم إنشاؤها عشوائياً. لا تتوافق مع أشخاص حقيقيين محددين." },
        { question: "ماذا يمكنني أن أفعل بهذه الأسماء العشوائية؟", answer: "الاستخدامات الشائعة تشمل: أسماء الشخصيات للكتابة وبيانات الاختبار لتطوير البرمجيات وأسماء نائبة للتصاميم وأسماء شخصيات الألعاب والأسماء المستوحاة وإلهام العصف الذهني." },
        { question: "هل يمكنني إنشاء أسماء لشخصيات في قصتي؟", answer: "بالتأكيد! ينشئ مولد الأسماء العشوائية لدينا أسماء أولية وعائلية واقعية مناسبة للشخصيات في القصص أو الألعاب أو حملات D&D أو أي مشروع إبداعي. انقر لتوليد اسم جديد فوراً." },
      ],
    },
  },
  {
    id: "fancy-text-generator",
    name: "Fancy Text Generator",
    description:
      "Convert text to fancy Unicode fonts for social media bios and posts.",
    category: "text",
    icon: "✨",
    path: "/tools/fancy-text-generator",
    seoTitle: "Free Fancy Text Generator Online - Instagram Font Generator 2026",
    seoDescription: "Convert text to fancy Unicode fonts and stylish text for Instagram, Twitter, TikTok, and Facebook bios. Free online fancy text generator.",
    seoKeywords: [
      "fancy text generator", "stylish text generator", "unicode font generator",
      "cool text for instagram", "fancy font generator", "aesthetic text",
      "text style generator", "fancy text for social media",
      "free fancy text generator", "instagram bio font generator"
,      "fancy text for students", "best fancy text generator 2026", "free instagram bio font generator online"        ],
    howToUse: [
      "Enter your text in the input field.",
      "View your text converted to multiple fancy Unicode font styles.",
      "Click any style to copy it to your clipboard.",
      "Paste the fancy text into your social media bio, post, or message."
    ],
    faq: [
      { question: "How does the fancy text generator work?", answer: "The tool maps each letter of your text to special Unicode characters that look like styled versions of regular letters. These aren't actual fonts — they're mathematical alphanumeric symbols that most platforms display correctly." },
      { question: "Will fancy text work on all social media platforms?", answer: "Fancy Unicode text works on most platforms including Instagram, Twitter, TikTok, Facebook, and WhatsApp. However, some older devices may not render all Unicode characters correctly." },
      { question: "Does fancy text affect accessibility?", answer: "Yes. Screen readers may not read fancy Unicode text correctly, as they interpret the mathematical symbols rather than the intended letters. It's best used sparingly for emphasis rather than for important information." },
      { question: "Can I use fancy text in emails or websites?", answer: "You can use fancy Unicode text in emails and websites, but rendering depends on the recipient's device and email client. It's safest for social media platforms where Unicode support is consistent." }
,      { question: "Can I use fancy text on Instagram and social media?", answer: "Yes! The fancy text generated by our tool uses Unicode characters that work on Instagram bios, Facebook posts, Twitter/X, WhatsApp, TikTok, and most other platforms. Just copy and paste." }     ],
    nameTranslations: {
      es: "Generador de Texto Elegante",
      ar: "مولد النصوص المزخرفة",
    },
    descriptionTranslations: {
      es: "Convierte texto a fuentes Unicode elegantes para biografías y publicaciones en redes sociales.",
      ar: "حول النص إلى خطوط يونيكود مزخرفة لسير الذات والمنشورات على وسائل التواصل الاجتماعي.",
    },
    seoTitleTranslations: {
      es: "Generador de Texto Elegante Gratis Online - Generador de Fuentes para Instagram 2026",
      ar: "مولد النصوص المزخرفة مجاني عبر الإنترنت - مولد خطوط Instagram 2026",
    },
    seoDescriptionTranslations: {
      es: "Convierte texto a fuentes Unicode elegantes y texto con estilo para biografías de Instagram, Twitter, TikTok y Facebook. Generador de texto elegante online gratuito.",
      ar: "حول النص إلى خطوط يونيكود مزخرفة ونصوص أنيقة لسير Instagram وTwitter وTikTok وFacebook. مولد نصوص مزخرفة مجاني عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu texto en el campo de entrada.",
        "Visualiza tu texto convertido a múltiples estilos de fuentes Unicode elegantes.",
        "Haz clic en cualquier estilo para copiarlo al portapapeles.",
        "Pega el texto elegante en tu biografía de redes sociales, publicación o mensaje.",
      ],
      ar: [
        "أدخل نصك في حقل الإدخال.",
        "اعرض نصك محولاً إلى أنماط خطوط يونيكود مزخرفة متعددة.",
        "انقر على أي نمط لنسخه إلى الحافظة.",
        "الصق النص المزخرف في سيرتك الذاتية أو منشورك أو رسالتك على وسائل التواصل الاجتماعي.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo funciona el generador de texto elegante?", answer: "La herramienta mapea cada letra de tu texto a caracteres Unicode especiales que parecen versiones estilizadas de letras normales. Estas no son fuentes reales — son símbolos alfanuméricos matemáticos que la mayoría de las plataformas muestran correctamente." },
        { question: "¿Funcionará el texto elegante en todas las plataformas de redes sociales?", answer: "El texto Unicode elegante funciona en la mayoría de las plataformas incluyendo Instagram, Twitter, TikTok, Facebook y WhatsApp. Sin embargo, algunos dispositivos más antiguos pueden no renderizar todos los caracteres Unicode correctamente." },
        { question: "¿El texto elegante afecta la accesibilidad?", answer: "Sí. Los lectores de pantalla pueden no leer correctamente el texto Unicode elegante, ya que interpretan los símbolos matemáticos en lugar de las letras previstas. Es mejor usarlo con moderación para énfasis en lugar de para información importante." },
        { question: "¿Puedo usar texto elegante en correos electrónicos o sitios web?", answer: "Puedes usar texto Unicode elegante en correos electrónicos y sitios web, pero la representación depende del dispositivo del destinatario y del cliente de correo. Es más seguro para plataformas de redes sociales donde el soporte Unicode es consistente." },
        { question: "¿Puedo usar texto elegante en Instagram y redes sociales?", answer: "¡Sí! El texto elegante generado por nuestra herramienta usa caracteres Unicode que funcionan en biografías de Instagram, publicaciones de Facebook, Twitter/X, WhatsApp, TikTok y la mayoría de las demás plataformas. Solo copia y pega." },
      ],
      ar: [
        { question: "كيف يعمل مولد النصوص المزخرفة؟", answer: "تقوم الأداة بتعيين كل حرف من نصك إلى أحرف يونيكود خاصة تبدو كنسخ منسقة من الحروف العادية. هذه ليست خطوطاً حقيقية — إنها رموز أبجدية رقمية رياضية تُعرض بشكل صحيح على معظم المنصات." },
        { question: "هل سيعمل النص المزخرف على جميع منصات التواصل الاجتماعي؟", answer: "يعمل نص يونيكود المزخرف على معظم المنصات بما في ذلك Instagram وTwitter وTikTok وFacebook وWhatsApp. ومع ذلك قد لا تعرض بعض الأجهزة القديمة جميع أحرف يونيكود بشكل صحيح." },
        { question: "هل يؤثر النص المزخرف على إمكانية الوصول؟", answer: "نعم. قد لا تقرأ قارئات الشاشة النص المزخرف بشكل صحيح لأنها تفسر الرموز الرياضية بدلاً من الحروف المقصودة. من الأفضل استخدامه باعتدال للتأكيد بدلاً من المعلومات المهمة." },
        { question: "هل يمكنني استخدام النص المزخرف في رسائل البريد الإلكتروني أو المواقع؟", answer: "يمكنك استخدام نص يونيكود المزخرف في رسائل البريد الإلكتروني والمواقع لكن العرض يعتمد على جهاز المستلم وعميل البريد الإلكتروني. الأكثر أماناً لمنصات التواصل الاجتماعي حيث دعم يونيكود متسق." },
        { question: "هل يمكنني استخدام النص المزخرف على Instagram ووسائل التواصل الاجتماعي؟", answer: "نعم! يستخدم النص المزخرف المُنشأ بأداتنا أحرف يونيكود تعمل على سير Instagram ومنشورات Facebook وTwitter/X وWhatsApp وTikTok ومعظم المنصات الأخرى. فقط انسخ والصق." },
      ],
    },
  },
  {
    id: "hashtag-generator",
    name: "Hashtag Generator",
    description:
      "Generate relevant hashtags for Instagram, Twitter, and TikTok.",
    category: "text",
    icon: "#️⃣",
    path: "/tools/hashtag-generator",
    seoTitle: "Free Hashtag Generator Online - Instagram Hashtags Tool 2026",
    seoDescription: "Generate relevant hashtags for Instagram, Twitter, TikTok, and Facebook based on your topic or keywords. Free online hashtag generator to boost your reach.",
    seoKeywords: [
      "hashtag generator", "instagram hashtag generator",
      "tiktok hashtag generator", "twitter hashtag generator",
      "generate hashtags", "hashtag finder", "hashtag tool",
      "free hashtag generator", "best hashtags for instagram",
      "hashtag generator online"
,      "hashtag generator for students", "best hashtag generator 2026", "free instagram hashtags tool online"        ],
    howToUse: [
      "Enter your topic, keyword, or describe your content.",
      "View a list of relevant and trending hashtags generated for your topic.",
      "Copy all hashtags or select specific ones to use.",
      "Paste the hashtags into your social media post to increase discoverability."
    ],
    faq: [
      { question: "How many hashtags should I use on Instagram?", answer: "Instagram allows up to 30 hashtags per post. Research suggests 15-20 well-chosen hashtags perform best. Use a mix of popular, niche, and branded hashtags for optimal reach." },
      { question: "How many hashtags should I use on TikTok?", answer: "TikTok recommends 3-5 hashtags per video. Use a mix of trending hashtags and niche-specific tags to maximize discoverability without looking spammy." },
      { question: "How does this hashtag generator work?", answer: "The generator analyzes your input keywords and suggests relevant hashtags based on topic matching, trending patterns, and common hashtag combinations used in your niche." },
      { question: "Can I use the same hashtags for every post?", answer: "It's better to vary your hashtags between posts. Instagram may flag accounts that use identical hashtag sets repeatedly as spam. Rotate between relevant hashtag groups for best results." }
    ],
    nameTranslations: {
      es: "Generador de Hashtags",
      ar: "مولد الهاشتاقات",
    },
    descriptionTranslations: {
      es: "Genera hashtags relevantes para Instagram, Twitter y TikTok.",
      ar: "أنشئ هاشتاقات ذات صلة لـ Instagram وTwitter وTikTok.",
    },
    seoTitleTranslations: {
      es: "Generador de Hashtags Gratis Online - Herramienta de Hashtags para Instagram 2026",
      ar: "مولد الهاشتاقات مجاني عبر الإنترنت - أداة هاشتاقات Instagram 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera hashtags relevantes para Instagram, Twitter, TikTok y Facebook según tu tema o palabras clave. Generador de hashtags online gratuito para aumentar tu alcance.",
      ar: "أنشئ هاشتاقات ذات صلة لـ Instagram وTwitter وTikTok وFacebook بناءً على موضوعك أو كلماتك المفتاحية. مولد هاشتاقات مجاني عبر الإنترنت لزيادة وصولك.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa tu tema, palabra clave o describe tu contenido.",
        "Visualiza una lista de hashtags relevantes y en tendencia generados para tu tema.",
        "Copia todos los hashtags o selecciona específicos para usar.",
        "Pega los hashtags en tu publicación de redes sociales para aumentar la descubribilidad.",
      ],
      ar: [
        "أدخل موضوعك أو كلمتك المفتاحية أو صف محتواك.",
        "اعرض قائمة بالهاشتاقات ذات الصلة والرائجة المُنشأة لموضوعك.",
        "انسخ جميع الهاشتاقات أو اختر محددة للاستخدام.",
        "الصق الهاشتاقات في منشورك على وسائل التواصل الاجتماعي لزيادة الاكتشاف.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cuántos hashtags debo usar en Instagram?", answer: "Instagram permite hasta 30 hashtags por publicación. Las investigaciones sugieren que 15-20 hashtags bien elegidos tienen mejor rendimiento. Usa una mezcla de hashtags populares, de nicho y de marca para un alcance óptimo." },
        { question: "¿Cuántos hashtags debo usar en TikTok?", answer: "TikTok recomienda 3-5 hashtags por video. Usa una mezcla de hashtags en tendencia y etiquetas específicas de nicho para maximizar la descubribilidad sin parecer spam." },
        { question: "¿Cómo funciona este generador de hashtags?", answer: "El generador analiza tus palabras clave de entrada y sugiere hashtags relevantes basados en coincidencia de temas, patrones en tendencia y combinaciones comunes de hashtags usadas en tu nicho." },
        { question: "¿Puedo usar los mismos hashtags para cada publicación?", answer: "Es mejor variar tus hashtags entre publicaciones. Instagram puede marcar cuentas que usan conjuntos idénticos de hashtags repetidamente como spam. Rota entre grupos de hashtags relevantes para mejores resultados." }
      ],
      ar: [
        { question: "كم هاشتاج يجب أن أستخدم على Instagram؟", answer: "يسمح Instagram بما يصل إلى 30 هاشتاج لكل منشور. تشير الأبحاث إلى أن 15-20 هاشتاج مختارة بعناية تحقق أفضل أداء. استخدم مزيجاً من الهاشتاقات الشائعة والمتخصصة والعلامة التجارية لأفضل وصول." },
        { question: "كم هاشتاج يجب أن أستخدم على TikTok؟", answer: "يوصي TikTok بـ 3-5 هاشتاج لكل فيديو. استخدم مزيجاً من الهاشتاقات الرائجة والعلامات المتخصصة لزيادة الاكتشاف دون أن تبدو كمحتوى مزعج." },
        { question: "كيف يعمل مولد الهاشتاقات هذا؟", answer: "يحلل المولد كلماتك المفتاحية المقترحة ويقترح هاشتاقات ذات صلة بناءً على تطابق الموضوع وأنماط الرواج وتركيبات الهاشتاقات الشائعة المستخدمة في مجالك." },
        { question: "هل يمكنني استخدام نفس الهاشتاقات لكل منشور؟", answer: "من الأفضل تنويع هاشتاقاتك بين المنشورات. قد يُعلّم Instagram الحسابات التي تستخدم مجموعات هاشتاقات متطابقة بشكل متكرر كمحتوى مزعج. تناوب بين مجموعات الهاشتاقات ذات الصلة لأفضل النتائج." }
      ],
    },
  },
  {
    id: "youtube-thumbnail",
    name: "YouTube Thumbnail Size Tool",
    description:
      "YouTube thumbnail size guide and preview tool with best practice tips.",
    category: "developer",
    icon: "🎬",
    path: "/tools/youtube-thumbnail",
    seoTitle: "Free YouTube Thumbnail Maker Online - Thumbnail Specs Tool 2026",
    seoDescription: "Complete guide to YouTube thumbnail dimensions, file size limits, and best practices. Free thumbnail size checker and preview tool for YouTube creators.",
    seoKeywords: [
      "youtube thumbnail size", "youtube thumbnail dimensions",
      "youtube thumbnail guide", "best youtube thumbnail size",
      "youtube thumbnail maker", "youtube thumbnail template",
      "youtube thumbnail specs", "youtube thumbnail best practices",
      "youtube thumbnail checker", "youtube thumbnail tool"
,      "youtube thumbnail for students", "best youtube thumbnail tool 2026", "free youtube thumbnail specs online"        ],
    howToUse: [
      "Review the recommended YouTube thumbnail dimensions and specifications.",
      "Use the preview tool to see how your thumbnail will look on different devices.",
      "Follow the best practice tips for creating clickable thumbnails.",
      "Ensure your image meets YouTube's requirements before uploading."
    ],
    faq: [
      { question: "What is the ideal YouTube thumbnail size?", answer: "The recommended YouTube thumbnail size is 1280 × 720 pixels (16:9 aspect ratio), with a minimum width of 640 pixels. The file should be under 2MB and in JPG, PNG, GIF, or BMP format." },
      { question: "What makes a good YouTube thumbnail?", answer: "Good thumbnails use high-contrast colors, readable text (large fonts), expressive faces, and clear visual hierarchy. The thumbnail should be understandable even at small sizes on mobile devices." },
      { question: "Can I change a thumbnail after uploading a video?", answer: "Yes. You can change your YouTube thumbnail at any time by going to YouTube Studio, selecting the video, clicking 'Edit', and uploading a new thumbnail image." },
      { question: "Do thumbnails affect video performance?", answer: "Yes. Thumbnails significantly impact click-through rate (CTR), which is one of the most important ranking factors on YouTube. A compelling thumbnail can dramatically increase views." }
    ],
    nameTranslations: {
      es: "Herramienta de Tamaño de Miniatura de YouTube",
      ar: "أداة حجم صورة YouTube المصغرة",
    },
    descriptionTranslations: {
      es: "Guía de tamaño de miniaturas de YouTube y herramienta de vista previa con consejos de mejores prácticas.",
      ar: "دليل حجم الصور المصغرة لـ YouTube وأداة معاينة مع نصائح أفضل الممارسات.",
    },
    seoTitleTranslations: {
      es: "Creador de Miniaturas de YouTube Gratis Online - Herramienta de Especificaciones 2026",
      ar: "أداة الصور المصغرة لـ YouTube مجانية عبر الإنترنت - أداة مواصفات الصور المصغرة 2026",
    },
    seoDescriptionTranslations: {
      es: "Guía completa de dimensiones de miniaturas de YouTube, límites de tamaño de archivo y mejores prácticas. Herramienta gratuita de verificación de tamaño de miniaturas y vista previa para creadores de YouTube.",
      ar: "دليل شامل لأبعاد الصور المصغرة لـ YouTube وحدود حجم الملفات وأفضل الممارسات. أداة مجانية للتحقق من حجم الصور المصغرة ومعاينتها لمنشئي محتوى YouTube.",
    },
    howToUseTranslations: {
      es: [
        "Revisa las dimensiones y especificaciones recomendadas para miniaturas de YouTube.",
        "Usa la herramienta de vista previa para ver cómo se verá tu miniatura en diferentes dispositivos.",
        "Sigue los consejos de mejores prácticas para crear miniaturas clicables.",
        "Asegúrate de que tu imagen cumpla con los requisitos de YouTube antes de subirla.",
      ],
      ar: [
        "راجع الأبعاد والمواصفات الموصى بها للصور المصغرة لـ YouTube.",
        "استخدم أداة المعاينة لمعرفة كيف ستبدو صورتك المصغرة على أجهزة مختلفة.",
        "اتبع نصائح أفضل الممارسات لإنشاء صور مصغرة جذابة للنقر.",
        "تأكد من أن صورتك تلبي متطلبات YouTube قبل الرفع.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cuál es el tamaño ideal de miniatura de YouTube?", answer: "El tamaño recomendado de miniatura de YouTube es 1280 × 720 píxeles (relación de aspecto 16:9), con un ancho mínimo de 640 píxeles. El archivo debe ser menor de 2MB y en formato JPG, PNG, GIF o BMP." },
        { question: "¿Qué hace una buena miniatura de YouTube?", answer: "Las buenas miniaturas usan colores de alto contraste, texto legible (fuentes grandes), rostros expresivos y jerarquía visual clara. La miniatura debe ser comprensible incluso en tamaños pequeños en dispositivos móviles." },
        { question: "¿Puedo cambiar una miniatura después de subir un video?", answer: "Sí. Puedes cambiar tu miniatura de YouTube en cualquier momento yendo a YouTube Studio, seleccionando el video, haciendo clic en 'Editar' y subiendo una nueva imagen de miniatura." },
        { question: "¿Las miniaturas afectan el rendimiento del video?", answer: "Sí. Las miniaturas impactan significativamente la tasa de clics (CTR), que es uno de los factores de clasificación más importantes en YouTube. Una miniatura atractiva puede aumentar dramáticamente las vistas." }
      ],
      ar: [
        { question: "ما هو الحجم المثالي للصورة المصغرة لـ YouTube؟", answer: "الحجم الموصى به للصورة المصغرة لـ YouTube هو 1280 × 720 بكسل (نسبة عرض إلى ارتفاع 16:9) بعرض أدنى 640 بكسل. يجب أن يكون حجم الملف أقل من 2 ميجابايت وبصيغة JPG أو PNG أو GIF أو BMP." },
        { question: "ما الذي يجعل الصورة المصغرة جيدة لـ YouTube؟", answer: "تستخدم الصور المصغرة الجيدة ألواناً عالية التباين ونصاً قابلاً للقراءة (خطوط كبيرة) ووجوهاً معبرة وتسلسلاً هرمياً بصرياً واضحاً. يجب أن تكون الصورة المصغرة مفهومة حتى بالأحجام الصغيرة على الأجهزة المحمولة." },
        { question: "هل يمكنني تغيير صورة مصغرة بعد رفع فيديو؟", answer: "نعم. يمكنك تغيير صورتك المصغرة لـ YouTube في أي وقت بالذهاب إلى YouTube Studio واختيار الفيديو والنقر على 'تحرير' ورفع صورة مصغرة جديدة." },
        { question: "هل تؤثر الصور المصغرة على أداء الفيديو؟", answer: "نعم. تؤثر الصور المصغرة بشكل كبير على معدل النقر إلى الظهور (CTR) وهو من أهم عوامل الترتيب على YouTube. يمكن للصورة المصغرة الجذابة أن تزيد المشاهدات بشكل كبير." }
      ],
    },
  },
  {
    id: "perpetual-calendar",
    name: "Perpetual Calendar",
    description:
      "Interactive calendar with world holidays, week numbers, and historical events on any date.",
    category: "calculator",
    icon: "📅",
    path: "/tools/perpetual-calendar",
    seoTitle: "Free Perpetual Calendar Online - Calendar Lookup Tool 2026",
    seoDescription: "Interactive perpetual calendar for any date. Check world holidays, week numbers, day of the week, and historical events. Free online calendar tool.",
    seoKeywords: [
      "perpetual calendar", "online calendar", "calendar for any date",
      "world holiday calendar", "week number calendar",
      "what day of the week", "calendar lookup tool",
      "free perpetual calendar", "interactive calendar online",
      "historical events calendar"
,      "perpetual calendar for students", "best perpetual calendar 2026", "free calendar lookup tool online"        ],
    howToUse: [
      "Navigate to any year and month using the calendar controls.",
      "Click any date to see detailed information including day of week and week number.",
      "Highlighted dates show world holidays and observances.",
      "Use the search feature to find specific dates or holidays."
    ],
    faq: [
      { question: "What is a perpetual calendar?", answer: "A perpetual calendar is a calendar that can display any date across any year, past or future. Unlike annual calendars that show only one year, a perpetual calendar lets you explore dates across centuries." },
      { question: "What holidays does this calendar show?", answer: "The calendar includes major international holidays, national observances from various countries, and cultural celebrations. Holiday coverage continues to expand." },
      { question: "Can I find what day of the week a historical date was?", answer: "Yes. Navigate to any date in history and the calendar will show you exactly what day of the week it was. This is useful for historical research and genealogy." },
      { question: "How are week numbers calculated?", answer: "Week numbers follow the ISO 8601 standard, where week 1 is the week containing the first Thursday of the year. This is the international standard used in most countries." }
,      { question: "How far back can this calendar go?", answer: "Our perpetual calendar supports dates from year 1 to 9999. It uses the Gregorian calendar system and can tell you the day of the week for any date in that range." }     ],
    nameTranslations: {
      es: "Calendario Perpetuo",
      ar: "التقويم الدائم",
    },
    descriptionTranslations: {
      es: "Calendario interactivo con feriados mundiales, números de semana y eventos históricos en cualquier fecha.",
      ar: "تقويم تفاعلي مع العطل العالمية وأرقام الأسابيع والأحداث التاريخية في أي تاريخ.",
    },
    seoTitleTranslations: {
      es: "Calendario Perpetuo Gratis Online - Herramienta de Consulta de Calendario 2026",
      ar: "التقويم الدائم مجاني عبر الإنترنت - أداة بحث في التقويم 2026",
    },
    seoDescriptionTranslations: {
      es: "Calendario perpetuo interactivo para cualquier fecha. Consulta feriados mundiales, números de semana, día de la semana y eventos históricos. Herramienta de calendario online gratuita.",
      ar: "تقويم دائم تفاعلي لأي تاريخ. تحقق من العطل العالمية وأرقام الأسابيع ويوم الأسبوع والأحداث التاريخية. أداة تقويم مجانية عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Navega a cualquier año y mes usando los controles del calendario.",
        "Haz clic en cualquier fecha para ver información detallada incluyendo día de la semana y número de semana.",
        "Las fechas resaltadas muestran feriados mundiales y observancias.",
        "Usa la función de búsqueda para encontrar fechas o feriados específicos.",
      ],
      ar: [
        "تنقّل إلى أي سنة وشهر باستخدام عناصر التحكم في التقويم.",
        "انقر على أي تاريخ لرؤية معلومات مفصلة بما في ذلك يوم الأسبوع ورقم الأسبوع.",
        "التواريخ المميزة تُظهر العطل العالمية والمناسبات.",
        "استخدم ميزة البحث للعثور على تواريخ أو عطل محددة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es un calendario perpetuo?", answer: "Un calendario perpetuo es un calendario que puede mostrar cualquier fecha a través de cualquier año, pasado o futuro. A diferencia de los calendarios anuales que muestran solo un año, un calendario perpetuo te permite explorar fechas a lo largo de siglos." },
        { question: "¿Qué feriados muestra este calendario?", answer: "El calendario incluye feriados internacionales principales, observancias nacionales de varios países y celebraciones culturales. La cobertura de feriados continúa expandiéndose." },
        { question: "¿Puedo encontrar qué día de la semana fue una fecha histórica?", answer: "Sí. Navega a cualquier fecha en la historia y el calendario te mostrará exactamente qué día de la semana fue. Esto es útil para investigación histórica y genealogía." },
        { question: "¿Cómo se calculan los números de semana?", answer: "Los números de semana siguen el estándar ISO 8601, donde la semana 1 es la semana que contiene el primer jueves del año. Este es el estándar internacional utilizado en la mayoría de los países." },
        { question: "¿Hasta dónde puede retroceder este calendario?", answer: "Nuestro calendario perpetuo soporta fechas desde el año 1 hasta el 9999. Usa el sistema de calendario gregoriano y puede decirte qué día de la semana fue cualquier fecha en ese rango." },
      ],
      ar: [
        { question: "ما هو التقويم الدائم؟", answer: "التقويم الدائم هو تقويم يمكنه عرض أي تاريخ عبر أي سنة ماضية أو مستقبلية. على عكس التقويمات السنوية التي تُظهر سنة واحدة فقط يتيح لك التقويم الدائم استكشاف التواريخ عبر القرون." },
        { question: "ما العطل التي يُظهرها هذا التقويم؟", answer: "يشمل التقويم العطل الدولية الرئيسية والمناسبات الوطنية من دول مختلفة والاحتفالات الثقافية. تتوسع تغطية العطل باستمرار." },
        { question: "هل يمكنني معرفة يوم الأسبوع لتاريخ تاريخي؟", answer: "نعم. تنقّل إلى أي تاريخ في التاريخ وسيُظهر لك التقويم بالضبط ما هو يوم الأسبوع. هذا مفيد للبحث التاريخي وعلم الأنساب." },
        { question: "كيف تُحسب أرقام الأسابيع؟", answer: "تتبع أرقام الأسابيع المعيار ISO 8601 حيث الأسبوع 1 هو الأسبوع الذي يحتوي على أول خميس من السنة. هذا هو المعيار الدولي المستخدم في معظم الدول." },
        { question: "إلى أي مدى يمكن أن يعود هذا التقويم؟", answer: "يدعم تقويمنا الدائم التواريخ من السنة 1 إلى 9999. يستخدم نظام التقويم الغريغوري ويمكنه إخبارك بيوم الأسبوع لأي تاريخ في ذلك النطاق." },
      ],
    },
  },
  {
    id: "md5-generator",
    name: "MD5 Hash Generator",
    description:
      "Generate MD5 hash from any text input instantly. Free online MD5 generator.",
    category: "developer",
    icon: "🔒",
    path: "/tools/md5-generator",
    seoTitle: "Free MD5 Generator Online - MD5 Hash Calculator 2026",
    seoDescription: "Generate MD5 hash checksums from any text input instantly. Free online MD5 generator for file verification and data integrity checks.",
    seoKeywords: [
      "md5 generator", "md5 hash generator", "generate md5 hash",
      "md5 checksum generator", "md5 calculator online",
      "text to md5", "md5 hash online", "free md5 generator",
      "md5 hash tool", "online md5 calculator"
,      "md5 generator for students", "best md5 hash generator 2026", "free md5 checksum calculator online"        ],
    howToUse: [
      "Enter the text you want to generate an MD5 hash for.",
      "View the MD5 hash digest generated instantly.",
      "Click the hash to copy it to your clipboard.",
      "Use the hash for file verification, data integrity checks, or legacy system compatibility."
    ],
    faq: [
      { question: "What is an MD5 hash?", answer: "MD5 (Message-Digest Algorithm 5) produces a 128-bit (32-character hexadecimal) hash value from input data. It's commonly used for file integrity verification and checksums." },
      { question: "Is MD5 still secure?", answer: "MD5 is no longer considered cryptographically secure due to collision vulnerabilities discovered in 2004. It should not be used for password hashing or security-critical applications. Use SHA-256 instead for security purposes." },
      { question: "What is MD5 still used for?", answer: "MD5 is still useful for non-security purposes like file checksums, detecting accidental data corruption, and legacy system compatibility where MD5 hashes are already in use." },
      { question: "Can I use MD5 for password storage?", answer: "No. MD5 should never be used for password storage. Use bcrypt, Argon2, or PBKDF2 instead. MD5 is too fast and vulnerable to rainbow table and brute force attacks." }
    ],
    nameTranslations: {
      es: "Generador de Hash MD5",
      ar: "مولد تجزئة MD5",
    },
    descriptionTranslations: {
      es: "Genera hash MD5 de cualquier texto al instante. Generador MD5 online gratuito.",
      ar: "أنشئ تجزئة MD5 من أي نص فوراً. مولد MD5 مجاني عبر الإنترنت.",
    },
    seoTitleTranslations: {
      es: "Generador MD5 Gratis Online - Calculadora de Hash MD5 2026",
      ar: "مولد MD5 مجاني عبر الإنترنت - حاسبة تجزئة MD5 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera checksums de hash MD5 de cualquier texto al instante. Generador MD5 online gratuito para verificación de archivos y controles de integridad de datos.",
      ar: "أنشئ مجموعات تجزئة MD5 من أي نص فوراً. مولد MD5 مجاني عبر الإنترنت للتحقق من الملفات وفحوصات سلامة البيانات.",
    },
    howToUseTranslations: {
      es: [
        "Ingresa el texto para el que deseas generar un hash MD5.",
        "Visualiza el hash MD5 generado instantáneamente.",
        "Haz clic en el hash para copiarlo al portapapeles.",
        "Usa el hash para verificación de archivos, controles de integridad de datos o compatibilidad con sistemas heredados.",
      ],
      ar: [
        "أدخل النص الذي تريد إنشاء تجزئة MD5 له.",
        "اعرض تجزئة MD5 المُنشأة فوراً.",
        "انقر على التجزئة لنسخها إلى الحافظة.",
        "استخدم التجزئة للتحقق من الملفات وفحوصات سلامة البيانات أو التوافق مع الأنظمة القديمة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué es un hash MD5?", answer: "MD5 (Algoritmo de Resumen de Mensaje 5) produce un valor hash de 128 bits (32 caracteres hexadecimales) a partir de datos de entrada. Se usa comúnmente para verificación de integridad de archivos y checksums." },
        { question: "¿MD5 sigue siendo seguro?", answer: "MD5 ya no se considera criptográficamente seguro debido a vulnerabilidades de colisión descubiertas en 2004. No debe usarse para hashing de contraseñas ni aplicaciones críticas de seguridad. Usa SHA-256 en su lugar para fines de seguridad." },
        { question: "¿Para qué se sigue usando MD5?", answer: "MD5 sigue siendo útil para propósitos no relacionados con seguridad como checksums de archivos, detección de corrupción accidental de datos y compatibilidad con sistemas heredados donde ya se usan hashes MD5." },
        { question: "¿Puedo usar MD5 para almacenamiento de contraseñas?", answer: "No. MD5 nunca debe usarse para almacenamiento de contraseñas. Usa bcrypt, Argon2 o PBKDF2 en su lugar. MD5 es demasiado rápido y vulnerable a ataques de tabla arcoíris y fuerza bruta." }
      ],
      ar: [
        { question: "ما هي تجزئة MD5؟", answer: "MD5 (خوارزمية ملخص الرسالة 5) تُنتج قيمة تجزئة 128 بت (32 حرفاً سداسي عشرياً) من بيانات الإدخال. تُستخدم عادةً للتحقق من سلامة الملفات والمجموعات الاختبارية." },
        { question: "هل MD5 لا يزال آمناً؟", answer: "لم يعد MD5 يُعتبر آمناً تشفيرياً بسبب ثغرات التصادم المكتشفة في 2004. لا ينبغي استخدامه لتجزئة كلمات المرور أو التطبيقات الحساسة أمنياً. استخدم SHA-256 بدلاً من ذلك لأغراض الأمان." },
        { question: "ماذا يُستخدم MD5 حالياً؟", answer: "MD5 لا يزال مفيداً للأغراض غير الأمنية مثل مجموعات الملفات واكتشاف تلف البيانات العرضي والتوافق مع الأنظمة القديمة حيث تُستخدم تجزئات MD5 بالفعل." },
        { question: "هل يمكنني استخدام MD5 لتخزين كلمات المرور؟", answer: "لا. لا يجب أبداً استخدام MD5 لتخزين كلمات المرور. استخدم bcrypt أو Argon2 أو PBKDF2 بدلاً من ذلك. MD5 سريع جداً وعرضة لهجمات جدول قوس قزح والهجمات بالقوة الغاشمة." }
      ],
    },
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description:
      "Generate QR codes from texts, URLs, emails, or any string. Download as PNG.",
    category: "developer",
    icon: "📱",
    path: "/tools/qr-code-generator",
    seoTitle: "Free QR Code Generator Online - Create QR Codes 2026",
    seoDescription: "Generate QR codes from URLs, text, emails, phone numbers, or WiFi credentials. Download as PNG for print or digital use. Free online QR code generator.",
    seoKeywords: [
      "qr code generator", "create qr code", "qr code maker",
      "free qr code generator", "qr code from url", "qr code from text",
      "qr code generator online", "generate qr code free",
      "qr code creator", "download qr code"
,      "qr code generator for students", "best qr code maker 2026", "free qr code creator online"        ],
    howToUse: [
      "Select the type of content: URL, text, email, phone number, or WiFi.",
      "Enter your content in the appropriate fields.",
      "View the QR code generated instantly with a live preview.",
      "Download the QR code as a PNG image for printing or digital use."
    ],
    faq: [
      { question: "What can I encode in a QR code?", answer: "QR codes can encode URLs, plain text, email addresses, phone numbers, SMS messages, WiFi credentials, vCards (contact info), and more. The most common use is encoding website URLs." },
      { question: "How much data can a QR code hold?", answer: "QR codes can store up to 7,089 numeric digits, 4,296 alphanumeric characters, or 2,953 bytes of binary data. More data results in a denser, harder-to-scan code." },
      { question: "Do QR codes expire?", answer: "Static QR codes (like those generated by this tool) never expire. The encoded data is permanent. Dynamic QR codes that redirect to URLs can be changed or deactivated by the service provider." },
      { question: "What size should I print my QR code?", answer: "For reliable scanning, print QR codes at least 2 × 2 cm (0.8 × 0.8 inches). Larger sizes are better for scanning from a distance. Ensure high contrast between the code and background." }
    ],
    nameTranslations: {
      es: "Generador de Códigos QR",
      ar: "مولد رموز QR",
    },
    descriptionTranslations: {
      es: "Genera códigos QR a partir de textos, URLs, correos electrónicos o cualquier cadena. Descarga como PNG.",
      ar: "أنشئ رموز QR من نصوص أو عناوين URLs أو بريد إلكتروني أو أي سلسلة. حمّل بصيغة PNG.",
    },
    seoTitleTranslations: {
      es: "Generador de Códigos QR Gratis Online - Crear Códigos QR 2026",
      ar: "مولد رموز QR مجاني عبر الإنترنت - إنشاء رموز QR 2026",
    },
    seoDescriptionTranslations: {
      es: "Genera códigos QR a partir de URLs, textos, correos electrónicos, números de teléfono o credenciales WiFi. Descarga como PNG para uso impreso o digital. Generador de códigos QR online gratuito.",
      ar: "أنشئ رموز QR من عناوين URLs ونصوص وبريد إلكتروني وأرقام هوية أو بيانات WiFi. حمّل بصيغة PNG للاستخدام المطبوع أو الرقمي. مولد رموز QR مجاني عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Selecciona el tipo de contenido: URL, texto, correo electrónico, número de teléfono o WiFi.",
        "Ingresa tu contenido en los campos correspondientes.",
        "Visualiza el código QR generado instantáneamente con una vista previa en vivo.",
        "Descarga el código QR como imagen PNG para imprimir o uso digital.",
      ],
      ar: [
        "اختر نوع المحتوى: عنوان URL أو نص أو بريد إلكتروني أو رقم هاتف أو WiFi.",
        "أدخل محتوىك في الحقول المناسبة.",
        "اعرض رمز QR المُنشأ فوراً مع معاينة مباشرة.",
        "حمّل رمز QR كصورة PNG للطباعة أو الاستخدام الرقمي.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Qué puedo codificar en un código QR?", answer: "Los códigos QR pueden codificar URLs, texto plano, direcciones de correo electrónico, números de teléfono, mensajes SMS, credenciales WiFi, vCards (información de contacto) y más. El uso más común es codificar URLs de sitios web." },
        { question: "¿Cuántos datos puede almacenar un código QR?", answer: "Los códigos QR pueden almacenar hasta 7.089 dígitos numéricos, 4.296 caracteres alfanuméricos o 2.953 bytes de datos binarios. Más datos resulta en un código más denso y difícil de escanear." },
        { question: "¿Caducan los códigos QR?", answer: "Los códigos QR estáticos (como los generados por esta herramienta) nunca caducan. Los datos codificados son permanentes. Los códigos QR dinámicos que redirigen a URLs pueden ser cambiados o desactivados por el proveedor del servicio." },
        { question: "¿Qué tamaño debo imprimir mi código QR?", answer: "Para un escaneo confiable, imprime códigos QR de al menos 2 × 2 cm (0.8 × 0.8 pulgadas). Tamaños más grandes son mejores para escanear a distancia. Asegura alto contraste entre el código y el fondo." },
      ],
      ar: [
        { question: "ماذا يمكنني ترميزه في رمز QR؟", answer: "يمكن لرموز QR ترميز عناوين URLs والنصوص العادية وعناوين البريد الإلكتروني وأرقام الهاتف ورسائل SMS وبيانات اعتماد WiFi وبطاقات vCards (معلومات الاتصال) والمزيد. الاستخدام الأكثر شيوعاً هو ترميز عناوين مواقع الويب." },
        { question: "كم كمية البيانات التي يمكن أن يحملها رمز QR؟", answer: "يمكن لرموز QR تخزين ما يصل إلى 7089 رقماً رقمياً و4296 حرفاً أبجدياً رقمياً أو 2953 بايت من البيانات الثنائية. المزيد من البيانات ينتج رمزاً أكثر كثافة وأصعب في المسح." },
        { question: "هل تنتهي صلاحية رموز QR؟", answer: "رموز QR الثابتة (مثل تلك المُنشأة بهذه الأداة) لا تنتهي صلاحيتها أبداً. البيانات المشفرة دائمة. رموز QR الديناميكية التي تعيد التوجيه إلى عناوين URLs يمكن تغييرها أو إيقافها من قبل مقدم الخدمة." },
        { question: "ما الحجم الذي يجب أن أطبع به رمز QR؟", answer: "للمسح الموثوق اطبع رموز QR بحجم 2 × 2 سم على الأقل (0.8 × 0.8 بوصة). الأحجام الأكبر أفضل للمسح من مسافة. تأكد من تباين عالٍ بين الرمز والخلفية." },
      ],
    },
  },
  {
    id: "quotes",
    name: "Famous Quotes Directory",
    description:
      "Search and discover famous quotes from world-renowned figures.",
    category: "text",
    icon: "💬",
    path: "/tools/quotes",
    seoTitle: "Free Quotes Online - Motivational & Inspirational Quotes 2026",
    seoDescription: "Browse and search hundreds of famous quotes from world-renowned figures. Filter by category, author, or keyword. Free inspirational quotes collection for daily motivation.",
    seoKeywords: [
      "famous quotes", "inspirational quotes", "motivational quotes",
      "quote by author", "best quotes online", "daily quotes",
      "famous sayings", "quote search tool", "quotes about life",
      "wisdom quotes", "motivational sayings", "famous quotes by category"
,      "quotes for students", "best quotes directory 2026", "free motivational quotes online"        ],
    howToUse: [
      "Browse quotes organized by category: courage, wisdom, love, success, and more.",
      "Use the search bar to find quotes by person name, quote text, or keyword.",
      "Click the Quote of the Day for daily inspiration.",
      "Click on any quote to see its full details including source, date, and tags.",
      "Click on any tag to discover related quotes on the same topic."
    ],
    faq: [
      { question: "How many quotes are in this collection?", answer: "This collection features over 500 famous quotes from world-renowned figures including philosophers, leaders, scientists, artists, and writers. Quotes are organized by theme for easy browsing." },
      { question: "Can I search for quotes by a specific person?", answer: "Yes. Simply type the person's name in the search bar (e.g., 'Einstein', 'Gandhi') and the tool will show all quotes by that author along with quotes mentioning that name." },
      { question: "Are the quote sources and dates accurate?", answer: "We make every effort to provide accurate source information and dates. Quotes are attributed to documented sources such as books, speeches, interviews, and letters. Some attributions are based on historical consensus." },
      { question: "How can I use these quotes?", answer: "These quotes are great for daily inspiration, social media posts, speeches, writing, presentations, or simply reflecting on wisdom from great minds throughout history." }
,      { question: "Where do these quotes come from?", answer: "Our quotes collection features famous sayings from historical figures, authors, philosophers, scientists, and leaders across different eras and cultures. Each quote is attributed to its author." }     ],
    nameTranslations: {
      es: "Directorio de Citas Famosas",
      ar: "دليل الاقتباسات الشهيرة",
    },
    descriptionTranslations: {
      es: "Busca y descubre citas famosas de figuras de renombre mundial.",
      ar: "ابحث واكتشف اقتباسات شهيرة من شخصيات عالمية مشهورة.",
    },
    seoTitleTranslations: {
      es: "Citas Gratis Online - Citas Motivacionales e Inspiradoras 2026",
      ar: "اقتباسات مجانية عبر الإنترنت - اقتباسات تحفيزية وملهمة 2026",
    },
    seoDescriptionTranslations: {
      es: "Explora y busca cientos de citas famosas de figuras de renombre mundial. Filtra por categoría, autor o palabra clave. Colección de citas inspiradoras gratuita para motivación diaria.",
      ar: "تصفح وابحث في مئات الاقتباسات الشهيرة من شخصيات عالمية مشهورة. فلتر حسب الفئة أو المؤلف أو الكلمة المفتاحية. مجموعة اقتباسات ملهمة مجانية للتحفيز اليومي.",
    },
    howToUseTranslations: {
      es: [
        "Explora citas organizadas por categoría: coraje, sabiduría, amor, éxito y más.",
        "Usa la barra de búsqueda para encontrar citas por nombre de persona, texto de cita o palabra clave.",
        "Haz clic en la Cita del Día para inspiración diaria.",
        "Haz clic en cualquier cita para ver sus detalles completos incluyendo fuente, fecha y etiquetas.",
        "Haz clic en cualquier etiqueta para descubrir citas relacionadas sobre el mismo tema.",
      ],
      ar: [
        "تصفح الاقتباسات المنظمة حسب الفئة: الشجاعة والحكمة والحب والنجاح والمزيد.",
        "استخدم شريط البحث للعثور على اقتباسات باسم الشخص أو نص الاقتباس أو الكلمة المفتاحية.",
        "انقر على اقتباس اليوم للإلهام اليومي.",
        "انقر على أي اقتباس لرؤية تفاصيله الكاملة بما في ذلك المصدر والتاريخ والعلامات.",
        "انقر على أي علامة لاكتشاف اقتباسات متعلقة بنفس الموضوع.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cuántas citas hay en esta colección?", answer: "Esta colección presenta más de 500 citas famosas de figuras de renombre mundial incluyendo filósofos, líderes, científicos, artistas y escritores. Las citas están organizadas por tema para facilitar la navegación." },
        { question: "¿Puedo buscar citas de una persona específica?", answer: "Sí. Simplemente escribe el nombre de la persona en la barra de búsqueda (por ejemplo, 'Einstein', 'Gandhi') y la herramienta mostrará todas las citas de ese autor junto con citas que mencionen ese nombre." },
        { question: "¿Son precisas las fuentes y fechas de las citas?", answer: "Hacemos todo lo posible para proporcionar información precisa de fuentes y fechas. Las citas se atribuyen a fuentes documentadas como libros, discursos, entrevistas y cartas. Algunas atribuciones se basan en consenso histórico." },
        { question: "¿Cómo puedo usar estas citas?", answer: "Estas citas son geniales para inspiración diaria, publicaciones en redes sociales, discursos, escritos, presentaciones o simplemente reflexionar sobre la sabiduría de grandes mentes a lo largo de la historia." },
        { question: "¿De dónde vienen estas citas?", answer: "Nuestra colección de citas presenta dichos famosos de figuras históricas, autores, filósofos, científicos y líderes de diferentes épocas y culturas. Cada cita está atribuida a su autor." },
      ],
      ar: [
        { question: "كم اقتباساً في هذه المجموعة؟", answer: "تضم هذه المجموعة أكثر من 500 اقتباس شهير من شخصيات عالمية مشهورة بما في ذلك الفلاسفة والقادة والعلماء والفنانون والكتاب. الاقتباسات منظمة حسب الموضوع لسهولة التصفح." },
        { question: "هل يمكنني البحث عن اقتباسات لشخص معين؟", answer: "نعم. ببساطة اكتب اسم الشخص في شريط البحث (مثال: 'أينشتاين'، 'غاندي') وستعرض الأداة جميع الاقتباسات لهذا المؤلف مع الاقتباسات التي تذكر هذا الاسم." },
        { question: "هل مصادر الاقتباسات والتواريخ دقيقة؟", answer: "نبذل قصارى جهدنا لتقديم معلومات دقيقة عن المصادر والتواريخ. تُنسب الاقتباسات إلى مصادر موثقة مثل الكتب والخطابات والمقابلات والرسائل. بعض النسب مبنية على إجماع تاريخي." },
        { question: "كيف يمكنني استخدام هذه الاقتباسات؟", answer: "هذه الاقتباسات رائعة للإلهام اليومي ومنشورات وسائل التواصل الاجتماعي والخطابات والكتابة والعروض التقديمية أو ببساطة التأمل في حكمة العقول العظيمة عبر التاريخ." },
        { question: "من أين تأتي هذه الاقتباسات؟", answer: "تضم مجموعتنا من الاقتباسات أقوالاً شهيرة من شخصيات تاريخية ومؤلفين وفلاسفة وعلماء وقادة من عصور وثقافات مختلفة. كل اقتباس منسوب إلى مؤلفه." },
      ],
    },
  },
  {
    id: "book-of-answers",
    name: "Book of Answers",
    description:
      "A digital Book of Answers for fun decision-making and guidance. Focus on your question and receive a random, thoughtfully curated response.",
    category: "text",
    icon: "📖",
    path: "/tools/book-of-answers",
    seoTitle: "Free Book of Answers Online - Random Answer Generator 2026",
    seoDescription: "A digital Book of Answers for fun decision-making and psychological guidance. Close your eyes, focus on your question, then tap to reveal a random answer from 500+ curated responses. Free online oracle tool.",
    seoKeywords: [
      "book of answers", "book of answers online", "random answer generator",
      "decision maker tool", "free oracle tool", "what should i do tool",
      "random decision generator", "book of answers free online",
      "fun decision tool", "random yes or no generator"
,      "book of answers for students", "best book of answers 2026", "free random answer generator online"        ],
    howToUse: [
      "Think of a question you'd like guidance on — it can be about anything.",
      "Close your eyes and hold the question in mind for 3–5 seconds.",
      "Click the book cover or press 'Open Your Answer' to reveal your answer.",
      "Read your answer with an open mind and see how it resonates with you.",
      "Click 'Ask Another Question' to reset and receive a new answer for a different question."
    ],
    faq: [
      { question: "How does the Book of Answers work?", answer: "The Book of Answers randomly selects one response from a curated collection of 500+ answers across five categories: affirmation, denial, suggestion, healing, and humor. The selection is purely random, giving each answer an equal chance of appearing." },
      { question: "Are the answers in the Book of Answers real?", answer: "The answers are thoughtfully curated short phrases designed to provide psychological comfort, inspiration, and perspective. They draw on the Barnum effect — vague but relatable statements that users can personally connect with and interpret for their own situations." },
      { question: "Is this Book of Answers free to use?", answer: "Yes, the Book of Answers is completely free with no limits. You can ask as many questions as you'd like. No signup or account is required." },
      { question: "Should I take the answers seriously?", answer: "The Book of Answers is designed as a fun, reflective tool. While the answers aren't meant to replace professional advice, many people find them helpful for breaking through decision paralysis, gaining a fresh perspective, or simply having a moment of mindful reflection." },
      { question: "Does this tool store my questions or answers?", answer: "No. Everything happens in your browser. Your questions, answers, and usage data are never stored, tracked, or sent anywhere. Your privacy is fully protected." }
    ],
    nameTranslations: {
      es: "Libro de las Respuestas",
      ar: "كتاب الإجابات",
    },
    descriptionTranslations: {
      es: "Un Libro de las Respuestas digital para tomar decisiones divertidas y obtener orientación. Concéntrate en tu pregunta y recibe una respuesta aleatoria y cuidadosamente seleccionada.",
      ar: "كتاب إجابات رقمي لاتخاذ قرارات ممتعة والحصول على الإرشاد. ركّز على سؤالك واحصل على إجابة عشوائية منتقاة بعناية.",
    },
    seoTitleTranslations: {
      es: "Libro de las Respuestas Gratis Online - Generador de Respuestas Aleatorias 2026",
      ar: "كتاب الإجابات مجاني عبر الإنترنت - مولد إجابات عشوائية 2026",
    },
    seoDescriptionTranslations: {
      es: "Un Libro de las Respuestas digital para tomar decisiones divertidas y orientación psicológica. Cierra los ojos, concéntrate en tu pregunta y toca para revelar una respuesta aleatoria de más de 500 respuestas curadas. Herramienta de oráculo online gratuita.",
      ar: "كتاب إجابات رقمي لاتخاذ قرارات ممتعة وإرشاد نفسي. أغمض عينيك وركّز على سؤالك ثم اضغط لكشف إجابة عشوائية من أكثر من 500 إجابة منتقاة. أداة العرافة المجانية عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Piensa en una pregunta sobre la que te gustaría orientación — puede ser sobre cualquier cosa.",
        "Cierra los ojos y mantén la pregunta en mente durante 3-5 segundos.",
        "Haz clic en la portada del libro o presiona 'Abre tu Respuesta' para revelar tu respuesta.",
        "Lee tu respuesta con mente abierta y observa cómo resuena contigo.",
        "Haz clic en 'Haz Otra Pregunta' para reiniciar y recibir una nueva respuesta para una pregunta diferente.",
      ],
      ar: [
        "فكّر في سؤال تريد إرشاداً بشأنه — يمكن أن يكون عن أي شيء.",
        "أغمض عينيك واحتفظ بالسؤال في ذهنك لمدة 3-5 ثوانٍ.",
        "انقر على غلاف الكتاب أو اضغط على 'افتح إجابتك' لكشف إجابتك.",
        "اقرأ إجابتك بعقل منفتح وانظر كيف تتوافق معك.",
        "انقر على 'اسأل سؤالاً آخر' لإعادة التعيين والحصول على إجابة جديدة لسؤال مختلف.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cómo funciona el Libro de las Respuestas?", answer: "El Libro de las Respuestas selecciona aleatoriamente una respuesta de una colección curada de más de 500 respuestas en cinco categorías: afirmación, negación, sugerencia, curación y humor. La selección es puramente aleatoria, dando a cada respuesta la misma probabilidad de aparecer." },
        { question: "¿Son reales las respuestas del Libro de las Respuestas?", answer: "Las respuestas son frases cortas cuidadosamente seleccionadas diseñadas para proporcionar comodidad psicológica, inspiración y perspectiva. Se basan en el efecto Forer — declaraciones vagas pero identificables con las que los usuarios pueden conectarse personalmente e interpretar para sus propias situaciones." },
        { question: "¿Es gratuito el uso del Libro de las Respuestas?", answer: "Sí, el Libro de las Respuestas es completamente gratuito sin límites. Puedes hacer todas las preguntas que desees. No se requiere registro ni cuenta." },
        { question: "¿Debo tomar las respuestas en serio?", answer: "El Libro de las Respuestas está diseñado como una herramienta divertida y reflexiva. Aunque las respuestas no pretenden reemplazar el asesoramiento profesional, muchas personas las encuentran útiles para superar la parálisis de decisión, obtener una nueva perspectiva o simplemente tener un momento de reflexión consciente." },
        { question: "¿Esta herramienta almacena mis preguntas o respuestas?", answer: "No. Todo ocurre en tu navegador. Tus preguntas, respuestas y datos de uso nunca se almacenan, rastrean ni se envían a ningún lugar. Tu privacidad está completamente protegida." },
      ],
      ar: [
        { question: "كيف يعمل كتاب الإجابات؟", answer: "يختار كتاب الإجابات عشوائياً إجابة واحدة من مجموعة منتقاة من أكثر من 500 إجابة عبر خمس فئات: التأكيد والنفي والاقتراح والشفاء والفكاهة. الاختيار عشوائي تماماً مما يمنح كل إجابة فرصة متساوية للظهور." },
        { question: "هل الإجابات في كتاب الإجابات حقيقية؟", answer: "الإجابات عبارات قصيرة منتقاة بعناية مصممة لتوفير الراحة النفسية والإلهام والمنظور. تعتمد على تأثير بارنوم — عبارات غامضة لكن يمكن ربطها شخصياً يمكن للمستخدمين التواصل معها وتفسيرها لمواقفهم الخاصة." },
        { question: "هل كتاب الإجابات هذا مجاني للاستخدام؟", answer: "نعم، كتاب الإجابات مجاني تماماً بدون حدود. يمكنك طرح أي عدد من الأسئلة. لا يتطلب تسجيل أو حساب." },
        { question: "هل يجب أن آخذ الإجابات على محمل الجد؟", answer: "صُمم كتاب الإجابات كأداة ممتعة وتأملية. بينما لا تهدف الإجابات لاستبدال المشورة المهنية يجد الكثير من الناس أنها مفيدة لتجاوز شلل القرار أو الحصول على منظور جديد أو مجرد لحظة من التأمل الواعي." },
        { question: "هل تخزّن هذه الأداة أسئلتي أو إجاباتي؟", answer: "لا. كل شيء يحدث في متصفحك. لا يتم تخزين أو تتبع أو إرسال أسئلتك وإجاباتك وبيانات الاستخدام إلى أي مكان. خصوصيتك محمية بالكامل." },
      ],
    },
  },
  {
    id: "reaction-test",
    name: "Reaction Time Tester",
    description:
      "Test your reflexes! Click as fast as you can when the block turns green to measure your reaction time.",
    category: "calculator",
    icon: "⚡",
    path: "/tools/reaction-test",
    seoTitle: "Free Reaction Time Test Online - Reflex Speed Game 2026",
    seoDescription: "Test your reaction time with this interactive reflex test. Click when the color changes to green and measure your response speed in milliseconds. Track your best times and challenge yourself.",
    seoKeywords: [
      "reaction time test", "reflex test online", "reaction speed test",
      "how fast is my reaction", "reaction time game", "reflex speed test",
      "click reaction test", "reaction time milliseconds",
      "test my reflexes", "reaction time challenge"
,      "reaction test for students", "best reaction time test 2026", "free reflex speed game online"        ],
    howToUse: [
      "Click the colored block to start the test.",
      "The block will turn red — wait for it to turn green.",
      "Click as soon as the block turns green!",
      "Your reaction time in milliseconds will be displayed.",
      "Repeat multiple times to improve and track your best time."
    ],
    faq: [
      { question: "What is a good reaction time?", answer: "Average human reaction time for visual stimuli is around 250ms. Athletes and gamers often achieve times below 200ms. Elite athletes can reach reaction times as low as 150ms." },
      { question: "What factors affect reaction time?", answer: "Reaction time is influenced by age, fatigue, attention level, practice, and individual differences. Getting enough sleep, staying hydrated, and regular practice can improve your times." },
      { question: "Can I improve my reaction time?", answer: "Yes. Regular practice, staying focused, getting adequate rest, and engaging in activities like video games or sports can all help improve your reaction time over time." },
      { question: "Is this test accurate?", answer: "This test measures your response time using your browser's high-resolution timer. While it gives a good approximation, actual reaction time may vary slightly based on your device's display latency and input delay." }
    ],
    nameTranslations: {
      es: "Probador de Tiempo de Reacción",
      ar: "اختبار زمن رد الفعل",
    },
    descriptionTranslations: {
      es: "¡Pon a prueba tus reflejos! Haz clic lo más rápido posible cuando el bloque se vuelva verde para medir tu tiempo de reacción.",
      ar: "اختبر ردود أفعالك! انقر بأسرع ما يمكن عندما يتحول المربع إلى الأخضر لقياس زمن رد فعلك.",
    },
    seoTitleTranslations: {
      es: "Prueba de Tiempo de Reacción Gratis Online - Juego de Velocidad de Reflejos 2026",
      ar: "اختبار زمن رد الفعل مجاني عبر الإنترنت - لعبة سرعة الاستجابة 2026",
    },
    seoDescriptionTranslations: {
      es: "Prueba tu tiempo de reacción con este test interactivo de reflejos. Haz clic cuando el color cambie a verde y mide tu velocidad de respuesta en milisegundos. Rastrea tus mejores tiempos y desafíate.",
      ar: "اختبر زمن رد فعلك مع هذا الاختبار التفاعلي. انقر عندما يتغير اللون إلى الأخضر وقس سرعة استجابتك بالمللي ثانية. تتبع أفضل أوقاتك وتحدَّ نفسك.",
    },
    howToUseTranslations: {
      es: [
        "Haz clic en el bloque de color para iniciar la prueba.",
        "El bloque se volverá rojo — espera a que se vuelva verde.",
        "¡Haz clic tan pronto como el bloque se vuelva verde!",
        "Se mostrará tu tiempo de reacción en milisegundos.",
        "Repite varias veces para mejorar y rastrear tu mejor tiempo.",
      ],
      ar: [
        "انقر على المربع الملون لبدء الاختبار.",
        "سيصبح المربع أحمر — انتظر حتى يتحول إلى الأخضر.",
        "انقر بمجرد أن يتحول المربع إلى الأخضر!",
        "سيظهر زمن رد فعلك بالمللي ثانية.",
        "كرر عدة مرات للتحسن وتتبع أفضل وقتك.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cuál es un buen tiempo de reacción?", answer: "El tiempo promedio de reacción humana para estímulos visuales es de alrededor de 250ms. Atletas y gamers suelen lograr tiempos por debajo de 200ms. Atletas de élite pueden alcanzar tiempos tan bajos como 150ms." },
        { question: "¿Qué factores afectan el tiempo de reacción?", answer: "El tiempo de reacción está influenciado por la edad, la fatiga, el nivel de atención, la práctica y diferencias individuales. Dormir lo suficiente, mantenerse hidratado y practicar regularmente puede mejorar tus tiempos." },
        { question: "¿Puedo mejorar mi tiempo de reacción?", answer: "Sí. La práctica regular, mantenerse enfocado, descansar adecuadamente y participar en actividades como videojuegos o deportes pueden ayudar a mejorar tu tiempo de reacción con el tiempo." },
        { question: "¿Es precisa esta prueba?", answer: "Esta prueba mide tu tiempo de respuesta usando el temporizador de alta resolución de tu navegador. Aunque da una buena aproximación, el tiempo real puede variar ligeramente según la latencia de pantalla y el retardo de entrada de tu dispositivo." }
      ],
      ar: [
        { question: "ما هو زمن رد الفعل الجيد؟", answer: "متوسط زمن رد الفعل البشري للمحفزات البصرية حوالي 250 مللي ثانية. يحقق الرياضيون واللاعبون عادةً أوقاتاً أقل من 200 مللي ثانية. يمكن للرياضيين النخبويين الوصول إلى أزمنة منخفضة تصل إلى 150 مللي ثانية." },
        { question: "ما العوامل التي تؤثر على زمن رد الفعل؟", answer: "يتأثر زمن رد الفعل بالعمر والتعب ومستوى الانتباه والممارسة والفروق الفردية. الحصول على قسط كافٍ من النوم والبقاء رطباً والممارسة المنتظمة يمكن أن تحسّن أوقاتك." },
        { question: "هل يمكنني تحسين زمن رد فعلي؟", answer: "نعم. الممارسة المنتظمة والبقاء مركزاً والحصول على قسط كافٍ من الراحة والمشاركة في أنشطة مثل ألعاب الفيديو أو الرياضة يمكن أن تساعد جميعها في تحسين زمن رد فعلك مع مرور الوقت." },
        { question: "هل هذا الاختبار دقيق؟", answer: "يقيس هذا الاختبار وقت استجابتك باستخدام مؤقت الدقة العالية في متصفحك. بينما يعطي تقديراً جيداً، قد يختلف زمن رد الفعل الفعلي قليلاً بناءً على تأخير الشاشة وتأخير الإدخال في جهازك." }
      ],
    },
  },
  {
    id: "ai-tools",
    name: "Free AI Tools Directory",
    description:
      "Curated directory of the best free AI tools for writing, images, video, coding, and more.",
    category: "developer",
    icon: "🧭",
    path: "/tools/ai-tools",
    seoTitle: "Free AI Tools Directory - Best AI Tools List Online 2026",
    seoDescription: "Curated directory of the best free AI tools for writing, image generation, video editing, coding assistance, and more. Updated regularly with new AI tools.",
    seoKeywords: [
      "free ai tools", "ai tools directory", "best ai tools",
      "free ai writing tools", "free ai image generator",
      "ai coding tools", "ai tools list", "free ai tools online",
      "ai tools for students", "best free ai tools 2026"
,      "ai tools for students", "best ai tools directory 2026", "free ai tools list online"        ],
    howToUse: [
      "Browse AI tools organized by category: writing, images, video, coding, audio, and productivity.",
      "Click any tool to see its details, features, and direct link.",
      "Use the filter to narrow down tools by category or use case.",
      "Bookmark this page for the latest additions to the free AI tools collection."
    ],
    faq: [
      { question: "Are all the tools in this directory really free?", answer: "Yes. Every tool listed in this directory offers a free tier or is completely free to use. Some tools may have premium features, but the free version provides substantial functionality." },
      { question: "How often is the directory updated?", answer: "The directory is updated regularly as new AI tools are released and existing tools change their pricing or features. We aim to add new tools and verify existing listings weekly." },
      { question: "Can I suggest an AI tool to be added?", answer: "Yes! We welcome suggestions for free AI tools that would benefit our community. Use the contact form to submit a tool for review and inclusion." },
      { question: "What categories of AI tools are included?", answer: "The directory covers writing assistants, image generators, video editing tools, coding assistants, audio tools, productivity apps, chatbots, and more. New categories are added as the AI landscape evolves." }
,      { question: "Are all the AI tools listed here free?", answer: "Our AI tools directory includes both free and freemium tools. Each listing indicates whether the tool is free, has a free tier, or requires payment. We regularly update the directory." }     ],
    nameTranslations: {
      es: "Directorio de Herramientas de IA Gratuitas",
      ar: "دليل أدوات الذكاء الاصطناعي المجانية",
    },
    descriptionTranslations: {
      es: "Directorio curado de las mejores herramientas de IA gratuitas para escritura, imágenes, video, programación y más.",
      ar: "دليل مختار لأفضل أدوات الذكاء الاصطناعي المجانية للكتابة والصور والفيديو والبرمجة والمزيد.",
    },
    seoTitleTranslations: {
      es: "Directorio de Herramientas de IA Gratis - Mejor Lista de Herramientas IA Online 2026",
      ar: "دليل أدوات الذكاء الاصطناعي المجانية - أفضل قائمة أدوات الذكاء الاصطناعي عبر الإنترنت 2026",
    },
    seoDescriptionTranslations: {
      es: "Directorio curado de las mejores herramientas de IA gratuitas para escritura, generación de imágenes, edición de video, asistencia en programación y más. Actualizado regularmente con nuevas herramientas de IA.",
      ar: "دليل مختار لأفضل أدوات الذكاء الاصطناعي المجانية للكتابة وإنشاء الصور وتحرير الفيديو والمساعدة في البرمجة والمزيد. يتم التحديث بانتظام بأدوات ذكاء اصطناعي جديدة.",
    },
    howToUseTranslations: {
      es: [
        "Explora herramientas de IA organizadas por categoría: escritura, imágenes, video, programación, audio y productividad.",
        "Haz clic en cualquier herramienta para ver sus detalles, características y enlace directo.",
        "Usa el filtro para reducir herramientas por categoría o caso de uso.",
        "Marca esta página para ver las últimas adiciones a la colección de herramientas de IA gratuitas.",
      ],
      ar: [
        "تصفح أدوات الذكاء الاصطناعي مصنفة حسب الفئة: الكتابة والصور والفيديو والبرمجة والصوتية والإنتاجية.",
        "انقر على أي أداة لرؤية تفاصيلها وميزاتها والرابط المباشر.",
        "استخدم الفلتر لتضييق الأدوات حسب الفئة أو حالة الاستخدام.",
        "أضف هذه الصفحة إلى المفضلة لآخر الإضافات إلى مجموعة أدوات الذكاء الاصطناعي المجانية.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Son realmente gratuitas todas las herramientas en este directorio?", answer: "Sí. Cada herramienta listada en este directorio ofrece un plan gratuito o es completamente gratuita. Algunas herramientas pueden tener funciones premium, pero la versión gratuita proporciona funcionalidad sustancial." },
        { question: "¿Con qué frecuencia se actualiza el directorio?", answer: "El directorio se actualiza regularmente a medida que se lanzan nuevas herramientas de IA y las existentes cambian sus precios o funciones. Nuestro objetivo es agregar nuevas herramientas y verificar las existentes semanalmente." },
        { question: "¿Puedo sugerir una herramienta de IA para agregar?", answer: "¡Sí! Aceptamos sugerencias de herramientas de IA gratuitas que beneficien a nuestra comunidad. Usa el formulario de contacto para enviar una herramienta para revisión e inclusión." },
        { question: "¿Qué categorías de herramientas de IA están incluidas?", answer: "El directorio cubre asistentes de escritura, generadores de imágenes, herramientas de edición de video, asistentes de programación, herramientas de audio, aplicaciones de productividad, chatbots y más. Se agregan nuevas categorías a medida que evoluciona el panorama de la IA." },
      ],
      ar: [
        { question: "هل جميع الأدوات في هذا الدليل مجانية حقاً؟", answer: "نعم. كل أداة مدرجة في هذا الدليل تقدم خطة مجانية أو مجانية بالكامل. قد تحتوي بعض الأدوات على ميزات مدفوعة لكن النسخة المجانية توفر وظائف جوهرية." },
        { question: "كم مرة يتم تحديث الدليل؟", answer: "يتم تحديث الدليل بانتظام مع إصدار أدوات ذكاء اصطناعي جديدة وتغيير الأدوات الحالية لأسعارها أو ميزاتها. نهدف إلى إضافة أدوات جديدة والتحقق من القوائم الحالية أسبوعياً." },
        { question: "هل يمكنني اقتراح أداة ذكاء اصطناعي لإضافتها؟", answer: "نعم! نرحب باقتراحات أدوات الذكاء الاصطناعي المجانية التي تفيد مجتمعنا. استخدم نموذج الاتصال لإرسال أداة للمراجعة والإدراج." },
        { question: "ما فئات أدوات الذكاء الاصطناعي المدرجة؟", answer: "يغطي الدليل مساعدي الكتابة ومولّدات الصور وأدوات تحرير الفيديو ومساعدي البرمجة والأدوات الصوتية وتطبيقات الإنتاجية وروبوتات الدردشة والمزيد. تُضاف فئات جديدة مع تطور مشهد الذكاء الاصطناعي." },
      ],
    },
  },
  {
    id: "life-hacks",
    name: "Life Hacks",
    description:
      "Browse 100 practical life hacks organized by category. From cleaning tricks to kitchen shortcuts, find quick solutions for everyday problems.",
    category: "text",
    icon: "💡",
    path: "/tools/life-hacks",
    seoTitle: "Free Life Hacks Online — 100 Practical Tips for Everyday Problems 2026",
    seoDescription: "Browse 100 practical life hacks organized by category: cleaning, kitchen, storage, laundry, home maintenance, and quick fixes. Free online tips and tricks for everyday problems.",
    seoKeywords: [
      "life hacks", "practical tips", "home tips", "cleaning hacks",
      "kitchen tips", "cleaning tricks", "household tips",
      "life hacks online", "home improvement tips", "everyday tips",
      "free life hacks", "best life hacks 2026", "practical household hacks",
      "how to clean naturally", "kitchen shortcuts", "laundry tips",
      "organization hacks", "quick fixes", "home maintenance tips"
    ],
    howToUse: [
      "Browse tips organized by category using the tab navigation.",
      "Use the search bar to find tips for a specific problem or topic.",
      "Check the Tip of the Day for a random helpful hack.",
      "Click 'Read more' on any card to see the full tip details.",
    ],
    faq: [
      { question: "How many life hacks are included?", answer: "This tool features 100 practical life hacks organized into 6 categories: Cleaning, Kitchen, Storage & Organization, Laundry & Clothing, Home Maintenance, and Quick Fixes." },
      { question: "Are these tips safe to use?", answer: "All tips use common household items and safe methods. We recommend testing on a small area first when using any cleaning solution on delicate surfaces." },
      { question: "Can I search for specific tips?", answer: "Yes. Use the search bar to find tips by keyword. The search looks through both titles and content for matching terms." },
      { question: "How often is the Tip of the Day updated?", answer: "The Tip of the Day changes randomly each time you load the page. Click the 'New Tip' button to see a different random tip instantly." },
      { question: "Are these tips suitable for renters?", answer: "Most tips are renter-friendly and use items you already have at home. Tips requiring permanent modifications are clearly noted." }
    ],
    nameTranslations: {
      en: "Life Hacks",
      es: "Trucos de Vida",
      ar: "حيل حياتية",
    },
    descriptionTranslations: {
      en: "Browse 100 practical life hacks organized by category. From cleaning tricks to kitchen shortcuts, find quick solutions for everyday problems.",
      es: "Explora 100 trucos prácticos organizados por categoría. Desde consejos de limpieza hasta atajos de cocina, encuentra soluciones rápidas para problemas cotidianos.",
      ar: "تصفح 100 حيلة عملية مصنفة حسب الفئة. من نصائح التنظيف إلى اختصارات المطبخ، اعثر على حلول سريعة لمشاكل الحياة اليومية.",
    },
    seoTitleTranslations: {
      en: "Free Life Hacks Online — 100 Practical Tips for Everyday Problems 2026",
      es: "Trucos de Vida Gratis Online — 100 Consejos Prácticos para Problemas Cotidianos 2026",
      ar: "حيل حياتية مجانية عبر الإنترنت — 100 نصيحة عملية لمشاكل الحياة اليومية 2026",
    },
    seoDescriptionTranslations: {
      en: "Browse 100 practical life hacks organized by category: cleaning, kitchen, storage, laundry, home maintenance, and quick fixes. Free online tips and tricks for everyday problems.",
      es: "Explora 100 trucos prácticos por categoría: limpieza, cocina, almacenamiento, lavandería, mantenimiento del hogar y soluciones rápidas. Consejos gratis online.",
      ar: "تصفح 100 حيلة عملية مصنفة حسب الفئة: التنظيف والمطبخ والتخزين والغسيل وصيانة المنزل والحلول السريعة. نصائح مجانية عبر الإنترنت.",
    },
    howToUseTranslations: {
      es: [
        "Explora los trucos organizados por categoría usando la navegación por pestañas.",
        "Usa la barra de búsqueda para encontrar consejos para un problema específico.",
        "Consulta el Truco del Día para un consejo aleatorio útil.",
        "Haz clic en 'Leer más' en cualquier tarjeta para ver el consejo completo.",
      ],
      ar: [
        "تصفح النصائح مصنفة حسب الفئة باستخدام علامات التبويب.",
        "استخدم شريط البحث للعثور على نصائح لمشكلة معينة.",
        "تحقق من حيلة اليوم للحصول على نصيحة عشوائية مفيدة.",
        "انقر على 'اقرأ المزيد' في أي بطاقة لرؤية النصيحة كاملة.",
      ],
    },
    faqTranslations: {
      es: [
        { question: "¿Cuántos trucos de vida están incluidos?", answer: "Esta herramienta presenta 100 trucos prácticos organizados en 6 categorías: Limpieza, Cocina, Almacenamiento y Organización, Lavandería y Ropa, Mantenimiento del Hogar y Soluciones Rápidas." },
        { question: "¿Son seguros estos consejos?", answer: "Todos los consejos usan artículos comunes del hogar y métodos seguros. Recomendamos probar primero en un área pequeña cuando se use cualquier solución de limpieza en superficies delicadas." },
        { question: "¿Puedo buscar consejos específicos?", answer: "Sí. Usa la barra de búsqueda para encontrar consejos por palabra clave. La búsqueda busca tanto en títulos como en contenido." },
        { question: "¿Con qué frecuencia se actualiza el Truco del Día?", answer: "El Truco del Día cambia aleatoriamente cada vez que cargas la página. Haz clic en el botón 'Nuevo Truco' para ver un consejo aleatorio diferente al instante." },
        { question: "¿Son estos consejos adecuados para inquilinos?", answer: "La mayoría de los consejos son aptos para inquilinos y usan artículos que ya tienes en casa. Los consejos que requieren modificaciones permanentes se señalan claramente." }
      ],
      ar: [
        { question: "كم عدد الحيل المتاحة؟", answer: "تقدم هذه الأداة 100 حيلة عملية مصنفة في 6 فئات: التنظيف والمطبخ والتخزين والتنظيم والغسيل والملابس وصيانة المنزل والحلول السريعة." },
        { question: "هل هذه النصائح آمنة للاستخدام؟", answer: "جميع النصائح تستخدم أدوات منزلية شائعة وطرق آمنة. نوصي بالاختبار أولاً على منطقة صغيرة عند استخدام أي محلول تنظيف على الأسطح الحساسة." },
        { question: "هل يمكنني البحث عن نصائح محددة؟", answer: "نعم. استخدم شريط البحث للعثور على النصائح حسب الكلمة المفتاحية. البحث يبحث في كل من العناوين والمحتوى." },
        { question: "كم مرة يتم تحديث حيلة اليوم؟", answer: "تتغير حيلة اليوم عشوائياً في كل مرة تقوم فيها بتحميل الصفحة. انقر على زر 'حيلة جديدة' لرؤية نصيحة عشوائية مختلفة فوراً." },
        { question: "هل هذه النصائح مناسبة للمستأجرين؟", answer: "معظم النصائح مناسبة للمستأجرين وتستخدم أدوات موجودة بالفعل في المنزل. النصائح التي تتطلب تعديلات دائمة موضحة بوضوح." }
      ],
    },
  },
  {
    id: "lateral-thinking",
    name: "Lateral Thinking Puzzle",
    description:
      "Test your reasoning with AI-generated lateral thinking puzzles. Free online brain teasers — no signup required.",
    category: "text",
    icon: "🧩",
    path: "/tools/lateral-thinking",
    seoTitle: "Free Lateral Thinking Puzzle Online — AI-Generated Brain Teasers 2026",
    seoDescription: "Challenge your mind with free lateral thinking puzzles. AI generates unique mysteries with hints, answer verification, and reveals. Classic mystery, horror, and brain-hole categories. No signup required.",
    seoKeywords: [
      "lateral thinking puzzle", "brain teaser online", "sea turtle soup",
      "mystery puzzle game", "free riddle game", "critical thinking puzzle",
      "logic puzzle online", "mind game free",
    ],
    howToUse: [
      "Select a category — Classic Mystery, Horror Dark, or Brain Hole Fun — to start.",
      "A mystery scenario will be randomly generated for you to solve.",
      "Type your guess into the input box and click Check to see if you're correct.",
      "Stuck? Click Get Hint for a subtle clue, or Reveal Truth to see the full answer.",
      "Click Next Story at any time to get a brand new puzzle.",
    ],
    faq: [
      { question: "What is a lateral thinking puzzle?", answer: "A lateral thinking puzzle is a mystery that requires creative, indirect reasoning to solve. The answer usually involves an unexpected twist or clever wordplay — not straightforward logic." },
      { question: "Are the puzzles really AI-generated?", answer: "Yes! Each puzzle is dynamically generated by Google Gemini AI. This means you get unique, never-before-seen puzzles every time — unlimited replayability." },
      { question: "Is this game completely free?", answer: "Absolutely free. No signup, no credits, no hidden fees. The AI generation runs on Gemini's free tier, and we also have a local puzzle bank as backup." },
      { question: "Can I submit my own puzzle?", answer: "Not yet, but you can suggest puzzles by contacting us. We're always looking to expand our local puzzle bank with community submissions." },
      { question: "How do I get better at solving these?", answer: "Practice! Read the scenario carefully, question your assumptions, and think about wordplay. The hint button gives you a gentle nudge without spoiling the answer." },
    ],
    nameTranslations: {
      en: "Lateral Thinking Puzzle",
      es: "Rompecabezas de Pensamiento Lateral",
      ar: "لغز التفكير الجانبي",
    },
    descriptionTranslations: {
      en: "Test your reasoning with AI-generated lateral thinking puzzles. Free online brain teasers — no signup required.",
      es: "Pon a prueba tu razonamiento con acertijos generados por IA. Juegos mentales gratis — sin registro.",
      ar: "اختبر تفكيرك مع ألغاز التفكير الجانبي المولدة بالذكاء الاصطناعي. ألعاب ذهنية مجانية — بدون تسجيل.",
    },
    seoTitleTranslations: {
      en: "Free Lateral Thinking Puzzle Online — AI-Generated Brain Teasers 2026",
      es: "Rompecabezas de Pensamiento Lateral Gratis — Acertijos con IA 2026",
      ar: "لغز تفكير جانبي مجاني — ألغاز ذهنية بالذكاء الاصطناعي 2026",
    },
    seoDescriptionTranslations: {
      en: "Challenge your mind with free lateral thinking puzzles. AI generates unique mysteries with hints, answer verification, and reveals. No signup required.",
      es: "Desafía tu mente con acertijos gratuitos. La IA genera misterios únicos con pistas y verificación. Sin registro.",
      ar: "تحدَّ عقلك مع ألغاز التفكير الجانبي المجانية. الذكاء الاصطناعي يولد ألغازاً فريدة مع تلميحات وتحقق. بدون تسجيل.",
    },
    howToUseTranslations: {
      en: [
        "Select a category — Classic Mystery, Horror Dark, or Brain Hole Fun — to start.",
        "A mystery scenario will be randomly generated for you to solve.",
        "Type your guess into the input box and click Check to see if you're correct.",
        "Stuck? Click Get Hint for a subtle clue, or Reveal Truth to see the full answer.",
        "Click Next Story at any time to get a brand new puzzle.",
      ],
      es: [
        "Selecciona una categoría para empezar.",
        "Un escenario misterioso será generado para que resuelvas.",
        "Escribe tu respuesta y haz clic en Verificar.",
        "¿Atascado? Usa Pista o Revelar Verdad.",
        "Haz clic en Siguiente Historia para un nuevo acertijo.",
      ],
      ar: [
        "اختر فئة للبدء.",
        "سيتم توليد سيناريو غامض لحله.",
        "اكتب تخمينك وانقر على تحقق.",
        "عالق؟ استخدم تلميح أو كشف الحقيقة.",
        "انقر على القصة التالية للحصول على لغز جديد.",
      ],
    },
    faqTranslations: {
      en: [
        { question: "What is a lateral thinking puzzle?", answer: "A lateral thinking puzzle is a mystery that requires creative, indirect reasoning. The answer usually involves an unexpected twist or clever wordplay." },
        { question: "Are the puzzles really AI-generated?", answer: "Yes! Each puzzle is dynamically generated by Google Gemini AI for unlimited unique puzzles." },
        { question: "Is this game completely free?", answer: "Absolutely free. No signup, no credits, no hidden fees. Powered by Gemini's free tier with a local puzzle bank as backup." },
        { question: "How do I get better at solving these?", answer: "Read carefully, question your assumptions, and think about wordplay. Use the hint button for gentle nudges." },
      ],
      es: [
        { question: "¿Qué es un acertijo de pensamiento lateral?", answer: "Es un misterio que requiere razonamiento creativo e indirecto. La respuesta suele implicar un giro inesperado." },
        { question: "¿Los acertijos son generados por IA?", answer: "¡Sí! Cada acertijo es generado por Google Gemini AI para ofrecer acertijos únicos ilimitados." },
        { question: "¿Es completamente gratis?", answer: "Totalmente gratis. Sin registro, sin créditos, sin costos ocultos." },
        { question: "¿Cómo mejoro resolviendo estos?", answer: "Lee con atención, cuestiona tus suposiciones y piensa en juegos de palabras. Usa el botón de pista." },
      ],
      ar: [
        { question: "ما هو لغز التفكير الجانبي؟", answer: "هو لغز يتطلب تفكيراً إبداعياً غير مباشر. الإجابة عادة ما تتضمن تحولاً غير متوقع." },
        { question: "هل الألغاز مولدة بالذكاء الاصطناعي حقاً؟", answer: "نعم! كل لغز يتم توليده بواسطة Google Gemini AI لألغاز فريدة غير محدودة." },
        { question: "هل هذه اللعبة مجانية بالكامل؟", answer: "مجانية تماماً. بدون تسجيل، بدون أرصدة، بدون رسوم خفية." },
        { question: "كيف أتحسن في حل هذه الألغاز؟", answer: "اقرأ بانتباه، شكك في افتراضاتك، وفكر في التلاعب بالكلمات. استخدم زر التلميح." },
      ],
    },
  },
  {
    id: "bing-wallpaper",
    name: "Bing 4K Daily Wallpaper",
    description:
      "Download stunning Bing daily wallpapers in 4K, Full HD, and mobile resolutions. Browse 7-day history and one-click download. Free, no signup.",
    category: "text",
    icon: "🖼️",
    path: "/tools/bing-wallpaper",
    seoTitle: "Free Bing 4K Daily Wallpaper Download — HD & Mobile 2026",
    seoDescription: "Download stunning Bing daily wallpapers in 4K UHD, Full HD 1080p, and mobile portrait. Browse 7-day history, random wallpapers, one-click download. Free, no signup required.",
    seoKeywords: [
      "bing wallpaper", "4k wallpaper download", "daily wallpaper",
      "bing daily image", "hd wallpaper free", "mobile wallpaper",
      "bing background", "wallpaper of the day",
    ],
    howToUse: [
      "Browse the daily Bing wallpaper displayed in the main card.",
      "Switch between 4K UHD, 1920×1080 Full HD, and Mobile Portrait resolutions.",
      "Click Previous/Next to browse the 7-day wallpaper history.",
      "Click Random to discover a surprise wallpaper from the past week.",
      "Click Download to save the wallpaper directly to your device.",
    ],
    faq: [
      { question: "Where do these wallpapers come from?", answer: "All wallpapers are from the official Bing Homepage Image Archive API. Bing selects a new stunning image every day from photographers worldwide." },
      { question: "Are these wallpapers really free to download?", answer: "Yes, absolutely free. Bing provides these images for personal use as desktop and mobile backgrounds. We simply make them easier to browse and download." },
      { question: "What resolutions are available?", answer: "4K UHD (3840×2160), Full HD (1920×1080), and Mobile Portrait (1080×1920). Choose the resolution that fits your screen best." },
      { question: "Can I use these wallpapers commercially?", answer: "Bing wallpapers are provided for personal use only. For commercial use, please check the individual photographer's copyright and licensing terms." },
    ],
    nameTranslations: {
      en: "Bing 4K Daily Wallpaper",
      es: "Fondo de Pantalla Diario Bing 4K",
      ar: "خلفية بينغ اليومية بدقة 4K",
    },
    descriptionTranslations: {
      en: "Download stunning Bing daily wallpapers in 4K, Full HD, and mobile resolutions. Free, no signup.",
      es: "Descarga fondos de pantalla diarios de Bing en 4K, Full HD y móvil. Gratis, sin registro.",
      ar: "حمّل خلفيات بينغ اليومية بدقة 4K و Full HD و mobile. مجاني بدون تسجيل.",
    },
    seoTitleTranslations: {
      en: "Free Bing 4K Daily Wallpaper Download — HD & Mobile 2026",
      es: "Fondo de Pantalla Diario Bing 4K Gratis — HD y Móvil 2026",
      ar: "تحميل خلفية بينغ اليومية بدقة 4K مجاناً — HD و mobile 2026",
    },
    seoDescriptionTranslations: {
      en: "Download stunning Bing daily wallpapers in 4K UHD, Full HD 1080p, and mobile portrait. Free, no signup required.",
      es: "Descarga fondos de pantalla diarios de Bing en 4K UHD, Full HD 1080p y formato vertical móvil. Gratis, sin registro.",
      ar: "حمّل خلفيات بينغ اليومية بدقة 4K UHD و Full HD 1080p و portrait للجوال. مجاني، لا يتطلب التسجيل.",
    },
    howToUseTranslations: {
      en: [
        "Browse the daily Bing wallpaper displayed in the main card.",
        "Switch between 4K UHD, 1920×1080 Full HD, and Mobile Portrait resolutions.",
        "Click Previous/Next to browse the 7-day wallpaper history.",
        "Click Random to discover a surprise wallpaper.",
        "Click Download to save directly to your device.",
      ],
      es: [
        "Explora el fondo de pantalla diario de Bing en la tarjeta principal.",
        "Cambia entre resoluciones 4K, Full HD y Móvil.",
        "Usa Anterior/Siguiente para ver el historial de 7 días.",
        "Haz clic en Aleatorio para un fondo sorpresa.",
        "Descarga directamente a tu dispositivo.",
      ],
      ar: [
        "تصفح خلفية بينغ اليومية في البطاقة الرئيسية.",
        "بدّل بين دقة 4K و Full HD و mobile.",
        "استخدم السابق/التالي لتصفح تاريخ 7 أيام.",
        "انقر على عشوائي لاكتشاف خلفية مفاجئة.",
        "حمّل مباشرة إلى جهازك.",
      ],
    },
    faqTranslations: {
      en: [
        { question: "Where do these wallpapers come from?", answer: "All wallpapers are from the official Bing Homepage Image Archive API, updated daily with new stunning photography." },
        { question: "Are these wallpapers free to download?", answer: "Yes, absolutely free for personal use as desktop and mobile backgrounds." },
        { question: "What resolutions are available?", answer: "4K UHD (3840×2160), Full HD (1920×1080), and Mobile Portrait (1080×1920)." },
        { question: "Can I use these wallpapers commercially?", answer: "For personal use only. Check the photographer's copyright for commercial licensing." },
      ],
      es: [
        { question: "¿De dónde vienen estos fondos?", answer: "Del archivo oficial de Bing Homepage Image API, actualizado diariamente." },
        { question: "¿Son gratis para descargar?", answer: "Sí, totalmente gratis para uso personal como fondos de escritorio y móvil." },
        { question: "¿Qué resoluciones hay?", answer: "4K UHD, Full HD 1080p, y Mobile Portrait." },
        { question: "¿Uso comercial?", answer: "Solo para uso personal. Verifique los derechos del fotógrafo para uso comercial." },
      ],
      ar: [
        { question: "من أين تأتي هذه الخلفيات؟", answer: "من أرشيف Bing الرسمي، يتم تحديثها يومياً." },
        { question: "هل هي مجانية للتحميل؟", answer: "نعم، مجانية تماماً للاستخدام الشخصي." },
        { question: "ما الدقات المتاحة؟", answer: "4K UHD و Full HD 1080p و Mobile Portrait." },
        { question: "هل يمكن استخدامها تجارياً؟", answer: "للاستخدام الشخصي فقط. تحقق من حقوق المصور للاستخدام التجاري." },
      ],
    },
  },
  {
    id: "nasa-apod",
    name: "NASA Astronomy Picture of the Day",
    description:
      "Explore the cosmos with NASA's daily astronomy picture. Browse history, random discoveries, HD downloads. Powered by NASA APOD.",
    category: "text",
    icon: "🔭",
    path: "/tools/nasa-apod",
    seoTitle: "Free NASA Astronomy Picture of the Day — Daily Space Photos 2026",
    seoDescription: "Explore the universe with NASA's daily astronomy picture. Browse historical space photos, random discoveries, and download HD images. Powered by NASA APOD. Free, no signup required.",
    seoKeywords: [
      "nasa apod", "astronomy picture of the day", "nasa daily image",
      "space photo", "hubble telescope image", "nasa picture",
      "astronomy photo", "galaxy wallpaper", "nebula image",
    ],
    howToUse: [
      "View today's NASA Astronomy Picture of the Day in the main card.",
      "Click Previous/Next to browse daily astronomy photos by date.",
      "Click Random to discover a random APOD from NASA's archive.",
      "For images, click Download HD to save the full-resolution version.",
      "Browse the 7-day history thumbnails below for quick access.",
    ],
    faq: [
      { question: "What is NASA APOD?", answer: "NASA's Astronomy Picture of the Day is a daily image or photograph of our fascinating universe, along with a brief explanation written by a professional astronomer." },
      { question: "Are NASA images free to use?", answer: "NASA images are generally not copyrighted and may be used for educational or informational purposes. Always check the specific image copyright — some APOD images are from external photographers who retain rights." },
      { question: "How far back does the APOD archive go?", answer: "NASA APOD has been publishing daily since June 16, 1995. That's over 30 years of astronomy images to explore." },
      { question: "What if today's APOD is a video?", answer: "Some days feature astronomy-related videos instead of images. These are embedded directly from YouTube and you can watch them on this page." },
    ],
    nameTranslations: {
      en: "NASA Astronomy Picture of the Day",
      es: "NASA Imagen Astronómica del Día",
      ar: "صورة ناسا الفلكية اليومية",
    },
    descriptionTranslations: {
      en: "Explore the cosmos with NASA's daily astronomy picture. Free, no signup. Powered by NASA APOD.",
      es: "Explora el cosmos con la imagen astronómica diaria de NASA. Gratis, sin registro.",
      ar: "استكشف الكون مع صورة ناسا الفلكية اليومية. مجاني، بدون تسجيل.",
    },
    seoTitleTranslations: {
      en: "Free NASA Astronomy Picture of the Day — Daily Space Photos 2026",
      es: "NASA Imagen Astronómica del Día Gratis — Fotos Espaciales 2026",
      ar: "صورة ناسا الفلكية اليومية مجاناً — صور فضائية يومية 2026",
    },
    seoDescriptionTranslations: {
      en: "Explore the universe with NASA's daily astronomy picture. Browse space photos, random discoveries, HD downloads. Free, no signup.",
      es: "Explora el universo con la imagen astronómica diaria de NASA. Navega por fotos espaciales y descarga en HD. Gratis.",
      ar: "استكشف الكون مع صورة ناسا الفلكية اليومية. تصفح الصور الفضائية وحمّلها بدقة عالية. مجاني.",
    },
    howToUseTranslations: {
      en: ["View today's APOD in the main card.", "Use Previous/Next to browse by date.", "Click Random for a surprise.", "Download HD for full resolution.", "Browse history thumbnails below."],
      es: ["Ve la APOD de hoy.", "Usa Anterior/Siguiente por fecha.", "Aleatorio para sorpresa.", "Descarga HD.", "Historial abajo."],
      ar: ["اعرض صورة اليوم.", "السابق/التالي للتصفح.", "عشوائي للمفاجأة.", "حمّل بدقة HD.", "التاريخ أدناه."],
    },
    faqTranslations: {
      en: [
        { question: "What is NASA APOD?", answer: "NASA's Astronomy Picture of the Day features a daily image of our universe with an astronomer's explanation." },
        { question: "Are NASA images free?", answer: "NASA images are generally not copyrighted for educational use. Check individual photographer copyrights." },
        { question: "How far back does it go?", answer: "The APOD archive goes back to June 16, 1995 — over 30 years of daily astronomy images." },
        { question: "What about video APODs?", answer: "Some days feature astronomy videos embedded from YouTube." },
      ],
      es: [
        { question: "¿Qué es NASA APOD?", answer: "Imagen Astronómica del Día de NASA — una foto diaria del universo con explicación astronómica." },
        { question: "¿Son gratis las imágenes?", answer: "Generalmente sin copyright para uso educativo. Verifique los derechos del fotógrafo individual." },
        { question: "¿Hasta cuándo llega el archivo?", answer: "Desde el 16 de junio de 1995 — más de 30 años de imágenes diarias." },
        { question: "¿Y los APODs de video?", answer: "Algunos días presentan videos astronómicos incrustados de YouTube." },
      ],
      ar: [
        { question: "ما هي صورة ناسا الفلكية اليومية؟", answer: "صورة يومية للكون مع شرح فلكي من عالم فلك محترف." },
        { question: "هل صور ناسا مجانية؟", answer: "بشكل عام غير محمية بحقوق النشر للاستخدام التعليمي. تحقق من حقوق المصور." },
        { question: "كم يمتد الأرشيف؟", answer: "يعود إلى 16 يونيو 1995 — أكثر من 30 عاماً من الصور اليومية." },
        { question: "ماذا عن الفيديوهات؟", answer: "بعض الأيام تقدم فيديوهات فلكية من YouTube." },
      ],
    },
  },
  {
    id: "crypto-price",
    name: "Cryptocurrency Price Tracker",
    description: "Track real-time cryptocurrency prices — Bitcoin, Ethereum, Solana, and more. Live USD prices, 24h change, auto-refresh. Free, no signup.",
    category: "text",
    icon: "📈",
    path: "/tools/crypto-price",
    seoTitle: "Free Cryptocurrency Price Tracker — Live BTC, ETH Prices 2026",
    seoDescription: "Track real-time crypto prices: Bitcoin, Ethereum, Solana, and more. Live USD prices with 24h change indicators. Auto-refresh every 30 seconds. Powered by CoinGecko.",
    seoKeywords: ["crypto price", "bitcoin price", "ethereum price", "crypto tracker", "btc usd", "live crypto prices", "cryptocurrency tracker"],
    howToUse: ["View real-time prices for 8 major cryptocurrencies.", "Prices auto-refresh every 30 seconds.", "Green ▲ indicates price increase, Red ▼ indicates decrease.", "Click Refresh to manually update all prices."],
    faq: [
      { question: "Where does the price data come from?", answer: "All price data is from the CoinGecko API, a leading cryptocurrency data aggregator tracking thousands of coins across hundreds of exchanges." },
      { question: "How often do prices update?", answer: "Prices automatically refresh every 30 seconds. You can also click the Refresh button anytime for an instant update." },
      { question: "Is this financial advice?", answer: "No. All prices are for informational purposes only. This is not financial advice, trading recommendation, or investment guidance." },
    ],
    nameTranslations: { en: "Cryptocurrency Price Tracker", es: "Rastreador de Precios Cripto", ar: "متتبع أسعار العملات الرقمية" },
    descriptionTranslations: { en: "Live crypto prices: Bitcoin, Ethereum, Solana & more. Free USD tracker.", es: "Precios cripto en vivo: Bitcoin, Ethereum, Solana y más.", ar: "أسعار العملات الرقمية: بيتكوين، إيثيريوم، سولانا والمزيد." },
    seoTitleTranslations: { en: "Free Cryptocurrency Price Tracker — Live BTC, ETH Prices 2026", es: "Rastreador de Precios Cripto Gratis — BTC, ETH en Vivo 2026", ar: "متتبع أسعار العملات الرقمية مجاناً — BTC, ETH 2026" },
    seoDescriptionTranslations: { en: "Live crypto prices with 24h change. Bitcoin, Ethereum, Solana & more. Auto-refresh. Powered by CoinGecko.", es: "Precios cripto en vivo con cambio 24h. Auto-actualización. Powered by CoinGecko.", ar: "أسعار العملات الرقمية مع تغير 24 ساعة. تحديث تلقائي. بدعم من CoinGecko." },
    howToUseTranslations: { en: ["View 8 major cryptocurrencies.", "Auto-refresh every 30 seconds.", "Green ▲ = up, Red ▼ = down.", "Click Refresh anytime."], es: ["Ve 8 criptomonedas.", "Actualización cada 30s.", "Verde ▲ = sube, Rojo ▼ = baja."], ar: ["اعرض 8 عملات.", "تحديث كل 30 ثانية.", "أخضر ▲ = ارتفاع، أحمر ▼ = انخفاض."] },
    faqTranslations: {
      en: [{ question: "Data source?", answer: "CoinGecko API, a leading crypto data aggregator." }, { question: "Refresh rate?", answer: "Every 30 seconds automatically." }, { question: "Financial advice?", answer: "No — informational purposes only." }],
      es: [{ question: "¿Fuente?", answer: "API de CoinGecko." }, { question: "¿Actualización?", answer: "Cada 30 segundos." }, { question: "¿Consejo financiero?", answer: "No — solo informativo." }],
      ar: [{ question: "المصدر؟", answer: "CoinGecko API." }, { question: "التحديث؟", answer: "كل 30 ثانية." }, { question: "نصيحة مالية؟", answer: "لا — لأغراض معلوماتية فقط." }],
    },
  },
  {
    id: "world-map",
    name: "World Map Explorer",
    description: "Search and explore any city worldwide on an interactive map. Free, no signup — powered by OpenStreetMap & Leaflet.",
    category: "text",
    icon: "🗺️",
    path: "/tools/world-map",
    seoTitle: "Free World Map Explorer — Interactive Map with City Search 2026",
    seoDescription: "Explore any city worldwide on an interactive map. Search locations, zoom & pan, get coordinates. Powered by OpenStreetMap & Leaflet. Free, no signup.",
    seoKeywords: ["world map", "interactive map", "city search", "map explorer", "openstreetmap", "leaflet map", "free map tool"],
    howToUse: ["Type a city or place name in the search box to find it on the map.", "Click a search result to zoom directly to that location.", "Use mouse scroll to zoom and drag to pan the map.", "Click 'My Location' to center the map on your current position."],
    faq: [
      { question: "What map data is used?", answer: "Map tiles are from OpenStreetMap, a collaborative project to create a free editable map of the world. The map library is Leaflet, an open-source JavaScript library." },
      { question: "Is this tool really free?", answer: "Yes, completely free. OpenStreetMap tiles are free to use under the ODbL license. No signup required." },
      { question: "How accurate is the location search?", answer: "Geocoding is powered by Nominatim, which uses OpenStreetMap data. Results are generally very accurate for cities and known places worldwide." },
    ],
    nameTranslations: { en: "World Map Explorer", es: "Explorador de Mapa Mundial", ar: "مستكشف خريطة العالم" },
    descriptionTranslations: { en: "Search any city on an interactive world map. Free, powered by OpenStreetMap.", es: "Busca cualquier ciudad en un mapa mundial interactivo.", ar: "ابحث عن أي مدينة على خريطة العالم التفاعلية." },
    seoTitleTranslations: { en: "Free World Map Explorer — Interactive Map with City Search 2026", es: "Explorador de Mapa Mundial Gratis — Mapa Interactivo 2026", ar: "مستكشف خريطة العالم مجاناً — خريطة تفاعلية 2026" },
    howToUseTranslations: { en: ["Search a city.", "Click result to zoom.", "Scroll to zoom, drag to pan.", "Use My Location."], es: ["Busca una ciudad.", "Clic para acercar.", "Desplázate y haz zoom."], ar: ["ابحث عن مدينة.", "انقر للتكبير.", "اسحب للتحريك."] },
    faqTranslations: {
      en: [{ question: "Map data source?", answer: "OpenStreetMap + Leaflet library." }, { question: "Free?", answer: "Yes, OSM tiles are free under ODbL." }, { question: "Search accuracy?", answer: "Nominatim geocoding, very accurate for known places." }],
      es: [{ question: "¿Fuente?", answer: "OpenStreetMap + Leaflet." }, { question: "¿Gratis?", answer: "Sí, bajo licencia ODbL." }],
      ar: [{ question: "المصدر؟", answer: "OpenStreetMap + Leaflet." }, { question: "مجاني؟", answer: "نعم، تحت رخصة ODbL." }],
    },
  },
  {
    id: "ip-lookup",
    name: "IP Geolocation Lookup",
    description: "Find your IP address, country, city, ISP, timezone, and coordinates instantly. Free IP lookup — no signup required.",
    category: "text",
    icon: "🌐",
    path: "/tools/ip-lookup",
    seoTitle: "Free IP Geolocation Lookup — What Is My IP Address 2026",
    seoDescription: "Instantly find your IP address, country, city, ISP, timezone, and GPS coordinates. Free IP geolocation lookup powered by ipapi.co. No signup required.",
    seoKeywords: ["ip lookup", "what is my ip", "ip geolocation", "ip address lookup", "geo ip", "ip location", "my ip address"],
    howToUse: ["Open the page — your IP information is fetched automatically.", "View your IP, country, city, region, ISP, timezone, and coordinates.", "Click 'Copy All Info' to copy everything to clipboard.", "Click 'Refresh' to reload your IP data."],
    faq: [
      { question: "What is IP geolocation?", answer: "IP geolocation maps your IP address to a physical location — country, city, region, and approximate coordinates. It helps identify where an internet connection originates." },
      { question: "How accurate is the location?", answer: "IP geolocation is typically 95-99% accurate at the country level, 55-80% at the city level. It depends on the ISP and the IP database used." },
      { question: "Is my IP address stored?", answer: "No. All lookups are performed client-side via the ipapi.co API. No IP data is stored on our servers." },
    ],
    nameTranslations: { en: "IP Geolocation Lookup", es: "Búsqueda de Geolocalización IP", ar: "بحث تحديد الموقع الجغرافي IP" },
    descriptionTranslations: { en: "Find your IP, country, city, ISP, timezone & coordinates. Free.", es: "Encuentra tu IP, país, ciudad, ISP, zona horaria.", ar: "اعثر على IP، البلد، المدينة، ISP، المنطقة الزمنية." },
    seoTitleTranslations: { en: "Free IP Geolocation Lookup — What Is My IP Address 2026", es: "Búsqueda IP Gratis — Cuál Es Mi Dirección IP 2026", ar: "بحث IP مجاني — ما هو عنوان IP الخاص بي 2026" },
    howToUseTranslations: { en: ["Open — IP loads automatically.", "View details.", "Copy All.", "Refresh anytime."], es: ["Abre — IP carga automático.", "Ve detalles.", "Copiar todo.", "Actualizar."], ar: ["افتح — يتم تحميل IP تلقائياً.", "عرض التفاصيل.", "نسخ الكل.", "تحديث."] },
    faqTranslations: {
      en: [{ question: "What is IP geolocation?", answer: "Maps your IP to a physical location — country, city, coordinates." }, { question: "Accuracy?", answer: "~99% country level, ~60-80% city level." }, { question: "Is data stored?", answer: "No. Client-side lookup via ipapi.co." }],
      es: [{ question: "¿Qué es?", answer: "Ubica tu IP en país, ciudad, coordenadas." }, { question: "¿Precisión?", answer: "~99% país, ~60-80% ciudad." }],
      ar: [{ question: "ما هو؟", answer: "تحديد موقع IP إلى بلد، مدينة، إحداثيات." }, { question: "الدقة؟", answer: "~99% بلد، ~60-80% مدينة." }],
    },
  },
  {
    id: "pet-wallpaper",
    name: "Random Pet Wallpaper",
    description: "Get random cute cat, dog, and fox wallpapers. One-click refresh, fullscreen preview, free download. No signup required.",
    category: "text",
    icon: "🐾",
    path: "/tools/pet-wallpaper",
    seoTitle: "Free Random Pet Wallpaper — Cute Cats, Dogs & Foxes 2026",
    seoDescription: "Random cute cat, dog and fox photos. One-click refresh, fullscreen preview, and free download. No signup required.",
    seoKeywords: ["pet wallpaper", "cute cat", "dog photo", "fox image", "random pet", "animal wallpaper", "cute animal"],
    howToUse: ["Click Cat, Dog, or Fox tab to load a random photo.", "Click Refresh for a new random image.", "Click Fullscreen to view the image in full screen mode.", "Click Download to save the image."],
    faq: [
      { question: "Where do the images come from?", answer: "Cat images from Cataas/thecatapi.com, dog images from Dog CEO API, fox images from randomfox.ca. All are free public APIs." },
      { question: "Can I use these images commercially?", answer: "Images are provided by third-party APIs for personal non-commercial use. Check each source's terms for commercial licensing." },
    ],
    nameTranslations: { en: "Random Pet Wallpaper", es: "Fondo de Mascota Aleatorio", ar: "خلفية حيوان أليف عشوائية" },
    descriptionTranslations: { en: "Random cute cats, dogs & foxes. Free.", es: "Gatos, perros y zorros lindos aleatorios.", ar: "قطط وكلاب وثعالب لطيفة عشوائية." },
    seoTitleTranslations: { en: "Free Random Pet Wallpaper — Cute Cats, Dogs & Foxes 2026", es: "Fondo de Mascota Aleatorio Gratis 2026", ar: "خلفية حيوان أليف عشوائية مجانية 2026" },
    howToUseTranslations: { en: ["Click a tab.", "Refresh.", "Fullscreen.", "Download."], es: ["Elige pestaña.", "Actualizar.", "Pantalla completa.", "Descargar."], ar: ["اختر التبويب.", "تحديث.", "ملء الشاشة.", "تحميل."] },
    faqTranslations: {
      en: [{ question: "Source?", answer: "Cataas, Dog CEO, randomfox.ca." }, { question: "Commercial use?", answer: "Personal use only. Check source terms." }],
      es: [{ question: "¿Fuente?", answer: "Cataas, Dog CEO, randomfox.ca." }],
      ar: [{ question: "المصدر؟", answer: "Cataas, Dog CEO, randomfox.ca." }],
    },
  },
];
