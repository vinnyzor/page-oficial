/*
  Warnings:

  - You are about to drop the column `status` on the `users` table. All the data in the column will be lost.
  - Added the required column `conta_id` to the `financas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "financas" ADD COLUMN     "conta_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "status";

-- CreateTable
CREATE TABLE "planos" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "conta_id" INTEGER NOT NULL,
    "payments_id" INTEGER NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fim" TIMESTAMP(3) NOT NULL,
    "periodo_pagamento" VARCHAR(20) NOT NULL,

    CONSTRAINT "planos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,

    CONSTRAINT "contas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_contas" (
    "user_id" INTEGER NOT NULL,
    "conta_id" INTEGER NOT NULL,

    CONSTRAINT "user_contas_pkey" PRIMARY KEY ("user_id","conta_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "planos_payments_id_key" ON "planos"("payments_id");

-- AddForeignKey
ALTER TABLE "planos" ADD CONSTRAINT "planos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planos" ADD CONSTRAINT "planos_conta_id_fkey" FOREIGN KEY ("conta_id") REFERENCES "contas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planos" ADD CONSTRAINT "planos_payments_id_fkey" FOREIGN KEY ("payments_id") REFERENCES "payments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financas" ADD CONSTRAINT "financas_conta_id_fkey" FOREIGN KEY ("conta_id") REFERENCES "contas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_contas" ADD CONSTRAINT "user_contas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_contas" ADD CONSTRAINT "user_contas_conta_id_fkey" FOREIGN KEY ("conta_id") REFERENCES "contas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
