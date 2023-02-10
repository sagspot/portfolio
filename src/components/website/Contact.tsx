import {
  Card,
  CardBody,
  Circle,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';

interface Props {
  content: string;
  href: string;
  icon: any;
}

const ContactCard = ({ content, href, icon }: Props) => {
  return (
    <Card
      as={Link}
      href={href}
      isExternal
      bg={useColorModeValue('red.100', 'blue.700')}
      _hover={{
        textDecoration: 'none',
        shadow: '0 2px 7px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardBody as={HStack}>
        <Circle size={12} mr={2} color="white" bg="accent.100">
          <Icon as={icon} boxSize={5} />
        </Circle>
        <Text>{content}</Text>
      </CardBody>
    </Card>
  );
};

const Contact = () => {
  return (
    <Stack
      as="section"
      id="contact"
      px={[6, 8, 16]}
      py={[4, 6, 16]}
      // bg={useColorModeValue('blackAlpha.50', 'blue.800')}
      spacing={6}
    >
      <Heading as="h2" size="md" textAlign="center">
        Get in Touch
      </Heading>

      <Stack
        direction={['column', 'row']}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <ContactCard
          content="+254 703 215 696"
          href="tel:+254703215696"
          icon={BsTelephoneOutboundFill}
        />
        <ContactCard
          content="hello@sagspot.co.ke"
          href="mailto:hello@sagspot.co.ke"
          icon={MdMarkEmailUnread}
        />
      </Stack>
    </Stack>
  );
};

export default Contact;
