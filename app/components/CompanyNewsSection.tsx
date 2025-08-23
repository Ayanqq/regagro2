import Container from "@/app/ui/Container";
import {Headtitle} from "@/app/ui/Headtitle";
import {CardNews} from "@/app/ui/CardNews";

export default function CompanyNewsSection() {
    return (
        <section className="relative h-[777px] bg-white">
            <Container className={'flex flex-col gap-[30px]'}>
                <Headtitle minTitle={'updates'} title={'Company news'}/>
                <div className={'flex flex-col gap-[30px]'}>
                    <div className={'flex justify-between flex-wrap'}>
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
            </Container>
        </section>
    );
}
