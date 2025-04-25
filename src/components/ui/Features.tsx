import Logo from "@/components/core/brand/Logo";
import { SectionHeader } from "@/components/core/section/SectionHeader";
import { Section } from "@/components/core/section/Section";
import Pill from "@/components/core/pill/Pill";

import {
  BadgeCheck,
  Fingerprint,
  Languages,
  LayoutTemplate,
  SunDim,
} from "lucide-react";
import TailwindLogo from "@/components/logos/tailwind";
import ShadcnuiLogo from "@/components/logos/shadcnui";

export default function Features() {
  return (
    <Section size="md">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          Seu Bot Financeiro Pessoal,
          <br />
          24h por dia no WhatsApp
        </h2>
        <p className="text-base pb-16 md:text-lg max-w-2xl text-center text-accent-foreground/80 mt-2">
        Esqueça os apps complicados. O ZapFinance entende sua vida financeira, responde em segundos e organiza tudo para você.
        </p>
      </div>
      <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-2">
          <Pill>
            <b className="text-white font-poppins">🔔 Alertas de Pagamentos<br/><span className="text-xs font-light">Nunca mais perca um vencimento</span></b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">📊 Relatórios Automáticos<br/><span className="text-xs font-light">Entenda seu dinheiro sem planilhas</span></b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">🧾 Registro por Voz ou Texto<br/><span className="text-xs font-light">Fale ou digite, o bot entende</span></b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">
              ✅ Monitoramento de Gastos<br/><span className="text-xs font-light">veja pra onde o dinheiro está indo</span>
            </b>
          </Pill>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-[178px] h-[178px] rounded-full bg-transparent border-2 border-border/60 backdrop-blur-sm shadow !shadow-[#2fb4a4]">
            <Logo className="h-16 mt-2 ml-1" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Pill>
            <b className="text-white font-poppins">💡 Dicas de Economia<br/><span className="text-xs font-light">Sugestões personalizadas</span></b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">📅 Organização de Contas<br/><span className="text-xs font-light">Tudo separado por tipo e meta</span></b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">
              🔐 Segurança e Privacidade<br/><span className="text-xs font-light">Tecnologia bancária de proteção</span>
            </b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">
              🤖 Comandos Naturais<br/><span className="text-xs font-light">O bot entende o que você fala,</span>
            </b>
          </Pill>
        </div>
      </div>
    </Section>
  );
}
