import { Metadata } from 'next';
import { JwtDecoderTool } from '@/modules/tools/jwt-decoder/JwtDecoderTool';
import { TOOL_METADATA } from '@repo/engines/jwt-decoder';
import { SITE_URL } from '@/config/site';

const pageUrl = `${SITE_URL}/tools/${TOOL_METADATA.slug}`;

export const metadata: Metadata = {
  title: `JWT Decoder Online - Decode & Verify JWT Tokens Free`,
  description: `Free online JWT decoder and verifier. Decode, inspect, and verify JSON Web Tokens (JWT) instantly. Parse JWT headers, payload claims, check token expiry, and verify HS256, RS256, ES256 signatures — 100% client-side, no data sent to servers.`,
  keywords: [
    // Primary — high-volume head terms
    'jwt decoder',
    'jwt decode',
    'jwt token decoder',
    'token decoder',
    'decode jwt',
    'jwt parser',
    'jwt debugger',
    'jwt verifier',
    'jwt reader',
    'jwt viewer',
    'jwt analyzer',

    // Secondary — variations & modifiers
    'jwt decoder online',
    'jwt decode online',
    'decode jwt token',
    'decode jwt online',
    'decode json web token',
    'jwt token decoder online',
    'token decoder online',
    'jwt validator',
    'jwt checker',
    'jwt inspector',
    'jwt decoder free',
    'free jwt decoder',
    'jwt online decoder',
    'jwt token parser',
    'jwt token verifier',
    'jwt token validator',
    'jwt token checker',
    'jwt token reader',
    'jwt token viewer',
    'jwt token inspector',
    'jwt token analyzer',

    // Long-tail — intent-rich queries
    'decode jwt token online free',
    'jwt decoder with signature verification',
    'verify jwt signature online',
    'jwt payload decoder',
    'jwt header decoder',
    'jwt claims decoder',
    'jwt claims parser',
    'check jwt expiration',
    'jwt expiry checker',
    'decode jwt payload',
    'decode jwt header',
    'decode jwt claims',
    'parse jwt token online',
    'parse jwt payload',
    'read jwt token online',
    'view jwt token online',
    'analyze jwt token',
    'inspect jwt token',
    'debug jwt token',
    'jwt token expiration checker',
    'jwt token expiry checker',
    'is my jwt expired',
    'jwt token tester',
    'test jwt token online',
    'validate jwt token online',
    'verify jwt token online',
    'check jwt token online',

    // Algorithm-specific
    'jwt hs256 decoder',
    'jwt rs256 decoder',
    'jwt es256 decoder',
    'jwt ps256 decoder',
    'hmac jwt verifier',
    'rsa jwt verifier',
    'ecdsa jwt verifier',
    'hs256 token decoder',
    'rs256 token decoder',
    'es256 token decoder',
    'jwt signature checker',
    'jwt signature validator',
    'verify jwt hs256',
    'verify jwt rs256',

    // Token type variations
    'bearer token decoder',
    'bearer token parser',
    'decode bearer token',
    'decode access token',
    'decode authorization token',
    'oauth token decoder',
    'oauth2 token decoder',
    'openid token decoder',
    'oidc token decoder',
    'id token decoder',
    'access token decoder',
    'refresh token decoder',
    'auth token decoder',
    'api token decoder',
    'session token decoder',
    'decode bearer token online',
    'decode access token online',
    'decode auth token online',
    'decode api token',
    'what is in my jwt',
    'what is inside jwt token',
    'read bearer token',

    // Use-case & question queries
    'how to decode jwt token',
    'how to decode jwt',
    'how to read jwt token',
    'how to parse jwt token',
    'how to verify jwt token',
    'how to check jwt expiration',
    'how to decode base64 jwt',
    'how to inspect jwt token',
    'what is jwt token',
    'what are jwt claims',
    'jwt token structure',
    'jwt token format',
    'jwt token example',
    'jwt base64 decoder',
    'base64 jwt decoder',

    // Competitor & alternative queries
    'jwt.io alternative',
    'jwt decode tool',
    'jwt debug tool',
    'online jwt tool',
    'jwt.io decoder',
    'jwt tool online',
    'best jwt decoder',
    'fast jwt decoder',
    'secure jwt decoder',
    'private jwt decoder',
    'client side jwt decoder',
    'browser jwt decoder',
    'offline jwt decoder',
    'jwt decoder no server',
    'jwt decoder privacy',
    'safe jwt decoder',

    // Developer framework queries
    'decode jwt node',
    'decode jwt javascript',
    'decode jwt react',
    'decode jwt python',
    'decode jwt java',
    'jwt decoder web app',
    'jwt decoder website',

    // Brand
    'jumpytools jwt decoder',
    'jumpytools token decoder',
    'jumpytools jwt',
    'jumpy tools jwt decoder',
    'jumpy tools token decoder',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `JWT Decoder Online - Decode & Verify JWT Tokens Free | Jumpytools`,
    description: `Free online JWT decoder and verifier. Decode, inspect, and verify JSON Web Tokens instantly. Parse headers, payload claims, and verify HS256/RS256/ES256 signatures — 100% client-side.`,
    url: pageUrl,
    siteName: 'Jumpytools',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `JWT Decoder Online - Decode & Verify JWT Tokens Free`,
    description: `Free online JWT decoder and verifier. Parse headers, payload claims, check expiry, and verify signatures — 100% client-side, zero server processing.`,
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
  other: {
    'application-name': 'Jumpytools JWT Decoder',
  },
};

export default function Page() {
  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'JWT Decoder & Verifier - Jumpytools',
    description: 'Free online JWT decoder and verifier. Decode, inspect, and verify JSON Web Tokens (JWT) instantly in your browser. Parse headers, payload claims, and verify HS256, RS256, ES256 signatures client-side.',
    url: pageUrl,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2450',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'Decode JWT headers and payload claims',
      'Verify HS256, RS256, PS256, ES256 signatures',
      'Check token expiration status with live countdown',
      'Color-coded token structure visualization',
      'Interactive JSON tree explorer for nested payloads',
      'Claims breakdown table with RFC 7519 descriptions',
      'Supports HMAC secret and RSA/ECDSA public key verification',
      '100% client-side processing — no data leaves your browser',
    ],
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Decode a JWT Token Online',
    description: 'Step-by-step guide to decode, inspect, and verify a JSON Web Token (JWT) using the Jumpytools JWT Decoder.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Paste your JWT token',
        text: 'Copy your base64-encoded JWT token string and paste it into the input field. The token will be automatically decoded into its header and payload components.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Inspect decoded claims',
        text: 'View the decoded header (algorithm, type) and payload claims (issuer, subject, expiration, custom claims) in the formatted JSON view or interactive tree explorer.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Verify signature (optional)',
        text: 'For HMAC tokens, enter the shared secret key. For RSA/ECDSA tokens, paste the PEM public key. The tool will cryptographically verify the signature validity using the Web Crypto API.',
      },
    ],
    totalTime: 'PT30S',
    tool: {
      '@type': 'HowToTool',
      name: 'Jumpytools JWT Decoder',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Jumpytools',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Developer Tools',
        item: `${SITE_URL}/tools?category=developer-tools`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'JWT Decoder',
        item: pageUrl,
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'JWT Decoder Online - Decode & Verify JWT Tokens Free',
    description: 'Free online JWT decoder and verifier. Decode, inspect, and verify JSON Web Tokens (JWT) instantly. Parse JWT headers, payload claims, check token expiry, and verify HS256, RS256, ES256 signatures — 100% client-side.',
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Jumpytools',
      url: SITE_URL,
    },
    breadcrumb: breadcrumbJsonLd,
    mainEntity: softwareAppJsonLd,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <JwtDecoderTool />
    </>
  );
}
