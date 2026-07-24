import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightComp from "@/components/highlight-comp";

export default function HighlightSection() {
  return (
    <HighlightComp
      content={
        <div>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            See Whether CodCRM Fits Your Team
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Try CodCRM for customer management and workflow automation, or talk with CodSphere
            about a tailored system when your requirements go beyond the product.
          </p>

          <div className="flex flex-col 2xl:flex-row gap-3 mt-5">
            <Link href="" className="w-full 2xl:w-1/2">
              <button className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                <div className="flex justify-center items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33fbfe] to-[#010B66]">
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                    <ArrowRight />
                  </div>
                  Start Your CodCRM Trial
                </div>
              </button>
            </Link>
            <Link href="/services" className="w-full 2xl:w-1/2">
              <button className="w-full cursor-pointer rounded-full border-2 border-white lg:text-[18px] flex justify-center items-center gap-3 px-5 py-3 hover:bg-white hover:text-black">
                Explore Custom Software
              </button>
            </Link>
          </div>

          <p className="text-sm text-gray-400 mt-2">Choose the path that fits your workflow.</p>
        </div>
      }
      image={
        <Image
          src={"/images/profile-pic/person-2.png"}
          alt="CodSphere team member"
          fill
          className="object-cover"
          priority
        />
      }
    />
  );
}
