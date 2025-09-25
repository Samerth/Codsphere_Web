// components/services/digital-marketing/TransformPresence.tsx
"use client";

import Image from "next/image";

export default function TransformPresence() {
  return (
    <section className="py-12 md:py-16 lg:py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[65px]">
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-[19px]">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-[620px] lg:flex-shrink-0 order-2 lg:order-1">
            <h2 
              className="mb-3 md:mb-4 lg:mb-[15px] text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                color: '#000000'
              }}
            >
              Transform Your Online Presence{" "}
              <span className="block lg:inline">with CodSphere</span>
            </h2>
            <p 
              className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                color: '#000000'
              }}
            >
              At CodSphere, we help businesses grow through intelligent and 
              impactful digital marketing strategies. Whether you&apos;re a startup, a 
              scaleup, or an enterprise, our data-driven, AI-enhanced digital marketing 
              customers and your website into a revenue-generating machine.
            </p>
          </div>
          
          {/* Image Container - Right Side */}
          <div className="relative w-full lg:flex-shrink-0 order-1 lg:order-2">
            <div 
              className="relative overflow-hidden h-[250px] md:h-[350px] lg:h-[408px] w-full lg:w-[621px] rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]"
            >
              <Image
                src="/images/digital-marketing/PNG/transform your online presence.png"
                alt="Digital marketing professional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}