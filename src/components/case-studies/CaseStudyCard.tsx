"use client"

import Image from "next/image"
import Link from "next/link"

interface CaseStudyCardProps {
  image: string
  title: string
  description: string
  tags: string[]
  tagColors: string[]
  iconBg: string
  href?: string
  id: number
}

export default function CaseStudyCard({
  image,
  title,
  description,
  tags,
  tagColors,
  iconBg,
  href = "#",
  id
}: CaseStudyCardProps) {
  return (
    <article className="group relative w-[398px]">
      {/* card container */}
      <div className="relative">
        {/* image container with rounded corners */}
        <Link href={href} className="block">
          <div className="relative h-[327px] w-[398px] overflow-hidden rounded-[14px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="398px"
              priority={id <= 3}
            />
            
            {/* White curved corner for the arrow placement */}
            <div 
              className="absolute bottom-0 right-0 h-[90px] w-[90px] bg-white"
              style={{
                borderTopLeftRadius: '100%',
              }}
            />
          </div>
        </Link>

        {/* arrow icon - positioned at the white curved corner */}
        <div
          className="absolute bottom-[15px] right-[15px] z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full shadow-md transition-transform hover:scale-110"
          style={{ 
            backgroundColor: iconBg
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* content */}
      <div className="mt-[15px]">
        <h3 className="text-[28px] font-semibold leading-[36px] text-gray-900">
          {title}
        </h3>
        <p className="mt-[4px] max-w-[340px] text-[15px] leading-[20px] text-gray-600">
          {description}
        </p>

        {/* tags */}
        <div className="mt-[10px] flex flex-wrap gap-[8px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-[4px] px-[10px] py-[4px] text-[12px] font-medium uppercase tracking-wider"
              style={{ 
                backgroundColor: tagColors[index],
                color: '#3D3D3D'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}