/*
  Warnings:

  - Added the required column `nome` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "nome" VARCHAR(25) NOT NULL;
