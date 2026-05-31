import CEOImage from "@/app/assets/webp/varun-patel.webp";
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
        [{ text: "We Design & Build " }, { text: "Scalable", variant: "italic" }],
        [{ text: "Digital Products & " }, { text: "AI Systems", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Skyphr is a digital product development and AI engineering company focused on creating high-performance software, scalable SaaS platforms, and intelligent automation systems. We combine strategy, design, and engineering to help startups, businesses, and founders transform ideas into reliable digital products that deliver real business value.",
          },
        ],
        [
          {
            text: "From product discovery and UI/UX design to full-scale software development and AI integration, we build solutions that are fast, scalable, and designed for long-term growth.",
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
            text: "We partner with ambitious startups, growing businesses, and innovative organizations worldwide to design, develop, and scale digital products that solve real-world problems.",
          },
        ],
        [
          {
            text: "Our expertise spans SaaS development, AI-powered applications, workflow automation, web platforms, and custom software solutions. Every product we create is built with a focus on performance, usability, scalability, and measurable business outcomes.",
          },
        ],
        [
          {
            text: "Whether you're launching a new product, modernizing existing systems, or integrating AI into your business, Skyphr provides the technical expertise and product thinking needed to move faster and scale confidently.",
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
            text: "The principles that guide every decision we make from product strategy and design to engineering and delivery. These values help us build meaningful digital experiences and long-lasting partnerships.",
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
            text: "A collection of digital products, SaaS platforms, and AI-powered solutions we've designed and developed. Every project reflects our commitment to quality engineering, exceptional user experience, and measurable business impact.",
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
            text: "We believe successful partnerships are built on trust, transparency, and results. Our clients choose Skyphr because we focus on solving business challenges, delivering reliable technology, and creating products that support long-term growth.",
          },
        ],
        [
          {
            text: "From startups launching their first product to established businesses adopting AI-driven workflows, we help teams build with confidence and scale with purpose.",
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
            text: "Skyphr ",
            classNames: "font-semibold",
          },
          {
            text: "Skyphr was founded by",
          },
          {
            text: " Varun Patel, ",
            classNames: "font-semibold",
          },
          {
            text: "a software developer, product builder, and technology entrepreneur passionate about creating scalable digital products and AI-driven systems.",
          },
        ],
        // [
        //   {
        //     text: "With years of experience building SaaS platforms, web applications, automation solutions, and modern digital experiences, Varun established Skyphr with a simple mission: to help businesses leverage technology to grow faster, operate smarter, and build products users genuinely love.",
        //   },
        // ],
        // [
        //   {
        //     text: "His hands-on approach combines product strategy, user experience thinking, software engineering, and AI innovation to deliver solutions that create real-world impact.",
        //   },
        // ],
      ],
    },
    members: [
      {
        name: "Varun Patel",
        role: "Founder & CEO",
        description:
          "Focused on building scalable SaaS products, AI-powered systems, modern web applications, and intelligent automation solutions. Driven by performance, usability, innovation, and long-term business value, Varun leads Skyphr's vision of helping companies build smarter digital products for the future.",
        social: [
          {
            platform: "LinkedIn",
            icon: createElement(FiLinkedin),
            url: "https://www.linkedin.com/in/varun-patel-aa465828b/",
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
          alt: "Varun Patel",
        },
      },
    ],
  },
  contactUs: COMMON_CONTACT_US_SECTION_DATA,
};
