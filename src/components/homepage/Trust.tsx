"use client";

import Link from "next/link";
import { Eye, Shield, FileText, Database, Download, Users, Bot, ArrowRight } from "lucide-react";

const trustItems = [
  {
    icon: Eye,
    title: "Read-only first",
    description: "Integrations start read-only. We connect to your existing systems to see data before we write to them.",
  },
  {
    icon: Shield,
    title: "Role-based access",
    description: "Control who sees what. Staff, managers, and customers each get the view they need — nothing more.",
  },
  {
    icon: FileText,
    title: "Audit trail",
    description: "Every change is logged. Know who did what, when, and why — for compliance and troubleshooting.",
  },
  {
    icon: Database,
    title: "Regular backups",
    description: "Your data is backed up regularly. If something goes wrong, we can restore to a known good state.",
  },
  {
    icon: Download,
    title: "Export & deletion",
    description: "Your data stays yours. Export it anytime. Request deletion and we'll confirm when it's done.",
  },
  {
    icon: Users,
    title: "Subprocessors",
    description: "We use trusted infrastructure partners. Our subprocessor list is available on request.",
  },
  {
    icon: Bot,
    title: "AI disclosure",
    description: "When we use AI to help with intake or categorization, we'll tell you. No hidden automation.",
  },
];

export default function Trust() {
  return (
    <section className="py-20 bg-black">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <p className="bg-gradient-to-r from-[#33FCFE] to-[#608bf3] bg-clip-text text-transparent font-medium mb-3">Trust & security</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your data, your control
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We handle order data carefully. Here's how we keep it safe and give you control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#33FCFE]/20 to-[#010B66]/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium hover:gap-3 transition-all"
          >
            Read our full security practices <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
