// components/services/digital-marketing/WhyChooseCodSphere.tsx
"use client";

import Image from "next/image";

const reasons = [
  {
    icon: "/images/icons/check-green.svg",
    text: "4+ Years of Experience Across Industries",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Google & Meta Certified Marketing Professionals",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Transparent Monthly Reporting",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Dedicated Account Managers",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Data-Backed Strategy (without the fluff)",
  },
  {
    icon: "/images/icons/check-green.svg",
    text: "Conversion-First Approach",
  },
];

export default function WhyChooseCodSphere() {
  return (
    <section className="pt-[100px] pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <div className="flex items-start justify-between">
          {/* Text Content - Left Side */}
          <div 
            className="flex-shrink-0"
            style={{ 
              width: '595px'
            }}
          >
            <h2 
              className="mb-[24px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                fontSize: '40px',
                lineHeight: '52px',
                color: '#000000',
                width: '516px'
              }}
            >
              Why Choose CodSphere as<br />
              Your Digital Marketing<br />
              Partner?
            </h2>
            
            <ul className="space-y-[20px]" style={{ paddingLeft: '4px', marginTop: '20px' }}>
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-[14px]">
                  {/* Check Icon - Black background */}
                  <div 
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: '30px',
                      height: '30px',
                      background: '#000000',
                      borderRadius: '50%'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path 
                        d="M3 9L7 13L15 5" 
                        stroke="white" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <span 
                    style={{ 
                      fontFamily: 'Sequel Sans',
                      fontWeight: 400,
                      fontSize: '19px',
                      lineHeight: '23px',
                      color: '#000000',
                      maxWidth: '545px',
                      paddingTop: '3px'
                    }}
                  >
                    {reason.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image Container - Right Side */}
          <div className="relative flex-shrink-0">
            <div 
              className="relative overflow-hidden"
              style={{
                width: '621px',
                height: '408px',
                borderRadius: '34px',
                background: '#D9D9D9'
              }}
            >
              <Image
                src="/images/digital-marketing/PNG/Why Choose Us Image.png"
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