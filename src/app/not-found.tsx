import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | CodSphere",
  description: "The page you requested could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-white text-black">
      <div className="container-wrapper flex min-h-[70vh] flex-col items-start justify-center py-more">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#010B66]">Error 404</p>
        <h1 className="mt-4 max-w-3xl text-[40px] font-semibold leading-tight sm:text-[56px]">
          This page is out of reach.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-black/70">
          The address may have changed, or the page may no longer exist. Choose a destination below
          to continue exploring CodSphere.
        </p>
        <nav aria-label="404 page links" className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#010B66] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0664a7]"
          >
            Return home
          </Link>
          <Link
            href="/solutions"
            className="rounded-full border border-black/20 px-6 py-3 font-medium transition-colors hover:border-[#010B66] hover:text-[#010B66]"
          >
            View products
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-black/20 px-6 py-3 font-medium transition-colors hover:border-[#010B66] hover:text-[#010B66]"
          >
            Explore services
          </Link>
        </nav>
      </div>
    </section>
  );
}
