type HeadtitleType = {
    minTitle: string;
    title: string
}


export const Headtitle = ({minTitle, title}: HeadtitleType) => {
    return (
        <div className={'flex flex-col gap-[10px] z-2'}>
            <div
                className={'py-[8px] px-[14px] md:px-[20px] md:py-[14px] bg-[#E8E8E8] w-fit rounded-full text-[10px] md:text-[12px] font-medium'}>
                <h3 className={'text-[#4F584E]'}>{minTitle}</h3>
            </div>
            <h2 className={'text-[24px] md:text-[42px] font-bold text-[#355332] max-w-[790px] font-jakarta leading-[105%] tracking-[-2%]'}>{title}</h2>
        </div>
    );
};
