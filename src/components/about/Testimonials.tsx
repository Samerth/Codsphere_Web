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
    <section id="testimonials" className="bg-white py-8 md:py-10 lg:py-12">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Heading - Responsive */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[46px] lg:leading-[52px] font-medium text-black font-sequel max-w-full lg:max-w-[633px] mx-auto px-2">
            Client Testimonials
          </h1>
        </div>

        {/* Grid Layout - Responsive 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={testimonial.name ? "block" : "hidden lg:block"}>
              {testimonial.name ? (
                <TestimonialCard {...testimonial} />
              ) : (
                <div className="min-h-[180px] md:min-h-[200px] lg:min-h-[220px]" />
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
        rounded-[12px] md:rounded-[14px] lg:rounded-[15px] 
        p-4 md:p-5 lg:p-6 
        min-h-[180px] md:min-h-[200px] lg:min-h-[220px]
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
      {/* Header with Avatar and Name - Responsive */}
      <header className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
        <div className="relative h-[44px] w-[44px] md:h-[50px] md:w-[50px] lg:h-[54px] lg:w-[54px] rounded-full overflow-hidden bg-[#D9D9D9] flex-shrink-0">
          {!imageError ? (
            <Image 
              src={avatar} 
              alt={name} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 44px, (max-width: 1024px) 50px, 54px"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#D9D9D9]" />
          )}
        </div>
        <h3 className={`
          text-[20px] md:text-[22px] lg:text-[25px] 
          leading-[26px] md:leading-[30px] lg:leading-[36px] 
          font-normal font-sequel
          transition-colors duration-300
          ${isHovered ? "text-white" : "text-black"}
        `}>
          {name}
        </h3>
      </header>

      {/* Testimonial Body - Responsive */}
      <p className={`
        text-[14px] md:text-[16px] lg:text-[18px] 
        leading-[20px] md:leading-[23px] lg:leading-[26px] 
        font-normal font-sequel flex-grow
        transition-colors duration-300
        ${isHovered ? "text-white" : "text-[#515151]"}
      `}>
        {body}
      </p>
    </article>
  );
}