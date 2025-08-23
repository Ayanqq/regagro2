import Image from "next/image";
import Link from "next/link";

export const CardNews = () => {
    return (
        <div className={'flex flex-col gap-[15px] max-w-[385px]'}>
            <div className={'relative'}>
                <Image src={'/images/news/cow1.jpg'} alt={'cow'} height={200} width={385} className={'rounded-[24px]'}/>
                <div className={'bg-[#43764C] absolute top-[15px] right-[15px] rounded-full font-medium py-[6px] px-[14px] text-white text-[12px]'}>
                    tag name
                </div>
            </div>
            <div className={'flex flex-col gap-[5px]'}>
                <h3 className={'font-semibold text-[#355332] text-[20px]'}>Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum erat. Curabitur
                    fermentum, nisl in facilisis dictum, tellus purus gravida tellus.</p>
            </div>
            <div>
                <Link href={'#'} className={'underline font-semibold text-[#4F584E]'}>Read more</Link>
            </div>
        </div>
    );
};
