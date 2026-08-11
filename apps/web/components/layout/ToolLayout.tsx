'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Container from './Container';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { tools } from '@/config/tools';
import { categoryThemes, categories } from '@/config/categories';
import { cn } from '@/lib/utils';
import { useFavorites } from '@/hooks/useFavorites';
import { SITE_URL } from '@/config/site';

export interface ToolMetadata {
  title: string;
  description: string;
  slug: string;
  category: string;
  fullWidth?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface ToolLayoutProps {
  metadata: ToolMetadata;
  faqs: FaqItem[];
  aboutTitle?: string;
  aboutParagraphs: string[];
  children: ReactNode;
}

export function ToolLayout({
  metadata,
  faqs,
  aboutTitle,
  aboutParagraphs,
  children,
}: ToolLayoutProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(metadata.slug);

  const categoryInfo = categories.find((c) => c.id === metadata.category);
  const categoryName = categoryInfo ? categoryInfo.name : 'Utility';

  const theme = categoryThemes[metadata.category] || {
    color: 'from-primary to-primary/80',
    bgGlow: '',
    iconBg: 'bg-primary/10 text-primary',
    iconColor: 'text-primary',
    borderHover: '',
    accentColor: 'slate',
  };

  const relatedTools = tools
    .filter((t) => t.category === metadata.category && t.slug !== metadata.slug)
    .slice(0, 3);

  // WebApplication JSON-LD Schema
  const webAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: metadata.title,
    description: metadata.description,
    url: `${SITE_URL}/tools/${metadata.slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    featureList: [
      'Client-side processing',
      'Free to use',
      'No registration required',
      '100% Secure & Private',
    ],
    creator: {
      '@type': 'Organization',
      name: 'Jumpytools',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  // BreadcrumbList JSON-LD Schema
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryName,
        item: `${SITE_URL}/category/${metadata.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: metadata.title,
        item: `${SITE_URL}/tools/${metadata.slug}`,
      },
    ],
  };

  // FAQPage JSON-LD Schema
  const faqJsonLd = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="relative overflow-hidden flex-grow flex flex-col">
      {/* Schema Markup Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Background Radial Glow Effect */}
      <div
        className={cn(
          'absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20 dark:opacity-30 bg-gradient-to-r',
          theme.color
        )}
      />

      <Container className="py-10 flex-grow relative z-10">
        {/* Breadcrumb Navigation UI */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground/80 mb-4 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground/45">/</span>
          <Link href={`/category/${metadata.category}`} className="hover:text-foreground transition-colors">
            {categoryName}
          </Link>
          <span className="text-muted-foreground/45">/</span>
          <span className="text-foreground font-semibold" aria-current="page">
            {metadata.title}
          </span>
        </nav>

        {/* Hero Header */}
        <div className="mb-8">
          <span
            className={cn(
              'inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider mb-4 transition-colors',
              theme.iconBg,
              theme.iconColor
            )}
          >
            {categoryName}
          </span>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              {metadata.title}
            </h1>
            <button
              onClick={() => toggleFavorite(metadata.slug)}
              aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl border border-border/80 bg-card hover:bg-muted text-muted-foreground/60 transition-all hover:text-amber-500 hover:scale-105 active:scale-95 cursor-pointer",
                isFav && "text-amber-500 bg-amber-500/10 border-amber-500/20"
              )}
            >
              <Star className={cn("h-5 w-5", isFav && "fill-amber-500")} />
            </button>
          </div>
          <p className="mt-2 text-muted-foreground text-base md:text-lg max-w-2xl">
            {metadata.description}
          </p>
        </div>

        <hr className="border-border mb-8" />

        {/* Main Workspace Area (Grid or Stack Layout) */}
        <div className={cn(
          "gap-8 items-start mb-12",
          metadata.fullWidth ? "flex flex-col" : "grid grid-cols-1 lg:grid-cols-3"
        )}>
          
          {/* Interactive Workspace Card */}
          <div className={cn(
            "border border-border/80 bg-card rounded-2xl shadow-sm overflow-hidden flex flex-col h-full ring-1 ring-border/40 focus-within:ring-primary/20 transition-all duration-300",
            metadata.fullWidth ? "w-full" : "lg:col-span-2"
          )}>
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
              {children}
            </div>
          </div>

          {/* About Section Card */}
          <div className={cn(
            "flex flex-col gap-6",
            metadata.fullWidth ? "w-full" : "lg:col-span-1"
          )}>
            <div className="border border-border/60 bg-muted/30 rounded-2xl p-5 md:p-6 text-sm">
              <h3 className="font-semibold text-foreground text-lg tracking-tight mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full inline-block"></span>
                {aboutTitle || `About ${metadata.title}`}
              </h3>
              <div className="text-muted-foreground leading-relaxed flex flex-col gap-4 prose prose-sm dark:prose-invert">
                {aboutParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        {faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion>
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Related Utilities */}
        {relatedTools.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Related Utilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex flex-col justify-between bg-card border border-border hover:border-primary/50 rounded-2xl p-5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
