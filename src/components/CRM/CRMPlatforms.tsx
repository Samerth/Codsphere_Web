// components/services/CRM/CRMPlatforms.tsx
"use client";

import Image from "next/image";

export default function CRMPlatforms() {
  const platforms = [
    {
      name: "Salesforce CRM",
      description: "Setup, development, integration",
      gradient: "rgba(0, 161, 224, 0.5)",
      icon: "/images/CRM Page/Svg/salesforce.svg"
    },
    {
      name: "Odoo CRM",
      description: "Open-source, modular, and highly customizable",
      gradient: "rgba(243, 118, 211, 0.5)",
      icon: "/images/CRM Page/Svg/odoo.svg"
    },
    {
      name: "Krayin CRM",
      description: "Laravel-based open-source CRM ideal for SMEs",
      gradient: "rgba(12, 168, 255, 0.5)",
      icon: "/images/CRM Page/Svg/krayin.svg"
    },
    {
      name: "Custom PHP/Node.js CRM",
      description: "Fully proprietary builds with 100% ownership",
      gradient: "rgba(171, 255, 81, 0.5)",
      icon: "/images/CRM Page/Svg/custom-code.svg"
    }
  ];

  return (
    <section aria-labelledby="crm-platforms" className="bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px] py-12 md:py-16 lg:py-[80px]">
        
        {/* Title */}
        <h2 
          id="crm-platforms"
          className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-[415] text-white max-w-[400px] mb-8 md:mb-12 lg:mb-[60px]"
          style={{ fontFamily: 'Sequel Sans' }}
        >
          CRM Platforms We Work With
        </h2>

        {/* Platform Cards Grid - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[40px] max-w-[1260px]">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="relative w-full h-[220px] md:h-[250px] lg:h-[285px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden"
              style={{
                background: `radial-gradient(94.65% 173.2% at 54.11% -11.05%, ${platform.gradient} 0%, rgba(255, 255, 255, 0.1) 82.01%)`,
                boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-4 left-4 md:top-5 md:left-5 lg:top-6 lg:left-6 w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] rounded-[8px] md:rounded-[9px] lg:rounded-[10px] flex items-center justify-center"
                style={{
                  background: 'rgba(134, 134, 134, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Image
                  src={platform.icon}
                  alt={`${platform.name} icon`}
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-7 md:left-7 md:right-7 lg:bottom-8 lg:left-8 lg:right-8">
                <h3 
                  className="text-[26px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[38px] lg:leading-[44px] font-[415] text-white mb-1 md:mb-2"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platform.name}
                </h3>
                <p 
                  className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[25px] lg:leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}