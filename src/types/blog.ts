// types/blog.ts
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