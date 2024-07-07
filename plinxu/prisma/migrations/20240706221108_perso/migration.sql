/*
  Warnings:

  - A unique constraint covering the columns `[accountId]` on the table `PersonalAccount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accessToken` to the `PersonalAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `PersonalAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankId` to the `PersonalAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fundingSourceUrl` to the `PersonalAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shareableId` to the `PersonalAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PersonalAccount" ADD COLUMN     "accessToken" TEXT NOT NULL,
ADD COLUMN     "accountId" TEXT NOT NULL,
ADD COLUMN     "bankId" TEXT NOT NULL,
ADD COLUMN     "fundingSourceUrl" TEXT NOT NULL,
ADD COLUMN     "shareableId" TEXT NOT NULL,
ALTER COLUMN "currency" SET DEFAULT 'USD';

-- CreateIndex
CREATE UNIQUE INDEX "PersonalAccount_accountId_key" ON "PersonalAccount"("accountId");
