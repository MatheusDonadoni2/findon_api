-- AddForeignKey
ALTER TABLE "expenses_itens" ADD CONSTRAINT "expenses_itens_id_expense_fkey" FOREIGN KEY ("id_expense") REFERENCES "expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
