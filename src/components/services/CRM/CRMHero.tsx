// components/services/CRM/CRMHero.tsx
"use client";

import Image from "next/image";

export default function CRMHero() {
  return (
    <section className="relative w-full">
      {/* Background Image with Overlay */}
      <div className="relative h-[180px] md:h-[220px] lg:h-[250px] w-full">
        <Image
          src="/images/CRM Page/Jpeg/crm-development-hero-bg.jpg"
          alt="Custom CRM Development Services page header image"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-wrapper">
            <h1 className="text-white text-[24px] md:text-[32px] lg:text-[48px] leading-[30px] md:leading-[40px] lg:leading-[58px] font-semibold drop-shadow-lg">
              Custom CRM Development Services
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
