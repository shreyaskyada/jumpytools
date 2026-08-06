export const TOOL_METADATA = {
  title: 'Image Compressor',
  description: 'Reduce image file size by customizing quality, scaling dimensions, and converting formats client-side instantly.',
  slug: 'image-compressor',
  category: 'image-tools',
  fullWidth: true,
};

export const TOOL_ABOUT = [
  'The Image Compressor is an interactive, browser-native optimization utility designed to compress high-resolution photographs and graphics without sacrificing visual fidelity. Built to operate entirely client-side, the tool allows users to import large image payloads, customize quality parameters, scale pixel dimensions, and download optimized files instantly.',
  'Understanding the Core Compression Mechanisms:',
  'Image optimization typically targets two areas: metadata reduction and pixel payload compression. By loading your target file into an HTML5 Canvas container, our engine strips hidden metadata (such as camera settings, geolocation coordinates, and creation timestamps) that can inflate image files by several kilobytes. The canvas element then re-renders the pixels using lossy or lossless compression algorithms during export, resulting in dramatically smaller file sizes.',
  'Formatting and Format Selections:',
  '• JPEG/JPG: Best suited for photographs and complex scenery with continuous colors. Uses lossy compression, meaning higher compression rates lead to minor visual artifacts, but saves the most space.',
  '• PNG: Ideal for screenshots, icons, and illustrations with solid colors, text, or transparency. Uses lossless compression, meaning no visual quality is lost, but compression rates are lower than JPEG.',
  '• WebP: A modern, Google-developed format that offers superior lossy and lossless compression for web assets. WebP images are typically 25% to 34% smaller than equivalent JPEGs while preserving image quality.',
  'Developer and Webmaster Use Cases:',
  '• Page Load Optimization: Compress heavy landing page hero graphics and blog covers before uploading them to your hosting provider, helping to improve Google Core Web Vitals.',
  '• Storage Management: Reduce file attachment sizes before sending files to Amazon S3, database storage, or cloud infrastructure, directly saving on database hosting costs.',
  '• Email Attachments: Quickly compress photo attachments to stay within strict email size limit policies (e.g. 25MB thresholds).',
  'Total Client-Side Privacy:',
  'Security is paramount when handling personal photographs, proprietary product mockups, or sensitive document scans. Standard online image compress tools upload your files to remote cloud APIs, posing privacy risk profiles. Jumpytools processes your files entirely inside your local browser memory space. Your raw images are never sent over the network, processed by remote servers, or stored in databases, ensuring 100% data safety.'
];

export const TOOL_FAQS = [
  {
    question: 'How does client-side compression work?',
    answer: 'It loads your image onto an HTML5 canvas and draws it using a custom resolution. When exporting, it uses the browser\'s native compression quality parameters (e.g., canvas.toBlob) to generate a much smaller file.',
  },
  {
    question: 'Are my images uploaded to any server?',
    answer: 'No. All processing, scaling, and file compression happens entirely inside your browser. No files are ever sent to external cloud APIs or servers.',
  },
  {
    question: 'What is the difference between lossy and lossless compression?',
    answer: 'Lossy compression (used in JPEG and lossy WebP) permanently discards redundant data, resulting in significantly smaller file sizes at the cost of minor visual degradation if the quality setting is too low. Lossless compression (used in PNG and lossless WebP) compresses pixel values without losing any details, producing pixel-perfect reconstructions at the cost of larger final file sizes.',
  },
  {
    question: 'Does compressing images remove EXIF metadata?',
    answer: 'Yes. Drawing an image onto a Canvas context and converting it back to a file automatically strips all EXIF metadata, GPS coordinates, and camera profiles. This is excellent for privacy before uploading images to public portals.',
  },
  {
    question: 'Can I scale the image dimensions during compression?',
    answer: 'Yes. The interface offers scaling slider parameters that allow you to resize the width and height of the image proportionately. Reducing pixel dimensions is one of the most effective ways to lower file size.',
  },
  {
    question: 'Is there a limit to the image file size I can upload?',
    answer: 'While we do not enforce strict limits, the tool uses your device\'s local RAM and GPU Canvas buffers. Very large images (e.g. 50MB+ RAW files) might cause mobile browsers to reload due to memory limits, but standard mobile/DSLR photos (5MB to 20MB) are handled easily.',
  },
];
