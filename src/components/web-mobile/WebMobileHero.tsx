// components/services/web-mobile/WebMobileHero.tsx
"use client";

import Image from "next/image";

export default function WebMobileHero() {
  return (
    <header className="relative">
      <div className="relative h-[250px] w-full overflow-hidden">
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
        
        {/* Title with consistent container */}
        <div className="max-w-[1440px] mx-auto px-[65px] h-full flex items-end pb-12">
          <h1 
            className="text-white text-[40px] leading-[47px] drop-shadow-lg"
            style={{ 
              fontFamily: 'Sequel Sans',
              fontWeight: 415
            }}
          >
          </h1>
        </div>
      </div>
    </header>
  );
}