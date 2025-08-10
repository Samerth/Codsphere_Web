import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-48 w-full sm:h-64">
        <Image
          src="/images/contact/hero-bg.jpg" // add this file in public/images/contact/
          alt="Contact us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl items-end px-6 pb-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Contact us</h2>
        </div>
      </div>
    </section>
  );
}
