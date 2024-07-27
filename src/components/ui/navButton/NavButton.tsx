'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loading } from '../..';

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
  title: string; 
}

export const NavButton: React.FC<NavButtonProps> = ({ to, children, title }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(to);
    }, 4000);
  };

  return (
    <>
      {loading && <Loading />}
      <button onClick={handleClick} className="text-gray-300 rounded">
        {children}
        {title}
      </button>
    </>
  );
};