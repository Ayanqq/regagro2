'use client';

import Image from 'next/image';
import {Headtitle} from "@/app/ui/Headtitle";
import Pagination from './Pagination';

export default function ProductsSection({sections, setCurrentSection, currentSection}: {sections: string[], setCurrentSection: (section: string) => void, currentSection: string}) {
    return (
        <section id="catalog" className="relative bg-white pt-[60px] md:pt-[125px]">
            <div className="max-w-[1320px] mx-auto md:h-[777px] h-[663px] relative z-10">
                <Pagination sections={sections} onSectionChange={setCurrentSection} currentSection={currentSection} />
                {/* Background Grass Texture */}
                <div className="absolute inset-0">
                    {/* Desktop Image */}
                    <img
                        src="/images/section/section-3.png"
                        alt="Hero background"
                        className="w-full h-full object-cover rounded-[20px] hidden md:block"
                    />
                    {/* Mobile Image */}
                    <img
                        src="/images/section/mobile/section-3.png"
                        alt="Hero background mobile"
                        className="w-full h-full rounded-[20px] md:hidden"
                    />
                </div>

                <div
                    className="relative flex items-start md:items-center md:flex-row flex-col md:px-7.5 px-[15px] md:pt-[60px] pt-[30px] md:gap-[174px] gap-[20px] z-20">
                    {/* Left Content */}
                    <div>
                        <div className={'max-w-[230px] md:max-w-none'}>
                            <Headtitle minTitle={'catalog'} title={'Products available in your country'}/>
                        </div>
                        <p className="md:text-[17px] text-[14px] text-[#4F584E] md:mb-[18px] mb-[15px] leading-[120%] md:leading-[20px] tracking-[-2%] md:mt-[15px] mt-[10px] md:max-w-[745px] max-w-[345px]">
                            Streamline animal registration with an exhaustive set of tagging tools collected in the
                            one-stop shop. The RegAgro equipment provides free access to advanced, continuously
                            updated IT products, helping animal owners cover the entire identification process —
                            from individual marking to automated data collection and processing.
                        </p>

                        <Image src="/images/book.png" alt="Products" width={734} height={335}
                               className='md:block hidden'/>
                        <Image src="/images/book-mobile.png" alt="Products" width={345} height={260}
                               className='md:hidden block w-full'/>


                        <button
                            className="bg-gradient-to-r from-[#FFDA18] to-[#FFE55E] text-[#355332] md:w-auto w-full px-[53px] md:py-[24px] py-[18px] rounded-full md:text-[17px] md:mt-[30px] mt-[20px] text-[12px] leading-[120%] md:leading-[20px] tracking-[-2%] font-semibold transition-colors uppercase cursor-pointer">
                            View the catalog
                        </button>
                    </div>

                    {/* Right Side - Product Features */}
                    <div className="mt-[110px] md:flex flex-col gap-12 relative hidden">
                        {/* Vertical Line with Dots */}
                        <div
                            className="absolute -left-[22px] -top-[100px] bottom-0 flex flex-col items-center justify-center z-20">
                            <Image src="/images/line.png" alt="Line" width={10} height={394}/>
                        </div>
                        {/* Product Feature 1 */}
                        <div className="flex flex-col items-start">
                            <Image src="/images/products/products-1.png" alt="Products" width={60} height={60}/>
                            <h3 className="text-[20px] font-semibold text-[#355332] mb-1 mt-2.5 leading-[120%] md:leading-[24px] tracking-[-2%]">Wide
                                range of products</h3>
                            <p className="text-[12px] text-gray-600 leading-[120%] md:leading-[14px] tracking-[-2%]">Our catalog features
                                all the necessary solutions <br/> for the accounting and identification of
                                animals, <br/> suitable for farms of any scale.</p>
                        </div>

                        {/* Product Feature 2 */}
                        <div className="flex flex-col items-start leading-[120%]">
                            <Image src="/images/products/products-2.png" alt="Products" width={60} height={60}/>
                            <h3 className="text-[20px] font-semibold text-[#355332] mb-1 mt-2.5 leading-[120%] md:leading-[24px] tracking-[-2%]">Fast
                                delivery</h3>
                            <p className="text-[12px] text-gray-600 leading-[120%] md:leading-[14px] tracking-[-2%]">We understand that
                                agility is vital in farming, <br/> so we ensure same-day handling for
                                our <br/> equipment and supplies.</p>
                        </div>

                        {/* Product Feature 3 */}
                        <div className="flex flex-col items-start leading-[120%]">
                            <Image src="/images/products/products-3.png" alt="Products" width={80} height={80}/>
                            <h3 className="text-[20px] font-semibold text-[#355332] mb-1 mt-[0] leading-[120%] tracking-[-2%]">User-friendly
                                navigation</h3>
                            <p className="text-[12px] text-gray-600 leading-[120%] tracking-[-2%]">he catalog is
                                organized by product categories <br/> and types, making it easy to find and
                                order <br/> goods.</p>
                        </div>
                    </div>


                    <div
                        className="absolute md:top-[60px] top-7.5 md:right-[106px] right-4 z-20 flex gap-4 items-center">
                        <div
                            className="text-[#4F584E] text-[12px] hidden md:block font-normal leading-[120%] tracking-[-2%]">
                            Explore the company’s <br/> expertise by watching <br/> the short video
                        </div>
                        <button className="cursor-pointer">
                            <Image src="/images/play-black.png" alt="Play" width={65} height={65}
                                   className="md:w-[85px] md:h-[85px] hidden md:block"/>
                            <Image src="/images/play.png" alt="Play" width={65} height={65}
                                   className="md:w-[85px] md:h-[85px] block md:hidden"/>
                        </button>
                    </div>


                </div>
            </div>
        </section>
    );
}
