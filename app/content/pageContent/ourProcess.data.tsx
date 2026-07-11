import ContinuousGrowth from "@/app/assets/webp/continuous-growth.webp";
import CreativeDesign from "@/app/assets/webp/creative-design.webp";
import DeliveryAndHandoff from "@/app/assets/webp/delivery-handoff.webp";
import KickOffDiscovery from "@/app/assets/webp/kickoff-discovery.webp";
import StrategyAndPlanning from "@/app/assets/webp/strategy-planning.webp";
import { OurProcessCardInterface } from "@/app/utils/interface/common.interface";

export const OUR_PROCESS_DATA: OurProcessCardInterface[] = [
  {
    title: "Discovery & Product Strategy",
    description:
      "We begin by understanding your business goals, target audience, market opportunities, and technical requirements. This ensures every decision aligns with your growth objectives and product vision.",
    imageOptions: {
      imagePath: KickOffDiscovery,
      width: 600,
      height: 270,
      alt: "Discovery and product strategy planning session illustration",
    },
    gridStyle: "col-span-3",
  },
  {
    title: "Planning & Solution Architecture",
    description:
      "Our team defines the product roadmap, user journeys, technology stack, and development strategy to create a scalable foundation for long-term success",
    imageOptions: {
      imagePath: StrategyAndPlanning,
      width: 600,
      height: 270,
      alt: "Planning and solution architecture workflow illustration",
    },
    gridStyle: "col-span-3",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "We design intuitive user experiences and high-converting interfaces that balance user needs, business goals, and modern design standards.",
    imageOptions: {
      imagePath: CreativeDesign,
      width: 600,
      height: 270,
      alt: "UI/UX design and prototyping process illustration",
    },
    gridStyle: "col-span-2",
  },
  {
    title: "Development & Launch",
    description:
      "Our developers build, test, and deploy secure, scalable software solutions using modern frameworks and best practices to ensure quality and performance.",
    imageOptions: {
      imagePath: DeliveryAndHandoff,
      width: 600,
      height: 270,
      alt: "Development and launch handoff process illustration",
    },
    gridStyle: "col-span-2",
  },
  {
    title: "Growth, Optimization & Support",
    description:
      "After launch, we continue improving your product through performance optimization, feature enhancements, AI integrations, and ongoing technical support.",
    imageOptions: {
      imagePath: ContinuousGrowth,
      width: 600,
      height: 270,
      alt: "Growth optimization and support process illustration",
    },
    gridStyle: "col-span-2",
  },
];
