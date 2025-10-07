/** @format */
'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function HomeHero() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(false);
  const [isMobilePlaying, setIsMobilePlaying] = useState(false);

  useEffect(() => {
    // Auto-play desktop video when component mounts
    if (desktopVideoRef.current) {
      desktopVideoRef.current
        .play()
        .then(() => setIsDesktopPlaying(true))
        .catch(() => setIsDesktopPlaying(false));
    }

    // Auto-play mobile video when component mounts
    if (mobileVideoRef.current) {
      mobileVideoRef.current
        .play()
        .then(() => setIsMobilePlaying(true))
        .catch(() => setIsMobilePlaying(false));
    }
  }, []);

  const toggleDesktopPlay = () => {
    if (!desktopVideoRef.current) return;

    if (desktopVideoRef.current.paused) {
      desktopVideoRef.current.play();
      setIsDesktopPlaying(true);
    } else {
      desktopVideoRef.current.pause();
      setIsDesktopPlaying(false);
    }
  };

  const toggleMobilePlay = () => {
    if (!mobileVideoRef.current) return;

    if (mobileVideoRef.current.paused) {
      mobileVideoRef.current.play();
      setIsMobilePlaying(true);
    } else {
      mobileVideoRef.current.pause();
      setIsMobilePlaying(false);
    }
  };

  return (
    <section className="pt-4 pb-4 lg:pb-0">
      <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[620px]">
        {/* Desktop & Tablet Layout (sm and above) */}
        <div className="hidden sm:flex justify-between gap-10 xl:gap-20 2xl:gap-40">
          <div className="w-[30%] lg:w-[40%]">
            {/* AI Info Card */}
            <div className="flex flex-col lg:flex-row gap-3 bg-[#F1F2F6] rounded-[32px] p-4">
              {/* Thumbnail */}
              <div className="relative w-full h-[150px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] bg-white rounded-[21px] overflow-hidden flex-shrink-0">
                <Image src="/images/home/ai-hand.jpg" alt="AI robotic hand" fill className="object-cover" sizes="151px" priority />
              </div>

              {/* Text and buttons */}
              <div className="flex flex-col justify-between pt-3 gap-3">
                <div className="h-full flex flex-col justify-center">
                  <p className="text-[12px] leading-[15px] text-black font-sequel">
                    AI-powered ERP & CRM for smarter business. AUTOMATE tasks, predict trends, and boost productivity. RUN faster, grow smarter.
                  </p>
                </div>

                {/* Explore more button with chevrons */}
                <div className="flex items-center gap-2.5 bg-black text-black rounded-full h-[40px] xl:h-[70px] p-[5px]">
                  <button className="flex-1 bg-white rounded-full h-full text-[12px] font-sequel hover:bg-gray-100 transition-colors">Explore more</button>
                  <div className="flex items-center justify-center h-full aspect-square rounded-full bg-white">
                    <div className="flex">
                      <ChevronRight className="w-3 h-3 -mr-1.5" />
                      <ChevronRight className="w-3 h-3 -mr-1.5" />
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pills*/}
            <div className="mt-12 flex flex-wrap gap-1 w-[330%] lg:w-[158%] xl:w-[100%]">
              <span className="px-8 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                Automate
              </span>
              <span className="px-8 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                Optimize
              </span>
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

            {/* Subtitle*/}
            <div className="mt-5  w-[330%] lg:w-[260%] xl:w-[160%] 2xl:w-[100%]">
              <p className="text-[16px] leading-[22px] text-[#525252]">
                At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart invoicing tools, and full-funnel digital strategies so your business
                runs smarter, not harder.
              </p>
            </div>

            <div className="w-[330%] lg:w-[260%] xl:w-[260%] 2xl:w-[180%] mt-7 lg:mt-12">
              <h1 className="font-sequel text-[30px] lg:text-[50px] leading-[39px] lg:leading-[59px] font-normal text-black" style={{ fontWeight: 415 }}>
                AI ERP, CRM & Automation Experts Driving Smarter Business Efficiency
              </h1>
            </div>
          </div>

          {/* Video Container */}
          <div className="w-[70%] lg:w-[60%]">
            <div className="relative w-full aspect-[550/400]">
              {/* CodSphere Logo Icon */}
              <div className="absolute top-0 right-0 w-[60px] h-[60px] bg-black rounded-full flex items-center justify-center z-20">
                <Image src="/logo-icon-white.svg" alt="CodSphere" width={35} height={35} className="object-contain" />
              </div>

              {/* Clipped Video */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 550 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <path
                      id="heroShape"
                      d="
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
                      "
                    />
                    <clipPath id="heroVideoShape" clipPathUnits="userSpaceOnUse">
                      <use href="#heroShape" />
                    </clipPath>
                  </defs>

                  <foreignObject width="550" height="400" clipPath="url(#heroVideoShape)">
                    <video
                      ref={desktopVideoRef}
                      className="w-full h-full object-cover"
                      poster="/images/home/video-poster.jpg"
                      onClick={toggleDesktopPlay}
                      playsInline
                      muted
                      loop
                    >
                      <source src="/videos/hero-video.mp4" type="video/mp4" />
                    </video>
                  </foreignObject>
                </svg>

                {/* Play button */}
                {!isDesktopPlaying && (
                  <button
                    onClick={toggleDesktopPlay}
                    aria-label="Play video"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                  >
                    <Play className="w-10 h-10 ml-2" fill="black" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (below sm) */}
        <div className="sm:hidden flex flex-col space-y-6 sm:space-y-8">
          {/* AI Info Card - Mobile */}
          <div className="w-full flex gap-3 sm:gap-4 rounded-[20px] p-3 bg-[#F1F2F6]">
            {/* Thumbnail - Fixed square aspect ratio */}
            <div className="relative w-[140px] h-[140px] sm:w-[120px] sm:h-[123px] md:w-[151px] md:h-[154px] bg-white rounded-[15px] sm:rounded-[18px] overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
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
              <div className="h-full flex flex-col justify-center">
                <p className="text-[11px] sm:text-[12px] leading-[14px] sm:leading-[15px] text-black font-sequel mb-3 sm:mb-0 text-left">
                  AI-powered ERP & CRM for smarter business. AUTOMATE tasks, predict trends, and boost productivity. RUN faster, grow smarter.
                </p>
              </div>

              {/* Explore more button with chevrons */}
              <div className="flex items-center gap-2.5 bg-black text-black rounded-full h-[40px] xl:h-[50px] p-[5px] max-w-[150px]">
                <button className="flex-1 bg-white rounded-full h-full text-[12px] font-sequel hover:bg-gray-100 transition-colors">Explore more</button>
                <div className="flex items-center justify-center h-full aspect-square rounded-full bg-white">
                  <div className="flex">
                    <ChevronRight className="w-3 h-3 -mr-1.5" />
                    <ChevronRight className="w-3 h-3 -mr-1.5" />
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Pills - Mobile */}
          <div className="w-full flex flex-wrap gap-1">
            <span className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
              Automate
            </span>
            <span className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
              Optimize
            </span>
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

          {/* Subtitle - Mobile */}
          <div className="w-full">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[21px] md:leading-[22px] text-[#525252] font-sequel font-light text-left">
              At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart invoicing tools, and full-funnel digital strategies so your business
              runs smarter, not harder.
            </p>
          </div>

          {/* Video Container - Mobile */}
          <div className="w-full">
            <div className="relative w-full aspect-[550/400]">
              {/* CodSphere Logo Icon */}
              <div className="absolute top-2 right-4 sm:right-6 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-black rounded-full flex items-center justify-center z-20">
                <Image src="/logo-icon-white.svg" alt="CodSphere" width={25} height={25} className="object-contain sm:w-[30px] sm:h-[30px]" />
              </div>

              {/* Simplified Video for Mobile */}
              <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
                <video
                  ref={mobileVideoRef}
                  className="w-full h-full object-cover rounded-[20px] sm:rounded-[24px]"
                  // poster="/images/home/video-poster.jpg"
                  onClick={toggleMobilePlay}
                  playsInline
                  muted
                  loop
                >
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>

                {/* Play button */}
                {!isMobilePlaying && (
                  <button
                    onClick={toggleMobilePlay}
                    aria-label="Play video"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                  >
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1" fill="black" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Main Headline - Mobile */}
          <div className="w-full">
            <h1
              className="font-sequel text-[24px] sm:text-[32px] md:text-[40px] leading-[28px] sm:leading-[38px] md:leading-[48px] font-normal text-black text-left"
              style={{ fontWeight: 415 }}
            >
              AI ERP, CRM & Automation Experts Driving Smarter Business Efficiency
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
