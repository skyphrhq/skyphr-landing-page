import { ABOUT_US_INFO_CARD_DATA, OUR_VALUES_CARD_DATA } from "@/app/data/common.data";
import { FAQ_DATA } from "@/app/data/faq.data";
import { COMMON_CONTACT_US_SECTION_DATA, HOME_PAGE_DATA } from "@/app/data/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/data/testimonial.data";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const NEXTJS_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  hero: {
    header: {
      title: [[{ text: "Hire Expert " }, { text: "Next.js Developers", variant: "italic" }]],
      description: [
        [
          {
            text: "Scale your product with Next.js developers who build SEO-ready, high-performance web applications using modern routing, rendering, and deployment patterns.",
          },
        ],
      ],
    },
    highlights: [
      "App Router and server component expertise",
      "SEO-ready pages and fast load performance",
      "API routes, integrations, and full-stack delivery",
      "Production-ready builds with clean handoff",
    ],
  },
  ourValues: {
    header: {
      title: [[{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Us" }]],
      description: [
        [
          {
            text: "The principles we follow while matching skilled talent with product teams that need dependable delivery.",
          },
        ],
      ],
    },
    valuesCards: OUR_VALUES_CARD_DATA,
  },
  about: {
    header: {
      title: [[{ text: "Hire Specialized Talent" }, { text: "Built for Modern Product Teams", variant: "italic" }]],
      description: [
        [
          {
            text: "Skyphr helps companies bring in reliable developers and designers who understand product quality, speed, communication, and scalable delivery.",
          },
        ],
      ],
    },
    cta: {
      label: "Start Hiring",
      href: "/contact",
      variant: "CTA_PRIMARY",
    },
    cards: ABOUT_US_INFO_CARD_DATA,
  },
  readyToScale: HOME_PAGE_DATA.readyToScale,
  testimonials: {
    header: {
      title: [[{ text: "Trusted by Clients " }, { text: "Worldwide", variant: "italic", classNames: "font-bold" }]],
      description: [
        [
          {
            text: "We focus on reliable execution and clear communication, so teams can move faster with confidence.",
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
          { text: "Everything you need to know before hiring talent through " },
          { text: "Skyphr", variant: "brand", classNames: "font-bold" },
        ],
      ],
    },
    faqsItems: FAQ_DATA,
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};
