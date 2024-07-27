'use client';


import { Virtual, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';
import { recomendationAnimes } from '@/seed/seed';

export const SwiperFooter = () => {
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation]}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        navigation={true}
        virtual
      >
        {recomendationAnimes.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className='relative'>
              <div className='relative group'>
                <img
                  className='w-full h-auto object-cover rounded-lg'
                  src={slide.image}
                  alt={`Imagen de ${slide.subtitle}`}
                />

                {/*Hover */}
                <div className='absolute cursor-pointer inset-0 text-[13px] bg-black bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='p-2 flex flex-col gap-1'>
                    <p className='text-white text-md'>{slide.titleHover}</p>
                    <p className='text-white flex items-center'>{slide.ratingHover} <span className='ml-1'><FaStar /></span> </p>
                    <span className='text-gray-400'>{slide.seasonHover} Temporada</span>
                    <span className='text-white'>{slide.descriptionHover}</span>
                  </div>
                </div>

              </div>
              <div className="mt-3 text-white text-sm">{slide.title}</div>
              <p className="text-[#656565] text-sm mt-2">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}