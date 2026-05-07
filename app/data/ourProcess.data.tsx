import ContinuousGrowth from "@/app/assets/webp/continuous-growth.webp";
import CreativeDesign from "@/app/assets/webp/creative-design.webp";
import DeliveryAndHandoff from "@/app/assets/webp/delivery-handoff.webp";
import KickOffDiscovery from "@/app/assets/webp/kickoff-discovery.webp";
import StrategyAndPlanning from "@/app/assets/webp/strategy-planning.webp";
import { OurProcessCardInterface } from "@/app/utils/interface/common.interface";

export const OUR_PROCESS_DATA: OurProcessCardInterface[] = [
  {
    title: "Kickoff & Discovery",
    description:
      "We start by understanding your goals, audience, and vision — so every design decision is aligned with your business.",
    imageOptions: {
      imagePath: KickOffDiscovery,
      width: 600,
      height: 270,
      alt: "Kickoff & Discovery",
    },
    gridStyle: "col-span-3",
  },
  {
    title: "Strategy & Planning",
    description:
      "We start by understanding your goals, audience, and vision — so every design decision is aligned with your business.",
    imageOptions: {
      imagePath: StrategyAndPlanning,
      width: 600,
      height: 270,
      alt: "Strategy & Planning",
    },
    gridStyle: "col-span-3",
  },
  {
    title: "Creative Design",
    description:
      "We start by understanding your goals, audience, and vision — so every design decision is aligned with your business.",
    imageOptions: {
      imagePath: CreativeDesign,
      width: 600,
      height: 270,
      alt: "Creative Design",
    },
    gridStyle: "col-span-2",
  },
  {
    title: "Delivery & Handoff",
    description:
      "We start by understanding your goals, audience, and vision — so every design decision is aligned with your business.",
    imageOptions: {
      imagePath: DeliveryAndHandoff,
      width: 600,
      height: 270,
      alt: "Delivery & Handoff",
    },
    gridStyle: "col-span-2",
  },
  {
    title: "Continuous Growth",
    description:
      "We start by understanding your goals, audience, and vision — so every design decision is aligned with your business.",
    imageOptions: {
      imagePath: ContinuousGrowth,
      width: 600,
      height: 270,
      alt: "Continuous Growth",
    },
    gridStyle: "col-span-2",
  },
];
