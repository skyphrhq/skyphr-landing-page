import { HIRE_NEXT_JS_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_REACT_JS_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { HIRE_REACT_JS_DEVELOPER } from "@/app/content/pageContent/service-steps.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const NEXTJS_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire Expert Next.js Developers | Dedicated Next.js Development Team | Skyphr",
    description:
      "Hire expert Next.js developers from Skyphr to build high-performance web applications, SaaS platforms, enterprise solutions, and SEO-friendly digital products. Scale faster with dedicated Next.js development teams.",
    openGraph: {
      title: "Hire Expert Next.js Developers | Dedicated Next.js Development Team | Skyphr",
      description:
        "Hire expert Next.js developers from Skyphr to build high-performance web applications, SaaS platforms, enterprise solutions, and SEO-friendly digital products. Scale faster with dedicated Next.js development teams.",
      images: "/og-image/hire-nextjs-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire Expert Next.js Developers | Dedicated Next.js Development Team | Skyphr",
      description:
        "Hire expert Next.js developers from Skyphr to build high-performance web applications, SaaS platforms, enterprise solutions, and SEO-friendly digital products. Scale faster with dedicated Next.js development teams.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-nextjs-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-nextjs-developers`,
    },
  },
  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "Next.js Developers", variant: "italic" }],
        [
          {
            text: "Build High-Performance, SEO-Optimized Web Applications with Dedicated Next.js Experts",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Accelerate your digital transformation with Skyphr's expert Next.js developers. We help startups, SaaS companies, enterprises, and growing businesses build fast, scalable, and SEO-friendly web applications using Next.js and modern React architecture.",
          },
        ],
        [
          {
            text: `Whether you're launching a new SaaS platform, modernizing legacy systems, building enterprise portals, or developing customer-facing applications, our dedicated Next.js developers deliver exceptional performance, security, and scalability that support long-term business growth.
`,
          },
        ],
      ],
    },
    highlights: [],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "Dedicated " }, { text: "Next.js", variant: "italic" }],
        [{ text: "Development" }, { text: "Services" }],
      ],
      description: [],
    },
    cards: [
      {
        title: "Custom Next.js Application Development",
        description:
          "Build robust and scalable web applications tailored to your business goals. Our developers create custom Next.js solutions optimized for performance, maintainability, and user experience.",
        list: {
          title: "Services Include:",
          items: [
            "Custom web application development",
            "SaaS product development",
            "Enterprise portal development",
            "Customer self-service platforms",
            "Progressive web applications (PWAs)",
            "Business management systems",
            "Marketplace development",
            "Internal business tools",
          ],
        },
      },
      {
        title: "Enterprise Next.js Development",
        description:
          "Modern enterprises require scalable, secure, and future-ready digital platforms. Our Next.js experts help organizations develop enterprise-grade applications capable of handling complex business workflows.",
        list: {
          title: "Capabilities:",
          items: [
            "Multi-tenant SaaS platforms",
            "Enterprise dashboards",
            "Workflow automation systems",
            "Secure authentication systems",
            "Large-scale application architecture",
            "Performance optimization",
            "Enterprise integrations",
            "Cloud-native deployment",
          ],
        },
      },
      {
        title: "Next.js Migration & Modernization",
        description:
          "Upgrade outdated web applications to modern Next.js architecture without disrupting business operations.",
        list: {
          title: "Migration Services:",
          items: [
            "Legacy React migration",
            "Monolithic application modernization",
            "Performance optimization",
            "Frontend architecture upgrades",
            "SEO improvements",
            "Cloud migration support",
            "Codebase restructuring",
            "Technical debt reduction",
          ],
        },
      },
      // {
      //   title: "Headless CMS & Content Platforms",
      //   description: "Build highly scalable content-driven experiences using Next.js and headless CMS solutions.",
      //   list: {
      //     title: "CMS Expertise:",
      //     items: [
      //       "Contentful",
      //       "Strapi",
      //       "Sanity",
      //       "Prismic",
      //       "Storyblok",
      //       "Headless WordPress",
      //       "Custom CMS integrations",
      //     ],
      //   },
      // },
    ],
  },
 
  useCase: {
    header: {
      title: [
        [{ text: "Business" }, { text: "Benefits" }, { text: "of" }],
        [
          { text: "Hiring", variant: "italic" },
          { text: "Next.js", variant: "italic" },
          { text: "Developers", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Hiring Next.js developers from Skyphr helps businesses build fast, scalable, SEO-friendly and secure digital products that support long-term growth and better user experiences.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Faster Time-to-Market",
        description:
          "Our experienced developers accelerate development cycles through proven frameworks, reusable components, and agile delivery methodologies.",
      },
      {
        title: "Superior SEO Performance",
        description:
          "Next.js is built for modern SEO requirements. We implement server-side rendering, metadata optimization, structured data, and technical SEO best practices to improve visibility and organic growth.",
      },
      {
        title: "Improved User Experience",
        description:
          "Deliver seamless digital experiences with fast-loading pages, responsive interfaces, and optimized application performance.",
      },
      {
        title: "Scalable Architecture",
        description: "Build applications that grow alongside your business without requiring complete redevelopment.",
      },
      {
        title: "Reduced Development Costs",
        description:
          "Leverage dedicated development resources without the overhead of hiring and maintaining an in-house team.",
      },
      {
        title: "Enterprise-Level Security",
        description:
          "Implement secure authentication, authorization, API protection, and compliance-focused development practices.",
      },
    ],
  },

  technologyStack: {
    header: {
      title: [
        [{ text: "Technologies" }, { text: "& Tools" }, { text: "Our" }],
        [
          { text: "Next.js", variant: "italic" },
          { text: "Developers", variant: "italic" },
          { text: "Use", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our Next.js developers use modern frontend, backend, database, cloud, and DevOps technologies to build scalable, high-performance digital products.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend Technologies",
        technologies: [
          { name: "Next.js" },
          { name: "React.js" },
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "Redux" },
          { name: "Tailwind CSS" },
          { name: "Material UI" },
          { name: "Chakra UI" },
        ],
      },
      {
        title: "Backend & APIs",
        technologies: [
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "NestJS" },
          { name: "GraphQL" },
          { name: "REST APIs" },
        ],
      },
      {
        title: "Databases",
        technologies: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "MySQL" }, { name: "Firebase" }],
      },
      {
        title: "Cloud & DevOps",
        technologies: [
          { name: "AWS" },
          { name: "Google Cloud" },
          { name: "Microsoft Azure" },
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "Vercel" },
          { name: "CI/CD Pipelines" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Next.js" }, { text: "Development" }],
        [{ text: "Process", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We follow a structured Next.js development process that helps businesses move from idea to launch with clear planning, scalable architecture, agile execution, and reliable post-launch support.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Technical Assessment",
        description: "We analyze business objectives, user requirements, technical challenges, and scalability goals.",
        list: {
          title: "Activities:",
          items: [
            "Requirement gathering",
            "Technical consultation",
            "Solution architecture planning",
            "Resource allocation",
          ],
        },
      },
      {
        title: "UI/UX & Architecture Design",
        description:
          "Our designers and engineers collaborate to create user-focused experiences and scalable technical foundations.",
        list: {
          title: "Deliverables:",
          items: ["Wireframes", "User flows", "Technical architecture", "Database planning", "API strategy"],
        },
      },
      {
        title: "Agile Development",
        description: "Our Next.js developers build, test, and optimize features through iterative sprint cycles.",
        list: {
          title: "Focus Areas:",
          items: [
            "Frontend development",
            "API integration",
            "Performance optimization",
            "Security implementation",
            "Code quality assurance",
          ],
        },
      },
      {
        title: "Quality Assurance & Testing",
        description: "Comprehensive testing ensures reliability, scalability, and exceptional user experience.",
        list: {
          title: "Testing Includes:",
          items: [
            "Functional testing",
            "Performance testing",
            "Security testing",
            "Cross-browser testing",
            "Mobile responsiveness testing",
          ],
        },
      },
      {
        title: "Deployment & Ongoing Support",
        description: "We help launch, monitor, and continuously improve your Next.js applications.",
        list: {
          title: "Post-Launch Services:",
          items: [
            "Performance monitoring",
            "Feature enhancements",
            "Security updates",
            "Technical support",
            "Application maintenance",
          ],
        },
      },
    ],
  },
  ourApproach: {
    header: {
      title: [
        [{ text: "How " }, { text: "We" }, { text: "Build" }, { text: "&" }, { text: "Scale" }],
        [{ text: "React.js" }, { text: "Products" }],
      ],
      description: [
        [
          {
            text: "A proven framework for building scalable frontend applications that align with business objectives and user expectations.",
          },
        ],
      ],
      heroHighlightedText: {
        textOne: "From Concept",
        textTwo: "to Launch",
        description: [{ text: "Strategy. Development. Optimization." }],
      },
    },
    steps: HIRE_REACT_JS_DEVELOPER,
  },
  ourValues: {
    header: {
      title: [
        [{ text: "The" }, { text: "Values" }, { text: "That" }, { text: "Drive" }, { text: "Our" }],
        [{ text: "React" }, { text: "Development" }, { text: "Team" }],
      ],
      description: [
        [
          {
            text: "The principles behind every product we build and every engineering decision we make.",
          },
        ],
      ],
    },
    valuesCards: HIRE_REACT_JS_DEVELOPER_VALUES_CARDS,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "As" }, { text: "Your" }],
        [
          { text: "React.js", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Partner", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right React.js development company directly impacts product quality, scalability, and speed to market.",
          },
        ],
        [
          {
            text: "At Skyphr, we partner with founders, CTOs, CIOs, product leaders, and executive teams to build modern digital products that deliver measurable business outcomes.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced React.js developers",
      "Dedicated hiring models",
      "Flexible engagement options",
      "SaaS and enterprise expertise",
      "Modern development practices",
      "Agile delivery processes",
      "Scalable architecture design",
      "Global collaboration capabilities",
      "Transparent communication",
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
    faqsItems: HIRE_NEXT_JS_DEVELOPER_FAQ_DATA,
  },
  readyToScale: {
    header: {
      title: [
        [{ text: "Partner" }, { text: "with" }, { text: "Skyphr" }],
        [{ text: "to" }, { text: "Build", variant: "italic" }, { text: "Faster,", variant: "italic" }],
        [
          { text: "Scale", variant: "italic" },
          { text: "Smarter,", variant: "italic" },
          { text: "and" },
          { text: "Grow", variant: "italic" },
          { text: "Confidently", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Whether you're launching a new SaaS product, modernizing enterprise systems, or scaling digital operations, Skyphr's expert Next.js developers help you build secure, high-performance, and future-ready applications.",
          },
        ],
        [
          {
            text: "Hire dedicated Next.js developers today and accelerate your business growth with a trusted technology partner.",
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
