// components/services/digital-marketing/TransformPresence.tsx
"use client";

import Image from "next/image";

export default function TransformPresence() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Online Presence<br />
              with CodSphere
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At CodSphere, we help businesses grow through intelligent and 
              impactful digital marketing strategies. Whether you're a startup, a 
              scaleup, or an enterprise, our data-driven, AI-enhanced digital marketing 
              customers and your website into a revenue-generating machine.
            </p>
          </div>
          
          {/* Image with Social Icons */}
          <div className="relative">
            <div className="relative h-[400px] w-full">
              <Image
                src="/images/digital-marketing/woman-laptop.jpg"
                alt="Digital marketing professional"
                fill
                className="object-cover rounded-lg"
              />
              {/* Floating Social Icons */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <div className="bg-white rounded-lg shadow-lg p-3 space-y-3">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">♥</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">f</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">📷</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}