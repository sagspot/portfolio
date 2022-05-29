import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { CgMoreO } from 'react-icons/cg';
import { VscGithubAlt } from 'react-icons/vsc';

type Props = {};

const Portfolio = (props: Props) => {
  const portfolio = [{}, {}, {}];
  return (
    <Box
      as="section"
      px={[6, 8, 16]}
      py={[4, 6, 16]}
      bg={useColorModeValue('blackAlpha.50', 'brand.100')}
    >
      <Heading as="h2" size="md" textAlign="center">
        My Portfolio
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={8}>
        {portfolio.map((project, i) => (
          <Flex
            direction="column"
            align="center"
            key={i}
            p={6}
            mt={16}
            rounded="base"
            shadow="0 0 8px 1px rgba(0,0,0,0.25)"
            role="group"
          >
            <Box
              w="80%"
              h={135}
              mt="-16"
              rounded="base"
              border="8px solid"
              borderColor="white"
              overflow="hidden"
              shadow="0 0 8px 1px rgba(0,0,0,0.25)"
              transition="all .15s ease-in-out"
              _groupHover={{ borderWidth: '2px' }}
            >
              <Box
                position="relative"
                rounded="base"
                w="100%"
                h="100%"
                overflow="hidden"
                transition="all .15s ease-in-out"
                _groupHover={{ transform: 'scale(1.05)' }}
              >
                <Image
                  src="/images/portfolio-website.jpg"
                  alt="ps"
                  objectFit="cover"
                  layout="fill"
                  draggable={false}
                />
              </Box>
            </Box>

            <Flex direction="column" mt={4}>
              <Heading as="h3" size="sm">
                Project 1
              </Heading>

              <Text mt={1}>Stack used</Text>

              <ButtonGroup spacing={4} mt={4}>
                <Link href="https://www.google.com" isExternal>
                  <Button bg="accent.100" _hover={{ bg: 'accent.50' }}>
                    <Icon as={VscGithubAlt} mr={2} /> Code
                  </Button>
                </Link>

                <Link href="https://www.google.com" isExternal>
                  <Button bg="accent.100" _hover={{ bg: 'accent.50' }}>
                    <ExternalLinkIcon mr={2} /> Preview
                  </Button>
                </Link>
              </ButtonGroup>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>

      <NextLink href="/portfolio" passHref>
        <Flex
          as={Link}
          justify="center"
          mt={8}
          _hover={{ textDecoration: 'none' }}
        >
          <Button bg="accent.100" _hover={{ bg: 'accent.50' }}>
            <Icon as={CgMoreO} mr={2} /> View All
          </Button>
        </Flex>
      </NextLink>
    </Box>
  );
};

export default Portfolio;
