import Image from "next/image";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  kicker: string;
  copy: string[];
  image: string;
  href: string;
  reverse?: boolean; // right/left alternation
};

const services: Service[] = [
  {
    id: "crm",
    title: "Custom CRM Development",
    kicker: "Build Stronger Relationships, Smarter Pipelines",
    copy: [
      "From lead capture to customer retention, our CRM systems are made-to-measure—no off-the-shelf limits.",
      "• Lead & Contact Management",
      "• Sales Automation & Deal Tracking",
      "• Custom Dashboards & Reports",
      "• CRM + Marketing + Support Integrations",
      "• Role-based Permissions & Workflows",
    ],
    image: "/images/services/Png/CRM Development.png",
    href: "/services/crm",
  },
  {
    id: "erp",
    title: "AI-Powered ERP Solutions",
    kicker: "Control Operations Like a Pro—Finance to Fulfillment",
    copy: [
      "We build ERP platforms that unify departments and automate chaos.",
      "• Inventory, HR, Finance, Projects — all in one place",
      "• Real-time reporting with smart insights",
      "• Multi-level access + approval workflows",
      "• Integration-ready (QuickBooks, Zapier, etc.)",
    ],
    image: "/images/services/Png/ERP Solutions.png",
    href: "/services/erp",
    reverse: true,
  },
  {
    id: "invoicing",
    title: "Smart Invoicing & Billing Software",
    kicker: "Automate the Money Stuff. Get Paid Faster.",
    copy: [
      "Stop wasting time on billing and payments. Our invoicing tools are:",
      "• Auto-generated + Recurring Invoices",
      "• Online Payment Gateways (Stripe, Razorpay, etc.)",
      "• Branded invoice templates",
      "• Tax & Currency Support",
      "• Tracking, reminders, & reports",
    ],
    image: "/images/services/Png/invoice billing.png",
    href: "/services/invoicing",
  },
  {
    id: "marketing",
    title: "Digital Marketing Services",
    kicker: "Funnel-First Strategies That Actually Convert",
    copy: [
      "We don’t do “posts.” We build revenue-focused campaigns backed by data and AI.",
      "• SEO (Local + Technical + Content)",
      "• Paid Ads (Google, Meta, LinkedIn, YouTube)",
      "• Email Marketing Automation",
      "• Full-Funnel Landing Pages & Analytics",
      "• AI-powered Reporting & Optimization",
    ],
    image: "/images/services/Png/digital marketing.png",
    href: "/services/marketing",
    reverse: true,
  },
  {
    id: "web",
    title: "Web & Mobile App Development",
    kicker: "Pixel-Perfect Platforms Built for Speed & Scale",
    copy: [
      "We create seamless, high-performance apps for web and mobile.",
      "• Progressive Web Apps (PWA)",
      "• Native & Hybrid Mobile Development",
      "• SaaS App Development, Admin Panels, Dashboards & CMS",
      "• Cross-device Compatibility & Security",
    ],
    image: "/images/services/Png/web & mobile.png",
    href: "/services/web-mobile",
  },
];

export default function CoreServices() {
  return (
    <section className="container mx-auto max-w-[1261px] px-4 pt-[144px] pb-12">
      <header className="mb-6">
        <p className="font-[400] text-[35px] leading-[48px] text-[#DADADA] font-[Damion]">Our Core Services</p>
      </header>

      <div className="space-y-[120px] md:space-y-[140px] lg:space-y-[160px]">
        {services.map((s) => (
          <article
            key={s.id}
            className={`grid items-center gap-12 lg:gap-16 md:grid-cols-2 ${ s.reverse ? "md:[&>*:first-child]:order-2" : "" }`}

          >
            {/* text */}
            <div>
              <h3 className="text-[40px] leading-[1.296] font-[415]">{s.title}</h3>
              <p className="mt-2 text-[28px] leading-[1.296] font-[405]">{s.kicker}</p>
              <div className="mt-3 space-y-2 text-[20px] leading-[24px]">
                {s.copy.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <Link
                href={s.href}
                className="mt-5 inline-flex items-center gap-3 rounded-[25.5px] bg-black px-5 py-[13px] text-white shadow-md"
                aria-label={`View more about ${s.title}`}
              >
                <span className="text-[18px] font-medium">View More</span>
                <span className="grid size-[23px] place-content-center rounded-full bg-white">
                  {/* gradient arrow circle */}
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    className="-rotate-90"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#33FAFD" />
                        <stop offset="1" stopColor="#020D67" />
                      </linearGradient>
                    </defs>
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="url(#g)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* image */}
            <div className="relative h-[408px]">
              <div className="absolute inset-0 rounded-[34px] bg-muted" />
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="rounded-[34px] object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
