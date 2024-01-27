import { navItems } from '@/data/nav';
import Link from 'next/link';
import Logo from './logo';
import MobileNav from './mobile-nav';
import ThemeToggler from './theme-toggler';

export default function Header() {
  return (
    <header className="sticky top-0 z-[99] shadow-lg">
      <div className="flex min-h-[60px] bg-white dark:bg-slate-900 text-primary dark:text-white">
        <div className="container flex items-center justify-between max-w-7xl">
          <MobileNav />

          <Logo />

          <div className="hidden md:flex">
            <div className="flex gap-4">
              {navItems.map(({ href, label }) => (
                <div key={label}>
                  <Link
                    href={href}
                    className="p-2 text-sm font-semibold uppercase hover:underline text-primary dark:hover:text-white"
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}
