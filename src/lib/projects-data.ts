export interface Project {
  slug: string;
  title: string;
  industry: string;
  problem: string;
  systemBuilt: string;
  workflow: string;
  status: "LIVE" | "UAT" | "PILOT" | "ROADMAP";
  year: string;
  metric: string;
  previewUrl?: string;
  description: string;
  content: {
    overview: string;
    challenge: string;
    solution: string;
    outcomes: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "codcrm",
    title: "CodCRM",
    industry: "CodSphere Product",
    problem: "Businesses struggle with scattered customer data, manual follow-ups, and limited visibility into their sales pipeline",
    systemBuilt: "Ready-to-use CRM with lead tracking, task automation, and reporting",
    workflow: "Lead capture → Pipeline stages → Task automation → Reporting",
    status: "LIVE" as const,
    year: "2026",
    metric: "Live at codcrm.com",
    previewUrl: "https://codcrm.com/",
    description: "CRM built for growing businesses to manage leads, follow-ups, automation, and reporting in one place.",
    content: {
      overview: "CodCRM is a ready-to-use CRM designed for small and medium businesses. It brings leads, deals, tasks, and reporting together so businesses can run day-to-day operations from a single platform.",
      challenge: "Business owners often juggle customer data across spreadsheets, email, and notes. Following up on leads requires manual reminders. Understanding sales performance means pulling together data from multiple sources. Growing teams need different access levels without complex setup.",
      solution: "CodCRM provides lead and deal tracking with clear pipeline stages, task reminders, reporting dashboards, and role-based team access.",
      outcomes: [
        "Centralized lead and customer management",
        "Task reminders for follow-ups",
        "Sales and activity reporting",
        "Role-based team access",
      ],
    },
  },
  {
    slug: "codchat",
    title: "CodChat",
    industry: "CodSphere Product",
    problem: "Website visitors leave without converting because there's no one available to answer their questions or capture their contact information",
    systemBuilt: "AI-powered chat widget that answers visitor questions and captures leads",
    workflow: "Visitor question → AI response → Lead capture → CRM sync",
    status: "LIVE" as const,
    year: "2026",
    metric: "Live at codsphere.chat",
    previewUrl: "https://codsphere.chat/",
    description: "AI chat widget for websites that answers visitors and captures leads.",
    content: {
      overview: "CodChat is an AI-powered chat widget that sits on your website, answers visitor questions using your content, and captures contact information when visitors are ready to talk. It connects with CodCRM to sync captured leads.",
      challenge: "Many businesses can't staff live chat around the clock. Visitors who arrive outside business hours — or who don't want to fill out a contact form — often leave without engaging. Businesses miss opportunities because no one was there to answer a quick question.",
      solution: "CodChat uses AI to answer visitor questions based on content you provide about your business. When visitors are interested, it captures their contact information and syncs it to CodCRM or sends it to your team.",
      outcomes: [
        "Visitor engagement without staffing",
        "AI-powered answers based on your content",
        "Lead capture with CRM sync",
        "Customizable to match your brand",
      ],
    },
  },
  {
    slug: "great-west-graphics",
    title: "Proof Industries / Great West Graphics",
    industry: "Print & Sign",
    problem: "Manual order intake and disconnected production tracking across wide-format printing, vehicle wraps, and architectural signage",
    systemBuilt: "Digital storefront with Design Studio and order flow integration",
    workflow: "Quote request → File upload → Design Studio → Approval → Production timeline → Delivery",
    status: "UAT" as const,
    year: "2026",
    metric: "System in UAT",
    previewUrl: "https://d1so4a0f4v7ki5.cloudfront.net/",
    description: "Canadian custom apparel and signage shop with online Design Studio for customers to create and order custom products.",
    content: {
      overview: "Great West Graphics is a Canadian company specializing in custom apparel, wide-format printing, vehicle wraps, and architectural signage. With multiple customer channels and a production floor handling dozens of simultaneous jobs, they needed a way to get orders into production faster and give customers visibility into job status.",
      challenge: "Orders arrived via email, phone, and walk-ins. Each one required manual entry into their production system. Files were scattered across email threads and shared drives. Customers called frequently to ask about order status, pulling staff away from production work. The disconnect between how orders came in and how production tracked them meant delays and rework.",
      solution: "We built a digital storefront with an integrated Design Studio that lets customers create custom products online, upload files, and submit specifications. Orders flow directly into a production timeline that shows status at each stage. Customers can check their order status online instead of calling. Staff spend less time on data entry and status updates, more time on actual production.",
      outcomes: [
        "Online Design Studio for custom product creation",
        "Structured quote and file intake on the storefront",
        "Shared production timeline for staff",
        "Customer-facing status path designed in",
      ],
    },
  },
  {
    slug: "voltvera",
    title: "VoltVera Shop",
    industry: "E-commerce",
    problem: "E-commerce storefront for eco-friendly electronics",
    systemBuilt: "E-commerce storefront for eco-friendly electronics (alkaline water purifiers, BLDC fans, LED TVs)",
    workflow: "E-commerce storefront",
    status: "LIVE" as const,
    year: "2025",
    metric: "Live at voltverashop.com",
    previewUrl: "https://voltverashop.com/",
    description: "VoltVera Shop — e-commerce storefront for eco-friendly electronics.",
    content: {
      overview: "VoltVera Shop is an e-commerce storefront for eco-friendly electronics including alkaline water purifiers, BLDC fans, and LED TVs.",
      challenge: "E-commerce storefront needed for eco-friendly electronics product line.",
      solution: "E-commerce storefront built on CodSphere digital storefront solution.",
      outcomes: [
        "E-commerce storefront delivered",
      ],
    },
  },
  {
    // TODO: Owner to provide description - site did not load for verification
    slug: "vera-capital",
    title: "Vera Capital",
    industry: "Website",
    problem: "Website project",
    systemBuilt: "Website project",
    workflow: "Website project",
    status: "LIVE" as const,
    year: "2025",
    metric: "Live at veracapital.com",
    previewUrl: "https://veracapital.com/",
    description: "Vera Capital — website project.",
    content: {
      overview: "Website project for Vera Capital.",
      challenge: "Website project.",
      solution: "Website project.",
      outcomes: [
        "Website delivered",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
