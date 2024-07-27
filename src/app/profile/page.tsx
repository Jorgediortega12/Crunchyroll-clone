'use server'

import { auth } from "@/auth.config";
import { Navbar } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth();
    if (!session?.user) {
        redirect("/");
    }

    return (
        <div>
            <Navbar />
            
            {/*Mostramos información sobre el usuario, como el email, role, image.  */}
            <div className="mx-5">
                <h1 className="mx-2">Perfil</h1>

                {
                    <pre>{JSON.stringify(session.user, null, 2)}</pre>
                }

                <h1 className="text-5xl">{session.user.role}</h1>
            </div>
        </div>
    )
}