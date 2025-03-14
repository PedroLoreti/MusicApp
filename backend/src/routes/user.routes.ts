import { Router } from "express";
import { UsersControllers } from "../controllers/users.controllers";
import { IsValidBody } from "../middlewares/validationMiddleware.middleware";
import { createUserSchema } from "../schemas/userSchema.schema";

export const userRoutes = Router();


const usersControllers = new UsersControllers();

userRoutes.post("/", IsValidBody.execute({ body: createUserSchema }), usersControllers.createUser);