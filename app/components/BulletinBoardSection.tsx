'use client';

import Container from "@/app/ui/Container";
import {Headtitle} from "@/app/ui/Headtitle";
import {VideoPlayer} from "@/app/ui/VideoPlayer";
import Image from "next/image";
import Pagination from './Pagination';

export default function BulletinBoardSection({sections, setCurrentSection, currentSection}: {
    sections: string[],
    setCurrentSection: (section: string) => void,
    currentSection: string
}) {
    return (
        <section id="bulletin-board" className="relative pt-[60px] md:pt-[110px]">
            <Container className="relative">
                <Pagination sections={sections} onSectionChange={setCurrentSection} currentSection={currentSection}/>
                <div className="absolute inset-0">
                    {/* Desktop Image */}
                    <img
                        src="/images/section/section-4.png"
                        alt="Hero background"
                        className="w-full h-full object-cover rounded-[20px] hidden md:block"
                    />
                    {/* Mobile Image */}
                    <img
                        src="/images/section/mobile/section-4.png"
                        alt="Hero background mobile"
                        className="w-full h-full rounded-[20px] md:hidden"
                    />
                </div>
                <div className="z-20 relative md:pt-[60px] pt-[30px]">
                    <Headtitle minTitle={'it solutions'} title={'Professional bulletin board'}/>
                    <div className={'flex md:flex-row flex-col relative'}>
                        <div>
                            <div className={'w-full md:w-[650px] flex flex-col md:gap-[10px] gap-[15px]'}>
                                <p className={'md:text-[17px] text-[14px] font-normal text-[#4F584E] leading-[120%] mt-[15px] md:max-w-[609px] max-w-[345px]'}>Verify
                                    animals’ breed and
                                    registration
                                    with their vet cards and digital passports automatically retrieved from local
                                    veterinary
                                    authority databases. With region-specific RegAgro bulletin boards, buying,
                                    crossbreeding,
                                    and searching for lost animals are convenient and secure.</p>
                                <VideoPlayer text={'watch the short video to learn more about the platform'}/>
                            </div>
                            <button
                                className="hover:bg-gradient-to-r hover:from-[#FFE34F] hover:to-[#FFF0A4] md:block hidden md:text-[17px] text-[14px] md:mt-[20px] mt-[20px] bg-[linear-gradient(90deg,#FFDA18_0%,#FFE55E_100%)] md:px-[60px] md:py-[24px] py-[18px] md:w-auto w-full max-w-[420px] rounded-full font-semibold text-[#355332] cursor-pointer leading-[120%] tracking-[-2%]">
                                OPEN THE BULLETIN BOARD
                            </button>
                        </div>
                        <div className={' flex-col gap-[120px] md:block hidden'}>
                            <div className={'max-w-[230px] flex flex-col absolute top-[70px] right-[280px]'}>
                                <h3 className={'text-[#355332] font-semibold text-[20px]'}>Benefit #1</h3>
                                <p className={'text-[#4F584E] text-[12px] font-normal leading-[120%]'}>Automatic animal
                                    ePassport
                                    retrieval from local veterinary authorities</p>
                            </div>
                            <div className={'max-w-[260px] flex flex-col absolute bottom-[200px] right-[120px]'}>
                                <h3 className={'text-[#355332] font-semibold text-[20px]'}>Benefit #2</h3>
                                <p className={'text-[#4F584E] text-[12px] font-normal'}>Flexible ad settings:</p>
                                <div className={'flex flex-wrap gap-[3px] mt-[5px]'}>
                                    <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                        <span className={'text-[12px]'}>purchase</span>
                                    </div>
                                    <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                        <span className={'text-[12px]'}>sale</span>
                                    </div>
                                    <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                        <span className={'text-[12px]'}>giveaway</span>
                                    </div>
                                    <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                        <span className={'text-[12px]'}>found / lost</span>
                                    </div>
                                    <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                        <span className={'text-[12px]'}>mating</span>
                                    </div>
                                </div>
                            </div>
                            <div className={'max-w-[230px] flex flex-col  absolute bottom-[40px] right-[280px]'}>
                                <h3 className={'text-[#355332] font-semibold text-[20px]'}>Benefit #3</h3>
                                <p className={'text-[#4F584E] text-[12px] font-normal leading-[120%]'}>Integration with
                                    a mobile app for
                                    animal detection</p>
                            </div>
                        </div>
                        <div className={'md:hidden block mt-[15px]'}>
                            <div className={'flex flex-col gap-[7px]'}>
                                <div className={'flex flex-row gap-[8px]'}>
                                    <Image alt={'bulletinboard'} src="/images/bulletinboard/bullet-1.png" width={28}
                                           height={28} className="size-[28px]"/>
                                    <p className={'text-[#4F584E] text-[14px] font-normal leading-[120%]'}>
                                        01. Automatic animal ePassport retrieval from local veterinary authorities</p>
                                </div>
                                <div className={'flex flex-row gap-[8px]'}>
                                    <Image alt={'bulletinboard'} src="/images/bulletinboard/bullet-2.png" width={28}
                                           height={28} className="size-[28px]"/>
                                    <p className={'text-[#4F584E] text-[14px] font-normal leading-[120%]'}>
                                        02. Integration with a mobile app for animal detection</p>
                                </div>
                                <div className={'flex flex-row gap-[8px]'}>
                                    <Image alt={'bulletinboard'} src="/images/bulletinboard/bullet-3.png" width={28}
                                           height={28} className="size-[28px]"/>
                                    <p className={'text-[#4F584E] text-[14px] font-normal leading-[120%] max-w-[314px] md:max-w-none'}>
                                        03. Flexible ad settings: purchase, sale, giveaway, found / lost, mating</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="md:hidden block md:text-[17px] text-[14px] md:mt-[30px] mt-[20px] bg-[linear-gradient(90deg,#FFDA18_0%,#FFE55E_100%)] md:px-[60px] md:py-[24px] py-[18px] md:w-auto w-full max-w-[420px] rounded-full font-bold text-[#355332] cursor-pointer leading-[120%] tracking-[-2%]">
                            OPEN THE BULLETIN BOARD
                        </button>
                        <div className={'absolute right-[400px] top-[130px]'}>
                            <Image src={'/images/bulletinboard/Group 65-min.png'} width={393} height={325}
                                   alt={'decoration'}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
