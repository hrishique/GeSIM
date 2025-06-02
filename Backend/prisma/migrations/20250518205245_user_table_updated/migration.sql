/*
  Warnings:

  - Added the required column `esimNintDetails` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `kycStatus` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "esimNintDetails" BOOLEAN NOT NULL,
DROP COLUMN "kycStatus",
ADD COLUMN     "kycStatus" BOOLEAN NOT NULL;
