"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo-dark.svg" className="h-6 w-auto" alt="COD SPHERE" />
        </Link>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          <li><Link href="#">Home</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="#work">Case Studies</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="#insights">Insights</Link></li>
        </ul>

        <Button className="rounded-full" size="sm">Start Your Free Trial</Button>
      </nav>
    </header>
  );
}
