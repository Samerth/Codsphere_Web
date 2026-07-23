"use client";

import Image from "next/image";

const items = [
  {
    title: "Visitor → Lead",
    text: "Conversion-ready pages, trust signals, and clear CTAs turn website traffic into real enquiries.",
    icon: "/icons/Application.svg",
  },
  {
    title: "Lead → Booked Job",
    text: "Every enquiry is qualified the moment it lands, then routed to you with the context to close.",
    icon: "/icons/increment.svg",
  },
  {
    title: "Job → Loyal Customer",
    text: "Automated follow-ups, review requests, and repeat-work nudges keep cash flowing long after the first invoice.",
    icon: "/icons/settings-solutions.svg",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-black text-white bg-dots">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-full lg:w-full xl:w-full mx-auto pb-6 md:pb-12">
          <h2 className="text-[30px] sm:text-[30px] lg:text-[40px] font-semibold">
            From first click to repeat customer.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            One backbone walks every visitor through the full lifecycle — attract, qualify, close,
            and keep them coming back.
          </p>
        </div>

        {/* Technology Cards Grid - Updated to 3 columns and centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center w-full mx-auto">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center group">
              {/* Icon Enlarged */}
              <div className="relative mb-6">
                <Image
                  src={item.icon}
                  alt={`${item.title}-icon`}
                  width={100} // Slightly larger to match visual weight
                  height={100}
                  className="w-[90px] h-[90px] md:w-[90px] md:h-[90px] object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content matched to screenshot */}
              <div className="space-y-2">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#CCCCCC] text-[18px] md:text-[20px] leading-relaxed max-w-[300px] mx-auto font-light">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
