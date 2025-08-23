// components/services/CRM/CRMTypes.tsx
import Image from "next/image";

export default function CRMTypes() {
  const crmTypes = [
    {
      title: "Custom CRM Development",
      description: "Built from scratch, fully tailored to your processes, branding, user roles, and KPIs.",
      image: "/images/CRM Page/Png/Custom CRM Development.png"
    },
    {
      title: "CRM Integration with Existing Systems",
      description: "Already using ERP or invoicing software? We can integrate CRMs like Salesforce, Zoho, or HubSpot into your stack.",
      image: "/images/CRM Page/Png/CRM Integration with Existing Systems.png"
    },
    {
      title: "eCommerce CRM",
      description: "For store owners who want CRM functionality without relying on 3rd-party apps — we build native CRMs inside platforms like Magento, WooCommerce, OpenCart, and Shopify.",
      image: "/images/CRM Page/Png/eCommerce CRM.png"
    }
  ];

  return (
    <section aria-labelledby="crm-types" className="bg-[#F0F1F3]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-[90px] py-12 md:py-16">
        
        {/* Title - Figma: 586x52px centered, 40px font, 415 weight */}
        <div className="text-center mb-12">
          <h2 
            id="crm-types"
            className="text-[40px] leading-[52px] font-[415] text-black mx-auto max-w-[586px]"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Types of CRM Solutions We Offer
          </h2>
        </div>

        {/* Cards Grid - 3 columns, 396x373px cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {crmTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[16px] shadow-[1px_1px_1px_rgba(0,0,0,0.25)] overflow-hidden w-full max-w-[396px] mx-auto"
            >
              {/* Image Container - 374.83x239px with 16px radius */}
              <div className="p-[10.5px] pb-0">
                <figure className="relative w-full h-[239px] rounded-[16px] overflow-hidden bg-[#D9D9D9]">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 375px"
                  />
                </figure>
              </div>

              {/* Content - padding matches Figma positioning */}
              <div className="px-[35px] pb-[30px] pt-[15px]">
                {/* Title - 20px font, 415 weight */}
                <h3 
                  className="text-[20px] leading-[24px] font-[415] text-black mb-2"
                  style={{ fontFamily: 'Sequel Sans' }}
                >
                  {type.title}
                </h3>
                {/* Description - 14px font, 405 weight, max 326-358px width */}
                <p 
                  className="text-[14px] leading-[17px] font-[405] text-black"
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