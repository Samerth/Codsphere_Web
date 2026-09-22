import { Metadata } from "next";
import Link from "next/link";
import { FileText, Presentation, Download, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — CodSphere company overview downloads",
  description:
    "Download the CodSphere company overview (PDF and PowerPoint) for your team or partners.",
  alternates: {
    canonical: "https://www.codsphere.com/resources",
  },
  openGraph: {
    title: "Resources — CodSphere company overview downloads",
    description:
      "Download the CodSphere company overview (PDF and PowerPoint) for your team or partners.",
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
    title: "Resources — CodSphere company overview downloads",
    description:
      "Download the CodSphere company overview (PDF and PowerPoint) for your team or partners.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
};

const downloadFiles = [
  {
    title: "CodSphere Company Overview",
    description: "PDF format — best for viewing and sharing",
    icon: FileText,
    type: "PDF",
    href: "/resources/CodSphere_Company_Overview.pdf",
  },
  {
    title: "CodSphere Company Overview",
    description: "PowerPoint format — for presentations and meetings",
    icon: Presentation,
    type: "PPTX",
    href: "/resources/CodSphere_Company_Overview.pptx",
  },
];

const whatsInside = [
  "Who CodSphere serves and the problem we solve",
  "Our three-layer solution: Storefront, Order Flow, Extensions",
  "Proof points: GWG, Proof Industries, Voltvera",
  "Honest status on where we are",
  "Contact and next steps",
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Light/Cream */}
      <section className="bg-[#f5f5f5] py-16 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-black text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Resources
            </h1>
            <p className="text-black/60 text-xl leading-relaxed mb-4">
              Branded CodSphere overview for meetings and sharing.
            </p>
            <Link 
              href="/company" 
              className="inline-flex items-center gap-2 text-[#010b66] font-medium hover:gap-3 transition-all"
            >
              For who we are, see Company <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Download Cards Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <p className="text-black/60 text-lg mb-8 max-w-2xl">
            CodSphere builds commerce and order operations for businesses where every order is customized.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {downloadFiles.map((file) => {
              const Icon = file.icon;
              return (
                <div
                  key={file.type}
                  className="bg-white rounded-2xl p-6 border border-[#e5e7eb] hover:border-black/20 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#010b66]/5 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#010b66]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-black">{file.title}</h3>
                        <span className="text-xs bg-[#33fcfe]/20 text-[#010b66] px-2 py-0.5 rounded-full font-medium">
                          {file.type}
                        </span>
                      </div>
                      <p className="text-sm text-black/60">{file.description}</p>
                    </div>
                  </div>
                  <a
                    href={file.href}
                    download
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#33fcfe] to-[#010b66] text-white text-sm font-semibold px-4 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    Download {file.type}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-white">
        <div className="container-wrapper">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-black mb-6">What&apos;s inside</h2>
            <ul className="space-y-3">
              {whatsInside.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#33fcfe] shrink-0 mt-0.5" />
                  <span className="text-black/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container-wrapper text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Questions about CodSphere?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Show us your order flow — we&apos;ll map one order together in 30 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#33fcfe] to-[#010b66] text-white text-lg font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
