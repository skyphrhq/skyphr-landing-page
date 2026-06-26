import { HIRE_PYTHON_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_PYTHON_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const PYTHON_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire Python Developers | Expert Python Development Team for Scalable Applications",
    description:
      "Hire Python developers from Skyphr to build scalable web applications, SaaS platforms, AI solutions, APIs, automation systems, and enterprise software. Access experienced Python engineers for flexible engagement models and faster delivery.",
    openGraph: {
      title: "Hire Python Developers | Expert Python Development Team for Scalable Applications",
      description:
        "Hire Python developers from Skyphr to build scalable web applications, SaaS platforms, AI solutions, APIs, automation systems, and enterprise software. Access experienced Python engineers for flexible engagement models and faster delivery.",
      images: "/og-image/hire-python-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire Python Developers | Expert Python Development Team for Scalable Applications",
      description:
        "Hire Python developers from Skyphr to build scalable web applications, SaaS platforms, AI solutions, APIs, automation systems, and enterprise software. Access experienced Python engineers for flexible engagement models and faster delivery.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-python-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-python-developers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "Python Developers", variant: "italic" }],
        [
          {
            text: "Build Scalable Applications with Dedicated Python Development Experts",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Accelerate product development and digital transformation by hiring experienced Python developers from Skyphr. We help startups, SaaS companies, enterprises, and growing businesses build secure, scalable, and high-performance software solutions using Python and modern development frameworks.",
          },
        ],
        [
          {
            text: "Whether you need to build a custom web application, enterprise platform, AI-powered solution, automation system, API infrastructure, or cloud-native software, our Python developers deliver reliable solutions aligned with your business goals.",
          },
        ],
        [
          {
            text: "Our dedicated Python development team combines technical expertise, agile execution, and product-focused thinking to help organizations reduce development timelines, improve software quality, and scale efficiently.",
          },
        ],
      ],
    },
    highlights: [],
  },

  whatWeBuild: {
    header: {
      title: [
        [{ text: "Python" }, { text: "Development" }],
        [{ text: "Services", variant: "italic" }, { text: "We" }, { text: "Offer" }],
      ],
      description: [
        [
          {
            text: "Skyphr provides dedicated Python development services to help businesses build scalable applications, secure web platforms, SaaS products, API systems, AI-powered solutions, and automation workflows.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom Python Application Development",
        description:
          "Build robust and scalable business applications tailored to your operational requirements, customer experience goals, and growth strategy.",
        list: {
          title: "Capabilities:",
          items: [
            "Custom software development",
            "Enterprise application development",
            "Business workflow systems",
            "Internal operational platforms",
            "Multi-tenant applications",
            "Cloud-native software solutions",
          ],
        },
      },
      {
        title: "Python Web Development",
        description:
          "Develop secure and high-performing web applications using modern Python frameworks and industry best practices.",
        list: {
          title: "Capabilities:",
          items: [
            "Web application development",
            "Backend architecture design",
            "REST API development",
            "Authentication systems",
            "Role-based access control",
            "Real-time applications",
          ],
        },
      },
      {
        title: "SaaS Product Development",
        description:
          "Hire Python developers to build scalable SaaS products designed for performance, growth, and recurring revenue models.",
        list: {
          title: "Capabilities:",
          items: [
            "SaaS platform development",
            "Subscription systems",
            "User management",
            "Tenant architecture",
            "Billing integrations",
            "Customer portals",
          ],
        },
      },
      {
        title: "Python API Development & Integration",
        description:
          "Build reliable APIs that connect applications, automate processes, and improve data accessibility across systems.",
        list: {
          title: "Capabilities:",
          items: [
            "RESTful API development",
            "Third-party integrations",
            "Microservices architecture",
            "Payment gateway integrations",
            "CRM integrations",
            "ERP integrations",
          ],
        },
      },
      {
        title: "AI & Machine Learning Development",
        description:
          "Leverage Python’s powerful AI ecosystem to create intelligent applications and data-driven business solutions.",
        list: {
          title: "Capabilities:",
          items: [
            "Machine learning applications",
            "Predictive analytics",
            "AI model integration",
            "Natural language processing",
            "Recommendation engines",
            "Data intelligence solutions",
          ],
        },
      },
      {
        title: "Automation & Workflow Development",
        description: "Improve efficiency by automating repetitive tasks, workflows, and operational processes.",
        list: {
          title: "Capabilities:",
          items: [
            "Process automation",
            "Workflow automation",
            "Data extraction tools",
            "Reporting systems",
            "Business automation solutions",
            "Custom automation software",
          ],
        },
      },
    ],
  },

  useCase: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "Python", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our Python development services help businesses build scalable, secure, high-performance, cloud-ready, and maintainable software solutions for modern digital products.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Scalable Architecture",
        description: "Applications built to support increasing users, transactions, and business growth.",
      },
      {
        title: "Secure Development",
        description: "Industry-standard security practices to protect applications and data.",
      },
      {
        title: "High Performance",
        description: "Optimized backend systems that ensure speed, reliability, and efficiency.",
      },
      {
        title: "API-First Approach",
        description: "Flexible integrations and seamless communication between systems.",
      },
      {
        title: "Cloud-Ready Infrastructure",
        description: "Designed for modern cloud environments and scalable deployments.",
      },
      {
        title: "Maintainable Codebase",
        description: "Clean architecture and development standards for long-term sustainability.",
      },
    ],
  },

  technologyStack: {
    header: {
      title: [[{ text: "Python" }, { text: "Development" }, { text: "Expertise", variant: "italic" }]],
      description: [
        [
          {
            text: "Our developers work with modern Python technologies and frameworks to build scalable, maintainable, and future-ready applications.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frameworks & Libraries",
        technologies: [
          { name: "Django" },
          { name: "Flask" },
          { name: "FastAPI" },
          { name: "Pyramid" },
          { name: "Tornado" },
          { name: "Celery" },
        ],
      },
      {
        title: "Databases",
        technologies: [
          { name: "PostgreSQL" },
          { name: "MySQL" },
          { name: "MongoDB" },
          { name: "Redis" },
          { name: "SQLite" },
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
        ],
      },
      {
        title: "AI & Data Technologies",
        technologies: [
          { name: "TensorFlow" },
          { name: "PyTorch" },
          { name: "Scikit-learn" },
          { name: "Pandas" },
          { name: "NumPy" },
          { name: "OpenAI Integrations" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [[{ text: "Our" }, { text: "Python" }, { text: "Development" }], [{ text: "Process", variant: "italic" }]],
      description: [
        [
          {
            text: "We follow a structured Python development process to plan requirements, design scalable architecture, build applications with agile execution, test quality, deploy securely, and provide continuous optimization.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Planning",
        description: "We analyze business objectives, technical requirements, and product goals.",
      },
      {
        title: "Architecture Design",
        description: "Our engineers design scalable backend architecture and technical infrastructure.",
      },
      {
        title: "Agile Development",
        description: "Python developers build and iterate using agile methodologies and continuous feedback.",
      },
      {
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing ensures performance, security, reliability, and scalability.",
      },
      {
        title: "Deployment & Launch",
        description: "Applications are deployed using modern DevOps and cloud best practices.",
      },
      {
        title: "Ongoing Support & Optimization",
        description: "Continuous improvements, monitoring, maintenance, and feature enhancements.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right Python hiring model based on your application development needs, project scope, delivery timeline, and long-term business goals.",
          },
        ],
      ],
    },
    valuesCards: HIRE_PYTHON_DEVELOPER_VALUES_CARDS,
  },

  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "Python", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right Python development partner helps you build scalable, secure, high-performance software solutions that support business growth and long-term product success.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine experienced Python engineering, product-focused execution, agile delivery, scalable architecture, and transparent collaboration to help startups, SaaS companies, and enterprises build reliable digital products.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced Python engineers",
      "Product-focused execution",
      "Agile development approach",
      "Scalable solutions",
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
    faqsItems: HIRE_PYTHON_DEVELOPER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Hire" }, { text: "Python" }],
        [
          { text: "Developers", variant: "italic" },
          { text: "Today", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Build scalable applications, accelerate digital transformation, and launch products faster with expert Python developers from Skyphr. Whether you're developing a SaaS platform, enterprise application, AI solution, automation system, or custom software product, our team is ready to help you deliver reliable technology solutions that drive business growth.",
          },
        ],
        [
          {
            text: "Talk to Skyphr today and hire Python developers who can turn your vision into scalable software.",
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
