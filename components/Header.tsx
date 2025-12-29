'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navItems } from '@/constants';

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
          <Image src="/logo.svg" alt="CoinPulse logo" width={132} height={40} />
        </Link>

        <nav>
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={cn('nav-link', { 'is-active': pathname === '/', 'is-home': true })}
            >
              {label}
            </Link>
          ))}

          {/*<p>Search</p>*/}

          {/*<Link href="/coins" className={cn('nav-link', { 'is-active': pathname === '/coins' })}>*/}
          {/*  All Coins*/}
          {/*</Link>*/}
        </nav>
      </div>
    </header>
  );
};
export default Header;
