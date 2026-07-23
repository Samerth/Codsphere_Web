"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Warehouse,
  Lock,
  Thermometer,
  Clock,
  Shield,
  Camera,
  Key,
  Truck,
  Home,
  Building2,
  Snowflake,
  Sun,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  Star,
  ChevronDown,
  Box,
  Sofa,
  Car,
  FileBox,
  Package,
  Bed,
  Monitor,
  Archive,
  Search,
} from "lucide-react";

/* ---------------- WAVY LINE SVG ---------------- */

function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      className={`w-48 h-5 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
        stroke="#3B82F6"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

/* ---------------- STORAGE TYPE TAB ---------------- */

interface StorageType {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  bestFor: string[];
}

const storageTypes: StorageType[] = [
  {
    id: "self-storage",
    icon: <Warehouse className="w-6 h-6" />,
    title: "SELF-STORAGE",
    description:
      "Traditional storage units at our secure facilities. Access your belongings whenever you need them with flexible rental terms.",
    features: [
      "24/7 access available",
      "Month-to-month leases",
      "Various unit sizes",
      "Drive-up units available",
      "On-site management",
    ],
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1000&auto=format&fit=crop",
    bestFor: ["Long-term storage", "Frequent access needs", "Business inventory"],
  },
  {
    id: "portable-storage",
    icon: <Box className="w-6 h-6" />,
    title: "PORTABLE STORAGE",
    description:
      "We deliver a storage container to your location. Pack at your own pace, and we'll pick it up and store it securely.",
    features: [
      "Delivered to your door",
      "Pack on your schedule",
      "No truck rental needed",
      "Ground-level loading",
      "Flexible pickup times",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    bestFor: ["Moving transitions", "Home renovations", "Decluttering projects"],
  },
  {
    id: "climate-controlled",
    icon: <Thermometer className="w-6 h-6" />,
    title: "CLIMATE-CONTROLLED",
    description:
      "Temperature and humidity regulated units to protect sensitive items from extreme conditions year-round.",
    features: [
      "Temperature maintained 55-85°F",
      "Humidity control",
      "Interior units",
      "Ideal for valuables",
      "Enhanced protection",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop",
    bestFor: ["Electronics & media", "Antiques & artwork", "Wine collections", "Documents"],
  },
  {
    id: "warehouse",
    icon: <Building2 className="w-6 h-6" />,
    title: "WAREHOUSE STORAGE",
    description:
      "Large-scale storage solutions for businesses. Inventory management, fulfillment services, and bulk storage available.",
    features: [
      "Palletized storage",
      "Inventory tracking",
      "Receiving services",
      "Forklift access",
      "Commercial terms",
    ],
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop",
    bestFor: ["E-commerce businesses", "Seasonal inventory", "Commercial equipment"],
  },
];

/* ---------------- UNIT SIZE DATA ---------------- */

interface UnitSize {
  size: string;
  dimensions: string;
  sqft: number;
  description: string;
  fits: string[];
  icon: React.ReactNode;
  price: string;
  popular?: boolean;
}

const unitSizes: UnitSize[] = [
  {
    size: "Small",
    dimensions: "5' x 5'",
    sqft: 25,
    description: "Closet-sized unit perfect for boxes and small items.",
    fits: ["20-30 boxes", "Small furniture", "Seasonal items"],
    icon: <FileBox className="w-8 h-8 text-[#F5A623]" />,
    price: "$49",
  },
  {
    size: "Medium",
    dimensions: "5' x 10'",
    sqft: 50,
    description: "Walk-in closet size. Great for a studio or small apartment.",
    fits: ["Studio apartment", "Mattress set", "Several boxes"],
    icon: <Box className="w-8 h-8 text-[#F5A623]" />,
    price: "$79",
  },
  {
    size: "Large",
    dimensions: "10' x 10'",
    sqft: 100,
    description: "Half a one-car garage. Fits a 1-2 bedroom apartment.",
    fits: ["1-2 BR apartment", "Appliances", "Furniture sets"],
    icon: <Sofa className="w-8 h-8 text-[#F5A623]" />,
    price: "$119",
    popular: true,
  },
  {
    size: "X-Large",
    dimensions: "10' x 15'",
    sqft: 150,
    description: "Large room size. Perfect for a 2-3 bedroom home.",
    fits: ["2-3 BR home", "Large furniture", "Multiple rooms"],
    icon: <Bed className="w-8 h-8 text-[#F5A623]" />,
    price: "$159",
  },
  {
    size: "XXL",
    dimensions: "10' x 20'",
    sqft: 200,
    description: "One-car garage size. Stores a 3-4 bedroom house.",
    fits: ["3-4 BR house", "Vehicles", "Business inventory"],
    icon: <Car className="w-8 h-8 text-[#F5A623]" />,
    price: "$199",
  },
  {
    size: "Jumbo",
    dimensions: "10' x 30'",
    sqft: 300,
    description: "1.5 car garage. Ideal for large homes or commercial use.",
    fits: ["4-5 BR house", "Multiple vehicles", "Commercial goods"],
    icon: <Warehouse className="w-8 h-8 text-[#F5A623]" />,
    price: "$279",
  },
];

/* ---------------- SECURITY FEATURES ---------------- */

const securityFeatures = [
  {
    icon: <Camera className="w-10 h-10 text-[#3B82F6]" />,
    title: "24/7 Video Surveillance",
    description: "High-definition cameras monitor every corner of our facilities around the clock.",
  },
  {
    icon: <Lock className="w-10 h-10 text-[#3B82F6]" />,
    title: "Individual Unit Alarms",
    description:
      "Each unit has its own alarm system that triggers if unauthorized access is attempted.",
  },
  {
    icon: <Key className="w-10 h-10 text-[#3B82F6]" />,
    title: "Electronic Gate Access",
    description:
      "Personalized access codes ensure only authorized customers can enter the facility.",
  },
  {
    icon: <Shield className="w-10 h-10 text-[#3B82F6]" />,
    title: "On-Site Management",
    description: "Professional managers on-site during business hours for assistance and security.",
  },
];

/* ---------------- USE CASES ---------------- */

const useCases = [
  {
    icon: <Truck className="w-6 h-6 text-[#F5A623]" />,
    title: "Moving & Relocation",
    description: "Need somewhere to store your stuff between homes? We've got you covered.",
  },
  {
    icon: <Home className="w-6 h-6 text-[#F5A623]" />,
    title: "Home Renovation",
    description: "Protect your belongings from dust and damage during remodeling projects.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#F5A623]" />,
    title: "Business Storage",
    description: "Store inventory, equipment, documents, or seasonal displays securely.",
  },
  {
    icon: <Archive className="w-6 h-6 text-[#F5A623]" />,
    title: "Decluttering",
    description:
      "Free up space at home without getting rid of items you're not ready to part with.",
  },
  {
    icon: <Monitor className="w-6 h-6 text-[#F5A623]" />,
    title: "Seasonal Items",
    description: "Store holiday decorations, sports equipment, or seasonal clothing.",
  },
  {
    icon: <Package className="w-6 h-6 text-[#F5A623]" />,
    title: "Life Transitions",
    description: "College, military deployment, downsizing—we're here for life's changes.",
  },
];

/* ---------------- FAQ DATA ---------------- */

const faqs = [
  {
    question: "What size storage unit do I need?",
    answer:
      "The size depends on what you're storing. A small 5x5 unit works for boxes and small items. A 10x10 fits a 1-2 bedroom apartment. For a full house, consider 10x20 or larger. Our team can help you choose the right size—it's better to go slightly larger to ensure everything fits comfortably.",
  },
  {
    question: "Can I access my storage unit anytime?",
    answer:
      "Most of our facilities offer 24/7 access for customers. Some locations have specific access hours. When you rent a unit, you'll receive a personal access code for the electronic gate. Check with your specific location for their access policy.",
  },
  {
    question: "Is my stuff insured while in storage?",
    answer:
      "Your homeowner's or renter's insurance may cover items in storage—check with your provider. We also offer affordable storage protection plans starting at just $10/month that cover your belongings against theft, fire, and other damage.",
  },
  {
    question: "Do you offer climate-controlled storage?",
    answer:
      "Yes! Climate-controlled units maintain temperatures between 55-85°F year-round and control humidity. This is recommended for electronics, wooden furniture, artwork, wine, documents, and anything sensitive to temperature extremes.",
  },
  {
    question: "How does portable storage work?",
    answer:
      "We deliver an empty container to your location. You pack it at your own pace (no rush!). When you're ready, we pick it up and store it at our secure facility. Need your stuff? We deliver it back to you or to a new address. It's storage that comes to you!",
  },
  {
    question: "What can't I store?",
    answer:
      "For safety reasons, you cannot store hazardous materials, flammables, explosives, perishable food, live animals, or illegal items. If you're unsure about a specific item, just ask our team.",
  },
];

/* ---------------- TESTIMONIALS ---------------- */

const testimonials = [
  {
    name: "Patricia H.",
    location: "San Diego, CA",
    text: "Used their portable storage during our home remodel. So convenient! They dropped off the container, we packed at our own pace, and they stored it until we were ready. Stress-free!",
    rating: 5,
  },
  {
    name: "Mark D.",
    location: "Atlanta, GA",
    text: "I've had a climate-controlled unit for 2 years storing my vintage guitar collection. The facility is always clean, secure, and my instruments are in perfect condition.",
    rating: 5,
  },
  {
    name: "Lisa & Tom R.",
    location: "Boston, MA",
    text: "SwiftMove stored our entire house while we were between homes for 3 months. Everything arrived in perfect condition. Their team was professional and the price was fair.",
    rating: 5,
  },
];

/* ---------------- FAQ ITEM COMPONENT ---------------- */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-white font-bold text-lg group-hover:text-[#F5A623] transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#F5A623] transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-white/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function StoragePage() {
  const [mounted, setMounted] = useState(false);
  const [activeStorageType, setActiveStorageType] = useState("self-storage");
  const pageRef = useRef<HTMLDivElement>(null);

  const activeType = storageTypes.find((t) => t.id === activeStorageType) || storageTypes[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    let ctx: any;

    const initGSAP = async () => {
      try {
        const gsapModule = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const gsap = gsapModule.default;

        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Hero animations
          gsap.fromTo(
            ".hero-title",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 },
          );

          gsap.fromTo(
            ".hero-subtitle",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.4 },
          );

          gsap.fromTo(
            ".hero-cta",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.6 },
          );

          // Unit size cards
          gsap.fromTo(
            ".unit-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".units-section", start: "top 75%" },
            },
          );

          // Map section
          gsap.fromTo(
            ".map-section",
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: ".map-section", start: "top 80%" },
            },
          );

          // Security features
          gsap.fromTo(
            ".security-card",
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".security-section", start: "top 75%" },
            },
          );

          // Use cases
          gsap.fromTo(
            ".use-case-card",
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: { trigger: ".use-cases-section", start: "top 75%" },
            },
          );

          // Testimonials
          gsap.fromTo(
            ".testimonial-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: { trigger: ".testimonials-section", start: "top 75%" },
            },
          );

          // FAQ
          gsap.fromTo(
            ".faq-item",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".faq-section", start: "top 75%" },
            },
          );
        }, pageRef);
      } catch (error) {
        console.warn("GSAP animation failed");
      }
    };

    initGSAP();
    return () => {
      if (ctx) ctx.revert();
    };
  }, [mounted]);

  return (
    <div ref={pageRef} className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
            alt="Storage facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                <Link href="/movers/home" className="hover:text-[#F5A623] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-[#F5A623]">Storage</span>
              </div>

              {/* Title */}
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                SECURE <span className="text-[#F5A623]">STORAGE</span> SOLUTIONS
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-white/70 text-lg lg:text-xl mb-8 leading-relaxed">
                Whether you need short-term storage during a move or long-term space for your
                business, we have flexible storage options to fit your needs and budget.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta flex flex-wrap gap-4">
                <Link
                  href="/movers/quote"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded hover:bg-[#e09000] transition-colors"
                >
                  FIND STORAGE
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="1"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded hover:bg-white hover:text-black transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="bg-[#3B82F6] py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-white">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-sm">24/7 ACCESS</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              <span className="font-bold text-sm">VIDEO MONITORED</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5" />
              <span className="font-bold text-sm">CLIMATE OPTIONS</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-bold text-sm">FULLY INSURED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Types Section - Tabbed Interface */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              STORAGE <span className="text-[#F5A623]">OPTIONS</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the storage solution that works best for your situation.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {storageTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveStorageType(type.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeStorageType === type.id
                    ? "bg-[#F5A623] text-black"
                    : "bg-[#1a1a1a] text-white/70 hover:text-white border border-white/10 hover:border-white/30"
                }`}
              >
                {type.icon}
                <span>{type.title}</span>
              </button>
            ))}
          </div>

          {/* Active Storage Type Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={activeType.image}
                  alt={activeType.title}
                  className="w-full h-[400px] object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#3B82F6] rounded-lg -z-10" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                {activeType.title}
              </h3>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">{activeType.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-[#F5A623] font-bold text-sm tracking-wider mb-4">
                  KEY FEATURES
                </h4>
                <ul className="space-y-3">
                  {activeType.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#F5A623] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="bg-[#111] border border-white/10 rounded-lg p-6">
                <h4 className="text-white font-bold mb-3">PERFECT FOR:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeType.bestFor.map((item, i) => (
                    <span
                      key={i}
                      className="bg-[#3B82F6]/20 text-[#3B82F6] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Sizes Section */}
      <section className="units-section bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              FIND YOUR <span className="text-[#F5A623]">PERFECT SIZE</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From small lockers to large warehouse spaces, we have the right size for your needs.
            </p>
          </div>

          {/* Unit Size Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitSizes.map((unit, i) => (
              <div
                key={i}
                className={`unit-card relative bg-[#111] border rounded-lg p-6 hover:border-[#3B82F6]/50 transition-all duration-300 ${
                  unit.popular ? "border-[#F5A623]" : "border-white/10"
                }`}
              >
                {/* Popular Badge */}
                {unit.popular && (
                  <div className="absolute -top-3 left-6 bg-[#F5A623] text-black font-bold text-xs px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl mb-1">{unit.size}</h3>
                    <div className="text-[#3B82F6] font-bold text-lg">{unit.dimensions}</div>
                    <div className="text-white/50 text-sm">{unit.sqft} sq ft</div>
                  </div>
                  {unit.icon}
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm mb-4">{unit.description}</p>

                {/* What Fits */}
                <div className="mb-6">
                  <div className="text-white/50 text-xs font-bold tracking-wider mb-2">FITS:</div>
                  <ul className="space-y-1">
                    {unit.fits.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[#F5A623] text-2xl font-black">{unit.price}</span>
                    <span className="text-white/50 text-sm">/month</span>
                  </div>
                  <Link
                    href="/movers/quote"
                    className="text-[#3B82F6] font-bold text-sm hover:text-[#F5A623] transition-colors flex items-center gap-1"
                  >
                    RESERVE
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Size Guide CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/50 mb-4">Not sure what size you need?</p>
            <Link
              href="/movers/quote"
              className="inline-flex items-center gap-2 text-[#F5A623] font-bold hover:text-[#e09000] transition-colors"
            >
              USE OUR SIZE CALCULATOR
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Find Storage Near Me - Map Section */}
      <section className="map-section bg-[#F5A623] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
              FIND STORAGE NEAR ME
            </h2>
            <p className="text-black/70 text-lg">
              See if storage is available in your area by using the map below.
            </p>
          </div>

          {/* Map Container */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            {/* Map Wrapper */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[550px] bg-[#B4D7E8]">
              {/* Static Map Image as background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/-98,39,3,0/1200x600?access_token=pk.placeholder')`,
                  backgroundColor: "#B4D7E8",
                }}
              />

              {/* SVG World Map Overlay */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Ocean Background */}
                <rect width="1000" height="500" fill="#B4D7E8" />

                {/* Simplified Continents */}
                {/* North America */}
                <path
                  d="M150,80 L200,70 L280,90 L300,120 L280,180 L250,220 L200,280 L180,320 L150,300 L120,250 L100,200 L80,150 L100,100 Z"
                  fill="#E5E5E5"
                />
                {/* South America */}
                <path
                  d="M200,320 L240,340 L260,400 L240,450 L200,480 L180,450 L190,380 Z"
                  fill="#E5E5E5"
                />
                {/* Europe */}
                <path d="M450,80 L520,70 L560,90 L550,130 L500,140 L460,120 Z" fill="#E5E5E5" />
                {/* Africa */}
                <path
                  d="M460,180 L520,160 L560,200 L550,300 L500,350 L450,320 L440,250 Z"
                  fill="#E5E5E5"
                />
                {/* Asia */}
                <path
                  d="M560,60 L700,50 L800,80 L850,130 L820,180 L750,200 L650,190 L580,150 L560,100 Z"
                  fill="#E5E5E5"
                />
                {/* Australia */}
                <path d="M780,320 L850,310 L880,350 L860,400 L800,410 L770,370 Z" fill="#E5E5E5" />

                {/* Location Markers - USA */}
                <circle cx="180" cy="180" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="200" cy="200" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="160" cy="170" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="220" cy="190" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="190" cy="220" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="240" cy="180" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="170" cy="210" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="210" cy="170" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="230" cy="200" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="150" cy="190" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />

                {/* Location Markers - Europe */}
                <circle cx="490" cy="110" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="510" cy="100" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="530" cy="115" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />

                {/* Location Markers - Asia */}
                <circle cx="820" cy="150" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="800" cy="140" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
                <circle cx="840" cy="160" r="6" fill="#F5A623" stroke="white" strokeWidth="2" />
              </svg>

              {/* Search Box Overlay */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-[#333] rounded shadow-lg">
                  <div className="flex items-center gap-2 px-4 py-3">
                    <Search className="w-4 h-4 text-white/60" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent text-white text-sm placeholder-white/60 focus:outline-none w-32 md:w-48"
                    />
                  </div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-16 right-4 z-10">
                <div className="bg-white rounded shadow-lg flex flex-col">
                  <button className="p-2 hover:bg-gray-100 transition-colors border-b border-gray-200">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border-2 border-gray-600 relative">
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-600 rounded-full -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </button>
                  <button className="p-2 hover:bg-gray-100 transition-colors border-b border-gray-200 text-gray-600 font-bold text-lg leading-none">
                    +
                  </button>
                  <button className="p-2 hover:bg-gray-100 transition-colors border-b border-gray-200 text-gray-600 font-bold text-lg leading-none">
                    −
                  </button>
                  <button className="p-2 hover:bg-gray-100 transition-colors text-gray-600 font-bold text-sm leading-none">
                    ↑
                  </button>
                </div>
              </div>

              {/* Mapbox Attribution */}
              <div className="absolute bottom-2 left-2 z-10">
                <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded text-xs text-gray-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
                  </svg>
                  <span className="font-semibold">mapbox</span>
                </div>
              </div>

              {/* OpenStreetMap Attribution */}
              <div className="absolute bottom-2 right-2 z-10">
                <div className="bg-white/90 px-2 py-1 rounded text-xs text-blue-600">
                  © Mapbox © OpenStreetMap{" "}
                  <span className="underline cursor-pointer">Improve this map</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Search Below Map */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
                <input
                  type="text"
                  placeholder="Enter your city, state or zip code"
                  className="w-full bg-white text-black px-12 py-4 rounded-lg font-medium placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
              <button className="bg-black text-white font-bold px-8 py-4 rounded-lg hover:bg-black/80 transition-colors whitespace-nowrap">
                FIND LOCATIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="security-section bg-[#111] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              YOUR BELONGINGS, <span className="text-[#F5A623]">PROTECTED</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              State-of-the-art security features keep your items safe around the clock.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, i) => (
              <div
                key={i}
                className="security-card bg-[#0a0a0a] border border-white/10 rounded-lg p-8 text-center hover:border-[#3B82F6]/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                STORAGE FOR <span className="text-[#F5A623]">EVERY NEED</span>
              </h2>
              <div className="mb-8">
                <WavyLine />
              </div>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Whatever brings you to storage, we have a solution. Our flexible options adapt to
                your life's changing needs.
              </p>

              {/* Use Cases Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((useCase, i) => (
                  <div
                    key={i}
                    className="use-case-card flex items-start gap-4 p-4 bg-[#111] border border-white/10 rounded-lg hover:border-[#F5A623]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#F5A623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {useCase.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{useCase.title}</h4>
                      <p className="text-white/50 text-sm">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image Stack */}
            <div className="relative">
              <div className="relative">
                {/* Main Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                    alt="Storage use case"
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-[#F5A623] p-6 rounded-lg max-w-[200px]">
                  <div className="text-black font-black text-3xl mb-1">15+</div>
                  <div className="text-black/80 font-bold text-sm">YEARS OF TRUSTED STORAGE</div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#3B82F6] rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              TRUSTED BY <span className="text-[#F5A623]">THOUSANDS</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="bg-[#111] border border-white/10 rounded-lg p-8 h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-[#F5A623] fill-[#F5A623]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/70 leading-relaxed mb-6">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonial.name}</div>
                      <div className="text-white/50 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-[#111] py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              STORAGE <span className="text-[#F5A623]">FAQs</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <FAQItem {...faq} />
              </div>
            ))}
          </div>

          {/* More Questions CTA */}
          <div className="text-center mt-12">
            <p className="text-white/60 mb-4">Have more questions about storage?</p>
            <Link
              href="/movers/quote"
              className="inline-flex items-center gap-2 text-[#F5A623] font-bold hover:text-[#e09000] transition-colors"
            >
              CONTACT US
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3B82F6] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">READY TO STORE?</h2>
              <p className="text-white/80 text-lg">
                Reserve your unit today and get your first month free!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/movers/quote"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded hover:bg-[#e09000] transition-colors"
              >
                <Calendar className="w-5 h-5" />
                RESERVE NOW
              </Link>
              <a
                href="tel:8007200411"
                className="inline-flex items-center gap-2 bg-white text-[#3B82F6] font-bold text-lg px-8 py-4 rounded hover:bg-white/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                800.720.0411
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
