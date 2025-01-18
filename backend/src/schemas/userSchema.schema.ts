import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    avatarUrl: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();