'use client';

import Image from 'next/image';

export default function ERPHero() {
  return (
    <header className="relative">
      <div className="relative h-[200px] sm:h-[240px] md:h-[250px] w-full overflow-hidden">
        <Image
          src="/images/ERP/JPEG/ERP solution.jpg"
          alt="Abstract tech background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="max-w-[1440px] mx-auto px-[65px] h-full flex items-center">
          <h1 
            className="text-white text-4xl md:text-5xl font-semibold drop-shadow-lg"
            style={{ 
              fontFamily: 'Sequel Sans',
              fontWeight: 605
            }}
          > 
          </h1>
        </div>
      </div>
    </header>
  );
}