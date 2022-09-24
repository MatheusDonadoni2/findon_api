import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase"

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const {
            name,
            username,
            cpf,
            password
        } = request.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({
            name,
            username,
            password,
            cpf
        });

        return response.json(result)

    };
};