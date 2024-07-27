'use server'

import prisma from "@/lib/prisma"
import bcryptjs from 'bcryptjs';

export const registerUser = async (name: string, email: string, password: string) => {

    try {
        const resp = await prisma.users.create({
            data: {
                email: email.toLowerCase(),
                name: name,
                password: bcryptjs.hashSync(password)
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        return {
            ok: true,
            user: resp,
            message: 'Usuario Creado correctamente'
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'Error al crear un nuevo usuario'
        }
    }
}