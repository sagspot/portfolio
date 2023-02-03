import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { navItems } from '../../../../data/nav';

const DesktopNav = () => {
  const linkColor = useColorModeValue('brand.100', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  return (
    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
      <Stack direction={'row'} spacing={4}>
        {navItems.map((navItem) => (
          <Box key={navItem.label}>
            <Text
              as={Link}
              href={navItem.href}
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
            </Text>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

export default DesktopNav;
