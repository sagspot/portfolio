import { socialItems } from '@/data/nav';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 py-2 sm:py-1 bg-primary">
      <div className="container grid items-center grid-cols-1 gap-4 justify-items-center md:grid-cols-3 max-w-7xl">
        <Image
          src="/logo-white.png"
          alt="sagspot logo"
          width={150}
          height={41}
        />

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

        <p className="text-primary-foreground">
          &copy; {new Date().getFullYear()} Oliver Sagala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
