// components/services/CRM/WhyChooseCRM.tsx
import Image from "next/image";

export default function WhyChooseCRM() {
  return (
    <section aria-labelledby="why-choose-crm" className="bg-white relative">
      <div className="mx-auto max-w-[1440px] px-[90px] py-16">
        {/* Grid with consistent spacing */}
        <div className="flex gap-[60px] items-start">
          
          {/* LEFT - Text Content (620px width) */}
          <div className="w-[620px] flex-shrink-0">
            {/* Title */}
            <h2 
              id="why-choose-crm"
              className="text-[40px] leading-[129.61%] font-[415] text-black mb-[15px] w-[620px]"
              style={{ fontFamily: 'Sequel Sans', fontWeight: 415 }}
            >
              Why Choose CodSphere for CRM Development?
            </h2>

            {/* Body text */}
            <div 
              className="text-[20px] leading-[24px] font-[400] text-black w-[586px]"
              style={{ fontFamily: 'Sequel Sans', fontWeight: 400 }}
            >
              <p className="mb-4">
                At CodSphere, we build intelligent, modular, and scalable CRM systems that help 
                businesses stay connected with customers, streamline sales operations, and automate 
                critical processes. Our solutions are flexible, tailored to your workflows, and 
                seamlessly integrate with third-party tools.
              </p>
              <p className="mb-4">
                From open-source CRM platforms to fully custom-built solutions, we empower 
                organisations to move beyond generic software limitations. Whether you're in retail, 
                SaaS, education, or logistics, we tailor each CRM to your real-world use case.
              </p>
              <p className="font-[415] mb-4" style={{ fontWeight: 415 }}>
                Trusted by Industry Leaders
              </p>
              <p>
                We've served businesses across Canada and globally, delivering CRM systems that 
                improve decision-making, accelerate sales cycles, and elevate customer satisfaction.
              </p>
            </div>
          </div>

          {/* RIGHT - Image (621x408px) */}
          <figure className="relative w-[621px] h-[408px] overflow-hidden rounded-[34px] bg-[#D9D9D9] flex-shrink-0">
            <Image
              src="/images/CRM Page/Png/Why Choose CodSphere for CRM Development.png"
              alt="CRM Development Solutions"
              fill
              className="object-cover"
              sizes="621px"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}