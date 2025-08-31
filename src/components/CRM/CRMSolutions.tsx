// components/services/CRM/CRMSolutions.tsx
"use client";

import Image from "next/image";

export default function CRMSolutions() {
  const solutions = [
    {
      title: "Lead & Contact Management",
      description: "Easily capture, assign, and qualify leads from multiple channels. Manage every interaction with a centralised contact database.",
      image: "/images/CRM Page/Png/Lead & Contact Management.png",
    },
    {
      title: "Sales Pipeline & Opportunity Tracking",
      description: "Visualise your pipeline. Track deals by stage, set follow-ups, and automate status updates based on actions taken by your team or customers.",
      image: "/images/CRM Page/Png/Sales Pipeline & Opportunity Tracking.png",
    },
    {
      title: "Marketing Automation",
      description: "Set up automated drip campaigns, bulk emails, and personalised content delivery using CRM triggers.",
      image: "/images/CRM Page/Png/Marketing Automation.png",
    },
    {
      title: "Customer Support Module",
      description: "Create support tickets, route them by rules, monitor SLAs, and track satisfaction ratings — all within the same platform.",
      image: "/images/CRM Page/Png/Customer Support Module.png",
    },
    {
      title: "Reporting & Analytics",
      description: "Real-time dashboards to track sales velocity, team performance, customer lifetime value, and more.",
      image: "/images/CRM Page/Png/Reporting & Analytics.png",
    },
    {
      title: "Integrations & API",
      description: "Our CRMs integrate with leading tools: Google Workspace/Microsoft Teams/HubSpot, Salesforce/QuickBooks, Stripe/Shopify, WooCommerce",
      image: "/images/CRM Page/Png/CRM Integration with Existing Systems.png",
    }
  ];

  return (
    <section aria-labelledby="crm-solutions" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[90px] py-[80px]">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-x-[60px] items-start">
          
          {/* Left Column */}
          <div>
            {/* Header - positioned at top of left column */}
            <h2 
              id="crm-solutions"
              className="text-[40px] leading-[52px] font-[415] text-black mb-[60px]"
              style={{ fontFamily: 'Sequel Sans' }}
            >
              Our CRM Solutions Cover:
            </h2>
            
            {/* Left column cards */}
            <div className="space-y-[40px]">
              {/* Card 1: Lead & Contact Management */}
              <div className="relative w-full h-[328px] rounded-[26px] overflow-hidden">
                <Image
                  src={solutions[0].image}
                  alt={solutions[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1440px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-[30px]">
                  <h3 
                    className="text-[25px] leading-[30px] font-[425] text-white mb-3"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {solutions[0].title}:
                  </h3>
                  <p 
                    className="text-[20px] leading-[26px] font-[405] text-white/90"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {solutions[0].description}
                  </p>
                </div>
              </div>

              {/* Card 3: Marketing Automation */}
              <div className="relative w-full h-[328px] rounded-[26px] overflow-hidden">
                <Image
                  src={solutions[2].image}
                  alt={solutions[2].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1440px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-[30px]">
                  <h3 
                    className="text-[25px] leading-[30px] font-[425] text-white mb-3"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {solutions[2].title}:
                  </h3>
                  <p 
                    className="text-[20px] leading-[26px] font-[405] text-white/90"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {solutions[2].description}
                  </p>
                </div>
              </div>

              {/* Card 5: Reporting & Analytics */}
              <div className="relative w-full h-[328px] rounded-[26px] overflow-hidden">
                <Image
                  src={solutions[4].image}
                  alt={solutions[4].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1440px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <div className="absolute inset-0 flex flex-col justify-end p-[30px]">
                  <h3 
                    className="text-[25px] leading-[30px] font-[425] text-white mb-3"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {solutions[4].title}:
                  </h3>
                  <p 
                    className="text-[20px] leading-[26px] font-[405] text-white/90"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {solutions[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - aligned with header */}
          <div className="space-y-[40px]">
            {/* Card 2: Sales Pipeline - aligned with header */}
            <div className="relative w-full h-[328px] rounded-[26px] overflow-hidden">
              <Image
                src={solutions[1].image}
                alt={solutions[1].title}
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-[30px]">
                <h3 
                  className="text-[25px] leading-[30px] font-[425] text-white mb-3"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {solutions[1].title}:
                </h3>
                <p 
                  className="text-[20px] leading-[26px] font-[405] text-white/90"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {solutions[1].description}
                </p>
              </div>
            </div>

            {/* Card 4: Customer Support Module */}
            <div className="relative w-full h-[328px] rounded-[26px] overflow-hidden">
              <Image
                src={solutions[3].image}
                alt={solutions[3].title}
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-[30px]">
                <h3 
                  className="text-[25px] leading-[30px] font-[425] text-white mb-3"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {solutions[3].title}:
                </h3>
                <p 
                  className="text-[20px] leading-[26px] font-[405] text-white/90"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {solutions[3].description}
                </p>
              </div>
            </div>

            {/* Card 6: Integrations & API */}
            <div className="relative w-full h-[328px] rounded-[26px] overflow-hidden">
              <Image
                src={solutions[5].image}
                alt={solutions[5].title}
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-[30px]">
                <h3 
                  className="text-[25px] leading-[30px] font-[425] text-white mb-3"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {solutions[5].title}:
                </h3>
                <p 
                  className="text-[20px] leading-[26px] font-[405] text-white/90"
                  style={{ fontFamily: 'Sequel Sans' }}
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
};