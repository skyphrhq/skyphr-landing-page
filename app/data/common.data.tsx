import CEOImage from "@/app/assets/webp/varun-patel.webp";
import MockupFive from "@/app/assets/webp/mockup-five.webp";
import MockupFour from "@/app/assets/webp/mockup-four.webp";
import MockupOne from "@/app/assets/webp/mockup-one.webp";
import MockupThree from "@/app/assets/webp/mockup-three.webp";
import MockupTwo from "@/app/assets/webp/mockup-two.webp";
import WebAppDevelopment from "@/app/assets/webp/saas-app-development.webp";
import UiUxDesign from "@/app/assets/webp/ui-ux-design.webp";
import {
  AboutUsCardsDataArrayInterface,
  OurStepsDataInterface,
  OurTeamMembersDataArrayInterface,
  OurValueCardInterface,
} from "@/app/utils/interface/common.interface";
import {
  FeaturedWorkInterface,
  OurServiceCardDataArrayInterface,
  ServiceDataInterface,
} from "@/app/utils/interface/data.interface";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { FiLayers, FiLinkedin, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";
import { IoMdTrendingUp } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

import { FaCode, FaRegCompass, FaRegLightbulb, FaRocket } from "react-icons/fa";

export const FEATURED_WORK_DATA: FeaturedWorkInterface[] = [
  {
    id: "mockup-one",
    imagePath: MockupOne,
  },
  {
    id: "mockup-two",
    imagePath: MockupTwo,
  },
  {
    id: "mockup-three",
    imagePath: MockupThree,
  },
  {
    id: "mockup-four",
    imagePath: MockupFour,
  },
  {
    id: "mockup-five",
    imagePath: MockupFive,
  },
];

export const OUR_SERVICES_DATA: ServiceDataInterface[] = [
  {
    id: "product-design",
    title: "Product Design",
    category: "Design & Strategy",
    description: "Pixel-perfect interfaces crafted to convert visitors into loyal users.",
    bgGradient: "linear-gradient(145deg, #0f0c29 0%, #302b63 60%, #24243e 100%)",
  },
  {
    id: "web-engineering",
    title: "Web Engineering",
    category: "Engineering",
    description: "Full-stack web applications architected for performance and scale.",
    bgGradient: "linear-gradient(145deg, #1a1a2e 0%, #16213e 55%, #0f3460 100%)",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    category: "Engineering",
    description: "Native and cross-platform apps that users reach for every day.",
    bgGradient: "linear-gradient(145deg, #0a3d2b 0%, #1a5c43 55%, #156e43 100%)",
  },
  {
    id: "brand-strategy",
    title: "Brand & Strategy",
    category: "Strategy",
    description: "Identity systems and go-to-market strategy that tell your story.",
    bgGradient: "linear-gradient(145deg, #1a0a1a 0%, #3d1045 55%, #6b2d5e 100%)",
  },
];

export const ABOUT_US_INFO_CARD_DATA: AboutUsCardsDataArrayInterface[] = [
  {
    direction: "TOP_LEFT",
    icon: <MdPeopleAlt className="text-lg md:text-xl text-(--text-main-color)" />,
    count: 10,
    label: "Happy Clients",
  },
  {
    direction: "TOP_RIGHT",
    icon: <FaBriefcase className="text-lg md:text-xl text-(--text-main-color)" />,
    count: 20,
    label: "Projects Delivered",
  },
  {
    direction: "BOTTOM_LEFT",
    icon: <FaClock className="text-lg md:text-xl text-(--text-main-color)" />,
    count: 4,
    label: "Years Of Building Scalable Products",
  },
  {
    direction: "BOTTOM_RIGHT",
    icon: <IoMdTrendingUp className="text-lg md:text-xl text-(--text-main-color)" />,
    count: 10,
    label: "Scalable Systems Built",
  },
];

export const OUR_SERVICE_CARD_DATA: OurServiceCardDataArrayInterface[] = [
  {
    title: "UI UX Design",
    className: "sticky top-[100px] md:top-[20%]",
    description:
      "We design intuitive, high-converting user experiences focused on clarity, usability, and seamless interaction across modern digital products.",
    ctaButton: {
      label: "Explore Design Solutions",
      href: "/services",
    },
    style: {
      baseColor: "#AC9BFF",
      darkColor: "#8674ED",
    },
    imageOptions: {
      imagePath: UiUxDesign,
      width: 350,
      height: 300,
      alt: "Ui Ux Design",
    },
  },
  {
    title: "SaaS & Web App Development",
    className: "sticky top-[130px] md:top-[25%]",
    description:
      "We build scalable SaaS and web applications with modern architecture, optimized performance, and reliable infrastructure for long-term growth.",
    ctaButton: {
      label: "Explore Web App Solutions",
      href: "/services",
    },
    style: {
      baseColor: "#FF767A",
      darkColor: "#FF5B60",
    },
    imageOptions: {
      imagePath: WebAppDevelopment,
      width: 350,
      height: 300,
      alt: "Web App Development",
    },
  },
  {
    title: "SaaS & Web App Development",
    className: "sticky top-[160px] md:top-[30%]",
    description:
      "We build scalable SaaS and web applications with modern architecture, optimized performance, and reliable infrastructure for long-term growth.",
    ctaButton: {
      label: "Explore Web App Solutions",
      href: "/services",
    },
    style: {
      baseColor: "#B8C56F",
      darkColor: "#9FAD4A",
    },
    imageOptions: {
      imagePath: WebAppDevelopment,
      width: 350,
      height: 300,
      alt: "Web App Development",
    },
  },
];

export const OUR_VALUES_CARD_DATA: OurValueCardInterface[] = [
  {
    id: 1,
    title: "Clarity Over Complexity",
    description:
      "We simplify complex ideas into intuitive digital experiences. Every product we design focuses on usability, clear structure, and meaningful interactions.",
    icon: <FiLayers className="text-2xl" />,
    color: "#AC9BFF",
    bgColor: "rgba(172, 155, 255, 0.5)",
  },
  {
    id: 2,
    title: "Built for Scale",
    description:
      "Our systems are designed to grow with your business. We build scalable architectures that support long-term performance and evolving product needs.",
    icon: <FiTrendingUp className="text-2xl" />,
    color: "#B8C56F",
    bgColor: "rgba(184, 197, 111, 0.5)",
  },
  {
    id: 3,
    title: "Performance First",
    description:
      "Speed and efficiency are at the core of our development process. We ensure every product is optimized for fast load times and smooth user experiences.",
    icon: <FiZap className="text-2xl" />,
    color: "#FF767A",
    bgColor: "rgba(255, 118, 122, 0.5)",
  },
  {
    id: 4,
    title: "User-Centered Approach",
    description:
      "We design with real users in mind. Every decision is guided by user behavior, ensuring products are intuitive, engaging, and impactful.",
    icon: <FiUsers className="text-2xl" />,
    color: "#5DADE2",
    bgColor: "rgba(93, 173, 226, 0.5)",
  },
];

export const OUR_TEAM_MEMBERS_DATA: OurTeamMembersDataArrayInterface[] = [
  {
    name: "Varun Patel",
    role: "Founder & CEO",
    description:
      "Focused on building scalable SaaS products, AI systems, and modern web applications with performance, usability, and real-world impact at the core.",
    social: [
      {
        platform: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/in/your-profile",
        title: "LinkedIn",
        ariaLabel: "LinkedIn",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
    imageOptions: {
      imagePath: CEOImage,
      width: 450,
      height: 635,
      alt: "Ui Ux Design",
    },
  },
];

export const STEPS_WE_FOLLOW_IN_SERVICES: OurStepsDataInterface[] = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We understand your business, users and goals to create a clear strategy and roadmap.",
    icon: <FaRegCompass className="w-6 h-6 text-gray-800" />,
    iconBgColor: "bg-purple-50",
    numBgColor: "bg-purple-100",
    numTextColor: "text-purple-800",
  },
  {
    num: "02",
    title: "Design & Experience",
    desc: "We design intuitive, user-focused experiences that are modern, engaging and conversion-driven.",
    icon: <FaRegLightbulb className="w-6 h-6 text-gray-800" />,
    iconBgColor: "bg-yellow-50",
    numBgColor: "bg-yellow-100",
    numTextColor: "text-yellow-800",
  },
  {
    num: "03",
    title: "Development & Build",
    desc: "We build scalable, secure and high-performance products using modern technologies.",
    icon: <FaCode className="w-6 h-6 text-gray-800" />,
    iconBgColor: "bg-pink-50",
    numBgColor: "bg-pink-100",
    numTextColor: "text-pink-800",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "We launch with confidence and continuously optimize to help your product grow and scale.",
    icon: <FaRocket className="w-6 h-6 text-gray-800" />,
    iconBgColor: "bg-indigo-50",
    numBgColor: "bg-indigo-100",
    numTextColor: "text-indigo-800",
  },
];
