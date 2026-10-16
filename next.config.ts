import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]
    }
  },
  allowedDevOrigins: ["*"],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // Canonical www redirect - NOTE: This must also be configured in Vercel Domains settings
      // for production. This handles local dev and any server-side redirects.
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'codsphere.com',
          },
        ],
        destination: 'https://www.codsphere.com/:path*',
        permanent: true,
      },
      
      // Industry URL consolidation
      {
        source: '/contact',
        has: [{ type: 'query', key: 'industry', value: 'pharmacy-fulfillment' }],
        destination: '/contact?industry=other',
        permanent: true,
      },
      {
        source: '/contact',
        has: [{ type: 'query', key: 'industry', value: 'pharmacy' }],
        destination: '/contact?industry=other',
        permanent: true,
      },
      {
        source: '/contact',
        has: [{ type: 'query', key: 'industry', value: 'kitchens-home' }],
        destination: '/contact?industry=other',
        permanent: true,
      },
      {
        source: '/contact',
        has: [{ type: 'query', key: 'industry', value: 'promo-fabrication' }],
        destination: '/contact?industry=other',
        permanent: true,
      },

      // Website Revamp v1.0 (7 Sep 2026) - Exact redirect mappings
      
      // /services → /solutions/custom-extensions
      {
        source: '/services',
        destination: '/solutions/custom-extensions',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/solutions/custom-extensions',
        permanent: true,
      },
      
      // /sortify → off primary nav (redirect to platform for now)
      {
        source: '/sortify',
        destination: '/platform',
        permanent: true,
      },
      
      // /ai-visibility → remove/archive (redirect to home)
      {
        source: '/ai-visibility',
        destination: '/',
        permanent: true,
      },
      
      // /case-studies/* → /projects/*
      {
        source: '/case-studies',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/case-studies/voltvera',
        destination: '/projects/voltvera',
        permanent: true,
      },
      {
        source: '/case-studies/:slug',
        destination: '/projects/:slug',
        permanent: true,
      },
      
      // Old success stories → Projects
      {
        source: '/success-stories',
        destination: '/projects',
        permanent: true,
      },
      
      // Old about page → Company
      {
        source: '/about',
        destination: '/company',
        permanent: true,
      },
      
      // Start free trial → Contact
      {
        source: '/start-free-trial',
        destination: '/contact',
        permanent: true,
      },
      
      // Referral → Company
      {
        source: '/referral',
        destination: '/company',
        permanent: true,
      },
      
      // Disclaimer → Terms
      {
        source: '/disclaimer',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      
      // /faq → FAQ section on pricing page
      {
        source: '/faq',
        destination: '/pricing#faq',
        permanent: true,
      },
      
      // Old brochures → Resources
      {
        source: '/brochures/:path*',
        destination: '/resources',
        permanent: true,
      },
      
      // Blog → Resources (no published posts)
      {
        source: '/blog',
        destination: '/resources',
        permanent: false,
      },
      {
        source: '/blog/:slug*',
        destination: '/resources',
        permanent: false,
      },
      
      // CodChat is now a built-in CodCRM feature
      {
        source: '/cod-chat',
        destination: '/projects/codcrm',
        permanent: true,
      },
      {
        source: '/projects/codchat',
        destination: '/projects/codcrm',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;