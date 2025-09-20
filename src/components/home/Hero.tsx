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
    <section className="relative bg-white overflow-hidden w-full max-w-[1440px] mx-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[750px]">
      {/* Container with responsive padding */}
      <div className="relative w-full h-full px-4 sm:px-6 lg:px-[90px] py-4 sm:py-6 lg:py-8">
        
        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:block">
          {/* AI Info Card - Desktop positioning */}
          <div className="absolute left-0 top-0 w-[380px]">
            <div className="bg-[#F1F2F6] rounded-[32px] p-4">
              <div className="flex gap-3">
                {/* Thumbnail */}
                <div className="relative w-[151px] h-[154px] bg-white rounded-[21px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/home/ai-hand.jpg"
                    alt="AI robotic hand"
                    fill
                    className="object-cover"
                    sizes="151px"
                    priority
                  />
                </div>
                
                {/* Text and buttons */}
                <div className="flex flex-col justify-between py-2 flex-1">
                  <p className="text-[12px] leading-[15px] text-black font-sequel">
                    AI-powered ERP & CRM for smarter business. AUTOMATE tasks, predict trends, and boost productivity. RUN faster, grow smarter.
                  </p>
                  
                  {/* Explore more button with chevrons */}
                  <div className="flex items-center bg-white rounded-[21px] h-[40px] overflow-hidden">
                    <button className="bg-black text-white h-full px-4 text-[12px] font-sequel hover:bg-gray-900 transition-colors">
                      Explore more
                    </button>
                    <div className="flex items-center px-3 gap-0">
                      <ChevronRight className="w-3 h-3 -mr-1" />
                      <ChevronRight className="w-3 h-3 -mr-1" />
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Container - Desktop positioning */}
          <div className="absolute right-0 top-0 w-[60%] max-w-[980px]">
  <div className="relative w-full aspect-[550/400]">
    {/* CodSphere Logo Icon */}
    <div className="absolute top-0 right-10 w-[60px] h-[60px] bg-black rounded-full flex items-center justify-center z-20">
      <Image
        src="/logo-icon-white.svg"
        alt="CodSphere"
        width={35}
        height={35}
        className="object-contain"
      />
    </div>

    {/* Clipped Video */}
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 550 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="heroShape" d="
            M 40,0
            Q 0,0 0,40
            V 234
            Q 0,274 40,274
            H 138
            Q 178,274 178,314
            V 360
            Q 178,400 218,400
            H 510
            Q 550,400 550,360
            V 80
            Q 550,60 520,60
            H 500
            Q 460,60 460,20
            H 460
            Q 460,0 420,0
            Z
          " />
          <clipPath id="heroVideoShape" clipPathUnits="userSpaceOnUse">
            <use href="#heroShape" />
          </clipPath>
        </defs>

        <foreignObject
          width="550"
          height="400"
          clipPath="url(#heroVideoShape)"
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

                {/* Play button */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
        >
          <Play className="w-10 h-10 ml-2" fill="black" />
        </button>
      )}
    </div>
  </div>
