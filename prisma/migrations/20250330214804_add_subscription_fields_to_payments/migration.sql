-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "price_id" VARCHAR(100),
ADD COLUMN     "product_id" VARCHAR(100),
ADD COLUMN     "subscription_id" TEXT;
