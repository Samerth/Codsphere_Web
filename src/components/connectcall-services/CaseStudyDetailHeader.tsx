"use client"

import Image from "next/image"

interface CaseStudyDetailHeaderProps {
  title: string
  backgroundImage?: string
}

export default function CaseStudyDetailHeader({ 
  title
}: CaseStudyDetailHeaderProps) {
  return (
    <div className="relative h-[180px] md:h-[220px] lg:h-[250px] w-full">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Case Study Inner page/JPEG/case studies banner.jpg"
          alt="Case Study Background"
          fill
          priority
          className="object-cover"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-[rgba(22,22,22,0.5)]" />
      </div>

      {/* title - responsive positioning and typography */}
      <div className="relative flex h-full items-center">
        <h1 
          className="ml-4 sm:ml-6 md:ml-12 lg:ml-[90px] text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[38px] lg:leading-[47px] text-white font-sequel font-[415]"
          style={{ 
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)' 
          }}
        >
          Case Studies - {title}
        </h1>
      </div>
    </div>
  )
}