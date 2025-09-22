// components/services/CRM/CRMTypes.tsx
import Image from "next/image";

interface CRMType {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function CRMTypes() {
  const crmTypes: CRMType[] = [
    {
      title: "Custom CRM",
      subtitle: "Software",
      description: "Built from scratch, fully tailored to your processes, branding, user roles, and KPIs.",
      image: "/images/CRM Page/Png/Custom CRM Development.png"
    },
    {
      title: "Open-Source CRM",
      subtitle: "Integration", 
      description: "Customize platforms like Odoo, SuiteCRM, or OroCRM with your unique modules.",
      image: "/images/CRM Page/Png/CRM Integration with Existing Systems.png"
    },
    {
      title: "Industry-Specific",
      subtitle: "CRMs",
      description: "CRM for real estate, healthcare, finance, retail, and logistics with niche features.",
      image: "/images/CRM Page/Png/eCommerce CRM.png"
    }
  ];

  return (
    <section aria-labelledby="crm-types" className="bg-[#ECF5F7]">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px] py-12 md:py-16 lg:py-[80px]">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-[60px]">
          {/* Title - responsive sizing for mobile */}
          <h2 
            id="crm-types"
            className="text-[22px] sm:text-[26px] md:text-[34px] lg:text-[40px] leading-[28px] sm:leading-[32px] md:leading-[44px] lg:leading-[52px] font-[415] text-black mx-auto"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Types of CRM Solutions We Offer
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[30px]">
          {crmTypes.map((type, index) => (
            <div 
              key={index}
              className="bg-white rounded-[20px] md:rounded-[24px] lg:rounded-[28px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0px_6px_20px_rgba(0,0,0,0.15)] transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-[200px] md:h-[220px] lg:h-[250px] w-full overflow-hidden">
                <Image
                  src={type.image}
                  alt={`${type.title} ${type.subtitle}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-7 lg:p-8">
                <h3 
                  className="text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-[415] text-black mb-1"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {type.title}
                </h3>
                <h4 
                  className="text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-[415] text-black mb-4 lg:mb-[15px]"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {type.subtitle}
                </h4>
                <p 
                  className="text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[20px] lg:leading-[22px] font-[405] text-[#515151]"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}