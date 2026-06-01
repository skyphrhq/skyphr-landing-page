import NotFoundImage from "@/app/assets/webp/skyphr-404.webp";
import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import Image from "next/image";
import CTAButton from "./components/common/ctaButton";
import HeroBgAbstract from "./components/heroBgAbstract";
import ReadyToScaleSection from "./screens/readyToScaleSection";

function PageNotFound() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-fit relative bg-white overflow-hidden py-20">
        <HeroBgAbstract />
        <div className="w-full h-fit relative z-10 flex items-center justify-center">
          <Image
            src={NotFoundImage}
            alt="404 Image"
            width={800}
            height={500}
            className="w-full h-full max-w-200 max-h-125 object-contain pointer-events-none select-none"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-fit z-10 flex flex-col items-center justify-center relative text-center px-4">
          <h1 className="text-5xl font-bold text-(--text-main-color) font-instrument-sans">Page not found</h1>

          <p className="text-(--text-black-color) text-lg pt-4 max-w-md">
            The page you&apos;re trying to access doesn&apos;t exist or may have been moved.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            <CTAButton btnStyle="CTA_PRIMARY" href="/" rel="noopener noreferrer">
              Back To Homepage
            </CTAButton>
          </div>
        </div>
      </div>
      {HOME_PAGE_DATA?.readyToScale && (
        <div className="w-full overflow-hidden">
          <ReadyToScaleSection data={HOME_PAGE_DATA?.readyToScale} />
        </div>
      )}
    </div>
  );
}

export default PageNotFound;
