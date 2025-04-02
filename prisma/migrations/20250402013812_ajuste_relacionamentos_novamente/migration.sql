-- AddForeignKey
ALTER TABLE "Financas" ADD CONSTRAINT "Financas_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "Contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Planos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planos" ADD CONSTRAINT "Planos_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "Contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContas" ADD CONSTRAINT "UserContas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContas" ADD CONSTRAINT "UserContas_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "Contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlanos" ADD CONSTRAINT "UserPlanos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPlanos" ADD CONSTRAINT "UserPlanos_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Planos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
