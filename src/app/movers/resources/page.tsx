"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  CheckSquare,
  PlayCircle,
  Download,
  FileText,
  Calculator,
  Lightbulb,
  Calendar,
  ArrowRight,
  Phone,
  Clock,
  Truck,
  Home,
  Package,
  Warehouse,
  MapPin,
  Star,
  ChevronRight,
  Search,
  Filter,
  X,
  ExternalLink,
  FileDown,
  Video,
  Newspaper,
  HelpCircle,
  Box,
  ClipboardList,
  Ruler,
  DollarSign,
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

/* ---------------- RESOURCE CATEGORY CARD ---------------- */

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  count: number;
  href: string;
  color: string;
}

function CategoryCard({ icon, title, description, count, href, color }: CategoryCardProps) {
  return (
    <div className="group block">
      <div className="bg-[#111] border border-white/10 rounded-lg p-6 h-full hover:border-[#3B82F6]/50 transition-all duration-300 relative overflow-hidden">
        {/* Background Gradient */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}
          style={{ backgroundColor: color }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
            style={{ backgroundColor: `${color}20` }}
          >
            <div style={{ color }}>{icon}</div>
          </div>

          {/* Content */}
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#F5A623] transition-colors">
            {title}
          </h3>
          <p className="text-white/60 text-sm mb-4">{description}</p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-white/40 text-sm">{count} resources</span>
            <ChevronRight className="w-5 h-5 text-[#3B82F6] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- GUIDE CARD ---------------- */

interface GuideCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  readTime: string;
  href: string;
  featured?: boolean;
}

function GuideCard({
  icon,
  category,
  title,
  description,
  readTime,
  href,
  featured = false,
}: GuideCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div
        className={`h-full rounded-lg overflow-hidden transition-all duration-300 ${
          featured
            ? "bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8]"
            : "bg-[#111] border border-white/10 hover:border-[#3B82F6]/50"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                featured ? "bg-white/20" : "bg-[#F5A623]/20"
              }`}
            >
              <div className={featured ? "text-white" : "text-[#F5A623]"}>{icon}</div>
            </div>
            <span
              className={`text-xs font-bold tracking-wider ${
                featured ? "text-white/70" : "text-[#F5A623]"
              }`}
            >
              {category}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-lg mb-2 group-hover:text-[#F5A623] transition-colors ${
              featured ? "text-white group-hover:text-[#F5A623]" : "text-white"
            }`}
          >
            {title}
          </h3>

          {/* Description */}
          <p className={`text-sm mb-4 flex-1 ${featured ? "text-white/80" : "text-white/60"}`}>
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span
              className={`flex items-center gap-1 text-xs ${featured ? "text-white/60" : "text-white/40"}`}
            >
              <Clock className="w-3 h-3" />
              {readTime} read
            </span>
            <span
              className={`flex items-center gap-1 text-sm font-bold ${
                featured ? "text-white" : "text-[#3B82F6]"
              }`}
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ---------------- CHECKLIST CARD ---------------- */

interface ChecklistCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  downloadUrl: string;
}

function ChecklistCard({ icon, title, items, downloadUrl }: ChecklistCardProps) {
  return (
    <div className="bg-[#111] border border-white/10 rounded-lg p-6 hover:border-[#F5A623]/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[#F5A623]/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <div className="text-[#F5A623]">{icon}</div>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <span className="text-white/40 text-sm">Downloadable PDF</span>
        </div>
      </div>

      {/* Preview Items */}
      <ul className="space-y-2 mb-6">
        {items.slice(0, 4).map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
            <CheckSquare className="w-4 h-4 text-[#3B82F6]" />
            <span>{item}</span>
          </li>
        ))}
        {items.length > 4 && (
          <li className="text-white/40 text-sm pl-6">+ {items.length - 4} more items</li>
        )}
      </ul>

      {/* Download Button */}
      <a
        href={downloadUrl}
        className="flex items-center justify-center gap-2 w-full bg-[#3B82F6] text-white font-bold py-3 rounded-lg hover:bg-[#2563eb] transition-colors"
      >
        <Download className="w-4 h-4" />
        Download Checklist
      </a>
    </div>
  );
}

/* ---------------- VIDEO CARD ---------------- */

interface VideoCardProps {
  thumbnail: string;
  title: string;
  duration: string;
  category: string;
  views: string;
}

function VideoCard({ thumbnail, title, duration, category, views }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative rounded-lg overflow-hidden mb-3">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
          {duration}
        </div>
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center">
            <PlayCircle className="w-8 h-8 text-black fill-black" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start gap-1 mb-1">
        <span className="text-[#3B82F6] text-xs font-bold">{category}</span>
      </div>
      <h4 className="text-white font-bold group-hover:text-[#F5A623] transition-colors mb-1">
        {title}
      </h4>
      <span className="text-white/40 text-sm">{views} views</span>
    </div>
  );
}

/* ---------------- TOOL CARD ---------------- */

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}

function ToolCard({ icon, title, description, href, color }: ToolCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-[#111] border border-white/10 rounded-lg p-6 hover:border-[#3B82F6]/50 transition-all duration-300 flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <div className="flex-1">
          <h4 className="text-white font-bold group-hover:text-[#F5A623] transition-colors">
            {title}
          </h4>
          <p className="text-white/50 text-sm">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-[#F5A623] group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}

/* ---------------- TIP CARD ---------------- */

interface TipCardProps {
  number: string;
  title: string;
  description: string;
}

function TipCard({ number, title, description }: TipCardProps) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#F5A623] rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-black font-black text-lg">{number}</span>
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ---------------- DATA ---------------- */

const categories = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Moving Guides",
    description: "Step-by-step guides for every type of move",
    count: 24,
    href: "/swift-move/resources/guides",
    color: "#3B82F6",
  },
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: "Checklists",
    description: "Downloadable checklists to keep you organized",
    count: 12,
    href: "/swift-move/resources/checklists",
    color: "#F5A623",
  },
  {
    icon: <PlayCircle className="w-6 h-6" />,
    title: "Video Tutorials",
    description: "Watch and learn packing and moving tips",
    count: 18,
    href: "/swift-move/resources/videos",
    color: "#10B981",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Moving Tools",
    description: "Calculators and planners for your move",
    count: 8,
    href: "/swift-move/resources/tools",
    color: "#8B5CF6",
  },
];

const featuredGuides = [
  {
    icon: <Truck className="w-4 h-4" />,
    category: "MOVING GUIDE",
    title: "The Ultimate Moving Checklist: 8 Weeks to Moving Day",
    description:
      "A comprehensive week-by-week guide to help you prepare for your move without the last-minute stress.",
    readTime: "12 min",
    href: "/swift-move/resources/ultimate-moving-checklist",
    featured: true,
  },
  {
    icon: <Package className="w-4 h-4" />,
    category: "PACKING TIPS",
    title: "How to Pack Fragile Items Like a Pro",
    description:
      "Learn professional techniques for packing dishes, glassware, artwork, and other delicate items.",
    readTime: "8 min",
    href: "/swift-move/resources/packing-fragile-items",
    featured: false,
  },
  {
    icon: <Home className="w-4 h-4" />,
    category: "FIRST-TIME MOVERS",
    title: "Moving Out for the First Time: Everything You Need to Know",
    description:
      "Essential tips for first-time movers, from budgeting to setting up utilities at your new place.",
    readTime: "10 min",
    href: "/swift-move/resources/first-time-moving",
    featured: false,
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    category: "LONG DISTANCE",
    title: "Cross-Country Moving: Planning a Successful Long-Distance Move",
    description:
      "Everything you need to know about moving across state lines, including timelines and cost estimates.",
    readTime: "15 min",
    href: "/swift-move/resources/cross-country-moving",
    featured: false,
  },
];

const checklists = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Complete Moving Checklist",
    items: [
      "Create moving budget",
      "Research moving companies",
      "Declutter and donate items",
      "Gather packing supplies",
      "Notify important contacts",
      "Transfer utilities",
      "Update address",
      "Final walkthrough",
    ],
    downloadUrl: "/downloads/complete-moving-checklist.pdf",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Packing Room-by-Room",
    items: [
      "Kitchen packing guide",
      "Bedroom essentials",
      "Bathroom items",
      "Living room setup",
      "Home office equipment",
      "Garage and tools",
    ],
    downloadUrl: "/downloads/room-by-room-packing.pdf",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Moving Day Essentials",
    items: [
      "Important documents",
      "Medications and first aid",
      "Phone chargers",
      "Snacks and water",
      "Cleaning supplies",
      "Tool kit",
    ],
    downloadUrl: "/downloads/moving-day-essentials.pdf",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "New Home Setup Guide",
    items: [
      "Safety inspection",
      "Deep clean before unpacking",
      "Set up utilities",
      "Change locks",
      "Unpack essentials first",
      "Meet the neighbors",
    ],
    downloadUrl: "/downloads/new-home-setup.pdf",
  },
];

const videos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop",
    title: "How to Pack a Kitchen in One Day",
    duration: "12:34",
    category: "PACKING",
    views: "45K",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    title: "Loading a Moving Truck: Maximize Space",
    duration: "8:21",
    category: "MOVING TIPS",
    views: "32K",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    title: "Packing Fragile Items Safely",
    duration: "10:15",
    category: "PACKING",
    views: "28K",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop",
    title: "Moving with Pets: Keep Them Calm",
    duration: "7:45",
    category: "SPECIAL MOVES",
    views: "19K",
  },
];

const tools = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Moving Cost Calculator",
    description: "Estimate your moving costs based on distance and home size",
    href: "/swift-move/tools/cost-calculator",
    color: "#3B82F6",
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Storage Size Guide",
    description: "Find the right storage unit size for your belongings",
    href: "/swift-move/tools/size-guide",
    color: "#F5A623",
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "Packing Supplies Calculator",
    description: "Calculate how many boxes and supplies you'll need",
    href: "/swift-move/tools/supplies-calculator",
    color: "#10B981",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Moving Budget Planner",
    description: "Create a detailed budget for your entire move",
    href: "/swift-move/tools/budget-planner",
    color: "#8B5CF6",
  },
];

const movingTips = [
  {
    number: "1",
    title: "Start Early",
    description:
      "Begin packing non-essential items 6-8 weeks before your move date. This reduces last-minute stress.",
  },
  {
    number: "2",
    title: "Declutter First",
    description:
      "Moving is the perfect time to get rid of items you no longer need. Donate, sell, or recycle before packing.",
  },
  {
    number: "3",
    title: "Label Everything",
    description:
      "Mark boxes with contents AND destination room. Use color-coded labels for easy identification.",
  },
  {
    number: "4",
    title: "Pack an Essentials Box",
    description:
      "Keep toiletries, medications, chargers, snacks, and important documents easily accessible.",
  },
  {
    number: "5",
    title: "Take Photos",
    description:
      "Photograph electronics setups and furniture assembly before disassembling for easy reassembly later.",
  },
  {
    number: "6",
    title: "Notify Early",
    description:
      "Update your address with banks, subscriptions, and government agencies at least 2 weeks before moving.",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function ResourcesPage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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

          // Category cards
          gsap.fromTo(
            ".category-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".categories-section", start: "top 80%" },
            },
          );

          // Guide cards
          gsap.fromTo(
            ".guide-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".guides-section", start: "top 75%" },
            },
          );

          // Checklist cards
          gsap.fromTo(
            ".checklist-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".checklists-section", start: "top 75%" },
            },
          );

          // Video cards
          gsap.fromTo(
            ".video-card",
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".videos-section", start: "top 75%" },
            },
          );

          // Tips
          gsap.fromTo(
            ".tip-card",
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: ".tips-section", start: "top 75%" },
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
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#111] to-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
              <Link href="/movers/home" className="hover:text-[#F5A623] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#F5A623]">Resources</span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              MOVING <span className="text-[#F5A623]">RESOURCES</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-white/70 text-lg lg:text-xl mb-10">
              Everything you need to plan, prepare, and execute a successful move. Guides,
              checklists, videos, and tools—all in one place.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-white/10 text-white px-12 py-4 rounded-xl placeholder-white/40 focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section bg-[#0a0a0a] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, i) => (
              <div key={i} className="category-card">
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="guides-section bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                FEATURED <span className="text-[#F5A623]">GUIDES</span>
              </h2>
              <p className="text-white/60">Expert advice to make your move easier</p>
            </div>
            <Link
              href="/swift-move/resources/guides"
              className="flex items-center gap-2 text-[#3B82F6] font-bold hover:text-[#F5A623] transition-colors"
            >
              View All Guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGuides.map((guide, i) => (
              <div key={i} className="guide-card">
                <GuideCard {...guide} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklists Section */}
      <section className="checklists-section bg-[#111] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              DOWNLOADABLE <span className="text-[#F5A623]">CHECKLISTS</span>
            </h2>
            <div className="flex justify-center mb-4">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Stay organized with our printable checklists. Download, print, and check off tasks as
              you go.
            </p>
          </div>

          {/* Checklists Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklists.map((checklist, i) => (
              <div key={i} className="checklist-card">
                <ChecklistCard {...checklist} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="videos-section bg-[#0a0a0a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                VIDEO <span className="text-[#F5A623]">TUTORIALS</span>
              </h2>
              <p className="text-white/60">Watch and learn from our moving experts</p>
            </div>
            <Link
              href="/swift-move/resources/videos"
              className="flex items-center gap-2 text-[#3B82F6] font-bold hover:text-[#F5A623] transition-colors"
            >
              View All Videos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, i) => (
              <div key={i} className="video-card">
                <VideoCard {...video} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              MOVING <span className="text-[#F5A623]">TOOLS</span>
            </h2>
            <div className="flex justify-center mb-4">
              <WavyLine />
            </div>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Free calculators and planners to help you budget and prepare for your move.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {tools.map((tool, i) => (
              <ToolCard key={i} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="tips-section bg-[#F5A623] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Header */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
                QUICK MOVING TIPS
              </h2>
              <p className="text-black/70 text-lg mb-6">
                Don't have time to read our full guides? Here are the top tips our moving experts
                recommend for a stress-free move.
              </p>
              <Link
                href="/swift-move/resources/guides"
                className="inline-flex items-center gap-2 bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-black/80 transition-colors"
              >
                Read Full Guides
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right - Tips */}
            <div className="bg-black/10 rounded-xl p-8">
              <div className="space-y-6">
                {movingTips.map((tip, i) => (
                  <div key={i} className="tip-card">
                    <TipCard {...tip} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#111] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <Newspaper className="w-12 h-12 text-[#3B82F6] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            GET MOVING TIPS IN YOUR INBOX
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Subscribe to our newsletter for weekly moving tips, exclusive discounts, and helpful
            resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#1a1a1a] border border-white/10 text-white px-4 py-4 rounded-lg placeholder-white/40 focus:outline-none focus:border-[#3B82F6] transition-colors"
            />
            <button className="bg-[#F5A623] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#e09000] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-white/40 text-sm mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
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
              <p className="text-white/80 text-lg">
                Get a free quote and let our experts handle the heavy lifting.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/movers/quote"
                className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded hover:bg-[#e09000] transition-colors"
              >
                GET FREE QUOTE
                <ArrowRight className="w-5 h-5" />
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
