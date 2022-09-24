import { Request, Response } from "express";
import { CreateItemExpenseUseCase } from "../../createItemExpense/useCase/CreateItemExpenseUSeCase";
export class CreateItemExpenseController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { itens } = request.body
        const createItemExpenseUseCase = new CreateItemExpenseUseCase();

        const result = await createItemExpenseUseCase.execute(id, itens)

        return response.json(result)

    }
}