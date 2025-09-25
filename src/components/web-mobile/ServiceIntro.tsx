// components/services/web-mobile/ServiceIntro.tsx
"use client";

import Image from "next/image";

export default function ServiceIntro() {
  return (
    <section className="py-8 md:py-12 lg:py-[80px] bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[98px] items-center">
          {/* Text Content - Responsive */}
          <div className="max-w-full lg:max-w-[620px]">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] mb-4 md:mb-5 lg:mb-6 font-[415] font-sequel">
              Best Web & Mobile App Development Services For Your Business Needs
            </h2>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[400] font-sequel text-black">
              At CodSphere, we design, develop, and launch high-performance websites 
              and mobile applications tailored to your business goals. Whether you&apos;re 
              starting from scratch or rebuilding an outdated system — we deliver 
              responsive, fast, and secure digital solutions that deliver real results.
            </p>
          </div>
          
          {/* Image - Responsive */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-[621px] h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[34px]">
              <Image
                src="/images/web-mobile/PNG/Best web and mobile app.png"
                alt="Development workspace"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 621px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}