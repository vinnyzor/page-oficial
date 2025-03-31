"use client";
import { useState } from "react";
import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import Image from "next/image";
import WhatsappDialog from "@/components/WhatsappDialog";

const Footer = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <footer className="w-full py-10 border-t border-border relative">
    
<WhatsappDialog
 planTitle="Plano Gratuito"
  planId="free"
  planType="free" 
  isOpen={isDialogOpen}
  onClose={() => setIsDialogOpen(false)}
/>
      <Container>
        <Wrapper className="relative flex flex-col md:flex-row mx-auto w-full justify-between items-end pb-20">
          <Particles
            className="absolute inset-0 w-full -z-10"
            quantity={40}
            ease={10}
            color="#d4d4d8"
            refresh
          />

          <div className="flex flex-col w-full items-start max-w-48">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-lg font-semibold text-foreground">
                <Image
                  src="/icons/logosite.png"
                  width={150}
                  height={40}
                  alt="Logo da Empresa"
                />
              </Link>
            </div>
            <p className="text-sm !font-light text-gray-400 max-w mt-4">
              Seu Controle Financeiro, Automatizado e Inteligente.
            </p>
            <Button
              asChild
              onClick={(e) => {
                e.preventDefault();
                setIsDialogOpen(true);
              }}
              className="mt-8"
            >
              <Link href="/">Testar Grátis</Link>
            </Button>
          </div>

          {/* Container dos links */}
          <div className="flex gap-8 w-full md:justify-end mt-10 md:mt-0">
            {FOOTER_LINKS?.map((section, index) => (
              <div key={index} className="flex flex-col justify-end  gap-4">
                <h4 className="text-sm text-left font-medium">
                  {section.title}
                </h4>
                <ul className="space-y-4 text-left w-full">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all w-full"
                    >
                      <Link href={link.href} className="w-full">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper className="pt-10 flex items-center justify-between relative">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} ZapFinance IA. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="p-1">
              <Icons.instagram className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="#" className="p-1">
              <Icons.twitter className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
            <Link href="#" className="p-1">
              <Icons.discord className="w-5 h-5 text-muted-foreground hover:text-secondary-foreground" />
            </Link>
          </div>
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
