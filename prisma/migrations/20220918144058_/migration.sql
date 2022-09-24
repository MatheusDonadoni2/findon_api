/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_expense,fk_id_user]` on the table `users_expenses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "expenses_itens" (
    "id" TEXT NOT NULL,
    "fk_user" TEXT NOT NULL,
    "fk_expense" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expenses_itens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_expenses_fk_id_expense_fk_id_user_key" ON "users_expenses"("fk_id_expense", "fk_id_user");

-- AddForeignKey
ALTER TABLE "expenses_itens" ADD CONSTRAINT "expenses_itens_fk_expense_fk_user_fkey" FOREIGN KEY ("fk_expense", "fk_user") REFERENCES "users_expenses"("fk_id_expense", "fk_id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
