'use client';

import { Logo } from "@/components/ui/Logo";
import ButtonOrLink from "@/components/ui/ButtonOrLink";
import {
  IconLogout,
  IconReceipt,
  IconSwitch,
  IconShop,
  IconMarker,
  IconHome,
  IconPackage,
} from '@/assets/icons';

export const ICONS: Record<string, React.ElementType> = {
  IconHome,
  IconPackage,
  IconMarker,
  IconShop,
  IconSwitch,
  IconReceipt,
};

type NavItem = {
  name: string;
  icon: string;
  path?: string;
  subItems?: { name: string; path: string;}[];
};

const navItems: NavItem[] = [
  {
    icon: 'IconHome',
    name: 'Home',
    subItems: [{ name: 'Home', path: '/' }],
  },
  {
    icon: 'IconPackage' ,
    name: 'Forecasting',
    path: '/forecasting',
  },
  {
    icon: 'IconMarker',
    name: 'Marker',
    path: '/marker',
  },
  {
    icon: 'IconShop',
    name: 'Shop',
    path: '/shop',
  },
  {
    icon: 'IconSwitch',
    name: 'Switch',
    path: '/basic-tables',
  },
  {
    icon: 'IconReceipt',
    name: 'Receipe',
    path: '/blank',
  },
];


export const Sidebar: React.FC = () => {
  return (
    <aside className="flex min-h-full w-[74px] flex-col justify-between p-3">
      <Logo />
      <ul className="dark:bg-blue/25 flex flex-col items-start justify-between gap-0.5 rounded-full bg-black/5 p-0.5">
        {navItems.map((item, index) => {
          const IconItem = ICONS[item.icon];
          return (
            <li key={index} className="flex items-center justify-center">
              <ButtonOrLink href={item.path} aria-label={item.name} variant="ghost">
                <IconItem className="size-5 dark:text-white" />
              </ButtonOrLink>
            </li>
          );
        })}
      </ul>
      <ButtonOrLink>
        <IconLogout className={'size-5 dark:text-white'} />
      </ButtonOrLink>
    </aside>
  );
};
