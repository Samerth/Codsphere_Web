'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative bg-white min-h-[750px] overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-6 lg:px-[90px] py-12 lg:py-[60px]">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center relative">
          
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-[540px] flex flex-col lg:pr-12">
            {/* Info Card */}
            <div className="bg-[#F1F2F6] rounded-[20px] md:rounded-[32px] p-3 md:p-4 mb-6 md:mb-8 w-full max-w-[380px]">
              <div className="flex gap-3">
                {/* Thumbnail */}
                <div className="relative w-[120px] md:w-[151px] h-[123px] md:h-[154px] bg-white rounded-[15px] md:rounded-[21px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/home/ai-hand.jpg"
                    alt="AI robotic hand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 120px, 151px"
                    priority
                  />
                </div>
                
                {/* Text and buttons */}
                <div className="flex flex-col justify-between py-2">
                  <p className="text-[10px] md:text-[12px] leading-[13px] md:leading-[15px] text-black font-sequel">
                    AI-powered ERP & CRM for smarter business. Automate tasks, predict trends, and boost productivity. Work faster, grow smarter.
                  </p>
                  
                  {/* Explore more button with chevrons */}
                  <div className="flex items-center bg-white rounded-[15px] md:rounded-[21px] h-[35px] md:h-[40px] overflow-hidden">
                    <button className="bg-black text-white h-full px-3 md:px-4 text-[10px] md:text-[12px] font-sequel hover:bg-gray-900 transition-colors">
                      Explore more
                    </button>
                    <div className="flex items-center px-2 md:px-3 gap-0">
                      <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 -mr-1" />
                      <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 -mr-1" />
                      <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           {/* Pills */}
            <div className="mb-6 md:mb-8">
              {/* First row */}
              <div className="flex gap-3 mb-3">
                <span className="px-6 md:px-8 py-2 md:py-2.5 border border-black rounded-full text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Automate
                </span>
                <span className="px-6 md:px-8 py-2 md:py-2.5 border border-black rounded-full text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Optimize
                </span>
              </div>
              
              {/* Second row */}
              <div className="flex gap-3">
                <span className="px-5 md:px-6 py-2 md:py-2.5 border border-black rounded-full text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Scale
                </span>
                <span className="px-5 md:px-7 py-2 md:py-2.5 border border-black rounded-full text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Accelerate
                </span>
                <span className="px-5 md:px-6 py-2 md:py-2.5 border border-black rounded-full text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Integrate
                </span>
              </div>
            </div>
            
            {/* Subtitle */}
            <p className="text-[13px] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[22px] text-black font-sequel mb-6 md:mb-8 max-w-full md:max-w-[440px]">
              At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart 
              invoicing tools, and full-funnel digital strategies so your business runs 
              smarter, not harder.
            </p>
            
            {/* Main Headline */}
            <h1 className="text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px] leading-[40px] md:leading-[46px] lg:leading-[52px] xl:leading-[58px] font-medium text-black font-sequel">
              AI ERP, CRM & Automation <br />
              Experts Driving Smarter <br />
              Business Efficiency
            </h1>
          </div>

          {/* Right Content - Video Container with exact Figma dimensions */}
          <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:w-[809px] lg:h-[599px] h-[400px] md:h-[500px]">
            {/* CodSphere Logo Icon */}
            <div className="absolute -top-4 right-6 lg:right-12 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-black rounded-full flex items-center justify-center z-20">
              <Image
                src="/logo-icon-white.svg"
                alt="CodSphere"
                width={30}
                height={30}
                className="object-contain md:w-[35px] md:h-[35px]"
              />
            </div>

            {/* Video Container with custom shape matching Figma */}
            <div className="relative w-full h-full">
              <svg 
                viewBox="0 0 809 599" 
                fill="none"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <clipPath id="heroVideoClip">
                    <path d="M80 120 Q50 50 120 50 L650 50 Q750 50 780 120 Q809 180 809 250 L809 450 Q809 530 750 560 Q700 599 650 599 L200 599 Q80 599 40 520 Q0 440 0 350 Q0 200 80 120 Z" />
                  </clipPath>
                </defs>
                
                {/* Video container */}
                <foreignObject 
                  width="809" 
                  height="599" 
                  clipPath="url(#heroVideoClip)"
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/images/home/video-poster.jpg"
                    onClick={togglePlay}
                    playsInline
                    muted
                    loop
                  >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                  </video>
                </foreignObject>
                
                {/* Border */}
                <path 
                  d="M80 120 Q50 50 120 50 L650 50 Q750 50 780 120 Q809 180 809 250 L809 450 Q809 530 750 560 Q700 599 650 599 L200 599 Q80 599 40 520 Q0 440 0 350 Q0 200 80 120 Z"
                  fill="none" 
                  stroke="black" 
                  strokeWidth="1"
                />
              </svg>
              
              {/* Play button with exact positioning */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  aria-label="Play video"
                  className="absolute top-[242px] left-[347px] lg:top-[242px] lg:left-[347px] w-[115px] h-[115px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                >
                  <Play className="w-10 h-10 ml-2" fill="black" />
                </button>
              )}
            </div>
            
            {/* Dimensions indicator (visible only in dev) */}
            <div className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs z-30">
              809 × 599
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}