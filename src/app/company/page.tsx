import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Company — About CodSphere | CodSphere",
  description: "CodSphere builds commerce and order operations for custom-order businesses. Based in Vancouver, working with print, sign, promo, and fabrication shops across Canada.",
  alternates: {
    canonical: "https://codsphere.com/company",
  },
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              CodSphere
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              Commerce and order operations for custom-order businesses. 
              From first click to finished order.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4" />
              <span>Vancouver, BC, Canada</span>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              What we do
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                We build digital storefronts and order flow systems for businesses where every order is different — 
                print shops, sign manufacturers, promo companies, custom fabricators.
              </p>
              <p>
                These businesses face a specific problem: they need to sell custom work online, 
                but generic e-commerce doesn't handle custom orders well. And once orders come in, 
                they need visibility into where every job is and what's stuck.
              </p>
              <p>
                We solve both problems with a platform that handles intake, tracking, and delivery — 
                connected to the systems shops already use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our focus */}
      <section className="py-20 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Our focus
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-gray-600 mb-6">
                We started with Canadian print and sign shops because we understand the work. 
                Wide-format printing, vehicle wraps, banners, dimensional signs — 
                these are complex products that require careful coordination from quote to delivery.
              </p>
              <p className="text-gray-600 mb-6">
                The same patterns apply to promo and apparel (screen printing, embroidery, promotional products) 
                and custom fabrication (metal work, woodworking, CNC). 
                Anywhere custom orders need to flow from sale to delivery, we can help.
              </p>
              <p className="text-gray-500 text-sm">
                We're not trying to be everything to everyone. We're building deep expertise in 
                one operating pattern — custom-order businesses — and doing it well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Get in touch</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-[#0a1628]">Email:</strong>{" "}
                  <a href="mailto:info@codsphere.ca" className="text-[#14b8a6] hover:underline">
                    info@codsphere.ca
                  </a>
                </p>
                <p>
                  <strong className="text-[#0a1628]">Phone:</strong>{" "}
                  <a href="tel:+16049062693" className="text-[#14b8a6] hover:underline">
                    +1 (604) 906-2693
                  </a>
                </p>
                <p>
                  <strong className="text-[#0a1628]">Location:</strong> Vancouver, BC, Canada
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Working hours</h2>
              <div className="text-gray-600">
                <p>Monday – Friday</p>
                <p>9:00 AM – 9:00 PM PT</p>
                <p className="text-gray-500 text-sm mt-4">
                  We work with businesses globally from our Vancouver base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to work with us?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Show us your order flow. We'll show you how CodSphere could help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Show Us Your Order Flow
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
