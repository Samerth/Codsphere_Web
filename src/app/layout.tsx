import type { Metadata } from "next";

import localFont from "next/font/local";
import { Damion } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import ContactUsPopupBtn from "@/components/ContactUsPopupBtn";

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
    // {
    //   path: "/fonts/sequel-sans/Sequel Sans Roman Body.ttf",
    //   weight: "400",
    //   style: "normal",
    // },
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
  weight: "400", // only one available
});

export const metadata: Metadata = {
  title: "CodSphere - AI ERP, CRM & Automation Experts",
  description:
    "CodSphere builds next-gen CRM systems, scalable ERP platforms, smart invoicing tools, and full-funnel digital strategies for smarter business efficiency.",
  keywords:
    "CRM, ERP, business automation, AI solutions, digital marketing, invoicing tools, Vancouver tech, business efficiency",
  authors: [{ name: "CodSphere" }],
  creator: "CodSphere",
  publisher: "CodSphere",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CodSphere - AI ERP, CRM & Automation Experts",
    description: "Next-gen CRM systems, scalable ERP platforms, and business automation tools.",
    url: "https://codsphere.com",
    siteName: "CodSphere",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodSphere - AI ERP, CRM & Automation",
    description: "Next-gen CRM systems, scalable ERP platforms, and business automation tools.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "your-verification-code-here",
  },
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} ${damion.variable} ${sequelSans.variable} ${sequelSans.className} antialiased overflow-x-hidden`}
        className={`${sequelSans.variable} ${damion.variable} ${sequelSans.className} antialiased overflow-x-hidden`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main className="pt-[80px] sm:pt-[88px] lg:pt-[104px]">{children}</main>
        <Footer />
        <ContactUsPopupBtn />
      </body>
    </html>
  );
}
