import {Headtitle} from "@/app/ui/Headtitle";
import Container from "@/app/ui/Container";
import CustomCheckbox from "@/app/ui/Customcheckbox";
import Pagination from './Pagination';

export default function ContactSection({sections, setCurrentSection, currentSection}: {sections: string[], setCurrentSection: (section: string) => void, currentSection: string}) {
    return (
        <section id="contacts" className={'pt-[60px] md:pt-[110px] relative'}>
            <Container className={'relative'}>
                <Pagination sections={sections} onSectionChange={setCurrentSection} currentSection={currentSection} />
                <div className="absolute top-0 md:left-0 right-0 bottom-[0px] z-10">
                    <img
                        src="/images/section/section-7.png"
                        alt="About background"
                        className="w-full h-full object-cover hidden md:block"
                    />
                    <img
                        src="/images/section/mobile/Frame%20158.png"
                        alt="About background"
                        className="w-full h-full object-cover block md:hidden"
                    />
                </div>
                <div className="z-20 relative pt-[30px] md:pt-[60px]">
                    <Headtitle minTitle={'request'} title={'Have any questions? Write to us — we’ll help you out'}/>
                    <div className={'flex flex-col md:flex md:flex-row gap-[30px] md:gap-[115px] mt-[14px] md:mt-[25px]'}>
                        <form className={'max-w-[615px] flex flex-col gap-[20px] md:gap-[30px]'}>
                            <div className={'flex flex-col gap-[10px] md:gap-[15px]'}>
                                <div className={'flex flex-col md:flex md:flex-row gap-[10px] md:gap-[15px]'}>
                                    <input type={'text'} placeholder={'Your name*'}
                                           className="focus:outline-none focus:border-[#355332] hover:border-[#43764C80] hover:text-[#43764C] md:max-w-[300px] w-full md:py-[24px] md:px-[30px] py-[16.5px] px-[20px] border-[#4F584E80]/50 border-[0.5px] rounded-full text-[14px] md:text-[17px] text-[#4F584E] font-normal h-[50px] md:h-[68px] bg-[#FAFAFA]"/>
                                    <input type={'tel'} placeholder={'Phone number*'}
                                           className={'focus:outline-none focus:border-[#355332] hover:border-[#43764C80] hover:text-[#43764C] md:max-w-[300px] w-full md:py-[24px] md:px-[30px] py-[16.5px] px-[20px] border-[#4F584E80]/50 border-[0.5px] rounded-full text-[14px] md:text-[17px] text-[#4F584E] font-normal h-[50px] md:h-[68px] bg-[#FAFAFA]'}/>
                                </div>
                                <textarea placeholder={'Comment / Question'}
                                          className={'focus:outline-none focus:border-[#355332] hover:border-[#43764C80]  hover:placeholder-[#43764C80] h-[80px] md:h-[150px] py-[18px] px-[20px] md:p-[30px] border-[#4F584E80]/50 border-[0.5px] md:w-full text-[12px] md:text-[17px] resize-none rounded-[24px] text-[#4F584E]'}></textarea>

                                <div className="flex items-start gap-[8px]">
                                    <CustomCheckbox/>
                                </div>

                            </div>
                            <button type={'submit'}
                                    className={'hover:bg-gradient-to-r hover:from-[#FFE34F] hover:to-[#FFF0A4] bg-[linear-gradient(90deg,#FFDA18_0%,#FFE55E_100%)] md:w-full py-[18px] md:py-[24px] text-[12px] md:text-[17px] font-bold rounded-full cursor-pointer text-[#355332]'}>SUBMIT
                                A REQUEST
                            </button>
                        </form>

                        <div className={'flex md:gap-[190px] gap-[90px]'}>
                            <nav className={'flex flex-col gap-[5px] md:gap-[15px]'}>
                                <h3 className={'text-[#355332] text-[16px] md:text-[20px] font-semibold'}>
                                    Navigation
                                </h3>
                                <ul className={'flex flex-col gap-[5px] md:gap-[15px] text-[14px] md:text-[17px] text-[#4F584E]'}>
                                    <li className="hover:text-[#43764C] transition-colors cursor-pointer">About us</li>
                                    <li className="hover:text-[#43764C] transition-colors cursor-pointer">Catalog</li>
                                    <li className="hover:text-[#43764C] transition-colors cursor-pointer">IT Solutions</li>
                                    <li className="hover:text-[#43764C] transition-colors cursor-pointer">Contacts</li>
                                </ul>
                                <h3 className={'text-[16px] md:text-[20px] font-semibold md:mt-[145px] md:mb[0] mt-[0] mb-[24px] text-[#355332]'}>
                                    Copyright
                                </h3>
                            </nav>

                            <nav className={'flex flex-col gap-[5px] md:gap-[15px]'}>
                                <h3 className={'text-[#355332] text-[16px] md:text-[20px] font-semibold'}>
                                    Contacts
                                </h3>
                                <ul className={'flex flex-col gap-[5px] md:gap-[15px] text-[14px] md:text-[17px] text-[#4F584E]'}>
                                    <li className="hover:text-[#43764C] transition-colors cursor-pointer">Address</li>
                                    <li className="hover:text-[#43764C] transition-colors cursor-pointer">Phone</li>
                                    <li className="hover:text-[#43764C] transition-colors cursor-pointer">Email</li>
                                    <li className="hover:text-[#43764C] transition-colors cursor-pointer">Social Media</li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
