-- DropForeignKey
ALTER TABLE "expenses_itens" DROP CONSTRAINT "expenses_itens_id_users_fkey";

-- CreateTable
CREATE TABLE "users_expenses" (
    "id_expense" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "users_expenses_id_expense_id_user_key" ON "users_expenses"("id_expense", "id_user");

-- AddForeignKey
ALTER TABLE "users_expenses" ADD CONSTRAINT "users_expenses_id_expense_fkey" FOREIGN KEY ("id_expense") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_expenses" ADD CONSTRAINT "users_expenses_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expenses_itens" ADD CONSTRAINT "expenses_itens_id_users_id_expense_fkey" FOREIGN KEY ("id_users", "id_expense") REFERENCES "users_expenses"("id_user", "id_expense") ON DELETE RESTRICT ON UPDATE CASCADE;
