/*
  Warnings:

  - Added the required column `plano_price_id` to the `planos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planos" ADD COLUMN     "plano_price_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "planos_prices" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "periodo" TEXT NOT NULL,

    CONSTRAINT "planos_prices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "planos" ADD CONSTRAINT "planos_plano_price_id_fkey" FOREIGN KEY ("plano_price_id") REFERENCES "planos_prices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
