"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import web_page_logo_white from "@/assets/Logo_Full.svg";
import web_page_logo_icon_white from "@/assets/web-page-logo-icon-white.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Digital Storefront", href: "/solutions/digital-storefront", description: "Sell custom work online" },
      { label: "Order Flow", href: "/solutions/order-flow", description: "Keep every order moving" },
      { label: "Custom Extensions", href: "/solutions/custom-extensions", description: "Build what you need" },
    ],
  },
  { label: "Platform", href: "/platform" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Security", href: "/security" },
  { label: "Company", href: "/company" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const overlayRoutes = ["/", "/platform", "/projects", "/pricing"];
  const isOverlayPage = overlayRoutes.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4 transition-all duration-300",
        (!isOverlayPage || isScrolled) && "bg-[#0a1628]/95 backdrop-blur-sm"
      )}
    >
      <div className="container-wrapper">
        <nav
          ref={navRef}
          className="w-full h-12 sm:h-14 lg:h-[72px] rounded-full flex items-center justify-between px-3 sm:px-5 relative"
        >
          {/* Logo */}
          <Link href="/" aria-label="CodSphere" className="flex items-stretch shrink-0">
            <Image
              src={web_page_logo_white}
              alt="CodSphere logo"
              className="object-contain h-[25px] sm:h-7 lg:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleDropdownEnter(link.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 text-white text-[16px] px-4 py-2 rounded-full transition-colors",
                    "hover:bg-white/10",
                    isActive(link.href) && "bg-white/15"
                  )}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-72">
                    <div className="bg-[#0a1628] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                        >
                          <div className="text-white font-medium">{item.label}</div>
                          <div className="text-white/60 text-sm">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-[15px] font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shrink-0"
          >
            Show Us Your Order Flow
          </Link>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-gray-300 p-2 z-50"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          )}

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              onClick={toggleMenu}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={cn(
              "fixed top-0 right-0 h-full w-full xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[400px] max-w-[400px] bg-[#0a1628] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out z-40",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* Menu Header */}
            <div className="relative flex justify-center items-center px-6 py-8 border-b border-white/10">
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <Image
                src={web_page_logo_icon_white}
                alt="CodSphere"
                width={90}
                height={32}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col py-4 px-6">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-4 text-white text-[16px] border-b border-white/10 transition-colors",
                      isActive(link.href) && "text-[#14b8a6]"
                    )}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-white/70 text-[14px] hover:text-white transition-colors"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-[16px] font-medium px-6 py-3 rounded-full mt-6"
                onClick={toggleMenu}
              >
                Show Us Your Order Flow
              </Link>

              {/* Sign in link for existing customers */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm mb-3">Existing customers</p>
                <div className="flex gap-4">
                  <Link
                    href="https://app.codchat.com"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                    onClick={toggleMenu}
                  >
                    CodChat
                  </Link>
                  <Link
                    href="https://app.codcrm.com"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                    onClick={toggleMenu}
                  >
                    CodCRM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
