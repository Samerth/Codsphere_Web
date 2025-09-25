"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { useState } from "react";

type Member = {
  name: string;
  role: string;
  img: string;
  video?: string;
  offset?: string; // for staggered layout
};

const MEMBERS: Member[] = [
  {
    name: "Kevin Nicholson",
    role: "Lead Architect (CRM & ERP)",
    img: "/images/home/team section (Kevin Nicholson).png",
    video: "#",
    offset: "top",
  },
  {
    name: "Robert Peppers",
    role: "UX Engineer",
    img: "/images/home/team section (Rober Peppers).png",
    video: "#",
    offset: "bottom",
  },
  {
    name: "Wayne Gagnon",
    role: "Mobile & Web Tech Lead",
    img: "/images/home/team section (Wayne Gagnon).png",
    video: "#",
    offset: "top",
  },
  {
    name: "Kimberly Branch",
    role: "Digital Strategy & Growth Expert",
    img: "/images/home/team section (Kimberly).png",
    video: "#",
    offset: "bottom",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-[1440px] px-6 sm:px-6 lg:px-[90px]">
        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="font-damion text-[30px] sm:text-[35px] leading-[38px] sm:leading-[48px] text-[#D3D3D3] mb-0">
            Experts Team
          </div>
          <h2 className="text-[28px] sm:text-[35px] md:text-[40px] leading-[34px] sm:leading-[42px] md:leading-[47px] font-medium text-black font-sequel px-4">
            Team Perfection At It&apos;s Finest
          </h2>
        </div>

        {/* Cards Grid - Staggered Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className={`${
                member.offset === "bottom" 
                  ? "hidden lg:block lg:mt-[77px]" // Cards 2 and 4 are pushed down on desktop only
                  : ""
              }`}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>

        {/* Mobile Layout - Show all cards without offset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {MEMBERS.map((member) => (
            <div key={`mobile-${member.name}`}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, img, video }: Member) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="relative rounded-[16px] sm:rounded-[18px] lg:rounded-[21px] bg-white shadow-[0px_4px_11.8px_rgba(0,0,0,0.15)] overflow-visible">
      {/* Card Container */}
      <div className="px-4 sm:px-5 lg:px-6 pt-6 sm:pt-7 lg:pt-8 pb-4 sm:pb-5 lg:pb-6">
        {/* Avatar Container - Positioned to overflow */}
        <div className="relative -mt-6 sm:-mt-7 lg:-mt-8 mx-auto w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px]">
          {/* White background circle */}
          <div className="absolute inset-0 rounded-full bg-white"></div>
          
          {/* Image Container with border and shadow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] lg:h-[174px] lg:w-[174px] rounded-full border-2 border-white shadow-[0px_1px_7.1px_rgba(0,0,0,0.25)] overflow-hidden bg-[#D9D9D9]">
              {!imageError ? (
                <Image
                  src={img}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 174px"
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-[#D9D9D9]" />
              )}
            </div>
          </div>

          {/* Play button - positioned absolutely */}
          {video && (
            <Link
              href={video}
              aria-label={`Play intro video of ${name}`}
              className="absolute right-0 top-6 sm:top-7 lg:top-8 inline-flex h-[32px] w-[32px] sm:h-[36px] sm:w-[36px] lg:h-[41.49px] lg:w-[41.49px] items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-900 transition-colors"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 fill-white ml-1" />
            </Link>
          )}
        </div>

        {/* Name + Role - Below the avatar */}
        <div className="mt-[45px] sm:mt-[50px] lg:mt-[60px] text-center">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[22px] lg:leading-[24px] font-medium text-black font-sequel">
            {name}
          </h3>
          <p className="mt-1 text-[13px] sm:text-[14px] lg:text-[15px] leading-[16px] sm:leading-[17px] lg:leading-[18px] text-[#515151] font-sequel font-normal">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}