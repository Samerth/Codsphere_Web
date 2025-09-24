"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Arman Joshi",
    role: "CEO, TechStartup Inc.",
    content: "CodSphere's campaigns generated 3x more leads and doubled our ad conversions ROI. Their strategy worked.",
    avatar: "/images/digital-marketing/PNG/testimonial (Aman Joshi).png",
  },
  {
    id: 2,
    name: "Lisa Tran",
    role: "Marketing Director, E-comm Plus",
    content: "We had no online presence before. In just 3 months, we were ranking on Google and converting website traffic.",
    avatar: "/images/digital-marketing/PNG/testimonial (LisaTran).png",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-12 md:py-16 lg:py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[65px]">
        <h2 
          className="text-center mb-8 md:mb-12 lg:mb-[72px] text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px]"
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 415
          }}
        >
          Client Testimonials
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 lg:gap-[135px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-[#F7F6F5] rounded-[15px] w-full max-w-[514px] mx-auto lg:mx-0"
            >
              {/* Content */}
              <div className="p-6 md:p-7 lg:p-[29px] pb-6 md:pb-7 lg:pb-[32px]">
                {/* Author info with avatar */}
                <div className="flex items-start gap-3 md:gap-4 lg:gap-[15px] mb-4 md:mb-5 lg:mb-[21px]">
                  {/* Avatar */}
                  <div 
                    className="flex-shrink-0 rounded-full overflow-hidden w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80.8px] lg:h-[81.72px] bg-[#D9D9D9]"
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={81}
                      height={82}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name and role */}
                  <div className="pt-2 md:pt-2 lg:pt-[12px]">
                    <h4 
                      className="text-[20px] md:text-[22px] lg:text-[25px] leading-[26px] md:leading-[30px] lg:leading-[36px]"
                      style={{ 
                        fontFamily: 'Sequel Sans',
                        fontWeight: 405,
                        color: '#000000'
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p 
                      className="text-[14px] md:text-[14px] lg:text-[15px] leading-[18px] md:leading-[19px] lg:leading-[21px]"
                      style={{ 
                        fontFamily: 'Sequel Sans',
                        fontWeight: 405,
                        color: '#479FD1'
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Testimonial text */}
                <p 
                  className="pl-0 md:pl-8 lg:pl-[47px] text-[16px] md:text-[17px] lg:text-[18px] leading-[22px] md:leading-[24px] lg:leading-[26px]"
                  style={{ 
                    fontFamily: 'Sequel Sans',
                    fontWeight: 405,
                    color: '#515151'
                  }}
                >
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}