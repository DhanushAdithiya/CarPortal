/*
  Warnings:

  - Changed the type of `manufactureYear` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "manufactureYear",
ADD COLUMN     "manufactureYear" INTEGER NOT NULL;
