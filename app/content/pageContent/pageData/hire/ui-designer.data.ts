import { HIRE_UI_DESIGNER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_UI_DESIGNER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const UI_DESIGNER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire UI Designers | Expert User Interface Design Services for Web & Mobile Products",
    description:
      "Hire UI Designers from Skyphr to create modern, scalable, and conversion-focused digital experiences. Get expert UI design services for SaaS platforms, web applications, mobile apps, and enterprise software.",
    openGraph: {
      title: "Hire UI Designers | Expert User Interface Design Services for Web & Mobile Products",
      description:
        "Hire UI Designers from Skyphr to create modern, scalable, and conversion-focused digital experiences. Get expert UI design services for SaaS platforms, web applications, mobile apps, and enterprise software.",
      images: "/og-image/hire-ui-designers.png",
      type: "website",
    },
    twitter: {
      title: "Hire UI Designers | Expert User Interface Design Services for Web & Mobile Products",
      description:
        "Hire UI Designers from Skyphr to create modern, scalable, and conversion-focused digital experiences. Get expert UI design services for SaaS platforms, web applications, mobile apps, and enterprise software.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-ui-designers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-ui-designers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "UI Designers", variant: "italic" }],
        [
          {
            text: "Create Intuitive, High-Converting Digital Experiences",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Great products are built on exceptional user experiences. At Skyphr, our UI designers create visually engaging, user-centric interfaces that improve usability, strengthen brand perception, and increase customer engagement.",
          },
        ],
        [
          {
            text: "Whether you're building a SaaS platform, enterprise application, mobile app, or digital product, our designers deliver interfaces that balance aesthetics, functionality, and business goals.",
          },
        ],
        [
          {
            text: "Hire UI designers who understand product strategy, modern design systems, accessibility standards, and conversion-focused design principles to help your business launch faster and scale confidently.",
          },
        ],
      ],
    },
    highlights: [],
  },

  whatWeBuild: {
    header: {
      title: [
        [{ text: "UI" }, { text: "Design" }],
        [{ text: "Services", variant: "italic" }, { text: "We" }, { text: "Offer" }],
      ],
      description: [
        [
          {
            text: "Skyphr provides professional UI design services to help businesses create modern web applications, mobile apps, SaaS platforms, enterprise software, dashboards, landing pages, and scalable design systems.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Web Application UI Design",
        description:
          "Design modern, responsive interfaces for SaaS platforms, enterprise software, customer portals, dashboards, and web applications that enhance user engagement and usability.",
      },
      {
        title: "Mobile App UI Design",
        description:
          "Create intuitive and visually appealing mobile experiences for iOS, Android, and cross-platform applications with seamless navigation and user flows.",
      },
      {
        title: "SaaS Product Design",
        description:
          "Develop scalable UI systems for SaaS products that improve onboarding, retention, and overall customer experience while supporting future product growth.",
      },
      {
        title: "Enterprise Software Design",
        description:
          "Design complex enterprise interfaces that simplify workflows, improve productivity, and support efficient business operations.",
      },
      {
        title: "Dashboard & Data Visualization Design",
        description:
          "Transform complex data into easy-to-understand dashboards, reports, charts, and visual interfaces that improve decision-making.",
      },
      {
        title: "Design System Creation",
        description:
          "Build scalable design systems, component libraries, and UI frameworks that ensure consistency across products and teams.",
      },
      {
        title: "Product Redesign Services",
        description:
          "Modernize outdated interfaces to improve usability, customer satisfaction, and conversion performance without disrupting business operations.",
      },
      {
        title: "Landing Page & Conversion Design",
        description:
          "Create high-performing landing pages and marketing experiences designed to maximize conversions, lead generation, and customer acquisition.",
      },
    ],
  },

  useCase: {
    header: {
      title: [[{ text: "Core" }, { text: "UI" }, { text: "Design" }], [{ text: "Capabilities", variant: "italic" }]],
      description: [
        [
          {
            text: "Our UI designers bring expertise across every stage of digital product design, helping businesses create intuitive, accessible, responsive, and conversion-focused digital experiences.",
          },
        ],
      ],
    },
    items: [
      {
        title: "User Interface Design",
        description: "Modern, clean, and engaging interfaces tailored to your users and business objectives.",
      },
      {
        title: "Wireframing & Prototyping",
        description: "Interactive wireframes and prototypes that validate concepts before development begins.",
      },
      {
        title: "Design Systems",
        description: "Reusable UI components that improve consistency, scalability, and development efficiency.",
      },
      { title: "Responsive Design", description: "Optimized experiences across desktop, tablet, and mobile devices." },
      {
        title: "Accessibility Design",
        description: "Interfaces designed to meet accessibility standards and provide inclusive user experiences.",
      },
      {
        title: "User Flow Optimization",
        description: "Streamlined journeys that reduce friction and improve conversion rates.",
      },
      {
        title: "Micro-Interactions & Animations",
        description: "Thoughtful interactions that enhance usability and create engaging product experiences.",
      },
      {
        title: "Visual Branding Integration",
        description: "Interfaces aligned with your brand identity while maintaining usability and consistency.",
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
      title: [[{ text: "Our" }, { text: "UI" }, { text: "Design" }, { text: "Process", variant: "italic" }]],
      description: [
        [
          {
            text: "We follow a structured UI design process to understand your business goals, plan user experiences, create intuitive interfaces, build scalable design systems, support developer handoff, and continuously optimize product performance.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Research",
        description: "We understand your business goals, users, competitors, and product requirements.",
      },
      {
        title: "UX Planning",
        description: "We define user journeys, information architecture, and interface structure.",
      },
      {
        title: "Wireframing",
        description: "Low-fidelity wireframes establish layouts, navigation, and functionality.",
      },
      {
        title: "Visual Design",
        description: "Our UI designers create polished interfaces aligned with your brand and business objectives.",
      },
      {
        title: "Interactive Prototyping",
        description: "Clickable prototypes allow stakeholders to review and validate user experiences.",
      },
      {
        title: "Design System Development",
        description: "We create scalable component libraries and design standards for consistency.",
      },
      {
        title: "Developer Handoff",
        description: "Detailed specifications and assets ensure smooth implementation by engineering teams.",
      },
      {
        title: "Continuous Optimization",
        description: "We refine interfaces based on user feedback, analytics, and business performance metrics.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right UI design hiring model based on your product goals, design requirements, project scope, delivery timeline, and long-term business needs.",
          },
        ],
      ],
    },
    valuesCards: HIRE_UI_DESIGNER_VALUES_CARDS,
  },

  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "UI", variant: "italic" },
          { text: "Design?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right UI design partner helps you create intuitive, scalable, accessible, and visually consistent digital experiences that support user engagement and business growth.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine product-focused design thinking, experienced UI professionals, scalable design systems, collaborative workflows, and quality-driven execution to help startups, SaaS companies, enterprises, and digital platforms build better product experiences.",
          },
        ],
      ],
    },
    reasons: [
      "Product-focused design approach",
      "Experienced design professionals",
      "Scalable design systems",
      "Collaborative workflow",
      "Global delivery capability",
      "Quality and consistency",
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
    faqsItems: HIRE_UI_DESIGNER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Ready" }, { text: "to" }, { text: "Hire" }],
        [
          { text: "UI", variant: "italic" },
          { text: "Designers?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Build exceptional digital experiences with expert UI designers from Skyphr. Whether you're launching a new SaaS platform, improving an enterprise application, or redesigning an existing product, our team delivers scalable, user-centered interfaces that drive engagement, conversions, and long-term business growth.",
          },
        ],
        [
          {
            text: "Contact Skyphr today to hire UI designers and accelerate your product success.",
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
