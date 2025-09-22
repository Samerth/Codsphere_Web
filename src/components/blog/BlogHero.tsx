// components/blog/BlogHero.tsx
import Image from 'next/image';

export function BlogHero() {
  return (
    <div className="relative w-full h-[180px] md:h-[220px] lg:h-[250px] overflow-hidden">
      <Image 
        src="/images/Blog-page/JPEG/blog.jpg" 
        alt="Blog Hero Background" 
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}