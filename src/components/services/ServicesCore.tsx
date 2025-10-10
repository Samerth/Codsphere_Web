"use client";

import Image from "next/image";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  kicker: string;
  copy: string[];
  image: string;
  href: string;
  reverse?: boolean;
};

const services: Service[] = [
  {
    id: "crm",
    title: "Custom CRM Development",
    kicker: "Build Stronger Relationships, Smarter Pipelines",
    copy: [
      "From lead capture to customer retention, our CRM systems are made-to-measure for your process—no off-the-shelf limits, only custom logic and seamless UX.",
      "",
      "• Lead & Contact Management",
      "• Sales Automation & Deal Tracking",
      "• Custom Dashboards & Reports",
      "• CRM + Marketing + Support Integrations",
      "• Role-based Permissions & Workflows",
    ],
    image: "/images/services/crm.png",
    href: "/CRM",
  },
  {
    id: "erp",
    title: "AI-Powered ERP Solutions",
    kicker: "Control Operations Like a Pro—Finance to Fulfillment",
    copy: [
      "We build ERP platforms that unify departments and automate chaos.",
      "",
      "• Inventory, HR, Finance, Projects—all in one place",
      "• Real-time reporting with smart insights",
      "• Multi-level access + approval workflows",
      "• Integration-ready with your stack (QuickBooks, Zapier, etc.)",
    ],
    image: "/images/services/erp.png",
    href: "/ERP",
    reverse: true,
  },
  {
    id: "invoicing",
    title: "Smart Invoicing & Billing Software",
    kicker: "Automate the Money Stuff. Get Paid Faster.",
    copy: [
      "Stop wasting time on billing and payments. Our invoicing tools are:",
      "",
      "• Auto-generated + Recurring Invoices",
      "• Online Payment Gateways Integration (Stripe, Razorpay, etc.)",
      "• Branded invoice templates",
      "• Tax & Currency Support",
      "• Invoice tracking, reminders, & reports",
    ],
    image: "/images/services/invoicing.png",
    href: "/services",
  },
  {
    id: "marketing",
    title: "Digital Marketing Services",
    kicker: "Funnel-First Strategies That Actually Convert",
    copy: [
      'We don\'t do "posts." We build revenue-focused campaigns backed by data and AI.',
      "",
      "• SEO (Local + Technical + Content)",
      "• Paid Ads (Google, Meta, LinkedIn, YouTube)",
      "• Email Marketing Automation",
      "• Full-Funnel Landing Pages & Analytics",
      "• AI-powered Reporting & Optimization",
    ],
    image: "/images/services/marketing.png",
    href: "/digital-marketing",
    reverse: true,
  },
  {
    id: "web",
    title: "Web & Mobile App Development",
    kicker: "Pixel-Perfect Platforms Built for Speed & Scale",
    copy: [
      "We create seamless, high-performance apps for web and mobile.",
      "",
      "• Progressive Web Apps (PWA)",
      "• Native & Hybrid Mobile Development",
      "• SaaS App Development",
      "• Admin Panels, Dashboards & CMS",
      "• Cross-device Compatibility & Security",
    ],
    image: "/images/services/web-mobile.png",
    href: "/web-mobile",
  },
];

export default function ServicesCore() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-[20px] sm:px-[30px] lg:px-[90px] pb-8 sm:pb-14 -mt-4 sm:-mt-7">
        {/* Section header */}
        <div className="">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#D3D3D3]">Our Core Services</p>
        </div>

        {/* Services list */}
        <div className="space-y-4 lg:space-y-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                service.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] font-[415] font-sequel text-black">
                  {service.title}
                </h3>
                <p className="mt-3 md:mt-4 lg:mt-[15px] text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-[405] font-sequel text-black">
                  {service.kicker}
                </p>
                <div className="mt-3 md:mt-4 lg:mt-[15px] text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  {service.copy[0]}

                  <ul className="mt-3 lg:mt-[12px] space-y-1 lg:space-y-[2px]">
                    {service.copy.slice(2).map((line, i) => (
                      <li
                        key={i}
                        className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View More button */}
                <Link
                  href={service.href}
                  className="mt-4 md:mt-5 lg:mt-[20px] inline-flex items-center gap-2 md:gap-3 lg:gap-[10px] h-[44px] md:h-[48px] lg:h-[51px] px-4 md:px-5 lg:px-[18px] rounded-[22px] md:rounded-[24px] lg:rounded-[25.5px] bg-[#0D0D0D] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_16px_rgba(0,0,0,0.25)] transition-shadow"
                >
                  <span className="text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[20px] lg:leading-[21px] font-[405] font-sequel text-white">
                    View More
                  </span>
                  <span className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] lg:w-[23px] lg:h-[23px] rounded-full bg-white flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <defs>
                        <linearGradient
                          id={`arrow-gradient-${service.id}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#33FAFD" />
                          <stop offset="100%" stopColor="#020D67" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M7 1L12 6.5L7 12M1 6.5H12"
                        stroke={`url(#arrow-gradient-${service.id})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Image container - responsive */}
              <div className="w-full lg:w-1/2 h-[250px] md:h-[350px] lg:h-[408px] flex-shrink-0">
                <div className="w-full h-full rounded-[20px] md:rounded-[28px] lg:rounded-[34px] overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-[20px] md:rounded-[28px] lg:rounded-[34px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 622px"
                    priority={index === 0}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
