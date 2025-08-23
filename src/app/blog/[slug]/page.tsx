import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog-data';
import  Navbar  from '@/components/Navbar';
import  Footer  from '@/components/Footer';
import { BlogArticle } from '@/components/blog/BlogArticle';
import { BlogSidebar } from '@/components/blog/BlogSidebar';

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogArticle post={post} />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}