'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [forceHamburger, setForceHamburger] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check for overflow and force hamburger menu if needed
  useEffect(() => {
    const checkOverflow = () => {
      if (navRef.current) {
        const navWidth = navRef.current.offsetWidth;
        const leftSection = navRef.current.children[0];
        const rightButtons = Array.from(navRef.current.children).slice(1);
        
        let totalContentWidth = 0;
        
        // Calculate total width of all content
        if (leftSection) {
          totalContentWidth += leftSection.getBoundingClientRect().width;
        }
        
        rightButtons.forEach((button) => {
          if (button instanceof HTMLElement && !button.classList.contains('hidden')) {
            totalContentWidth += button.getBoundingClientRect().width;
          }
        });
        
        // Add padding for safety
        totalContentWidth += 40;
        
        // Conservative overflow detection - only trigger when absolutely necessary
        setForceHamburger(totalContentWidth > navWidth * 0.95);
      }
    };

    const handleResize = () => {
      // Single check on resize to prevent layout jumps
      setTimeout(checkOverflow, 100);
    };

    // Initial check only when component mounts
    setTimeout(checkOverflow, 200);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <nav ref={navRef} className="w-full max-w-[1149px] min-w-0 h-[70px] bg-black rounded-[35px] flex items-center justify-between px-2 sm:px-4 md:px-6 xl:px-8 relative">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center min-w-0 flex-1">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-1 sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 z-50 flex-shrink-0">
            <Image
              src="/logo-icon-white.svg"
              alt="Cod Sphere"
              width={80}
              height={22}
              className="object-contain sm:w-[100px] sm:h-[27px] md:w-[120px] md:h-[32px] lg:w-[130px] lg:h-[35px] xl:w-[150px] xl:h-[40px]"
              priority
            />
          </Link>
          
          {/* Compact Navigation Links - Show when space is limited and not forced to hamburger */}
          <div className={`navbar-links-compact items-center min-w-0 flex-shrink overflow-hidden ${forceHamburger ? 'hidden' : ''}`}>
            <Link href="/" className="text-white text-[16px] font-normal hover:text-gray-300 transition-colors px-3 whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-white text-[16px] font-normal hover:text-gray-300 transition-colors px-3 whitespace-nowrap">
              About
            </Link>
            <Link href="/services" className="text-white text-[16px] font-normal hover:text-gray-300 transition-colors px-3 whitespace-nowrap">
              Services
            </Link>
            <Link href="/case-studies" className="text-white text-[16px] font-normal hover:text-gray-300 transition-colors px-3 whitespace-nowrap">
              Cases
            </Link>
            <Link href="/contact" className="text-white text-[16px] font-normal hover:text-gray-300 transition-colors px-3 whitespace-nowrap">
              Contact
            </Link>
            <Link href="/blog" className="text-white text-[16px] font-normal hover:text-gray-300 transition-colors px-3 whitespace-nowrap">
              Insights
            </Link>
          </div>

          {/* Full Navigation Links - Show on very large screens and not forced to hamburger */}
          <div className={`navbar-links-full items-center min-w-0 flex-shrink overflow-hidden ${forceHamburger ? 'hidden' : ''}`}>
            <Link href="/" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4 whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4 whitespace-nowrap">
              About us
            </Link>
            <Link href="/services" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4 whitespace-nowrap">
              Services
            </Link>
            <Link href="/case-studies" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4 whitespace-nowrap">
              Case Studies
            </Link>
            <Link href="/contact" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4 whitespace-nowrap">
              Contact
            </Link>
            <Link href="/blog" className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors px-4 whitespace-nowrap">
              Insights
            </Link>
          </div>
        </div>
        
        {/* Menu Button - Show when space is limited or forced by overflow */}
        <button
          onClick={toggleMenu}
          className={`text-white p-2 z-50 flex-shrink-0 ${forceHamburger ? 'block' : ''} navbar-menu-button`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* CTA Button - Show when there's enough space and not forced to hamburger */}
        <button className={`bg-white text-black px-4 md:px-5 lg:px-6 xl:px-7 py-2 md:py-2.5 lg:py-3 rounded-[30px] text-[13px] md:text-[14px] lg:text-[15px] font-normal hover:bg-gray-100 transition-colors whitespace-nowrap z-40 flex-shrink-0 ${forceHamburger ? 'hidden' : ''} navbar-cta-button`}>
          Start Your Free Trial
        </button>

        {/* Mobile/Tablet Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30" onClick={toggleMenu} />
        )}

        {/* Mobile/Tablet Menu */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-black transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col pt-24 px-6">
            <Link
              href="/"
              className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors py-4 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors py-4 border-b border-gray-700"
              onClick={toggleMenu}
            >
              About us
            </Link>
            <Link
              href="/services"
              className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors py-4 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors py-4 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors py-4 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-white text-[18px] font-normal hover:text-gray-300 transition-colors py-4 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Insights
            </Link>
            
            {/* Mobile CTA Button in menu */}
            <div className="mt-6">
              <button
                className="bg-white text-black px-6 py-3 rounded-[30px] text-[16px] font-normal hover:bg-gray-100 transition-colors w-full"
                onClick={toggleMenu}
              >
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}