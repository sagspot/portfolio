import {
  Card,
  CardBody,
  Circle,
  Container,
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
      bg={useColorModeValue('brand.500', 'brand.700')}
      shadow="lg"
      _hover={{
        textDecoration: 'none',
        shadow: '0 2px 7px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardBody as={HStack}>
        <Circle size={12} mr={2} color="white" bg="brand.600" shadow="md">
          <Icon as={icon} boxSize={5} />
        </Circle>
        <Text color="white">{content}</Text>
      </CardBody>
    </Card>
  );
};

const Contact = () => {
  return (
    <Container as="section" id="contact" maxW="7xl">
      <Stack py={[4, 6, 16]} spacing={6}>
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
    </Container>
  );
};

export default Contact;
