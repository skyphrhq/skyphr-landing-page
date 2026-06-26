import { HIRE_FULL_STACK_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_FULL_STACK_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";
export const FULLSTACK_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire Full Stack Developers | Dedicated Full Stack Development Team | Skyphr",
    description:
      "Hire expert Full Stack Developers from Skyphr to build scalable web applications, SaaS platforms, enterprise software, and digital products. Access dedicated full stack development expertise with flexible hiring models.",
    openGraph: {
      title: "Hire Full Stack Developers | Dedicated Full Stack Development Team | Skyphr",
      description:
        "Hire expert Full Stack Developers from Skyphr to build scalable web applications, SaaS platforms, enterprise software, and digital products. Access dedicated full stack development expertise with flexible hiring models.",
      images: "/og-image/hire-full-stack-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire React.js Developers | Dedicated React JS Development Team | Skyphr",
      description:
        "Hire expert React.js developers from Skyphr to build scalable SaaS platforms, web applications, dashboards, enterprise software, and modern frontend solutions. Flexible hiring models, fast onboarding, and production-ready React development.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-full-stack-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-full-stack-developers`,
    },
  },

  hero: {
    header: {
      title: [[{ text: "Hire Expert " }, { text: "Full Stack Developers", variant: "italic" }]],
      description: [
        [
          {
            text: "Build, scale, and optimize modern digital products with experienced Full Stack Developers from Skyphr. Our developers combine front-end excellence with robust back-end engineering to create secure, scalable, and high-performance applications.",
          },
        ],
        [
          {
            text: `Whether you're launching a SaaS platform, enterprise application, customer portal, marketplace, or AI-powered solution, our dedicated Full Stack Developers help accelerate development while maintaining quality, speed, and scalability.`,
          },
        ],
      ],
    },
    highlights: [],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "Full" }, { text: "Stack" }, { text: "Development" }],
        [{ text: "Services", variant: "italic" }, { text: "for" }, { text: "Modern" }, { text: "Businesses" }],
      ],
      description: [
        [
          {
            text: "At Skyphr, we provide highly skilled Full Stack Developers who can manage complete application development—from user interfaces and APIs to databases, cloud infrastructure, and deployment pipelines.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom Web Application Development",
        description:
          "Develop secure, scalable, and feature-rich web applications tailored to your business objectives and customer requirements.",
      },
      {
        title: "SaaS Platform Development",
        description:
          "Build multi-tenant SaaS applications designed for scalability, reliability, subscription management, and long-term growth.",
      },
      {
        title: "Front-End Development",
        description:
          "Create responsive, interactive, and modern user experiences using leading JavaScript frameworks and UI technologies.",
      },
      {
        title: "Back-End Development",
        description:
          "Develop secure APIs, business logic, database architecture, authentication systems, and integrations that power mission-critical applications.",
      },
      {
        title: "API Development & Integration",
        description:
          "Design RESTful APIs, third-party integrations, payment gateways, CRM connections, ERP integrations, and custom workflows.",
      },
      {
        title: "Cloud-Native Application Development",
        description:
          "Build and deploy cloud-ready applications optimized for scalability, performance, and business continuity.",
      },
      {
        title: "Legacy Application Modernization",
        description:
          "Upgrade outdated systems using modern full stack technologies while preserving business operations and reducing technical debt.",
      },
      {
        title: "AI & Automation Integration",
        description:
          "Integrate AI-powered features, workflow automation, analytics, and intelligent business processes into existing applications.",
      },
    ],
  },

  useCase: {
    header: {
      title: [
        [{ text: "Key" }, { text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "Full", variant: "italic" },
          { text: "Stack", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our full stack development services help businesses build secure, scalable, cloud-ready, and high-performance applications with end-to-end engineering expertise.",
          },
        ],
      ],
    },
    items: [
      {
        title: "End-to-End Development Expertise",
        description:
          "One team capable of handling complete application architecture, development, deployment, and maintenance.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Applications designed to support growing user bases, increased workloads, and evolving business requirements.",
      },
      {
        title: "Security-First Development",
        description:
          "Implementation of security best practices, authentication protocols, data protection, and compliance requirements.",
      },
      {
        title: "Agile Delivery Process",
        description: "Fast development cycles with continuous collaboration, transparency, and iterative improvements.",
      },
      {
        title: "Cloud-Ready Solutions",
        description: "Applications optimized for modern cloud infrastructure and future scalability.",
      },
      {
        title: "High-Performance Applications",
        description:
          "Optimized code, efficient databases, and scalable architectures that deliver superior performance.",
      },
    ],
  },

  technologyStack: {
    header: {
      title: [
        [{ text: "Full" }, { text: "Stack" }, { text: "Technologies" }],
        [
          { text: "Our", variant: "italic" },
          { text: "Developers", variant: "italic" },
          { text: "Use", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our Full Stack Developers have expertise across modern front-end, back-end, database, cloud, and DevOps ecosystems.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Front-End Technologies",
        technologies: [
          { name: "React.js" },
          { name: "Next.js" },
          { name: "Vue.js" },
          { name: "Angular" },
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Tailwind CSS" },
        ],
      },
      {
        title: "Back-End Technologies",
        technologies: [
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "NestJS" },
          { name: "Python" },
          { name: "Django" },
          { name: "Flask" },
          { name: "PHP" },
          { name: "Laravel" },
          { name: "ASP.NET" },
        ],
      },
      {
        title: "Databases",
        technologies: [
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "Redis" },
          { name: "Firebase" },
        ],
      },
      {
        title: "Cloud & DevOps",
        technologies: [
          { name: "AWS" },
          { name: "Microsoft Azure" },
          { name: "Google Cloud Platform" },
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "CI/CD Pipelines" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Full" }, { text: "Stack" }],
        [
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We follow a structured full stack development process to plan, design, build, test, deploy, and continuously optimize secure, scalable and high-performing digital applications.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Requirements Analysis",
        description:
          "We evaluate business goals, technical requirements, existing infrastructure, and project objectives.",
      },
      {
        title: "Architecture Planning",
        description:
          "Our experts design scalable application architecture, technology stack selection, and development roadmap.",
      },
      {
        title: "UI/UX & Front-End Development",
        description: "Create intuitive user experiences and responsive interfaces aligned with business objectives.",
      },
      {
        title: "Back-End Engineering",
        description: "Develop APIs, business logic, databases, authentication systems, and integrations.",
      },
      {
        title: "Testing & Quality Assurance",
        description: "Conduct comprehensive functional, performance, security, and usability testing.",
      },
      {
        title: "Deployment & Launch",
        description: "Deploy applications using modern cloud infrastructure and DevOps best practices.",
      },
      {
        title: "Ongoing Support & Optimization",
        description: "Provide continuous maintenance, feature enhancements, monitoring, and performance improvements.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right Full Stack hiring model based on your project scope, product roadmap, engineering needs, and long-term business goals.",
          },
        ],
      ],
    },
    valuesCards: HIRE_FULL_STACK_DEVELOPER_VALUES_CARDS,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "Full", variant: "italic" },
          { text: "Stack", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right full stack development partner helps you build secure, scalable, and high-performing digital products that support long-term business growth.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine modern engineering expertise, business-driven execution, and transparent collaboration to help startups, enterprises, and growing businesses launch and scale reliable digital solutions.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced engineering team",
      "Business-driven approach",
      "Modern technology expertise",
      "Scalable development process",
      "Transparent collaboration",
      "Long-term technology partner",
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
    faqsItems: HIRE_FULL_STACK_DEVELOPER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Build" }, { text: "Faster" }, { text: "with" }],
        [
          { text: "Expert", variant: "italic" },
          { text: "Full", variant: "italic" },
          { text: "Stack", variant: "italic" },
          { text: "Developers", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Whether you're building a new SaaS platform, enterprise application, customer portal, marketplace, or digital product, Skyphr provides experienced Full Stack Developers who can help you accelerate development, reduce risk, and scale with confidence.",
          },
        ],
        [
          {
            text: "Hire Full Stack Developers from Skyphr and transform your vision into a scalable, high-performance digital product.",
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
