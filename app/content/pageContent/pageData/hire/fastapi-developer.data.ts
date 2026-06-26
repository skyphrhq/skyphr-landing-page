import { HIRE_FASTAPI_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_FASTAPI_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const FASTAPI_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire FastAPI Developers | FastAPI Development Company | Skyphr",
    description:
      "Hire expert FastAPI developers to build high-performance, scalable, and secure APIs, SaaS platforms, AI applications, and enterprise software. Accelerate development with dedicated FastAPI engineers from Skyphr.",
    openGraph: {
      title: "Hire FastAPI Developers | FastAPI Development Company | Skyphr",
      description:
        "Hire expert FastAPI developers to build high-performance, scalable, and secure APIs, SaaS platforms, AI applications, and enterprise software. Accelerate development with dedicated FastAPI engineers from Skyphr.",
      images: "/og-image/hire-fastapi-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire FastAPI Developers | FastAPI Development Company | Skyphr",
      description:
        "Hire expert FastAPI developers to build high-performance, scalable, and secure APIs, SaaS platforms, AI applications, and enterprise software. Accelerate development with dedicated FastAPI engineers from Skyphr.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-fastapi-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-fastapi-developers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "FastAPI Developers", variant: "italic" }],
        [
          {
            text: "Build High-Performance APIs & Scalable Backend Systems",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Hire FastAPI developers from Skyphr to build fast, secure, and scalable backend applications for startups, SaaS companies, and enterprises. Our FastAPI engineers develop high-performance APIs, AI-powered applications, microservices architectures, cloud-native systems, and enterprise-grade platforms that deliver exceptional speed, reliability, and scalability.",
          },
        ],
        [
          {
            text: "Whether you're launching a new SaaS product, modernizing legacy infrastructure, building AI applications, or scaling enterprise systems, our FastAPI development team helps you accelerate development while maintaining code quality, security, and long-term maintainability.",
          },
        ],
      ],
    },
    highlights: [],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "FastAPI" }, { text: "Development" }],
        [{ text: "Services", variant: "italic" }, { text: "We" }, { text: "Offer" }],
      ],
      description: [
        [
          {
            text: "Skyphr provides dedicated FastAPI development services to help businesses build high-performance APIs, scalable backend systems, AI-powered applications, microservices architectures, and cloud-native platforms.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom FastAPI Application Development",
        description:
          "Build robust backend systems using FastAPI's modern Python architecture. We develop scalable applications optimized for performance, reliability, and future growth.",
        list: {
          title: "Services Include:",
          items: [
            "Custom FastAPI application development",
            "Enterprise backend architecture",
            "Cloud-native application development",
            "High-performance API development",
            "Scalable software systems",
            "Modern Python application development",
          ],
        },
      },
      {
        title: "REST API Development",
        description:
          "Develop secure and well-documented REST APIs that power web applications, mobile apps, SaaS platforms, and enterprise ecosystems.",
        list: {
          title: "Services Include:",
          items: [
            "RESTful API development",
            "Third-party API integrations",
            "Secure authentication systems",
            "API versioning and maintenance",
            "API documentation with OpenAPI",
            "Enterprise API architecture",
          ],
        },
      },
      {
        title: "AI & Machine Learning Backend Development",
        description:
          "FastAPI has become a preferred framework for AI-powered applications. Our developers create backend systems that support machine learning models, AI workflows, and intelligent automation solutions.",
        list: {
          title: "Services Include:",
          items: [
            "AI application backend development",
            "Machine learning API integration",
            "LLM application development",
            "AI automation systems",
            "Real-time inference APIs",
            "Data processing pipelines",
          ],
        },
      },
      {
        title: "SaaS Backend Development",
        description:
          "Build scalable SaaS products with FastAPI-powered backend architecture designed to support rapid growth and enterprise-grade performance.",
        list: {
          title: "Services Include:",
          items: [
            "Multi-tenant SaaS architecture",
            "Subscription management systems",
            "User management platforms",
            "SaaS API development",
            "Business workflow automation",
            "Cloud-native SaaS solutions",
          ],
        },
      },
      {
        title: "Microservices Development",
        description:
          "Design and develop scalable microservices architectures that improve flexibility, deployment speed, and system maintainability.",
        list: {
          title: "Services Include:",
          items: [
            "Microservices architecture design",
            "Service orchestration",
            "API gateway implementation",
            "Distributed systems development",
            "Event-driven architectures",
            "Service communication optimization",
          ],
        },
      },
      {
        title: "FastAPI Migration & Modernization",
        description:
          "Upgrade legacy backend systems to FastAPI for improved performance, scalability, and development efficiency.",
        list: {
          title: "Services Include:",
          items: [
            "Legacy application migration",
            "Flask to FastAPI migration",
            "Django API modernization",
            "Monolith to microservices transformation",
            "Architecture optimization",
            "Performance improvements",
          ],
        },
      },
    ],
  },

  useCase: {
    header: {
      title: [
        [{ text: "Key" }, { text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "FastAPI", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our FastAPI development services help businesses build high-performance, scalable, secure, AI-ready, and maintainable backend systems for modern digital products.",
          },
        ],
      ],
    },
    items: [
      {
        title: "High Performance Architecture",
        description:
          "FastAPI is built for speed. We develop systems capable of handling large-scale traffic while maintaining exceptional response times.",
      },
      {
        title: "Scalable Backend Systems",
        description:
          "Our architecture supports future growth through modular design, microservices implementation, and cloud-native deployment strategies.",
      },
      {
        title: "Enterprise Security",
        description:
          "Security is integrated throughout development, including authentication, authorization, encryption, and compliance best practices.",
      },
      {
        title: "API-First Development",
        description:
          "We build API-centric systems that enable seamless integration across web, mobile, SaaS, and enterprise platforms.",
      },
      {
        title: "AI-Ready Infrastructure",
        description:
          "Our FastAPI solutions are designed to support modern AI workloads, machine learning services, and intelligent automation systems.",
      },
      {
        title: "Maintainable Codebase",
        description:
          "Clean architecture, documentation, and testing standards ensure long-term maintainability and scalability.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Core" }, { text: "FastAPI" }, { text: "Expertise", variant: "italic" }]],
      description: [
        [
          {
            text: "Our FastAPI developers bring deep experience across modern backend technologies, databases, cloud ecosystems, DevOps practices, AI tools, and data technologies.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Backend Technologies",
        technologies: [
          { name: "FastAPI" },
          { name: "Python" },
          { name: "SQLAlchemy" },
          { name: "Pydantic" },
          { name: "AsyncIO" },
          { name: "Celery" },
          { name: "GraphQL" },
          { name: "REST APIs" },
        ],
      },
      {
        title: "Databases",
        technologies: [
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "Redis" },
          { name: "Elasticsearch" },
          { name: "DynamoDB" },
        ],
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
          { name: "Terraform" },
        ],
      },
      {
        title: "AI & Data Technologies",
        technologies: [
          { name: "OpenAI APIs" },
          { name: "LangChain" },
          { name: "TensorFlow" },
          { name: "PyTorch" },
          { name: "Vector Databases" },
          { name: "Machine Learning Systems" },
        ],
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "FastAPI" }, { text: "Development" }],
        [{ text: "Process", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We follow a structured FastAPI development process to assess technical requirements, design scalable backend architecture, build reliable applications, test performance, deploy securely, and provide continuous optimization.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Technical Assessment",
        description:
          "We evaluate business goals, architecture requirements, scalability expectations, and technical challenges.",
      },
      {
        title: "Solution Architecture",
        description:
          "Our architects design backend systems optimized for performance, maintainability, and future expansion.",
      },
      {
        title: "Agile Development",
        description:
          "Dedicated FastAPI developers build applications using agile methodologies and iterative delivery processes.",
      },
      {
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing ensures security, reliability, performance, and API stability.",
      },
      {
        title: "Deployment & Optimization",
        description:
          "Applications are deployed using modern DevOps practices with performance monitoring and infrastructure optimization.",
      },
      {
        title: "Ongoing Support",
        description: "We provide continuous maintenance, feature enhancements, monitoring, and technical support.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right FastAPI hiring model based on your backend development needs, project scope, scalability requirements, and long-term product roadmap.",
          },
        ],
      ],
    },
    valuesCards: HIRE_FASTAPI_DEVELOPER_VALUES_CARDS,
  },

  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "FastAPI", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right FastAPI development partner helps you build high-performance, scalable, secure, and maintainable backend systems that support long-term business growth.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine experienced Python engineering, scalable architecture expertise, AI and SaaS development experience, enterprise development standards, and transparent collaboration to help startups, SaaS companies, and enterprises build reliable FastAPI applications.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced Python engineers",
      "Scalable architecture expertise",
      "AI & SaaS development experience",
      "Enterprise development standards",
      "Transparent communication",
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
    faqsItems: HIRE_FASTAPI_DEVELOPER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Build" }, { text: "Scalable" }, { text: "Backend" }],
        [
          { text: "Systems", variant: "italic" },
          { text: "with", variant: "italic" },
          { text: "Expert", variant: "italic" },
          { text: "FastAPI", variant: "italic" },
          { text: "Developers", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Whether you're building APIs, SaaS platforms, AI applications, or enterprise software, Skyphr provides experienced FastAPI developers who help you accelerate development, improve performance, and scale confidently.",
          },
        ],
        [
          {
            text: "Hire FastAPI Developers Today and build modern backend systems designed for growth, reliability, and long-term success.",
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
