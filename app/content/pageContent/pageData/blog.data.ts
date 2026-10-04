import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { BlogListingPageDataInterface } from "@/app/utils/interface/data.interface";

export const BLOG_PAGE_DATA: BlogListingPageDataInterface = {
  metadata: {
    title: "Blog | Insights on AI, SaaS and Web Development | Skyphr",
    description:
      "Practical insights from the Skyphr team on AI engineering, SaaS product development, Next.js, UI/UX design and building software that holds up in production.",
    openGraph: {
      title: "Blog | Insights on AI, SaaS and Web Development | Skyphr",
      description:
        "Practical insights from the Skyphr team on AI engineering, SaaS product development, Next.js, UI/UX design and building software that holds up in production.",
      images: "/og-image/saas-development-services.png",
      type: "website",
    },
    twitter: {
      title: "Blog | Insights on AI, SaaS and Web Development | Skyphr",
      description:
        "Practical insights from the Skyphr team on AI engineering, SaaS product development, Next.js, UI/UX design and building software that holds up in production.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/saas-development-services.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/blog`,
    },
  },
  listing: {
    header: {
      title: [[{ text: "Insights from" }, { text: "Skyphr", variant: "italic" }]],
      description: [
        [
          {
            text: "Notes from our team on AI engineering, SaaS products, modern web development and design that ships.",
          },
        ],
      ],
    },
    readMoreLabel: "Read article",
    featuredLabel: "Featured",
    emptyStateLabel: "New articles are on the way. Check back soon.",
  },
};
