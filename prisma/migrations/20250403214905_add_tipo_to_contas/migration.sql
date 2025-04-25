/*
  Warnings:

  - Added the required column `categoria` to the `Financas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contas" ADD COLUMN     "tipo" TEXT NOT NULL DEFAULT 'pessoal';

-- AlterTable
ALTER TABLE "Financas" ADD COLUMN     "categoria" VARCHAR(40) NOT NULL;
