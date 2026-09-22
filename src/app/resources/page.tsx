import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, FileText, Presentation, Building2 } from "lucide-react";
import { formatMetaTitle } from "@/lib/format-meta-title";

const description =
  "Download the CodSphere company overview deck. Learn how we help custom-order businesses sell online and keep orders moving.";

export const metadata: Metadata = {
  title: formatMetaTitle("Resources"),
  description,
  alternates: {
    canonical: "https://www.codsphere.com/resources",
  },
  openGraph: {
    title: formatMetaTitle("Resources"),
    description,
    url: "https://www.codsphere.com/resources",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("Resources"),
    description,
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

const companyOverviewResources = [
  {
    title: "Company Overview (PDF)",
    description: "A quick introduction to CodSphere — who we serve, what we build, and how we help custom-order businesses move faster.",
    icon: FileText,
    href: "/resources/CodSphere_Company_Overview.pdf",
    fileType: "PDF",
    fileSize: "190 KB",
  },
  {
    title: "Company Overview (PowerPoint)",
    description: "Editable slide deck for presentations and internal sharing. Same content as the PDF, ready for your team meetings.",
    icon: Presentation,
    href: "/resources/CodSphere_Company_Overview.pptx",
    fileType: "PPTX",
    fileSize: "42 KB",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-24 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-36 sm:pt-40 lg:pt-48">
        <div className="container-wrapper">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#33fcfe] text-sm font-medium tracking-wide uppercase mb-6">
              <Building2 className="w-4 h-4" />
              <span>Company Resources</span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Company Overview
            </h1>
            <p className="text-white/70 text-xl sm:text-2xl leading-relaxed max-w-3xl">
              Everything you need to share CodSphere with your team or partners — download our company deck in PDF or PowerPoint format.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Download className="w-6 h-6 text-[#010b66]" />
              <h2 className="text-3xl font-bold text-black">Download</h2>
            </div>
            <p className="text-black/70 text-lg leading-relaxed mb-10">
              CodSphere builds commerce and order operations software for custom-order businesses — 
              kitchens and home, pharmacy compounding, fabrication, print and sign, promo, and more. 
              Businesses where every order is different.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {companyOverviewResources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  download
                  className="group bg-[#f5f5f5] rounded-xl p-6 border border-black/5 hover:border-[#33fcfe]/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#010b66] to-[#33fcfe] rounded-xl flex items-center justify-center shrink-0">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-black text-lg mb-2 group-hover:text-[#010b66] transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-black/60 text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#010b66]">
                          <Download className="w-4 h-4" />
                          Download {resource.fileType}
                        </span>
                        <span className="text-black/40 text-sm">
                          {resource.fileSize}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-black mb-6">What&apos;s inside</h2>
            <div className="space-y-4 text-black/70 text-lg leading-relaxed">
              <p>
                The company overview covers:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#33fcfe] rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-black">Who we serve</strong> — custom-order businesses where every job is different</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#33fcfe] rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-black">The problem</strong> — order information breaks between website and shop floor</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#33fcfe] rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-black">What we build</strong> — Digital Storefront, Order Flow, and Custom Extensions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#33fcfe] rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-black">Where we are</strong> — early customers and honest status</span>
                </li>
              </ul>
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
              Built for custom-order businesses
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
            Ready to talk?
          </h2>
          <p className="text-black/60 text-lg mb-10 max-w-2xl mx-auto">
            We start by understanding how work moves through your shop. 
            No pitch deck — just a conversation about where orders get stuck.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#33fcfe] to-[#010b66] text-white text-lg font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Show us your order flow
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Back to Company */}
      <section className="py-16 bg-black">
        <div className="container-wrapper text-center">
          <p className="text-white/60 text-base mb-4">
            Want to learn more about CodSphere?
          </p>
          <Link 
            href="/company" 
            className="text-[#33fcfe] hover:text-white transition-colors text-lg font-medium"
          >
            Read about the company →
          </Link>
        </div>
      </section>
    </div>
  );
}
