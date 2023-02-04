import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { ISourceOptions } from 'tsparticles-engine';
import particlesConfig from '../../data/particlesConfig.json';
import styles from './Particles.module.css';

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    loadFull(engine);
  }, []);

  // tsParticles.load(particlesInit);

  return (
    <Flex
      as="section"
      id="home"
      w="full"
      h="90vh"
      backgroundImage="url(forest.jpg)"
      backgroundColor={useColorModeValue('brand.100', 'brand.300')}
      backgroundSize="cover"
      backgroundBlendMode="multiply"
      backgroundRepeat="no-repeat"
      position="relative"
    >
      <Particles
        className={styles.particles}
        options={particlesConfig as ISourceOptions}
        init={particlesInit}
      />

      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack maxW="2xl" align="center" spacing={6}>
          <Box
            width={160}
            height={160}
            position="relative"
            rounded="full"
            overflow="hidden"
            border="2px solid"
            borderColor="whiteAlpha.800"
          >
            <Image
              src="/sagala.jpg"
              alt="Oliver Sagala portrait"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Text
            color="white"
            fontWeight={700}
            textAlign="center"
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Hi, I&apos;m Oliver Sagala
          </Text>

          <Text
            lineHeight={1.2}
            textAlign="center"
            color="white"
            textTransform="uppercase"
            fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
          >
            I&apos;m a Software Developer
          </Text>

          <Button
            variant="outline"
            color="white"
            textTransform="uppercase"
            _hover={{ bg: 'white', color: 'accent.100' }}
          >
            More
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
