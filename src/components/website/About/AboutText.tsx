import {
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { GoFilePdf } from 'react-icons/go';

type Props = {};

const AboutText = (props: Props) => {
  return (
    <Flex direction="column">
      <Heading as="h2" size="md">
        About Me
      </Heading>

      <Text mt={6}>
        I am a professional self-taught software developer based in Nairobi,
        Kenya. I create beautiful professional websites using best practice
        accessibility. I enjoy turning complex problems into simple, beautiful
        and intuitive interface designs. I create professional graphic designs
        including but not limited to logos and posters. I am passionate about
        transforming lives through tech. I believe tech should ultimately make
        life easier
      </Text>

      <NextLink href="/docs/oliver-resume.pdf" download>
        <Link mt={4}>
          <Button bg="accent.100" _hover={{ bg: 'accent.50' }}>
            <Icon as={GoFilePdf} mr={2} boxSize={4} />
            Download my Resume
          </Button>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default AboutText;
