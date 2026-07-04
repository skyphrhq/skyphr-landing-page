import { HIRE_GSAP_DEVELOPER_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import { HIRE_GSAP_DEVELOPER_VALUES_CARDS } from "@/app/content/pageContent/our-values.data";
import { COMMON_CONTACT_US_SECTION_DATA } from "@/app/content/pageContent/pageData/home.data";
import { CLIENT_TESTIMONIAL_DATA } from "@/app/content/pageContent/testimonial.data";
import { SITE_BASE_URL } from "@/app/utils/constants/common.constant";
import { HirePageDataInterface } from "@/app/utils/interface/data.interface";
export const GSAP_ANIMATION_DEVELOPER_HIRE_PAGE_DATA: HirePageDataInterface = {
  metadata: {
    title: "Hire GSAP Animation Developers | Expert GSAP Developers for Interactive Web Experiences | Skyphr",
    description:
      "Hire expert GSAP animation developers from Skyphr to create high-performance web animations, interactive user experiences, scroll-triggered effects, and engaging digital products. Scale your frontend team with dedicated GSAP specialists.",
    openGraph: {
      title: "Hire GSAP Animation Developers | Expert GSAP Developers for Interactive Web Experiences | Skyphr",
      description:
        "Hire expert GSAP animation developers from Skyphr to create high-performance web animations, interactive user experiences, scroll-triggered effects, and engaging digital products. Scale your frontend team with dedicated GSAP specialists.",
      images: "/og-image/hire-gsap-animation-developers.png",
      type: "website",
    },
    twitter: {
      title: "Hire GSAP Animation Developers | Expert GSAP Developers for Interactive Web Experiences | Skyphr",
      description:
        "Hire expert GSAP animation developers from Skyphr to create high-performance web animations, interactive user experiences, scroll-triggered effects, and engaging digital products. Scale your frontend team with dedicated GSAP specialists.",
      card: "summary_large_image",
      creator: "@skyphrhq",
      site: "@skyphrhq",
      images: "/og-image/hire-gsap-animation-developers.png",
    },
    alternates: {
      canonical: `${SITE_BASE_URL}/hire/hire-gsap-animation-developers`,
    },
  },

  hero: {
    header: {
      title: [
        [{ text: "Hire Expert " }, { text: "GSAP Animation Developers", variant: "italic" }],
        [
          {
            text: "Build High-Performance Interactive Experiences with Expert GSAP Developers",
            classNames: "pt-2 lg:pt-4 flex text-lg! lg:text-xl! xl:text-2xl! tracking-wide",
          },
        ],
      ],
      description: [
        [
          {
            text: "Create visually engaging, highly interactive digital experiences with dedicated GSAP animation developers from Skyphr. We help startups, SaaS companies, agencies, and enterprises build smooth, performant, and conversion-focused web animations using GSAP, ScrollTrigger, MotionPath, Three.js integrations, and modern frontend frameworks.",
          },
        ],
        [
          {
            text: "Whether you need immersive landing pages, animated SaaS dashboards, product showcases, storytelling websites, or enterprise web applications, our GSAP developers deliver pixel-perfect animations optimized for performance, usability, and business outcomes.",
          },
        ],
      ],
    },
    highlights: [],
  },
  whatWeBuild: {
    header: {
      title: [
        [{ text: "Dedicated" }, { text: "GSAP" }, { text: "Development" }],
        [{ text: "Services", variant: "italic" }],
      ],
      description: [
        [
          {
            text: "We help businesses create smooth, high-performance, and interactive web experiences using GSAP, ScrollTrigger, Three.js integrations, and modern frontend animation systems.",
          },
        ],
      ],
    },
    cards: [
      {
        title: "Custom GSAP Animation Development",
        description:
          "Develop advanced web animations that enhance engagement, storytelling, and user experience while maintaining excellent website performance.",
      },
      {
        title: "Interactive Website Development",
        description:
          "Build immersive digital experiences with smooth transitions, animated components, micro-interactions, and interactive UI elements.",
      },
      {
        title: "Scroll-Based Animation Development",
        description:
          "Create engaging scroll-triggered experiences using GSAP ScrollTrigger for modern websites, marketing campaigns, and product pages.",
      },
      {
        title: "Landing Page Animation Development",
        description:
          "Design and implement high-converting animated landing pages that improve user engagement and conversion rates.",
      },
      {
        title: "SaaS Product Animation",
        description:
          "Enhance SaaS platforms with intuitive motion design, onboarding animations, feature demonstrations, and interactive workflows.",
      },
      {
        title: "Three.js & GSAP Integration",
        description:
          "Develop advanced 3D web experiences by integrating GSAP with Three.js, WebGL, and interactive visualizations.",
      },
      {
        title: "Frontend Animation Optimization",
        description:
          "Improve animation performance, loading speed, responsiveness, and cross-browser compatibility across devices.",
      },
      {
        title: "Enterprise Web Experience Development",
        description:
          "Build scalable animation systems and reusable motion libraries for enterprise applications and digital platforms.",
      },
    ],
  },
  featuresInclude: {
    header: {
      title: [[{ text: "GSAP" }, { text: "Development" }], [{ text: "Capabilities", variant: "italic" }]],
      description: [
        [
          {
            text: "Our GSAP animation developers help organizations build modern, interactive, and high-performance digital experiences using advanced animation frameworks, frontend technologies and motion design systems.",
          },
        ],
      ],
    },
    features: [
      "GSAP Core Animation Framework",
      "ScrollTrigger Development",
      "MotionPath Animations",
      "Flip Animations",
      "Timeline-Based Animation Systems",
      "SVG Animation Development",
      "Interactive User Interfaces",
      "Three.js Integration",
      "WebGL Experiences",
      "React GSAP Development",
      "Next.js Animation Development",
      "Vue.js GSAP Integration",
      "JavaScript Animation Engineering",
      "Performance Optimization",
      "Responsive Motion Design",
      "Animation System Architecture",
    ],
  },
  useCase: {
    header: {
      title: [
        [{ text: "Features" }, { text: "of" }, { text: "Our" }],
        [
          { text: "GSAP", variant: "italic" },
          { text: "Development", variant: "italic" },
          { text: "Services", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Our GSAP development services help businesses create smooth, interactive, and conversion-focused digital experiences that improve engagement, storytelling, and product usability.",
          },
        ],
      ],
    },
    items: [
      {
        title: "Smooth High-Performance Animations",
        description: "Deliver fluid motion experiences optimized for speed and responsiveness.",
      },
      {
        title: "Scroll-Driven Storytelling",
        description:
          "Create engaging content journeys that guide users through products, services, and brand narratives.",
      },
      {
        title: "Advanced Interactive Experiences",
        description: "Build interactive websites that capture user attention and increase engagement.",
      },
      {
        title: "Cross-Browser Compatibility",
        description: "Ensure consistent animation behavior across all major browsers and devices.",
      },
      {
        title: "Responsive Motion Systems",
        description: "Design animations that adapt seamlessly across desktop, tablet, and mobile experiences.",
      },
      {
        title: "Reusable Animation Libraries",
        description: "Develop scalable motion systems that improve development efficiency and consistency.",
      },
      {
        title: "Modern Frontend Integration",
        description: "Integrate GSAP seamlessly with React, Next.js, Vue.js, and custom JavaScript applications.",
      },
      {
        title: "Conversion-Focused Design",
        description: "Use strategic animation patterns to improve user engagement and business performance.",
      },
    ],
  },
  technologyStack: {
    header: {
      title: [[{ text: "Technology" }, { text: "Expertise" }]],
      description: [
        [
          {
            text: "Our GSAP developers work across modern frontend technologies, animation ecosystems, interactive experience tools, and deployment platforms.",
          },
        ],
      ],
    },
    groups: [
      {
        title: "Frontend Technologies",
        technologies: [
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "React.js" },
          { name: "Next.js" },
          { name: "Vue.js" },
          { name: "Nuxt.js" },
        ],
      },
      {
        title: "Animation Technologies",
        technologies: [
          { name: "GSAP" },
          { name: "ScrollTrigger" },
          { name: "MotionPath" },
          { name: "Flip Plugin" },
          { name: "ScrollSmoother" },
          { name: "SVG Animation" },
        ],
      },
      {
        title: "Interactive Experience Technologies",
        technologies: [
          { name: "Three.js" },
          { name: "WebGL" },
          { name: "Canvas API" },
          { name: "Lottie" },
          { name: "Framer Motion" },
        ],
      },
      {
        title: "Development & Deployment",
        technologies: [
          { name: "GitHub" },
          { name: "GitLab" },
          { name: "Vercel" },
          { name: "Netlify" },
          { name: "AWS" },
          { name: "CI/CD Pipelines" },
        ],
      },
    ],
  },

  developmentProcess: {
    header: {
      title: [[{ text: "Our" }, { text: "GSAP" }, { text: "Development" }], [{ text: "Process", variant: "italic" }]],
      description: [
        [
          {
            text: "We follow a structured GSAP development process to plan, design, build, optimize, and launch smooth, high-performance animation experiences across modern web platforms.",
          },
        ],
      ],
    },
    steps: [
      {
        title: "Discovery & Requirements Analysis",
        description:
          "We evaluate project goals, user experience requirements, animation strategy, and business objectives.",
      },
      {
        title: "Motion Strategy & Planning",
        description: "Our team defines animation architecture, interaction models, and technical implementation plans.",
      },
      {
        title: "UI Animation Development",
        description: "Develop engaging motion systems, transitions, interactions, and visual storytelling experiences.",
      },
      {
        title: "Integration & Optimization",
        description: "Integrate animations with frontend frameworks while ensuring performance and scalability.",
      },
      {
        title: "Testing & Quality Assurance",
        description: "Conduct extensive testing across browsers, devices, and screen sizes.",
      },
      {
        title: "Deployment & Ongoing Support",
        description: "Launch production-ready animation experiences with continuous optimization and maintenance.",
      },
    ],
  },

  ourValues: {
    header: {
      title: [[{ text: "Flexible" }, { text: "Hiring" }], [{ text: "Models", variant: "italic" }]],
      description: [
        [
          {
            text: "Choose the right GSAP hiring model based on your animation requirements, project scope, frontend team needs, and delivery timeline.",
          },
        ],
      ],
    },
    valuesCards: HIRE_GSAP_DEVELOPER_VALUES_CARDS,
  },
  whyChoose: {
    header: {
      title: [
        [{ text: "Why" }, { text: "Choose" }, { text: "Skyphr" }],
        [
          { text: "for", variant: "italic" },
          { text: "GSAP", variant: "italic" },
          { text: "Development?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Choosing the right GSAP development partner helps you build smooth, high-performance, and interactive digital experiences that improve user engagement and business outcomes.",
          },
        ],
        [
          {
            text: "At Skyphr, we combine animation engineering, modern frontend expertise, and business-focused execution to deliver scalable motion systems and immersive web experiences.",
          },
        ],
      ],
    },
    reasons: [
      "Specialized frontend expertise",
      "Performance-first development",
      "Scalable architecture",
      "Business-focused execution",
      "Transparent communication",
      "Global delivery capability",
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
    faqsItems: HIRE_GSAP_DEVELOPER_FAQ_DATA,
  },

  readyToScale: {
    header: {
      title: [
        [{ text: "Ready" }, { text: "to" }, { text: "Build" }],
        [
          { text: "Exceptional", variant: "italic" },
          { text: "Interactive", variant: "italic" },
          { text: "Experiences?", variant: "italic" },
        ],
      ],
      description: [
        [
          {
            text: "Hire expert GSAP animation developers from Skyphr to create immersive digital experiences, interactive websites, and high-performance web applications that engage users and drive business growth.",
          },
        ],
        [
          {
            text: "Contact Skyphr today to discuss your GSAP development requirements and build next-generation web experiences.",
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
