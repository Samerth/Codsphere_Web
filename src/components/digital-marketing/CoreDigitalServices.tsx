// components/services/digital-marketing/CoreDigitalServices.tsx
"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Search Engine Optimisation (SEO)",
    description: "Rank higher on Google with our proven on-page, off-page, and technical SEO strategies. We use the latest tools to boost visibility and drive organic traffic.",
    image: "/images/digital-marketing/PNG/core service SEO.png",
  },
  {
    id: 2,
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Launch highly targeted Google Ads and social media campaigns that bring immediate traffic and measurable ROI.",
    image: "/images/digital-marketing/PNG/core service pay per click.png",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description: "Build brand awareness and customer engagement across platforms like Instagram, LinkedIn, and Facebook. Organic content + paid ads = winning formula.",
    image: "/images/digital-marketing/PNG/core-service-social-media-marketing.png",
  },
  {
    id: 4,
    title: "Email Marketing",
    description: "Create high-converting automated campaigns with platforms like Mailchimp, ActiveCampaign, and HubSpot. Nurture leads, drive conversions, and retain customers.",
    image: "/images/digital-marketing/PNG/core service Email marketing.png",
  },
  {
    id: 5,
    title: "Web & Landing Page Design",
    description: "We create fast, responsive, and conversion-focused websites and landing pages tailored for your business.",
    image: "/images/digital-marketing/PNG/core service Web and landing.png",
  },
  {
    id: 6,
    title: "Lead Generation & Funnel Creation",
    description: "Capture, nurture, and convert leads with complete marketing funnels - from awareness to action using CRM integrations.",
    image: "/images/digital-marketing/PNG/core service Leadgeneration.png",
  },
];

export default function CoreDigitalServices() {
  return (
    <section className="py-12 md:py-16 lg:py-[80px] bg-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[65px]">
        <h2 
          className="text-center mb-8 md:mb-12 lg:mb-[85px] text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] text-white"
          style={{
            fontFamily: 'Sequel Sans',
            fontWeight: 415
          }}
        >
          Our Core Digital Marketing Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-x-[36px] lg:gap-y-[30px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden bg-white shadow-[1px_1px_1px_rgba(0,0,0,0.25)] rounded-[16px]"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-[200px] md:h-[220px] lg:h-[239px] rounded-t-[16px] mx-2 mt-2 lg:mx-[8px] lg:mt-[8px] bg-[#D9D9D9]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="px-6 md:px-8 lg:px-[35px] pt-3 pb-5 lg:pt-[15px]">
                <h3 
                  className="mb-2 lg:mb-[6px] text-[18px] md:text-[19px] lg:text-[20px] leading-[22px] md:leading-[23px] lg:leading-[24px] text-black"
                  style={{
                    fontFamily: 'Sequel Sans',
                    fontWeight: 415
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-[13px] md:text-[13px] lg:text-[14px] leading-[16px] lg:leading-[17px] text-black"
                  style={{
                    fontFamily: 'Sequel Sans',
                    fontWeight: 405
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}