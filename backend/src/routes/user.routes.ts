import { Router } from "express";
import { UsersControllers } from "../controllers/users.controllers";

export const userRoutes = Router();


const usersControllers = new UsersControllers();

userRoutes.post("/", )