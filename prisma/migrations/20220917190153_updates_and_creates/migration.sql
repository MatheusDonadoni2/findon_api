/*
  Warnings:

  - You are about to drop the column `CPF` on the `users` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" RENAME COLUMN "CPF" TO "cpf";

-- CreateTable
CREATE TABLE "expenses_itens" (
    "id" TEXT NOT NULL,
    "id_expense" TEXT NOT NULL,
    "id_users" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expenses_itens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "expenses_itens" ADD CONSTRAINT "expenses_itens_id_expense_fkey" FOREIGN KEY ("id_expense") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses_itens" ADD CONSTRAINT "expenses_itens_id_users_fkey" FOREIGN KEY ("id_users") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
