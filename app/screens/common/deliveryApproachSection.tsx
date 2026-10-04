"use client";
import CommonSectionHeader from "@/app/components/common/commonSectionHeader";
import DeliveryApproachCard from "@/app/components/deliveryApproachCard";
import { gsap } from "@/app/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/app/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING } from "@/app/utils/constants/common.constant";
import { DeliveryApproachSectionInterface } from "@/app/utils/interface/section.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function DeliveryApproachSection({ data, classNames }: DeliveryApproachSectionInterface) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const titleElements = gsap.utils.toArray(".reveal-text-animation");
      const titleAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleElements, titleAnimation.FROM, titleAnimation.TO);

      const revealElements = gsap.utils.toArray(".reveal-animation");
      const revealAnimation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 65%",
        end: "bottom top",
      });
      gsap.fromTo(revealElements, revealAnimation.FROM, revealAnimation.TO);
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className={twMerge("w-full h-auto", COMMON_SECTION_PADDING, classNames)}>
      <div className="skyphr-container">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Header stays in view while the principles scroll past on large screens */}
          <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            {/* w-full! undoes the nested .skyphr-container width so the header fills its column */}
            <CommonSectionHeader
              header={data.header}
              className="w-full! px-0! pb-0! md:pb-0!"
              headerParentClass="justify-start gap-x-2 lg:gap-x-3 xl:text-[45px] 2xl:text-[50px]"
              descriptionClass="max-w-none mx-0 text-start xl:text-lg"
              h2ParentClass="text-start! items-start!"
            />
          </div>

          <ol
            className={twMerge(
              "lg:col-span-7 overflow-hidden divide-y divide-(--border-color) border border-(--border-color) bg-(--root-white-color)",
              COMMON_BORDER_RADIUS,
            )}>
            {data.items.map((item, index) => (
              <DeliveryApproachCard key={item.title} data={item} index={index} className="reveal-animation" />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default DeliveryApproachSection;
