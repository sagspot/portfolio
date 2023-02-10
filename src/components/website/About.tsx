import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { GoFilePdf } from 'react-icons/go';
import { stacks } from '../../data/stacks';

const About = ({ resume }: { resume: string }) => {
  return (
    <Box as="section" id="about" my={[6, 8, 10]} px={[6, 8, 16]} py={[4, 6, 8]}>
      <SimpleGrid columns={[1, null, 2]} spacing={[8, null, 32]}>
        <Flex direction="column">
          <Heading as="h2" size="md">
            About Me
          </Heading>

          <Text mt={6}>
            I am a professional self-taught software developer based in Nairobi,
            Kenya. I create beautiful professional websites using best practice
            accessibility. I enjoy turning complex problems into simple,
            beautiful and intuitive interface designs. I create professional
            graphic designs including but not limited to logos and posters. I am
            passionate about transforming lives through tech. I believe tech
            should ultimately make life easier
          </Text>

          <Box>
            <Button
              as={Link}
              href={resume}
              mt={4}
              bg="accent.100"
              _hover={{ bg: 'accent.50' }}
              download
            >
              <Icon as={GoFilePdf} mr={2} boxSize={4} />
              Download my Resume
            </Button>
          </Box>
        </Flex>

        <SimpleGrid columns={5} spacing={3}>
          {stacks.map((stack) => (
            <Image
              key={stack.name}
              src={stack.icon}
              alt={stack.name}
              width={50}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default About;
