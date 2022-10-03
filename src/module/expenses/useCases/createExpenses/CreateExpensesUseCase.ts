import { myPrisma } from "../../../../database/MyPrismaClient";
import { ICreateExpenses } from "../../dtos/ICreateExpenses"

import { FindUserByIDUseCase } from "../../../../module/users/useCases/findUserByID/findUserByIDUseCase";
import { ValidateUsersInformedUseCase } from "./ValidateUsersInformedUseCase";
import { AppError } from "../../../../shared/errors/AppError";
import { Users } from "@prisma/client";

export class CreateExpensesUseCase {
    async execute({ description, id_users_relatitions, itens }: ICreateExpenses) {
        const itens_id_user = itens.map((user) => { return user.id_user })

        const validateUsersInformedUseCase = new ValidateUsersInformedUseCase();

        await validateUsersInformedUseCase.execute(id_users_relatitions);
        await validateUsersInformedUseCase.execute(itens_id_user);




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


