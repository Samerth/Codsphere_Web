"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Insights() {
  return (
    <section className="bg-black text-white">
      {/* dotted background */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-dot h-full w-full text-white" />
        </div>

        <Frame>
          {/* headings */}
          <div className="relative mx-auto max-w-3xl text-center pt-10 md:pt-14">
            <div className="font-damion text-[35px] leading-[45px] text-[#828282]">
              Insights
            </div>
            <h2 className="mt-1 text-[40px] leading-[52px] font-semibold">
              Startup or Scaleup — We’ve Got the Stack.
            </h2>
            <p className="mt-2 text-[20px] leading-[26px] text-white">
              Explore the four pillars we build around — and why brands keep coming back
            </p>
          </div>

          {/* cards */}
          <div className="relative grid gap-6 md:grid-cols-2 pt-8 pb-10">
            {/* LEFT: feature (Latest) */}
            <article className="relative overflow-hidden rounded-[14px]">
              {/* background image */}
              <div className="relative aspect-[16/10] md:aspect-[16/9]">
                <Image
                  src="/images/home/blog-section-1.jpg" // <- put your image 
                  alt="Team meeting"
                  fill
                  priority
                  className="object-cover"
                />
                {/* soft darken overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                {/* badge */}
                <span className="absolute left-4 top-4 rounded-[13px] bg-[#608BF3] px-4 py-2 text-[20px] font-bold">
                  Latest
                </span>
                {/* title over image */}
                <h3 className="absolute bottom-6 left-6 right-6 text-[25px] leading-[29px] font-medium drop-shadow">
                  The Hidden ROI of Automated Invoicing for Small Teams
                </h3>
              </div>

              {/* view all guides link */}
              <div className="px-6 py-4">
                <ViewLink href="/insights/guides">View All Guides</ViewLink>
              </div>
            </article>

            {/* RIGHT: blog card */}
            <article className="rounded-[14px] bg-black/40 ring-1 ring-white/10">
              {/* image */}
              <div className="relative h-56 overflow-hidden rounded-[14px]">
                <Image
                  src="/images/home/blog-section-2.jpg" // <- replace with your image
                  alt="UX wireframes on phone and board"
                  fill
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-[13px] bg-black px-4 py-2 text-[20px] font-bold">
                  Blog
                </span>
              </div>

              {/* content */}
              <div className="px-6 pb-6 pt-4">
                <div className="mb-2 flex items-center justify-between text-[15px] leading-[18px] text-white">
                  <span>Updated: 07.26.2025</span>
                  <span>By SohYoon Atac</span>
                </div>

                <h3 className="text-[25px] leading-[29px] font-semibold">
                  Why Your CRM Should Be Built Around Your Sales Process – Not the Other Way Around
                </h3>

                <p className="mt-3 max-w-[420px] text-[16px] leading-[19px] text-white">
                  Spoiler: Looking good isn’t enough. Your site should convert, automate, and talk to your CRM.
                  Here’s how to make it pull its weight.
                </p>

                <div className="mt-5">
                  <ViewLink href="/blog">View All Posts</ViewLink>
                </div>
              </div>
            </article>
          </div>
        </Frame>
      </div>
    </section>
  )
}

function ViewLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-[15px] font-semibold hover:underline"
    >
      {children}
      <span className="inline-grid place-items-center h-[17px] w-[17px] rounded-full bg-white text-black">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  // same content frame used in footer to match 1440 → 1260 + ~90px gutter
  return <div className="relative mx-auto max-w-[1260px] px-6 md:px-10 xl:px-[90px]">{children}</div>
}
