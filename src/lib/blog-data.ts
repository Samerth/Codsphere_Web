// lib/blog-data.ts
export interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  slug: string;
  image?: string;
  author?: string;
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Why Your CRM Should Be Built Around Your Sales Process',
    excerpt: 'Your site should convert, automate, and talk to your CRM. Here\'s how to make it pull its weight.',
    tag: 'CRM',
    slug: 'crm-sales-process',
    image: '/images/Blog-page/PNG/1st-blog-image.png',
    author: 'Cod Sphere Team',
    readTime: '5 min read'
  },
  {
    id: 2,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'ERP Systems Built for Startups: Less Overhead, More Output',
    excerpt: 'Startups need speed, not complexity. Modern ERP systems deliver streamlined operations without draining resources.',
    tag: 'ERP',
    slug: 'erp-systems-startups',
    image: '/images/Blog-page/PNG/EPR sysems.png',
    author: 'Cod Sphere Team',
    readTime: '7 min read'
  },
  {
    id: 3,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Why Smart Businesses Are Replacing Spreadsheets with All-in-One CRMs',
    excerpt: 'Still juggling customer data in messy spreadsheets? It\'s time to upgrade to a smarter, scalable solution.',
    tag: 'Innovation',
    slug: 'replacing-spreadsheets-crms',
    image: '/images/Blog-page/PNG/why smart business.png',
    author: 'Cod Sphere Team',
    readTime: '6 min read'
  },
  {
    id: 4,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Say Goodbye to Manual HR: AI Tools Every Small Business Needs',
    excerpt: 'From hiring to payroll, AI is transforming HR—making it faster, easier, and more accurate than ever.',
    tag: 'HR',
    slug: 'ai-hr-tools',
    image: '/images/Blog-page/PNG/say godbye.png',
    author: 'Cod Sphere Team',
    readTime: '5 min read'
  },
  {
    id: 5,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'The Software Stack Every E-commerce Business Should Have in 2025',
    excerpt: 'Running a successful online store in 2025 requires more than just a good product—it needs the right tech foundation.',
    tag: 'E-commerce',
    slug: 'ecommerce-software-stack-2025',
    image: '/images/Blog-page/PNG/E-comerce.png',
    author: 'Cod Sphere Team',
    readTime: '8 min read'
  }
];