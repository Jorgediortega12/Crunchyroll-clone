'use client'

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { authenticated } from "@/action";
import { LenguajeDropdown } from "@/components";

import Image from "next/image";
import Link from "next/link";

import { IoInformationOutline } from "react-icons/io5";
import clsx from "clsx";

export const LoginForm = () => {

    const [state, dispatch] = useFormState(authenticated, undefined)

    useEffect(() => {
        if(state === 'Success'){
            window.location.replace("/");  //refrescamos la pagina web.
        }
    }, [state]);

    return (
        <form action={dispatch} className="flex flex-col items-center justify-center min-h-screen bg-[#000000]">
            <h1 className="mb-5 text-[26px] text-white">ACCEDER</h1>
            <div className="max-w-md w-full bg-bg-navbar rounded-sm p-10">
                <div className="relative z-0 w-full mb-10 group">
                    <input
                        type="email"
                        name="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Dirección de email
                    </label>
                </div>

                <div className="relative z-0 w-full group">
                    <input
                        type="password"
                        name="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Contraseña
                    </label>
                </div>

                <Link
                    href=""
                    className="block mt-2 text-[15px] text-gray-400 hover:text-white cursor-pointer">
                    <span>¿Olvidaste tu contraseña?</span>
                </Link>
            </div>

            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {state === "CredentialsSignin" && (
                    <div className="flex items-center">
                        <IoInformationOutline className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">Las credenciales no son correctas</p>
                    </div>
                )}
            </div>

            <LoginButton />

            <div className="mt-7 grid grid-cols-2 items-center justify-center text-[14px] ml-12">
                <p className="text-white">¿No tienes una cuenta?</p>
                <Link
                    className="text-orange-500 hover:text-white ml-2 font-semibold"
                    href="/auth/new-account">
                    CREAR CUENTA
                </Link>
            </div>

            {/* Footer del login */}
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
}

function LoginButton() {
    const { pending } = useFormStatus(); 

    return (
        <div>
            <button
                type="submit"
                className={clsx({
                    'btn-primary': !pending,
                    'btn-disable': pending,
                })}
                disabled={pending}
            >
                {pending ? (
                    <div className="flex items-center justify-center">
                        <div className="loader"></div>
                    </div>
                ) : (
                    'ACCEDER'
                )}
            </button>
        </div>
    );
}
