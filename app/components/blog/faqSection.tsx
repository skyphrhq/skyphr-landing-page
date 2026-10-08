"use client";

import FaqCommonCard from "@/app/components/faqCommonCard";
import { ParseBlogFaqs } from "@/app/utils/helpers/blogContent";
import type { SectionSchema } from "@/types/type";
import { useState } from "react";

type FaqSectionProps = {
  heading: string;
  faqs: string;
};

export const UIComponent = ({ heading, faqs }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqItems = ParseBlogFaqs(faqs ?? "");

  if (!faqItems.length) return null;

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mx-auto w-full">
      {heading && (
        <h2 className="font-instrument-sans text-2xl font-bold tracking-tight text-(--text-main-color) md:text-3xl pb-4">
          {heading}
        </h2>
      )}

      {/* The site-wide FAQ accordion as plain rows (no card background, bottom border only); the first question starts open.
          The questions also go into the post's FAQPage JSON-LD (generateBlogPostSchemas). */}
      <div className="w-full">
        {faqItems.map((item, index) => (
          <FaqCommonCard
            key={index}
            question={item.question}
            answer={<span className="whitespace-pre-line">{item.answer}</span>}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            variant="LINE"
          />
        ))}
      </div>
    </section>
  );
};

export const Schema: SectionSchema = {
  heading: { type: "STRING", required: false },
  // Question on one line, its answer on the lines below; leave a blank line between questions
  faqs: { type: "TEXTAREA", required: true },
};
