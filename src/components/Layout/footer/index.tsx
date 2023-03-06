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
import { socialItems } from '../../../data/nav';

const Footer = () => {
  const bg = useColorModeValue('brand.100', 'brand.300');
  return (
    <Box as="footer" position="relative" px={8} py={[2, 1]} bg={bg} zIndex={1}>
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
          {socialItems.map(({ icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={`Open ${label}`}
              isExternal
            >
              <Circle size={8} color={bg} bg="brand.10">
                <Icon as={icon} boxSize={4} />
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
