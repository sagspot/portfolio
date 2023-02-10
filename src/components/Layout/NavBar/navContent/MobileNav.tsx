import { Collapse, Stack, useColorModeValue } from '@chakra-ui/react';
import { navItems } from '../../../../data/nav';
import MobileNavItem from './MobileNavItem';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen,onClose }: Props) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}
      >
        {navItems.map((navItem) => (
          <MobileNavItem key={navItem.label} onClose={onClose} {...navItem} />
        ))}
      </Stack>
    </Collapse>
  );
};

export default MobileNav;
