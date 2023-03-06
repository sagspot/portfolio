import {
  Box,
  Container,
  Flex,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
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
              icon={<Icon as={isOpen ? VscClose : AiOutlineMenu} boxSize={4} />}
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
            icon={<Icon as={colorMode === 'light' ? BsFillMoonFill : FiSun} />}
            // icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          />
        </Container>
      </Flex>

      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default NavBar;
