type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Free",
        desc: "Comece com ferramentas essenciais para organizar suas finanças de forma simples.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Comece Grátis",
        features: [
            "Registro de até 10 transações por mês",
            "Relatórios básicos no WhatsApp",
            "1 meta financeira ativa",
            "Limite de gastos em até 3 categorias",
            "Sugestões personalizadas para economizar",
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "individual",
        title: "Individual",
        desc: "Gerencie seus gastos com inteligência e tenha um planejamento financeiro eficaz.",
        monthlyPrice: 17.90,
        yearlyPrice: 179.90,
        badge: "Mais Popular",
        buttonText: "Assinar Plano individual",
        features: [
            "Tudo do Plano Free +",
            "1 número de WhatsApp vinculado",
            "Transações ilimitadas",
            "Cadastro de despesas e receitas via texto ou áudio",
            "Metas financeiras avançadas (várias metas simultâneas)",
            "Alertas de vencimento de contas",
            "Sugestões personalizadas para economizar",
            "Histórico completo de transações",
            "Relatórios com gráficos no WhatsApp"
        ],
        link: "https://stripe.com/personal-plan-link"
    },
    {
        id: "duo",
        title: "Duo",
        desc: "Perfeito para casais ou familiares que desejam gerenciar suas finanças de forma conjunta.",
        monthlyPrice: 29.90,
        yearlyPrice: 299.90,
        badge: "Para Negócios",
        buttonText: "Assinar Plano Duo",
        features: [
            "Tudo do Plano Pessoal +",
            "2 números de WhatsApp vinculados",
            "Compartilhamento de finanças entre os dois números",
            "Dicas financeiras individuais ou conjuntas",
            "Transações ilimitadas",
            "Cadastro de despesas e receitas via texto ou áudio",
            "Metas financeiras avançadas (várias metas simultâneas)",
            "Dicas financeiras inteligentes da IA",
            "Alertas de vencimento de contas",
            "Sugestões personalizadas para economizar",
            "Histórico completo de transações",
            "Relatórios com gráficos no WhatsApp"
        ],
        link: "https://stripe.com/professional-plan-link"
    },
    {
        id: "profissional",
        title: "Profissional",
        desc: "Ideal para freelancers e pequenos negócios que precisam de insights financeiros detalhados.",
        monthlyPrice: 39.90,
        yearlyPrice: 399.90,
        badge: "Plano Completo",
        buttonText: "Assinar Plano Profissional",
        features: [
            "Tudo do Plano Pessoal +",
            "1 número de WhatsApp vinculado",
            "Criação de múltiplas contas (exemplo: Pessoal + Profissional)",
            "Relatórios personalizados para empresa e uso pessoal",
            "Transações ilimitadas",
            "Cadastro de despesas e receitas via texto ou áudio",
            "Metas financeiras avançadas (várias metas simultâneas)",
            "Alertas de vencimento de contas",
             "Sugestões personalizadas para economizar",
              "Histórico completo de transações",
               "Relatórios com gráficos no WhatsApp"
        ],
        link: "https://stripe.com/business-plan-link"
    }
];
