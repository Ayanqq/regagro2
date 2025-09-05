'use client';

import Image from 'next/image';
import {Headtitle} from "@/app/ui/Headtitle";
import Pagination from './Pagination';
import { useState } from 'react';

export default function AboutSection({sections, setCurrentSection, currentSection}: {sections: string[], setCurrentSection: (section: string) => void, currentSection: string}) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
    <section id="about" className="relative bg-white pt-[60px] md:pt-[110px]">
      <div className="max-w-[920px] lg:max-w-[1320px] mx-auto md:px-7.5 px-[15px] md:h-[777px] h-[90vh] relative z-10">
        <Pagination sections={sections} onSectionChange={setCurrentSection} currentSection={currentSection} />
        {/* Background Grass Texture */}
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <img
            src="/images/section/section-2.png"
            alt="Hero background"
            className="w-full h-full object-cover rounded-[20px] hidden md:block"
          />
          {/* Mobile Image */}
          <img
            src="/images/section/mobile/Frame%20139.png"
            alt="Hero background mobile"
            className="w-full h-full rounded-[20px] md:hidden object-cover"
          />
        </div>

                <div className="relative items-center h-full md:pt-[60px] pt-[30px] z-20">
                    {/* Left Content */}
                    <div>
                        <div className={'max-w-[240px] md:max-w-[564px]'}>
                            <Headtitle minTitle={'about the company'} title={'About RegAgro products and expertise'}/>
                        </div>
                        <p className="md:text-[17px] text-[14px] text-[#4F584E] mb-[10px] leading-[110%] md:leading-[20px] tracking-[-2%] mt-[15px] md:max-w-[691px] max-w-[300px]">
                            Learn how RegAgro uses the combined power of a transformative IT company in Cyprus and three
                            modern production facilities in China to drive innovation in animal husbandry. Start working
                            with the world's AgriTech leader that offers an all-in-one identification solution for
                            animal owners and a straightforward dealer program.
                        </p>

                        {/* Features Grid */}
                        <div
                            className="flex flex-col md:flex-row md:items-center items-start md:gap-14 gap-2.5 md:mb-7.5 mb-[20px]">
                            <div
                                className="md:text-center text-left flex md:flex-col flex-row md:gap-2 gap-2.5 items-center">
                                <Image src="/images/about/about-1.png" alt="About" width={81} height={75}
                                       className='block md:hidden'/>
                                <Image src="/images/about/about-dec-1.png" alt="About" width={154} height={166}
                                       className='hidden md:block'/>
                                <p className="text-[12px] leading-[120%] md:leading-[14px] tracking-[-2%] text-[#4F584E] md:max-w-[181px] max-w-[213px]">The
                                    world’s leading manufacturer of comprehensive animal identification solutions</p>
                            </div>

                            <div
                                className="md:text-center text-left flex md:flex-col flex-row md:gap-2 gap-2.5 items-center">
                                <Image src="/images/about/about-2.png" alt="About" width={81} height={75}
                                       className='block md:hidden'/>
                                <Image src="/images/about/about-dec-2.png" alt="About" width={154} height={166}
                                       className='hidden md:block'/>
                                <p className="text-[12px] leading-[120%] md:leading-[14px] tracking-[-2%] text-[#4F584E] md:max-w-[181px] max-w-[213px]">Continuous
                                    animal health monitoring for disease prevention and timely response</p>
                            </div>

                            <div
                                className="md:text-center text-left flex md:flex-col flex-row md:gap-2 gap-2.5 items-center">
                                <Image src="/images/about/about-3.png" alt="About" width={81} height={75}
                                       className='block md:hidden'/>
                                <Image src="/images/about/about-dec-3.png" alt="About" width={154} height={166}
                                       className='hidden md:block'/>
                                <p className="text-[12px] leading-[120%] md:leading-[14px] tracking-[-2%] text-[#4F584E] md:max-w-[181px] max-w-[213px]">The
                                    synergy of modern production, IT innovation, and robust partner support</p>
                            </div>
                        </div>

                        <button
                            className="hover:bg-gradient-to-r hover:from-[#FFE34F] hover:to-[#FFF0A4] bg-gradient-to-r from-[#FFDA18] to-[#FFE55E] text-[#355332] md:w-auto w-full px-[53px] md:py-[24px] py-[18px] rounded-full md:text-[17px] text-[12px] leading-[120%] tracking-[-2%] font-bold transition-colors uppercase cursor-pointer">
                            Find out more about the company
                        </button>
                    </div>
                </div>

                <div className="absolute md:top-[60px] top-7.5 md:right-[106px] right-4 z-20 flex gap-4 items-center">
                    <div className="text-white text-[12px] hidden md:block font-normal leading-[120%] md:leading-[14px] tracking-[-2%]">
                        Explore the company’s <br/> expertise by watching <br/> the short video
                    </div>
                    <button 
              className="cursor-pointer md:order-2 order-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image 
                src={isHovered ? "/images/play-hover.png" : "/images/play.png"} 
                alt="Play" 
                width={65} height={65}
                className="md:w-[85px] md:h-[85px]"
              />
            </button>
                </div>
            </div>
        </section>
    );
}
