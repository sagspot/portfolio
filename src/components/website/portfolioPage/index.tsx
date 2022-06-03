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
import PortfolioCard from './PortfolioCard';

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
          <PortfolioCard key={project._id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PortfolioPageComp;
