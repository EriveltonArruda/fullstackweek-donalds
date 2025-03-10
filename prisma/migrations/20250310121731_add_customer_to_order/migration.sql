/*
  Warnings:

  - Added the required column `costumerCpf` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costumerName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "costumerCpf" TEXT NOT NULL,
ADD COLUMN     "costumerName" TEXT NOT NULL;
