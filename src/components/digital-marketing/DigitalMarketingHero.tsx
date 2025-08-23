// components/services/digital-marketing/DigitalMarketingHero.tsx
"use client";

import Image from "next/image";

export default function DigitalMarketingHero() {
  return (
    <header className="relative">
      <div className="relative h-[200px] sm:h-[240px] md:h-[250px] w-full overflow-hidden">
        <Image
          src="/images/digital-marketing/hero-bg.jpg"
          alt="Digital Marketing"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
              DIGITAL
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              MARKETING
            </h2>
            <div className="flex items-center justify-center gap-8 mt-4 text-sm sm:text-base">
              <span className="flex items-center gap-2">
                <span className="text-brand-blue">●</span> SEO
              </span>
              <span className="flex items-center gap-2">
                <span className="text-brand-blue">●</span> SEM
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom text */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 -mt-8 relative z-10">
        <p className="text-white text-xl sm:text-2xl font-semibold">
          Digital Marketing
        </p>
      </div>
    </header>
  );
}