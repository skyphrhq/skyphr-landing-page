import { OurStepsDataInterface } from "@/app/utils/interface/common.interface";
import { FaCode, FaRegCompass, FaRegLightbulb, FaRocket } from "react-icons/fa";

export const UI_UX_SERVICE_STEPS_WE_FOLLOW: OurStepsDataInterface[] = [
  {
    num: "01",
    title: "Discovery & Insights",
    desc: "We uncover customer needs, business goals, market opportunities, and usability challenges.",
    icon: <FaRegCompass className="w-6 h-6 text-gray-800" />,
    iconBgColor: "bg-purple-50",
    numBgColor: "bg-purple-100",
    numTextColor: "text-purple-800",
  },
  {
    num: "02",
    title: "UX Strategy & Planning",
    desc: "We create clear information architecture, user journeys, workflows, and interaction frameworks.",
    icon: <FaRegLightbulb className="w-6 h-6 text-gray-800" />,
    iconBgColor: "bg-yellow-50",
    numBgColor: "bg-yellow-100",
    numTextColor: "text-yellow-800",
  },
  {
    num: "03",
    title: "UI Design & Prototyping",
    desc: "We design polished interfaces and interactive prototypes that bring concepts to life.",
    icon: <FaCode className="w-6 h-6 text-gray-800" />,
    iconBgColor: "bg-pink-50",
    numBgColor: "bg-pink-100",
    numTextColor: "text-pink-800",
  },
  {
    num: "04",
    title: "Test & Optimize",
    desc: "We continuously refine experiences using feedback, analytics, and user behavior insights.",
    icon: <FaRocket className="w-6 h-6 text-gray-800" />,
    iconBgColor: "bg-indigo-50",
    numBgColor: "bg-indigo-100",
    numTextColor: "text-indigo-800",
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
