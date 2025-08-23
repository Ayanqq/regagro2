import {Headtitle} from "@/app/ui/Headtitle";
import Container from "@/app/ui/Container";

export default function ContactSection() {
    return (
        <section id="contacts" className={'border-red-500 border-2 pl-[30px] pt-[60px]'}>
            <Container>
                <Headtitle minTitle={'request'} title={'Have any questions? Write to us — we’ll help you out'}/>
                <h1>XUI</h1>
            </Container>
        </section>
    );
}
