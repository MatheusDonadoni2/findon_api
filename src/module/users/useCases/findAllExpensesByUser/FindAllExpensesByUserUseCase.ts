import { myPrisma } from "../../../../database/MyPrismaClient";
import { AppError } from "../../../../shared/errors/AppError";
import { FindUserByIDUseCase } from "../findUserByID/findUserByIDUseCase";


export class FindAllExpensesByUserUseCase {
    async execute(id_user: string) {
        const findUserByIDUseCase = new FindUserByIDUseCase()
        const user = findUserByIDUseCase.execute([id_user])

        if (!user) {
            throw new AppError('User not found.')
        }

        const all = await myPrisma.users.findMany({
            where: {
                id: id_user
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
