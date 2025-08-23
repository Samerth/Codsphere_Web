'use client';

import { BlogCard } from './BlogCard';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Why Your CRM Should Be Built Around Your Sales Process – Not the Other Way Around',
    excerpt: 'Spoiler: Looking good isn\'t enough. Your site should convert, automate, and talk to your CRM. Here\'s how to make it pull its weight.',
    tag: 'CRM',
    slug: 'crm-sales-process',
    isFeature: true
  },
  {
    id: 2,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'ERP Systems Built for Startups: Less Overhead, More Output',
    excerpt: 'Startups need speed, not complexity-modern ERP systems deliver streamlined operations without draining resources.',
    tag: 'ERP',
    slug: 'erp-systems-startups'
  },
  {
    id: 3,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Why Smart Businesses Are Replacing Spreadsheets with All-in-One CRMs',
    excerpt: 'Still juggling customer data in messy spreadsheets? It\'s time to upgrade to a smarter, scalable solution.',
    tag: 'Innovation',
    slug: 'replacing-spreadsheets-crms'
  },
  {
    id: 4,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Say Goodbye to Manual HR: AI Tools Every Small Business Needs',
    excerpt: 'From hiring to payroll, AI is transforming HR—making it faster, easier, and more accurate than ever.',
    tag: 'HR',
    slug: 'ai-hr-tools'
  },
  {
    id: 5,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'The Software Stack Every E-commerce Business Should Have in 2025',
    excerpt: 'Running a successful online store in 2025 requires more than just a good product—it needs the right tech foundation.',
    tag: 'E-commerce',
    slug: 'ecommerce-software-stack-2025'
  }
];

export function BlogGrid() {
  return (
    <div className="space-y-[30px]">
      {/* Featured Post */}
      <BlogCard post={blogPosts[0]} isFeature={true} />
      
      {/* Grid Posts */}
      <div className="grid grid-cols-2 gap-[22px]">
        {blogPosts.slice(1).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      {/* View More Button */}
      <div className="flex justify-center pt-[60px]">
        <button className="group bg-[#0D0D0D] hover:bg-black text-white w-[250px] h-[85px] rounded-[42.5px] flex items-center justify-center gap-4 shadow-[4px_4px_12px_rgba(0,0,0,0.15)] transition-all hover:shadow-[4px_4px_20px_rgba(0,0,0,0.25)]">
          <span className="text-[30px] font-normal">View More</span>
          <div className="w-[39px] h-[39px] bg-white rounded-full flex items-center justify-center">
            <ArrowRight className="w-[22px] h-[21px] text-black" />
          </div>
        </button>
      </div>
    </div>
  );
}