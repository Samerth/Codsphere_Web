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
      <div className="max-w-[1440px] mx-auto px-[90px] py-[80px]">
        
        {/* Title */}
        <h2 
          id="client-testimonials"
          className="text-[40px] leading-[52px] font-[415] text-black text-center max-w-[331px] mx-auto mb-[60px]"
          style={{ fontFamily: 'Sequel Sans' }}
        >
          Client Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="flex justify-center gap-[60px]">
          
          {/* First Testimonial Card */}
          <div 
            className="bg-[#F7F6F5] rounded-[15px] p-[30px_40px]"
            style={{
              width: '514px',
              minHeight: '225px'
            }}
          >
            <div className="flex items-start gap-[20px]">
              {/* Profile Image */}
              <div 
                className="relative rounded-full overflow-hidden bg-[#D9D9D9] flex-shrink-0"
                style={{
                  width: '80px',
                  height: '80px'
                }}
              >
                <Image
                  src={testimonials[0].imageUrl}
                  alt={testimonials[0].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Name */}
                <h3 
                  className="text-[25px] leading-[30px] font-[405] text-black"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {testimonials[0].name}
                </h3>
                
                {/* Role & Company */}
                <p 
                  className="text-[15px] leading-[20px] font-[405] text-[#479FD1] mt-[5px]"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {testimonials[0].role}, {testimonials[0].company}
                </p>
              </div>
            </div>
            
            {/* Testimonial Text */}
            <p 
              className="text-[18px] leading-[26px] font-[405] text-[#515151] mt-[20px]"
              style={{ fontFamily: 'Sequel Sans' }}
            >
              "{testimonials[0].testimonial}"
            </p>
          </div>

          {/* Second Testimonial Card */}
          <div 
            className="bg-[#F7F6F5] rounded-[15px] p-[30px_40px]"
            style={{
              width: '514px',
              minHeight: '225px'
            }}
          >
            <div className="flex items-start gap-[20px]">
              {/* Profile Image */}
              <div 
                className="relative rounded-full overflow-hidden bg-[#D9D9D9] flex-shrink-0"
                style={{
                  width: '80px',
                  height: '80px'
                }}
              >
                <Image
                  src={testimonials[1].imageUrl}
                  alt={testimonials[1].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Name */}
                <h3 
                  className="text-[25px] leading-[30px] font-[405] text-black"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {testimonials[1].name}
                </h3>
                
                {/* Role & Company */}
                <p 
                  className="text-[15px] leading-[20px] font-[405] text-[#479FD1] mt-[5px]"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {testimonials[1].role}, {testimonials[1].company}
                </p>
              </div>
            </div>
            
            {/* Testimonial Text */}
            <p 
              className="text-[18px] leading-[26px] font-[405] text-[#515151] mt-[20px]"
              style={{ fontFamily: 'Sequel Sans' }}
            >
              "{testimonials[1].testimonial}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

