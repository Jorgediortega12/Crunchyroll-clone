'use client';

import { useUIStore } from '@/store';
import { useEffect, useRef, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

export const NoticeButton = () => {
  const [showNoticeButton, setShowNoticeButton] = useState(false);
  const dropdownref = useRef<HTMLDivElement>(null);

  const closeSideMenu = useUIStore(state => state.closeSideMenu);
  const openSideMenu = useUIStore(state => state.openSideMenu);

  const handleToggleDropdown = () => {
    if (showNoticeButton) {
      setShowNoticeButton(false);
      closeSideMenu();
    } else {
      setShowNoticeButton(true);
      openSideMenu();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownref.current && !dropdownref.current.contains(event.target as Node)) {
      setShowNoticeButton(false);
      closeSideMenu();
    }
  };

  useEffect(() => {
    if (showNoticeButton) {
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
  }, [showNoticeButton]);

  return (
    <div className="relative inline-block text-left z-50" ref={dropdownref}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleToggleDropdown}
        >
          Noticias
          <FaCaretDown className='mt-1 ml-1' />
        </button>
      </div>

      {showNoticeButton && (
        <div
          className="origin-top-left absolute -left-7 mt-5 m-2 w-64 bg-black grid grid-cols"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className='flex items-center text-sm'>
            <div className="py-2 m-4 flex flex-col gap-4" role="none">
              <div className='p-2 h-full'>
                <span className='hover:bg-gray-600 rounded-md cursor-pointer p-2 h-full'>Todas las noticias</span>
              </div>

              <div className='p-2 h-full'>
                <span className='hover:bg-gray-600 rounded-md cursor-pointer p-2 h-full'>Animes Awards</span>
              </div>

              <div className='p-2 h-full'>
                <span className='hover:bg-gray-600 rounded-md cursor-pointer p-2 h-full'>Eventos y experiencias</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};