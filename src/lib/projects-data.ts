export interface Project {
  slug: string;
  title: string;
  industry: string;
  problem: string;
  systemBuilt: string;
  workflow: string;
  status: "LIVE" | "UAT" | "PILOT" | "PRODUCT DIRECTION";
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
    slug: "great-west-graphics",
    title: "Proof Industries / Great West Graphics",
    industry: "Print & Sign",
    problem: "Manual order intake and disconnected production tracking across wide-format printing, vehicle wraps, and architectural signage",
    systemBuilt: "Digital storefront with order flow integration",
    workflow: "Quote request → File upload → Approval → Production timeline → Delivery notification",
    status: "UAT" as const,
    year: "2026",
    metric: "Measurement pending",
    previewUrl: "https://d1so4a0f4v7ki5.cloudfront.net/",
    description: "Canadian print and sign shop streamlining intake and production visibility for custom work.",
    content: {
      overview: "Great West Graphics is a Canadian print and sign company specializing in wide-format printing, vehicle wraps, banners, and architectural signage. With multiple customer channels and a production floor handling dozens of simultaneous jobs, they needed a way to get orders into production faster and give customers visibility into job status.",
      challenge: "Orders arrived via email, phone, and walk-ins. Each one required manual entry into their production system. Files were scattered across email threads and shared drives. Customers called frequently to ask about order status, pulling staff away from production work. The disconnect between how orders came in and how production tracked them meant delays and rework.",
      solution: "We built a digital storefront that lets customers submit quote requests with files and specifications attached. Orders flow directly into a production timeline that shows status at each stage. Customers can check their order status online instead of calling. Staff spend less time on data entry and status updates, more time on actual production.",
      outcomes: [
        "Intended: Orders arrive with complete specifications and files attached",
        "Intended: Production timeline visible to staff and customers",
        "Intended: Reduced status inquiry calls",
        "System in UAT — measurement pending",
      ],
    },
  },
  {
    slug: "voltvera",
    title: "Voltvera",
    industry: "Commerce & Operations",
    problem: "Multi-party order coordination across sales channels, partners, and fulfillment — with settlement complexity",
    systemBuilt: "Commerce platform with partner operations and settlement workspace",
    workflow: "Storefront order → Partner assignment → Fulfillment tracking → Settlement",
    status: "LIVE" as const,
    year: "2025",
    metric: "Measurement pending",
    previewUrl: "https://voltverashop.com/",
    description: "Commerce platform connecting storefront sales with multi-party fulfillment and partner payouts.",
    content: {
      overview: "Voltvera operates a commerce business selling consumer electronics through multiple channels. Orders involve coordination between sales teams, fulfillment partners, and a partner network that participates in referrals and distribution. They needed a system that could handle the commerce side (voltverashop.com) while also managing the operational complexity of multi-party coordination and settlement.",
      challenge: "The business model involves multiple parties touching each transaction — sales, referral partners, fulfillment, and finance. Tracking who did what and calculating settlements was manual and error-prone. The commerce frontend needed to connect to an operations backend that could handle partner relationships, fulfillment status, and payout calculations.",
      solution: "We built voltverashop.com as the commerce frontend, connected to an operations workspace that tracks orders through fulfillment and manages partner relationships. The system provides a settlement workspace for tracking who was involved in each transaction. Partners can see their activity and pending payouts. Operations staff have visibility into the full order lifecycle.",
      outcomes: [
        "Unified commerce and operations system",
        "Settlement workspace for multi-party transactions — measurement pending",
        "Partner visibility into activity and payouts",
        "Order tracking from sale through fulfillment",
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
