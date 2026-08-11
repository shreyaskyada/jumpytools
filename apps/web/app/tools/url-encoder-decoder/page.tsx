import { Metadata } from 'next';
import { UrlEncoderDecoderTool } from '@/modules/tools/url-encoder-decoder/UrlEncoderDecoderTool';
import { TOOL_METADATA } from '@repo/engines/url-encoder-decoder';
import { SITE_URL } from '@/config/site';

export const metadata: Metadata = {
  title: `URL Encode & Decode Online - Percent Encoding Tool | Jumpytools`,
  description: `Free online URL encoder and decoder. Encode special characters, spaces, and emojis to URL-safe percent-encoded strings (RFC 3986), or decode encoded URLs back to readable text instantly.`,
  keywords: [
    'url encoder',
    'url decoder',
    'url encode online',
    'url decode online',
    'percent encoding',
    'encode url',
    'decode url',
    'url encoding tool',
    'urlencode',
    'urldecode',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/${TOOL_METADATA.slug}`,
  },
  openGraph: {
    title: `URL Encode & Decode Online - Percent Encoding Tool | Jumpytools`,
    description: `Free online URL encoder and decoder. Encode special characters, spaces, and emojis to URL-safe percent-encoded strings, or decode encoded URLs back to readable text instantly.`,
    url: `${SITE_URL}/tools/${TOOL_METADATA.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `URL Encode & Decode Online - Percent Encoding Tool | Jumpytools`,
    description: `Free online URL encoder and decoder. Encode special characters, spaces, and emojis to URL-safe percent-encoded strings, or decode encoded URLs back to readable text instantly.`,
  },
};

export default function Page() {
  return <UrlEncoderDecoderTool />;
}
