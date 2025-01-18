export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    avatarUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}
