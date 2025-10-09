import type { Metadata } from "next";
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Blog | CodSphere - Industry Insights & Tech Trends",
  description: "Explore CodSphere's blog for expert insights on CRM, ERP, AI automation, digital marketing strategies, and business technology trends.",
  openGraph: {
    title: "Blog | CodSphere - Industry Insights & Tech Trends",
    description: "Expert insights on CRM, ERP, AI automation, and business technology trends.",
    type: "website",
  },
  keywords: "business technology blog, CRM insights, ERP trends, AI automation, digital marketing tips, tech industry news",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      <div className="container mx-auto px-[20px] sm:px-[30px] lg:px-[90px] pt-8 sm:pt-14 pb-4 sm:pb-7">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
          <div className="flex-1">
            <BlogGrid />
          </div>
          <div className="w-full lg:w-[405px] hidden xl:block">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <ContactCTA />
      {/* <Footer /> */}
    </div>
  );
}