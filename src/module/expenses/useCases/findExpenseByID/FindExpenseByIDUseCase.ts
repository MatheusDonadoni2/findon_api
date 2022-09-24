import { AppError } from "../../../../shared/errors/AppError";
import { myPrisma } from "../../../../database/MyPrismaClient";

export class FindExpenseByIDUseCase {
    async execute(id_expense) {

        const expense = await myPrisma.expenses.findMany({

            where: {
                UsersExpenses: {
                    every: {
                        id_expense
                    }
                }
            },
            select: {
                id: true,
                description: true,
                created_at: true,
                Expenses_Itens: {
                    select: {
                        description: true,
                        amount: true,
                        created_at: true,
                        user: {
                            select: {
                                user: {
                                    select: {
                                        username: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        if (!expense) {
            throw new AppError("Expense not found", 401)
        }

        return expense

    }
}