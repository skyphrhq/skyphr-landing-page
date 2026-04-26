import ContinuousGrowth from "@/app/assets/continuous-growth.png";
import DeliveryAndHandoff from "@/app/assets/delivery-handoff.png";
import KickOffDiscovery from "@/app/assets/kickoff-discovery.png";
import StrategyAndPlanning from "@/app/assets/strategy-planning.png";
import { OurProcessCardInterface } from "@/app/utils/interface/common.interface";

export const OUR_PROCESS_DATA: OurProcessCardInterface[] = [
  {
    title: "Kickoff & Discovery",
    description:
      "We start by understanding your goals, audience, and vision — so every design decision is aligned with your business.",
    imageOptions: {
      imagePath: KickOffDiscovery,
      width: 620,
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
      imagePath: ContinuousGrowth,
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
