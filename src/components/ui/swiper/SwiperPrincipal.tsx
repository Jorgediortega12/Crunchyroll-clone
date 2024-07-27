'use client';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Parallax, Navigation, Autoplay } from 'swiper/modules';
import { FaRegBookmark } from 'react-icons/fa';
import { PrincipalSwiper } from '@/seed/seed';

export const SwiperPrincipal = () => {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true} 
        navigation={true} 
        modules={[Parallax, Navigation, Autoplay]}
        className="mySwiper"
        spaceBetween={50}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{ width: '100%', height: '690px' }} // Ajuste del ancho y alto
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          style={{ backgroundImage: 'url(path/to/your/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        {PrincipalSwiper.map((anime, index) => (
          <SwiperSlide key={index} style={{ position: 'relative' }}>
            <img
              src={anime.image} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            />
            <div style={{ position: 'absolute', color: 'white', textAlign: 'left', left: '5%', top: '55%', transform: 'translateY(-50%)', maxWidth: '40%' }}>
              <div className="title" data-swiper-parallax="-300" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                <img src={anime.logo} alt="logo" style={{ width: '55%'}} />
              </div>
              <div className="subtitle" data-swiper-parallax="-200" style={{ fontSize: '15px', marginTop: '10px', color: 'gray' }}>
                {anime.dubbing}
              </div>
              <div className="text" data-swiper-parallax="-100" style={{ fontSize: '15px', marginTop: '10px' }}>
                <p>{anime.subtitle}</p>
              </div>
              <div className='flex items-start justify-start gap-4 mt-7'>
                <button className='bg-[#f47521] hover:bg-[#ff944d] text-sm font-semibold text-black rounded-sm p-3'>
                   COMENZAR A VER E1
                </button>
                <button className='bg-transparent border-2 rounded-md border-orange-600 hover:border-[#dadada] p-[2.2%]'>
                  <FaRegBookmark color='orange' />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};