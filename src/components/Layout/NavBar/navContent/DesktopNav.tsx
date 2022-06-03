import { useColorModeValue, Stack, Box, Link, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { navItems } from '../../../../data/nav';

const DesktopNav = () => {
  const linkColor = useColorModeValue('brand.100', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  return (
    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
      <Stack direction={'row'} spacing={4}>
        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <NextLink href={navItem.href} passHref>
              <Link
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                textTransform="uppercase"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </NextLink>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

export default DesktopNav;
