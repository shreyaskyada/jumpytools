export interface CategoryFAQ {
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon component name as a string reference
  longDescription: string[];
  faqs: CategoryFAQ[];
}

export const categories: Category[] = [
  {
    id: "developer-tools",
    name: "Developer Tools",
    description: "Formatters, generators, converters, and other developer utilities.",
    icon: "Code",
    longDescription: [
      "Our developer tools suite provides essential client-side utilities for web developers, software engineers, and API designers. From JSON formatting and JWT decoding to UUID generation and Base64 conversion, every tool runs completely in your browser sandbox without sending any code or sensitive payload to remote servers.",
      "Designed for speed and reliability, these utilities eliminate cold starts, server latency, and security concerns associated with backend formatters. Whether you are debugging REST APIs, encoding URL parameters, or inspecting timestamps, our utilities deliver instant results with zero network overhead."
    ],
    faqs: [
      {
        question: "Are my API keys or tokens safe when using these developer tools?",
        answer: "Yes, 100%. All processing happens locally in your browser JavaScript engine. No data, headers, or tokens are transmitted to any external server."
      },
      {
        question: "Do these developer tools work offline?",
        answer: "Once loaded, most of our web utilities run entirely in browser memory and can function without an active internet connection."
      },
      {
        question: "Which formats and standards are supported?",
        answer: "Our developer tools adhere strictly to modern web standards including RFC 4122 (UUID), RFC 7519 (JWT), and standard ISO/POSIX timestamp formats."
      }
    ]
  },
  {
    id: "text-content",
    name: "Text & Content",
    description: "Utilities to manipulate, analyze, and format text data.",
    icon: "FileText",
    longDescription: [
      "The text & content category offers powerful text manipulation, analysis, and formatting utilities for writers, editors, developers, and marketers. Effortlessly clean text case, compare code diffs, analyze word frequencies, generate placeholder text, or reverse string formats in seconds.",
      "Everything is processed locally in client memory, ensuring your confidential manuscripts, corporate copy, or proprietary code remain completely private and secure on your local device."
    ],
    faqs: [
      {
        question: "How accurate is the word and character count?",
        answer: "Our word counting engine uses unicode-aware tokenization to accurately count words, characters, sentences, and estimated reading times across multiple languages."
      },
      {
        question: "Can I compare large code blocks using the text diff tool?",
        answer: "Yes, our client-side diff engine handles large text blocks smoothly by computing line-by-line and character-level differences in real time."
      },
      {
        question: "Is my text data stored or saved on any server?",
        answer: "No. Your text is processed entirely within your browser window and is wiped as soon as you clear the input or close the tab."
      }
    ]
  },
  {
    id: "image-tools",
    name: "Image Tools",
    description: "Compress, resize, and convert image formats client-side instantly.",
    icon: "Image",
    longDescription: [
      "Our image tools category empowers creators, webmasters, and developers to compress, convert, and optimize images directly inside the web browser. Convert between PNG, JPEG, WebP, AVIF, and GIF formats or compress image file sizes without sacrificing visual quality.",
      "By utilizing browser Canvas and WebAssembly engines, image transformations happen on your device. Large image files never upload over slow networks, saving bandwidth while maintaining total data privacy."
    ],
    faqs: [
      {
        question: "How does browser-based image compression work?",
        answer: "Your browser uses HTML5 Canvas and native image codecs to adjust compression parameters and export optimized images locally on your device."
      },
      {
        question: "Is there a file size limit for uploading images?",
        answer: "Because processing happens on your local hardware, file limits depend only on your device's memory. You can process large high-resolution images instantly."
      },
      {
        question: "Are original images stored anywhere after conversion?",
        answer: "No, files are never uploaded to any server. Converted and compressed images are generated in-memory and discarded when you navigate away."
      }
    ]
  },
  {
    id: "design-color",
    name: "Design & Color",
    description: "Color converters, generators, and styling tools.",
    icon: "Palette",
    longDescription: [
      "The design & color tools collection provides web designers, UI/UX developers, and graphic artists with instant color conversions and graphic generator utilities. Effortlessly convert color values between HEX, RGB, HSL, and CMYK, test contrast accessibility, or design custom award certificates.",
      "Whether you are crafting design tokens for a CSS library or generating high-resolution printable certificates, our tools offer live previews, instant CSS copy triggers, and high-performance client rendering."
    ],
    faqs: [
      {
        question: "Which color models are supported by the Color Converter?",
        answer: "We support HEX, RGB, HSL, and CMYK color spaces with real-time conversion and CSS code snippet exports."
      },
      {
        question: "Can I download generated certificates in high quality?",
        answer: "Yes, certificates are rendered on high-DPI HTML5 canvases and can be downloaded as crisp PNG graphics suitable for printing or digital distribution."
      },
      {
        question: "Are the color conversion calculations exact?",
        answer: "Yes, color values are converted using standard mathematical color space transformations for precise design fidelity."
      }
    ]
  },
  {
    id: "math-calc",
    name: "Math & Calculation",
    description: "Calculators and mathematical utility tools.",
    icon: "Calculator",
    longDescription: [
      "Our math & calculation utilities feature fast, accurate calculators for daily calculations, financial ratios, health metrics, and time intervals. Compute age down to seconds, analyze Body Mass Index (BMI), or calculate percentage increases and discounts with clean visual breakdowns.",
      "Built with precise mathematical algorithms, these calculators provide instantaneous results without full page reloads or tedious multi-step forms."
    ],
    faqs: [
      {
        question: "How does the Age Calculator handle leap years and timezone differences?",
        answer: "Our age engine accounts for leap years, variable month lengths, and exact date boundaries based on your local calendar input."
      },
      {
        question: "What formulas are used for the BMI Calculator?",
        answer: "We compute standard Body Mass Index (BMI) using metric and imperial formulas recommended by the World Health Organization (WHO), alongside Ponderal Index metrics."
      },
      {
        question: "Can I calculate percentage changes for negative numbers?",
        answer: "Yes, our percentage calculator accurately handles positive, negative, and fractional inputs for percentage change, difference, and total calculations."
      }
    ]
  },
  {
    id: "security-tools",
    name: "Security Tools",
    description: "Password generators and other security utilities.",
    icon: "Shield",
    longDescription: [
      "Security tools at Jumpytools provide client-side cryptographic and password generation utilities designed to keep your credentials safe. Generate cryptographically strong random passwords with customizable length and symbol rules.",
      "Because security requires absolute trust, all random generation relies on your browser's native crypto.getRandomValues() API. Zero data is logged, transmitted, or saved outside your local browser state."
    ],
    faqs: [
      {
        question: "How secure is the Password Generator?",
        answer: "Our password generator uses the browser's Web Cryptography API (window.crypto), ensuring true cryptographically secure random number generation."
      },
      {
        question: "Does Jumpytools send generated passwords to any server?",
        answer: "Never. Passwords are generated strictly inside client memory on your machine. We do not store or transmit any passwords."
      },
      {
        question: "What character sets can I customize in generated passwords?",
        answer: "You can toggle uppercase letters, lowercase letters, numbers, special symbols, and exclude visually ambiguous characters (like 1, l, O, 0)."
      }
    ]
  },
  {
    id: "utility-tools",
    name: "Utility Tools",
    description: "Handy generators and conversion utilities for everyday tasks.",
    icon: "Wrench",
    longDescription: [
      "Our utility tools section aggregates essential everyday helpers, decision makers, and code generators. Generate customized QR codes for websites and contact cards or use the interactive random name picker wheel for classroom activities and giveaways.",
      "Designed with intuitive user interfaces and responsive layouts, these tools offer seamless performance across mobile devices and desktop computers."
    ],
    faqs: [
      {
        question: "Can I customize the design of generated QR codes?",
        answer: "Yes, you can customize foreground and background colors, size dimensions, and export clean PNG images for print or web use."
      },
      {
        question: "How does the Name Random Picker Wheel ensure fair selection?",
        answer: "The wheel uses a fair pseudo-random algorithm and realistic physics animations to select items unbiasedly from your custom list."
      },
      {
        question: "Are generated QR codes permanent?",
        answer: "Yes! The QR code encodes your data directly into the matrix pattern. It is non-expiring and requires no external redirect service."
      }
    ]
  },
  {
    id: "fun-games",
    name: "Fun & Games",
    description: "Fun, entertainment, and relationship compatibility calculators.",
    icon: "Heart",
    longDescription: [
      "Fun & games utilities offer entertaining interactive tools, relationship compatibility calculators, and social game generators. Test your relationship status with the classic FLAMES game, calculate name compatibility scores, or measure your reality gap with the Delulu Meter.",
      "Whether you are sharing results with friends or having fun during a break, all games provide instant, deterministic outcomes without requiring logins or personal registration."
    ],
    faqs: [
      {
        question: "How does the Love Calculator determine compatibility scores?",
        answer: "Our calculator uses a deterministic character-frequency hashing algorithm on both names to produce consistent, fun compatibility percentages and ratings."
      },
      {
        question: "What is the FLAMES game?",
        answer: "FLAMES is a popular relationship prediction game where matching characters between two names are removed to determine a relationship outcome: Friends, Lovers, Affection, Marriage, Enemies, or Siblings."
      },
      {
        question: "Can I share my Delulu Meter or FLAMES results?",
        answer: "Yes! You can copy your result summaries or take screenshots to share on social media platforms."
      }
    ]
  },
];

