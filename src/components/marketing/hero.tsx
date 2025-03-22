"use client";
import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../global/container";
import { ContainerScroll } from "../ui/container-scroll-animation";
import WhatsappDialog from "@/components/WhatsappDialog";

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center text-center w-full max-w-5xl my-24 mx-auto z-40 relative">
      <Container delay={0.0}>
        <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#cdfcfc] via-white to-[#d1fcf5] bg-[200%_auto] bg-clip-text text-sm text-transparent">
            Inteligência Financeira ao Seu Alcance
            <span className="text-xs text-primary px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
              Vamos Lá!
              <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-primary" />
            </span>
          </span>
        </div>
      </Container>
      <BlurText
        word={"Seu Controle Financeiro, Automatizado e Inteligente."}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium racking-[-0.0125em] mt-6 font-heading"
      />
      <Container delay={0.1}>
        <p className="text-sm sm:text-base lg:text-lg mt-4 text-accent-foreground/60 max-w-2xl mx-auto">
          Gerencie suas finanças de forma simples, eficiente e 100% pelo
          WhatsApp.{" "}
          <span className="hidden sm:inline">
            Chega de planilhas e esquecimentos.
          </span>
        </p>
      </Container>
      <Container delay={0.2}>
        <div className="flex items-center justify-center md:gap-x-6 mt-8">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsDialogOpen(true);
            }}
            asChild
            size="lg"
          >
            <Link href="/app">🚀 Teste Grátis Agora</Link>
          </Button>
        </div>
      </Container>
      <Container delay={0.3}>
        <div className="relative mx-auto max-w-7xl  ">
          <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

          <ContainerScroll titleComponent={<></>}>
            <div className="rounded-xl fade-mask md:p-4 mt-12 lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50">
              <div className="fade-mask rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
                <Image
                  src={`/images/dashboard.png`}
                  alt="hero"
                  height={720}
                  width={1400}
                  className="mx-auto rounded-2xl object-cover h-full object-left-top"
                  draggable={false}
                />
              </div>
            </div>
          </ContainerScroll>
        </div>

        {/* Diálogo de WhatsApp */}
        <WhatsappDialog
          planTitle="Plano Gratuito"
          planId="free"
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </Container>
    </div>
  );
};

export default Hero;
