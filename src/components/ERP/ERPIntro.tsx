'use client';

import Image from 'next/image';

export default function ERPIntro() {
  return (
    <section className="py-12 md:py-16 lg:py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[65px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 
              className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] mb-4 md:mb-5 lg:mb-6" 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415
              }}
            >
              AI-Driven ERP Solutions | Custom ERP Development & Intelligent Integration
            </h2>
            <p 
              className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-black" 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400
              }}
            >
              Empower your business with AI-powered ERP systems tailored for efficiency, 
              scalability, and predictive insight. At CodSphere, we offer full-cycle ERP 
              system development, seamless AI & third-party integrations, and ongoing 
              optimisation, just like top-tier global players, but customised for your 
              workflows and growth. Whether you&apos;re building from scratch or enhancing 
              an existing ERP, our enterprise-grade solutions unlock automation, analytics, 
              and agility across finance, HR, inventory, and supply chain.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="w-full h-[250px] md:h-[350px] lg:h-[408px] rounded-[20px] md:rounded-[28px] lg:rounded-[34px] overflow-hidden">
              <Image 
                src="/images/ERP/PNG/ERP section.png" 
                alt="ERP Solutions"
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