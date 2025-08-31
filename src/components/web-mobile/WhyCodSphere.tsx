// components/services/web-mobile/WhyCodSphere.tsx
"use client";

import Image from "next/image";

const reasons = [
  "8+ Years of Full-Stack Development Expertise",
  "Agile Sprints & Transparent Project Management",
  "Cloud-Ready & Scalable Architecture",
  "100% Ownership Rights for You",
  "Free Deployment & Post-Launch Support"
];

export default function WhyCodSphere() {
  return (
    <section className="py-[60px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[98px] items-center">
          {/* Text Content */}
          <div style={{ maxWidth: '545px' }}>
            <h2 
              className="text-[40px] leading-[52px] mb-8"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                color: '#000000'
              }}
            >
              Why CodSphere?
            </h2>
            
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-[34px] h-[34px] flex-shrink-0 mt-1 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10L9 12L13 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span 
                    className="text-[20px] leading-[24px]"
                    style={{ 
                      fontFamily: 'Sequel Sans',
                      fontWeight: 400,
                      color: '#000000'
                    }}
                  >
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
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
                src="/images/web-mobile/PNG/why-codsphere.jpg"
                alt="CodSphere team collaboration"
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