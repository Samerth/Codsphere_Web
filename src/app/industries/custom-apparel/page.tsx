import type { Metadata } from "next";
import Link from "next/link";
import {
  Shirt,
  CheckCircle,
  FileText,
  RefreshCw,
  Phone,
  Receipt,
} from "lucide-react";
import { ApparelCta } from "@/components/industries/custom-apparel/ApparelCta";
import { ApparelStickyBar } from "@/components/industries/custom-apparel/ApparelStickyBar";
import {
  ApparelBookEmbed,
  ApparelBookFallbackLinks,
} from "@/components/industries/custom-apparel/ApparelBookEmbed";

export const metadata: Metadata = {
  title: "Custom Apparel Shops: Team Stores, Artwork Approval and Order Status | CodSphere",
  description:
    "For Canadian apparel, embroidery and promo shops that sell team, school, corporate and fundraiser stores. Book a free 30-minute order-flow map.",
  alternates: {
    canonical: "https://www.codsphere.com/industries/custom-apparel",
  },
  openGraph: {
    title: "Custom Apparel Shops | CodSphere",
    description:
      "For Canadian apparel, embroidery and promo shops that sell team, school, corporate and fundraiser stores. Book a free 30-minute order-flow map.",
    url: "https://www.codsphere.com/industries/custom-apparel",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere custom apparel order operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Apparel Shops | CodSphere",
    description:
      "For Canadian apparel, embroidery and promo shops that sell team, school, corporate and fundraiser stores. Book a free 30-minute order-flow map.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
  robots: { index: true, follow: true },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.codsphere.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Custom apparel",
      item: "https://www.codsphere.com/industries/custom-apparel",
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Custom Apparel Shops: Team Stores, Artwork Approval and Order Status | CodSphere",
  description:
    "For Canadian apparel, embroidery and promo shops that sell team, school, corporate and fundraiser stores. Book a free 30-minute order-flow map.",
  url: "https://www.codsphere.com/industries/custom-apparel",
};

const qualifiers = [
  {
    title: "Custom work, not shelf stock.",
    body: "Embroidery, screen print, heat press, promo kits and similar made-to-order decoration. Not a fixed catalogue sold off the shelf.",
  },
  {
    title: "A crew, not a one-person shop.",
    body: "Shops of about 5–30 people, where more than one person touches a job before it ships.",
  },
  {
    title: "Team, school, corporate, fundraiser stores.",
    body: "B2B programs where the buyer needs to approve art and follow the order without calling the front desk.",
  },
  {
    title: "British Columbia first.",
    body: "Written for BC shops, including work that invoices or ships to other provinces.",
  },
];

const chips = [
  "Embroidery",
  "Screen print",
  "Heat press",
  "Team stores",
  "School stores",
  "Corporate apparel",
  "Fundraisers",
  "Promo kits",
];

const pains = [
  {
    icon: FileText,
    title: "Artwork sign-off",
    body: "The approved file sits in a thread, a text, or someone’s desktop. Production cannot see which version is current, so the wrong art still gets stitched.",
  },
  {
    icon: RefreshCw,
    title: "Reorders",
    body: "A company wants last year’s polo. The order is easy to say and hard to find. The art, the placement and the size run are not on the job.",
  },
  {
    icon: Phone,
    title: "Where is my order?",
    body: "A coach, a teacher or an office manager calls the front desk. The shop knows the job is underway. Finding exactly where takes longer than it should.",
  },
  {
    icon: Receipt,
    title: "Canadian tax",
    body: "A school order in BC, a corporate order in Ontario, a fundraiser shipping to Alberta. GST, PST and HST change by province, and the invoice is often built by hand. This is a real operational pain. This page does not claim that CodSphere calculates, files, or remits tax, and it does not list supported provinces or rates.",
  },
];

const mapTicks = [
  "How teams and companies buy from you.",
  "Where artwork is approved, and where it stalls.",
  "Where status lives, from quote to pickup.",
];

function StorefrontMock() {
  return (
    <figure className="rounded-2xl bg-white/5 border border-white/10 p-5 text-white">
      <figcaption className="sr-only">
        Illustrative mock of a team-store order with artwork and status
      </figcaption>
      <p className="text-xs uppercase tracking-wide text-white/50 mb-3">Team store order</p>
      <div className="rounded-xl bg-black/40 border border-white/10 divide-y divide-white/10 text-sm">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <span className="text-white/70">Art</span>
          <span className="text-[#33fcfe]">waiting on approval</span>
        </div>
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <span className="text-white/70">Status</span>
          <span className="text-white">in production</span>
        </div>
      </div>
      <ol className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
        {["Quoted", "Approved", "In production", "Ready"].map((step) => (
          <li
            key={step}
            className={`px-2.5 py-1 rounded-full border ${
              step === "In production" ? "border-[#33fcfe]/40 text-[#33fcfe]" : "border-white/15"
            }`}
          >
            {step}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-white/50">illustrative</p>
    </figure>
  );
}

function JobCardMock() {
  return (
    <figure className="rounded-2xl border border-black/10 bg-[#F3F4F6] p-6">
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-xs uppercase tracking-wide text-black/50">Job card</p>
        <p className="text-xs px-2 py-0.5 rounded-full border border-black/10 text-black/60">
          illustrative
        </p>
      </div>
      <h3 className="text-lg font-semibold text-black mb-4">School hoodie run</h3>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start justify-between gap-3 rounded-xl bg-white border border-black/5 px-4 py-3">
          <span className="text-black/60">Art</span>
          <span className="text-black font-medium text-right">waiting on approval</span>
        </li>
        <li className="flex items-start justify-between gap-3 rounded-xl bg-white border border-black/5 px-4 py-3">
          <span className="text-black/60">Status</span>
          <span className="text-black font-medium text-right">in production?</span>
        </li>
        <li className="flex items-start justify-between gap-3 rounded-xl bg-white border border-amber-200 px-4 py-3">
          <span className="text-black/60">Invoice</span>
          <span className="text-black font-medium text-right">tax not on the job</span>
        </li>
      </ul>
    </figure>
  );
}

export default function CustomApparelPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <a
        href="#book"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-xl"
      >
        Skip to booking
      </a>

      <section className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#33fcfe]/10 border border-[#33fcfe]/20 px-4 py-1.5 text-[#33fcfe] text-sm font-medium mb-6">
                <Shirt className="w-4 h-4" aria-hidden />
                Custom apparel & promo
              </div>
              <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Online stores for your team and company orders.
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-4">
                Let your teams and companies order from you online, with artwork approval and a
                status they can see.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                For custom apparel, embroidery and promo shops that sell team, school, corporate
                and fundraiser stores. Built for crews in British Columbia first, and for the
                orders that cross a provincial line.
              </p>
              <ApparelCta
                id="apparel-hero-cta"
                href="#book"
                location="apparel_hero"
                label="Book a free 30-min order-flow map"
              />
              <p className="mt-4">
                <a href="#who" className="text-white/70 text-sm underline-offset-4 hover:underline">
                  See who this is for
                </a>
              </p>
            </div>
            <StorefrontMock />
          </div>
        </div>
      </section>

      <section id="who" className="py-20 bg-white scroll-mt-28">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Who this page is for.</h2>
            <p className="text-black/60 text-xl leading-relaxed">
              If you decorate or build each order to a brief, and a team, a school or a company is
              the buyer, you are in the market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {qualifiers.map((item) => (
              <div key={item.title} className="bg-[#F3F4F6] rounded-2xl p-6 border border-black/5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#010B66] shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-black/60">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-[#F3F4F6] border-b border-black/10">
        <div className="container-wrapper">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-black/50 text-sm">We understand:</span>
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-sm bg-white px-3 py-1 rounded-full border border-black/10 text-black/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="pain" className="py-20 bg-[#F3F4F6] scroll-mt-28">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Where custom apparel jobs stall.
            </h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto">
              The work is custom. The file, the status and the tax decision often live in different
              places. That is a system problem, not a people problem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pains.map((pain) => {
              const Icon = pain.icon;
              return (
                <div key={pain.title} className="bg-white rounded-2xl p-6 border border-black/5">
                  <div className="w-12 h-12 rounded-xl bg-[#33fcfe]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#010b66]" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{pain.title}</h3>
                  <p className="text-black/60">{pain.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="example" className="py-20 bg-white scroll-mt-28">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="inline-flex text-sm px-3 py-1 rounded-full border border-black/10 text-black/70 mb-4">
                typical
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                A typical week in the shop.
              </h2>
              <div className="space-y-4 text-black/70 text-lg leading-relaxed">
                <p>
                  A mid-size apparel shop in British Columbia has a school hoodie run, a corporate
                  polo reorder, and a team kit still waiting on art, all in play at once.
                </p>
                <p>
                  The approved file is in a thread. Last year’s art is on a desktop. A coach texts
                  to ask where the order is. Someone is checking which tax belongs on an
                  out-of-province invoice.
                </p>
                <p>
                  Nobody was careless. The status, the file and the tax decision do not live on the
                  job.
                </p>
                <p className="text-black/60">This is the kind of week the 30-minute map is for.</p>
              </div>
            </div>
            <JobCardMock />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F3F4F6]">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">What we map with you.</h2>
            <ul className="space-y-4 mb-8">
              {mapTicks.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#010B66] shrink-0 mt-0.5" aria-hidden />
                  <span className="text-black/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 mb-4">
              <Link
                href="/solutions/digital-storefront"
                className="underline underline-offset-4 hover:text-black"
              >
                Digital Storefront
              </Link>
              {" · "}
              <Link
                href="/solutions/order-flow"
                className="underline underline-offset-4 hover:text-black"
              >
                Order Flow
              </Link>
              {" · "}
              <Link href="/solutions" className="underline underline-offset-4 hover:text-black">
                All solutions
              </Link>
            </p>
            <p className="text-black/60">
              CodSphere is custom-order commerce. Apparel is one way in, next to{" "}
              <Link
                href="/industries/print-sign"
                className="underline underline-offset-4 hover:text-black"
              >
                print and sign
              </Link>{" "}
              and other made-to-order work.
            </p>
          </div>
        </div>
      </section>

      <section id="book" className="py-20 bg-white scroll-mt-28">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Book a free 30-min map.
            </h2>
            <p className="text-black/60 text-lg">
              In 30 minutes we will map how orders enter, where artwork and status stall, and where
              visibility breaks. You keep the map. If CodSphere is not the right fit, we will say
              so.
            </p>
          </div>
          <div className="relative overflow-visible max-w-[900px] mx-auto">
            <div
              className="absolute -inset-6 bg-[#33FCFE]/20 blur-3xl rounded-full pointer-events-none"
              aria-hidden
            />
            <div className="relative">
              <ApparelBookEmbed />
            </div>
          </div>
          <ApparelBookFallbackLinks />
        </div>
      </section>

      <ApparelStickyBar />
    </div>
  );
}
