import type { Metadata } from "next";

import localFont from "next/font/local";
import { Damion } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import ContactUsPopupBtn from "@/components/ContactUsPopupBtn";
import Navbar2 from "@/components/Navbar2";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatbotWidget from "@/components/ChatbotWidget";

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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodSphere",
  url: "https://codsphere.com",
  logo: "https://codsphere.com/icon.svg",
  email: "info@codsphere.ca",
  description:
    "CodSphere is a Vancouver-based software company building Sortify, CodChat, and CodCRM, delivering custom software, and helping businesses stay visible as customers shift from searching Google to asking AI.",
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
  title: "CodSphere — Business Software, Custom Development & AI Visibility",
  description:
    "CodSphere is a Vancouver-based software company building Sortify, CodChat, and CodCRM, delivering custom software, and helping businesses stay visible as customers shift from searching Google to asking AI.",
  keywords:
    "Sortify, CodChat, CodCRM, business software, custom software development, CRM, ERP, business automation, AI visibility, AI search, Vancouver software company",
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
    title: "CodSphere — Business Software, Custom Development & AI Visibility",
    description:
      "CodSphere is a Vancouver-based software company building Sortify, CodChat, and CodCRM, delivering custom software, and helping businesses stay visible as customers shift from searching Google to asking AI.",
    siteName: "CodSphere",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodSphere — Business Software, Custom Development & AI Visibility",
    description:
      "CodSphere is a Vancouver-based software company building Sortify, CodChat, and CodCRM, delivering custom software, and helping businesses stay visible as customers shift from searching Google to asking AI.",
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
        <ChatbotWidget />
        <Navbar2 />
        <main className="pt-20 sm:pt-[88px] lg:pt-[104px]">{children}</main>
        <Footer />
        <ContactUsPopupBtn />
      </body>
    </html>
  );
}
