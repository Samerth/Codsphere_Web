"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const services = [
  { 
    title: "Custom CRM Software Development", 
    desc: "Manage leads, customers, and workflows with tailored CRM platforms built for your exact business model.", 
    img: "/images/home/service-crm.jpg"
  },
  { 
    title: "AI-Driven ERP System Development & Integration", 
    desc: "Streamline operations with intelligent, scalable ERP solutions tailored for finance, inventory, HR, and more.", 
    img: "/images/home/service-erp.jpg"
  },
  { 
    title: "Smart Invoicing & Billing Tools", 
    desc: "Simplify payments and automate recurring invoicing with clean, secure, and intuitive systems.", 
    img: "/images/home/service-invoicing.jpg"
  },
  { 
    title: "Digital Marketing", 
    desc: "We don't guess — we build full-funnel strategies that convert using data, automation, and analytics.", 
    img: "/images/home/service-marketing.jpg"
  },
];

export default function WorkCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-16 md:py-20 text-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-damion text-[35px] leading-[45px] text-[#828282] mb-0">
            Services
          </p>
          <h2 className="text-[40px] leading-[52px] font-medium text-white font-sequel max-w-[744px] mx-auto">
            Startup or Scaleup — We've Got the Stack.
          </h2>
          <p className="text-[20px] leading-[26px] font-normal text-white font-sequel max-w-[620px] mx-auto mt-2">
            Explore the four pillars we build around — and why brands keep coming back
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-12">
          <button className="group flex items-center gap-3 bg-[#0D0D0D] text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_12px_rgba(0,0,0,0.15)]">
            <span className="w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#33FAFD] group-hover:to-[#020D67]">
              <ArrowRight className="w-3 h-3 text-black -rotate-45" />
            </span>
            <span className="text-[18px] leading-[21px] font-normal font-sequel">
              Explore Our Solutions
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ 
  title, 
  desc, 
  img, 
  isHovered,
  onHover,
  onLeave 
}: {
  title: string;
  desc: string;
  img: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [imageError, setImageError] = useState(false);
  
  // Card styling based on hover state
  const cardBg = isHovered ? "#608BF3" : "#0E0E0E";
  const borderStyle = isHovered ? "none" : "3px solid #232323";

  return (
    <article 
      className="relative h-[378px] rounded-[21px] transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        background: cardBg,
        border: borderStyle,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Arrow Icon - Top Right */}
      <div 
        className="absolute top-2 right-2 w-[60px] h-[60px] rounded-full flex items-center justify-center z-10"
        style={{
          background: isHovered ? "#FFFFFF" : "#0E0E0E",
          border: isHovered ? "none" : "1px solid #232323",
          transform: "rotate(-129.14deg)"
        }}
      >
        <ArrowUpRight 
          className="w-8 h-8"
          style={{
            color: isHovered ? "#608BF3" : "#FFFFFF",
            transform: "rotate(129.14deg)"
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 h-full flex flex-col">
        {/* Title */}
        <h3 className="text-[20px] leading-[26px] font-medium text-white font-sequel mb-6 pr-16">
          {title}
        </h3>

        {/* Divider Line */}
        <div className="h-[1.5px] bg-white mb-3"></div>

        {/* Description */}
        <p className="text-[12px] leading-[14px] font-normal text-white font-sequel mb-6">
          {desc}
        </p>

        {/* Image Container - At Bottom */}
        <div className="mt-auto -mx-6 -mb-6">
          <div className="relative h-[182px] w-full overflow-hidden bg-black rounded-b-[18px]">
            {!imageError ? (
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-black/50" />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}