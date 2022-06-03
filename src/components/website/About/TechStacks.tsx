import { Flex, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { stacks } from '../../../data/stacks';

const TechStacks = () => {
  return (
    <SimpleGrid columns={3} spacing={6}>
      {stacks.map((stack) => (
        <GridItem key={stack.name}>
          <Flex direction="column" align="center" justify="center">
            <Text>{stack.name}</Text>
            <Image
              src={stack.icon}
              alt={stack.name}
              width={50}
              height={50}
              objectFit="contain"
            />
          </Flex>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default TechStacks;
