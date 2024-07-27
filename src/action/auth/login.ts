'use server'

import { signIn } from '@/auth.config';
import { sleep } from '@/utils';

export async function authenticated(
    prevState: string | undefined,
    formData: FormData
) {
    try {

        // await sleep(2); 

        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirect: false,
        });
        return 'Success'

    } catch (error) {
        console.log(error);
        return 'CredentialsSignin'

    }
}

//autenticación de usuario.
export const login = async (email: string, password: string) => {
    try {
        await signIn('credentials',{email, password})

        return {ok:true}
    } catch (error) {
        console.log(error)
        return {
            ok:false, 
            message: 'No se pudo crear el usuario correctamente'
        }
    }
}