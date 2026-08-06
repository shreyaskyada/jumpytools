import { Metadata } from 'next';
import { TextDiffTool } from '@/modules/tools/text-diff/TextDiffTool';
import { TOOL_METADATA } from '@repo/engines/text-diff';

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
  return <TextDiffTool />;
}
