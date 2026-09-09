import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Zap, Package, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Company — CodSphere",
  description:
    "CodSphere builds commerce and order operations software for custom-order businesses. Sell online, keep orders moving. Canadian company · Designed in Vancouver.",
  alternates: {
    canonical: "https://codsphere.com/company",
  },
  openGraph: {
    title: "Company — CodSphere",
    description:
      "Commerce and order operations for custom-order businesses. Sell online, keep orders moving.",
    url: "https://codsphere.com/company",
  },
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-24 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-36 sm:pt-40 lg:pt-48">
        <div className="container-wrapper">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#33fcfe] text-sm font-medium tracking-wide uppercase mb-6">
              <MapPin className="w-4 h-4" />
              <span>Vancouver, BC</span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Commerce and order operations for custom-order businesses
            </h1>
            <p className="text-white/70 text-xl sm:text-2xl leading-relaxed max-w-3xl">
              Sell online. Keep orders moving. From first click to finished order.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[#010b66]" />
              <h2 className="text-3xl font-bold text-black">Who we serve</h2>
            </div>
            <div className="space-y-6 text-black/70 text-lg leading-relaxed">
              <p>
                We work with custom-order businesses — shops where every job is different, 
                where customers need quotes before they buy, and where production depends 
                on getting the specs right.
              </p>
              <p>
                <strong className="text-black">Print and sign is our beachhead.</strong>{" "}
                Banners, vehicle wraps, signage, wide-format — these shops know the pain of 
                orders that arrive incomplete and jobs that stall because someone&apos;s waiting 
                on approval or artwork.
              </p>
              <p>
                The patterns we solve for print and sign apply across custom manufacturing, 
                fabrication, and made-to-order work. Print and sign is where we start — 
                not where we stop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-[#010b66]" />
              <h2 className="text-3xl font-bold text-black">The problem</h2>
            </div>
            <div className="space-y-6 text-black/70 text-lg leading-relaxed">
              <p>
                Custom-order businesses have a gap between how they sell and how they make.
              </p>
              <p>
                The website is a brochure. Orders arrive through email, phone, and walk-ins. 
                By the time a job reaches the shop floor, the details are scattered across 
                inboxes, spreadsheets, and sticky notes.
              </p>
              <p className="text-black font-medium">
                Order information breaks between website and shop floor. Everyone&apos;s busy. 
                Things slip through.
              </p>
              <p>
                Enterprise MIS and ERP systems exist, but they&apos;re expensive and built for 
                larger operations. Generic e-commerce doesn&apos;t handle the complexity of 
                custom work. Most shops cobble together what they can.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-6 h-6 text-[#010b66]" />
              <h2 className="text-3xl font-bold text-black">What we build</h2>
            </div>
            <p className="text-black/70 text-lg leading-relaxed mb-10">
              Three layers that connect your customer to your shop floor:
            </p>
            
            <div className="space-y-8">
              <div className="bg-[#f5f5f5] rounded-xl p-6 border border-black/5">
                <h3 className="font-bold text-black text-xl mb-3">Digital Storefront</h3>
                <p className="text-black/60 leading-relaxed">
                  Make custom work easier to buy. Customers configure products, upload files, 
                  and request quotes — structured data from the start, not email threads.
                </p>
              </div>

              <div className="bg-[#f5f5f5] rounded-xl p-6 border border-black/5">
                <h3 className="font-bold text-black text-xl mb-3">Order Flow</h3>
                <p className="text-black/60 leading-relaxed">
                  See what&apos;s stuck before it becomes late. Track jobs from quote to delivery. 
                  Know which orders need attention without checking five different places.
                </p>
              </div>

              <div className="bg-[#f5f5f5] rounded-xl p-6 border border-black/5">
                <h3 className="font-bold text-black text-xl mb-3">Custom Extensions</h3>
                <p className="text-black/60 leading-relaxed">
                  Build the missing piece. When off-the-shelf doesn&apos;t fit, we build 
                  integrations and tools specific to how your shop works.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-[#010b66]/5 to-[#33fcfe]/5 rounded-xl border border-[#010b66]/10">
              <p className="text-black/70 leading-relaxed">
                <strong className="text-black">CodCRM</strong> and{" "}
                <strong className="text-black">Cod Chat</strong> sit on top — 
                customer communication and lead capture that feed directly into your order flow. 
                No duplicate entry. No lost inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-[#010b66]" />
              <h2 className="text-3xl font-bold text-black">Where we are</h2>
            </div>
            <div className="space-y-6 text-black/70 text-lg leading-relaxed">
              <p>
                We&apos;re in active development with early customers:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#33fcfe] rounded-full mt-2.5 shrink-0" />
                  <p>
                    <strong className="text-black">GWG</strong> and{" "}
                    <strong className="text-black">Proof</strong> — 
                    Canadian print and sign shops in UAT, validating our storefront and order flow.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#33fcfe] rounded-full mt-2.5 shrink-0" />
                  <p>
                    <strong className="text-black">Voltvera</strong> — 
                    EV charging installation company using our custom extensions for job tracking.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-black/5 mt-8">
                <p className="text-black/60 text-base">
                  <strong className="text-black">Honest status:</strong> We&apos;re measuring outcomes 
                  as these deployments mature. We don&apos;t have published ROI numbers yet — 
                  when we do, they&apos;ll be based on real data from these customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-black">
        <div className="container-wrapper">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/70 text-sm sm:text-base">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#33fcfe] rounded-full" />
              Vancouver-based
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#33fcfe] rounded-full" />
              Custom-order &amp; print-sign focus
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#33fcfe] rounded-full" />
              <a 
                href="https://nextgensummit.co/30-under-30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                NextGEN Under 30 Class of 2026
              </a>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#33fcfe] rounded-full" />
              No forced MIS swap
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f5f5f5]">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Show us your order flow
          </h2>
          <p className="text-black/60 text-lg mb-10 max-w-2xl mx-auto">
            We start by understanding how work moves through your shop. 
            No pitch deck — just a conversation about where orders get stuck.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#33fcfe] to-[#010b66] text-white text-lg font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Talk order flow
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Founder Link */}
      <section className="py-16 bg-black">
        <div className="container-wrapper text-center">
          <p className="text-white/60 text-base mb-4">
            Canadian company · Designed in Vancouver
          </p>
          <Link 
            href="/company/founder" 
            className="text-[#33fcfe] hover:text-white transition-colors text-lg font-medium"
          >
            Meet the founder →
          </Link>
        </div>
      </section>
    </div>
  );
}
