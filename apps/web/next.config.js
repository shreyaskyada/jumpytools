/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const aliasMap = [
      // JWT Decoder
      {
        sources: [
          '/jwt-decoder',
          '/jwt-token',
          '/jwt',
          '/jwt-tokens',
          '/jwt-token-decoder',
          '/token-decoder',
          '/decode-jwt',
          '/tools/jwt-token',
          '/tools/jwt',
          '/tools/jwt-tokens',
          '/tools/jwt-token-decoder',
          '/tools/token-decoder',
          '/tools/decode-jwt',
        ],
        destination: '/tools/jwt-decoder',
      },
      // JWT Generator
      {
        sources: [
          '/jwt-generator',
          '/jwt-signer',
          '/jwt-token-generator',
          '/generate-jwt',
          '/create-jwt',
          '/tools/jwt-signer',
          '/tools/jwt-token-generator',
          '/tools/generate-jwt',
          '/tools/create-jwt',
        ],
        destination: '/tools/jwt-generator',
      },
      // JSON Formatter
      {
        sources: [
          '/json-formatter',
          '/json',
          '/json-validator',
          '/json-prettifier',
          '/json-parser',
          '/tools/json',
          '/tools/json-validator',
          '/tools/json-prettifier',
          '/tools/json-parser',
        ],
        destination: '/tools/json-formatter',
      },
      // UUID Generator
      {
        sources: [
          '/uuid-generator',
          '/uuid',
          '/guid',
          '/guid-generator',
          '/tools/uuid',
          '/tools/guid',
          '/tools/guid-generator',
        ],
        destination: '/tools/uuid-generator',
      },
      // Base64 Image Converter
      {
        sources: [
          '/base64-image-converter',
          '/base64',
          '/base64-converter',
          '/base64-image',
          '/image-to-base64',
          '/tools/base64',
          '/tools/base64-converter',
          '/tools/base64-image',
          '/tools/image-to-base64',
        ],
        destination: '/tools/base64-image-converter',
      },
      // Timestamp Converter
      {
        sources: [
          '/timestamp-converter',
          '/timestamp',
          '/unix-timestamp',
          '/epoch-converter',
          '/tools/timestamp',
          '/tools/unix-timestamp',
          '/tools/epoch-converter',
        ],
        destination: '/tools/timestamp-converter',
      },
      // Timezone Converter
      {
        sources: [
          '/timezone-converter',
          '/timezone',
          '/time-zone-converter',
          '/world-clock',
          '/tools/timezone',
          '/tools/time-zone-converter',
          '/tools/world-clock',
        ],
        destination: '/tools/timezone-converter',
      },
      // Word Counter
      {
        sources: [
          '/word-counter',
          '/word-count',
          '/character-counter',
          '/tools/word-count',
          '/tools/character-counter',
        ],
        destination: '/tools/word-counter',
      },
      // Case Converter
      {
        sources: [
          '/case-converter',
          '/case-change',
          '/uppercase-converter',
          '/camelcase-converter',
          '/tools/case-change',
          '/tools/uppercase-converter',
          '/tools/camelcase-converter',
        ],
        destination: '/tools/case-converter',
      },
      // Image Compressor
      {
        sources: [
          '/image-compressor',
          '/compress-image',
          '/image-compression',
          '/photo-compressor',
          '/tools/compress-image',
          '/tools/image-compression',
          '/tools/photo-compressor',
        ],
        destination: '/tools/image-compressor',
      },
      // Image Converter
      {
        sources: [
          '/image-converter',
          '/convert-image',
          '/png-to-jpg',
          '/webp-converter',
          '/tools/convert-image',
          '/tools/png-to-jpg',
          '/tools/webp-converter',
        ],
        destination: '/tools/image-converter',
      },
      // Password Generator
      {
        sources: [
          '/password-generator',
          '/password',
          '/passgen',
          '/random-password',
          '/tools/password',
          '/tools/passgen',
          '/tools/random-password',
        ],
        destination: '/tools/password-generator',
      },
      // QR Code Generator
      {
        sources: [
          '/qr-code-generator',
          '/qr-code',
          '/qr',
          '/qr-generator',
          '/tools/qr-code',
          '/tools/qr',
          '/tools/qr-generator',
        ],
        destination: '/tools/qr-code-generator',
      },
      // URL Encoder / Decoder
      {
        sources: [
          '/url-encoder-decoder',
          '/url-encoder',
          '/url-decoder',
          '/url-encode',
          '/tools/url-encoder',
          '/tools/url-decoder',
          '/tools/url-encode',
        ],
        destination: '/tools/url-encoder-decoder',
      },
      // Color Converter
      {
        sources: [
          '/color-converter',
          '/hex-to-rgb',
          '/rgb-to-hex',
          '/color-picker',
          '/tools/hex-to-rgb',
          '/tools/rgb-to-hex',
          '/tools/color-picker',
        ],
        destination: '/tools/color-converter',
      },
      // Lorem Ipsum Generator
      {
        sources: [
          '/lorem-ipsum-generator',
          '/lorem-ipsum',
          '/lorem',
          '/dummy-text',
          '/tools/lorem-ipsum',
          '/tools/lorem',
          '/tools/dummy-text',
        ],
        destination: '/tools/lorem-ipsum-generator',
      },
      // Text Diff
      {
        sources: [
          '/text-diff',
          '/diff-checker',
          '/text-compare',
          '/diff',
          '/tools/diff-checker',
          '/tools/text-compare',
          '/tools/diff',
        ],
        destination: '/tools/text-diff',
      },
      // Word Frequency Analyzer
      {
        sources: [
          '/word-frequency-analyzer',
          '/word-frequency',
          '/keyword-density',
          '/tools/word-frequency',
          '/tools/keyword-density',
        ],
        destination: '/tools/word-frequency-analyzer',
      },
      // Text Reverser
      {
        sources: [
          '/text-reverser',
          '/reverse-text',
          '/text-flip',
          '/tools/reverse-text',
          '/tools/text-flip',
        ],
        destination: '/tools/text-reverser',
      },
      // List Randomizer
      {
        sources: [
          '/list-randomizer',
          '/shuffle-list',
          '/list-shuffler',
          '/tools/shuffle-list',
          '/tools/list-shuffler',
        ],
        destination: '/tools/list-randomizer',
      },
      // Number Randomizer
      {
        sources: [
          '/number-randomizer',
          '/random-number',
          '/random-number-generator',
          '/rng',
          '/tools/random-number',
          '/tools/random-number-generator',
          '/tools/rng',
        ],
        destination: '/tools/number-randomizer',
      },
      // Certificate Generator
      {
        sources: [
          '/certificate-generator',
          '/certificate-maker',
          '/create-certificate',
          '/tools/certificate-maker',
          '/tools/create-certificate',
        ],
        destination: '/tools/certificate-generator',
      },
      // Markdown Editor
      {
        sources: [
          '/markdown-editor',
          '/markdown-preview',
          '/md-editor',
          '/tools/markdown-preview',
          '/tools/md-editor',
        ],
        destination: '/tools/markdown-editor',
      },
      // Name Wheel Picker
      {
        sources: [
          '/name-wheel-picker',
          '/wheel-of-names',
          '/random-name-picker',
          '/spinner-wheel',
          '/tools/wheel-of-names',
          '/tools/random-name-picker',
          '/tools/spinner-wheel',
        ],
        destination: '/tools/name-wheel-picker',
      },
      // Age Calculator
      {
        sources: [
          '/age-calculator',
          '/calculate-age',
          '/age-calc',
          '/tools/calculate-age',
          '/tools/age-calc',
        ],
        destination: '/tools/age-calculator',
      },
      // BMI Calculator
      {
        sources: [
          '/bmi-calculator',
          '/bmi',
          '/calculate-bmi',
          '/tools/bmi',
          '/tools/calculate-bmi',
        ],
        destination: '/tools/bmi-calculator',
      },
      // Percentage Calculator
      {
        sources: [
          '/percentage-calculator',
          '/percentage',
          '/percent-calculator',
          '/tools/percentage',
          '/tools/percent-calculator',
        ],
        destination: '/tools/percentage-calculator',
      },
      // Love Calculator
      {
        sources: [
          '/love-calculator',
          '/love-test',
          '/love-tester',
          '/tools/love-test',
          '/tools/love-tester',
        ],
        destination: '/tools/love-calculator',
      },
      // FLAMES Game
      {
        sources: [
          '/flames-game',
          '/flames',
          '/flames-calculator',
          '/tools/flames',
          '/tools/flames-calculator',
        ],
        destination: '/tools/flames-game',
      },
      // Delulu Meter
      {
        sources: [
          '/delulu-meter',
          '/delulu-calculator',
          '/delusional-meter',
          '/tools/delulu-calculator',
          '/tools/delusional-meter',
        ],
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
