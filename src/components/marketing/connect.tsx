import Container from "../global/container";
import Images from "../global/images";
import { Particles } from "../ui/particles";
import SectionBadge from "../ui/section-bade";

const Connect = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <SectionBadge title="IA Que Trabalha Para Você" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                    IA que entende sua rotina financeira – e trabalha por você.
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                    Nosso assistente financeiro com IA conecta você às suas metas, hábitos e desafios. Receba alertas, previsões e conselhos personalizados para transformar sua relação com o dinheiro.
                    </p>
                </div>
            </Container>
            <Container>
                <div className="w-full relative mt-12">
                    <Images.connect className="w-full h-auto" />
                    <Particles
                        className="absolute inset-0"
                        quantity={150}
                        ease={80}
                        color="#e4e4e7"
                        refresh
                    />
                </div>
            </Container>
        </div>
    )
};

export default Connect
