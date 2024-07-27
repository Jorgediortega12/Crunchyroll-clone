'use client'

import React, { useState } from 'react';
import { TbCrown } from 'react-icons/tb';

export const Premium = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleToggleEnter = () => setShowDropdown(true);
    const handleToggleLeave = () => setShowDropdown(false)

    return (
        <div className="relative inline-block text-left z-50">
            <div className="flex items-center justify-center w-full p-4 hover:bg-black cursor-pointer" onMouseEnter={handleToggleEnter} onMouseLeave={handleToggleLeave}>
                <span className="mr-2">
                    <TbCrown size={25} color='orange' />
                </span>
                <div className="flex flex-col text-[10px]">
                    <span className='text-yellow-500'>PROBAR GRATIS</span>
                    <span>PREMIUM</span>
                </div>
            </div>

            {showDropdown && (
                <div
                    className="origin-top-center transition-all duration-300 absolute -left-28  m-2 w-80 shadow-lg bg-black"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                    <div className="py-2 ml-2 flex flex-col">
                        <div className='flex flex-col text-center'>
                            <div className='flex items-center justify-center'>
                                <TbCrown size={25} color='white' />
                                <p className="px-4 py-2 text-md text-white">Prueba gratuita por 7 días</p>
                            </div>
                            <span className="px-4 text-md text-white text-sm">El acceso Premium incluye animes ilimitados,
                                sin publicidad y nuevos episodios poco después de su transmisión en Japón. !Pruébalo ya¡
                            </span >
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
