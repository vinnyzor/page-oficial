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
                   
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6 pb-16">
                    Sua IA Financeira,<br/>na palma da sua mão
                    </h2>
                   
                </div>
      <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-2">
          <Pill>
            <b className="text-white font-poppins">🔔 Alertas de Pagamentos</b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">📊 Relatórios Automáticos</b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">🔗 Integração com Bancos</b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">✅ Monitoramento de Gastos</b>
          </Pill>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center w-[178px] h-[178px] rounded-full bg-transparent border-2 border-border/60 backdrop-blur-sm shadow !shadow-[#2fb4a4]">
            <Logo className="h-16 mt-2 ml-1" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Pill>
            <b className="text-white font-poppins">💡 Dicas de Economia</b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">📅 Organização de Contas</b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">🔐 Segurança e Privacidade</b>
          </Pill>
          <Pill>
            <b className="text-white font-poppins">🤖 Respostas em tempo real</b>
          </Pill>
        </div>
      </div>
    </Section>
  );
}
