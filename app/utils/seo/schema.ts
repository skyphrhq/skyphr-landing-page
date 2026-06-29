import { SOCIAL_LINKS } from "@/app/content/pageContent/socilaLinks.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import type { FaqCommonCardData } from "@/app/utils/interface/data.interface";
import { isValidElement, type ReactNode } from "react";

export type JsonLd = Record<string, unknown>;

const textFromNode = (node: ReactNode): string => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(textFromNode).join(" ");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return textFromNode(node.props.children);
  }

  return "";
};

const cleanText = (value: ReactNode) => textFromNode(value).replace(/\s+/g, " ").trim();

export const absoluteSchemaUrl = (path: string) => {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const generateOrganizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_BASE_URL}/#organization`,
  name: "Skyphr",
  url: SITE_BASE_URL,
  logo: absoluteSchemaUrl("/favicon/android-chrome-512x512.png"),
  sameAs: SOCIAL_LINKS.map((link) => link.href),
});

export const generateWebsiteSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_BASE_URL}/#website`,
  name: "Skyphr",
  url: SITE_BASE_URL,
  publisher: {
    "@id": `${SITE_BASE_URL}/#organization`,
  },
});

export const generateBreadcrumbSchema = (items: { name: string; path: string }[]): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteSchemaUrl(item.path),
  })),
});

export const generateServiceSchema = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteSchemaUrl(path)}#service`,
  name,
  description,
  url: absoluteSchemaUrl(path),
  provider: {
    "@id": `${SITE_BASE_URL}/#organization`,
  },
  areaServed: "Worldwide",
});

export const generateFaqSchema = (faqs: FaqCommonCardData[]): JsonLd | null => {
  const mainEntity = faqs
    .map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: cleanText(faq.answer),
      },
    }))
    .filter((faq) => faq.name && faq.acceptedAnswer.text);

  if (!mainEntity.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
};

export const generateContactPageSchema = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteSchemaUrl(path)}#contactpage`,
  name: title,
  description,
  url: absoluteSchemaUrl(path),
  publisher: {
    "@id": `${SITE_BASE_URL}/#organization`,
  },
});

export const generateWebPageSchema = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${absoluteSchemaUrl(path)}#webpage`,
  name: title,
  description,
  url: absoluteSchemaUrl(path),
  publisher: {
    "@id": `${SITE_BASE_URL}/#organization`,
  },
});

export const generateArticleSchema = ({
  title,
  description,
  path,
  authorName,
  publishedAt,
  image,
}: {
  title: string;
  description: string;
  path: string;
  authorName: string;
  publishedAt: string;
  image: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: absoluteSchemaUrl(path),
  image: absoluteSchemaUrl(image),
  datePublished: publishedAt,
  author: {
    "@type": "Person",
    name: authorName,
  },
  publisher: {
    "@id": `${SITE_BASE_URL}/#organization`,
  },
});

export const compactSchemas = (schemas: Array<JsonLd | null | undefined>) => schemas.filter(Boolean) as JsonLd[];
