import {
  ShoppingCartIcon,
  PackageIcon,
  GlobeIcon,
} from "lucide-react";

const details = [
  { title: "Industry", desc: "E-commerce, Consumer Electronics" },
  { title: "Platform", desc: "Digital Storefront" },
  { title: "Products", desc: "Alkaline water purifiers, BLDC fans, LED TVs" },
];

const keyMetrics = [
  {
    icon: ShoppingCartIcon,
    title: "E-commerce Storefront",
    desc: "Product catalog and ordering for eco-friendly electronics.",
  },
  {
    icon: PackageIcon,
    title: "Product Management",
    desc: "Catalog management for alkaline water purifiers, BLDC fans, and LED TVs.",
  },
  {
    icon: GlobeIcon,
    title: "Online Presence",
    desc: "Live storefront at voltverashop.com.",
  },
];

export default function ContentSection() {
  return (
    <section className="container-wrapper py-more">
      <div className="space-y-4 sm:space-y-8">
        {/* Header section */}
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            VoltVera Shop — E-commerce Storefront for Eco-Friendly Electronics
          </h2>
          <div className="text-base md:text-lg">
            {details.map(({ title, desc }, i) => (
              <div key={i}>
                <span className="font-medium">{title}: </span>
                <span>{desc}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-2xl font-semibold">Overview</h4>
              <p className="leading-relaxed">
                VoltVera Shop is an e-commerce storefront for eco-friendly electronics including 
                alkaline water purifiers, BLDC fans, and LED TVs.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">The Solution</h4>
              <p className="leading-relaxed">
                CodSphere built an e-commerce storefront enabling VoltVera to sell their 
                eco-friendly electronics product line online.
              </p>
            </div>
          </div>
        </div>
        {/* Outcomes section */}
        <div className="space-y-3">
          <div className="space-y-3">
            <h4 className="text-2xl font-bold">Outcomes</h4>
            <div className="text-base md:text-lg leading-relaxed">
              {keyMetrics.map(({ icon, title, desc }, i) => {
                const Icon = icon;
                return (
                  <div key={i} className="flex flex-row gap-1.5">
                    <Icon />
                    <p>
                      <span className="font-medium">{title}: </span>
                      <span>{desc}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="leading-relaxed">
            <span className="font-medium">Live at: </span>
            <a 
              href="https://voltverashop.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#010b66] hover:underline"
            >
              voltverashop.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
