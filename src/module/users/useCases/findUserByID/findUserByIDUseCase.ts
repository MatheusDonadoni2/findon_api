import { Users } from "@prisma/client";
import { myPrisma } from "../../../../database/MyPrismaClient";

export class FindUserByIDUseCase {
    async execute(ids: string[]) {
        const result = await myPrisma.users.findFirst({
            where: {
                id: { in: ids }
            }
        });
        return [result]
    }
}