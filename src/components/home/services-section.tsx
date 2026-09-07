import Link from "next/link";

const offerings = [
  {
    title: "Sell & manage orders",
    desc: "A storefront your customers buy from and a workbench to quote, track and keep every custom order moving.",
    href: "/solutions",
  },
  {
    title: "Custom builds & extensions",
    desc: "The estimator, portal, supplier connection or production screen your standard stack is missing — built around your order flow.",
    href: "/services",
  },
  {
    title: "Get found by AI-era buyers",
    desc: "See what ChatGPT, Gemini, and Perplexity say about your business — and improve it — as buyers shift from search to asking AI.",
    href: "/ai-visibility",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white bg-dots">
      <div className="container-wrapper py-more">
        <div className="text-center w-5/5 lg:w-4/5 mx-auto mb-10">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">What we do</p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            From first click to finished order.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            We help custom-order businesses sell online and keep every job moving.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {offerings.map((offering) => (
            <Link
              key={offering.title}
              href={offering.href}
              className="rounded-3xl border border-white/15 bg-white/5 p-7 transition-colors hover:bg-white/10"
            >
              <h3 className="text-2xl font-semibold">{offering.title}</h3>
              <p className="mt-4 leading-7 text-white/75">{offering.desc}</p>
              <span className="mt-6 inline-block text-[#33FCFE]">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
