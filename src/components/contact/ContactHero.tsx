// components/contact/ContactHero.tsx
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Using full width for hero image, but content respects container */}
      <div className="relative h-[250px] w-full">
        <Image
          src="/images/contact-page/contact-hero-bg.jpg"
          alt="Contact Us page header image"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" /> */}
        {/* Content with consistent container */}
        <div className="absolute inset-0 flex items-end">
          <div className="pb-10">
            <div className="absolute inset-0 flex items-center">
              <div className="container-wrapper">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
