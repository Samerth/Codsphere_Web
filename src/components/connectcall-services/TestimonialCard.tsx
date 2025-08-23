"use client"

import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  testimonial: string
  image: string
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  image
}: TestimonialCardProps) {
  return (
    <div className="flex h-[178px] w-[795px] rounded-[15px] bg-[#F7F6F5]">
      <div className="flex items-center p-[25px]">
        {/* Profile image */}
        <div className="relative h-[88px] w-[88px] flex-shrink-0 overflow-hidden rounded-full bg-[#D9D9D9]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="ml-[25px] flex-1">
          <h3 
            className="text-[25px] leading-[36px] text-black"
            style={{ fontFamily: 'Sequel Sans, sans-serif', fontWeight: 405 }}
          >
            {name}
          </h3>
          <p 
            className="text-[15px] leading-[21px] text-[#479FD1]"
            style={{ fontFamily: 'Sequel Sans, sans-serif', fontWeight: 405 }}
          >
            {role}, {company}
          </p>
          <p 
            className="mt-[10px] text-[18px] leading-[26px] text-[#515151]"
            style={{ fontFamily: 'Sequel Sans, sans-serif', fontWeight: 405 }}
          >
            "{testimonial}"
          </p>
        </div>
      </div>
    </div>
  )
}