import { myPrisma } from "../../../../database/MyPrismaClient";
import { ICreateExpenses } from "../../dtos/ICreateExpenses"

import { FindUserByIDUseCase } from "../../../../module/users/useCases/findUserByID/findUserByIDUseCase";
import { AppError } from "../../../../shared/errors/AppError";
import { Users } from "@prisma/client";

export class CreateExpensesUseCase {
    async execute({ description, id_users_relatitions, itens }: ICreateExpenses) {
        const findUserByIDUseCase = new FindUserByIDUseCase();
        const itens_id_user = itens.map((user) => { return user.id_user })

        const userRelationsExists = await findUserByIDUseCase.execute(id_users_relatitions);
        const userRelationsItensExists = await findUserByIDUseCase.execute(itens_id_user);

        itens_id_user.forEach((id) => {
            const result = userRelationsExists.find((user) => user.id === id)
            if (!result) {
                throw new AppError("Any of the related itens users could not be found")
            }
        })


        if (userRelationsExists.length != id_users_relatitions.length) {
            throw new AppError("Any of the related users could not be found")
        };

        const expense = await myPrisma.expenses.create({
            data: {
                description,
                UsersExpenses: {
                    create: id_users_relatitions.map((id) => {
                        return {
                            user: {
                                connect: {
                                    id
                                }
                            },

                        }
                    }),
                }
            }
        });

        const { id: id_expense } = expense

        await myPrisma.expenses_Itens.createMany({
            data: itens.map((item) => {
                return {
                    amount: item.amount,
                    description: item.description,
                    id_user: item.id_user,
                    id_expense
                }
            })
        })

        return expense
    }
};


