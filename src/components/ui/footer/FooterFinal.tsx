import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { LenguajeDropdown } from "../..";

const FooterNavigationItems = [
    'Explorar lo más popular',
    'Explorar los Simulcasts',
    'Calendario de lanzamiento',
    'Noticias',
    'Juegos'
];

const FooterNavigation = () => {
    return (
        <div className="flex flex-col items-start">
            {
                FooterNavigationItems.map((item, index) => (
                    <div className="mb-2" key={index}>
                        <a className="hover:underline text-gray-400 hover:text-white cursor-pointer">{item}</a>
                    </div>
                ))
            }
        </div>
    );
}

const SocialFooterItems = [
    {
        "text": 'YouTube',
        "icon": <FaYoutube />
    },
    {
        "text": 'Facebook',
        "icon": <FaFacebook />
    },
    {
        "text": 'Twitter',
        "icon": <FaTwitter />
    },
    {
        "text": 'Instagram',
        "icon": <FaInstagram />
    },
    {
        "text": 'TikTok',
        "icon": <FaTiktok />
    },
]

const FooterSocial = () => {
    return (
        <div className="flex flex-col items-start">
            {
                SocialFooterItems.map((item, index) => (
                    <div key={index} className="flex items-center mb-2 hover:underline text-gray-400 hover:text-white">
                        <div className="mr-2">{item.icon}</div>
                        <a className="cursor-pointer">{item.text}</a>
                    </div>
                ))
            }
        </div>
    )
}


const FooterCrunchyItems = [
    'Comienza tu Prueba Gratuita',
    'Acerca',
    'Centro de ayuda',
    'Términos de uso',
    'Política de Privacidad',
    'Herramienta de aceptación de cookies',
    'Contacto de prensa',
    'Hazte con nuestras aplicaciones',
    'Canjear Tarjeta de regalo',
    'Empleo'
]

const CrunchyFooter = () => {
    return (
        <div className="flex flex-col items-start">
            {
                FooterCrunchyItems.map((item, index) => (
                    <div key={index} className="mb-2 hover:underline text-gray-400 hover:text-white">
                        <a className="cursor-pointer">{item}</a>
                    </div>
                ))
            }
        </div>
    )
}

const Count = [
    'Crear cuenta',
    'Acceder'
]

const CountFooter = () => {
    return (
        <div className="flex flex-col items-start">
            {
                Count.map((item, index) => (
                    <div key={index} className="mb-2 text-gray-400 hover:text-white hover:underline cursor-pointer">
                        <a>{item}</a>
                    </div>
                ))
            }
        </div>
    )
}

export const FooterFinal = () => {
    return (
        <footer className="bg-opacity-50 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-lg mb-4 text-white">Navegación</h2>
                    <FooterNavigation />
                </div>
                <div>
                    <h2 className="text-lg mb-4 text-white">Conecta con nosotros</h2>
                    <FooterSocial />
                </div>
                <div>
                    <h2 className="text-lg mb-4 text-white">Crunchyroll</h2>
                    <CrunchyFooter />
                </div>
                <div>
                    <h2 className="text-lg mb-4 text-white">Cuenta</h2>
                    <CountFooter />
                </div>
            </div>

            <hr className="w-4/4 border-gray-600 mx-auto my-5" />

            <div className="flex items-center justify-between w-full px-10 mt-5">
                <p className="text-gray-500 text-[20px] uppercase">
                    <span className="cursor-default">Sony Pictures</span> |
                    <span className="text-gray-500 hover:text-white cursor-default lowercase ml-2">
                        &copy; Crunchyroll, LLC
                    </span>
                </p>
                <div>n
                    <LenguajeDropdown />
                </div>
            </div>
        </footer>
    );
}   