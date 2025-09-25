// components/services/CRM/CRMTestimonials.tsx
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  imageUrl: string;
}

export default function CRMTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Lynda P.",
      role: "Operations Head",
      company: "ConnectCall Services",
      testimonial: "CodSphere helped us transition from spreadsheets to a robust, centralised CRM. Our sales flow is 10x smoother.",
      imageUrl: "/images/CRM Page/Jpeg/Ellipse23.svg"
    },
    {
      id: 2,
      name: "Josh M.",
      role: "SaaS Founder",
      company: "Vancouver",
      testimonial: "We integrated HubSpot into our backend ERP through CodSphere's CRM expertise. Everything connects perfectly now.",
      imageUrl: "/images/CRM Page/Jpeg/Ellipse24.svg"
    }
  ];

  return (
    <section aria-labelledby="client-testimonials" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px] py-12 md:py-16 lg:py-[80px]">
        
        {/* Title */}
        <h2 
          id="client-testimonials"
          className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-[415] text-black text-center max-w-[331px] mx-auto mb-8 md:mb-12 lg:mb-[60px]"
          style={{ fontFamily: 'Sequel Sans' }}
        >
          Client Testimonials
        </h2>

        {/* Testimonials Grid - responsive: stack on mobile */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 lg:gap-[60px]">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-[#F7F6F5] rounded-[15px] p-6 md:p-8 lg:p-[30px_40px] w-full max-w-[514px] mx-auto lg:mx-0"
            >
              <div className="flex items-start gap-4 lg:gap-[20px]">
                {/* Profile Image */}
                <div 
                  className="relative rounded-full overflow-hidden bg-[#D9D9D9] flex-shrink-0 w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
                >
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Name */}
                  <h3 
                    className="text-[20px] md:text-[22px] lg:text-[25px] leading-[24px] md:leading-[26px] lg:leading-[30px] font-[405] text-black"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {testimonial.name}
                  </h3>
                  
                  {/* Role & Company */}
                  <p 
                    className="text-[14px] md:text-[14px] lg:text-[15px] leading-[18px] md:leading-[18px] lg:leading-[20px] font-[405] text-[#479FD1] mt-1 lg:mt-[5px]"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p 
                className="text-[16px] md:text-[17px] lg:text-[18px] leading-[22px] md:leading-[24px] lg:leading-[26px] font-[405] text-[#515151] mt-4 lg:mt-[20px]"
                style={{ fontFamily: 'Sequel Sans' }}
              >
                &quot;{testimonial.testimonial}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}