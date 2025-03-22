"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WhatsappFormProps {
  planTitle: string;
  planId: string;
  onSuccess?: () => void;
}

const WhatsappForm: React.FC<WhatsappFormProps> = ({ planTitle, planId, onSuccess }) => {
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!whatsapp.match(/^\d{10,14}$/)) {
      alert("Por favor, insira um número de WhatsApp válido.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert(`Número ${whatsapp} cadastrado para o plano ${planTitle} (ID: ${planId})!`);
      setIsSubmitting(false);
      setWhatsapp("");
      if (onSuccess) onSuccess();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
      <label className="text-sm text-muted-foreground">
        Informe seu WhatsApp para continuar no plano <b>{planTitle}</b>:
      </label>
      <Input
        type="tel"
        placeholder="Ex: +55 11 98765-4321"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className="p-3 border rounded-md"
        required
      />
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Começar agora mesmo"}
      </Button>
    </form>
  );
};

export default WhatsappForm;
