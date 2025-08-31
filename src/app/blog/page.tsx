'use client';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-[145px] py-10 bg-white">
      <Navbar />  
      </div>
      <BlogHero />
      <div className="w-full max-w-[1440px] mx-auto px-[90px] py-[30px]">
        <div className="flex gap-[30px]">
          <div className="flex-1">
            <BlogGrid />
          </div>
          <div className="w-[405px]">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}