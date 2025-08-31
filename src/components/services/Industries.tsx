"use client";

import Image from "next/image";

const items = [
  { 
    label: "SaaS & Tech\nStartups", 
    tone: "bg-[#EEDFFF]",
    icon: "/images/services/Svg/saas & tech startups.svg"
  },
  { 
    label: "Retail &\neCommerce", 
    tone: "bg-[#FFF4D5]",
    icon: "/images/services/Svg/Retail & e-commerce.svg"
  },
  { 
    label: "Healthcare &\nClinics", 
    tone: "bg-[#FFE7D5]",
    icon: "/images/services/Svg/Healthcare.svg"
  },
  { 
    label: "Education &\nTraining", 
    tone: "bg-[#CFFFEE]",
    icon: "/images/services/Svg/Education.svg"
  },
  { 
    label: "Manufacturing &\nLogistics", 
    tone: "bg-[#FFCFCF]",
    icon: "/images/services/Svg/Manufacturing.svg"
  },
  { 
    label: "Digital Agencies &\nConsultants", 
    tone: "bg-[#BCCFFF]",
    icon: "/images/services/Svg/Digital Agencies.svg"
  },
];

export default function Industries() {
  return (
    <section className="relative h-[371px] bg-black overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute w-[370px] h-[1440px] left-0 top-0 opacity-30"
        style={{ transform: "rotate(-90deg)", transformOrigin: "185px 185px" }}
      >
        <Image
          src="/images/services/band-texture.jpg"
          alt=""
          width={370}
          height={1440}
          className="object-cover"
          priority
        />
      </div>

      {/* Content - using same container pattern as other components */}
      <div className="relative z-10 container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Header */}
        <div className="text-center pt-[30px]">
          <h2 className="text-[40px] leading-[52px] font-[415] font-sequel text-white">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-[15px] max-w-[521px] text-[20px] leading-[24px] font-[405] font-sequel text-white">
            Our flexible architecture suits any industry, but we specialise in:
          </p>
        </div>

        {/* Industry items - adjusted to fit within container margins */}
        <div className="mt-[30px] flex justify-between items-start">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              {/* Circle with icon */}
              <div className={`w-[131px] h-[122px] rounded-full ${item.tone} flex items-center justify-center`}>
                <Image
                  src={item.icon}
                  alt=""
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              
              {/* Label */}
              <p className="mt-[20px] text-[20px] leading-[24px] font-[420] font-sequel text-white text-center whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}