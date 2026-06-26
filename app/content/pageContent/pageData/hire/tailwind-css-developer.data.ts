import { HIRE_TAILWIND_CSS_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_TAILWIND_CSS_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";

export const TAILWIND_CSS_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire Tailwind CSS Developers | Expert Tailwind CSS Development Team | Skyphr",
    description:
      "Hire Tailwind CSS developers from Skyphr to build fast, responsive, and scalable web applications. Get dedicated Tailwind CSS experts for SaaS platforms, enterprise software, custom web applications, and modern frontend development.",
    openGraph: {
      title: "Hire Tailwind CSS Developers | Expert Tailwind CSS Development Team | Skyphr",
      description:
        "Hire Tailwind CSS developers from Skyphr to build fast, responsive, and scalable web applications. Get dedicated Tailwind CSS experts for SaaS platforms, enterprise software, custom web applications, and modern frontend development.",
      images: "/og-image/hire-tailwind-css-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire Tailwind CSS Developers | Expert Tailwind CSS Development Team | Skyphr",
      description:
        "Hire Tailwind CSS developers from Skyphr to build fast, responsive, and scalable web applications. Get dedicated Tailwind CSS experts for SaaS platforms, enterprise software, custom web applications, and modern frontend development.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-tailwind-css-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-tailwind-css-developers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "Tailwind CSS Developers", variant: "italic" }],
        [
          {
            text: "Build Fast, Responsive & Scalable User Interfaces with Tailwind CSS",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Hire Tailwind CSS developers from Skyphr to create modern, responsive, and high-performance web applications that deliver exceptional user experiences across devices. Our developers leverage Tailwind CSS's utility-first framework to build scalable frontend architectures, accelerate development cycles, and maintain consistent design systems for startups, SaaS companies, and enterprises worldwide.",
          },
        ],
        [
          {
            text: "Whether you're launching a new SaaS platform, modernizing an enterprise application, or developing a customer-facing digital product, our dedicated Tailwind CSS developers help you create visually appealing, conversion-focused interfaces that support long-term business growth.",
          },
        ],
      ],
    },
    highlights: [],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "Tailwind" }, { text: "CSS" }, { text: "Development" }],
        [{ text: "Services", variant: "italic" }, { text: "We" }, { text: "Offer" }],
      ],
      description: [
        [
          {
            text: "Skyphr provides dedicated Tailwind CSS development services to help businesses build fast, responsive, scalable, and visually consistent user interfaces across modern web applications, SaaS products, and digital platforms.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom Tailwind CSS Development",
        description:
          "Build pixel-perfect, responsive, and scalable user interfaces using Tailwind CSS best practices and modern frontend methodologies.",
      },
      {
        title: "Tailwind CSS Web Application Development",
        description:
          "Develop high-performance web applications with reusable UI components, optimized layouts, and consistent design systems.",
      },
      {
        title: "SaaS Frontend Development",
        description:
          "Create intuitive and scalable SaaS interfaces that improve user engagement, product adoption, and customer retention.",
      },
      {
        title: "UI Component Library Development",
        description:
          "Build reusable component libraries and design systems to ensure consistency across products and teams.",
      },
      {
        title: "Tailwind CSS Migration Services",
        description:
          "Migrate existing CSS frameworks, Bootstrap applications, or legacy stylesheets to Tailwind CSS for improved maintainability and performance.",
      },
      {
        title: "Responsive Website Development",
        description:
          "Design and develop fully responsive websites optimized for desktop, tablet, and mobile experiences.",
      },
      {
        title: "Landing Page Development",
        description:
          "Build high-converting landing pages optimized for performance, user experience, and lead generation.",
      },
      {
        title: "Tailwind CSS Maintenance & Support",
        description:
          "Ensure long-term stability, performance optimization, bug fixing, and continuous frontend improvements.",
      },
    ],
  },

  useCase: {
    header: {
      title: [
        [{ text: "Key" }, { text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "Tailwind", variant: "italic" },
          { text: "CSS", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our Tailwind CSS development services help businesses build fast, responsive, scalable, and visually consistent user interfaces with modern utility-first frontend architecture.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Utility-First Development Approach",
        description: "Accelerate development while maintaining design consistency across applications.",
      },
      {
        title: "Responsive Design Framework",
        description: "Deliver seamless user experiences across all devices and screen sizes.",
      },
      {
        title: "Reusable UI Components",
        description: "Reduce development costs through scalable and reusable frontend architecture.",
      },
      {
        title: "Faster Development Cycles",
        description: "Launch products faster with Tailwind CSS's efficient styling methodology.",
      },
      {
        title: "Lightweight & Optimized Code",
        description: "Improve website performance and reduce CSS bloat with optimized utility classes.",
      },
      {
        title: "Design System Integration",
        description: "Create scalable design systems that support long-term product growth.",
      },
      {
        title: "Cross-Browser Compatibility",
        description: "Ensure consistent performance across modern browsers and platforms.",
      },
      {
        title: "Scalable Frontend Architecture",
        description: "Build applications capable of supporting evolving business requirements.",
      },
    ],
  },

  technologyStack: {
    header: {
      title: [[{ text: "Technology" }, { text: "Expertise", variant: "italic" }]],
      description: [
        [
          {
            text: "Our Tailwind CSS developers work with modern frontend technologies, frameworks, build tools, APIs, and design systems to build scalable, responsive, and enterprise-grade digital products.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend Technologies",
        technologies: [
          { name: "Tailwind CSS" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "React.js" },
          { name: "Next.js" },
          { name: "Vue.js" },
          { name: "Nuxt.js" },
          { name: "Angular" },
        ],
      },
      {
        title: "State Management",
        technologies: [{ name: "Redux" }, { name: "Zustand" }],
      },
      {
        title: "Build Tools",
        technologies: [{ name: "Vite" }, { name: "Webpack" }],
      },
      {
        title: "APIs & Integrations",
        technologies: [{ name: "REST APIs" }, { name: "GraphQL" }],
      },
      {
        title: "Design & Component Systems",
        technologies: [{ name: "Figma" }, { name: "Storybook" }],
      },
    ],
  },
  developmentProcess: {
    header: {
      title: [
        [{ text: "Our" }, { text: "Tailwind" }, { text: "CSS" }],
        [
          { text: "Development", variant: "italic" },
          { text: "Process", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "We follow a structured Tailwind CSS development process to plan, design, build, test, deploy, and continuously optimize responsive, scalable, and high-performing frontend experiences.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Requirements Analysis",
        description:
          "We analyze business objectives, target audiences, product requirements, and technical specifications.",
      },
      {
        title: "UI/UX Planning",
        description: "Our design and development teams create scalable frontend architecture and component strategies.",
      },
      {
        title: "Development & Integration",
        description:
          "Tailwind CSS developers build responsive interfaces while integrating frontend functionality seamlessly.",
      },
      {
        title: "Testing & Quality Assurance",
        description:
          "Every component undergoes comprehensive testing for responsiveness, accessibility, and performance.",
      },
      {
        title: "Deployment",
        description: "Applications are deployed using modern CI/CD workflows for reliable releases.",
      },
      {
        title: "Ongoing Support & Optimization",
        description:
          "We continuously improve frontend performance, maintain design systems, and implement enhancements.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right Tailwind CSS hiring model based on your frontend development needs, project scope, delivery timeline, and long-term product goals.",
          },
        ],
      ],
    },
    valuesCards: HIRE_TAILWIND_CSS_DEVELOPER_VALUES_CARDS,
  },

  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }, { text: "for" }],
        [
          { text: "Tailwind", variant: "italic" },
          { text: "CSS", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right Tailwind CSS development partner helps you build fast, responsive, scalable, and visually consistent user interfaces that support product growth and better user experiences.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine modern frontend expertise, business-focused development, scalable design systems, and agile delivery to help startups, SaaS companies, and enterprises build reliable digital products.",
          },
        ],
      ],
    },
    reasons: [
      "Experienced frontend specialists",
      "Business-focused development",
      "Scalable design systems",
      "Global delivery capability",
      "Agile development approach",
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
    faqsItems: HIRE_TAILWIND_CSS_DEVELOPER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Ready" }, { text: "to" }, { text: "Hire" }],
        [
          { text: "Tailwind", variant: "italic" },
          { text: "CSS", variant: "italic" },
          { text: "Developers?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Build modern, responsive, and scalable digital experiences with expert Tailwind CSS developers from Skyphr. Whether you're developing a SaaS platform, enterprise application, customer portal, or marketing website, our team delivers high-performance frontend solutions designed for growth.",
          },
        ],
        [
          {
            text: "Contact Skyphr today to hire dedicated Tailwind CSS developers and accelerate your next digital product.",
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
