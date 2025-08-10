import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-56 w-full sm:h-72">
        <Image
          src="/images/services/hero-bg.jpg"
          alt="Our services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl items-end px-6 pb-6">
          <div>
            <p className="text-white/85">Our services</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Custom Tech Solutions That Scale With You
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/80">
              We build adaptive CRM, ERP, billing and marketing systems that drive growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
