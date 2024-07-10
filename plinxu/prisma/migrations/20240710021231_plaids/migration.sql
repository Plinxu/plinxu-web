-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessToken" TEXT,
ADD COLUMN     "accountId" TEXT,
ADD COLUMN     "bankId" TEXT,
ADD COLUMN     "fundingSourceUrl" TEXT,
ADD COLUMN     "shareableId" TEXT;
