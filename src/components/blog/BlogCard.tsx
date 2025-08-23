import { BlogPost } from '@/types/blog';
import Image from 'next/image';

interface BlogCardProps {
  post: BlogPost;
  isFeature?: boolean;
}

export function BlogCard({ post, isFeature = false }: BlogCardProps) {
  return (
    <article className={`bg-white rounded-[19px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${isFeature ? 'col-span-2' : ''}`}>
      {/* Image/Tag Section */}
      <div className={`relative ${isFeature ? 'h-[447px]' : 'h-[215px]'} bg-[#D9D9D9] rounded-t-[19px]`}>
        {/* TODO: Add your blog post JPG images
        Available image assets:
        - /images/Blog page/PNG/1st blog image.png
        - /images/Blog page/PNG/EPR sysems.png
        - /images/Blog page/PNG/why smart business.png
        - /images/Blog page/PNG/EPR sysems.png
        - /images/Blog page/PNG/E-comerce.png
        */}
        {post.image ? (
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          /* Placeholder designs - Remove these when you add your images */
          <>
            {post.tag === 'CRM' && (
              <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#0d0d0d] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-[72px] font-bold mb-6">CRM</div>
                  <div className="flex gap-3 justify-center">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-[40px] h-[40px] border-2 border-white/30 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-white/20 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {post.tag === 'ERP' && (
              <div className="w-full h-full bg-gradient-to-br from-[#2c3e7a] to-[#1a2347] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-[72px] font-bold mb-4">ERP</div>
                  <div className="flex gap-2 justify-center">
                    <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
            
            {post.tag === 'Innovation' && (
              <div className="w-full h-full bg-gradient-to-br from-[#3ea8d8] via-[#4a90e2] to-[#5c6bc0] flex items-center justify-center">
                <div className="relative">
                  <div className="w-28 h-28 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-white/35 rounded-full"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            )}
            
            {post.tag === 'HR' && (
              <div className="w-full h-full bg-[#4a5568] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-xs font-light tracking-wider mb-1">HUMAN</div>
                  <div className="text-xs font-light tracking-wider mb-4">RESOURCES</div>
                  <div className="flex gap-1 justify-center mb-4">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <div className="w-7 h-7 border border-white/40 rounded-full"></div>
                    <div className="w-7 h-7 border border-white/40 rounded-full"></div>
                    <div className="w-7 h-7 border border-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
            
            {post.tag === 'E-commerce' && (
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
            )}
          </>
        )}
      </div>

      {/* Content Section */}
      <div className={`${isFeature ? 'px-8 py-7' : 'px-6 py-5'} bg-white`}>
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="black">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
            <span className="text-[15px] text-black font-normal">{post.category}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <rect x="8" y="14" width="2" height="2" fill="black"></rect>
            </svg>
            <span className="text-[15px] text-black font-normal">{post.date}</span>
          </div>
        </div>
        
        <h2 className={`${isFeature ? 'text-[25px] leading-[29px]' : 'text-[25px] leading-[29px]'} font-medium mb-4 text-black`}>
          {post.title}
        </h2>
        
        <p className="text-[16px] leading-[19px] text-black mb-5">
          {post.excerpt}
        </p>
        
        <button className="bg-[#0D0D0D] text-white px-[20px] py-[13px] rounded-[25.5px] text-[18px] font-normal hover:bg-black transition-colors shadow-[4px_4px_12px_rgba(0,0,0,0.15)]">
          Read More
        </button>
      </div>
    </article>
  );
}