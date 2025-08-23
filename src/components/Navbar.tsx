'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full max-w-[1149px] mx-auto h-[70px] bg-black rounded-[35px] flex items-center justify-between px-[40px]">
      <div className="flex items-center gap-[40px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <span className="text-white font-medium text-[16px] tracking-wider">COD SPHERE</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-[36px]">
          <Link href="/" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors">
            About us
          </Link>
          <Link href="/services" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="/case-studies" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors">
            Case Studies
          </Link>
          <Link href="/contact" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Link href="/insights" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors">
            Insights
          </Link>
        </div>
      </div>
      
      {/* CTA Button */}
      <button className="bg-white text-black px-[29px] py-[15px] rounded-[30px] text-[15px] font-normal hover:bg-gray-100 transition-colors whitespace-nowrap">
        Start Your Free Trial
      </button>
    </nav>
  );
}
