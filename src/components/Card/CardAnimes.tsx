import Image from "next/image";
import Link from "next/link";
import { IoBookmarkOutline, IoPlayOutline } from "react-icons/io5";

export const CardAnime = () => {
    return (
        <div className="grid grid-cols items-center justify-center">
            <div className="relative mb-10 grid grid-cols-2 items-center justify-center">
                <div className="relative group">
                    <Image
                        className="duration-300 cursor-pointer"
                        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/catalog/crunchyroll/bcc213e8825420a85790049366d409fd.jpg"
                        alt="Frieren-card"
                        width={600}
                        height={500}
                    />
                    <Link
                        href="https://www.crunchyroll.com/es/series/GG5H5XQX4/frieren-beyond-journeys-end"
                        className="absolute inset-0 cursor-pointer bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h1 className="text-white text-md">IR A LA SERIE</h1>
                    </Link>
                </div>

                <div className="text-white">
                    <h1 className="text-[30px] text-white">Frieren: Más allá del final del viaje</h1>
                    <p className="text-gray-400"> <span className="text-[#2abdbb] mr-2">Serie</span>  sub | dob</p>
                    <span className="text-white">La maga Frieren formaba parte del grupo del héroe Himmel,
                        quienes derrotaron al Rey Demonio tras un viaje de 10 años y devolvieron la paz al reino.
                        Frieren es una elfa de más de mil años de vida, así que al despedirse de Himmel y
                        sus compañeros promete...
                    </span>
                    <div className="flex items-center justify-start mt-5">
                        <button className="flex items-center justify-center font-semibold bg-orange-500 hover:bg-[#ff944d] p-2 rounded-md text-black">
                            <IoPlayOutline size={20} />
                            COMENZAR A VER E1
                        </button>
                        <button className="flex items-center justify-center border font-semibold border-orange-500 text-orange-500 hover:border-[#ff944d] hover:text-[#ff944d] p-2 rounded-md ml-5">
                            <IoBookmarkOutline size={25} />
                            AÑADIR A FAVORITOS
                        </button>
                    </div>
                </div>
                
            </div>

            <div className="relative mb-10 grid grid-cols-2 items-center justify-center">
                <div className="relative group">
                    <Image
                        className="duration-300 cursor-pointer"
                        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/catalog/crunchyroll/e66d5a8f5167c8bc7a7fd5baa52961c5.jpg"
                        alt="Frieren-card"
                        width={600}
                        height={500}
                    />
                    <Link
                        href="https://www.crunchyroll.com/es/series/GG5H5XQ7D/kaiju-no-8"
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h1 className="text-white text-md cursor-pointer">IR A LA SERIE</h1>
                    </Link>
                </div>

                <div className="text-white">
                    <h1 className="text-[30px] text-white">Frieren: Más allá del final del viaje</h1>
                    <p className="text-gray-400"> <span className="text-[#2abdbb] mr-2">Serie</span>  sub | dob</p>
                    <span className="text-white">En un mundo repleto de criaturas conocidas como Kaijus,
                        Kafka Hibino siempre quiso ser parte del Cuerpo de Defensa. Junto a Mina Ashiro su amiga de la infancia,
                        prometen que ambos lograrán unirse, la vida los enviará por caminos m...
                    </span>
                    <div className="flex items-center justify-start mt-5">
                        <button className="flex items-center justify-center font-semibold bg-orange-500 hover:bg-[#ff944d] p-2 rounded-md text-black">
                            <IoPlayOutline size={20} />
                            COMENZAR A VER E1
                        </button>
                        <button className="flex items-center justify-center border font-semibold border-orange-500 text-orange-500 hover:border-[#ff944d] hover:text-[#ff944d] p-2 rounded-md ml-5">
                            <IoBookmarkOutline size={25} />
                            AÑADIR A FAVORITOS
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};