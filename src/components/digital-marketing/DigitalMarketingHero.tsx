// components/services/digital-marketing/DigitalMarketingHero.tsx
"use client";

import Image from "next/image";

export default function DigitalMarketingHero() {
  return (
    <header className="relative">
      <div className="relative h-[180px] md:h-[220px] lg:h-[250px] w-full overflow-hidden">
        <Image
          src="/images/digital-marketing/JPEG/digital marketing banner.jpg"
          alt="Abstract tech background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/50" aria-hidden /> */}
        {/* <div className="absolute inset-0 flex items-center">
          <div className="container-wrapper">
            <h1 className="text-white text-[24px] md:text-[32px] lg:text-[48px] leading-[30px] md:leading-[40px] lg:leading-[58px] font-semibold drop-shadow-lg">
              Digital Marketing Services
            </h1>
          </div>
        </div> */}
      </div>
    </header>
  );
}
