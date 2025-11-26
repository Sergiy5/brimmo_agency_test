import IconPackage from '@/assets/icons/package.svg';
import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="rounded-full bg-gray-900 p-[13px] dark:bg-white">
        <IconPackage className="size-6 text-white dark:text-black" />
      </div>
    </Link>
  );
};
