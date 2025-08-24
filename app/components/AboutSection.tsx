'use client';

import Image from 'next/image';
import {Headtitle} from "@/app/ui/Headtitle";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white pt-[125px]">
      <div className="max-w-[1320px] mx-auto px-4 h-[777px] relative z-10">
        {/* Background Grass Texture */}
        <div className="absolute top-0 left-0 right-0">
          <img
            src="/images/section/section-2.png"
            alt="About background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative items-center h-full pt-[60px] z-20">
          {/* Left Content */}
          <div >
            <Headtitle minTitle={'about the company'} title={'About RegAgro products and expertise'}/>
            <p className="text-lg text-[#4F584E] mb-8 leading-[120%] mt-[15px]">
            Learn how RegAgro uses the combined power of a transformative IT company in Cyprus <br /> and three modern production facilities in China to drive innovation in animal husbandry. <br /> Start working with the world's AgriTech leader that offers an all-in-one identification <br /> solution for animal owners and a straightforward dealer program.
            </p>

            {/* Features Grid */}
            <div className="flex items-center gap-18 mb-8">
              <div className="text-center flex flex-col items-center">
                  <Image src="/images/about/about-1.png" alt="About" width={154} height={166} />
                <p className="text-sm text-gray-600">The world’s leading manufacturer <br /> of comprehensive animal <br /> identification solutions</p>
              </div>

              <div className="text-center flex flex-col items-center">
                  <Image src="/images/about/about-2.png" alt="About" width={154} height={166} />
                <p className="text-sm text-gray-600">Continuous animal health <br /> monitoring for disease prevention <br /> and timely response</p>
              </div>

              <div className="text-center flex flex-col items-center">
                  <Image src="/images/about/about-3.png" alt="About" width={154} height={166} />
                <p className="text-sm text-gray-600">The synergy of modern <br /> production, IT innovation, <br /> and robust partner support</p>
              </div>
            </div>

            <button className="bg-[#FFDA18] text-[#355332] px-[55px] py-[24px] rounded-full text-lg leading-[120%] font-semibold transition-colors uppercase cursor-pointer">
              Find out more about the company
            </button>
          </div>
        </div>

        <div className="absolute top-[60px] right-[110px] z-20 flex gap-4 items-center">
          <div className="text-white text-[12px] font-medium leading-[120%]">
            Explore the company’s <br /> expertise by watching <br /> the short video
          </div>
          <button className="cursor-pointer">
            <Image src="/images/play.png" alt="Play" width={85} height={85} />
          </button>
        </div>
      </div>
    </section>
  );
}
