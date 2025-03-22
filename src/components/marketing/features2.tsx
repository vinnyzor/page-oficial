"use client"

import {Container, Wrapper } from "@/components/";
import { Bolt, Palette, Search, Monitor, ShoppingCart, Server } from "lucide-react";
import  Icons2  from "@/components/global/icons2";

import SectionBadge from "@/components/ui/section-bade";

const features = [
    {
        icon: "📊",
        title: "Monitoramento de Gastos",
        info: "Receba relatórios automáticos e veja para onde seu dinheiro está indo.",
    },
    {
        icon: "💡",
        title: "Insights Inteligentes",
        info: "Dicas personalizadas para economizar e melhorar sua vida financeira.",
    },
    {
        icon: "⏳",
        title: "Lembretes de Pagamento",
        info: "Evite atrasos! Receba alertas de contas e boletos diretamente no WhatsApp.",
    },
    {
        icon: "📑",
        title: "Organização Simples",
        info: "Tenha uma visão clara das suas receitas e despesas sem precisar de planilhas.",
    },
    {
        icon: "🔒",
        title: "Segurança Total",
        info: "Seus dados são protegidos com criptografia e privacidade garantida.",
    },
    {
        icon: "🚀",
        title: "Atendimento 24/7",
        info: "Nosso assistente de IA está sempre disponível para te ajudar a qualquer hora do dia.",
    },
];



export function Features2() {
  return (
     <Wrapper className="flex flex-col items-center justify-center py-12 relative">
     <Container>
         <div className="max-w-md mx-auto text-start md:text-center">
             <SectionBadge title="Features" />
             <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
             Descubra as funcionalidades que vão transformar suas finanças
             </h2>
             <p className="text-muted-foreground mt-6">
             💬 Nosso assistente financeiro com IA no WhatsApp te ajuda a monitorar gastos, organizar contas e planejar suas finanças sem complicação.
             </p>
         </div>
     </Container>
    
     <Container>
         <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
             {features.map((feature) => (
  <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
    <div className="flex items-center justify-center">
    {feature.icon} 
    </div>
    <h3 className="text-lg font-medium mt-4">
      {feature.title}
    </h3>
    <p className="text-muted-foreground mt-2 text-start lg:text-start">
      {feature.info}
    </p>
  </div>
))}

             </div>
         </div>
     </Container>
 </Wrapper>
  );
}
