/*
  Warnings:

  - You are about to drop the column `Sale` on the `Customer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "sale" INTEGER[];

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "Sale";

-- AlterTable
ALTER TABLE "Manufacturer" ADD COLUMN     "cars" INTEGER[];

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