</div>

          {/* Pills - Desktop positioning */}
          <div className="absolute left-0 top-[215px]">
        <div className="flex gap-3 mb-3">
          <span className="px-8 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Automate
          </span>
          <span className="px-8 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Optimize
          </span>
        </div>
        <div className="flex gap-3 flex-wrap">
          <span className="px-6 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Scale
          </span>
          <span className="px-7 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Accelerate
          </span>
          <span className="px-6 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Integrate
          </span>
        </div>
      </div>

          {/* Subtitle - Desktop positioning */}
          <div className="absolute left-0 top-[345px] w-[380px]">
        <p className="text-[16px] leading-[22px] text-[#525252] font-sequel font-light">
          At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart 
          invoicing tools, and full-funnel digital strategies so your business runs 
          smarter, not harder.
        </p>
      </div>
      
          {/* Main Headline - Desktop positioning */}
          <div className="absolute left-0 top-[455px] w-[602px]">
        <h1 className="font-sequel text-[50px] leading-[59px] font-normal text-black" style={{fontWeight: 415}}>
          AI ERP, CRM & Automation<br />
          Experts Driving Smarter<br />
          Business Efficiency
        </h1>
      </div>
        </div>

        {/* Mobile & Tablet Layout (below lg) */}
        <div className="lg:hidden">
          <div className="flex flex-col space-y-6 sm:space-y-8">
            
            {/* Video Container - Mobile/Tablet (moved to top) */}
            <div className="w-full max-w-[500px] mx-auto">
              <div className="relative w-full aspect-[550/400]">
                {/* CodSphere Logo Icon */}
                <div className="absolute top-2 right-4 sm:right-6 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-black rounded-full flex items-center justify-center z-20">
                  <Image
                    src="/logo-icon-white.svg"
                    alt="CodSphere"
                    width={25}
                    height={25}
                    className="object-contain sm:w-[30px] sm:h-[30px]"
                  />
                </div>

                {/* Simplified Video for Mobile */}
                <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-[20px] sm:rounded-[24px]"
                    poster="/images/home/video-poster.jpg"
                    onClick={togglePlay}
                    playsInline
                    muted
                    loop
                  >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                  </video>

                  {/* Play button */}
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      aria-label="Play video"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                    >
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1" fill="black" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* AI Info Card - Mobile/Tablet (fixed aspect ratio) */}
            <div className="w-full max-w-[380px] mx-auto sm:mx-0">
              <div className="bg-[#F1F2F6] rounded-[20px] sm:rounded-[24px] p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* Thumbnail - Fixed square aspect ratio */}
                  <div className="relative w-[120px] h-[120px] sm:w-[120px] sm:h-[123px] md:w-[151px] md:h-[154px] bg-white rounded-[15px] sm:rounded-[18px] overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src="/images/home/ai-hand.jpg"
                      alt="AI robotic hand"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 120px, (max-width: 768px) 120px, 151px"
                      priority
                    />
                  </div>
                  
                  {/* Text and buttons */}
                  <div className="flex flex-col justify-between py-1 sm:py-2 flex-1">
                    <p className="text-[11px] sm:text-[12px] leading-[14px] sm:leading-[15px] text-black font-sequel mb-3 sm:mb-0 text-center sm:text-left">
                      AI-powered ERP & CRM for smarter business. AUTOMATE tasks, predict trends, and boost productivity. RUN faster, grow smarter.
                    </p>
                    
                    {/* Explore more button with chevrons */}
                    <div className="flex items-center bg-white rounded-[16px] sm:rounded-[18px] h-[36px] sm:h-[40px] overflow-hidden mx-auto sm:mx-0 w-fit">
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
            </div>

            {/* Feature Pills - Mobile/Tablet */}
            <div className="w-full">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 justify-center sm:justify-start">
                <span className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Automate
                </span>
                <span className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Optimize
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                <span className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Scale
                </span>
                <span className="px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Accelerate
                </span>
                <span className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Integrate
                </span>
              </div>
            </div>

            {/* Subtitle - Mobile/Tablet */}
            <div className="w-full max-w-[380px] mx-auto sm:mx-0">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[21px] md:leading-[22px] text-[#525252] font-sequel font-light text-center sm:text-left">
                At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart 
                invoicing tools, and full-funnel digital strategies so your business runs 
                smarter, not harder.
              </p>
            </div>
            
            {/* Main Headline - Mobile/Tablet */}
            <div className="w-full">
              <h1 className="font-sequel text-[24px] sm:text-[32px] md:text-[40px] leading-[28px] sm:leading-[38px] md:leading-[48px] font-normal text-black text-center sm:text-left" style={{fontWeight: 415}}>
                AI ERP, CRM & Automation<br />
                Experts Driving Smarter<br />
                Business Efficiency
              </h1>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}