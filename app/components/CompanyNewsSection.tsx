"use client";

import Container from "@/app/ui/Container";
import {Headtitle} from "@/app/ui/Headtitle";
import {CardNews} from "@/app/ui/CardNews";
import Pagination from './Pagination';
import s from './index.module.css';

// импорт swiper
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination as PaginationSwiper} from "swiper/modules";

// стили swiper
import "swiper/css";
import "swiper/css/pagination";

export default function CompanyNewsSection({sections, setCurrentSection, currentSection}: {sections: string[], setCurrentSection: (section: string) => void, currentSection: string}) {
    return (
        <section className="relative pt-[60px] md:pt-[110px] " id={"company-news"}>
            <div className={"max-w-[920px] lg:max-w-[1320px] md:min-h-[777px] min-h-[90vh] mx-auto pl-4 md:px-8 z-10 relative "}>
                <Pagination sections={sections} onSectionChange={setCurrentSection} currentSection={currentSection} />
                <div className="absolute inset-0 left-[110px] md:left-[0]">
                    <img
                        src="/images/section/section-6.png"
                        alt="About background"
                        className="w-full h-full object-cover hidden md:block"
                    />
                    <img
                        src="/images/section/section-6-mobile.png"
                            alt="About background"
                            className="w-full block md:hidden h-full rounded-[20px] object-cover"
                    />
                </div>

                <div className="z-20 relative pt-[30px] md:pt-[60px]">
                    <Headtitle minTitle={"updates"} title={"Company news"}/>

                    {/* Swiper для мобилы */}
                    <div className="mt-[15px] md:mt-[30px] block md:hidden">
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            modules={[PaginationSwiper]}
                            pagination={{
                                clickable: true,
                            }}
                            className={s.slider}
                            style={{
                                paddingRight:"20px",
                                paddingBottom: "30px", // добавляем место для буллетов
                            }}
                        >
                            <SwiperSlide>
                                <CardNews/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardNews/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardNews/>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Сетка для десктопа */}
                    <div className="hidden md:flex gap-[15px] flex-wrap mt-[30px]">
                        <CardNews/>
                        <CardNews/>
                        <CardNews/>
                    </div>

                    <div className="mt-[10px] md:mt-[30px] pr-[15px] md:pr-0">
                        <button
                            className="hover:bg-gradient-to-r hover:from-[#FFE34F] hover:to-[#FFF0A4] bg-gradient-to-r from-[#FFDA18] to-[#FFE55E] text-[#355332] rounded-full py-[18px] w-full md:w-[auto] text-[12px] md:text-[17px] md:py-[24px] px-[60px] font-bold cursor-pointer">
                            EXPLORE THE LATEST NEWS
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
