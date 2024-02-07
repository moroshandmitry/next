'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import {
  HomeModernIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Dashboard', href: 'dashboard', icon: HomeModernIcon },
  {
    name: 'Invoices',
    href: 'dashboard/invoices',
    icon: ClipboardDocumentListIcon,
  },
];

const NavLinks: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const { icon: LinkIcon, name, href } = link;

        return (
          <Link
            key={name}
            href={href}
            className={clsx(
              'text-wh flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-neutral-900 p-3 text-sm font-medium text-white hover:bg-neutral-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-neutral-600': pathname === href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
