import { ABOUT_US_INFO_CARD_DATA, FEATURED_WORK_DATA, OUR_SERVICE_CARD_DATA } from "@/app/data/common.data";
import { FAQ_DATA } from "@/app/data/faq.data";
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
        [{ text: "We Build " }, { text: "Scalable", variant: "italic" }],
        [{ text: "Digital Products & " }, { text: "AI Systems", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "UI/UX Design, SaaS Development & AI Automation to help startups and businesses build, launch and scale faster.",
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
          { text: "for Modern Companies" },
        ],
      ],
      description: [
        [
          {
            text: "We partner with companies to design, build and scale high-performance digital products and AI systems built for speed, reliability and long-term growth.",
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
      title: [[{ text: "Our Simple " }, { text: "and Proven Process" }]],
      description: [
        [
          {
            text: "From idea to launch, here's how we make sure your project runs smoothly every time",
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
            text: "We focus on results and our clients’ experiences speak louder than anything else",
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
    faqsItems: FAQ_DATA,
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
  contactUs: COMMON_CONTACT_US_SECTION_DATA
};
