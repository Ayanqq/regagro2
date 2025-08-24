import Container from "@/app/ui/Container";
import {Headtitle} from "@/app/ui/Headtitle";
import {CardNews} from "@/app/ui/CardNews";

export default function CompanyNewsSection() {
    return (
        <section className="relative pt-[125px]" id={'company-news'}>
            <Container className={'flex flex-col gap-[30px] relative'}>
                <div className="absolute top-0 left-0 right-0px z-10">
                    <img
                        src="/images/section/section-6.png"
                        alt="About background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="z-20 relative pt-[60px]">
                <Headtitle minTitle={'updates'} title={'Company news'}/>
                <div className={'flex flex-col gap-[30px] mt-[30px]'}>
                    <div className={'flex gap-[15px] flex-wrap'}>
                        <CardNews/>
                        <CardNews/>
                        <CardNews/>
                    </div>
                    <div>
                        <button
                            className="bg-gradient-to-r from-[#FFDA18] to-[#FFE55E] text-[#355332] rounded-full py-[24px] px-[60px] font-semibold">
                            EXPLORE THE LATEST NEWS
                        </button>
                    </div>
                </div>
                </div>
            </Container>
        </section>
    );
}
