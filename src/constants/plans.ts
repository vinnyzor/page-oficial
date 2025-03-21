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
            "Registro de até 30 transações/mês",
            "Relatórios básicos no WhatsApp",
            "Metas financeiras (1 ativa)",
            "Limite de gastos por categoria (até 3 categorias)",
            "Alertas de vencimento de contas",
            "Cadastro de despesas via texto ou áudio"
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "pro",
        title: "Pessoal",
        desc: "Gerencie seus gastos com inteligência e tenha um planejamento financeiro eficaz.",
        monthlyPrice: 14.90,
        yearlyPrice: 149.90,
        badge: "Mais Popular",
        buttonText: "Assinar Plano Pessoal",
        features: [
            "Tudo do Plano Free",
            "Transações ilimitadas",
            "Gráficos financeiros detalhados",
            "Metas financeiras avançadas (múltiplas metas)",
            "Sugestões de economia personalizadas",
            "Histórico completo de transações",
            "Relatórios automáticos semanais/mensais (WhatsApp + PDF)",
            "Cadastro de despesas e receitas por voz"
        ],
        link: "https://stripe.com/personal-plan-link"
    },
    {
        id: "enterprise",
        title: "Profissional",
        desc: "Ideal para freelancers e pequenos negócios que precisam de insights financeiros detalhados.",
        monthlyPrice: 29.90,
        yearlyPrice: 299.90,
        badge: "Para Negócios",
        buttonText: "Assinar Plano Profissional",
        features: [
            "Tudo do Plano Pessoal",
            "Detecção de gastos anormais e fraudes",
            "Integração com extratos bancários via OCR (PDF ou print)",
            "Personalização completa de categorias de gastos",
            "Assistente de IA avançado (tom descontraído ou profissional)",
            "Criação de múltiplas contas (exemplo: Pessoal + Profissional)",
            "Limites de gastos personalizados por categoria",
            "Dicas financeiras inteligentes da IA"
        ],
        link: "https://stripe.com/professional-plan-link"
    },
    {
        id: "business",
        title: "Empresarial",
        desc: "Para empresas que precisam de controle financeiro colaborativo e integração com contabilidade.",
        monthlyPrice: 79.90,
        yearlyPrice: 799.90,
        badge: "Plano Completo",
        buttonText: "Fale com um Especialista",
        features: [
            "Tudo do Plano Profissional",
            "Múltiplos usuários e permissões diferenciadas",
            "Gestão financeira colaborativa (funcionários podem registrar despesas)",
            "Conciliação financeira automática (cruza despesas e receitas)",
            "Geração automática de relatórios contábeis",
            "Integração com ERPs e softwares contábeis (Conta Azul, Nibo, QuickBooks)",
            "Consultoria financeira por IA personalizada",
            "Análises preditivas para fluxo de caixa"
        ],
        link: "https://stripe.com/business-plan-link"
    }
];
