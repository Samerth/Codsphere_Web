import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Phone, Mail, ExternalLink, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Founder — Samerth Pathak | CodSphere",
  description:
    "Meet Samerth Pathak, Founder and Lead Architect at CodSphere. Building commerce and order operations software for custom-order businesses.",
  openGraph: {
    title: "Founder — Samerth Pathak | CodSphere",
    description:
      "Meet Samerth Pathak, Founder and Lead Architect at CodSphere. Building commerce and order operations software for custom-order businesses.",
    url: "https://codsphere.com/company/founder",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere — Founder",
      },
    ],
  },
  alternates: {
    canonical: "https://codsphere.com/company/founder",
  },
};

export default function FounderPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <p className="text-[#33fcfe] text-sm font-medium uppercase tracking-wider mb-4">
              Founder
            </p>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Samerth Pathak
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Founder & Lead Architect at CodSphere. Building commerce and order operations software for custom-order businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Profile & Contact */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-black/5">
                  <Image
                    src="/images/profile-pic/samerth-headshot.png"
                    alt="Samerth Pathak, Founder and Lead Architect at CodSphere"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Bio & Contact CTAs */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-black mb-4">
                  About
                </h2>
                <div className="space-y-4 text-black/70 mb-8">
                  <p>
                    Samerth founded CodSphere to solve a problem he saw firsthand: 
                    custom-order businesses struggle to connect how they sell with how they make.
                  </p>
                  <p>
                    The company builds commerce and order operations software, starting with 
                    Canadian print and sign shops — a clear example of where order visibility matters.
                  </p>
                </div>

                {/* Contact CTAs */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Get in touch
                  </h3>
                  
                  {/* LinkedIn CTA */}
                  <a
                    href="https://www.linkedin.com/in/samerth-pathak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0077B5] text-white font-medium hover:bg-[#006699] transition-colors group w-fit"
                    aria-label="Connect with Samerth Pathak on LinkedIn (opens in new tab)"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Phone CTA */}
                  <a
                    href="tel:+16049062693"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#010b66] to-[#33fcfe] text-white font-medium hover:opacity-90 transition-opacity w-fit"
                    aria-label="Call Samerth Pathak at (604) 906-2693"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(604) 906-2693</span>
                  </a>

                  {/* Email CTA */}
                  <a
                    href="mailto:samerth.pathak@codsphere.ca"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-[#010b66] text-[#010b66] font-medium hover:bg-[#010b66] hover:text-white transition-colors w-fit"
                    aria-label="Email Samerth Pathak at samerth.pathak@codsphere.ca"
                  >
                    <Mail className="w-5 h-5" />
                    <span>samerth.pathak@codsphere.ca</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Summit Vancouver 2025 Placeholder */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-black/10 overflow-hidden">
              <div className="bg-gradient-to-r from-[#010b66] to-[#33fcfe] px-6 py-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="w-6 h-6 text-white" />
                  <h2 className="text-xl font-bold text-white">
                    Web Summit Vancouver 2025
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-black/70 mb-4">
                  CodSphere was proud to participate in Web Summit Vancouver 2025.
                </p>
                <div className="bg-[#f5f5f5] rounded-xl p-8 text-center border-2 border-dashed border-black/20">
                  <p className="text-black/50 text-sm uppercase tracking-wider mb-2">
                    Media Forthcoming
                  </p>
                  <p className="text-black/70">
                    Photos and highlights from Web Summit Vancouver 2025 will be added here once media is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Company */}
      <section className="py-16 bg-white">
        <div className="container-wrapper text-center">
          <Link
            href="/company"
            className="inline-flex items-center justify-center gap-2 text-[#010b66] hover:text-[#33fcfe] transition-colors font-medium"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Company
          </Link>
        </div>
      </section>
    </div>
  );
}
