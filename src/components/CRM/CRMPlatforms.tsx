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
      icon: "images/CRM Page/Svg/krayin.svg"
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-[90px] py-[80px]">
        
        {/* Title */}
        <h2 
          id="crm-platforms"
          className="text-[40px] leading-[52px] font-[415] text-white max-w-[400px] mb-[60px]"
          style={{ fontFamily: 'Sequel Sans' }}
        >
          CRM Platforms We Work With
        </h2>

        {/* Platform Cards Grid - Using separate columns for staggered layout */}
        <div className="grid md:grid-cols-2 gap-x-[60px] max-w-[1260px]">
          
          {/* Left Column */}
          <div className="space-y-[40px]">
            {/* Salesforce CRM Card */}
            <div 
              className="relative w-full max-w-[600px] h-[285px] rounded-[20px] overflow-hidden"
              style={{
                background: `radial-gradient(94.65% 173.2% at 54.11% -11.05%, ${platforms[0].gradient} 0%, rgba(255, 255, 255, 0.1) 82.01%)`,
                boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-6 left-6 w-[65px] h-[65px] rounded-[10px] flex items-center justify-center"
                style={{
                  background: 'rgba(134, 134, 134, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Image
                  src={platforms[0].icon}
                  alt={`${platforms[0].name} icon`}
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 
                  className="text-[36px] leading-[44px] font-[415] text-white mb-2"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platforms[0].name}
                </h3>
                <p 
                  className="text-[20px] leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platforms[0].description}
                </p>
              </div>
            </div>

            {/* Krayin CRM Card */}
            <div 
              className="relative w-full max-w-[600px] h-[285px] rounded-[20px] overflow-hidden"
              style={{
                background: `radial-gradient(94.65% 173.2% at 54.11% -11.05%, ${platforms[2].gradient} 0%, rgba(255, 255, 255, 0.1) 82.01%)`,
                boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-6 left-6 w-[65px] h-[65px] rounded-[10px] flex items-center justify-center"
                style={{
                  background: 'rgba(134, 134, 134, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Image
                  src={platforms[2].icon}
                  alt={`${platforms[2].name} icon`}
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 
                  className="text-[36px] leading-[44px] font-[415] text-white mb-2"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platforms[2].name}
                </h3>
                <p 
                  className="text-[20px] leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platforms[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Offset Higher */}
          <div className="space-y-[40px] md:-mt-[140px]">
            {/* Odoo CRM Card */}
            <div 
              className="relative w-full max-w-[600px] h-[285px] rounded-[20px] overflow-hidden"
              style={{
                background: `radial-gradient(94.65% 173.2% at 54.11% -11.05%, ${platforms[1].gradient} 0%, rgba(255, 255, 255, 0.1) 82.01%)`,
                boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-6 left-6 w-[65px] h-[65px] rounded-[10px] flex items-center justify-center"
                style={{
                  background: 'rgba(134, 134, 134, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Image
                  src={platforms[1].icon}
                  alt={`${platforms[1].name} icon`}
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 
                  className="text-[36px] leading-[44px] font-[415] text-white mb-2"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platforms[1].name}
                </h3>
                <p 
                  className="text-[20px] leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platforms[1].description}
                </p>
              </div>
            </div>

            {/* Custom PHP/Node.js CRM Card */}
            <div 
              className="relative w-full max-w-[600px] h-[285px] rounded-[20px] overflow-hidden"
              style={{
                background: `radial-gradient(94.65% 173.2% at 54.11% -11.05%, ${platforms[3].gradient} 0%, rgba(255, 255, 255, 0.1) 82.01%)`,
                boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-6 left-6 w-[65px] h-[65px] rounded-[10px] flex items-center justify-center"
                style={{
                  background: 'rgba(134, 134, 134, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.2)'
                }}
              >
                <Image
                  src={platforms[3].icon}
                  alt={`${platforms[3].name} icon`}
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 
                  className="text-[36px] leading-[44px] font-[415] text-white mb-2"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platforms[3].name}
                </h3>
                <p 
                  className="text-[20px] leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {platforms[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}