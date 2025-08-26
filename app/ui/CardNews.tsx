import Image from "next/image";
import Link from "next/link";

export const CardNews = () => {
    return (
        <div className={'flex flex-col mb-[5px] mr-[10px] gap-[15px] bg-[#FAFAFA] md:bg-transparent max-w-[370px] md:max-w-[385px] px-[20px] pb-[40px] pt-[20px] md:px-[0] md:pb-[0] md:pt-[0] rounded-[18px] relative md:static'}>
            <div className={'relative'}>
                <Image src={'/images/news/cow1.jpg'} alt={'cow'} height={200} width={385} className={'rounded-[24px] h-[200px]'}/>
                <div className={'bg-[#43764C] absolute top-[15px] right-[15px] rounded-full font-medium py-[6px] px-[14px] text-white text-[12px] hidden md:block'}>
                    tag name
                </div>
            </div>
            <div className={'flex flex-col gap-[5px]'}>
                <h3 className={'font-semibold text-[#355332] text-[18px] md:text-[20px] tracking-[-2%]'}>Title</h3>
                <div className={'bg-[#43764C] rounded-full font-medium py-[6px] px-[14px] text-white text-[10px] md:text-[12px] block md:hidden w-fit '}>
                    tag name
                </div>
                <p className={'text-[#4F584E] font-normal leading-[120%] text-[14px] md:text-[17px] mt-[10px] md:mt-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum erat. Curabitur
                    fermentum, nisl in facilisis dictum, tellus purus gravida tellus.</p>
            </div>
            <div>
                <Link href={'#'} className={'underline underline-offset-4 font-semibold text-[#4F584E] text-[14px] md:text-[17px]'}>Read more</Link>
            </div>
                <Image src={'/images/section/section-6-card.png'} alt={'cow'} height={133} width={133} className={'absolute bottom-[0] right-[0] block md:hidden'}/>
        </div>
    );
};
