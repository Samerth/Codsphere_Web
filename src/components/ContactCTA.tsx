"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CodCRMEmbed } from "@/components/start-free-trial/codcrm-embed";

export default function ContactCTA() {
  const pathname = usePathname();

  return (
    <section className="container-wrapper py-more">
      <div className="text-center mb-10">
        <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
          Ready to start? Contact us today.
        </h2>
        <p className="mt-2 text-[20px] font-light">
          Tell us about your project and ask questions – we&apos;ll get back to you
        </p>
      </div>

      <CodCRMEmbed minHeight={480} />

      {pathname === "/" && (
        <div className="flex justify-center mt-6">
          <Link href="/start-free-trial">
            <button className="w-full md:w-auto h-full cursor-pointer rounded-full border-3 border-black text-[15px] lg:text-[18px] gap-3 px-5 py-3">
              Start your free trial
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}