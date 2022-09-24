/*
  Warnings:

  - You are about to drop the column `fk_id_expense` on the `users_expenses` table. All the data in the column will be lost.
  - You are about to drop the column `fk_id_user` on the `users_expenses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_expense,id_user]` on the table `users_expenses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_expense` to the `users_expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `users_expenses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "expenses_itens" DROP CONSTRAINT "expenses_itens_id_user_id_expense_fkey";

-- DropForeignKey
ALTER TABLE "users_expenses" DROP CONSTRAINT "users_expenses_fk_id_expense_fkey";

-- DropForeignKey
ALTER TABLE "users_expenses" DROP CONSTRAINT "users_expenses_fk_id_user_fkey";

-- DropIndex
DROP INDEX "users_expenses_fk_id_expense_fk_id_user_key";

-- AlterTable
ALTER TABLE "users_expenses" DROP COLUMN "fk_id_expense",
DROP COLUMN "fk_id_user",
ADD COLUMN     "id_expense" TEXT NOT NULL,
ADD COLUMN     "id_user" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_expenses_id_expense_id_user_key" ON "users_expenses"("id_expense", "id_user");

-- AddForeignKey
ALTER TABLE "users_expenses" ADD CONSTRAINT "users_expenses_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_expenses" ADD CONSTRAINT "users_expenses_id_expense_fkey" FOREIGN KEY ("id_expense") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses_itens" ADD CONSTRAINT "expenses_itens_id_user_id_expense_fkey" FOREIGN KEY ("id_user", "id_expense") REFERENCES "users_expenses"("id_expense", "id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
