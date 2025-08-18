"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

type Member = {
  name: string;
  role: string;
  img: string;         // /public path
  video?: string;      // optional link for the play button
};

const MEMBERS: Member[] = [
  {
    name: "Kevin Nicholson",
    role: "Lead Architect (CRM & ERP)",
    img: "/images/home/team section (Kevin Nicholson).png",
    video: "#",
  },
  {
    name: "Robert Peppers",
    role: "UX Engineer",
    img: "/images/home/team section (Rober Peppers).png",
    video: "#",
  },
  {
    name: "Wayne Gagnon",
    role: "Mobile & Web Tech Lead",
    img: "/images/home/team section (Wayne Gagnon).png",
    video: "#",
  },
  {
    name: "Kimberly Branch",
    role: "Digital Strategy & Growth Expert",
    img: "/images/home/team section (Kimberly).png",
    video: "#",
  },
];

export default function Team() {
  return (
    <section className="bg-white">
      <Frame>
        {/* Section heading */}
        <div className="text-center pt-6 md:pt-10">
          <div className="font-damion text-[35px] leading-[48px] text-[#D3D3D3]">
            Experts Team
          </div>
          <h2 className="mt-1 text-[40px] leading-[47px] font-semibold text-black">
            Team Perfection At It’s Finest
          </h2>
        </div>

        {/* Cards */}
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((m) => (
            <li key={m.name}>
              <TeamCard {...m} />
            </li>
          ))}
        </ul>
      </Frame>
    </section>
  );
}

function TeamCard({ name, role, img, video }: Member) {
  return (
    <article className="rounded-[21px] bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,.15)] ring-1 ring-black/5">
      {/* Avatar with gradient ring and play */}
      <div className="relative mx-auto grid place-items-center">
        {/* outer white disc (matches the Figma double ring look) */}
        <div className="grid place-items-center rounded-full bg-white p-4 shadow-[0_1px_7px_rgba(0,0,0,.25)]">
          {/* gradient ring */}
          <div className="rounded-full bg-gradient-to-b from-[#00E7F0] to-[#0033A0] p-[2px]">
            {/* image */}
            <div className="relative h-[174px] w-[174px] overflow-hidden rounded-full border-2 border-white">
              <Image
                src={img}
                alt={name}
                fill
                sizes="174px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* play button */}
        {video && (
          <Link
            href={video}
            aria-label={`Play intro video of ${name}`}
            className="absolute right-6 top-3 inline-grid h-[41px] w-[41px] place-items-center rounded-full bg-black text-white shadow-md"
          >
            <Play className="h-5 w-5 fill-white" />
          </Link>
        )}
      </div>

      {/* Name + Role */}
      <div className="mt-6 text-center">
        <h3 className="text-[20px] leading-[24px] font-semibold text-black">
          {name}
        </h3>
        <p className="mt-1 text-[15px] leading-[18px] text-[#515151]">{role}</p>
      </div>
    </article>
  );
}

/** shared container to keep 1440 → 1260 content with ~90px desktop gutter */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1260px] px-6 md:px-10 xl:px-[90px]">
      {children}
    </div>
  );
}
