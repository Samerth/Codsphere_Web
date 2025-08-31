// components/services/CRM/WhyChooseCRM.tsx
import Image from "next/image";

export default function WhyChooseCRM() {
  return (
    <section aria-labelledby="why-choose-crm" className="bg-white relative">
      <div className="max-w-[1440px] mx-auto px-[90px] py-16">
        <div className="flex gap-[60px] items-start">
          
          {/* LEFT - Text Content */}
          <div className="flex-shrink-0">
            {/* Title */}
            <h2 
              id="why-choose-crm"
              className="text-[40px] leading-[129.605%] font-[415] text-black w-[620px] mb-[15px]"
              style={{ fontFamily: 'Sequel Sans' }}
            >
              Why Choose CodSphere for CRM Development?
            </h2>

            {/* Body text - single block */}
            <div 
              className="text-[20px] leading-[24px] font-[400] text-black w-[586px]"
              style={{ fontFamily: 'Sequel Sans' }}
            >
              <p>
                At CodSphere, we build intelligent, modular, and scalable CRM systems that help 
                businesses stay connected with customers, streamline sales operations, and automate 
                critical processes. Our solutions are flexible, tailored to your workflows, and 
                seamlessly integrate with third-party tools. From open-source CRM platforms to fully 
                custom-built solutions, we empower organisations to move beyond generic software 
                limitations. Whether you're in retail, SaaS, education, or logistics, we tailor 
                each CRM to your real-world use case.
              </p>
              <p className="text-[25px] font-[415] mt-4 mb-4" style={{ fontFamily: 'Sequel Sans' }}>
                Trusted by Industry Leaders
              </p>
              <p>
                We've served businesses across Canada and globally, delivering CRM systems that 
                improve decision-making, accelerate sales cycles, and elevate customer satisfaction.
              </p>
            </div>
          </div>

          {/* RIGHT - Image */}
          <figure className="relative flex-1 h-[408px] overflow-hidden rounded-[34px] bg-[#D9D9D9]">
            <Image
              src="/images/CRM Page/Png/Why Choose CodSphere for CRM Development.png"
              alt="CRM Development Solutions"
              fill
              className="object-cover"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}