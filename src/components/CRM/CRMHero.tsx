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
        <h1 className="absolute left-24 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-semibold drop-shadow-lg">
          Custom CRM Development Services
        </h1>
      </div>
      </section>
  );
}

