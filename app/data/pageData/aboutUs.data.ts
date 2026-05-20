import CEOImage from "@/app/assets/dummy-testimonial.png";
import { ABOUT_US_INFO_CARD_DATA, FEATURED_WORK_DATA, OUR_VALUES_CARD_DATA } from "@/app/data/common.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/data/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/data/testimonial.data";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { createElement } from "react";
import { FiLinkedin } from "react-icons/fi";

export const ABOUT_US_PAGE_DATA: CommonPageDataInterface = {
  hero: {
    header: {
      title: [
        [{ text: "We Design & Build " }, { text: "Thoughtful", variant: "italic" }],
        [{ text: "Digital Products & " }, { text: "AI Systems", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We are a design and engineering team focused on building high-quality digital products and AI-driven systems. From early-stage startups to growing businesses, we help turn ideas into reliable, scalable solutions.",
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
  ourValues: {
    header: {
      title: [[{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Us" }]],
      description: [
        [
          {
            text: " The principles we follow in every project guiding how we think, build, and deliver meaningful digital experiences.",
          },
        ],
      ],
    },
    valuesCards: OUR_VALUES_CARD_DATA,
  },
  featuredWorks: {
    header: {
      title: [[{ text: "Featured" }, { text: "Works" }]],
      description: [
        [
          {
            text: "A selection of digital products and experiences we’ve designed and built focused on performance, usability, and real-world impact.",
          },
        ],
      ],
    },
    featuredWorksData: FEATURED_WORK_DATA,
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
  ourTeam: {
    header: {
      title: [[{ text: "The Person Behind " }, { text: "Skyphr", variant: "italic" }]],
      description: [
        [
          {
            text: "Skyphr is built and led by a developer focused on creating scalable digital products and AI-driven systems with a strong emphasis on performance, usability, and real-world impact.",
          },
        ],
      ],
    },
    members: [
      {
        name: "Varun Patel",
        role: "Founder & CEO",
        description:
          "Focused on building scalable SaaS products, AI systems, and modern web applications with performance, usability, and real-world impact at the core.",
        social: [
          {
            platform: "LinkedIn",
            icon: createElement(FiLinkedin),
            url: "https://linkedin.com/in/your-profile",
            title: "LinkedIn",
            ariaLabel: "LinkedIn",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        ],
        imageOptions: {
          imagePath: CEOImage,
          width: 450,
          height: 635,
          alt: "Ui Ux Design",
        },
      },
    ],
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};
