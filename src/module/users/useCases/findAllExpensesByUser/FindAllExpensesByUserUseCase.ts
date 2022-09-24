import { myPrisma } from "../../../../database/MyPrismaClient";
import { AppError } from "../../../../shared/errors/AppError";

export class FindAllExpensesByUserUseCase {
    async execute(id_user: string) {
        const user = await myPrisma.users.findUnique({
            where: {
                id: id_user
            }
        })

        if (!user) {
            throw new AppError('User not found.')
        }

        const all = await myPrisma.users.findMany({
            where: {
                id: user.id
            },
            select: {
                id: true,
                username: true,
                UsersExpenses: {
                    select: {
                        expense: {
                            select: {
                                description: true,
                                Expenses_Itens: {
                                    select: {
                                        description: true,
                                        amount: true,
                                        date: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        return all;
    };
}
