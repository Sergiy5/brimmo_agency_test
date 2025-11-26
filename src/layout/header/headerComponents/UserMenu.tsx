'use client';

import Image from 'next/image';
import { ThemeToggleButton } from '@/components/ui/ThemeToggleButton';
import IconBell from '@/assets/icons/bell.svg';
import ButtonOrLink from '@/components/ui/ButtonOrLink';
import { useTheme } from '@/context/ThemeContext';

export default function UserMenu() {
  const { theme } = useTheme()

  const isDark = theme === 'dark';

  return (
    <div className="relative flex gap-3">
      <ButtonOrLink variant={isDark ? 'ghost' : 'primary'}>
        <IconBell className="size-5 dark:text-white" />
      </ButtonOrLink>
      <ThemeToggleButton />

      <button className="dropdown-toggle flex items-center text-gray-700 dark:text-gray-400">
        <span className="mr-3 h-11 w-11 overflow-hidden rounded-full">
          <Image width={44} height={44} src="/images/user.webp" alt="User" />
        </span>
      </button>
    </div>
  );
}
