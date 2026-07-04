import { HIRE_TYPESCRIPT_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_TYPESCRIPT_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const TYPESCRIPT_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire TypeScript Developers | Dedicated TypeScript Development Team | Skyphr",
    description:
      "Hire expert TypeScript developers from Skyphr to build scalable, secure, and high-performance web applications. Dedicated TypeScript development services for startups, SaaS companies, and enterprises worldwide.",
    openGraph: {
      title: "Hire TypeScript Developers | Dedicated TypeScript Development Team | Skyphr",
      description:
        "Hire expert TypeScript developers from Skyphr to build scalable, secure, and high-performance web applications. Dedicated TypeScript development services for startups, SaaS companies, and enterprises worldwide.",
      images: "/og-image/hire-typescript-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire TypeScript Developers | Dedicated TypeScript Development Team | Skyphr",
      description:
        "Hire expert TypeScript developers from Skyphr to build scalable, secure, and high-performance web applications. Dedicated TypeScript development services for startups, SaaS companies, and enterprises worldwide.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-typescript-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-typescript-developers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "TypeScript Developers", variant: "italic" }],
        [
          {
            text: "Build Scalable, Secure & Enterprise-Ready Applications with TypeScript Experts",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Hire TypeScript developers from Skyphr to build modern web applications, SaaS platforms, enterprise software, APIs, and cloud-native solutions with confidence. Our dedicated TypeScript developers help businesses create maintainable, scalable, and high-performance applications using robust typing, clean architecture, and modern development practices.",
          },
        ],
        [
          {
            text: "Whether you're launching a new SaaS product, modernizing an existing JavaScript application, or scaling an enterprise platform, our TypeScript development team delivers reliable solutions built for long-term growth.",
          },
        ],
      ],
    },
    highlights: [],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "Our" }, { text: "TypeScript" }, { text: "Development" }],
        [{ text: "Services", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "Skyphr provides dedicated TypeScript development services to help businesses build scalable, secure, maintainable, and enterprise-ready applications across frontend, backend, SaaS, and cloud-native platforms.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom TypeScript Application Development",
        description:
          "Build scalable applications with strong typing, improved maintainability, and enhanced developer productivity.",
      },
      {
        title: "TypeScript Web Development",
        description:
          "Develop modern web applications using TypeScript with frameworks such as React, Next.js, Angular, and Node.js.",
      },
      {
        title: "Enterprise Software Development",
        description:
          "Create large-scale enterprise applications designed for performance, security, and long-term scalability.",
      },
      {
        title: "TypeScript API Development",
        description: "Build secure REST APIs, GraphQL APIs, and backend services with TypeScript and Node.js.",
      },
      {
        title: "JavaScript to TypeScript Migration",
        description:
          "Modernize existing JavaScript applications by migrating to TypeScript with minimal disruption and improved code quality.",
      },
      {
        title: "SaaS Product Development",
        description:
          "Develop cloud-based SaaS platforms using TypeScript architectures optimized for growth and scalability.",
      },
      {
        title: "Frontend Development with TypeScript",
        description:
          "Build responsive, interactive, and high-performance user interfaces using modern frontend technologies.",
      },
      {
        title: "Backend Development with TypeScript",
        description:
          "Create robust backend systems, microservices, and server-side applications using TypeScript and Node.js.",
      },
      {
        title: "TypeScript Code Refactoring",
        description:
          "Improve application performance, maintainability, security, and scalability through structured code optimization.",
      },
      {
        title: "Dedicated TypeScript Development Teams",
        description:
          "Extend your internal capabilities with dedicated TypeScript developers who work as part of your team.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [
        [{ text: "What" }, { text: "Our" }, { text: "TypeScript" }],
        [
          { text: "Developers", variant: "italic" },
          { text: "Can", variant: "italic" },
          { text: "Build", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our TypeScript development team helps organizations build scalable, secure, maintainable, and high-performance digital products across SaaS, enterprise, cloud, API, and AI-powered ecosystems.",
          },
        ],
      ],
    },
    features: [
      "SaaS Applications",
      "Enterprise Software Platforms",
      "Web Applications",
      "Customer Portals",
      "Internal Business Tools",
      "CRM Systems",
      "ERP Solutions",
      "B2B Platforms",
      "E-commerce Applications",
      "FinTech Platforms",
      "Healthcare Applications",
      "Cloud-Native Applications",
      "API Platforms",
      "Microservices Architectures",
      "AI-Powered Applications",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Key" }, { text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "TypeScript", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our TypeScript development services help businesses build secure, scalable, stable, and future-ready applications with strongly typed architecture and modern development standards.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Strongly Typed Architecture",
        description: "Reduce runtime errors and improve software reliability through static type checking.",
      },
      {
        title: "Scalable Codebase",
        description: "Build applications that remain maintainable as teams and products grow.",
      },
      {
        title: "Improved Developer Productivity",
        description: "Accelerate development with better tooling, autocompletion, and code consistency.",
      },
      {
        title: "Enhanced Application Stability",
        description: "Identify issues earlier in the development lifecycle and improve software quality.",
      },
      {
        title: "Modern Development Standards",
        description: "Follow industry best practices, coding standards, and architecture principles.",
      },
      {
        title: "Security-Focused Development",
        description: "Implement secure coding practices to protect business-critical applications.",
      },
      {
        title: "Seamless Third-Party Integrations",
        description: "Connect applications with payment systems, CRMs, cloud services, and business platforms.",
      },
      {
        title: "Future-Ready Technology Stack",
        description: "Build solutions designed to evolve alongside changing business requirements.",
      },
    ],
  },

  technologyStack: {
    header: {
      title: [[{ text: "Technologies" }, { text: "&" }], [{ text: "Expertise", variant: "italic" }]],
      description: [
        [
          {
            text: "Our TypeScript developers work with modern frontend, backend, database, cloud, DevOps, and development practices to build scalable and reliable applications.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend Technologies",
        technologies: [
          { name: "TypeScript" },
          { name: "React.js" },
          { name: "Next.js" },
          { name: "Angular" },
          { name: "Vue.js" },
          { name: "Redux" },
          { name: "Tailwind CSS" },
        ],
      },
      {
        title: "Backend Technologies",
        technologies: [
          { name: "Node.js" },
          { name: "NestJS" },
          { name: "Express.js" },
          { name: "Fastify" },
          { name: "GraphQL" },
        ],
      },
      {
        title: "Databases",
        technologies: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }, { name: "Redis" }],
      },
      {
        title: "Cloud & DevOps",
        technologies: [
          { name: "AWS" },
          { name: "Google Cloud" },
          { name: "Microsoft Azure" },
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "CI/CD Pipelines" },
        ],
      },
      {
        title: "Development Practices",
        technologies: [
          { name: "Agile Development" },
          { name: "Test-Driven Development (TDD)" },
          { name: "Clean Architecture" },
          { name: "Domain-Driven Design" },
          { name: "Microservices Architecture" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "TypeScript" }, { text: "Development" }],
        [{ text: "Process", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We follow a structured TypeScript development process to assess, architect, build, test, deploy, and continuously optimize scalable, secure, and maintainable applications.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Technical Assessment",
        description: "We evaluate project requirements, technical goals, existing systems, and business objectives.",
      },
      {
        title: "Solution Architecture",
        description: "Our architects design scalable TypeScript-based solutions aligned with your growth strategy.",
      },
      {
        title: "UI/UX & Application Planning",
        description: "We define user flows, application structure, and technical specifications.",
      },
      {
        title: "Agile Development",
        description:
          "Dedicated TypeScript developers build and iterate using agile methodologies and continuous collaboration.",
      },
      {
        title: "Quality Assurance & Testing",
        description: "Comprehensive testing ensures performance, security, stability, and reliability.",
      },
      {
        title: "Deployment & Launch",
        description: "Applications are deployed using modern DevOps practices and cloud infrastructure.",
      },
      {
        title: "Ongoing Support & Optimization",
        description: "We provide continuous maintenance, feature enhancements, and performance improvements.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right TypeScript hiring model based on your project scope, technical requirements, engineering capacity, and long-term product roadmap.",
          },
        ],
      ],
    },
    valuesCards: HIRE_TYPESCRIPT_DEVELOPER_VALUES_CARDS,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "TypeScript", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right TypeScript development partner helps you build scalable, secure, maintainable, and high-performance applications that support long-term product growth.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine experienced TypeScript engineering, product-focused execution, scalable architecture, and transparent collaboration to help startups, scale-ups, and enterprises build reliable digital solutions.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced TypeScript engineers",
      "Product-focused approach",
      "Scalable architecture expertise",
      "Transparent communication",
      "Agile delivery",
      "Global delivery capability",
      "Quality-first mindset",
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
    faqsItems: HIRE_TYPESCRIPT_DEVELOPER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Hire" }, { text: "TypeScript" }],
        [
          { text: "Developers", variant: "italic" },
          { text: "Today", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Build scalable, secure, and future-ready digital products with Skyphr's expert TypeScript developers. Whether you're developing a SaaS platform, enterprise application, or modern web solution, our team helps you accelerate development, improve software quality, and achieve your business goals.",
          },
        ],
        [
          {
            text: "Ready to scale your development team? Contact Skyphr today and hire dedicated TypeScript developers for your next project.",
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
