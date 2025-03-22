import Marquee from "../ui/marquee";
import { cn } from "@/functions/cn";

const Companies = () => {
    const responses = [
        { question: "📌 Como posso economizar mais dinheiro?", answer: "Crie um orçamento, acompanhe suas despesas e automatize suas economias para evitar gastos desnecessários." },
        { question: "📊 Quais são meus maiores gastos este mês?", answer: "Seus principais gastos foram com alimentação (R$ 1.200), transporte (R$ 850) e lazer (R$ 600)." },
        { question: "💰 Quanto preciso guardar para minha meta de viagem?", answer: "Com base no seu histórico de gastos, recomendo guardar R$ 500/mês para atingir sua meta em 6 meses." },
        { question: "⚡ Como evitar esquecer de pagar boletos?", answer: "Ative os alertas inteligentes e configure pagamentos automáticos via WhatsApp para não perder prazos." },
        { question: "📈 Qual minha previsão de saldo no fim do mês?", answer: "Se continuar gastando na mesma média, seu saldo estimado será de R$ 2.300 até o fim do mês." },
        { question: "🛒 Gastei demais neste mês?", answer: "Seu gasto aumentou 15% em relação ao mês passado. Posso sugerir ajustes no seu orçamento?" },
    ];

    return (
        <div className="flex w-full py-1">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">Respostas Inteligentes da IA</h2>
                <p className="text-sm text-muted-foreground">Veja como nossa IA pode te ajudar no dia a dia financeiro.</p>
                <div className="mt-10 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        <div className="flex gap-6 justify-center">
                            {responses.map((item, index) => (
                                 <figure
                                 key={index} 
                                 className={cn(
                                     "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                                     "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                 )}
                             >
                                
                                    <p className="text-sm text-primary font-medium">{item.question}</p>
                                    <p className="text-xs text-white opacity-80">{item.answer}</p>
                                    </figure>
                            ))}
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
