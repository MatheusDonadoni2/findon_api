import { Request, Response } from "express";
import { FindAllUseCase } from "./FindAllUseCase"

export class FindAllController {
    async handle(request: Request, response: Response) {
        const findAllUseCase = new FindAllUseCase();
        const result = await findAllUseCase.execute();
        return response.json(result)
    };
};