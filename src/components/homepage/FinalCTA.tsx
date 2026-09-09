"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Show us one order that should have gone better.
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
            In 30 minutes, we will map the customer entry, the handoffs and where visibility breaks. 
            If CodSphere is not the right fit, we will say so.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="w-full sm:w-auto cursor-pointer rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                <div className="flex justify-center items-center gap-3 rounded-full px-8 py-4 bg-gradient-to-l from-[#33fbfe] to-[#010B66]">
                  <div className="bg-gradient-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  Show us your order flow
                </div>
              </button>
            </Link>
          </div>

          <p className="text-black/50 text-sm mt-6">
            Free 30-minute order-flow map. No pressure, no generic demo.
          </p>
        </div>
      </div>
    </section>
  );
}
