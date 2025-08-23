// components/services/digital-marketing/WhyChooseCodSphere.tsx
"use client";

import Image from "next/image";

const reasons = [
  {
    icon: "✓",
    text: "10+ Years of Experience Across Industries",
  },
  {
    icon: "✓",
    text: "Google & Meta Certified Marketing Professionals",
  },
  {
    icon: "✓",
    text: "Transparent Monthly Reporting",
  },
  {
    icon: "✓",
    text: "Dedicated Account Managers",
  },
  {
    icon: "✓",
    text: "100% Backed Strategy (without the fluff)",
  },
  {
    icon: "✓",
    text: "Conversion-First Approach",
  },
];

export default function WhyChooseCodSphere() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Why Choose CodSphere as
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Your Digital Marketing Partner?
            </h3>
            
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {reason.icon}
                  </span>
                  <span className="text-gray-700">{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/digital-marketing/team-meeting.jpg"
                alt="CodSphere team collaboration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}