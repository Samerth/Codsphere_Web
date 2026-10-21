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
    title: "codCRM",
    industry: "CodSphere Product",
    problem: "Businesses struggle with scattered customer data, manual follow-ups, and no way to capture website visitors",
    systemBuilt: "Ready-to-use CRM with lead tracking, task automation, reporting, and built-in CodChat for website chat",
    workflow: "Website chat → Lead capture → Pipeline stages → Task automation → Reporting",
    status: "LIVE" as const,
    year: "2026",
    metric: "Live at codcrm.com",
    previewUrl: "https://codcrm.com/",
    description: "CRM with built-in CodChat for website chat and messaging. Manage leads, follow-ups, automation, and reporting in one place.",
    content: {
      overview: "codCRM is a ready-to-use CRM designed for small and medium businesses. It brings leads, deals, tasks, and reporting together so businesses can run day-to-day operations from a single platform. CodChat is built in — an AI-powered chat widget that sits on your website, answers visitor questions, and captures contact information automatically.",
      challenge: "Business owners often juggle customer data across spreadsheets, email, and notes. Website visitors leave without converting when no one is available to answer questions. Following up on leads requires manual reminders. Understanding sales performance means pulling together data from multiple sources.",
      solution: "codCRM provides lead and deal tracking with clear pipeline stages, task reminders, reporting dashboards, and role-based team access. CodChat captures website visitors with AI-powered answers based on your content and syncs leads directly into your CRM.",
      outcomes: [
        "Website chat with AI-powered visitor engagement",
        "Centralized lead and customer management",
        "Task reminders for follow-ups",
        "Sales and activity reporting",
        "Role-based team access",
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
    slug: "vera-capital",
    title: "Vera Capital",
    industry: "FinTech",
    problem: "Private wealth management portal",
    systemBuilt: "Investor portal with deposits, interest, withdrawals, KYC, maturity tracking and referrals",
    workflow: "Wealth management",
    status: "LIVE" as const,
    year: "2025",
    metric: "Live at voltveracapital.com",
    previewUrl: "https://voltveracapital.com/",
    description: "Vera Capital — private wealth management portal: investor deposits, configurable interest, withdrawals, KYC verification, maturity tracking and referral rewards.",
    content: {
      overview: "Private wealth management portal built by CodSphere for Vera Capital.",
      challenge: "Needed a secure portal for investor onboarding, deposits, and wealth tracking.",
      solution: "Built a full-stack portal handling investor deposits, configurable interest rates, withdrawals, KYC verification, maturity tracking and referral rewards.",
      outcomes: [
        "Wealth management portal delivered",
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
