import { Stack, Flex, useColorModeValue, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { NavItem } from '../../../../data/nav';

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <NextLink href={href} passHref>
        <Flex
          py={1}
          as={Link}
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
      </NextLink>
    </Stack>
  );
};

export default MobileNavItem;
