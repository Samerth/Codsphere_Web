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
    <section className="bg-white">
      <div className="container-wrapper pt-more pb-less">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Our Expertise – What Sets Us Apart
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Manage leads, customers, and workflows with tailored CRM platforms built for your exact
            business model.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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

  const arrowBg = isHovered ? "bg-white" : "bg-black";
  const arrowColor = isHovered ? "text-black" : "text-white";

  return (
    <div
      className="relative cursor-pointer aspect-[300/220]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom curved shape card */}
      <div className="relative h-full">
        {/* SVG for custom shape */}
        <svg
          className="absolute inset-0 w-full h-full overflow-hidden"
          viewBox="0 0 300 220"
          // preserveAspectRatio="xMidYMid slice"
          // fill="none"
          // xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: isHovered
              ? "drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.35))"
              : "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <defs>
            <path
              id="heroShape"
              d="
                M 0,60
                A 40,20 0,0,1 40,40
                A 20,20 0,0,0 60,20
                A 20,20 0,0,1 80,0
                L 260,0
                A 40,20 0,0,1 300,20
                L 300,200
                A 40,20 0,0,1 260,220
                L 40,220
                A 40,20 0,0,1 0,200
                Z
              "
            />
            <clipPath id="heroVideoShape" clipPathUnits="userSpaceOnUse">
              <use href="#heroShape" />
            </clipPath>
          </defs>
          <foreignObject
            width="300"
            height="220"
            clipPath="url(#heroVideoShape)"
            className="bg-white text-black hover:bg-black hover:text-white"
          >
            <div
              className={`absolute top-[14px] right-[14px] w-5 h-5 rounded-full ${arrowBg} flex items-center justify-center -rotate-45 z-10 transition-all duration-300`}
            >
              <ArrowUpRight className={`w-[10px] h-[10px] ${arrowColor} rotate-45`} />
            </div>
            <div className="relative pt-14 md:pt-16 lg:pt-14 px-5 h-full overflow-hidden">
              <h3
                className={`text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-medium font-sequel mb-3 pr-4 transition-colors duration-300`}
              >
                {title}
              </h3>
              <p
                className={`text-[12px] md:text-[13px] leading-[16px] md:leading-[17px] font-light pr-4 line-clamp-6 md:line-clamp-none transition-colors duration-300`}
              >
                {text}
              </p>
            </div>
          </foreignObject>
        </svg>

        {/* Number badge - positioned on top edge */}
        <div className="absolute top-0 left-[9px] w-[15%] h-[15%] flex justify-center z-10 transition-all duration-300">
          <div className="aspect-square rounded-full bg-white text-black border border-[#DBDBDB] flex items-center justify-center">
            <span className="font-light text-[12px]">{id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
