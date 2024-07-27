import Image from "next/image";
import Link from "next/link"; 

export const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image className="mt-20" src="/img/yuzu.png" alt="yuzu-footer" width={250} height={200} />
            <div className="text-white flex flex-col items-center justify-center text-xl">
                <p>¿Sigues buscando algo que ver?</p>
                <span>Revisa todo nuestro catálogo</span>
                <Link
                    href="https://www.crunchyroll.com/es/videos/popular"   
                    className="flex items-center justify-center text-sm border-2 font-semibold border-orange-500 text-orange-500 hover:border-[#ff944d] hover:text-[#ff944d] p-2 rounded-md ml-5 mt-6">
                    VER TODO
                </Link>
            </div>
        </div>
    )
}
