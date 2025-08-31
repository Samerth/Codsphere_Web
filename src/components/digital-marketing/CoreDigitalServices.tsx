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
    <section className="py-[80px] bg-black">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <h2 
          className="text-center mb-[85px]"
          style={{
            fontFamily: 'Sequel Sans',
            fontWeight: 415,
            fontSize: '40px',
            lineHeight: '52px',
            color: '#FFFFFF'
          }}
        >
          Our Core Digital Marketing Services
        </h2>
        
        <div 
          className="grid grid-cols-3 gap-x-[36px] gap-y-[30px]"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden"
              style={{
                width: '396px',
                height: '373px',
                background: '#FFFFFF',
                boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
                borderRadius: '16px'
              }}
            >
              {/* Image Section */}
              <div 
                className="relative overflow-hidden"
                style={{
                  width: '374.83px',
                  height: '239px',
                  margin: '8px auto 0',
                  borderRadius: '16px',
                  background: '#D9D9D9'
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={375}
                  height={239}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="px-[35px] pt-[15px]">
                <h3 
                  className="mb-[6px]"
                  style={{
                    fontFamily: 'Sequel Sans',
                    fontWeight: 415,
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#000000'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  style={{
                    fontFamily: 'Sequel Sans',
                    fontWeight: 405,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#000000',
                    maxWidth: '326px'
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