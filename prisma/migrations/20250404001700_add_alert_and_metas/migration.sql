-- CreateTable
CREATE TABLE "Metas" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(255),
    "valor" DECIMAL(10,2) NOT NULL,
    "acumulado" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "dataLimite" TIMESTAMP(3) NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "contaId" INTEGER,

    CONSTRAINT "Metas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alertas" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "descricao" VARCHAR(255),
    "dataAlerta" TIMESTAMP(3) NOT NULL,
    "recorrente" BOOLEAN NOT NULL DEFAULT false,
    "intervalo" VARCHAR(20),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "contaId" INTEGER,

    CONSTRAINT "Alertas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Metas_userId_idx" ON "Metas"("userId");

-- CreateIndex
CREATE INDEX "Metas_contaId_idx" ON "Metas"("contaId");

-- CreateIndex
CREATE INDEX "Alertas_userId_idx" ON "Alertas"("userId");

-- CreateIndex
CREATE INDEX "Alertas_contaId_idx" ON "Alertas"("contaId");

-- AddForeignKey
ALTER TABLE "Metas" ADD CONSTRAINT "Metas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metas" ADD CONSTRAINT "Metas_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "Contas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alertas" ADD CONSTRAINT "Alertas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alertas" ADD CONSTRAINT "Alertas_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "Contas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
