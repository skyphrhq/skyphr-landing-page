import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import type { Metadata } from "next";

export const SITE_NAME = "Skyphr";
export const DEFAULT_OG_IMAGE = "/og-image/saas-development-services.png";
export const TWITTER_HANDLE = "@skyphrhq";
export const DEFAULT_LANGUAGE = "en-US";
export const DEFAULT_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  robots?: Metadata["robots"];
};

export const absoluteUrl = (path: string) => {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const createPageMetadata = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  robots,
}: MetadataInput): Metadata => {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const openGraph =
    type === "article"
      ? {
          title,
          description,
          url,
          siteName: SITE_NAME,
          images: [imageUrl],
          type: "article" as const,
        }
      : {
          title,
          description,
          url,
          siteName: SITE_NAME,
          images: [imageUrl],
          type: "website" as const,
        };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        [DEFAULT_LANGUAGE]: url,
      },
    },
    openGraph,
    twitter: {
      title,
      description,
      card: "summary_large_image",
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [imageUrl],
    },
    robots: robots ?? DEFAULT_ROBOTS,
  };
};

export const normalizePageMetadata = (metadata: Metadata, path: string): Metadata => {
  const title = typeof metadata.title === "string" ? metadata.title : SITE_NAME;
  const description =
    metadata.description ??
    "Skyphr designs and builds scalable digital products, SaaS platforms, AI systems, and modern web applications.";
  const openGraphImage = typeof metadata.openGraph?.images === "string" ? metadata.openGraph.images : DEFAULT_OG_IMAGE;
  const twitterImage = typeof metadata.twitter?.images === "string" ? metadata.twitter.images : openGraphImage;

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: absoluteUrl(path),
      languages: {
        [DEFAULT_LANGUAGE]: absoluteUrl(path),
      },
    },
    openGraph: {
      ...metadata.openGraph,
      title,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      images: [absoluteUrl(openGraphImage)],
      type: "website",
    },
    twitter: {
      ...metadata.twitter,
      title: typeof metadata.twitter?.title === "string" ? metadata.twitter.title : title,
      description: metadata.twitter?.description ?? description,
      card: "summary_large_image",
      creator: metadata.twitter?.creator ?? TWITTER_HANDLE,
      site: metadata.twitter?.site ?? TWITTER_HANDLE,
      images: [absoluteUrl(twitterImage)],
    },
    robots: metadata.robots ?? DEFAULT_ROBOTS,
  };
};
