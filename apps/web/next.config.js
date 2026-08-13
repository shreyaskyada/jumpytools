/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Root-level short aliases only.
    // All /tools/{any-variation} URLs are handled automatically by the
    // smart word-matching engine in app/tools/[slug]/page.tsx — no need
    // to list them here. Only add root-level shortcuts (without /tools/ prefix)
    // for common short URLs people might type directly.
    const aliasMap = [
      // JWT Decoder
      {
        sources: [
          '/jwt', '/jwt-decoder', '/jwt-decode', '/jwt-token', '/decode-jwt', '/token-decoder',
          '/jwt-debugger', '/jwt-verifier', '/jwt-validator', '/jwt-checker', '/jwt-inspector',
          '/jwt-parser', '/jwt-reader', '/bearer-token-decoder', '/decode-token',
          '/jwt-token-decoder', '/token-parser',
        ],
        destination: '/tools/jwt-decoder',
      },
      // JWT Generator
      {
        sources: ['/jwt-generator', '/jwt-signer', '/create-jwt', '/generate-jwt'],
        destination: '/tools/jwt-generator',
      },
      // JSON Formatter
      {
        sources: ['/json', '/json-formatter', '/json-validator', '/json-parser', '/json-prettifier'],
        destination: '/tools/json-formatter',
      },
      // UUID Generator
      {
        sources: ['/uuid', '/guid', '/uuid-generator', '/guid-generator'],
        destination: '/tools/uuid-generator',
      },
      // Base64 Image Converter
      {
        sources: ['/base64', '/base64-converter', '/base64-image', '/image-to-base64'],
        destination: '/tools/base64-image-converter',
      },
      // Timestamp Converter
      {
        sources: ['/timestamp', '/unix-timestamp', '/epoch-converter', '/timestamp-converter'],
        destination: '/tools/timestamp-converter',
      },
      // Timezone Converter
      {
        sources: ['/timezone', '/timezone-converter', '/time-zone-converter', '/world-clock'],
        destination: '/tools/timezone-converter',
      },
      // Word Counter
      {
        sources: ['/word-counter', '/word-count', '/character-counter'],
        destination: '/tools/word-counter',
      },
      // Case Converter
      {
        sources: ['/case-converter', '/case-change', '/uppercase-converter', '/camelcase-converter'],
        destination: '/tools/case-converter',
      },
      // Image Compressor
      {
        sources: ['/image-compressor', '/compress-image', '/image-compression', '/photo-compressor'],
        destination: '/tools/image-compressor',
      },
      // Image Converter
      {
        sources: ['/image-converter', '/convert-image', '/png-to-jpg', '/webp-converter'],
        destination: '/tools/image-converter',
      },
      // Password Generator
      {
        sources: ['/password', '/password-generator', '/passgen', '/random-password'],
        destination: '/tools/password-generator',
      },
      // QR Code Generator
      {
        sources: ['/qr', '/qr-code', '/qr-generator', '/qr-code-generator'],
        destination: '/tools/qr-code-generator',
      },
      // URL Encoder / Decoder
      {
        sources: ['/url-encoder', '/url-decoder', '/url-encode', '/url-encoder-decoder'],
        destination: '/tools/url-encoder-decoder',
      },
      // Color Converter
      {
        sources: ['/color-converter', '/hex-to-rgb', '/rgb-to-hex', '/color-picker'],
        destination: '/tools/color-converter',
      },
      // Lorem Ipsum Generator
      {
        sources: ['/lorem', '/lorem-ipsum', '/lorem-ipsum-generator', '/dummy-text'],
        destination: '/tools/lorem-ipsum-generator',
      },
      // Text Diff
      {
        sources: ['/diff', '/text-diff', '/diff-checker', '/text-compare'],
        destination: '/tools/text-diff',
      },
      // Word Frequency Analyzer
      {
        sources: ['/word-frequency', '/word-frequency-analyzer', '/keyword-density'],
        destination: '/tools/word-frequency-analyzer',
      },
      // Text Reverser
      {
        sources: ['/text-reverser', '/reverse-text', '/text-flip'],
        destination: '/tools/text-reverser',
      },
      // List Randomizer
      {
        sources: ['/list-randomizer', '/shuffle-list', '/list-shuffler'],
        destination: '/tools/list-randomizer',
      },
      // Number Randomizer
      {
        sources: ['/rng', '/random-number', '/random-number-generator', '/number-randomizer'],
        destination: '/tools/number-randomizer',
      },
      // Certificate Generator
      {
        sources: ['/certificate-generator', '/certificate-maker', '/create-certificate'],
        destination: '/tools/certificate-generator',
      },
      // Markdown Editor
      {
        sources: ['/markdown-editor', '/markdown-preview', '/md-editor'],
        destination: '/tools/markdown-editor',
      },
      // Name Wheel Picker
      {
        sources: ['/name-wheel-picker', '/wheel-of-names', '/random-name-picker', '/spinner-wheel'],
        destination: '/tools/name-wheel-picker',
      },
      // Age Calculator
      {
        sources: ['/age-calculator', '/calculate-age', '/age-calc'],
        destination: '/tools/age-calculator',
      },
      // BMI Calculator
      {
        sources: ['/bmi', '/bmi-calculator', '/calculate-bmi'],
        destination: '/tools/bmi-calculator',
      },
      // Percentage Calculator
      {
        sources: ['/percentage', '/percentage-calculator', '/percent-calculator'],
        destination: '/tools/percentage-calculator',
      },
      // Love Calculator
      {
        sources: ['/love-calculator', '/love-test', '/love-tester'],
        destination: '/tools/love-calculator',
      },
      // FLAMES Game
      {
        sources: ['/flames', '/flames-game', '/flames-calculator'],
        destination: '/tools/flames-game',
      },
      // Delulu Meter
      {
        sources: ['/delulu-meter', '/delulu-calculator', '/delusional-meter'],
        destination: '/tools/delulu-meter',
      },
    ];

    const redirectsList = [];
    for (const item of aliasMap) {
      for (const src of item.sources) {
        redirectsList.push({
          source: src,
          destination: item.destination,
          permanent: true,
        });
      }
    }

    return redirectsList;
  },
};

export default nextConfig;
