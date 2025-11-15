import { ArrowRight, PlayIcon } from "lucide-react";
import Link from "next/link";

export default function WalkThroughSection1() {
  return (
    <section className="bg-black bg-dots text-white relative">
      <div className="relative z-10 container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">
            Learn & Grow with Codsphere
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            HOW IT WORKS — "Your Setup in Three Steps"
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Get hands-on within minutes. No coding. No setup fees.
          </p>
        </div>

        {/* Video section */}
        <div className="mb-12 flex justify-center relative">
          <div className="absolute left-8 bottom-8 flex items-center justify-center w-20 h-20 rounded-full border-4 border-black bg-transparent">
            <PlayIcon size={32} strokeWidth={3} className="font-bold text-black" />
          </div>

          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yea9bJEuRDWFXE80ON8RlosoqqIFSD.png"
            alt="Login to Codsphere mockup"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Steps */}
        <div className="flex justify-center mb-5">
          <div className="text-start">
            <p className="text-[20px] font-light">
              <span className="block">
                Step 1: Create your account and personalize your workspace.
              </span>
              <span className="block">
                Step 2: Import your customer data or sync existing tools.
              </span>
              <span className="block">
                Step 3: Start automating — from lead management to invoicing.
              </span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Ready to see why 100+ teams trust CodSphere?</p>
          <Link href="/success-stories">
            <button className="rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                  <ArrowRight />
                </div>
                Explore our Success Stories
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
