"use client";

import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";
import { CheckCircle2 } from "lucide-react";

export const ContactForm = () => {
  return (
    <section className="">
      <div className="container-wrapper py-more">
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto mb-14">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#D3D3D3]">
            We are here to help you
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Ask about Sortify, CodChat, or CodCRM, tell us about a custom software project, or book
            an AI Visibility Audit. Our Vancouver-based team works with businesses globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-[1100px] mx-auto">
          {/* Left: trust column */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#010B66]/5 border border-[#010B66]/10 px-4 py-1.5 text-[#010B66] text-sm font-medium">
              Get in Touch
            </div>
            <h3 className="text-[28px] md:text-[32px] font-semibold leading-tight">
              Tell us about your business — we&apos;ll get back to you fast.
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Response within 24–48 hours",
                "Vancouver-based team, working with businesses globally",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[16px] text-[#525252]">
                  <CheckCircle2 className="text-[#33FCFE] shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: embed with ambient glow */}
          <div className="relative">
            <div className="absolute -inset-6 bg-[#33FCFE]/20 blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <CodCRMEmbed minHeight={480} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};