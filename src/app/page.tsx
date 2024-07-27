import { AnimeGrid, CardAnime, Footer, FooterFinal, FreeCardAnime, Navbar, SwiperFooter, SwiperPrincipal } from "@/components";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      {/*Swiper Principal */}
      <SwiperPrincipal />
      
      {/*Card de animes recomendados */}
      <div className="mr-10 ml-10 mt-3 mb-5">
        <p className="text-white text-[2rem]">Ponte al día antes de las nueva temporada</p>
        <span className="text-[#656565]">¡Comienza el maratón antes de que se estrene las nuevas temporadas!</span>
      </div>
      <div className="ml-10 mr-10">
        <AnimeGrid />
      </div>

      {/*Card de animes gratis */}
      <div className="mr-10 ml-10 mt-3 mb-5">
        <p className="text-white text-[2rem]">¡Anime que puedes mirar gratis!</p>
        <span className="text-[#656565]">¡Disfruta aquí de algunos de nuestros títulos más populares!</span>
      </div>
      <div className="ml-10 mr-10">
        <FreeCardAnime />
      </div>

      {/*Card */}
      <div className="p-10 mt-10 cursor-pointer">
        <Link href="https://www.crunchyroll.com/es/series/GYQ43P3E6/black-butler?utm_source=cap_cr&utm_medium=standard_banner_2&utm_campaign=black-butler_la&referrer=cap_cr_standard_banner_2_black-butler_la">
          <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1350/cr/desktop_large/c62f02ee-465a-498f-a15e-827e249e1951.png" alt="image-content" />
        </Link>
      </div>

      {/*CardAnimes */}
      <div className="p-10">
        <CardAnime />
      </div>

      {/*SwiperFooter */}
      <div className="mr-10 ml-10 mt-3 mb-5">
        <p className="text-white text-[2rem]">¡Compañeros de confianza y muuuuy tiernitos!</p>
        <span className="text-[#656565]">¡Nuestros mejores amigos!</span>
      </div>
      <div className="ml-10 mr-10">
        <SwiperFooter />
      </div>

      {/*Footer de la aplicacion principal */}
      <Footer />
      <div className="mt-20 flex items-center justify-center text-sm">
        <FooterFinal />
      </div>
    </main>
  )
}