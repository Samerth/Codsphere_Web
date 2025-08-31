"use client"

import Image from "next/image"

interface CaseStudyDetailHeaderProps {
  title: string
  backgroundImage?: string
}

export default function CaseStudyDetailHeader({ 
  title,
  backgroundImage = "/images/case-studies/connectcall-hero.jpg" 
}: CaseStudyDetailHeaderProps) {
  return (
    <div className="relative h-[250px] w-full">
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

      {/* title - positioned according to design */}
      <div className="relative flex h-full items-center">
        <h1 
          className="ml-[90px] text-[40px] leading-[47px] text-white"
          style={{ 
            fontFamily: 'Sequel Sans, sans-serif',
            fontWeight: 415,
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)' 
          }}
        >
          Case Studies - {title}
        </h1>
      </div>
    </div>
  )
}