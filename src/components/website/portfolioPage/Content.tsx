import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
} from '@chakra-ui/react';
import { VscGithubAlt } from 'react-icons/vsc';
import { Portfolio } from '../../../types';

const Content = (props: Portfolio) => {
  return (
    <Flex direction="column" mt={4}>
      <Heading as="h3" size="sm">
        {props.title}
      </Heading>

      <Text mt={1} fontSize="sm">
        {props.description}
      </Text>

      <ButtonGroup spacing={4} mt={4}>
        <Link href={props.github} isExternal>
          <Button
            bg="accent.100"
            _hover={{ bg: 'accent.50' }}
            disabled={!props.github}
          >
            <Icon as={VscGithubAlt} mr={2} /> Code
          </Button>
        </Link>

        <Link href={props.previewUrl} isExternal>
          <Button
            bg="accent.100"
            _hover={{ bg: 'accent.50' }}
            disabled={!props.previewUrl}
          >
            <ExternalLinkIcon mr={2} /> Preview
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

export default Content;
