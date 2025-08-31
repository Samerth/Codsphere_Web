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
      {/* Navbar with reduced padding */}
      <div className="w-full px-[145px] py-4 bg-white">
        <Navbar />
      </div>

      {/* Hero Section - removed mt-[151px] */}
      <section className="relative w-full h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-[#D9D9D9]">
          <Image 
            src="/images/Blog Inner page/JPEG/blog title.jpg" 
            alt="Blog Hero Background" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(22, 22, 22, 0.5)' }}></div>
        <div className="relative z-10 h-full flex items-center">
          <h1 
            className="px-[65px]"
            style={{
              fontFamily: 'Sequel Sans',
              fontWeight: 415,
              fontSize: '40px',
              lineHeight: '47px',
              color: '#FFFFFF',
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
              maxWidth: '686px'
            }}
          >
          </h1>
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto px-[90px] py-[60px]">
        <div className="flex gap-[60px]">
          <BlogPostContent post={post} />
          <aside className="sticky top-6" style={{ width: '374px' }}>
            <BlogTableOfContents sections={tableOfContents} />
            <BlogRecentPosts posts={recentPosts} />
          </aside>
        </div>
      </div>

      <ContactCTA />
      <Footer />
    </div>
  );
}