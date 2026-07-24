import Link from "next/link";

const offerings = [
  {
    title: "Products",
    desc: "Sortify for mailroom management, CodChat for website lead capture, and CodCRM for customer relationships.",
    href: "/solutions",
  },
  {
    title: "Custom software",
    desc: "Web, mobile, CRM, ERP, and automation systems built around your operations.",
    href: "/services",
  },
  {
    title: "AI visibility",
    desc: "Find out what ChatGPT, Gemini, and Perplexity say about your business — and improve it.",
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
            Products, custom software, and AI visibility.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Three practical ways to move your business forward.
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
