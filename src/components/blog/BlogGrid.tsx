// components/blog/BlogGrid.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Why Your CRM Should Be Built Around Your Sales Process – Not the Other Way Around',
    excerpt: 'Spoiler: Looking good isn\'t enough. Your site should convert, automate, and talk to your CRM. Here\'s how to make it pull its weight.',
    tag: 'CRM',
    slug: 'crm-sales-process',
    isFeature: true,
    image: '/images/Blog-page/PNG/1st-blog-image.png'
  },
  {
    id: 2,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'ERP Systems Built for Startups: Less Overhead, More Output',
    excerpt: 'Startups need speed, not complexity-modern ERP systems deliver streamlined operations without draining resources.',
    tag: 'ERP',
    slug: 'erp-systems-startups',
    image: '/images/Blog-page/PNG/EPR sysems.png'
  },
  {
    id: 3,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Why Smart Businesses Are Replacing Spreadsheets with All-in-One CRMs',
    excerpt: 'Still juggling customer data in messy spreadsheets? It\'s time to upgrade to a smarter, scalable solution.',
    tag: 'Innovation',
    slug: 'replacing-spreadsheets-crms',
    image: '/images/Blog-page/PNG/why smart business.png'
  },
  {
    id: 4,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'Say Goodbye to Manual HR: AI Tools Every Small Business Needs',
    excerpt: 'From hiring to payroll, AI is transforming HR—making it faster, easier, and more accurate than ever.',
    tag: 'HR',
    slug: 'ai-hr-tools',
    image: '/images/Blog-page/PNG/say godbye.png'
  },
  {
    id: 5,
    category: 'Blog',
    date: 'August 04, 2025',
    title: 'The Software Stack Every E-commerce Business Should Have in 2025',
    excerpt: 'Running a successful online store in 2025 requires more than just a good product—it needs the right tech foundation.',
    tag: 'E-commerce',
    slug: 'ecommerce-software-stack-2025',
    image: '/images/Blog-page/PNG/E-comerce.png'
  }
];

export function BlogGrid() {
  const handleViewMore = () => {
    console.log('View more clicked');
  };

  return (
    <div className="space-y-[30px]">
      {/* Featured Post */}
      <article 
        className="relative overflow-hidden"
        style={{
          width: '796px',
          height: '730px',
          background: '#FFFFFF',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '19px'
        }}
      >
        <div 
          className="relative"
          style={{
            height: '447px',
            background: '#D9D9D9',
            borderRadius: '19px 19px 0 0'
          }}
        >
          <Image
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            fill
            className="object-cover"
            style={{ borderRadius: '19px 19px 0 0' }}
          />
        </div>
        
        <div style={{ padding: '32px 30px' }}>
          <div className="flex items-center gap-[30px] mb-[15px]">
            <div className="flex items-center gap-[4px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              <span style={{ fontFamily: 'Sequel Sans', fontWeight: 400, fontSize: '15px', color: '#000000' }}>
                {blogPosts[0].category}
              </span>
            </div>
            <div className="flex items-center gap-[4px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span style={{ fontFamily: 'Sequel Sans', fontWeight: 400, fontSize: '15px', color: '#000000' }}>
                {blogPosts[0].date}
              </span>
            </div>
          </div>
          
          <h2 
            className="mb-[15px]"
            style={{
              fontFamily: 'Sequel Sans',
              fontWeight: 415,
              fontSize: '25px',
              lineHeight: '29px',
              color: '#000000',
              width: '752px'
            }}
          >
            {blogPosts[0].title}
          </h2>
          
          <p 
            className="mb-[20px]"
            style={{
              fontFamily: 'Sequel Sans',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '19px',
              color: '#000000',
              width: '747px'
            }}
          >
            {blogPosts[0].excerpt}
          </p>
          
          {/* Only this Read More is clickable */}
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <button 
              className="hover:shadow-lg transition-all"
              style={{
                width: '124px',
                height: '51px',
                background: '#0D0D0D',
                borderRadius: '25.5px',
                color: '#FFFFFF',
                fontFamily: 'Sequel Sans',
                fontWeight: 405,
                fontSize: '18px',
                lineHeight: '21px',
                filter: 'drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.15))',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Read More
            </button>
          </Link>
        </div>
      </article>

      {/* Regular Posts Grid - 2x2 */}
      <div className="grid grid-cols-2 gap-[22px]">
        {blogPosts.slice(1, 5).map((post) => (
          <article 
            key={post.id}
            className="relative overflow-hidden"
            style={{
              width: '387px',
              height: '512px',
              background: '#FFFFFF',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '19px'
            }}
          >
            <div 
              className="relative"
              style={{
                height: '215px',
                background: '#D9D9D9',
                borderRadius: '19px 19px 0 0'
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                style={{ borderRadius: '19px 19px 0 0' }}
              />
            </div>
            
            <div style={{ padding: '20px 17px' }}>
              <div className="flex items-center gap-[20px] mb-[15px]">
                <div className="flex items-center gap-[4px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                  <span style={{ fontFamily: 'Sequel Sans', fontWeight: 400, fontSize: '15px', color: '#000000' }}>
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-[4px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span style={{ fontFamily: 'Sequel Sans', fontWeight: 400, fontSize: '15px', color: '#000000' }}>
                    {post.date}
                  </span>
                </div>
              </div>
              
              <h3 
                className="mb-[11px]"
                style={{
                  fontFamily: 'Sequel Sans',
                  fontWeight: 415,
                  fontSize: '25px',
                  lineHeight: '29px',
                  color: '#000000',
                  minHeight: '90px',
                  width: '353px'
                }}
              >
                {post.title}
              </h3>
              
              <p 
                className="mb-[15px]"
                style={{
                  fontFamily: 'Sequel Sans',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '19px',
                  color: '#000000',
                  minHeight: '57px',
                  width: '353px'
                }}
              >
                {post.excerpt}
              </p>
              
              {/* These Read More buttons are NOT clickable */}
              <button 
                className="opacity-50 cursor-not-allowed"
                style={{
                  width: '124px',
                  height: '51px',
                  background: '#0D0D0D',
                  borderRadius: '25.5px',
                  color: '#FFFFFF',
                  fontFamily: 'Sequel Sans',
                  fontWeight: 405,
                  fontSize: '18px',
                  lineHeight: '21px',
                  filter: 'drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.15))',
                  border: 'none',
                  pointerEvents: 'none'
                }}
                disabled
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center" style={{ paddingTop: '85px' }}>
        <button 
          onClick={handleViewMore}
          className="group flex items-center hover:shadow-xl transition-all opacity-50 cursor-not-allowed"
          style={{
            width: '250px',
            height: '85px',
            background: '#0D0D0D',
            borderRadius: '42.5px',
            filter: 'drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.15))',
            border: 'none',
            position: 'relative',
            paddingLeft: '26px',
            paddingRight: '12px',
            pointerEvents: 'none'
          }}
          disabled
        >
          <span 
            style={{
              fontFamily: 'Sequel Sans',
              fontWeight: 405,
              fontSize: '30px',
              lineHeight: '35px',
              color: '#FFFFFF',
              marginRight: 'auto',
              marginLeft: '10px'
            }}
          >
            View More
          </span>
          <div 
            className="flex items-center justify-center"
            style={{
              width: '39px',
              height: '39px',
              background: '#FFFFFF',
              borderRadius: '50%',
              marginRight: '14px'
            }}
          >
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
              <path d="M5 10.5H17M17 10.5L11 4.5M17 10.5L11 16.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}