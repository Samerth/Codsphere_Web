"use client";

import Image from "next/image";

const ITEMS = [
  { 
    title: "Built by senior\nengineers", 
    tone: "bg-[#EEDFFF]",
    iconColor: "#663C97",
    iconPath: "/images/services/Svg/senior engineers.svg"
  },
  { 
    title: "Tailored for real\nbusiness use", 
    tone: "bg-[#CFFFEE]",
    iconColor: "#0E875C",
    iconPath: "/images/services/Svg/tailored for real business use.svg"
  },
  { 
    title: "Fast deployment with\nongoing support", 
    tone: "bg-[#FFF4D5]",
    iconColor: "#A98C38",
    iconPath: "/images/services/Svg/Fast deployment.svg"
  },
  { 
    title: "100% transparent\ndevelopment", 
    tone: "bg-[#FFE7D5]",
    iconColor: "#7B563A",
    iconPath: "/images/services/Svg/100% transparent.svg"
  },
  { 
    title: "Based in Canada.\nServing globally", 
    tone: "bg-[#BCCFFF]",
    iconColor: "#2C4994",
    iconPath: "/images/services/Svg/serving.svg"
  },
];

export default function WhyWorkWith() {
  return (
    <section className="relative">
      {/* Main black container - exactly 343px height */}
      <div className="relative h-[343px] bg-black overflow-visible">
        {/* Dotted pattern overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 z-[1]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
        
        {/* Background texture image - rotated -90deg */}
        <div 
          className="absolute w-[343px] h-[1440px] left-0 top-0 opacity-20"
          style={{ transform: "rotate(-90deg)", transformOrigin: "171.5px 171.5px" }}
        >
          <Image
            src="/images/services/jpeg/band-texture.jpg"
            alt=""
            width={343}
            height={1440}
            className="object-cover"
            priority
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
          {/* Title */}
          <h2 className="pt-[47px] text-center text-[50px] leading-[1.296] font-[415] text-white font-sequel">
            Why Work With CodSphere?
          </h2>
          
          {/* Subtitle */}
          <p className="mx-auto mt-[20px] max-w-[952px] text-center text-[20px] leading-[24px] font-[405] text-white font-sequel">
            We're not just coders—we're growth partners. Whether you're a startup automating your first sales process or
            an enterprise optimizing your ERP workflows, we bring the strategy, code, and systems that scale with you.
          </p>
        </div>
      </div>

      {/* Value cards container - positioned to overlap next section */}
      <div className="relative z-30 -mt-[116px] mb-[84px]">
        <div className="container mx-auto max-w-[1440px] px-[65px]">
          <div className="flex justify-between gap-[20px]">
            {ITEMS.map((item) => {
              return (
                <div
                  key={item.title}
                  className="w-[246px] h-[200px] rounded-[22px] bg-white flex-shrink-0"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
                    {/* Icon container with colored background */}
                    <div 
                      className={`w-[75px] h-[70px] rounded-full ${item.tone} flex items-center justify-center`}
                    >
                      <Image
                        src={item.iconPath}
                        alt=""
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] object-contain"
                      />
                    </div>
                    
                    {/* Title text */}
                    <p className="whitespace-pre-line text-[20px] leading-[24px] font-[420] text-black text-center font-sequel">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}