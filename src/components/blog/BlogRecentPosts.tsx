// components/blog/BlogRecentPosts.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  slug: string;
  image?: string;
}

interface BlogRecentPostsProps {
  posts: BlogPost[];
}

export function BlogRecentPosts({ posts }: BlogRecentPostsProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (postId: number) => {
    setImageErrors(prev => new Set(prev).add(postId));
  };

  return (
    <div 
      style={{
        background: '#F8F9FA',
        boxShadow: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '11px',
        padding: '15px',
        minHeight: '1186px'
      }}
    >
      <h3 
        className="mb-[30px] text-center"
        style={{
          fontFamily: 'Sequel Sans',
          fontWeight: 415,
          fontSize: '25px',
          lineHeight: '32px',
          color: '#000000'
        }}
      >
        Recent Posts
      </h3>
      
      <div className="space-y-[50px]">
        {posts.map((post) => {
          const hasImageError = imageErrors.has(post.id);
          const shouldShowPlaceholder = !post.image || hasImageError;
          
          return (
            <div key={post.id} className="cursor-default">
              <div 
                className="relative mb-[20px] overflow-hidden"
                style={{
                  width: '344px',
                  height: '165px',
                  background: '#EFF2FF',
                  borderRadius: '8px'
                }}
              >
                {!shouldShowPlaceholder && post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(post.id)}
                  />
                ) : (
                  <>
                    {post.tag === 'ERP' && (
                      <div className="w-full h-full bg-gradient-to-br from-[#2c3e7a] to-[#1a2347] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-white text-[48px] font-bold">ERP</div>
                          <div className="flex gap-2 justify-center mt-2">
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
                          <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <div className="w-12 h-12 bg-white/35 rounded-full"></div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full"></div>
                        </div>
                      </div>
                    )}
                    
                    {post.tag === 'HR' && (
                      <div className="w-full h-full bg-[#4a5568] flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-xs font-light tracking-wider mb-1">HUMAN</div>
                          <div className="text-xs font-light tracking-wider mb-3">RESOURCES</div>
                          <div className="flex gap-1 justify-center mb-3">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          <div className="flex gap-3 justify-center">
                            <div className="w-6 h-6 border border-white/40 rounded-full"></div>
                            <div className="w-6 h-6 border border-white/40 rounded-full"></div>
                            <div className="w-6 h-6 border border-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {post.tag === 'E-commerce' && (
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                        <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                      </div>
                    )}
                    
                    {!['ERP', 'Innovation', 'HR', 'E-commerce'].includes(post.tag) && (
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <div className="text-white text-2xl font-bold">{post.tag}</div>
                      </div>
                    )}
                  </>
                )}
              </div>
              
              <div className="flex items-center gap-2 mb-[10px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <rect x="8" y="14" width="2" height="2" fill="black"/>
                </svg>
                <span 
                  style={{
                    fontFamily: 'Sequel Sans',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '18px',
                    color: '#000000'
                  }}
                >
                  {post.date}
                </span>
              </div>
              
              <h4 
                className="line-clamp-2"
                style={{
                  fontFamily: 'Sequel Sans',
                  fontWeight: 415,
                  fontSize: '15px',
                  lineHeight: '19px',
                  color: '#000000',
                  maxWidth: '329px'
                }}
              >
                {post.title}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}