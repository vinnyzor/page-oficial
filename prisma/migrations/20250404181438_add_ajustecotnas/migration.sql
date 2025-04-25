/*
  Warnings:

  - You are about to drop the column `contaId` on the `Planos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Planos" DROP CONSTRAINT "Planos_contaId_fkey";

-- DropIndex
DROP INDEX "Planos_contaId_idx";

-- AlterTable
ALTER TABLE "Planos" DROP COLUMN "contaId";

-- CreateTable
CREATE TABLE "PlanoContas" (
    "planoId" INTEGER NOT NULL,
    "contaId" INTEGER NOT NULL,

    CONSTRAINT "PlanoContas_pkey" PRIMARY KEY ("planoId","contaId")
);

-- CreateIndex
CREATE INDEX "PlanoContas_planoId_idx" ON "PlanoContas"("planoId");

-- CreateIndex
CREATE INDEX "PlanoContas_contaId_idx" ON "PlanoContas"("contaId");

-- AddForeignKey
ALTER TABLE "PlanoContas" ADD CONSTRAINT "PlanoContas_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Planos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlanoContas" ADD CONSTRAINT "PlanoContas_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "Contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
