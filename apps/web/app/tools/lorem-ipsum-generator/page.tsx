import { Metadata } from 'next';
import { LoremIpsumGeneratorTool } from '@/modules/tools/lorem-ipsum-generator/LoremIpsumGeneratorTool';
import { TOOL_METADATA } from '@repo/engines/lorem-ipsum-generator';

export const metadata: Metadata = {
  title: `${TOOL_METADATA.title} Online - Free & Instant | Jumpytools`,
  description: TOOL_METADATA.description,
  alternates: {
    canonical: `https://jumpytools.app/tools/${TOOL_METADATA.slug}`,
  },
  openGraph: {
    title: `${TOOL_METADATA.title} Online - Free & Instant | Jumpytools`,
    description: TOOL_METADATA.description,
    url: `https://jumpytools.app/tools/${TOOL_METADATA.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TOOL_METADATA.title} Online - Free & Instant | Jumpytools`,
    description: TOOL_METADATA.description,
  },
};

export default function Page() {
  return <LoremIpsumGeneratorTool />;
}
