import { auth } from "@/auth.config";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Autenticación",
    description: "Pagina para la autenticación de aplicacion"
}

export default async function AuthLayout({ children }: {
    children: React.ReactNode;
}) {

    const session = await auth();
    if (session?.user) {
        redirect("/");
    }

    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}