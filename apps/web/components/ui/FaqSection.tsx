'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Have questions? Find quick answers about how this tool works, accuracy, and data privacy.",
  className,
}: FaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className={cn("mb-14", className)}>
      {/* FAQ Header */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary w-fit">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>FAQ & Support</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Shadcn Accordion */}
      <Accordion defaultValue={["faq-0"]}>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-9">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FaqSection;
