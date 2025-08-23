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
      imageUrl: "/images/crm/testimonials/lynda.jpg"
    },
    {
      id: 2,
      name: "Josh M.",
      role: "SaaS Founder",
      company: "Vancouver",
      testimonial: "We integrated HubSpot into our backend ERP through CodSphere's CRM expertise. Everything connects perfectly now.",
      imageUrl: "/images/crm/testimonials/josh.jpg"
    }
  ];

  return (
    <section aria-labelledby="client-testimonials" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-[138px] py-16 md:py-20">
        
        {/* Title - Figma: 331x52px, 40px font, 415 weight */}
        <h2 
          id="client-testimonials"
          className="text-[40px] leading-[52px] font-[415] text-black text-center mb-[72px] max-w-[331px] mx-auto"
          style={{ fontFamily: 'Sequel Sans' }}
        >
          Client Testimonials
        </h2>

        {/* Testimonials Grid - Two cards with 135px gap */}
        <div className="flex justify-center gap-[135px]">
          
          {/* First Testimonial Card - 514x225px */}
          <div 
            className="bg-[#F7F6F5] rounded-[15px] p-[29px_47px]"
            style={{
              width: '514px',
              height: '225px'
            }}
          >
            <div className="flex items-start gap-[15px]">
              {/* Profile Image - 80.8x81.72px */}
              <div 
                className="relative rounded-full overflow-hidden bg-[#D9D9D9] flex-shrink-0"
                style={{
                  width: '80.8px',
                  height: '81.72px'
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
                {/* Name - 25px font, 405 weight */}
                <h3 
                  className="text-[25px] leading-[36px] font-[405] text-black"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {testimonials[0].name}
                </h3>
                
                {/* Role & Company - 15px font, 405 weight, #479FD1 */}
                <p 
                  className="text-[15px] leading-[21px] font-[405] text-[#479FD1]"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {testimonials[0].role}, {testimonials[0].company}
                </p>
              </div>
            </div>
            
            {/* Testimonial Text - 18px font, 405 weight, #515151 */}
            <p 
              className="text-[18px] leading-[26px] font-[405] text-[#515151] mt-[21px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                maxWidth: '421px'
              }}
            >
              "{testimonials[0].testimonial}"
            </p>
          </div>

          {/* Second Testimonial Card - 514x225px */}
          <div 
            className="bg-[#F7F6F5] rounded-[15px] p-[29px_63px]"
            style={{
              width: '514px',
              height: '225px'
            }}
          >
            <div className="flex items-start gap-[15px]">
              {/* Profile Image - 80.8x81.72px */}
              <div 
                className="relative rounded-full overflow-hidden bg-[#D9D9D9] flex-shrink-0"
                style={{
                  width: '80.8px',
                  height: '81.72px'
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
                {/* Name - 25px font, 405 weight */}
                <h3 
                  className="text-[25px] leading-[36px] font-[405] text-black"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {testimonials[1].name}
                </h3>
                
                {/* Role & Company - 15px font, 405 weight, #479FD1 */}
                <p 
                  className="text-[15px] leading-[21px] font-[405] text-[#479FD1]"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {testimonials[1].role}, {testimonials[1].company}
                </p>
              </div>
            </div>
            
            {/* Testimonial Text - 18px font, 405 weight, #515151 */}
            <p 
              className="text-[18px] leading-[26px] font-[405] text-[#515151] mt-[21px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                maxWidth: '388px'
              }}
            >
              "{testimonials[1].testimonial}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}