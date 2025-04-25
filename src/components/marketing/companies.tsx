import Marquee from "../ui/marquee";
import { cn } from "@/functions/cn";

const Companies = () => {
    const responses = [
        { question: "🧾 Gastei demais neste mês?", answer: "Seus gastos subiram 15% em relação ao mês passado. Quer que eu te ajude a ajustar o orçamento?" },
        { question: "💡 Como posso economizar mais dinheiro?", answer: "Baseado nos seus hábitos, sugiro automatizar R$ 300/mês para sua reserva. Posso configurar isso pra você?" },
        { question: "📊 Quais são meus maiores gastos?", answer: "Esse mês: alimentação R$ 1.200, transporte R$ 850, lazer R$ 600. Quer dicas pra reduzir?" },
        { question: "🎯 Quanto preciso guardar pra atingir minha meta?", answer: "Pra sua meta de viagem em dezembro, você precisa guardar R$ 500/mês. Posso ativar uma meta automática?" },
        { question: "🔔 Me lembra do boleto amanhã?", answer: "Alerta ativado! Você vai receber um lembrete amanhã às 8h pelo WhatsApp." },
    ];

    return (
        <div className="flex w-full py-1">
            <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-3xl pb-2 font-bold heading">Respostas Inteligentes, no seu estilo de vida</h2>
                <p className="text-sm text-muted-foreground">Veja como a IA da ZapFinance resolve dúvidas reais do seu dia a dia financeiro. É só perguntar.</p>
                <div className="mt-10 w-full relative overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        <div className="flex gap-6 justify-center">
                            {responses.map((item, index) => (
                                 <figure
                                 key={index} 
                                 className={cn(
                                     "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
                                     "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]",
                                 )}
                             >
                                
                                    <p className="text-sm text-primary pb-2 font-medium">{item.question}</p>
                                    <p className="text-xs text-white opacity-80">{item.answer}</p>
                                    </figure>
                            ))}
                        </div>
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                    <p className="text-md pt-5 text-muted-foreground">Você pergunta como se fosse a um amigo.<br/>A IA responde como um consultor.

</p>
                </div>
            </div>
        </div>
    );
};

export default Companies;
