import { User } from "@prisma/client";


export type safeUser = Omit<
User,
"createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emilVerified: string | null;
};