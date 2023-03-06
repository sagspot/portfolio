import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import Image from 'next/image';
import { TbExternalLink } from 'react-icons/tb';
import { VscGithubAlt } from 'react-icons/vsc';
import { Portfolio } from '../../types';

const Portfolio = ({ data }: { data: Portfolio[] }) => {
  return (
    <Box
      as="section"
      id="portfolio"
      py={[4, 6, 16]}
      bg={mode('blackAlpha.50', 'blue.800')}
    >
      <Container maxW="7xl">
        <Heading as="h2" size="md" textAlign="center">
          My Portfolio
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={8}>
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
                      sizes="(max-width: 352px) 80vw, 352px"
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
                  {!!project.github ? (
                    <Button
                      as={Link}
                      href={project.github}
                      _hover={{ textDecoration: 'none' }}
                      aria-label={`View source code for ${project.title}`}
                      leftIcon={<VscGithubAlt />}
                      isExternal
                    >
                      Code
                    </Button>
                  ) : (
                    <Button
                      _hover={{ textDecoration: 'none' }}
                      isDisabled={!project.github}
                      leftIcon={<VscGithubAlt />}
                    >
                      Code
                    </Button>
                  )}

                  <Button
                    as={Link}
                    href={project.previewUrl}
                    _hover={{ textDecoration: 'none' }}
                    disabled={!project.previewUrl}
                    aria-label={`Preview ${project.title}`}
                    isExternal
                    leftIcon={<TbExternalLink />}
                  >
                    Preview
                  </Button>
                </CardFooter>
              </Card>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Portfolio;
