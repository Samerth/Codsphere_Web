// components/services/web-mobile/ClientTestimonials.tsx
"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ali Mustafa",
    role: "Product Manager, HealthEase",
    content: "They delivered our iOS & Android apps ahead of schedule. The UI is beautiful and the performance is flawless.",
    avatar: "/images/web-mobile/JPEG/Mask group.png"
  },
  {
    id: 2,
    name: "Monica Jain",
    role: "Founder, CleverCart",
    content: "CodSphere rebuilt our outdated website into a fast, mobile-friendly platform that doubled our conversions!",
    avatar: "/images/web-mobile/JPEG/Ellipse 23.png"
  }
];

export default function ClientTestimonials() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <h2 
          className="text-3xl md:text-4xl text-center mb-12"
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 415
          }}
        >
          Client Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl p-8"
              style={{ 
                backgroundColor: '#F7F6F5',
                borderRadius: '20px'
              }}
            >
              {/* Author info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 
                    className="text-xl mb-1"
                    style={{ 
                      fontFamily: 'Sequel Sans',
                      fontWeight: 425
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ 
                      color: '#479FD1',
                      fontFamily: 'Sequel Sans',
                      fontWeight: 405
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#515151',
                  fontFamily: 'Sequel Sans',
                  fontWeight: 405,
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}