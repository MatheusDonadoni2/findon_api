import { myPrisma } from "../../../../database/MyPrismaClient";

export class FindAllUseCase {
    execute() {
        const allUsers = myPrisma.users.findMany();

        return allUsers
    };
}
