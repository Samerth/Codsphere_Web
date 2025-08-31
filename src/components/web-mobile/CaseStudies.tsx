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
    <section className="py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      className="relative cursor-pointer"
      style={{ 
        width: '327px',
        maxWidth: '100%',
        height: '378px',
        filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))'
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div 
        className="relative w-full h-full text-white overflow-hidden transition-all duration-300"
        style={{ 
          background: isHovered ? '#608BF3' : '#0E0E0E',
          border: `3px solid ${isHovered ? '#608BF3' : '#232323'}`,
          borderRadius: '21px'
        }}
      >
        {/* Arrow button in top right - FIXED VERSION */}
        <div 
          className="absolute z-20"
          style={{
            top: '20px',
            right: '20px'
          }}
        >
          <div 
            className="rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            style={{
              width: '44px',
              height: '44px',
              background: '#0E0E0E',
              border: '2px solid #232323'
            }}
          >
            {/* Proper diagonal arrow matching the design */}
            <svg 
              width="20" 
              height="20" 
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
        
        {/* Content with padding to avoid arrow overlap */}
        <div className="p-6 h-full flex flex-col" style={{ paddingRight: '80px' }}>
          <h3 
            className="text-[20px] leading-[26px] mb-4"
            style={{ 
              fontFamily: 'Sequel Sans',
              fontWeight: 425
            }}
          >
            {study.title}
          </h3>
          
          {/* Divider */}
          <div 
            className="mb-4"
            style={{ 
              borderTop: '1.5px solid #FFFFFF',
              width: '100%',
              maxWidth: '220px'
            }}
          />
          
          <p 
            className="text-[12px] leading-[14px] mb-auto"
            style={{ 
              fontFamily: 'Sequel Sans',
              fontWeight: 405,
              opacity: 0.9
            }}
          >
            {study.description}
          </p>
        </div>
        
        {/* Image section at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
          style={{ 
            height: '182px',
            background: '#000000',
            borderRadius: '0 0 18px 18px'
          }}
        >
          <Image
            src={study.image}
            alt={study.title}
            width={327}
            height={182}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  );
}