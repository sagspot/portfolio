import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import DesktopNav from './navContent/DesktopNav';
import MobileNav from './navContent/MobileNav';
import AuthContent from './authContent';
import Image from 'next/image';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        align="center"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
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

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={0}
        >
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          <AuthContent />
        </Stack>
      </Flex>

      <MobileNav isOpen={isOpen} />
    </Box>
  );
};

export default NavBar;
