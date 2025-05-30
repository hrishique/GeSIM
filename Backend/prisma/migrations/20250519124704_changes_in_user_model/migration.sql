/*
  Warnings:

  - You are about to drop the column `esimNintDetails` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `TypeReference` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `esimMintStatus` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EsimPlan" ADD COLUMN     "plan_type" INTEGER NOT NULL DEFAULT 101;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "esimNintDetails",
ADD COLUMN     "esimMintStatus" BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TypeReference_code_key" ON "TypeReference"("code");
