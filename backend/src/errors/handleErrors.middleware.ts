import { NextFunction, Request, Response } from "express";
import { AppError } from "./erros";
import { ZodError } from "zod";

export class HandleErrors {
    static execute(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message });

        } else if (err instanceof ZodError) {
            return res.status(400).json({ errors: err.errors });

        } else {
            return res.status(500).json({ error: "Internal server error." });
        }
    }
}