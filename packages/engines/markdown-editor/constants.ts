export const SAMPLE_TEXT = `# Markdown Title

This is a fast, **split-screen** markdown editor with live HTML preview!

## Features
- Bold and *italic* text formatting
- Bullet lists and numbered lists
- Inline \`code\` blocks and fenced code snippets:
\`\`\`javascript
const greeting = "Hello, Jumpytools!";
console.log(greeting);
\`\`\`
- [Clickable links](https://jumpytools.dev)
- Tables and quotes

> "The best way to predict the future is to invent it." - Alan Kay

| Header 1 | Header 2 |
| -------- | -------- |
| Item A   | Item B   |
`;

export const TOOL_METADATA = {
  title: 'Markdown Editor & Previewer',
  description: 'A fast, split-screen markdown editor with live HTML preview. Supports GitHub-flavored markdown, tables, and code blocks.',
  slug: 'markdown-editor',
  category: 'text-content',
  fullWidth: true,
};

export const TOOL_ABOUT = [
  'The Markdown Editor & Previewer is a client-side document creation utility designed to compile raw Markdown text strings into formatted HTML elements in real-time. By splitting the interface into an interactive text editor and a synchronized side-by-side live preview window, the tool allows writers, developers, and technical managers to inspect layouts and format documentation instantly.',
  'What is Markdown and why is it useful?',
  'Markdown is a lightweight markup language containing plain-text formatting syntax created by John Gruber in 2004. The goal of Markdown is to enable developers and content writers to write in an easy-to-read and easy-to-write plain text format, which then converts seamlessly to clean, valid HTML (HyperText Markup Language). Because it uses simple characters (like asterisks for emphasis and hash symbols for headers), writers can focus on content creation without getting slowed down by writing raw HTML tag blocks.',
  'GitHub-Flavored Markdown (GFM) Features:',
  'Standard markdown has limits. Our engine integrates GitHub-Flavored Markdown specifications to support advanced elements crucial for documentation:',
  '• Fenced Code Blocks: Paste code blocks starting with triple backticks followed by the language tag (e.g. ` ```javascript `) to render syntax highlighting.',
  '• Tables: Create custom tables using pipelines and hyphens to structure database fields or specifications cleanly.',
  '• Task Lists: Add interactive checkboxes using `[ ]` and `[x]` syntax to document project goals.',
  '• Autolinks: URLs and email addresses are automatically parsed into active clickable links.',
  'Zero-Server Privacy Guarantee:',
  'Drafting project documentation, API keys, private logs, or software blueprints requires absolute confidentiality. Many online converters submit your draft text to remote databases or servers to perform compilation, exposing you to leak vulnerabilities. Jumpytools renders Markdown dynamically inside your browser tab using local parser packages. Your document data is never sent across the internet, protecting your notes and proprietary information entirely.'
];

export const TOOL_FAQS = [
  {
    question: 'Does this editor support GitHub Flavored Markdown (GFM)?',
    answer: 'Yes! The compiler supports standard GitHub Flavored Markdown additions, including tables, task lists, blockquotes, and fenced code blocks.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. The compilation is performed entirely inside your browser sandbox. None of your document text or private notes are ever transmitted to any external servers.',
  },
  {
    question: 'Can I export the compiled HTML?',
    answer: 'Yes. Once you have written your document, you can copy the raw markdown text or copy the generated HTML structure from the editor to paste directly into your CMS (e.g., WordPress, Ghost) or documentation manager.',
  },
  {
    question: 'How do I add an image in Markdown?',
    answer: 'Use the syntax `![Image Alt Description](image-url)`. The editor will fetch and display the target image inline inside the live preview block.',
  },
  {
    question: 'Are HTML tags allowed inside the editor?',
    answer: 'Yes. Markdown allows you to mix standard HTML tags (like `<u>` for underline, or `<br>` for line breaks) directly within the document, and the preview engine will render them accordingly.',
  },
  {
    question: 'Does this tool save my document draft if I refresh?',
    answer: 'Our editor processes everything in transient state memory. To ensure total privacy, drafts are not saved to remote cloud databases. Please make sure to copy and save your text locally before closing or refreshing the tab.',
  },
];
