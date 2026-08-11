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
  const termMatches = tools.filter((t) => {
    const title = t.title.toLowerCase();
    const desc = t.description.toLowerCase();
    const slug = t.slug.toLowerCase();

    return (
      title.includes(searchTerms) ||
      desc.includes(searchTerms) ||
      searchTerms.split(' ').some((term) => term.length > 2 && (title.includes(term) || slug.includes(term)))
    );
  });

  if (termMatches.length === 1 && termMatches[0]) {
    redirect(`/tools/${termMatches[0].slug}`, RedirectType.replace);
  }

  // 3. Fallback: Redirect to home page with search query populated
  redirect(`/?q=${encodeURIComponent(searchTerms)}`, RedirectType.replace);
}
