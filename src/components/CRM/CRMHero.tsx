// components/services/CRM/CRMHero.tsx
import Image from "next/image";

export default function CRMHero() {
  return (
    <section aria-labelledby="crm-hero" className="relative h-[250px] w-full overflow-hidden">
      {/* Background Image with Overlay - Figma: 1440x250px */}
      <div className="absolute inset-0">
        <Image
          src="/images/CRM Page/Jpeg/Group 243.jpg"
          alt="CRM Development Services Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay: rgba(22, 22, 22, 0.6) */}
        <div className="absolute inset-0 bg-[rgba(22,22,22,0.6)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Title - Figma: 643x47px, Sequel Sans 415, 40px */}
        <h1 
          id="crm-hero"
          className="text-white text-[40px] leading-[47px] font-[415] text-center px-6 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.5)]"
          style={{ fontFamily: 'Sequel Sans' }}
        >
          Custom CRM Development Services
        </h1>
      </div>
    </section>
  );
}