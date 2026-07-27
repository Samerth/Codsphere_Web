"use client";

import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";

export default function ReadyToStart() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start? Contact us today.
          </h2>
          <p className="text-gray-600 mb-8">
            Tell about your project and ask questions — we&apos;ll get back to you.
          </p>
        </div>

        <CodCRMEmbed minHeight={470} />
      </div>
    </section>
  );
}