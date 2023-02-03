import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { Portfolio } from '../../types';
import Content from './portfolioPage/Content';
import ImageBox from './portfolioPage/ImageBox';

const Portfolio = ({ data }: { data: Portfolio[] }) => {
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
          <Flex justify="center" align="center" key={project._id}>
            <Flex
              direction="column"
              align="center"
              p={6}
              mt={16}
              rounded="base"
              shadow="0 0 8px 1px rgba(0,0,0,0.25)"
              bg={mode('white', 'blue.700')}
              role="group"
              maxWidth={['100%', '352px']}
              w="100%"
            >
              {/* src={urlFor(item)} */}
              <ImageBox src={project.mainImage} alt={project.title} />

              <Content {...project} />
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Portfolio;
