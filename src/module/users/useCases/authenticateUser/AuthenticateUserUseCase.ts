import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"

import { myPrisma } from "../../../../database/MyPrismaClient";
import { IAuthenticateUSerDTO } from "../../dtos/IAuthenticateUserDTO"
import { AppError } from "../../../../shared/errors/AppError";

export class AuthenticateUsersUseCase {
    async execute({ username, password }: IAuthenticateUSerDTO) {
        const user = await myPrisma.users.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            },
        });


        const passWordMatch = await compare(password, user.password);

        if ((!user) || (!passWordMatch)) {
            throw new AppError("User invalid");
        }

        const token = sign({ username }, "f1443caede92a8gGe26d6d1edeb0b89c", {
            subject: user.id,
            expiresIn: "1d",
        });

        return token
    }
}