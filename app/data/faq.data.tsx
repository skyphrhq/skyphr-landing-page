import { FaqCommonCardData } from "@/app/utils/interface/data.interface";

export const FAQ_DATA: FaqCommonCardData[] = [
  {
    question: "What services does Skyphr offer?",
    answer: (
      <p>
        We specialize in <span className="font-semibold">UI/UX design</span>,{" "}
        <span className="font-semibold">SaaS & web app development</span>,{" "}
        <span className="font-semibold">branding</span>, and scalable digital solutions tailored to your business needs.
      </p>
    ),
  },
  {
    question: "How long does a typical project take?",
    answer: (
      <p>
        Most projects are completed within <span className="font-semibold">2–8 weeks</span>, depending on complexity,
        with clear milestones and regular updates.
      </p>
    ),
  },
  {
    question: "What is your development process like?",
    answer: (
      <p>
        Our process includes <span className="font-semibold">discovery</span> →{" "}
        <span className="font-semibold">strategy</span> → <span className="font-semibold">design</span> →{" "}
        <span className="font-semibold">development</span> → <span className="font-semibold">testing</span> →{" "}
        <span className="font-semibold">launch</span>, ensuring smooth execution.
      </p>
    ),
  },
  {
    question: "Do you provide post-launch support?",
    answer: (
      <p>
        We offer <span className="font-semibold">post-launch support</span>,{" "}
        <span className="font-semibold">maintenance</span>, and continuous improvements to help your product scale.
      </p>
    ),
  },
  {
    question: "How much does a project cost?",
    answer: (
      <p>
        Pricing depends on scope, but we provide <span className="font-semibold">transparent pricing</span> with no
        hidden costs after understanding your requirements.
      </p>
    ),
  },
  {
    question: "How do we get started?",
    answer: (
      <p>
        Visit our <span className="font-semibold underline cursor-pointer">Contact Us</span> page or{" "}
        <span className="font-semibold underline cursor-pointer">book a free 30-minute call</span>. We’ll understand
        your requirements and guide you through the next steps.
      </p>
    ),
  },
];
