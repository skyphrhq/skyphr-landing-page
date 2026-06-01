import { ABOUT_US_INFO_CARD_DATA, OUR_VALUES_CARD_DATA } from "@/app/content/pageContent/common.data";
import { FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { COMMON_CONTACT_US_SECTION_DATA, HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const NODEJS_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  hero: {
    header: {
      title: [[{ text: "Hire Expert " }, { text: "Node.js Developers", variant: "italic" }]],
      description: [
        [
          {
            text: "Build reliable backend systems with Node.js developers who create APIs, services, integrations, and scalable infrastructure for modern applications.",
          },
        ],
      ],
    },
    highlights: [
      "REST and real-time API development",
      "Backend services for SaaS and web apps",
      "Database, auth, and payment integrations",
      "Scalable server-side architecture",
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
