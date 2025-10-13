// components/services/digital-marketing/TechStack.tsx
"use client";

import Image from "next/image";

const techCategories = [
  {
    title: "SEO Tools",
    subtitle: "Ahrefs, SEMrush, Surfer",
    tools: [
      {
        name: "Ahrefs",
        logo: "/images/digital-marketing/logos/ahrefs.svg",
        bg: "bg-blue-500",
      },
      {
        name: "SEMrush",
        logo: "/images/digital-marketing/logos/semrush.svg",
        bg: "bg-orange-500",
      },
      {
        name: "Surfer SEO",
        logo: "/images/digital-marketing/logos/surfer.svg",
        bg: "bg-pink-100",
      },
    ],
  },
  {
    title: "PPC Tools",
    subtitle: "Google Ads Manager, Meta Business Suite",
    tools: [
      {
        name: "Google Ads",
        logo: "/images/digital-marketing/logos/google-ads.svg",
        bg: "bg-white",
        textColor: "text-gray-700",
      },
      {
        name: "Meta",
        logo: "/images/digital-marketing/logos/meta.svg",
        bg: "bg-white",
        textColor: "text-blue-600",
      },
    ],
  },
  {
    title: "Email Tools",
    subtitle: "Mailchimp, ActiveCampaign, HubSpot",
    tools: [
      {
        name: "Mailchimp",
        logo: "/images/digital-marketing/logos/mailchimp.svg",
        bg: "bg-yellow-400",
      },
      {
        name: "ActiveCampaign",
        logo: "/images/digital-marketing/logos/activecampaign.svg",
        bg: "bg-blue-700",
      },
      {
        name: "HubSpot",
        logo: "/images/digital-marketing/logos/hubspot.svg",
        bg: "bg-orange-500",
      },
    ],
  },
  {
    title: "Analytics",
    subtitle: "GA4, Hotjar, Tag Manager",
    tools: [
      {
        name: "Google Analytics",
        logo: "/images/digital-marketing/logos/google-analytics.svg",
        bg: "bg-orange-400",
      },
      {
        name: "Hotjar",
        logo: "/images/digital-marketing/logos/hotjar.svg",
        bg: "bg-red-500",
      },
      {
        name: "Tag Manager",
        logo: "/images/digital-marketing/logos/tag-manager.svg",
        bg: "bg-blue-400",
      },
    ],
  },
  {
    title: "Design",
    subtitle: "Canva Pro, Figma",
    tools: [
      {
        name: "Canva",
        logo: "/images/digital-marketing/logos/canva.svg",
        bg: "bg-gradient-to-br from-blue-400 to-purple-500",
      },
      {
        name: "Figma",
        logo: "/images/digital-marketing/logos/figma.svg",
        bg: "bg-black",
      },
    ],
  },
  {
    title: "CRM/Automation",
    subtitle: "HubSpot, Zoho, Salesforce",
    tools: [
      {
        name: "HubSpot",
        logo: "/images/digital-marketing/logos/hubspot.svg",
        bg: "bg-orange-500",
      },
      {
        name: "Zoho",
        logo: "/images/digital-marketing/logos/zoho.svg",
        bg: "bg-white",
        textColor: "text-red-600",
      },
      {
        name: "Salesforce",
        logo: "/images/digital-marketing/logos/salesforce.svg",
        bg: "bg-blue-500",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="bg-[#F0F4FA]">
      <div className="container-wrapper py-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Our Digital Marketing Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[42px]">
          {techCategories.map((category, index) => (
            <div key={index} className="relative">
              {/* Blue shadow card behind */}
              <div
                className="absolute bg-[#608BF3] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[8px]"
                style={{
                  width: "calc(100% - 10px)",
                  height: "100%",
                  left: "0px",
                  top: "0px",
                }}
              />

              {/* Main white card */}
              <div
                className="relative bg-white rounded-[8px] h-[180px] md:h-[195px] lg:h-[210px]"
                style={{
                  width: "calc(100% - 10px)",
                  left: "10px",
                  top: "0px",
                }}
              >
                {/* Blue left stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-[8px] bg-[#608BF3] rounded-l-[8px]" />

                {/* Card content */}
                <div className="p-5 md:p-5 lg:p-6 pl-6 md:pl-7 lg:pl-8 h-full flex flex-col">
                  <h3 className="text-[24px] md:text-[27px] lg:text-[30px] leading-[30px] md:leading-[32px] lg:leading-[35px] mb-1 lg:mb-[4px] font-medium">
                    {category.title}
                  </h3>
                  <p className="mb-auto text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[19px] lg:leading-[21px] font-light">
                    {category.subtitle}
                  </p>

                  {/* Tools aligned to bottom right */}
                  <div className="flex gap-2 justify-end mt-3 lg:mt-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className={`flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${tool.bg} ${tool.textColor || "text-white"} w-[48px] h-[40px] md:w-[52px] md:h-[43px] lg:w-[56px] lg:h-[46px] rounded-[6px] shadow-[2px_3px_2.5px_rgba(0,0,0,0.15)]`}
                        title={tool.name}
                      >
                        {/* Fallback text until images are added */}
                        <span className="font-bold text-[10px] md:text-[11px] lg:text-[12px] text-center">
                          {tool.name.slice(0, 3)}
                        </span>

                        {/* SVG Image - ready when available */}
                        {/* <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="object-contain w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]"
                        /> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
