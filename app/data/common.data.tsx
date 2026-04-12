import MockupFive from "@/app/assets/mockup-five.png";
import MockupFour from "@/app/assets/mockup-four.png";
import MockupOne from "@/app/assets/mockup-one.png";
import MockupThree from "@/app/assets/mockup-three.png";
import MockupTwo from "@/app/assets/mockup-two.png";
import WebAppDevelopment from "@/app/assets/saas-app-development.png";
import UiUxDesign from "@/app/assets/ui-ux-design.png";
import {
  FeaturedWorkInterface,
  OurServiceCardDataArrayInterface,
  ServiceDataInterface,
} from "@/app/utils/interface/data.interface";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { AboutUsCardsDataArrayInterface } from "../utils/interface/common.interface";

export const FETURED_WORK_DATA: FeaturedWorkInterface[] = [
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
    icon: <MdPeopleAlt className="text-xl text-(--text-main-color)" />,
    count: 10,
    label: "Happy Clients",
  },
  {
    direction: "TOP_RIGHT",
    icon: <FaBriefcase className="text-xl text-(--text-main-color)" />,
    count: 20,
    label: "Projects Delivered",
  },
  {
    direction: "BOTTOM_LEFT",
    icon: <FaClock className="text-xl text-(--text-main-color)" />,
    count: 4,
    label: "Years Of Building Scalable Products",
  },
  {
    direction: "BOTTOM_RIGHT",
    icon: <IoMdTrendingUp className="text-xl text-(--text-main-color)" />,
    count: 10,
    label: "Scalable Systems Built",
  },
];

export const OUR_SERVICE_CARD_DATA: OurServiceCardDataArrayInterface[] = [
  {
    title: "UI UX Design",
    className: "sticky top-[20%]",
    description:
      "We design intuitive, high-converting user experiences focused on clarity, usability, and seamless interaction across modern digital products.",
    ctaButton: {
      label: "Explore Design Solutions",
      href: "/services/ui-ux-design",
    },
    style: {
      baseColor: "#AC9BFF",
      darkColor: "#8674ED",
    },
    imageOprions: {
      imagePath: UiUxDesign,
      width: 300,
      height: 300,
      alt: "Ui Ux Design",
    },
  },
  {
    title: "SaaS & Web App Development",
    className: "sticky top-[25%]",
    description:
      "We build scalable SaaS and web applications with modern architecture, optimized performance, and reliable infrastructure for long-term growth.",
    ctaButton: {
      label: "Explore Web App Solutions",
      href: "/services/ui-ux-design",
    },
    style: {
      baseColor: "#FF767A",
      darkColor: "#FF5B60",
    },
    imageOprions: {
      imagePath: WebAppDevelopment,
      width: 300,
      height: 300,
      alt: "Web App Development",
    },
  },
  {
    title: "SaaS & Web App Development",
    className: "sticky top-[30%]",
    description:
      "We build scalable SaaS and web applications with modern architecture, optimized performance, and reliable infrastructure for long-term growth.",
    ctaButton: {
      label: "Explore Web App Solutions",
      href: "/services/ui-ux-design",
    },
    style: {
      baseColor: "#B8C56F",
      darkColor: "#9FAD4A",
    },
    imageOprions: {
      imagePath: WebAppDevelopment,
      width: 300,
      height: 300,
      alt: "Web App Development",
    },
  },
];
