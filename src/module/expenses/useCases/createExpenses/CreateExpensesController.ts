import { Request, Response } from "express";
import { CreateExpensesUseCase } from "./CreateExpensesUseCase";

export class CreateExpensesController {
    async handle(request: Request, response: Response) {
        const { description, id_users_relatitions, itens } = request.body;
        const createExpensesUseCase = new CreateExpensesUseCase();

        const result = await createExpensesUseCase.execute({
            description,
            id_users_relatitions,
            itens
        });

        return response.json(result)
    }
}