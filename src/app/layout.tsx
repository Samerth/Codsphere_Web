import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodSphere - AI ERP, CRM & Automation Experts",
  description: "CodSphere builds next-gen CRM systems, scalable ERP platforms, smart invoicing tools, and full-funnel digital strategies for smarter business efficiency.",
  keywords: "CRM, ERP, business automation, AI solutions, digital marketing, invoicing tools, Vancouver tech, business efficiency",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification-code",
  },
};

export const viewport = {
  width: 'device-width',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="pt-[70px] sm:pt-[85px] md:pt-[90px]">
          {children}
        </main>
      </body>
    </html>
  );
}

