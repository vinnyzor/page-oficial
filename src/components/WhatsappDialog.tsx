"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import WhatsappForm from "@/components/WhatsappForm";

interface WhatsappDialogProps {
  planTitle: string;
  planId: string;
  isOpen: boolean;
  onClose: () => void;
}

const WhatsappDialog: React.FC<WhatsappDialogProps> = ({ planTitle, planId, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{planTitle}</DialogTitle>
          <DialogDescription>
            Informe seu WhatsApp para começar a usar nosso serviço.
          </DialogDescription>
        </DialogHeader>

        {/* Formulário de captura do WhatsApp */}
        <WhatsappForm planTitle={planTitle} planId={planId} onSuccess={onClose} />

      </DialogContent>
    </Dialog>
  );
};

export default WhatsappDialog;
