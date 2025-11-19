import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black text-white -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-60 md:pt-[88px] lg:pt-[104px] pb-20">
      {/* Background video with overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="container-wrapper relative z-10 flex justify-start pt-5 sm:pt-10 lg:pt-20">
        <div className="w-full md:w-2/4 xl:w-2/5 text-start px-4 space-y-9 -mt-15 md:mt-0">
          <h1 className="font-sequel text-[24px] sm:text-[42px] lg:text-[48px] leading-[39px] lg:leading-[59px] font-bold">
            Experience the Power of Unified CRM & ERP-Automate, Scale, and Grow.
          </h1>
          <p className="text-[14px] sm:text-[18px] lg:text-[20px] leading-7">
            Automate your workflows, manage clients smarter, and scale faster with CodSphere — the
            all-in-one cloud platform built for growing teams.
          </p>
          <div className="flex flex-col gap-3">
            <button className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex justify-center items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33fbfe] to-[#010B66]">
                <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                  <ArrowRight />
                </div>
                Start your Free Trial Today
              </div>
            </button>
            <Link href="/contact">
              <button className="w-full cursor-pointer rounded-full border-2 border-white lg:text-[18px] flex justify-center items-center gap-3 px-5 py-3 hover:bg-white hover:text-black">
                Watch Demo
              </button>
            </Link>
            <p className="text-sm text-gray-400 text-start">
              No credit card required. Full access for 14 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
