"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import web_page_logo_white from "@/assets/web-page-logo-white.svg";
import web_page_logo_icon_white from "@/assets/web-page-logo-icon-white.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Digital Storefront", href: "/solutions/digital-storefront", description: "Make custom work easier to buy" },
      { label: "Order Flow", href: "/solutions/order-flow", description: "See what is stuck before it becomes late" },
      { label: "Custom Extensions", href: "/solutions/custom-extensions", description: "Build the missing piece" },
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
  const [forceHamburger, setForceHamburger] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const overlayRoutes = ["/", "/platform", "/projects", "/pricing", "/solutions", "/industries/print-sign"];
  const isOverlayPage = overlayRoutes.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      if (navRef.current) {
        const navWidth = navRef.current.offsetWidth;
        const leftSection = navRef.current.children[0];
        const rightButtons = Array.from(navRef.current.children).slice(1);

        let totalContentWidth = 0;
        if (leftSection) {
          totalContentWidth += leftSection.getBoundingClientRect().width;
        }
        rightButtons.forEach((button) => {
          if (button instanceof HTMLElement && !button.classList.contains("hidden")) {
            totalContentWidth += button.getBoundingClientRect().width;
          }
        });
        totalContentWidth += 40;
        setForceHamburger(totalContentWidth > navWidth * 0.95);
      }
    };

    const handleResize = () => {
      setTimeout(checkOverflow, 100);
    };

    setTimeout(checkOverflow, 200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        (!isOverlayPage || isScrolled) && "bg-black"
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
          <div className={cn("hidden lg:flex items-center gap-0", forceHamburger && "!hidden")}>
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
                    "flex items-center gap-1 text-white text-[16px] px-4 py-1.5 rounded-full transition-colors border-2 border-transparent",
                    "hover:text-gray-300",
                    isActive(link.href) && "bg-white text-black! border-white"
                  )}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-72">
                    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 hover:bg-gray-800 transition-colors border-b border-gray-700 last:border-b-0"
                        >
                          <div className="text-white font-medium">{item.label}</div>
                          <div className="text-gray-400 text-sm">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="text-white text-[16px] hover:bg-white hover:text-black transition-colors whitespace-nowrap border-2 border-white rounded-full px-5 py-2 ml-3"
            >
              Show us your order flow
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <button
              onClick={toggleMenu}
              className={cn(
                "text-white hover:text-gray-300 p-2 z-50 shrink-0 touch-target transition-colors lg:hidden",
                forceHamburger && "!block"
              )}
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
              "fixed top-0 right-0 h-full w-full xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[400px] max-w-[400px] bg-gray-900 border-l border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-40",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
            style={{ backgroundColor: "#111827" }}
          >
            {/* Menu Header */}
            <div
              className="relative flex justify-center items-center px-6 py-8 border-b border-gray-700"
              style={{ backgroundColor: "#111827" }}
            >
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

            <div
              className="flex flex-col py-4 px-6"
              style={{ backgroundColor: "#111827" }}
            >
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-4 text-white text-[16px] border-b border-gray-700 transition-colors hover:bg-gray-800",
                      isActive(link.href) && "text-cyan-400"
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
                          className="block py-2 text-gray-400 text-[14px] hover:text-white transition-colors"
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
                className="block w-full text-center bg-white text-black text-[16px] font-medium px-6 py-3 rounded-full mt-6 hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                Show us your order flow
              </Link>

              {/* Sign in link for existing customers */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-500 text-sm mb-3">Existing customers</p>
                <div className="flex gap-4">
                  <a
                    href="https://codsphere.chat"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                    onClick={toggleMenu}
                  >
                    CodChat
                  </a>
                  <a
                    href="https://codcrm.com"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                    onClick={toggleMenu}
                  >
                    CodCRM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
