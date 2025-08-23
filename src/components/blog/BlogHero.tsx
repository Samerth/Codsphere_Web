// components/blog/BlogHero.tsx
import Image from 'next/image';

export function BlogHero() {
  return (
    <div className="relative w-full h-[250px] overflow-hidden">
      {/* TODO: Replace with your hero background image */}
      {/* Uncomment and update the path below when you have your background image */}
      <Image 
        src="/images/Blog page/JPEG/blog.jpg" 
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