import type { Metadata } from "next";

import localFont from "next/font/local";
import { Damion } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sequelSans = localFont({
  src: [
    {
      path: "/fonts/sequel-sans/Sequel Sans Black Head.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "/fonts/sequel-sans/Sequel Sans Bold Head.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/sequel-sans/Sequel Sans Medium Head.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/sequel-sans/Sequel Sans Book Body.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/sequel-sans/Sequel Sans Light Body.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-sequel-sans",
  display: "swap",
});

const damion = Damion({
  variable: "--font-damion",
  subsets: ["latin"],
  weight: "400",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodSphere",
  url: "https://www.codsphere.com",
  logo: "https://www.codsphere.com/icon.svg",
  email: "info@codsphere.ca",
  telephone: "+1-604-906-2693",
  description:
    "CodSphere builds commerce and order operations for custom-order businesses. From first click to finished order.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  sameAs: [
    "https://www.linkedin.com/company/codsphere/",
    "https://www.instagram.com/codsphere/",
    "https://www.facebook.com/profile.php?id=61560405396189",
  ],
  founder: {
    "@type": "Person",
    name: "Samerth Pathak",
    jobTitle: "Founder & CEO",
    url: "https://www.codsphere.com/company/founder",
  },
  foundingDate: "2024-02",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
  },
  knowsAbout: [
    "Custom-order software",
    "Print and sign industry software",
    "Order operations management",
    "Digital storefronts for custom businesses",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CodSphere",
  url: "https://www.codsphere.com",
  description:
    "Commerce and order operations software for custom-order businesses. Digital storefronts, order flow management, and custom extensions.",
  publisher: {
    "@type": "Organization",
    name: "CodSphere",
    url: "https://www.codsphere.com",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.codsphere.com/projects?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codsphere.com"),
  title: "CodSphere | Software for Custom-Order Shops",
  description:
    "Sell custom work online and track every job. CodSphere builds storefronts and order flow for made-to-order businesses — quotes, specs, and one-offs, not a standard cart.",
  keywords:
    "custom-order software, made-to-order storefront, custom order tracking",
  authors: [{ name: "CodSphere" }],
  creator: "CodSphere",
  publisher: "CodSphere",
  alternates: {
    canonical: "https://www.codsphere.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://www.codsphere.com",
    locale: "en_US",
    title: "CodSphere | Software for Custom-Order Shops",
    description:
      "Sell custom work online and track every job. CodSphere builds storefronts and order flow for made-to-order businesses — quotes, specs, and one-offs, not a standard cart.",
    siteName: "CodSphere",
    images: [
      {
        url: "https://www.codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere | Software for Custom-Order Shops",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodSphere | Software for Custom-Order Shops",
    description:
      "Sell custom work online and track every job. CodSphere builds storefronts and order flow for made-to-order businesses — quotes, specs, and one-offs, not a standard cart.",
    images: ["https://www.codsphere.com/og/web-og-1200x630.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="apple-mobile-web-app-title" content="CodSphere" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${sequelSans.variable} ${damion.variable} ${sequelSans.className} antialiased overflow-x-hidden`}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <main className="pt-20 sm:pt-[88px] lg:pt-[104px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
