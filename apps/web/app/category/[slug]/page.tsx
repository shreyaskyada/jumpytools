import { categories } from "@/config/categories";
import { tools } from "@/config/tools";
import { SITE_URL } from "@/config/site";
import { Metadata } from "next";
import CategoryDetailView from "@/modules/category/CategoryDetailView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);
  if (!category) return {};

  const pageUrl = `${SITE_URL}/category/${category.id}`;
  const categoryTools = tools.filter((t) => t.category === slug);
  const toolNames = categoryTools.map((t) => t.title).join(", ");
  const description = `${category.description} Includes ${categoryTools.length} free tools: ${toolNames}. 100% client-side, no data leaves your browser.`;

  return {
    title: `Free ${category.name} Online - ${categoryTools.length} Tools | Jumpytools`,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `Free ${category.name} Online | Jumpytools`,
      description,
      url: pageUrl,
      siteName: "Jumpytools",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Free ${category.name} Online | Jumpytools`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large" as const,
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);
  const categoryTools = tools.filter((t) => t.category === slug);

  const pageUrl = `${SITE_URL}/category/${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Jumpytools",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category?.name || slug,
        item: pageUrl,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category?.name || slug} Tools`,
    description: category?.description,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Jumpytools",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryTools.length,
      itemListElement: categoryTools.map((tool, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: tool.title,
        url: `${SITE_URL}/tools/${tool.slug}`,
      })),
    },
  };

  const faqJsonLd = category?.faqs && category.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <CategoryDetailView slug={slug} />
    </>
  );
}
