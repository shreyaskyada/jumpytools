import type { Metadata } from "next";
import { Suspense } from "react";
import ClientHome from "./client-home";
import Container from "@/components/layout/Container";
import { tools } from "@/config/tools";
import { categories } from "@/config/categories";

export const metadata: Metadata = {
  title: "Jumpytools - Free Online Developer and Content Tools",
  description: "Browse 100+ free online developer utilities, text formatting calculators, design tools, and security converters. Private, fast, and secure.",
};

function ClientHomeSkeleton() {
  return (
    <div className="flex flex-col gap-14 pb-10 animate-pulse">
      {/* Hero Search Section */}
      <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto pt-6 md:pt-14 px-4 w-full relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border/50 text-sm font-medium mb-2 w-48 h-8" />
        <div className="w-3/4 h-16 bg-muted rounded-2xl mb-2" />
        <div className="w-1/2 h-6 bg-muted rounded" />
        <div className="w-full max-w-2xl mt-6 h-16 bg-muted rounded-2xl" />
        
        {/* Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-2 max-w-2xl">
          <div className="h-4 w-12 bg-muted rounded mr-2" />
          <div className="h-8 w-32 bg-muted rounded-lg" />
          <div className="h-8 w-32 bg-muted rounded-lg" />
          <div className="h-8 w-32 bg-muted rounded-lg" />
        </div>
      </div>

      {/* Interactive Category Tabs Filter */}
      <div className="w-full border-y border-border/40 py-5 bg-muted/5 flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-2 px-4 max-w-7xl w-full">
          <div className="h-10 w-28 bg-muted rounded-xl" />
          <div className="h-10 w-28 bg-muted rounded-xl" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 w-28 bg-muted rounded-xl hidden sm:block" />
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/30">
          <div className="h-8 w-32 bg-muted rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-40 bg-muted/50 border border-border/50 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jumpytools",
    url: "https://jumpytools.app",
    description: "Browse 100+ free online developer utilities, text formatting calculators, design tools, and security converters. Private, fast, and secure.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://jumpytools.app/tools/{search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Container className="py-10 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<ClientHomeSkeleton />}>
        <ClientHome tools={tools} categories={categories} />
      </Suspense>
    </Container>
  );
}
