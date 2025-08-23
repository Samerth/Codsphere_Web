// components/services/digital-marketing/CoreDigitalServices.tsx
"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Search Engine Optimisation (SEO)",
    description: "We apply proven SEO strategies to rank your website highly on search engines like Google. We use tools like Ahrefs and SEMRush to find relevant keywords.",
    image: "/images/digital-marketing/seo-service.jpg",
  },
  {
    id: 2,
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Get targeted, instant traffic for your brand. We use platforms like Google Ads and Meta Ads to drive high-quality, converting visitors to your website.",
    image: "/images/digital-marketing/ppc-service.jpg",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description: "Connect with your audience through strategic social media campaigns. LinkedIn, Instagram, X, and other platforms to grow your audience and build loyalty.",
    image: "/images/digital-marketing/social-media-service.jpg",
  },
  {
    id: 4,
    title: "Email Marketing",
    description: "Drive customer retention and engagement with custom email campaigns to prospects and customers.",
    image: "/images/digital-marketing/email-marketing.jpg",
  },
  {
    id: 5,
    title: "Web & Landing Page Design",
    description: "Convert visitors into customers with visually stunning and high-converting landing pages tailored to your business.",
    image: "/images/digital-marketing/web-design.jpg",
  },
  {
    id: 6,
    title: "Lead Generation & Funnel Creation",
    description: "Get the optimized data when you need it most. CRM and web form automations to capture and qualify leads - from awareness to decision stage.",
    image: "/images/digital-marketing/funnel-creation.jpg",
  },
];

export default function CoreDigitalServices() {
  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Digital Marketing Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-brand-blue transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
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