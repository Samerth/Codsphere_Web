import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | CodSphere",
  description: "CodSphere's commitment to digital accessibility and our ongoing efforts to ensure our website and platform are accessible to all users.",
  alternates: {
    canonical: "https://codsphere.com/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Accessibility Statement
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Our commitment to making CodSphere accessible to all users.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Our commitment</h2>
            <p className="text-gray-600 mb-6">
              CodSphere is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards.
            </p>

            <h2 className="text-2xl font-bold text-[#0a1628] mb-4 mt-8">Standards</h2>
            <p className="text-gray-600 mb-6">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. 
              These guidelines explain how to make web content more accessible for people with disabilities.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-8">
              <p className="text-yellow-800 font-medium mb-2">VERIFY: Accessibility audit status</p>
              <p className="text-yellow-700 text-sm">
                Formal accessibility audit and WCAG 2.1 AA compliance verification pending. 
                Current status and audit timeline available on request.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#0a1628] mb-4 mt-8">Measures we take</h2>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Semantic HTML structure throughout our website and applications</li>
              <li>Keyboard navigation support for all interactive elements</li>
              <li>Sufficient color contrast for text and important visual elements</li>
              <li>Alternative text for meaningful images</li>
              <li>Clear and consistent navigation</li>
              <li>Responsive design that works across devices and screen sizes</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0a1628] mb-4 mt-8">Feedback</h2>
            <p className="text-gray-600 mb-6">
              We welcome your feedback on the accessibility of CodSphere. Please let us know if you 
              encounter accessibility barriers or have suggestions for improvement:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>
                Email:{" "}
                <a href="mailto:info@codsphere.ca" className="text-[#14b8a6] hover:underline">
                  info@codsphere.ca
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+16049062693" className="text-[#14b8a6] hover:underline">
                  +1 (604) 906-2693
                </a>
              </li>
            </ul>

            <p className="text-gray-600">
              We try to respond to accessibility feedback within 5 business days.
            </p>

            <div className="text-gray-500 text-sm mt-8 pt-8 border-t border-gray-200">
              <p>Last updated: September 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-wrapper text-center">
          <p className="text-gray-600 mb-4">
            Have accessibility feedback or questions?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#0a1628] text-white font-medium px-6 py-3 rounded-full hover:bg-[#0a1628]/90 transition-opacity"
          >
            Contact us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
