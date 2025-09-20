'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { ChevronRight, Play, Cloud, Lock, Zap } from 'lucide-react';

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
    <section className="relative bg-white overflow-hidden w-full max-w-[1440px] mx-auto" style={{minHeight: 'auto'}}>
      {/* Responsive Container */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-[90px] py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Side Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* AI Feature Card */}
            <div className="bg-[#F1F2F6] rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] p-3 sm:p-4 w-full max-w-[380px]">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Thumbnail */}
                <div className="relative w-full sm:w-[151px] h-[120px] sm:h-[154px] bg-white rounded-[12px] sm:rounded-[18px] lg:rounded-[21px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/home/ai-hand.jpg"
                    alt="AI robotic hand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 151px"
                    priority
                  />
                </div>
                
                {/* Text and buttons */}
                <div className="flex flex-col justify-between py-1 sm:py-2 flex-1">
                  <p className="text-[11px] sm:text-[12px] leading-[14px] sm:leading-[15px] text-black font-sequel">
                    AI-powered ERP & CRM for smarter business. AUTOMATE tasks, predict trends, and boost productivity. RUN faster, grow smarter.
                  </p>
                  
                  {/* Explore more button with chevrons */}
                  <div className="flex items-center bg-white rounded-[16px] sm:rounded-[18px] lg:rounded-[21px] h-[36px] sm:h-[40px] overflow-hidden mt-3 sm:mt-0">
                    <button className="bg-black text-white h-full px-3 sm:px-4 text-[11px] sm:text-[12px] font-sequel hover:bg-gray-900 transition-colors">
                      Explore more
                    </button>
                    <div className="flex items-center px-2 sm:px-3 gap-0">
                      <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 -mr-1" />
                      <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 -mr-1" />
                      <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Tags */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] lg:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Automate
                </span>
                <span className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] lg:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Optimize
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] lg:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Scale
                </span>
                <span className="px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] lg:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Accelerate
                </span>
                <span className="px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] lg:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Integrate
                </span>
              </div>
            </div>

            {/* Descriptive Paragraph */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] xl:leading-[36px] text-[#525252] font-sequel font-light mb-4 sm:mb-6">
              At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart 
              invoicing tools, and full-funnel digital strategies so your business runs 
              smarter, not harder.
            </p>

            {/* Main Heading */}
            <h1 className="font-sequel text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[50px] leading-[32px] sm:leading-[38px] md:leading-[45px] lg:leading-[52px] xl:leading-[59px] font-normal text-black mb-6 sm:mb-8">
              AI ERP, CRM & Automation<br />
              Experts Driving Smarter<br />
              Business Efficiency
            </h1>
          </div>

          {/* Right Side - Hero Graphic/Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <div className="relative w-full h-full">
                {/* Custom shaped video container with gradient background */}
                <svg 
                  viewBox="0 0 550 400" 
                  fill="none"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="videoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1a2e" />
                      <stop offset="50%" stopColor="#16213e" />
                      <stop offset="100%" stopColor="#0f3460" />
                    </linearGradient>
                    <clipPath id="videoContainerShape">
                      <path d="
                        M 40,20
                        Q 20,20 20,40
                        L 20,360
                        Q 20,380 40,380
                        L 510,380
                        Q 530,380 530,360
                        L 530,40
                        Q 530,20 510,20
                        L 40,20
                        Z
                      " />
                    </clipPath>
                  </defs>
                  
                  {/* Background with gradient */}
                  <rect 
                    width="550" 
                    height="400" 
                    fill="url(#videoGradient)" 
                    clipPath="url(#videoContainerShape)"
                    rx="32"
                  />
                  
                  {/* Video element */}
                  <foreignObject 
                    width="550" 
                    height="400" 
                    clipPath="url(#videoContainerShape)"
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
                </svg>
                
                {/* Cloud Icon at top left */}
                <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8">
                  <Cloud className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 opacity-80" />
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex flex-col gap-1">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Lightning Icon - Top Right */}
                <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-300 opacity-70" />
                </div>

                {/* Play Button - Centered */}
                <button
                  onClick={togglePlay}
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ml-1" fill="black" />
                </button>

                {/* Data Flow Visualization - Below play button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12 sm:translate-y-14 lg:translate-y-16 flex flex-col items-center gap-3 sm:gap-4">
                  {/* Vertical beams */}
                  <div className="flex gap-6 sm:gap-7 lg:gap-8">
                    <div className="w-0.5 sm:w-1 h-8 sm:h-10 lg:h-12 bg-blue-300 opacity-60"></div>
                    <div className="w-0.5 sm:w-1 h-10 sm:h-12 lg:h-16 bg-blue-400 opacity-80 relative">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    <div className="w-0.5 sm:w-1 h-6 sm:h-8 lg:h-10 bg-blue-300 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}