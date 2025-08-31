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
      "We don't do \"posts.\" We build revenue-focused campaigns backed by data and AI.",
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
    <section className="relative bg-white pt-[40px] pb-[80px]">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Section header */}
        <div className="mb-[50px]">
          <p 
            className="text-[35px] leading-[48px] text-[#DADADA] font-[400]"
            style={{ fontFamily: 'Damion, cursive' }}
          >
            Our Core Services
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-[140px]">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`flex items-center gap-[90px] ${
                service.reverse ? "flex-row-reverse" : ""
              }`}
            >
              {/* Text content */}
              <div className="flex-1 max-w-[547px]">
                <h3 className="text-[40px] leading-[52px] font-[415] font-sequel text-black">
                  {service.title}
                </h3>
                <p className="mt-[15px] text-[28px] leading-[36px] font-[405] font-sequel text-black">
                  {service.kicker}
                </p>
                <div className="mt-[15px] text-[20px] leading-[26px] font-[400] font-sequel text-black">
                  {service.copy[0]}
                  
                  <ul className="mt-[12px] space-y-[2px]">
                    {service.copy.slice(2).map((line, i) => (
                      <li key={i} className="text-[20px] leading-[26px] font-[400] font-sequel text-black">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View More button */}
                <Link
                  href={service.href}
                  className="mt-[20px] inline-flex items-center gap-[10px] h-[51px] px-[18px] rounded-[25.5px] bg-[#0D0D0D] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[6px_6px_16px_rgba(0,0,0,0.25)] transition-shadow"
                >
                  <span className="text-[18px] leading-[21px] font-[405] font-sequel text-white">
                    View More
                  </span>
                  <span className="w-[23px] h-[23px] rounded-full bg-white flex items-center justify-center">
                    <svg 
                      width="13" 
                      height="13" 
                      viewBox="0 0 13 13" 
                      fill="none"
                    >
                      <defs>
                        <linearGradient id={`arrow-gradient-${service.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
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

              {/* Image container */}
              <div className="w-[622px] h-[408px] flex-shrink-0">
                <div className="w-full h-full rounded-[34px] overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-[34px]"
                    sizes="622px"
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