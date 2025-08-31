// components/services/web-mobile/ServiceIntro.tsx
"use client";

import Image from "next/image";

export default function ServiceIntro() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[98px] items-center">
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
            <div 
              className="relative overflow-hidden"
              style={{
                width: '621px',
                height: '408px',
                borderRadius: '34px'
              }}
            >
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