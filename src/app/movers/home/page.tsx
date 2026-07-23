"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Truck, Package, Warehouse, Route, Users, Box, Star, Play, ArrowRight } from "lucide-react";

/* ---------------- COUNTER HOOK ---------------- */

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

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

/* ---------------- SERVICE CARD ---------------- */

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <div className="group block">
      <div className="bg-[#111] border border-white/10 rounded-lg p-8 h-full hover:border-[#3B82F6]/50 transition-all duration-300">
        {/* Icon */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          {/* Offset dark circle */}
          <div className="absolute inset-0 bg-[#1a1a1a] rounded-full border-2 border-[#3B82F6] translate-x-2 translate-y-2" />
          {/* Main blue circle */}
          <div className="relative w-24 h-24 bg-[#3B82F6] rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Title - White by default, Yellow on hover */}
        <h3 className="text-center font-black text-lg tracking-wide mb-4 text-white group-hover:text-[#F5A623] transition-colors duration-300">
          {title}
        </h3>

        {/* Wavy line */}
        <div className="flex justify-center mb-4">
          <WavyLine />
        </div>

        {/* Description */}
        <p className="text-white/60 text-center text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ---------------- REVIEW CARD ---------------- */

interface ReviewProps {
  name: string;
  date: string;
  rating: number;
  text: string;
}

function ReviewCard({ name, date, rating, text }: ReviewProps) {
  return (
    <div className="bg-[#111] border border-white/10 rounded-lg p-6 h-full">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-black text-white text-lg">{name}</h4>
        <span className="text-white/50 text-sm">{date}</span>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-[#F5A623] fill-[#F5A623]" : "text-white/20"}`}
          />
        ))}
        <span className="text-white/50 text-sm ml-2">{rating} stars</span>
      </div>

      {/* Review text */}
      <p className="text-white/70 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

/* ---------------- BLOG CARD ---------------- */

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

function BlogCard({ title, date, excerpt, href }: BlogCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="rounded-lg overflow-hidden h-full">
        {/* Blue top section */}
        <div className="bg-[#3B82F6] p-6 relative min-h-[140px]">
          <h4 className="font-bold text-white text-lg leading-tight mb-2">{title}</h4>
          <span className="text-white/70 text-xs uppercase tracking-wider">{date}</span>
          {/* Diagonal cut */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-[#111]"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </div>

        {/* Black bottom section */}
        <div className="bg-[#111] p-6 pt-2">
          <p className="text-white/60 text-sm leading-relaxed">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}

/* ---------------- DATA ---------------- */

const services = [
  {
    icon: <Truck className="w-10 h-10 text-white" />,
    title: "LOCAL MOVING",
    description:
      "Local moving is what started our brand more than 15 years ago. We offer professionally trained movers to ensure your belongings are handled with care.",
    href: "/swift-move/local-moving",
  },
  {
    icon: <Package className="w-10 h-10 text-[#F5A623]" />,
    title: "JUNK REMOVAL",
    description:
      "Our professional teams can assist you with downsizing, home renovations, or spring cleaning to remove those old items you no longer want.",
    href: "/swift-move/junk-removal",
  },
  {
    icon: <Warehouse className="w-10 h-10 text-[#F5A623]" />,
    title: "STORAGE",
    description:
      "If you're in between homes or need a solution for items that won't fit, our storage options include portable, warehouse, and vaulted units.",
    href: "/swift-move/storage",
  },
  {
    icon: <Route className="w-10 h-10 text-[#F5A623]" />,
    title: "LONG-DISTANCE MOVING",
    description:
      "Whether you're moving across town or across the country, we'll get you there. We specialize in long-distance moving with excellent customer service.",
    href: "/swift-move/long-distance",
  },
  {
    icon: <Users className="w-10 h-10 text-[#F5A623]" />,
    title: "PACKING SERVICES",
    description:
      "With over 15 years of experience, we've learned a thing or two about packing efficiently. We offer a variety of packing services for your needs.",
    href: "/swift-move/packing",
  },
  {
    icon: <Box className="w-10 h-10 text-[#F5A623]" />,
    title: "BOXES AND SUPPLIES",
    description:
      "Ensuring you have the right supplies and boxes is crucial to the success of the move. We offer a wide selection of competitively priced supplies.",
    href: "/swift-move/supplies",
  },
];

const reviews = [
  {
    name: "MICHAEL",
    date: "01/27/2026",
    rating: 5,
    text: "The guys were very professional and polite. They asked me throughout the move on where everything is going and handled all my items with care. They deserve a raise!",
  },
  {
    name: "SARAH",
    date: "01/27/2026",
    rating: 5,
    text: "Had 2 trucks and 4-man crew. They did a great job. Everything was moved quickly and nothing was damaged. Highly recommend!",
  },
  {
    name: "JAMES",
    date: "01/26/2026",
    rating: 5,
    text: "The crew were great. They did a great job and finished in a timely manner. Will definitely use them again for our next move.",
  },
];

const videos = [
  {
    title: "Preparing for move day",
    date: "SEPTEMBER 08, 2023",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    title: "Selecting a moving company",
    date: "SEPTEMBER 08, 2023",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "What movers can't move",
    date: "SEPTEMBER 08, 2023",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
];

const blogPosts = [
  {
    title: "Moving services that don't require a moving truck",
    date: "JANUARY 26, 2026",
    excerpt:
      "Our 26-foot moving trucks are a recognizable vehicle in 47 states across America, and they've been navigating through communit...",
    href: "/swift-move/blog/1",
  },
  {
    title: "Get a first-hand look at our moving experience with these testimonials!",
    date: "JANUARY 15, 2026",
    excerpt:
      "If 2026 is the year you're thinking about making a home move, then be sure to call us to do the heavy lifting! We have over 15 y...",
    href: "/swift-move/blog/2",
  },
  {
    title: "Our business moving plans can help move your office forward",
    date: "JANUARY 12, 2026",
    excerpt:
      "With over 5 million customers moved during our 15-plus years of operation, we've picked up a knack for this moving thing...",
    href: "/swift-move/blog/3",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function SwiftMoveHome() {
  const [mounted, setMounted] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  // Count up values
  const satisfactionCount = useCountUp(98, 2500, statsInView);
  const trucksCount = useCountUp(500, 2500, statsInView);
  const locationsCount = useCountUp(50, 2500, statsInView);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer for stats
  useEffect(() => {
    if (!mounted || !statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsInView) {
            setStatsInView(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [mounted, statsInView]);

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
            ".hero-stat",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 },
          );

          gsap.fromTo(
            ".hero-tagline",
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.6 },
          );

          gsap.fromTo(
            ".hero-button",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.8 },
          );

          // Services animation
          gsap.fromTo(
            ".service-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".services-section", start: "top 75%" },
            },
          );

          // Location section
          gsap.fromTo(
            ".location-content",
            { opacity: 0, x: -60 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: ".location-section", start: "top 70%" },
            },
          );

          // Reviews
          gsap.fromTo(
            ".review-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".reviews-section", start: "top 75%" },
            },
          );

          // Videos
          gsap.fromTo(
            ".video-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".videos-section", start: "top 75%" },
            },
          );

          // Blog
          gsap.fromTo(
            ".blog-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".blog-section", start: "top 75%" },
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
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2070&auto=format&fit=crop"
            alt="Moving truck and team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {/* Main Stat */}
            <div className="hero-stat mb-4">
              <span className="text-[#F5A623] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black">
                5 MILLION
              </span>
              <span className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black sm:ml-4 block sm:inline">
                MOVES COMPLETED
              </span>
            </div>

            {/* Tagline */}
            <p className="hero-tagline text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light italic mb-8">
              And we're just getting started
            </p>

            {/* CTA Button */}
            <Link
              href="/movers/quote"
              className="hero-button inline-block bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded hover:bg-[#e09000] transition-colors"
            >
              FREE QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Banner */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <a
            href="/swift-move/careers"
            className="flex items-center justify-center gap-2 text-black hover:text-[#3B82F6] transition-colors text-center"
          >
            <span className="font-medium text-sm sm:text-base">
              We're hiring at our locations nationwide! Apply with us today and move your career
              forward!
            </span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </a>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-[#3B82F6] mt-4" />
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-[#3B82F6] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {/* Stat 1 - With sparkles */}
            <div className="text-center">
              <div className="relative inline-block">
                {/* Sparkle decorations */}
                <svg
                  className="absolute -left-8 -top-4 w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  className="absolute -right-8 -top-4 w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-white text-5xl lg:text-6xl font-black">
                  {satisfactionCount}%
                </span>
              </div>
              <h3 className="text-white font-black text-lg mt-4 tracking-wide">
                CUSTOMER REFERRAL RATE
              </h3>
              <p className="text-white/80 mt-2">
                Our customers are so happy, they're spreading the word.
              </p>
            </div>

            {/* Stat 2 - With oval border */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="border-2 border-white rounded-full px-8 py-2">
                  <span className="text-white text-5xl lg:text-6xl font-black">{trucksCount}+</span>
                </div>
              </div>
              <h3 className="text-white font-black text-lg mt-4 tracking-wide">
                TRUCKS ON THE ROAD
              </h3>
              <p className="text-white/80 mt-2">
                Launch your career with a growing moving franchise.
              </p>
            </div>

            {/* Stat 3 - With underline */}
            <div className="text-center">
              <div className="relative inline-block">
                <span className="text-white text-5xl lg:text-6xl font-black">
                  {locationsCount}+
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white" />
              </div>
              <h3 className="text-white font-black text-lg mt-6 tracking-wide">
                LOCATIONS NATIONWIDE
              </h3>
              <p className="text-white/80 mt-2">
                Open your own franchise with the fastest growing moving company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tight">
            MOVING WITH <span className="text-[#F5A623]">SWIFTMOVE</span>
          </h2>
          <p className="text-white/70 text-lg lg:text-xl leading-relaxed">
            SWIFTMOVE is a national, full-service moving company offering customers a comprehensive
            package of home and business relocation services, packing and unpacking options, and
            junk removal plans. With training and customer service being a top priority, we're proud
            to offer professionally trained movers and top-of-the-line equipment and resources to
            exceed your expectations. Our goal is to tailor each experience to specifically fit all
            moving needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section bg-[#0a0a0a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Finder Section */}
      <section
        className="location-section relative min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              {/* Left content */}
              <div className="location-content lg:w-1/2">
                <p className="text-white text-xl lg:text-2xl font-light mb-2">
                  WE'VE GOT YOU COVERED WITH
                </p>
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2">
                  MORE THAN{" "}
                  <span className="text-[#F5A623] relative inline-block">
                    50 LOCATIONS
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3"
                      viewBox="0 0 200 12"
                      fill="none"
                    >
                      <path
                        d="M0 6 Q 50 0, 100 6 T 200 6"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        fill="none"
                      />
                    </svg>
                  </span>{" "}
                  <span className="block sm:inline">NATIONWIDE</span>
                </h2>

                {/* Search Box */}
                <div className="flex flex-col sm:flex-row mt-8">
                  <input
                    type="text"
                    placeholder="Search by your location"
                    className="flex-1 bg-transparent border-2 border-white/30 text-white px-4 py-4 focus:outline-none focus:border-[#F5A623] transition-colors"
                  />
                  <button className="bg-[#F5A623] text-black font-bold px-6 py-4 hover:bg-[#e09000] transition-colors whitespace-nowrap">
                    FIND A LOCATION
                  </button>
                </div>
              </div>

              {/* Right - Feature Card */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-[#333] p-8 rounded-lg max-w-md lg:ml-auto relative">
                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#F5A623] rounded flex items-center justify-center">
                      <Package className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-white text-2xl font-black">movetrac</span>
                    <span className="text-[#F5A623]">®</span>
                  </div>

                  <h4 className="text-white font-black text-sm tracking-wider mb-3">
                    MOVETRAC® - YOUR PERSONAL MOVE CHECKLIST
                  </h4>

                  <p className="text-white/60 text-sm leading-relaxed">
                    Customize your move using our library of resources. Check off completed tasks
                    and receive notifications for missed to-do's.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              PROFESSIONAL MOVERS <span className="text-[#F5A623]">YOU CAN TRUST</span>
            </h2>
            <p className="text-white/60 text-lg">
              Need some reassurance? Read reviews from hundreds of satisfied customers.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, i) => (
              <div key={i} className="review-card">
                <ReviewCard {...review} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/movers/reviews"
              className="inline-block bg-[#3B82F6] text-white font-bold px-8 py-4 rounded hover:bg-[#2563eb] transition-colors"
            >
              READ MORE REVIEWS
            </Link>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="videos-section bg-[#0a0a0a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black">
              EVERYTHING YOU NEED TO KNOW <span className="text-[#F5A623]">ON VIDEO</span>
            </h2>
            <Link
              href="/swift-move/videos"
              className="flex items-center gap-2 text-[#F5A623] font-bold hover:text-[#e09000] transition-colors"
            >
              VIDEO CHANNEL
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div key={i} className="video-card group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play button */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
                <h4 className="text-[#F5A623] font-bold mb-1">{video.title}</h4>
                <span className="text-white/50 text-xs uppercase tracking-wider">{video.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section bg-[#111] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header */}
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-12">
            A VERY MOVING <span className="text-[#F5A623]">BLOG</span>
          </h2>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div key={i} className="blog-card">
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3B82F6] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="text-center lg:text-left">
              <p className="text-white text-xl lg:text-2xl font-light">READY TO GET MOVING?</p>
              <div className="relative inline-block">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black">
                  GET YOUR <span className="text-black">FREE QUOTE</span>
                </h2>
                {/* Decorative lines */}
                <svg
                  className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 text-white hidden lg:block"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 0 L25 15 L40 20 L25 25 L20 40"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <Link
              href="/movers/quote"
              className="bg-[#F5A623] text-black font-bold text-lg px-10 py-5 rounded hover:bg-[#e09000] transition-colors"
            >
              START YOUR QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
