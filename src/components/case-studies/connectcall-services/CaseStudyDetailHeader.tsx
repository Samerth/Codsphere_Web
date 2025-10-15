"use client";

import Image from "next/image";

interface CaseStudyDetailHeaderProps {
  title: string;
  backgroundImage?: string;
}

export default function CaseStudyDetailHeader({
  title,
  backgroundImage = "/images/case-studies/connectcall-hero.jpg",
}: CaseStudyDetailHeaderProps) {
  return (
    <header className="relative">
      <div className="relative h-[200px] sm:h-[240px] md:h-[250px] w-full overflow-hidden">
        <Image
          src="/images/case-studies-page/jpeg/case-studies-hero-bg.jpg"
          alt="Case Studies page header image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="h-full flex items-end pb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="container-wrapper">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                Case Studies - {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
