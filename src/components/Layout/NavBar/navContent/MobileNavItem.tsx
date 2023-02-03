import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { NavItem } from '../../../../data/nav';

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        as={Link}
        href={href}
        py={1}
        justify="space-between"
        textTransform="uppercase"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={500}
          color={useColorModeValue('brand.100', 'gray.200')}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

export default MobileNavItem;
