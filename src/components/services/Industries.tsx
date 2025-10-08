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
    <section className="bg-black text-white bg-dots">
      <div className="container mx-auto px-[20px] sm:px-[30px] lg:px-[90px] py-8 sm:py-14">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">Industries We Serve</h2>
          <p className="mt-2 text-[20px] font-light">Our flexible architecture suits any industry, but we specialise in:</p>
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