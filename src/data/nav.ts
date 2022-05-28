import { ImGithub } from 'react-icons/im';
import { RiLinkedinFill } from 'react-icons/ri';

export interface NavItem {
  label: string;
  href?: string;
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

interface SocialItems {
  label: string;
  href: string;
  icon: any;
}

export const socialItems: SocialItems[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sagspot',
    icon: RiLinkedinFill,
  },
  {
    label: 'Github',
    href: 'https://github.com/sagspot',
    icon: ImGithub,
  },
];
