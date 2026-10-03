import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import type { BlogPostData } from "@/app/utils/interface/data.interface";
import type { CMSImageData } from "@/types/type";
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

// Every OG image in public/og-image is a 1200x630 PNG; declaring size, type and alt lets crawlers render the card without fetching it first
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const createOgImage = (image: string, alt: string) => ({
  url: absoluteUrl(image),
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt,
  type: "image/png",
});

export const createPageMetadata = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  robots,
}: MetadataInput): Metadata => {
  const url = absoluteUrl(path);
  const ogImage = createOgImage(image, title);
  const openGraph =
    type === "article"
      ? {
          title,
          description,
          url,
          siteName: SITE_NAME,
          images: [ogImage],
          type: "article" as const,
        }
      : {
          title,
          description,
          url,
          siteName: SITE_NAME,
          images: [ogImage],
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
      images: [ogImage],
    },
    robots: robots ?? DEFAULT_ROBOTS,
  };
};

// /blog/<slug> metadata from the CMS `seo` block; every field falls back to the listing data
export const createBlogPostMetadata = (post: BlogPostData): Metadata => {
  const { seo, listing } = post;
  const title = seo.title || `${listing.title} | ${SITE_NAME}`;
  const description = seo.description || listing.description;
  const url = absoluteUrl(seo.canonicalUrl || `/blog/${post.slug}`);
  const ogImage = seo.openGraph?.image?.url ? seo.openGraph.image : listing.image;
  const twitterImage = seo.twitter?.image?.url ? seo.twitter.image : ogImage;
  const toImage = (image: CMSImageData) => ({
    url: absoluteUrl(image.url),
    width: image.width,
    height: image.height,
    alt: image.alt || listing.title,
  });

  return {
    title,
    description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
      languages: {
        [DEFAULT_LANGUAGE]: url,
      },
    },
    openGraph: {
      title: seo.openGraph?.title || title,
      description: seo.openGraph?.description || description,
      url,
      siteName: SITE_NAME,
      images: [toImage(ogImage)],
      type: "article",
      ...(post.publishedAt && { publishedTime: post.publishedAt }),
      authors: [listing.authorName],
    },
    twitter: {
      title: seo.twitter?.title || title,
      description: seo.twitter?.description || description,
      card: seo.twitter?.card || "summary_large_image",
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [toImage(twitterImage)],
    },
    robots: seo.robots || DEFAULT_ROBOTS,
  };
};

export const normalizePageMetadata =(metadata: Metadata, path: string): Metadata => {
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
      images: [createOgImage(openGraphImage, title)],
      type: "website",
    },
    twitter: {
      ...metadata.twitter,
      title: typeof metadata.twitter?.title === "string" ? metadata.twitter.title : title,
      description: metadata.twitter?.description ?? description,
      card: "summary_large_image",
      creator: metadata.twitter?.creator ?? TWITTER_HANDLE,
      site: metadata.twitter?.site ?? TWITTER_HANDLE,
      images: [createOgImage(twitterImage, title)],
    },
    robots: metadata.robots ?? DEFAULT_ROBOTS,
  };
};
