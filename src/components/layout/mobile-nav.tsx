import { navItems } from '@/data/nav';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '../ui/drawer';

export default function MobileNav() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <AiOutlineMenu className="w-4 h-4" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="w-full max-w-sm mx-auto">
          <div className="p-4 pb-0">
            {navItems.map(({ href, label }) => (
              <div className="flex flex-col gap-4" key={href}>
                <DrawerClose asChild>
                  <Link
                    href={href}
                    className="flex flex-row items-center justify-between py-1 font-medium uppercase hover:underline text-primary"
                  >
                    {label}
                  </Link>
                </DrawerClose>
              </div>
            ))}
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
