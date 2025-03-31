"use client";

import { useState } from "react";
import InputMask from "react-input-mask";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { X } from "lucide-react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

interface CheckoutWithWhatsappProps {
  plano: "free" | "individual" | "duo" | "profissional";
  periodo: "mensal" | "anual" | "free";
  label?: string;
}

export default function CheckoutWithWhatsapp({
  plano,
  periodo,
  label,
}: CheckoutWithWhatsappProps) {
  const [loading, setLoading] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  const handleCheckout = async () => {
    const numeroSemMascara = whatsapp.replace(/\D/g, "");

    if (!numeroSemMascara.match(/^\d{10,14}$/)) {
      toast.error("Número inválido", {
        description: "Por favor, insira um número de WhatsApp válido.",
        icon: <X className="text-red-500 h-6 w-6" />,
        className: "!text-base !p-6 flex items-center !gap-x-4 min-w-fit",
      });
      return;
    }

    setLoading(true);

    try {
      // ✅ Envia o lead para a API
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          whatsapp: numeroSemMascara,
          plano,
          periodo,
          origem: "checkout-component",
          url: window.location.href,
        }),
      });

      // ✅ Se for plano gratuito, finaliza aqui
  if (plano === "free") {
    toast.success("Plano gratuito ativado!", {
      description: "Você receberá instruções no WhatsApp em breve.",
      className: "!text-base !p-6 flex items-center !gap-x-4 min-w-fit",
    });

    setWhatsapp("");
    return;
  }

      // 🔁 Inicia o Stripe Checkout
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plano, periodo }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Erro", {
          description: "Aconteceu um erro ao iniciar o pagamento.",
          icon: <X className="text-red-500 h-6 w-6" />,
          className: "!text-base !p-6 flex items-center !gap-x-4 min-w-fit",
        });
        return;
      }

      const stripe = await stripePromise;
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: data.id });
      }
    } catch (error) {
      toast.error("Erro", {
        description: "Ocorreu um erro. Tente novamente.",
        icon: <X className="text-red-500 h-6 w-6" />,
        className: "!text-base !p-6 flex items-center !gap-x-4 min-w-fit",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-4 w-full">
      <InputMask
        mask="(99) 99999-9999"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
      >
        {(inputProps: any) => (
          <Input
            {...inputProps}
            type="tel"
            className="text-zinc-400"
            placeholder="Seu WhatsApp"
            required
          />
        )}
      </InputMask>

      <Button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className="w-full"
      >
        {loading ? "Processando..." : label || "Assinar"}
      </Button>
    </div>
  );
}
