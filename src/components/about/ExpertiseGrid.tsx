"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type ExpertiseItem = {
  id: string;
  title: string;
  text: string;
  dark?: boolean;
};

const expertiseItems: ExpertiseItem[] = [
  {
    id: "01",
    title: "CRM Software Tailored to Your Sales Flow",
    text: "From lead tracking and sales automation to customer onboarding, our custom CRM solutions replace rigid platforms with dynamic, process-aligned systems.",
  },
  {
    id: "02",
    title: "ERP Systems Built for Real Efficiency",
    text: "Inventory, HR, finance, and operations—streamlined in one platform. We design ERP workflows tailored to your industry, integrating with accounting, invoicing, and frontend tools.",
  },
  {
    id: "03",
    title: "Smart Invoicing & Billing Tools",
    text: "Reduce manual errors, automate recurring billing, and improve cash flow with intuitive invoicing platforms designed for simplicity, flexibility, and compliance.",
  },
  {
    id: "04",
    title: "Digital Marketing That Converts",
    text: "We integrate analytics, marketing automation, and CRM triggers into full-funnel strategies—so your campaigns are as actionable as your systems.",
  },
];

export default function ExpertiseGrid() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Header */}
        <h2 className="text-center text-[40px] leading-[52px] font-medium text-black font-sequel max-w-[628px] mx-auto">
          Our Expertise – What Sets Us Apart
        </h2>
        <p className="mt-5 text-center text-[20px] leading-[24px] text-black font-sequel max-w-[499px] mx-auto">
          Manage leads, customers, and workflows with tailored CRM platforms built for your exact business model.
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item) => (
            <ExpertiseCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseCard({ id, title, text }: ExpertiseItem) {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardBg = isHovered ? "black" : "white";
  const textColor = isHovered ? "text-white" : "text-black";
  const arrowBg = isHovered ? "bg-white" : "bg-black";
  const arrowColor = isHovered ? "text-black" : "text-white";

  return (
    <div 
      className="relative cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom curved shape card */}
      <div className="relative">
        {/* SVG for custom shape */}
        <svg
          className="absolute inset-0 w-full transition-all duration-300"
          width="298"
          height="225"
          viewBox="0 0 298 225"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            filter: isHovered 
              ? "drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.35))" 
              : "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" 
          }}
        >
          <path
            d="M 38,0 
               L 260,0 
               C 280,0 298,18 298,38 
               L 298,187 
               C 298,207 280,225 260,225 
               L 38,225 
               C 18,225 0,207 0,187 
               L 0,38 
               C 0,18 18,0 38,0 
               Z"
            fill={cardBg}
            stroke="#DBDBDB"
            strokeWidth="1"
          />
        </svg>

        {/* Number badge - positioned on top edge */}
        <div 
          className={`absolute -top-[1px] left-[9px] w-[38px] h-[38px] rounded-full bg-white text-black border border-[#DBDBDB] flex items-center justify-center z-10 transition-all duration-300`}
        >
          <span className="text-[13px] font-normal font-inter">
            {id}
          </span>
        </div>

        {/* Arrow icon - positioned in top right */}
        <div 
          className={`absolute top-[14px] right-[14px] w-[17px] h-[17px] rounded-full ${arrowBg} flex items-center justify-center -rotate-45 z-10 transition-all duration-300`}
        >
          <ArrowUpRight className={`w-[10px] h-[10px] ${arrowColor} rotate-45`} />
        </div>

        {/* Content */}
        <div className="relative pt-16 px-6 pb-6" style={{ minHeight: '225px' }}>
          <h3 className={`text-[20px] leading-[24px] font-medium ${textColor} font-sequel mb-3 max-w-[230px] transition-colors duration-300`}>
            {title}
          </h3>
          <p className={`text-[13px] leading-[15px] ${textColor} font-sequel max-w-[260px] transition-colors duration-300`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}