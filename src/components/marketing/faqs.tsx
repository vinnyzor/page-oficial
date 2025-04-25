import { Section } from "@/components/core/section/Section";
import { SectionHeader } from "@/components/core/section/SectionHeader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionBadge from "../ui/section-bade";

// Lista de perguntas e respostas do FAQ
const faqData = [
  {
    question: "Como funciona o assistente financeiro?",
    answer:
      "Nosso assistente de IA no WhatsApp analisa seus gastos, envia alertas de pagamento e dá dicas personalizadas para ajudar você a economizar dinheiro e organizar suas finanças.",
  },
  {
    question: "Preciso baixar algum aplicativo?",
    answer:
      "Não! Tudo acontece direto no WhatsApp. Basta iniciar uma conversa com nosso assistente e começar a usar os recursos.",
  },
  {
    question: "O assistente é seguro?",
    answer:
      "Sim! Utilizamos criptografia e seguimos padrões rigorosos de segurança para proteger suas informações financeiras.",
  },
  {
    question: "Quais serviços o assistente oferece?",
    answer:
      "Monitoramento de gastos, lembretes de pagamento, insights financeiros personalizados e integração com bancos e boletos para facilitar sua vida.",
  },
  {
    question: "O serviço é gratuito?",
    answer:
      "Temos um plano gratuito com funcionalidades essenciais. Para recursos avançados, oferecemos um plano premium acessível.",
  },
];

export default function FAQs() {
  return (
    <div className="max-w-4xl mx-auto">
      <Section size="md">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <SectionBadge title="Dúvidas Frequentes" />
          <h2 className="text-2xl md:text-4xl max-w-lg lg:text-5xl font-heading font-medium !leading-snug mt-6">
          Tá com dúvida? A gente resolve aqui.
          </h2>
          <p className="text-sm pb-12 max-w-xl md:text-sm text-center text-accent-foreground/80 mt-6">
          Veja as perguntas mais frequentes e entenda como o nosso assistente pode facilitar sua rotina financeira — sem complicação.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-2 border rounded-lg bg-gradient-to-br from-background to-foreground/10 border-border/20 backdrop-blur-sm"
            >
              <AccordionTrigger className="p-4 text-left text-white text-balance">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-sm font-medium text-zinc-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </div>
  );
}
