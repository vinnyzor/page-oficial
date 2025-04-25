import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import RetroGrid from "../ui/retro-grid";
import { Input } from "../ui/input";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container className="relative z-[999999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                Dicas financeiras que realmente fazem diferença — direto no seu WhatsApp
                                </h4>
                                <p className="text-xs max-w-lg text-muted-foreground">
                                💬 Aprenda a economizar, investir e organizar sua grana sem complicação. Conteúdo prático, rápido e gratuito.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="📩 Digite seu WhatsApp"
                                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                    />
                                    <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                                    Quero Economizar
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                🔒 Ao se inscrever, você concorda com nossa 
                                    <Link href="#">
                                    Política de Privacidade
                                    </Link>
                                    e recebe atualizações sobre gestão financeira.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
        </div>
    )
};

export default CTA
