import type { Metadata } from "next";

import localFont from "next/font/local";
import { Damion } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  url: "https://codsphere.com",
  logo: "https://codsphere.com/icon.svg",
  email: "info@codsphere.ca",
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
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codsphere.com"),
  title: "CodSphere — Commerce & Order Operations for Custom-Order Businesses",
  description:
    "Sell custom work online. Keep every order moving. CodSphere builds digital storefronts and order flow systems for print, sign, promo, and custom fabrication shops.",
  keywords:
    "custom order management, print shop software, sign shop operations, order flow, digital storefront, custom fabrication software, print MIS alternative, order tracking, Vancouver software",
  authors: [{ name: "CodSphere" }],
  creator: "CodSphere",
  publisher: "CodSphere",
  alternates: {
    canonical: "https://codsphere.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://codsphere.com",
    locale: "en_US",
    title: "CodSphere — Commerce & Order Operations for Custom-Order Businesses",
    description:
      "Sell custom work online. Keep every order moving. Digital storefronts and order flow systems for print, sign, promo, and custom fabrication shops.",
    siteName: "CodSphere",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere — From first click to finished order",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodSphere — Commerce & Order Operations for Custom-Order Businesses",
    description:
      "Sell custom work online. Keep every order moving. Digital storefronts and order flow systems for print, sign, promo, and custom fabrication shops.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
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
        <Navbar />
        <main className="pt-20 sm:pt-[88px] lg:pt-[104px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
