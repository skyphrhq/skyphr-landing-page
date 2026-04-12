"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurServiceCardComponent from "../components/ourServiceCardComponent";
import { OUR_SERVICE_CARD_DATA } from "../data/common.data";

gsap.registerPlugin(ScrollTrigger);

function OurServiceSection() {
  return (
    <div className="w-full h-auto bg-(--about-us-card-bg) pt-20 pb-10">
      <div className="w-full flex items-center justify-center pt-10 sticky top-[25vh]">
        <h2 className="bg-clip-text text-transparent bg-linear-to-t from-(--border-color) to-[#a7a7a7] font-black uppercase text-[25vh] font-instrument-sans">
          <span className="block text-nowrap">Our Services</span>
        </h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-20">
        {OUR_SERVICE_CARD_DATA.map((item, index) => (
          <OurServiceCardComponent key={index} data={item} />
        ))}

        <div className="h-[10px] opacity-0 bg-purple-400 sticky top-[40%] z-50 rounded-xl flex items-center justify-center text-2xl font-bold">
          5
        </div>
      </div>
    </div>
  );
}

export default OurServiceSection;
