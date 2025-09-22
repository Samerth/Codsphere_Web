'use client';

import Image from 'next/image';

export default function ERPIndustries() {
  const industries = [
    {
      name: "Manufacturing & Distribution",
      color: "bg-[#EEDFFF]",
      icon: "/images/ERP/SVG/Manufacturing.svg",
      iconWidth: 64,
      iconHeight: 80
    },
    {
      name: "Logistics & Transportation",
      color: "bg-[#FFF4D5]",
      icon: "/images/ERP/SVG/Logistics.svg",
      iconWidth: 88,
      iconHeight: 108
    },
    {
      name: "Retail & E‑Commerce",
      color: "bg-[#FFE7D5]",
      icon: "/images/ERP/SVG/Retail.svg",
      iconWidth: 72,
      iconHeight: 90
    },
    {
      name: "Hospitality & Healthcare",
      color: "bg-[#CFFFEE]",
      icon: "/images/ERP/SVG/Hospitality & Healthcare.svg",
      iconWidth: 64,
      iconHeight: 80
    },
    {
      name: "Startups scaling",
      color: "bg-[#BCCFFF]",
      icon: "/images/ERP/SVG/Startups scaling.svg",
      iconWidth: 90,
      iconHeight: 111
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-[80px] bg-black relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[65px]">
        <h2 
          className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] text-white text-center mb-3 md:mb-3 lg:mb-4"
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 415
          }}
        >
          Industries We Serve
        </h2>
        <p 
          className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white text-center mb-8 md:mb-10 lg:mb-12 max-w-[521px] mx-auto px-4 md:px-0"
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 405
          }}
        >
          Our flexible architecture suits any industry, but we specialise in:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-4 justify-items-center">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center w-[140px] md:w-[150px] lg:w-[154px]">
              <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[131px] lg:h-[122px] flex items-center justify-center mb-3 md:mb-3 lg:mb-4 relative">
                <div className={`${industry.color} w-[90px] h-[90px] md:w-[105px] md:h-[105px] lg:w-[122px] lg:h-[122px] rounded-full flex items-center justify-center`}>
                  <Image 
                    src={industry.icon}
                    alt={industry.name}
                    width={industry.iconWidth}
                    height={industry.iconHeight}
                    className="w-[50px] h-auto md:w-[60px] lg:w-auto"
                    style={{ 
                      objectFit: 'contain'
                    }}
                    priority
                  />
                </div>
              </div>
              <p 
                className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white text-center"
                style={{ 
                  fontFamily: 'Sequel Sans',
                  fontWeight: 420
                }}
              >
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}