// components/services/web-mobile/ServiceIntro.tsx
"use client";

import Image from "next/image";

export default function ServiceIntro() {
  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[98px] items-center">
          {/* Text Content */}
          <div style={{ maxWidth: '620px' }}>
            <h2 
              className="text-[40px] leading-[52px] mb-6"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415
              }}
            >
              Best Web & Mobile App Development Services For Your Business Needs
            </h2>
            <p 
              className="text-[20px] leading-[24px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                color: '#000000'
              }}
            >
              At CodSphere, we design, develop, and launch high-performance websites 
              and mobile applications tailored to your business goals. Whether you're 
              starting from scratch or rebuilding an outdated system — we deliver 
              responsive, fast, and secure digital solutions that deliver real results.
            </p>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-end">
            <div className="relative w-full max-w-[621px] h-[300px] sm:h-[350px] md:h-[408px] overflow-hidden rounded-[20px] md:rounded-[34px]">
              <Image
                src="/images/web-mobile/PNG/Best web and mobile app.png"
                alt="Development workspace"
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