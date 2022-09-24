-- AddForeignKey
ALTER TABLE "expenses_itens" ADD CONSTRAINT "expenses_itens_id_expense_id_user_fkey" FOREIGN KEY ("id_expense", "id_user") REFERENCES "users_expenses"("id_expense", "id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
