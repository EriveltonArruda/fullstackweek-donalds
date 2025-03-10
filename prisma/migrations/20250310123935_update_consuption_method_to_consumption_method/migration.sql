/*
  Warnings:

  - You are about to drop the column `consuptionMethod` on the `Order` table. All the data in the column will be lost.
  - Added the required column `consumptionMethod` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "consuptionMethod",
ADD COLUMN     "consumptionMethod" "ConsumptionMethod" NOT NULL;
