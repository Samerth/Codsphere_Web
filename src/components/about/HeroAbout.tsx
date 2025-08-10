import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-64 w-full sm:h-80">
        <Image
          src="/images/about/hero-bg.jpg"
          alt="About Codsphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl items-end px-6 pb-8">
          <div>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">About Us</h1>
            <p className="mt-2 max-w-2xl text-white/80">
              Codsphere is a Vancouver-based consultancy creating modern CRM, ERP and automation systems that scale.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Who We Are</h2>
          <p className="text-muted-foreground">
            We design, build and integrate platforms that streamline operations and unlock growth —
            from smart invoicing tools to analytics dashboards and omnichannel CRM. Our teams blend strategy,
            UX, and engineering to ship outcomes, not just features.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src="/images/about/intro-team.jpg" alt="Our team" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
