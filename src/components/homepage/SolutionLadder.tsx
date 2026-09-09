"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, GitBranch, Puzzle } from "lucide-react";

const solutions = [
  {
    icon: ShoppingBag,
    number: "01",
    title: "Digital Storefront",
    description: "Make custom work easier to discover, quote and order. Guide customers through configuration, collect the right files and specs, and let them approve and pay without email chains.",
    href: "/solutions/digital-storefront",
    highlight: "Entry point",
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Order Flow",
    description: "Give every order one visible timeline. See what is in design, waiting for approval, in production and ready to ship—with alerts when something stalls.",
    href: "/solutions/order-flow",
    highlight: "Core platform",
  },
  {
    icon: Puzzle,
    number: "03",
    title: "Custom Extensions",
    description: "Add the estimator, portal, supplier connection, production screen or mobile workflow the standard stack is missing. Built on your order flow, not a second disconnected system.",
    href: "/solutions/custom-extensions",
    highlight: "When you need more",
  },
];

export default function SolutionLadder() {
  return (
    <section className="py-20 bg-black">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-[#33FCFE] to-[#608bf3] bg-clip-text text-transparent font-medium mb-3">One brand. Three layers.</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start where you need. Expand as you grow.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Most shops start with a storefront, add order flow as volume grows, 
            then extend with custom features for their specific workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.title}
                href={solution.href}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                {/* Highlight badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {solution.highlight}
                  </span>
                </div>

                {/* Number */}
                <span className="text-white/20 text-6xl font-bold absolute top-4 left-6">
                  {solution.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-[#33FCFE]/20 to-[#010B66]/20 flex items-center justify-center mb-6 mt-8">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>

                {/* Connection line for desktop */}
                {index < solutions.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/20" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
