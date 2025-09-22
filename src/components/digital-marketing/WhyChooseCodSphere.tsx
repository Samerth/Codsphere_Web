// components/services/digital-marketing/WhyChooseCodSphere.tsx
"use client";

import Image from "next/image";

const reasons = [
  {
    icon: "/images/icons/check-green.svg",
    text: "4+ Years of Experience Across Industries",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Google & Meta Certified Marketing Professionals",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Transparent Monthly Reporting",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Dedicated Account Managers",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Data-Backed Strategy (without the fluff)",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Conversion-First Approach",
  },
];

export default function WhyChooseCodSphere() {
  return (
    <section className="pt-12 md:pt-16 lg:pt-[100px] pb-12 md:pb-16 lg:pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[65px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-10">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-[595px] lg:flex-shrink-0">
            <h2 
              className="mb-5 md:mb-6 lg:mb-[24px] text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                color: '#000000'
              }}
            >
              Why Choose CodSphere as{" "}
              <span className="lg:block">Your Digital Marketing</span>{" "}
              <span className="lg:block">Partner?</span>
            </h2>
            
            <ul className="space-y-4 lg:space-y-[20px] mt-5 lg:mt-[20px]">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3 lg:gap-[14px]">
                  {/* Check Icon - Black background */}
                  <div 
                    className="flex-shrink-0 flex items-center justify-center w-[26px] h-[26px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] bg-black rounded-full"
                  >
                    <svg className="w-4 h-4 md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]" viewBox="0 0 18 18" fill="none">
                      <path 
                        d="M3 9L7 13L15 5" 
                        stroke="white" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <span 
                    className="text-[16px] md:text-[17px] lg:text-[19px] leading-[20px] md:leading-[21px] lg:leading-[23px] pt-[2px] lg:pt-[3px]"
                    style={{ 
                      fontFamily: 'Sequel Sans',
                      fontWeight: 400,
                      color: '#000000'
                    }}
                  >
                    {reason.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image Container - Right Side */}
          <div className="relative w-full lg:w-auto lg:flex-shrink-0">
            <div 
              className="relative overflow-hidden h-[250px] md:h-[350px] lg:h-[408px] w-full lg:w-[621px] rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]"
            >
              <Image
                src="/images/digital-marketing/PNG/Why Choose Us Image.png"
                alt="CodSphere team collaboration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}