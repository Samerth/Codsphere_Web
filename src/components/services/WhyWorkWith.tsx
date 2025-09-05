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
      {/* Main black container - responsive height */}
      <div className="relative min-h-[400px] md:h-[380px] lg:h-[343px] bg-black overflow-visible pb-32 md:pb-0">
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
          className="hidden md:block absolute w-[343px] h-[1440px] left-0 top-0 opacity-20"
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
          <h2 className="pt-8 md:pt-[47px] text-center text-[32px] md:text-[42px] lg:text-[50px] leading-[1.2] md:leading-[1.296] font-[415] text-white font-sequel">
            Why Work With CodSphere?
          </h2>
          
          {/* Subtitle */}
          <p className="mx-auto mt-4 md:mt-[20px] max-w-full md:max-w-[952px] text-center text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[405] text-white font-sequel px-2">
            We're not just coders—we're growth partners. Whether you're a startup automating your first sales process or
            an enterprise optimizing your ERP workflows, we bring the strategy, code, and systems that scale with you.
          </p>
        </div>
      </div>

      {/* Value cards container - responsive positioning */}
      <div className="relative z-30 -mt-[100px] md:-mt-[110px] lg:-mt-[116px] mb-12 md:mb-16 lg:mb-[84px]">
        <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[65px]">
          {/* Grid for responsive cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {ITEMS.map((item) => {
              return (
                <div
                  key={item.title}
                  className="w-full max-w-[280px] sm:max-w-none mx-auto h-[180px] md:h-[200px] rounded-[22px] bg-white"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full gap-3 md:gap-4 px-3 md:px-4">
                    {/* Icon container with colored background */}
                    <div 
                      className={`w-[65px] h-[60px] md:w-[75px] md:h-[70px] rounded-full ${item.tone} flex items-center justify-center`}
                    >
                      <Image
                        src={item.iconPath}
                        alt=""
                        width={40}
                        height={40}
                        className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] object-contain"
                      />
                    </div>
                    
                    {/* Title text */}
                    <p className="whitespace-pre-line text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[420] text-black text-center font-sequel">
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