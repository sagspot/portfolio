import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { NavItem } from '../../../../data/nav';

interface Props extends NavItem {
  onClose: () => void;
}

const MobileNavItem = ({ label, href, onClose }: Props) => {
  return (
    <Stack spacing={4}>
      <Flex
        as={Link}
        href={href}
        py={1}
        justify="space-between"
        textTransform="uppercase"
        align="center"
        onClick={onClose}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={500}
          color={useColorModeValue('brand.700', 'brand.100')}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

export default MobileNavItem;
