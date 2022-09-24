import { AppError } from "../../../../../shared/errors/AppError";
import { myPrisma } from "../../../../../database/MyPrismaClient"
import { ICreateExpenses_itens } from "../../../dtos/ICreateExpenses"

import { FindExpenseByIDUseCase } from "../../findExpenseByID/FindExpenseByIDUseCase";

export class CreateItemExpenseUseCase {
    async execute(id: string, itens: ICreateExpenses_itens[]) {
        const expenseExist = await myPrisma.expenses.findUnique({
            where: {
                id
            }
        });

        if (!expenseExist) {
            throw new AppError("Expense not found", 401);
        }
        if (!itens) {
            throw new AppError("Unreported items");
        }

        const createItensExpense = await myPrisma.expenses_Itens.createMany({
            data: itens.map((item) => {
                return {
                    id_expense: id,
                    id_user: item.id_user,
                    description: item.description,
                    amount: item.amount
                }
            })
        });

        if (createItensExpense) {
            const findExpenseByIDUseCase = new FindExpenseByIDUseCase()
            const expense = findExpenseByIDUseCase.execute(id)
            return expense

        }
        else {
            throw new AppError("Erro to create Expense Itens ")
        }


    }
}