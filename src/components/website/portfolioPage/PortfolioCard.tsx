import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { PortfolioType } from '../../../types';
import Content from './Content';
import ImageBox from './ImageBox';

const PortfolioCard = ({ project }: { project: PortfolioType }) => {
  return (
    <Flex justify="center" align="center">
      <Flex
        direction="column"
        align="center"
        p={6}
        mt={16}
        rounded="base"
        shadow="0 0 8px 1px rgba(0,0,0,0.25)"
        bg={useColorModeValue('white', 'blue.700')}
        role="group"
        maxWidth={['100%', '352px']}
        w="100%"
      >
        <ImageBox src={project.img} alt={project.title} />

        <Content {...project} />
      </Flex>
    </Flex>
  );
};

export default PortfolioCard;
