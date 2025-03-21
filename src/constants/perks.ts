import { Icons } from "@/components";
import { ChartSplineIcon, UserPlus, MessageCircle, ClipboardList, BellRing, CreditCard } from "lucide-react";
import React from "react";

export const PERKS = [
    {
        icon: UserPlus,
        title: "Cadastre-se Gratuitamente",
        description: "Comece em segundos sem precisar baixar nenhum aplicativo."
    },
    {
        icon: MessageCircle,
        title: "Conecte-se pelo WhatsApp",
        description: "Nosso assistente financeiro interage diretamente com você, sem complicação."
    },
    {
        icon: ClipboardList,
        title: "Registre suas Finanças com Facilidade",
        description: "Envie mensagens de texto ou áudio para adicionar receitas e despesas."
    },
    {
        icon: ChartSplineIcon,
        title: "Receba Relatórios Automáticos",
        description: "Acompanhe seu saldo, previsões de gastos e insights personalizados."
    },
    {
        icon: BellRing,
        title: "Configure Alertas Inteligentes",
        description: "Nunca mais perca um vencimento! Receba lembretes de contas e gastos."
    },
    {
        icon: CreditCard,
        title: "Automação e Pagamentos (Plano Profissional e Empresarial)",
        description: "Realize pagamentos de boletos e Pix diretamente pelo WhatsApp."
    },
];