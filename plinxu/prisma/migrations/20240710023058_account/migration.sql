-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bankAccountId" TEXT;

-- CreateTable
CREATE TABLE "bankAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "bankId" TEXT,
    "accountId" TEXT,
    "accessToken" TEXT,
    "fundingSourceUrl" TEXT,
    "shareableId" TEXT,

    CONSTRAINT "bankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bankAccount_bankId_userId_accountId_accessToken_fundingSour_key" ON "bankAccount"("bankId", "userId", "accountId", "accessToken", "fundingSourceUrl", "shareableId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "bankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
