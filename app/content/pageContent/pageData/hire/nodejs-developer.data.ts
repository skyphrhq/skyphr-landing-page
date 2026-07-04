import { HIRE_NODE_JS_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_NODE_JS_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const NODEJS_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire Node.js Developers | Dedicated Node.js Development Team | Skyphr",
    description:
      "Hire Node.js developers from Skyphr to build scalable web applications, APIs, microservices, SaaS platforms, and enterprise solutions. Access dedicated Node.js experts for fast, secure, and high-performance development.",
    openGraph: {
      title: "Hire Node.js Developers | Dedicated Node.js Development Team | Skyphr",
      description:
        "Hire Node.js developers from Skyphr to build scalable web applications, APIs, microservices, SaaS platforms, and enterprise solutions. Access dedicated Node.js experts for fast, secure, and high-performance development.",
      images: "/og-image/hire-nodejs-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire Node.js Developers | Dedicated Node.js Development Team | Skyphr",
      description:
        "Hire Node.js developers from Skyphr to build scalable web applications, APIs, microservices, SaaS platforms, and enterprise solutions. Access dedicated Node.js experts for fast, secure, and high-performance development.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-nodejs-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-nodejs-developers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "Node.js Developers", variant: "italic" }],
        [
          {
            text: "Build Scalable Backend Systems with Dedicated Node.js Experts",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Accelerate product development with Skyphr's Node.js development team. Hire Node.js developers who specialize in building high-performance web applications, real-time systems, scalable APIs, enterprise platforms, and SaaS products. Our developers help businesses create fast, secure, and future-ready backend architectures that support growth and innovation.",
          },
        ],
        [
          {
            text: "Whether you're launching a new digital product, modernizing legacy systems, or scaling an existing platform, our dedicated Node.js developers provide the technical expertise required to deliver reliable and high-performing applications.",
          },
        ],
      ],
    },
    highlights: [],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "Node.js" }, { text: "Development" }],
        [{ text: "Services", variant: "italic" }, { text: "We" }, { text: "Offer" }],
      ],
      description: [
        [
          {
            text: "Skyphr provides dedicated Node.js development services to help businesses build scalable backend systems, secure APIs, real-time applications, SaaS platforms, and enterprise-grade digital products.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom Node.js Application Development",
        description:
          "Build robust and scalable server-side applications tailored to your business requirements using modern Node.js frameworks and best practices.",
      },
      {
        title: "REST API & GraphQL Development",
        description:
          "Develop secure, high-performance APIs that enable seamless communication between applications, services, and third-party platforms.",
      },
      {
        title: "SaaS Platform Development",
        description:
          "Hire Node.js developers to create scalable SaaS products with multi-tenant architecture, subscription management, and enterprise-grade performance.",
      },
      {
        title: "Real-Time Application Development",
        description:
          "Build chat applications, collaboration platforms, streaming solutions, and real-time dashboards using WebSockets and event-driven architecture.",
      },
      {
        title: "Microservices Architecture Development",
        description:
          "Transform monolithic applications into scalable microservices that improve performance, deployment flexibility, and maintainability.",
      },
      {
        title: "Enterprise Application Development",
        description:
          "Develop complex business systems and enterprise-grade platforms capable of handling large-scale workloads and business operations.",
      },
      {
        title: "Backend Modernization",
        description:
          "Upgrade legacy backend systems with modern Node.js architecture to improve speed, scalability, security, and maintainability.",
      },
      {
        title: "Ongoing Support & Maintenance",
        description:
          "Ensure application stability, performance optimization, security updates, and continuous improvements through dedicated support services.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [[{ text: "Node.js" }, { text: "Development" }], [{ text: "Capabilities", variant: "italic" }]],
      description: [
        [
          {
            text: "Our Node.js developers are experienced in building modern backend systems using scalable frameworks, databases, messaging systems, cloud platforms, DevOps tools, and microservices architecture.",
          },
        ],
      ],
    },
    features: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Fastify",
      "GraphQL",
      "REST APIs",
      "Socket.IO",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Apache Kafka",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud Platform",
      "Microsoft Azure",
      "CI/CD Pipelines",
      "Microservices Architecture",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "Node.js", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our Node.js development services help businesses build high-performance, scalable, secure, and cloud-ready backend systems that support modern digital products and long-term growth.",
          },
        ],
      ],
    },
    items: [
      {
        title: "High-Performance Architecture",
        description: "Design backend systems optimized for speed, scalability, and efficient resource utilization.",
      },
      {
        title: "Event-Driven Development",
        description:
          "Leverage Node.js's non-blocking architecture to handle high-volume requests and concurrent users.",
      },
      {
        title: "API-First Development",
        description: "Build flexible and reusable APIs that support web, mobile, and third-party integrations.",
      },
      {
        title: "Cloud-Native Solutions",
        description: "Develop cloud-ready applications optimized for modern infrastructure and distributed systems.",
      },
      {
        title: "Security-First Approach",
        description: "Implement authentication, authorization, encryption, and compliance-focused security measures.",
      },
      {
        title: "Scalable Infrastructure",
        description: "Create systems capable of supporting business growth without sacrificing performance.",
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Node.js" }, { text: "Development" }],
        [{ text: "Process", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We follow a structured Node.js development process to assess requirements, plan scalable backend architecture, build secure systems, test performance, deploy reliably, and provide ongoing optimization.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Requirement Analysis",
        description: "We assess business goals, technical requirements, scalability needs, and project scope.",
      },
      {
        title: "Architecture Planning",
        description: "Our experts design scalable backend architecture and define the optimal technology stack.",
      },
      {
        title: "Development & Integration",
        description:
          "Node.js developers build APIs, services, databases, and integrations following industry best practices.",
      },
      {
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing ensures application performance, security, and reliability.",
      },
      {
        title: "Deployment & Optimization",
        description: "Applications are deployed using modern DevOps practices with continuous performance monitoring.",
      },
      {
        title: "Ongoing Support",
        description: "We provide maintenance, updates, feature enhancements, and infrastructure optimization.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right Node.js hiring model based on your backend development needs, project scope, technical requirements, and long-term product roadmap.",
          },
        ],
      ],
    },
    valuesCards: HIRE_NODE_JS_DEVELOPER_VALUES_CARDS,
  },

  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "Node.js", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right Node.js development partner helps you build scalable, secure, high-performance backend systems that support product growth and long-term business success.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine experienced backend engineering, product-focused execution, global delivery standards, and transparent collaboration to help startups, SaaS companies, and enterprises build reliable Node.js applications.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced backend engineers",
      "Product-focused approach",
      "Global delivery standards",
      "Scalable team structure",
      "Transparent collaboration",
      "Long-term technology partnership",
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
    faqsItems: HIRE_NODE_JS_DEVELOPER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Ready" }, { text: "to" }, { text: "Hire" }],
        [
          { text: "Node.js", variant: "italic" },
          { text: "Developers?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Build scalable applications, APIs, SaaS platforms, and enterprise solutions with Skyphr's dedicated Node.js development team. Whether you need a single developer or a complete engineering team, we help you deliver reliable, secure, and high-performance digital products faster.",
          },
        ],
        [
          {
            text: "Let's build your next Node.js project together.",
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
