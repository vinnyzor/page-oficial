"use client";

import { useState } from "react";
import InputMask from "react-input-mask";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleCheckout = async () => {
    const numeroSemMascara = whatsapp.replace(/\D/g, "");

    function formatarWhatsapp(whatsapp: string): string {
      let numero = whatsapp.replace(/\D/g, "");
    
      // Remove o primeiro "9" do número se tiver 9 dígitos após o DDD
      if (numero.length === 11 && numero.slice(2, 3) === "9") {
        numero = numero.slice(0, 2) + numero.slice(3);
      }
    
      // Adiciona o DDI do Brasil
      return "55" + numero;
    }
    
    const numeroFormatado = formatarWhatsapp(whatsapp);



    if (!numeroSemMascara.match(/^\d{10,14}$/)) {
      toast.error("Número inválido", {
        description: "Por favor, insira um número de WhatsApp válido.",
        icon: <X className="text-red-500 h-6 w-6" />,
        className: "!text-base !p-6 flex items-center !gap-x-4 min-w-fit",
      });
      return;
    }

    console.log(numeroSemMascara);

    if (plano === "free" && (!nome.trim() || !email.trim())) {
      toast.error("Preencha todos os campos", {
        description: "Nome e e-mail são obrigatórios para o plano gratuito.",
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
          whatsapp: numeroFormatado,
          plano,
          periodo,
          origem: "checkout-component",
          url: window.location.href,
        }),
      });

      // ✅ Se for plano gratuito, finaliza aqui
      if (plano === "free") {
        const response = await fetch("/api/free-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            telefone: numeroFormatado,
            nome,
            email,
            plano,
            periodo,
            origem: "checkout-component",
            url: window.location.href,
          }),
        });
      
        const data = await response.json();
      
        if (!response.ok) {
          toast.error("Erro ao ativar plano gratuito", {
            description: data.error || "Erro desconhecido.",
            icon: <X className="text-red-500 h-6 w-6" />,
            className: "!text-base !p-6 flex items-center !gap-x-4 min-w-fit",
          });
          return;
        }
      
        // Sucesso: redireciona
        router.push("/aprovado");
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
      {plano === "free" && (
        <>
          <Input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </>
      )}
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
