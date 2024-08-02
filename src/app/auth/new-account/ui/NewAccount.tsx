'use client';

import { login, registerUser } from "@/action";
import { LenguajeDropdown } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
    email: string;
    password: string;
    name: string;
}

export const NewAccount = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit = async (data: FormInputs) => {
        setErrorMessage('');
        const { name, email, password } = data;

        // server action
        const resp = await registerUser(name, email, password);
        if (!resp.ok) {
            setErrorMessage(resp.message);
            return;
        }

        //autenticamos el usuario.
        await login(email.toLowerCase(), password);
        window.location.replace("/");   
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center min-h-screen bg-[#000000]">
            <h1 className="mb-5 text-[26px] text-white">CREAR CUENTA</h1>
            <div className="max-w-md w-full bg-bg-navbar rounded-sm p-10">

                <div className="relative z-0 w-full mb-10 group">
                    <input
                        type="name"
                        {...register('name', { required: 'El email es obligatorio', })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label
                        className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Nombre de usuario
                    </label>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="relative z-0 w-full mb-10 group">
                    <input
                        type="email"
                        {...register('email', { required: 'El email es obligatorio', pattern: { value: /^\S+@\S+\.\S+$/, message: 'El email no es válido' } })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label
                        className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Dirección de email
                    </label>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="relative z-0 w-full mb-2 group">
                    <input
                        type="password"
                        {...register('password', { required: 'La contraseña es obligatoria' })}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label
                        className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Contraseña
                    </label>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                <div className="block mt-2 text-[12px] text-gray-400">
                    <span>Utiliza al menos 6 caracteres, sin espacios en blanco.</span>
                </div>

                <div className="flex items-center gap-2 mt-5 text-[13px] text-gray-400 hover:text-white cursor-pointer transition-all duration-500">
                    <label>
                        <input type="checkbox" className="cursor-pointer" />
                    </label>
                    <p>Quiero recibir todas las novedades
                        de Crunchyroll, promociones y noticias. Todas las comunicaciones están sujetas a nuestra
                        <span className="text-orange-500 hover:text-white transition-all duration-500"> Política de Privacidad.</span> Puedes desuscribirte en cualquier momento.
                    </p>
                </div>
            </div>

            {/* Footer del new-account */}
            <div className="text-[12px] mt-5">
                <h5 className="text-gray-400">
                    Al crear una cuenta muestras tu conformidad con nuestros
                    <span className="underline hover:text-white transition-all duration-500 cursor-pointer"> Términos <br /> de uso
                    </span> y <span className="underline hover:text-white transition-all duration-300 cursor-pointer">nuestra Política de privacidad</span>,
                    confirmando además que <br /> <span className="ml-28">tienes 16 años o más.</span>
                </h5>
            </div>

            <span className="text-red-500">{errorMessage}</span>

            <div className="flex flex-col items-center mt-7">
                <div>
                    <button type="submit" className="border-2 font-semibold hover:text-[#ff944d] hover:border-[#ff944d] border-orange-500 p-2 mt-4 text-orange-500 cursor-pointer">
                        CREAR CUENTA
                    </button>
                </div>
                <Link
                    href="/auth/login"
                    className="text-white mt-4">¿Ya tienes una cuenta?
                    <span className="text-orange-500 hover:text-gray-200 ml-2">
                        ACCEDER
                    </span>
                </Link>
            </div>

            <div className="flex items-center text-gray-400 text-[13px] ml-7">
                <div className="flex items-center justify-center gap-3 ml-7">
                    <span className="hover:text-white cursor-pointer">Términos de Uso</span>
                    <span>|</span>
                    <span className="hover:text-white cursor-pointer">Políticas de Privacidad</span>
                    <span>|</span>
                    <span className="hover:text-white cursor-pointer">Consentimiento de cookies</span>
                </div>
                <div className="mb-2">
                    <Image src="/img/log-in-yuzu.png" alt="yuzu" width={80} height={100} />
                </div>
            </div>

            <hr className="w-3/4 border-gray-600" />

            <div className="flex items-start justify-between px-44 w-full mx-auto mt-5">
                <p className="text-gray-500 text-[20px] uppercase">
                    <span className="cursor-default">Sony Pictures</span> |
                    <span className="text-gray-500 hover:text-white cursor-default lowercase ml-2">
                        &copy; Crunchyroll, LLC
                    </span>
                </p>
                <div>
                    <LenguajeDropdown />
                </div>
            </div>
        </form>
    );
};