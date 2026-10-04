import ENTERPRISE_APP_DEVELOPMENT_4X_IMG from "@/app/assets/webp/4x/enterprise-app-development-4x.webp";
import { ENTERPRISE_APP_DEVELOPMENT_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { ENTERPRISE_APP_DEVELOPMENT_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const ENTERPRISE_APP_DEVELOPMENT_SERVICE_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Enterprise App Development Services | Scalable Business Apps | Skyphr",
    description:
      "Build secure, scalable enterprise apps with Skyphr. We develop custom enterprise applications that streamline operations, integrate systems and support long-term business growth.",
    openGraph: {
      title: "Enterprise App Development Services | Scalable Business Apps | Skyphr",
      description:
        "Build secure, scalable enterprise apps with Skyphr. We develop custom enterprise applications that streamline operations, integrate systems and support long-term business growth.",
      images: "/og-image/enterprise-app-development.png",
      type: "website",
    },
    twitter: {
      title: "Enterprise App Development Services | Scalable Business Apps | Skyphr",
      description:
        "Build secure, scalable enterprise apps with Skyphr. We develop custom enterprise applications that streamline operations, integrate systems and support long-term business growth.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/enterprise-app-development.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/services/enterprise-app-development`,
    },
  },
  hero: {
    header: {
      title: [[{ text: "Enterprise" }, { text: "App" }, { text: "Development" }, { text: "Services" }]],
      description: [
        [
          {
            text: "Build secure, scalable enterprise applications with Skyphr. We design and develop high-performance business apps that streamline operations, connect systems, automate workflows and support long-term growth.",
          },
        ],
      ],
      heroImage: {
        imagePath: ENTERPRISE_APP_DEVELOPMENT_4X_IMG,
        height: 2000,
        width: 2000,
        alt: "Enterprise app development services hero illustration",
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
        [{ text: "What" }, { text: "We" }, { text: "Build" }, { text: "under" }],
        [
          { text: "Enterprise", variant: "italic", classNames: "text-center" },
          { text: "App", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr builds custom enterprise applications designed around complex business processes, users, and operational requirements. From internal business platforms to customer-facing applications, we create reliable software that integrates with your existing technology ecosystem and scales with your organization.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom Enterprise Applications",
        description:
          "Build tailored enterprise applications around your unique business processes, workflows, teams, and operational requirements.",
      },
      {
        title: "Business Management Applications",
        description:
          "Centralize business operations with applications for managing teams, resources, projects, customers, data and internal processes.",
      },
      {
        title: "Enterprise Portals",
        description:
          "Create secure employee, partner, customer and vendor portals that provide controlled access to information, tools and workflows.",
      },
      {
        title: "Workflow & Process Applications",
        description:
          "Digitize repetitive processes and create structured workflows that improve productivity, visibility and operational efficiency.",
      },
      {
        title: "Enterprise SaaS Applications",
        description:
          "Develop scalable SaaS applications for organizations that need multi-user functionality, centralized management, secure access and flexible infrastructure.",
      },
      {
        title: "System Integration Applications",
        description:
          "Connect enterprise applications with existing CRM, ERP, payment, communication, analytics and third-party systems.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "Enterprise", variant: "italic" },
          { text: "Applications", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our enterprise app development approach focuses on building applications that are secure, scalable, maintainable and easy to use.",
          },
        ],
      ],
    },
    features: [
      "Scalable application architecture",
      "Role-based access control",
      "Enterprise-grade security",
      "Custom dashboards and reporting",
      "Workflow automation",
      "API and third-party integrations",
      "Real-time data management",
      "Multi-user and multi-role functionality",
      "Cloud-ready infrastructure",
      "Performance optimization",
      "Data validation and monitoring",
      "Responsive user interfaces",
    ],
  },
  useCase: {
    header: {
      title: [[{ text: "Business" }, { text: "Benefits" }]],
      description: [
        [
          {
            text: "Discover how enterprise applications improve operational efficiency, automate workflows, strengthen security, connect systems, and provide scalable technology that supports long-term business growth.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Improve Operational Efficiency",
        description:
          "Automate manual processes and bring business workflows into a centralized enterprise application.",
      },
      {
        title: "Reduce Process Complexity",
        description:
          "Replace disconnected tools and inefficient workflows with software designed around your organization's specific needs.",
      },
      {
        title: "Increase Business Visibility",
        description:
          "Centralized dashboards, reporting and data management provide teams with better access to critical business information.",
      },
      {
        title: "Support Business Growth",
        description:
          "Scalable enterprise application architecture allows your software to evolve as users, data, workflows and business requirements increase.",
      },
      {
        title: "Strengthen Data Security",
        description:
          "Implement controlled access, authentication, permissions and secure application architecture to protect business information.",
      },
      {
        title: "Connect Your Technology Ecosystem",
        description:
          "Integrate enterprise applications with existing systems and third-party platforms to create more connected business operations.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Enterprise" }, { text: "App" }],
        [
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our enterprise app development process combines business discovery, strategic planning, UI/UX design, development, testing, deployment, and ongoing optimization for scalable applications.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Requirement Analysis",
        description:
          "We understand your business objectives, users, workflows, technical requirements, integrations and application goals.",
      },
      {
        title: "Architecture & Planning",
        description:
          "Our team defines the application architecture, technology stack, database structure, integrations, security requirements and development roadmap.",
      },
      {
        title: "UI/UX Design",
        description:
          "We create intuitive enterprise interfaces that simplify complex workflows and make business applications easier for teams to use.",
      },
      {
        title: "Application Development",
        description:
          "Our developers build the core application, business logic, APIs, integrations, dashboards, workflows and required functionality.",
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "We test functionality, performance, security, compatibility, integrations and user workflows to ensure application reliability.",
      },
      {
        title: "Deployment & Launch",
        description:
          "Once the application is ready, we support deployment and ensure the production environment is configured for reliable operation.",
      },
      {
        title: "Support & Scaling",
        description:
          "We continue improving and optimizing the application as your business requirements, users and technology needs evolve.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Technology" }, { text: "&" }, { text: "Expertise" }]],
      description: [
        [
          {
            text: "Skyphr uses modern technologies and development practices to build scalable enterprise applications.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend",
        technologies: [{ name: "React.js" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
      },
      {
        title: "Backend",
        technologies: [{ name: "Node.js" }, { name: "Python" }, { name: "FastAPI" }],
      },
      {
        title: "Databases",
        technologies: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }],
      },
      {
        title: "APIs",
        technologies: [{ name: "REST APIs" }, { name: "Third-party APIs" }, { name: "Custom integrations" }],
      },
      {
        title: "Cloud",
        technologies: [{ name: "Cloud-ready application architecture" }],
      },
      {
        title: "Security",
        technologies: [
          { name: "Authentication" },
          { name: "Authorization" },
          { name: "Role-based access" },
          { name: "Secure APIs" },
        ],
      },
      {
        title: "AI",
        technologies: [
          { name: "AI-powered workflows" },
          { name: "Automation" },
          { name: "Intelligent enterprise features" },
        ],
      },
    ],
  },
  deliveryApproach: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Enterprise" }, { text: "App" }],
        [
          { text: "Delivery", variant: "italic" },
          { text: "Approach", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We build applications around real business requirements rather than forcing organizations into generic software solutions.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Business-Focused Development",
        description:
          "We build applications around real business requirements rather than forcing organizations into generic software solutions.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Our applications are structured to support growing users, data, integrations and business processes.",
      },
      {
        title: "Modular Development",
        description:
          "We use modular application structures that make future updates, integrations and feature expansion easier to manage.",
      },
      {
        title: "Security-First Engineering",
        description:
          "Security considerations are incorporated throughout application architecture, authentication, authorization, data handling and development.",
      },
      {
        title: "Performance-Focused Delivery",
        description:
          "We optimize applications for responsive experiences, efficient data handling and reliable performance across business workflows.",
      },
    ],
  },
  ourValues: {
    header: {
      title: [
        [{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [
          { text: "Enterprise", variant: "italic" },
          { text: "App", variant: "italic" },
          { text: "Development", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our enterprise app development is driven by clarity, scalability, performance, security, and reliability, ensuring every application delivers lasting value and supports evolving business needs.",
          },
        ],
      ],
    },
    valuesCards: ENTERPRISE_APP_DEVELOPMENT_VALUES_CARDS,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "Enterprise", variant: "italic" },
          { text: "App", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Skyphr combines product design, software engineering and automation expertise to build enterprise applications around your organization's needs.",
          },
        ],
      ],
    },
    reasons: [
      "Custom enterprise application development",
      "Scalable and maintainable architecture",
      "Modern frontend and backend technologies",
      "Business workflow automation",
      "API and third-party integrations",
      "Enterprise-focused UI/UX",
      "Security-conscious development",
      "Flexible development engagement",
      "Long-term scalability and support",
    ],
  },
  industriesServe: {
    header: {
      title: [[{ text: "Industries" }, { text: "We" }, { text: "Serve", variant: "italic" }]],
      description: [
        [
          {
            text: "Skyphr develops custom enterprise applications for organizations across multiple industries including:",
          },
        ],
      ],
    },
    items: [
      {
        title: "SaaS & Technology",
        description: "",
      },
      {
        title: "Finance & FinTech",
        description: "",
      },
      {
        title: "Healthcare",
        description: "",
      },
      {
        title: "E-commerce & Retail",
        description: "",
      },
      {
        title: "Education",
        description: "",
      },
      {
        title: "Logistics & Transportation",
        description: "",
      },
      {
        title: "Professional Services",
        description: "",
      },
      {
        title: "Real Estate",
        description: "",
      },
      {
        title: "Manufacturing",
        description: "",
      },
      {
        title: "Startups & Growing Businesses",
        description: "",
      },
    ],
  },
  faq: {
    header: {
      title: [[{ text: "Got Questions? " }], [{ text: "We've Got " }, { text: "Answers", variant: "italic" }]],
      description: [
        [
          {
            text: "Everything you need to know about our services and how we can help your business grow. Can't find the answer you're looking for? ",
          },
          { text: "Reach out to our team", classNames: "font-bold", variant: "brand" },
          { text: " and we'll be happy to help." },
        ],
      ],
    },
    faqsItems: ENTERPRISE_APP_DEVELOPMENT_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [
          { text: "Build" },
          { text: "Your" },
          { text: "Enterprise", variant: "italic" },
          { text: "Application", variant: "italic" },
        ],
        [{ text: "With" }, { text: "Skyphr" }],
      ],
      description: [
        [
          {
            text: "Turn complex business processes into scalable, secure, and reliable enterprise applications. Skyphr helps organizations design, develop, integrate and scale custom software built around their business goals.",
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
