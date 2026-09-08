"use client";

import { AlertTriangle, ArrowRight, Globe, Wrench } from "lucide-react";

export default function BrokenJourney() {
  return (
    <section className="py-20 bg-white">
      <div className="container-wrapper">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            The disconnect costs you orders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your website takes orders. Your shop floor runs production. 
            But the handoff between them? That's where jobs stall, details get lost, and customers wait.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Website side */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#0a1628]/5 flex items-center justify-center">
              <Globe className="w-8 h-8 text-[#0a1628]" />
            </div>
            <h3 className="font-semibold text-[#0a1628] mb-2">Website</h3>
            <p className="text-gray-600 text-sm">
              Customer submits order with files, specs, and deadline
            </p>
          </div>

          {/* The gap */}
          <div className="text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#f97316]/10 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-[#f97316]" />
            </div>
            <h3 className="font-semibold text-[#f97316] mb-2">The Gap</h3>
            <p className="text-gray-600 text-sm">
              Manual re-entry, email threads, status calls, lost files
            </p>
            <div className="hidden md:flex items-center gap-2 mt-4 text-gray-400">
              <ArrowRight className="w-4 h-4" />
              <span className="text-xs">Hours to days of delay</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Shop floor side */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#0a1628]/5 flex items-center justify-center">
              <Wrench className="w-8 h-8 text-[#0a1628]" />
            </div>
            <h3 className="font-semibold text-[#0a1628] mb-2">Shop Floor</h3>
            <p className="text-gray-600 text-sm">
              Production waits for complete info before work can start
            </p>
          </div>
        </div>

        {/* Pain points */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl max-w-3xl mx-auto">
          <p className="text-center text-gray-700">
            <span className="font-semibold">Sound familiar?</span> Orders sit in inboxes. 
            Staff re-type specs from web forms into production sheets. 
            Customers call asking "where's my order?" before you even know it exists.
          </p>
        </div>
      </div>
    </section>
  );
}
