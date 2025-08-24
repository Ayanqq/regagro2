import {Headtitle} from "@/app/ui/Headtitle";
import Container from "@/app/ui/Container";

export default function ContactSection() {
    return (
        <section id="contacts" className={'pt-[125px] relative'}>
            <Container className={'relative'}>
                <div className="absolute top-0 left-0 right-[20px] z-10">
                    <img
                        src="/images/section/section-7.png"
                        alt="About background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="z-20 relative pt-[60px]">
                <Headtitle minTitle={'request'} title={'Have any questions? Write to us — we’ll help you out'}/>
                <div className={'flex gap-[115px] mt-[25px]'}>
                    <form className={'w-[615px] flex flex-col gap-[30px]'}>
                        <div className={'flex flex-col gap-[15px]'}>
                            <div className={'flex gap-[15px]'}>
                                <input type={'text'} placeholder={'Your name*'}
                                       className={'max-w-[300px] w-full py-[24px] px-[30px] border-[#4F584E80] border-[0.5px] rounded-full text-[17px] font-normal h-[68px]'}/>
                                <input type={'tel'} placeholder={'Phone number*'}
                                       className={'max-w-[300px] w-full py-[24px] px-[30px] border-[#4F584E80] border-[0.5px] rounded-full text-[17px] font-normal h-[68px]'}/>
                            </div>
                            <textarea placeholder={'Comment / Question'}
                                      className={'h-[150px] p-[30px] border-[#4F584E80] border-[0.5px] w-full resize-none rounded-[24px]'}></textarea>

                            <div className={'flex items-start gap-[8px]'}>
                                <input type={'checkbox'} className="w-[24px] h-[24px] accent-white bg-white"
                                       id={'check'}/>
                                <label htmlFor={'check'} className={'text-[#4F584E] font-normal text-[17px]'}>I have
                                    read the Privacy Policy and agree to the processing
                                    of my personal
                                    data.</label>
                            </div>
                        </div>
                        <button type={'submit'}
                                className={'bg-[linear-gradient(90deg,#FFDA18_0%,#FFE55E_100%)] w-full py-[24px] font-semibold rounded-full'}>SUBMIT
                            A REQUEST
                        </button>
                    </form>

                    <div className={'flex gap-[190px]'}>
                        <nav className={'flex flex-col gap-[15px]'}>
                            <h3 className={'text-[#355332] text-[20px] font-semibold'}>Navigation</h3>
                            <ul className={'flex flex-col gap-[15px] text-[17px]'}>
                                <li>About us</li>
                                <li>Catalog</li>
                                <li>IT Solutions</li>
                                <li>Contacts</li>
                            </ul>
                            <h3 className={'text-[20px] font-semibold mt-[145px] text-[#355332]'}>Copyright</h3>
                        </nav>

                        <nav className={'flex flex-col gap-[15px]'}>
                            <h3 className={'text-[#355332] text-[20px] font-semibold'}>Contacts</h3>
                            <ul className={'flex flex-col gap-[15px] text-[17px]'}>
                                <li>Address</li>
                                <li>Phone</li>
                                <li>Email</li>
                                <li>Social Media</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>
            </Container>
        </section>
    );
}
