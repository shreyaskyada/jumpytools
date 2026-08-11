import { Metadata } from 'next';
import { PasswordGeneratorTool } from '@/modules/tools/password-generator/PasswordGeneratorTool';
import { TOOL_METADATA } from '@repo/engines/password-generator';
import { SITE_URL } from '@/config/site';

export const metadata: Metadata = {
  title: `${TOOL_METADATA.title} Online - Free & Instant | Jumpytools`,
  description: TOOL_METADATA.description,
  alternates: {
    canonical: `${SITE_URL}/tools/${TOOL_METADATA.slug}`,
  },
  openGraph: {
    title: `${TOOL_METADATA.title} Online - Free & Instant | Jumpytools`,
    description: TOOL_METADATA.description,
    url: `${SITE_URL}/tools/${TOOL_METADATA.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TOOL_METADATA.title} Online - Free & Instant | Jumpytools`,
    description: TOOL_METADATA.description,
  },
};

export default function Page() {
  return <PasswordGeneratorTool />;
}
