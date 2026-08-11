import { redirect, RedirectType } from 'next/navigation';
import { tools } from '@/config/tools';

interface DynamicToolPageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicToolPage({ params }: DynamicToolPageProps) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug || '';
  const cleanSlug = rawSlug.toLowerCase().trim();

  // 1. Direct slug match
  const directMatch = tools.find(
    (t) => t.slug.toLowerCase() === cleanSlug
  );

  if (directMatch) {
    redirect(`/tools/${directMatch.slug}`, RedirectType.replace);
  }

  // 2. Search query match based on terms
  const searchTerms = cleanSlug.replace(/-/g, ' ');
  const terms = searchTerms.split(' ').filter((term) => term.length > 2);

  const termMatches = tools
    .map((t) => {
      const title = t.title.toLowerCase();
      const desc = t.description.toLowerCase();
      const slug = t.slug.toLowerCase();

      // Score: higher = better match
      let score = 0;

      // Full phrase match in title/desc/slug is strongest
      if (title.includes(searchTerms)) score += 10;
      if (desc.includes(searchTerms)) score += 5;
      if (slug.includes(searchTerms)) score += 8;

      // Individual term matches
      for (const term of terms) {
        if (title.includes(term)) score += 3;
        if (slug.includes(term)) score += 3;
        if (desc.includes(term)) score += 1;
      }

      return { tool: t, score };
    })
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score);

  if (termMatches.length > 0 && termMatches[0]) {
    redirect(`/tools/${termMatches[0].tool.slug}`, RedirectType.replace);
  }

  // 3. Fallback: Redirect to home page with search query populated
  redirect(`/?q=${encodeURIComponent(searchTerms)}`, RedirectType.replace);
}
