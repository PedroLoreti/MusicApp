import { UserServices } from "../services/users.services";
import { Request, Response } from "express";

export class UsersControllers {
    

    async createUser(req: Request, res: Response) {
        const userServices = new UserServices();

        const response = await userServices.createUser(req.body);

        return res.status(201).json(response);
    }
}