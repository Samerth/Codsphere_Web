"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Trash2,
  Sofa,
  Monitor,
  Hammer,
  Leaf,
  Building,
  Recycle,
  Truck,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  Star,
  ChevronDown,
  CircleDollarSign,
  ThumbsUp,
  Zap,
  X,
  Check,
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

/* ---------------- JUNK TYPE CARD ---------------- */

interface JunkTypeCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function JunkTypeCard({ icon, title, items }: JunkTypeCardProps) {
  return (
    <div className="group bg-[#111] border border-white/10 rounded-lg p-6 hover:border-[#3B82F6]/50 transition-all duration-300">
      {/* Icon */}
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-full border-2 border-[#3B82F6] translate-x-1.5 translate-y-1.5" />
        <div className="relative w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-black text-lg tracking-wide mb-3 text-white group-hover:text-[#F5A623] transition-colors duration-300">
        {title}
      </h3>

      {/* Items List */}
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
            <Check className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- PROCESS STEP ---------------- */

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Number Circle */}
      <div className="relative z-10 w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center mb-4">
        <span className="text-black font-black text-2xl">{number}</span>
      </div>

      {/* Connecting Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-white/20" />
      )}

      {/* Content */}
      <h4 className="text-white font-black text-lg mb-2">{title}</h4>
      <p className="text-white/60 text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}

/* ---------------- PRICING CARD ---------------- */

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

function PricingCard({ title, price, description, features, isPopular = false }: PricingCardProps) {
  return (
    <div
      className={`relative bg-[#111] border rounded-lg p-8 h-full ${
        isPopular ? "border-[#F5A623]" : "border-white/10"
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5A623] text-black font-bold text-xs px-4 py-1.5 rounded-full">
          MOST POPULAR
        </div>
      )}

      {/* Title */}
      <h3 className="font-black text-xl text-white mb-2">{title}</h3>

      {/* Price */}
      <div className="mb-4">
        <span className="text-[#F5A623] text-4xl font-black">{price}</span>
        <span className="text-white/50 text-sm ml-2">starting price</span>
      </div>

      {/* Description */}
      <p className="text-white/60 text-sm mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            {feature.included ? (
              <CheckCircle2 className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? "text-white/70" : "text-white/30"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href="/movers/quote"
        className={`block w-full text-center font-bold py-4 rounded transition-colors ${
          isPopular
            ? "bg-[#F5A623] text-black hover:bg-[#e09000]"
            : "bg-[#3B82F6] text-white hover:bg-[#2563eb]"
        }`}
      >
        GET A QUOTE
      </Link>
    </div>
  );
}

/* ---------------- FAQ ITEM ---------------- */

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
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

/* ---------------- DATA ---------------- */

const junkTypes = [
  {
    icon: <Sofa className="w-7 h-7 text-white" />,
    title: "FURNITURE",
    items: ["Sofas & Couches", "Mattresses & Beds", "Tables & Chairs", "Dressers & Cabinets"],
  },
  {
    icon: <Monitor className="w-7 h-7 text-[#F5A623]" />,
    title: "ELECTRONICS",
    items: ["TVs & Monitors", "Computers & Laptops", "Printers & Fax Machines", "Old Appliances"],
  },
  {
    icon: <Hammer className="w-7 h-7 text-[#F5A623]" />,
    title: "CONSTRUCTION",
    items: ["Drywall & Lumber", "Flooring & Tiles", "Cabinets & Fixtures", "Renovation Debris"],
  },
  {
    icon: <Leaf className="w-7 h-7 text-[#F5A623]" />,
    title: "YARD WASTE",
    items: ["Tree Branches", "Lawn Clippings", "Shrubs & Bushes", "Soil & Mulch"],
  },
  {
    icon: <Building className="w-7 h-7 text-[#F5A623]" />,
    title: "OFFICE & COMMERCIAL",
    items: ["Office Furniture", "Filing Cabinets", "Cubicle Panels", "Commercial Equipment"],
  },
  {
    icon: <Trash2 className="w-7 h-7 text-[#F5A623]" />,
    title: "GENERAL JUNK",
    items: ["Garage Cleanouts", "Storage Unit Junk", "Estate Cleanouts", "Hoarding Cleanup"],
  },
];

const processSteps = [
  {
    number: "1",
    title: "BOOK ONLINE OR CALL",
    description:
      "Schedule a free on-site estimate at a time that works for you. Same-day service available!",
  },
  {
    number: "2",
    title: "WE ARRIVE & QUOTE",
    description:
      "Our team arrives on time, assesses your items, and provides an upfront, all-inclusive price.",
  },
  {
    number: "3",
    title: "WE HAUL IT AWAY",
    description:
      "Once you approve, we handle all the heavy lifting. You just point and we'll remove it.",
  },
  {
    number: "4",
    title: "RESPONSIBLE DISPOSAL",
    description:
      "We recycle, donate, and dispose of items responsibly. You get a clean space guilt-free!",
  },
];

const pricingOptions = [
  {
    title: "SINGLE ITEM",
    price: "$75",
    description: "Perfect for removing one large item like a couch, mattress, or appliance.",
    features: [
      { text: "1 large item removal", included: true },
      { text: "Same-day service available", included: true },
      { text: "Eco-friendly disposal", included: true },
      { text: "Multiple items", included: false },
      { text: "Full property cleanout", included: false },
    ],
    isPopular: false,
  },
  {
    title: "PARTIAL LOAD",
    price: "$199",
    description: "Ideal for garage cleanouts, room clearing, or multiple pieces of furniture.",
    features: [
      { text: "Up to 1/2 truck load", included: true },
      { text: "Same-day service available", included: true },
      { text: "Eco-friendly disposal", included: true },
      { text: "Light demolition included", included: true },
      { text: "Full property cleanout", included: false },
    ],
    isPopular: true,
  },
  {
    title: "FULL LOAD",
    price: "$399",
    description: "Best for complete cleanouts, estate clearing, or major renovation debris.",
    features: [
      { text: "Full truck load", included: true },
      { text: "Same-day service available", included: true },
      { text: "Eco-friendly disposal", included: true },
      { text: "Light demolition included", included: true },
      { text: "Priority scheduling", included: true },
    ],
    isPopular: false,
  },
];

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-[#F5A623]" />,
    title: "Same-Day Service",
    description: "Need it gone today? We offer same-day junk removal in most areas.",
  },
  {
    icon: <CircleDollarSign className="w-8 h-8 text-[#F5A623]" />,
    title: "Upfront Pricing",
    description: "No hidden fees. Get a firm quote before we start—what we quote is what you pay.",
  },
  {
    icon: <Recycle className="w-8 h-8 text-[#F5A623]" />,
    title: "Eco-Friendly",
    description:
      "We recycle and donate up to 60% of collected items. Good for you, good for the planet.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-[#F5A623]" />,
    title: "Full-Service Removal",
    description: "We do all the lifting, loading, and hauling. You don't have to lift a finger.",
  },
];

const faqs = [
  {
    question: "What items can't you take?",
    answer:
      "For safety and environmental reasons, we cannot remove hazardous materials including chemicals, paint, oil, asbestos, medical waste, or anything flammable or explosive. We also cannot take vehicles or items requiring special permits. Contact us if you're unsure about a specific item.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Our pricing is based on how much space your items take up in our truck, not by weight or time. We'll give you an upfront, all-inclusive quote before we start. The price includes labor, loading, transportation, and disposal fees—no surprises!",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes! In most service areas, we offer same-day junk removal. If you book before noon, we can often be there the same day. For guaranteed same-day service, we recommend calling us directly to check availability.",
  },
  {
    question: "Do I need to be home during the removal?",
    answer:
      "Not necessarily. As long as the items are accessible and you've approved the quote, our team can complete the removal. Many customers leave items in the garage, driveway, or provide access instructions.",
  },
  {
    question: "What happens to my junk after you take it?",
    answer:
      "We're committed to responsible disposal. Items in good condition are donated to local charities. Recyclable materials go to recycling facilities. Only items that can't be reused or recycled go to the landfill. We typically divert 60% or more from landfills.",
  },
  {
    question: "Do you provide cleanout services for estates or hoarder homes?",
    answer:
      "Absolutely. We specialize in estate cleanouts, foreclosure cleanups, and hoarding situations. Our experienced team handles these sensitive situations with care and discretion. We can also coordinate with real estate agents, attorneys, or family members.",
  },
];

const testimonials = [
  {
    name: "David L.",
    location: "Portland, OR",
    text: "Cleared out my entire garage in under 2 hours! The team was fast, professional, and the price was exactly what they quoted. Wish I'd called sooner!",
    rating: 5,
  },
  {
    name: "Amanda T.",
    location: "Phoenix, AZ",
    text: "Used SwiftMove for my mom's estate cleanout. They were so respectful and made a difficult time much easier. Highly recommend for sensitive situations.",
    rating: 5,
  },
  {
    name: "Chris M.",
    location: "Chicago, IL",
    text: "Had a mountain of construction debris from a bathroom remodel. They showed up same-day and had everything gone in no time. Great service!",
    rating: 5,
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function JunkRemovalPage() {
  const [mounted, setMounted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

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

          // Junk type cards
          gsap.fromTo(
            ".junk-type-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".junk-types-section", start: "top 75%" },
            },
          );

          // Process steps
          gsap.fromTo(
            ".process-step",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: { trigger: ".process-section", start: "top 75%" },
            },
          );

          // Pricing cards
          gsap.fromTo(
            ".pricing-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: { trigger: ".pricing-section", start: "top 75%" },
            },
          );

          // Benefits
          gsap.fromTo(
            ".benefit-item",
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".benefits-section", start: "top 75%" },
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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
            alt="Junk removal services"
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
                <span className="text-[#F5A623]">Junk Removal</span>
              </div>

              {/* Title */}
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                FAST <span className="text-[#F5A623]">JUNK REMOVAL</span> SERVICES
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-white/70 text-lg lg:text-xl mb-8 leading-relaxed">
                Got junk? We'll haul it away! From single items to full property cleanouts, our
                professional team removes unwanted items quickly and responsibly.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta flex flex-wrap gap-4">
                <Link
                  href="/movers/quote"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded hover:bg-[#e09000] transition-colors"
                >
                  GET FREE ESTIMATE
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href=""
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded hover:bg-white hover:text-black transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  CALL NOW
                </a>
              </div>

              {/* Quick Stats */}
              <div className="hero-cta flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20">
                <div>
                  <div className="text-[#F5A623] text-3xl font-black">Same Day</div>
                  <div className="text-white/60 text-sm">Service Available</div>
                </div>
                <div>
                  <div className="text-[#F5A623] text-3xl font-black">60%+</div>
                  <div className="text-white/60 text-sm">Recycled/Donated</div>
                </div>
                <div>
                  <div className="text-[#F5A623] text-3xl font-black">Upfront</div>
                  <div className="text-white/60 text-sm">No-Surprise Pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#3B82F6] py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-white">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-sm">SAME-DAY SERVICE</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5" />
              <span className="font-bold text-sm">UPFRONT PRICING</span>
            </div>
            <div className="flex items-center gap-2">
              <Recycle className="w-5 h-5" />
              <span className="font-bold text-sm">ECO-FRIENDLY DISPOSAL</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-bold text-sm">FULLY INSURED</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Remove Section */}
      <section className="junk-types-section bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              WHAT WE <span className="text-[#F5A623]">REMOVE</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              If it fits in our truck, we can haul it away. Here's a look at the types of junk we
              commonly remove.
            </p>
          </div>

          {/* Junk Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {junkTypes.map((type, i) => (
              <div key={i} className="junk-type-card">
                <JunkTypeCard {...type} />
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              Don't see your item listed? <span className="text-[#F5A623]">Contact us</span> – we
              remove almost anything!
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="process-section bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              HOW IT <span className="text-[#F5A623]">WORKS</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Getting rid of junk has never been easier. Four simple steps to a clutter-free space.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step">
                <ProcessStep {...step} isLast={i === processSteps.length - 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section bg-[#111] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              SIMPLE, <span className="text-[#F5A623]">TRANSPARENT PRICING</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our pricing is based on how much space your items take in our truck. No hidden fees,
              no surprises—just honest, upfront quotes.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingOptions.map((option, i) => (
              <div key={i} className="pricing-card">
                <PricingCard {...option} />
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm">
              * Prices are estimates. Final price determined on-site based on actual volume.
              <span className="text-[#F5A623] ml-1">Get an exact quote →</span>
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1000&auto=format&fit=crop"
                  alt="Clean space after junk removal"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Overlay Card */}
              <div className="absolute -bottom-8 -right-8 bg-[#3B82F6] p-6 rounded-lg">
                <div className="text-white font-black text-4xl mb-1">4.9★</div>
                <div className="text-white/80 font-bold text-sm">CUSTOMER RATING</div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#F5A623] rounded-lg" />
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                WHY CHOOSE <span className="text-[#F5A623]">US?</span>
              </h2>
              <div className="mb-8">
                <WavyLine />
              </div>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                We're not just hauling junk—we're giving you back your space, your time, and your
                peace of mind.
              </p>

              {/* Benefits List */}
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="benefit-item flex gap-4">
                    <div className="w-14 h-14 bg-[#F5A623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
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
              CUSTOMER <span className="text-[#F5A623]">REVIEWS</span>
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
              FREQUENTLY ASKED <span className="text-[#F5A623]">QUESTIONS</span>
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
            <p className="text-white/60 mb-4">Have more questions?</p>
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
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">
                READY TO CLEAR THE CLUTTER?
              </h2>
              <p className="text-white/80 text-lg">
                Book your junk removal today and enjoy a cleaner space tomorrow.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/movers/quote"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded hover:bg-[#e09000] transition-colors"
              >
                <Calendar className="w-5 h-5" />
                BOOK NOW
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
