import {Headtitle} from "@/app/ui/Headtitle";
import Container from "@/app/ui/Container";
import {VideoPlayer} from "@/app/ui/VideoPlayer";
import Pagination from './Pagination';

export default function MobileAppSection({sections, setCurrentSection, currentSection}: {sections: string[], setCurrentSection: (section: string) => void, currentSection: string}) {
    return (
        <section id="breed" className="relative pt-[60px] md:pt-[125px]">
            <Container className={'flex flex-col gap-[30px] relative'}>
                <Pagination sections={sections} onSectionChange={setCurrentSection} currentSection={currentSection} />
            <div className="absolute inset-0">
                {/* Desktop Image */}
                <img
                  src="/images/section/section-5.png"
                  alt="Hero background"
                  className="w-full h-full object-cover rounded-[20px] hidden md:block"
                />
                {/* Mobile Image */}
                <img
                  src="/images/section/mobile/section-5.png"
                  alt="Hero background mobile"
                  className="w-full h-full rounded-[20px] md:hidden"
                />
                </div>
                <div className="z-20 relative md:pt-[60px] pt-[30px]">
                    <div className={'w-[246px] md:w-auto'}>
                        <Headtitle minTitle={'it solutions'} title={'Mobile app for pets and livestock'}/>
                    </div>
                    <div className={'flex justify-between md:mt-[30px] mt-[10px]'}>
                        <div>
                            <div className={'max-w-[650px] flex flex-col gap-[20px]'}>
                                <div className={'md:block hidden'}><VideoPlayer text={'watch the short video to find out the epassport features and opportunities'}/></div>
                                <p className={'md:text-[17px] text-[14px] font-normal text-[#4F584E] leading-[120%]'}>Gain
                                    immediate access to the mobile
                                    app
                                    upon
                                    purchasing a RegAgro tagging tool. The app
                                    conveniently stores animals’ data, features a professional listing board, and can
                                    integrate
                                    vet
                                    records and animal history.</p>
                            </div>
                            <div className={'md:hidden block mt-[15px]'}><VideoPlayer text={'watch the short video to find out the epassport features and opportunities'}/></div>
                            <button
                                className="md:text-[17px] text-[12px] cursor-pointer mt-[30px] bg-[linear-gradient(90deg,#FFDA18_0%,#FFE55E_100%)] md:px-[60px] md:py-[24px] py-[18px] w-fit rounded-full md:font-bold md:w-auto w-full font-bold text-[#355332]">LEARN
                                MORE ABOUT THE
                                E-PASSPORT
                            </button>
                            <button
                                className="md:hidden block md:text-[17px] text-[12px] cursor-pointer mt-[8px] bg-[linear-gradient(90deg,#FFDA18_0%,#FFE55E_100%)] md:px-[60px] md:py-[24px] py-[18px] max-w-[420px] rounded-full md:w-auto w-full md:font-semibold font-bold text-[#355332]">DOWNLOAD
                                THE APP
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
