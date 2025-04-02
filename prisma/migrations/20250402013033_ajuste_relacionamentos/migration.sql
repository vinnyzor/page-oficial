/*
  Warnings:

  - You are about to drop the `contas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `financas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `planos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `planos_prices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_contas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "contas";

-- DropTable
DROP TABLE "financas";

-- DropTable
DROP TABLE "payments";

-- DropTable
DROP TABLE "planos";

-- DropTable
DROP TABLE "planos_prices";

-- DropTable
DROP TABLE "user_contas";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Contas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,

    CONSTRAINT "Contas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Financas" (
    "id" SERIAL NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "nomeFinanca" VARCHAR(255) NOT NULL,
    "tipoFinanca" VARCHAR(10) NOT NULL,
    "dataHora" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "valor" DECIMAL(10,2) NOT NULL,
    "contaId" INTEGER NOT NULL,

    CONSTRAINT "Financas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(20),
    "status" TEXT NOT NULL DEFAULT 'pending',
    "sessionId" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'USD',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "priceId" VARCHAR(100),
    "productId" VARCHAR(100),
    "subscriptionId" TEXT,
    "planoId" INTEGER,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planos" (
    "id" SERIAL NOT NULL,
    "contaId" INTEGER NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fim" TIMESTAMP(3) NOT NULL,
    "periodoPagamento" VARCHAR(20) NOT NULL,
    "planoPriceId" INTEGER NOT NULL,

    CONSTRAINT "Planos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanosPrices" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "priceId" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "PlanosPrices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserContas" (
    "userId" INTEGER NOT NULL,
    "contaId" INTEGER NOT NULL,

    CONSTRAINT "UserContas_pkey" PRIMARY KEY ("userId","contaId")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(20),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome" VARCHAR(25) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPlanos" (
    "userId" INTEGER NOT NULL,
    "planoId" INTEGER NOT NULL,

    CONSTRAINT "UserPlanos_pkey" PRIMARY KEY ("userId","planoId")
);

-- CreateIndex
CREATE INDEX "Financas_contaId_idx" ON "Financas"("contaId");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_sessionId_key" ON "Payments"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_planoId_key" ON "Payments"("planoId");

-- CreateIndex
CREATE INDEX "Payments_userId_idx" ON "Payments"("userId");

-- CreateIndex
CREATE INDEX "Payments_planoId_idx" ON "Payments"("planoId");

-- CreateIndex
CREATE INDEX "Planos_contaId_idx" ON "Planos"("contaId");

-- CreateIndex
CREATE INDEX "Planos_planoPriceId_idx" ON "Planos"("planoPriceId");

-- CreateIndex
CREATE INDEX "UserContas_contaId_idx" ON "UserContas"("contaId");

-- CreateIndex
CREATE INDEX "UserContas_userId_idx" ON "UserContas"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE INDEX "UserPlanos_planoId_idx" ON "UserPlanos"("planoId");

-- CreateIndex
CREATE INDEX "UserPlanos_userId_idx" ON "UserPlanos"("userId");
