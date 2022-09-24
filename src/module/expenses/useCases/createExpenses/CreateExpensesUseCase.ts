import { myPrisma } from "../../../../database/MyPrismaClient";
import { ICreateExpenses } from "../../dtos/ICreateExpenses"

export class CreateExpensesUseCase {
    async execute({ description, id_users_relatitions, itens }: ICreateExpenses) {
        await myPrisma.$transaction([

        ])

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


