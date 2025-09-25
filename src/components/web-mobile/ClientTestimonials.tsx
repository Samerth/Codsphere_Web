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
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] text-center mb-8 md:mb-10 lg:mb-12 font-[415] font-sequel">
          Client Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-8 max-w-full lg:max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-6 md:p-7 lg:p-8 bg-[#F7F6F5]"
            >
              {/* Author info - Responsive */}
              <div className="flex items-center gap-3 md:gap-3.5 lg:gap-4 mb-4 md:mb-5 lg:mb-6">
                <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-20 lg:h-20 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[18px] md:text-[19px] lg:text-xl mb-1 font-[425] font-sequel">
                    {testimonial.name}
                  </h4>
                  <p className="text-[12px] md:text-[13px] lg:text-sm text-[#479FD1] font-[405] font-sequel">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Content - Responsive */}
              <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-[#515151] font-[405] font-sequel">
                &quot;{testimonial.content}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}