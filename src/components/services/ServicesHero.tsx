"use client";

import Image from "next/image";

export default function ServicesHero() {
  return (
    <header className="relative">
      <div className="relative h-[200px] sm:h-[240px] md:h-[250px] w-full overflow-hidden">
        <Image
          src="/images/services/Jpeg/Group 230.jpg" // export from Figma @2x
          alt="Abstract tech background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 h-full flex items-end pb-6">
          <p className="text-white text-xl sm:text-2xl font-semibold drop-shadow">
            Our services
          </p>
        </div>
      </div>
    </header>
  );
}
