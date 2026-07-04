import { HIRE_WIREFRAME_DESIGNER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_WIREFRAME_DESIGNER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const WIREFRAME_DESIGNER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire Wireframe Designers | Expert UX Wireframing Services for Web & Mobile Products",
    description:
      "Hire expert wireframe designers from Skyphr to transform ideas into structured user experiences. Create user flows, low-fidelity wireframes, product blueprints, and UX frameworks for scalable digital products.",
    openGraph: {
      title: "Hire Wireframe Designers | Expert UX Wireframing Services for Web & Mobile Products",
      description:
        "Hire expert wireframe designers from Skyphr to transform ideas into structured user experiences. Create user flows, low-fidelity wireframes, product blueprints, and UX frameworks for scalable digital products.",
      images: "/og-image/hire-wireframe-designers.png",
      type: "website",
    },
    twitter: {
      title: "Hire Wireframe Designers | Expert UX Wireframing Services for Web & Mobile Products",
      description:
        "Hire expert wireframe designers from Skyphr to transform ideas into structured user experiences. Create user flows, low-fidelity wireframes, product blueprints, and UX frameworks for scalable digital products.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-wireframe-designers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-wireframe-designers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "Wireframe Designers", variant: "italic" }],
        [
          {
            text: "Build Better Products with Strategic Wireframing",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Turn concepts into clear product experiences with Skyphr’s expert wireframe designers. We help startups, SaaS companies, enterprises, and digital product teams visualize user journeys, information architecture, and interface structures before development begins.",
          },
        ],
        [
          {
            text: "Our wireframe design services help organizations reduce development risks, validate ideas faster, improve usability, and create a strong foundation for scalable digital products.",
          },
        ],
        [
          {
            text: "Whether you're launching a SaaS platform, mobile application, enterprise software, marketplace, or AI product, our designers create detailed wireframes that align business objectives with user needs.",
          },
        ],
      ],
    },
    highlights: [],
  },

  whatWeBuild: {
    header: {
      title: [
        [{ text: "Wireframe" }, { text: "Design" }],
        [{ text: "Services", variant: "italic" }, { text: "We" }, { text: "Offer" }],
      ],
      description: [
        [
          {
            text: "Skyphr provides expert wireframe design services to help businesses plan product structures, map user journeys, define information architecture, validate ideas, and create clear UX foundations before visual design and development.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Website Wireframing",
        description:
          "Create structured website layouts that define navigation, content hierarchy, user pathways, and conversion-focused experiences.",
      },
      {
        title: "Mobile App Wireframing",
        description:
          "Design intuitive mobile app wireframes for iOS, Android, and cross-platform applications before UI design and development.",
      },
      {
        title: "SaaS Product Wireframing",
        description:
          "Build scalable SaaS product structures with clear workflows, dashboard layouts, user roles, and feature mapping.",
      },
      {
        title: "Enterprise Software Wireframing",
        description:
          "Plan complex enterprise applications with organized workflows, user permissions, operational processes, and system interactions.",
      },
      {
        title: "User Flow Design",
        description:
          "Map complete customer journeys and interactions to ensure smooth experiences across every touchpoint.",
      },
      {
        title: "Information Architecture Planning",
        description:
          "Structure content, navigation systems, and feature organization for improved usability and discoverability.",
      },
      {
        title: "Low-Fidelity Wireframes",
        description:
          "Rapidly validate concepts and product structures before investing in visual design and engineering resources.",
      },
      {
        title: "High-Fidelity Wireframes",
        description:
          "Develop detailed wireframes with advanced layouts, interactions, annotations, and stakeholder-ready documentation.",
      },
      {
        title: "Product Prototyping Support",
        description:
          "Transform wireframes into interactive prototypes for testing, validation, and investor or stakeholder presentations.",
      },
      {
        title: "UX Strategy & Discovery",
        description:
          "Define user requirements, business goals, functionality, and workflows before product design begins.",
      },
    ],
  },

  useCase: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "Wireframe", variant: "italic" },
          { text: "Design", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our wireframe design services help businesses plan clear product structures, validate user journeys, align stakeholders, and create scalable foundations before moving into UI design and development.",
          },
        ],
      ],
    },
    items: [
      {
        title: "User-Centered Design Approach",
        description: "Every wireframe is built around user behavior, usability principles, and business objectives.",
      },
      {
        title: "Clear Product Structure",
        description: "Visualize content, functionality, workflows, and user interactions before development starts.",
      },
      {
        title: "Scalable Design Frameworks",
        description: "Create foundations that support future product growth and feature expansion.",
      },
      {
        title: "Conversion-Focused Experiences",
        description: "Design wireframes that improve engagement, onboarding, retention, and conversion rates.",
      },
      {
        title: "Cross-Platform Planning",
        description: "Develop consistent experiences across desktop, tablet, and mobile devices.",
      },
      {
        title: "Developer-Friendly Documentation",
        description: "Provide detailed wireframes and specifications that streamline development execution.",
      },
      {
        title: "Rapid Iteration Process",
        description: "Validate and improve concepts quickly through collaborative feedback cycles.",
      },
      {
        title: "Stakeholder Alignment",
        description: "Ensure teams, executives, designers, and developers share a unified product vision.",
      },
    ],
  },

  technologyStack: {
    header: {
      title: [[{ text: "Technologies" }, { text: "&" }, { text: "Design Tools", variant: "italic" }]],
      description: [
        [
          {
            text: "Our UI designers work with modern design, prototyping, collaboration, and handoff tools to create scalable, consistent, and development-ready digital interfaces.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Design & Prototyping Tools",
        technologies: [
          { name: "Figma" },
          { name: "Adobe XD" },
          { name: "Sketch" },
          { name: "Framer" },
          { name: "Principle" },
          { name: "InVision" },
        ],
      },
      {
        title: "Collaboration & Handoff Tools",
        technologies: [
          { name: "Miro" },
          { name: "Zeplin" },
          { name: "FigJam" },
          { name: "Notion" },
          { name: "Jira" },
          { name: "Slack" },
        ],
      },
      {
        title: "Visual Design Tools",
        technologies: [
          { name: "Photoshop" },
          { name: "Illustrator" },
          { name: "After Effects" },
          { name: "Canva" },
          { name: "Lottie" },
        ],
      },
      {
        title: "Development Collaboration",
        technologies: [
          { name: "React" },
          { name: "Next.js" },
          { name: "Angular" },
          { name: "Vue.js" },
          { name: "Flutter" },
          { name: "Tailwind CSS" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [[{ text: "Our" }, { text: "Wireframe" }, { text: "Design" }, { text: "Process", variant: "italic" }]],
      description: [
        [
          {
            text: "We follow a structured wireframe design process to understand product goals, map user journeys, plan information architecture, create clear wireframes, iterate with stakeholders, and prepare documentation for smooth UI design and development.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Requirement Analysis",
        description: "Understand business goals, user needs, product requirements, and market expectations.",
      },
      {
        title: "User Research & Journey Mapping",
        description: "Analyze target audiences and define key user flows and interactions.",
      },
      {
        title: "Information Architecture Planning",
        description: "Organize navigation, content structures, and product workflows.",
      },
      {
        title: "Wireframe Creation",
        description: "Develop low-fidelity or high-fidelity wireframes based on project objectives.",
      },
      {
        title: "Review & Iteration",
        description: "Collaborate with stakeholders and refine wireframes based on feedback.",
      },
      {
        title: "Prototype Development",
        description: "Convert approved wireframes into interactive experiences when required.",
      },
      {
        title: "Design Handoff",
        description: "Deliver wireframes, annotations, and documentation for seamless UI design and development.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right wireframe design hiring model based on your product planning needs, project scope, delivery timeline, UX requirements, and long-term business goals.",
          },
        ],
      ],
    },
    valuesCards: HIRE_WIREFRAME_DESIGNER_VALUES_CARDS,
  },

  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "Wireframe", variant: "italic" },
          { text: "Design?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right wireframe design partner helps you plan better product experiences, reduce development risks, align stakeholders, and create a clear foundation before UI design and engineering begin.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine product-first thinking, experienced UX professionals, collaborative workflows, faster execution, and scalable engagement models to help startups, SaaS companies, enterprises, and digital teams transform ideas into structured product experiences.",
          },
        ],
      ],
    },
    reasons: [
      "Product-first thinking",
      "Experienced UX professionals",
      "Startup to enterprise expertise",
      "Collaborative design process",
      "Faster project execution",
      "Global delivery capability",
      "Scalable engagement models",
    ],
  },
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
      title: [[{ text: "Frequently" }], [{ text: "Asked" }, { text: "Questions", variant: "italic" }]],
      description: [],
    },
    faqsItems: HIRE_WIREFRAME_DESIGNER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Ready" }, { text: "to" }, { text: "Hire" }],
        [
          { text: "Expert", variant: "italic" },
          { text: "Wireframe", variant: "italic" },
          { text: "Designers?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Build a stronger foundation for your digital product with Skyphr’s expert wireframe designers. From SaaS platforms and mobile apps to enterprise software and AI solutions, we create strategic wireframes that improve usability, reduce development risks, and accelerate product success.",
          },
        ],
        [
          {
            text: "Contact Skyphr today to hire wireframe designers and transform your product ideas into structured, scalable user experiences.",
          },
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
