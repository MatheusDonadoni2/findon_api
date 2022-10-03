import { AppError } from "../../../../shared/errors/AppError";
import { FindUserByIDUseCase } from "../../../../module/users/useCases/findUserByID/findUserByIDUseCase";

export class ValidateUsersInformedUseCase {
    async execute(ids: string[]) {
        const findUserByIDUseCase = new FindUserByIDUseCase();
        const foundID = await findUserByIDUseCase.execute(ids);

        if (foundID.length === 1) {
            if (!foundID[0]) {
                throw new AppError("User(s) not found")
            }
        };

        ids.forEach((id) => {
            const result = foundID.find((user) => user.id === id)
            if (!result) {
                throw new AppError("User(s) not found");
            }
        });
    }
}