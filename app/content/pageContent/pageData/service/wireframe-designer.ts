import WIREFRAME_DESIGNER_SERVICE_4X_IMG from "@/app/assets/webp/4x/wireframe-designer-4x.webp";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { createElement } from "react";
import { FiLayers, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export const WIREFRAME_DESIGNER_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Wireframe Designer Services | UX Wireframing & Prototyping | Skyphr",
    description:
      "Hire expert wireframe designers at Skyphr to create clear, user-focused wireframes and prototypes that improve UX, validate ideas, and accelerate digital product development.",
    openGraph: {
      title: "Wireframe Designer Services | UX Wireframing & Prototyping | Skyphr",
      description:
        "Hire expert wireframe designers at Skyphr to create clear, user-focused wireframes and prototypes that improve UX, validate ideas, and accelerate digital product development.",
      images: "/og-image/wireframe-designer.png",
      type: "website",
    },
    twitter: {
      title: "Wireframe Designer Services | UX Wireframing & Prototyping | Skyphr",
      description:
        "Hire expert wireframe designers at Skyphr to create clear, user-focused wireframes and prototypes that improve UX, validate ideas, and accelerate digital product development.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/wireframe-designer.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/wireframe-designer`,
    },
  },
  hero: {
    header: {
      title: [[{ text: "Expert Wireframe Designer Services" }]],
      description: [
        [
          {
            text: "Turn product ideas into clear, structured user experiences with professional wireframing. Skyphr creates intuitive wireframes that define layouts, user flows, content hierarchy, and interactions before development begins.",
          },
        ],
      ],
      heroImage: {
        imagePath: WIREFRAME_DESIGNER_SERVICE_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "Wireframe designer services hero illustration",
        className: "object-contain",
        loading: "eager",
      },
    },
    ctas: [
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
  whatWeBuild: {
    header: {
      title: [
        [{ text: "Professional" }, { text: "Wireframe" }],
        [
          { text: "Design", variant: "italic", classNames: "text-center" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our wireframe designers transform business requirements and product ideas into practical UX structures. We create low-fidelity and high-fidelity wireframes for websites, SaaS platforms, mobile apps, dashboards, and digital products.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Website Wireframing",
        description:
          "Create structured website layouts with clear navigation, content hierarchy, and user journeys designed around business goals.",
      },
      {
        title: "Mobile App Wireframes",
        description:
          "Plan intuitive mobile experiences with organized screens, interactions, navigation patterns, and user flows before visual design begins.",
      },
      {
        title: "SaaS Wireframes",
        description:
          "Design scalable SaaS product structures for dashboards, workflows, onboarding, account areas, and complex product experiences.",
      },
      {
        title: "Dashboard Wireframes",
        description:
          "Structure information-heavy dashboards with clear layouts, navigation, data organization, and efficient user interactions.",
      },
      {
        title: "User Flow Wireframes",
        description:
          "Map complete user journeys and transform them into logical screen-by-screen experiences that reduce friction.",
      },
      {
        title: "Interactive Wireframes",
        description:
          "Build clickable wireframes to demonstrate navigation, interactions, and product functionality before development.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "Wireframe", variant: "italic" },
          { text: "Design", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [],
    },
    features: [
      "Low-fidelity and high-fidelity wireframes",
      "Responsive website wireframes",
      "Mobile app wireframes",
      "SaaS and web application wireframes",
      "Dashboard and admin panel wireframes",
      "User flow mapping",
      "Information architecture",
      "Interactive prototypes",
      "Reusable design structures",
      "Developer-ready design documentation",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "Of" }],
        [
          { text: "Professional", variant: "italic" },
          { text: "Wireframing", variant: "italic" },
        ],
      ],
      description: [],
    },
    items: [
      {
        title: "Validate Product Ideas Early",
        description: "Explore layouts, workflows, and user journeys before investing heavily in development.",
      },
      {
        title: "Reduce Development Rework",
        description:
          "Identify usability and structural issues early so development teams can work from a clearer product direction.",
      },
      {
        title: "Improve User Experience",
        description:
          "Build logical navigation and intuitive user flows around real user needs and business objectives.",
      },
      {
        title: "Align Teams Faster",
        description:
          "Give stakeholders, designers, developers, and product teams a shared visual understanding of the product.",
      },
      {
        title: "Speed Up Product Development",
        description:
          "Establish a clear foundation for UI design and development before moving into detailed implementation.",
      },
      {
        title: "Make Better Product Decisions",
        description: "Use wireframes to test and refine product structures before committing to final designs.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Wireframe" }],
        [
          { text: "Design", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [],
    },
    steps: [
      {
        title: "01. Understand Requirements",
        description: "We learn about your product, users, business objectives, features, and functional requirements.",
      },
      {
        title: "02. Research & Information Architecture",
        description: "We organize content, features, navigation, and user journeys into a logical product structure.",
      },
      {
        title: "03. Create Wireframes",
        description:
          "Our wireframe designers create clear layouts that define the structure and functionality of each screen.",
      },
      {
        title: "04. Review & Refine",
        description:
          "We review wireframes with your team, collect feedback, and refine the experience based on your requirements.",
      },
      {
        title: "05. Interactive Prototyping",
        description:
          "Where required, we connect screens into interactive prototypes to demonstrate the intended user journey.",
      },
      {
        title: "06. Design Handoff",
        description:
          "Final wireframes are organized and prepared as a clear foundation for UI design and product development.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Wireframing" }, { text: "Technology" }, { text: "&" }, { text: "Expertise" }]],
      description: [
        [
          {
            text: "Our wireframe designers work with modern design and prototyping tools to create structured, scalable product experiences.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Design & Prototyping",
        technologies: [
          { name: "Figma" },
          { name: "Adobe XD" },
          { name: "Sketch" },
          { name: "FigJam" },
          { name: "Interactive Prototyping" },
        ],
      },
      {
        title: "UX & Strategy",
        technologies: [
          { name: "Information Architecture" },
          { name: "User Flow Design" },
          { name: "Responsive Design Planning" },
          { name: "UX Research" },
          { name: "Design Systems" },
        ],
      },
    ],
  },
  deliveryApproach: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Wireframe" }, { text: "Design" }],
        [
          { text: "Delivery", variant: "italic" },
          { text: "Approach", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We combine UX thinking, business requirements, and practical product knowledge to create wireframes that are useful beyond presentations. Every wireframe is structured to provide a clear foundation for the next stages of UI design and development.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Clear communication",
        description:
          "We ensure transparent and effective communication throughout the wireframing process to align with your vision.",
      },
      {
        title: "User-focused structures",
        description: "Every layout is designed with the end-user in mind, ensuring intuitive navigation and usability.",
      },
      {
        title: "Scalable layouts",
        description: "We build wireframes that can adapt and grow alongside your product and business requirements.",
      },
      {
        title: "Practical interactions",
        description:
          "We define interactions that are both meaningful to users and feasible for developers to implement.",
      },
      {
        title: "Consistent design logic",
        description: "We establish a cohesive structure across all screens to ensure a unified user experience.",
      },
      {
        title: "Development-ready documentation",
        description: "We provide structured deliverables that give developers a clear blueprint for implementation.",
      },
    ],
  },
  ourValues: {
    header: {
      title: [
        [{ text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [
          { text: "Wireframe", variant: "italic" },
          { text: "Design", variant: "italic" },
          { text: "Team", variant: "italic" },
        ],
      ],
      description: [],
    },
    valuesCards: [
      {
        id: 1,
        title: "Clarity Over Complexity",
        description:
          "We simplify complex product requirements into clear layouts, logical navigation, and understandable user flows.",
        icon: createElement(FiLayers, { className: "text-2xl" }),
        color: "#AC9BFF",
        bgColor: "rgba(172, 155, 255, 0.5)",
      },
      {
        id: 2,
        title: "Built for Scale",
        description: "Our wireframes consider future features, expanding content, and evolving product requirements.",
        icon: createElement(FiTrendingUp, { className: "text-2xl" }),
        color: "#B8C56F",
        bgColor: "rgba(184, 197, 111, 0.5)",
      },
      {
        id: 3,
        title: "User Experience First",
        description: "We structure every screen around usability, user expectations, and efficient interactions.",
        icon: createElement(FiUsers, { className: "text-2xl" }),
        color: "#FF767A",
        bgColor: "rgba(255, 118, 122, 0.5)",
      },
      {
        id: 4,
        title: "Purposeful Design",
        description:
          "Every layout and interaction has a clear purpose connected to the product and business objectives.",
        icon: createElement(FiZap, { className: "text-2xl" }),
        color: "#5DADE2",
        bgColor: "rgba(93, 173, 226, 0.5)",
      },
    ],
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "For" }],
        [
          { text: "Wireframe", variant: "italic" },
          { text: "Design?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr helps businesses transform product concepts into structured digital experiences before development begins. Our wireframe designers combine UX expertise with product and technology understanding to create practical foundations for websites, SaaS platforms, mobile applications, and custom software.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced UX and wireframe designers",
      "Business-focused design approach",
      "User-centered wireframing",
      "Flexible engagement models",
      "Clear communication and collaboration",
      "Scalable product structures",
      "Wireframes aligned with development requirements",
      "Support from wireframing through complete product design",
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [
        [
          {
            text: "Our wireframe design services support businesses across multiple industries, including:",
          },
        ],
      ],
    },
    items: [
      {
        title: "SaaS & Technology",
        description: "Wireframes for digital platforms, dashboards, and enterprise software.",
      },
      { title: "FinTech", description: "Secure, clear layouts for financial applications and user portals." },
      { title: "Healthcare", description: "Intuitive structures for patient portals and healthcare management tools." },
      { title: "E-commerce", description: "Optimized user journeys for shopping experiences and product catalogs." },
      { title: "Education", description: "Engaging layouts for learning management systems and student platforms." },
      { title: "Real Estate", description: "Structured wireframes for property listings and management tools." },
      { title: "Logistics", description: "Clear navigation for tracking systems and operational dashboards." },
      { title: "Professional Services", description: "Professional layouts for service offerings and client portals." },
      { title: "Startups", description: "Agile wireframing to rapidly validate product ideas and MVPs." },
      {
        title: "Enterprise Businesses",
        description: "Scalable structures for complex internal tools and large-scale applications.",
      },
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Frequently" }, { text: "Asked" }, { text: "Questions" }]],
      description: [],
    },
    faqsItems: [
      {
        question: "What is a wireframe in UX design?",
        answer:
          "A wireframe is a visual structure of a digital product screen that defines layout, content hierarchy, navigation, and key interactions before detailed UI design begins.",
      },
      {
        question: "Why does my business need wireframe design?",
        answer:
          "Wireframes help validate product structure and user flows early, identify potential usability issues, and give designers and developers a clear direction.",
      },
      {
        question: "What types of wireframes do you create?",
        answer:
          "We create low-fidelity, high-fidelity, responsive, interactive, website, mobile app, SaaS, dashboard, and web application wireframes.",
      },
      {
        question: "Can you create wireframes for an existing product?",
        answer:
          "Yes. We can analyze your existing product and create improved wireframes based on your current interface, user flows, business requirements, and UX goals.",
      },
      {
        question: "Do you provide mobile and responsive wireframes?",
        answer:
          "Yes. We create wireframes for mobile applications as well as responsive websites and web applications across different screen sizes.",
      },
      {
        question: "Can wireframes be converted into UI designs?",
        answer:
          "Yes. Wireframes can provide the structural foundation for complete UI design. Our team can continue from wireframing into detailed interface design when required.",
      },
      {
        question: "Do you create clickable wireframe prototypes?",
        answer:
          "Yes. We can connect wireframe screens into interactive prototypes to demonstrate navigation, user flows, and product interactions.",
      },
      {
        question: "Can you work with our existing product team?",
        answer:
          "Yes. Our wireframe designers can collaborate with your product managers, developers, designers, and internal stakeholders throughout the design process.",
      },
    ],
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build" }, { text: "a" }, { text: "Clear" }, { text: "Foundation" }, { text: "for" }],
        [
          { text: "Your", variant: "italic" },
          { text: "Digital", variant: "italic" },
          { text: "Product", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Turn your ideas, requirements, and workflows into structured user experiences with professional wireframe design from Skyphr. Build with greater clarity before moving into UI design and development.",
          },
        ],
      ],
    },
    ctas: [
      {
        label: "Book a Call",
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
