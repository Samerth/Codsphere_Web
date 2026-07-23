"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MapPin, Phone, Menu, X, Truck, Search, ChevronRight, ExternalLink } from "lucide-react";

/* ---------------- MENU ITEM WITH SUBMENU ARROW ---------------- */

interface MenuItemProps {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  onClick?: () => void;
}

function MenuItem({ label, href, hasSubmenu = false, onClick }: MenuItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between py-4 border-b border-white/10 transition-all duration-300"
    >
      <span className="text-white font-black text-lg tracking-wide relative">
        {label}
        {/* Underline animation */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5A623] transition-all duration-300 ease-out group-hover:w-full" />
      </span>
      {hasSubmenu && (
        <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-[#F5A623] group-hover:translate-x-1 transition-all duration-300" />
      )}
    </Link>
  );
}

/* ---------------- SLIDE-IN MENU ---------------- */

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to trigger animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const menuItems = [
    { label: "MOVING", href: "/movers/moving", hasSubmenu: true },
    { label: "JUNK REMOVAL", href: "/movers/junk-removal", hasSubmenu: false },
    { label: "STORAGE", href: "/movers/storage", hasSubmenu: true },
    { label: "REVIEWS", href: "/movers/reviews", hasSubmenu: false },
    { label: "RESOURCES", href: "/movers/resources", hasSubmenu: true },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] z-50 flex flex-col transform transition-transform duration-300 ease-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Blue Header */}
        <div className="bg-[#3B82F6] px-6 py-6 flex items-center justify-between">
          <h2 className="text-white text-2xl font-black tracking-wide">MAIN MENU</h2>
          <button
            onClick={onClose}
            className="flex flex-col items-center text-white hover:text-white/80 transition-colors"
          >
            <X className="w-6 h-6" />
            <span className="text-xs font-bold mt-1">CLOSE</span>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 bg-[#111] overflow-y-auto">
          {/* Search Bar */}
          <div className="px-6 py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full bg-[#222] text-white px-4 py-3 pr-12 text-sm font-medium tracking-wider placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            </div>
          </div>

          {/* Blue accent bar */}
          <div className="h-1 bg-[#3B82F6] mx-6" />

          {/* Menu Items */}
          <nav className="px-6 mt-4">
            {menuItems.map((item, i) => (
              <MenuItem
                key={i}
                label={item.label}
                href={item.href}
                hasSubmenu={item.hasSubmenu}
                onClick={onClose}
              />
            ))}
          </nav>

          {/* Free Quote Button */}
          <div className="px-6 py-8">
            <Link
              href="/movers/quote"
              onClick={onClose}
              className="block w-full bg-[#F5A623] text-black text-center font-black text-lg py-4 rounded hover:bg-[#e09000] transition-colors duration-300"
            >
              FREE QUOTE
            </Link>
          </div>

          {/* Footer Links */}
          <div className="px-6 pb-8 flex items-center gap-6">
            <a
              href="/swift-move/careers"
              className="flex items-center gap-1 text-white hover:text-[#F5A623] transition-colors duration-300 group"
            >
              <span className="font-medium relative">
                Careers
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-white group-hover:bg-[#F5A623] transition-colors duration-300" />
              </span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/swift-move/franchise"
              className="flex items-center gap-1 text-white hover:text-[#F5A623] transition-colors duration-300 group"
            >
              <span className="font-medium relative">
                Own a Franchise
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-white group-hover:bg-[#F5A623] transition-colors duration-300" />
              </span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------- NAVBAR COMPONENT ---------------- */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Slide Menu */}
      <SlideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Top Bar */}
      <div className="bg-[#111] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2">
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/swift-move/locations"
              className="flex items-center gap-2 text-[#F5A623] hover:text-[#e09000] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-medium">FIND A LOCATION</span>
            </Link>
            <a
              href="tel:8007200411"
              className="flex items-center gap-2 text-white hover:text-[#F5A623] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>800.720.0411</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-30 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Left */}
            <Link href="/movers/home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5A623] rounded flex items-center justify-center">
                <Truck className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl lg:text-2xl font-black text-white tracking-tight">
                SWIFTMOVE
              </span>
            </Link>

            {/* Right Side - Free Quote Button & Menu */}
            <div className="flex items-center gap-4">
              {/* Free Quote Button */}
              <Link
                href="/movers/quote"
                className="hidden sm:block bg-[#F5A623] text-black font-bold px-6 py-3 rounded hover:bg-[#e09000] transition-colors"
              >
                FREE QUOTE
              </Link>

              {/* Menu Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className="flex flex-col items-center text-white hover:text-[#F5A623] transition-colors"
              >
                <Menu className="w-6 h-6" />
                <span className="text-xs font-bold mt-1">MENU</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
