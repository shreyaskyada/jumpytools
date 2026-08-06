import { MimeExtensionMap } from './types';

export const MIME_EXTENSIONS: Record<string, MimeExtensionMap> = {
  'image/png': { mime: 'image/png', ext: 'png' },
  'image/jpeg': { mime: 'image/jpeg', ext: 'jpg' },
  'image/webp': { mime: 'image/webp', ext: 'webp' },
  'image/gif': { mime: 'image/gif', ext: 'gif' },
  'image/bmp': { mime: 'image/bmp', ext: 'bmp' },
  'image/heic': { mime: 'image/heic', ext: 'heic' },
  'image/heif': { mime: 'image/heif', ext: 'heif' },
  'video/mp4': { mime: 'video/mp4', ext: 'mp4' },
  'video/webm': { mime: 'video/webm', ext: 'webm' },
  'video/ogg': { mime: 'video/ogg', ext: 'ogg' },
  'application/pdf': { mime: 'application/pdf', ext: 'pdf' },
  'application/octet-stream': { mime: 'application/octet-stream', ext: 'bin' },
};

export const TOOL_METADATA = {
  title: 'Base64 Image Converter',
  description: 'Convert images (PNG, JPG, WebP, GIF) and videos (MP4, WebM) to Base64 strings, or decode Base64 data back to viewable media and files instantly.',
  slug: 'base64-image-converter',
  category: 'developer-tools',
  fullWidth: true
};

export const TOOL_ABOUT = [
  'The Base64 Image Converter is a premium, client-side utility designed to encode binary media files into text-based Base64 representations and vice versa. By translating binary streams into safe ASCII characters, Base64 enables developers to transmit and embed media assets directly inside source code files, configuration payloads, and style templates.',
  'Understanding Base64 Encoding and Data URIs:',
  'Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format by translating it into a radix-64 representation. When applied to web assets, this encoding produces a "Data URL" or "Data URI" structured as `data:[mediatype];base64,[data]`. When browsers parse this string, they reconstruct the raw binary file context and render the image or video directly, without making a server request.',
  'Inline Media Embedding trade-offs:',
  '• Pros: Eliminates additional HTTP round-trip requests for small assets, helping load minor icons, logo files, or styling images instantly. Ensures the page is self-contained and loads as a single document.',
  '• Cons: Base64 encoding increases file payload sizes by approximately 33% compared to raw binary storage. Embedding large media assets (like high-res banners or videos) inline can block initial browser rendering and inflate JavaScript/CSS bundle sizes significantly.',
  'Advanced Decoder Features:',
  'The Decoder tab accepts raw Base64 strings as well as fully qualified Data URLs. If standard header tags are missing, our engine parses the leading magic numbers of the binary header stream to automatically detect the correct format (e.g. PNG, JPEG, GIF, WebP, BMP, PDF, MP4, WebM, or OGG). Users can override the file extension manual-check dropdown before executing downloads.',
  'Privacy and Local Sandbox Execution:',
  'Security is vital when converting custom files or private documents. Many web tools require sending your raw files to cloud API servers for encoding/decoding. Jumpytools executes the entire encoding logic locally using the browser\'s native `FileReader` API. Your files are processed inside your computer\'s local memory, guaranteeing that no personal documents, mockups, or videos are ever uploaded, tracked, or leaked.'
];

export const TOOL_FAQS = [
  {
    question: 'What is a Base64 Image Converter?',
    answer: 'It is a 2-in-1 media utility that allows you to: 1) Encode images and video clips to Base64 strings or Data URIs, and 2) Decode Base64 data blocks back to play/view them inside the browser and download them as files.',
  },
  {
    question: 'How does the format auto-detection work in the Decode tab?',
    answer: 'If you paste a Data URL (e.g. data:image/png;base64,...), the tool parses the format from the header. If you paste Plain Base64, the decoder reads the first few signature bytes (magic numbers) of the binary file stream to guess whether it is a PNG, JPEG, GIF, WebP, BMP, PDF, MP4, WebM, or OGG file.',
  },
  {
    question: 'What if the auto-detection fails for Plain Base64 data?',
    answer: 'You can use the "Select Decoded Format Override" dropdown to manually select the correct format (e.g. PNG, JPEG, MP4, WebM, etc.). This updates the preview and sets the correct extension for downloading.',
  },
  {
    question: 'Are there file size guidelines for browser processing?',
    answer: 'All processing happens 100% offline inside your browser. We recommend uploading files under 10MB for images and under 30MB for video clips to ensure fast response times and prevent browser tab freezes.',
  },
  {
    question: 'Why does Base64 make my files 33% larger?',
    answer: 'Base64 encoding uses 6 bits to represent each character, whereas raw binary data uses 8 bits per byte. This translation means that for every 3 bytes of raw binary data, Base64 requires 4 ASCII characters to represent it, resulting in a consistent size overhead expansion of roughly 33%.',
  },
  {
    question: 'When is it appropriate to embed Base64 media?',
    answer: 'It is best practice to use Base64 inline embedding only for tiny icons, vector shapes, or small CSS background assets under 5KB. For larger imagery, standard file referencing (linking to an external asset URL) is preferred because it allows browser cache storage to cache the media files separately.',
  },
];
