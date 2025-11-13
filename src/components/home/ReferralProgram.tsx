"use client";

import { ArrowRight, Target, Handshake, Zap, Coins } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "Step 1",
    title: "Identify",
    description: "Spot businesses needing digital solutions",
    icon: "/icons/search.svg",
  },
  {
    number: "Step 2",
    title: "Introduce",
    description: "Refer them via email, LinkedIn, or call",
    icon: "/icons/handshake.svg",
  },
  {
    number: "Step 3",
    title: "CodSphere Delivers",
    description: "We handle sales, setup, and support",
    icon: "/icons/zap.svg",
  },
  {
    number: "Step 4",
    title: "You Earn",
    description: "Get recurring commission for life",
    icon: "/icons/coin-stack.svg",
  },
];

export default function ReferralProgramSection() {
  return (
    <section className="w-full bg-linear-to-b from-cyan-100 to-cyan-50">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#a8a8a8]">
            CodSphere Referral Program
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Grow With CodSphere - Earn as You Refer
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Turn your network into lifetime earnings. Earn commissions by connecting businesses that
            need CRM, ERP, or automation solutions — zero investment, all reward.
          </p>
        </div>

        {/* Commission Highlight */}
        <div className="flex justify-center">
          <div className="border border-[#33FCFE] rounded-lg px-6 py-2 mb-8">
            <p className="text-gray-900 font-semibold">
              Earn up to 10% recurring commission for every successful referral.
            </p>
          </div>
        </div>

        {/* Steps Process */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            return (
              <div key={index} className="relative flex flex-col items-center gap-2">
                {/* Line connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-full h-1 bg-gray-400 top-[70px] left-2/4 right-1/4"></div>
                )}

                <p className="text-md font-bold text-gray-600">{step.number}</p>
                {/* Icon Circle */}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-[#d9feff] border-4 border-gray-400 flex items-center justify-center">
                    <Image
                      src={step.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="w-[35px] h-[35px] md:w-10 md:h-10 object-contain"
                    />
                  </div>
                </div>

                <div className="w-2/3">
                  <h3 className="text-md font-bold text-gray-900 text-center">{step.title}</h3>
                  <p className="text-sm text-gray-700 text-center">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="w-full md:w-auto cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
            <div className="flex justify-center items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33FCFE] to-[#010b6698]">
              <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                <ArrowRight />
              </div>
              More details
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
