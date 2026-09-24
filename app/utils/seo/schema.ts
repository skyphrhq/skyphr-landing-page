import { GOOGLE_MAPS_URL, SAME_AS_URLS, SITE_ALTERNATE_NAMES } from "@/app/content/pageContent/socilaLinks.data";
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

export const ORGANIZATION_ID = `${SITE_BASE_URL}/#organization`;
export const FOUNDER_PERSON_ID = `${SITE_BASE_URL}/about-us#varun-patel`;

export const generateOrganizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: "Skyphr",
  alternateName: SITE_ALTERNATE_NAMES,
  legalName: "Skyphr",
  taxID: "24HARPP4908J1Z2",
  url: `${SITE_BASE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: absoluteSchemaUrl("/favicon/android-chrome-512x512.png"),
    width: 512,
    height: 512,
  },
  image: absoluteSchemaUrl("/og-image/home-page.png"),
  description:
    "Skyphr is a digital product, software, and AI engineering company in Ahmedabad, India, offering UI/UX design, website development, custom software, SaaS product development, AI agents and integrations, and Shopify/e-commerce development.",
  founder: {
    "@id": FOUNDER_PERSON_ID,
  },
  email: "sales@skyphr.com",
  telephone: "+91-92748-29076",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-568, Money Plant High St, Gota",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382470",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+91-92748-29076",
    email: "sales@skyphr.com",
    url: "https://cal.com/skyphr/30min",
    availableLanguage: ["English"],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  areaServed: "Worldwide",
  knowsAbout: [
    "UI/UX design",
    "Website development",
    "Custom software development",
    "SaaS product development",
    "AI agents and AI integrations",
    "Shopify and e-commerce development",
  ],
  hasMap: GOOGLE_MAPS_URL,
  sameAs: SAME_AS_URLS,
});

export const generateWebsiteSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_BASE_URL}/#website`,
  name: "Skyphr",
  alternateName: SITE_ALTERNATE_NAMES,
  url: `${SITE_BASE_URL}/`,
  inLanguage: "en-US",
  publisher: {
    "@id": ORGANIZATION_ID,
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

export const generatePersonSchema = ({
  id,
  name,
  jobTitle,
  description,
  path,
  image,
  homeLocation,
  knowsAbout,
  sameAs,
}: {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
  path: string;
  image: string;
  homeLocation: string;
  knowsAbout: string[];
  sameAs: string[];
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": id,
  name,
  jobTitle,
  worksFor: {
    "@id": ORGANIZATION_ID,
  },
  url: absoluteSchemaUrl(path),
  image: absoluteSchemaUrl(image),
  description,
  homeLocation: {
    "@type": "Place",
    name: homeLocation,
  },
  knowsAbout,
  sameAs,
});
