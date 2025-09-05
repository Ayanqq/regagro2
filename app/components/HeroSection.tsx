'use client';

import Image from 'next/image';
import { useState } from 'react';
import Pagination from './Pagination';

export default function HeroSection({sections, setCurrentSection, currentSection}: {sections: string[], setCurrentSection: (section: string) => void, currentSection: string}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="relative pt-[60px] md:pt-[110px]">
      {/* Content */}
      <div className="max-w-[920px] lg:max-w-[1320px] md:h-[777px] h-[663px] mx-auto md:px-7.5 px-[15px] relative z-10">
        <Pagination sections={sections} onSectionChange={setCurrentSection} currentSection={currentSection} />
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <img
            src="/images/section/section-1.png"
            alt="Hero background"
            className="w-full h-full object-cover rounded-[20px] hidden md:block"
          />
          {/* Mobile Image */}
          <img
            src="/images/section/mobile/section-1.png"
            alt="Hero background mobile"
            className="w-full h-full rounded-[20px] md:hidden"
          />
          {/* Dark overlay */}
        </div>

        <div className="items-center relative z-20 md:pt-[clamp(85px,calc(24vw-243px),218px)] pt-[100px]">
          {/* Left Content */}
          <div className="text-white items-center">
            {/* Welcome badge */}
            <div className="px-[12px] py-[6px] md:px-[20px] md:py-[14px] bg-white/10 backdrop-blur-none md:backdrop-blur-xs border border-white w-fit rounded-full text-[12px] font-medium md:mb-2.5 mb-1">
              <h3 className="text-white leading-[100%] tracking-[0%] font-normal md:font-medium text-[10px] md:text-[12px]">welcome to regagro</h3>
            </div>

            {/* Main headline */}
            <h1 className="font-jakarta md:text-[40px] text-[24px] font-bold md:mb-[20px] mb-[15px] leading-[110%] md:leading-[44px] tracking-[-2%] md:max-w-[667px] max-w-[345px]">
              Revolutionize animal identification with this one-stop platform from a leading global manufacturer

                REGAGRO2
            </h1>

            {/* Description */}
            <p className="text-white md:text-[16px] text-[14px] leading-[130%] md:leading-[20px] tracking-[-2%] font-normal md:mb-[30px] mb-[20px]  md:max-w-[625px] max-w-[345px]">
              Durable microchips and tags, digital passports, and advanced IT tools—everything you need for effective animal identification and health management in one place.
            </p>

            {/* Primary CTA Button with red dot */}
            <div className="flex items-center gap-3">
              <button className="hover:bg-gradient-to-r hover:from-[#FFE34F] hover:to-[#FFF0A4] bg-[#FFDA18] text-[#355332] md:px-[55px] px-[20px] md:py-[24px] py-[18px] md:w-auto w-full rounded-full md:text-[17px] text-[12px] leading-[120%] tracking-[-2%] font-bold transition-colors cursor-pointer">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        {/* Play Button */}
        <div className="absolute md:bottom-[40px] bottom-[150px] md:right-[110px] z-20 flex gap-4 items-center">
          <div className="flex gap-4 items-center">
            {/* On desktop: text first, then button. On mobile: button first, then text */}
            <div className="md:order-1 order-2 text-white md:text-[17px] text-[12px] font-medium leading-[120%] tracking-[-2%]">
              Learn more about us by <br /> watching a short video
            </div>
            <button 
              className="cursor-pointer md:order-2 order-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image 
                src={isHovered ? "/images/play-hover.png" : "/images/play.png"} 
                alt="Play" 
                width={105} 
                height={105} 
                className="md:w-[105px] md:h-[105px]" 
              />
            </button>
          </div>
        </div>
      </div>


    </section>
  );
}
