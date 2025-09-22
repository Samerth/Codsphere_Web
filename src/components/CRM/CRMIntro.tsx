// components/services/CRM/CRMIntro.tsx
export default function CRMIntro() {
  return (
    <section aria-labelledby="crm-intro" className="bg-white relative">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px] py-8 md:py-12 lg:py-[60px]">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h2 
            id="crm-intro"
            className="text-center text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-[415] text-black w-full max-w-[643px]"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Custom CRM Development Services
          </h2>

          {/* Subtitle */}
          <p 
            className="text-center text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[405] text-black mt-3 md:mt-4 lg:mt-[10px] w-full max-w-[700px] px-4 md:px-0"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Crafted CRM solutions tailored for startups, enterprises, and eCommerce platforms.
          </p>
        </div>
      </div>
    </section>
  );
}