import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/data/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/data/testimonial.data";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const CONTACT_PAGE_DATA: CommonPageDataInterface = {
  hero: {
    header: {
      title: [
        [{ text: "Let’s " }, { text: "Build", variant: "italic" }],
        [{ text: "Something " }, { text: "Together", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We combine human creativity and AI to design, build, and scale digital products that deliver real results.",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Start a Project",
        variant: "CTA_PRIMARY",
        classNames: "min-w-[200px]",
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
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
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
};
