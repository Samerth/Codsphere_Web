"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Truck,
  Home,
  Building2,
  Package,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  Star,
  ChevronDown,
} from "lucide-react";

/* ---------------- WAVY LINE SVG ---------------- */

function WavyLine({ className = "", color = "#3B82F6" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      className={`w-48 h-5 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

/* ---------------- SERVICE TYPE CARD ---------------- */

interface ServiceTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
}

function ServiceTypeCard({ icon, title, description, features, href }: ServiceTypeCardProps) {
  return (
    <div className="group block h-full">
      <div className="bg-[#111] border border-white/10 rounded-lg p-8 h-full hover:border-[#3B82F6]/50 transition-all duration-300 flex flex-col">
        {/* Icon */}
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute inset-0 bg-[#1a1a1a] rounded-full border-2 border-[#3B82F6] translate-x-2 translate-y-2" />
          <div className="relative w-20 h-20 bg-[#3B82F6] rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-black text-xl tracking-wide mb-3 text-white group-hover:text-[#F5A623] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-6">{description}</p>

        {/* Features List */}
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#F5A623] mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-[#3B82F6] font-bold text-sm group-hover:text-[#F5A623] transition-colors">
          <span>LEARN MORE</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
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

/* ---------------- BENEFIT CARD ---------------- */

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="group flex gap-4 p-6 bg-[#111] border border-white/10 rounded-lg hover:border-[#F5A623]/30 transition-all duration-300">
      <div className="w-12 h-12 bg-[#F5A623]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5A623]/20 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold mb-1 group-hover:text-[#F5A623] transition-colors">
          {title}
        </h4>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
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

const serviceTypes = [
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "LOCAL MOVING",
    description:
      "Moving within the same city or nearby areas? Our local moving services ensure a smooth, efficient relocation with experienced professionals.",
    features: [
      "Same-day availability",
      "Hourly or flat-rate pricing",
      "Fully equipped trucks",
      "Trained & background-checked movers",
    ],
    href: "/swift-move/local-moving",
  },
  {
    icon: <Truck className="w-8 h-8 text-[#F5A623]" />,
    title: "LONG-DISTANCE MOVING",
    description:
      "Relocating across state lines or cross-country? We handle every detail of your long-distance move with care and precision.",
    features: [
      "Interstate & cross-country moves",
      "Dedicated move coordinator",
      "Real-time shipment tracking",
      "Full-value protection options",
    ],
    href: "/swift-move/long-distance",
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#F5A623]" />,
    title: "COMMERCIAL MOVING",
    description:
      "Minimize downtime with our professional business relocation services. We move offices, retail spaces, and warehouses efficiently.",
    features: [
      "After-hours & weekend moves",
      "IT equipment handling",
      "Furniture disassembly/reassembly",
      "Minimal business disruption",
    ],
    href: "/swift-move/commercial",
  },
  {
    icon: <Package className="w-8 h-8 text-[#F5A623]" />,
    title: "SPECIALTY MOVING",
    description:
      "Got valuable items that need extra care? Our specialty moving services handle pianos, antiques, artwork, and more.",
    features: [
      "Piano & safe moving",
      "Antique & art handling",
      "Custom crating available",
      "Climate-controlled options",
    ],
    href: "/swift-move/specialty",
  },
];

const processSteps = [
  {
    number: "1",
    title: "GET A FREE QUOTE",
    description:
      "Fill out our quick form or call us. We'll provide a transparent, no-obligation estimate.",
  },
  {
    number: "2",
    title: "SCHEDULE YOUR MOVE",
    description: "Pick a date that works for you. We offer flexible scheduling including weekends.",
  },
  {
    number: "3",
    title: "WE PACK & LOAD",
    description:
      "Our trained movers carefully pack and load your belongings with premium materials.",
  },
  {
    number: "4",
    title: "SAFE DELIVERY",
    description:
      "We transport and unload at your new location, placing items exactly where you want.",
  },
];

const benefits = [
  {
    icon: <Shield className="w-6 h-6 text-[#F5A623]" />,
    title: "Fully Licensed & Insured",
    description: "Complete peace of mind with comprehensive coverage for your belongings.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#F5A623]" />,
    title: "Professional Movers",
    description: "Background-checked, trained professionals who treat your items with care.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#F5A623]" />,
    title: "On-Time Guarantee",
    description: "We respect your schedule and arrive when promised, every time.",
  },
  {
    icon: <Star className="w-6 h-6 text-[#F5A623]" />,
    title: "5-Star Service",
    description: "Consistently rated excellent by thousands of satisfied customers.",
  },
  {
    icon: <Package className="w-6 h-6 text-[#F5A623]" />,
    title: "Premium Equipment",
    description: "Modern trucks, quality packing materials, and proper moving tools.",
  },
  {
    icon: <Phone className="w-6 h-6 text-[#F5A623]" />,
    title: "24/7 Support",
    description: "Questions? Our customer support team is always here to help.",
  },
];

const faqs = [
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking at least 2-4 weeks in advance, especially during peak moving season (May-September). However, we also accommodate last-minute moves when possible. Contact us for availability.",
  },
  {
    question: "What items can't you move?",
    answer:
      "For safety reasons, we cannot transport hazardous materials, perishable foods, plants, pets, or personal documents/valuables. We recommend keeping important items like jewelry, medications, and important papers with you during the move.",
  },
  {
    question: "Do you offer packing services?",
    answer:
      "Yes! We offer full-service packing, partial packing, and unpacking services. Our team uses high-quality materials to ensure your belongings are protected. We also sell packing supplies if you prefer to pack yourself.",
  },
  {
    question: "How is the cost of my move calculated?",
    answer:
      "Local moves are typically charged hourly based on the number of movers and truck size needed. Long-distance moves are based on weight and distance. We provide free, detailed estimates before your move with no hidden fees.",
  },
  {
    question: "What if something gets damaged during the move?",
    answer:
      "All our moves include basic carrier liability coverage. We also offer Full Value Protection for additional peace of mind. If damage occurs, our claims process is straightforward and we work quickly to resolve any issues.",
  },
];

const testimonials = [
  {
    name: "Jennifer M.",
    location: "Austin, TX",
    text: "SwiftMove made our cross-country move so much easier! The team was professional, efficient, and took great care of our furniture. Highly recommend!",
    rating: 5,
  },
  {
    name: "Robert K.",
    location: "Seattle, WA",
    text: "Best moving experience I've ever had. They showed up on time, worked quickly, and nothing was damaged. The price was exactly what was quoted.",
    rating: 5,
  },
  {
    name: "Maria S.",
    location: "Denver, CO",
    text: "We used SwiftMove for our office relocation. They worked after hours to minimize disruption. Everything was set up perfectly by Monday morning!",
    rating: 5,
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function MovingPage() {
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

          // Service cards
          gsap.fromTo(
            ".service-type-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: { trigger: ".services-section", start: "top 75%" },
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
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".process-section", start: "top 75%" },
            },
          );

          // Benefits
          gsap.fromTo(
            ".benefit-card",
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
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2070&auto=format&fit=crop"
            alt="Moving services"
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
                <span className="text-[#F5A623]">Moving Services</span>
              </div>

              {/* Title */}
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                PROFESSIONAL <span className="text-[#F5A623]">MOVING</span> SERVICES
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-white/70 text-lg lg:text-xl mb-8 leading-relaxed">
                From local moves to cross-country relocations, our experienced team handles every
                detail with care. Trust the movers who care about your belongings as much as you do.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta flex flex-wrap gap-4">
                <Link
                  href="/movers/quote"
                  className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded hover:bg-[#e09000] transition-colors"
                >
                  GET FREE QUOTE
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
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#3B82F6] py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-white">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="font-bold text-sm">LICENSED & INSURED</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-white" />
              <span className="font-bold text-sm">4.9 STAR RATING</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-sm">ON-TIME GUARANTEE</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-bold text-sm">5M+ MOVES COMPLETED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="services-section bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              OUR <span className="text-[#F5A623]">MOVING SERVICES</span>
            </h2>
            <div className="flex justify-center mb-6">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Whatever your moving needs, we have a solution tailored just for you. Explore our
              comprehensive range of professional moving services.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, i) => (
              <div key={i} className="service-type-card">
                <ServiceTypeCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Moving made simple. Our streamlined process takes the stress out of relocation.
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

      {/* Benefits Section */}
      <section className="benefits-section bg-[#111] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                WHY CHOOSE <span className="text-[#F5A623]">SWIFTMOVE?</span>
              </h2>
              <div className="mb-6">
                <WavyLine />
              </div>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                For over 15 years, we've been helping families and businesses move with confidence.
                Here's what sets us apart from the rest.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="benefit-card">
                    <BenefitCard {...benefit} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop"
                  alt="Professional movers at work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Stats Overlay Card */}
              <div className="absolute -bottom-8 -left-8 bg-[#F5A623] p-6 rounded-lg">
                <div className="text-black font-black text-4xl mb-1">98%</div>
                <div className="text-black/80 font-bold text-sm">CUSTOMER SATISFACTION</div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#3B82F6] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              WHAT OUR <span className="text-[#F5A623]">CUSTOMERS SAY</span>
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
      <section className="faq-section bg-black py-20 lg:py-28">
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
            <p className="text-white/60 mb-4">Still have questions?</p>
            <Link
              href="/movers/quote"
              className="inline-flex items-center gap-2 text-[#F5A623] font-bold hover:text-[#e09000] transition-colors"
            >
              CONTACT OUR TEAM
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
                READY TO START YOUR MOVE?
              </h2>
              <p className="text-white/80 text-lg">Get a free, no-obligation quote in minutes.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/movers/quote"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded hover:bg-[#e09000] transition-colors"
              >
                <Calendar className="w-5 h-5" />
                SCHEDULE NOW
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
