/*
  Warnings:

  - You are about to drop the column `fk_expense` on the `expenses_itens` table. All the data in the column will be lost.
  - You are about to drop the column `fk_user` on the `expenses_itens` table. All the data in the column will be lost.
  - Added the required column `id_expense` to the `expenses_itens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `expenses_itens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "expenses_itens" DROP CONSTRAINT "expenses_itens_fk_expense_fk_user_fkey";

-- AlterTable
ALTER TABLE "expenses_itens" DROP COLUMN "fk_expense",
DROP COLUMN "fk_user",
ADD COLUMN     "id_expense" TEXT NOT NULL,
ADD COLUMN     "id_user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "expenses_itens" ADD CONSTRAINT "expenses_itens_id_user_id_expense_fkey" FOREIGN KEY ("id_user", "id_expense") REFERENCES "users_expenses"("fk_id_expense", "fk_id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
