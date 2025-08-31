"use client"

import Image from "next/image"

interface CaseStudyHeaderProps {
  backgroundImage?: string
}

export default function CaseStudyHeader({ 
  backgroundImage = "/images/Case Study page/JPEG/banner.jpg" 
}: CaseStudyHeaderProps) {
  return (
    <div className="relative h-full w-full">
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Case Study page/JPEG/banner.jpg"
          alt="Case Studies Background"
          fill
          priority
          className="object-cover"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>

      {/* title */}
    </div>
  )
}