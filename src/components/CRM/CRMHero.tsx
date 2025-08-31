// components/services/CRM/CRMHero.tsx
"use client";

import Image from "next/image";

export default function CRMHero() {
  return (
    <section className="relative w-full">
      {/* Background Image with Overlay */}
      <div className="relative h-[250px] w-full">
        <Image
          src="/images/CRM Page/Jpeg/Group 243.jpg" // replace with your actual file name
          alt="About Us background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px]">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
              Custom CRM Development Services
            </h1>
          </div>
        </div>
      </div>
      </section>
  );
}

