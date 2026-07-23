"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";
import {
  Star,
  Search,
  Filter,
  MapPin,
  Calendar,
  ThumbsUp,
  Quote,
  ArrowRight,
  Phone,
  ChevronDown,
  X,
  Truck,
  Package,
  Warehouse,
  Trash2,
  CheckCircle2,
  Users,
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

/* ---------------- STAR RATING COMPONENT ---------------- */

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating ? "text-[#F5A623] fill-[#F5A623]" : "text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

/* ---------------- REVIEW CARD COMPONENT ---------------- */

interface Review {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  service: "moving" | "storage" | "junk-removal" | "packing";
  verified: boolean;
  helpful: number;
}

function ReviewCard({ review }: { review: Review }) {
  const [isHelpful, setIsHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);

  const serviceIcons = {
    moving: <Truck className="w-4 h-4" />,
    storage: <Warehouse className="w-4 h-4" />,
    "junk-removal": <Trash2 className="w-4 h-4" />,
    packing: <Package className="w-4 h-4" />,
  };

  const serviceLabels = {
    moving: "Moving",
    storage: "Storage",
    "junk-removal": "Junk Removal",
    packing: "Packing",
  };

  const handleHelpful = () => {
    if (!isHelpful) {
      setHelpfulCount((prev) => prev + 1);
      setIsHelpful(true);
    }
  };

  return (
    <div className="bg-[#111] border border-white/10 rounded-lg p-6 hover:border-[#3B82F6]/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">{review.name.charAt(0)}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-white font-bold">{review.name}</h4>
              {review.verified && (
                <span className="flex items-center gap-1 text-[#F5A623] text-xs">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-white/50 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {review.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {review.date}
              </span>
            </div>
          </div>
        </div>

        {/* Service Badge */}
        <div className="flex items-center gap-1.5 bg-[#3B82F6]/20 text-[#3B82F6] px-3 py-1.5 rounded-full text-xs font-medium">
          {serviceIcons[review.service]}
          <span>{serviceLabels[review.service]}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3 mb-3">
        <StarRating rating={review.rating} />
        <span className="text-white/50 text-sm">{review.rating}.0</span>
      </div>

      {/* Review Title */}
      <h3 className="text-white font-bold text-lg mb-2">{review.title}</h3>

      {/* Review Text */}
      <p className="text-white/70 leading-relaxed mb-4">{review.text}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <button
          onClick={handleHelpful}
          className={`flex items-center gap-2 text-sm transition-colors ${
            isHelpful ? "text-[#F5A623]" : "text-white/50 hover:text-white"
          }`}
        >
          <ThumbsUp className={`w-4 h-4 ${isHelpful ? "fill-[#F5A623]" : ""}`} />
          <span>Helpful ({helpfulCount})</span>
        </button>
      </div>
    </div>
  );
}

/* ---------------- RATING BAR COMPONENT ---------------- */

function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const percentage = total > 0 ? (count / total) * 100 : 0;

  return (
    <div className="flex items-center gap-3">
      <span className="text-white/70 text-sm w-16">{stars} stars</span>
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#F5A623] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-white/50 text-sm w-12 text-right">{count}</span>
    </div>
  );
}

/* ---------------- REVIEWS DATA ---------------- */

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Michael Thompson",
    location: "Austin, TX",
    date: "Jan 28, 2026",
    rating: 5,
    title: "Exceptional service from start to finish!",
    text: "The SwiftMove team exceeded all my expectations. They arrived on time, handled everything with care, and even helped rearrange furniture at the new place. The crew was professional, friendly, and worked efficiently. I couldn't be happier with the experience!",
    service: "moving",
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Seattle, WA",
    date: "Jan 27, 2026",
    rating: 5,
    title: "Made our cross-country move stress-free",
    text: "Moving from Seattle to Florida seemed daunting, but SwiftMove made it seamless. They packed everything perfectly, kept us updated throughout the journey, and delivered exactly when promised. Not a single item was damaged!",
    service: "moving",
    verified: true,
    helpful: 18,
  },
  {
    id: 3,
    name: "James Rodriguez",
    location: "Denver, CO",
    date: "Jan 26, 2026",
    rating: 5,
    title: "Best storage solution I've found",
    text: "I needed storage during a home renovation and SwiftMove's portable storage was perfect. They dropped off the container, I loaded it at my pace, and they stored it safely. The climate control kept my electronics in perfect condition.",
    service: "storage",
    verified: true,
    helpful: 12,
  },
  {
    id: 4,
    name: "Emily Chen",
    location: "Portland, OR",
    date: "Jan 25, 2026",
    rating: 4,
    title: "Great junk removal service",
    text: "Had years of accumulated junk in my garage. The team showed up, gave me an honest quote, and had everything cleared out in under 2 hours. Only minor issue was scheduling took a few days, but the service itself was excellent.",
    service: "junk-removal",
    verified: true,
    helpful: 9,
  },
  {
    id: 5,
    name: "David Williams",
    location: "Phoenix, AZ",
    date: "Jan 24, 2026",
    rating: 5,
    title: "Professional packing saved us so much time",
    text: "We hired SwiftMove for full packing services and it was worth every penny. They wrapped everything meticulously, labeled every box clearly, and finished in one day what would have taken us a week. Highly recommend!",
    service: "packing",
    verified: true,
    helpful: 31,
  },
  {
    id: 6,
    name: "Lisa Martinez",
    location: "San Diego, CA",
    date: "Jan 23, 2026",
    rating: 5,
    title: "Couldn't have asked for better movers",
    text: "Third time using SwiftMove and they never disappoint. The crew was careful with my antique furniture, worked quickly, and were genuinely pleasant to have around. They treat your belongings like their own.",
    service: "moving",
    verified: true,
    helpful: 27,
  },
  {
    id: 7,
    name: "Robert Kim",
    location: "Chicago, IL",
    date: "Jan 22, 2026",
    rating: 5,
    title: "Office move completed flawlessly",
    text: "SwiftMove handled our 50-person office relocation over a weekend. They coordinated everything perfectly, labeled each workstation, and we were operational Monday morning. Zero downtime for our business!",
    service: "moving",
    verified: true,
    helpful: 45,
  },
  {
    id: 8,
    name: "Amanda Foster",
    location: "Boston, MA",
    date: "Jan 21, 2026",
    rating: 4,
    title: "Reliable storage with great security",
    text: "Been using their storage for 8 months now. The facility is clean, well-lit, and I feel confident my belongings are safe. The 24/7 access is super convenient. Slightly pricier than competitors but worth it for peace of mind.",
    service: "storage",
    verified: true,
    helpful: 15,
  },
  {
    id: 9,
    name: "Chris Anderson",
    location: "Miami, FL",
    date: "Jan 20, 2026",
    rating: 5,
    title: "Estate cleanout done with care",
    text: "After my mother passed, I needed help clearing her home. The SwiftMove team was incredibly respectful and sensitive to the situation. They helped separate items for donation, recycling, and disposal. Can't thank them enough.",
    service: "junk-removal",
    verified: true,
    helpful: 52,
  },
  {
    id: 10,
    name: "Jennifer White",
    location: "Atlanta, GA",
    date: "Jan 19, 2026",
    rating: 5,
    title: "Packing experts who care",
    text: "I was nervous about my crystal collection and artwork. The packers used custom crating and special wrapping techniques. Everything arrived in perfect condition. These folks know what they're doing!",
    service: "packing",
    verified: true,
    helpful: 22,
  },
  {
    id: 11,
    name: "Mark Stevens",
    location: "Nashville, TN",
    date: "Jan 18, 2026",
    rating: 5,
    title: "Fast, friendly, and affordable",
    text: "Local move across town. Two guys and a truck, done in 4 hours. They were efficient, careful, and the price was exactly what was quoted. No hidden fees, no surprises. This is how moving should be!",
    service: "moving",
    verified: true,
    helpful: 19,
  },
  {
    id: 12,
    name: "Rachel Green",
    location: "Las Vegas, NV",
    date: "Jan 17, 2026",
    rating: 4,
    title: "Good storage, great customer service",
    text: "Needed temporary storage between apartments. The portable container was perfect for my needs. Customer service was responsive when I had questions. Dock one star only because pickup took longer than expected.",
    service: "storage",
    verified: true,
    helpful: 8,
  },
  {
    id: 13,
    name: "Tom Bradley",
    location: "Minneapolis, MN",
    date: "Jan 16, 2026",
    rating: 5,
    title: "Basement cleanout in record time",
    text: "20 years of accumulated stuff gone in 3 hours! The team was amazing - they sorted items for donation and recycling where possible. Very eco-conscious approach. My basement finally has space!",
    service: "junk-removal",
    verified: true,
    helpful: 14,
  },
  {
    id: 14,
    name: "Nicole Davis",
    location: "San Francisco, CA",
    date: "Jan 15, 2026",
    rating: 5,
    title: "Worth every penny for peace of mind",
    text: "Moving into a 4th floor walkup was my nightmare scenario. The SwiftMove crew handled it like pros - no complaints, no extra charges. They even assembled my bed frame without me asking. Above and beyond!",
    service: "moving",
    verified: true,
    helpful: 36,
  },
  {
    id: 15,
    name: "Kevin O'Brien",
    location: "Dallas, TX",
    date: "Jan 14, 2026",
    rating: 5,
    title: "Professional from quote to completion",
    text: "The estimator was accurate, the movers were punctual, and the final bill matched the quote. In an industry full of bait-and-switch, SwiftMove is refreshingly honest. Will use again for our next move.",
    service: "moving",
    verified: true,
    helpful: 28,
  },
  {
    id: 16,
    name: "Sandra Lee",
    location: "Houston, TX",
    date: "Jan 13, 2026",
    rating: 4,
    title: "Great packing service overall",
    text: "The team packed our entire 3-bedroom house in one day. Everything was organized and labeled. Minor issue: a few boxes were heavier than I'd have liked. But nothing was damaged, so no real complaints!",
    service: "packing",
    verified: true,
    helpful: 11,
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function ReviewsPage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<string>("all");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "highest" | "helpful">("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate stats
  const stats = useMemo(() => {
    const total = reviewsData.length;
    const avgRating = reviewsData.reduce((sum, r) => sum + r.rating, 0) / total;
    const ratingCounts = [5, 4, 3, 2, 1].map(
      (stars) => reviewsData.filter((r) => r.rating === stars).length,
    );
    return { total, avgRating, ratingCounts };
  }, []);

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = [...reviewsData];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.name.toLowerCase().includes(query) ||
          r.title.toLowerCase().includes(query) ||
          r.text.toLowerCase().includes(query) ||
          r.location.toLowerCase().includes(query),
      );
    }

    // Service filter
    if (selectedService !== "all") {
      filtered = filtered.filter((r) => r.service === selectedService);
    }

    // Rating filter
    if (selectedRating !== null) {
      filtered = filtered.filter((r) => r.rating === selectedRating);
    }

    // Sort
    switch (sortBy) {
      case "newest":
        // Already sorted by date in data
        break;
      case "highest":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "helpful":
        filtered.sort((a, b) => b.helpful - a.helpful);
        break;
    }

    return filtered;
  }, [searchQuery, selectedService, selectedRating, sortBy]);

  const visibleReviews = filteredReviews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredReviews.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredReviews.length));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedService("all");
    setSelectedRating(null);
    setSortBy("newest");
  };

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

          // Stats section
          gsap.fromTo(
            ".stats-card",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: ".stats-section", start: "top 80%" },
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
              <span className="text-[#F5A623]">Reviews</span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              CUSTOMER <span className="text-[#F5A623]">REVIEWS</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-white/70 text-lg lg:text-xl mb-8">
              Don't just take our word for it. See what thousands of satisfied customers have to say
              about their SwiftMove experience.
            </p>

            {/* Overall Rating */}
            <div className="flex items-center justify-center gap-4">
              <div className="text-[#F5A623] text-5xl font-black">{stats.avgRating.toFixed(1)}</div>
              <div className="text-left">
                <StarRating rating={Math.round(stats.avgRating)} size="lg" />
                <div className="text-white/60 text-sm mt-1">Based on {stats.total} reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-[#3B82F6] py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="stats-card grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl lg:text-4xl font-black mb-1">98%</div>
              <div className="text-white/80 text-sm">Would Recommend</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-black mb-1">5M+</div>
              <div className="text-white/80 text-sm">Moves Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-black mb-1">4.9</div>
              <div className="text-white/80 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-black mb-1">15+</div>
              <div className="text-white/80 text-sm">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Rating Summary & Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Rating Summary */}
                <div className="bg-[#111] border border-white/10 rounded-lg p-6 mb-6">
                  <h3 className="text-white font-bold text-lg mb-4">Rating Summary</h3>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((stars, i) => (
                      <button
                        key={stars}
                        onClick={() => setSelectedRating(selectedRating === stars ? null : stars)}
                        className={`w-full transition-opacity ${
                          selectedRating !== null && selectedRating !== stars
                            ? "opacity-40"
                            : "opacity-100"
                        }`}
                      >
                        <RatingBar
                          stars={stars}
                          count={stats.ratingCounts[i]}
                          total={stats.total}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter by Service */}
                <div className="bg-[#111] border border-white/10 rounded-lg p-6 mb-6">
                  <h3 className="text-white font-bold text-lg mb-4">Filter by Service</h3>
                  <div className="space-y-2">
                    {[
                      { value: "all", label: "All Services", icon: <Users className="w-4 h-4" /> },
                      { value: "moving", label: "Moving", icon: <Truck className="w-4 h-4" /> },
                      {
                        value: "storage",
                        label: "Storage",
                        icon: <Warehouse className="w-4 h-4" />,
                      },
                      {
                        value: "junk-removal",
                        label: "Junk Removal",
                        icon: <Trash2 className="w-4 h-4" />,
                      },
                      { value: "packing", label: "Packing", icon: <Package className="w-4 h-4" /> },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedService(option.value)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          selectedService === option.value
                            ? "bg-[#F5A623] text-black"
                            : "bg-[#1a1a1a] text-white/70 hover:text-white hover:bg-[#222]"
                        }`}
                      >
                        {option.icon}
                        <span className="font-medium text-sm">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedService !== "all" || selectedRating !== null || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="w-full flex items-center justify-center gap-2 text-[#F5A623] font-bold py-3 hover:text-[#e09000] transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Main Content - Reviews */}
            <div className="lg:col-span-3">
              {/* Search and Sort Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 text-white px-12 py-3 rounded-lg placeholder-white/40 focus:outline-none focus:border-[#3B82F6] transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="appearance-none bg-[#111] border border-white/10 text-white px-4 py-3 pr-10 rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors cursor-pointer"
                  >
                    <option value="newest">Newest First</option>
                    <option value="highest">Highest Rated</option>
                    <option value="helpful">Most Helpful</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                </div>

                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 bg-[#111] border border-white/10 text-white px-4 py-3 rounded-lg"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
              </div>

              {/* Active Filters */}
              {(selectedService !== "all" || selectedRating !== null) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedService !== "all" && (
                    <span className="flex items-center gap-2 bg-[#3B82F6]/20 text-[#3B82F6] px-3 py-1.5 rounded-full text-sm">
                      Service: {selectedService}
                      <button onClick={() => setSelectedService("all")}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedRating !== null && (
                    <span className="flex items-center gap-2 bg-[#F5A623]/20 text-[#F5A623] px-3 py-1.5 rounded-full text-sm">
                      {selectedRating} Stars
                      <button onClick={() => setSelectedRating(null)}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Results Count */}
              <div className="text-white/60 text-sm mb-6">
                Showing {visibleReviews.length} of {filteredReviews.length} reviews
                {searchQuery && ` for "${searchQuery}"`}
              </div>

              {/* Reviews Grid */}
              {filteredReviews.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6">
                    {visibleReviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>

                  {/* Load More Button */}
                  {hasMore && (
                    <div className="text-center mt-10">
                      <button
                        onClick={loadMore}
                        className="inline-flex items-center gap-2 bg-[#3B82F6] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#2563eb] transition-colors"
                      >
                        Load More Reviews
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                /* No Results */
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-white/30" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">No reviews found</h3>
                  <p className="text-white/60 mb-6">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="text-[#F5A623] font-bold hover:text-[#e09000] transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="bg-[#111] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-[#F5A623] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            HAD A GREAT EXPERIENCE?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            We'd love to hear about it! Share your story and help others make informed decisions.
          </p>
          <Link
            href="/movers/reviews"
            className="inline-flex items-center gap-2 bg-[#F5A623] text-black font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#e09000] transition-colors"
          >
            Write a Review
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3B82F6] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">
                READY TO JOIN OUR HAPPY CUSTOMERS?
              </h2>
              <p className="text-white/80 text-lg">
                Get your free quote today and experience the SwiftMove difference.
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
