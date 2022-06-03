import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  ButtonGroup,
  Button,
  Icon,
  Text,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { PortfolioType } from '../../../types';

const Content = (props: PortfolioType) => {
  return (
    <Flex direction="column" mt={4}>
      <Heading as="h3" size="sm">
        {props.title}
      </Heading>

      <Text mt={1} fontSize="sm">
        {props.desc}
      </Text>

      <ButtonGroup spacing={4} mt={4}>
        <Link href={props.source} isExternal>
          <Button
            bg="accent.100"
            _hover={{ bg: 'accent.50' }}
            disabled={!props.source}
          >
            <Icon as={VscGithubAlt} mr={2} /> Code
          </Button>
        </Link>

        <Link href={props.url} isExternal>
          <Button
            bg="accent.100"
            _hover={{ bg: 'accent.50' }}
            disabled={!props.url}
          >
            <ExternalLinkIcon mr={2} /> Preview
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

export default Content;
