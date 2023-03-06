import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { navItems } from '../../../../data/nav';

const DesktopNav = () => {
  const linkColor = useColorModeValue('brand.700', 'brand.100');
  const linkHoverColor = useColorModeValue('brand.400', 'white');
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
              _hover={{ color: linkHoverColor, textDecoration: 'underline' }}
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
