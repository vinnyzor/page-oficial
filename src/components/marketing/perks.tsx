"use client";
import { useState } from "react";
import { PERKS } from "@/constants";
import { cn } from "@/functions";
import { LucideIcon } from "lucide-react";
import Container from "../global/container";
import Link from "next/link";
import { Button } from "../ui/button";
import SectionBadge from "../ui/section-bade";
import WhatsappDialog from "@/components/WhatsappDialog";

const Perks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <div
      id="funciona"
      className="flex flex-col items-center justify-center pt-12 md:pt-16 lg:pt-24 w-full"
    >
      {/* Diálogo de WhatsApp */}
      <WhatsappDialog
        planTitle="Plano Gratuito"
        planId="free"
        planType="free"
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Começo Simples" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Como Funciona
          </h2>
          <p className="text-base md:text-lg max-w-lg text-center text-accent-foreground/80 mt-2">
            💡 Automatize suas finanças em poucos passos e tenha total controle
            do seu dinheiro.
          </p>
        </div>
      </Container>
      <Container>
        <div className="mt-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
            {PERKS.map((perk, index) => (
              <Perk key={index} index={index} {...perk} />
            ))}
          </div>
        </div>

        <div className="mt-8 w-full mx-auto flex flex-col justify-center">
          <p className="text-base md:text-md text-center text-accent-foreground/80 mt-6">
            Pronto para transformar sua gestão financeira?
          </p>

          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsDialogOpen(true);
            }}
            className="w-fit mx-auto mt-7"
            asChild
            size="lg"
          >
            <Link href="">🚀 Comece Agora - Grátis!</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

const Perk = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l",
        index < 3 && "lg:border-b"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-[#415c80]/15 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-80 from-[#415c80]/15 to-transparent pointer-events-none" />
      )}
      <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
        <div className="mb-4 relative z-10 px-10">
          <Icon
            strokeWidth={1.3}
            className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-foreground"
          />
        </div>
        <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
          <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-primary transition-all duration-500 origin-center" />
          <span className="group-hover/feature:-translate-y- group-hover/feature:text- transition duration-500 inline-block heading">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Perks;
