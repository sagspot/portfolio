import {
  SimpleGrid,
  Flex,
  Box,
  useColorModeValue as mode,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { PortfolioType } from '../../../types';
import Content from './Content';
import ImageBox from './ImageBox';

interface Props {
  portfolio: PortfolioType[];
}

const PortfolioPageComp = ({ portfolio }: Props) => {
  const [category, setCategory] = React.useState('website');

  const website = portfolio.filter((item) => item.category === 'website');
  const api = portfolio.filter((item) => item.category === 'api');

  let data = website;
  if (category === 'api') data = api;

  return (
    <Box my={8} mx={[2, 16, 8, 16]}>
      <Flex justify="center" align="center" my={4}>
        <ButtonGroup>
          <Button
            variant={category === 'api' ? 'outline' : 'ghost'}
            onClick={() => setCategory('api')}
          >
            API
          </Button>

          <Button
            variant={category === 'website' ? 'outline' : 'ghost'}
            onClick={() => setCategory('website')}
          >
            Website
          </Button>
        </ButtonGroup>
      </Flex>

      <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
        {data.map((project) => (
          <Flex key={project._id} justify="center" align="center">
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
              <ImageBox img={project.img} />

              <Content {...project} />
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PortfolioPageComp;
