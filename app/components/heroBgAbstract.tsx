import BgAbstractImage from "@/app/assets/background.png";
import Image from "next/image";
function HeroBgAbstract() {
  return (
    <>
      <Image
        width={6925}
        height={3840}
        src={BgAbstractImage}
        alt="Background Abstract Image"
        className="w-full h-full absolute inset-0 z-10 opacity-70"
      />
      <div
        className="w-full aspect-square absolute inset-0 pointer-events-none flex items-center justify-center blur-[200px] rounded-[200%] opacity-70"
        style={{
          background: `
radial-gradient(circle at center, rgba(105,116,226,0.6) 0%, rgba(105,116,226,0.3) 30%, transparent 60%),
linear-gradient(to top, #6974e2 0%, white 100%)
`,
        }}
      />
    </>
  );
}

export default HeroBgAbstract;
