import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import Image from 'next/image';
import { VscGithubAlt } from 'react-icons/vsc';
import { Portfolio } from '../../types';

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
            <Card
              as={Flex}
              p={6}
              mt={16}
              role="group"
              w="100%"
              maxWidth={['100%', '352px']}
              direction="column"
              rounded="xl"
              align="center"
              border="1px solid"
              borderColor={mode('gray.100', 'gray.600')}
              shadow="xl"
              bg={mode('white', 'blue.700')}
            >
              <Card
                w="80%"
                h={135}
                mt="-16"
                rounded="base"
                border="8px solid"
                borderColor={mode('gray.50', 'blue.700')}
                bg={mode('gray.50', 'blue.700')}
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
                    src={project.mainImage || '/no-image.jpg'}
                    alt={project.title || 'Project Image'}
                    fill
                    draggable={false}
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Card>

              <CardBody w="full">
                <Heading as="h3" size="sm">
                  {project.title}
                </Heading>
                <Text mt={1} fontSize="sm">
                  {project.description}
                </Text>
              </CardBody>

              <CardFooter w="full" as={ButtonGroup} justify="space-between">
                <Button
                  as={Link}
                  href={project.github}
                  bg="accent.100"
                  _hover={{ textDecoration: 'none', bg: 'accent.50' }}
                  disabled={!project.github}
                  isExternal
                >
                  <Icon as={VscGithubAlt} mr={2} /> Code
                </Button>

                <Button
                  as={Link}
                  href={project.previewUrl}
                  bg="accent.100"
                  _hover={{ textDecoration: 'none', bg: 'accent.50' }}
                  disabled={!project.previewUrl}
                  isExternal
                >
                  <ExternalLinkIcon mr={2} /> Preview
                </Button>
              </CardFooter>
            </Card>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Portfolio;
