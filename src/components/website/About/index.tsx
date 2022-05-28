import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import AboutText from './AboutText';
import TechStacks from './TechStacks';

type Props = {};

const About = (props: Props) => {
  return (
    <Box my={[6, 8, 10]} px={[6, 8, 16]} py={[4, 6, 8]} as="section">
      <SimpleGrid columns={[1, null, 2]} spacing={[8, null, 32]}>
        <AboutText />
        <TechStacks />
      </SimpleGrid>
    </Box>
  );
};

export default About;
