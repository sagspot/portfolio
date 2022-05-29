import {
  Box,
  Circle,
  Flex,
  Heading,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { MdMarkEmailUnread } from 'react-icons/md';
import { BsTelephoneOutboundFill } from 'react-icons/bs';

interface Props {
  content: string;
  href: string;
  icon: any;
}

const Card = ({ content, href, icon }: Props) => {
  return (
    <Link
      href={href}
      isExternal
      _hover={{
        textDecoration: 'none',
        shadow: '0 2px 7px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Flex
        justify="center"
        align="center"
        px={4}
        py={2}
        bg={useColorModeValue('red.100', 'blue.700')}
        rounded="base"
      >
        <Circle size={12} mr={2} bg="accent.100">
          <Icon as={icon} boxSize={5} />
        </Circle>
        {content}
      </Flex>
    </Link>
  );
};

const Contact = () => {
  return (
    <Box
      as="section"
      id="contact"
      px={[6, 8, 16]}
      py={[4, 6, 16]}
      bg={useColorModeValue('blackAlpha.50', 'brand.100')}
    >
      <Heading as="h2" size="md" textAlign="center">
        Contact Me
      </Heading>

      <Flex
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection={['column', 'row']}
      >
        <Card
          content="+254 703 215 696"
          href="tel:+254703215696"
          icon={BsTelephoneOutboundFill}
        />
        <Card
          content="hello@sagspot.co.ke"
          href="mailto:hello@sagspot.co.ke"
          icon={MdMarkEmailUnread}
        />
      </Flex>
    </Box>
  );
};

export default Contact;
