/*
  Warnings:

  - You are about to drop the column `fk_id_expenses` on the `users_expenses` table. All the data in the column will be lost.
  - You are about to drop the column `fk_id_users` on the `users_expenses` table. All the data in the column will be lost.
  - Added the required column `fk_id_expense` to the `users_expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_id_user` to the `users_expenses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users_expenses" DROP CONSTRAINT "users_expenses_fk_id_expenses_fkey";

-- DropForeignKey
ALTER TABLE "users_expenses" DROP CONSTRAINT "users_expenses_fk_id_users_fkey";

-- AlterTable
ALTER TABLE "users_expenses" DROP COLUMN "fk_id_expenses",
DROP COLUMN "fk_id_users",
ADD COLUMN     "fk_id_expense" TEXT NOT NULL,
ADD COLUMN     "fk_id_user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "users_expenses" ADD CONSTRAINT "users_expenses_fk_id_user_fkey" FOREIGN KEY ("fk_id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_expenses" ADD CONSTRAINT "users_expenses_fk_id_expense_fkey" FOREIGN KEY ("fk_id_expense") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
