import { ABOUT_US_INFO_CARD_DATA, FEATURED_WORK_DATA, OUR_SERVICE_CARD_DATA } from "@/app/data/common.data";
import { HOME_PAGE_FAQ_DATA } from "@/app/data/faq.data";
import { INSIGHTS_DATA } from "@/app/data/insights.data";
import { OUR_PROCESS_DATA } from "@/app/data/ourProcess.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/data/testimonial.data";
import { CommonPageDataInterface, ContactUsSectionInterface } from "@/app/utils/interface/page.interface";

export const COMMON_CONTACT_US_SECTION_DATA: ContactUsSectionInterface = {
  header: {
    title: [
      [{ text: "Let’s " }, { text: "Talk ", variant: "italic" }],
      [{ text: "About Your " }, { text: "Project", variant: "italic", classNames: "font-semibold" }],
    ],

    description: [
      [
        {
          text: "Have a question or idea? Share your requirements and we’ll get back to you within 24 hours.",
        },
      ],
    ],
  },
};

export const HOME_PAGE_DATA: CommonPageDataInterface = {
  hero: {
    header: {
      title: [
        [{ text: "Build Scalable " }, { text: "Digital Products,", variant: "italic" }],
        [{ text: "SaaS Platforms & " }, { text: "AI Systems", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Skyphr is a global AI development company and digital product development partner helping startups, SaaS businesses, and enterprises design, build, and scale innovative software solutions. From UI/UX design and SaaS development to AI automation services, we create high-performance digital products that accelerate growth.",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Get Your Product Built",
        href: "/contact",
        variant: "CTA_PRIMARY",
      },
      {
        label: "Book a Call",
        href: "https://cal.com/skyphr/30min",
        variant: "CTA_SECONDARY",
        external: true,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    trustedBy: ["ABC", "XYZ", "PQR"],
  },
  featuredWorks: {
    featuredWorksData: FEATURED_WORK_DATA,
  },
  about: {
    header: {
      title: [
        [
          { text: "Skyphr Builds Scalable" },
          { text: "Digital Products & AI Systems", variant: "italic" },
          { text: "for Modern Businesses" },
        ],
      ],
      description: [
        [
          {
            text: "At Skyphr, we partner with startups, SaaS companies, and enterprises worldwide to design, develop, and scale custom digital products, AI-powered solutions, and web applications. Our team combines strategic product thinking, modern software development, and AI innovation to deliver scalable systems built for performance, reliability, and long-term business growth.",
          },
        ],
        [
          {
            text: "Whether you're launching an MVP, building a SaaS platform, automating operations with AI, or scaling an existing product, we help turn ambitious ideas into market-ready solutions.",
          },
        ],
      ],
    },
    cta: {
      label: "Get Your Product Built",
      href: "/contact",
      variant: "CTA_PRIMARY",
    },
    cards: ABOUT_US_INFO_CARD_DATA,
  },

  services: {
    header: {
      title: [[{ text: "Our Services" }]],
    },
    items: OUR_SERVICE_CARD_DATA,
  },

  process: {
    header: {
      title: [
        [
          { text: "Our " },
          { text: "Simple", variant: "italic" },
          { text: " & " },
          { text: "Proven ", variant: "italic" },
        ],
        [{ text: "Product " }, { text: "Development  ", variant: "italic" }, { text: " Process" }],
      ],
      description: [
        [
          {
            text: "From idea validation to product launch and continuous optimization, our proven development process helps businesses build digital products faster and with confidence.",
          },
        ],
      ],
    },
    steps: OUR_PROCESS_DATA,
  },

  testimonials: {
    header: {
      title: [[{ text: "Trusted by Clients " }, { text: "Worldwide", variant: "italic", classNames: "font-bold" }]],
      description: [
        [
          {
            text: "Businesses across Europe, North America, and global markets trust Skyphr to deliver scalable software products, SaaS platforms, and AI-powered solutions that drive measurable growth.",
          },
        ],
        [
          {
            text: "We focus on delivering results, building long-term partnerships, and helping companies launch products faster with confidence.",
          },
        ],
      ],
    },
    clientsFeedback: CLIENT_TESTIMONIAL_DATA,
  },

  faq: {
    header: {
      title: [[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]],
      description: [
        [
          { text: "Everything you need to know before starting your project with " },
          { text: "Skyphr", variant: "brand", classNames: "font-bold" },
        ],
      ],
    },
    faqsItems: HOME_PAGE_FAQ_DATA,
  },
  ourInsights: {
    header: {
      title: [[{ text: "Insights That Build" }], [{ text: "Better " }, { text: "Products", variant: "italic" }]],
    },
    blogsData: INSIGHTS_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Ready to " }, { text: "Scale?", variant: "italic" }],
        [{ text: " Get Your " }, { text: "Custom Roadmap", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Book a free 30-minute call to discuss your goals, challenges, and how we can help you build, launch, and scale faster with",
          },
          { text: "Skyphr.", classNames: "font-semibold" },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Free Call",
        href: "https://cal.com/skyphr/30min",
        variant: "CTA_SECONDARY",
        external: true,
        target: "_blank",
        rel: "noopener noreferrer",
        classNames: "min-w-55",
      },
    ],
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};
