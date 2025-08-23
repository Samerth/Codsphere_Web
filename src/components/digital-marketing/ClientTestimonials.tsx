// components/services/digital-marketing/ClientTestimonials.tsx
"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Arman Joshi",
    role: "CEO, TechStartup Inc.",
    content: "CodSphere's campaigns generated 3x more leads and doubled our ad conversions ROI. Their strategy worked.",
    avatar: "/images/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    name: "Lisa Tran",
    role: "Marketing Director, E-comm Plus",
    content: "We had no online presence before. In just 3 months, we were ranking on Google and converting website traffic.",
    avatar: "/images/testimonials/avatar2.jpg",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="text-4xl text-gray-300 mb-4">"</div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quote below testimonials */}
        <div className="text-center mt-12 text-gray-500 italic">
          "We add value in Align here."
        </div>
      </div>
    </section>
  );
}