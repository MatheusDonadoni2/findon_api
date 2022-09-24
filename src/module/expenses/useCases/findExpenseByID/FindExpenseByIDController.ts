import { Request, Response } from "express";
import { FindExpenseByIDUseCase } from "./FindExpenseByIDUseCase";

export class FindExpenseByIDController {
    async handle(request: Request, response: Response) {
        const { id_expense } = request.body;
        const findExpenseByIDUseCase = new FindExpenseByIDUseCase();

        const result = await findExpenseByIDUseCase.execute(id_expense);


        return response.json(result)

    }
}