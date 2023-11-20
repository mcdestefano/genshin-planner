'use client';

import {
  UserGroupIcon,
  CalendarDaysIcon,
  ListBulletIcon,
  FolderIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import clsx from 'clsx';

// NOTE: Want to create custom inventory bag icon (and mabye the rest too) based on genshin
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Planner', href: '/dashboard', icon: CalendarDaysIcon },
  {
    name: 'Inventory',
    href: '/dashboard/inventory',
    icon: FolderIcon,
  },
  { name: 'Priorities', href: '/dashboard/priorities', icon: ListBulletIcon },
  { name: 'Characters', href: '/dashboard/characters', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-100 hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3" ,
              {
                'bg-blue-100 text-blue-500': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
