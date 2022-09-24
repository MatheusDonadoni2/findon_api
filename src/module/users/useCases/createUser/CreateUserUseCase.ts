import { cpf as validateCPF } from "cpf-cnpj-validator"
import { hash } from "bcrypt"
import { myPrisma } from "../../../../database/MyPrismaClient";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from "../../../../shared/errors/AppError";

export class CreateUserUseCase {
    async execute({ name, username, password, cpf }: ICreateUserDTO) {
        const userNameExist = await myPrisma.users.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                },
            },
        });

        if (userNameExist) {
            throw new AppError(`Username ${username} already exists.`);
        }

        const hashPassword = await hash(password, 10)

        const userCPFIsValid = validateCPF.isValid(cpf);

        if (!userCPFIsValid) {
            throw new AppError(`CPF is not valid.`);
        }

        const user = myPrisma.users.create({
            data: {
                name,
                username,
                password: hashPassword,
                cpf
            }
        });

        return user;

    }

}