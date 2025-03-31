-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(20),
    "status" TEXT NOT NULL DEFAULT 'inactive',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "financas" (
    "id" SERIAL NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "nome_financa" VARCHAR(255) NOT NULL,
    "tipo_financa" VARCHAR(10) NOT NULL,
    "data_hora" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "valor" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "financas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(20),
    "status" TEXT NOT NULL DEFAULT 'pending',
    "session_id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'USD',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "payments_userId_key" ON "payments"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "payments_email_key" ON "payments"("email");

-- CreateIndex
CREATE UNIQUE INDEX "payments_session_id_key" ON "payments"("session_id");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
