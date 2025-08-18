"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
  return (
    <div className="pt-10">
      <div className="cs-container">
        <div className="mx-auto flex h-[70px] max-w-[1149px] items-center justify-between rounded-[35px] bg-black px-6">
          {/* Logo */}
          <Link href="/" className="relative h-[27px] w-[139px]">
            <Image src="/images/logo-white.svg" alt="CodSphere" fill className="object-contain" />
          </Link>

          {/* Nav */}
          <nav className="hidden items-center gap-8 text-white md:flex">
            <Link href="/" className="text-[18px] leading-[21px]">Home</Link>
            <Link href="/about" className="text-[18px] leading-[21px]">About us</Link>
            <Link href="/services" className="text-[18px] leading-[21px]">Services</Link>
            <Link href="/case-studies" className="text-[18px] leading-[21px]">Case Studies</Link>
            <Link href="/contact" className="text-[18px] leading-[21px]">Contact</Link>
            <Link href="/insights" className="text-[18px] leading-[21px]">Insights</Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-[30px] bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}
