import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import DesktopNav from './navContent/DesktopNav';
import MobileNav from './navContent/MobileNav';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top={0} zIndex={99} as="header" shadow="lg">
      <Flex
        minH="60px"
        bg={useColorModeValue('white', 'brand.700')}
        color={useColorModeValue('brand.700', 'brand.100')}
      >
        <Container as={Flex} maxW="7xl" align="center">
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Flex>

          <Flex
            flex={{ base: 1 }}
            justify={{ base: 'center', md: 'start' }}
            align="center"
          >
            <Image
              src={
                colorMode === 'light'
                  ? '/sagspot-logo.png'
                  : '/sagspot-logo-white.png'
              }
              alt="sagspot logo"
              width={150}
              height={41}
            />

            <DesktopNav />
          </Flex>

          <IconButton
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle Theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          />
        </Container>
      </Flex>

      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default NavBar;
