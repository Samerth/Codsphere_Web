import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail, Linkedin, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Samerth Pathak — Founder & CEO — CodSphere",
  description:
    "Samerth Pathak is the Founder & CEO of CodSphere, building commerce and order operations software for custom-order businesses. Based in Vancouver, BC.",
  alternates: {
    canonical: "https://codsphere.com/company/founder",
  },
  openGraph: {
    title: "Samerth Pathak — Founder & CEO — CodSphere",
    description:
      "Building commerce and order operations software for custom-order businesses.",
    url: "https://codsphere.com/company/founder",
  },
};

export default function FounderPage() {
  return (
    <div className="min-h-screen">
      {/* Identity Section */}
      <section className="bg-black py-24 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-36 sm:pt-40 lg:pt-48">
        <div className="container-wrapper">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
            {/* Headshot */}
            <div className="shrink-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-[#33fcfe]/20">
                <Image
                  src="/images/profile-pic/samerth-headshot.png"
                  alt="Samerth Pathak"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-center lg:text-left">
              <h1 className="text-white text-4xl sm:text-5xl font-bold mb-3">
                Samerth Pathak
              </h1>
              <p className="text-[#33fcfe] text-xl font-medium mb-6">
                Founder &amp; CEO
              </p>

              {/* Contact Details */}
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <MapPin className="w-5 h-5 text-[#33fcfe]" />
                  <span>Vancouver, BC</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Phone className="w-5 h-5 text-[#33fcfe]" />
                  <a 
                    href="tel:+16049062693" 
                    className="hover:text-white transition-colors"
                  >
                    (604) 906-2693
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Mail className="w-5 h-5 text-[#33fcfe]" />
                  <a 
                    href="mailto:samerth.pathak@codsphere.ca" 
                    className="hover:text-white transition-colors"
                  >
                    samerth.pathak@codsphere.ca
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Linkedin className="w-5 h-5 text-[#33fcfe]" />
                  <a 
                    href="https://ca.linkedin.com/in/samerth-pathak" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arc Section */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-black mb-10">Timeline</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#010b66] to-[#33fcfe]" />
              
              {/* Timeline items */}
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-6 h-6 bg-[#010b66] rounded-full shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <p className="text-[#010b66] font-semibold text-sm uppercase tracking-wide mb-1">
                      January 2023
                    </p>
                    <p className="text-black/70 text-lg">
                      Arrived in Canada
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-6 h-6 bg-[#010b66] rounded-full shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <p className="text-[#010b66] font-semibold text-sm uppercase tracking-wide mb-1">
                      February 2024
                    </p>
                    <p className="text-black/70 text-lg">
                      Started CodSphere
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-6 h-6 bg-[#33fcfe] rounded-full shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#010b66] rounded-full" />
                  </div>
                  <div>
                    <p className="text-[#010b66] font-semibold text-sm uppercase tracking-wide mb-1">
                      July 2026
                    </p>
                    <p className="text-black/70 text-lg">
                      Named to NextGEN Under 30 Class of 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Company Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-black mb-6">Why this company</h2>
            <div className="space-y-6 text-black/70 text-lg leading-relaxed">
              <p>
                Custom-order businesses — print shops, sign companies, fabricators — 
                have a gap between how they sell and how they produce. Their websites 
                don&apos;t capture the information production needs. Orders arrive incomplete. 
                Jobs stall waiting on specs or approvals.
              </p>
              <p>
                The enterprise tools are expensive and built for bigger operations. 
                Generic e-commerce doesn&apos;t handle custom work. These shops deserve 
                software that fits how they actually operate.
              </p>
              <p>
                <strong className="text-black">Print and sign first.</strong>{" "}
                It&apos;s where the pattern is clearest: every job is different, multiple 
                people touch each order, customers need visibility into progress. 
                If we can solve it for print and sign, the same approach works across 
                custom manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#010b66]" />
              <h2 className="text-3xl font-bold text-black">Recognition</h2>
            </div>
            
            <a 
              href="https://nextgensummit.co/30-under-30" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-[#010b66]/5 to-[#33fcfe]/5 rounded-xl p-6 border border-[#010b66]/10 hover:border-[#33fcfe]/30 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#010b66] font-semibold text-sm uppercase tracking-wide mb-2">
                    NextGEN Summit
                  </p>
                  <p className="text-black text-xl font-bold">
                    Under 30 Class of 2026
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#33fcfe] group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#f5f5f5] to-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Show us your order flow
          </h2>
          <p className="text-black/60 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s talk about where orders get stuck in your shop — 
            no pitch, just a conversation about how work moves.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#010b66] to-[#33fcfe] text-white text-lg font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Talk order flow
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Back to Company */}
      <section className="py-12 bg-black">
        <div className="container-wrapper text-center">
          <p className="text-white/60 text-base mb-4">
            Canadian company · Designed in Vancouver
          </p>
          <Link 
            href="/company" 
            className="text-[#33fcfe] hover:text-white transition-colors text-lg font-medium"
          >
            ← Back to Company
          </Link>
        </div>
      </section>
    </div>
  );
}
