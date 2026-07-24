"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Member = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
  offset?: string; // for staggered layout
};

const MEMBERS: Member[] = [
  {
    name: "Samerth Pathak",
    role: "Founder & Lead Architect",
    img: "/images/profile-pic/samerth-headshot.png",
    linkedin: "https://ca.linkedin.com/in/samerth-pathak",
    offset: "top",
  },
  {
    name: "Pratyaksh Sethi",
    role: "Chief Business Development Officer",
    img: "/images/profile-pic/p.png",
    offset: "bottom",
  },
];

export default function Team() {
  return (
    <section className="">
      <div className="container-wrapper pt-less pb-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#D3D3D3]">Experts Team</p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Team Perfection At Its Finest
          </h2>
        </div>

        {/* Cards Grid - Staggered Layout */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-5 xl:gap-6">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className={cn(
                "",
                member.offset === "bottom" ? "lg:block lg:mt-[77px]" : "", // Cards 2 and 4 are pushed down on desktop only
              )}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, img, linkedin }: Member) {
  const [imageError, setImageError] = useState(false);

  const card = (
    <article className="relative rounded-[16px] sm:rounded-[18px] lg:rounded-[21px] shadow-[0px_4px_11.8px_rgba(0,0,0,0.15)] overflow-visible transition-transform hover:-translate-y-1">
      {/* Card Container */}
      <div className="py-16 lg:py-8 xl:py-12 flex flex-col gap-6 xl:gap-10">
        {/* Avatar Container - Positioned to overflow */}
        <div className="mx-auto w-full flex justify-center">
          {/* Image Container with border and shadow */}
          <div className="relative h-[256px] lg:h-[120px] xl:h-[160px] 2xl:h-[200px] aspect-square rounded-full border-2 border-white shadow-[0px_1px_7.1px_rgba(0,0,0,0.25)]  bg-[#D9D9D9] overflow-hidden">
            {!imageError ? (
              <Image
                src={img}
                alt={`CodSphere team member ${name}, ${role} profile picture`}
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

        {/* Name + Role - Below the avatar */}
        <div className="text-center">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[22px] lg:leading-[24px] font-medium text-black font-sequel">
            {name}
          </p>
          <p className="mt-1 text-[13px] sm:text-[14px] lg:text-[15px] leading-[16px] sm:leading-[17px] lg:leading-[18px] text-[#515151] font-sequel font-normal">
            {role}
          </p>
        </div>
      </div>
    </article>
  );

  return linkedin ? (
    <Link
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${name}'s LinkedIn profile`}
      className="block"
    >
      {card}
    </Link>
  ) : (
    card
  );
}
