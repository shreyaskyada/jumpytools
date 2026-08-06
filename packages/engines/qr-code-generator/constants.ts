export const DEFAULT_SIZE = 256;
export const DEFAULT_MARGIN = 4;
export const DEFAULT_FG_COLOR = '#000000';
export const DEFAULT_BG_COLOR = '#ffffff';

export const PRESET_COLORS = [
  '#000000',
  '#FFFFFF',
  '#EF4444',
  '#F97316',
  '#F59E0B',
  '#84CC16',
  '#22C55E',
  '#06B6D4',
  '#3B82F6',
  '#6366F1',
  '#D946EF',
  '#F43F5E',
];

export const TOOL_METADATA = {
  title: 'QR Code Generator',
  description:
    'Generate QR codes for any URL, text, or contact information instantly. Customize size and colors, then download as PNG.',
  slug: 'qr-code-generator',
  category: 'utility-tools',
  fullWidth: true,
};

export const TOOL_ABOUT = [
  'The QR Code Generator is an interactive utility designed to create high-quality, scannable Quick Response (QR) codes instantly. Running entirely client-side, the engine compiles text parameters, website URLs, and standard vCard structures into custom-styled two-dimensional barcodes that can be downloaded as PNG files for digital and print distribution.',
  'Understanding the Anatomy and Scaling of QR Codes:',
  'A QR code is composed of black modules arranged in a square grid on a white background, which can be read by imaging devices like smartphone cameras. The square patterns at three of the corners represent the finder patterns, which help the scanner determine the orientation and size of the barcode. As you add more text content, the density of the grid modules increases (moving from lower versions to higher versions).',
  'Error Correction Level (ECC) Explained:',
  'QR codes utilize Reed-Solomon error correction to restore data if the printed code becomes dirty, torn, or partially obscured. Our generator uses balanced correction levels to ensure high scannability:',
  '• Level L: Up to 7% damage recovery. Best for digital screens and short URLs.',
  '• Level M: Up to 15% damage recovery. The default standard for general marketing materials.',
  '• Level Q: Up to 25% damage recovery. Suitable for environments where the code might get slightly scuffed.',
  '• Level H: Up to 30% damage recovery. Allows you to embed logos or custom designs in the center without breaking scans.',
  'Best Practices for Scanning Success:',
  '• Contrast is Key: Always make sure the foreground color is significantly darker than the background. Light QR codes on dark backgrounds (inverted color schemes) fail to scan on many legacy readers.',
  '• Maintain the Quiet Zone: Do not reduce the margin spacing parameter to zero. The border area (quiet zone) is necessary for scanners to distinguish the QR code from surrounding webpage elements or print layouts.',
  '• Keep URLs Short: Dense QR codes with long strings are harder to scan on low-resolution cameras. Use clean, short URLs where possible.',
  '100% Secure Client-Side Generation:',
  'When generating QR codes for private links, Wi-Fi credentials, or sensitive contact cards, sending data to a third-party server creates unnecessary security vulnerabilities. Jumpytools renders your QR codes locally inside your web browser sandbox using standard client-side drawing algorithms. Your raw input data never travels across the network, ensuring complete confidentiality.'
];

export const TOOL_FAQS = [
  {
    question: 'Are my QR codes generated privately?',
    answer: 'Yes, all QR codes are compiled client-side in your web browser. No URL, text, or contact information is sent to our servers.',
  },
  {
    question: 'What is the maximum data size a QR code can hold?',
    answer: 'A standard QR code (Version 40) can store up to 2,953 binary bytes, 4,296 alphanumeric characters, or 7,089 numeric digits. However, for quick camera scanning, we recommend keeping text payloads under 150 characters.',
  },
  {
    question: 'What is the "Quiet Zone" on a QR code?',
    answer: 'The quiet zone is the blank margin surrounding the four outer borders of the QR code. This space is critical for scanner hardware and mobile software to detect where the QR code starts and ends, preventing background patterns from interfering with the scan.',
  },
  {
    question: 'Can I use custom colors for my QR code?',
    answer: 'Yes! You can customize both the foreground (modules) and background colors. Always ensure there is a high-contrast difference (e.g. dark blue on white) so that smartphone cameras can easily recognize the patterns.',
  },
  {
    question: 'Is there a difference between static and dynamic QR codes?',
    answer: 'Yes. Static QR codes encode the data directly into the matrix pattern itself; once generated, the destination URL cannot be edited. Dynamic QR codes encode a shortened redirection link controlled by a server, which allows the destination to be changed later without modifying the code image. Jumpytools generates 100% static, independent QR codes that do not rely on external servers and will never expire.',
  },
  {
    question: 'What file formats can I download?',
    answer: 'Currently, the generator allows you to download your customized code as a high-quality PNG image file. This format is widely supported across web pages, print layouts, and presentation slides.',
  },
];
