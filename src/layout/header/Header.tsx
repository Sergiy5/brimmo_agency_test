'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UserMenu from '@/layout/header/headerComponents/UserMenu';

import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton';
import { InputSearch } from '@/components/ui/InputSearch';

export const Header: React.FC = () => {
  // const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  // const toggleApplicationMenu = () => {
  //   setApplicationMenuOpen(!isApplicationMenuOpen);
  // };
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
  //       event.preventDefault();
  //       inputRef.current?.focus();
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  return (
    <header className="flex w-full">
      <div className="flex w-full items-center justify-between lg:flex-row py-3.5 pr-4">
        
          <div className="hidden lg:block">
            <InputSearch />
          </div>
      
          {/* <!-- User Area --> */}
          <UserMenu />
      </div>
    </header>
  );
};
