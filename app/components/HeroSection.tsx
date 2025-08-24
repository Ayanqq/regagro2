'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-[125px]">
      {/* Content */}
      <div className="max-w-[1320px] h-[777px] mx-auto px-8 relative z-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/section/section-1.png"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" items-center relative z-20 pt-[218px]">
          {/* Left Content */}
          <div className="text-white items-center">
            <div className={'px-[20px] py-[14px] bg-white/10 backdrop-blur-md border border-white w-fit rounded-full text-[12px] font-medium'}>
              <h3 className={'text-white leading-[100%] tracking-[0%]'}>welcome to regagro</h3>
            </div>
            <h1 className="font-jakarta text-[40px] font-bold mb-5 mt-2.5 leading-[110%] tracking-[-2%]">
              Revolutionize animal identification <br /> with this one-stop platform from <br /> a leading global manufacturer
            </h1>
            <p className="text-white text-[16px] leading-[130%] tracking-[-2%] font-normal mb-7.5">
              Durable microchips and tags, digital passports, and advanced IT tools—everything <br /> you need for effective animal identification and health management in one place.
            </p>
            <button className="bg-gradient-to-r from-[#FFDA18] to-[#FFE55E] text-[#355332] px-[55px] py-[24px] rounded-full text-[17px] leading-[120%] tracking-[-2%] font-semibold hover:bg-[#FFDA18] transition-colors cursor-pointer">
              LEARN MORE
            </button>
          </div>
        </div>
        {/* Play Button */}
        <div className="absolute bottom-[40px] right-[110px] z-20 flex gap-4 items-center">
          <div className="text-white text-[17px] font-medium leading-[120%] tracking-[-2%]">
            Learn more about us by <br /> watching a short video
          </div>
          <button className="cursor-pointer">
            <Image src="/images/play.png" alt="Play" width={105} height={105} />
          </button>
        </div>
      </div>


    </section>
  );
}
