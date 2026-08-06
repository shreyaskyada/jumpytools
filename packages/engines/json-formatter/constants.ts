export const DEFAULT_SPACES = 2;
export const MAX_JSON_SIZE = 500000;

export const TOOL_METADATA = {
  title: 'JSON Formatter / Validator',
  description: 'Format, validate, and minify raw JSON string data. Prettify with customizable tab indentation levels and inspect nodes in a collapsible tree explorer.',
  slug: 'json-formatter',
  category: 'developer-tools',
  fullWidth: true,
};

export const TOOL_FAQS = [
  {
    question: 'Is my JSON data secure on this website?',
    answer: 'Yes — all processing happens entirely in your browser. Your data never leaves your device and is not sent to any server.',
  },
  {
    question: 'How do I format JSON with custom indentation?',
    answer: 'Use the "Spaces" dropdown in the toolbar to select your preferred indentation level (2, 4, or 8 spaces), then click "Prettify JSON".',
  },
  {
    question: 'Can this tool handle invalid JSON?',
    answer: 'The formatter will detect invalid JSON and show a descriptive error message below the input area. The Format and Minify buttons are disabled until the input is valid.',
  },
  {
    question: 'What are the most common JSON syntax errors?',
    answer: 'JSON syntax is highly strict. The most common errors developers encounter are: 1. Mismatched or missing double quotes (single quotes are invalid in JSON keys and values). 2. Trailing commas after the last item in an object or array. 3. Missing commas separating key-value pairs. 4. Unescaped control characters in string values. Our built-in validator flags these errors and points directly to the line and character where the syntax mismatch occurred.',
  },
  {
    question: 'What is the difference between Pretty-Printing and Minification?',
    answer: 'Pretty-printing inserts whitespace, tabs, and line breaks into the JSON payload, making it easy for human developers to read, trace, and debug nested structures. Minification does the opposite: it strips away all non-functional white spaces and line feeds, packing the data into a single dense line. Minified JSON is preferred for production network requests because it reduces payload size and saves bandwidth during API transit.',
  },
  {
    question: 'Why doesn\'t JSON support comments?',
    answer: 'The JSON standard (RFC 8259) was deliberately designed without comment support to prevent people from using it for configuration files that require annotations. Douglas Crockford, the creator of JSON, removed comments to prevent compilers and parsers from breaking due to custom parsing rules, keeping the format strictly focused on clean data serialization.',
  },
];

export const TOOL_ABOUT = [
  'JavaScript Object Notation (JSON) is the universal standard for exchanging structured data across the modern web. From public REST APIs and configuration files to database storage like PostgreSQL and MongoDB, JSON is preferred for its lightweight format and high readability. However, raw JSON payloads emitted by servers are typically minified into a single long string to optimize network performance, making them difficult for human developers to inspect or debug during development.',
  'Our client-side JSON Formatter solves this by instantly prettifying, minifying, and validating your data. The editor features automatic syntax highlighting, line numbers, and collapsible nodes, allowing you to easily browse deeply nested structures like complex API responses or large configurations without lagging your browser.',
  'Understanding JSON Syntax Rules:',
  'Unlike standard JavaScript objects, JSON has highly strict validation requirements. Every key must be enclosed in double quotes (single quotes are syntax errors). Values can only be strings (enclosed in double quotes), numbers, booleans (true/false), null, array lists, or other nested JSON objects. Trailing commas are strictly prohibited; placing a comma after the final key-value pair in an object or array will cause standard parsers to fail.',
  'Common Developer Use Cases:',
  '• API Debugging: Copy raw minified payloads from your browser developer console or cURL command, paste them here to format, and trace nested fields.',
  '• Configuration Checks: Prettify and validate project files like package.json, tsconfig.json, or custom application settings to ensure they conform to standards.',
  '• Payload Compression: Use the "Minify" option to strip all whitespace and reduce file size before sending payloads through cURL or API testing clients.',
  '• Real-time Validation: Identify syntax errors instantly as you type, complete with precise line and character index indicators.',
  'Privacy and Client-Side Safety:',
  'Security is critical when dealing with sensitive application configurations, environment variables, or user payloads. Many online formatters transmit your data to remote cloud servers to perform formatting, exposing you to data leaks. Our Jumpytools JSON Formatter operates entirely client-side. The parsing, sorting, and formatting occur inside your local browser tab, ensuring your proprietary configurations and sensitive keys never leave your machine.',
];

