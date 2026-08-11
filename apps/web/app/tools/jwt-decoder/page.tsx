import { Metadata } from 'next';
import { JwtDecoderTool } from '@/modules/tools/jwt-decoder/JwtDecoderTool';
import { TOOL_METADATA } from '@repo/engines/jwt-decoder';
import { SITE_URL } from '@/config/site';

export const metadata: Metadata = {
  title: `Token Decoder Online - Decode & Verify JWT Tokens | Jumpytools`,
  description: `Free online JWT Token Decoder utility. Decode, inspect, and verify JSON Web Tokens (JWT) and bearer authorization tokens client-side instantly.`,
  keywords: [
    'token decoder',
    'jwt token decoder',
    'jumpytools token decoder',
    'decode token online',
    'jwt decoder',
    'jwt verifier',
    'decode json web token',
    'bearer token decoder',
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/${TOOL_METADATA.slug}`,
  },
  openGraph: {
    title: `Token Decoder Online - Decode & Verify JWT Tokens | Jumpytools`,
    description: `Free online JWT Token Decoder utility. Decode, inspect, and verify JSON Web Tokens (JWT) and bearer authorization tokens client-side instantly.`,
    url: `${SITE_URL}/tools/${TOOL_METADATA.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Token Decoder Online - Decode & Verify JWT Tokens | Jumpytools`,
    description: `Free online JWT Token Decoder utility. Decode, inspect, and verify JSON Web Tokens (JWT) and bearer authorization tokens client-side instantly.`,
  },
};

export default function Page() {
  return <JwtDecoderTool />;
}
