"use client";

import { Puzzle, Settings, Monitor, Cloud } from "lucide-react";

const items = [
  { 
    title: "CRM & ERP", 
    subtitle: "Frameworks:",
    text: "Odoo, HubSpot, Zoho, SuiteCRM",
    icon: Puzzle,
    iconBg: "#F1DA71"
  },
  { 
    title: "Backend:", 
    subtitle: "",
    text: "Laravel, Node.js, PHP, Python",
    icon: Settings,
    iconBg: "#FBD5C0"
  },
  { 
    title: "Frontend:", 
    subtitle: "",
    text: "React, Vue.js, HTML5, Tailwind",
    icon: Monitor,
    iconBg: "#F5B9FF"
  },
  { 
    title: "Cloud & Infra:", 
    subtitle: "",
    text: "AWS, Firebase, DigitalOcean",
    icon: Cloud,
    iconBg: "#B3C8FF"
  },
];

export default function BuiltWith() {
  return (
    <section className="relative bg-black py-10 md:py-12 text-white overflow-hidden">
      {/* Background Image - Rotated */}
      <div className="absolute left-0 top-0 w-[448px] h-full -rotate-90 origin-top-left opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/tech-bg.jpg')", // Replace with your actual image
          }}
        />
      </div>

      <div className="relative container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] leading-[52px] font-medium text-white font-sequel">
            Built With Proven Technologies
          </h2>
          <p className="mt-4 text-[20px] leading-[24px] text-white font-sequel max-w-[794px] mx-auto">
            We don't chase trends — we build with reliable, future-ready tools that scale with your business.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1260px] mx-auto">
          {items.map((item) => (
            <div 
              key={item.title} 
              className="bg-[#F5F5F3] border border-[#CCCCCC] rounded-[29px] p-[30px] h-[213px] flex flex-col justify-between"
            >
              {/* Icon Circle */}
              <div 
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: item.iconBg }}
              >
                <item.icon className="w-[36px] h-[36px] text-black" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[20px] leading-[24px] font-medium text-black font-sequel mb-1">
                  {item.title}
                  {item.subtitle && (
                    <span className="block text-[20px] leading-[24px] font-medium">
                      {item.subtitle}
                    </span>
                  )}
                </h3>
                <p className="text-[20px] leading-[24px] font-normal text-black font-sequel max-w-[215px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="w-[18px] h-[1.5px] bg-white hover:opacity-70 transition-opacity" />
          <button className="w-[18px] h-[1.5px] bg-white hover:opacity-70 transition-opacity" />
        </div>
      </div>
    </section>
  );
}