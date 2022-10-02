import { Request, Response } from "express";
import { FindAllExpensesByUserUseCase } from "./FindAllExpensesByUserUseCase";

export class FindAllExpensesByUserContoller {
    async handle(request: Request, response: Response) {
        const findAllExpensesByUserUseCase = new FindAllExpensesByUserUseCase();
        const { id } = request.params;
        const result = await findAllExpensesByUserUseCase.execute(id);

        return response.json(result)
    }
}