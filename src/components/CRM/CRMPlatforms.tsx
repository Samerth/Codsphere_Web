"use client";

// components/services/CRM/CRMPlatforms.tsx
import Image from "next/image";

export default function CRMPlatforms() {
  const platforms = [
    {
      name: "Salesforce CRM",
      description: "Setup, development, integration",
      gradient: "rgba(0, 161, 224, 0.5)",
      logo: "/images/crm/salesforce-logo.png",
      hasLogo: true,
      decorativeColor: "#00A1E0"
    },
    {
      name: "Odoo CRM",
      description: "Open-source, modular, and highly customizable",
      gradient: "rgba(243, 118, 211, 0.5)",
      logo: "/images/crm/odoo-logo.png",
      hasLogo: true,
      decorativeColor: "#9F568C"
    },
    {
      name: "Krayin CRM",
      description: "Laravel-based open-source CRM ideal for SMEs",
      gradient: "rgba(12, 168, 255, 0.5)",
      logo: "/images/crm/krayin-logo.png",
      hasLogo: true,
      decorativeColor: "#0C90DA"
    },
    {
      name: "Custom PHP/Node.js CRM",
      description: "Fully proprietary builds with 100% ownership",
      gradient: "rgba(171, 255, 81, 0.5)",
      logo: null,
      hasLogo: false,
      decorativeColor: "#8CC84B"
    }
  ];

  return (
    <section aria-labelledby="crm-platforms" className="bg-black relative overflow-hidden py-20">
      {/* Background Pattern - subtle dots or grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-[90px]">
        
        {/* Title */}
        <h2 
          id="crm-platforms"
          className="text-[40px] leading-[52px] font-[415] text-white max-w-[400px] mb-16"
          style={{ fontFamily: 'Sequel Sans', fontWeight: 415 }}
        >
          CRM Platforms We Work With
        </h2>

        {/* Platform Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px]">
          
          {/* Left Column */}
          <div className="space-y-8 mt-0">
            
            {/* Salesforce CRM Card */}
            <div 
              className="relative w-full h-[285px] rounded-[20px] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] overflow-hidden"
              style={{
                background: `radial-gradient(94.36% 173.16% at 54.11% -11.05%, ${platforms[0].gradient} 0%, rgba(255, 255, 255, 0.05) 82.01%)`
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-6 left-6 w-[65px] h-[65px] rounded-[10px] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] flex items-center justify-center"
                style={{
                  background: 'linear-gradient(147.96deg, rgba(134, 134, 134, 0.4) 13.24%, rgba(134, 134, 134, 0.1) 77.15%)'
                }}
              >
                <div className="text-white text-sm font-bold">SF</div>
              </div>

              {/* Decorative circles */}
              <div className="absolute right-8 bottom-12 opacity-20">
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <circle cx="75" cy="75" r="70" fill="#00A1E0" opacity="0.3"/>
                  <circle cx="100" cy="100" r="40" fill="#13A0DB" opacity="0.4"/>
                </svg>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 
                  className="text-[36px] leading-[44px] font-[415] text-white mb-2"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 415 }}
                >
                  Salesforce CRM
                </h3>
                <p 
                  className="text-[20px] leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 405 }}
                >
                  Setup, development, integration
                </p>
              </div>
            </div>

            {/* Krayin CRM Card */}
            <div 
              className="relative w-full h-[285px] rounded-[20px] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] overflow-hidden"
              style={{
                background: `radial-gradient(94.36% 173.16% at 54.11% -11.05%, ${platforms[2].gradient} 0%, rgba(255, 255, 255, 0.05) 82.01%)`
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-6 left-6 w-[65px] h-[65px] rounded-[10px] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] flex items-center justify-center"
                style={{
                  background: 'linear-gradient(147.96deg, rgba(134, 134, 134, 0.4) 13.24%, rgba(134, 134, 134, 0.1) 77.15%)'
                }}
              >
                <div className="text-[#0C90DA] text-2xl font-bold">K</div>
              </div>

              {/* Decorative diamonds */}
              <div className="absolute right-12 bottom-16 opacity-30">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-[#0C90DA] transform rotate-45 opacity-60"></div>
                  <div className="w-12 h-12 bg-[#253239] transform rotate-45 opacity-40"></div>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 
                  className="text-[36px] leading-[44px] font-[415] text-white mb-2"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 415 }}
                >
                  Krayin CRM
                </h3>
                <p 
                  className="text-[20px] leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 405 }}
                >
                  Laravel-based open-source CRM ideal for SMEs
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - positioned higher */}
          <div className="space-y-8 -mt-[140px]">
            
            {/* Odoo CRM Card */}
            <div 
              className="relative w-full h-[285px] rounded-[20px] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] overflow-hidden"
              style={{
                background: `radial-gradient(94.36% 173.16% at 54.11% -11.05%, ${platforms[1].gradient} 0%, rgba(255, 255, 255, 0.05) 82.01%)`
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-6 left-6 w-[65px] h-[65px] rounded-[10px] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] flex items-center justify-center"
                style={{
                  background: 'linear-gradient(147.96deg, rgba(134, 134, 134, 0.4) 13.24%, rgba(134, 134, 134, 0.1) 77.15%)'
                }}
              >
                <div className="text-white text-xs font-bold">Odoo</div>
              </div>

              {/* Decorative Odoo pattern */}
              <div className="absolute right-12 top-[30%] opacity-30">
                <div className="text-[100px] font-light text-white/20" style={{ fontFamily: 'Arial' }}>
                  odoo
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 
                  className="text-[36px] leading-[44px] font-[415] text-white mb-2"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 415 }}
                >
                  Odoo CRM
                </h3>
                <p 
                  className="text-[20px] leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 405 }}
                >
                  Open-source, modular, and highly customizable
                </p>
              </div>
            </div>

            {/* Custom PHP/Node.js CRM Card */}
            <div 
              className="relative w-full h-[285px] rounded-[20px] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] overflow-hidden"
              style={{
                background: `radial-gradient(94.36% 173.16% at 54.11% -11.05%, ${platforms[3].gradient} 0%, rgba(255, 255, 255, 0.05) 82.01%)`
              }}
            >
              {/* Icon Box */}
              <div 
                className="absolute top-6 left-6 w-[65px] h-[65px] rounded-[10px] backdrop-blur-[20px] shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2)] flex items-center justify-center"
                style={{
                  background: 'linear-gradient(147.96deg, rgba(134, 134, 134, 0.4) 13.24%, rgba(134, 134, 134, 0.1) 77.15%)'
                }}
              >
                <div className="text-[#8CC84B] text-xl font-mono font-bold">{"</>"}</div>
              </div>

              {/* Decorative code pattern */}
              <div className="absolute right-8 top-[35%] opacity-30">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="w-16 h-1 bg-[#8CC84B] opacity-60"></div>
                    <div className="w-8 h-1 bg-[#8CC84B] opacity-40"></div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <div className="w-12 h-1 bg-[#8CC84B] opacity-50"></div>
                    <div className="w-20 h-1 bg-[#8CC84B] opacity-30"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-1 bg-[#8CC84B] opacity-40"></div>
                    <div className="w-14 h-1 bg-[#8CC84B] opacity-60"></div>
                  </div>
                </div>
                {/* Gear icon */}
                <div className="mt-6 text-[#8CC84B] opacity-20">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
                    <path d="M40 25 a15 15 0 0 1 0 30 a15 15 0 0 1 0 -30" opacity="0.3"/>
                    <path d="M40 10 l5 10 h10 l-7 7 l3 11 l-11 -3 l-11 3 l3 -11 l-7 -7 h10 z" opacity="0.4"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 
                  className="text-[36px] leading-[44px] font-[415] text-white mb-2"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 415 }}
                >
                  Custom PHP/Node.js CRM
                </h3>
                <p 
                  className="text-[20px] leading-[28px] font-[405] text-white/60"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 405 }}
                >
                  Fully proprietary builds with 100% ownership
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}