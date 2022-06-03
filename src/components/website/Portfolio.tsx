import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { CgMoreO } from 'react-icons/cg';
import { PortfolioType } from '../../types';
import PortfolioCard from './portfolioPage/PortfolioCard';

const Portfolio = ({ data }: { data: PortfolioType[] }) => {
  return (
    <Box
      as="section"
      id="portfolio"
      px={[6, 8, 16]}
      py={[4, 6, 16]}
      bg={mode('blackAlpha.50', 'blue.800')}
    >
      <Heading as="h2" size="md" textAlign="center">
        My Portfolio
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={8}>
        {data.map((project) => (
          <PortfolioCard project={project} key={project._id} />
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
