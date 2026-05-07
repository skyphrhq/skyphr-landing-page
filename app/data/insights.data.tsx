import MockupOne from "@/app/assets/webp/mockup-one.webp";
import MockupThree from "@/app/assets/webp/mockup-three.webp";
import MockupTwo from "@/app/assets/webp/mockup-two.webp";
import { BlogCardInterface } from "@/app/utils/interface/common.interface";

export const INSIGHTS_DATA: BlogCardInterface[] = [
  {
    title: "How We Design Products That Scale",
    description:
      "Great products don't happen by accident. We walk through the principles behind scalable UI architecture and why design systems matter from day one.",
    label: "Design",
    date: "January 12, 2025",
    imageOptions: {
      imagePath: MockupOne,
      width: 600,
      height: 270,
      alt: "How We Design Products That Scale",
    },
  },
  {
    title: "From Idea to Launch in 8 Weeks",
    description:
      "A behind-the-scenes look at how Skyphr's sprint-based process takes a raw concept and ships a polished, production-ready product in under two months.",
    label: "Process",
    date: "February 28, 2025",
    imageOptions: {
      imagePath: MockupTwo,
      width: 600,
      height: 270,
      alt: "From Idea to Launch in 8 Weeks",
    },
  },
  {
    title: "Why Most SaaS Products Fail at Onboarding",
    description:
      "Onboarding is the make-or-break moment for any SaaS product. We break down the most common mistakes and what a frictionless first-run experience actually looks like.",
    label: "Growth",
    date: "March 15, 2025",
    imageOptions: {
      imagePath: MockupThree,
      width: 600,
      height: 270,
      alt: "Why Most SaaS Products Fail at Onboarding",
    },
  },
  {
    title: "The Hidden Cost of Skipping Discovery",
    description:
      "Rushing straight to design without a discovery phase costs more in rework than the time you think you're saving. Here's what a proper discovery phase unlocks.",
    date: "April 3, 2025",
    imageOptions: {
      imagePath: MockupOne,
      width: 600,
      height: 270,
      alt: "The Hidden Cost of Skipping Discovery",
    },
  },
  {
    title: "Building for Mobile-First in 2025",
    description:
      "With over 60% of traffic now on mobile, designing desktop-first is no longer an option. We explore what a genuine mobile-first strategy looks like in practice.",
    label: "Strategy",
    date: "May 20, 2025",
    imageOptions: {
      imagePath: MockupTwo,
      width: 600,
      height: 270,
      alt: "Building for Mobile-First in 2025",
    },
  },
];
