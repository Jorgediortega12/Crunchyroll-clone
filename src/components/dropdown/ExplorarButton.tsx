'use client';

import { useUIStore } from '@/store';
import { useState, useEffect, useRef } from 'react';
import { FaCaretDown } from 'react-icons/fa';


interface ExplorarProps {
  onClick?: () => void
}

export const ExplorarButton = ({ onClick }: ExplorarProps) => {
  const [showExplorarButton, setShowExplorarButton] = useState(false);

  const closeSideMenu = useUIStore(state => state.closeSideMenu);
  const openSideMenu = useUIStore(state => state.openSideMenu);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    if (showExplorarButton) {
      setShowExplorarButton(false);
      closeSideMenu();
    } else {
      setShowExplorarButton(true);
      openSideMenu();
    }
    if (onClick) onClick();
  };

  //funcion para dectectar click fuera del elemento especifico (referenciado por el dropdownRef). 
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowExplorarButton(false);
      closeSideMenu();
    }
  };

  useEffect(() => {
    if (showExplorarButton) {
      document.addEventListener('click', handleClickOutside);
      document.body.classList.add('dropdown-open');
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.body.classList.remove('dropdown-open');
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.classList.remove('dropdown-open');
    };
  }, [showExplorarButton]);

  return (
    <div className="relative inline-block z-50" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center gap-1 hover:bg-black transition-all duration-300 p-5"
          id="menu-button"
          aria-expanded={showExplorarButton}
          aria-haspopup="true"
          onClick={handleToggleDropdown}
        >
          Explorar
          <FaCaretDown className='mt-1' />
        </button>
      </div>

      {showExplorarButton && (
        <div
          className="origin-top-left absolute left-0 -mt-0.5 w-[800px] bg-black text-white p-4 shadow-lg"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className='grid grid-cols-4 gap-4 text-sm'>
            <div className='flex flex-col gap-2'>
              <span className='text-gray-400 p-2'>POPULAR</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Novedades</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Alfabético</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Temporada de Simulcasts</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Calendario de lanzamientos</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Videos musicales y conciertos</span>
            </div>

            <div className='flex flex-col gap-2 ml-2 mt-3'>
              <span className='text-gray-400'>GÉNEROS</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Acción</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Aventura</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Comedia</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Drama</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Fantasía</span>
            </div>

            <div className='flex flex-col gap-2 mt-10'>
              <span className='hover:bg-gray-700 rounded-md p-2'>Musical</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Romance</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Ciencia Ficción</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Seinen</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Shoujo</span>
            </div>

            <div className='flex flex-col gap-2 mt-10'>
              <span className='hover:bg-gray-700 rounded-md p-2'>Shounen</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Recuentos de la Vida</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Deportes</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Sobrenatural</span>
              <span className='hover:bg-gray-700 rounded-md p-2'>Thriller</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};