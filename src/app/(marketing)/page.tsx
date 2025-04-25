import { Background, Companies, Connect, Container, CTA, Hero, Perks, Pricing, Reviews, Wrapper } from "@/components";
import { Features2 } from "@/components/marketing/features2";
import FAQs from "@/components/marketing/faqs";
import  Features  from "@/components/ui/Features";
import { Spotlight } from "@/components/ui/spotlight";



const HomePage = () => {
    return (
        <Background>
            <Wrapper className="py-10 relative">
                <Container className="relative">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="rgba(255, 255, 255, 0.5)"
                    />
                    <Hero />
                </Container>
               
                <Connect />
                
                <Perks />
                <Features />
                <Container className="pb-16">
                    <Companies />
                </Container>
                <Features2/>
                
                <Reviews />
                
                <Pricing />

                           

                
                <FAQs/>
                
                <CTA />
                
            </Wrapper>
        </Background>
    )
};

export default HomePage
