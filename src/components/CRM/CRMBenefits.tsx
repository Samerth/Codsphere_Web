// components/services/CRM/CRMBenefits.tsx
import Image from "next/image";

export default function CRMBenefits() {
  const benefits = [
    "Streamline customer interactions from inquiry to onboarding",
    "Eliminate spreadsheet dependency",
    "Reduce lead leakage and missed follow-ups",
    "Track, measure, and forecast revenue accurately",
    "Improve team performance with automation and accountability",
    "Fully compliant with data privacy standards"
  ];

  return (
    <section aria-labelledby="crm-benefits" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[90px] py-[80px]">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-[60px] items-center">
          
          {/* LEFT - Infographic Image */}
          <figure className="relative w-full h-[492px]">
            <Image
              src="/images/CRM Page/Svg/Benefits of Using Our CRM.svg"
              alt="CRM Benefits Infographic"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 688px"
            />
          </figure>

          {/* RIGHT - Benefits List */}
          <div>
            {/* Title */}
            <h2 
              id="crm-benefits"
              className="text-[40px] leading-[52px] font-[415] text-[#000000] mb-[40px]"
              style={{ fontFamily: 'Sequel Sans' }}
            >
              Benefits of Using Our CRM Solutions
            </h2>

            {/* Benefits List */}
            <ul className="space-y-[20px]">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-[15px]">
                  {/* Checkmark */}
                  <div className="flex-shrink-0 mt-[2px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 10L9.5 12L12.5 8" stroke="#608BF3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="#608BF3" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  {/* Benefit text */}
                  <span 
                    className="text-[20px] leading-[24px] font-[415] text-[#3D3D3D]"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}