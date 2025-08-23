// components/services/CRM/CRMIntro.tsx
export default function CRMIntro() {
  return (
    <section aria-labelledby="crm-intro" className="bg-white relative">
      <div className="mx-auto max-w-[1440px] relative">
        {/* Title - Figma: position absolute at top: 461px, 643x52px centered */}
        <h2 
          id="crm-intro"
          className="text-center text-[40px] leading-[129.61%] font-[415] text-black mx-auto w-[643px] pt-[60px]"
          style={{ fontFamily: 'Sequel Sans', fontWeight: 415 }}
        >
          Custom CRM Development Services
        </h2>

        {/* Subtitle - Figma: position at top: 523px (62px below title), 700x24px centered */}
        <p 
          className="text-center text-[20px] leading-[24px] font-[405] text-black mt-[10px] mx-auto w-[700px]"
          style={{ fontFamily: 'Sequel Sans', fontWeight: 405 }}
        >
          Crafted CRM solutions tailored for startups, enterprises, and eCommerce platforms.
        </p>
      </div>
    </section>
  );
}