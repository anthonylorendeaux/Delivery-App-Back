import { IUser } from "../types/User";
import { PrismaClient } from "@prisma/client";
 
const prisma = new PrismaClient();

export async function createUser(input: IUser) {
    try {
        const {name, email, profilePicture, phone, password, surname, isSuspended, categoryId} = input;
        const user = await prisma.user.create({
            data: {
                name,
                email,
                profilePicture,
                phone,
                password,
                surname,
                isSuspended,
                categoryId
            }
        })
        return user;
    } catch(e) {
        throw e;
    }
}

export async function findUser(input: IUser['id']) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(input),
            },
            include: {
                Category: true,
            }
        })
        return user;
    } catch(e) {
        throw e;
    }
}

export async function findAllUsers() {
    try {
        const users = await prisma.user.findMany({
        });
        return users;
    } catch(e) {
        throw e;
    }
}

export async function updateUser(id: IUser['id'], input: IUser) {
    try {
        const {name, email, profilePicture, phone, password, surname, isSuspended, createdAt, updatedAt, categoryId} = input;
        const user = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
                email,
                profilePicture,
                phone,
                password,
                surname,
                isSuspended,
                categoryId
            }
        })
        return user;
    } catch(e) {
        throw e;
    }
}

export async function deleteUser(id: IUser['id']) {
    try {
        const user = await prisma.user.delete({
            where: {
                id: Number(id),
            },
        })
        return user;
    } catch(e) {
        throw e;
    }
}