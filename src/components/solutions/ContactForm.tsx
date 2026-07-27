"use client";

import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";

export const ContactForm = () => {
  return (
    <section className="">
      <div className="container-wrapper py-more">
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto mb-10">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Get started
          </h2>
        </div>

        <CodCRMEmbed minHeight={480} />
      </div>
    </section>
  );
};