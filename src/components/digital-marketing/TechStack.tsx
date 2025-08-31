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
        textColor: "text-gray-700"
      },
      { 
        name: "Meta", 
        logo: "/images/digital-marketing/logos/meta.svg",
        bg: "bg-white",
        textColor: "text-blue-600"
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
        
        textColor: "text-red-600"
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
    <section className="py-[80px]" style={{ backgroundColor: '#F0F4FA' }}>
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <h2 
          className="text-center mb-[85px]"
          style={{
            fontFamily: 'Sequel Sans',
            fontWeight: 415,
            fontSize: '40px',
            lineHeight: '52px',
            color: '#000000'
          }}
        >
          Our Digital Marketing Tech Stack
        </h2>
        
        <div className="grid grid-cols-3 gap-[42px]">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Blue shadow card behind */}
              <div 
                className="absolute"
                style={{ 
                  width: 'calc(100% - 10px)',
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
                className="relative bg-white"
                style={{
                  width: 'calc(100% - 10px)',
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
                  <h3 
                    style={{ 
                      fontFamily: 'Sequel Sans',
                      fontSize: '30px', 
                      lineHeight: '35px', 
                      fontWeight: 415,
                      marginBottom: '4px'
                    }}
                  >
                    {category.title}
                  </h3>
                  <p 
                    className="mb-auto"
                    style={{ 
                      fontFamily: 'Sequel Sans',
                      fontSize: '18px', 
                      lineHeight: '21px', 
                      fontWeight: 405,
                      color: '#515151'
                    }}
                  >
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
                        <span className="font-bold text-sm">
                          {tool.textFallback}
                        </span>
                        
                        {/*SVG Image - commented out for now */}
                        { <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        /> }
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