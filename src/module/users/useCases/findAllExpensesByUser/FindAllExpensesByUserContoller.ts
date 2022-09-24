import { Request, Response } from "express";
import { FindAllExpensesByUserUseCase } from "./FindAllExpensesByUserUseCase";

export class FindAllExpensesByUserContoller {
    async handle(request: Request, response: Response) {
        const findAllExpensesByUserUseCase = new FindAllExpensesByUserUseCase();
        const { id_user } = request;
        const result = await findAllExpensesByUserUseCase.execute(id_user);

        return response.json(result)
    }
}