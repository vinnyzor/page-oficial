"use client";

import { Container, Wrapper } from "@/components/";
import { useState } from "react";
import SectionBadge from "@/components/ui/section-bade";
import { Button } from "../ui/button";
import Link from "next/link";

const features = [
  {
    icon: "🧑‍💼",
    title: "Freelancers e Autônomos",
    info: "Separe vida pessoal e profissional com facilidade. Gerencie boletos, receitas e metas em um único lugar.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Famílias e Casais",
    info: "Organize os gastos da casa com clareza. Crie metas em conjunto e tenha previsões personalizadas.",
  },
  {
    icon: "📈",
    title: "Pequenos Empreendedores",
    info: "Controle fluxo de caixa, automatize contas e tenha relatórios separados por área. Mais gestão, menos estresse.",
  },
  {
    icon: "🎓",
    title: "Estudantes e Jovens",
    info: "Aprenda a cuidar do seu dinheiro desde cedo. Acompanhe seus gastos e economize com inteligência.",
  },
  {
    icon: "🧑‍💻",
    title: "Profissionais CLT e Concursados",
    info: "Domine seu salário e evite surpresas no fim do mês. A IA te ajuda a poupar e investir melhor.",
  },
  {
    icon: "👵",
    title: "Aposentados e +60",
    info: "Simplicidade total: organize tudo pelo WhatsApp, receba lembretes e mantenha a tranquilidade financeira.",
  },
];

export function Features2() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <Container>
        <div className="max-w-xl mx-auto text-start md:text-center">
          <SectionBadge title="Para quem é o ZapFinance" />
          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Feito para você.<br/>Seja qual for sua fase financeira.
          </h2>
          <p className="text-muted-foreground pb-9 mt-6">
            O ZapFinance se adapta ao seu estilo de vida e te ajuda a organizar,
            economizar e planejar — tudo direto no WhatsApp.
          </p>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col items-center justify-center py-10 md:py-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start lg:items-start px-0 md:px-0"
              >
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                  {feature.info}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 w-full mx-auto flex flex-col justify-center">
          <p className="text-sm mx-auto text-muted-foreground">Quanto antes você começar, mais rápido seu dinheiro começa a
          trabalhar por você.</p>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsDialogOpen(true);
            }}
            className="w-fit mx-auto mt-4"
            asChild
            size="lg"
          >
            <Link href="">🚀 Comece Agora</Link>
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
}
