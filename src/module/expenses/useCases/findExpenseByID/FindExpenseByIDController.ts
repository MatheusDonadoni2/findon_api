import { Request, Response } from "express";
import { FindExpenseByIDUseCase } from "./FindExpenseByIDUseCase";

export class FindExpenseByIDController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const findExpenseByIDUseCase = new FindExpenseByIDUseCase();
        const result = await findExpenseByIDUseCase.execute(id);


        return response.json(result)

    }
}