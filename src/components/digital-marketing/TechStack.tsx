// components/services/digital-marketing/TechStack.tsx
"use client";

import Image from "next/image";

const techCategories = [
  {
    title: "SEO Tools",
    subtitle: "Ahrefs, SEMrush, Surfe",
    tools: [
      { 
        name: "Ahrefs", 
        logo: "/images/digital-marketing/logos/ahrefs.svg",
        bg: "bg-blue-500",
        textFallback: "a"
      },
      { 
        name: "SEMrush", 
        logo: "/images/digital-marketing/logos/semrush.svg",
        bg: "bg-orange-500",
        textFallback: "S"
      },
      { 
        name: "Surfer SEO", 
        logo: "/images/digital-marketing/logos/surfer.svg",
        bg: "bg-pink-100",
        textFallback: "S"
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
        textFallback: "G",
        textColor: "text-gray-700"
    },
      { 
        name: "Meta", 
        logo: "/images/digital-marketing/logos/meta.svg",
        bg: "bg-white",
        textFallback: "f",
        textColor: "text-blue-600"
      },
      {/*
        name: "Microsoft Ads", 
        logo: "/images/digital-marketing/logos/microsoft-ads.svg",
        bg: "bg-white",
        textFallback: "M",
        textColor: "text-gray-700"
    */},
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
        textFallback: "M"
      },
      { 
        name: "ActiveCampaign", 
        logo: "/images/digital-marketing/logos/activecampaign.svg",
        bg: "bg-blue-700",
        textFallback: "A"
      },
      { 
        name: "HubSpot", 
        logo: "/images/digital-marketing/logos/hubspot.svg",
        bg: "bg-orange-500",
        textFallback: "H"
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
        textFallback: "📊"
      },
      { 
        name: "Hotjar", 
        logo: "/images/digital-marketing/logos/hotjar.svg",
        bg: "bg-red-500",
        textFallback: "H"
      },
      { 
        name: "Tag Manager", 
        logo: "/images/digital-marketing/logos/tag-manager.svg",
        bg: "bg-blue-400",
        textFallback: "◆"
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
        textFallback: "C"
      },
      { 
        name: "Figma", 
        logo: "/images/digital-marketing/logos/figma.svg",
        bg: "bg-black",
        textFallback: "F"
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
        textFallback: "H"
      },
      { 
        name: "Zoho", 
        logo: "/images/digital-marketing/logos/zoho.svg",
        bg: "bg-white",
        textFallback: "Zoho",
        textColor: "text-red-600"
      },
      { 
        name: "Salesforce", 
        logo: "/images/digital-marketing/logos/salesforce.svg",
        bg: "bg-blue-500",
        textFallback: "☁️"
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#F0F4FA' }}>
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-sequel">
          Our Digital Marketing Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="relative"
              style={{ width: '392px', maxWidth: '100%' }}
            >
              {/* Blue shadow card behind - always visible */}
              <div 
                className="absolute rounded-lg"
                style={{ 
                  width: '382px',
                  height: '210px',
                  background: '#608BF3',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  borderRadius: '8px',
                  left: '0px',
                  top: '0px'
                }} 
              />
              
              {/* Main white card */}
              <div 
                className="relative bg-white rounded-lg"
                style={{
                  width: '382px',
                  height: '210px',
                  borderRadius: '8px',
                  left: '10px',
                  top: '0px'
                }}
              >
                {/* Blue left stripe */}
                <div 
                  className="absolute left-0 top-0 bottom-0"
                  style={{ 
                    width: '8px',
                    backgroundColor: '#608BF3',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px'
                  }}
                />
                
                {/* Card content */}
                <div className="p-6 pl-8 h-full flex flex-col">
                  <h3 className="text-2xl font-semibold mb-1 font-sequel" style={{ fontSize: '30px', lineHeight: '35px', fontWeight: 415 }}>
                    {category.title}
                  </h3>
                  <p className="text-gray-500 mb-auto font-sequel" style={{ fontSize: '18px', lineHeight: '21px', fontWeight: 405 }}>
                    {category.subtitle}
                  </p>
                  
                  {/* Tools aligned to bottom right */}
                  <div className="flex gap-2 justify-end mt-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className={`flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${tool.bg} ${tool.textColor || 'text-white'}`}
                        style={{ 
                          width: '56px',
                          height: '46px',
                          borderRadius: '6px',
                          boxShadow: '2px 3px 2.5px rgba(0, 0, 0, 0.15)',
                        }}
                        title={tool.name}
                      >
                        {/* Fallback text until images are added */}
                        {/* <span className="font-bold text-sm">
                          {tool.textFallback}
                        </span> */}
                        
                        {/* SVG Image */}
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
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