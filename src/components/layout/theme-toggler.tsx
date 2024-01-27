'use client';

import { cn } from '@/lib/utils';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();

  const themeButtonClass = 'h-[1.2rem] w-[1.2rem] hidden';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className={cn(themeButtonClass, theme === 'light' && 'block')} />
          <Moon className={cn(themeButtonClass, theme === 'dark' && 'block')} />
          <Laptop
            className={cn(themeButtonClass, theme === 'system' && 'block')}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggler;
