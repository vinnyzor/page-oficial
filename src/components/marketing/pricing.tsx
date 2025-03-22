"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PLANS } from "@/constants";
import { cn } from "@/functions";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import NumberTicker from "../ui/number-ticker";
import WhatsappForm from "@/components/WhatsappForm";
import SectionBadge from "../ui/section-bade";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

type Plan = "monthly" | "yearly";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);




  return (
    <>
      <div
        id="pricing"
        className="flex flex-col items-center justify-center pt-16 w-full relative"
      >
        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <SectionBadge title="Escolha seu plano" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
              Preços simples e transparentes
            </h2>
            <p className="text-base max-w-2xl md:text-lg text-center text-accent-foreground/80 mt-6">
              Escolha o plano ideal para sua organização financeira. Sem taxas
              escondidas, sem surpresas.
            </p>
          </div>
        </Container>
        <div className="mt-8 w-full min-w-[90vw] lg:min-w-[1400px] xl:min-w-[1600px] flex flex-col items-center justify-center px-6">
          <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
          <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-[#2fb4a4]/15 blur-[10rem] -z-10"></div>
          <Container className="!min-w-full">
            <Tabs
              defaultValue="monthly"
              className="w-full flex flex-col items-center justify-center"
            >
              <TabsList>
                <TabsTrigger value="monthly">Plano Mensal</TabsTrigger>
                <TabsTrigger value="yearly">Plano Anual</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-14">
                  {PLANS.map((plan, index) => (
                    <Plan
                      key={index}
                      index={index}
                      {...plan}
                      plan="monthly"
                      openDialog={setSelectedPlan}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-14">
                  {PLANS.map((plan, index) => (
                    <Plan
                      key={index}
                      index={index}
                      {...plan}
                      plan="yearly"
                      openDialog={setSelectedPlan}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Container>
        </div>
      </div>

      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
    <DialogContent className="max-w-md">
        <DialogHeader>
            <DialogTitle>{selectedPlan?.title}</DialogTitle>
            <DialogDescription>{selectedPlan?.desc}</DialogDescription>
        </DialogHeader>

        <ul className="flex flex-col gap-2 mt-4">
            {selectedPlan?.features?.map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                    <CheckIcon aria-hidden="true" className="w-5 h-5 text-primary" />
                    <p className="text-sm md:text-base text-muted-foreground">{feature}</p>
                </li>
            ))}
        </ul>

        {/* Formulário reutilizável */}
        {selectedPlan && (
            <WhatsappForm
                planTitle={selectedPlan.title}
                planId={selectedPlan.id}
                onSuccess={() => setSelectedPlan(null)}
            />
        )}
    </DialogContent>
</Dialog>
    </>
  );
};

const Plan = ({
  id,
  title,
  desc,
  monthlyPrice,
  yearlyPrice,
  buttonText,
  features,
  index,
  plan,
  openDialog,
}: {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  features: string[];
  index: number;
  plan: Plan;
  openDialog: (plan: any) => void;
}) => {
  const getDisplayedPrice = (
    plan: string,
    monthlyPrice: number,
    yearlyPrice: number
  ) => {
    if (plan === "monthly") {
      return monthlyPrice === 0 ? 0 : monthlyPrice;
    } else if (plan === "yearly") {
      const discountedPrice = Math.round((yearlyPrice * 0.8) / 12);
      return yearlyPrice === 0 ? 0 : discountedPrice;
    }
    return 0;
  };

  const displayedPrice = getDisplayedPrice(plan, monthlyPrice, yearlyPrice);

  return (
    <div
      key={index}
      className="w-full relative flex flex-col saturate-150 rounded-2xl"
    >
      <div
        className={cn(
          "flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
          id === "pro" ? "border-primary/80" : "border-border/60"
        )}
      >
        {id === "pro" && (
          <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-primary to-[#054b43] absolute -top-3 left-1/2 -translate-x-1/2 select-none">
            <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
              Mais Popular
            </span>
          </div>
        )}
        <div className="flex flex-col p-3 w-full">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm mt-2 text-muted-foreground break-words">
            {desc}
          </p>
        </div>
        <hr
          className="shrink-0 border-none w-full h-px bg-border"
          role="separator"
        />
        <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4">
          <div className="flex items-end gap-2">
            <div className="flex items-end gap-1 w-full">
              <span className="text-3xl md:text-4xl font-bold">
                R$
                {displayedPrice === 0 ? (
                  0
                ) : (
                  <NumberTicker value={displayedPrice} />
                )}
              </span>
              {/* In here 120 * 0.8 = 96 and /12 to get monthly price */}
              <span className="text-lg text-muted-foreground font-medium font-headin">
                por {plan === "monthly" ? "mês" : "mês"}
              </span>
            </div>
            <AnimatePresence>
              {id !== "free" && plan === "yearly" && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                  className="text-xs px-2 py-0.5 rounded mb-1 text-foreground bg-primary font-medium"
                >
                  -20%
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-primary"
                />
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 mt- h-auto flex w-full items-center">
          <Button
            asChild
            onClick={(e) => {
                e.preventDefault(); // 🔹 Evita que a página role para o topo
                openDialog({ id, title, desc, features });
            }}
            variant={id === "pro" ? "default" : "tertiary"}
            className="w-full hover:scale-100 hover:translate-y-0 shadow-none"
          >
            <Link href={""}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
