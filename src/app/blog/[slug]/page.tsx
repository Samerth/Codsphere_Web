// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPostContent } from '@/components/blog/BlogPostContent';
import { BlogTableOfContents } from '@/components/blog/BlogTableOfContents';
import { BlogRecentPosts } from '@/components/blog/BlogRecentPosts';
import Image from 'next/image';
import ContactCTA from '@/components/ContactCTA';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | CodSphere',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | CodSphere Blog`,
    description: post.excerpt || `Read our latest insights on ${post.category}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read our latest insights on ${post.category}`,
      type: 'article',
      authors: post.author ? [post.author] : undefined,
      publishedTime: post.date,
      tags: post.category ? [post.category] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read our latest insights on ${post.category}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const tableOfContents = [
    "Introduction: Why Local SEO Is Crucial for Local Businesses",
    "Google Business Profile: Your Digital Storefront",
    "Online Reviews: The New Word-of-Mouth",
    "Local Keywords: Speak Your Customer's Language",
    "Content for the Community: Make It Local",
    "Mobile Optimization: Because Local = Mobile",
    "NAP Consistency and Local Citations",
    "Structured Data and On-Page Signals",
    "Backlinks from Local Sources",
    "Social Media and Local Engagement",
    "Performance, Speed, and SEO Tech Setup",
    "Conclusion: Think Local, Win Global (One Neighborhood at a Time)"
  ];

  const recentPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with responsive padding - matching services pattern */}
      <div className="w-full px-4 sm:px-6 lg:px-[145px] py-4 sm:py-6 lg:py-10 bg-white">
        <Navbar />
      </div>

      {/* Hero Section - Responsive following services pattern */}
      <section className="relative w-full h-[200px] md:h-[225px] lg:h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-[#D9D9D9]">
          <Image 
            src="/images/Blog Inner page/JPEG/blog title.jpg" 
            alt="Blog Hero Background" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div 
          className="absolute inset-0" 
          style={{ background: 'rgba(22, 22, 22, 0.5)' }}
        />
        <div className="relative z-10 h-full flex items-center">
          <h1 
            className="px-4 sm:px-6 md:px-8 lg:px-[65px] text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[38px] lg:leading-[47px] font-[415] font-sequel text-white max-w-full lg:max-w-[686px]"
            style={{
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Blogs: The Ultimate Guide to Local SEO
          </h1>
        </div>
      </section>

      {/* Main Content Area - Following services responsive pattern */}
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px] py-8 md:py-12 lg:py-[60px]">
        {/* Mobile/Tablet Layout: Table of Contents at top */}
        <div className="lg:hidden mb-8 md:mb-12">
          <BlogTableOfContents sections={tableOfContents} />
        </div>

        {/* Desktop Layout: Side-by-side; Mobile/Tablet: Stacked */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[60px]">
          {/* Main Content */}
          <BlogPostContent post={post} />
          
          {/* Desktop Sidebar */}
          <aside className="w-full lg:w-[374px] lg:sticky lg:top-6">
            {/* Table of Contents - Only visible on desktop */}
            <div className="hidden lg:block mb-8 md:mb-12 lg:mb-[60px]">
              <BlogTableOfContents sections={tableOfContents} />
            </div>
            
            {/* Recent Posts - Always visible */}
            <BlogRecentPosts posts={recentPosts} />
          </aside>
        </div>
      </div>

      <ContactCTA />
      <Footer />
    </div>
  );
}