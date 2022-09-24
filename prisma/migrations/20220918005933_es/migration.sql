/*
  Warnings:

  - You are about to drop the column `amount` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `id_expense` on the `users_expenses` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `users_expenses` table. All the data in the column will be lost.
  - You are about to drop the `expenses_itens` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_id_expenses` to the `users_expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_id_users` to the `users_expenses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "expenses_itens" DROP CONSTRAINT "expenses_itens_id_expense_fkey";

-- DropForeignKey
ALTER TABLE "expenses_itens" DROP CONSTRAINT "expenses_itens_id_users_id_expense_fkey";

-- DropForeignKey
ALTER TABLE "users_expenses" DROP CONSTRAINT "users_expenses_id_expense_fkey";

-- DropForeignKey
ALTER TABLE "users_expenses" DROP CONSTRAINT "users_expenses_id_user_fkey";

-- DropIndex
DROP INDEX "users_expenses_id_expense_id_user_key";

-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "amount";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "userName";

-- AlterTable
ALTER TABLE "users_expenses" DROP COLUMN "id_expense",
DROP COLUMN "id_user",
ADD COLUMN     "fk_id_expenses" TEXT NOT NULL,
ADD COLUMN     "fk_id_users" TEXT NOT NULL;

-- DropTable
DROP TABLE "expenses_itens";

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- AddForeignKey
ALTER TABLE "users_expenses" ADD CONSTRAINT "users_expenses_fk_id_users_fkey" FOREIGN KEY ("fk_id_users") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_expenses" ADD CONSTRAINT "users_expenses_fk_id_expenses_fkey" FOREIGN KEY ("fk_id_expenses") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
