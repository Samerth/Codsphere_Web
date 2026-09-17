import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Printer, CheckCircle, Truck, FileText, Clock, Users, ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What types of print and sign shops does CodSphere work with?",
    answer: "We work with Canadian print and sign shops that handle custom orders — wide-format printing, vehicle wraps, banners, dimensional signage, architectural graphics, and trade show displays. If every order is different and you're dealing with quotes, file uploads, and approvals, we're built for your workflow.",
  },
  {
    question: "Is CodSphere a replacement for our print MIS software?",
    answer: "No. CodSphere is not a full print MIS or ERP replacement. We focus on intake and order visibility — the gap between how customers buy and how production tracks work. We complement systems like shopVOX, Printavo, or your existing MIS by handling the customer-facing order flow.",
  },
  {
    question: "How does the digital storefront handle custom print quotes?",
    answer: "Customers configure their order with the options that matter to your shop — size, material, quantity, finishes. They upload artwork files with the order (not in separate emails), and you can send quotes they approve online. Everything stays connected from first request to production.",
  },
  {
    question: "Can customers track their print order status?",
    answer: "Yes. Customers get automatic status updates as their order moves through your workflow. This reduces status calls and gives visibility without your team manually sending updates. You control what stages customers see.",
  },
  {
    question: "What does an engagement with CodSphere typically cost?",
    answer: "A digital storefront typically runs CAD $10,000–$25,000 plus $300–$750/month ongoing. Order flow pilots are CAD $7,500–$15,000 plus $1,000–$2,000/month. We start with a diagnostic ($1,500–$2,500) to map your current order flow before recommending scope.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://codsphere.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: "https://codsphere.com/industries",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Print & Sign",
      item: "https://codsphere.com/industries/print-sign",
    },
  ],
};

export const metadata: Metadata = {
  title: "Print & Sign Shop Software — Order Operations for Wide-Format, Wraps & Signage | CodSphere",
  description: "Digital storefronts and order flow systems built for Canadian print shops and sign manufacturers. Manage quotes, file uploads, proofs, and production tracking for wide-format printing, vehicle wraps, banners, and architectural signage.",
  keywords: "print shop software, sign shop management, wide-format printing software, vehicle wrap order system, banner printing workflow, Canadian print shop, sign manufacturing software, custom signage quotes, print order tracking",
  alternates: {
    canonical: "https://codsphere.com/industries/print-sign",
  },
  openGraph: {
    title: "Print & Sign Shop Software — Order Operations | CodSphere",
    description: "Digital storefronts and order flow systems for Canadian print shops. Manage quotes, files, proofs, and production.",
    url: "https://codsphere.com/industries/print-sign",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere Print & Sign Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Print & Sign Shop Software — Order Operations | CodSphere",
    description: "Digital storefronts and order flow systems for Canadian print shops.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
};

const challenges = [
  {
    icon: FileText,
    title: "Every order is different",
    description: "Custom sizes, materials, quantities, finishes. No two jobs are the same, but your intake process tries to treat them like they are.",
  },
  {
    icon: Clock,
    title: "Files arrive separately from orders",
    description: "Email threads with artwork. Dropbox links. USB drives. By the time production starts, the original order is buried somewhere.",
  },
  {
    icon: Users,
    title: "Multiple people touch every job",
    description: "Sales, design, production, finishing, shipping. Each handoff is a chance for something to fall through the cracks.",
  },
  {
    icon: Truck,
    title: "Customers call to ask where their order is",
    description: "You know the job is somewhere in the shop. Finding exactly where takes longer than it should.",
  },
];

const solutions = [
  "Customers configure orders with the options that matter to your shop",
  "Files upload with the order, not in a separate email",
  "Orders flow into a timeline everyone can see",
  "Status updates go to customers automatically",
  "Exceptions surface before customers call",
];

const products = [
  "Wide-format printing",
  "Vehicle wraps",
  "Banners & signage",
  "Dimensional letters",
  "Architectural graphics",
  "Trade show displays",
  "Window graphics",
  "Wall murals",
];

export default function PrintSignPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#33fcfe]/10 border border-[#33fcfe]/20 px-4 py-1.5 text-[#33fcfe] text-sm font-medium mb-6">
              <Printer className="w-4 h-4" />
              Our focus industry
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Print & Sign
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Order operations for Canadian print and sign shops. Digital storefronts and order flow systems 
              built for wide-format printing, vehicle wraps, banners, and sign manufacturing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#010b66] to-[#33fcfe] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Show us your order flow
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products we understand */}
      <section className="py-6 bg-[#f5f5f5] border-b border-black/10">
        <div className="container-wrapper">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-black/50 text-sm">We understand:</span>
            {products.map((product) => (
              <span
                key={product}
                className="text-sm bg-white px-3 py-1 rounded-full border border-black/10 text-black/70"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              We know the challenges
            </h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto">
              Print and sign shops have specific pain points that generic software doesn't solve. 
              We started here because we understand the work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className="bg-[#f5f5f5] rounded-2xl p-6 border border-black/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#33fcfe]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#010b66]" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-black/60">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-black">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                How CodSphere helps print & sign shops
              </h2>
              <p className="text-white/70 text-lg mb-8">
                We build systems that match how print shops actually work — 
                not generic e-commerce or enterprise MIS that you'll fight with.
              </p>
              <ul className="space-y-4">
                {solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#33fcfe] shrink-0 mt-0.5" />
                    <span className="text-white/80">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-semibold mb-4">What we're not</h3>
              <p className="text-white/60 mb-4">
                We're not trying to replace your full print MIS (shopVOX, Printavo, etc). 
                We complement those systems by solving the intake and order visibility problems they don't address well.
              </p>
              <p className="text-white/60">
                If you need job costing, production scheduling, and inventory management — 
                we can connect to those systems. But that's not our core focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects proof */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-4">
              See our work with print & sign shops
            </h2>
            <p className="text-black/60 text-lg mb-8">
              Proof Industries / Great West Graphics is our beachhead print & sign project — 
              currently in UAT with a full digital storefront and order flow integration.
            </p>
            <Link
              href="/projects/great-west-graphics"
              className="inline-flex items-center gap-2 text-[#010b66] font-medium hover:gap-3 transition-all"
            >
              View the Great West Graphics project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-black/5">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-4 text-center">
              Common questions from print & sign shops
            </h2>
            <p className="text-black/60 text-lg mb-10 text-center">
              Answers to what we hear most often from Canadian print and sign businesses.
            </p>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="group bg-[#f5f5f5] rounded-xl border border-black/5 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-black pr-4">{item.question}</h3>
                    <ChevronDown className="w-5 h-5 text-black/40 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-black/70 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Run a print or sign shop?
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-xl mx-auto">
            Show us how orders move through your shop today. We'll show you how they could move through a system built for print.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#010b66] to-[#33fcfe] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Show us your order flow
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
