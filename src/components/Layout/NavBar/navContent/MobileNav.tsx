import { Collapse, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { navItems } from '../../../../data/nav';
import MobileNavItem from './MobileNavItem';

const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}
      >
        {navItems.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </Collapse>
  );
};

export default MobileNav;
