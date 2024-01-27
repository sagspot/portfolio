import { socialItems } from '@/data/nav';
import Link from 'next/link';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="relative z-10 py-2 sm:py-1 bg-slate-200 dark:bg-slate-900">
      <div className="container grid items-center grid-cols-1 gap-4 justify-items-center md:grid-cols-3 max-w-7xl">
        <Logo />

        <div className="flex items-center gap-4">
          {socialItems.map(({ href, label, ...rest }) => (
            <Link
              key={label}
              href={href}
              aria-label={`Open ${label}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <rest.icon className="w-8 h-8 p-2 rounded-full bg-primary-foreground/90 text-primary hover:bg-primary-foreground/70 hover:shadow-sm" />
            </Link>
          ))}
        </div>

        <p className="">
          &copy; {new Date().getFullYear()} Oliver Sagala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
