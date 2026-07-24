"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import voltveraImage from "@/assets/images/case-studies/voltvera-case-study.png";
import sortifyImage from "@/assets/images/case-studies/sortify-case-study.png";

export default function InActionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "Voltvera India Pvt. Ltd.",
      title: "Smart MLM Automation at Scale",
      description:
        "CodSphere developed a cloud-based automation ecosystem combining CRM visibility, payout workflows, compliance integrations, and franchise controls.",
      image: voltveraImage,
      highlights: [
        "CRM visibility",
        "Payout automation",
        "Franchise controls",
        "Compliance workflows",
      ],
      primaryHref: "/case-studies/voltvera",
      primaryLabel: "View Voltvera Case Study",
    },
    {
      id: 2,
      company: "Sortify Technologies Inc.",
      title: "From Paper Logs To Cloud Intelligence",
      description:
        "Sortify digitizes mailroom package intake, recipient notifications, real-time tracking, and pickup records in one cloud-based workflow.",
      image: sortifyImage,
      highlights: [
        "Package intake",
        "Recipient alerts",
        "Pickup records",
        "Operational visibility",
      ],
      primaryHref: "/sortify",
      primaryLabel: "Explore Sortify",
      secondaryHref: "/case-studies/sortify",
      secondaryLabel: "Read the Case Study",
    },
  ];

  const study = caseStudies[currentSlide];

  return (
    <section className="relative bg-black">
      <div className="container-wrapper pt-less pb-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">
            Our Ecosystem in Action
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Case Studies: Where Innovation Meets Impact
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Explore how CodSphere technology has helped businesses streamline operations, automate
            workflows, and scale faster — from manufacturing to modern SaaS.
          </p>
        </div>

        {/* Case Study Card with Gradient Border */}
        <div className="relative flex justify-center">
          <div className="w-full sm:w-4/6">
            <div className="rounded-xl p-0.5 bg-linear-to-r from-[#33FCFE] to-[#010B66]">
              <div className="rounded-[11px] bg-black p-0 overflow-hidden">
                {/* Showcase Image Container */}
                <div className="relative w-full aspect-video bg-slate-900 overflow-hidden group">
                  <Image
                    alt={`${study.title} preview`}
                    src={study.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/70 to-transparent pt-12 pb-6 px-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-1">{study.company}</p>
                  </div>
                </div>

                <div className="h-2 bg-linear-to-r from-[#33FCFE] to-[#010B66]"></div>

                <div className="p-8 sm:p-10">
                  <div className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-4">
                    {study.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-xl border border-white/15 bg-white/5 px-3 py-4 text-center text-sm font-medium text-white"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Case Study Content */}
                  <div className="flex flex-col items-center text-center">
                    <p className="mb-4 text-white font-semibold text-base">
                      {study.company === "Sortify Technologies Inc."
                        ? "A digital mailroom product built for traceable delivery workflows"
                        : "Custom automation for complex franchise operations"}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                      {study.description}
                    </p>

                    {/* CTA Button */}
                    {/* <div className="flex justify-center"> */}
                    <div className="flex flex-wrap justify-center gap-3">
                      <Link href={study.primaryHref}>
                        <button className="w-full rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                          <div className="flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                            <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                              <ArrowRight />
                            </div>
                            {study.primaryLabel}
                          </div>
                        </button>
                      </Link>
                      {study.secondaryHref ? (
                        <Link
                          href={study.secondaryHref}
                          className="rounded-full border border-white/60 px-5 py-3 text-white hover:bg-white/10"
                        >
                          {study.secondaryLabel}
                        </Link>
                      ) : null}
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all ${
                    index === currentSlide
                      ? "w-3 h-3 bg-cyan-400"
                      : "w-3 h-3 bg-gray-500 hover:bg-gray-400 cursor-pointer"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
