import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Company — About CodSphere",
  description: "CodSphere builds commerce and order operations software for custom-order businesses. Based in Canada.",
  alternates: {
    canonical: "https://codsphere.com/company",
  },
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#16324A] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              About CodSphere
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We build commerce and order operations software for custom-order businesses. 
              Based in Canada. Starting with print and sign.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1D2730] mb-6">
              The problem we're solving
            </h2>
            <div className="space-y-4 text-[#1D2730]/70">
              <p>
                Custom-order businesses — print shops, sign companies, fabricators — 
                have a gap between how they sell and how they make.
              </p>
              <p>
                Their websites are brochures. Orders come in through email, phone calls, and walk-ins. 
                By the time a job hits the shop floor, essential details are scattered across inboxes, 
                spreadsheets, and sticky notes. Everyone's busy. Things slip through.
              </p>
              <p>
                The enterprise solutions (MIS, ERP) are expensive and built for bigger operations. 
                Generic e-commerce doesn't handle the complexity of custom work. 
                So most shops cobble together what they can and make it work.
              </p>
              <p className="text-[#1D2730] font-medium">
                We're building the layer between the customer and the shop floor — 
                making custom work easier to buy and every order easier to track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="py-16 bg-[#F1F5F7]">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1D2730] mb-4">
              Why print and sign first
            </h2>
            <p className="text-[#1D2730]/70 mb-4">
              We started with Canadian print and sign shops because we know the work. 
              Every order is different. Multiple people touch each job. Customers need to see progress. 
              It's a clear example of where order operations matter.
            </p>
            <p className="text-[#1D2730]/70">
              The same patterns apply to any business where custom work needs to flow from sale to delivery. 
              Print and sign is our beachhead — not our boundary.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1D2730] mb-6">
              How we work
            </h2>
            <div className="space-y-6">
              <div className="bg-[#F1F5F7] rounded-xl p-6 border border-[#1D2730]/5">
                <h3 className="font-semibold text-[#1D2730] mb-2">Start with understanding</h3>
                <p className="text-[#1D2730]/60">
                  We map your current order flow before we build anything. 
                  Understanding how work moves through your shop tells us what will actually help.
                </p>
              </div>
              <div className="bg-[#F1F5F7] rounded-xl p-6 border border-[#1D2730]/5">
                <h3 className="font-semibold text-[#1D2730] mb-2">Smallest valuable layer</h3>
                <p className="text-[#1D2730]/60">
                  We don't try to replace everything at once. 
                  Start with the piece that will make the biggest difference soonest, then expand from there.
                </p>
              </div>
              <div className="bg-[#F1F5F7] rounded-xl p-6 border border-[#1D2730]/5">
                <h3 className="font-semibold text-[#1D2730] mb-2">Fixed-price, clear scope</h3>
                <p className="text-[#1D2730]/60">
                  After discovery, you get a fixed quote for a defined scope. 
                  No surprise invoices. No scope creep charges. We agree on what we're building and what it costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-[#16324A]">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Based in Canada
            </h2>
            <p className="text-white/60">
              We're a Canadian company serving Canadian businesses first. 
              Our infrastructure runs in Canadian regions where available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#1D2730] mb-4">
            Want to talk?
          </h2>
          <p className="text-[#1D2730]/60 text-lg mb-8 max-w-xl mx-auto">
            Whether you're running a shop that needs help, or you're curious about what we're building — we'd like to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#0E7C86] text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-[#0E7C86]/90 transition-colors"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
