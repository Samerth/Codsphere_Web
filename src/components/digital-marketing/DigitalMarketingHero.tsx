// components/services/digital-marketing/DigitalMarketingHero.tsx
"use client";

import Image from "next/image";

export default function DigitalMarketingHero() {
  return (
    <header className="relative">
      <div className="relative h-[200px] sm:h-[240px] md:h-[250px] w-full overflow-hidden">
        <Image
          src="/images/digital-marketing/JPEG/digital marketing banner.jpg" // export from Figma @2x
          alt="Abstract tech background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="cs-container-wide h-full flex items-end pb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px]">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
            </h1>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}