"use client";

import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  name: string;
  body: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Annie",
    avatar: "/images/home/Review Section  (Annie).png",
    body: "CodSphere helped us build a custom CRM tailored to our sales pipeline. We now close deals faster, and our team finally works in sync",
  },
  {
    name: "Martine",
    avatar: "/images/home/Review Section  (Martine).png",
    body: "From UI to backend, their ERP solution streamlined our operations. Inventory, HR, and billing are now managed under one dashboard — a total game-changer!",
  },
  {
    name: "Johnson",
    avatar: "/images/home/Review Section  (Johnson).png",
    body: "We were looking for a smart invoicing system, and CodSphere delivered a beautifully designed tool that cut our billing time in half.",
  },
  {
    name: "Guerra",
    avatar: "/images/home/Review Section  (Guerra).png",
    body: "The CodSphere team automated our client onboarding with precision. What used to take hours is now done in minutes. Highly recommend for startups scaling fast.",
  },
  {
    name: "Lee",
    avatar: "/images/home/Review Section  (Lee).png",
    body: "We hired CodSphere for a marketing strategy, but they went beyond — building funnels, setting up CRM triggers, and improving conversions by 38%.",
  },
  {
    name: "Luke",
    avatar: "/images/home/Review Section  (Luke).png",
    body: "CodSphere built a backend system that connects our ecommerce, CRM, and support. Everything finally works together — no more scattered apps.",
  },
  {
    name: "",
    avatar: "",
    body: "",
  },
  {
    name: "Bella",
    avatar: "/images/home/Review Section  (Bella).png",
    body: "Their team understood our vision from day one. The custom dashboards and workflow tools they built made scaling much smoother.",
  },
  {
    name: "",
    avatar: "",
    body: "",
  },
];

export default function Voices() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Headings */}
        <div className="text-center mb-12">
          <div className="font-damion text-[35px] leading-[45px] text-[#D3D3D3] mb-0">
            Voices
          </div>
          <h2 className="text-[40px] leading-[52px] font-medium text-black font-sequel max-w-[633px] mx-auto">
            Trusted by thousands of forward thinkers across the globe
          </h2>
          <p className="mx-auto mt-2 max-w-[493px] text-[15px] leading-[19px] text-black font-sequel font-normal">
            We've received endless love and recognition from founders and entrepreneurs who've
            entrusted us with their most precious thoughts and ideas.
          </p>
        </div>

        {/* Grid Layout - 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              {testimonial.name ? (
                <TestimonialCard {...testimonial} />
              ) : (
                <div className="min-h-[220px]" /> // Empty spacer for alignment
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, avatar, body }: Testimonial) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`
        rounded-[15px] p-6 min-h-[220px]
        transition-all duration-300 cursor-pointer
        ${isHovered 
          ? "bg-[#608BF3] text-white transform -translate-y-1" 
          : "bg-[#F7F6F5] text-black"
        }
        flex flex-col
      `}
      style={{
        boxShadow: isHovered 
          ? "0px 8px 20px rgba(96, 139, 243, 0.25)" 
          : "0px 4px 12px rgba(0, 0, 0, 0.09)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Avatar and Name */}
      <header className="flex items-center gap-3 mb-4">
        <div className="relative h-[54px] w-[54px] rounded-full overflow-hidden bg-[#D9D9D9]">
          {!imageError ? (
            <Image 
              src={avatar} 
              alt={name} 
              fill 
              className="object-cover" 
              sizes="54px"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#D9D9D9]" />
          )}
        </div>
        <h3 className={`
          text-[25px] leading-[36px] font-normal font-sequel
          transition-colors duration-300
          ${isHovered ? "text-white" : "text-black"}
        `}>
          {name}
        </h3>
      </header>

      {/* Testimonial Body */}
      <p className={`
        text-[18px] leading-[26px] font-normal font-sequel flex-grow
        transition-colors duration-300
        ${isHovered ? "text-white" : "text-[#515151]"}
      `}>
        {body}
      </p>
    </article>
  );
}