import {
  IconLogout,
  IconReceipt,
  IconSwitch,
  IconShop,
  IconMarker,
  IconHome,
  IconPackage,
} from '@/assets/icons';
import ButtonOrLink from '@/components/ui/ButtonOrLink';

export const ICONS: Record<string, React.ElementType> = {
  IconHome,
  IconPackage,
  IconMarker,
  IconShop,
  IconSwitch,
  IconReceipt,
};
export const Navigation: React.FC = () => {
  type NavItem = {
    name: string;
    icon: string;
    path?: string;
    subItems?: { name: string; path: string }[];
  };

  const navItems: NavItem[] = [
    {
      icon: 'IconHome',
      name: 'Home',
      subItems: [{ name: 'Home', path: '/' }],
    },
    {
      icon: 'IconPackage',
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

  return (
    <div className="relative md:fixed flex h-full lg:h-full flex-row-reverse items-center justify-between md:flex-col">
      <ul className="flex items-start justify-between gap-0.5 rounded-full bg-gray-100 p-0.5 md:sticky md:top-60 md:flex-col md:bg-black/5 lg:top-52 xl:top-46 dark:bg-black dark:md:bg-white/5">
        {navItems.map((item, index) => {
          const isActive = index === 1;
          const IconItem = ICONS[item.icon];
          return (
            <li key={index} className="flex items-center justify-center">
              <ButtonOrLink
                href={item.path}
                aria-label={item.name}
                isActive={isActive}
                variant="ghost"
              >
                <IconItem className="size-5 dark:text-white" />
              </ButtonOrLink>
            </li>
          );
        })}
      </ul>
      <div className="rounded-full bg-gray-100 md:sticky md:bottom-4 dark:bg-black">
        <ButtonOrLink variant="ghost">
          <IconLogout className={'size-5 dark:text-white'} />
        </ButtonOrLink>
      </div>
      <div className="absolute -z-10 inset-0 blur-[15px] bg-white md:hidden"></div>
    </div>
  );
};
