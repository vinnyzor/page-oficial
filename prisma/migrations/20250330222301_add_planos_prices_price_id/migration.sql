/*
  Warnings:

  - Added the required column `price_id` to the `planos_prices` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `valor` on the `planos_prices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "planos_prices" ADD COLUMN     "price_id" TEXT NOT NULL,
DROP COLUMN "valor",
ADD COLUMN     "valor" DECIMAL(10,2) NOT NULL;
