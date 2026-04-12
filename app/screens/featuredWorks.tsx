import Image from "next/image";
import { FETURED_WORK_DATA } from "../data/common.data";

function FeaturedWorks() {
  return (
    <div className="w-full overflow-hidden p-5 marquee-custom-slider relative">
      <div className="absolute w-full h-[90px] bg-linear-to-b from-(--bg-blue-shade) to-(--root-white-color) top-0 left-0 z-2 pointer-events-none blur-2xl opacity-60"></div>

      <div className="flex marquee-wrapper">
        <div className="flex items-center justify-start gap-10 pr-10 marquee-group shrink-0">
          {FETURED_WORK_DATA?.map((item) => (
            <div key={item.id} className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden">
              <Image
                src={item.imagePath}
                alt={item.id}
                width={380}
                height={380}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start gap-10 pr-10 marquee-group shrink-0" aria-hidden="true">
          {FETURED_WORK_DATA?.map((item) => (
            <div key={`clone-${item.id}`} className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden">
              <Image
                src={item.imagePath}
                alt={item.id}
                width={380}
                height={380}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start gap-10 pr-10 marquee-group shrink-0" aria-hidden="true">
          {FETURED_WORK_DATA?.map((item) => (
            <div key={`clone-two-${item.id}`} className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden">
              <Image
                src={item.imagePath}
                alt={item.id}
                width={380}
                height={380}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-start gap-10 pr-10 marquee-group shrink-0" aria-hidden="true">
          {FETURED_WORK_DATA?.map((item) => (
            <div key={`clone-three-${item.id}`} className="min-w-[380px] aspect-380/380 rounded-lg overflow-hidden">
              <Image
                src={item.imagePath}
                alt={item.id}
                width={380}
                height={380}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-full h-[90px] bg-(--root-white-color) opacity-60 blur-2xl bottom-0 left-0 z-2 pointer-events-none"></div>
    </div>
  );
}

export default FeaturedWorks;
