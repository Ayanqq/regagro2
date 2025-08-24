"use client";

import Container from "@/app/ui/Container";
import {Headtitle} from "@/app/ui/Headtitle";
import {CardNews} from "@/app/ui/CardNews";

// импорт swiper
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

// стили swiper
import "swiper/css";
import "swiper/css/pagination";

export default function CompanyNewsSection() {
    return (
        <section className="relative pt-[125px] " id={"company-news"}>
            <Container className={"flex flex-col gap-[30px] relative"}>
                <div className="absolute top-0 left-0 right-0 z-10">
                    <img
                        src="/images/section/section-6.png"
                        alt="About background"
                        className="w-full h-full object-cover hidden md:block"
                    />
                    <img
                        src="/images/section/section-6-mobile.png"
                        alt="About background"
                        className="w-full object-cover block md:hidden h-[663px]"
                    />
                </div>

                <div className="z-20 relative pt-[30px] md:pt-[60px]">
                    <Headtitle minTitle={"updates"} title={"Company news"}/>

                    {/* Swiper для мобилы */}
                    <div className="mt-[15px] md:mt-[30px] block md:hidden">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            centeredSlides={true}
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                            }}
                            style={{
                                paddingRight: "20px",
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

                    <div className="mt-[20px] md:mt-[30px]">
                        <button
                            className="bg-gradient-to-r from-[#FFDA18] to-[#FFE55E] text-[#355332] rounded-full py-[18px] w-full md:w-[auto] text-[12px] md:text-[17px] md:py-[24px] px-[60px] font-semibold cursor-pointer">
                            EXPLORE THE LATEST NEWS
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
