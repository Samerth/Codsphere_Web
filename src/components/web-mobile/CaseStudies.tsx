// components/services/web-mobile/CaseStudies.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "eCommerce App for a Fashion Brand",
    description: "A complete Shopify-to-App transition with real-time inventory sync and custom push notifications.",
    image: "/images/web-mobile/PNG/ecommerce app for fashion brand.png"
  },
  {
    id: 2,
    title: "Corporate Website for B2B SaaS",
    description: "Custom WordPress build with HubSpot CRM integration and blazing-fast performance scores.",
    image: "/images/web-mobile/PNG/corporate website for B2B.png"
  },
  {
    id: 3,
    title: "Healthcare Booking App",
    description: "HIPAA-compliant appointment booking app with doctor-patient video calls and in-app payments.",
    image: "/images/web-mobile/PNG/Healthcare Booking app.png"
  },
  {
    id: 4,
    title: "Web Dashboard for AI Analytics",
    description: "React.js frontend + Node.js backend powering a real-time data dashboard for enterprise use.",
    image: "/images/web-mobile/PNG/Web Dashboard for AI Analytics.png"
  }
];

export default function CaseStudies() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-8 md:py-12 lg:py-[80px] bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[65px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard 
              key={study.id} 
              study={study}
              isHovered={hoveredCard === study.id}
              onHover={() => setHoveredCard(study.id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ 
  study, 
  isHovered,
  onHover,
  onLeave 
}: { 
  study: typeof caseStudies[0],
  isHovered: boolean,
  onHover: () => void,
  onLeave: () => void
}) {
  return (
    <div 
      className="relative cursor-pointer w-full max-w-[400px] sm:max-w-full mx-auto h-[320px] md:h-[350px] lg:h-[378px]"
      style={{ 
        filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))'
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div 
        className="relative w-full h-full text-white overflow-hidden transition-all duration-300 rounded-[18px] md:rounded-[20px] lg:rounded-[21px]"
        style={{ 
          background: isHovered ? '#608BF3' : '#0E0E0E',
          border: `3px solid ${isHovered ? '#608BF3' : '#232323'}`
        }}
      >
        {/* Arrow button in top right - Responsive */}
        <div 
          className="absolute z-20 top-4 right-4 md:top-[18px] md:right-[18px] lg:top-[20px] lg:right-[20px]"
        >
          <div 
            className="rounded-full flex items-center justify-center hover:scale-110 transition-transform w-[38px] h-[38px] md:w-[42px] md:h-[42px] lg:w-[44px] lg:h-[44px]"
            style={{
              background: '#0E0E0E',
              border: '2px solid #232323'
            }}
          >
            {/* Proper diagonal arrow matching the design */}
            <svg 
              className="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" 
              viewBox="0 0 20 20" 
              fill="none"
            >
              <path 
                d="M6 14L14 6M14 6H8M14 6V12" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        {/* Content with padding to avoid arrow overlap - Responsive */}
        <div className="p-4 md:p-5 lg:p-6 pr-[60px] md:pr-[70px] lg:pr-[80px] h-full flex flex-col">
          <h3 className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[23px] lg:leading-[26px] mb-3 md:mb-3.5 lg:mb-4 font-[425] font-sequel">
            {study.title}
          </h3>
          
          {/* Divider */}
          <div 
            className="mb-3 md:mb-3.5 lg:mb-4 border-t-[1.5px] border-white w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px]"
          />
          
          <p className="text-[11px] md:text-[12px] lg:text-[12px] leading-[13px] md:leading-[14px] lg:leading-[14px] mb-auto font-[405] font-sequel opacity-90">
            {study.description}
          </p>
        </div>
        
        {/* Image section at bottom - Responsive */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden h-[140px] md:h-[160px] lg:h-[182px] bg-black rounded-b-[15px] md:rounded-b-[17px] lg:rounded-b-[18px]"
        >
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover opacity-90"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 327px"
          />
        </div>
      </div>
    </div>
  );
}