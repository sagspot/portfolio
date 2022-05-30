import {
  Box,
  Circle,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { socialItems } from '../../../data/nav';

const Footer = () => {
  const bg = useColorModeValue('brand.100', 'brand.300');
  return (
    <Box bg={bg} px={8} py={[2, 1]} as="footer">
      <Stack
        spacing={4}
        direction={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Image
            src="/sagspot-logo-white.png"
            alt="sagspot logo"
            width={150}
            height={41}
          />
        </Box>

        <HStack spacing={4}>
          {socialItems.map((item) => (
            <Link key={item.label} href={item.href} isExternal>
              <Circle size={8} color={bg} bg="brand.10">
                <Icon as={item.icon} boxSize={4} />
              </Circle>
            </Link>
          ))}
        </HStack>

        <Text color="brand.10">
          &copy; {new Date().getFullYear()} Oliver Sagala. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;