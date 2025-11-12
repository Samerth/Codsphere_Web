import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import hand_vector_img from "@/assets/images/home/hand.png";

export default function HomeHero2() {
  return (
    <section className="relative h-screen w-full overflow-hidden -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-20 sm:pt-[88px] lg:pt-[104px] bg-black bg-linear-to-r from-black to-[#0664a7]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container-wrapper h-full flex justify-between items-center">
        <div className="text-white w-5/12 flex flex-col gap-9">
          <h1
            className="font-sequel text-[24px] sm:text-[42px] lg:text-[48px] leading-[39px] lg:leading-[59px] font-normal"
            style={{ fontWeight: 415 }}
          >
            AI ERP, CRM & Automation Experts Driving Smarter Business Efficiency
          </h1>
          <p className="text-[14px] sm:text-[18px] lg:text-[20px] leading-7">
            At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart invoicing
            tools, and full-funnel digital strategies so your business runs smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact">
              <button className="cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                <div className="flex items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33fbfe] to-[#010B66]">
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                    <ArrowRight />
                  </div>
                  Discover Our Expertise
                </div>
              </button>
            </Link>
            <Link href="/contact">
              <button className="cursor-pointer rounded-full border-2 border-white lg:text-[18px] flex items-center gap-3 px-5 py-3 hover:bg-white hover:text-black">
                Start Your Free Trial
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src={hand_vector_img}
            alt="Codsphere team working together"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
