'use client';

import { useEffect, useRef, useState } from 'react';
import { logout } from '@/action';
import Image from 'next/image';
import Link from 'next/link';

import {
  FaCaretDown, FaRegBookmark,
} from 'react-icons/fa';
import { LuPencil } from 'react-icons/lu';
import {
  TbCrown, TbClockHour9, TbLogout2,
} from 'react-icons/tb';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import {
  IoIosList, IoIosSettings, IoMdNotificationsOutline,
} from 'react-icons/io';
import { IoGiftOutline } from 'react-icons/io5';
import { useUIStore } from '@/store';

export const UserPremium = () => {
  const [showUserPremium, setShowUserPremium] = useState(false);
  const { closeSideMenu, openSideMenu } = useUIStore(state => ({
    closeSideMenu: state.closeSideMenu,
    openSideMenu: state.openSideMenu,
  }));

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  const handleToggleDropdown = () => {
    setShowUserPremium(prev => {
      if (prev) {
        closeSideMenu();
      } else {
        openSideMenu();
      }
      return !prev;
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowUserPremium(false);
      closeSideMenu();
    }
  };

  useEffect(() => {
    if (showUserPremium) {
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
  }, [showUserPremium]);

  const menuItems = [
    { icon: <LiaExchangeAltSolid size={25} className="text-gray-300" />, text: 'Cambiar perfil', href: '/profile' },
    { icon: <IoIosSettings size={25} className="text-gray-300" />, text: 'Opciones' },
    { icon: <FaRegBookmark size={25} className="text-gray-300" />, text: 'Favoritos' },
    { icon: <IoIosList size={25} className="text-gray-300" />, text: 'Crunchylistas' },
    { icon: <TbClockHour9 size={25} className="text-gray-300" />, text: 'Historial' },
    { icon: <IoMdNotificationsOutline size={25} className="text-gray-300" />, text: 'Notificaciones' },
    { icon: <IoGiftOutline size={25} className="text-gray-300" />, text: 'Tarjeta regalo' },
    {
      icon: <TbLogout2 size={25} className="text-gray-300" />,
      text: 'Desconectar',
      onClick: handleLogout,
    },
  ];

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex items-center justify-center p-5 h-full text-sm font-medium text-white hover:bg-black transition-all duration-300 focus:outline-none"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={handleToggleDropdown}
      >
        <Image className='rounded-full' src="/img/asta.png" alt='asta-user' width={30} height={30} />
        <FaCaretDown className='ml-2' />
      </button>

      {showUserPremium && (
        <div
          className="origin-top-right absolute right-0 w-72 shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-2 px-4" role="none">
            <div className='flex items-center space-x-3 mb-3 gap-3 mt-2 hover:bg-gray-700 cursor-pointer rounded-md'>
              <Image src="/img/asta.png" width={50} height={50} alt='asta-user' className="rounded-full" />
              <div className="flex flex-col">
                <p className="text-white">name</p>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <TbCrown size={20} />
                  <span className="text-sm">Miembro Premium</span>
                </div>
              </div>
              <LuPencil className="text-gray-400 hover:text-gray-300 cursor-pointer" />
            </div>

            <Link href="https://www.crunchyroll.com/es/premium?referrer=newweb_organic_acct_menu&return_url=https%3A%2F%2Fwww.crunchyroll.com%2Fes%2Fredeem#plans">
              <button className="w-full mt-2 p-2 text-center text-sm rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600">
                PRUEBA GRATUITA DE 7 DÍAS
              </button>
            </Link>

            <div className="mt-3 border-t border-gray-700 pt-3 space-y-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center justify-start gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer'
                  onClick={item.onClick}
                >
                  {item.icon}
                  {item.href ? (
                    <Link href={item.href} className="text-gray-300">{item.text}</Link>
                  ) : (
                    <span className="text-gray-300">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};