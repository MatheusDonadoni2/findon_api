import { Request, Response } from "express";
import { AuthenticateUsersUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUsersController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateUsersUseCase = new AuthenticateUsersUseCase();
        const result = await authenticateUsersUseCase.execute({
            username, password
        });

        return response.json(result);

    }
}