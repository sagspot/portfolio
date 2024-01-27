import { ImGithub } from 'react-icons/im';
import { RiLinkedinFill } from 'react-icons/ri';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/#home',
  },
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Portfolio',
    href: '/#portfolio',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
];

export const socialItems = [
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
