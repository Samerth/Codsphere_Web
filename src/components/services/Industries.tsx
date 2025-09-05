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
    <section className="relative min-h-[371px] bg-black overflow-hidden py-8 md:py-10 lg:py-[30px]">
      {/* Background texture - hide on mobile for better readability */}
      <div 
        className="hidden md:block absolute w-[370px] h-[1440px] left-0 top-0 opacity-30"
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
        <div className="text-center">
          <h2 className="text-[28px] md:text-[35px] lg:text-[40px] leading-[36px] md:leading-[45px] lg:leading-[52px] font-[415] font-sequel text-white">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-3 md:mt-4 lg:mt-[15px] max-w-[90%] md:max-w-[521px] text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[405] font-sequel text-white">
            Our flexible architecture suits any industry, but we specialise in:
          </p>
        </div>

        {/* Industry items - responsive grid layout */}
        <div className="mt-6 md:mt-8 lg:mt-[30px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-4">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              {/* Circle with icon - responsive sizing */}
              <div className={`w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] lg:w-[122px] lg:h-[122px] rounded-full ${item.tone} flex items-center justify-center`}>
                <Image
                  src={item.icon}
                  alt=""
                  width={60}
                  height={60}
                  className="object-contain w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
                />
              </div>
              
              {/* Label - responsive text sizing */}
              <p className="mt-3 md:mt-4 lg:mt-[20px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] font-[420] font-sequel text-white text-center whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}