'use client';

import Image from 'next/image';

export default function ERPIntro() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 
              className="text-[40px] leading-[52px] mb-6" 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                maxWidth: '620px'
              }}
            >
              AI-Driven ERP Solutions | Custom ERP Development & Intelligent Integration
            </h2>
            <p 
              className="text-[20px] leading-[24px] text-black" 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                maxWidth: '586px'
              }}
            >
              Empower your business with AI-powered ERP systems tailored for efficiency, 
              scalability, and predictive insight. At CodSphere, we offer full-cycle ERP 
              system development, seamless AI & third-party integrations, and ongoing 
              optimisation, just like top-tier global players, but customised for your 
              workflows and growth. Whether you're building from scratch or enhancing 
              an existing ERP, our enterprise-grade solutions unlock automation, analytics, 
              and agility across finance, HR, inventory, and supply chain.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="w-[621px] h-[408px] rounded-[34px] overflow-hidden">
              {/* Replace 'your-image.jpg' with your actual image file name */}
              <Image 
                src="/images/ERP/PNG/ERP section.png" 
                alt="ERP Solutions"
                width={621}
                height={408}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}