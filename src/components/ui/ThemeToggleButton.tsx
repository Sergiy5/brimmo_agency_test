import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { IconMoon, IconSun } from '@/assets/icons';
import ButtonOrLink from './ButtonOrLink';


export const ThemeToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <ButtonOrLink
      onClick={toggleTheme}
      >
      {/* className="" */}
      <IconMoon className="hidden size-5 dark:block dark:text-white/80" />
      <IconSun className="size-5 dark:hidden" />
    </ButtonOrLink>
  );
};
