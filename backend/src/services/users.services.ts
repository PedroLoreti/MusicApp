import { IUser } from "../interfaces/users.interfaces";
import { prisma } from "../database/prisma";
export class UserServices {
    async createUser(body: IUser) {
        return await prisma.user.create({ data: body });
    }
}