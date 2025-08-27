
import Image from 'next/image';
import {useEffect, useState} from 'react';

export default function Header() {
    const [activeHash, setActiveHash] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navItems = [
        {href: "#about", label: "About the Company"},
        {href: "#catalog", label: "Catalog"},
        {href: "#bulletin-board", label: "Bulletin Board"},
        {href: "#company-news", label: "News"},
        {href: "#contacts", label: "Contacts"},
    ];

    const contactItems = [
        {href: "#1", label: "Address"},
        {href: "#2", label: "Phone"},
        {href: "#3", label: "Email"},
    ];

    useEffect(() => {
        const sections = navItems.map((item) =>
            document.querySelector(item.href)
        ) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const newHash = `#${entry.target.id}`;
                        setActiveHash(newHash);
                        history.replaceState(null, "", newHash);
                    }
                });
            },
            {threshold: 0.5}
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false); // закрываем меню
        document.querySelector(href)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <header className="fixed top-0 md:top-[15px] left-0 right-0 z-50">
            {/* Desktop header */}
            <div className="hidden md:block max-w-[920px] lg:max-w-[1320px] mx-auto bg-white/95 backdrop-blur-sm rounded-full">
                <div className="px-7.5">
                    <div className="flex items-center justify-between h-[92px]">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <a href={'#hero'}>
                            <Image src="/images/logo.png" alt="Logo" width={218} height={63}/>
                            </a>
                        </div>

                        {/* Navigation */}
                        <nav className="flex items-center gap-[40px]">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`transition-colors font-medium text-[17px] leading-[120%] tracking-[-2%] ${
                                        activeHash === item.href
                                            ? "text-[#2F3F2D] font-bold underline decoration-dotted underline-offset-[6px]"
                                            : "text-gray-600 hover:text-[#43764C]"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>


                        {/* Button */}
                        <button
                            className="bg-[#2F3F2D] hover:bg-[#43764C] text-white px-12.5 py-4.5 rounded-full leading-[120%] tracking-[-2%] font-normal transition-colors cursor-pointer">
                            Request a call
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile header */}
            <div className="relative md:hidden bg-white shadow-sm">
                <div className="flex h-[56px] justify-between items-center px-4">
                    {/* Burger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-[32px] h-[32px] bg-[#2F3F2D] flex justify-center items-center rounded-full"
                    >
                        <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1.50293 1H16.484" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1.50293 5.99371H13.1549" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1.48193 10.9665H14.7985" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>


                    {/* Logo */}
                    <div>
                        <Image src="/images/logo.png" alt="Logo" width={120} height={35}/>
                    </div>

                    {/* Phone icon */}
                    <div className="w-[32px] h-[32px] bg-[#2F3F2D] flex justify-center items-center rounded-full">
                        <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.0982 1C5.41033 1 5.6979 1.16927 5.84942 1.44216L6.90036 3.33527C7.03796 3.58314 7.04444 3.88295 6.91763 4.13654L5.90518 6.16149C5.90518 6.16149 6.19858 7.66994 7.42652 8.89788C8.65445 10.1258 10.1579 10.4141 10.1579 10.4141L12.1825 9.40187C12.4362 9.27497 12.7363 9.28154 12.9842 9.4194L14.8827 10.4749C15.1553 10.6265 15.3244 10.9139 15.3244 11.2258V13.4053C15.3244 14.5153 14.2934 15.3169 13.2418 14.962C11.0818 14.2332 7.72904 12.8456 5.60395 10.7204C3.47882 8.59536 2.09117 5.24255 1.36236 3.08263C1.00751 2.03096 1.80916 1 2.91907 1H5.0982Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                    <div
                        className={`fixed inset-0 bg-header-mobile bg-[#FAFAFA] z-40 transition-transform duration-300 ease-in-out ${
                            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                        }`}
                    >
                        <nav className="flex flex-col py-[30px] px-[15px] h-full gap-[20px] bg-black/10">
                            <div className={'flex justify-between h-[47px]'}>
                                <div>
                                    <Image src="/images/logo.png" alt="Logo" width={120} height={35}/>
                                </div>

                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-[32px] h-[32px] bg-[#2F3F2D] flex justify-center items-center rounded-full"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 8L15 15M8 8L1 1M8 8L1 15M8 8L15 1" stroke="white" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>

                            <div className={'flex flex-col gap-[30px]'}>

                                <div className={'flex flex-col gap-[10px]'}>
                                    <span
                                        className={'font-bold text-[16px] text-[#355332] font-jakarta'}>Navigation</span>
                                    <div className="w-full h-px bg-[#4F584E]/50"/>
                                    {navItems.map((item) => (
                                        <button
                                            key={item.href}
                                            onClick={() => handleNavClick(item.href)}
                                            className={`text-left text-[16px] font-normal ${
                                                activeHash === item.href
                                                    ? "text-[#2F3F2D] font-bold underline decoration-dotted underline-offset-[4px]"
                                                    : "text-gray-700 hover:text-[#4F584E]"
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>

                                {/*<div className={'flex flex-col gap-[10px]'}>*/}
                                {/*    <span*/}
                                {/*        className={'font-bold text-[16px] text-[#355332] font-jakarta'}>Contacts</span>*/}
                                {/*    <div className="w-full h-px bg-[#4F584E]/50"/>*/}
                                {/*    {contactItems.map((item) => (*/}
                                {/*        <button*/}
                                {/*            key={item.href}*/}
                                {/*            onClick={() => handleNavClick(item.href)}*/}
                                {/*            className={`text-left text-[16px] font-normal ${*/}
                                {/*                activeHash === item.href*/}
                                {/*                    ? "text-[#2F3F2D] font-bold underline decoration-dotted underline-offset-[4px]"*/}
                                {/*                    : "text-gray-700 hover:text-[#4F584E]"*/}
                                {/*            }`}*/}
                                {/*        >*/}
                                {/*            {item.label}*/}
                                {/*        </button>*/}
                                {/*    ))}*/}
                                {/*</div>*/}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
