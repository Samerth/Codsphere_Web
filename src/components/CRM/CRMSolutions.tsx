"use client";

// components/services/CRM/CRMSolutions.tsx
import Image from "next/image";

export default function CRMSolutions() {
  const solutions = [
    {
      title: "Lead & Contact Management",
      description: "Easily capture, assign, and qualify leads from multiple channels. Manage every interaction with a centralised contact database.",
      image: "/images/CRM Page/Png/Lead & Contact Management.png",
      position: "left",
      top: "142px" // relative position from section start
    },
    {
      title: "Sales Pipeline & Opportunity Tracking",
      description: "Visualise your pipeline. Track deals by stage, set follow-ups, and automate status updates based on actions taken by your team or customers.",
      image: "/images/CRM Page/Png/Sales Pipeline & Opportunity Tracking.png",
      position: "right",
      top: "0px"
    },
    {
      title: "Marketing Automation",
      description: "Set up automated drip campaigns, bulk emails, and personalised content delivery using CRM triggers.",
      image: "/images/CRM Page/Png/Marketing Automation.png",
      position: "left",
      top: "510px"
    },
    {
      title: "Customer Support Module",
      description: "Create support tickets, route them by rules, monitor SLAs, and track satisfaction ratings — all within the same platform.",
      image: "/images/CRM Page/Png/Customer Support Module.png",
      position: "right",
      top: "368px"
    },
    {
      title: "Reporting & Analytics",
      description: "Real-time dashboards to track sales velocity, team performance, customer lifetime value, and more.",
      image: "/images/CRM Page/Png/Reporting & Analytics.png",
      position: "left",
      top: "878px"
    },
    {
      title: "Integrations & API",
      description: "Our CRMs integrate with leading tools: Google Workspace/Microsoft Teams/HubSpot, Salesforce/QuickBooks, Stripe/Shopify, WooCommerce",
      image: "/images/CRM Page/Png/CRM Integration with Existing Systems.png",
      position: "right",
      top: "737px"
    }
  ];

  return (
    <section aria-labelledby="crm-solutions" className="bg-white relative">
      <div className="mx-auto max-w-[1440px] px-[90px] py-16">
        
        {/* Header Section */}
        <div className="relative">
          {/* Title */}
          <h2 
            id="crm-solutions"
            className="text-[40px] leading-[129.61%] font-[415] text-black w-[458px]"
            style={{ 
              fontFamily: 'Sequel Sans', 
              fontWeight: 415
            }}
          >
            Our CRM Solutions Cover:
          </h2>
        </div>

        {/* Solutions Container with Staggered Grid */}
        <div className="relative h-[1206px] mt-[40px]">
          
          {/* Row 1: Lead & Contact (left: 90px, top: 142px) + Sales Pipeline (left: 750px, top: 0) */}
          {/* Lead & Contact Management - Card 1 */}
          <div 
            className="absolute w-[600px] h-[328px] rounded-[26px] overflow-hidden"
            style={{ left: '0px', top: '142px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={solutions[0].image}
                alt={solutions[0].title}
                fill
                className="object-cover opacity-100"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-black/55 rounded-[26px]" />
              <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                <h3 
                  className="text-[25px] leading-[29px] font-[425] text-white mb-2 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[0].title}:
                </h3>
                <p 
                  className="text-[25px] leading-[29px] font-[425] text-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Sales Pipeline & Opportunity Tracking - Card 2 */}
          <div 
            className="absolute w-[600px] h-[328px] rounded-[26px] overflow-hidden"
            style={{ left: '660px', top: '0px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={solutions[1].image}
                alt={solutions[1].title}
                fill
                className="object-cover opacity-100"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-black/55 rounded-[26px]" />
              <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                <h3 
                  className="text-[25px] leading-[29px] font-[425] text-white mb-2 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[1].title}:
                </h3>
                <p 
                  className="text-[25px] leading-[29px] font-[425] text-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Marketing (left: 90px, top: 510px) + Customer Support (left: 750px, top: 368px) */}
          {/* Marketing Automation - Card 3 */}
          <div 
            className="absolute w-[600px] h-[328px] rounded-[26px] overflow-hidden"
            style={{ left: '0px', top: '510px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={solutions[2].image}
                alt={solutions[2].title}
                fill
                className="object-cover opacity-100"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-black/55 rounded-[26px]" />
              <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                <h3 
                  className="text-[25px] leading-[29px] font-[425] text-white mb-2 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[2].title}:
                </h3>
                <p 
                  className="text-[25px] leading-[29px] font-[425] text-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Customer Support Module - Card 4 */}
          <div 
            className="absolute w-[600px] h-[328px] rounded-[26px] overflow-hidden"
            style={{ left: '660px', top: '368px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={solutions[3].image}
                alt={solutions[3].title}
                fill
                className="object-cover opacity-100"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-black/55 rounded-[26px]" />
              <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                <h3 
                  className="text-[25px] leading-[29px] font-[425] text-white mb-2 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[3].title}:
                </h3>
                <p 
                  className="text-[25px] leading-[29px] font-[425] text-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: Reporting (left: 90px, top: 878px) + Integrations (left: 750px, top: 737px) */}
          {/* Reporting & Analytics - Card 5 */}
          <div 
            className="absolute w-[600px] h-[328px] rounded-[26px] overflow-hidden"
            style={{ left: '0px', top: '878px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={solutions[4].image}
                alt={solutions[4].title}
                fill
                className="object-cover opacity-100"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-black/55 rounded-[26px]" />
              <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                <h3 
                  className="text-[25px] leading-[29px] font-[425] text-white mb-2 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[4].title}:
                </h3>
                <p 
                  className="text-[25px] leading-[29px] font-[425] text-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[4].description}
                </p>
              </div>
            </div>
          </div>

          {/* Integrations & API - Card 6 */}
          <div 
            className="absolute w-[600px] h-[328px] rounded-[26px] overflow-hidden"
            style={{ left: '660px', top: '737px' }}
          >
            <div className="relative w-full h-full">
              <Image
                src={solutions[5].image}
                alt={solutions[5].title}
                fill
                className="object-cover opacity-100"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-black/55 rounded-[26px]" />
              <div className="absolute bottom-[30px] left-[30px] right-[30px]">
                <h3 
                  className="text-[25px] leading-[29px] font-[425] text-white mb-2 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[5].title}:
                </h3>
                <p 
                  className="text-[25px] leading-[29px] font-[425] text-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.35)]"
                  style={{ fontFamily: 'Sequel Sans', fontWeight: 425 }}
                >
                  {solutions[5].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}