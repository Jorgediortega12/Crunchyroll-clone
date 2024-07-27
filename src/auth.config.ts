import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/new-account'
    },

    callbacks: {
        jwt({ user, token }) {
            if (user) {
                token.data = user;
            }
            return token;
        },
        session({ token, user, session }) {
            session.user = token.data as any; 
            return session;
        }
    },

    providers: [

        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCredentials.success) return null;
                const { email, password } = parsedCredentials.data;

                console.log({ email, password });

                //buscar nuestros usuarios.
                const user = await prisma.users.findUnique({ where: { email: email.toLocaleLowerCase() } });
                if (!user) return null; 

                //comparar contraseñas.
                if (!bcryptjs.compareSync(password, user.password)) return null;

                //regresar el usuario sin el password.
                const { password: _, ...rest } = user;

                return rest;
            },
        }),
    ]
};


export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);