export interface CategoryTheme {
  color: string;
  bgGlow: string;
  iconBg: string;
  iconColor: string;
  borderHover: string;
  accentColor: string;
}

export const categoryThemes: Record<string, CategoryTheme> = {
  "developer-tools": {
    color: "from-blue-500 to-cyan-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] hover:border-blue-500/30",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/15 group-hover:bg-blue-500/20",
    iconColor: "text-blue-500",
    borderHover: "group-hover:border-blue-500/30",
    accentColor: "blue"
  },
  "text-content": {
    color: "from-violet-500 to-purple-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] hover:border-violet-500/30",
    iconBg: "bg-violet-500/10 dark:bg-violet-500/15 group-hover:bg-violet-500/20",
    iconColor: "text-violet-500",
    borderHover: "group-hover:border-violet-500/30",
    accentColor: "violet"
  },
  "image-tools": {
    color: "from-emerald-500 to-teal-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] hover:border-emerald-500/30",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-500",
    borderHover: "group-hover:border-emerald-500/30",
    accentColor: "emerald"
  },
  "design-color": {
    color: "from-pink-500 to-rose-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.08)] hover:border-pink-500/30",
    iconBg: "bg-pink-500/10 dark:bg-pink-500/15 group-hover:bg-pink-500/20",
    iconColor: "text-pink-500",
    borderHover: "group-hover:border-pink-500/30",
    accentColor: "pink"
  },
  "math-calc": {
    color: "from-amber-500 to-orange-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] hover:border-amber-500/30",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/15 group-hover:bg-amber-500/20",
    iconColor: "text-amber-500",
    borderHover: "group-hover:border-amber-500/30",
    accentColor: "amber"
  },
  "security-tools": {
    color: "from-red-500 to-rose-600",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.08)] hover:border-red-500/30",
    iconBg: "bg-red-500/10 dark:bg-red-500/15 group-hover:bg-red-500/20",
    iconColor: "text-red-500",
    borderHover: "group-hover:border-red-500/30",
    accentColor: "red"
  },
  "utility-tools": {
    color: "from-teal-500 to-indigo-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.08)] hover:border-teal-500/30",
    iconBg: "bg-teal-500/10 dark:bg-teal-500/15 group-hover:bg-teal-500/20",
    iconColor: "text-teal-500",
    borderHover: "group-hover:border-teal-500/30",
    accentColor: "teal"
  },
  "fun-games": {
    color: "from-pink-500 to-rose-500",
    bgGlow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.08)] hover:border-pink-500/30",
    iconBg: "bg-pink-500/10 dark:bg-pink-500/15 group-hover:bg-pink-500/20",
    iconColor: "text-pink-500",
    borderHover: "group-hover:border-pink-500/30",
    accentColor: "pink"
  }
};

