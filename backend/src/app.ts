import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { userRoutes } from "./routes/user.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/user", userRoutes);