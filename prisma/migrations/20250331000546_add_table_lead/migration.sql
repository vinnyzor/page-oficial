-- DropForeignKey
ALTER TABLE "financas" DROP CONSTRAINT "financas_conta_id_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_userId_fkey";

-- DropForeignKey
ALTER TABLE "planos" DROP CONSTRAINT "planos_conta_id_fkey";

-- DropForeignKey
ALTER TABLE "planos" DROP CONSTRAINT "planos_payments_id_fkey";

-- DropForeignKey
ALTER TABLE "planos" DROP CONSTRAINT "planos_plano_price_id_fkey";

-- DropForeignKey
ALTER TABLE "planos" DROP CONSTRAINT "planos_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_contas" DROP CONSTRAINT "user_contas_conta_id_fkey";

-- DropForeignKey
ALTER TABLE "user_contas" DROP CONSTRAINT "user_contas_user_id_fkey";

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "plano" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
