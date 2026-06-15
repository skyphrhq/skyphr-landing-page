import MockupFive from "@/app/assets/webp/mockup-five.webp";
import MockupFour from "@/app/assets/webp/mockup-four.webp";
import MockupOne from "@/app/assets/webp/mockup-one.webp";
import MockupThree from "@/app/assets/webp/mockup-three.webp";
import MockupTwo from "@/app/assets/webp/mockup-two.webp";
import WebAppDevelopment from "@/app/assets/webp/saas-app-development.webp";
import UiUxDesign from "@/app/assets/webp/ui-ux-design.webp";
import CEOImage from "@/app/assets/webp/varun-patel.webp";
import CustomSoftwareDevelopment from "@/app/assets/webp/custom-software-development.webp";
import AiDevelopmentAutomation from "@/app/assets/webp/ai-development-automation.webp";
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
    label: "Happy Clients Worldwide",
  },
  {
    direction: "TOP_RIGHT",
    icon: <FaBriefcase className="text-lg md:text-xl text-(--text-main-color)" />,
    count: 20,
    label: "Projects Successfully Delivered",
  },
  {
    direction: "BOTTOM_LEFT",
    icon: <FaClock className="text-lg md:text-xl text-(--text-main-color)" />,
    count: 4,
    label: "Years Building Scalable Digital Products",
  },
  {
    direction: "BOTTOM_RIGHT",
    icon: <IoMdTrendingUp className="text-lg md:text-xl text-(--text-main-color)" />,
    count: 10,
    label: "AI Systems & Scalable Platforms Built",
  },
];

export const OUR_SERVICE_CARD_DATA: OurServiceCardDataArrayInterface[] = [
  {
    title: "UI/UX Design Services",
    className: "sticky top-[100px] md:top-[20%]",
    description:
      "We create user-centered UI/UX designs that improve engagement, increase conversions, and deliver seamless experiences across web and mobile applications. Our product design process focuses on usability, accessibility, and business outcomes.",
    ctaButton: {
      label: "Explore Design Solutions",
      href: "/services/ui-ux-design",
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
    title: "SaaS & Web Application Development",
    className: "sticky top-[130px] md:top-[25%]",
    description:
      "As a SaaS development company, we build scalable web applications and cloud-based software platforms using modern technologies and robust architectures. Our solutions are optimized for performance, security, and future growth.",
    ctaButton: {
      label: "Explore Web App Solutions",
      href: "/services/saas-development-services",
    },
    style: {
      baseColor: "#FF767A",
      darkColor: "#FF5B60",
    },
    imageOptions: {
      imagePath: WebAppDevelopment,
      width: 350,
      height: 300,
      alt: "SaaS & Web Application Development",
    },
  },
  {
    title: "AI Development & Automation Services",
    className: "sticky top-[160px] md:top-[30%]",
    description:
      "We help businesses automate workflows, improve efficiency, and unlock new opportunities through custom AI solutions, AI integrations, intelligent automation, and machine learning-powered systems tailored to business needs.",
    ctaButton: {
      label: "Explore AI Solutions",
      href: "/services/ai-development-services",
    },
    style: {
      baseColor: "#B8C56F",
      darkColor: "#9FAD4A",
    },
    imageOptions: {
      imagePath: AiDevelopmentAutomation,
      width: 350,
      height: 300,
      alt: "AI Development & Automation Services",
    },
  },
  {
    title: "Custom Software Development",
    className: "sticky top-[160px] md:top-[30%]",
    description:
      "We develop scalable custom software solutions designed around your unique business requirements. From MVP development to enterprise software systems, we deliver reliable products built to support long-term growth.",
    ctaButton: {
      label: "Explore Software Solutions",
      href: "/services/custom-software-development-services",
    },
    style: {
      baseColor: "#FC905F",
      darkColor: "#FB7D44",
    },
    imageOptions: {
      imagePath: CustomSoftwareDevelopment,
      width: 350,
      height: 300,
      alt: "Custom Software Development",
    },
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



