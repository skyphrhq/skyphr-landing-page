import { OurValueCardInterface } from "@/app/utils/interface/common.interface";
import { FiLayers, FiTrendingUp, FiUsers, FiZap } from "react-icons/fi";

export const OUR_VALUES_CARD_DATA: OurValueCardInterface[] = [
  {
    id: 1,
    title: "Clarity Over Complexity",
    description:
      "We believe great products should feel simple, even when the technology behind them is complex. Our approach focuses on intuitive user experiences, clear workflows, and thoughtful design that helps users achieve their goals effortlessly.",
    icon: <FiLayers className="text-2xl" />,
    color: "#AC9BFF",
    bgColor: "rgba(172, 155, 255, 0.5)",
  },
  {
    id: 2,
    title: "Built for Scale",
    description:
      "We create software architectures and digital platforms designed for long-term growth. Every system is engineered to handle increasing users, data, and business demands without compromising performance.",
    icon: <FiTrendingUp className="text-2xl" />,
    color: "#B8C56F",
    bgColor: "rgba(184, 197, 111, 0.5)",
  },
  {
    id: 3,
    title: "Performance First",
    description:
      "Speed, reliability, and efficiency are at the core of our development process. From optimized frontend experiences to scalable backend systems, we ensure every product performs at the highest level.",
    icon: <FiZap className="text-2xl" />,
    color: "#FF767A",
    bgColor: "rgba(255, 118, 122, 0.5)",
  },
  {
    id: 4,
    title: "User-Centered Approach",
    description:
      "Technology succeeds when people enjoy using it. We prioritize user needs, behaviors, and feedback to create products that are intuitive, engaging, and impactful.",
    icon: <FiUsers className="text-2xl" />,
    color: "#5DADE2",
    bgColor: "rgba(93, 173, 226, 0.5)",
  },
];


export const UI_UX_SERVICE_VALUES_CARD_DATA: OurValueCardInterface[] = [
  {
    id: 1,
    title: "Design With Purpose",
    description:
      "Every screen, interaction, and workflow should solve a real problem. We focus on creating experiences that serve both users and business objectives.",
    icon: <FiLayers className="text-2xl" />,
    color: "#AC9BFF",
    bgColor: "rgba(172, 155, 255, 0.5)",
  },
  {
    id: 2,
    title: "User-Centered Thinking",
    description:
      "We design around real user behavior, needs, and expectations to create products that feel intuitive from day one.",
    icon: <FiTrendingUp className="text-2xl" />,
    color: "#B8C56F",
    bgColor: "rgba(184, 197, 111, 0.5)",
  },
  {
    id: 3,
    title: "Business-Driven Design",
    description:
      "Great design should contribute to measurable business outcomes including growth, retention, engagement, and revenue.",
    icon: <FiZap className="text-2xl" />,
    color: "#FF767A",
    bgColor: "rgba(255, 118, 122, 0.5)",
  },
  {
    id: 4,
    title: "Consistency at Scale",
    description:
      "We build scalable design systems that maintain quality, consistency, and efficiency as products evolve.",
    icon: <FiUsers className="text-2xl" />,
    color: "#5DADE2",
    bgColor: "rgba(93, 173, 226, 0.5)",
  },
];