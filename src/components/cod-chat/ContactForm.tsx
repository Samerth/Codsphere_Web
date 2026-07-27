"use client";

import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";

export const ContactForm = () => {
  return (
    <section className="">
      <div className="container-wrapper py-more">
        {/* Section heading */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto mb-10">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Ready to start? Contact us today.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Tell about your project and ask questions — we&apos;ll get back to you
          </p>
        </div>

        <CodCRMEmbed minHeight={480} />
      </div>
    </section>
  );
};