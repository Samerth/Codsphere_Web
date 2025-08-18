"use client";

import Image from "next/image";

type Testimonial = {
  name: string;
  body: string;
  avatar: string; // /public path
  highlight?: boolean;
};

const leftCol: Testimonial[] = [
  {
    name: "Annie",
    avatar: "/images/home/Review Section  (Annie).png",
    body:
      "CodSphere helped us build a custom CRM tailored to our sales pipeline. We now close deals faster, and our team finally works in sync",
  },
  {
    name: "Guerra",
    avatar: "/images/home/Review Section  (Guerra).png",
    body:
      "The CodSphere team automated our client onboarding with precision. What used to take hours is now done in minutes. Highly recommend for startups scaling fast.",
  },
];

const midCol: Testimonial[] = [
  {
    name: "Martine",
    avatar: "/images/home/Review Section  (Martine).png",
    body:
      "From UI to backend, their ERP solution streamlined our operations. Inventory, HR, and billing are now managed under one dashboard — a total game-changer!",
  },
  {
    name: "Lee",
    avatar: "/images/home/Review Section  (Lee).png",
    body:
      "We hired CodSphere for a marketing strategy, but they went beyond — building funnels, setting up CRM triggers, and improving conversions by 38%.",
  },
  {
    name: "Bella",
    avatar: "/images/home/Review Section  (Bella).png",
    body:
      "Their team understood our vision from day one. The custom dashboards and workflow tools they built made scaling much smoother.",
  },
];

const rightCol: Testimonial[] = [
  {
    name: "Johnson",
    avatar: "/images/home/Review Section  (Johnson).png",
    body:
      "We were looking for a smart invoicing system, and CodSphere delivered a beautifully designed tool that cut our billing time in half.",
  },
  {
    name: "Luke",
    avatar: "/images/home/Review Section  (Luke).png",
    body:
      "CodSphere built a backend system that connects our ecommerce, CRM, and support. Everything finally works together — no more scattered apps.",
  },
];

export default function Voices() {
  return (
    <section className="bg-white">
      <Frame>
        {/* Headings */}
        <div className="text-center pt-8 md:pt-12">
          <div className="font-damion text-[35px] leading-[45px] text-[#D3D3D3]">
            Voices
          </div>
          <h2 className="mt-1 text-[40px] leading-[52px] font-semibold text-black">
            Trusted by thousands of forward thinkers across the globe
          </h2>
          <p className="mx-auto mt-2 max-w-[600px] text-[15px] leading-[19px] text-black">
            We’ve received endless love and recognition from founders and entrepreneurs who’ve
            entrusted us with their most precious thoughts and ideas.
          </p>
        </div>

        {/* 3-column layout with aligned rows */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* Left column (first = tall) */}
          <div className="space-y-5">
            {leftCol.map((t, i) => (
              <Card key={t.name} {...t} size={i === 0 ? "tall" : "md"} />
            ))}
          </div>

          {/* Middle column (first = tall & highlighted) */}
          <div className="space-y-5">
            {midCol.map((t, i) => (
              <Card key={t.name} {...t} size={i === 0 ? "tall" : "md"} />
            ))}
          </div>

          {/* Right column (first = tall) */}
          <div className="space-y-5">
            {rightCol.map((t, i) => (
              <Card key={t.name} {...t} size={i === 0 ? "tall" : "md"} />
            ))}
          </div>
        </div>
      </Frame>
    </section>
  );
}

function Card({
  name,
  avatar,
  body,
  highlight,
  size = "md",
}: Testimonial & { size?: "md" | "tall" }) {
  const isBlue = !!highlight;

  // Fixed heights keep rows aligned across columns
  const heightClass = size === "tall" ? "h-[266px]" : "h-[230px]";

  return (
    <article
      className={[
        "rounded-[15px] p-5 md:p-6 overflow-hidden",
        "shadow-[0_4px_12px_rgba(0,0,0,0.09)] ring-1 ring-black/5",
        isBlue ? "bg-[#608BF3] text-white" : "bg-[#F7F6F5] text-black",
        heightClass,
      ].join(" ")}
    >
      <header className="flex items-center gap-3">
        <div className="relative h-[54px] w-[54px] overflow-hidden rounded-full">
          <Image src={avatar} alt={name} fill className="object-cover" sizes="54px" />
        </div>
        <h3
          className={[
            "text-[25px] leading-9 font-medium",
            isBlue ? "text-white" : "text-black",
          ].join(" ")}
        >
          {name}
        </h3>
      </header>

      <p
        className={[
          "mt-3 text-[18px] leading-[26px]",
          isBlue ? "text-white" : "text-[#515151]",
        ].join(" ")}
      >
        {body}
      </p>
    </article>
  );
}

/** shared container to keep 1440 → 1260 content width with ~90px gutter */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1260px] px-6 md:px-10 xl:px-[90px]">{children}</div>
  );
}
