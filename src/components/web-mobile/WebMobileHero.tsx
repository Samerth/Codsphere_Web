// components/services/web-mobile/WebMobileHero.tsx
"use client";

import Image from "next/image";

export default function WebMobileHero() {
  return (
    <header className="relative">
      <div className="relative h-[180px] md:h-[220px] lg:h-[250px] w-full overflow-hidden">
        <Image
          src="/images/web-mobile/JPEG/Group 202.jpg"
          alt="Web & Mobile Development"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        
        {/* Title with responsive container */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
            <h1 className="text-white text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[38px] lg:leading-[47px] font-[415] font-sequel drop-shadow-lg">
              
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}