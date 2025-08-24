import {Headtitle} from "@/app/ui/Headtitle";
import Container from "@/app/ui/Container";
import {VideoPlayer} from "@/app/ui/VideoPlayer";
import Image from "next/image";

export default function MobileAppSection() {
    return (
        <section id="breed" className="relative h-[777px] bg-gray-50 pt-[125px]">
            <Container className={'flex flex-col gap-[30px] relative'}>
                {/*<div className="absolute top-0 left-0 right-0px z-10">*/}
                {/*    <img*/}
                {/*        src="/images/section/section-5.png"*/}
                {/*        alt="About background"*/}
                {/*        className="w-full h-full object-cover"*/}
                {/*    />*/}
                {/*</div>*/}
                <Headtitle minTitle={'it solutions'} title={'Mobile app for pets and livestock'}/>
                <div className={'flex justify-between'}>
                    <div>
                        <div className={'max-w-[650px] flex flex-col gap-[20px]'}>
                            <VideoPlayer/>
                            <p className={'text-[17px] font-normal text-[#4F584E]'}>Gain immediate access to the mobile
                                app
                                upon
                                purchasing a RegAgro tagging tool. The app
                                conveniently stores animals’ data, features a professional listing board, and can
                                integrate
                                vet
                                records and animal history.</p>
                        </div>
                        <button
                            className="mt-[30px] bg-[linear-gradient(90deg,#FFDA18_0%,#FFE55E_100%)] px-[60px] py-[24px] max-w-[420px] rounded-full font-semibold text-[#355332]">LEARN
                            MORE ABOUT THE
                            E-PASSPORT
                        </button>
                    </div>
                    <div className={'max-w-[263px]'}>
                        <Image alt={'iphone'} src={'/images/mobilesection/iphone-min.png'} width={532} height={260}/>
                    </div>
                </div>
            </Container>
        </section>
    );
}
