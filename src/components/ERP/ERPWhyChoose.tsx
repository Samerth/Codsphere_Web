'use client';

import Image from 'next/image';

export default function ERPWhyChoose() {
  const reasons = [
    "End-to-end ERP + AI developers—no siloed teams",
    "Canada-based quality and transparency, global-level reliability",
    "Flexible AI adoption models (embedded, hybrid, low-code) for lean operations or full custom builds",
    "Agile sprint delivery paired with AI governance and compliance",
    "Competitive pricing without sacrificing enterprise performance"
  ];

  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <div className="grid lg:grid-cols-2 gap-[98px] items-center">
          {/* Left Content */}
          <div style={{ maxWidth: '545px' }}>
            <h2 
              className="text-[40px] leading-[52px] mb-8"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                color: '#000000'
              }}
            >
              Why Choose CodSphere?
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-[34px] h-[34px] mt-1 flex-shrink-0 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10L9 12L13 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p 
                    className="text-[20px] leading-[24px]"
                    style={{ 
                      fontFamily: 'Sequel Sans',
                      fontWeight: 400,
                      color: '#000000'
                    }}
                  >
                    {reason}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Image */}
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
                src="/images/ERP/PNG/why choose codsphere.png"
                alt="ERP Technology"
                fill
                style={{ 
                  objectFit: 'cover'
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}