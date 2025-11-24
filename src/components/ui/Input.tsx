import React, { useState } from 'react';
import { IconSearch } from '@/assets/icons';
import { cn } from '@/utils/cn';

export const Input = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={cn(
          'relative h-[46px] transition-all duration-400 ease-out',
          isFocused ? 'w-[280px]' : 'w-[46px] hover:w-[280px]',
        )}
      >
        <input
          type="text"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            'h-full w-full rounded-full bg-white pl-5',
            'text-base shadow-lg transition-all duration-400 outline-none',
            'placeholder:text-gray-400 placeholder:transition-opacity placeholder:delay-200 placeholder:duration-200',
            isFocused
              ? 'placeholder:opacity-100'
              : 'overflow-hidden placeholder:opacity-0 hover:placeholder:opacity-100',
          )}
        />
        <div className="pointer-events-none absolute rounded-full top-0 right-0 flex size-[46px] items-center justify-center bg-white">
          <IconSearch
            className={cn(
              'h-5 w-5 text-black transition-transform duration-300',
              isFocused && 'rotate-90',
            )}
          />
        </div>
      </div>
    </div>
  );
};
