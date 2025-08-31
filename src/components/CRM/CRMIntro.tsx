// components/services/CRM/CRMIntro.tsx
export default function CRMIntro() {
  return (
    <section aria-labelledby="crm-intro" className="bg-white relative">
      <div className="max-w-[1440px] mx-auto px-[90px] py-[60px]">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h2 
            id="crm-intro"
            className="text-center text-[40px] leading-[129.61%] font-[415] text-black w-[643px]"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Custom CRM Development Services
          </h2>

          {/* Subtitle - positioned 62px below title (523px - 461px from CSS) */}
          <p 
            className="text-center text-[20px] leading-[24px] font-[405] text-black mt-[10px] w-[700px]"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Crafted CRM solutions tailored for startups, enterprises, and eCommerce platforms.
          </p>
        </div>
      </div>
    </section>
  );
} 