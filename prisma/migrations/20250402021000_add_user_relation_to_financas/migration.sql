-- AlterTable
ALTER TABLE "Financas" ADD COLUMN     "userId" INTEGER;

-- CreateIndex
CREATE INDEX "Financas_userId_idx" ON "Financas"("userId");

-- AddForeignKey
ALTER TABLE "Financas" ADD CONSTRAINT "Financas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
