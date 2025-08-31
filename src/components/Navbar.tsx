'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <nav className="w-[1149px] h-[70px] bg-black rounded-[35px] flex items-center justify-between px-8">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-[86px]">
            <Image
              src="/logo-white.svg"
              alt="Cod Sphere"
              width={150}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          
          {/* Navigation Links - Equal spacing between all items */}
          <div className="flex items-center">
            <Link href="/" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4">
              Home
            </Link>
            <Link href="/about" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4">
              About us
            </Link>
            <Link href="/services" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4">
              Services
            </Link>
            <Link href="/case-studies" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4">
              Case Studies
            </Link>
            <Link href="/contact" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4">
              Contact
            </Link>
            <Link href="/blog" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4">
              Insights
            </Link>
          </div>
        </div>
        
        {/* CTA Button */}
        <button className="bg-white text-black px-7 py-3 rounded-[30px] text-[15px] font-normal hover:bg-gray-100 transition-colors whitespace-nowrap">
          Start Your Free Trial
        </button>
      </nav>
    </div>
  );
}