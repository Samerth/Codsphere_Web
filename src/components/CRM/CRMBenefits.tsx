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
      <div className="mx-auto max-w-[1260px] px-6 md:px-10 xl:px-[90px] py-12 md:py-16">
        
        {/* Grid: 688px infographic + 581px text */}
        <div className="grid gap-12 lg:grid-cols-[688px_581px] items-center">
          
          {/* LEFT - Infographic Image (688x491.59px) */}
          <figure className="relative w-full max-w-[688px] h-[492px]">
            <Image
              src="/images/crm/benefits-infographic.png"
              alt="CRM Benefits Infographic"
              fill
              className="object-contain opacity-80"
              sizes="(max-width: 1024px) 100vw, 688px"
            />
          </figure>

          {/* RIGHT - Benefits List (581px width) */}
          <div className="max-w-[581px]">
            {/* Title - Figma: 474x104px, 40px font, 415 weight */}
            <h2 
              id="crm-benefits"
              className="text-[40px] leading-[52px] font-[415] text-black mb-8 max-w-[474px]"
              style={{ fontFamily: 'Sequel Sans' }}
            >
              Benefits of Using Our CRM Solutions
            </h2>

            {/* Benefits List - 20px font, 415 weight, #3D3D3D color */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Checkmark */}
                  <span className="text-[#608BF3] text-xl mt-0.5">✓</span>
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