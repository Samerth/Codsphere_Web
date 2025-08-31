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
        <div className="cs-container-wide h-full flex items-end pb-6">
        <h1 className="absolute left-24 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-semibold drop-shadow-lg">
            Our services
          </h1>
        </div>
      </div>
    </header>
  );
}
