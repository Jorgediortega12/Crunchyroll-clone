'use client'

import { useUIStore } from '@/store';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaRegUser } from 'react-icons/fa';

export const UserFree = () => {
  const [showUserFree, setShowUserFree] = useState(false);

  const closeSideMenu = useUIStore(state => state.closeSideMenu);
  const openSideMenu = useUIStore(state => state.openSideMenu);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    if (showUserFree) {
      setShowUserFree(false);
      closeSideMenu();
    } else {
      setShowUserFree(true);
      openSideMenu();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowUserFree(false);
      closeSideMenu();
    }
  };

  useEffect(() => {
    if (showUserFree) {
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
  }, [showUserFree]);

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full p-5 hover:bg-black"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleToggleDropdown}
        >
          <FaRegUser size={20} />
        </button>
      </div>

      {showUserFree && (
        <div
          className="origin-top-right absolute -right-2 -mt-0.5 m-2 w-80 shadow-lg bg-black"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-2 ml-2 mr-2 flex flex-col" role="none">
            <Link href="/auth/new-account" className='flex flex-col hover:bg-gray-900'>
              <p className="px-4 py-2 text-md text-gray-300">Crear cuenta</p>
              <span  className="px-4 text-md text-gray-500">Suscríbete gratis o hazte Premium.</span >
            </Link>

            <Link href="/auth/login" className='flex flex-col hover:bg-gray-900'>
              <p className="px-4 py-2 mt-4 text-md text-gray-300">Acceder</p>
              <span className="px-4 text-md text-gray-500">¿Ya eres miembro de Crunchyroll? Te damos la bienvenida.</span>
            </Link>

            <Link href="/auth/login" className='hover:bg-gray-900'>
              <div className="px-4 py-2 mt-4 text-md text-gray-300">Tarjeta regalo</div>
              <div className="px-4 text-md text-gray-500">¿Tienes una tarjeta regalo? Canjéala aquí.</div>
            </Link>

            <Link href="https://www.crunchyroll.com/es/premium?referrer=newweb_organic_acct_menu&return_url=https%3A%2F%2Fwww.crunchyroll.com%2Fes%2Fredeem#plans">
              <button className="w-full mt-5 p-2 mb-4 text-center text-sm rounded-md text-gray-300 bg-yellow-600 hover:bg-yellow-700">
                PRUEBA GRATUITA DE 7 DÍAS
              </button>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};