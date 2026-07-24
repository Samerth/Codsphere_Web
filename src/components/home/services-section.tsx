"use client";
import ServiceCard from "@/components/service-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const offerings = [
  {
    title: "Sortify",
    desc: "Digitize mailroom intake, recipient notifications, package tracking, and pickup records.",
    img: "/images/home/service-erp.jpg",
    imgAlt: "Digital workflow interface representing Sortify mailroom management.",
    href: "/sortify",
  },
  {
    title: "CodChat",
    desc: "Add AI-powered conversations to your website to qualify visitors and capture enquiries.",
    img: "/images/home/service-marketing.jpg",
    imgAlt: "Digital conversation and lead-capture interface representing CodChat.",
    href: "/cod-chat",
  },
  {
    title: "CodCRM",
    desc: "Manage leads, deals, follow-ups, automation, and reporting in one ready-to-use CRM.",
    img: "/images/home/service-crm.jpg",
    imgAlt: "Business professional using a CRM interface representing CodCRM.",
    href: "/cod-crm",
  },
  {
    title: "Custom Software",
    desc: "Build bespoke web, mobile, CRM, ERP, and automation systems around your operations.",
    img: "/images/home/service-invoicing.jpg",
    imgAlt: "Team planning a custom business software solution.",
    href: "/services",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white bg-dots">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto mb-10">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">What We Build</p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Three products. One custom software team.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Start with a focused CodSphere product or partner with us to create software tailored to
            your business.
          </p>
        </div>

        {/* Services Grid - Added padding for arrow overflow on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offerings.map((service, index) => (
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
        <div className="flex justify-center mt-8 sm:mt-14">
          <Link href="/solutions">
            <button className="rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                <div className="bg-white text-black rounded-full p-0.5">
                  <ArrowRight />
                </div>
                Explore All Products
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
