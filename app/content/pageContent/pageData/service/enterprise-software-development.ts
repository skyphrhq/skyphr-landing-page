import ENTERPRISE_SOFTWARE_DEVELOPMENT_SERVICE_4X_IMG from "@/app/assets/webp/4x/enterprise-software-development-4x.webp";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { createElement } from "react";
import { FiLayers, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export const ENTERPRISE_SOFTWARE_DEVELOPMENT_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Enterprise Software Development Services | Skyphr",
    description:
      "Build secure, scalable enterprise software with Skyphr. We develop custom enterprise solutions, business platforms, AI systems, and applications built for performance and growth.",
    openGraph: {
      title: "Enterprise Software Development Services | Skyphr",
      description:
        "Build secure, scalable enterprise software with Skyphr. We develop custom enterprise solutions, business platforms, AI systems, and applications built for performance and growth.",
      images: "/og-image/enterprise-software-development.png",
      type: "website",
    },
    twitter: {
      title: "Enterprise Software Development Services | Skyphr",
      description:
        "Build secure, scalable enterprise software with Skyphr. We develop custom enterprise solutions, business platforms, AI systems, and applications built for performance and growth.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/enterprise-software-development.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/enterprise-software-development`,
    },
  },
  hero: {
    header: {
      title: [
        [{ text: "Enterprise" }, { text: "Software" }, { text: "Development" }, { text: "Services" }],
        [
          {
            text: "Build Secure, Scalable & High-Performance Enterprise Software",
            variant: "italic",
            classNames: "pt-2 lg:pt-4 flex text-2xl! xl:text-3xl!",
          },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr designs and develops custom enterprise software that helps organizations streamline complex operations, connect business systems, automate workflows, and scale with confidence. From enterprise applications and internal platforms to AI-powered business systems, we build secure, reliable software around your specific business requirements.",
          },
        ],
      ],
      heroImage: {
        imagePath: ENTERPRISE_SOFTWARE_DEVELOPMENT_SERVICE_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "Enterprise software development services hero illustration",
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
        [{ text: "What " }, { text: "We " }, { text: "Build " }, { text: "With" }],
        [{ text: "Enterprise Software Development", variant: "italic", classNames: "text-center" }],
      ],
      description: [
        [
          {
            text: "Skyphr builds custom enterprise software designed to support complex workflows, large teams, multiple systems, and long-term business growth. Our solutions combine scalable engineering, intuitive experiences, secure architecture, and automation to create software that works across your organization.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom Enterprise Applications",
        description:
          "Build tailored enterprise applications around your unique business processes, operational requirements, users, and workflows. We develop scalable software that adapts to your organization instead of forcing your teams to work around generic tools.",
      },
      {
        title: "Enterprise SaaS Platforms",
        description:
          "Develop scalable SaaS platforms for internal teams, customers, partners, or business operations. Our SaaS Development expertise helps organizations create secure, multi-user platforms with scalable architectures and reliable product experiences.",
      },
      {
        title: "Business Management Software",
        description:
          "Centralize business operations with custom software for managing workflows, resources, teams, customers, data, and operational processes.",
      },
      {
        title: "Enterprise Portals & Dashboards",
        description:
          "Build centralized portals and dashboards that give employees, customers, partners, and decision-makers access to the information and tools they need.",
      },
      {
        title: "Workflow Automation Systems",
        description:
          "Automate repetitive business processes and connect different operational systems to reduce manual work, improve efficiency, and create more consistent workflows.",
      },
      {
        title: "AI-Powered Enterprise Software",
        description:
          "Integrate intelligent capabilities into enterprise applications using AI assistants, automation, LLMs, knowledge systems, and intelligent workflows. Our AI Development services help businesses introduce practical AI capabilities into existing and new enterprise products.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Enterprise" }, { text: "Software" }],
        [{ text: "Development" }, { text: "Features", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We develop enterprise software with the functionality and technical foundation required for complex business environments.",
          },
        ],
      ],
    },
    features: [
      "Scalable Software Architecture",
      "Secure Authentication & Authorization",
      "Enterprise Integrations",
      "Advanced Dashboards & Reporting",
      "Automated Workflows",
      "API-First Development",
      "AI & Intelligent Automation",
      "Performance Optimization",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "Of" }],
        [
          { text: "Enterprise", variant: "italic" },
          { text: "Software", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [],
    },
    items: [
      {
        title: "Streamline Complex Operations",
        description:
          "Replace disconnected processes and manual workflows with centralized enterprise software designed around your organization's actual operations.",
      },
      {
        title: "Improve Business Efficiency",
        description:
          "Automate repetitive tasks and connect business systems to reduce operational friction and help teams work more efficiently.",
      },
      {
        title: "Centralize Business Data",
        description:
          "Bring critical business information into connected platforms and dashboards so teams can access relevant data from a single environment.",
      },
      {
        title: "Scale with Business Growth",
        description:
          "Build software that can evolve as your organization grows, adds users, enters new markets, and introduces new business requirements.",
      },
      {
        title: "Improve Decision-Making",
        description:
          "Give leadership and operational teams access to structured data, reporting, analytics, and real-time business information.",
      },
      {
        title: "Reduce Software Dependency",
        description:
          "Create custom enterprise systems around your processes instead of relying entirely on disconnected third-party tools that may not fit your organization.",
      },
      {
        title: "Enable Digital Transformation",
        description:
          "Modernize legacy processes and introduce scalable applications, automation, integrations, and AI capabilities across your business.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Enterprise" }, { text: "Software" }],
        [
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [],
    },
    steps: [
      {
        title: "01. Business & Requirements Analysis",
        description:
          "We understand your business processes, technical environment, users, challenges, and software requirements to establish a clear development direction.",
      },
      {
        title: "02. Product Strategy & Architecture",
        description:
          "We define the product structure, technical architecture, integrations, workflows, and scalability requirements before development begins.",
      },
      {
        title: "03. UI/UX Design",
        description:
          "We create intuitive interfaces and user experiences that make complex enterprise software easier for employees, customers, and stakeholders to use. For enterprise products requiring a dedicated experience strategy, our UI/UX Design services can support the design of dashboards, portals, workflows, and application interfaces.",
      },
      {
        title: "04. Software Development",
        description:
          "Our engineers build the enterprise application using scalable development practices, modular architecture, secure coding standards, and maintainable technologies.",
      },
      {
        title: "05. Integration & Automation",
        description:
          "We integrate APIs, databases, third-party platforms, business systems, and automation workflows to connect your enterprise ecosystem.",
      },
      {
        title: "06. Testing & Quality Assurance",
        description:
          "We test functionality, performance, security, integrations, responsiveness, and reliability to identify issues before deployment.",
      },
      {
        title: "07. Deployment & Launch",
        description:
          "We deploy the software into the required environment and support the transition from development to production.",
      },
      {
        title: "08. Continuous Improvement",
        description:
          "After launch, we can continue improving, optimizing, scaling, and extending the enterprise platform as your business requirements evolve.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Technology" }, { text: "&" }, { text: "Expertise" }]],
      description: [
        [
          {
            text: "Skyphr uses modern technologies and engineering practices to build reliable enterprise software.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend Development",
        technologies: [{ name: "React.js" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
      },
      {
        title: "Backend Development",
        technologies: [{ name: "Node.js" }, { name: "Python" }, { name: "FastAPI" }, { name: "REST APIs" }],
      },
      {
        title: "AI & LLM Technologies",
        technologies: [
          { name: "AI models" },
          { name: "LLM integrations" },
          { name: "AI assistants" },
          { name: "Intelligent automation" },
        ],
      },
      {
        title: "Database & Data Systems",
        technologies: [
          { name: "Structured databases" },
          { name: "Application data models" },
          { name: "APIs" },
          { name: "Reporting systems" },
        ],
      },
      {
        title: "Cloud & Infrastructure",
        technologies: [
          { name: "Cloud-ready architectures" },
          { name: "Deployment environments" },
          { name: "Monitoring" },
        ],
      },
    ],
  },
  deliveryApproach: {
    header: {
      title: [
        [{ text: "Enterprise" }, { text: "Software" }],
        [
          { text: "Delivery", variant: "italic" },
          { text: "Approach", variant: "italic" },
        ],
      ],
      description: [],
    },
    items: [
      {
        title: "Business-Focused Development",
        description: "We focus on solving actual business problems rather than simply delivering software features.",
      },
      {
        title: "Modular Architecture",
        description:
          "Enterprise applications are developed with maintainable and modular structures that make future improvements easier.",
      },
      {
        title: "Security by Design",
        description:
          "Security considerations are integrated throughout architecture, development, authentication, authorization, and data handling.",
      },
      {
        title: "Scalable Engineering",
        description:
          "We design systems with future growth in mind, including additional users, features, integrations, and operational complexity.",
      },
      {
        title: "Agile Collaboration",
        description:
          "We maintain an iterative development process that allows teams to review progress, provide feedback, and refine requirements throughout development.",
      },
    ],
  },
  ourValues: {
    header: {
      title: [
        [{ text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [
          { text: "Enterprise", variant: "italic" },
          { text: "Software", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [],
    },
    valuesCards: [
      {
        id: 1,
        title: "Clarity Over Complexity",
        description:
          "Enterprise software can become difficult to use when unnecessary complexity is introduced. We focus on clear architecture, understandable workflows, and intuitive user experiences.",
        icon: createElement(FiLayers, { className: "text-2xl" }),
        color: "#AC9BFF",
        bgColor: "rgba(172, 155, 255, 0.5)",
      },
      {
        id: 2,
        title: "Built for Scale",
        description:
          "We create software architectures capable of evolving with changing business requirements and organizational growth.",
        icon: createElement(FiTrendingUp, { className: "text-2xl" }),
        color: "#B8C56F",
        bgColor: "rgba(184, 197, 111, 0.5)",
      },
      {
        id: 3,
        title: "Performance First",
        description:
          "Enterprise applications need to remain responsive and reliable under real-world usage. We prioritize efficient code, optimized workflows, and scalable infrastructure.",
        icon: createElement(FiZap, { className: "text-2xl" }),
        color: "#FF767A",
        bgColor: "rgba(255, 118, 122, 0.5)",
      },
      {
        id: 4,
        title: "Security & Reliability",
        description:
          "We build enterprise systems with security, reliability, maintainability, and operational stability as core considerations.",
        icon: createElement(FiUsers, { className: "text-2xl" }),
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
          { text: "Enterprise", variant: "italic" },
          { text: "Software", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [],
    },
    items: [
      {
        title: "Custom-Built for Your Business",
        description:
          "We develop software around your workflows, requirements, users, and operational objectives instead of providing one-size-fits-all solutions.",
      },
      {
        title: "Product Design + Engineering",
        description:
          "Our design and engineering capabilities allow us to approach enterprise software from both the user experience and technical perspective.",
      },
      {
        title: "AI-Ready Development",
        description:
          "We can integrate AI, LLMs, intelligent automation, and knowledge systems into enterprise applications where they provide practical business value.",
      },
      {
        title: "Scalable Technology",
        description:
          "We use modern technologies and scalable development practices to create software prepared for long-term growth.",
      },
      {
        title: "Flexible Engagement",
        description:
          "Work with Skyphr to build a new enterprise platform, modernize an existing application, develop specific modules, or extend an existing engineering team.",
      },
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [
        [
          {
            text: "Skyphr develops custom enterprise software for organizations across multiple industries, including:",
          },
        ],
      ],
    },
    items: [
      { title: "SaaS & Technology", description: "Internal tools, admin platforms, and integrations." },
      { title: "Financial Services", description: "Dashboards, transaction workflows, and reporting systems." },
      { title: "Healthcare", description: "Patient portals, internal systems, and integrations." },
      {
        title: "E-commerce & Retail",
        description: "Custom storefront features, inventory systems, and order management.",
      },
      { title: "Logistics & Supply Chain", description: "Fleet, dispatch, and shipment tracking software." },
      { title: "Manufacturing", description: "Production tracking, quality control, and ERP integrations." },
      { title: "Professional Services", description: "Client management, project tracking, and document workflows." },
      { title: "Education", description: "Learning platforms, admin systems, and student portals." },
      { title: "Real Estate", description: "Property, listing, and tenant management systems." },
      { title: "Media & Entertainment", description: "Content management, delivery platforms, and digital rights." },
      { title: "Startups & Growing Businesses", description: "Scalable architectures for growing operations." },
      { title: "Enterprise Organizations", description: "Secure, robust systems tailored to large-scale operations." },
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Frequently Asked Questions" }]],
      description: [],
    },
    faqsItems: [
      {
        question: "What is enterprise software development?",
        answer:
          "Enterprise software development is the process of designing and building software systems that support complex business operations, large teams, multiple users, integrations, workflows, and organizational requirements.",
      },
      {
        question: "What types of enterprise software does Skyphr build?",
        answer:
          "Skyphr builds custom enterprise applications, SaaS platforms, business management systems, dashboards, portals, workflow automation systems, AI-powered applications, and integrated business platforms.",
      },
      {
        question: "Can Skyphr build software for our existing business processes?",
        answer:
          "Yes. We can analyze your existing workflows and develop custom software around your operational processes, integrations, users, and business requirements.",
      },
      {
        question: "Can enterprise software integrate with our existing systems?",
        answer:
          "Yes. Enterprise applications can integrate with APIs, databases, third-party platforms, internal systems, CRMs, business tools, and other software used across your organization.",
      },
      {
        question: "Can you modernize existing enterprise software?",
        answer:
          "Yes. We can help modernize legacy applications, improve architecture, redesign interfaces, introduce new technologies, improve performance, and add new capabilities.",
      },
      {
        question: "Can you add AI to enterprise software?",
        answer:
          "Yes. AI can be integrated into enterprise applications for assistants, intelligent search, document processing, automation, recommendations, knowledge retrieval, and other business workflows. For knowledge-intensive applications, RAG Development can be used to connect AI systems with proprietary enterprise information and business knowledge.",
      },
      {
        question: "How scalable is the enterprise software you build?",
        answer:
          "We design enterprise applications with scalability in mind, considering application architecture, databases, APIs, infrastructure, performance, security, and future feature requirements.",
      },
      {
        question: "Can Skyphr work with our existing development team?",
        answer:
          "Yes. We can work as an extension of your internal team or take responsibility for specific product, engineering, design, or development requirements.",
      },
      {
        question: "How long does enterprise software development take?",
        answer:
          "The timeline depends on the application's scope, complexity, integrations, number of users, features, and technical requirements. After understanding your requirements, we can establish a more accurate development roadmap.",
      },
    ],
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Build Your" }, { text: "Enterprise", variant: "italic" }, { text: "Software" }],
        [{ text: "with Skyphr" }],
      ],
      description: [
        [
          {
            text: "Transform complex business requirements into secure, scalable, and high-performance enterprise software.",
          },
        ],
        [
          {
            text: "Whether you need a new enterprise application, a custom business platform, workflow automation, system integrations, or AI-powered software, Skyphr can help you design, build, and scale the solution.",
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
