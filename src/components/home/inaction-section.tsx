import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import voltveraImage from "@/assets/images/case-studies/voltvera-case-study.png";

export default function InActionSection() {
  return (
    <section className="relative bg-black">
      <div className="container-wrapper pt-less pb-more">
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">Proof</p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Voltvera: custom automation for complex franchise operations
          </h2>
          <p className="mt-2 text-[20px] font-light">
            A verifiable example of CodSphere&apos;s custom software work.
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="w-full sm:w-4/6">
            <div className="rounded-xl p-0.5 bg-linear-to-r from-[#33FCFE] to-[#010B66]">
              <div className="rounded-[11px] bg-black p-0 overflow-hidden">
                <div className="relative w-full aspect-video bg-slate-900 overflow-hidden group">
                  <Image
                    alt="Voltvera custom software case study"
                    src={voltveraImage}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/70 to-transparent pt-12 pb-6 px-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Smart MLM Automation at Scale
                    </h3>
                    <p className="text-gray-300 text-sm mb-1">Voltvera India Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="h-2 bg-linear-to-r from-[#33FCFE] to-[#010B66]"></div>
                <div className="p-8 sm:p-10">
                  <div className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-4">
                    {[
                      "CRM visibility",
                      "Payout automation",
                      "Franchise controls",
                      "Compliance workflows",
                    ].map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-xl border border-white/15 bg-white/5 px-3 py-4 text-center text-sm font-medium text-white"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <p className="mb-4 text-white font-semibold text-base">
                      Custom automation for complex franchise operations
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                      CodSphere developed a cloud-based automation ecosystem combining CRM
                      visibility, payout workflows, compliance integrations, and franchise controls.
                    </p>
                    <div className="flex justify-center">
                      <Link href="/case-studies/voltvera">
                        <button className="w-full rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                          <div className="flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                            <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                              <ArrowRight />
                            </div>
                            View Voltvera Case Study
                          </div>
                        </button>
                      </Link>
                    </div>
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
