export default function GrowthEngineSection() {
  return (
    <section className="relative bg-black bg-dots text-white overflow-hidden">
      <div className="relative z-10 flex items-center justify-center container-wrapper pt-less pb-more">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your Growth
              <br />
              Engine with Codsphere.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Experience the power of unified CRM + ERP. Manage leads, automate workflows, and scale
              faster — all in one secure platform.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full font-semibold hover:opacity-90 transition text-black">
                ⭐ Start Your 14-Day Free Trial
              </button>
              <button className="px-8 py-3 border border-white rounded-full font-semibold hover:bg-white/10 transition">
                Request a Demo
              </button>
            </div>

            <p className="text-sm text-gray-400">
              Trusted by businesses in 10+ countries. Built for modern growth.
            </p>
          </div>

          {/* Right - Person with ellipse background */}
          <div className="flex justify-center items-center relative">
            {/* Ellipse SVG background */}
            <svg className="absolute w-96 h-96 -z-0" viewBox="0 0 476 476" fill="none">
              <circle
                cx="237.559"
                cy="237.559"
                r="234"
                transform="rotate(-105 237.559 237.559)"
                stroke="url(#paint0_linear_5053_903)"
                strokeWidth="7"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5053_903"
                  x1="0.0589447"
                  y1="237.559"
                  x2="475.059"
                  y2="237.559"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.0865385" stopColor="#33FCFE" />
                  <stop offset="0.173077" stopColor="white" />
                  <stop offset="0.216346" stopColor="#33FCFE" />
                  <stop offset="0.673077" stopColor="#45B9FF" />
                  <stop offset="1" stopColor="#010B66" />
                </linearGradient>
              </defs>
            </svg>

            {/* Person image */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
              alt="Professional portrait"
              className="relative z-10 w-80 h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
