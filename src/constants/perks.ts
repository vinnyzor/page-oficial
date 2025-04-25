import { Icons } from "@/components";
import { ChartSplineIcon, UserPlus, BellRing, CreditCard, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

export const PERKS = [
    {
        icon: UserPlus,
        title: "Cadastre-se Gratuitamente",
        description: "Comece em segundos. Sem baixar nada, sem burocracia."
    },
    {
        icon: FaWhatsapp,
        title: "Conecte-se pelo WhatsApp",
        description: "Nossa IA conversa com você direto no WhatsApp e entende seu estilo de vida financeiro."
    },
    {
        icon: FileText,
        title: "Registre suas Finanças com Facilidade",
        description: "Mande uma mensagem de texto ou áudio. O assistente cuida do resto."
    },
    {
        icon: ChartSplineIcon,
        title: "Receba Relatórios Automáticos",
        description: "Descubra onde seu dinheiro vai, veja seu saldo e acompanhe previsões semanais."
    },
    {
        icon: BellRing,
        title: "Configure Alertas Inteligentes",
        description: "Receba lembretes antes dos vencimentos. Diga adeus às multas e esquecimentos."
    },
    {
        icon: FiClock,
        title: "Seu Consultor Financeiro 24/7 no WhatsApp",
        description: "Nosso assistente com IA não dorme, não esquece e não te deixa perder prazos."
    },
];