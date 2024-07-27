'use client';

import Image from 'next/image';
import { ExplorarButton, NoticeButton, Premium, UserFree, UserPremium } from '../..';
import { useSession } from 'next-auth/react';
import { IoIosSearch } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useState } from 'react';
import { useUIStore } from '@/store';

export const Navbar = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeSideMenu = useUIStore(state => state.closeSideMenu);

  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleOverlayClick = () => closeSideMenu();

  return (
    <main className="bg-bg-navbar h-16 relative z-40">
      <header className="flex items-center h-full px-8">

        {/* Background black and blur */}
        {isSideMenuOpen && (
          <>
            <div
              className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-50'
              onClick={handleOverlayClick}
            />
            <div
              className='fade-in fixed top-0 left-0 w-screen h-screen z-20 backdrop-filter backdrop-blur-sm'
              onClick={handleOverlayClick}
            />
          </>
        )}

        <div className="flex items-center space-x-8 z-50">
          <Image src="/img/Crunchyroll.png" priority alt="Logo-principal" width={150} height={50} />

          <nav className="flex items-center">
            <div className='flex items-center transition-all duration-300 text-gray-300'>
              <ExplorarButton />
            </div>

            <div className="flex items-center hover:bg-black p-5 transition-all z-50 duration-300 text-gray-300">
              <Link href="https://www.crunchyroll.com/es/games/">
                Juegos
              </Link>
            </div>

            <div className='flex items-center hover:bg-black p-5 transition-all duration-300 text-gray-300'>
              <NoticeButton />
            </div>
          </nav>
        </div>

        {/* Botones para el acceso premium y cuenta */}
        <div className="hover:bg-black ml-auto gap-1 items-center text-gray-300">
          {isAuthenticated ? null : (
            <>
              <Premium />
            </>
          )}
        </div>

        <div className="flex items-center text-gray-300 mr-16 h-full">
          <div className='flex-grow hover:bg-black transition-all duration-300 flex justify-center p-[12%] relative z-50'>
            <IoIosSearch size={25} />
          </div>
          <div className='hover:bg-black transition-all duration-300 flex-grow flex justify-center p-5 h-full relative z-50'>
            <IoBookmarkOutline size={25} />
          </div>

          {isAuthenticated ? <UserPremium /> : <UserFree />}
        </div>
      </header> 
    </main>
  );
};