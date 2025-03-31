"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import CheckoutWithWhatsapp from "@/components/CheckoutWithWhatsapp";

interface WhatsappDialogProps {
  planTitle: string;
  planId: "individual" | "duo" | "profissional" | "free"; // 👈 Adicionamos 'free'
  planType: "monthly" | "yearly" | "free"; // 👈 'none' para plano gratuito
  isOpen: boolean;
  onClose: () => void;
}

const WhatsappDialog: React.FC<WhatsappDialogProps> = ({
  planTitle,
  planId,
  planType,
  isOpen,
  onClose,
}) => {
  // 🔁 Traduz o tipo de plano
  const translatedPeriod =
    planType === "monthly" ? "mensal" : planType === "yearly" ? "anual" : "";

  const isFree = planId === "free";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{planTitle}</DialogTitle>
          <DialogDescription>
            Informe seu WhatsApp para continuar.
          </DialogDescription>
        </DialogHeader>

        <CheckoutWithWhatsapp
  plano={planId}
  periodo="free"
  label={`Assinar ${planTitle} ${
    translatedPeriod ? `(${translatedPeriod})` : ""
  }`}
/>

      </DialogContent>
    </Dialog>
  );
};

export default WhatsappDialog;
