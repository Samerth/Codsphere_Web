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
    <section className="py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <h2 
          className="text-center mb-[72px]"
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 415,
            fontSize: '40px',
            lineHeight: '52px'
          }}
        >
          Client Testimonials
        </h2>
        
        <div className="flex justify-center gap-[135px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative"
              style={{
                width: '514px',
                height: '225px',
                backgroundColor: '#F7F6F5',
                borderRadius: '15px'
              }}
            >
              {/* Content */}
              <div className="p-[29px] pb-[32px]">
                {/* Author info with avatar */}
                <div className="flex items-start gap-[15px] mb-[21px]">
                  {/* Avatar */}
                  <div 
                    className="flex-shrink-0 rounded-full overflow-hidden"
                    style={{
                      width: '80.8px',
                      height: '81.72px',
                      backgroundColor: '#D9D9D9'
                    }}
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
                  <div className="pt-[12px]">
                    <h4 
                      style={{ 
                        fontFamily: 'Sequel Sans',
                        fontWeight: 405,
                        fontSize: '25px',
                        lineHeight: '36px',
                        color: '#000000'
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p 
                      style={{ 
                        fontFamily: 'Sequel Sans',
                        fontWeight: 405,
                        fontSize: '15px',
                        lineHeight: '21px',
                        color: '#479FD1'
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Testimonial text */}
                <p 
                  style={{ 
                    fontFamily: 'Sequel Sans',
                    fontWeight: 405,
                    fontSize: '18px',
                    lineHeight: '26px',
                    color: '#515151',
                    paddingLeft: '47px'
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