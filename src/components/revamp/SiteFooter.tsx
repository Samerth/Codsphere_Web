import Link from "next/link";
import Verify from "./Verify";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "Digital Storefront", href: "/solutions/digital-storefront" },
      { label: "Order Flow", href: "/solutions/order-flow" },
      { label: "Custom Extensions", href: "/solutions/custom-extensions" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Projects", href: "/projects" },
      { label: "Print & Sign", href: "/industries/print-sign" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Company", href: "/company" },
      { label: "Contact", href: "/contact" },
      { label: "Sign in", href: "/sign-in" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-and-conditions" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-cs-navy text-white">
      <div className="container-wrapper py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-sequel text-xl font-bold">CodSphere</p>
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-white/70">
              Commerce and order operations for custom-order businesses. From first click to
              finished order.
            </p>
            <p className="mt-4 text-[14px] text-white/70">Vancouver, BC</p>
            <p className="mt-1 text-[14px] text-white/70">
              <a href="mailto:info@codsphere.ca" className="hover:text-white">
                info@codsphere.ca
              </a>
            </p>
            <p className="mt-2 text-[13px] text-white/50">
              <Verify>public phone, email and hours before publishing</Verify>
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/50">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[14px] text-white/80 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CodSphere. All rights reserved.</p>
          <p>Built for workflows that do not fit a standard cart.</p>
        </div>
      </div>
    </footer>
  );
}
