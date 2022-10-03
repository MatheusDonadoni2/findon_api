import { Request, Response } from "express";

import { FindUserByIDUseCase } from "./findUserByIDUseCase";

export class FindUserByIDController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const findUserByIDUseCase = new FindUserByIDUseCase();
        const result = await findUserByIDUseCase.execute([id]);

        return response.json(result)
    }
}