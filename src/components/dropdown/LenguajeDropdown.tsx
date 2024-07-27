'use client';

import React, { useState } from 'react';

interface Languages {
  code: string;
  name: string;
}

const languages: Languages[] = [
  { code: 'es', name: 'Español ( ES )' },
  { code: 'en', name: 'English ( US )' },
  { code: 'es', name: 'Español ( LT )' },
  { code: 'fr', name: 'Français ( FR )' },
  { code: 'SW', name: 'Portugues ( Portugal )' },
  { code: 'SW', name: 'Portugues ( Brasil )' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'PL', name: 'Polaco' },
  { code: 'SW', name: 'Suizo' },
];

export const LenguajeDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLanguage = (language: Languages) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-400 hover:bg-bg-navbar focus:outline-none focus:ring-2 focus:ring-offset-2"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {selectedLanguage.name}
        </button>
      </div>

      {isOpen && (
        <div className="origin-bottom-right absolute right-0 bottom-full mb-2 w-56 rounded-md shadow-lg bg-bg-navbar ring-1 ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((language) => (
              <button
                disabled
                key={language.code}
                onClick={() => selectLanguage(language)}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full text-left"
                role="menuitem"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};