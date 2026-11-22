"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";
import { shouldUseMarketingChrome } from "@/lib/site-chrome";

export function MarketingChrome({
  children,
  organizationJsonLd,
  websiteJsonLd,
}: {
  children: React.ReactNode;
  organizationJsonLd: unknown;
  websiteJsonLd: unknown;
}) {
  const pathname = usePathname() ?? "";
  const showMarketingChrome = shouldUseMarketingChrome(pathname);

  return (
    <>
      {showMarketingChrome && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
        </>
      )}
      {showMarketingChrome && <Navbar />}
      <main className={showMarketingChrome ? "pt-20 sm:pt-[88px] lg:pt-[104px]" : undefined}>
        {children}
      </main>
      {showMarketingChrome && <Footer />}
    </>
  );
}
