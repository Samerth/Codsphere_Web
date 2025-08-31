// components/services/digital-marketing/TransformPresence.tsx
"use client";

import Image from "next/image";

export default function TransformPresence() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <div className="flex items-start gap-[19px]">
          {/* Text Content - Left Side */}
          <div 
            className="flex-shrink-0"
            style={{ 
              width: '620px',
              paddingTop: '97px' // Aligns with image positioning
            }}
          >
            <h2 
              className="mb-[15px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                fontSize: '40px',
                lineHeight: '52px',
                color: '#000000'
              }}
            >
              Transform Your Online Presence<br />
              with CodSphere
            </h2>
            <p 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#000000',
                width: '585.82px'
              }}
            >
              At CodSphere, we help businesses grow through intelligent and 
              impactful digital marketing strategies. Whether you're a startup, a 
              scaleup, or an enterprise, our data-driven, AI-enhanced digital marketing 
              customers and your website into a revenue-generating machine.
            </p>
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