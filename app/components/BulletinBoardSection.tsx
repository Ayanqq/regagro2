'use client';

import Container from "@/app/ui/Container";
import {Headtitle} from "@/app/ui/Headtitle";
import {VideoPlayer} from "@/app/ui/VideoPlayer";
import Image from "next/image";

export default function BulletinBoardSection() {
    return (
        <section id="bulletin-board" className="relative pt-[125px]">
            <Container className="relative">
                <div className="absolute top-0 left-0 right-[20px] ">
                    <img
                        src="/images/section/section-4.png"
                        alt="About background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <Headtitle minTitle={'it solutions'} title={'Professional bulletin board'}/>
                <div className={'flex relative'}>
                    <div>
                        <div className={'max-w-[650px] flex flex-col gap-[20px]'}>
                            <p className={'text-[17px] font-normal text-[#4F584E]'}>Verify animals’ breed and
                                registration
                                with their vet cards and digital passports automatically retrieved from local veterinary
                                authority databases. With region-specific RegAgro bulletin boards, buying,
                                crossbreeding,
                                and searching for lost animals are convenient and secure.</p>
                            <VideoPlayer/>
                        </div>
                        <button
                            className="mt-[30px] bg-[linear-gradient(90deg,#FFDA18_0%,#FFE55E_100%)] px-[60px] py-[24px] max-w-[420px] rounded-full font-semibold text-[#355332] cursor-pointer">
                            OPEN THE BULLETIN BOARD
                        </button>
                    </div>
                    <div className={'flex flex-col gap-[120px]'}>
                        <div className={'max-w-[230px] flex flex-col gap-[5px] absolute top-[90px] right-[330px]'}>
                            <h3 className={'text-[#355332] font-semibold text-[20px]'}>Benefit #1</h3>
                            <p className={'text-[#4F584E] text-[12px] font-normal'}>Automatic animal ePassport
                                retrieval from local veterinary authorities</p>
                        </div>
                        <div className={'max-w-[260px] flex flex-col gap-[5px] absolute bottom-[170px] right-[170px]'}>
                            <h3 className={'text-[#355332] font-semibold text-[20px]'}>Benefit #2</h3>
                            <p className={'text-[#4F584E] text-[12px] font-normal'}>Flexible ad settings:</p>
                            <div className={'flex flex-wrap gap-[3px]'}>
                                <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                    <span>purchase</span>
                                </div>
                                <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                    <span>sale</span>
                                </div>
                                <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                    <span>giveaway</span>
                                </div>
                                <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                    <span>found / lost</span>
                                </div>
                                <div className={'px-[14px] py-[6px] bg-[#E8E8E8] rounded-full text-[#4F584E]'}>
                                    <span>mating</span>
                                </div>
                            </div>
                        </div>
                        <div className={'max-w-[230px] flex flex-col gap-[5px] absolute bottom-[10px] right-[330px]'}>
                            <h3 className={'text-[#355332] font-semibold text-[20px]'}>Benefit #3</h3>
                            <p className={'text-[#4F584E] text-[12px] font-normal'}>Integration with a mobile app for
                                animal detection</p>
                        </div>
                    </div>
                    <div className={'absolute right-[450px] top-[160px]'}>
                        <Image src={'/images/bulletinboard/Group 65-min.png'} width={393} height={325}
                               alt={'decoration'}/>
                    </div>
                </div>
            </Container>
        </section>
    );
}
